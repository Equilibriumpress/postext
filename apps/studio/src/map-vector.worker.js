/* Ported from Equilibriumpress/PagedPress 9ed47d3, vectorPrint.worker.js; bounded print geometry. */
/* Biblio production MVT/PBF reader: no runtime JS CDN.
 * Reads only actual OpenFreeMap vector layers, retains per-feature rings,
 * and renders paths in WebMercator source coordinates. Runs in a Worker.
 * Specification: https://github.com/mapbox/vector-tile-spec/tree/master/2.1
 */
const TYPES=["landcover","landuse","park","water","waterway","building","transportation","transportation_name","place","water_name","waterway_name","poi","mountain_peak"];
const MAX_FEATURES=30000,MAX_VERTICES=400000;
const unzig=n=>(n>>>1)^-(n&1);
class PbfReader{
 constructor(bytes){this.bytes=new Uint8Array(bytes);this.pos=0;this.end=this.bytes.length;}
 varint(){
  let value=0,mul=1,count=0;
  while(this.pos<this.end&&count++<10){
   const b=this.bytes[this.pos++];value+=(b&127)*mul;
   if(!(b&128))return value;
   mul*=128;
  }
  throw Error("Ongeldige PBF-varint");
 }
 slice(){const len=this.varint();if(len<0||this.pos+len>this.end)throw Error("Afgebroken PBF");const out=this.bytes.subarray(this.pos,this.pos+len);this.pos+=len;return out;}
 skip(wire){if(wire===0){this.varint();return;}if(wire===2){this.slice();return;}if(wire===1||wire===5){this.pos+=wire===1?8:4;if(this.pos>this.end)throw Error("Afgebroken PBF-veld");return;}throw Error("Onbekend PBF-veldtype");}
 fields(callback){
  while(this.pos<this.end){
   const k=this.varint(),tag=k>>>3,wire=k&7;
   if(!tag)throw Error("Ongeldig PBF-tag");
   const start=this.pos;
   if(wire===2){const data=this.slice();callback(tag,wire,data);}
   else {this.skip(wire);callback(tag,wire,this.bytes.subarray(start,this.pos));}
  }
 }
}
const decoder=new TextDecoder();
function unpack(bytes){const reader=new PbfReader(bytes);const nums=[];while(reader.pos<reader.end)nums.push(reader.varint());return nums;}
function val(bytes){
 let result="";
 new PbfReader(bytes).fields((tag,wire,data)=>{
  if(tag===1&&wire===2)result=decoder.decode(data);
 });
 return result;
}
function layer(bytes){
 let name="",features=[],keys=[],values=[],extent=4096;
 new PbfReader(bytes).fields((tag,wire,data)=>{
  if(tag===1&&wire===2)name=decoder.decode(data);
  else if(tag===2&&wire===2)features.push(data);
  else if(tag===3&&wire===2)keys.push(decoder.decode(data));
  else if(tag===4&&wire===2)values.push(val(data));
  else if(tag===5&&wire===0)extent=unpack(data)[0]||4096;
 });
 return {name,features,keys,values,extent};
}
function attributes(data,keys,values){
 let type=0,tags=[],geometry=[];
 new PbfReader(data).fields((tag,wire,payload)=>{
  if(tag===2&&wire===2)tags=unpack(payload);
  else if(tag===3&&wire===0)type=unpack(payload)[0];
  else if(tag===4&&wire===2)geometry=unpack(payload);
 });
 let cls="",subclass="",name="",brunnel="";
 for(let i=0;i<tags.length-1;i+=2)if(keys[tags[i]]==="name")name=values[tags[i+1]]||"";
 for(let i=0;i<tags.length-1;i+=2)if(keys[tags[i]]==="class")cls=values[tags[i+1]]||"";
 for(let i=0;i<tags.length-1;i+=2)if(keys[tags[i]]==="subclass")subclass=values[tags[i+1]]||"";
 for(let i=0;i<tags.length-1;i+=2)if(keys[tags[i]]==="brunnel")brunnel=values[tags[i+1]]||"";
 return {type,brunnel,cls:String(cls||subclass).toLowerCase(),subclass:String(subclass).toLowerCase(),
  name:String(name),geometry};
}
function category(layerName,f,z,region,detail=false){
 const c=f.cls,p=f.type,sub=f.subclass;
 if(layerName==="landcover"&&p===3){
  if(!detail)return /wood|forest/.test(c)?"wood":/grass|farmland/.test(c)?"grass":null;
  if(/^(wood|forest)$/.test(c))return "wood";
  if(c==="wetland")return "wetland";
  if(c==="sand")return "sand";
  if(c==="rock")return "rock";
  if(c==="farmland")return "farmland";
  if(c==="grass"&&/^(heath|scrub|shrubbery|fell)$/.test(sub))return "heath";
  return c==="grass"?"grass":null;
 }
 if(layerName==="landuse"&&p===3)return /residential/.test(c)?"residential":null;
 if(layerName==="park"&&p===3)return "park";
 if(layerName==="water"&&p===3)return "water";
 if(layerName==="waterway"&&p===2)return "waterway";
 if(layerName==="building"&&!region&&z>=13&&p===3)return "building";
 if(layerName==="transportation"&&p===2){
  if(/rail/.test(c))return region?null:"rail";
  if(detail&&c==="track")return region?null:"track";
  if((detail?/path|pedestrian|track|footway|cycleway|steps|bridleway/:/path|pedestrian|track|footway|cycleway/).test(c))return region?null:"path";
  if(region&&!/^(motorway|trunk|primary|secondary|tertiary)$/.test(c))return null;
  if(detail&&/^(minor|service|tertiary)$/.test(c))return "minor-road";
  return "road";
 }
 return null;
}
function countGeometryVertices(commands){
 let count=0,pos=0;
 while(pos<commands.length){
  const ins=commands[pos++],cmd=ins&7,n=ins>>>3;
  if(!n||![1,2,7].includes(cmd))throw Error("Ongeldige MVT-geometrie-opdracht");
  if(cmd===7)continue;
  if(pos+n*2>commands.length)throw Error("Onvolledige MVT-positie");
  pos+=n*2;count+=n;
 }
 return count;
}
function decodePath(feature,tile,extent,view,budget){
 const count=countGeometryVertices(feature.geometry);
 if(budget.vertices+count>MAX_VERTICES){budget.omittedFeatures++;return "";}
 budget.vertices+=count;
 const factor=2**tile.z,wx=lon=>(lon+180)/360,wy=lat=>(1-Math.log(Math.tan(Math.PI/4+lat*Math.PI/360))/Math.PI)/2;
 const left=wx(view.west),right=wx(view.east),top=wy(view.north),bottom=wy(view.south);
 let pos=0,x=0,y=0,parts=[],part=[],closed=false;
 const flush=()=>{if(part.length)parts.push({points:part,closed});part=[];closed=false;};
 while(pos<feature.geometry.length){
  const ins=feature.geometry[pos++],cmd=ins&7,n=ins>>>3;
  for(let j=0;j<n;j++){
   if(cmd===7){closed=true;flush();continue;}
   x+=unzig(feature.geometry[pos++]);y+=unzig(feature.geometry[pos++]);
   if(cmd===1)flush();
   part.push([Math.round(((tile.x+x/extent)/factor-left)/(right-left)*view.width),Math.round(((tile.y+y/extent)/factor-top)/(bottom-top)*view.height)]);
  }
 }
 flush();
 if(!parts.length)return "";
 let minX=Infinity,minY=Infinity,maxX=-Infinity,maxY=-Infinity;
 for(const p of parts)for(const [a,b] of p.points){minX=Math.min(minX,a);minY=Math.min(minY,b);maxX=Math.max(maxX,a);maxY=Math.max(maxY,b);}
 if(maxX<0||maxY<0||minX>view.width||minY>view.height)return "";
 const output=[];
 for(const p of parts){
  const keep=[];
  for(const q of p.points){const last=keep[keep.length-1];if(!last||q[0]!==last[0]||q[1]!==last[1])keep.push(q);}
  for(let i=keep.length-2;i>0;i--){
   const a=keep[i-1],b=keep[i],c=keep[i+1],dx=c[0]-a[0],dy=c[1]-a[1],len=dx*dx+dy*dy;
   if(len&&Math.abs(dx*(a[1]-b[1])-dy*(a[0]-b[0]))<=Math.sqrt(len)*0.6&&(b[0]-a[0])*dx+(b[1]-a[1])*dy>=0&&(b[0]-c[0])*dx+(b[1]-c[1])*dy<=0)keep.splice(i,1);
  }
  if(p.closed&&keep.length<3||!p.closed&&feature.type!==1&&keep.length<2)continue;
  output.push(keep.map((q,i)=>(i?"L":"M")+q[0]+" "+q[1]).join("")+(p.closed?"Z":""));
 }
 return output.join("");
}
// City-only street names are anchored to real named transport line segments.
function longestNamedSegment(path){
 const coords=[...path.matchAll(/([ML])(-?\d+(?:\.\d+)?) (-?\d+(?:\.\d+)?)/g)];
 let prev=null,best=null,longest=0;
 for(const [,command,sx,sy] of coords){
  const p={x:Number(sx),y:Number(sy)};
  if(command==='L'&&prev){
   const distance=Math.hypot(p.x-prev.x,p.y-prev.y);
   if(distance>longest){
    best={x:(p.x+prev.x)/2,y:(p.y+prev.y)/2};longest=distance;
   }
  }
  prev=p;
 }
 return longest>=40?best:null;
}
function parseTile(tileBytes,tile,view,region,buckets,stats,labels,detail,roadNames,includeRoadLabels,primaryPass){
 // Read real OpenFreeMap streets/water before dense secondary polygon detail.
 // Run these passes across all tiles, not only inside the first source tile.
 const priority=new Set(["transportation","waterway","water","park"]);
 new PbfReader(tileBytes).fields((tag,wire,payload)=>{
  if(tag!==3||wire!==2)return;
  const l=layer(payload);
  if(!["water","waterway","building","transportation"].includes(l.name)||priority.has(l.name)!==primaryPass)return;
  if(l.extent<1||l.extent>65536)throw Error("Onjuiste PBF-vectorextent");
  for(const bytes of l.features){
   const f=attributes(bytes,l.keys,l.values);
   const place=l.name==="place"&&/^(city|town|village|hamlet)$/.test(f.cls);
   const water=l.name==="water_name"||l.name==="waterway_name";
   const poi=l.name==="poi"&&/^(park|nature_reserve|national_park|museum|attraction|viewpoint)$/.test(f.cls);
   const mountain=detail&&l.name==="mountain_peak"&&/^(peak|ridge|cliff)$/.test(f.cls);
   let streetPath=null;
   if(includeRoadLabels&&f.type===2&&f.name&&f.name.length<=42&&
      roadNames.length<110&&
      /^(primary|secondary|tertiary|trunk|motorway)(?:_|$)/.test(f.cls)&&
      (l.name==="transportation_name"||l.name==="transportation")){
    streetPath=decodePath(f,tile,l.extent,view,stats);
    const location=longestNamedSegment(streetPath);
    if(location&&location.x>=0&&location.x<=view.width&&
       location.y>=0&&location.y<=view.height)
      roadNames.push({...location,text:f.name,role:'road',tier:'street',importance:3});
    if(l.name==="transportation_name")continue;
   }
   if(f.type===1&&f.name&&f.name.length<=48&&labels.length<100&&(place||water||poi||mountain)){
    const path=decodePath(f,tile,l.extent,view,stats);
    const match=/^M(-?[0-9.]+) (-?[0-9.]+)/.exec(path);
    if(match)labels.push({x:Number(match[1]),y:Number(match[2]),text:f.name,
      role:place?"place":water?"water":"landmark",
      tier:place?f.cls:water?"water":"landscape",
      importance:f.cls==="city"?0:f.cls==="town"?1:f.cls==="village"?2:place?3:4});
    continue;
   }
   const type=category(l.name,f,tile.z,region,detail);
   if(!type)continue;
   if(stats.features>=MAX_FEATURES){
    stats.omittedFeatures=(stats.omittedFeatures||0)+1;
    continue;
   }
   const path=streetPath===null?decodePath(f,tile,l.extent,view,stats):streetPath;
   if(path){
    stats.features++;
    stats.byLayer[type]=(stats.byLayer[type]||0)+1;
    buckets[type].push(path);
    if((type==="road"||type==="path")&&f.brunnel==="bridge")buckets.bridge.push(path);
    if(l.name==='waterway'&&f.name&&f.name.length<=42&&labels.length<100){const at=longestNamedSegment(path);if(at&&at.x>=0&&at.x<=view.width&&at.y>=0&&at.y<=view.height)labels.push({...at,text:f.name,role:'water',tier:'water',importance:1});}
    if(type==="road"&&/^(motorway|trunk|primary|secondary)(?:_|$)/.test(f.cls))
      buckets.arterial.push(path);
   }
  }
 });
}
self.addEventListener("message",event=>{
 const {id,tiles,bounds,width,height,region=false,landscapeDetail=false,includeRoadLabels=false}=event.data||{};
 const buckets={wood:[],grass:[],heath:[],wetland:[],sand:[],rock:[],farmland:[],
  residential:[],park:[],water:[],waterway:[],building:[],road:[],
  "minor-road":[],path:[],track:[],rail:[],arterial:[],bridge:[]};
 const stats={features:0,vertices:0,omittedFeatures:0,byLayer:{}};
 const labels=[],roadNames=[];
 try{
  if(typeof includeRoadLabels!=='boolean')throw Error('Invalid city road label option');
  if(!Array.isArray(tiles)||!tiles.length||tiles.length>2||!bounds||
   !Number.isFinite(width)||!Number.isFinite(height))throw Error("Ongeldige vectorbatch");
  const view={...bounds,width,height};
  for(const t of tiles)if(!t.tile||!t.bytes||t.bytes.byteLength>2*1024*1024)
   throw Error("Ongeldige vectortegel");
  for(const primaryPass of [true,false])for(const t of tiles)
   parseTile(t.bytes,t.tile,view,region,buckets,stats,labels,
      landscapeDetail===true,roadNames,includeRoadLabels,primaryPass);
  self.postMessage({id,groups:buckets,stats,
    labels:includeRoadLabels?labels.concat(roadNames):labels});
 }catch(error){self.postMessage({id,error:error instanceof Error?error.message:String(error)})}
});
