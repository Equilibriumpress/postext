/* Studio live BGT maps, resolved into ordinary vector SVG resources before native layout.
 * Local SVG fallback files are always present. No external requests for other books/resources.
 */
(function installMapLoader(scope) {
  'use strict';
  const script = scope.document.currentScript;
  if (!script || !script.src || typeof scope.fetch !== 'function') return;
  const books = new URL('books/', script.src);
  const originalFetch = scope.fetch.bind(scope);
  const api = 'https://api.pdok.nl/kadaster/bgt/ogc/v1/collections/';
  const layers = ['waterdeel','pand','wegdeel','overbruggingsdeel'];
  const palettes = {
    'water-first': { land:'#F1EDE3', water:'#56786B', building:'#C6C3B5', road:'#FFFCF5', bridge:'#B9573D' },
    'figure-ground': { land:'#F1EDE3', water:'#DDE7E1', building:'#222926', road:'#F1EDE3', bridge:'#A7ACA2' },
    'network': { land:'#F1EDE3', water:'#A9C1B7', building:'#D2CABE', road:'#B9573D', bridge:'#713D2D' },
  };
  const cache = new Map();
  const pending = new Map();
  const W = 1200, H = 790;
  const maxBytes = 20*1024*1024;
  function valid(d) {
    if (!d || d.version !== 1 || d.source !== 'pdok-bgt' || !Object.hasOwn(palettes,d.style) ||
        !Array.isArray(d.bbox) || d.bbox.length!==4 || !d.bbox.every(Number.isFinite)) return false;
    const [w,s,e,n] = d.bbox;
    return w>=3 && e<=8 && s>=50 && n<=54 && e>w && n>s && e-w<=.06 && n-s<=.04 &&
      Array.isArray(d.points) && d.points.length<=12 && d.points.every(pt=>Array.isArray(pt)&&pt.length===2&&pt.every(Number.isFinite)&&pt[0]>=w&&pt[0]<=e&&pt[1]>=s&&pt[1]<=n);
  }
  async function json(url,local,deadline) {
    const controller=new AbortController();
    const remaining=deadline-Date.now();
    if(remaining<=0) throw new Error('BGT time budget exceeded');
    const timeout=setTimeout(()=>controller.abort(),Math.min(20000,remaining));
    try {
      const res=await originalFetch(url,{signal:controller.signal,credentials:local?'same-origin':'omit',mode:local?'same-origin':'cors',cache:local?'no-store':'default',headers:{Accept:'application/json, application/geo+json'}});
      if(!res.ok) throw new Error('HTTP '+res.status);
      if(!local && res.url && new URL(res.url).origin!=='https://api.pdok.nl') throw new Error('Unapproved redirect');
      if(Number(res.headers.get('content-length')||0)>maxBytes) throw new Error('Response too large');
      const raw=await res.text();
      if(raw.length>maxBytes) throw new Error('Response too large');
      return JSON.parse(raw);
    } finally { clearTimeout(timeout); }
  }
  async function collection(name,bbox,deadline) {
    const path=api+name+'/items';
    const first=new URL(path);
    first.searchParams.set('bbox',bbox.join(','));
    first.searchParams.set('f','json');
    first.searchParams.set('limit','1000');
    let next=first.href, pages=0, all=[], seen=new Set(), ids=new Set();
    while(next) {
      const u=new URL(next,path);
      if(u.origin!=='https://api.pdok.nl'||u.pathname!==new URL(path).pathname||seen.has(u.href)||++pages>45)
        throw new Error('Invalid or excessive BGT pagination: '+name);
      seen.add(u.href);
      let data;
      try { data=await json(u.href,false,deadline); }
      catch(err) { if(Date.now()+1000>=deadline)throw err; await new Promise(r=>setTimeout(r,350)); data=await json(u.href,false,deadline); }
      if(data.type!=='FeatureCollection'||!Array.isArray(data.features))throw new Error('Invalid GeoJSON '+name);
      for(const f of data.features) {
        if(!f.geometry)continue;
        if(f.id!=null) { const id=String(f.id); if(ids.has(id))continue; ids.add(id); }
        all.push(f.geometry);
      }
      if(all.length>45000)throw new Error('BGT layer too large: '+name);
      const link=(data.links||[]).find(l=>l.rel==='next'&&typeof l.href==='string');
      if(!link && Number.isFinite(data.numberMatched) && data.numberMatched>all.length)
        throw new Error('Incomplete BGT layer '+name);
      next=link?new URL(link.href,u.href).href:null;
    }
    if(!all.length) throw new Error('Empty BGT layer '+name);
    return all;
  }
  function dataset(bbox) {
    const key=bbox.join(',');
    const old=cache.get(key);
    if(old&&Date.now()-old.time<300000)return old.promise;
    const deadline=Date.now()+90000;
    // Two workers share all three style requests; never query the same layer three times.
    let i=0, out={};
    const worker=async()=>{while(i<layers.length){const layer=layers[i++];out[layer]=await collection(layer,bbox,deadline);}};
    const promise=Promise.all([worker(),worker()]).then(()=>out);
    cache.set(key,{time:Date.now(),promise});
    promise.catch(()=>{if(cache.get(key)?.promise===promise)cache.delete(key);});
    // Bound session memory even when many different books are opened.
    if(cache.size>4)cache.delete(cache.keys().next().value);
    return promise;
  }
  function projection(b) {
    const [w,s,e,n]=b, m=111320, lonm=m*Math.cos((s+n)/2*Math.PI/180);
    const spanX=(e-w)*lonm, spanY=(n-s)*m;
    const scale=Math.min(1130/spanX,700/spanY);
    const width=spanX*scale,height=spanY*scale,x=(W-width)/2,y=20+(700-height)/2;
    return {x,y,width,height,scale,xy:pt=>[x+(pt[0]-w)*lonm*scale,y+(n-pt[1])*m*scale]};
  }
  function pathFor(g,project) {
    let polygons=0, lines=0, out='';
    function ring(points,closed) {
      if(!Array.isArray(points)||points.length<(closed?4:2))return '';
      let result='', prior='';
      for(const pt of points) {
        if(!Array.isArray(pt)||!Number.isFinite(pt[0])||!Number.isFinite(pt[1])||Math.abs(pt[0])>180||Math.abs(pt[1])>90)
          throw new Error('Expected CRS84 coordinates');
        const [x,y]=project.xy(pt);
        const v=x.toFixed(1)+' '+y.toFixed(1);
        if(v===prior)continue;
        result+=(result?'L':'M')+v;prior=v;
      }
      return result+(closed?'Z':'');
    }
    function polygon(rings) { const d=rings.map(r=>ring(r,true)).join(''); if(d){out+=d;polygons++;} }
    function line(points){const d=ring(points,false);if(d){out+=d;lines++;}}
    switch(g.type){
      case 'Polygon':polygon(g.coordinates);break;
      case 'MultiPolygon':g.coordinates.forEach(polygon);break;
      case 'LineString':line(g.coordinates);break;
      case 'MultiLineString':g.coordinates.forEach(line);break;
      case 'GeometryCollection':for(const child of g.geometries){const p=pathFor(child,project);out+=p.d;polygons+=p.polygons;lines+=p.lines;}break;
      default:break;
    }
    return {d:out,polygons,lines};
  }
  function render(d,geometries) {
    const p=projection(d.bbox), c=palettes[d.style];
    let inner='',total=0;
    for(const [name,fill] of [['waterdeel',c.water],['wegdeel',c.road],['pand',c.building],['overbruggingsdeel',c.bridge]]) {
      let count=0;
      for(const g of geometries[name]){
        const path=pathFor(g,p);
        if(!path.d)continue;
        // BGT's requested layers represent areas. Do not silently substitute linework.
        if(path.lines&&!path.polygons)continue;
        inner+='<path d="'+path.d+'" fill="'+fill+'" fill-rule="evenodd"/>';
        count+=path.polygons;
        if(inner.length>14*1024*1024)throw new Error('Map SVG size limit');
      }
      if(!count)throw new Error('No polygon geometry for '+name);
      total+=count;
    }
    const dots=d.points.map(pt=>{const[x,y]=p.xy(pt);return '<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="5.5" fill="#222926" stroke="#FFFFFF" stroke-width="2"/>';}).join('');
    const len=500*p.scale;
    const svg='<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="790" viewBox="0 0 1200 790">'+
      '<rect width="1200" height="790" fill="'+c.land+'"/><defs><clipPath id="map-clip"><rect x="'+p.x+'" y="'+p.y+'" width="'+p.width+'" height="'+p.height+'"/></clipPath></defs>'+
      '<g clip-path="url(#map-clip)">'+inner+dots+'</g><rect x="'+p.x+'" y="'+p.y+'" width="'+p.width+'" height="'+p.height+'" fill="none" stroke="#53645F" stroke-width="1"/>'+
      '<g fill="#222926" font-family="sans-serif" font-size="20"><rect x="40" y="738" width="23" height="15" fill="'+c.water+'"/><text x="71" y="752">Water</text>'+
      '<rect x="175" y="738" width="23" height="15" fill="'+c.building+'"/><text x="206" y="752">Buildings</text>'+
      '<rect x="345" y="738" width="23" height="15" fill="'+c.road+'" stroke="#53645F"/><text x="376" y="752">Road areas</text>'+
      '<rect x="525" y="738" width="23" height="15" fill="'+c.bridge+'"/><text x="556" y="752">Bridge parts</text>'+
      '<path d="M800 745h'+len.toFixed(2)+' M800 738v14 M'+(800+len).toFixed(2)+' 738v14" stroke="#222926" stroke-width="2"/><text x="800" y="777">500 m</text>'+
      '<path d="M1155 80V37l-5 10m5-10l5 10" fill="none" stroke="#222926" stroke-width="2"/><text x="1150" y="28">N</text>'+
      '<text x="40" y="778" font-size="16">Source: Kadaster / PDOK BGT · CC0 · '+total+' polygon parts</text></g></svg>';
    return svg;
  }
  async function load(url) {
    const desc=new URL(url);desc.pathname+='.json';desc.search='';desc.hash='';
    const d=await json(desc.href,true,Date.now()+20000);
    if(!valid(d))throw new Error('Invalid BGT map descriptor');
    return render(d,await dataset(d.bbox));
  }
  scope.fetch=function studioMapFetch(input,init) {
    let u;try{u=new URL(typeof input==='string'||input instanceof URL?input:input.url,scope.document.baseURI);}catch{return originalFetch(input,init);}
    const method=(init&&init.method)||(input&&input.method)||'GET';
    if(method.toUpperCase()!=='GET'||u.origin!==books.origin||!u.pathname.startsWith(books.pathname)||
      !/^[a-z0-9][a-z0-9-]*\/resources\/live-maps\/[a-z0-9][a-z0-9-]*\.svg$/i.test(u.pathname.slice(books.pathname.length)))return originalFetch(input,init);
    const key=u.origin+u.pathname;
    let job=pending.get(key);
    if(!job){job=load(key).finally(()=>pending.delete(key));pending.set(key,job);}
    return job.then(svg=>new Response(svg,{status:200,headers:{'Content-Type':'image/svg+xml'}})).catch(err=>{
      console.warn('[Postext BGT] Using marked reserve map',key,err);
      return originalFetch(input,init);
    });
  };
})(window);
