/* Bounded OpenFreeMap maps: PagedPress MVT worker, native Postext SVG. */
(function(scope){
 'use strict';
 const script=scope.document.currentScript;if(!script?.src)return;
 const books=new URL('books/',script.src),workerUrl=new URL('map-vector.worker.js?v=5',script.src),original=scope.fetch.bind(scope);
 const MAX_TILES=6,MAX_TILE=2*1024*1024,MAX_TOTAL=12*1024*1024,MAX_SVG=6*1024*1024,MAX_MS=25000;
 const CACHE='postext-auto-maps-v5',prefix='anatomy-of-a-city-proof/resources/live-maps/', mapIds=['bgt-water','bgt-figure-ground','bgt-movement'];const extraIds=['amsterdam-detail','barcelona-grid','edinburgh-organic'],allIds=mapIds.concat(extraIds);let activeMap=Promise.resolve();const extraPending=new Map();let batchPromise=null;const sessionToken=String(Date.now());
 const styles={'water-first':{paper:'#F1EDE3',water:'#56786B',building:'#C6C3B5',road:'#FFFFFF'},'figure-ground':{paper:'#F1EDE3',water:'#DDE7E1',building:'#222926',road:'#F1EDE3'},network:{paper:'#F1EDE3',water:'#A9C1B7',building:'#D2CABE',road:'#B9573D'}};
 const wx=l=>(l+180)/360,wy=l=>(1-Math.log(Math.tan(Math.PI/4+l*Math.PI/360))/Math.PI)/2;
 function plan(b,maxZoom=14){for(let z=maxZoom;z>=13;z--){const n=2**z,left=Math.floor(wx(b[0])*n),right=Math.floor(wx(b[2])*n),top=Math.floor(wy(b[3])*n),bottom=Math.floor(wy(b[1])*n);if((right-left+1)*(bottom-top+1)>MAX_TILES)continue;const tiles=[];for(let y=top;y<=bottom;y++)for(let x=left;x<=right;x++)tiles.push({z,x,y});return tiles;}throw Error('Map exceeds six tile budget');}
 function valid(d){if(!d||d.version!==2||d.source!=='openfreemap'||!Object.hasOwn(styles,d.style)||typeof d.enabled!=='boolean'||!Array.isArray(d.bbox)||d.bbox.length!==4||!d.bbox.every(Number.isFinite))return false;const[w,s,e,n]=d.bbox;return w>=-180&&e<=180&&s>-85&&n<85&&e>w&&n>s&&Array.isArray(d.points)&&d.points.length<=12&&d.points.every(p=>Array.isArray(p)&&p.length===2&&p.every(Number.isFinite)&&p[0]>=w&&p[0]<=e&&p[1]>=s&&p[1]<=n);}
 async function read(url,max,signal){const res=await original(url,{signal,credentials:'omit',cache:'default'});if(!res.ok)throw Error('HTTP '+res.status);if(Number(res.headers.get('content-length')||0)>max)throw Error('Response over budget');if(!res.body?.getReader){const b=await res.arrayBuffer();if(b.byteLength>max)throw Error('Response over budget');return b;}const reader=res.body.getReader(),chunks=[];let total=0;try{while(true){const{done,value}=await reader.read();if(done)break;total+=value.byteLength;if(total>max){await reader.cancel();throw Error('Response over budget');}chunks.push(value);}}finally{reader.releaseLock();}const b=new Uint8Array(total);let i=0;for(const c of chunks){b.set(c,i);i+=c.byteLength;}return b.buffer;}
 function decode(worker,tile,bytes,bounds,width,height,id,signal){return new Promise((resolve,reject)=>{const cleanup=()=>{worker.onmessage=null;worker.onerror=null;signal.removeEventListener('abort',abort);};const abort=()=>{cleanup();reject(Error('Map deadline exceeded'));};if(signal.aborted){abort();return;}signal.addEventListener('abort',abort,{once:true});worker.onmessage=e=>{if(e.data?.id!==id)return;cleanup();e.data.error?reject(Error(e.data.error)):resolve(e.data);};worker.onerror=e=>{cleanup();reject(Error(e.message||'Vector worker error'));};try{worker.postMessage({id,tiles:[{tile,bytes}],bounds,width,height,region:false,landscapeDetail:false,includeRoadLabels:false},[bytes]);}catch(e){cleanup();reject(e);}});}
 function viewport(b){const ratio=(wx(b[2])-wx(b[0]))/(wy(b[1])-wy(b[3]));const width=Math.round(Math.min(1130,700*ratio)),height=Math.round(width/ratio);return{width,height,x:(1200-width)/2,y:20+(700-height)/2};}
 function render(d,g,v){const c=styles[d.style],b=d.bbox,groups=[];function layer(k,fill,stroke='none',width=0){if(g[k]?.length)groups.push('<g fill="'+fill+'" stroke="'+stroke+'" stroke-width="'+width+'" fill-rule="evenodd" stroke-linejoin="round" stroke-linecap="round">'+g[k].map(path=>'<path d="'+path+'"/>').join('')+'</g>');}
 layer('water',c.water);layer('waterway','none',c.water,1.1);layer('building',c.building);layer('road','none',c.road,d.style==='network'?1.05:1.6);layer('path','none',c.road,d.style==='network'?.45:.7);if(d.style==='network'){layer('arterial','none','#9C412B',2.7);layer('bridge','none','#713D2D',3.4);}
 const xy=([lon,lat])=>[v.width*(wx(lon)-wx(b[0]))/(wx(b[2])-wx(b[0])),v.height*(wy(lat)-wy(b[3]))/(wy(b[1])-wy(b[3]))];
 const dots=d.points.map(p=>{const[x,y]=xy(p);return '<circle cx="'+x.toFixed(1)+'" cy="'+y.toFixed(1)+'" r="5" fill="#222926" stroke="#fff" stroke-width="1.5"/>';}).join('');
 const m=(b[2]-b[0])*111320*Math.cos((b[1]+b[3])*Math.PI/360),len=(d.scaleMeters||500)*v.width/m,building=g.building.length?'Buildings':'Buildings omitted (budget)';
 const svg='<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="790" viewBox="0 0 1200 790"><rect width="1200" height="790" fill="'+c.paper+'"/><defs><clipPath id="map-clip"><rect width="'+v.width+'" height="'+v.height+'"/></clipPath></defs><g transform="translate('+v.x+' '+v.y+')"><g clip-path="url(#map-clip)">'+groups.join('')+dots+'</g><rect width="'+v.width+'" height="'+v.height+'" fill="none" stroke="#53645F"/></g><g font-family="sans-serif" font-size="19" fill="#222926"><rect x="40" y="738" width="23" height="15" fill="'+c.water+'"/><text x="71" y="752">Water</text><rect x="175" y="738" width="23" height="15" fill="'+c.building+'"/><text x="206" y="752">'+building+'</text><path d="M540 745h25" stroke="'+c.road+'" stroke-width="3"/><text x="575" y="752">Streets</text><path d="M800 745h'+len.toFixed(1)+' M800 738v14 M'+(800+len).toFixed(1)+' 738v14" stroke="#222926" stroke-width="2"/><text x="800" y="777">'+(d.scaleMeters||500)+' m</text><text x="40" y="778" font-size="16">© OpenStreetMap contributors · OpenFreeMap · generalized print map</text><text x="1150" y="28">N</text><path d="M1155 80V37l-5 10m5-10l5 10" fill="none" stroke="#222926" stroke-width="2"/></g></svg>';
 if(new TextEncoder().encode(svg).byteLength>MAX_SVG)throw Error('SVG exceeds 500 KiB');return svg;}
 async function loadGeometry(d,signal,report=()=>{}){
  const tiles=plan(d.bbox,d.zoom===15?15:14),v=viewport(d.bbox),[west,south,east,north]=d.bbox;
  const worker=new Worker(workerUrl.href),groups={water:[],waterway:[],building:[],road:[],path:[],arterial:[],bridge:[]};
  let total=0,chars=0;
  try{
   for(let i=0;i<tiles.length;i++){
    const t=tiles[i],url='https://tiles.openfreemap.org/planet/latest/'+t.z+'/'+t.x+'/'+t.y+'.pbf';
    report('Tegel '+(i+1)+'/'+tiles.length+' · '+t.z+'/'+t.x+'/'+t.y);
    let bytes,result;
    try{
     bytes=await read(url,Math.min(MAX_TILE,MAX_TOTAL-total),signal);total+=bytes.byteLength;
     report('Ontvangen: '+bytes.byteLength+' bytes');
     result=await decode(worker,t,bytes,{west,south,east,north},v.width,v.height,i+1,signal);
     report('Decoder: '+JSON.stringify(result.stats));
    }catch(e){throw Error('Tegel '+t.z+'/'+t.x+'/'+t.y+': '+(signal.aborted?'tijdslimiet':String(e.message||e)));}
    if(result.stats?.omittedFeatures)throw Error('Tegel '+t.z+'/'+t.x+'/'+t.y+' overschrijdt decoderbudget; geen gedeeltelijke gebouwenkaart');
    for(const k of Object.keys(groups))for(const path of result.groups?.[k]||[]){
     chars+=path.length+14;if(chars>MAX_SVG-12000)throw Error('Geometriebudget 6 MiB overschreden; geen laag verwijderd');
     groups[k].push(path);
    }
   }
   if((!extraIds.includes(d.id)&&!groups.water.length)||!groups.road.length||!groups.building.length)throw Error('Onvolledige kaart: water, wegen of gebouwen ontbreken');
   report('Bron: '+tiles.length+' tegels, '+total+' bytes; gebouwen '+groups.building.length+'; geometrie '+chars+' tekens');
   return {groups,v};
  }finally{worker.terminate();}
 }
 // One bounded canvas per style, sequentially painted from shared decoded paths.
 // No gigantic SVG image decode, no full-resolution map tile canvas.
 async function paint(d,g,v){
  const c=styles[d.style],b=d.bbox,canvas=document.createElement('canvas');
  canvas.width=1800;canvas.height=1185;
  try{
   const ctx=canvas.getContext('2d',{alpha:false});if(!ctx)throw Error('Canvas niet beschikbaar');
   ctx.scale(1.5,1.5);ctx.fillStyle=c.paper;ctx.fillRect(0,0,1200,790);
   ctx.save();ctx.translate(v.x,v.y);ctx.beginPath();ctx.rect(0,0,v.width,v.height);ctx.clip();
   ctx.lineJoin='round';ctx.lineCap='round';
   function layer(key,fill,stroke,width){
    if(fill)ctx.fillStyle=fill;if(stroke){ctx.strokeStyle=stroke;ctx.lineWidth=width;}
    for(const path of g[key]){const p=new Path2D(path);if(fill)ctx.fill(p,'evenodd');if(stroke)ctx.stroke(p);}
   }
   layer('water',c.water);layer('waterway',null,c.water,1.1);
   if(d.style==='figure-ground'){layer('road',null,c.road,1.6);layer('path',null,c.road,.7);layer('building',c.building);}
   else{layer('building',c.building);layer('road',null,c.road,d.style==='network'?1.05:1.6);layer('path',null,c.road,d.style==='network'?.45:.7);if(d.style==='network'){layer('arterial',null,'#9C412B',2.7);layer('bridge',null,'#713D2D',3.4);}}
   for(const [lon,lat] of d.points){const x=v.width*(wx(lon)-wx(b[0]))/(wx(b[2])-wx(b[0])),y=v.height*(wy(lat)-wy(b[3]))/(wy(b[1])-wy(b[3]));ctx.beginPath();ctx.arc(x,y,5,0,Math.PI*2);ctx.fillStyle='#222926';ctx.fill();ctx.strokeStyle='#FFFFFF';ctx.lineWidth=1.5;ctx.stroke();}
   ctx.restore();ctx.strokeStyle='#53645F';ctx.lineWidth=1;ctx.strokeRect(v.x,v.y,v.width,v.height);
   const line=(x,y,x2,y2,stroke='#222926',width=2)=>{ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x2,y2);ctx.strokeStyle=stroke;ctx.lineWidth=width;ctx.stroke();};
   const txt=(s,x,y,size=19)=>{ctx.font=size+'px sans-serif';ctx.fillStyle='#222926';ctx.fillText(s,x,y);};
   ctx.fillStyle=c.water;ctx.fillRect(40,738,23,15);txt('Water',71,752);
   ctx.fillStyle=c.building;ctx.fillRect(175,738,23,15);txt('Buildings',206,752);
   if(d.style==='network'){line(440,741,463,741,'#9C412B',2.7);txt('Main',468,747,15);line(530,741,553,741,c.road,1.05);txt('Local',558,747,15);line(440,760,463,760,c.road,.45);txt('Paths',468,766,15);line(530,760,553,760,'#713D2D',3.4);txt('Bridge',558,766,15);}else{line(540,745,565,745,c.road,3);txt('Streets',575,752);}
   const len=(d.scaleMeters||500)*v.width/((b[2]-b[0])*111320*Math.cos((b[1]+b[3])*Math.PI/360));
   line(800,745,800+len,745);line(800,738,800,752);line(800+len,738,800+len,752);txt((d.scaleMeters||500)+' m',800,777);
   txt('© OpenStreetMap contributors · OpenFreeMap · generalized print map',40,778,16);
   txt('N',1150,28);line(1155,80,1155,37);line(1155,37,1150,47);line(1155,37,1160,47);
   const png=canvas.toDataURL('image/png');
   if(!png.startsWith('data:image/png;base64,')||png.length>3500000)throw Error('Kaart-PNG buiten budget');
   return '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="790" viewBox="0 0 1200 790"><image x="0" y="0" width="1200" height="790" href="'+png+'"/></svg>';
  }finally{canvas.width=canvas.height=1;}
 }
 // A bounded PNG embedded in an otherwise simple SVG uses Postext's native
 // SVG image XObject path, without requiring SVG text fonts at 600 dpi.
 // Original vector markup is kept separately in browser cache.
 const cacheKey=(key,suffix)=>key+'?prepared-v5='+suffix;
 function safeKey(id){if(!allIds.includes(id))throw Error('Onbekende kaart');return new URL(prefix+id+'.svg',books).href;}
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
 async function descriptor(key,signal){const d=JSON.parse(new TextDecoder().decode(await read(key+'.json',16384,signal)));if(!valid(d))throw Error('Ongeldige kaartdescriptor');d.id=key.slice(key.lastIndexOf('/')+1,-4);return d;}
 async function openCache(){try{return await caches.open(CACHE);}catch{return null;}}
 async function batch(report=()=>{}){
  const c=new AbortController(),timer=setTimeout(()=>c.abort(),MAX_MS),start=Date.now(),cache=await openCache();
  const maps={},errors={};
  try{
   const ds=await Promise.all(mapIds.map(id=>descriptor(safeKey(id),c.signal)));
   const bbox=JSON.stringify(ds[0].bbox);if(ds.some(d=>JSON.stringify(d.bbox)!==bbox))throw Error('Kaartuitsneden verschillen');
   const {groups,v}=await loadGeometry(ds[0],c.signal,report);
   for(let i=0;i<mapIds.length;i++){
    const id=mapIds[i],key=safeKey(id);
    try{
     if(c.signal.aborted)throw Error('Kaarttijdslimiet');
     // Keep source vector separately from the print image where local storage is available.
     const wrapped=await paint(ds[i],groups,v);
     maps[id]=wrapped;
     if(cache){try{const svg=render(ds[i],groups,v);await cache.put(cacheKey(key,'vector'),new Response(svg,{headers:{'Content-Type':'image/svg+xml'}}));await cache.put(cacheKey(key,'image'),new Response(wrapped,{headers:{'Content-Type':'image/svg+xml'}}));await cache.delete(cacheKey(key,'error'));}catch(e){report('Cache: '+String(e));}}
     report(id+' gereed · '+wrapped.length+' tekens');
     // Let the browser process UI events between the three bounded canvases.
     await new Promise(resolve=>setTimeout(resolve,0));
    }catch(e){errors[id]=String(e.message||e).slice(0,180);report(id+' MISLUKT: '+errors[id]);}
   }
  }catch(e){for(const id of mapIds)errors[id]=String(e.message||e).slice(0,180);report('Kaartgroep MISLUKT: '+String(e.message||e));}
  finally{
   clearTimeout(timer);
   if(cache){try{for(const id of Object.keys(errors))await cache.put(cacheKey(safeKey(id),'error'),new Response(errors[id]));if(Object.keys(maps).length===mapIds.length)await cache.put(new URL('map-preparation-revision',books).href,new Response(String(Date.now())));}catch{}}
   report('Kaartgroep · '+Math.round((Date.now()-start)/100)/10+' s');
  }
  return {maps,errors};
 }
 function getBatch(report){if(!batchPromise){batchPromise=activeMap.then(()=>batch(report||((s)=>console.info('[Postext map]',s))));activeMap=batchPromise.then(()=>undefined,()=>undefined);}return batchPromise;}
 scope.postextMapPreparation={
  prepare:async(id,report)=>{safeKey(id);batchPromise=null;const out=await getBatch(report);if(!out.maps[id])throw Error(out.errors[id]||'Kaart niet beschikbaar');return out.maps[id];},
  status:async id=>{const cache=await openCache(),key=safeKey(id);return{ready:!!(cache&&await cache.match(cacheKey(key,'image'))),error:cache?await(await cache.match(cacheKey(key,'error')))?.text()||'':''};}
 };

 async function extraMap(id){
  if(extraPending.has(id))return extraPending.get(id);
  // Keep the successful shared Amsterdam batch unchanged and release its
  // geometry before starting each new extent. Only one worker at a time.
  const overview=getBatch();
  const task=activeMap.then(async()=>{
   const key=safeKey(id),cache=await openCache(),c=new AbortController(),timer=setTimeout(()=>c.abort(),MAX_MS);
   try{
    const hit=cache&&await cache.match(cacheKey(key,'image'));if(hit)return hit;
    const d=await descriptor(key,c.signal),{groups,v}=await loadGeometry(d,c.signal,s=>console.info('[Postext map '+id+']',s));
    const wrapped=await paint(d,groups,v);
    if(cache)try{await cache.put(cacheKey(key,'image'),new Response(wrapped,{headers:{'Content-Type':'image/svg+xml'}}));await cache.put(cacheKey(key,'vector'),new Response(render(d,groups,v),{headers:{'Content-Type':'image/svg+xml'}}));await cache.delete(cacheKey(key,'error'));}catch{}
    return new Response(wrapped,{headers:{'Content-Type':'image/svg+xml'}});
   }finally{clearTimeout(timer);}
  });
  activeMap=task.then(()=>undefined,()=>undefined);extraPending.set(id,task);task.finally(()=>extraPending.delete(id)).catch(()=>{});
  return task.then(res=>res.clone());
 }

 const isMap=u=>u.origin===books.origin&&u.pathname.startsWith(books.pathname)&&allIds.some(id=>u.pathname.slice(books.pathname.length)===prefix+id+'.svg');
 async function preparedResource(key,input,init){
  const id=key.slice(key.lastIndexOf('/')+1,-4);
  let reason='Automatische kaartgeneratie mislukt';
  try{
   const cache=await openCache(),hit=cache&&await cache.match(cacheKey(key,'image'));
   if(hit)return hit;
   if(extraIds.includes(id))return await extraMap(id);
   const out=await getBatch();
   if(out.maps[id])return new Response(out.maps[id],{headers:{'Content-Type':'image/svg+xml'}});
   if(out.errors[id])reason=out.errors[id].slice(0,120);
  }catch(e){reason=String(e.message||e).slice(0,120);}
  const local=await original(input,init);
  if(!local.ok)return local;
  let svg=await local.text();
  svg=svg.replace(/<text x="58" y="54"[^>]*>[^<]*<\/text>/,'<text x="58" y="54" font-size="20">RESERVE MAP — GENERATION FAILED</text>').replace(/<text x="58" y="79"[^>]*>[^<]*<\/text>/,'<text x="58" y="79" font-size="15">'+escape(reason)+'</text>');
  try{return new Response(await wrap(svg),{headers:{'Content-Type':'image/svg+xml'}});}
  catch(e){console.warn('[Postext map] reserve bitmap failed',String(e));return new Response(svg,{headers:{'Content-Type':'image/svg+xml'}});}
 }
 // Automatically resolve all three plates during the native resource-loading phase.
 // The book fingerprint incorporates the locally prepared map revision.
 const fpPath=new URL('anatomy-of-a-city-proof/fingerprint.json',books).pathname;
 scope.fetch=function(input,init){
  let u;try{u=new URL(typeof input==='string'||input instanceof URL?input:input.url,document.baseURI);}catch{return original(input,init);}
  if(((init&&init.method)||(input&&input.method)||'GET').toUpperCase()!=='GET')return original(input,init);
  if(isMap(u))return preparedResource(u.origin+u.pathname,input,init);
  if(u.origin===books.origin&&u.pathname===fpPath)return original(input,init).then(async res=>{
   if(!res.ok)return res;
   try{const data=await res.clone().json(),cache=await caches.open(CACHE),revision=await cache.match(new URL('map-preparation-revision',books).href);
    return new Response(JSON.stringify({...data,fingerprint:data.fingerprint+'-v5-'+(revision?await revision.text():sessionToken)}),{headers:{'Content-Type':'application/json'}});
   }catch{}return res;
  });
  return original(input,init);
 };
})(window);
