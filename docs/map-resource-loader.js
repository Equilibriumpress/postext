/* Bounded OpenFreeMap maps: PagedPress MVT worker, native Postext SVG. */
(function(scope){
 'use strict';
 const script=scope.document.currentScript;if(!script?.src)return;
 const books=new URL('books/',script.src),workerUrl=new URL('map-vector.worker.js?v=3',script.src),original=scope.fetch.bind(scope);
 const MAX_TILES=6,MAX_TILE=768*1024,MAX_TOTAL=3*1024*1024,MAX_SVG=500*1024,MAX_MS=25000;
 const CACHE='postext-prepared-maps-v3',prefix='anatomy-of-a-city-proof/resources/live-maps/', mapIds=['bgt-water','bgt-figure-ground','bgt-movement'];let activeMap=Promise.resolve();
 const styles={'water-first':{paper:'#F1EDE3',water:'#56786B',building:'#C6C3B5',road:'#FFFFFF'},'figure-ground':{paper:'#F1EDE3',water:'#DDE7E1',building:'#222926',road:'#F1EDE3'},network:{paper:'#F1EDE3',water:'#A9C1B7',building:'#D2CABE',road:'#B9573D'}};
 const wx=l=>(l+180)/360,wy=l=>(1-Math.log(Math.tan(Math.PI/4+l*Math.PI/360))/Math.PI)/2;
 function plan(b){for(let z=14;z>=13;z--){const n=2**z,left=Math.floor(wx(b[0])*n),right=Math.floor(wx(b[2])*n),top=Math.floor(wy(b[3])*n),bottom=Math.floor(wy(b[1])*n);if((right-left+1)*(bottom-top+1)>MAX_TILES)continue;const tiles=[];for(let y=top;y<=bottom;y++)for(let x=left;x<=right;x++)tiles.push({z,x,y});return tiles;}throw Error('Map exceeds six tile budget');}
 function valid(d){if(!d||d.version!==2||d.source!=='openfreemap'||!Object.hasOwn(styles,d.style)||typeof d.enabled!=='boolean'||!Array.isArray(d.bbox)||d.bbox.length!==4||!d.bbox.every(Number.isFinite))return false;const[w,s,e,n]=d.bbox;return w>=-180&&e<=180&&s>-85&&n<85&&e>w&&n>s&&Array.isArray(d.points)&&d.points.length<=12&&d.points.every(p=>Array.isArray(p)&&p.length===2&&p.every(Number.isFinite)&&p[0]>=w&&p[0]<=e&&p[1]>=s&&p[1]<=n);}
 async function read(url,max,signal){const res=await original(url,{signal,credentials:'omit',cache:'default'});if(!res.ok)throw Error('HTTP '+res.status);if(Number(res.headers.get('content-length')||0)>max)throw Error('Response over budget');if(!res.body?.getReader){const b=await res.arrayBuffer();if(b.byteLength>max)throw Error('Response over budget');return b;}const reader=res.body.getReader(),chunks=[];let total=0;try{while(true){const{done,value}=await reader.read();if(done)break;total+=value.byteLength;if(total>max){await reader.cancel();throw Error('Response over budget');}chunks.push(value);}}finally{reader.releaseLock();}const b=new Uint8Array(total);let i=0;for(const c of chunks){b.set(c,i);i+=c.byteLength;}return b.buffer;}
 function decode(worker,tile,bytes,bounds,width,height,id,signal){return new Promise((resolve,reject)=>{const cleanup=()=>{worker.onmessage=null;worker.onerror=null;signal.removeEventListener('abort',abort);};const abort=()=>{cleanup();reject(Error('Map deadline exceeded'));};if(signal.aborted){abort();return;}signal.addEventListener('abort',abort,{once:true});worker.onmessage=e=>{if(e.data?.id!==id)return;cleanup();e.data.error?reject(Error(e.data.error)):resolve(e.data);};worker.onerror=e=>{cleanup();reject(Error(e.message||'Vector worker error'));};try{worker.postMessage({id,tiles:[{tile,bytes}],bounds,width,height,region:false,landscapeDetail:false,includeRoadLabels:false},[bytes]);}catch(e){cleanup();reject(e);}});}
 function viewport(b){const ratio=(wx(b[2])-wx(b[0]))/(wy(b[1])-wy(b[3]));const width=Math.round(Math.min(1130,700*ratio)),height=Math.round(width/ratio);return{width,height,x:(1200-width)/2,y:20+(700-height)/2};}
 function render(d,g,v){const c=styles[d.style],b=d.bbox,groups=[];function layer(k,fill,stroke='none',width=0){if(g[k]?.length)groups.push('<g fill="'+fill+'" stroke="'+stroke+'" stroke-width="'+width+'" fill-rule="evenodd" stroke-linejoin="round" stroke-linecap="round">'+g[k].map(path=>'<path d="'+path+'"/>').join('')+'</g>');}
 layer('water',c.water);layer('waterway','none',c.water,1.1);layer('building',c.building);layer('road','none',c.road,1.6);layer('path','none',c.road,.7);
 const xy=([lon,lat])=>[v.width*(wx(lon)-wx(b[0]))/(wx(b[2])-wx(b[0])),v.height*(wy(lat)-wy(b[3]))/(wy(b[1])-wy(b[3]))];
 const dots=d.points.map(p=>{const[x,y]=xy(p);return '<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="5" fill="#222926" stroke="#fff" stroke-width="1.5"/>';}).join('');
 const m=(b[2]-b[0])*111320*Math.cos((b[1]+b[3])*Math.PI/360),len=500*v.width/m,building=g.building.length?'Buildings':'Buildings omitted (budget)';
 const svg='<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="790" viewBox="0 0 1200 790"><rect width="1200" height="790" fill="'+c.paper+'"/><defs><clipPath id="map-clip"><rect width="'+v.width+'" height="'+v.height+'"/></clipPath></defs><g transform="translate('+v.x+' '+v.y+')"><g clip-path="url(#map-clip)">'+groups.join('')+dots+'</g><rect width="'+v.width+'" height="'+v.height+'" fill="none" stroke="#53645F"/></g><g font-family="sans-serif" font-size="19" fill="#222926"><rect x="40" y="738" width="23" height="15" fill="'+c.water+'"/><text x="71" y="752">Water</text><rect x="175" y="738" width="23" height="15" fill="'+c.building+'"/><text x="206" y="752">'+building+'</text><path d="M540 745h25" stroke="'+c.road+'" stroke-width="3"/><text x="575" y="752">Streets</text><path d="M800 745h'+len.toFixed(1)+' M800 738v14 M'+(800+len).toFixed(1)+' 738v14" stroke="#222926" stroke-width="2"/><text x="800" y="777">500 m</text><text x="40" y="778" font-size="16">© OpenStreetMap contributors · OpenFreeMap · generalized print map</text><text x="1150" y="28">N</text><path d="M1155 80V37l-5 10m5-10l5 10" fill="none" stroke="#222926" stroke-width="2"/></g></svg>';
 if(new TextEncoder().encode(svg).byteLength>MAX_SVG)throw Error('SVG exceeds 500 KiB');return svg;}
 async function load(d,signal,report=()=>{}){const tiles=plan(d.bbox),v=viewport(d.bbox),[west,south,east,north]=d.bbox,worker=new Worker(workerUrl.href),groups={water:[],waterway:[],building:[],road:[],path:[]};let total=0,chars=0,buildingChars=0,dropBuildings=false;try{for(let i=0;i<tiles.length;i++){const t=tiles[i],url='https://tiles.openfreemap.org/planet/latest/'+t.z+'/'+t.x+'/'+t.y+'.pbf';report('Tegel '+(i+1)+'/'+tiles.length+' · '+t.z+'/'+t.x+'/'+t.y);
    let bytes,result;try{bytes=await read(url,Math.min(MAX_TILE,MAX_TOTAL-total),signal);total+=bytes.byteLength;report('Ontvangen: '+bytes.byteLength+' bytes');result=await decode(worker,t,bytes,{west,south,east,north},v.width,v.height,i+1,signal);report('Decoder: '+JSON.stringify(result.stats));}catch(e){throw Error('Tegel '+t.z+'/'+t.x+'/'+t.y+': '+(signal.aborted?'tijdslimiet':String(e.message||e)));}if(result.stats?.omittedFeatures)throw Error('Tegel '+t.z+'/'+t.x+'/'+t.y+' overschrijdt geometriebudget: '+result.stats.omittedFeatures+' objecten niet verwerkt');for(const k of Object.keys(groups)){for(const path of result.groups?.[k]||[]){if(k==='building'){if(dropBuildings)continue;buildingChars+=path.length+14;if(buildingChars>220000){groups.building.length=0;dropBuildings=true;continue;}}else{chars+=path.length+14;if(chars>250000)throw Error('Hoofdgeometrie groter dan 250000 tekens; '+chars+' tekens');}groups[k].push(path);}}}if(!groups.water.length||!groups.road.length)throw Error('Incomplete water/street map');if(d.style==='figure-ground'&&!groups.building.length)throw Error('Building layer exceeds budget');report('Bron: '+tiles.length+' tegels, '+total+' bytes; gebouwen '+(dropBuildings?'weggelaten wegens budget':groups.building.length));return render(d,groups,v);}finally{worker.terminate();}}

 // A bounded PNG embedded in an otherwise simple SVG uses Postext's native
 // SVG image XObject path, without requiring SVG text fonts at 600 dpi.
 // Original vector markup is kept separately in browser cache.
 const cacheKey=(key,suffix)=>key+'?prepared-v3='+suffix;
 function safeKey(id){if(!mapIds.includes(id))throw Error('Onbekende kaart');return new URL(prefix+id+'.svg',books).href;}
 const escape=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
 async function wrap(svg){
  if(typeof svg!=='string'||svg.length>MAX_SVG||!svg.startsWith('<svg'))throw Error('SVG buiten budget');
  const source=URL.createObjectURL(new Blob([svg],{type:'image/svg+xml'}));
  const image=new Image(),canvas=document.createElement('canvas');
  canvas.width=1800;canvas.height=1185;
  let timer;
  try{
   await new Promise((resolve,reject)=>{timer=setTimeout(()=>reject(Error('Kaartafbeelding decode-timeout')),5000);image.onload=resolve;image.onerror=()=>reject(Error('Kaartafbeelding kon niet worden gedecodeerd'));image.src=source;});
   const ctx=canvas.getContext('2d',{alpha:false});if(!ctx)throw Error('Canvas niet beschikbaar');
   ctx.fillStyle='#F1EDE3';ctx.fillRect(0,0,1800,1185);ctx.drawImage(image,0,0,1800,1185);
   const png=canvas.toDataURL('image/png');
   if(png.length>3500000)throw Error('Kaart-PNG buiten budget');
   return '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="790" viewBox="0 0 1200 790"><image x="0" y="0" width="1200" height="790" href="'+png+'"/></svg>';
  }finally{clearTimeout(timer);image.src='';URL.revokeObjectURL(source);canvas.width=canvas.height=1;}
 }
 async function descriptor(key,signal){const d=JSON.parse(new TextDecoder().decode(await read(key+'.json',16384,signal)));if(!valid(d))throw Error('Ongeldige kaartdescriptor');return d;}
 async function prepare(id,report=()=>{}){
  const key=safeKey(id),start=Date.now(),c=new AbortController(),timer=setTimeout(()=>c.abort(),MAX_MS);
  const cache=await caches.open(CACHE);
  try{
   if(id!=='bgt-water'&&!await cache.match(cacheKey(safeKey('bgt-water'),'image')))throw Error('Bereid eerst Water structure succesvol voor');
   const d=await descriptor(key,c.signal);
   const svg=await load(d,c.signal,report);
   const wrapped=await wrap(svg);
   // Only publish a complete prepared map after the source and bitmap succeed.
   await cache.put(cacheKey(key,'vector'),new Response(svg,{headers:{'Content-Type':'image/svg+xml'}}));
   await cache.put(cacheKey(key,'image'),new Response(wrapped,{headers:{'Content-Type':'image/svg+xml'}}));
   await cache.delete(cacheKey(key,'error'));
   await cache.put(new URL('map-preparation-revision',books).href,new Response(String(Date.now())));
   report('GEREED · '+Math.round((Date.now()-start)/1000)+' s · vector '+new TextEncoder().encode(svg).byteLength+' bytes');
   return svg;
  }catch(e){
   const reason=String(e?.message||e).slice(0,180);
   await cache.put(cacheKey(key,'error'),new Response(reason));
   throw Error(reason);
  }finally{clearTimeout(timer);}
 }
 scope.postextMapPreparation={
  prepare:(id,report)=>{const task=activeMap.then(()=>prepare(id,report));activeMap=task.then(()=>undefined,()=>undefined);return task;},
  status:async id=>{const cache=await caches.open(CACHE),key=safeKey(id);return{ready:!!await cache.match(cacheKey(key,'image')),error:await(await cache.match(cacheKey(key,'error')))?.text()||''};}
 };
 const isMap=u=>u.origin===books.origin&&u.pathname.startsWith(books.pathname)&&mapIds.some(id=>u.pathname.slice(books.pathname.length)===prefix+id+'.svg');
 async function preparedResource(key,input,init){
  let reason='NOT PREPARED — open the map preparation page';
  try{
   const cache=await caches.open(CACHE),hit=await cache.match(cacheKey(key,'image'));
   if(hit)return hit;
   const err=await cache.match(cacheKey(key,'error'));if(err)reason=(await err.text()).slice(0,120);
  }catch(e){reason='BROWSER CACHE UNAVAILABLE';}
  const local=await original(input,init);
  if(!local.ok)return local;
  let svg=await local.text();
  svg=svg.replace(/<text x="58" y="54"[^>]*>[^<]*<\/text>/,'<text x="58" y="54" font-size="20">RESERVE MAP — NOT PREPARED</text>').replace(/<text x="58" y="79"[^>]*>[^<]*<\/text>/,'<text x="58" y="79" font-size="15">'+escape(reason)+'</text>');
  try{return new Response(await wrap(svg),{headers:{'Content-Type':'image/svg+xml'}});}
  catch(e){console.warn('[Postext map] reserve bitmap failed',String(e));return new Response(svg,{headers:{'Content-Type':'image/svg+xml'}});}
 }
 // No external tile requests during ordinary book opening.
 // The book fingerprint incorporates the locally prepared map revision.
 const fpPath=new URL('anatomy-of-a-city-proof/fingerprint.json',books).pathname;
 scope.fetch=function(input,init){
  let u;try{u=new URL(typeof input==='string'||input instanceof URL?input:input.url,document.baseURI);}catch{return original(input,init);}
  if(((init&&init.method)||(input&&input.method)||'GET').toUpperCase()!=='GET')return original(input,init);
  if(isMap(u))return preparedResource(u.origin+u.pathname,input,init);
  if(u.origin===books.origin&&u.pathname===fpPath)return original(input,init).then(async res=>{
   if(!res.ok)return res;
   try{const data=await res.clone().json(),cache=await caches.open(CACHE),revision=await cache.match(new URL('map-preparation-revision',books).href);
    if(revision)return new Response(JSON.stringify({...data,fingerprint:data.fingerprint+'-'+await revision.text()}),{headers:{'Content-Type':'application/json'}});
   }catch{}return res;
  });
  return original(input,init);
 };
})(window);
