import{i0 as Ah,i1 as Zn,i2 as Ch,ey as Rh,i3 as Ph,i4 as xc,i5 as Lh,ex as Dh,i6 as _c,i7 as Ih,hZ as Uh,h$ as Nh,F as Fh,E as Oh,i8 as Bh,i9 as Mc,ia as kh}from"./index-DyS6HZDo.js";const io="186",zh=0,Xo=1,Hh=2,ji=1,Vh=2,Ki=3,Jn=0,zt=1,Qt=2,mn=0,wi=1,qo=2,Yo=3,Ko=4,so=5,_i=100,Gh=101,Wh=102,Xh=103,sa=104,qh=200,ra=201,Yh=202,Kh=203,Sc=204,yc=205,Zh=206,Jh=207,Qh=208,jh=209,$h=210,eu=211,tu=212,bc=213,wc=214,aa=0,oa=1,la=2,ns=3,ca=4,ha=5,ua=6,fa=7,Ec=0,nu=1,iu=2,gn=0,ro=1,ao=2,oo=3,lo=4,co=5,ho=6,ar=7,Tc=300,Qn=301,Ri=302,fr=303,dr=304,or=306,is=1e3,Tn=1001,da=1002,St=1003,su=1004,vs=1005,Ye=1006,pr=1007,qt=1008,Ct=1009,Ac=1010,Cc=1011,ss=1012,uo=1013,xn=1014,dn=1015,yt=1016,fo=1017,po=1018,rs=1020,Rc=35902,Pc=35899,Lc=1021,Dc=1022,kt=1023,Rn=1026,Kn=1027,Ic=1028,mo=1029,jn=1030,go=1031,vo=1033,Ws=33776,Xs=33777,qs=33778,Ys=33779,pa=35840,ma=35841,ga=35842,va=35843,xa=36196,_a=37492,Ma=37496,Sa=37488,ya=37489,$s=37490,ba=37491,wa=37808,Ea=37809,Ta=37810,Aa=37811,Ca=37812,Ra=37813,Pa=37814,La=37815,Da=37816,Ia=37817,Ua=37818,Na=37819,Fa=37820,Oa=37821,Ba=36492,ka=36494,za=36495,Ha=36283,Va=36284,er=36285,Ga=36286,ru=3200,au=3201,Wa=0,ou=1,fn="",pt="srgb",tr="srgb-linear",nr="linear",et="srgb",mr=7680,lu=519,cu=512,hu=513,uu=514,xo=515,fu=516,du=517,_o=518,pu=519,mu=35044,Zo="300 es",pn=2e3,as=2001;function gu(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function os(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function vu(){const i=os("canvas");return i.style.display="block",i}const Jo={};function Qo(...i){const e="THREE."+i.shift();console.log(e,...i)}function Uc(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function Be(...i){i=Uc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Je(...i){i=Uc(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ei(...i){const e=i.join(" ");e in Jo||(Jo[e]=!0,Be(...i))}function xu(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}const _u={[aa]:oa,[la]:ua,[ca]:fa,[ns]:ha,[oa]:aa,[ua]:la,[fa]:ca,[ha]:ns};class ei{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const s=n[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,e);e.target=null}}}const Dt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],gr=Math.PI/180,Xa=180/Math.PI;function fs(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dt[i&255]+Dt[i>>8&255]+Dt[i>>16&255]+Dt[i>>24&255]+"-"+Dt[e&255]+Dt[e>>8&255]+"-"+Dt[e>>16&15|64]+Dt[e>>24&255]+"-"+Dt[t&63|128]+Dt[t>>8&255]+"-"+Dt[t>>16&255]+Dt[t>>24&255]+Dt[n&255]+Dt[n>>8&255]+Dt[n>>16&255]+Dt[n>>24&255]).toLowerCase()}function qe(i,e,t){return Math.max(e,Math.min(t,i))}function Mu(i,e){return(i%e+e)%e}function vr(i,e,t){return(1-t)*i+t*e}function Fi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class Ne{static{Ne.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,a=this.y-e.y;return this.x=r*n-a*s+e.x,this.y=r*s+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Di{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,a,o){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3],f=r[a+0],p=r[a+1],m=r[a+2],x=r[a+3];if(u!==x||l!==f||c!==p||h!==m){let g=l*f+c*p+h*m+u*x;g<0&&(f=-f,p=-p,m=-m,x=-x,g=-g);let d=1-o;if(g<.9995){const w=Math.acos(g),E=Math.sin(w);d=Math.sin(d*w)/E,o=Math.sin(o*w)/E,l=l*d+f*o,c=c*d+p*o,h=h*d+m*o,u=u*d+x*o}else{l=l*d+f*o,c=c*d+p*o,h=h*d+m*o,u=u*d+x*o;const w=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=w,c*=w,h*=w,u*=w}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,a){const o=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[a],f=r[a+1],p=r[a+2],m=r[a+3];return e[t]=o*m+h*u+l*p-c*f,e[t+1]=l*m+h*f+c*u-o*p,e[t+2]=c*m+h*p+o*f-l*u,e[t+3]=h*m-o*u-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),h=o(s/2),u=o(r/2),f=l(n/2),p=l(s/2),m=l(r/2);switch(a){case"XYZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"YXZ":this._x=f*h*u+c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"ZXY":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u-f*p*m;break;case"ZYX":this._x=f*h*u-c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u+f*p*m;break;case"YZX":this._x=f*h*u+c*p*m,this._y=c*p*u+f*h*m,this._z=c*h*m-f*p*u,this._w=c*h*u-f*p*m;break;case"XZY":this._x=f*h*u-c*p*m,this._y=c*p*u-f*h*m,this._z=c*h*m+f*p*u,this._w=c*h*u+f*p*m;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],u=t[10],f=n+o+u;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(a-s)*p}else if(n>o&&n>u){const p=2*Math.sqrt(1+n-o-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+a)/p,this._z=(r+c)/p}else if(o>u){const p=2*Math.sqrt(1+o-n-u);this._w=(r-c)/p,this._x=(s+a)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-o);this._w=(a-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-n*c,this._z=r*h+a*c+n*l-s*o,this._w=a*h-n*o-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){let n=e._x,s=e._y,r=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,s=-s,r=-r,a=-a,o=-o);let l=1-t;if(o<.9995){const c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+n*t,this._y=this._y*l+s*t,this._z=this._z*l+r*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{static{G.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(jo.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(jo.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,a=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*a,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*a,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*s-o*n),h=2*(o*t-r*s),u=2*(r*n-a*t);return this.x=t+l*c+a*u-o*h,this.y=n+l*h+o*c-r*u,this.z=s+l*u+r*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,a=t.x,o=t.y,l=t.z;return this.x=s*l-r*o,this.y=r*a-n*l,this.z=n*o-s*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return xr.copy(this).projectOnVector(e),this.sub(xr)}reflect(e){return this.sub(xr.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(qe(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const xr=new G,jo=new Di;class ke{static{ke.prototype.isMatrix3=!0}constructor(e,t,n,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c)}set(e,t,n,s,r,a,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],h=n[4],u=n[7],f=n[2],p=n[5],m=n[8],x=s[0],g=s[3],d=s[6],w=s[1],E=s[4],_=s[7],M=s[2],b=s[5],A=s[8];return r[0]=a*x+o*w+l*M,r[3]=a*g+o*E+l*b,r[6]=a*d+o*_+l*A,r[1]=c*x+h*w+u*M,r[4]=c*g+h*E+u*b,r[7]=c*d+h*_+u*A,r[2]=f*x+p*w+m*M,r[5]=f*g+p*E+m*b,r[8]=f*d+p*_+m*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-n*r*h+n*o*l+s*r*c-s*a*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=h*a-o*c,f=o*l-h*r,p=c*r-a*l,m=t*u+n*f+s*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/m;return e[0]=u*x,e[1]=(s*c-h*n)*x,e[2]=(o*n-s*a)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*r-o*t)*x,e[6]=p*x,e[7]=(n*l-c*t)*x,e[8]=(a*t-n*r)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,a,o){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-s*c,s*l,-s*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return Ei("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(_r.makeScale(e,t)),this}rotate(e){return Ei("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(_r.makeRotation(-e)),this}translate(e,t){return Ei("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(_r.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const _r=new ke,$o=new ke().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),el=new ke().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Su(){const i={enabled:!0,workingColorSpace:tr,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===et&&(s.r=Cn(s.r),s.g=Cn(s.g),s.b=Cn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===et&&(s.r=Ti(s.r),s.g=Ti(s.g),s.b=Ti(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===fn?nr:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Ei("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Ei("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,r)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[tr]:{primaries:e,whitePoint:n,transfer:nr,toXYZ:$o,fromXYZ:el,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pt},outputColorSpaceConfig:{drawingBufferColorSpace:pt}},[pt]:{primaries:e,whitePoint:n,transfer:et,toXYZ:$o,fromXYZ:el,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pt}}}),i}const Xe=Su();function Cn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Ti(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let si;class yu{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{si===void 0&&(si=os("canvas")),si.width=e.width,si.height=e.height;const s=si.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),n=si}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=os("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Cn(r[a]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Cn(t[n]/255)*255):t[n]=Cn(t[n]);return{data:t,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bu=0;class Mo{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bu++}),this.uuid=fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Mr(s[a].image)):r.push(Mr(s[a]))}else r=Mr(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Mr(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?yu.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let wu=0;const Sr=new G;class mt extends ei{constructor(e=mt.DEFAULT_IMAGE,t=mt.DEFAULT_MAPPING,n=Tn,s=Tn,r=Ye,a=qt,o=kt,l=Ct,c=mt.DEFAULT_ANISOTROPY,h=fn){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:wu++}),this.uuid=fs(),this.name="",this.source=new Mo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new Ne(0,0),this.repeat=new Ne(1,1),this.center=new Ne(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ke,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Sr).x}get height(){return this.source.getSize(Sr).y}get depth(){return this.source.getSize(Sr).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){Be(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Be(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&n&&s.isVector2&&n.isVector2||s&&n&&s.isVector3&&n.isVector3||s&&n&&s.isMatrix3&&n.isMatrix3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Tc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case is:e.x=e.x-Math.floor(e.x);break;case Tn:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case is:e.y=e.y-Math.floor(e.y);break;case Tn:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mt.DEFAULT_IMAGE=null;mt.DEFAULT_MAPPING=Tc;mt.DEFAULT_ANISOTROPY=1;class it{static{it.prototype.isVector4=!0}constructor(e=0,t=0,n=0,s=1){this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*s+a[12]*r,this.y=a[1]*t+a[5]*n+a[9]*s+a[13]*r,this.z=a[2]*t+a[6]*n+a[10]*s+a[14]*r,this.w=a[3]*t+a[7]*n+a[11]*s+a[15]*r,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],f=l[1],p=l[5],m=l[9],x=l[2],g=l[6],d=l[10];if(Math.abs(h-f)<.01&&Math.abs(u-x)<.01&&Math.abs(m-g)<.01){if(Math.abs(h+f)<.1&&Math.abs(u+x)<.1&&Math.abs(m+g)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(c+1)/2,_=(p+1)/2,M=(d+1)/2,b=(h+f)/4,A=(u+x)/4,v=(m+g)/4;return E>_&&E>M?E<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(E),s=b/n,r=A/n):_>M?_<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),n=b/s,r=v/s):M<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(M),n=A/r,s=v/r),this.set(n,s,r,t),this}let w=Math.sqrt((g-m)*(g-m)+(u-x)*(u-x)+(f-h)*(f-h));return Math.abs(w)<.001&&(w=1),this.x=(g-m)/w,this.y=(u-x)/w,this.z=(f-h)/w,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=qe(this.x,e.x,t.x),this.y=qe(this.y,e.y,t.y),this.z=qe(this.z,e.z,t.z),this.w=qe(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=qe(this.x,e,t),this.y=qe(this.y,e,t),this.z=qe(this.z,e,t),this.w=qe(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(qe(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Eu extends ei{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ye,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new it(0,0,e,t),this.scissorTest=!1,this.viewport=new it(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:n.depth},r=new mt(s),a=n.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ye,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Mo(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Mt extends Eu{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Nc extends mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tu extends mt{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=St,this.minFilter=St,this.wrapR=Tn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class ct{static{ct.prototype.isMatrix4=!0}constructor(e,t,n,s,r,a,o,l,c,h,u,f,p,m,x,g){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,a,o,l,c,h,u,f,p,m,x,g)}set(e,t,n,s,r,a,o,l,c,h,u,f,p,m,x,g){const d=this.elements;return d[0]=e,d[4]=t,d[8]=n,d[12]=s,d[1]=r,d[5]=a,d[9]=o,d[13]=l,d[2]=c,d[6]=h,d[10]=u,d[14]=f,d[3]=p,d[7]=m,d[11]=x,d[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,s=1/ri.setFromMatrixColumn(e,0).length(),r=1/ri.setFromMatrixColumn(e,1).length(),a=1/ri.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const f=a*h,p=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+m*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=m+p*c,t[10]=a*l}else if(e.order==="YXZ"){const f=l*h,p=l*u,m=c*h,x=c*u;t[0]=f+x*o,t[4]=m*o-p,t[8]=a*c,t[1]=a*u,t[5]=a*h,t[9]=-o,t[2]=p*o-m,t[6]=x+f*o,t[10]=a*l}else if(e.order==="ZXY"){const f=l*h,p=l*u,m=c*h,x=c*u;t[0]=f-x*o,t[4]=-a*u,t[8]=m+p*o,t[1]=p+m*o,t[5]=a*h,t[9]=x-f*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const f=a*h,p=a*u,m=o*h,x=o*u;t[0]=l*h,t[4]=m*c-p,t[8]=f*c+x,t[1]=l*u,t[5]=x*c+f,t[9]=p*c-m,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const f=a*l,p=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=x-f*u,t[8]=m*u+p,t[1]=u,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*u+m,t[10]=f-x*u}else if(e.order==="XZY"){const f=a*l,p=a*c,m=o*l,x=o*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=f*u+x,t[5]=a*h,t[9]=p*u-m,t[2]=m*u-p,t[6]=o*h,t[10]=x*u+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Au,e,Cu)}lookAt(e,t,n){const s=this.elements;return Wt.subVectors(e,t),Wt.lengthSq()===0&&(Wt.z=1),Wt.normalize(),In.crossVectors(n,Wt),In.lengthSq()===0&&(Math.abs(n.z)===1?Wt.x+=1e-4:Wt.z+=1e-4,Wt.normalize(),In.crossVectors(n,Wt)),In.normalize(),xs.crossVectors(Wt,In),s[0]=In.x,s[4]=xs.x,s[8]=Wt.x,s[1]=In.y,s[5]=xs.y,s[9]=Wt.y,s[2]=In.z,s[6]=xs.z,s[10]=Wt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],h=n[1],u=n[5],f=n[9],p=n[13],m=n[2],x=n[6],g=n[10],d=n[14],w=n[3],E=n[7],_=n[11],M=n[15],b=s[0],A=s[4],v=s[8],y=s[12],P=s[1],C=s[5],L=s[9],I=s[13],R=s[2],U=s[6],V=s[10],F=s[14],X=s[3],B=s[7],W=s[11],ee=s[15];return r[0]=a*b+o*P+l*R+c*X,r[4]=a*A+o*C+l*U+c*B,r[8]=a*v+o*L+l*V+c*W,r[12]=a*y+o*I+l*F+c*ee,r[1]=h*b+u*P+f*R+p*X,r[5]=h*A+u*C+f*U+p*B,r[9]=h*v+u*L+f*V+p*W,r[13]=h*y+u*I+f*F+p*ee,r[2]=m*b+x*P+g*R+d*X,r[6]=m*A+x*C+g*U+d*B,r[10]=m*v+x*L+g*V+d*W,r[14]=m*y+x*I+g*F+d*ee,r[3]=w*b+E*P+_*R+M*X,r[7]=w*A+E*C+_*U+M*B,r[11]=w*v+E*L+_*V+M*W,r[15]=w*y+E*I+_*F+M*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],u=e[6],f=e[10],p=e[14],m=e[3],x=e[7],g=e[11],d=e[15],w=l*p-c*f,E=o*p-c*u,_=o*f-l*u,M=a*p-c*h,b=a*f-l*h,A=a*u-o*h;return t*(x*w-g*E+d*_)-n*(m*w-g*M+d*b)+s*(m*E-x*M+d*A)-r*(m*_-x*b+g*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-n*(r*h-o*l)+s*(r*c-a*l)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],u=e[9],f=e[10],p=e[11],m=e[12],x=e[13],g=e[14],d=e[15],w=t*o-n*a,E=t*l-s*a,_=t*c-r*a,M=n*l-s*o,b=n*c-r*o,A=s*c-r*l,v=h*x-u*m,y=h*g-f*m,P=h*d-p*m,C=u*g-f*x,L=u*d-p*x,I=f*d-p*g,R=w*I-E*L+_*C+M*P-b*y+A*v;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/R;return e[0]=(o*I-l*L+c*C)*U,e[1]=(s*L-n*I-r*C)*U,e[2]=(x*A-g*b+d*M)*U,e[3]=(f*b-u*A-p*M)*U,e[4]=(l*P-a*I-c*y)*U,e[5]=(t*I-s*P+r*y)*U,e[6]=(g*_-m*A-d*E)*U,e[7]=(h*A-f*_+p*E)*U,e[8]=(a*L-o*P+c*v)*U,e[9]=(n*P-t*L-r*v)*U,e[10]=(m*b-x*_+d*w)*U,e[11]=(u*_-h*b-p*w)*U,e[12]=(o*y-a*C-l*v)*U,e[13]=(t*C-n*y+s*v)*U,e[14]=(x*E-m*M-g*w)*U,e[15]=(h*M-u*E+f*w)*U,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,a=e.x,o=e.y,l=e.z,c=r*a,h=r*o;return this.set(c*a+n,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+n,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,a){return this.set(1,n,r,0,e,1,a,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,a=t._y,o=t._z,l=t._w,c=r+r,h=a+a,u=o+o,f=r*c,p=r*h,m=r*u,x=a*h,g=a*u,d=o*u,w=l*c,E=l*h,_=l*u,M=n.x,b=n.y,A=n.z;return s[0]=(1-(x+d))*M,s[1]=(p+_)*M,s[2]=(m-E)*M,s[3]=0,s[4]=(p-_)*b,s[5]=(1-(f+d))*b,s[6]=(g+w)*b,s[7]=0,s[8]=(m+E)*A,s[9]=(g-w)*A,s[10]=(1-(f+x))*A,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const r=this.determinantAffine();if(r===0)return n.set(1,1,1),t.identity(),this;let a=ri.set(s[0],s[1],s[2]).length();const o=ri.set(s[4],s[5],s[6]).length(),l=ri.set(s[8],s[9],s[10]).length();r<0&&(a=-a),en.copy(this);const c=1/a,h=1/o,u=1/l;return en.elements[0]*=c,en.elements[1]*=c,en.elements[2]*=c,en.elements[4]*=h,en.elements[5]*=h,en.elements[6]*=h,en.elements[8]*=u,en.elements[9]*=u,en.elements[10]*=u,t.setFromRotationMatrix(en),n.x=a,n.y=o,n.z=l,this}makePerspective(e,t,n,s,r,a,o=pn,l=!1){const c=this.elements,h=2*r/(t-e),u=2*r/(n-s),f=(t+e)/(t-e),p=(n+s)/(n-s);let m,x;if(l)m=r/(a-r),x=a*r/(a-r);else if(o===pn)m=-(a+r)/(a-r),x=-2*a*r/(a-r);else if(o===as)m=-a/(a-r),x=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,s,r,a,o=pn,l=!1){const c=this.elements,h=2/(t-e),u=2/(n-s),f=-(t+e)/(t-e),p=-(n+s)/(n-s);let m,x;if(l)m=1/(a-r),x=a/(a-r);else if(o===pn)m=-2/(a-r),x=-(a+r)/(a-r);else if(o===as)m=-1/(a-r),x=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=m,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const ri=new G,en=new ct,Au=new G(0,0,0),Cu=new G(1,1,1),In=new G,xs=new G,Wt=new G,tl=new ct,nl=new Di;class zn{constructor(e=0,t=0,n=0,s=zn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],u=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return tl.makeRotationFromQuaternion(e),this.setFromRotationMatrix(tl,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return nl.setFromEuler(this),this.setFromQuaternion(nl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}zn.DEFAULT_ORDER="XYZ";class So{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Ru=0;const il=new G,ai=new Di,_n=new ct,_s=new G,Oi=new G,Pu=new G,Lu=new Di,sl=new G(1,0,0),rl=new G(0,1,0),al=new G(0,0,1),ol={type:"added"},Du={type:"removed"},oi={type:"childadded",child:null},yr={type:"childremoved",child:null};class Ft extends ei{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Ru++}),this.uuid=fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ft.DEFAULT_UP.clone();const e=new G,t=new zn,n=new Di,s=new G(1,1,1);function r(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new ct},normalMatrix:{value:new ke}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=Ft.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new So,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.multiply(ai),this}rotateOnWorldAxis(e,t){return ai.setFromAxisAngle(e,t),this.quaternion.premultiply(ai),this}rotateX(e){return this.rotateOnAxis(sl,e)}rotateY(e){return this.rotateOnAxis(rl,e)}rotateZ(e){return this.rotateOnAxis(al,e)}translateOnAxis(e,t){return il.copy(e).applyQuaternion(this.quaternion),this.position.add(il.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(sl,e)}translateY(e){return this.translateOnAxis(rl,e)}translateZ(e){return this.translateOnAxis(al,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(_n.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?_s.copy(e):_s.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Oi.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?_n.lookAt(Oi,_s,this.up):_n.lookAt(_s,Oi,this.up),this.quaternion.setFromRotationMatrix(_n),s&&(_n.extractRotation(s.matrixWorld),ai.setFromRotationMatrix(_n),this.quaternion.premultiply(ai.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Je("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(ol),oi.child=e,this.dispatchEvent(oi),oi.child=null):Je("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Du),yr.child=e,this.dispatchEvent(yr),yr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),_n.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),_n.multiply(e.parent.matrixWorld)),e.applyMatrix4(_n),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(ol),oi.child=e,this.dispatchEvent(oi),oi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,e,Pu),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Oi,Lu,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,s=e.z,r=this.matrix.elements;r[12]+=t-r[0]*t-r[4]*n-r[8]*s,r[13]+=n-r[1]*t-r[5]*n-r[9]*s,r[14]+=s-r[2]*t-r[6]*n-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(e.materials,this.material[l]));s.material=o}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(r(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),u=a(e.shapes),f=a(e.skeletons),p=a(e.animations),m=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),f.length>0&&(n.skeletons=f),p.length>0&&(n.animations=p),m.length>0&&(n.nodes=m)}return n.object=s,n;function a(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Ft.DEFAULT_UP=new G(0,1,0);Ft.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ft.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class yi extends Ft{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Iu={type:"move"};class br{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new yi,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new yi,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new yi,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const x of e.hand.values()){const g=t.getJointPose(x,n),d=this._getHandJoint(c,x);g!==null&&(d.matrix.fromArray(g.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=g.radius),d.visible=g!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],f=h.position.distanceTo(u.position),p=.02,m=.005;c.inputState.pinching&&f>p+m?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-m&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Iu)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new yi;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Fc={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Un={h:0,s:0,l:0},Ms={h:0,s:0,l:0};function wr(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Xe.colorSpaceToWorking(this,t),this}setRGB(e,t,n,s=Xe.workingColorSpace){return this.r=e,this.g=t,this.b=n,Xe.colorSpaceToWorking(this,s),this}setHSL(e,t,n,s=Xe.workingColorSpace){if(e=Mu(e,1),t=qe(t,0,1),n=qe(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,a=2*n-r;this.r=wr(a,r,e+1/3),this.g=wr(a,r,e),this.b=wr(a,r,e-1/3)}return Xe.colorSpaceToWorking(this,s),this}setStyle(e,t=pt){function n(r){r!==void 0&&parseFloat(r)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:Be("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(r,16),t);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pt){const n=Fc[e.toLowerCase()];return n!==void 0?this.setHex(n,t):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Cn(e.r),this.g=Cn(e.g),this.b=Cn(e.b),this}copyLinearToSRGB(e){return this.r=Ti(e.r),this.g=Ti(e.g),this.b=Ti(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pt){return Xe.workingToColorSpace(It.copy(this),e),Math.round(qe(It.r*255,0,255))*65536+Math.round(qe(It.g*255,0,255))*256+Math.round(qe(It.b*255,0,255))}getHexString(e=pt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Xe.workingColorSpace){Xe.workingToColorSpace(It.copy(this),t);const n=It.r,s=It.g,r=It.b,a=Math.max(n,s,r),o=Math.min(n,s,r);let l,c;const h=(o+a)/2;if(o===a)l=0,c=0;else{const u=a-o;switch(c=h<=.5?u/(a+o):u/(2-a-o),a){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Xe.workingColorSpace){return Xe.workingToColorSpace(It.copy(this),t),e.r=It.r,e.g=It.g,e.b=It.b,e}getStyle(e=pt){Xe.workingToColorSpace(It.copy(this),e);const t=It.r,n=It.g,s=It.b;return e!==pt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(Un),this.setHSL(Un.h+e,Un.s+t,Un.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Un),e.getHSL(Ms);const n=vr(Un.h,Ms.h,t),s=vr(Un.s,Ms.s,t),r=vr(Un.l,Ms.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const It=new Le;Le.NAMES=Fc;class ls extends Ft{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new zn,this.environmentIntensity=1,this.environmentRotation=new zn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const tn=new G,Mn=new G,Er=new G,Sn=new G,li=new G,ci=new G,ll=new G,Tr=new G,Ar=new G,Cr=new G,Rr=new it,Pr=new it,Lr=new it;class rn{constructor(e=new G,t=new G,n=new G){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),tn.subVectors(e,t),s.cross(tn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){tn.subVectors(s,t),Mn.subVectors(n,t),Er.subVectors(e,t);const a=tn.dot(tn),o=tn.dot(Mn),l=tn.dot(Er),c=Mn.dot(Mn),h=Mn.dot(Er),u=a*c-o*o;if(u===0)return r.set(0,0,0),null;const f=1/u,p=(c*l-o*h)*f,m=(a*h-o*l)*f;return r.set(1-p-m,m,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Sn)===null?!1:Sn.x>=0&&Sn.y>=0&&Sn.x+Sn.y<=1}static getInterpolation(e,t,n,s,r,a,o,l){return this.getBarycoord(e,t,n,s,Sn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Sn.x),l.addScaledVector(a,Sn.y),l.addScaledVector(o,Sn.z),l)}static getInterpolatedAttribute(e,t,n,s,r,a){return Rr.setScalar(0),Pr.setScalar(0),Lr.setScalar(0),Rr.fromBufferAttribute(e,t),Pr.fromBufferAttribute(e,n),Lr.fromBufferAttribute(e,s),a.setScalar(0),a.addScaledVector(Rr,r.x),a.addScaledVector(Pr,r.y),a.addScaledVector(Lr,r.z),a}static isFrontFacing(e,t,n,s){return tn.subVectors(n,t),Mn.subVectors(e,t),tn.cross(Mn).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return tn.subVectors(this.c,this.b),Mn.subVectors(this.a,this.b),tn.cross(Mn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return rn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return rn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return rn.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return rn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return rn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let a,o;li.subVectors(s,n),ci.subVectors(r,n),Tr.subVectors(e,n);const l=li.dot(Tr),c=ci.dot(Tr);if(l<=0&&c<=0)return t.copy(n);Ar.subVectors(e,s);const h=li.dot(Ar),u=ci.dot(Ar);if(h>=0&&u<=h)return t.copy(s);const f=l*u-h*c;if(f<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(n).addScaledVector(li,a);Cr.subVectors(e,r);const p=li.dot(Cr),m=ci.dot(Cr);if(m>=0&&p<=m)return t.copy(r);const x=p*c-l*m;if(x<=0&&c>=0&&m<=0)return o=c/(c-m),t.copy(n).addScaledVector(ci,o);const g=h*m-p*u;if(g<=0&&u-h>=0&&p-m>=0)return ll.subVectors(r,s),o=(u-h)/(u-h+(p-m)),t.copy(s).addScaledVector(ll,o);const d=1/(g+x+f);return a=x*d,o=f*d,t.copy(n).addScaledVector(li,a).addScaledVector(ci,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ds{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,nn):nn.fromBufferAttribute(r,a),nn.applyMatrix4(e.matrixWorld),this.expandByPoint(nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ss.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ss.copy(n.boundingBox)),Ss.applyMatrix4(e.matrixWorld),this.union(Ss)}const s=e.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,nn),nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Bi),ys.subVectors(this.max,Bi),hi.subVectors(e.a,Bi),ui.subVectors(e.b,Bi),fi.subVectors(e.c,Bi),Nn.subVectors(ui,hi),Fn.subVectors(fi,ui),Vn.subVectors(hi,fi);let t=[0,-Nn.z,Nn.y,0,-Fn.z,Fn.y,0,-Vn.z,Vn.y,Nn.z,0,-Nn.x,Fn.z,0,-Fn.x,Vn.z,0,-Vn.x,-Nn.y,Nn.x,0,-Fn.y,Fn.x,0,-Vn.y,Vn.x,0];return!Dr(t,hi,ui,fi,ys)||(t=[1,0,0,0,1,0,0,0,1],!Dr(t,hi,ui,fi,ys))?!1:(bs.crossVectors(Nn,Fn),t=[bs.x,bs.y,bs.z],Dr(t,hi,ui,fi,ys))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const yn=[new G,new G,new G,new G,new G,new G,new G,new G],nn=new G,Ss=new ds,hi=new G,ui=new G,fi=new G,Nn=new G,Fn=new G,Vn=new G,Bi=new G,ys=new G,bs=new G,Gn=new G;function Dr(i,e,t,n,s){for(let r=0,a=i.length-3;r<=a;r+=3){Gn.fromArray(i,r);const o=s.x*Math.abs(Gn.x)+s.y*Math.abs(Gn.y)+s.z*Math.abs(Gn.z),l=e.dot(Gn),c=t.dot(Gn),h=n.dot(Gn);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const _t=new G,ws=new Ne;let Uu=0;class Rt extends ei{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uu++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mu,this.updateRanges=[],this.gpuType=dn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)ws.fromBufferAttribute(this,t),ws.applyMatrix3(e),this.setXY(t,ws.x,ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix3(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyMatrix4(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.applyNormalMatrix(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)_t.fromBufferAttribute(this,t),_t.transformDirection(e),this.setXYZ(t,_t.x,_t.y,_t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Fi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Fi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Fi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Fi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Fi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Oc extends Rt{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Bc extends Rt{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Gt extends Rt{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Nu=new ds,ki=new G,Ir=new G;class yo{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Nu.setFromPoints(e).getCenter(n);let s=0;for(let r=0,a=e.length;r<a;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ki.subVectors(e,this.center);const t=ki.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(ki,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ir.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ki.copy(e.center).add(Ir)),this.expandByPoint(ki.copy(e.center).sub(Ir))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Fu=0;const Zt=new ct,Ur=new Ft,di=new G,Xt=new ds,zi=new ds,Tt=new G;class Yt extends ei{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Fu++}),this.uuid=fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(gu(e)?Bc:Oc)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new ke().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Zt.makeRotationFromQuaternion(e),this.applyMatrix4(Zt),this}rotateX(e){return Zt.makeRotationX(e),this.applyMatrix4(Zt),this}rotateY(e){return Zt.makeRotationY(e),this.applyMatrix4(Zt),this}rotateZ(e){return Zt.makeRotationZ(e),this.applyMatrix4(Zt),this}translate(e,t,n){return Zt.makeTranslation(e,t,n),this.applyMatrix4(Zt),this}scale(e,t,n){return Zt.makeScale(e,t,n),this.applyMatrix4(Zt),this}lookAt(e){return Ur.lookAt(e),Ur.updateMatrix(),this.applyMatrix4(Ur.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(di).negate(),this.translate(di.x,di.y,di.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let s=0,r=e.length;s<r;s++){const a=e[s];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Gt(n,3))}else{const n=Math.min(e.length,t.count);for(let s=0;s<n;s++){const r=e[s];t.setXYZ(s,r.x,r.y,r.z||0)}e.length>t.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ds);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Xt.setFromBufferAttribute(r),this.morphTargetsRelative?(Tt.addVectors(this.boundingBox.min,Xt.min),this.boundingBox.expandByPoint(Tt),Tt.addVectors(this.boundingBox.max,Xt.max),this.boundingBox.expandByPoint(Tt)):(this.boundingBox.expandByPoint(Xt.min),this.boundingBox.expandByPoint(Xt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Je('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Je("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const n=this.boundingSphere.center;if(Xt.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];zi.setFromBufferAttribute(o),this.morphTargetsRelative?(Tt.addVectors(Xt.min,zi.min),Xt.expandByPoint(Tt),Tt.addVectors(Xt.max,zi.max),Xt.expandByPoint(Tt)):(Xt.expandByPoint(zi.min),Xt.expandByPoint(zi.max))}Xt.getCenter(n);let s=0;for(let r=0,a=e.count;r<a;r++)Tt.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Tt));if(t)for(let r=0,a=t.length;r<a;r++){const o=t[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Tt.fromBufferAttribute(o,c),l&&(di.fromBufferAttribute(e,c),Tt.add(di)),s=Math.max(s,n.distanceToSquared(Tt))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Je('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Je("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Rt(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],l=[];for(let v=0;v<n.count;v++)o[v]=new G,l[v]=new G;const c=new G,h=new G,u=new G,f=new Ne,p=new Ne,m=new Ne,x=new G,g=new G;function d(v,y,P){c.fromBufferAttribute(n,v),h.fromBufferAttribute(n,y),u.fromBufferAttribute(n,P),f.fromBufferAttribute(r,v),p.fromBufferAttribute(r,y),m.fromBufferAttribute(r,P),h.sub(c),u.sub(c),p.sub(f),m.sub(f);const C=1/(p.x*m.y-m.x*p.y);isFinite(C)&&(x.copy(h).multiplyScalar(m.y).addScaledVector(u,-p.y).multiplyScalar(C),g.copy(u).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(C),o[v].add(x),o[y].add(x),o[P].add(x),l[v].add(g),l[y].add(g),l[P].add(g))}let w=this.groups;w.length===0&&(w=[{start:0,count:e.count}]);for(let v=0,y=w.length;v<y;++v){const P=w[v],C=P.start,L=P.count;for(let I=C,R=C+L;I<R;I+=3)d(e.getX(I+0),e.getX(I+1),e.getX(I+2))}const E=new G,_=new G,M=new G,b=new G;function A(v){M.fromBufferAttribute(s,v),b.copy(M);const y=o[v];E.copy(y),E.sub(M.multiplyScalar(M.dot(y))).normalize(),_.crossVectors(b,y);const C=_.dot(l[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,C)}for(let v=0,y=w.length;v<y;++v){const P=w[v],C=P.start,L=P.count;for(let I=C,R=C+L;I<R;I+=3)A(e.getX(I+0)),A(e.getX(I+1)),A(e.getX(I+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Rt(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let f=0,p=n.count;f<p;f++)n.setXYZ(f,0,0,0);const s=new G,r=new G,a=new G,o=new G,l=new G,c=new G,h=new G,u=new G;if(e)for(let f=0,p=e.count;f<p;f+=3){const m=e.getX(f+0),x=e.getX(f+1),g=e.getX(f+2);s.fromBufferAttribute(t,m),r.fromBufferAttribute(t,x),a.fromBufferAttribute(t,g),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),o.fromBufferAttribute(n,m),l.fromBufferAttribute(n,x),c.fromBufferAttribute(n,g),o.add(h),l.add(h),c.add(h),n.setXYZ(m,o.x,o.y,o.z),n.setXYZ(x,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),r.fromBufferAttribute(t,f+1),a.fromBufferAttribute(t,f+2),h.subVectors(a,r),u.subVectors(s,r),h.cross(u),n.setXYZ(f+0,h.x,h.y,h.z),n.setXYZ(f+1,h.x,h.y,h.z),n.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Tt.fromBufferAttribute(e,t),Tt.normalize(),e.setXYZ(t,Tt.x,Tt.y,Tt.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,u=o.normalized,f=new c.constructor(l.length*h);let p=0,m=0;for(let x=0,g=l.length;x<g;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let d=0;d<h;d++)f[m++]=c[p++]}return new Rt(f,h,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yt,n=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,n);t.setAttribute(o,c)}const r=this.morphAttributes;for(const o in r){const l=[],c=r[o];for(let h=0,u=c.length;h<u;h++){const f=c[h],p=e(f,n);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,f=c.length;u<f;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let f=0,p=u.length;f<p;f++)h.push(u[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,h=a.length;c<h;c++){const u=a[c];this.addGroup(u.start,u.count,u.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Nr=new G,Ou=new G,Bu=new ke;class sn{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Nr.subVectors(n,t).cross(Ou.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const s=e.delta(Nr),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/r;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(s,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Bu.getNormalMatrix(e),s=this.coplanarPoint(Nr).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let ku=0;class Ii extends ei{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:ku++}),this.uuid=fs(),this.name="",this.type="Material",this.blending=wi,this.side=Jn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=yc,this.blendEquation=_i,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=ns,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=mr,this.stencilZFail=mr,this.stencilZPass=mr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){Be(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){Be(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector2&&n&&n.isVector2||s&&s.isEuler&&n&&n.isEuler||s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const a=[];for(const o in r){const l=r[o];delete l.metadata,a.push(l)}return a}if(t){const r=s(e.textures),a=s(e.images);r.length>0&&(n.textures=r),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Le().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new sn().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new Ne().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new Ne().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const bn=new G,Fr=new G,Es=new G,Ts=new G;class kc{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,bn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=bn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(bn.copy(this.origin).addScaledVector(this.direction,t),bn.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Fr.copy(e).add(t).multiplyScalar(.5),Es.copy(t).sub(e).normalize(),Ts.copy(this.origin).sub(Fr);const r=e.distanceTo(t)*.5,a=-this.direction.dot(Es),o=Ts.dot(this.direction),l=-Ts.dot(Es),c=Ts.lengthSq(),h=Math.abs(1-a*a);let u,f,p,m;if(h>0)if(u=a*l-o,f=a*o-l,m=r*h,u>=0)if(f>=-m)if(f<=m){const x=1/h;u*=x,f*=x,p=u*(u+a*f+2*o)+f*(a*u+f+2*l)+c}else f=r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f=-r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;else f<=-m?(u=Math.max(0,-(-a*r+o)),f=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c):f<=m?(u=0,f=Math.min(Math.max(-r,-l),r),p=f*(f+2*l)+c):(u=Math.max(0,-(a*r+o)),f=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+f*(f+2*l)+c);else f=a>0?-r:r,u=Math.max(0,-(a*f+o)),p=-u*u+f*(f+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Fr).addScaledVector(Es,f),p}intersectSphere(e,t){if(e.radius<0)return null;bn.subVectors(e.center,this.origin);const n=bn.dot(this.direction),s=bn.dot(bn)-n*n,r=e.radius*e.radius;if(s>r)return null;const a=Math.sqrt(r-s),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,a,o,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,f=this.origin;return c>=0?(n=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(n=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(r=(e.min.y-f.y)*h,a=(e.max.y-f.y)*h):(r=(e.max.y-f.y)*h,a=(e.min.y-f.y)*h),n>a||r>s||((r>n||isNaN(n))&&(n=r),(a<s||isNaN(s))&&(s=a),u>=0?(o=(e.min.z-f.z)*u,l=(e.max.z-f.z)*u):(o=(e.max.z-f.z)*u,l=(e.min.z-f.z)*u),n>l||o>s)||((o>n||n!==n)&&(n=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,bn)!==null}intersectTriangle(e,t,n,s,r){const a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,u=e.x-a.x,f=e.y-a.y,p=e.z-a.z,m=t.x-a.x,x=t.y-a.y,g=t.z-a.z,d=n.x-a.x,w=n.y-a.y,E=n.z-a.z,_=Math.abs(l),M=Math.abs(c),b=Math.abs(h);let A,v,y,P,C,L,I,R,U,V,F,X;if(_>=M&&_>=b?(y=l,L=u,U=m,X=d,l>=0?(A=c,v=h,P=f,C=p,I=x,R=g,V=w,F=E):(A=h,v=c,P=p,C=f,I=g,R=x,V=E,F=w)):M>=b?(y=c,L=f,U=x,X=w,c>=0?(A=h,v=l,P=p,C=u,I=g,R=m,V=E,F=d):(A=l,v=h,P=u,C=p,I=m,R=g,V=d,F=E)):(y=h,L=p,U=g,X=E,h>=0?(A=l,v=c,P=u,C=f,I=m,R=x,V=d,F=w):(A=c,v=l,P=f,C=u,I=x,R=m,V=w,F=d)),y===0)return null;const B=A/y,W=v/y,ee=1/y,le=P-B*L,ce=C-W*L,De=I-B*U,Ie=R-W*U,Fe=V-B*X,Q=F-W*X,z=Fe*Ie-Q*De,K=le*Q-ce*Fe,$=De*ce-Ie*le;if(s){if(z<0||K<0||$<0)return null}else if((z<0||K<0||$<0)&&(z>0||K>0||$>0))return null;const j=z+K+$;if(j===0)return null;const ae=ee*(z*L+K*U+$*X);return(j>0?ae<0:ae>0)?null:this.at(ae/j,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ps extends Ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.combine=Ec,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const cl=new ct,Wn=new kc,As=new yo,hl=new G,Cs=new G,Rs=new G,Ps=new G,Or=new G,Ls=new G,ul=new G,Ds=new G;class rt extends Ft{constructor(e=new Yt,t=new ps){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){const o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(r&&o){Ls.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=o[l],u=r[l];h!==0&&(Or.fromBufferAttribute(u,e),a?Ls.addScaledVector(Or,h):Ls.addScaledVector(Or.sub(t),h))}t.add(Ls)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),As.copy(n.boundingSphere),As.applyMatrix4(r),Wn.copy(e.ray).recast(e.near),!(As.containsPoint(Wn.origin)===!1&&(Wn.intersectSphere(As,hl)===null||Wn.origin.distanceToSquared(hl)>(e.far-e.near)**2))&&(cl.copy(r).invert(),Wn.copy(e.ray).applyMatrix4(cl),!(n.boundingBox!==null&&Wn.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Wn)))}_computeIntersections(e,t,n){let s;const r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,f=r.groups,p=r.drawRange;if(o!==null)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){const g=f[m],d=a[g.materialIndex],w=Math.max(g.start,p.start),E=Math.min(o.count,Math.min(g.start+g.count,p.start+p.count));for(let _=w,M=E;_<M;_+=3){const b=o.getX(_),A=o.getX(_+1),v=o.getX(_+2);s=Is(this,d,e,n,c,h,u,b,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){const w=o.getX(g),E=o.getX(g+1),_=o.getX(g+2);s=Is(this,a,e,n,c,h,u,w,E,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let m=0,x=f.length;m<x;m++){const g=f[m],d=a[g.materialIndex],w=Math.max(g.start,p.start),E=Math.min(l.count,Math.min(g.start+g.count,p.start+p.count));for(let _=w,M=E;_<M;_+=3){const b=_,A=_+1,v=_+2;s=Is(this,d,e,n,c,h,u,b,A,v),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=g.materialIndex,t.push(s))}}else{const m=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let g=m,d=x;g<d;g+=3){const w=g,E=g+1,_=g+2;s=Is(this,a,e,n,c,h,u,w,E,_),s&&(s.faceIndex=Math.floor(g/3),t.push(s))}}}}function zu(i,e,t,n,s,r,a,o){let l;if(e.side===zt?l=n.intersectTriangle(a,r,s,!0,o):l=n.intersectTriangle(s,r,a,e.side===Jn,o),l===null)return null;Ds.copy(o),Ds.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(Ds);return c<t.near||c>t.far?null:{distance:c,point:Ds.clone(),object:i}}function Is(i,e,t,n,s,r,a,o,l,c){i.getVertexPosition(o,Cs),i.getVertexPosition(l,Rs),i.getVertexPosition(c,Ps);const h=zu(i,e,t,n,Cs,Rs,Ps,ul);if(h){const u=new G;rn.getBarycoord(ul,Cs,Rs,Ps,u),s&&(h.uv=rn.getInterpolatedAttribute(s,o,l,c,u,new Ne)),r&&(h.uv1=rn.getInterpolatedAttribute(r,o,l,c,u,new Ne)),a&&(h.normal=rn.getInterpolatedAttribute(a,o,l,c,u,new G),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new G,materialIndex:0};rn.getNormal(Cs,Rs,Ps,f.normal),h.face=f,h.barycoord=u}return h}class cs extends mt{constructor(e=null,t=1,n=1,s,r,a,o,l,c=St,h=St,u,f){super(null,a,o,l,c,h,s,r,u,f),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Xn=new yo,Hu=new Ne(.5,.5),Us=new G;class bo{constructor(e=new sn,t=new sn,n=new sn,s=new sn,r=new sn,a=new sn){this.planes=[e,t,n,s,r,a]}set(e,t,n,s,r,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=pn,n=!1){const s=this.planes,r=e.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],u=r[5],f=r[6],p=r[7],m=r[8],x=r[9],g=r[10],d=r[11],w=r[12],E=r[13],_=r[14],M=r[15];if(s[0].setComponents(c-a,p-h,d-m,M-w).normalize(),s[1].setComponents(c+a,p+h,d+m,M+w).normalize(),s[2].setComponents(c+o,p+u,d+x,M+E).normalize(),s[3].setComponents(c-o,p-u,d-x,M-E).normalize(),n)s[4].setComponents(l,f,g,_).normalize(),s[5].setComponents(c-l,p-f,d-g,M-_).normalize();else if(s[4].setComponents(c-l,p-f,d-g,M-_).normalize(),t===pn)s[5].setComponents(c+l,p+f,d+g,M+_).normalize();else if(t===as)s[5].setComponents(l,f,g,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xn.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Xn.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xn)}intersectsSprite(e){Xn.center.set(0,0,0);const t=Hu.distanceTo(e.center);return Xn.radius=.7071067811865476+t,Xn.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xn)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(Us.x=s.normal.x>0?e.max.x:e.min.x,Us.y=s.normal.y>0?e.max.y:e.min.y,Us.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Us)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class zc extends mt{constructor(e=[],t=Qn,n,s,r,a,o,l,c,h){super(e,t,n,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Vu extends mt{constructor(e,t,n,s,r,a,o,l,c){super(e,t,n,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Pi extends mt{constructor(e,t,n=xn,s,r,a,o=St,l=St,c,h=Rn,u=1){if(h!==Rn&&h!==Kn)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:u};super(f,s,r,a,o,l,h,n,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Gu extends Pi{constructor(e,t=xn,n=Qn,s,r,a=St,o=St,l,c=Rn){const h={width:e,height:e,depth:1},u=[h,h,h,h,h,h];super(e,e,t,n,s,r,a,o,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Hc extends mt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class vn extends Yt{constructor(e=1,t=1,n=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:a};const o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);const l=[],c=[],h=[],u=[];let f=0,p=0;m("z","y","x",-1,-1,n,t,e,a,r,0),m("z","y","x",1,-1,n,t,-e,a,r,1),m("x","z","y",1,1,e,n,t,s,a,2),m("x","z","y",1,-1,e,n,-t,s,a,3),m("x","y","z",1,-1,e,t,n,s,r,4),m("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Gt(c,3)),this.setAttribute("normal",new Gt(h,3)),this.setAttribute("uv",new Gt(u,2));function m(x,g,d,w,E,_,M,b,A,v,y){const P=_/A,C=M/v,L=_/2,I=M/2,R=b/2,U=A+1,V=v+1;let F=0,X=0;const B=new G;for(let W=0;W<V;W++){const ee=W*C-I;for(let le=0;le<U;le++){const ce=le*P-L;B[x]=ce*w,B[g]=ee*E,B[d]=R,c.push(B.x,B.y,B.z),B[x]=0,B[g]=0,B[d]=b>0?1:-1,h.push(B.x,B.y,B.z),u.push(le/A),u.push(1-W/v),F+=1}}for(let W=0;W<v;W++)for(let ee=0;ee<A;ee++){const le=f+ee+U*W,ce=f+ee+U*(W+1),De=f+(ee+1)+U*(W+1),Ie=f+(ee+1)+U*W;l.push(le,ce,Ie),l.push(ce,De,Ie),X+=6}o.addGroup(p,X,y),p+=X,f+=F}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class jt extends Yt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,a=t/2,o=Math.floor(n),l=Math.floor(s),c=o+1,h=l+1,u=e/o,f=t/l,p=[],m=[],x=[],g=[];for(let d=0;d<h;d++){const w=d*f-a;for(let E=0;E<c;E++){const _=E*u-r;m.push(_,-w,0),x.push(0,0,1),g.push(E/o),g.push(1-d/l)}}for(let d=0;d<l;d++)for(let w=0;w<o;w++){const E=w+c*d,_=w+c*(d+1),M=w+1+c*(d+1),b=w+1+c*d;p.push(E,_,b),p.push(_,M,b)}this.setIndex(p),this.setAttribute("position",new Gt(m,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jt(e.width,e.height,e.widthSegments,e.heightSegments)}}class wo extends Yt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const h=[],u=new G,f=new G,p=[],m=[],x=[],g=[];for(let d=0;d<=n;d++){const w=[],E=d/n,_=a+E*o,M=e*Math.cos(_),b=Math.sqrt(e*e-M*M);let A=0;d===0&&a===0?A=.5/t:d===n&&l===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){const y=v/t,P=s+y*r;u.x=-b*Math.cos(P),u.y=M,u.z=b*Math.sin(P),m.push(u.x,u.y,u.z),f.copy(u).normalize(),x.push(f.x,f.y,f.z),g.push(y+A,1-E),w.push(c++)}h.push(w)}for(let d=0;d<n;d++)for(let w=0;w<t;w++){const E=h[d][w+1],_=h[d][w],M=h[d+1][w],b=h[d+1][w+1];(d!==0||a>0)&&p.push(E,_,b),(d!==n-1||l<Math.PI)&&p.push(_,M,b)}this.setIndex(p),this.setAttribute("position",new Gt(m,3)),this.setAttribute("normal",new Gt(x,3)),this.setAttribute("uv",new Gt(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Wu extends Ii{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new Le(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}function Li(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];if(fl(s))s.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone();else if(Array.isArray(s))if(fl(s[0])){const r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();e[t][n]=r}else e[t][n]=s.slice();else e[t][n]=s}}return e}function Bt(i){const e={};for(let t=0;t<i.length;t++){const n=Li(i[t]);for(const s in n)e[s]=n[s]}return e}function fl(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function Xu(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Vc(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Xe.workingColorSpace}const Ai={clone:Li,merge:Bt};var qu=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yu=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class bt extends Ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qu,this.fragmentShader=Yu,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Li(e.uniforms),this.uniformsGroups=Xu(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const a=this.uniforms[s].value;a&&a.isTexture?t.uniforms[s]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[s]={type:"m4",value:a.toArray()}:t.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const s=e.uniforms[n];switch(this.uniforms[n]={},s.type){case"t":this.uniforms[n].value=t[s.value]||null;break;case"c":this.uniforms[n].value=new Le().setHex(s.value);break;case"v2":this.uniforms[n].value=new Ne().fromArray(s.value);break;case"v3":this.uniforms[n].value=new G().fromArray(s.value);break;case"v4":this.uniforms[n].value=new it().fromArray(s.value);break;case"m3":this.uniforms[n].value=new ke().fromArray(s.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(s.value);break;default:this.uniforms[n].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Gc extends bt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class hs extends Ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Wa,this.normalScale=new Ne(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new zn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class qa extends hs{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ne(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return qe(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._retroreflectivity=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get retroreflectivity(){return this._retroreflectivity}set retroreflectivity(e){this._retroreflectivity>0!=e>0&&this.version++,this._retroreflectivity=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.retroreflectivity=e.retroreflectivity,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Wc extends Ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ru,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Ku extends Ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Br={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(dl(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!dl(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function dl(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class Zu{constructor(e,t,n){const s=this;let r=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,f=c.length;u<f;u+=2){const p=c[u],m=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return m}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const Ju=new Zu;class Eo{constructor(e){this.manager=e!==void 0?e:Ju,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Eo.DEFAULT_MATERIAL_NAME="__DEFAULT";const pi=new WeakMap;class Qu extends Eo{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,a=Br.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)r.manager.itemStart(e),setTimeout(function(){t&&t(a),r.manager.itemEnd(e)},0);else{let u=pi.get(a);u===void 0&&(u=[],pi.set(a,u)),u.push({onLoad:t,onError:s})}return a}const o=os("img");function l(){h(),t&&t(this);const u=pi.get(this)||[];for(let f=0;f<u.length;f++){const p=u[f];p.onLoad&&p.onLoad(this)}pi.delete(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),Br.remove(`image:${e}`);const f=pi.get(this)||[];for(let p=0;p<f.length;p++){const m=f[p];m.onError&&m.onError(u)}pi.delete(this),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),Br.add(`image:${e}`,o),r.manager.itemStart(e),o.src=e,o}}class Xc extends Eo{constructor(e){super(e)}load(e,t,n,s){const r=new mt,a=new Qu(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){r.image=o,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class ju extends Ft{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const kr=new ct,pl=new G,ml=new G;class $u{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ne(512,512),this.mapType=Ct,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new bo,this._frameExtents=new Ne(1,1),this._viewportCount=1,this._viewports=[new it(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;pl.setFromMatrixPosition(e.matrixWorld),t.position.copy(pl),ml.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(ml),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,s){kr.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(kr,e.coordinateSystem,e.reversedDepth);const r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;e.coordinateSystem===as||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(kr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ns=new G,Fs=new Di,ln=new G;class qc extends Ft{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=pn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ns,Fs,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ns,Fs,ln.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Ns,Fs,ln),ln.x===1&&ln.y===1&&ln.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ns,Fs,ln.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const On=new G,gl=new Ne,vl=new Ne;class Vt extends qc{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Xa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(gr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Xa*2*Math.atan(Math.tan(gr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){On.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(On.x,On.y).multiplyScalar(-e/On.z),On.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(On.x,On.y).multiplyScalar(-e/On.z)}getViewSize(e,t){return this.getViewBounds(e,gl,vl),t.subVectors(vl,gl)}setViewOffset(e,t,n,s,r,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(gr*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,t-=a.offsetY*n/c,s*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(r+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class ti extends qc{constructor(e=-1,t=1,n=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,a=n+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ef extends $u{constructor(){super(new ti(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class tf extends ju{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ft.DEFAULT_UP),this.updateMatrix(),this.target=new Ft,this.shadow=new ef}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const mi=-90,gi=1;class nf extends Ft{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Vt(mi,gi,e,t);s.layers=this.layers,this.add(s);const r=new Vt(mi,gi,e,t);r.layers=this.layers,this.add(r);const a=new Vt(mi,gi,e,t);a.layers=this.layers,this.add(a);const o=new Vt(mi,gi,e,t);o.layers=this.layers,this.add(o);const l=new Vt(mi,gi,e,t);l.layers=this.layers,this.add(l);const c=new Vt(mi,gi,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,a,o,l]=t;for(const c of t)this.remove(c);if(e===pn)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===as)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,a,o,l,c,h]=this.children,u=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),m=e.xr.enabled;e.xr.enabled=!1;const x=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let g=!1;e.isWebGLRenderer===!0?g=e.state.buffers.depth.getReversed():g=e.reversedDepthBuffer,e.setRenderTarget(n,0,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,r),e.setRenderTarget(n,1,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(n,4,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),n.texture.generateMipmaps=x,e.setRenderTarget(n,5,s),g&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(u,f,p),e.xr.enabled=m,n.texture.needsPMREMUpdate=!0}}class sf extends Vt{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class rf{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=af.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function af(){this._document.hidden===!1&&this.reset()}const xl=new ct;class of{constructor(e,t,n=0,s=1/0){this.ray=new kc(e,t),this.near=n,this.far=s,this.camera=null,this.layers=new So,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Je("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return xl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(xl),this}intersectObject(e,t=!0,n=[]){return Ya(e,this,n,t),n.sort(_l),n}intersectObjects(e,t=!0,n=[]){for(let s=0,r=e.length;s<r;s++)Ya(e[s],this,n,t);return n.sort(_l),n}}function _l(i,e){return i.distance-e.distance}function Ya(i,e,t,n){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&n===!0){const r=i.children;for(let a=0,o=r.length;a<o;a++)Ya(r[a],e,t,!0)}}class Yc{static{Yc.prototype.isMatrix2=!0}constructor(e,t,n,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,s){const r=this.elements;return r[0]=e,r[2]=t,r[1]=n,r[3]=s,this}}function Ml(i,e,t,n){const s=lf(n);switch(t){case Lc:return i*e;case Ic:return i*e/s.components*s.byteLength;case mo:return i*e/s.components*s.byteLength;case jn:return i*e*2/s.components*s.byteLength;case go:return i*e*2/s.components*s.byteLength;case Dc:return i*e*3/s.components*s.byteLength;case kt:return i*e*4/s.components*s.byteLength;case vo:return i*e*4/s.components*s.byteLength;case Ws:case Xs:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case qs:case Ys:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case ma:case va:return Math.max(i,16)*Math.max(e,8)/4;case pa:case ga:return Math.max(i,8)*Math.max(e,8)/2;case xa:case _a:case Sa:case ya:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ma:case $s:case ba:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Ea:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ta:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Aa:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Ca:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ra:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Pa:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case La:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Da:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Ia:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Ua:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Na:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Fa:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Oa:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ba:case ka:case za:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ha:case Va:return Math.ceil(i/4)*Math.ceil(e/4)*8;case er:case Ga:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function lf(i){switch(i){case Ct:case Ac:return{byteLength:1,components:1};case ss:case Cc:case yt:return{byteLength:2,components:1};case fo:case po:return{byteLength:2,components:4};case xn:case uo:case dn:return{byteLength:4,components:1};case Rc:case Pc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:io}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=io);function Kc(){let i=null,e=!1,t=null,n=null;function s(r,a){n=i.requestAnimationFrame(s),t(r,a)}return{start:function(){e!==!0&&t!==null&&i!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function cf(i){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,u=c.byteLength,f=i.createBuffer();i.bindBuffer(l,f),i.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=i.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:u}}function n(o,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,o),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,m)=>p.start-m.start);let f=0;for(let p=1;p<u.length;p++){const m=u[f],x=u[p];x.start<=m.start+m.count+1?m.count=Math.max(m.count,x.start+x.count-m.start):(++f,u[f]=x)}u.length=f+1;for(let p=0,m=u.length;p<m;p++){const x=u[p];i.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}var hf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,uf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ff=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,df=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gf=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,vf=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,xf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,_f=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Mf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Sf=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,yf=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,bf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,wf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ef=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Af=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Cf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Rf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Pf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Lf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Df=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,If=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Uf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Nf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Ff=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Of=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Bf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,kf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,zf="gl_FragColor = linearToOutputTexel( gl_FragColor );",Hf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Vf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Gf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wf=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Xf=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qf=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Yf=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Kf=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Zf=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Jf=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Qf=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,jf=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,$f=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ed=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,td=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,nd=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,id=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sd=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rd=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ad=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,od=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,ld=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,cd=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,hd=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,ud=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,fd=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,dd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pd=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,md=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gd=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,vd=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,xd=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,_d=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Md=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Sd=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,yd=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,bd=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,wd=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ed=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Td=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Ad=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Cd=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Rd=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Pd=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ld=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Dd=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Id=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Ud=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Nd=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fd=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Od=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Bd=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,kd=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,zd=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Hd=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Vd=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Gd=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wd=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xd=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qd=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,Yd=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Kd=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Zd=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Jd=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Qd=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,jd=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,$d=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,ep=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,tp=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,np=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ip=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,sp=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,rp=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ap=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,op=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,lp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,cp=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const hp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,up=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dp=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,mp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,vp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,xp=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,_p=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Mp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Sp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,bp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,wp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Ep=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ap=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Cp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Rp=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Pp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Lp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Dp=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Ip=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Up=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Np=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Fp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Op=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,kp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zp=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hp=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Vp=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Gp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,He={alphahash_fragment:hf,alphahash_pars_fragment:uf,alphamap_fragment:ff,alphamap_pars_fragment:df,alphatest_fragment:pf,alphatest_pars_fragment:mf,aomap_fragment:gf,aomap_pars_fragment:vf,batching_pars_vertex:xf,batching_vertex:_f,begin_vertex:Mf,beginnormal_vertex:Sf,bsdfs:yf,iridescence_fragment:bf,bumpmap_pars_fragment:wf,clipping_planes_fragment:Ef,clipping_planes_pars_fragment:Tf,clipping_planes_pars_vertex:Af,clipping_planes_vertex:Cf,color_fragment:Rf,color_pars_fragment:Pf,color_pars_vertex:Lf,color_vertex:Df,common:If,cube_uv_reflection_fragment:Uf,defaultnormal_vertex:Nf,displacementmap_pars_vertex:Ff,displacementmap_vertex:Of,emissivemap_fragment:Bf,emissivemap_pars_fragment:kf,colorspace_fragment:zf,colorspace_pars_fragment:Hf,envmap_fragment:Vf,envmap_common_pars_fragment:Gf,envmap_pars_fragment:Wf,envmap_pars_vertex:Xf,envmap_physical_pars_fragment:nd,envmap_vertex:qf,fog_vertex:Yf,fog_pars_vertex:Kf,fog_fragment:Zf,fog_pars_fragment:Jf,gradientmap_pars_fragment:Qf,lightmap_pars_fragment:jf,lights_lambert_fragment:$f,lights_lambert_pars_fragment:ed,lights_pars_begin:td,lights_toon_fragment:id,lights_toon_pars_fragment:sd,lights_phong_fragment:rd,lights_phong_pars_fragment:ad,lights_physical_fragment:od,lights_physical_pars_fragment:ld,lights_fragment_begin:cd,lights_fragment_maps:hd,lights_fragment_end:ud,lightprobes_pars_fragment:fd,logdepthbuf_fragment:dd,logdepthbuf_pars_fragment:pd,logdepthbuf_pars_vertex:md,logdepthbuf_vertex:gd,map_fragment:vd,map_pars_fragment:xd,map_particle_fragment:_d,map_particle_pars_fragment:Md,metalnessmap_fragment:Sd,metalnessmap_pars_fragment:yd,morphinstance_vertex:bd,morphcolor_vertex:wd,morphnormal_vertex:Ed,morphtarget_pars_vertex:Td,morphtarget_vertex:Ad,normal_fragment_begin:Cd,normal_fragment_maps:Rd,normal_pars_fragment:Pd,normal_pars_vertex:Ld,normal_vertex:Dd,normalmap_pars_fragment:Id,clearcoat_normal_fragment_begin:Ud,clearcoat_normal_fragment_maps:Nd,clearcoat_pars_fragment:Fd,iridescence_pars_fragment:Od,opaque_fragment:Bd,packing:kd,premultiplied_alpha_fragment:zd,project_vertex:Hd,dithering_fragment:Vd,dithering_pars_fragment:Gd,roughnessmap_fragment:Wd,roughnessmap_pars_fragment:Xd,shadowmap_pars_fragment:qd,shadowmap_pars_vertex:Yd,shadowmap_vertex:Kd,shadowmask_pars_fragment:Zd,skinbase_vertex:Jd,skinning_pars_vertex:Qd,skinning_vertex:jd,skinnormal_vertex:$d,specularmap_fragment:ep,specularmap_pars_fragment:tp,tonemapping_fragment:np,tonemapping_pars_fragment:ip,transmission_fragment:sp,transmission_pars_fragment:rp,uv_pars_fragment:ap,uv_pars_vertex:op,uv_vertex:lp,worldpos_vertex:cp,background_vert:hp,background_frag:up,backgroundCube_vert:fp,backgroundCube_frag:dp,cube_vert:pp,cube_frag:mp,depth_vert:gp,depth_frag:vp,distance_vert:xp,distance_frag:_p,equirect_vert:Mp,equirect_frag:Sp,linedashed_vert:yp,linedashed_frag:bp,meshbasic_vert:wp,meshbasic_frag:Ep,meshlambert_vert:Tp,meshlambert_frag:Ap,meshmatcap_vert:Cp,meshmatcap_frag:Rp,meshnormal_vert:Pp,meshnormal_frag:Lp,meshphong_vert:Dp,meshphong_frag:Ip,meshphysical_vert:Up,meshphysical_frag:Np,meshtoon_vert:Fp,meshtoon_frag:Op,points_vert:Bp,points_frag:kp,shadow_vert:zp,shadow_frag:Hp,sprite_vert:Vp,sprite_frag:Gp},ge={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ke}},envmap:{envMap:{value:null},envMapRotation:{value:new ke},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ke}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ke}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ke},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ke},normalScale:{value:new Ne(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ke},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ke}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ke}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ke}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0},uvTransform:{value:new ke}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Ne(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ke},alphaMap:{value:null},alphaMapTransform:{value:new ke},alphaTest:{value:0}}},un={basic:{uniforms:Bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.fog]),vertexShader:He.meshbasic_vert,fragmentShader:He.meshbasic_frag},lambert:{uniforms:Bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Le(0)},envMapIntensity:{value:1}}]),vertexShader:He.meshlambert_vert,fragmentShader:He.meshlambert_frag},phong:{uniforms:Bt([ge.common,ge.specularmap,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,ge.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:He.meshphong_vert,fragmentShader:He.meshphong_frag},standard:{uniforms:Bt([ge.common,ge.envmap,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.roughnessmap,ge.metalnessmap,ge.fog,ge.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag},toon:{uniforms:Bt([ge.common,ge.aomap,ge.lightmap,ge.emissivemap,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.gradientmap,ge.fog,ge.lights,{emissive:{value:new Le(0)}}]),vertexShader:He.meshtoon_vert,fragmentShader:He.meshtoon_frag},matcap:{uniforms:Bt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,ge.fog,{matcap:{value:null}}]),vertexShader:He.meshmatcap_vert,fragmentShader:He.meshmatcap_frag},points:{uniforms:Bt([ge.points,ge.fog]),vertexShader:He.points_vert,fragmentShader:He.points_frag},dashed:{uniforms:Bt([ge.common,ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:He.linedashed_vert,fragmentShader:He.linedashed_frag},depth:{uniforms:Bt([ge.common,ge.displacementmap]),vertexShader:He.depth_vert,fragmentShader:He.depth_frag},normal:{uniforms:Bt([ge.common,ge.bumpmap,ge.normalmap,ge.displacementmap,{opacity:{value:1}}]),vertexShader:He.meshnormal_vert,fragmentShader:He.meshnormal_frag},sprite:{uniforms:Bt([ge.sprite,ge.fog]),vertexShader:He.sprite_vert,fragmentShader:He.sprite_frag},background:{uniforms:{uvTransform:{value:new ke},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:He.background_vert,fragmentShader:He.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ke}},vertexShader:He.backgroundCube_vert,fragmentShader:He.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:He.cube_vert,fragmentShader:He.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:He.equirect_vert,fragmentShader:He.equirect_frag},distance:{uniforms:Bt([ge.common,ge.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:He.distance_vert,fragmentShader:He.distance_frag},shadow:{uniforms:Bt([ge.lights,ge.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:He.shadow_vert,fragmentShader:He.shadow_frag}};un.physical={uniforms:Bt([un.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ke},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ke},clearcoatNormalScale:{value:new Ne(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ke},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ke},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ke},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ke},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ke},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ke},transmissionSamplerSize:{value:new Ne},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ke},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ke},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ke},anisotropyVector:{value:new Ne},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ke}}]),vertexShader:He.meshphysical_vert,fragmentShader:He.meshphysical_frag};const Os={r:0,b:0,g:0},Wp=new ct,Zc=new ke;Zc.set(-1,0,0,0,1,0,0,0,1);function Xp(i,e,t,n,s,r){const a=new Le(0);let o=s===!0?0:1,l,c,h=null,u=0,f=null;function p(w){let E=w.isScene===!0?w.background:null;if(E&&E.isTexture){const _=w.backgroundBlurriness>0;E=e.get(E,_)}return E}function m(w){let E=!1;const _=p(w);_===null?g(a,o):_&&_.isColor&&(g(_,1),E=!0);const M=i.xr.getEnvironmentBlendMode();M==="additive"?t.buffers.color.setClear(0,0,0,1,r):M==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,r),(i.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function x(w,E){const _=p(E);_&&(_.isCubeTexture||_.mapping===or)?(c===void 0&&(c=new rt(new vn(1,1,1),new bt({name:"BackgroundCubeMaterial",uniforms:Li(un.backgroundCube.uniforms),vertexShader:un.backgroundCube.vertexShader,fragmentShader:un.backgroundCube.fragmentShader,side:zt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(M,b,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(Wp.makeRotationFromEuler(E.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zc),c.material.toneMapped=Xe.getTransfer(_.colorSpace)!==et,(h!==_||u!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new rt(new jt(2,2),new bt({name:"BackgroundMaterial",uniforms:Li(un.background.uniforms),vertexShader:un.background.vertexShader,fragmentShader:un.background.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=Xe.getTransfer(_.colorSpace)!==et,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||u!==_.version||f!==i.toneMapping)&&(l.material.needsUpdate=!0,h=_,u=_.version,f=i.toneMapping),l.layers.enableAll(),w.unshift(l,l.geometry,l.material,0,0,null))}function g(w,E){w.getRGB(Os,Vc(i)),t.buffers.color.setClear(Os.r,Os.g,Os.b,E,r)}function d(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(w,E=1){a.set(w),o=E,g(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(w){o=w,g(a,o)},render:m,addToRenderList:x,dispose:d}}function qp(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=f(null);let r=s,a=!1;function o(C,L,I,R,U){let V=!1;const F=u(C,R,I,L);r!==F&&(r=F,c(r.object)),V=p(C,R,I,U),V&&m(C,R,I,U),U!==null&&e.update(U,i.ELEMENT_ARRAY_BUFFER),(V||a)&&(a=!1,_(C,L,I,R),U!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(U).buffer))}function l(){return i.createVertexArray()}function c(C){return i.bindVertexArray(C)}function h(C){return i.deleteVertexArray(C)}function u(C,L,I,R){const U=R.wireframe===!0;let V=n[L.id];V===void 0&&(V={},n[L.id]=V);const F=C.isInstancedMesh===!0?C.id:0;let X=V[F];X===void 0&&(X={},V[F]=X);let B=X[I.id];B===void 0&&(B={},X[I.id]=B);let W=B[U];return W===void 0&&(W=f(l()),B[U]=W),W}function f(C){const L=[],I=[],R=[];for(let U=0;U<t;U++)L[U]=0,I[U]=0,R[U]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:I,attributeDivisors:R,object:C,attributes:{},index:null}}function p(C,L,I,R){const U=r.attributes,V=L.attributes;let F=0;const X=I.getAttributes();for(const B in X)if(X[B].location>=0){const ee=U[B];let le=V[B];if(le===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),ee===void 0||ee.attribute!==le||le&&ee.data!==le.data)return!0;F++}return r.attributesNum!==F||r.index!==R}function m(C,L,I,R){const U={},V=L.attributes;let F=0;const X=I.getAttributes();for(const B in X)if(X[B].location>=0){let ee=V[B];ee===void 0&&(B==="instanceMatrix"&&C.instanceMatrix&&(ee=C.instanceMatrix),B==="instanceColor"&&C.instanceColor&&(ee=C.instanceColor));const le={};le.attribute=ee,ee&&ee.data&&(le.data=ee.data),U[B]=le,F++}r.attributes=U,r.attributesNum=F,r.index=R}function x(){const C=r.newAttributes;for(let L=0,I=C.length;L<I;L++)C[L]=0}function g(C){d(C,0)}function d(C,L){const I=r.newAttributes,R=r.enabledAttributes,U=r.attributeDivisors;I[C]=1,R[C]===0&&(i.enableVertexAttribArray(C),R[C]=1),U[C]!==L&&(i.vertexAttribDivisor(C,L),U[C]=L)}function w(){const C=r.newAttributes,L=r.enabledAttributes;for(let I=0,R=L.length;I<R;I++)L[I]!==C[I]&&(i.disableVertexAttribArray(I),L[I]=0)}function E(C,L,I,R,U,V,F){F===!0?i.vertexAttribIPointer(C,L,I,U,V):i.vertexAttribPointer(C,L,I,R,U,V)}function _(C,L,I,R){x();const U=R.attributes,V=I.getAttributes(),F=L.defaultAttributeValues;for(const X in V){const B=V[X];if(B.location>=0){let W=U[X];if(W===void 0&&(X==="instanceMatrix"&&C.instanceMatrix&&(W=C.instanceMatrix),X==="instanceColor"&&C.instanceColor&&(W=C.instanceColor)),W!==void 0){const ee=W.normalized,le=W.itemSize,ce=e.get(W);if(ce===void 0)continue;const De=ce.buffer,Ie=ce.type,Fe=ce.bytesPerElement,Q=Ie===i.INT||Ie===i.UNSIGNED_INT||W.gpuType===uo;if(W.isInterleavedBufferAttribute){const z=W.data,K=z.stride,$=W.offset;if(z.isInstancedInterleavedBuffer){for(let j=0;j<B.locationSize;j++)d(B.location+j,z.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=z.meshPerAttribute*z.count)}else for(let j=0;j<B.locationSize;j++)g(B.location+j);i.bindBuffer(i.ARRAY_BUFFER,De);for(let j=0;j<B.locationSize;j++)E(B.location+j,le/B.locationSize,Ie,ee,K*Fe,($+le/B.locationSize*j)*Fe,Q)}else{if(W.isInstancedBufferAttribute){for(let z=0;z<B.locationSize;z++)d(B.location+z,W.meshPerAttribute);C.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=W.meshPerAttribute*W.count)}else for(let z=0;z<B.locationSize;z++)g(B.location+z);i.bindBuffer(i.ARRAY_BUFFER,De);for(let z=0;z<B.locationSize;z++)E(B.location+z,le/B.locationSize,Ie,ee,le*Fe,le/B.locationSize*z*Fe,Q)}}else if(F!==void 0){const ee=F[X];if(ee!==void 0)switch(ee.length){case 2:i.vertexAttrib2fv(B.location,ee);break;case 3:i.vertexAttrib3fv(B.location,ee);break;case 4:i.vertexAttrib4fv(B.location,ee);break;default:i.vertexAttrib1fv(B.location,ee)}}}}w()}function M(){y();for(const C in n){const L=n[C];for(const I in L){const R=L[I];for(const U in R){const V=R[U];for(const F in V)h(V[F].object),delete V[F];delete R[U]}}delete n[C]}}function b(C){if(n[C.id]===void 0)return;const L=n[C.id];for(const I in L){const R=L[I];for(const U in R){const V=R[U];for(const F in V)h(V[F].object),delete V[F];delete R[U]}}delete n[C.id]}function A(C){for(const L in n){const I=n[L];for(const R in I){const U=I[R];if(U[C.id]===void 0)continue;const V=U[C.id];for(const F in V)h(V[F].object),delete V[F];delete U[C.id]}}}function v(C){for(const L in n){const I=n[L],R=C.isInstancedMesh===!0?C.id:0,U=I[R];if(U!==void 0){for(const V in U){const F=U[V];for(const X in F)h(F[X].object),delete F[X];delete U[V]}delete I[R],Object.keys(I).length===0&&delete n[L]}}}function y(){P(),a=!0,r!==s&&(r=s,c(r.object))}function P(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:y,resetDefaultState:P,dispose:M,releaseStatesOfGeometry:b,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:g,disableUnusedAttributes:w}}function Yp(i,e,t){let n;function s(l){n=l}function r(l,c){i.drawArrays(n,l,c),t.update(c,n,1)}function a(l,c,h){h!==0&&(i.drawArraysInstanced(n,l,c,h),t.update(c,n,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,c,0,h);let f=0;for(let p=0;p<h;p++)f+=c[p];t.update(f,n,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Kp(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==kt&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const v=A===yt&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Ct&&A!==dn&&!v&&n.convert(A)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(Be("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&f===!1&&Be("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),m=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=i.getParameter(i.MAX_TEXTURE_SIZE),g=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),d=i.getParameter(i.MAX_VERTEX_ATTRIBS),w=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),E=i.getParameter(i.MAX_VARYING_VECTORS),_=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),M=i.getParameter(i.MAX_SAMPLES),b=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:m,maxTextureSize:x,maxCubemapSize:g,maxAttributes:d,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:_,maxSamples:M,samples:b}}function Zp(i){const e=this;let t=null,n=0,s=!1,r=!1;const a=new sn,o=new ke,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,f){const p=u.length!==0||f||n!==0||s;return s=f,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,f){t=h(u,f,0)},this.setState=function(u,f,p){const m=u.clippingPlanes,x=u.clipIntersection,g=u.clipShadows,d=i.get(u);if(!s||m===null||m.length===0||r&&!g)r?h(null):c();else{const w=r?0:n,E=w*4;let _=d.clippingState||null;l.value=_,_=h(m,f,E,p);for(let M=0;M!==E;++M)_[M]=t[M];d.clippingState=_,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,f,p,m){const x=u!==null?u.length:0;let g=null;if(x!==0){if(g=l.value,m!==!0||g===null){const d=p+x*4,w=f.matrixWorldInverse;o.getNormalMatrix(w),(g===null||g.length<d)&&(g=new Float32Array(d));for(let E=0,_=p;E!==x;++E,_+=4)a.copy(u[E]).applyMatrix4(w,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,g}}const bi=4,Jp=6,Qp=20,jp=256,Hi=new ti,Sl=new Le;let zr=null,Hr=0,Vr=0,Gr=!1;const $p=new G,qn=new G;class Ka{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,s=100,r={}){const{size:a=256,position:o=$p}=r;zr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,n,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=wl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(zr,Hr,Vr),this._renderer.xr.enabled=Gr,e.scissorTest=!1,vi(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Qn||e.mapping===Ri?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),zr=this._renderer.getRenderTarget(),Hr=this._renderer.getActiveCubeFace(),Vr=this._renderer.getActiveMipmapLevel(),Gr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Ye,minFilter:Ye,generateMipmaps:!1,type:yt,format:kt,colorSpace:tr,depthBuffer:!1},s=yl(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=yl(e,t,n);const{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=em(r)),this._blurMaterial=nm(r,e,t),this._ggxMaterial=tm(r,e,t)}return s}_compileMaterial(e){const t=new rt(new Yt,e);this._renderer.compile(t,Hi)}_sceneToCubeUV(e,t,n,s,r){const l=new Vt(90,1,t,n),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,p=u.toneMapping;u.getClearColor(Sl),u.toneMapping=gn,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(s),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rt(new vn,new ps({name:"PMREM.Background",side:zt,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,g=x.material;let d=!1;const w=e.background;w?w.isColor&&(g.color.copy(w),e.background=null,d=!0):(g.color.copy(Sl),d=!0);for(let E=0;E<6;E++){const _=E%3;_===0?(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[E],r.y,r.z)):_===1?(l.up.set(0,0,c[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[E],r.z)):(l.up.set(0,c[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[E]));const M=this._cubeSize;vi(s,_*M,E>2?M:0,M,M),u.setRenderTarget(s),d&&u.render(x,l),u.render(e,l)}u.toneMapping=p,u.autoClear=f,e.background=w}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Qn||e.mapping===Ri;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=wl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=bl());const r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;const o=r.uniforms;o.envMap.value=e;const l=this._cubeSize;vi(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Hi)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(e,r-1,r);t.autoClear=n}_applyGGXFilter(e,t,n){const s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const l=a.uniforms,c=n/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),u=Math.sqrt(c*c-h*h),f=c*1.25,p=u*f,{_lodMax:m}=this,x=this._sizeLods[n],g=3*x*(n>m-bi?n-m+bi:0),d=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=m-t,vi(r,g,d,3*x,2*x),s.setRenderTarget(r),s.render(o,Hi),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=m-n,vi(e,g,d,3*x,2*x),s.setRenderTarget(e),s.render(o,Hi)}_blur(e,t,n,s){const r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,r,t,n,a),this._blurPass(r,e,n,n,a)}_blurPass(e,t,n,s,r){const a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;const c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-n;const h=this._sizeLods[s],u=3*h*(s>this._lodMax-bi?s-this._lodMax+bi:0),f=4*(this._cubeSize-h);vi(t,u,f,3*h,2*h),a.setRenderTarget(t),a.render(l,Hi)}}function em(i){const e=[],t=[];let n=i;const s=i-bi+1+Jp;for(let r=0;r<s;r++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],u=6,f=6,p=3,m=new Float32Array(p*f*u),x=new Float32Array(p*f*u);for(let d=0;d<u;d++){const w=d%3*2/3-1,E=d>2?0:-1,_=[w,E,0,w+2/3,E,0,w+2/3,E+1,0,w,E,0,w+2/3,E+1,0,w,E+1,0];m.set(_,p*f*d);for(let M=0;M<f;M++){const b=h[M*2]*2-1,A=h[M*2+1]*2-1;d===0?qn.set(1,A,b):d===1?qn.set(-b,1,-A):d===2?qn.set(-b,A,1):d===3?qn.set(-1,A,-b):d===4?qn.set(-b,-1,A):qn.set(b,A,-1),qn.toArray(x,(d*f+M)*p)}}const g=new Yt;g.setAttribute("position",new Rt(m,p)),g.setAttribute("outputDirection",new Rt(x,p)),t.push(new rt(g,null)),n>bi&&n--}return{lodMeshes:t,sizeLods:e}}function yl(i,e,t){const n=new Mt(i,e,t);return n.texture.mapping=or,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function vi(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function tm(i,e,t){return new bt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:jp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function nm(i,e,t){return new bt({name:"SphericalGaussianBlur",defines:{SAMPLES:Qp,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:lr(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function bl(){return new bt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function wl(){return new bt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lr(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mn,depthTest:!1,depthWrite:!1})}function lr(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Jc extends Mt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new zc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new vn(5,5,5),r=new bt({name:"CubemapFromEquirect",uniforms:Li(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:zt,blending:mn});r.uniforms.tEquirect.value=t;const a=new rt(s,r),o=t.minFilter;return t.minFilter===qt&&(t.minFilter=Ye),new nf(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,s=!0){const r=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,s);e.setRenderTarget(r)}}function im(i){let e=new WeakMap,t=new WeakMap,n=null;function s(f,p=!1){return f==null?null:p?a(f):r(f)}function r(f){if(f&&f.isTexture){const p=f.mapping;if(p===fr||p===dr)if(e.has(f)){const m=e.get(f).texture;return o(m,f.mapping)}else{const m=f.image;if(m&&m.height>0){const x=new Jc(m.height);return x.fromEquirectangularTexture(i,f),e.set(f,x),f.addEventListener("dispose",c),o(x.texture,f.mapping)}else return null}}return f}function a(f){if(f&&f.isTexture){const p=f.mapping,m=p===fr||p===dr,x=p===Qn||p===Ri;if(m||x){let g=t.get(f);const d=g!==void 0?g.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==d)return n===null&&(n=new Ka(i)),g=m?n.fromEquirectangular(f,g):n.fromCubemap(f,g),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),g.texture;if(g!==void 0)return g.texture;{const w=f.image;return m&&w&&w.height>0||x&&w&&l(w)?(n===null&&(n=new Ka(i)),g=m?n.fromEquirectangular(f):n.fromCubemap(f),g.texture.pmremVersion=f.pmremVersion,t.set(f,g),f.addEventListener("dispose",h),g.texture):null}}}return f}function o(f,p){return p===fr?f.mapping=Qn:p===dr&&(f.mapping=Ri),f}function l(f){let p=0;const m=6;for(let x=0;x<m;x++)f[x]!==void 0&&p++;return p===m}function c(f){const p=f.target;p.removeEventListener("dispose",c);const m=e.get(p);m!==void 0&&(e.delete(p),m.dispose())}function h(f){const p=f.target;p.removeEventListener("dispose",h);const m=t.get(p);m!==void 0&&(t.delete(p),m.dispose())}function u(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:s,dispose:u}}function sm(i){const e={};function t(n){if(e[n]!==void 0)return e[n];const s=i.getExtension(n);return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ei("WebGLRenderer: "+n+" extension not supported."),s}}}function rm(i,e,t,n){const s={},r=new WeakMap;function a(u){const f=u.target;f.index!==null&&e.remove(f.index);for(const m in f.attributes)e.remove(f.attributes[m]);f.removeEventListener("dispose",a),delete s[f.id];const p=r.get(f);p&&(e.remove(p),r.delete(f)),n.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(u,f){return s[f.id]===!0||(f.addEventListener("dispose",a),s[f.id]=!0,t.memory.geometries++),f}function l(u){const f=u.attributes;for(const p in f)e.update(f[p],i.ARRAY_BUFFER)}function c(u){const f=[],p=u.index,m=u.attributes.position;let x=0;if(m===void 0)return;if(p!==null){const w=p.array;x=p.version;for(let E=0,_=w.length;E<_;E+=3){const M=w[E+0],b=w[E+1],A=w[E+2];f.push(M,b,b,A,A,M)}}else{const w=m.array;x=m.version;for(let E=0,_=w.length/3-1;E<_;E+=3){const M=E+0,b=E+1,A=E+2;f.push(M,b,b,A,A,M)}}const g=new(m.count>=65535?Bc:Oc)(f,1);g.version=x;const d=r.get(u);d&&e.remove(d),r.set(u,g)}function h(u){const f=r.get(u);if(f){const p=u.index;p!==null&&f.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:o,update:l,getWireframeAttribute:h}}function am(i,e,t){let n;function s(u){n=u}let r,a;function o(u){r=u.type,a=u.bytesPerElement}function l(u,f){i.drawElements(n,f,r,u*a),t.update(f,n,1)}function c(u,f,p){p!==0&&(i.drawElementsInstanced(n,f,r,u*a,p),t.update(f,n,p))}function h(u,f,p){if(p===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,f,0,r,u,0,p);let x=0;for(let g=0;g<p;g++)x+=f[g];t.update(x,n,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function om(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(r/3);break;case i.LINES:t.lines+=o*(r/2);break;case i.LINE_STRIP:t.lines+=o*(r-1);break;case i.LINE_LOOP:t.lines+=o*r;break;case i.POINTS:t.points+=o*r;break;default:Je("WebGLInfo: Unknown draw mode:",a);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function lm(i,e,t){const n=new WeakMap,s=new it;function r(a,o,l){const c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,u=h!==void 0?h.length:0;let f=n.get(o);if(f===void 0||f.count!==u){let y=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",y)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,m=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],d=o.morphAttributes.normal||[],w=o.morphAttributes.color||[];let E=0;p===!0&&(E=1),m===!0&&(E=2),x===!0&&(E=3);let _=o.attributes.position.count*E,M=1;_>e.maxTextureSize&&(M=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const b=new Float32Array(_*M*4*u),A=new Nc(b,_,M,u);A.type=dn,A.needsUpdate=!0;const v=E*4;for(let P=0;P<u;P++){const C=g[P],L=d[P],I=w[P],R=_*M*4*P;for(let U=0;U<C.count;U++){const V=U*v;p===!0&&(s.fromBufferAttribute(C,U),b[R+V+0]=s.x,b[R+V+1]=s.y,b[R+V+2]=s.z,b[R+V+3]=0),m===!0&&(s.fromBufferAttribute(L,U),b[R+V+4]=s.x,b[R+V+5]=s.y,b[R+V+6]=s.z,b[R+V+7]=0),x===!0&&(s.fromBufferAttribute(I,U),b[R+V+8]=s.x,b[R+V+9]=s.y,b[R+V+10]=s.z,b[R+V+11]=I.itemSize===4?s.w:1)}}f={count:u,texture:A,size:new Ne(_,M)},n.set(o,f),o.addEventListener("dispose",y)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const m=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",m),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",f.size)}return{update:r}}function cm(i,e,t,n,s){let r=new WeakMap;function a(c){const h=s.render.frame,u=c.geometry,f=e.get(c,u);if(r.get(f)!==h&&(e.update(f),r.set(f,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(t.update(c.instanceMatrix,i.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,i.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){const p=c.skeleton;r.get(p)!==h&&(p.update(),r.set(p,h))}return f}function o(){r=new WeakMap}function l(c){const h=c.target;h.removeEventListener("dispose",l),n.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}const hm={[ro]:"LINEAR_TONE_MAPPING",[ao]:"REINHARD_TONE_MAPPING",[oo]:"CINEON_TONE_MAPPING",[lo]:"ACES_FILMIC_TONE_MAPPING",[ho]:"AGX_TONE_MAPPING",[ar]:"NEUTRAL_TONE_MAPPING",[co]:"CUSTOM_TONE_MAPPING"};function um(i,e,t,n,s,r){const a=new Mt(e,t,{type:i,depthBuffer:s,stencilBuffer:r,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,l=null;const c=new Yt;c.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Gt([0,2,0,0,2,0],2));const h=new Gc({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),u=new rt(c,h),f=new ti(-1,1,1,-1,0,1);let p=null,m=null,x=!1,g,d=null,w=[],E=!1;this.setSize=function(_,M){a.setSize(_,M),o!==null&&o.setSize(_,M),l!==null&&l.setSize(_,M);for(let b=0;b<w.length;b++){const A=w[b];A.setSize&&A.setSize(_,M)}},this.setEffects=function(_){w=_,E=w.length>0&&w[0].isRenderPass===!0;const M=a.width,b=a.height;w.length>0&&o===null&&(o=new Mt(M,b,{type:yt,depthBuffer:!1,stencilBuffer:!1}),l=new Mt(M,b,{type:yt,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<w.length;A++){const v=w[A];v.setSize&&v.setSize(M,b)}},this.begin=function(_,M){if(x||_.toneMapping===gn&&w.length===0)return!1;if(d=M,M!==null){const b=M.width,A=M.height;(a.width!==b||a.height!==A)&&this.setSize(b,A)}return E===!1&&_.setRenderTarget(a),g=_.toneMapping,_.toneMapping=gn,!0},this.hasRenderPass=function(){return E},this.end=function(_,M){_.toneMapping=g,x=!0;let b=a,A=o;for(let v=0;v<w.length;v++){const y=w[v];y.enabled!==!1&&(y.render(_,A,b,M),y.needsSwap!==!1&&(b=A,A=A===o?l:o))}if(p!==_.outputColorSpace||m!==_.toneMapping){p=_.outputColorSpace,m=_.toneMapping,h.defines={},Xe.getTransfer(p)===et&&(h.defines.SRGB_TRANSFER="");const v=hm[m];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=b.texture,_.setRenderTarget(d),_.render(u,f),d=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}const Qc=new mt,Za=new Pi(1,1),jc=new Nc,$c=new Tu,eh=new zc,El=[],Tl=[],Al=new Float32Array(16),Cl=new Float32Array(9),Rl=new Float32Array(4);function Ui(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=El[s];if(r===void 0&&(r=new Float32Array(s),El[s]=r),e!==0){n.toArray(r,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(r,o)}return r}function wt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Et(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function cr(i,e){let t=Tl[e];t===void 0&&(t=new Int32Array(e),Tl[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function fm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function dm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2fv(this.addr,e),Et(t,e)}}function pm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(wt(t,e))return;i.uniform3fv(this.addr,e),Et(t,e)}}function mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4fv(this.addr,e),Et(t,e)}}function gm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,n))return;Rl.set(n),i.uniformMatrix2fv(this.addr,!1,Rl),Et(t,n)}}function vm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,n))return;Cl.set(n),i.uniformMatrix3fv(this.addr,!1,Cl),Et(t,n)}}function xm(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(wt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Et(t,e)}else{if(wt(t,n))return;Al.set(n),i.uniformMatrix4fv(this.addr,!1,Al),Et(t,n)}}function _m(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Mm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2iv(this.addr,e),Et(t,e)}}function Sm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3iv(this.addr,e),Et(t,e)}}function ym(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4iv(this.addr,e),Et(t,e)}}function bm(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function wm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(wt(t,e))return;i.uniform2uiv(this.addr,e),Et(t,e)}}function Em(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(wt(t,e))return;i.uniform3uiv(this.addr,e),Et(t,e)}}function Tm(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(wt(t,e))return;i.uniform4uiv(this.addr,e),Et(t,e)}}function Am(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Za.compareFunction=t.isReversedDepthBuffer()?_o:xo,r=Za):r=Qc,t.setTexture2D(e||r,s)}function Cm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||$c,s)}function Rm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||eh,s)}function Pm(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||jc,s)}function Lm(i){switch(i){case 5126:return fm;case 35664:return dm;case 35665:return pm;case 35666:return mm;case 35674:return gm;case 35675:return vm;case 35676:return xm;case 5124:case 35670:return _m;case 35667:case 35671:return Mm;case 35668:case 35672:return Sm;case 35669:case 35673:return ym;case 5125:return bm;case 36294:return wm;case 36295:return Em;case 36296:return Tm;case 35678:case 36198:case 36298:case 36306:case 35682:return Am;case 35679:case 36299:case 36307:return Cm;case 35680:case 36300:case 36308:case 36293:return Rm;case 36289:case 36303:case 36311:case 36292:return Pm}}function Dm(i,e){i.uniform1fv(this.addr,e)}function Im(i,e){const t=Ui(e,this.size,2);i.uniform2fv(this.addr,t)}function Um(i,e){const t=Ui(e,this.size,3);i.uniform3fv(this.addr,t)}function Nm(i,e){const t=Ui(e,this.size,4);i.uniform4fv(this.addr,t)}function Fm(i,e){const t=Ui(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Om(i,e){const t=Ui(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Bm(i,e){const t=Ui(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function km(i,e){i.uniform1iv(this.addr,e)}function zm(i,e){i.uniform2iv(this.addr,e)}function Hm(i,e){i.uniform3iv(this.addr,e)}function Vm(i,e){i.uniform4iv(this.addr,e)}function Gm(i,e){i.uniform1uiv(this.addr,e)}function Wm(i,e){i.uniform2uiv(this.addr,e)}function Xm(i,e){i.uniform3uiv(this.addr,e)}function qm(i,e){i.uniform4uiv(this.addr,e)}function Ym(i,e,t){const n=this.cache,s=e.length,r=cr(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));let a;this.type===i.SAMPLER_2D_SHADOW?a=Za:a=Qc;for(let o=0;o!==s;++o)t.setTexture2D(e[o]||a,r[o])}function Km(i,e,t){const n=this.cache,s=e.length,r=cr(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture3D(e[a]||$c,r[a])}function Zm(i,e,t){const n=this.cache,s=e.length,r=cr(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTextureCube(e[a]||eh,r[a])}function Jm(i,e,t){const n=this.cache,s=e.length,r=cr(t,s);wt(n,r)||(i.uniform1iv(this.addr,r),Et(n,r));for(let a=0;a!==s;++a)t.setTexture2DArray(e[a]||jc,r[a])}function Qm(i){switch(i){case 5126:return Dm;case 35664:return Im;case 35665:return Um;case 35666:return Nm;case 35674:return Fm;case 35675:return Om;case 35676:return Bm;case 5124:case 35670:return km;case 35667:case 35671:return zm;case 35668:case 35672:return Hm;case 35669:case 35673:return Vm;case 5125:return Gm;case 36294:return Wm;case 36295:return Xm;case 36296:return qm;case 35678:case 36198:case 36298:case 36306:case 35682:return Ym;case 35679:case 36299:case 36307:return Km;case 35680:case 36300:case 36308:case 36293:return Zm;case 36289:case 36303:case 36311:case 36292:return Jm}}class jm{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Lm(t.type)}}class $m{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Qm(t.type)}}class eg{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,a=s.length;r!==a;++r){const o=s[r];o.setValue(e,t[o.id],n)}}}const Wr=/(\w+)(\])?(\[|\.)?/g;function Pl(i,e){i.seq.push(e),i.map[e.id]=e}function tg(i,e,t){const n=i.name,s=n.length;for(Wr.lastIndex=0;;){const r=Wr.exec(n),a=Wr.lastIndex;let o=r[1];const l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Pl(t,c===void 0?new jm(o,i,e):new $m(o,i,e));break}else{let u=t.map[o];u===void 0&&(u=new eg(o),Pl(t,u)),t=u}}}class Ks{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);tg(o,l,this)}const s=[],r=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,a=t.length;r!==a;++r){const o=t[r],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const a=e[s];a.id in t&&n.push(a)}return n}}function Ll(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const ng=37297;let ig=0;function sg(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let a=s;a<r;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Dl=new ke;function rg(i){Xe._getMatrix(Dl,Xe.workingColorSpace,i);const e=`mat3( ${Dl.elements.map(t=>t.toFixed(4))} )`;switch(Xe.getTransfer(i)){case nr:return[e,"LinearTransferOETF"];case et:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function Il(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=(i.getShaderInfoLog(e)||"").trim();if(n&&r==="")return"";const a=/ERROR: 0:(\d+)/.exec(r);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+r+`

`+sg(i.getShaderSource(e),o)}else return r}function ag(i,e){const t=rg(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const og={[ro]:"Linear",[ao]:"Reinhard",[oo]:"Cineon",[lo]:"ACESFilmic",[ho]:"AgX",[ar]:"Neutral",[co]:"Custom"};function lg(i,e){const t=og[e];return t===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Bs=new G;function cg(){Xe.getLuminanceCoefficients(Bs);const i=Bs.x.toFixed(4),e=Bs.y.toFixed(4),t=Bs.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function hg(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Zi).join(`
`)}function ug(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function fg(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),a=r.name;let o=1;r.type===i.FLOAT_MAT2&&(o=2),r.type===i.FLOAT_MAT3&&(o=3),r.type===i.FLOAT_MAT4&&(o=4),t[a]={type:r.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Zi(i){return i!==""}function Ul(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Nl(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const dg=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ja(i){return i.replace(dg,mg)}const pg=new Map;function mg(i,e){let t=He[e];if(t===void 0){const n=pg.get(e);if(n!==void 0)t=He[n],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Ja(t)}const gg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Fl(i){return i.replace(gg,vg)}function vg(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ol(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const xg={[ji]:"SHADOWMAP_TYPE_PCF",[Ki]:"SHADOWMAP_TYPE_VSM"};function _g(i){return xg[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Mg={[Qn]:"ENVMAP_TYPE_CUBE",[Ri]:"ENVMAP_TYPE_CUBE",[or]:"ENVMAP_TYPE_CUBE_UV"};function Sg(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":Mg[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const yg={[Ri]:"ENVMAP_MODE_REFRACTION"};function bg(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":yg[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const wg={[Ec]:"ENVMAP_BLENDING_MULTIPLY",[nu]:"ENVMAP_BLENDING_MIX",[iu]:"ENVMAP_BLENDING_ADD"};function Eg(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":wg[i.combine]||"ENVMAP_BLENDING_NONE"}function Tg(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Ag(i,e,t,n){const s=i.getContext(),r=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=_g(t),c=Sg(t),h=bg(t),u=Eg(t),f=Tg(t),p=hg(t),m=ug(r),x=s.createProgram();let g,d,w=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Zi).join(`
`),g.length>0&&(g+=`
`),d=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m].filter(Zi).join(`
`),d.length>0&&(d+=`
`)):(g=[Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Zi).join(`
`),d=[Ol(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gn?"#define TONE_MAPPING":"",t.toneMapping!==gn?He.tonemapping_pars_fragment:"",t.toneMapping!==gn?lg("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",He.colorspace_pars_fragment,ag("linearToOutputTexel",t.outputColorSpace),cg(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Zi).join(`
`)),a=Ja(a),a=Ul(a,t),a=Nl(a,t),o=Ja(o),o=Ul(o,t),o=Nl(o,t),a=Fl(a),o=Fl(o),t.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,g=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,d=["#define varying in",t.glslVersion===Zo?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Zo?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const E=w+g+a,_=w+d+o,M=Ll(s,s.VERTEX_SHADER,E),b=Ll(s,s.FRAGMENT_SHADER,_);s.attachShader(x,M),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function A(C){if(i.debug.checkShaderErrors){const L=s.getProgramInfoLog(x)||"",I=s.getShaderInfoLog(M)||"",R=s.getShaderInfoLog(b)||"",U=L.trim(),V=I.trim(),F=R.trim();let X=!0,B=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(X=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,x,M,b);else{const W=Il(s,M,"vertex"),ee=Il(s,b,"fragment");Je("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+C.name+`
Material Type: `+C.type+`

Program Info Log: `+U+`
`+W+`
`+ee)}else U!==""?Be("WebGLProgram: Program Info Log:",U):(V===""||F==="")&&(B=!1);B&&(C.diagnostics={runnable:X,programLog:U,vertexShader:{log:V,prefix:g},fragmentShader:{log:F,prefix:d}})}s.deleteShader(M),s.deleteShader(b),v=new Ks(s,x),y=fg(s,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let y;this.getAttributes=function(){return y===void 0&&A(this),y};let P=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return P===!1&&(P=s.getProgramParameter(x,ng)),P},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=ig++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=M,this.fragmentShader=b,this}let Cg=0;class Rg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(n)===!1&&(s.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Pg(e),t.set(e,n)),n}}class Pg{constructor(e){this.id=Cg++,this.code=e,this.usedTimes=0}}function Lg(i){return i===jn||i===$s||i===er}function Dg(i,e,t,n,s,r){const a=new So,o=new Rg,l=new Set,c=[],h=new Map,u=n.logarithmicDepthBuffer;let f=n.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,y,P,C,L,I){const R=C.fog,U=L.geometry,V=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?C.environment:null,F=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,X=e.get(v.envMap||V,F),B=X&&X.mapping===or?X.image.height:null,W=p[v.type];v.precision!==null&&(f=n.getMaxPrecision(v.precision),f!==v.precision&&Be("WebGLProgram.getParameters:",v.precision,"not supported, using",f,"instead."));const ee=U.morphAttributes.position||U.morphAttributes.normal||U.morphAttributes.color,le=ee!==void 0?ee.length:0;let ce=0;U.morphAttributes.position!==void 0&&(ce=1),U.morphAttributes.normal!==void 0&&(ce=2),U.morphAttributes.color!==void 0&&(ce=3);let De,Ie,Fe,Q;if(W){const ot=un[W];De=ot.vertexShader,Ie=ot.fragmentShader}else{De=v.vertexShader,Ie=v.fragmentShader;const ot=o.getVertexShaderStage(v),je=o.getFragmentShaderStage(v);o.update(v,ot,je),Fe=ot.id,Q=je.id}const z=i.getRenderTarget(),K=i.state.buffers.depth.getReversed(),$=L.isInstancedMesh===!0,j=L.isBatchedMesh===!0,ae=!!v.map,Pe=!!v.matcap,we=!!X,Oe=!!v.aoMap,Qe=!!v.lightMap,Ge=!!v.bumpMap&&v.wireframe===!1,ht=!!v.normalMap,gt=!!v.displacementMap,Ke=!!v.emissiveMap,tt=!!v.metalnessMap,ft=!!v.roughnessMap,k=v.anisotropy>0,Pt=v.clearcoat>0,nt=v.dispersion>0,D=v.retroreflectivity>0,S=v.iridescence>0,H=v.sheen>0,Z=v.transmission>0,te=k&&!!v.anisotropyMap,oe=Pt&&!!v.clearcoatMap,he=Pt&&!!v.clearcoatNormalMap,ne=Pt&&!!v.clearcoatRoughnessMap,se=S&&!!v.iridescenceMap,ue=S&&!!v.iridescenceThicknessMap,Ae=H&&!!v.sheenColorMap,me=H&&!!v.sheenRoughnessMap,fe=!!v.specularMap,Ce=!!v.specularColorMap,Ue=!!v.specularIntensityMap,ze=Z&&!!v.transmissionMap,O=Z&&!!v.thicknessMap,de=!!v.gradientMap,ie=!!v.alphaMap,pe=v.alphaTest>0,_e=!!v.alphaHash,re=!!v.extensions;let Re=gn;v.toneMapped&&(z===null||z.isXRRenderTarget===!0)&&(Re=i.toneMapping);const Ee={shaderID:W,shaderType:v.type,shaderName:v.name,vertexShader:De,fragmentShader:Ie,defines:v.defines,customVertexShaderID:Fe,customFragmentShaderID:Q,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:f,batching:j,batchingColor:j&&L._colorsTexture!==null,instancing:$,instancingColor:$&&L.instanceColor!==null,instancingMorph:$&&L.morphTexture!==null,outputColorSpace:z===null?i.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Xe.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:ae,matcap:Pe,envMap:we,envMapMode:we&&X.mapping,envMapCubeUVHeight:B,aoMap:Oe,lightMap:Qe,bumpMap:Ge,normalMap:ht,displacementMap:gt,emissiveMap:Ke,normalMapObjectSpace:ht&&v.normalMapType===ou,normalMapTangentSpace:ht&&v.normalMapType===Wa,packedNormalMap:ht&&v.normalMapType===Wa&&Lg(v.normalMap.format),metalnessMap:tt,roughnessMap:ft,anisotropy:k,anisotropyMap:te,clearcoat:Pt,clearcoatMap:oe,clearcoatNormalMap:he,clearcoatRoughnessMap:ne,dispersion:nt,retroreflection:D,iridescence:S,iridescenceMap:se,iridescenceThicknessMap:ue,sheen:H,sheenColorMap:Ae,sheenRoughnessMap:me,specularMap:fe,specularColorMap:Ce,specularIntensityMap:Ue,transmission:Z,transmissionMap:ze,thicknessMap:O,gradientMap:de,opaque:v.transparent===!1&&v.blending===wi&&v.alphaToCoverage===!1,alphaMap:ie,alphaTest:pe,alphaHash:_e,combine:v.combine,mapUv:ae&&m(v.map.channel),aoMapUv:Oe&&m(v.aoMap.channel),lightMapUv:Qe&&m(v.lightMap.channel),bumpMapUv:Ge&&m(v.bumpMap.channel),normalMapUv:ht&&m(v.normalMap.channel),displacementMapUv:gt&&m(v.displacementMap.channel),emissiveMapUv:Ke&&m(v.emissiveMap.channel),metalnessMapUv:tt&&m(v.metalnessMap.channel),roughnessMapUv:ft&&m(v.roughnessMap.channel),anisotropyMapUv:te&&m(v.anisotropyMap.channel),clearcoatMapUv:oe&&m(v.clearcoatMap.channel),clearcoatNormalMapUv:he&&m(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ne&&m(v.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&m(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&m(v.iridescenceThicknessMap.channel),sheenColorMapUv:Ae&&m(v.sheenColorMap.channel),sheenRoughnessMapUv:me&&m(v.sheenRoughnessMap.channel),specularMapUv:fe&&m(v.specularMap.channel),specularColorMapUv:Ce&&m(v.specularColorMap.channel),specularIntensityMapUv:Ue&&m(v.specularIntensityMap.channel),transmissionMapUv:ze&&m(v.transmissionMap.channel),thicknessMapUv:O&&m(v.thicknessMap.channel),alphaMapUv:ie&&m(v.alphaMap.channel),vertexTangents:!!U.attributes.tangent&&(ht||k),vertexNormals:!!U.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!U.attributes.color&&U.attributes.color.itemSize===4,pointsUvs:L.isPoints===!0&&!!U.attributes.uv&&(ae||ie),fog:!!R,useFog:v.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||U.attributes.normal===void 0&&ht===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:K,skinning:L.isSkinnedMesh===!0,hasPositionAttribute:U.attributes.position!==void 0,morphTargets:U.morphAttributes.position!==void 0,morphNormals:U.morphAttributes.normal!==void 0,morphColors:U.morphAttributes.color!==void 0,morphTargetsCount:le,morphTextureStride:ce,numSunLights:y.sun.length,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numSunLightShadows:y.sunShadowMap.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numLightProbeGrids:I.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:v.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Re,decodeVideoTexture:ae&&v.map.isVideoTexture===!0&&Xe.getTransfer(v.map.colorSpace)===et,decodeVideoTextureEmissive:Ke&&v.emissiveMap.isVideoTexture===!0&&Xe.getTransfer(v.emissiveMap.colorSpace)===et,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Qt,flipSided:v.side===zt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:re&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(re&&v.extensions.multiDraw===!0||j)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Ee.vertexUv1s=l.has(1),Ee.vertexUv2s=l.has(2),Ee.vertexUv3s=l.has(3),l.clear(),Ee}function g(v){const y=[];if(v.shaderID?y.push(v.shaderID):(y.push(v.customVertexShaderID),y.push(v.customFragmentShaderID)),v.defines!==void 0)for(const P in v.defines)y.push(P),y.push(v.defines[P]);return v.isRawShaderMaterial===!1&&(d(y,v),w(y,v),y.push(i.outputColorSpace)),y.push(v.customProgramCacheKey),y.join()}function d(v,y){v.push(y.precision),v.push(y.outputColorSpace),v.push(y.envMapMode),v.push(y.envMapCubeUVHeight),v.push(y.mapUv),v.push(y.alphaMapUv),v.push(y.lightMapUv),v.push(y.aoMapUv),v.push(y.bumpMapUv),v.push(y.normalMapUv),v.push(y.displacementMapUv),v.push(y.emissiveMapUv),v.push(y.metalnessMapUv),v.push(y.roughnessMapUv),v.push(y.anisotropyMapUv),v.push(y.clearcoatMapUv),v.push(y.clearcoatNormalMapUv),v.push(y.clearcoatRoughnessMapUv),v.push(y.iridescenceMapUv),v.push(y.iridescenceThicknessMapUv),v.push(y.sheenColorMapUv),v.push(y.sheenRoughnessMapUv),v.push(y.specularMapUv),v.push(y.specularColorMapUv),v.push(y.specularIntensityMapUv),v.push(y.transmissionMapUv),v.push(y.thicknessMapUv),v.push(y.combine),v.push(y.fogExp2),v.push(y.sizeAttenuation),v.push(y.morphTargetsCount),v.push(y.morphAttributeCount),v.push(y.numSunLights),v.push(y.numDirLights),v.push(y.numPointLights),v.push(y.numSpotLights),v.push(y.numSpotLightMaps),v.push(y.numHemiLights),v.push(y.numRectAreaLights),v.push(y.numSunLightShadows),v.push(y.numDirLightShadows),v.push(y.numPointLightShadows),v.push(y.numSpotLightShadows),v.push(y.numSpotLightShadowsWithMaps),v.push(y.numLightProbes),v.push(y.shadowMapType),v.push(y.toneMapping),v.push(y.numClippingPlanes),v.push(y.numClipIntersection),v.push(y.depthPacking)}function w(v,y){a.disableAll(),y.instancing&&a.enable(0),y.instancingColor&&a.enable(1),y.instancingMorph&&a.enable(2),y.matcap&&a.enable(3),y.envMap&&a.enable(4),y.normalMapObjectSpace&&a.enable(5),y.normalMapTangentSpace&&a.enable(6),y.clearcoat&&a.enable(7),y.iridescence&&a.enable(8),y.alphaTest&&a.enable(9),y.vertexColors&&a.enable(10),y.vertexAlphas&&a.enable(11),y.vertexUv1s&&a.enable(12),y.vertexUv2s&&a.enable(13),y.vertexUv3s&&a.enable(14),y.vertexTangents&&a.enable(15),y.anisotropy&&a.enable(16),y.alphaHash&&a.enable(17),y.batching&&a.enable(18),y.dispersion&&a.enable(19),y.retroreflection&&a.enable(24),y.batchingColor&&a.enable(20),y.gradientMap&&a.enable(21),y.packedNormalMap&&a.enable(22),y.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),y.numLightProbeGrids>0&&a.enable(22),y.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){const y=p[v.type];let P;if(y){const C=un[y];P=Ai.clone(C.uniforms)}else P=v.uniforms;return P}function _(v,y){let P=h.get(y);return P!==void 0?++P.usedTimes:(P=new Ag(i,y,v,s),c.push(P),h.set(y,P)),P}function M(v){if(--v.usedTimes===0){const y=c.indexOf(v);c[y]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function b(v){o.remove(v)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:g,getUniforms:E,acquireProgram:_,releaseProgram:M,releaseShaderCache:b,programs:c,dispose:A}}function Ig(){let i=new WeakMap;function e(a){return i.has(a)}function t(a){let o=i.get(a);return o===void 0&&(o={},i.set(a,o)),o}function n(a){i.delete(a)}function s(a,o,l){i.get(a)[o]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Ug(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function Bl(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function kl(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function a(f){let p=0;return f.isInstancedMesh&&(p+=2),f.isSkinnedMesh&&(p+=1),p}function o(f,p,m,x,g,d){let w=i[e];return w===void 0?(w={id:f.id,object:f,geometry:p,material:m,materialVariant:a(f),groupOrder:x,renderOrder:f.renderOrder,z:g,group:d},i[e]=w):(w.id=f.id,w.object=f,w.geometry=p,w.material=m,w.materialVariant=a(f),w.groupOrder=x,w.renderOrder=f.renderOrder,w.z=g,w.group=d),e++,w}function l(f,p,m,x,g,d,w){w.reversedDepth===!0&&(g=-g);const E=o(f,p,m,x,g,d);m.transmission>0?n.push(E):m.transparent===!0?s.push(E):t.push(E)}function c(f,p,m,x,g,d){const w=o(f,p,m,x,g,d);m.transmission>0?n.unshift(w):m.transparent===!0?s.unshift(w):t.unshift(w)}function h(f,p){t.length>1&&t.sort(f||Ug),n.length>1&&n.sort(p||Bl),s.length>1&&s.sort(p||Bl)}function u(){for(let f=e,p=i.length;f<p;f++){const m=i[f];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:l,unshift:c,finish:u,sort:h}}function Ng(){let i=new WeakMap;function e(n,s){const r=i.get(n);let a;return r===void 0?(a=new kl,i.set(n,[a])):s>=r.length?(a=new kl,r.push(a)):a=r[s],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function Fg(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new Le};break;case"SpotLight":t={position:new G,direction:new G,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new G,halfWidth:new G,halfHeight:new G};break}return i[e.id]=t,t}}}function Og(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ne,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let Bg=0;function kg(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function zg(i){const e=new Fg,t=Og(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new G);const s=new G,r=new ct,a=new ct;function o(c){let h=0,u=0,f=0;for(let L=0;L<9;L++)n.probe[L].set(0,0,0);let p=0,m=0,x=0,g=0,d=0,w=0,E=0,_=0,M=0,b=0,A=0,v=0,y=0,P=0;c.sort(kg);for(let L=0,I=c.length;L<I;L++){const R=c[L],U=R.color,V=R.intensity,F=R.distance;let X=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===jn?X=R.shadow.map.texture:X=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=U.r*V,u+=U.g*V,f+=U.b*V;else if(R.isLightProbe){for(let B=0;B<9;B++)n.probe[B].addScaledVector(R.sh.coefficients[B],V);P++}else if(R.isSunLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,ee=t.get(R);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize.copy(W.mapSize).multiply(W.getFrameExtents()),n.sunShadow[m]=ee,n.sunShadowMap[m]=X;const le=W.getViewportCount();for(let ce=0;ce<le;ce++)n.sunShadowMatrix[x+ce]=W.getMatrix(ce),n.sunShadowCascade[x+ce]=W._cascadeData[ce];x+=le,m++}n.sun[p]=B,p++}else if(R.isDirectionalLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){const W=R.shadow,ee=t.get(R);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,n.directionalShadow[g]=ee,n.directionalShadowMap[g]=X,n.directionalShadowMatrix[g]=R.shadow.matrix,M++}n.directional[g]=B,g++}else if(R.isSpotLight){const B=e.get(R);B.position.setFromMatrixPosition(R.matrixWorld),B.color.copy(U).multiplyScalar(V),B.distance=F,B.coneCos=Math.cos(R.angle),B.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),B.decay=R.decay,n.spot[w]=B;const W=R.shadow;if(R.map&&(n.spotLightMap[v]=R.map,v++,W.updateMatrices(R),R.castShadow&&y++),n.spotLightMatrix[w]=W.matrix,R.castShadow){const ee=t.get(R);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,n.spotShadow[w]=ee,n.spotShadowMap[w]=X,A++}w++}else if(R.isRectAreaLight){const B=e.get(R);B.color.copy(U).multiplyScalar(V),B.halfWidth.set(R.width*.5,0,0),B.halfHeight.set(0,R.height*.5,0),n.rectArea[E]=B,E++}else if(R.isPointLight){const B=e.get(R);if(B.color.copy(R.color).multiplyScalar(R.intensity),B.distance=R.distance,B.decay=R.decay,R.castShadow){const W=R.shadow,ee=t.get(R);ee.shadowIntensity=W.intensity,ee.shadowBias=W.bias,ee.shadowNormalBias=W.normalBias,ee.shadowRadius=W.radius,ee.shadowMapSize=W.mapSize,ee.shadowCameraNear=W.camera.near,ee.shadowCameraFar=W.camera.far,n.pointShadow[d]=ee,n.pointShadowMap[d]=X,n.pointShadowMatrix[d]=R.shadow.matrix,b++}n.point[d]=B,d++}else if(R.isHemisphereLight){const B=e.get(R);B.skyColor.copy(R.color).multiplyScalar(V),B.groundColor.copy(R.groundColor).multiplyScalar(V),n.hemi[_]=B,_++}}E>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ge.LTC_FLOAT_1,n.rectAreaLTC2=ge.LTC_FLOAT_2):(n.rectAreaLTC1=ge.LTC_HALF_1,n.rectAreaLTC2=ge.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=f;const C=n.hash;(C.sunLength!==p||C.directionalLength!==g||C.pointLength!==d||C.spotLength!==w||C.rectAreaLength!==E||C.hemiLength!==_||C.numSunShadows!==m||C.numDirectionalShadows!==M||C.numPointShadows!==b||C.numSpotShadows!==A||C.numSpotMaps!==v||C.numLightProbes!==P)&&(n.sun.length=p,n.directional.length=g,n.spot.length=w,n.rectArea.length=E,n.point.length=d,n.hemi.length=_,n.sunShadow.length=m,n.sunShadowMap.length=m,n.sunShadowMatrix.length=x,n.sunShadowCascade.length=x,n.directionalShadow.length=M,n.directionalShadowMap.length=M,n.directionalShadowMatrix.length=M,n.pointShadow.length=b,n.pointShadowMap.length=b,n.pointShadowMatrix.length=b,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+v-y,n.spotLightMap.length=v,n.numSpotLightShadowsWithMaps=y,n.numLightProbes=P,C.sunLength=p,C.directionalLength=g,C.pointLength=d,C.spotLength=w,C.rectAreaLength=E,C.hemiLength=_,C.numSunShadows=m,C.numDirectionalShadows=M,C.numPointShadows=b,C.numSpotShadows=A,C.numSpotMaps=v,C.numLightProbes=P,n.version=Bg++)}function l(c,h){let u=0,f=0,p=0,m=0,x=0,g=0;const d=h.matrixWorldInverse;for(let w=0,E=c.length;w<E;w++){const _=c[w];if(_.isSunLight){const M=n.sun[u];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(d),u++}else if(_.isDirectionalLight){const M=n.directional[f];M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),f++}else if(_.isSpotLight){const M=n.spot[m];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(d),M.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(d),m++}else if(_.isRectAreaLight){const M=n.rectArea[x];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(d),a.identity(),r.copy(_.matrixWorld),r.premultiply(d),a.extractRotation(r),M.halfWidth.set(_.width*.5,0,0),M.halfHeight.set(0,_.height*.5,0),M.halfWidth.applyMatrix4(a),M.halfHeight.applyMatrix4(a),x++}else if(_.isPointLight){const M=n.point[p];M.position.setFromMatrixPosition(_.matrixWorld),M.position.applyMatrix4(d),p++}else if(_.isHemisphereLight){const M=n.hemi[g];M.direction.setFromMatrixPosition(_.matrixWorld),M.direction.transformDirection(d),g++}}}return{setup:o,setupView:l,state:n}}function zl(i){const e=new zg(i),t=[],n=[],s=[];function r(f){u.camera=f,t.length=0,n.length=0,s.length=0}function a(f){t.push(f)}function o(f){n.push(f)}function l(f){s.push(f)}function c(){e.setup(t)}function h(f){e.setupView(t,f)}const u={lightsArray:t,shadowsArray:n,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:u,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Hg(i){let e=new WeakMap;function t(s,r=0){const a=e.get(s);let o;return a===void 0?(o=new zl(i),e.set(s,[o])):r>=a.length?(o=new zl(i),a.push(o)):o=a[r],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const Vg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gg=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Wg=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],Xg=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],Hl=new ct,Vi=new G,Xr=new G;function qg(i,e,t){let n=new bo;const s=new Ne,r=new Ne,a=new it,o=new Wc,l=new Ku,c={},h=t.maxTextureSize,u={[Jn]:zt,[zt]:Jn,[Qt]:Qt},f=new bt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ne},radius:{value:4}},vertexShader:Vg,fragmentShader:Gg}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const m=new Yt;m.setAttribute("position",new Rt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new rt(m,f),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ji;let d=this.type;this.render=function(b,A,v){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||b.length===0)return;this.type===Vh&&(Be("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ji);const y=i.getRenderTarget(),P=i.getActiveCubeFace(),C=i.getActiveMipmapLevel(),L=i.state;L.setBlending(mn),L.buffers.depth.getReversed()===!0?L.buffers.color.setClear(0,0,0,0):L.buffers.color.setClear(1,1,1,1),L.buffers.depth.setTest(!0),L.setScissorTest(!1);const I=d!==this.type;I&&A.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(U=>U.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,U=b.length;R<U;R++){const V=b[R],F=V.shadow;if(F===void 0){Be("WebGLShadowMap:",V,"has no shadow.");continue}if(F.autoUpdate===!1&&F.needsUpdate===!1)continue;s.copy(F.mapSize);const X=F.getFrameExtents();s.multiply(X),r.copy(F.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/X.x),s.x=r.x*X.x,F.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/X.y),s.y=r.y*X.y,F.mapSize.y=r.y));const B=i.state.buffers.depth.getReversed();if(F.camera._reversedDepth=B,F.map===null||I===!0){if(F.map!==null&&(F.map.depthTexture!==null&&(F.map.depthTexture.dispose(),F.map.depthTexture=null),F.map.dispose()),this.type===Ki){if(V.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}F.map=new Mt(s.x,s.y,{format:jn,type:yt,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),F.map.texture.name=V.name+".shadowMap",F.map.depthTexture=new Pi(s.x,s.y,dn),F.map.depthTexture.name=V.name+".shadowMapDepth",F.map.depthTexture.format=Rn,F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=St,F.map.depthTexture.magFilter=St}else V.isPointLight?(F.map=new Jc(s.x),F.map.depthTexture=new Gu(s.x,xn)):(F.map=new Mt(s.x,s.y),F.map.depthTexture=new Pi(s.x,s.y,xn)),F.map.depthTexture.name=V.name+".shadowMap",F.map.depthTexture.format=Rn,this.type===ji?(F.map.depthTexture.compareFunction=B?_o:xo,F.map.depthTexture.minFilter=Ye,F.map.depthTexture.magFilter=Ye):(F.map.depthTexture.compareFunction=null,F.map.depthTexture.minFilter=St,F.map.depthTexture.magFilter=St);F.camera.updateProjectionMatrix()}F.map.isWebGLCubeRenderTarget!==!0&&(F.map.width!==s.x||F.map.height!==s.y)&&F.map.setSize(s.x,s.y);const W=F.map.isWebGLCubeRenderTarget?6:F.getViewportCount();V.isPointLight!==!0&&F.updateMatrices(V,v);for(let ee=0;ee<W;ee++){const le=F.getCamera(ee);if(V.isPointLight){const ce=F.camera,De=F.matrix,Ie=V.distance||ce.far;Ie!==ce.far&&(ce.far=Ie,ce.updateProjectionMatrix()),Vi.setFromMatrixPosition(V.matrixWorld),ce.position.copy(Vi),Xr.copy(ce.position),Xr.add(Wg[ee]),ce.up.copy(Xg[ee]),ce.lookAt(Xr),ce.updateMatrixWorld(),De.makeTranslation(-Vi.x,-Vi.y,-Vi.z),Hl.multiplyMatrices(ce.projectionMatrix,ce.matrixWorldInverse),F._frustum.setFromProjectionMatrix(Hl,ce.coordinateSystem,ce.reversedDepth)}if(F.map.isWebGLCubeRenderTarget)i.setRenderTarget(F.map,ee),i.clear();else{ee===0&&(i.setRenderTarget(F.map),i.clear());const ce=F.getViewport(ee);a.set(r.x*ce.x,r.y*ce.y,r.x*ce.z,r.y*ce.w),L.viewport(a)}n=F.getFrustum(ee),_(A,v,le,V,this.type)}F.isPointLightShadow!==!0&&this.type===Ki&&w(F,v),F.needsUpdate=!1}d=this.type,g.needsUpdate=!1,i.setRenderTarget(y,P,C)};function w(b,A){const v=e.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null?b.mapPass=new Mt(s.x,s.y,{format:jn,type:yt}):(b.mapPass.width!==b.map.width||b.mapPass.height!==b.map.height)&&b.mapPass.setSize(b.map.width,b.map.height),f.uniforms.shadow_pass.value=b.map.depthTexture,f.uniforms.resolution.value.set(b.map.width,b.map.height),f.uniforms.radius.value=b.radius,i.setRenderTarget(b.mapPass),i.clear(),i.renderBufferDirect(A,null,v,f,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value.set(b.map.width,b.map.height),p.uniforms.radius.value=b.radius,i.setRenderTarget(b.map),i.clear(),i.renderBufferDirect(A,null,v,p,x,null)}function E(b,A,v,y){let P=null;const C=v.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(C!==void 0)P=C;else if(P=v.isPointLight===!0?l:o,i.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const L=P.uuid,I=A.uuid;let R=c[L];R===void 0&&(R={},c[L]=R);let U=R[I];U===void 0&&(U=P.clone(),R[I]=U,A.addEventListener("dispose",M)),P=U}if(P.visible=A.visible,P.wireframe=A.wireframe,y===Ki?P.side=A.shadowSide!==null?A.shadowSide:A.side:P.side=A.shadowSide!==null?A.shadowSide:u[A.side],P.alphaMap=A.alphaMap,P.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,P.map=A.map,P.clipShadows=A.clipShadows,P.clippingPlanes=A.clippingPlanes,P.clipIntersection=A.clipIntersection,P.displacementMap=A.displacementMap,P.displacementScale=A.displacementScale,P.displacementBias=A.displacementBias,P.wireframeLinewidth=A.wireframeLinewidth,P.linewidth=A.linewidth,v.isPointLight===!0&&P.isMeshDistanceMaterial===!0){const L=i.properties.get(P);L.light=v}return P}function _(b,A,v,y,P){if(b.visible===!1)return;if(b.layers.test(A.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&P===Ki)&&(!b.frustumCulled||b.intersectsFrustum(n))){b.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,b.matrixWorld);const I=e.update(b),R=b.material;if(Array.isArray(R)){const U=I.groups;for(let V=0,F=U.length;V<F;V++){const X=U[V],B=R[X.materialIndex];if(B&&B.visible){const W=E(b,B,y,P);b.onBeforeShadow(i,b,A,v,I,W,X),i.renderBufferDirect(v,null,I,W,b,X),b.onAfterShadow(i,b,A,v,I,W,X)}}}else if(R.visible){const U=E(b,R,y,P);b.onBeforeShadow(i,b,A,v,I,U,null),i.renderBufferDirect(v,null,I,U,b,null),b.onAfterShadow(i,b,A,v,I,U,null)}}const L=b.children;for(let I=0,R=L.length;I<R;I++)_(L[I],A,v,y,P)}function M(b){b.target.removeEventListener("dispose",M);for(const v in c){const y=c[v],P=b.target.uuid;P in y&&(y[P].dispose(),delete y[P])}}}function Yg(i,e){function t(){let O=!1;const de=new it;let ie=null;const pe=new it(0,0,0,0);return{setMask:function(_e){ie!==_e&&!O&&(i.colorMask(_e,_e,_e,_e),ie=_e)},setLocked:function(_e){O=_e},setClear:function(_e,re,Re,Ee,ot){ot===!0&&(_e*=Ee,re*=Ee,Re*=Ee),de.set(_e,re,Re,Ee),pe.equals(de)===!1&&(i.clearColor(_e,re,Re,Ee),pe.copy(de))},reset:function(){O=!1,ie=null,pe.set(-1,0,0,0)}}}function n(){let O=!1,de=!1,ie=null,pe=null,_e=null;return{setReversed:function(re){if(de!==re){const Re=e.get("EXT_clip_control");re?Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.ZERO_TO_ONE_EXT):Re.clipControlEXT(Re.LOWER_LEFT_EXT,Re.NEGATIVE_ONE_TO_ONE_EXT),de=re;const Ee=_e;_e=null,this.setClear(Ee)}},getReversed:function(){return de},setTest:function(re){re?z(i.DEPTH_TEST):K(i.DEPTH_TEST)},setMask:function(re){ie!==re&&!O&&(i.depthMask(re),ie=re)},setFunc:function(re){if(de&&(re=_u[re]),pe!==re){switch(re){case aa:i.depthFunc(i.NEVER);break;case oa:i.depthFunc(i.ALWAYS);break;case la:i.depthFunc(i.LESS);break;case ns:i.depthFunc(i.LEQUAL);break;case ca:i.depthFunc(i.EQUAL);break;case ha:i.depthFunc(i.GEQUAL);break;case ua:i.depthFunc(i.GREATER);break;case fa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}pe=re}},setLocked:function(re){O=re},setClear:function(re){_e!==re&&(_e=re,de&&(re=1-re),i.clearDepth(re))},reset:function(){O=!1,ie=null,pe=null,_e=null,de=!1}}}function s(){let O=!1,de=null,ie=null,pe=null,_e=null,re=null,Re=null,Ee=null,ot=null;return{setTest:function(je){O||(je?z(i.STENCIL_TEST):K(i.STENCIL_TEST))},setMask:function(je){de!==je&&!O&&(i.stencilMask(je),de=je)},setFunc:function(je,$t,an){(ie!==je||pe!==$t||_e!==an)&&(i.stencilFunc(je,$t,an),ie=je,pe=$t,_e=an)},setOp:function(je,$t,an){(re!==je||Re!==$t||Ee!==an)&&(i.stencilOp(je,$t,an),re=je,Re=$t,Ee=an)},setLocked:function(je){O=je},setClear:function(je){ot!==je&&(i.clearStencil(je),ot=je)},reset:function(){O=!1,de=null,ie=null,pe=null,_e=null,re=null,Re=null,Ee=null,ot=null}}}const r=new t,a=new n,o=new s,l=new WeakMap,c=new WeakMap;let h={},u={},f={},p=new WeakMap,m=[],x=null,g=!1,d=null,w=null,E=null,_=null,M=null,b=null,A=null,v=new Le(0,0,0),y=0,P=!1,C=null,L=null,I=null,R=null,U=null;const V=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,X=0;const B=i.getParameter(i.VERSION);B.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(B)[1]),F=X>=1):B.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(B)[1]),F=X>=2);let W=null,ee={};const le=i.getParameter(i.SCISSOR_BOX),ce=i.getParameter(i.VIEWPORT),De=new it().fromArray(le),Ie=new it().fromArray(ce);function Fe(O,de,ie,pe){const _e=new Uint8Array(4),re=i.createTexture();i.bindTexture(O,re),i.texParameteri(O,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(O,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Re=0;Re<ie;Re++)O===i.TEXTURE_3D||O===i.TEXTURE_2D_ARRAY?i.texImage3D(de,0,i.RGBA,1,1,pe,0,i.RGBA,i.UNSIGNED_BYTE,_e):i.texImage2D(de+Re,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,_e);return re}const Q={};Q[i.TEXTURE_2D]=Fe(i.TEXTURE_2D,i.TEXTURE_2D,1),Q[i.TEXTURE_CUBE_MAP]=Fe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),Q[i.TEXTURE_2D_ARRAY]=Fe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),Q[i.TEXTURE_3D]=Fe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),z(i.DEPTH_TEST),a.setFunc(ns),Ge(!1),ht(Xo),z(i.CULL_FACE),Oe(mn);function z(O){h[O]!==!0&&(i.enable(O),h[O]=!0)}function K(O){h[O]!==!1&&(i.disable(O),h[O]=!1)}function $(O,de){return f[O]!==de?(i.bindFramebuffer(O,de),f[O]=de,O===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=de),O===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=de),!0):!1}function j(O,de){let ie=m,pe=!1;if(O){ie=p.get(de),ie===void 0&&(ie=[],p.set(de,ie));const _e=O.textures;if(ie.length!==_e.length||ie[0]!==i.COLOR_ATTACHMENT0){for(let re=0,Re=_e.length;re<Re;re++)ie[re]=i.COLOR_ATTACHMENT0+re;ie.length=_e.length,pe=!0}}else ie[0]!==i.BACK&&(ie[0]=i.BACK,pe=!0);pe&&i.drawBuffers(ie)}function ae(O){return x!==O?(i.useProgram(O),x=O,!0):!1}const Pe={[_i]:i.FUNC_ADD,[Gh]:i.FUNC_SUBTRACT,[Wh]:i.FUNC_REVERSE_SUBTRACT};Pe[Xh]=i.MIN,Pe[sa]=i.MAX;const we={[qh]:i.ZERO,[ra]:i.ONE,[Yh]:i.SRC_COLOR,[Sc]:i.SRC_ALPHA,[$h]:i.SRC_ALPHA_SATURATE,[Qh]:i.DST_COLOR,[Zh]:i.DST_ALPHA,[Kh]:i.ONE_MINUS_SRC_COLOR,[yc]:i.ONE_MINUS_SRC_ALPHA,[jh]:i.ONE_MINUS_DST_COLOR,[Jh]:i.ONE_MINUS_DST_ALPHA,[eu]:i.CONSTANT_COLOR,[tu]:i.ONE_MINUS_CONSTANT_COLOR,[bc]:i.CONSTANT_ALPHA,[wc]:i.ONE_MINUS_CONSTANT_ALPHA};function Oe(O,de,ie,pe,_e,re,Re,Ee,ot,je){if(O===mn){g===!0&&(K(i.BLEND),g=!1);return}if(g===!1&&(z(i.BLEND),g=!0),O!==so){if(O!==d||je!==P){if((w!==_i||M!==_i)&&(i.blendEquation(i.FUNC_ADD),w=_i,M=_i),je)switch(O){case wi:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qo:i.blendFunc(i.ONE,i.ONE);break;case Yo:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ko:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Je("WebGLState: Invalid blending: ",O);break}else switch(O){case wi:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case qo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Yo:Je("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ko:Je("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Je("WebGLState: Invalid blending: ",O);break}E=null,_=null,b=null,A=null,v.set(0,0,0),y=0,d=O,P=je}return}_e=_e||de,re=re||ie,Re=Re||pe,(de!==w||_e!==M)&&(i.blendEquationSeparate(Pe[de],Pe[_e]),w=de,M=_e),(ie!==E||pe!==_||re!==b||Re!==A)&&(i.blendFuncSeparate(we[ie],we[pe],we[re],we[Re]),E=ie,_=pe,b=re,A=Re),(Ee.equals(v)===!1||ot!==y)&&(i.blendColor(Ee.r,Ee.g,Ee.b,ot),v.copy(Ee),y=ot),d=O,P=!1}function Qe(O,de){O.side===Qt?K(i.CULL_FACE):z(i.CULL_FACE);let ie=O.side===zt;de&&(ie=!ie),Ge(ie),O.blending===wi&&O.transparent===!1?Oe(mn):Oe(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),a.setFunc(O.depthFunc),a.setTest(O.depthTest),a.setMask(O.depthWrite),r.setMask(O.colorWrite);const pe=O.stencilWrite;o.setTest(pe),pe&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),Ke(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?z(i.SAMPLE_ALPHA_TO_COVERAGE):K(i.SAMPLE_ALPHA_TO_COVERAGE)}function Ge(O){C!==O&&(O?i.frontFace(i.CW):i.frontFace(i.CCW),C=O)}function ht(O){O!==zh?(z(i.CULL_FACE),O!==L&&(O===Xo?i.cullFace(i.BACK):O===Hh?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):K(i.CULL_FACE),L=O}function gt(O){O!==I&&(F&&i.lineWidth(O),I=O)}function Ke(O,de,ie){O?(z(i.POLYGON_OFFSET_FILL),(R!==de||U!==ie)&&(R=de,U=ie,a.getReversed()&&(de=-de),i.polygonOffset(de,ie))):K(i.POLYGON_OFFSET_FILL)}function tt(O){O?z(i.SCISSOR_TEST):K(i.SCISSOR_TEST)}function ft(O){O===void 0&&(O=i.TEXTURE0+V-1),W!==O&&(i.activeTexture(O),W=O)}function k(O,de,ie){ie===void 0&&(W===null?ie=i.TEXTURE0+V-1:ie=W);let pe=ee[ie];pe===void 0&&(pe={type:void 0,texture:void 0},ee[ie]=pe),(pe.type!==O||pe.texture!==de)&&(W!==ie&&(i.activeTexture(ie),W=ie),i.bindTexture(O,de||Q[O]),pe.type=O,pe.texture=de)}function Pt(){const O=ee[W];O!==void 0&&O.type!==void 0&&(i.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function nt(){try{i.compressedTexImage2D(...arguments)}catch(O){Je("WebGLState:",O)}}function D(){try{i.compressedTexImage3D(...arguments)}catch(O){Je("WebGLState:",O)}}function S(){try{i.texSubImage2D(...arguments)}catch(O){Je("WebGLState:",O)}}function H(){try{i.texSubImage3D(...arguments)}catch(O){Je("WebGLState:",O)}}function Z(){try{i.compressedTexSubImage2D(...arguments)}catch(O){Je("WebGLState:",O)}}function te(){try{i.compressedTexSubImage3D(...arguments)}catch(O){Je("WebGLState:",O)}}function oe(){try{i.texStorage2D(...arguments)}catch(O){Je("WebGLState:",O)}}function he(){try{i.texStorage3D(...arguments)}catch(O){Je("WebGLState:",O)}}function ne(){try{i.texImage2D(...arguments)}catch(O){Je("WebGLState:",O)}}function se(){try{i.texImage3D(...arguments)}catch(O){Je("WebGLState:",O)}}function ue(O){return u[O]!==void 0?u[O]:i.getParameter(O)}function Ae(O,de){u[O]!==de&&(i.pixelStorei(O,de),u[O]=de)}function me(O){De.equals(O)===!1&&(i.scissor(O.x,O.y,O.z,O.w),De.copy(O))}function fe(O){Ie.equals(O)===!1&&(i.viewport(O.x,O.y,O.z,O.w),Ie.copy(O))}function Ce(O,de){let ie=c.get(de);ie===void 0&&(ie=new WeakMap,c.set(de,ie));let pe=ie.get(O);pe===void 0&&(pe=i.getUniformBlockIndex(de,O.name),ie.set(O,pe))}function Ue(O,de){const pe=c.get(de).get(O);l.get(de)!==pe&&(i.uniformBlockBinding(de,pe,O.__bindingPointIndex),l.set(de,pe))}function ze(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),a.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),h={},u={},W=null,ee={},f={},p=new WeakMap,m=[],x=null,g=!1,d=null,w=null,E=null,_=null,M=null,b=null,A=null,v=new Le(0,0,0),y=0,P=!1,C=null,L=null,I=null,R=null,U=null,De.set(0,0,i.canvas.width,i.canvas.height),Ie.set(0,0,i.canvas.width,i.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:z,disable:K,bindFramebuffer:$,drawBuffers:j,useProgram:ae,setBlending:Oe,setMaterial:Qe,setFlipSided:Ge,setCullFace:ht,setLineWidth:gt,setPolygonOffset:Ke,setScissorTest:tt,activeTexture:ft,bindTexture:k,unbindTexture:Pt,compressedTexImage2D:nt,compressedTexImage3D:D,texImage2D:ne,texImage3D:se,pixelStorei:Ae,getParameter:ue,updateUBOMapping:Ce,uniformBlockBinding:Ue,texStorage2D:oe,texStorage3D:he,texSubImage2D:S,texSubImage3D:H,compressedTexSubImage2D:Z,compressedTexSubImage3D:te,scissor:me,viewport:fe,reset:ze}}function Kg(i,e,t,n,s,r,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ne,h=new WeakMap,u=new Set;let f;const p=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,S){return m?new OffscreenCanvas(D,S):os("canvas")}function g(D,S,H){let Z=1;const te=nt(D);if((te.width>H||te.height>H)&&(Z=H/Math.max(te.width,te.height)),Z<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const oe=Math.floor(Z*te.width),he=Math.floor(Z*te.height);f===void 0&&(f=x(oe,he));const ne=S?x(oe,he):f;return ne.width=oe,ne.height=he,ne.getContext("2d").drawImage(D,0,0,oe,he),Be("WebGLRenderer: Texture has been resized from ("+te.width+"x"+te.height+") to ("+oe+"x"+he+")."),ne}else return"data"in D&&Be("WebGLRenderer: Image in DataTexture is too big ("+te.width+"x"+te.height+")."),D;return D}function d(D){return D.generateMipmaps}function w(D){i.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?i.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function _(D,S,H,Z,te,oe=!1){if(D!==null){if(i[D]!==void 0)return i[D];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let he;Z&&(he=e.get("EXT_texture_norm16"),he||Be("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ne=S;if(S===i.RED&&(H===i.FLOAT&&(ne=i.R32F),H===i.HALF_FLOAT&&(ne=i.R16F),H===i.UNSIGNED_BYTE&&(ne=i.R8),H===i.UNSIGNED_SHORT&&he&&(ne=he.R16_EXT),H===i.SHORT&&he&&(ne=he.R16_SNORM_EXT)),S===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.R8UI),H===i.UNSIGNED_SHORT&&(ne=i.R16UI),H===i.UNSIGNED_INT&&(ne=i.R32UI),H===i.BYTE&&(ne=i.R8I),H===i.SHORT&&(ne=i.R16I),H===i.INT&&(ne=i.R32I)),S===i.RG&&(H===i.FLOAT&&(ne=i.RG32F),H===i.HALF_FLOAT&&(ne=i.RG16F),H===i.UNSIGNED_BYTE&&(ne=i.RG8),H===i.UNSIGNED_SHORT&&he&&(ne=he.RG16_EXT),H===i.SHORT&&he&&(ne=he.RG16_SNORM_EXT)),S===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RG8UI),H===i.UNSIGNED_SHORT&&(ne=i.RG16UI),H===i.UNSIGNED_INT&&(ne=i.RG32UI),H===i.BYTE&&(ne=i.RG8I),H===i.SHORT&&(ne=i.RG16I),H===i.INT&&(ne=i.RG32I)),S===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RGB8UI),H===i.UNSIGNED_SHORT&&(ne=i.RGB16UI),H===i.UNSIGNED_INT&&(ne=i.RGB32UI),H===i.BYTE&&(ne=i.RGB8I),H===i.SHORT&&(ne=i.RGB16I),H===i.INT&&(ne=i.RGB32I)),S===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(ne=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(ne=i.RGBA16UI),H===i.UNSIGNED_INT&&(ne=i.RGBA32UI),H===i.BYTE&&(ne=i.RGBA8I),H===i.SHORT&&(ne=i.RGBA16I),H===i.INT&&(ne=i.RGBA32I)),S===i.RGB&&(H===i.UNSIGNED_SHORT&&he&&(ne=he.RGB16_EXT),H===i.SHORT&&he&&(ne=he.RGB16_SNORM_EXT),H===i.UNSIGNED_INT_5_9_9_9_REV&&(ne=i.RGB9_E5),H===i.UNSIGNED_INT_10F_11F_11F_REV&&(ne=i.R11F_G11F_B10F)),S===i.RGBA){const se=oe?nr:Xe.getTransfer(te);H===i.FLOAT&&(ne=i.RGBA32F),H===i.HALF_FLOAT&&(ne=i.RGBA16F),H===i.UNSIGNED_BYTE&&(ne=se===et?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT&&he&&(ne=he.RGBA16_EXT),H===i.SHORT&&he&&(ne=he.RGBA16_SNORM_EXT),H===i.UNSIGNED_SHORT_4_4_4_4&&(ne=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(ne=i.RGB5_A1)}return(ne===i.R16F||ne===i.R32F||ne===i.RG16F||ne===i.RG32F||ne===i.RGBA16F||ne===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ne}function M(D,S){let H;return D?S===null||S===xn||S===rs?H=i.DEPTH24_STENCIL8:S===dn?H=i.DEPTH32F_STENCIL8:S===ss&&(H=i.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===xn||S===rs?H=i.DEPTH_COMPONENT24:S===dn?H=i.DEPTH_COMPONENT32F:S===ss&&(H=i.DEPTH_COMPONENT16),H}function b(D,S){return d(D)===!0||D.isFramebufferTexture&&D.minFilter!==St&&D.minFilter!==Ye?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function A(D){const S=D.target;S.removeEventListener("dispose",A),y(S),S.isVideoTexture&&h.delete(S),S.isHTMLTexture&&u.delete(S)}function v(D){const S=D.target;S.removeEventListener("dispose",v),C(S)}function y(D){const S=n.get(D);if(S.__webglInit===void 0)return;const H=D.source,Z=p.get(H);if(Z){const te=Z[S.__cacheKey];te.usedTimes--,te.usedTimes===0&&P(D),Object.keys(Z).length===0&&p.delete(H)}n.remove(D)}function P(D){const S=n.get(D);i.deleteTexture(S.__webglTexture);const H=D.source,Z=p.get(H);delete Z[S.__cacheKey],a.memory.textures--}function C(D){const S=n.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),n.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(S.__webglFramebuffer[Z]))for(let te=0;te<S.__webglFramebuffer[Z].length;te++)i.deleteFramebuffer(S.__webglFramebuffer[Z][te]);else i.deleteFramebuffer(S.__webglFramebuffer[Z]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Z])}else{if(Array.isArray(S.__webglFramebuffer))for(let Z=0;Z<S.__webglFramebuffer.length;Z++)i.deleteFramebuffer(S.__webglFramebuffer[Z]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Z=0;Z<S.__webglColorRenderbuffer.length;Z++)S.__webglColorRenderbuffer[Z]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Z]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const H=D.textures;for(let Z=0,te=H.length;Z<te;Z++){const oe=n.get(H[Z]);oe.__webglTexture&&(i.deleteTexture(oe.__webglTexture),a.memory.textures--),n.remove(H[Z])}n.remove(D)}let L=0;function I(){L=0}function R(){return L}function U(D){L=D}function V(){const D=L;return D>=s.maxTextures&&Be("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+s.maxTextures),L+=1,D}function F(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function X(D,S){const H=n.get(D);if(D.isVideoTexture&&k(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&H.__version!==D.version){const Z=D.image;if(Z===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{K(H,D,S);return}}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+S)}function B(D,S){const H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){K(H,D,S);return}else D.isExternalTexture&&(H.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+S)}function W(D,S){const H=n.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&H.__version!==D.version){K(H,D,S);return}t.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+S)}function ee(D,S){const H=n.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&H.__version!==D.version){$(H,D,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+S)}const le={[is]:i.REPEAT,[Tn]:i.CLAMP_TO_EDGE,[da]:i.MIRRORED_REPEAT},ce={[St]:i.NEAREST,[su]:i.NEAREST_MIPMAP_NEAREST,[vs]:i.NEAREST_MIPMAP_LINEAR,[Ye]:i.LINEAR,[pr]:i.LINEAR_MIPMAP_NEAREST,[qt]:i.LINEAR_MIPMAP_LINEAR},De={[cu]:i.NEVER,[pu]:i.ALWAYS,[hu]:i.LESS,[xo]:i.LEQUAL,[uu]:i.EQUAL,[_o]:i.GEQUAL,[fu]:i.GREATER,[du]:i.NOTEQUAL};function Ie(D,S){if(S.type===dn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Ye||S.magFilter===pr||S.magFilter===vs||S.magFilter===qt||S.minFilter===Ye||S.minFilter===pr||S.minFilter===vs||S.minFilter===qt)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,le[S.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,le[S.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,le[S.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,ce[S.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,ce[S.minFilter]),S.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,De[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===St||S.minFilter!==vs&&S.minFilter!==qt||S.type===dn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const H=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function Fe(D,S){let H=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",A));const Z=S.source;let te=p.get(Z);te===void 0&&(te={},p.set(Z,te));const oe=F(S);if(oe!==D.__cacheKey){te[oe]===void 0&&(te[oe]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,H=!0),te[oe].usedTimes++;const he=te[D.__cacheKey];he!==void 0&&(te[D.__cacheKey].usedTimes--,he.usedTimes===0&&P(S)),D.__cacheKey=oe,D.__webglTexture=te[oe].texture}return H}function Q(D,S,H){return Math.floor(Math.floor(D/H)/S)}function z(D,S,H,Z){const oe=D.updateRanges;if(oe.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,S.width,S.height,H,Z,S.data);else{oe.sort((Ae,me)=>Ae.start-me.start);let he=0;for(let Ae=1;Ae<oe.length;Ae++){const me=oe[he],fe=oe[Ae],Ce=me.start+me.count,Ue=Q(fe.start,S.width,4),ze=Q(me.start,S.width,4);fe.start<=Ce+1&&Ue===ze&&Q(fe.start+fe.count-1,S.width,4)===Ue?me.count=Math.max(me.count,fe.start+fe.count-me.start):(++he,oe[he]=fe)}oe.length=he+1;const ne=t.getParameter(i.UNPACK_ROW_LENGTH),se=t.getParameter(i.UNPACK_SKIP_PIXELS),ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,S.width);for(let Ae=0,me=oe.length;Ae<me;Ae++){const fe=oe[Ae],Ce=Math.floor(fe.start/4),Ue=Math.ceil(fe.count/4),ze=Ce%S.width,O=Math.floor(Ce/S.width),de=Ue,ie=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ze),t.pixelStorei(i.UNPACK_SKIP_ROWS,O),t.texSubImage2D(i.TEXTURE_2D,0,ze,O,de,ie,H,Z,S.data)}D.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ne),t.pixelStorei(i.UNPACK_SKIP_PIXELS,se),t.pixelStorei(i.UNPACK_SKIP_ROWS,ue)}}function K(D,S,H){let Z=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(Z=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(Z=i.TEXTURE_3D);const te=Fe(D,S),oe=S.source;t.bindTexture(Z,D.__webglTexture,i.TEXTURE0+H);const he=n.get(oe);if(oe.version!==he.__version||te===!0){if(t.activeTexture(i.TEXTURE0+H),(typeof ImageBitmap<"u"&&S.image instanceof ImageBitmap)===!1){const ie=Xe.getPrimaries(Xe.workingColorSpace),pe=S.colorSpace===fn?null:Xe.getPrimaries(S.colorSpace),_e=S.colorSpace===fn||ie===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e)}t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment);let se=g(S.image,!1,s.maxTextureSize);se=Pt(S,se);const ue=r.convert(S.format,S.colorSpace),Ae=r.convert(S.type);let me=_(S.internalFormat,ue,Ae,S.normalized,S.colorSpace,S.isVideoTexture);Ie(Z,S);let fe;const Ce=S.mipmaps,Ue=S.isVideoTexture!==!0,ze=he.__version===void 0||te===!0,O=oe.dataReady,de=b(S,se);if(S.isDepthTexture)me=M(S.format===Kn,S.type),ze&&(Ue?t.texStorage2D(i.TEXTURE_2D,1,me,se.width,se.height):t.texImage2D(i.TEXTURE_2D,0,me,se.width,se.height,0,ue,Ae,null));else if(S.isDataTexture)if(Ce.length>0){Ue&&ze&&t.texStorage2D(i.TEXTURE_2D,de,me,Ce[0].width,Ce[0].height);for(let ie=0,pe=Ce.length;ie<pe;ie++)fe=Ce[ie],Ue?O&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,fe.width,fe.height,ue,Ae,fe.data):t.texImage2D(i.TEXTURE_2D,ie,me,fe.width,fe.height,0,ue,Ae,fe.data);S.generateMipmaps=!1}else Ue?(ze&&t.texStorage2D(i.TEXTURE_2D,de,me,se.width,se.height),O&&z(S,se,ue,Ae)):t.texImage2D(i.TEXTURE_2D,0,me,se.width,se.height,0,ue,Ae,se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){Ue&&ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,me,Ce[0].width,Ce[0].height,se.depth);for(let ie=0,pe=Ce.length;ie<pe;ie++)if(fe=Ce[ie],S.format!==kt)if(ue!==null)if(Ue){if(O)if(S.layerUpdates.size>0){const _e=Ml(fe.width,fe.height,S.format,S.type);for(const re of S.layerUpdates){const Re=fe.data.subarray(re*_e/fe.data.BYTES_PER_ELEMENT,(re+1)*_e/fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,re,fe.width,fe.height,1,ue,Re)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,se.depth,ue,fe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ie,me,fe.width,fe.height,se.depth,0,fe.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Ue?O&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,se.depth,ue,Ae,fe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ie,me,fe.width,fe.height,se.depth,0,ue,Ae,fe.data);S.layerUpdates.size>0&&S.clearLayerUpdates()}else{Ue&&ze&&t.texStorage2D(i.TEXTURE_2D,de,me,Ce[0].width,Ce[0].height);for(let ie=0,pe=Ce.length;ie<pe;ie++)fe=Ce[ie],S.format!==kt?ue!==null?Ue?O&&t.compressedTexSubImage2D(i.TEXTURE_2D,ie,0,0,fe.width,fe.height,ue,fe.data):t.compressedTexImage2D(i.TEXTURE_2D,ie,me,fe.width,fe.height,0,fe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ue?O&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,fe.width,fe.height,ue,Ae,fe.data):t.texImage2D(i.TEXTURE_2D,ie,me,fe.width,fe.height,0,ue,Ae,fe.data)}else if(S.isDataArrayTexture)if(Ue){if(ze&&t.texStorage3D(i.TEXTURE_2D_ARRAY,de,me,se.width,se.height,se.depth),O)if(S.layerUpdates.size>0){const ie=Ml(se.width,se.height,S.format,S.type);for(const pe of S.layerUpdates){const _e=se.data.subarray(pe*ie/se.data.BYTES_PER_ELEMENT,(pe+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,pe,se.width,se.height,1,ue,Ae,_e)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ue,Ae,se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,me,se.width,se.height,se.depth,0,ue,Ae,se.data);else if(S.isData3DTexture)Ue?(ze&&t.texStorage3D(i.TEXTURE_3D,de,me,se.width,se.height,se.depth),O&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ue,Ae,se.data)):t.texImage3D(i.TEXTURE_3D,0,me,se.width,se.height,se.depth,0,ue,Ae,se.data);else if(S.isFramebufferTexture){if(ze)if(Ue)t.texStorage2D(i.TEXTURE_2D,de,me,se.width,se.height);else{let ie=se.width,pe=se.height;for(let _e=0;_e<de;_e++)t.texImage2D(i.TEXTURE_2D,_e,me,ie,pe,0,ue,Ae,null),ie>>=1,pe>>=1}}else if(S.isHTMLTexture){if("texElementImage2D"in i){const ie=i.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),se.parentNode!==ie){ie.appendChild(se),u.add(S),ie.onpaint=pe=>{const _e=pe.changedElements;for(const re of u)_e.includes(re.image)&&(re.needsUpdate=!0)},ie.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,se);else{const _e=i.RGBA,re=i.RGBA,Re=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,_e,re,Re,se)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ce.length>0){if(Ue&&ze){const ie=nt(Ce[0]);t.texStorage2D(i.TEXTURE_2D,de,me,ie.width,ie.height)}for(let ie=0,pe=Ce.length;ie<pe;ie++)fe=Ce[ie],Ue?O&&t.texSubImage2D(i.TEXTURE_2D,ie,0,0,ue,Ae,fe):t.texImage2D(i.TEXTURE_2D,ie,me,ue,Ae,fe);S.generateMipmaps=!1}else if(Ue){if(ze){const ie=nt(se);t.texStorage2D(i.TEXTURE_2D,de,me,ie.width,ie.height)}O&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ue,Ae,se)}else t.texImage2D(i.TEXTURE_2D,0,me,ue,Ae,se);d(S)&&w(Z),he.__version=oe.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function $(D,S,H){if(S.image.length!==6)return;const Z=Fe(D,S),te=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+H);const oe=n.get(te);if(te.version!==oe.__version||Z===!0){t.activeTexture(i.TEXTURE0+H);const he=Xe.getPrimaries(Xe.workingColorSpace),ne=S.colorSpace===fn?null:Xe.getPrimaries(S.colorSpace),se=S.colorSpace===fn||he===ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);const ue=S.isCompressedTexture||S.image[0].isCompressedTexture,Ae=S.image[0]&&S.image[0].isDataTexture,me=[];for(let re=0;re<6;re++)!ue&&!Ae?me[re]=g(S.image[re],!0,s.maxCubemapSize):me[re]=Ae?S.image[re].image:S.image[re],me[re]=Pt(S,me[re]);const fe=me[0],Ce=r.convert(S.format,S.colorSpace),Ue=r.convert(S.type),ze=_(S.internalFormat,Ce,Ue,S.normalized,S.colorSpace),O=S.isVideoTexture!==!0,de=oe.__version===void 0||Z===!0,ie=te.dataReady;let pe=b(S,fe);Ie(i.TEXTURE_CUBE_MAP,S);let _e;if(ue){O&&de&&t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ze,fe.width,fe.height);for(let re=0;re<6;re++){_e=me[re].mipmaps;for(let Re=0;Re<_e.length;Re++){const Ee=_e[Re];S.format!==kt?Ce!==null?O?ie&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,Ee.width,Ee.height,Ce,Ee.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,ze,Ee.width,Ee.height,0,Ee.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):O?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,0,0,Ee.width,Ee.height,Ce,Ue,Ee.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re,ze,Ee.width,Ee.height,0,Ce,Ue,Ee.data)}}}else{if(_e=S.mipmaps,O&&de){_e.length>0&&pe++;const re=nt(me[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,pe,ze,re.width,re.height)}for(let re=0;re<6;re++)if(Ae){O?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,me[re].width,me[re].height,Ce,Ue,me[re].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,me[re].width,me[re].height,0,Ce,Ue,me[re].data);for(let Re=0;Re<_e.length;Re++){const ot=_e[Re].image[re].image;O?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,ot.width,ot.height,Ce,Ue,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,ze,ot.width,ot.height,0,Ce,Ue,ot.data)}}else{O?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,0,0,Ce,Ue,me[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,0,ze,Ce,Ue,me[re]);for(let Re=0;Re<_e.length;Re++){const Ee=_e[Re];O?ie&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,0,0,Ce,Ue,Ee.image[re]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+re,Re+1,ze,Ce,Ue,Ee.image[re])}}}d(S)&&w(i.TEXTURE_CUBE_MAP),oe.__version=te.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function j(D,S,H,Z,te,oe){const he=r.convert(H.format,H.colorSpace),ne=r.convert(H.type),se=_(H.internalFormat,he,ne,H.normalized,H.colorSpace),ue=n.get(S),Ae=n.get(H);if(Ae.__renderTarget=S,!ue.__hasExternalTextures){const me=Math.max(1,S.width>>oe),fe=Math.max(1,S.height>>oe);te===i.TEXTURE_3D||te===i.TEXTURE_2D_ARRAY?t.texImage3D(te,oe,se,me,fe,S.depth,0,he,ne,null):t.texImage2D(te,oe,se,me,fe,0,he,ne,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),ft(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,Z,te,Ae.__webglTexture,0,tt(S)):(te===i.TEXTURE_2D||te>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&te<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,Z,te,Ae.__webglTexture,oe),t.bindFramebuffer(i.FRAMEBUFFER,null)}function ae(D,S,H){if(i.bindRenderbuffer(i.RENDERBUFFER,D),S.depthBuffer){const Z=S.depthTexture,te=Z&&Z.isDepthTexture?Z.type:null,oe=M(S.stencilBuffer,te),he=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;ft(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(S),oe,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(S),oe,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,oe,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,D)}else{const Z=S.textures;for(let te=0;te<Z.length;te++){const oe=Z[te],he=r.convert(oe.format,oe.colorSpace),ne=r.convert(oe.type),se=_(oe.internalFormat,he,ne,oe.normalized,oe.colorSpace);ft(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,tt(S),se,S.width,S.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,tt(S),se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,se,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Pe(D,S,H){const Z=S.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const te=n.get(S.depthTexture);if(te.__renderTarget=S,(!te.__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),Z){if(te.__webglInit===void 0&&(te.__webglInit=!0,S.depthTexture.addEventListener("dispose",A)),te.__webglTexture===void 0){te.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,S.depthTexture);const ue=r.convert(S.depthTexture.format),Ae=r.convert(S.depthTexture.type);let me;S.depthTexture.format===Rn?me=i.DEPTH_COMPONENT24:S.depthTexture.format===Kn&&(me=i.DEPTH24_STENCIL8);for(let fe=0;fe<6;fe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+fe,0,me,S.width,S.height,0,ue,Ae,null)}}else X(S.depthTexture,0);const oe=te.__webglTexture,he=tt(S),ne=Z?i.TEXTURE_CUBE_MAP_POSITIVE_X+H:i.TEXTURE_2D,se=S.depthTexture.format===Kn?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(S.depthTexture.format===Rn)ft(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ne,oe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,se,ne,oe,0);else if(S.depthTexture.format===Kn)ft(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,se,ne,oe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,se,ne,oe,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function we(D){const S=n.get(D),H=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const Z=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),Z){const te=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,Z.removeEventListener("dispose",te)};Z.addEventListener("dispose",te),S.__depthDisposeCallback=te}S.__boundDepthTexture=Z}if(D.depthTexture&&!S.__autoAllocateDepthBuffer)if(H)for(let Z=0;Z<6;Z++)Pe(S.__webglFramebuffer[Z],D,Z);else{const Z=D.texture.mipmaps;Z&&Z.length>0?Pe(S.__webglFramebuffer[0],D,0):Pe(S.__webglFramebuffer,D,0)}else if(H){S.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[Z]),S.__webglDepthbuffer[Z]===void 0)S.__webglDepthbuffer[Z]=i.createRenderbuffer(),ae(S.__webglDepthbuffer[Z],D,!1);else{const te=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer[Z];i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,oe)}}else{const Z=D.texture.mipmaps;if(Z&&Z.length>0?t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),ae(S.__webglDepthbuffer,D,!1);else{const te=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,oe=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,oe),i.framebufferRenderbuffer(i.FRAMEBUFFER,te,i.RENDERBUFFER,oe)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Oe(D,S,H){const Z=n.get(D);S!==void 0&&j(Z.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&we(D)}function Qe(D){const S=D.texture,H=n.get(D),Z=n.get(S);D.addEventListener("dispose",v);const te=D.textures,oe=D.isWebGLCubeRenderTarget===!0,he=te.length>1;if(he||(Z.__webglTexture===void 0&&(Z.__webglTexture=i.createTexture()),Z.__version=S.version,a.memory.textures++),oe){H.__webglFramebuffer=[];for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer[ne]=[];for(let se=0;se<S.mipmaps.length;se++)H.__webglFramebuffer[ne][se]=i.createFramebuffer()}else H.__webglFramebuffer[ne]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){H.__webglFramebuffer=[];for(let ne=0;ne<S.mipmaps.length;ne++)H.__webglFramebuffer[ne]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(he)for(let ne=0,se=te.length;ne<se;ne++){const ue=n.get(te[ne]);ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture(),a.memory.textures++)}if(D.samples>0&&ft(D)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ne=0;ne<te.length;ne++){const se=te[ne];H.__webglColorRenderbuffer[ne]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ne]);const ue=r.convert(se.format,se.colorSpace),Ae=r.convert(se.type),me=_(se.internalFormat,ue,Ae,se.normalized,se.colorSpace,D.isXRRenderTarget===!0),fe=tt(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,fe,me,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ne,i.RENDERBUFFER,H.__webglColorRenderbuffer[ne])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),ae(H.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(oe){t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture),Ie(i.TEXTURE_CUBE_MAP,S);for(let ne=0;ne<6;ne++)if(S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)j(H.__webglFramebuffer[ne][se],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,se);else j(H.__webglFramebuffer[ne],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0);d(S)&&w(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(he){for(let ne=0,se=te.length;ne<se;ne++){const ue=te[ne],Ae=n.get(ue);let me=i.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(me=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,Ae.__webglTexture),Ie(me,ue),j(H.__webglFramebuffer,D,ue,i.COLOR_ATTACHMENT0+ne,me,0),d(ue)&&w(me)}t.unbindTexture()}else{let ne=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(ne=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ne,Z.__webglTexture),Ie(ne,S),S.mipmaps&&S.mipmaps.length>0)for(let se=0;se<S.mipmaps.length;se++)j(H.__webglFramebuffer[se],D,S,i.COLOR_ATTACHMENT0,ne,se);else j(H.__webglFramebuffer,D,S,i.COLOR_ATTACHMENT0,ne,0);d(S)&&w(ne),t.unbindTexture()}D.depthBuffer&&we(D)}function Ge(D){const S=D.textures;for(let H=0,Z=S.length;H<Z;H++){const te=S[H];if(d(te)){const oe=E(D),he=n.get(te).__webglTexture;t.bindTexture(oe,he),w(oe),t.unbindTexture()}}}const ht=[],gt=[];function Ke(D){if(D.samples>0){if(ft(D)===!1){const S=D.textures,H=D.width,Z=D.height;let te=i.COLOR_BUFFER_BIT;const oe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=n.get(D),ne=S.length>1;if(ne)for(let ue=0;ue<S.length;ue++)t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,he.__webglMultisampledFramebuffer);const se=D.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglFramebuffer);for(let ue=0;ue<S.length;ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(te|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(te|=i.STENCIL_BUFFER_BIT)),ne){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);const Ae=n.get(S[ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ae,0)}i.blitFramebuffer(0,0,H,Z,0,0,H,Z,te,i.NEAREST),l===!0&&(ht.length=0,gt.length=0,ht.push(i.COLOR_ATTACHMENT0+ue),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(ht.push(oe),gt.push(oe),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,gt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ne)for(let ue=0;ue<S.length;ue++){t.bindFramebuffer(i.FRAMEBUFFER,he.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.RENDERBUFFER,he.__webglColorRenderbuffer[ue]);const Ae=n.get(S[ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,he.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ue,i.TEXTURE_2D,Ae,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,he.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){const S=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function tt(D){return Math.min(s.maxSamples,D.samples)}function ft(D){const S=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function k(D){const S=a.render.frame;h.get(D)!==S&&(h.set(D,S),D.update())}function Pt(D,S){const H=D.colorSpace,Z=D.format,te=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||H!==tr&&H!==fn&&(Xe.getTransfer(H)===et?(Z!==kt||te!==Ct)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Je("WebGLTextures: Unsupported texture color space:",H)),S}function nt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=I,this.getTextureUnits=R,this.setTextureUnits=U,this.setTexture2D=X,this.setTexture2DArray=B,this.setTexture3D=W,this.setTextureCube=ee,this.rebindTextures=Oe,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Ge,this.updateMultisampleRenderTarget=Ke,this.setupDepthRenderbuffer=we,this.setupFrameBufferTexture=j,this.useMultisampledRTT=ft,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function Zg(i,e){function t(n,s=fn){let r;const a=Xe.getTransfer(s);if(n===Ct)return i.UNSIGNED_BYTE;if(n===fo)return i.UNSIGNED_SHORT_4_4_4_4;if(n===po)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Rc)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Pc)return i.UNSIGNED_INT_10F_11F_11F_REV;if(n===Ac)return i.BYTE;if(n===Cc)return i.SHORT;if(n===ss)return i.UNSIGNED_SHORT;if(n===uo)return i.INT;if(n===xn)return i.UNSIGNED_INT;if(n===dn)return i.FLOAT;if(n===yt)return i.HALF_FLOAT;if(n===Lc)return i.ALPHA;if(n===Dc)return i.RGB;if(n===kt)return i.RGBA;if(n===Rn)return i.DEPTH_COMPONENT;if(n===Kn)return i.DEPTH_STENCIL;if(n===Ic)return i.RED;if(n===mo)return i.RED_INTEGER;if(n===jn)return i.RG;if(n===go)return i.RG_INTEGER;if(n===vo)return i.RGBA_INTEGER;if(n===Ws||n===Xs||n===qs||n===Ys)if(a===et)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ws)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ws)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Xs)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===qs)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ys)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===pa||n===ma||n===ga||n===va)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===pa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ma)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===ga)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===va)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===xa||n===_a||n===Ma||n===Sa||n===ya||n===$s||n===ba)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===xa||n===_a)return a===et?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Ma)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(n===Sa)return r.COMPRESSED_R11_EAC;if(n===ya)return r.COMPRESSED_SIGNED_R11_EAC;if(n===$s)return r.COMPRESSED_RG11_EAC;if(n===ba)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===wa||n===Ea||n===Ta||n===Aa||n===Ca||n===Ra||n===Pa||n===La||n===Da||n===Ia||n===Ua||n===Na||n===Fa||n===Oa)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===wa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Ea)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Ta)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Aa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Ca)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Ra)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Pa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===La)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Da)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Ia)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Ua)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Na)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Fa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Oa)return a===et?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ba||n===ka||n===za)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ba)return a===et?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ka)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===za)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Ha||n===Va||n===er||n===Ga)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Va)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===er)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ga)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===rs?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}const Jg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Qg=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class jg{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new Hc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new bt({vertexShader:Jg,fragmentShader:Qg,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new rt(new jt(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class $g extends ei{constructor(e,t){super();const n=this;let s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,u=null,f=null,p=null,m=null;const x=typeof XRWebGLBinding<"u",g=new jg,d={},w=t.getContextAttributes();let E=null,_=null;const M=[],b=[],A=new Ne;let v=null,y=null;const P=new Vt;P.viewport=new it;const C=new Vt;C.viewport=new it;const L=[P,C],I=new sf;let R=null,U=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let z=M[Q];return z===void 0&&(z=new br,M[Q]=z),z.getTargetRaySpace()},this.getControllerGrip=function(Q){let z=M[Q];return z===void 0&&(z=new br,M[Q]=z),z.getGripSpace()},this.getHand=function(Q){let z=M[Q];return z===void 0&&(z=new br,M[Q]=z),z.getHandSpace()};function V(Q){const z=b.indexOf(Q.inputSource);if(z===-1)return;const K=M[z];K!==void 0&&(K.update(Q.inputSource,Q.frame,c||a),K.dispatchEvent({type:Q.type,data:Q.inputSource}))}function F(){s.removeEventListener("select",V),s.removeEventListener("selectstart",V),s.removeEventListener("selectend",V),s.removeEventListener("squeeze",V),s.removeEventListener("squeezestart",V),s.removeEventListener("squeezeend",V),s.removeEventListener("end",F),s.removeEventListener("inputsourceschange",X);for(let Q=0;Q<M.length;Q++){const z=b[Q];z!==null&&(b[Q]=null,M[Q].disconnect(z))}R=null,U=null,g.reset();for(const Q in d)delete d[Q];if(e.setRenderTarget(E),p=null,f=null,u=null,s=null,_=null,Fe.stop(),n.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),y!==null){const Q=y.camera;Q.fov=y.fov,Q.zoom=y.zoom,Q.updateProjectionMatrix(),y=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){o=Q,n.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(s,t)),u},this.getFrame=function(){return m},this.getSession=function(){return s},this.setSession=async function(Q){if(s=Q,s!==null){if(E=e.getRenderTarget(),s.addEventListener("select",V),s.addEventListener("selectstart",V),s.addEventListener("selectend",V),s.addEventListener("squeeze",V),s.addEventListener("squeezestart",V),s.addEventListener("squeezeend",V),s.addEventListener("end",F),s.addEventListener("inputsourceschange",X),w.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let K=null,$=null,j=null;w.depth&&(j=w.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,K=w.stencil?Kn:Rn,$=w.stencil?rs:xn);const ae={colorFormat:t.RGBA8,depthFormat:j,scaleFactor:r};u=this.getBinding(),f=u.createProjectionLayer(ae),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),_=new Mt(f.textureWidth,f.textureHeight,{format:kt,type:Ct,depthTexture:new Pi(f.textureWidth,f.textureHeight,$,void 0,void 0,void 0,void 0,void 0,void 0,K),stencilBuffer:w.stencil,colorSpace:e.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}else{const K={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,K),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),_=new Mt(p.framebufferWidth,p.framebufferHeight,{format:kt,type:Ct,colorSpace:e.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),Fe.setContext(s),Fe.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return g.getDepthTexture()};function X(Q){for(let z=0;z<Q.removed.length;z++){const K=Q.removed[z],$=b.indexOf(K);$>=0&&(b[$]=null,M[$].disconnect(K))}for(let z=0;z<Q.added.length;z++){const K=Q.added[z];let $=b.indexOf(K);if($===-1){for(let ae=0;ae<M.length;ae++)if(ae>=b.length){b.push(K),$=ae;break}else if(b[ae]===null){b[ae]=K,$=ae;break}if($===-1)break}const j=M[$];j&&j.connect(K)}}const B=new G,W=new G;function ee(Q,z,K){B.setFromMatrixPosition(z.matrixWorld),W.setFromMatrixPosition(K.matrixWorld);const $=B.distanceTo(W),j=z.projectionMatrix.elements,ae=K.projectionMatrix.elements,Pe=j[14]/(j[10]-1),we=j[14]/(j[10]+1),Oe=(j[9]+1)/j[5],Qe=(j[9]-1)/j[5],Ge=(j[8]-1)/j[0],ht=(ae[8]+1)/ae[0],gt=Pe*Ge,Ke=Pe*ht,tt=$/(-Ge+ht),ft=tt*-Ge;if(z.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(ft),Q.translateZ(tt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),j[10]===-1)Q.projectionMatrix.copy(z.projectionMatrix),Q.projectionMatrixInverse.copy(z.projectionMatrixInverse);else{const k=Pe+tt,Pt=we+tt,nt=gt-ft,D=Ke+($-ft),S=Oe*we/Pt*k,H=Qe*we/Pt*k;Q.projectionMatrix.makePerspective(nt,D,S,H,k,Pt),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function le(Q,z){z===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(z.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(s===null)return;let z=Q.near,K=Q.far;g.texture!==null&&(g.depthNear>0&&(z=g.depthNear),g.depthFar>0&&(K=g.depthFar)),I.near=C.near=P.near=z,I.far=C.far=P.far=K,(R!==I.near||U!==I.far)&&(s.updateRenderState({depthNear:I.near,depthFar:I.far}),R=I.near,U=I.far),I.layers.mask=Q.layers.mask|6,P.layers.mask=I.layers.mask&-5,C.layers.mask=I.layers.mask&-3;const $=Q.parent,j=I.cameras;le(I,$);for(let ae=0;ae<j.length;ae++)le(j[ae],$);j.length===2?ee(I,P,C):I.projectionMatrix.copy(P.projectionMatrix),y===null&&Q.isPerspectiveCamera&&(y={camera:Q,fov:Q.fov,zoom:Q.zoom}),ce(Q,I,$)};function ce(Q,z,K){K===null?Q.matrix.copy(z.matrixWorld):(Q.matrix.copy(K.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(z.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(z.projectionMatrix),Q.projectionMatrixInverse.copy(z.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=Xa*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return I},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(Q){l=Q,f!==null&&(f.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return g.texture!==null},this.getDepthSensingMesh=function(){return g.getMesh(I)},this.getCameraTexture=function(Q){return d[Q]};let De=null;function Ie(Q,z){if(h=z.getViewerPose(c||a),m=z,h!==null){const K=h.views;p!==null&&(e.setRenderTargetFramebuffer(_,p.framebuffer),e.setRenderTarget(_));let $=!1;K.length!==I.cameras.length&&(I.cameras.length=0,$=!0);for(let we=0;we<K.length;we++){const Oe=K[we];let Qe=null;if(p!==null)Qe=p.getViewport(Oe);else{const ht=u.getViewSubImage(f,Oe);Qe=ht.viewport,we===0&&(e.setRenderTargetTextures(_,ht.colorTexture,ht.depthStencilTexture),e.setRenderTarget(_))}let Ge=L[we];Ge===void 0&&(Ge=new Vt,Ge.layers.enable(we),Ge.viewport=new it,L[we]=Ge),Ge.matrix.fromArray(Oe.transform.matrix),Ge.matrix.decompose(Ge.position,Ge.quaternion,Ge.scale),Ge.projectionMatrix.fromArray(Oe.projectionMatrix),Ge.projectionMatrixInverse.copy(Ge.projectionMatrix).invert(),Ge.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),we===0&&(I.matrix.copy(Ge.matrix),I.matrix.decompose(I.position,I.quaternion,I.scale)),$===!0&&I.cameras.push(Ge)}const j=s.enabledFeatures;if(j&&j.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){u=n.getBinding();const we=u.getDepthInformation(K[0]);we&&we.isValid&&we.texture&&g.init(we,s.renderState)}if(j&&j.includes("camera-access")&&x){e.state.unbindTexture(),u=n.getBinding();for(let we=0;we<K.length;we++){const Oe=K[we].camera;if(Oe){let Qe=d[Oe];Qe||(Qe=new Hc,d[Oe]=Qe);const Ge=u.getCameraImage(Oe);Qe.sourceTexture=Ge}}}}for(let K=0;K<M.length;K++){const $=b[K],j=M[K];$!==null&&j!==void 0&&j.update($,z,c||a)}De&&De(Q,z),z.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:z}),m=null}const Fe=new Kc;Fe.setAnimationLoop(Ie),this.setAnimationLoop=function(Q){De=Q},this.dispose=function(){}}}const e0=new ct,th=new ke;th.set(-1,0,0,0,1,0,0,0,1);function t0(i,e){function t(g,d){g.matrixAutoUpdate===!0&&g.updateMatrix(),d.value.copy(g.matrix)}function n(g,d){d.color.getRGB(g.fogColor.value,Vc(i)),d.isFog?(g.fogNear.value=d.near,g.fogFar.value=d.far):d.isFogExp2&&(g.fogDensity.value=d.density)}function s(g,d,w,E,_){d.isNodeMaterial?d.uniformsNeedUpdate=!1:d.isMeshBasicMaterial?r(g,d):d.isMeshLambertMaterial?(r(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshToonMaterial?(r(g,d),u(g,d)):d.isMeshPhongMaterial?(r(g,d),h(g,d),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)):d.isMeshStandardMaterial?(r(g,d),f(g,d),d.isMeshPhysicalMaterial&&p(g,d,_)):d.isMeshMatcapMaterial?(r(g,d),m(g,d)):d.isMeshDepthMaterial?r(g,d):d.isMeshDistanceMaterial?(r(g,d),x(g,d)):d.isMeshNormalMaterial?r(g,d):d.isLineBasicMaterial?(a(g,d),d.isLineDashedMaterial&&o(g,d)):d.isPointsMaterial?l(g,d,w,E):d.isSpriteMaterial?c(g,d):d.isShadowMaterial?(g.color.value.copy(d.color),g.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function r(g,d){g.opacity.value=d.opacity,d.color&&g.diffuse.value.copy(d.color),d.emissive&&g.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.bumpMap&&(g.bumpMap.value=d.bumpMap,t(d.bumpMap,g.bumpMapTransform),g.bumpScale.value=d.bumpScale,d.side===zt&&(g.bumpScale.value*=-1)),d.normalMap&&(g.normalMap.value=d.normalMap,t(d.normalMap,g.normalMapTransform),g.normalScale.value.copy(d.normalScale),d.side===zt&&g.normalScale.value.negate()),d.displacementMap&&(g.displacementMap.value=d.displacementMap,t(d.displacementMap,g.displacementMapTransform),g.displacementScale.value=d.displacementScale,g.displacementBias.value=d.displacementBias),d.emissiveMap&&(g.emissiveMap.value=d.emissiveMap,t(d.emissiveMap,g.emissiveMapTransform)),d.specularMap&&(g.specularMap.value=d.specularMap,t(d.specularMap,g.specularMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest);const w=e.get(d),E=w.envMap,_=w.envMapRotation;E&&(g.envMap.value=E,g.envMapRotation.value.setFromMatrix4(e0.makeRotationFromEuler(_)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&g.envMapRotation.value.premultiply(th),g.reflectivity.value=d.reflectivity,g.ior.value=d.ior,g.refractionRatio.value=d.refractionRatio),d.lightMap&&(g.lightMap.value=d.lightMap,g.lightMapIntensity.value=d.lightMapIntensity,t(d.lightMap,g.lightMapTransform)),d.aoMap&&(g.aoMap.value=d.aoMap,g.aoMapIntensity.value=d.aoMapIntensity,t(d.aoMap,g.aoMapTransform))}function a(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform))}function o(g,d){g.dashSize.value=d.dashSize,g.totalSize.value=d.dashSize+d.gapSize,g.scale.value=d.scale}function l(g,d,w,E){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.size.value=d.size*w,g.scale.value=E*.5,d.map&&(g.map.value=d.map,t(d.map,g.uvTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function c(g,d){g.diffuse.value.copy(d.color),g.opacity.value=d.opacity,g.rotation.value=d.rotation,d.map&&(g.map.value=d.map,t(d.map,g.mapTransform)),d.alphaMap&&(g.alphaMap.value=d.alphaMap,t(d.alphaMap,g.alphaMapTransform)),d.alphaTest>0&&(g.alphaTest.value=d.alphaTest)}function h(g,d){g.specular.value.copy(d.specular),g.shininess.value=Math.max(d.shininess,1e-4)}function u(g,d){d.gradientMap&&(g.gradientMap.value=d.gradientMap)}function f(g,d){g.metalness.value=d.metalness,d.metalnessMap&&(g.metalnessMap.value=d.metalnessMap,t(d.metalnessMap,g.metalnessMapTransform)),g.roughness.value=d.roughness,d.roughnessMap&&(g.roughnessMap.value=d.roughnessMap,t(d.roughnessMap,g.roughnessMapTransform)),d.envMap&&(g.envMapIntensity.value=d.envMapIntensity)}function p(g,d,w){g.ior.value=d.ior,d.sheen>0&&(g.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),g.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(g.sheenColorMap.value=d.sheenColorMap,t(d.sheenColorMap,g.sheenColorMapTransform)),d.sheenRoughnessMap&&(g.sheenRoughnessMap.value=d.sheenRoughnessMap,t(d.sheenRoughnessMap,g.sheenRoughnessMapTransform))),d.clearcoat>0&&(g.clearcoat.value=d.clearcoat,g.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(g.clearcoatMap.value=d.clearcoatMap,t(d.clearcoatMap,g.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,t(d.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(g.clearcoatNormalMap.value=d.clearcoatNormalMap,t(d.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===zt&&g.clearcoatNormalScale.value.negate())),d.dispersion>0&&(g.dispersion.value=d.dispersion),d.retroreflectivity>0&&(g.retroreflectivity.value=d.retroreflectivity),d.iridescence>0&&(g.iridescence.value=d.iridescence,g.iridescenceIOR.value=d.iridescenceIOR,g.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(g.iridescenceMap.value=d.iridescenceMap,t(d.iridescenceMap,g.iridescenceMapTransform)),d.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=d.iridescenceThicknessMap,t(d.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),d.transmission>0&&(g.transmission.value=d.transmission,g.transmissionSamplerMap.value=w.texture,g.transmissionSamplerSize.value.set(w.width,w.height),d.transmissionMap&&(g.transmissionMap.value=d.transmissionMap,t(d.transmissionMap,g.transmissionMapTransform)),g.thickness.value=d.thickness,d.thicknessMap&&(g.thicknessMap.value=d.thicknessMap,t(d.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=d.attenuationDistance,g.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(g.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(g.anisotropyMap.value=d.anisotropyMap,t(d.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=d.specularIntensity,g.specularColor.value.copy(d.specularColor),d.specularColorMap&&(g.specularColorMap.value=d.specularColorMap,t(d.specularColorMap,g.specularColorMapTransform)),d.specularIntensityMap&&(g.specularIntensityMap.value=d.specularIntensityMap,t(d.specularIntensityMap,g.specularIntensityMapTransform))}function m(g,d){d.matcap&&(g.matcap.value=d.matcap)}function x(g,d){const w=e.get(d).light;g.referencePosition.value.setFromMatrixPosition(w.matrixWorld),g.nearDistance.value=w.shadow.camera.near,g.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function n0(i,e,t,n){let s={},r={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,M){const b=M.program;n.uniformBlockBinding(_,b)}function c(_,M){let b=s[_.id];b===void 0&&(g(_),b=h(_),s[_.id]=b,_.addEventListener("dispose",w));const A=M.program;n.updateUBOMapping(_,A);const v=e.render.frame;r[_.id]!==v&&(f(_),r[_.id]=v)}function h(_){const M=u();_.__bindingPointIndex=M;const b=i.createBuffer(),A=_.__size,v=_.usage;return i.bindBuffer(i.UNIFORM_BUFFER,b),i.bufferData(i.UNIFORM_BUFFER,A,v),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,M,b),b}function u(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return Je("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(_){const M=s[_.id],b=_.uniforms,A=_.__cache;i.bindBuffer(i.UNIFORM_BUFFER,M);for(let v=0,y=b.length;v<y;v++){const P=b[v];if(Array.isArray(P))for(let C=0,L=P.length;C<L;C++)p(P[C],v,C,A);else p(P,v,0,A)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(_,M,b,A){if(x(_,M,b,A)===!0){const v=_.__offset,y=_.value;if(Array.isArray(y)){let P=0;for(let C=0;C<y.length;C++){const L=y[C],I=d(L);m(L,_.__data,P),typeof L!="number"&&typeof L!="boolean"&&!L.isMatrix3&&!ArrayBuffer.isView(L)&&(P+=I.storage/Float32Array.BYTES_PER_ELEMENT)}}else m(y,_.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,v,_.__data)}}function m(_,M,b){typeof _=="number"||typeof _=="boolean"?M[0]=_:_.isMatrix3?(M[0]=_.elements[0],M[1]=_.elements[1],M[2]=_.elements[2],M[3]=0,M[4]=_.elements[3],M[5]=_.elements[4],M[6]=_.elements[5],M[7]=0,M[8]=_.elements[6],M[9]=_.elements[7],M[10]=_.elements[8],M[11]=0):ArrayBuffer.isView(_)?M.set(new _.constructor(_.buffer,_.byteOffset,M.length)):_.toArray(M,b)}function x(_,M,b,A){const v=_.value,y=M+"_"+b;if(A[y]===void 0)return typeof v=="number"||typeof v=="boolean"?A[y]=v:ArrayBuffer.isView(v)?A[y]=v.slice():A[y]=v.clone(),!0;{const P=A[y];if(typeof v=="number"||typeof v=="boolean"){if(P!==v)return A[y]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(P.equals(v)===!1)return P.copy(v),!0}}return!1}function g(_){const M=_.uniforms;let b=0;const A=16;for(let y=0,P=M.length;y<P;y++){const C=Array.isArray(M[y])?M[y]:[M[y]];for(let L=0,I=C.length;L<I;L++){const R=C[L],U=Array.isArray(R.value)?R.value:[R.value];for(let V=0,F=U.length;V<F;V++){const X=U[V],B=d(X),W=b%A,ee=W%B.boundary,le=W+ee;b+=ee,le!==0&&A-le<B.storage&&(b+=A-le),R.__data=new Float32Array(B.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=b,b+=B.storage}}}const v=b%A;return v>0&&(b+=A-v),_.__size=b,_.__cache={},this}function d(_){const M={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(M.boundary=4,M.storage=4):_.isVector2?(M.boundary=8,M.storage=8):_.isVector3||_.isColor?(M.boundary=16,M.storage=12):_.isVector4?(M.boundary=16,M.storage=16):_.isMatrix3?(M.boundary=48,M.storage=48):_.isMatrix4?(M.boundary=64,M.storage=64):_.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(M.boundary=16,M.storage=_.byteLength):Be("WebGLRenderer: Unsupported uniform value type.",_),M}function w(_){const M=_.target;M.removeEventListener("dispose",w);const b=a.indexOf(M.__bindingPointIndex);a.splice(b,1),i.deleteBuffer(s[M.id]),delete s[M.id],delete r[M.id]}function E(){for(const _ in s)i.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:E}}const i0=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let cn=null;function s0(){return cn===null&&(cn=new cs(i0,16,16,jn,yt),cn.name="DFG_LUT",cn.minFilter=Ye,cn.magFilter=Ye,cn.wrapS=Tn,cn.wrapT=Tn,cn.generateMipmaps=!1,cn.needsUpdate=!0),cn}class r0{constructor(e={}){const{canvas:t=vu(),context:n=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:f=!1,outputBufferType:p=Ct}=e;this.isWebGLRenderer=!0;let m;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=n.getContextAttributes().alpha}else m=a;const x=p,g=new Set([vo,go,mo]),d=new Set([Ct,xn,ss,rs,fo,po]),w=new Uint32Array(4),E=new Int32Array(4),_=new G;let M=null,b=null;const A=[],v=[];let y=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=gn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const P=this;let C=!1,L=null,I=null,R=null,U=null;this._outputColorSpace=pt;let V=0,F=0,X=null,B=-1,W=null;const ee=new it,le=new it;let ce=null;const De=new Le(0);let Ie=0,Fe=t.width,Q=t.height,z=1,K=null,$=null;const j=new it(0,0,Fe,Q),ae=new it(0,0,Fe,Q);let Pe=!1;const we=new bo;let Oe=!1,Qe=!1;const Ge=new ct,ht=new G,gt=new it,Ke={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let tt=!1;function ft(){return X===null?z:1}let k=n;function Pt(T,N){return t.getContext(T,N)}let nt,D,S,H,Z,te,oe,he,ne,se,ue,Ae,me,fe,Ce,Ue,ze,O,de,ie,pe,_e,re;try{const T={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${io}`),t.addEventListener("webglcontextlost",ot,!1),t.addEventListener("webglcontextrestored",je,!1),t.addEventListener("webglcontextcreationerror",$t,!1),k===null){const N="webgl2";if(k=Pt(N,T),k===null)throw Pt(N)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Re()}catch(T){throw t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",$t,!1),Je("WebGLRenderer: "+T.message),T}function Re(){nt=new sm(k),nt.init(),pe=new Zg(k,nt),D=new Kp(k,nt,e,pe),S=new Yg(k,nt),D.reversedDepthBuffer&&f&&S.buffers.depth.setReversed(!0),I=k.createFramebuffer(),R=k.createFramebuffer(),U=k.createFramebuffer(),H=new om(k),Z=new Ig,te=new Kg(k,nt,S,Z,D,pe,H),oe=new im(P),he=new cf(k),_e=new qp(k,he),ne=new rm(k,he,H,_e),se=new cm(k,ne,he,_e,H),O=new lm(k,D,te),Ce=new Zp(Z),ue=new Dg(P,oe,nt,D,_e,Ce),Ae=new t0(P,Z),me=new Ng,fe=new Hg(nt),ze=new Xp(P,oe,S,se,m,l),Ue=new qg(P,se,D),re=new n0(k,H,D,S),de=new Yp(k,nt,H),ie=new am(k,nt,H),H.programs=ue.programs,P.capabilities=D,P.extensions=nt,P.properties=Z,P.renderLists=me,P.shadowMap=Ue,P.state=S,P.info=H}x!==Ct&&(y=new um(x,t.width,t.height,o,s,r));const Ee=new $g(P,k);this.xr=Ee,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const T=nt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=nt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(T){T!==void 0&&(z=T,this.setSize(Fe,Q,!1))},this.getSize=function(T){return T.set(Fe,Q)},this.setSize=function(T,N,J=!0){if(Ee.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}Fe=T,Q=N,t.width=Math.floor(T*z),t.height=Math.floor(N*z),J===!0&&(t.style.width=T+"px",t.style.height=N+"px"),y!==null&&y.setSize(t.width,t.height),this.setViewport(0,0,T,N)},this.getDrawingBufferSize=function(T){return T.set(Fe*z,Q*z).floor()},this.setDrawingBufferSize=function(T,N,J){Fe=T,Q=N,z=J,t.width=Math.floor(T*J),t.height=Math.floor(N*J),this.setViewport(0,0,T,N)},this.setEffects=function(T){if(x===Ct){Je("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let N=0;N<T.length;N++)if(T[N].isOutputPass===!0){Be("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}y.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ee)},this.getViewport=function(T){return T.copy(j)},this.setViewport=function(T,N,J,q){T.isVector4?j.set(T.x,T.y,T.z,T.w):j.set(T,N,J,q),S.viewport(ee.copy(j).multiplyScalar(z).round())},this.getScissor=function(T){return T.copy(ae)},this.setScissor=function(T,N,J,q){T.isVector4?ae.set(T.x,T.y,T.z,T.w):ae.set(T,N,J,q),S.scissor(le.copy(ae).multiplyScalar(z).round())},this.getScissorTest=function(){return Pe},this.setScissorTest=function(T){S.setScissorTest(Pe=T)},this.setOpaqueSort=function(T){K=T},this.setTransparentSort=function(T){$=T},this.getClearColor=function(T){return T.copy(ze.getClearColor())},this.setClearColor=function(){ze.setClearColor(...arguments)},this.getClearAlpha=function(){return ze.getClearAlpha()},this.setClearAlpha=function(){ze.setClearAlpha(...arguments)},this.clear=function(T=!0,N=!0,J=!0){let q=0;if(T){let Y=!1;if(X!==null){const xe=X.texture.format;Y=g.has(xe)}if(Y){const xe=X.texture.type,Se=d.has(xe),ve=ze.getClearColor(),ye=ze.getClearAlpha(),Te=ve.r,Ve=ve.g,We=ve.b;Se?(w[0]=Te,w[1]=Ve,w[2]=We,w[3]=ye,k.clearBufferuiv(k.COLOR,0,w)):(E[0]=Te,E[1]=Ve,E[2]=We,E[3]=ye,k.clearBufferiv(k.COLOR,0,E))}else q|=k.COLOR_BUFFER_BIT}N&&(q|=k.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=k.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&k.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),L=T},this.dispose=function(){t.removeEventListener("webglcontextlost",ot,!1),t.removeEventListener("webglcontextrestored",je,!1),t.removeEventListener("webglcontextcreationerror",$t,!1),ze.dispose(),me.dispose(),fe.dispose(),Z.dispose(),oe.dispose(),se.dispose(),_e.dispose(),re.dispose(),ue.dispose(),Ee.dispose(),Ee.removeEventListener("sessionstart",Fo),Ee.removeEventListener("sessionend",Oo),Hn.stop()};function ot(T){T.preventDefault(),Qo("WebGLRenderer: Context Lost."),C=!0}function je(){Qo("WebGLRenderer: Context Restored."),C=!1;const T=H.autoReset,N=Ue.enabled,J=Ue.autoUpdate,q=Ue.needsUpdate,Y=Ue.type;Re(),H.autoReset=T,Ue.enabled=N,Ue.autoUpdate=J,Ue.needsUpdate=q,Ue.type=Y}function $t(T){Je("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function an(T){const N=T.target;N.removeEventListener("dispose",an),Mh(N)}function Mh(T){Sh(T),Z.remove(T)}function Sh(T){const N=Z.get(T).programs;N!==void 0&&(N.forEach(function(J){ue.releaseProgram(J)}),T.isShaderMaterial&&ue.releaseShaderCache(T))}this.renderBufferDirect=function(T,N,J,q,Y,xe){N===null&&(N=Ke);const Se=Y.isMesh&&Y.matrixWorld.determinantAffine()<0,ve=wh(T,N,J,q,Y);S.setMaterial(q,Se);let ye=J.index,Te=1;if(q.wireframe===!0){if(ye=ne.getWireframeAttribute(J),ye===void 0)return;Te=2}const Ve=J.drawRange,We=J.attributes.position;let be=Ve.start*Te,$e=(Ve.start+Ve.count)*Te;xe!==null&&(be=Math.max(be,xe.start*Te),$e=Math.min($e,(xe.start+xe.count)*Te)),ye!==null?(be=Math.max(be,0),$e=Math.min($e,ye.count)):We!=null&&(be=Math.max(be,0),$e=Math.min($e,We.count));const xt=$e-be;if(xt<0||xt===1/0)return;_e.setup(Y,q,ve,J,ye);let ut,at=de;if(ye!==null&&(ut=he.get(ye),at=ie,at.setIndex(ut)),Y.isMesh)q.wireframe===!0?(S.setLineWidth(q.wireframeLinewidth*ft()),at.setMode(k.LINES)):at.setMode(k.TRIANGLES);else if(Y.isLine){let Lt=q.linewidth;Lt===void 0&&(Lt=1),S.setLineWidth(Lt*ft()),Y.isLineSegments?at.setMode(k.LINES):Y.isLineLoop?at.setMode(k.LINE_LOOP):at.setMode(k.LINE_STRIP)}else Y.isPoints?at.setMode(k.POINTS):Y.isSprite&&at.setMode(k.TRIANGLES);if(Y.isBatchedMesh)if(nt.get("WEBGL_multi_draw"))at.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Lt=Y._multiDrawStarts,Me=Y._multiDrawCounts,Ot=Y._multiDrawCount,Ze=ye?he.get(ye).bytesPerElement:1,Kt=Z.get(q).currentProgram.getUniforms();for(let on=0;on<Ot;on++)Kt.setValue(k,"_gl_DrawID",on),at.render(Lt[on]/Ze,Me[on])}else if(Y.isInstancedMesh)at.renderInstances(be,xt,Y.count);else if(J.isInstancedBufferGeometry){const Lt=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Me=Math.min(J.instanceCount,Lt);at.renderInstances(be,xt,Me)}else at.render(be,xt)};function No(T,N,J,q){L!==null&&T.isNodeMaterial&&L.setObject(q,T),Oe===!0&&Ce.setState(T,J,!1),T.transparent===!0&&T.side===Qt&&T.forceSinglePass===!1?(T.side=zt,T.needsUpdate=!0,gs(T,N,q),T.side=Jn,T.needsUpdate=!0,gs(T,N,q),T.side=Qt):gs(T,N,q)}this.compile=function(T,N,J=null){J===null&&(J=T),L!==null&&L.renderStart(T,N,J),b=fe.get(J),b.init(N),v.push(b),J.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),T!==J&&T.traverseVisible(function(Y){Y.isLight&&Y.layers.test(N.layers)&&(b.pushLight(Y),Y.castShadow&&b.pushShadow(Y))}),b.setupLights(),L!==null&&L.updateLights(b.state.lightsArray),Qe=this.localClippingEnabled,Oe=Ce.init(this.clippingPlanes,Qe),Oe===!0&&Ce.setGlobalState(this.clippingPlanes,N),L!==null&&Ue.render(b.state.shadowsArray,J,N);const q=new Set;return T.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const xe=Y.material;if(xe)if(Array.isArray(xe))for(let Se=0;Se<xe.length;Se++){const ve=xe[Se];No(ve,J,N,Y),q.add(ve)}else No(xe,J,N,Y),q.add(xe)}),b=v.pop(),L!==null&&L.renderEnd(),q},this.compileAsync=function(T,N,J=null){const q=this.compile(T,N,J);return new Promise(Y=>{function xe(){if(q.forEach(function(Se){const ye=Z.get(Se).currentProgram;(ye===void 0||ye.isReady())&&q.delete(Se)}),q.size===0){Y(T);return}setTimeout(xe,10)}nt.get("KHR_parallel_shader_compile")!==null?xe():setTimeout(xe,10)})};let hr=null;function yh(T){hr&&hr(T)}function Fo(){Hn.stop()}function Oo(){Hn.start()}const Hn=new Kc;Hn.setAnimationLoop(yh),typeof self<"u"&&Hn.setContext(self),this.setAnimationLoop=function(T){hr=T,Ee.setAnimationLoop(T),T===null?Hn.stop():Hn.start()},Ee.addEventListener("sessionstart",Fo),Ee.addEventListener("sessionend",Oo),this.render=function(T,N){if(N!==void 0&&N.isCamera!==!0){Je("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(C===!0)return;L!==null&&L.renderStart(T,N);const J=Ee.enabled===!0&&Ee.isPresenting===!0,q=y!==null&&(X===null||J)&&y.begin(P,X);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),N.parent===null&&N.matrixWorldAutoUpdate===!0&&N.updateMatrixWorld(),Ee.enabled===!0&&Ee.isPresenting===!0&&(y===null||y.isCompositing()===!1)&&(Ee.cameraAutoUpdate===!0&&Ee.updateCamera(N),N=Ee.getCamera()),T.isScene===!0&&T.onBeforeRender(P,T,N,X),b=fe.get(T,v.length),b.init(N),b.state.textureUnits=te.getTextureUnits(),v.push(b),Ge.multiplyMatrices(N.projectionMatrix,N.matrixWorldInverse),we.setFromProjectionMatrix(Ge,pn,N.reversedDepth),Qe=this.localClippingEnabled,Oe=Ce.init(this.clippingPlanes,Qe),M=me.get(T,A.length),M.init(),A.push(M),Ee.enabled===!0&&Ee.isPresenting===!0){const Se=P.xr.getDepthSensingMesh();Se!==null&&ur(Se,N,-1/0,P.sortObjects)}ur(T,N,0,P.sortObjects),M.finish(),L!==null&&L.updateLights(b.state.lightsArray),P.sortObjects===!0&&M.sort(K,$),tt=Ee.enabled===!1||Ee.isPresenting===!1||Ee.hasDepthSensing()===!1,tt&&ze.addToRenderList(M,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Oe===!0&&Ce.beginShadows();const Y=b.state.shadowsArray;if(Ue.render(Y,T,N),Oe===!0&&Ce.endShadows(),(q&&y.hasRenderPass())===!1){const Se=M.opaque,ve=M.transmissive;if(b.setupLights(),N.isArrayCamera){const ye=N.cameras;if(ve.length>0)for(let Te=0,Ve=ye.length;Te<Ve;Te++){const We=ye[Te];ko(Se,ve,T,We)}tt&&ze.render(T);for(let Te=0,Ve=ye.length;Te<Ve;Te++){const We=ye[Te];Bo(M,T,We,We.viewport)}}else ve.length>0&&ko(Se,ve,T,N),tt&&ze.render(T),Bo(M,T,N)}X!==null&&F===0&&(te.updateMultisampleRenderTarget(X),te.updateRenderTargetMipmap(X)),q&&y.end(P),T.isScene===!0&&T.onAfterRender(P,T,N),_e.resetDefaultState(),B=-1,W=null,v.pop(),v.length>0?(b=v[v.length-1],te.setTextureUnits(b.state.textureUnits),Oe===!0&&Ce.setGlobalState(P.clippingPlanes,b.state.camera)):b=null,A.pop(),A.length>0?M=A[A.length-1]:M=null,L!==null&&L.renderEnd()};function ur(T,N,J,q){if(T.visible===!1)return;if(T.layers.test(N.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(N);else if(T.isLightProbeGrid)b.pushLightProbeGrid(T);else if(T.isLight)b.pushLight(T),T.castShadow&&b.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(we)){q&&gt.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Ge);const Se=se.update(T),ve=T.material;ve.visible&&M.push(T,Se,ve,J,gt.z,null,N)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(we))){const Se=se.update(T),ve=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),gt.copy(T.boundingSphere.center)):(Se.boundingSphere===null&&Se.computeBoundingSphere(),gt.copy(Se.boundingSphere.center)),gt.applyMatrix4(T.matrixWorld).applyMatrix4(Ge)),Array.isArray(ve)){const ye=Se.groups;for(let Te=0,Ve=ye.length;Te<Ve;Te++){const We=ye[Te],be=ve[We.materialIndex];be&&be.visible&&M.push(T,Se,be,J,gt.z,We,N)}}else ve.visible&&M.push(T,Se,ve,J,gt.z,null,N)}}const xe=T.children;for(let Se=0,ve=xe.length;Se<ve;Se++)ur(xe[Se],N,J,q)}function Bo(T,N,J,q){const{opaque:Y,transmissive:xe,transparent:Se}=T;b.setupLightsView(J),Oe===!0&&Ce.setGlobalState(P.clippingPlanes,J),q&&S.viewport(ee.copy(q)),Y.length>0&&ms(Y,N,J),xe.length>0&&ms(xe,N,J),Se.length>0&&ms(Se,N,J),S.buffers.depth.setTest(!0),S.buffers.depth.setMask(!0),S.buffers.color.setMask(!0),S.setPolygonOffset(!1)}function ko(T,N,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(b.state.transmissionRenderTarget[q.id]===void 0){const be=nt.has("EXT_color_buffer_half_float")||nt.has("EXT_color_buffer_float");b.state.transmissionRenderTarget[q.id]=new Mt(1,1,{generateMipmaps:!0,type:be?yt:Ct,minFilter:qt,samples:Math.max(4,D.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Xe.workingColorSpace})}const xe=b.state.transmissionRenderTarget[q.id],Se=q.viewport||ee;xe.setSize(Se.z*P.transmissionResolutionScale,Se.w*P.transmissionResolutionScale);const ve=P.getRenderTarget(),ye=P.getActiveCubeFace(),Te=P.getActiveMipmapLevel();P.setRenderTarget(xe),P.getClearColor(De),Ie=P.getClearAlpha(),Ie<1&&P.setClearColor(16777215,.5),P.clear(),tt&&ze.render(J);const Ve=P.toneMapping;P.toneMapping=gn;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),b.setupLightsView(q),Oe===!0&&Ce.setGlobalState(P.clippingPlanes,q),ms(T,J,q),te.updateMultisampleRenderTarget(xe),te.updateRenderTargetMipmap(xe),nt.has("WEBGL_multisampled_render_to_texture")===!1){let be=!1;for(let $e=0,xt=N.length;$e<xt;$e++){const ut=N[$e],{object:at,geometry:Lt,material:Me,group:Ot}=ut;if(Me.side===Qt&&at.layers.test(q.layers)){const Ze=Me.side;Me.side=zt,Me.needsUpdate=!0,zo(at,J,q,Lt,Me,Ot),Me.side=Ze,Me.needsUpdate=!0,be=!0}}be===!0&&(te.updateMultisampleRenderTarget(xe),te.updateRenderTargetMipmap(xe))}P.setRenderTarget(ve,ye,Te),P.setClearColor(De,Ie),We!==void 0&&(q.viewport=We),P.toneMapping=Ve}function ms(T,N,J){const q=N.isScene===!0?N.overrideMaterial:null;for(let Y=0,xe=T.length;Y<xe;Y++){const Se=T[Y],{object:ve,geometry:ye,group:Te}=Se;let Ve=Se.material;Ve.allowOverride===!0&&q!==null&&(Ve=q),ve.layers.test(J.layers)&&zo(ve,N,J,ye,Ve,Te)}}function zo(T,N,J,q,Y,xe){L!==null&&Y.isNodeMaterial&&L.setObject(T,Y),T.onBeforeRender(P,N,J,q,Y,xe),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),Y.onBeforeRender(P,N,J,q,T,xe),Y.transparent===!0&&Y.side===Qt&&Y.forceSinglePass===!1?(Y.side=zt,Y.needsUpdate=!0,P.renderBufferDirect(J,N,q,Y,T,xe),Y.side=Jn,Y.needsUpdate=!0,P.renderBufferDirect(J,N,q,Y,T,xe),Y.side=Qt):P.renderBufferDirect(J,N,q,Y,T,xe),T.onAfterRender(P,N,J,q,Y,xe)}function gs(T,N,J){N.isScene!==!0&&(N=Ke);const q=Z.get(T),Y=b.state.lights,xe=b.state.shadowsArray,Se=Y.state.version,ve=ue.getParameters(T,Y.state,xe,N,J,b.state.lightProbeGridArray),ye=ue.getProgramCacheKey(ve);let Te=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?N.environment:null,q.fog=N.fog;const Ve=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=oe.get(T.envMap||q.environment,Ve),q.envMapRotation=q.environment!==null&&T.envMap===null?N.environmentRotation:T.envMapRotation,Te===void 0&&(T.addEventListener("dispose",an),Te=new Map,q.programs=Te);let We=Te.get(ye);if(We!==void 0){if(q.currentProgram===We&&q.lightsStateVersion===Se)return Vo(T,ve),We}else ve.uniforms=ue.getUniforms(T),L!==null&&T.isNodeMaterial&&L.build(T,J,ve),T.onBeforeCompile(ve,P),We=ue.acquireProgram(ve,ye),Te.set(ye,We),q.uniforms=ve.uniforms;const be=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(be.clippingPlanes=Ce.uniform),Vo(T,ve),q.needsLights=Th(T),q.lightsStateVersion=Se,q.needsLights&&(be.ambientLightColor.value=Y.state.ambient,be.lightProbe.value=Y.state.probe,be.sunLights.value=Y.state.sun,be.sunLightShadows.value=Y.state.sunShadow,be.directionalLights.value=Y.state.directional,be.directionalLightShadows.value=Y.state.directionalShadow,be.spotLights.value=Y.state.spot,be.spotLightShadows.value=Y.state.spotShadow,be.rectAreaLights.value=Y.state.rectArea,be.ltc_1.value=Y.state.rectAreaLTC1,be.ltc_2.value=Y.state.rectAreaLTC2,be.pointLights.value=Y.state.point,be.pointLightShadows.value=Y.state.pointShadow,be.hemisphereLights.value=Y.state.hemi,be.sunShadowMatrix.value=Y.state.sunShadowMatrix,be.sunShadowCascade.value=Y.state.sunShadowCascade,be.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,be.spotLightMatrix.value=Y.state.spotLightMatrix,be.spotLightMap.value=Y.state.spotLightMap,be.pointShadowMatrix.value=Y.state.pointShadowMatrix),q.lightProbeGrid=b.state.lightProbeGridArray.length>0,q.currentProgram=We,q.uniformsList=null,We}function Ho(T){if(T.uniformsList===null){const N=T.currentProgram.getUniforms();T.uniformsList=Ks.seqWithValue(N.seq,T.uniforms)}return T.uniformsList}function Vo(T,N){const J=Z.get(T);J.outputColorSpace=N.outputColorSpace,J.batching=N.batching,J.batchingColor=N.batchingColor,J.instancing=N.instancing,J.instancingColor=N.instancingColor,J.instancingMorph=N.instancingMorph,J.skinning=N.skinning,J.morphTargets=N.morphTargets,J.morphNormals=N.morphNormals,J.morphColors=N.morphColors,J.morphTargetsCount=N.morphTargetsCount,J.numClippingPlanes=N.numClippingPlanes,J.numIntersection=N.numClipIntersection,J.vertexAlphas=N.vertexAlphas,J.vertexTangents=N.vertexTangents,J.toneMapping=N.toneMapping}function bh(T,N){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;_.setFromMatrixPosition(N.matrixWorld);for(let J=0,q=T.length;J<q;J++){const Y=T[J];if(Y.texture!==null&&Y.boundingBox.containsPoint(_))return Y}return null}function wh(T,N,J,q,Y){N.isScene!==!0&&(N=Ke),te.resetTextureUnits();const xe=N.fog,Se=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?N.environment:null,ve=X===null?P.outputColorSpace:X.isXRRenderTarget===!0?X.texture.colorSpace:Xe.workingColorSpace,ye=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Te=oe.get(q.envMap||Se,ye),Ve=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,We=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),be=!!J.morphAttributes.position,$e=!!J.morphAttributes.normal,xt=!!J.morphAttributes.color;let ut=gn;q.toneMapped&&(X===null||X.isXRRenderTarget===!0)&&(ut=P.toneMapping);const at=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,Lt=at!==void 0?at.length:0,Me=Z.get(q),Ot=b.state.lights;if(Oe===!0&&(Qe===!0||T!==W)){const lt=T===W&&q.id===B;Ce.setState(q,T,lt)}let Ze=!1;q.version===Me.__version?(Me.needsLights&&Me.lightsStateVersion!==Ot.state.version||Me.outputColorSpace!==ve||Y.isBatchedMesh&&Me.batching===!1||!Y.isBatchedMesh&&Me.batching===!0||Y.isBatchedMesh&&Me.batchingColor===!0&&Y._colorsTexture===null||Y.isBatchedMesh&&Me.batchingColor===!1&&Y._colorsTexture!==null||Y.isInstancedMesh&&Me.instancing===!1||!Y.isInstancedMesh&&Me.instancing===!0||Y.isSkinnedMesh&&Me.skinning===!1||!Y.isSkinnedMesh&&Me.skinning===!0||Y.isInstancedMesh&&Me.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Me.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Me.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Me.instancingMorph===!1&&Y.morphTexture!==null||Me.envMap!==Te||q.fog===!0&&Me.fog!==xe||Me.numClippingPlanes!==void 0&&(Me.numClippingPlanes!==Ce.numPlanes||Me.numIntersection!==Ce.numIntersection)||Me.vertexAlphas!==Ve||Me.vertexTangents!==We||Me.morphTargets!==be||Me.morphNormals!==$e||Me.morphColors!==xt||Me.toneMapping!==ut||Me.morphTargetsCount!==Lt||!!Me.lightProbeGrid!=b.state.lightProbeGridArray.length>0)&&(Ze=!0):(Ze=!0,Me.__version=q.version);let Kt=Me.currentProgram;Ze===!0&&(Kt=gs(q,N,Y),L&&q.isNodeMaterial&&L.onUpdateProgram(q,Kt,Me));let on=!1,Pn=!1,ni=!1;const st=Kt.getUniforms(),vt=Me.uniforms;if(S.useProgram(Kt.program)&&(on=!0,Pn=!0,ni=!0),q.id!==B&&(B=q.id,Pn=!0),Me.needsLights){const lt=bh(b.state.lightProbeGridArray,Y);Me.lightProbeGrid!==lt&&(Me.lightProbeGrid=lt,Pn=!0)}if(on||W!==T){S.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),st.setValue(k,"projectionMatrix",T.projectionMatrix),st.setValue(k,"viewMatrix",T.matrixWorldInverse);const Dn=st.map.cameraPosition;Dn!==void 0&&Dn.setValue(k,ht.setFromMatrixPosition(T.matrixWorld)),D.logarithmicDepthBuffer&&st.setValue(k,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&st.setValue(k,"isOrthographic",T.isOrthographicCamera===!0),W!==T&&(W=T,Pn=!0,ni=!0)}if(Me.needsLights&&(Ot.state.sunShadowMap.length>0&&st.setValue(k,"sunShadowMap",Ot.state.sunShadowMap,te),Ot.state.directionalShadowMap.length>0&&st.setValue(k,"directionalShadowMap",Ot.state.directionalShadowMap,te),Ot.state.spotShadowMap.length>0&&st.setValue(k,"spotShadowMap",Ot.state.spotShadowMap,te),Ot.state.pointShadowMap.length>0&&st.setValue(k,"pointShadowMap",Ot.state.pointShadowMap,te)),Y.isSkinnedMesh){st.setOptional(k,Y,"bindMatrix"),st.setOptional(k,Y,"bindMatrixInverse");const lt=Y.skeleton;lt&&(lt.boneTexture===null&&lt.computeBoneTexture(),st.setValue(k,"boneTexture",lt.boneTexture,te))}Y.isBatchedMesh&&(st.setOptional(k,Y,"batchingTexture"),st.setValue(k,"batchingTexture",Y._matricesTexture,te),st.setOptional(k,Y,"batchingIdTexture"),st.setValue(k,"batchingIdTexture",Y._indirectTexture,te),st.setOptional(k,Y,"batchingColorTexture"),Y._colorsTexture!==null&&st.setValue(k,"batchingColorTexture",Y._colorsTexture,te));const Ln=J.morphAttributes;if((Ln.position!==void 0||Ln.normal!==void 0||Ln.color!==void 0)&&O.update(Y,J,Kt),(Pn||Me.receiveShadow!==Y.receiveShadow)&&(Me.receiveShadow=Y.receiveShadow,st.setValue(k,"receiveShadow",Y.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&N.environment!==null&&(vt.envMapIntensity.value=N.environmentIntensity),vt.dfgLUT!==void 0&&(vt.dfgLUT.value=s0()),Pn){if(st.setValue(k,"toneMappingExposure",P.toneMappingExposure),Me.needsLights&&Eh(vt,ni),xe&&q.fog===!0&&Ae.refreshFogUniforms(vt,xe),Ae.refreshMaterialUniforms(vt,q,z,Q,b.state.transmissionRenderTarget[T.id]),Me.needsLights&&Me.lightProbeGrid){const lt=Me.lightProbeGrid;vt.probesSH.value=lt.texture,vt.probesMin.value.copy(lt.boundingBox.min),vt.probesMax.value.copy(lt.boundingBox.max),vt.probesResolution.value.copy(lt.resolution)}Ks.upload(k,Ho(Me),vt,te)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Ks.upload(k,Ho(Me),vt,te),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&st.setValue(k,"center",Y.center),st.setValue(k,"modelViewMatrix",Y.modelViewMatrix),st.setValue(k,"normalMatrix",Y.normalMatrix),st.setValue(k,"modelMatrix",Y.matrixWorld),q.uniformsGroups!==void 0){const lt=q.uniformsGroups;for(let Dn=0,ii=lt.length;Dn<ii;Dn++){const Wo=lt[Dn];re.update(Wo,Kt),re.bind(Wo,Kt)}}return Kt}function Eh(T,N){T.ambientLightColor.needsUpdate=N,T.lightProbe.needsUpdate=N,T.sunLights.needsUpdate=N,T.sunLightShadows.needsUpdate=N,T.directionalLights.needsUpdate=N,T.directionalLightShadows.needsUpdate=N,T.pointLights.needsUpdate=N,T.pointLightShadows.needsUpdate=N,T.spotLights.needsUpdate=N,T.spotLightShadows.needsUpdate=N,T.rectAreaLights.needsUpdate=N,T.hemisphereLights.needsUpdate=N}function Th(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return X},this.setRenderTargetTextures=function(T,N,J){const q=Z.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),Z.get(T.texture).__webglTexture=N,Z.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,N){const J=Z.get(T);J.__webglFramebuffer=N,J.__useDefaultFramebuffer=N===void 0},this.setRenderTarget=function(T,N=0,J=0){X=T,V=N,F=J;let q=null,Y=!1,xe=!1;if(T){const ve=Z.get(T);if(ve.__useDefaultFramebuffer!==void 0){S.bindFramebuffer(k.FRAMEBUFFER,ve.__webglFramebuffer),ee.copy(T.viewport),le.copy(T.scissor),ce=T.scissorTest,S.viewport(ee),S.scissor(le),S.setScissorTest(ce),B=-1;return}else if(ve.__webglFramebuffer===void 0)te.setupRenderTarget(T);else if(ve.__hasExternalTextures)te.rebindTextures(T,Z.get(T.texture).__webglTexture,Z.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const Ve=T.depthTexture;if(ve.__boundDepthTexture!==Ve){if(Ve!==null&&Z.has(Ve)&&(T.width!==Ve.image.width||T.height!==Ve.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");te.setupDepthRenderbuffer(T)}}const ye=T.texture;(ye.isData3DTexture||ye.isDataArrayTexture||ye.isCompressedArrayTexture)&&(xe=!0);const Te=Z.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Te[N])?q=Te[N][J]:q=Te[N],Y=!0):T.samples>0&&te.useMultisampledRTT(T)===!1?q=Z.get(T).__webglMultisampledFramebuffer:Array.isArray(Te)?q=Te[J]:q=Te,ee.copy(T.viewport),le.copy(T.scissor),ce=T.scissorTest}else ee.copy(j).multiplyScalar(z).floor(),le.copy(ae).multiplyScalar(z).floor(),ce=Pe;if(J!==0&&(q=I),S.bindFramebuffer(k.FRAMEBUFFER,q)&&S.drawBuffers(T,q),S.viewport(ee),S.scissor(le),S.setScissorTest(ce),Y){const ve=Z.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+N,ve.__webglTexture,J)}else if(xe){const ve=N;for(let ye=0;ye<T.textures.length;ye++){const Te=Z.get(T.textures[ye]);k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0+ye,Te.__webglTexture,J,ve)}}else if(T!==null&&J!==0){const ve=Z.get(T.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,ve.__webglTexture,J)}B=-1};function Go(T){const N=Z.get(T);return(N.__readFormat!==T.format||N.__readType!==T.type)&&(N.__readFormat=T.format,N.__readType=T.type,N.__formatReadable=D.textureFormatReadable(T.format),N.__typeReadable=D.textureTypeReadable(T.type)),N}this.readRenderTargetPixels=function(T,N,J,q,Y,xe,Se,ve=0){if(!(T&&T.isWebGLRenderTarget)){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ye=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(ye=ye[Se]),ye){S.bindFramebuffer(k.FRAMEBUFFER,ye);try{const Te=T.textures[ve],Ve=Te.format,We=Te.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ve);const be=Go(Te);if(be.__formatReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(be.__typeReadable===!1){Je("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}N>=0&&N<=T.width-q&&J>=0&&J<=T.height-Y&&k.readPixels(N,J,q,Y,pe.convert(Ve),pe.convert(We),xe)}finally{const Te=X!==null?Z.get(X).__webglFramebuffer:null;S.bindFramebuffer(k.FRAMEBUFFER,Te)}}},this.readRenderTargetPixelsAsync=async function(T,N,J,q,Y,xe,Se,ve=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ye=Z.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Se!==void 0&&(ye=ye[Se]),ye)if(N>=0&&N<=T.width-q&&J>=0&&J<=T.height-Y){S.bindFramebuffer(k.FRAMEBUFFER,ye);const Te=T.textures[ve],Ve=Te.format,We=Te.type;T.textures.length>1&&k.readBuffer(k.COLOR_ATTACHMENT0+ve);const be=Go(Te);if(be.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(be.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const $e=k.createBuffer();k.bindBuffer(k.PIXEL_PACK_BUFFER,$e),k.bufferData(k.PIXEL_PACK_BUFFER,xe.byteLength,k.STREAM_READ),k.readPixels(N,J,q,Y,pe.convert(Ve),pe.convert(We),0),k.bindBuffer(k.PIXEL_PACK_BUFFER,null);const xt=X!==null?Z.get(X).__webglFramebuffer:null;S.bindFramebuffer(k.FRAMEBUFFER,xt);const ut=k.fenceSync(k.SYNC_GPU_COMMANDS_COMPLETE,0);return k.flush(),await xu(k,ut,4),k.bindBuffer(k.PIXEL_PACK_BUFFER,$e),k.getBufferSubData(k.PIXEL_PACK_BUFFER,0,xe),k.bindBuffer(k.PIXEL_PACK_BUFFER,null),k.deleteBuffer($e),k.deleteSync(ut),xe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,N=null,J=0){const q=Math.pow(2,-J),Y=Math.floor(T.image.width*q),xe=Math.floor(T.image.height*q),Se=N!==null?N.x:0,ve=N!==null?N.y:0;te.setTexture2D(T,0),k.copyTexSubImage2D(k.TEXTURE_2D,J,0,0,Se,ve,Y,xe),S.unbindTexture()},this.copyTextureToTexture=function(T,N,J=null,q=null,Y=0,xe=0){let Se,ve,ye,Te,Ve,We,be,$e,xt;const ut=T.isCompressedTexture?T.mipmaps[xe]:T.image;if(J!==null)Se=J.max.x-J.min.x,ve=J.max.y-J.min.y,ye=J.isBox3?J.max.z-J.min.z:1,Te=J.min.x,Ve=J.min.y,We=J.isBox3?J.min.z:0;else{const vt=Math.pow(2,-Y);Se=Math.floor(ut.width*vt),ve=Math.floor(ut.height*vt),T.isDataArrayTexture?ye=ut.depth:T.isData3DTexture?ye=Math.floor(ut.depth*vt):ye=1,Te=0,Ve=0,We=0}q!==null?(be=q.x,$e=q.y,xt=q.z):(be=0,$e=0,xt=0);const at=pe.convert(N.format),Lt=pe.convert(N.type);let Me;N.isData3DTexture?(te.setTexture3D(N,0),Me=k.TEXTURE_3D):N.isDataArrayTexture||N.isCompressedArrayTexture?(te.setTexture2DArray(N,0),Me=k.TEXTURE_2D_ARRAY):(te.setTexture2D(N,0),Me=k.TEXTURE_2D),S.activeTexture(k.TEXTURE0),S.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,N.flipY),S.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,N.premultiplyAlpha),S.pixelStorei(k.UNPACK_ALIGNMENT,N.unpackAlignment);const Ot=S.getParameter(k.UNPACK_ROW_LENGTH),Ze=S.getParameter(k.UNPACK_IMAGE_HEIGHT),Kt=S.getParameter(k.UNPACK_SKIP_PIXELS),on=S.getParameter(k.UNPACK_SKIP_ROWS),Pn=S.getParameter(k.UNPACK_SKIP_IMAGES);S.pixelStorei(k.UNPACK_ROW_LENGTH,ut.width),S.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ut.height),S.pixelStorei(k.UNPACK_SKIP_PIXELS,Te),S.pixelStorei(k.UNPACK_SKIP_ROWS,Ve),S.pixelStorei(k.UNPACK_SKIP_IMAGES,We);const ni=T.isDataArrayTexture||T.isData3DTexture,st=N.isDataArrayTexture||N.isData3DTexture;if(T.isDepthTexture){const vt=Z.get(T),Ln=Z.get(N),lt=Z.get(vt.__renderTarget),Dn=Z.get(Ln.__renderTarget);S.bindFramebuffer(k.READ_FRAMEBUFFER,lt.__webglFramebuffer),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,Dn.__webglFramebuffer);for(let ii=0;ii<ye;ii++)ni&&(k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(T).__webglTexture,Y,We+ii),k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Z.get(N).__webglTexture,xe,xt+ii)),k.blitFramebuffer(Te,Ve,Se,ve,be,$e,Se,ve,k.DEPTH_BUFFER_BIT,k.NEAREST);S.bindFramebuffer(k.READ_FRAMEBUFFER,null),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else if(Y!==0||T.isRenderTargetTexture||Z.has(T)){const vt=Z.get(T),Ln=Z.get(N);S.bindFramebuffer(k.READ_FRAMEBUFFER,R),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,U);for(let lt=0;lt<ye;lt++)ni?k.framebufferTextureLayer(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,vt.__webglTexture,Y,We+lt):k.framebufferTexture2D(k.READ_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,vt.__webglTexture,Y),st?k.framebufferTextureLayer(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,Ln.__webglTexture,xe,xt+lt):k.framebufferTexture2D(k.DRAW_FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_2D,Ln.__webglTexture,xe),Y!==0?k.blitFramebuffer(Te,Ve,Se,ve,be,$e,Se,ve,k.COLOR_BUFFER_BIT,k.NEAREST):st?k.copyTexSubImage3D(Me,xe,be,$e,xt+lt,Te,Ve,Se,ve):k.copyTexSubImage2D(Me,xe,be,$e,Te,Ve,Se,ve);S.bindFramebuffer(k.READ_FRAMEBUFFER,null),S.bindFramebuffer(k.DRAW_FRAMEBUFFER,null)}else st?T.isDataTexture||T.isData3DTexture?k.texSubImage3D(Me,xe,be,$e,xt,Se,ve,ye,at,Lt,ut.data):N.isCompressedArrayTexture?k.compressedTexSubImage3D(Me,xe,be,$e,xt,Se,ve,ye,at,ut.data):k.texSubImage3D(Me,xe,be,$e,xt,Se,ve,ye,at,Lt,ut):T.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,xe,be,$e,Se,ve,at,Lt,ut.data):T.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,xe,be,$e,ut.width,ut.height,at,ut.data):k.texSubImage2D(k.TEXTURE_2D,xe,be,$e,Se,ve,at,Lt,ut);S.pixelStorei(k.UNPACK_ROW_LENGTH,Ot),S.pixelStorei(k.UNPACK_IMAGE_HEIGHT,Ze),S.pixelStorei(k.UNPACK_SKIP_PIXELS,Kt),S.pixelStorei(k.UNPACK_SKIP_ROWS,on),S.pixelStorei(k.UNPACK_SKIP_IMAGES,Pn),xe===0&&N.generateMipmaps&&k.generateMipmap(Me),S.unbindTexture()},this.initRenderTarget=function(T){Z.get(T).__webglFramebuffer===void 0&&te.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?te.setTextureCube(T,0):T.isData3DTexture?te.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?te.setTexture2DArray(T,0):te.setTexture2D(T,0),S.unbindTexture()},this.resetState=function(){V=0,F=0,X=null,S.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return pn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Xe._getDrawingBufferColorSpace(e),t.unpackColorSpace=Xe._getUnpackColorSpace()}}const a0={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ni{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const o0=new ti(-1,1,1,-1,0,1);class l0 extends Yt{constructor(){super(),this.setAttribute("position",new Gt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Gt([0,2,0,0,2,0],2))}}const c0=new l0;class To{constructor(e){this._mesh=new rt(c0,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,o0)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class h0 extends Ni{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof bt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Ai.clone(e.uniforms),this.material=new bt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new To(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Vl extends Ni{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,a,4294967295),r.buffers.stencil.setClear(o),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class u0 extends Ni{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class f0{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ne);this._width=n.width,this._height=n.height,t=new Mt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yt}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new h0(a0),this.copyPass.material.blending=mn,this.timer=new rf}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const a=this.passes[s];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}Vl!==void 0&&(a instanceof Vl?n=!0:a instanceof u0&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ne);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}const ks={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class d0 extends Ni{constructor(){super(),this.isOutputPass=!0,this.uniforms=Ai.clone(ks.uniforms),this.material=new Gc({name:ks.name,uniforms:this.uniforms,vertexShader:ks.vertexShader,fragmentShader:ks.fragmentShader}),this._fsQuad=new To(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Xe.getTransfer(this._outputColorSpace)===et&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===ro?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===ao?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===oo?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===lo?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ho?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ar?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===co&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class p0 extends Ni{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Le}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=s}}const zs={defines:{SMAA_THRESHOLD:"0.1"},uniforms:{tDiffuse:{value:null},resolution:{value:new Ne(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		void SMAAEdgeDetectionVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0,  1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4(  1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 2 ] = texcoord.xyxy + resolution.xyxy * vec4( -2.0, 0.0, 0.0,  2.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAAEdgeDetectionVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];

		vec4 SMAAColorEdgeDetectionPS( vec2 texcoord, vec4 offset[3], sampler2D colorTex ) {
			vec2 threshold = vec2( SMAA_THRESHOLD, SMAA_THRESHOLD );

			// Calculate color deltas:
			vec4 delta;
			vec3 C = texture2D( colorTex, texcoord ).rgb;

			vec3 Cleft = texture2D( colorTex, offset[0].xy ).rgb;
			vec3 t = abs( C - Cleft );
			delta.x = max( max( t.r, t.g ), t.b );

			vec3 Ctop = texture2D( colorTex, offset[0].zw ).rgb;
			t = abs( C - Ctop );
			delta.y = max( max( t.r, t.g ), t.b );

			// We do the usual threshold:
			vec2 edges = step( threshold, delta.xy );

			// Then discard if there is no edge:
			if ( dot( edges, vec2( 1.0, 1.0 ) ) == 0.0 )
				discard;

			// Calculate right and bottom deltas:
			vec3 Cright = texture2D( colorTex, offset[1].xy ).rgb;
			t = abs( C - Cright );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Cbottom  = texture2D( colorTex, offset[1].zw ).rgb;
			t = abs( C - Cbottom );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the maximum delta in the direct neighborhood:
			float maxDelta = max( max( max( delta.x, delta.y ), delta.z ), delta.w );

			// Calculate left-left and top-top deltas:
			vec3 Cleftleft  = texture2D( colorTex, offset[2].xy ).rgb;
			t = abs( C - Cleftleft );
			delta.z = max( max( t.r, t.g ), t.b );

			vec3 Ctoptop = texture2D( colorTex, offset[2].zw ).rgb;
			t = abs( C - Ctoptop );
			delta.w = max( max( t.r, t.g ), t.b );

			// Calculate the final maximum delta:
			maxDelta = max( max( maxDelta, delta.z ), delta.w );

			// Local contrast adaptation in action:
			edges.xy *= step( 0.5 * maxDelta, delta.xy );

			return vec4( edges, 0.0, 0.0 );
		}

		void main() {

			gl_FragColor = SMAAColorEdgeDetectionPS( vUv, vOffset, tDiffuse );

		}`},Hs={defines:{SMAA_MAX_SEARCH_STEPS:"8",SMAA_AREATEX_MAX_DISTANCE:"16",SMAA_AREATEX_PIXEL_SIZE:"( 1.0 / vec2( 160.0, 560.0 ) )",SMAA_AREATEX_SUBTEX_SIZE:"( 1.0 / 7.0 )"},uniforms:{tDiffuse:{value:null},tArea:{value:null},tSearch:{value:null},resolution:{value:new Ne(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 3 ];
		varying vec2 vPixcoord;

		void SMAABlendingWeightCalculationVS( vec2 texcoord ) {
			vPixcoord = texcoord / resolution;

			// We will use these offsets for the searches later on (see @PSEUDO_GATHER4):
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.25, 0.125, 1.25, 0.125 ); // WebGL port note: Changed sign in Y and W components
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( -0.125, 0.25, -0.125, -1.25 ); // WebGL port note: Changed sign in Y and W components

			// And these for the searches, they indicate the ends of the loops:
			vOffset[ 2 ] = vec4( vOffset[ 0 ].xz, vOffset[ 1 ].yw ) + vec4( -2.0, 2.0, -2.0, 2.0 ) * resolution.xxyy * float( SMAA_MAX_SEARCH_STEPS );

		}

		void main() {

			vUv = uv;

			SMAABlendingWeightCalculationVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		#define SMAASampleLevelZeroOffset( tex, coord, offset ) texture2D( tex, coord + float( offset ) * resolution, 0.0 )

		uniform sampler2D tDiffuse;
		uniform sampler2D tArea;
		uniform sampler2D tSearch;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[3];
		varying vec2 vPixcoord;

		#if __VERSION__ == 100
		vec2 round( vec2 x ) {
			return sign( x ) * floor( abs( x ) + 0.5 );
		}
		#endif

		float SMAASearchLength( sampler2D searchTex, vec2 e, float bias, float scale ) {
			// Not required if searchTex accesses are set to point:
			// float2 SEARCH_TEX_PIXEL_SIZE = 1.0 / float2(66.0, 33.0);
			// e = float2(bias, 0.0) + 0.5 * SEARCH_TEX_PIXEL_SIZE +
			//     e * float2(scale, 1.0) * float2(64.0, 32.0) * SEARCH_TEX_PIXEL_SIZE;
			e.r = bias + e.r * scale;
			return 255.0 * texture2D( searchTex, e, 0.0 ).r;
		}

		float SMAASearchXLeft( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			/**
				* @PSEUDO_GATHER4
				* This texcoord has been offset by (-0.25, -0.125) in the vertex shader to
				* sample between edge, thus fetching four edges in a row.
				* Sampling with different offsets in each direction allows to disambiguate
				* which edges are active from the four fetched ones.
				*/
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x > end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			// We correct the previous (-0.25, -0.125) offset we applied:
			texcoord.x += 0.25 * resolution.x;

			// The searches are bias by 1, so adjust the coords accordingly:
			texcoord.x += resolution.x;

			// Disambiguate the length added by the last step:
			texcoord.x += 2.0 * resolution.x; // Undo last step
			texcoord.x -= resolution.x * SMAASearchLength(searchTex, e, 0.0, 0.5);

			return texcoord.x;
		}

		float SMAASearchXRight( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 0.0, 1.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 2.0, 0.0 ) * resolution;
				if ( ! ( texcoord.x < end && e.g > 0.8281 && e.r == 0.0 ) ) break;
			}

			texcoord.x -= 0.25 * resolution.x;
			texcoord.x -= resolution.x;
			texcoord.x -= 2.0 * resolution.x;
			texcoord.x += resolution.x * SMAASearchLength( searchTex, e, 0.5, 0.5 );

			return texcoord.x;
		}

		float SMAASearchYUp( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord += vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y > end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y -= 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y; // WebGL port note: Changed sign
			texcoord.y -= 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y * SMAASearchLength( searchTex, e.gr, 0.0, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		float SMAASearchYDown( sampler2D edgesTex, sampler2D searchTex, vec2 texcoord, float end ) {
			vec2 e = vec2( 1.0, 0.0 );

			for ( int i = 0; i < SMAA_MAX_SEARCH_STEPS; i ++ ) { // WebGL port note: Changed while to for
				e = texture2D( edgesTex, texcoord, 0.0 ).rg;
				texcoord -= vec2( 0.0, 2.0 ) * resolution; // WebGL port note: Changed sign
				if ( ! ( texcoord.y < end && e.r > 0.8281 && e.g == 0.0 ) ) break;
			}

			texcoord.y += 0.25 * resolution.y; // WebGL port note: Changed sign
			texcoord.y += resolution.y; // WebGL port note: Changed sign
			texcoord.y += 2.0 * resolution.y; // WebGL port note: Changed sign
			texcoord.y -= resolution.y * SMAASearchLength( searchTex, e.gr, 0.5, 0.5 ); // WebGL port note: Changed sign

			return texcoord.y;
		}

		vec2 SMAAArea( sampler2D areaTex, vec2 dist, float e1, float e2, float offset ) {
			// Rounding prevents precision errors of bilinear filtering:
			vec2 texcoord = float( SMAA_AREATEX_MAX_DISTANCE ) * round( 4.0 * vec2( e1, e2 ) ) + dist;

			// We do a scale and bias for mapping to texel space:
			texcoord = SMAA_AREATEX_PIXEL_SIZE * texcoord + ( 0.5 * SMAA_AREATEX_PIXEL_SIZE );

			// Move to proper place, according to the subpixel offset:
			texcoord.y += SMAA_AREATEX_SUBTEX_SIZE * offset;

			return texture2D( areaTex, texcoord, 0.0 ).rg;
		}

		vec4 SMAABlendingWeightCalculationPS( vec2 texcoord, vec2 pixcoord, vec4 offset[ 3 ], sampler2D edgesTex, sampler2D areaTex, sampler2D searchTex, ivec4 subsampleIndices ) {
			vec4 weights = vec4( 0.0, 0.0, 0.0, 0.0 );

			vec2 e = texture2D( edgesTex, texcoord ).rg;

			if ( e.g > 0.0 ) { // Edge at north
				vec2 d;

				// Find the distance to the left:
				vec2 coords;
				coords.x = SMAASearchXLeft( edgesTex, searchTex, offset[ 0 ].xy, offset[ 2 ].x );
				coords.y = offset[ 1 ].y; // offset[1].y = texcoord.y - 0.25 * resolution.y (@CROSSING_OFFSET)
				d.x = coords.x;

				// Now fetch the left crossing edges, two at a time using bilinear
				// filtering. Sampling at -0.25 (see @CROSSING_OFFSET) enables to
				// discern what value each edge has:
				float e1 = texture2D( edgesTex, coords, 0.0 ).r;

				// Find the distance to the right:
				coords.x = SMAASearchXRight( edgesTex, searchTex, offset[ 0 ].zw, offset[ 2 ].y );
				d.y = coords.x;

				// We want the distances to be in pixel units (doing this here allow to
				// better interleave arithmetic and memory accesses):
				d = d / resolution.x - pixcoord.x;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the right crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 1, 0 ) ).r;

				// Ok, we know how this pattern looks like, now it is time for getting
				// the actual area:
				weights.rg = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.y ) );
			}

			if ( e.r > 0.0 ) { // Edge at west
				vec2 d;

				// Find the distance to the top:
				vec2 coords;

				coords.y = SMAASearchYUp( edgesTex, searchTex, offset[ 1 ].xy, offset[ 2 ].z );
				coords.x = offset[ 0 ].x; // offset[1].x = texcoord.x - 0.25 * resolution.x;
				d.x = coords.y;

				// Fetch the top crossing edges:
				float e1 = texture2D( edgesTex, coords, 0.0 ).g;

				// Find the distance to the bottom:
				coords.y = SMAASearchYDown( edgesTex, searchTex, offset[ 1 ].zw, offset[ 2 ].w );
				d.y = coords.y;

				// We want the distances to be in pixel units:
				d = d / resolution.y - pixcoord.y;

				// SMAAArea below needs a sqrt, as the areas texture is compressed
				// quadratically:
				vec2 sqrt_d = sqrt( abs( d ) );

				// Fetch the bottom crossing edges:
				coords.y -= 1.0 * resolution.y; // WebGL port note: Added
				float e2 = SMAASampleLevelZeroOffset( edgesTex, coords, ivec2( 0, 1 ) ).g;

				// Get the area for this direction:
				weights.ba = SMAAArea( areaTex, sqrt_d, e1, e2, float( subsampleIndices.x ) );
			}

			return weights;
		}

		void main() {

			gl_FragColor = SMAABlendingWeightCalculationPS( vUv, vPixcoord, vOffset, tDiffuse, tArea, tSearch, ivec4( 0.0 ) );

		}`},qr={uniforms:{tDiffuse:{value:null},tColor:{value:null},resolution:{value:new Ne(1/1024,1/512)}},vertexShader:`

		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		void SMAANeighborhoodBlendingVS( vec2 texcoord ) {
			vOffset[ 0 ] = texcoord.xyxy + resolution.xyxy * vec4( -1.0, 0.0, 0.0, 1.0 ); // WebGL port note: Changed sign in W component
			vOffset[ 1 ] = texcoord.xyxy + resolution.xyxy * vec4( 1.0, 0.0, 0.0, -1.0 ); // WebGL port note: Changed sign in W component
		}

		void main() {

			vUv = uv;

			SMAANeighborhoodBlendingVS( vUv );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform sampler2D tColor;
		uniform vec2 resolution;

		varying vec2 vUv;
		varying vec4 vOffset[ 2 ];

		vec4 SMAANeighborhoodBlendingPS( vec2 texcoord, vec4 offset[ 2 ], sampler2D colorTex, sampler2D blendTex ) {
			// Fetch the blending weights for current pixel:
			vec4 a;
			a.xz = texture2D( blendTex, texcoord ).xz;
			a.y = texture2D( blendTex, offset[ 1 ].zw ).g;
			a.w = texture2D( blendTex, offset[ 1 ].xy ).a;

			// Is there any blending weight with a value greater than 0.0?
			if ( dot(a, vec4( 1.0, 1.0, 1.0, 1.0 )) < 1e-5 ) {
				return texture2D( colorTex, texcoord, 0.0 );
			} else {
				// Up to 4 lines can be crossing a pixel (one through each edge). We
				// favor blending by choosing the line with the maximum weight for each
				// direction:
				vec2 offset;
				offset.x = a.a > a.b ? a.a : -a.b; // left vs. right
				offset.y = a.g > a.r ? -a.g : a.r; // top vs. bottom // WebGL port note: Changed signs

				// Then we go in the direction that has the maximum weight:
				if ( abs( offset.x ) > abs( offset.y )) { // horizontal vs. vertical
					offset.y = 0.0;
				} else {
					offset.x = 0.0;
				}

				// Fetch the opposite color and lerp by hand:
				vec4 C = texture2D( colorTex, texcoord, 0.0 );
				texcoord += sign( offset ) * resolution;
				vec4 Cop = texture2D( colorTex, texcoord, 0.0 );
				float s = abs( offset.x ) > abs( offset.y ) ? abs( offset.x ) : abs( offset.y );

				// WebGL port note: Added gamma correction
				C.xyz = pow(C.xyz, vec3(2.2));
				Cop.xyz = pow(Cop.xyz, vec3(2.2));
				vec4 mixed = mix(C, Cop, s);
				mixed.xyz = pow(mixed.xyz, vec3(1.0 / 2.2));

				return mixed;
			}
		}

		void main() {

			gl_FragColor = SMAANeighborhoodBlendingPS( vUv, vOffset, tColor, tDiffuse );

		}`};class m0 extends Ni{constructor(){super(),this._edgesRT=new Mt(1,1,{depthBuffer:!1,type:yt}),this._edgesRT.texture.name="SMAAPass.edges",this._weightsRT=new Mt(1,1,{depthBuffer:!1,type:yt}),this._weightsRT.texture.name="SMAAPass.weights";const e=this,t=new Image;t.src=this._getAreaTexture(),t.onload=function(){e._areaTexture.needsUpdate=!0},this._areaTexture=new mt,this._areaTexture.name="SMAAPass.area",this._areaTexture.image=t,this._areaTexture.minFilter=Ye,this._areaTexture.generateMipmaps=!1,this._areaTexture.flipY=!1;const n=new Image;n.src=this._getSearchTexture(),n.onload=function(){e._searchTexture.needsUpdate=!0},this._searchTexture=new mt,this._searchTexture.name="SMAAPass.search",this._searchTexture.image=n,this._searchTexture.magFilter=St,this._searchTexture.minFilter=St,this._searchTexture.generateMipmaps=!1,this._searchTexture.flipY=!1,this._uniformsEdges=Ai.clone(zs.uniforms),this._materialEdges=new bt({defines:Object.assign({},zs.defines),uniforms:this._uniformsEdges,vertexShader:zs.vertexShader,fragmentShader:zs.fragmentShader}),this._uniformsWeights=Ai.clone(Hs.uniforms),this._uniformsWeights.tDiffuse.value=this._edgesRT.texture,this._uniformsWeights.tArea.value=this._areaTexture,this._uniformsWeights.tSearch.value=this._searchTexture,this._materialWeights=new bt({defines:Object.assign({},Hs.defines),uniforms:this._uniformsWeights,vertexShader:Hs.vertexShader,fragmentShader:Hs.fragmentShader}),this._uniformsBlend=Ai.clone(qr.uniforms),this._uniformsBlend.tDiffuse.value=this._weightsRT.texture,this._materialBlend=new bt({uniforms:this._uniformsBlend,vertexShader:qr.vertexShader,fragmentShader:qr.fragmentShader}),this._fsQuad=new To(null)}render(e,t,n){this._uniformsEdges.tDiffuse.value=n.texture,this._fsQuad.material=this._materialEdges,e.setRenderTarget(this._edgesRT),this.clear&&e.clear(),this._fsQuad.render(e),this._fsQuad.material=this._materialWeights,e.setRenderTarget(this._weightsRT),this.clear&&e.clear(),this._fsQuad.render(e),this._uniformsBlend.tColor.value=n.texture,this._fsQuad.material=this._materialBlend,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(),this._fsQuad.render(e))}setSize(e,t){this._edgesRT.setSize(e,t),this._weightsRT.setSize(e,t),this._materialEdges.uniforms.resolution.value.set(1/e,1/t),this._materialWeights.uniforms.resolution.value.set(1/e,1/t),this._materialBlend.uniforms.resolution.value.set(1/e,1/t)}dispose(){this._edgesRT.dispose(),this._weightsRT.dispose(),this._areaTexture.dispose(),this._searchTexture.dispose(),this._materialEdges.dispose(),this._materialWeights.dispose(),this._materialBlend.dispose(),this._fsQuad.dispose()}_getAreaTexture(){return"data:image/png;base64,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"}_getSearchTexture(){return"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEIAAAAhCAAAAABIXyLAAAAAOElEQVRIx2NgGAWjYBSMglEwEICREYRgFBZBqDCSLA2MGPUIVQETE9iNUAqLR5gIeoQKRgwXjwAAGn4AtaFeYLEAAAAASUVORK5CYII="}}const Ao=`
  uniform sampler2D uShadowMap;
  uniform vec4 uShadowBox;
  uniform float uShadowOn;
  uniform float uOccRadius;
  uniform float uOccBias;
  // The grain of the samples below, pinned to the screen's pixels: still
  // while the book moves, shifted from one picture to the next of those
  // averaged once it lies at rest (#1676), where it evens out.
  uniform vec2 uGrain;
  float casterAt(vec2 s, float channel) {
    vec2 uv = (s - uShadowBox.xy) / uShadowBox.zw;
    if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return -1e4;
    vec4 t = texture2D(uShadowMap, uv);
    return (channel > 0.5 ? t.g : t.r) - 10.0;
  }
  // Horizon-based: in each of 8 directions, the highest paper seen from p
  // (as an elevation angle) hides that much of the sky: sin(horizon) of a
  // cosine-weighted slice.
  float bookOcclusion(vec3 p, float channel) {
    if (uShadowOn < 0.5) return 0.0;
    float spin = fract(sin(dot(gl_FragCoord.xy + uGrain, vec2(12.9898, 78.233))) * 43758.5453);
    float occ = 0.0;
    for (int d = 0; d < 8; d++) {
      float a = (float(d) + spin) * 0.785398;
      vec2 dir = vec2(cos(a), sin(a));
      float horizon = 0.0;
      for (int i = 0; i < 4; i++) {
        float t = (float(i) + 0.25 + 0.5 * spin) / 4.0;
        float r = t * t * uOccRadius + 1.0;
        float h = casterAt(p.xy + r * dir, channel) - p.z - uOccBias;
        horizon = max(horizon, h / sqrt(h * h + r * r));
      }
      occ += horizon;
    }
    return occ / 8.0;
  }
  // How far the reflection seen at p runs under paper: its ray marched
  // out through the height map (a lifted leaf hides what it would mirror,
  // and so does the leaf's own roll over the inside of its curl). The
  // march starts a few px out, past the paper round p itself. Its steps
  // are shifted a little from pixel to pixel: at fixed steps the leaf's
  // outline was cut in at each of them, a row of teeth (#483).
  float reflectionOcclusion(vec3 p, vec3 r, float channel) {
    if (uShadowOn < 0.5) return 0.0;
    // Interleaved gradient noise: neighbours take evenly spread shifts.
    float spin = fract(52.9829189 * fract(dot(gl_FragCoord.xy + uGrain, vec2(0.06711056, 0.00583715))));
    float hidden = 0.0;
    for (int i = 0; i < 8; i++) {
      float s = (float(i) + spin) / 8.0;
      float t = 6.0 + s * s * uOccRadius * 2.0;
      vec3 q = p + r * t;
      hidden = max(hidden, smoothstep(0.0, 4.0, casterAt(q.xy, channel) - q.z - uOccBias));
    }
    return hidden;
  }
`,Co=`uniform float uSign;
varying vec3 vBookPos;`,Ro=`vBookPos = (modelMatrix * vec4(transformed, 1.0)).xyz;
vBookPos.x *= uSign;`,Gl=`
  varying float vZ;
  void main() {
    vec4 w = modelMatrix * vec4(position, 1.0);
    vZ = w.z;
    gl_Position = projectionMatrix * viewMatrix * vec4(w.xy, 0.0, 1.0);
  }
`,Wl=`
  uniform float uLeaf;
  varying float vZ;
  void main() {
    gl_FragColor = vec4(vZ + 10.0, uLeaf * (vZ + 10.0), 0.0, 1.0);
  }
`,An={uShadowMap:{value:null},uShadowBox:{value:new it(0,0,1,1)},uShadowOn:{value:0},uOccRadius:{value:60},uOccBias:{value:1},uGrain:{value:new Ne}},nh="float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {",g0=`
  ${nh}
    shadowCoord.xyz /= shadowCoord.w;
    shadowCoord.z += shadowBias;
    // How the receiver's depth in the map runs with the map's uv.
    vec3 sx = dFdx(shadowCoord.xyz);
    vec3 sy = dFdy(shadowCoord.xyz);
    float det = sx.x * sy.y - sx.y * sy.x;
    vec2 slope = abs(det) > 1e-12 ? vec2(sy.y * sx.z - sx.y * sy.z, sx.x * sy.z - sy.x * sx.z) / det : vec2(0.0);
    float shadow = 1.0;
    if (shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0 && shadowCoord.z <= 1.0) {
      float radius = shadowRadius / shadowMapSize.x;
      float phi = interleavedGradientNoise(gl_FragCoord.xy + uGrain) * PI2;
      shadow = 0.0;
      for (int i = 0; i < 5; i++) {
        vec2 o = vogelDiskSample(i, 5, phi) * radius;
        // Held in where the plane runs nearly along the light.
        float dz = clamp(dot(slope, o), -0.05, 0.05);
        shadow += texture(shadowMap, vec3(shadowCoord.xy + o, shadowCoord.z + dz));
      }
      shadow *= 0.2;
    }
    keyShadow = shadow;
    return mix(1.0, shadow, shadowIntensity);
  }
`,v0=(()=>{const i=He.shadowmap_pars_fragment,e=i.indexOf(nh),t=i.indexOf("#elif defined( SHADOWMAP_TYPE_VSM )",e);return`float keyShadow = 1.0;
${e<0||t<0?i:i.slice(0,e)+g0+i.slice(t)}`})();function ih(i="1.0"){return`{
  float keySpec = mix(1.0, keyShadow, 0.85) * (${i});
  reflectedLight.indirectSpecular *= keySpec;
  #ifdef USE_CLEARCOAT
    clearcoatSpecularIndirect *= keySpec;
  #endif
  #ifdef USE_SHEEN
    sheenSpecularIndirect *= keySpec;
  #endif
}`}function Po(i){return i.replace("#include <shadowmap_pars_fragment>",v0)}function Xl(i){const e=new Yt;return e.setAttribute("position",i.attributes.position.clone()),i.attributes.uv&&e.setAttribute("uv",i.attributes.uv.clone()),i.index&&e.setIndex(i.index.clone()),e}function x0(i,e){const t=i.geometry.attributes.position;t.array.set(e.attributes.position.array),t.needsUpdate=!0}function Vs(i,e){const t=e?Gl.replace("varying float vZ;",`varying float vZ;
varying vec2 vCutUv;`).replace("vZ = w.z;",`vZ = w.z;
vCutUv = uv;`):Gl,n=e?Wl.replace("varying float vZ;",`varying float vZ;
${e.pars}`).replace("void main() {",`void main() {
${e.discard}`):Wl;return new bt({vertexShader:t,fragmentShader:n,side:Qt,blending:so,blendEquation:sa,blendEquationAlpha:sa,blendSrc:ra,blendDst:ra,depthTest:!1,depthWrite:!1,uniforms:{uLeaf:{value:i?1:0},...e?.uniforms}})}function Yr(i,e){return i.onBeforeCompile=t=>{Object.assign(t.uniforms,An,{uSign:{value:e}}),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
${Co}`).replace("#include <begin_vertex>",`#include <begin_vertex>
${Ro}`),t.fragmentShader=Po(t.fragmentShader).replace("#include <common>",`#include <common>
varying vec3 vBookPos;
${Ao}`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
{ float occ = 1.0 - bookOcclusion(vBookPos, 0.0); reflectedLight.indirectDiffuse *= occ; reflectedLight.indirectSpecular *= occ; }
`+ih())},i}const Kr=16,_0=4,M0=120;function ql(i,e){let t=1,n=0;for(let s=i;s>0;s=Math.floor(s/e))t/=e,n+=t*(s%e);return n}function S0(i){return[ql(i,2)-.5,ql(i,3)-.5]}const Yl=`
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`,y0=`
  uniform sampler2D tPicture;
  varying vec2 vUv;
  void main() {
    vec4 c = texture2D(tPicture, vUv);
    vec3 s = clamp(c.rgb, 0.0, 1.0);
    vec3 light = mix(s / 12.92, pow((s + 0.055) / 1.055, vec3(2.4)), step(0.04045, s));
    gl_FragColor = vec4(light * c.a, c.a);
  }
`,b0=`
  uniform sampler2D tPicture;
  varying vec2 vUv;
  void main() {
    vec4 c = texture2D(tPicture, vUv);
    vec3 light = c.a > 0.0 ? clamp(c.rgb / c.a, 0.0, 1.0) : vec3(0.0);
    vec3 s = mix(light * 12.92, 1.055 * pow(light, vec3(1.0 / 2.4)) - 0.055, step(0.0031308, light));
    gl_FragColor = vec4(s * c.a, c.a);
  }
`;class w0{renderer;camera;atRest;composer;smaa=new m0;average=null;count=0;quad=new rt(new jt(2,2));quadScene=new ls;quadCamera=new ti(-1,1,1,-1,0,1);add=new bt({vertexShader:Yl,fragmentShader:y0,uniforms:{tPicture:{value:null}},blending:so,blendSrc:bc,blendDst:wc,depthTest:!1,depthWrite:!1});show=new bt({vertexShader:Yl,fragmentShader:b0,uniforms:{tPicture:{value:null}},depthTest:!1,depthWrite:!1});frame=0;drawnAt=0;over=()=>{};disposed=!1;constructor(e,t,n,s){this.renderer=e,this.camera=n,this.atRest=s,this.composer=new f0(e,new Mt(1,1,{type:yt})),this.composer.addPass(new p0(t,n)),this.composer.addPass(new d0),this.composer.addPass(this.smaa),this.quad.frustumCulled=!1,this.quadScene.add(this.quad);const r=e.extensions;(r.has("EXT_color_buffer_float")||r.has("EXT_color_buffer_half_float"))&&(this.average=new Mt(1,1,{type:yt,minFilter:Ye,magFilter:Ye,depthBuffer:!1,generateMipmaps:!1}))}setSize(e,t){this.composer.setPixelRatio(1),this.composer.setSize(e,t),this.average&&(this.average.width!==e||this.average.height!==t)&&this.average.setSize(e,t),this.count=0}render(e){this.composer.render(),e(),this.over=e,this.count=0,this.drawnAt=performance.now(),this.average&&!this.frame&&(this.frame=requestAnimationFrame(this.refine))}cancel(){cancelAnimationFrame(this.frame),this.frame=0,this.count=Kr}refine=e=>{this.frame=0,!(this.disposed||this.count>=Kr||!this.atRest())&&(e-this.drawnAt>=M0&&this.sample(),this.count<Kr&&(this.frame=requestAnimationFrame(this.refine)))};sample(){const{renderer:e,camera:t,composer:n}=this,s=this.average,r=t.view;if(!r)return this.cancel();const a=++this.count,[o,l]=S0(a),{offsetX:c,offsetY:h}=r,u=e.shadowMap.autoUpdate,f=e.autoClear;e.shadowMap.autoUpdate=!1,r.offsetX+=o,r.offsetY+=l,t.updateProjectionMatrix(),An.uGrain.value.set(5.588238*a,5.588238*a),this.smaa.enabled=!1,n.renderToScreen=!1;try{n.render(),e.autoClear=!1,this.add.uniforms.tPicture.value=n.readBuffer.texture,this.add.blendAlpha=1/a,this.quad.material=this.add,e.setRenderTarget(s),e.render(this.quadScene,this.quadCamera)}finally{this.smaa.enabled=!0,n.renderToScreen=!0,e.setRenderTarget(null),e.autoClear=f,e.shadowMap.autoUpdate=u,An.uGrain.value.set(0,0),r.offsetX=c,r.offsetY=h,t.updateProjectionMatrix()}a<_0||(this.show.uniforms.tPicture.value=s.texture,this.quad.material=this.show,e.render(this.quadScene,this.quadCamera),this.over())}dispose(){this.disposed=!0,cancelAnimationFrame(this.frame),this.composer.dispose(),this.average?.dispose(),this.quad.geometry.dispose(),this.add.dispose(),this.show.dispose()}}const hn=96,E0=1.2,T0=1.5,$i=120,wn=72,Kl=24,A0=.11,Zl=1e3,Zs=10,C0=1150,Jl=.5,R0=.14,Mi={hardcover:{gutter:.06,perThickness:.9,spine:1,power:2.4,dipMm:3,boardMm:2.2,squareMm:3,jointMm:7},sewn:{gutter:.07,perThickness:1,spine:.95,power:2.5,dipMm:3.5,boardMm:.35,squareMm:0,jointMm:0},paperback:{gutter:.1,perThickness:1.2,spine:.85,power:3,dipMm:5,boardMm:.35,squareMm:0,jointMm:0},layflat:{gutter:.025,perThickness:.4,spine:1,power:2,dipMm:.2,boardMm:2,squareMm:3,jointMm:4},saddleStitch:{gutter:.05,perThickness:1.4,spine:.9,power:2.2,dipMm:1.5,boardMm:.25,squareMm:0,jointMm:0},folded:{gutter:.075,perThickness:1.6,spine:.8,power:1.9,dipMm:2.5,boardMm:.1,squareMm:0,jointMm:0}},Gi=256;function Qa(i,e){return i.rise>0?i.rise*Math.max(0,1-e/i.run):0}function ja(i,e,t=1){const n=e<i.g?Math.pow(1-Math.pow(1-e/i.g,i.power),1/i.power):1;return t*(i.meet+(i.t-i.meet)*n)}function P0(i,e,t,n,s,{flatLeft:r=!1,flatRight:a=!1,noCase:o=!1}={}){const l=Mi[i],c=o?0:l.boardMm*t,h=Math.min(n,s),u=Math.max(n,s),f=(l.dipMm*t+.35*h)*(i==="layflat"?.1:1),p=Math.max(0,h+(u-h)*l.spine-f),m=u>0?h/u:1,x=u+(p-u)*m,g=Math.min(.8*e,Math.max(0,x-h)),d=(w,E)=>{const M=w===h&&w!==u?g:0,b=x-M,A=Math.min(.3*e,l.gutter*e*.6+1.2*Math.abs(w-b)),v={t:w,meet:E?w:b,g:Math.max(A,.02*e),power:l.power,rise:M,run:Math.sqrt(Math.max(1,e*e-M*M))},y=Gi*4,P=1.2*e/y,C=[0],L=[Qa(v,0)+ja(v,0)],I=[0];for(let X=1;X<=y;X++){const B=X*P,W=Qa(v,B)+ja(v,B);I.push(I[X-1]+Math.hypot(P,W-L[X-1])),C.push(B),L.push(W)}const R=1.1*e/Gi,U=new Float32Array(Gi+1),V=new Float32Array(Gi+1);let F=0;for(let X=0;X<=Gi;X++){const B=X*R;for(;F<y-1&&I[F+1]<B;)F++;const W=Math.min(1,Math.max(0,(B-I[F])/(I[F+1]-I[F]||1)));U[X]=C[F]+(C[F+1]-C[F])*W,V[X]=c+L[F]+(L[F+1]-L[F])*W}return{...v,zb:c,xs:U,zs:V,step:R}};return{left:d(n,r),right:d(s,a),board:c}}function dt(i,e){const t=Math.max(0,e)/i.step,n=Math.min(i.xs.length-2,Math.floor(t)),s=Math.min(1.5,t-n),r=i.xs[n]+(i.xs[n+1]-i.xs[n])*s,a=i.zs[n]+(i.zs[n+1]-i.zs[n])*s,o=(i.zs[n+1]-i.zs[n])/(i.xs[n+1]-i.xs[n]||1e-6);return[r,a,o]}function L0(i,e){const{xs:t,zs:n}=i;let s=0,r=t.length-1;if(e<=t[0])return n[0];if(e>=t[r])return n[r];for(;r-s>1;){const a=s+r>>1;t[a]<=e?s=a:r=a}return n[s]+(n[r]-n[s])*(e-t[s])/(t[r]-t[s]||1)}function D0(i,e,t){const[n]=dt(i,e);return[n,i.zb+Qa(i,n)+ja(i,n,t)]}function I0(i,e,t,n=64){const s=new Float32Array(n+1),r=[];for(let o=0;o<=96;o++){const[l,c]=dt(e,o/96*t);r.push([-l,c])}const a=[];for(let o=0;o<=96;o++){const[l,c]=dt(i,o/96*t);a.push([l,c])}for(let o=0;o<=n;o++){const[l,c,h]=dt(i,o/n*t),u=Math.atan(h);let f=0;for(const[d,w]of r)f=Math.max(f,Math.atan2(w-c,l-d));for(const[d,w]of a)d<l-.001&&(f=Math.max(f,Math.atan2(w-c,l-d)));let p=u;for(const[d,w]of a)d>l+.001&&(p=Math.max(p,Math.atan2(w-c,d-l)));const m=u+Math.PI/2,x=Math.max(u,p),g=Math.min(u+Math.PI,Math.PI-f);s[o]=g>x?Math.max(0,(Math.sin(g-m)-Math.sin(x-m))/2):0}return s}const us=i=>Math.pow(i,1.45),sh=.02;function U0(i,e,t,n,s,r){const o=(d,w)=>{if(w<1)return D0(i,d,w);const[E,_]=dt(i,d);return[E,_+sh]},l=Math.max(2,Math.min(24,s+1)),c=[],h=[],u=[],f=[],p=[],m=[],x=(d,w,E,_,M)=>{const b=c.length/3;for(let A=0;A<=w;A++)for(let v=0;v<=d;v++){const[y,P,C,L,I]=E(v,A);c.push(y,P,C),p.push(I),h.push(..._),u.push(L),f.push(s>0?L/s:A/Math.max(1,w))}for(let A=0;A<w;A++)for(let v=0;v<d;v++){const y=b+A*(d+1)+v,P=y+1,C=y+d+1,L=C+1;M?m.push(y,C,P,P,C,L):m.push(y,P,C,P,L,C)}};if(r&&r.length>1){let d=0;for(let w=0;w+1<r.length;w++){const[E,_]=r[w],[M,b]=r[w+1],A=(M-E)*t,v=-(b-_)*n,y=Math.hypot(A,v);if(y<1e-6)continue;const P=Math.max(1,Math.ceil(Math.abs(M-E)*48)),C=d;x(P,l-1,(L,I)=>{const R=L/P,U=I/(l-1),[V,F]=o((E+(M-E)*R)*t,U);return[e*V,n/2-(_+(b-_)*R)*n,F,U*s,C+R*y]},[e*-v/y,A/y,0],e<0),d+=y}}else for(const d of[1,-1])x(wn,l-1,(w,E)=>{const _=E/(l-1),[M,b]=o(us(w/wn)*t,_);return[e*M,d*n/2,b,_*s,M]},[0,d,0],d>0!=e>0);r&&r.length>1||x(1,l-1,(d,w)=>{const E=w/(l-1),[_,M]=o(t,E);return[e*_,(d?-1:1)*(n/2),M,E*s,t+(d?n:0)]},[e,0,0],e<0);const g=new Yt;return g.setAttribute("position",new Rt(new Float32Array(c),3)),g.setAttribute("normal",new Rt(new Float32Array(h),3)),g.setAttribute("layer",new Rt(new Float32Array(u),1)),g.setAttribute("lambda",new Rt(new Float32Array(f),1)),g.setAttribute("run",new Rt(new Float32Array(p),1)),g.setIndex(m),g}function At(i,e,t,n,s,r=[0,0,0]){const a=new rt(new jt(i,e),new ps({color:new Le(t).multiplyScalar(n),side:2}));return a.position.set(...s),a.lookAt(...r),a}function Wi(i,e=1,t=[20,20,12]){const n=new vn(...t),s=new rt(n,new ps({color:new Le(i).multiplyScalar(e),side:zt}));return s.position.z=t[2]/2-2,s}function Ql(i,e,t,n=.5){const s=new rt(new wo(n,24,12),new ps({color:new Le(i).multiplyScalar(e)}));return s.position.set(...t),s}function Xi(...i){const e=new ls;return e.add(...i),e}function N0(i){switch(i){case"studio":return{scene:Xi(Wi("#6d6d6d"),At(6,4,"#ffffff",7,[-4,3,7]),At(4,6,"#ffffff",2.2,[7,-1,4]),At(10,2,"#ffffff",1.5,[0,8,6]),At(8,1.4,"#ffffff",3,[0,4.6,9.6])),key:new G(-.4,.3,.86).normalize(),keyColor:new Le("#ffffff"),keyIntensity:.5,softness:.55,exposure:1.15};case"daylight":return{scene:Xi(Wi("#9a948c"),At(1,9,"#dfe9ff",14,[-9.5,1,4.5],[0,1,4.5]),At(1,4,"#f2f6ff",22,[-9.4,1,8],[0,1,8]),At(8,4,"#ffe6c4",1.8,[-3,0,-1.9],[-3,0,5]),At(10,8,"#fff8f0",1.6,[9.5,0,4],[0,0,4]),At(7,3,"#fbfcff",2.2,[-1.5,4.2,9.6])),key:new G(-.75,.15,.64).normalize(),keyColor:new Le("#fff4e6"),keyIntensity:1,softness:.35,exposure:1.2};case"lamp":return{scene:Xi(Wi("#2a2420",1.6),Ql("#ffdcb4",60,[-2.2,1.8,3.4],.45),At(3,3,"#ffd2a4",.8,[-2.2,1.8,4.2],[-2.2,1.8,0]),At(6,5,"#ffcf9e",1.6,[-1.6,1.2,-1.9],[-1.6,1.2,5])),key:new G(-.5,.42,.76).normalize(),keyColor:new Le("#ffe2c0"),keyIntensity:1.8,softness:.55,shadowIntensity:.45,exposure:1.15};case"overcast":return{scene:Xi(Wi("#8c8e92"),At(18,18,"#f4f6fa",.8,[0,0,9.9],[0,0,0]),At(18,8,"#e6eaf0",1.7,[0,9.9,4.5],[0,0,4.5]),At(18,8,"#e6eaf0",1.4,[0,-9.9,4.5],[0,0,4.5]),At(18,8,"#e6eaf0",1.6,[-9.9,0,4.5],[0,0,4.5]),At(18,8,"#e6eaf0",1.5,[9.9,0,4.5],[0,0,4.5])),key:new G(-.4,.45,.8).normalize(),keyColor:new Le("#f3f6ff"),keyIntensity:.25,softness:1,exposure:1.14};case"night":return{scene:Xi(Wi("#14161c",.6),Ql("#ffd8ac",45,[1.8,2.4,3],.4),At(1,6,"#4b5f8c",1.6,[-9.5,0,4],[0,0,4])),key:new G(.45,.55,.7).normalize(),keyColor:new Le("#ffdcb2"),keyIntensity:1.6,softness:.15,exposure:1.25}}}const F0={uncoated:.031,bookWove:.035,coatedMatte:.028,coatedSilk:.028,coatedGloss:.028,bible:.041,newsprint:.047,cardStock:.03,board:.03},O0={newsprint:1.7},B0=112.5,jl=230,k0=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function qi(i,e){const t=i.grammage*i.bulk,n=Math.pow(t/B0,2/3),s=e&&e>jl?jl/e:1,r=1-Math.exp(-F0[i.type]*i.grammage),a=i.finish;return{paper:i,caliperMm:t/1e3,roll:Math.min(6,Math.max(.45,n))*s,rigidity:k0(1.3,4,n),opacity:r,showThrough:i.showThrough?Math.min(.4,(1-r)*1.25*(O0[i.type]??1)):0,transmission:i.showThrough?Math.min(.5,(1-r)*2):0,follow:.35/(1+.35*Math.max(0,Math.log(n))),spring:.0085*Math.min(1.6,Math.max(.75,Math.sqrt(n)))*Math.sqrt(s),roughness:a==="gloss"?.32:a==="silk"?.5:a==="matte"?.7:.88,clearcoat:a==="gloss"?1:a==="silk"?.45:a==="matte"?.12:0,clearcoatRoughness:a==="gloss"?.06:a==="silk"?.28:.6,sheen:a==="uncoated"?.35:0}}function z0(i,e){return e?Ah(i?.paper,e):Zn(i).paper}const H0=new Map,V0=new Map,G0=i=>{let e=i.length;for(;e>0&&i.charCodeAt(e-1)===47;)e--;return i.slice(0,e)};function rh(i,e,t){let n=i.get(e);return n||(n=t().catch(()=>null),i.set(e,n),n.then(s=>{s===null&&i.get(e)===n&&i.delete(e)})),n}function W0(i){return typeof i=="object"&&i!==null&&typeof i.kinds=="object"&&i.kinds!==null}function X0(i){return rh(H0,i,async()=>{const e=await fetch(`${i}/manifest.json`);if(!e.ok)return null;const t=await e.json();return W0(t)?t:null})}function q0(i,e,t){return new Promise((n,s)=>{i.load(e,r=>{r.colorSpace=t?pt:fn,r.wrapS=r.wrapT=is,r.generateMipmaps=!0,r.minFilter=qt,r.magFilter=Ye,r.needsUpdate=!0,n(r)},void 0,s)})}function Y0(i){return!!i&&typeof i.files=="object"&&i.files!==null&&typeof i.files.color=="string"&&typeof i.files.normal=="string"&&typeof i.files.roughness=="string"&&typeof i.tileMm=="number"&&i.tileMm>0}function K0(i,e){const t=G0(e);return rh(V0,`${t}
${i}`,async()=>{const s=(await X0(t))?.kinds[i];if(!Y0(s))return null;const r=new Xc,{files:a}=s,o=[a.color,a.normal,a.roughness,...typeof a.ao=="string"?[a.ao]:[]],c=(await Promise.allSettled(o.map((x,g)=>q0(r,`${t}/${x}`,g===0)))).flatMap(x=>x.status==="fulfilled"?[x.value]:[]);if(c.length!==o.length){for(const x of c)x.dispose();return null}const[h,u,f,p]=c,m={color:h,normal:u,roughness:f,tileMm:s.tileMm};return p&&(m.ao=p),typeof s.tint=="string"&&(m.tint=s.tint),m})}const En=8,ir=2048,Yn=2;function Z0(i,e=ir){if(!i.length)return{width:0,height:0,rects:[]};const t=i.map((c,h)=>h).sort((c,h)=>i[h].height-i[c].height),n=i.reduce((c,h)=>c+Math.max(1,h.width)*Math.max(1,h.height),0),s=Math.max(...i.map(c=>c.width+Yn)),r=Math.max(...i.map(c=>c.height+Yn));let a=Math.min(1,Math.sqrt(.8*e*e/n),e/s,e/r);for(let c=0;c<60;c++){const h=new Array(i.length);let u=0,f=0,p=0,m=0;for(const g of t){const d=Math.max(2,Math.floor(i[g].width*a)),w=Math.max(2,Math.floor(i[g].height*a));u>0&&u+d>e&&(f+=p+Yn,u=0,p=0),h[g]={x:u,y:f,width:d,height:w},u+=d+Yn,p=Math.max(p,w),m=Math.max(m,u-Yn)}const x=f+p;if(x<=e&&m<=e)return{width:m,height:x,rects:h};a*=.9}const o=Math.floor(e/Math.ceil(Math.sqrt(i.length))),l=Math.floor(e/o);return{width:e,height:e,rects:i.map((c,h)=>({x:h%l*o,y:Math.floor(h/l)*o,width:o-Yn,height:o-Yn}))}}class J0{onFrame;max;canvas=null;ctx=null;texture=null;slots=[];refused=new WeakSet;probe=null;disposed=!1;constructor(e,t=ir){this.onFrame=e,this.max=t}get size(){return{width:this.canvas?.width??1,height:this.canvas?.height??1}}rectOf(e){const t=this.slots.find(r=>r.element===e);if(!t?.drawn||!this.canvas)return null;const{width:n,height:s}=this.canvas;return{x:t.rect.x/n,y:t.rect.y/s,width:t.rect.width/n,height:t.rect.height/s}}set(e){const t=e.filter(r=>!this.refused.has(r.element)).slice(0,En);for(const r of this.slots)this.unwatch(r);if(!t.length){this.slots=[],this.free();return}const n=Z0(t,this.max);this.slots=t.map((r,a)=>({...r,rect:n.rects[a],drawn:!1,callback:0,last:-1})),this.canvas||(this.canvas=document.createElement("canvas"),this.ctx=this.canvas.getContext("2d"));const s=this.canvas;if(s.width!==n.width||s.height!==n.height?(s.width=n.width,s.height=n.height,this.texture?.dispose(),this.texture=null):this.ctx?.clearRect(0,0,s.width,s.height),!this.texture){const r=new Vu(s);r.colorSpace=pt,r.minFilter=Ye,r.magFilter=Ye,r.generateMipmaps=!1,this.texture=r}for(const r of this.slots)this.draw(r),this.slots.includes(r)&&this.watch(r);this.texture.needsUpdate=!0}draw(e){const t=e.element,n=this.ctx;if(!n||t.readyState<2||!t.videoWidth||!t.videoHeight)return!1;if(!e.drawn&&!this.readable(t))return this.refused.add(t),this.unwatch(e),this.slots=this.slots.filter(f=>f!==e),!1;const s=e.crop??{x:0,y:0,width:1,height:1},r=t.videoWidth,a=t.videoHeight,{x:o,y:l,width:c,height:h}=e.rect;try{n.drawImage(t,s.x*r,s.y*a,Math.max(1,s.width*r),Math.max(1,s.height*a),o,l,c,h)}catch{return!1}const u=!e.drawn;return e.drawn=!0,e.last=t.currentTime,this.texture&&(this.texture.needsUpdate=!0),u&&this.onFrame(!0),!0}readable(e){try{if(!this.probe){const t=document.createElement("canvas");t.width=t.height=1,this.probe=t.getContext("2d",{willReadFrequently:!0})}return this.probe&&(this.probe.drawImage(e,0,0,1,1),this.probe.getImageData(0,0,1,1)),!0}catch{return this.probe=null,!1}}watch(e){const t=e.element,n=$l(t),s=()=>{this.disposed||!this.slots.includes(e)||((n||t.currentTime!==e.last||!e.drawn)&&this.draw(e)&&this.onFrame(!1),!this.slots.includes(e))||(e.callback=n?t.requestVideoFrameCallback(s):requestAnimationFrame(s))};e.callback=n?t.requestVideoFrameCallback(s):requestAnimationFrame(s)}unwatch(e){e.callback&&($l(e.element)?e.element.cancelVideoFrameCallback(e.callback):cancelAnimationFrame(e.callback),e.callback=0)}free(){this.texture?.dispose(),this.texture=null,this.canvas&&(this.canvas.width=this.canvas.height=0),this.canvas=null,this.ctx=null}dispose(){for(const e of this.slots)this.unwatch(e);this.slots=[],this.free(),this.disposed=!0}}const $l=i=>typeof i.requestVideoFrameCallback=="function";function sr(i){let e=i>>>0;return()=>{e=e+1831565813>>>0;let t=e;return t=Math.imul(t^t>>>15,t|1),t^=t+Math.imul(t^t>>>7,t|61),((t^t>>>14)>>>0)/4294967296}}function ah(i,e){const t=sr(e),n=new Float32Array(i*i).map(()=>t());return(s,r)=>{const a=Math.floor(s),o=Math.floor(r),l=s-a,c=r-o,h=l*l*(3-2*l),u=c*c*(3-2*c),f=w=>(w%i+i)%i,p=(w,E)=>n[f(E)*i+f(w)],m=p(a,o),x=p(a+1,o),g=p(a,o+1),d=p(a+1,o+1);return m+(x-m)*h+(g-m)*u+(m-x-g+d)*h*u}}function Nt(i,e,t,n=.5){const s=Array.from({length:e},(a,o)=>({n:ah(i<<o,t+o*101),p:i<<o,a:n**o})),r=s.reduce((a,o)=>a+o.a,0);return(a,o)=>{let l=0;for(const c of s)l+=c.a*c.n(a*c.p,o*c.p);return l/r}}function Jt(i,e){const t=new Float32Array(i*i);for(let n=0;n<i;n++)for(let s=0;s<i;s++)t[n*i+s]=e(s/i,n/i);return{size:i,h:t}}function Js(i,e,t,n,s,r=0){const a=sr(s),{size:o,h:l}=i;for(let c=0;c<e;c++){const h=a()*o,u=a()*o,f=(a()-.5)*Math.PI*(1-r),p=(t[0]+a()*(t[1]-t[0]))*o,m=n*(.4+.6*a()),x=Math.ceil(p),g=(a()-.5)*.6;for(let d=0;d<x;d++){const w=d/x,E=f+g*w,_=Math.round(h+Math.cos(E)*d),M=Math.round(u+Math.sin(E)*d),b=Math.sin(Math.PI*w),A=(M%o+o)%o*o+(_%o+o)%o;l[A]+=m*b}}}function oh(i,e){const{size:t,h:n}=i,s=new Uint8Array(t*t*4),r=(a,o)=>n[(o+t)%t*t+(a+t)%t];for(let a=0;a<t;a++)for(let o=0;o<t;o++){const l=(r(o+1,a)-r(o-1,a))*e,c=(r(o,a-1)-r(o,a+1))*e,h=Math.hypot(l,c,1),u=(a*t+o)*4;s[u]=Math.round((.5-.5*l/h)*255),s[u+1]=Math.round((.5-.5*c/h)*255),s[u+2]=Math.round((.5+.5/h)*255),s[u+3]=255}return s}function Qs(i,e,t){const n=new cs(i,e,e,kt,Ct);return n.wrapS=n.wrapT=is,n.magFilter=Ye,n.minFilter=qt,n.generateMipmaps=!0,n.colorSpace=t?pt:fn,n.needsUpdate=!0,n}function lh(i){let e=1/0,t=-1/0;for(const s of i.h)e=Math.min(e,s),t=Math.max(t,s);const n=t-e||1;for(let s=0;s<i.h.length;s++)i.h[s]=(i.h[s]-e)/n;return i}function Q0(i){let t,n,s;switch(i){case"smooth":{n=12;const r=Nt(8,5,11);t=Jt(512,(a,o)=>r(a,o)),s=.6;break}case"vellum":{n=10;const r=Nt(32,4,23,.6);t=Jt(512,(a,o)=>r(a,o)),s=3.2;break}case"wove":{n=16;const r=Nt(16,5,37,.55);t=Jt(512,(a,o)=>.6*r(a,o)),Js(t,2600,[.02,.09],.22,41,.35),s=3.4;break}case"laid":{n=25;const r=Nt(16,5,53,.55);t=Jt(512,(a,o)=>{const l=Math.pow(.5+.5*Math.cos(2*Math.PI*25*o),3),c=Math.exp(-Math.pow(((a+.5)%1-.5)/.006,2));return .55*l+.5*c+.35*r(a,o)}),Js(t,1200,[.01,.05],.12,59,.3),s=3;break}case"linen":{n=6;const r=Nt(8,4,67,.5),a=16;t=Jt(512,(o,l)=>{const c=Math.sin(2*Math.PI*a*o),h=Math.sin(2*Math.PI*a*l);return(Math.sin(Math.PI*a*o)*Math.sin(Math.PI*a*l)>0?Math.abs(c)*.6+Math.abs(h)*.4:Math.abs(h)*.6+Math.abs(c)*.4)+.4*r(o,l)}),s=2.6;break}case"felt":{n=30;const r=Nt(4,3,71),a=Nt(8,5,73,.6);t=Jt(512,(o,l)=>{const c=r(o,l);return a(o+.15*c,l-.15*c)}),Js(t,900,[.01,.04],.06,79),s=7;break}}return lh(t),{normal:Qs(oh(t,s),512,!1),tileMm:n}}const j0=new Set(["oak","walnut","linen","felt","leather","marble","plain"]);function ec(i){return i==="none"?"none":typeof i=="string"&&j0.has(i)?i:"oak"}const Bn=i=>[1,3,5].map(e=>parseInt(i.slice(e,e+2),16)),tc=(i,e,t)=>i.map((n,s)=>n+(e[s]-n)*t);function $0(i){const t=new Uint8Array(1048576),n=new Uint8Array(512*512*4);let s,r=300,a=2,o=1;const l=(c,h,u)=>{t[c*4]=Math.round(Math.min(255,Math.max(0,h[0]))),t[c*4+1]=Math.round(Math.min(255,Math.max(0,h[1]))),t[c*4+2]=Math.round(Math.min(255,Math.max(0,h[2]))),t[c*4+3]=255;const f=Math.round(Math.min(1,Math.max(0,u))*255);n[c*4]=n[c*4+1]=n[c*4+2]=f,n[c*4+3]=255};switch(i){case"oak":case"walnut":{r=480;const c=4,h=Bn(i==="oak"?"#9a6b42":"#3e2617"),u=Bn(i==="oak"?"#cfa476":"#6f4b33"),f=Nt(2,4,i==="oak"?3:5,.5),p=Nt(4,5,7,.55),m=ah(64,9);s=Jt(512,()=>0);for(let x=0;x<512;x++){const g=x/512,d=Math.floor(g*c),w=g*c-d,E=.92+.16*sr(d*7+1)();for(let _=0;_<512;_++){const M=_/512,b=f((M+d*.31)%1,(w*.25+d*.25)%1),A=.5+.5*Math.sin(2*Math.PI*(9*w+2.2*b+d*.37)),v=Math.pow(A,6),y=p(M,g),P=Math.max(0,m(M*32%64,g*256%64)-.8)*5,C=Math.min(w,1-w)*c<.004?1:0,L=.5+.35*(y-.5)*2-.45*v,I=tc(h,u,Math.min(1,Math.max(0,L))).map(R=>R*E*(1-.45*C-.1*P));l(x*512+_,I,.42+.2*P+.08*v),s.h[x*512+_]=-.3*v-.25*P-3*C+.1*y}}a=1.2;break}case"linen":{r=12;const c=Bn("#d9d0bf"),h=Nt(8,4,13),u=Nt(4,3,17),f=24;s=Jt(512,()=>0);for(let p=0;p<512;p++)for(let m=0;m<512;m++){const x=m/512,g=p/512,d=Math.abs(Math.sin(2*Math.PI*f*(x+.01*u(x,g)))),w=Math.abs(Math.sin(2*Math.PI*f*(g+.01*u(g,x)))),_=Math.sin(Math.PI*f*x)*Math.sin(Math.PI*f*g)>0?.7*d+.3*w:.7*w+.3*d,M=.85+.15*_+.08*(h(x,g)-.5);l(p*512+m,c.map(b=>b*M),.92),s.h[p*512+m]=_+.3*h(x,g)}a=3.5;break}case"felt":{r=40;const c=Bn("#3e5a49"),h=Nt(8,6,19,.6);s=Jt(512,(u,f)=>h(u,f)),Js(s,6e3,[.004,.02],.15,23);for(let u=0;u<512*512;u++)l(u,c.map(f=>f*(.85+.3*(s.h[u]-.5))),1);a=4;break}case"leather":{r=60;const c=Bn("#6a3a28"),h=28,u=sr(29),f=Array.from({length:h*h},()=>[u(),u()]),p=Nt(8,4,31);s=Jt(512,(m,x)=>{const g=Math.floor(m*h),d=Math.floor(x*h);let w=9,E=9;for(let _=-1;_<=1;_++)for(let M=-1;M<=1;M++){const b=(g+M+h)%h,A=(d+_+h)%h,v=f[A*h+b],y=(g+M+v[0])/h-m,P=(d+_+v[1])/h-x,C=Math.hypot(y,P)*h;C<w?[w,E]=[C,w]:C<E&&(E=C)}return Math.min(1,(E-w)*1.6)+.25*p(m,x)});for(let m=0;m<512*512;m++)l(m,c.map(x=>x*(.75+.35*s.h[m])),.45+.25*(1-s.h[m]));a=3;break}case"marble":{r=500;const c=Bn("#ece9e3"),h=Bn("#8d8a86"),u=Nt(3,6,37,.55),f=Nt(16,3,41);s=Jt(512,()=>0);for(let p=0;p<512;p++)for(let m=0;m<512;m++){const x=m/512,g=p/512,d=Math.abs(Math.sin(2*Math.PI*(2*x+g+4*u(x,g)))),w=Math.pow(1-d,10),E=tc(c,h,.8*w).map(_=>_*(.97+.06*(f(x,g)-.5)));l(p*512+m,E,.12+.05*w),s.h[p*512+m]=-.05*w}a=1,o=1;break}case"plain":{r=200;const c=Bn("#cbc6be"),h=Nt(8,5,43);s=Jt(512,(u,f)=>h(u,f));for(let u=0;u<512*512;u++)l(u,c.map(f=>f*(.98+.04*s.h[u])),.8);a=.6;break}}return{color:Qs(t,512,!0),normal:Qs(oh(lh(s),a),512,!1),roughness:Qs(n,512,!1),tileMm:r,roughnessScale:o}}const nc=new Map,ic=new Map;function sc(i){let e=nc.get(i);return e||nc.set(i,e=Q0(i)),e}function Zr(i){let e=ic.get(i);return e||ic.set(i,e=$0(i)),e}const Jr=.58,rc=2048,ev=`
uniform vec2 uCenter;
varying vec2 vPos;
void main() {
  vec4 world = modelMatrix * vec4(position, 1.0);
  vPos = world.xy - uCenter;
  gl_Position = projectionMatrix * viewMatrix * world;
}
`,tv=`
uniform sampler2D uScene;
uniform float uGlass;
uniform float uRim;
uniform float uShadow;
uniform vec2 uShadowOffset;
uniform float uA;
varying vec2 vPos;

vec4 over(vec4 src, vec4 dst) { return src + dst * (1.0 - src.a); }

void main() {
  float d = length(vPos);
  float R = uGlass;
  float outer = R + uRim;
  vec2 dir = d > 0.0 ? vPos / d : vec2(0.0);
  vec2 light = normalize(vec2(-0.55, 0.65));
  float lit = dot(dir, light);

  // The rim's shadow on the page (premultiplied, as everything here).
  float sd = length(vPos - uShadowOffset);
  vec4 color = vec4(0.0, 0.0, 0.0, 0.42 * (1.0 - smoothstep(outer - 0.6 * uShadow, outer + uShadow, sd)));
  // A thin dark edge round the rim, where it meets the page.
  color = over(vec4(0.0, 0.0, 0.0, 0.35 * (1.0 - smoothstep(outer, outer + 2.0, d))), color);

  // The rim: black plastic, a rounded section a little flatter on top.
  if (d < outer + 1.0) {
    float t = clamp((d - R) / uRim, 0.0, 1.0);
    float c = 2.0 * t - 1.0;
    vec3 n = normalize(vec3(dir * c * 1.15, sqrt(max(0.0, 1.0 - c * c)) + 0.2));
    vec3 V = vec3(0.0, 0.0, 1.0);
    vec3 L = normalize(vec3(light * 0.75, 0.66));
    vec3 L2 = normalize(vec3(-light * 0.7, 0.7));
    float diff = max(dot(n, L), 0.0);
    float nh = max(dot(n, normalize(L + V)), 0.0);
    float nh2 = max(dot(n, normalize(L2 + V)), 0.0);
    vec3 plastic = vec3(0.008) + vec3(0.02) * diff + vec3(0.9) * pow(nh, 90.0) + vec3(0.06) * pow(nh, 10.0) + vec3(0.1) * pow(nh2, 50.0);
    // The groove the glass sits in.
    plastic *= mix(0.25, 1.0, smoothstep(0.0, 0.14, t));
    float a = 1.0 - smoothstep(outer - 1.0, outer + 0.5, d);
    color = over(vec4(plastic * a, a), color);
  }

  // The glass.
  if (d < R + 1.0) {
    float r = clamp(d / R, 0.0, 1.0);
    float s = r * (uA + (1.0 - uA) * r * r);
    float ca = 0.012 * r * r * r;
    vec2 at = dir * 0.5;
    vec4 g = texture2D(uScene, 0.5 + at * s);
    g.r = texture2D(uScene, 0.5 + at * s * (1.0 + ca)).r;
    g.b = texture2D(uScene, 0.5 + at * s * (1.0 - ca)).b;
    // Darker towards the edge, where the light bends away, and in the
    // rim's shadow on the side away from the light.
    g.rgb *= mix(1.0, 0.7, smoothstep(0.8, 1.0, r));
    g.rgb *= 1.0 - 0.3 * smoothstep(0.9, 1.0, r) * (0.5 - 0.5 * lit);
    // What the glass mirrors: a soft window and an arc on its lit edge.
    vec2 q = (vPos / R - vec2(-0.36, 0.42)) * vec2(2.3, 3.4);
    float spot = 0.07 * exp(-dot(q, q));
    float arc = 0.4 * smoothstep(0.85, 0.96, r) * (1.0 - smoothstep(0.96, 1.0, r)) * max(0.0, lit);
    vec4 glass = vec4(g.rgb + vec3(spot + arc), clamp(g.a + spot + arc, 0.0, 1.0));
    float a = 1.0 - smoothstep(R - 1.0, R + 0.5, d);
    color = mix(color, glass, a);
  }

  if (color.a <= 0.0) discard;
  gl_FragColor = vec4(color.rgb / color.a, color.a);
  #include <tonemapping_fragment>
  #include <colorspace_fragment>
  gl_FragColor.rgb *= gl_FragColor.a;
}
`;class Lo{target=null;camera=new Vt;overlay=new ls;overlayCamera=new ti(0,1,1,0,-1,1);mesh;constructor(){const e=new bt({vertexShader:ev,fragmentShader:tv,uniforms:{uScene:{value:null},uCenter:{value:new Ne},uGlass:{value:1},uRim:{value:1},uShadow:{value:1},uShadowOffset:{value:new Ne},uA:{value:Jr}},transparent:!0,premultipliedAlpha:!0,blending:wi,depthTest:!1,depthWrite:!1,toneMapped:!0});this.mesh=new rt(new jt(1,1),e),this.mesh.frustumCulled=!1,this.overlay.add(this.mesh)}static field(e){return e.radius/(Jr*Math.max(1,e.zoom))}capture(e,t,n,s,r,a){const o=Math.min(rc,e.capabilities.maxRenderbufferSize??rc),l=Math.max(16,Math.min(o,Math.ceil(2*s.radius/Jr)));let c=this.target;c?c.width!==l&&c.setSize(l,l):(c=new Mt(l,l,{type:yt,minFilter:Ye,magFilter:Ye,generateMipmaps:!1}),this.target=c);const h=Lo.field(s),u=this.camera;u.copy(n);const f=n.view,p=f?{w:f.fullWidth,h:f.fullHeight,x:f.offsetX,y:f.offsetY}:{w:1,h:1,x:0,y:0};u.setViewOffset(p.w,p.h,p.x+s.x-h,p.y+s.y-h,2*h,2*h),u.updateProjectionMatrix(),u.updateMatrixWorld();const m=e.shadowMap.autoUpdate;e.shadowMap.autoUpdate=!1,r();try{e.setRenderTarget(c),e.clear(),e.render(t,u)}finally{e.setRenderTarget(null),e.shadowMap.autoUpdate=m,a()}}draw(e,t,n,s){if(!this.target)return;const r=this.overlayCamera;(r.right!==t||r.top!==n)&&(r.right=t,r.top=n,r.updateProjectionMatrix());const a=this.mesh.material.uniforms,o=Math.max(6,s.rim*1.6),l=new Ne(s.rim*.35,-s.rim*.55),c=s.radius+s.rim+o+l.length()+2,h=s.x,u=n-s.y;this.mesh.position.set(h,u,0),this.mesh.scale.set(2*c,2*c,1),this.mesh.updateMatrixWorld(),a.uScene.value=this.target.texture,a.uCenter.value.set(h,u),a.uGlass.value=s.radius,a.uRim.value=s.rim,a.uShadow.value=o,a.uShadowOffset.value.copy(l);const f=e.autoClear;e.autoClear=!1,e.setRenderTarget(null),e.render(this.overlay,r),e.autoClear=f}dispose(){this.target?.dispose(),this.target=null,this.mesh.geometry.dispose(),this.mesh.material.dispose()}}function nv(i){if(i.cuts){const t=new Uint8Array(i.data.byteLength*2);t.set(i.data,0),t.set(i.cuts,i.data.byteLength);const n=new cs(t,i.width,i.height*2,kt,Ct);return n.minFilter=Ye,n.magFilter=Ye,n.generateMipmaps=!1,n.needsUpdate=!0,n.userData.cuts=!0,n}const e=new cs(new Uint8Array(i.data.buffer,i.data.byteOffset,i.data.byteLength),i.width,i.height,kt,Ct);return e.colorSpace=pt,e.minFilter=Ye,e.magFilter=Ye,e.generateMipmaps=!1,e.needsUpdate=!0,e}const iv=0,$a=1,ch=2,sv=i=>({uCutMode:{value:i},uHasFrontCut:{value:0},uHasBackCut:{value:0},uFrontThrough:{value:null},uBackThrough:{value:null},uHasFrontCuts:{value:0},uHasBackCuts:{value:0},uHasFrontThrough:{value:0},uHasBackThrough:{value:0},uThroughLayers:{value:0},uLeafDepth:{value:1},uFrontEnd:{value:0},uBackEnd:{value:0},uSeeDesk:{value:0}}),rv=`
  uniform float uCutMode;
  uniform float uHasFrontCut;
  uniform float uHasBackCut;
  uniform sampler2D uFrontThrough;
  uniform sampler2D uBackThrough;
  uniform float uHasFrontCuts;
  uniform float uHasBackCuts;
  uniform float uHasFrontThrough;
  uniform float uHasBackThrough;
  uniform float uThroughLayers;
  uniform float uLeafDepth;
  uniform float uFrontEnd;
  uniform float uBackEnd;
  uniform float uSeeDesk;
  // The direct light a hole's wall keeps from a point deep in it, and the
  // sky its depth leaves it.
  float throughLit = 1.0;
  float throughAo = 1.0;
  vec4 throughAt(bool front, ivec2 t) {
    return front ? texelFetch(uFrontThrough, t, 0) : texelFetch(uBackThrough, t, 0);
  }
  // The depth code at a point of the face (y down), 0 off the holes.
  float throughDepth(bool front, vec2 p, vec2 size) {
    ivec2 t = ivec2(clamp(p, vec2(0.0), vec2(0.999999)) * size);
    return floor(throughAt(front, t).a * 255.0 + 0.5);
  }
  // Whether the k-th layer beneath (k ≥ 1) has a hole at a point of the
  // face, from its own cut; without the cuts, from the straight-down
  // picture (right while every hole lies within the one above it).
  bool layerCut(bool front, vec2 p, vec2 size, float k) {
    if ((front ? uHasFrontCuts : uHasBackCuts) < 0.5) return throughDepth(front, p, size) > k + 0.5;
    ivec2 t = ivec2(clamp(p, vec2(0.0), vec2(0.999999)) * size) + ivec2(0, int(size.y));
    vec4 c = throughAt(front, t);
    int b = int(k) - 1;
    if (b < 0 || b > 31) return false;
    int bits = int(floor((b < 8 ? c.r : b < 16 ? c.g : b < 24 ? c.b : c.a) * 255.0 + 0.5));
    return ((bits >> (b - (b / 8) * 8)) & 1) == 1;
  }
  vec3 throughColour(bool front, vec2 p) {
    if ((front ? uHasFrontCuts : uHasBackCuts) < 0.5) return front ? texture2D(uFrontThrough, p).rgb : texture2D(uBackThrough, p).rgb;
    // The picture is the texture's top half, raw: kept off the cuts'
    // rows by half a texel, and decoded from sRGB here.
    float h = float(front ? textureSize(uFrontThrough, 0).y : textureSize(uBackThrough, 0).y);
    vec2 q = vec2(p.x, min(p.y * 0.5, 0.5 - 0.5 / h));
    vec3 c = front ? texture2D(uFrontThrough, q).rgb : texture2D(uBackThrough, q).rgb;
    return mix(c / 12.92, pow((c + 0.055) / 1.055, vec3(2.4)), step(vec3(0.04045), c));
  }
`,av=`
  if (uCutMode > 0.5 && (front ? uHasFrontCut : uHasBackCut) > 0.5 && cutA < 0.999) {
    if (uCutMode > 1.5) {
      if (cutA < 0.5) discard;
    } else {
      vec2 p0 = vec2(tuv.x, 1.0 - tuv.y);
      bool hasThrough = (front ? uHasFrontThrough : uHasBackThrough) > 0.5;
      vec2 size = hasThrough ? vec2(front ? textureSize(uFrontThrough, 0) : textureSize(uBackThrough, 0)) : vec2(1.0);
      // A texture with the cuts below its picture is twice its height.
      if ((front ? uHasFrontCuts : uHasBackCuts) > 0.5) size.y *= 0.5;
      float d0 = hasThrough ? throughDepth(front, p0, size) : 0.0;
      // The picture is coarser than the page: at the hole's rim it may
      // still say paper where the page's alpha says hole.
      if (hasThrough && d0 < 0.5) {
        for (int i = 0; i < 4; i++) {
          vec2 o = vec2(i == 0 ? 1.0 : i == 1 ? -1.0 : 0.0, i == 2 ? 1.0 : i == 3 ? -1.0 : 0.0) / size;
          d0 = max(d0, throughDepth(front, p0 + o, size));
        }
      }
      // Off the holes (past the leaf's outline): nothing of this page.
      if (d0 < 0.5 && cutA < 0.5) discard;
      vec3 hole = uPaper;
      if (hasThrough && d0 > 0.5) {
        // The face's frame on screen: the gradients of its uv, so a step
        // on the page in view space is a step in the picture.
        vec3 pos = -vViewPosition;
        vec3 dp1 = dFdx(pos);
        vec3 dp2 = dFdy(pos);
        vec3 n = normalize(cross(dp1, dp2));
        vec3 eye = normalize(vViewPosition);
        if (dot(n, eye) < 0.0) n = -n;
        vec2 duv1 = dFdx(p0);
        vec2 duv2 = dFdy(p0);
        vec3 dp2perp = cross(dp2, n);
        vec3 dp1perp = cross(n, dp1);
        float det = dot(dp2perp, dp1);
        vec3 gu = (dp2perp * duv1.x + dp1perp * duv2.x) / det;
        vec3 gv = (dp2perp * duv1.y + dp1perp * duv2.y) / det;
        // A leaf down along the view ray, and a leaf up towards the key.
        float h = uLeafDepth;
        vec3 down = -eye * (h / max(dot(eye, n), 0.05)) + n * h;
        vec2 stepDown = vec2(dot(down, gu), dot(down, gv));
        vec2 stepUp = vec2(0.0);
        #if NUM_DIR_LIGHTS > 0
        vec3 l = directionalLights[0].direction;
        vec3 up = l * (h / max(dot(l, n), 0.05)) - n * h;
        stepUp = vec2(dot(up, gu), dot(up, gv));
        #endif
        float k = 1.0;
        float wall = 0.0;
        vec2 hit = p0;
        for (int i = 1; i <= 33; i++) {
          k = float(i);
          if (k > uThroughLayers) break;
          hit = p0 + stepDown * k;
          // Down through the leaf above this layer: paper there is a
          // wall (the page itself, then each layer at its own depth, so a
          // hole that widens beneath an overhang shows its own step).
          bool clear = k < 1.5 ? throughDepth(front, hit, size) > 0.5 : layerCut(front, hit, size, k - 1.0);
          if (!clear) { wall = 1.0; break; }
          if (!layerCut(front, hit, size, k)) break;
        }
        // Out past the book's last page with nothing there but the desk:
        // the page lets the eye through, to the real desk under the book.
        float endK = front ? uFrontEnd : uBackEnd;
        if (uSeeDesk > 0.5 && endK > 0.5 && wall < 0.5 && k > endK - 0.5) discard;
        // The key's ray from there back up: paper on its way is a wall's
        // shadow.
        float lit = 1.0;
        float top = wall > 0.5 ? k - 0.5 : k;
        for (int j = 1; j <= 33; j++) {
          float z = top - float(j);
          if (z < 0.0) break;
          if (throughDepth(front, hit + stepUp * float(j), size) <= z) { lit = 0.0; break; }
        }
        throughLit = wall > 0.5 ? 0.45 * lit : lit;
        // Deeper is darker: less of the sky reaches down a narrow shaft.
        throughAo = mix(0.35, 1.0, exp(-0.12 * (k - 1.0))) * (wall > 0.5 ? 0.7 : 1.0);
        // A layer reached under an overhang is not in the picture seen
        // straight down: its paper, in the shade the overhang gives it.
        bool seen = throughDepth(front, hit, size) > k - 0.5;
        hole = wall > 0.5 ? uPaper * 0.8 : seen ? throughColour(front, hit) : uPaper * 0.7;
      }
      ink = mix(hole, ink, cutA);
    }
  }
`;function ov(i=Do()){const e=new Wc({depthPacking:au});return e.userData.cut=i,e.onBeforeCompile=t=>{Object.assign(t.uniforms,i),t.vertexShader=t.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vCutUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCutUv = uv;`),t.fragmentShader=t.fragmentShader.replace("#include <common>",`#include <common>
${Io}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
${Uo}`)},e}const Do=()=>({uCut:{value:null},uCutBack:{value:0},uMirror:{value:0},uHasCut:{value:0}}),Io=`
  uniform sampler2D uCut;
  uniform float uCutBack;
  uniform float uMirror;
  uniform float uHasCut;
  varying vec2 vCutUv;
`,Uo=`
  if (uHasCut > 0.5) {
    float u = uMirror > 0.5 ? 1.0 - vCutUv.x : vCutUv.x;
    vec2 st = uCutBack > 0.5 ? vec2(1.0 - u, vCutUv.y) : vec2(u, vCutUv.y);
    // Kept a hair inside the sheet: a board's edges stand on its rim.
    if (texture2D(uCut, clamp(st, 0.002, 0.998)).a < 0.5) discard;
  }
`;function lv(i){const e=new vn(1,1,1),t=e.groups.slice(0,4).reduce((s,r)=>s+r.count,0);e.setIndex(Array.from(e.index.array.slice(0,t))),e.clearGroups();const n=new hs({roughness:.8});return n.onBeforeCompile=s=>{Object.assign(s.uniforms,i),s.vertexShader=s.vertexShader.replace("#include <common>",`#include <common>
varying vec2 vCutUv;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vCutUv = position.xy + 0.5;`),s.fragmentShader=s.fragmentShader.replace("#include <common>",`#include <common>
${Io}`).replace("#include <clipping_planes_fragment>",`#include <clipping_planes_fragment>
${Uo}`)},{geometry:e,material:n}}const cv={pars:Io,discard:Uo},hh=i=>i.userData.leafCut??=Do();function hv(i,e,t,n,s=!1){const r=i.material.userData.uniforms,a=i.userData.Front,o=i.userData.Back,l=e.cutOf(a),c=e.cutOf(o);r.uHasFrontCut.value=l?1:0,r.uHasBackCut.value=c?1:0,r.uLeafDepth.value=t;const h=r.uCutMode.value===$a,u=h&&l?e.throughOf(a):null,f=h&&c?e.throughOf(o):null;r.uFrontThrough.value=u?.texture??null,r.uHasFrontThrough.value=u?1:0,r.uBackThrough.value=f?.texture??null,r.uHasBackThrough.value=f?1:0,r.uHasFrontCuts.value=u?.texture.userData.cuts?1:0,r.uHasBackCuts.value=f?.texture.userData.cuts?1:0,r.uThroughLayers.value=Math.max(u?.layers??0,f?.layers??0),r.uFrontEnd.value=u?.end?u.layers:0,r.uBackEnd.value=f?.end?f.layers:0,r.uSeeDesk.value=s?1:0;const p=r.uCutMode.value===ch,m=l&&r.uFront.value?r.uFront.value:c&&r.uBack.value?r.uBack.value:null,x=hh(i);x.uCut.value=m,x.uHasCut.value=m?1:0,x.uCutBack.value=m&&m!==r.uFront.value?1:0,x.uMirror.value=r.uMirror.value;const g=h&&s&&!!(u?.end||f?.end),d=i.userData.caster;if(!m||!(p||g)){i.customDepthMaterial=void 0,d&&(d.material=n.shared);return}if(i.customDepthMaterial=i.userData.cutDepth??=ov(x),!d)return;const w=i.userData.cutCaster??=n.cut(),E=w.uniforms;E.uCut.value=m,E.uCutBack.value=x.uCutBack.value,E.uMirror.value=x.uMirror.value,E.uHasCut.value=1,d.material=w}const ac=()=>({...cv,uniforms:{...Do()}});function uv(i){const e=i.data;for(let t=1;t<e.length;t+=4)if(e[t]>0)return!0;return!1}function fv(i){const e=new cs(new Uint8Array(i.data.buffer,i.data.byteOffset,i.data.byteLength),i.width,i.height,kt,Ct);return e.minFilter=qt,e.magFilter=Ye,e.generateMipmaps=!0,e.needsUpdate=!0,{texture:e,coat:uv(i)}}class dv{bySrc=new Map;textures=new Map;throughs=new Map;set(e){let t=e.size!==this.bySrc.size;for(const[s,r]of e){const a=this.bySrc.get(s);(a?.mask!==r.mask||a?.through!==r.through||!!a?.cut!=!!r.cut)&&(t=!0)}this.bySrc=new Map(e);const n=new Set;for(const s of e.values())s.mask&&n.add(s.mask),s.through&&n.add(s.through);for(const[s,r]of this.textures)n.has(s)||(r.texture.dispose(),this.textures.delete(s));for(const[s,r]of this.throughs)n.has(s)||(r.dispose(),this.throughs.delete(s));return t}maskOf(e){const t=e?this.bySrc.get(e)?.mask:void 0;if(!t)return null;let n=this.textures.get(t);return n||this.textures.set(t,n=fv(t)),n}cutOf(e){return!!e&&!!this.bySrc.get(e)?.cut}throughOf(e){const t=e?this.bySrc.get(e)?.through:void 0;if(!t)return null;let n=this.throughs.get(t);return n||this.throughs.set(t,n=nv(t)),{texture:n,layers:t.layers,...t.end?{end:!0}:{}}}get size(){return this.textures.size+this.throughs.size}dispose(){for(const e of this.textures.values())e.texture.dispose();for(const e of this.throughs.values())e.dispose();this.textures.clear(),this.throughs.clear(),this.bySrc.clear()}}const pv=()=>({uFrontMask:{value:null},uBackMask:{value:null},uHasFrontMask:{value:0},uHasBackMask:{value:0}}),mv=.001;function gv(i,e,t,n){const s=i.userData.uniforms;s.uFrontMask.value=e?.texture??null,s.uHasFrontMask.value=e?1:0,s.uBackMask.value=t?.texture??null,s.uHasBackMask.value=t?1:0;const r=(e?.coat||t?.coat)&&n<=0?mv:n;i.clearcoat!==r&&(i.clearcoat=r)}const vv=`
  uniform sampler2D uFrontMask;
  uniform sampler2D uBackMask;
  uniform float uHasFrontMask;
  uniform float uHasBackMask;
  // R metal, G sheen, B fluorescence, A opaque white; zero off the inks.
  vec4 finishMask = vec4(0.0);
  // The ink's own colour (linear), not darkened by the paper's shade.
  vec3 finishInk = vec3(0.0);
  // G holds a sheen times how much of the texel the ink covers: the sheen
  // is the largest G round the point, the cover what this one has of it
  // (the edge of a gloss varnish is gloss over part of a texel, not satin).
  float finishSheen = 0.0;
  float finishCover = 0.0;
  vec4 finishAt(bool front, vec2 uv) {
    return front ? texture2D(uFrontMask, uv) : texture2D(uBackMask, uv);
  }
`,xv=`
  if ((front ? uHasFrontMask : uHasBackMask) > 0.5) {
    vec2 muv = front ? uvF : uvB;
    muv.y = 1.0 - muv.y;
    finishMask = finishAt(front, muv);
    finishInk = ink;
    if (finishMask.g > 0.0) {
      // A texel and a half of the mask, or of the mipmap level a page
      // seen small reads.
      vec2 t = max(1.5 / vec2(front ? textureSize(uFrontMask, 0) : textureSize(uBackMask, 0)), 1.5 * fwidth(muv));
      float near = max(
        max(finishAt(front, muv + vec2(t.x, 0.0)).g, finishAt(front, muv - vec2(t.x, 0.0)).g),
        max(finishAt(front, muv + vec2(0.0, t.y)).g, finishAt(front, muv - vec2(0.0, t.y)).g));
      finishSheen = max(finishMask.g, near);
      finishCover = finishMask.g / finishSheen;
    }
  }
`,_v=`
  if (finishMask.a > 0.0 || finishMask.r > 0.0) {
    float top = max(max(finishInk.r, finishInk.g), max(finishInk.b, 1e-3));
    vec3 metal = mix(finishInk, finishInk * min(0.95 / top, 2.0), 0.8);
    metal = mix(metal, vec3(max(max(metal.r, metal.g), metal.b)), 0.25);
    diffuseColor.rgb = mix(diffuseColor.rgb, finishInk, finishMask.a);
    diffuseColor.rgb = mix(diffuseColor.rgb, metal, finishMask.r);
  }
`,Mv=`
  if (finishMask.g > 0.0 || finishMask.r > 0.0) {
    float metalRough = mix(0.5, 0.17, smoothstep(0.2, 1.0, finishSheen));
    float varnish = mix(0.95, 0.12, smoothstep(0.3, 1.0, finishSheen));
    roughnessFactor = mix(roughnessFactor, varnish, finishCover * (1.0 - finishMask.r));
    roughnessFactor = mix(roughnessFactor, metalRough, finishMask.r);
  }
`,Sv=`
  metalnessFactor = mix(metalnessFactor, mix(0.75, 1.0, smoothstep(0.75, 0.95, finishSheen)), finishMask.r);
`,yv=`
  if (finishMask.r > 0.0) normal = normalize(mix(normal, nonPerturbedNormal, 0.85 * finishMask.r));
`,bv=`
  totalEmissiveRadiance += finishMask.b * finishInk * 0.45;
`,wv=`
  #ifdef USE_CLEARCOAT
  if (finishMask.g > 0.0) {
    float s = smoothstep(0.3, 1.0, finishSheen);
    float w = finishCover * (1.0 - finishMask.r);
    material.clearcoat = mix(material.clearcoat, s, w);
    material.clearcoatRoughness = mix(material.clearcoatRoughness, min(1.0, max(mix(0.6, 0.03, s), 0.0525) + geometryRoughness), w);
    float wet = 1.0 - s * w;
    material.specularColor *= wet;
    material.specularF90 *= wet;
  }
  #endif
`,Ci={uBehind:{value:null},uBehindDepth:{value:null},uBehindOn:{value:0},uBehindSize:{value:new Ne(1,1)},uBehindClip:{value:new Ne(1,2)},uBehindScale:{value:1},uBehindFloor:{value:1}};function Qr(i,e,t=iv){const n=new qa({side:Qt,roughness:.85}),s={uFront:{value:null},uBack:{value:null},uHasFront:{value:0},uHasBack:{value:0},uMirror:{value:i?1:0},uShowThrough:{value:0},uUnder:{value:null},uHasUnder:{value:0},uUnderK:{value:0},uTransmit:{value:0},uPaper:{value:new Le(1,1,1)},uLeafOcc:{value:.45},uOccBias:{value:6},uVideo:{value:null},uVidTexel:{value:new Ne(1,1)},uVidCount:{value:0},uVidOA:{value:Array.from({length:En},()=>new it)},uVidDF:{value:Array.from({length:En},()=>new it)},uVidRect:{value:Array.from({length:En},()=>new it)},uReflection:{value:null},uReflectionOn:{value:0},uReflectionSize:{value:new Ne(1,1)},uReflectionNormal:{value:new G(0,0,1)},...pv(),...sv(t)};return n.userData.uniforms=s,n.onBeforeCompile=r=>{Object.assign(r.uniforms,An,Ci,s,{uSign:{value:e}}),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
        attribute float ao;
        attribute float leafFace;
        varying float vAo;
        varying vec2 vPageUv;
        varying float vLeafFace;
        ${Co}`).replace("#include <begin_vertex>",`#include <begin_vertex>
        vAo = ao;
        vPageUv = uv;
        vLeafFace = leafFace;
        ${Ro}`),r.fragmentShader=Po(r.fragmentShader).replace("#include <common>",`#include <common>
        uniform sampler2D uFront;
        uniform sampler2D uBack;
        uniform float uHasFront;
        uniform float uHasBack;
        uniform float uMirror;
        uniform float uShowThrough;
        uniform sampler2D uUnder;
        uniform float uHasUnder;
        uniform float uUnderK;
        uniform float uTransmit;
        uniform sampler2D uBehind;
        uniform sampler2D uBehindDepth;
        uniform float uBehindOn;
        uniform vec2 uBehindSize;
        uniform vec2 uBehindClip;
        uniform float uBehindScale;
        uniform float uBehindFloor;
        // The print of both faces at this point: what light coming
        // through the sheet passes on its way.
        vec3 transInk = vec3(1.0);
        uniform vec3 uPaper;
        uniform float uLeafOcc;
        uniform float uSign;
        uniform sampler2D uVideo;
        uniform vec2 uVidTexel;
        uniform float uVidCount;
        uniform vec4 uVidOA[${En}];
        uniform vec4 uVidDF[${En}];
        uniform vec4 uVidRect[${En}];
        uniform sampler2D uReflection;
        uniform float uReflectionOn;
        uniform vec2 uReflectionSize;
        uniform vec3 uReflectionNormal;
        varying float vAo;
        varying vec2 vPageUv;
        varying float vLeafFace;
        varying vec3 vBookPos;
        ${vv}
        ${rv}
        ${Ao}`).replace("#include <map_fragment>",`{
          // 0 no page, 1 its image, 2 blank paper; uv.x runs from the spine.
          bool front = gl_FrontFacing;
          float has = front ? uHasFront : uHasBack;
          float u = uMirror > 0.5 ? 1.0 - vPageUv.x : vPageUv.x;
          vec2 uvF = vec2(u, vPageUv.y);
          vec2 uvB = vec2(1.0 - u, vPageUv.y);
          vec3 ink = uPaper;
          // A cut face's painting is transparent in its holes and past its
          // outline: its alpha is the cut (#1569).
          float cutA = 1.0;
          if (has > 0.5 && has < 1.5) {
            vec4 page = front ? texture2D(uFront, uvF) : texture2D(uBack, uvB);
            ink = page.rgb;
            if ((front ? uHasFrontCut : uHasBackCut) > 0.5) {
              cutA = page.a;
              if (cutA > 0.0 && cutA < 1.0) ink = min(ink / cutA, vec3(1.0));
            }
          }
          // The videos playing on this face, printed over their posters:
          // the point of the page (from its top left corner) in each
          // picture's own frame, which may lie turned on the page, then in
          // its slot of the atlas (kept half a texel inside it, clear of
          // the next slot).
          vec2 tuv = front ? uvF : uvB;
          for (int i = 0; i < ${En}; i++) {
            if (float(i) >= uVidCount) break;
            vec4 oa = uVidOA[i];
            vec4 df = uVidDF[i];
            if ((df.z < 1.5) != front) continue;
            vec2 p = vec2(tuv.x, 1.0 - tuv.y) - oa.xy;
            vec2 st = vec2(dot(p, oa.zw) / dot(oa.zw, oa.zw), dot(p, df.xy) / dot(df.xy, df.xy));
            if (st.x >= 0.0 && st.x <= 1.0 && st.y >= 0.0 && st.y <= 1.0) {
              vec4 r = uVidRect[i];
              vec2 v = clamp(r.xy + st * r.zw, r.xy + 0.5 * uVidTexel, r.xy + r.zw - 0.5 * uVidTexel);
              ink = texture2D(uVideo, vec2(v.x, 1.0 - v.y)).rgb;
            }
          }
          ${av}
          ${xv}
          // A board's face seen from inside the board, through a hole in
          // the other face (#1586): the board's core, unprinted. A board
          // draws each face from its own mesh, leafFace the side that
          // looks out (+1 the front, −1 the back; 0 a sheet, both).
          if (vLeafFace * (gl_FrontFacing ? 1.0 : -1.0) < -0.5) {
            ink = uPaper * 0.8;
            cutA = 1.0;
            finishMask = vec4(0.0);
            finishSheen = 0.0;
            finishCover = 0.0;
          }
          // The other side's print, seen through the sheet (the same point
          // of paper, so mirrored as it should be).
          float other = front ? uHasBack : uHasFront;
          vec3 through = vec3(1.0);
          if ((uShowThrough > 0.0 || uTransmit > 0.0) && other > 0.5 && other < 1.5 && cutA > 0.999) {
            through = front ? texture2D(uBack, uvB).rgb : texture2D(uFront, uvF).rgb;
          }
          transInk = ink * through;
          if (uShowThrough > 0.0) ink *= mix(vec3(1.0), through, uShowThrough);
          // The page lying under an open page: its print comes through the
          // whole sheet (the fibres spread it by a fraction of a millimetre,
          // finer than the page's own texels: a softer sample would blur
          // a page seen small to grey).
          if (uHasUnder > 0.5 && uUnderK > 0.0 && cutA > 0.999) {
            vec3 under = texture2D(uUnder, front ? uvF : uvB).rgb;
            ink *= mix(vec3(1.0), under, uUnderK);
          }
          diffuseColor.rgb *= ink;
          ${_v}
        }`).replace("#include <roughnessmap_fragment>",`#include <roughnessmap_fragment>
${Mv}`).replace("#include <metalnessmap_fragment>",`#include <metalnessmap_fragment>
${Sv}`).replace("#include <normal_fragment_maps>",`#include <normal_fragment_maps>
${yv}`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
${bv}`).replace("#include <lights_physical_fragment>",`#include <lights_physical_fragment>
${wv}`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
        {
          // A leaf's own roll counts among the leaves it is occluded by:
          // held to what its open side would let in.
          float occ = vAo * (1.0 - uLeafOcc * bookOcclusion(vBookPos, 1.0));
          reflectedLight.indirectDiffuse *= occ * throughAo;
          reflectedLight.indirectSpecular *= mix(1.0, occ, 0.85) * throughAo;
          reflectedLight.directDiffuse *= throughLit;
          reflectedLight.directSpecular *= throughLit;
        }
        // The reflection's ray, in book coordinates.
        vec3 reflected = (vec4(reflect(-geometryViewDir, normal), 0.0) * viewMatrix).xyz;
        reflected.x *= uSign;
        // A mirrored leaf stands for what it hides itself.
        ${ih("1.0 - 0.85 * (uReflectionOn > 0.5 ? 0.0 : reflectionOcclusion(vBookPos, reflected, 1.0))")}
        #ifdef USE_CLEARCOAT
        if (uReflectionOn > 0.5) {
          // The leaves in the air, mirrored in a gloss page: where one is
          // seen, it takes the place of the environment it hides, through
          // the coating's Fresnel and the paper's own. A plane holds only
          // where the page lies in it: the mirror fades up the gutter.
          vec2 st = gl_FragCoord.xy / uReflectionSize;
          vec4 seen = texture2D(uReflection, vec2(1.0 - st.x, st.y));
          float lies = smoothstep(0.97, 0.995, abs(dot((vec4(normalize(vNormal), 0.0) * viewMatrix).xyz, uReflectionNormal)));
          float a = seen.a * lies;
          vec3 leaf = seen.rgb * lies;
          clearcoatSpecularIndirect = clearcoatSpecularIndirect * (1.0 - a)
            + leaf * EnvironmentBRDF(geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness);
          reflectedLight.indirectSpecular = reflectedLight.indirectSpecular * (1.0 - a)
            + leaf * EnvironmentBRDF(geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness);
        }
        #endif
        if (uBehindOn > 0.5 && uTransmit > 0.0) {
          // Thin paper in the air lets through the light behind it (#484):
          // what lies there on screen, seen through the print of both
          // faces. The sheet scatters what it lets through about evenly
          // (near Lambertian), so a thing a gap behind it is spread over
          // about twice that gap: sharp where the leaf touches the page
          // under it, a soft glow a few millimetres off. A page close
          // under it is lit only through the leaf, so its print comes
          // back at about half the leaf's transmittance (1 − opacity, as
          // the open page shows the one under it); what lies further, out
          // of the leaf's shade, at the whole of it. Stronger and sharper,
          // the page under a leaf about to land read as lying over it
          // (#492). What it lets through it does not reflect.
          vec2 st = gl_FragCoord.xy / uBehindSize;
          float depth = texture2D(uBehindDepth, st).x;
          float zBehind = uBehindClip.x * uBehindClip.y / (uBehindClip.y - depth * (uBehindClip.y - uBehindClip.x));
          float gap = max(0.0, zBehind - vViewPosition.z);
          float spread = (uBehindFloor + 2.0 * gap) * uBehindScale / vViewPosition.z;
          vec4 seen = textureLod(uBehind, st, log2(max(1.0, 2.0 * spread)));
          float carried = uTransmit * mix(0.5, 1.0, smoothstep(0.0, 8.0 * uBehindFloor, gap));
          float lost = carried * seen.a;
          reflectedLight.directDiffuse *= 1.0 - lost;
          reflectedLight.indirectDiffuse = reflectedLight.indirectDiffuse * (1.0 - lost) + carried * seen.rgb * transInk;
        }`)},n}const eo={uEdgeK:{value:1},uEdgeRelief:{value:1}},Ev=`
  uniform float uEdgeK;
  uniform float uEdgeRelief;
  varying float vRun;
  float eHash(float n) { return fract(sin(n * 127.1) * 43758.5453); }
  float eHash2(vec2 p) { return fract(sin(dot(p, vec2(127.1, 311.7))) * 43758.5453); }
  float eNoise(vec2 p) {
    vec2 i = floor(p);
    vec2 f = fract(p);
    vec2 u = f * f * (3.0 - 2.0 * f);
    return mix(mix(eHash2(i), eHash2(i + vec2(1.0, 0.0)), u.x), mix(eHash2(i + vec2(0.0, 1.0)), eHash2(i + vec2(1.0, 1.0)), u.x), u.y);
  }
  // fade: x = the leaves, y = the bundles, z = the fine knife marks.
  float edgeHeight(vec2 lv, vec3 fade) {
    float id = floor(lv.x);
    float ridge = sin(fract(lv.x) * PI);
    float proud = eHash(id) - 0.5 + 0.8 * (eNoise(vec2(id * 0.37, lv.y * 0.12)) - 0.5);
    float leaf = (0.45 * ridge + proud) * 0.04 * fade.x;
    float bundle = (eNoise(vec2(lv.x / 5.0, lv.y * 0.03)) - 0.5) * 0.12 * fade.y
      + (eNoise(vec2(lv.x / 24.0 + 7.0, lv.y * 0.02)) - 0.5) * 0.18;
    float knife = (eNoise(vec2(lv.y * 0.7, lv.x / 90.0)) - 0.5) * 0.035
      + (eNoise(vec2(lv.y * 3.0, lv.x / 40.0)) - 0.5) * 0.006 * fade.z;
    return leaf + bundle + knife;
  }
  vec3 edgeNormal(vec3 surfPos, vec3 n, vec2 dH, float faceDir) {
    vec3 sx = dFdx(surfPos);
    vec3 sy = dFdy(surfPos);
    vec3 r1 = cross(sy, n);
    vec3 r2 = cross(n, sx);
    float det = dot(sx, r1) * faceDir;
    vec3 grad = sign(det) * (dH.x * r1 + dH.y * r2);
    return normalize(abs(det) * n - grad);
  }
`;function oc(i,e,t){const n=new hs({side:Qt,roughness:.92});t&&n.color.copy(t);const s={uBoardLo:{value:e?.lo??-1},uBoardHi:{value:e?.hi??2},uBoardColor:{value:e?.color??new Le(0,0,0)}};return n.onBeforeCompile=r=>{Object.assign(r.uniforms,An,eo,s,{uSign:{value:i}}),r.vertexShader=r.vertexShader.replace("#include <common>",`#include <common>
attribute float layer;
attribute float lambda;
attribute float run;
varying float vLayer;
varying float vLambda;
varying float vRun;
${Co}`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLayer = layer;
vLambda = lambda;
vRun = run;
${Ro}`),r.fragmentShader=Po(r.fragmentShader).replace("#include <common>",`#include <common>
uniform float uBoardLo;
uniform float uBoardHi;
uniform vec3 uBoardColor;
varying float vLayer;
varying float vLambda;
varying vec3 vBookPos;
${Ao}
${Ev}`).replace("#include <normal_fragment_maps>",`{
          vec2 lv = vec2(vLayer, vRun / uEdgeK);
          vec2 dx = dFdx(lv);
          vec2 dy = dFdy(lv);
          float wl = fwidth(vLayer);
          vec3 fade = vec3(
            1.0 - smoothstep(0.3, 0.8, wl),
            1.0 - smoothstep(2.0, 5.0, wl),
            1.0 - smoothstep(0.05, 0.15, fwidth(lv.y))
          );
          float h0 = edgeHeight(lv, fade);
          vec2 dH = vec2(edgeHeight(lv + dx, fade) - h0, edgeHeight(lv + dy, fade) - h0) * uEdgeK * uEdgeRelief;
          // Worked out for every pixel, then kept or not: derivatives taken
          // under a test that differs from one pixel to the next are
          // undefined, and left specks along a board's edge (#1676).
          vec3 relieved = edgeNormal(-vViewPosition, normal, dH, faceDirection);
          if (vLambda >= uBoardLo && vLambda <= uBoardHi) normal = relieved;
        }`).replace("#include <map_fragment>",`{
          float w = fwidth(vLayer);
          float d = abs(fract(vLayer) - 0.5) * 2.0;
          float line = smoothstep(0.55 - w, 0.95 + w, d);
          float fine = clamp(w * 1.5, 0.0, 1.0);
          diffuseColor.rgb *= 1.0 - mix(0.22 * line, 0.08, fine);
          // The bundles' sheets are never quite one shade.
          diffuseColor.rgb *= 1.0 + 0.06 * uEdgeRelief * (eNoise(vec2(vLayer / 9.0, 3.0)) - 0.5);
          // A board lying in the block (the book's own cover) shows its
          // own edge, not paper.
          if (vLambda < uBoardLo || vLambda > uBoardHi) diffuseColor.rgb = uBoardColor;
        }`).replace("#include <aomap_fragment>",`#include <aomap_fragment>
reflectedLight.indirectDiffuse *= 1.0 - bookOcclusion(vBookPos, 0.0);`)},n}const jr=i=>i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2,Tv=i=>1-Math.pow(1-i,3),Ut=(i,e,t)=>{const n=Math.min(1,Math.max(0,(t-i)/(e-i)));return n*n*(3-2*n)};function Av(i,e){const t=i?.paper;return t?.type!==void 0||t?.grammage!==void 0||t?.bulk!==void 0?i:e>1e3?{...i,paper:{...t,type:"bible"}}:e>600?{...i,paper:{...t,grammage:70}}:i}function Cv(i){try{const e=document.createElement("canvas");e.width=e.height=32;const t=e.getContext("2d");if(!t)return null;t.drawImage(i,0,0,32,32);const n=t.getImageData(0,0,32,32).data;let s=0,r=0,a=0,o=0;for(let l=0;l<32;l++)for(let c=0;c<32;c++){if(c>1&&c<30&&l>1&&l<30)continue;const h=(l*32+c)*4;s+=n[h],r+=n[h+1],a+=n[h+2],o++}return new Le().setRGB(s/o/255,r/o/255,a/o/255,pt)}catch{return null}}const Rv=70*Math.PI/180,Pv=.02;function uh(i,e){const t=i.attributes.uv;for(let n=0;n<t.count;n++)t.setX(n,us(n%(e+1)/e));t.needsUpdate=!0}function lc(){const i=new jt(1,1,hn,$i);uh(i,hn);const e=i.attributes.position.count;return i.setAttribute("ao",new Rt(new Float32Array(e).fill(1),1)),i.setAttribute("leafFace",new Rt(new Float32Array(e),1)),i}function Yi(i,e){const t=i.attributes.leafFace;!t||t.getX(0)===e||(t.array.fill(e),t.needsUpdate=!0)}function Lv(i,e,t){return(i+e+Math.sqrt((i-e)*(i-e)+t*t))/2}function $r(i,e){const[t,n]=dt(e>=0?i.right:i.left,Math.abs(e));return[(e>=0?1:-1)*t,n]}function Dv(i,e,t,n,s=1){const r=i.u-e.u,a=i.v-e.v,o=Math.hypot(r,a);if(o<.5)return null;const l={u:r/o,v:a/o},c=Ji(i,e),h=Math.min(.5,A0*s)*t*(.3+.7*Ut(0,.2,c))*(1-Ut(.62,1,c))*Math.min(1,o/(.1*t)),u=Math.PI*(.62+.38*Ut(.05,1,c)),f=h*u,p=f>0?Math.min(1,o/f):0,m=(o+p*(h*Math.sin(u)-f*Math.cos(u)))/(1-Math.cos(u));let x=m;for(const E of[-n/2,n/2])x=Math.min(x,i.u*l.u+(i.v-E)*l.v);if(x<=0)return null;const g={u:i.u-l.u*x,v:i.v-l.v*x};let d=0;for(const E of[0,t])for(const _ of[-n/2,n/2])d=Math.max(d,(E-i.u)*l.u+(_-i.v)*l.v);const w=x/m*(d>0?Ut(0,.5*d,o):1);return{F:g,n:l,R:h,theta:u*w}}function Iv(i,e,t){if(e>.001&&i<e*t)return[e*Math.sin(i/e),e*(1-Math.cos(i/e))];const n=i-e*t;return[e*Math.sin(t)+n*Math.cos(t),e*(1-Math.cos(t))+n*Math.sin(t)]}function Ji(i,e){return Math.min(1,Math.max(0,(i.u-e.u)/(2*i.u)))}function Gs(i,e,t){let{u:n,v:s}=e;for(let r=0;r<4;r++)for(const a of[-t/2,t/2]){const o=Math.hypot(i.u,i.v-a),l=Math.hypot(n,s-a);l>o&&(n*=o/l,s=a+(s-a)*o/l)}return{u:n,v:s}}function ea(i,e,t,n,s,r,a,o,l,c=0,h=0,u){const f=i.attributes.position,p=t?1:-1,[m,x]=dt(a.right,n),[g,d]=dt(a.left,n),w=dt(a.right,0)[1],E=dt(a.left,0)[1],_=t?l:1-l;let M,b,A,v=0;if(u){const B=E<w?Ut(.4,1,_):1-Ut(.4,1,1-_);M=w+(E-w)*B+u.thick/2;const W=Math.atan2(x-w,m),ee=Math.PI-Math.atan2(d-E,g);b=W+(ee-W)*Math.acos(Math.min(1,Math.max(-1,1-2*_)))/Math.PI,A=1,v=u.face*u.thick/2}else{A=o*Ut(0,.06,l)*Ut(0,.06,1-l),M=dt(a.right,0)[1];const B=Math.atan2(x-M,m),W=Math.PI-Math.atan2(d-M,g);b=B+(W-B)*_}const y=Ut(.02,.22,l)*Ut(.02,.22,1-l),P=Pv*y,C=(x-w)/(m||1),L=(d-E)/(g||1),I=Math.atan(C)+P,R=Math.atan(L)+P,U=(B,W)=>{const[ee,le]=$r(a,B);let ce=ee,De=le+W+r;if(y>0){const Ie=B>=0?I:R,Fe=(B>=0?1:-1)*Math.abs(B)*Math.cos(Ie),Q=(B>=0?w:E)+Math.abs(B)*Math.sin(Ie)+W+r,z=$r(a,Fe)[1]+r+.6,K=Lv(Q,z,.006*n);ce+=(Fe-ce)*y,De+=(K-De)*y}return[ce,De]},V=(B,W,ee,le)=>{const ce=c*n*(B/n)*(B/n);if(c<=0||ce<=1e-6)return 0;const De=le-$r(a,ee)[1]-r;return ce*Ut(0,2*ce,De)*Math.sin(2*Math.PI*(h/520)-3*B/n+2*W/s)},F=T0*Ut(0,.06,l)*Ut(0,.06,1-l),X=[];if(e)for(let B=0;B<=hn;B++){const W=us(B/hn)*n;let[ee,le]=U(p*W,0);A>0&&(ee+=(W*Math.cos(b)-v*Math.sin(b)-ee)*A,le+=(M+r+W*Math.sin(b)+v*Math.cos(b)-le)*A),X.push([p*ee,W,le])}for(let B=0;B<=$i;B++){const W=(.5-B/$i)*s;for(let ee=0;ee<=hn;ee++){const le=us(ee/hn)*n;let ce=le,De=W,Ie=0,Fe=0,Q=0;if(e){const{F:$,n:j}=e;Fe=(le-$.u)*j.u+(W-$.v)*j.v,Fe>0&&([Q,Ie]=Iv(Fe,e.R,e.theta),De=W-j.v*(Fe-Q),ce=le-j.u*(Fe-Q))}let[z,K]=U(p*ce,Ie);if(e&&Fe>0){const[$,j]=U(p*(le-e.n.u*Fe),0),ae=Ut(0,.05*n,Ie);z+=($+p*e.n.u*Q-z)*ae,K+=(j+Ie-K)*ae}if(A>0&&(z+=(le*Math.cos(b)-v*Math.sin(b)-z)*A,De+=(W-De)*A,K+=(M+r+le*Math.sin(b)+v*Math.cos(b)-K)*A),K+=V(le,W,z,K),e&&Fe>0){const $=p*z;if($>X[0][0]&&$<X[hn][0]&&Math.abs(De)<=s/2+1.5*s/$i){let j=0,ae=hn;for(;ae-j>1;){const Oe=j+ae>>1;X[Oe][0]<=$?j=Oe:ae=Oe}const Pe=($-X[j][0])/(X[ae][0]-X[j][0]||1),we=X[j][1]+(X[ae][1]-X[j][1])*Pe;if((we-e.F.u)*e.n.u+(De-e.F.v)*e.n.v<0){const Oe=X[j][2]+(X[ae][2]-X[j][2])*Pe;K=Math.max(K,Oe+V(we,De,z,Oe)+E0)}}}!u&&Math.abs(z)<(z>=0?m:g)&&(K=Math.max(K,L0(z>=0?a.right:a.left,Math.abs(z))+Math.min(r,.5)+F)),f.setXYZ(B*(hn+1)+ee,z,De,K)}}return f.needsUpdate=!0,i.computeVertexNormals(),{phi:b,pivot:M+r}}function ta(i){const e=i.userData.board;e&&(e.back.geometry.dispose(),e.slab.geometry.dispose(),e.slab.material.dispose()),i.userData.caster?.geometry.dispose();for(const t of["cutDepth","cutCaster"])i.userData[t]?.dispose();i.geometry.dispose(),i.material.dispose()}function Uv(i,e,t){const[n,s]=dt(i,e*.55),[r,a]=dt(i,e),o=t*(r-n),l=a-s,c=new G(-l*Math.sign(o||1),0,Math.abs(o)).normalize();return new sn().setFromNormalAndCoplanarPoint(c,new G(t*n,0,s))}function Nv({renderer:i,scene:e,camera:t,mirror:n,stage:s,keep:r},a,o){const{x:l,y:c,z:h}=o.normal,u=-o.constant,f=new ct().set(1-2*l*l,-2*l*c,-2*l*h,2*u*l,-2*c*l,1-2*c*c,-2*c*h,2*u*c,-2*h*l,-2*h*c,1-2*h*h,2*u*h,0,0,0,1);n.matrix.copy(f).multiply(t.matrixWorld).multiply(new ct().makeScale(-1,1,1)),n.updateMatrixWorld(!0);const p=n.projectionMatrix.copy(t.projectionMatrix);p.elements[8]*=-1;const m=new sn(o.normal.clone(),o.constant+.2).applyMatrix4(n.matrixWorldInverse),x=new it(m.normal.x,m.normal.y,m.normal.z,m.constant),g=p.elements,d=new it((Math.sign(x.x)+g[8])/g[0],(Math.sign(x.y)+g[9])/g[5],-1,(1+g[10])/g[14]);x.multiplyScalar(2/x.dot(d)),g[2]=x.x,g[6]=x.y,g[10]=x.z+1,g[14]=x.w,n.projectionMatrixInverse.copy(p).invert();const w=[];for(const M of s.children)r.has(M)||!M.visible||(M.visible=!1,w.push(M));const E=i.shadowMap.autoUpdate;i.shadowMap.autoUpdate=!1;const _=Ci.uBehindOn.value;Ci.uBehindOn.value=0,i.setRenderTarget(a),i.clear(),i.render(e,n),i.setRenderTarget(null),i.shadowMap.autoUpdate=E,Ci.uBehindOn.value=_;for(const M of w)M.visible=!0}class Fv{canvas;spread;book;onSettle;onTarget;renderer;scene=new ls;camera=new Vt(Kl,1,1,1e4);picture;left;right;desk;stacks=[];covers=new yi;coverMaterial;spineSrc=null;spineTex=null;spineFaces=[];hinge;fold={top:0,back:0,side:-1};edges;key=new tf(16777215,1);pmrem=null;envKind=null;env=null;stage=new yi;sign;shadowScene=new ls;shadowCamera=new ti(-1,1,1,-1,1,4e3);shadowTarget=null;mirrors={left:null,right:null};mirrorCamera=new Vt;mirrorOk=!1;behindTarget=null;buffer=new Ne(1,1);dpr=1;leafCaster;staticCaster;staticCasters=[];leaves=new Map;loader=new Xc;textures=new Map;ready=new Map;W=1;H=1;turned;turns=new Map;block=null;blockMesh=null;target;raf=0;lastFrame=0;starting=!1;disposed=!1;reported;persistent;turnAt;still=0;appearance={};resolved=Zn(void 0);bookSpec=qi(this.resolved.paper);leafSpecs=[];coverSpec=null;surfaces=null;surfaceKey="";raycaster=new of;orbit={yaw:null,pitch:null};lens=null;loupe=null;details=new Map;paper=[1,1,1];finishes=new dv;constructor(e,t,n,s,r,a,o="left",{persistent:l=!1,turnAt:c=.5,appearance:h={}}={}){this.canvas=e,this.spread=t,this.book=n,this.onSettle=r,this.onTarget=a,this.persistent=l,this.turnAt=c,this.sign=o==="right"?-1:1;const u=this.sign<0;this.coverMaterial=Yr(new qa({roughness:.9,polygonOffset:!0,polygonOffsetFactor:2,polygonOffsetUnits:8}),this.sign),this.edges=oc(this.sign),this.leafCaster=Vs(!0),this.staticCaster=Vs(!1);const f=!!globalThis.__postextFolioPreserve;this.renderer=new r0({canvas:e,alpha:!0,antialias:!1,premultipliedAlpha:!0,preserveDrawingBuffer:f}),this.renderer.outputColorSpace=pt,this.renderer.toneMapping=ar,this.renderer.setClearColor(0,0),this.picture=new w0(this.renderer,this.scene,this.camera,()=>!this.raf&&!this.starting),this.renderer.shadowMap&&(this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=ji),this.left=new rt(this.openGeometry(),Qr(u,this.sign,$a)),this.right=new rt(this.openGeometry(),Qr(u,this.sign,$a));for(const m of[this.left,this.right])m.receiveShadow=m.castShadow=!0,m.material.polygonOffset=!0,m.material.polygonOffsetFactor=1,m.material.polygonOffsetUnits=4,m.material.userData.uniforms.uLeafOcc.value=.7,m.material.userData.uniforms.uOccBias.value=1;this.desk=new rt(new jt(1,1),new hs),this.desk.receiveShadow=!0,this.desk.renderOrder=-1,this.desk.position.z=-1,this.key.castShadow=!0,this.key.shadow.mapSize.set(2048,2048),this.key.shadow.bias=-4e-4,this.key.shadow.normalBias=.6,this.shadowCamera.position.z=2e3;const p=this.renderer.extensions;(p.has("EXT_color_buffer_float")||p.has("EXT_color_buffer_half_float"))&&(this.shadowTarget=new Mt(1,1,{type:yt,minFilter:Ye,magFilter:Ye,depthBuffer:!1,generateMipmaps:!1}),this.mirrorOk=!0),this.mirrorCamera.matrixAutoUpdate=!1,this.stage.scale.x=this.sign,this.hinge=new rt(new vn(1,1,1),this.coverMaterial),this.hinge.receiveShadow=!0,this.hinge.visible=!1,this.stage.add(this.desk,this.covers,this.left,this.right,this.hinge,this.key,this.key.target),this.scene.add(this.stage),this.target=s,this.reported=s,this.turned=Array.from({length:Math.max(0,n.length-1)},(m,x)=>x<s),this.setAppearance(h),f&&(globalThis.__postextFolioFlipper=this)}openGeometry(){const e=new jt(1,1,wn,1);return uh(e,wn),e.setAttribute("ao",new Rt(new Float32Array(e.attributes.position.count).fill(1),1)),e}setAppearance(e){this.appearance=e,this.resolved=Zn(Av(e.folio,this.pageCount(e)));const t=e.pageWidthMm;this.bookSpec=qi(this.resolved.paper,t);const{yaw:n,pitch:s}=this.orbit;if(n!==null&&s!==null&&!this.orbitFrame){const x=this.home(),g=Math.PI/180*.6;Math.abs(Math.atan2(Math.sin(n-x.yaw),Math.cos(n-x.yaw)))<g&&Math.abs(s-x.pitch)<g&&(this.orbit={yaw:null,pitch:null})}const r=new Map;this.leafSpecs=(e.leafPapers??[]).map(x=>{if(!x)return this.bookSpec;const g=JSON.stringify(x);let d=r.get(g);return d||r.set(g,d=qi(z0(e.folio,x),t)),d});const a=this.resolved,o=e.coverLeaves,l=!!o&&(o.front!==void 0||o.back!==void 0);this.coverSpec=!l||a.binding.type==="folded"?null:a.binding.type==="saddleStitch"?qi({...a.paper,grammage:Math.min(350,Math.round(a.paper.grammage*1.5)),showThrough:!1},t):{...qi({...a.paper,type:"board",grammage:1250,bulk:1.6,finish:"silk",texture:"smooth",shade:{hex:"#ffffff",model:"hex"},showThrough:!1},t),caliperMm:Mi[a.binding.type].boardMm||.45,rigidity:1,roughness:.45,clearcoat:.35,clearcoatRoughness:.2,showThrough:0};const c=this.desk.material,h=ec(a.surface.type);if(h==="none")this.desk.material=new Wu({opacity:.32,transparent:!0,depthWrite:!1});else{const x=Zr(h),g=Yr(new hs({map:x.color,normalMap:x.normal,roughnessMap:x.roughness,roughness:x.roughnessScale}),this.sign);g.userData.tileMm=x.tileMm,a.surface.color&&g.color.set(a.surface.color.hex),this.desk.material=g;const d=e.textureBaseUrl;d&&K0(h,d).then(w=>{!w||this.disposed||this.desk.material!==g||this.dressDesk(g,w)})}c.dispose(),Object.assign(this.desk.material,{polygonOffset:!0,polygonOffsetFactor:4,polygonOffsetUnits:16});const u=this.coverMaterial;u.color.set(a.binding.coverColor.hex);const f=a.binding.coverMaterial;u.roughness=f==="cloth"?.95:f==="leather"?.5:.55,u.sheen=f==="cloth"?1:0,u.sheenRoughness=.7,u.sheenColor.set(a.binding.coverColor.hex).lerp(new Le(1,1,1),.35),u.clearcoat=f==="paper"?.35:0,u.normalMap?.dispose(),u.normalMap=f==="cloth"?sc("linen").normal.clone():f==="leather"?Zr("leather").normal.clone():null,a.binding.type==="folded"&&(u.color.set(a.paper.shade.hex),u.roughness=this.bookSpec.roughness,u.sheen=this.bookSpec.sheen,u.sheenColor.set(1,1,1),u.clearcoat=this.bookSpec.clearcoat),u.needsUpdate=!0;const p=a.binding.type==="saddleStitch"||a.binding.type==="folded"?null:e.spineImage??null;if(p!==this.spineSrc&&(this.spineSrc=p,this.spineTex?.dispose(),this.spineTex=null,p&&this.loadSpine(p)),this.envKind!==a.lighting.environment){this.envKind=a.lighting.environment,this.env=N0(a.lighting.environment);const x=this.scene.environment;try{this.pmrem??=new Ka(this.renderer),this.scene.environment=this.pmrem.fromScene(this.env.scene,.02).texture}catch{this.scene.environment=null}x?.dispose()}const m=this.env;this.key.color.copy(m.keyColor),this.key.intensity=m.keyIntensity,this.key.castShadow=a.lighting.shadows,this.key.shadow.radius=6+m.softness*18,this.key.shadow.intensity=m.shadowIntensity??.55+.25*(1-m.softness),this.renderer.toneMappingExposure=m.exposure*a.lighting.intensity,this.edges.color.set(a.paper.shade.hex),eo.uEdgeRelief.value=a.paper.finish==="uncoated"?1:a.paper.finish==="matte"?.7:.5,this.surfaceKey="";for(const x of[this.left,this.right,...this.leaves.values()])x.material.userData.spec=null;this.redraw()}dressDesk(e,t){e.map=t.color,e.normalMap=t.normal,e.roughnessMap=t.roughness,e.aoMap=t.ao??null,e.aoMapIntensity=.8,e.roughness=1,e.normalScale.set(1,1),e.color.set(this.resolved.surface.color?.hex??t.tint??"#ffffff");const n=t.color.image?.width??1024;e.userData.tileMm=Math.min(t.tileMm,n*.3);const s=this.renderer.capabilities.getMaxAnisotropy();for(const r of[t.color,t.normal,t.roughness,t.ao])r&&(r.anisotropy=s);e.needsUpdate=!0,this.surfaceKey="",this.layout(),this.redraw()}pageCount(e){const t=e.extraLeaves??{before:0,after:0},n=Math.max(0,this.book.length-1)+t.before+t.after;return e.singlePage?n:2*n}boardColor(){const e=new Le(this.resolved.binding.coverColor.hex);if(this.appearance.folio?.binding?.coverColor)return e;const t=this.appearance.coverLeaves;for(const n of[t?.front!==void 0?this.book[t.front]?.[1]:null,t?.back!==void 0?this.book[t.back+1]?.[0]:null]){if(!n)continue;const r=this.ready.get(n)?.image??(typeof n=="string"?null:n);if(!(!r||!r.width)){if(this.sampled?.image!==r){const a=Cv(r);if(!a)continue;this.sampled={image:r,color:a}}return this.sampled.color}}return this.sampled?.color??e}sampled=null;specOf(e){const t=this.appearance.coverLeaves;return this.coverSpec&&(e===t?.front||e===t?.back)?this.resolved.binding.type==="saddleStitch"&&this.appearance.leafPapers?.[e]?this.leafSpecs[e]:this.coverSpec:this.leafSpecs[e]??this.bookSpec}dressPage(e,t){const n=e.material;if(n.userData.spec===t)return;n.userData.spec=t;const s=t.paper;n.color.set(s.shade.hex),n.roughness=t.roughness,n.clearcoat=t.clearcoat,n.clearcoatRoughness=t.clearcoatRoughness,n.sheen=t.sheen,n.sheenRoughness=.8,n.sheenColor.set(1,1,1);const r=sc(s.texture),a=r.normal,o=this.appearance.pageWidthMm??150;a.repeat.set(o/r.tileMm,o*(this.H/this.W)/r.tileMm),n.normalMap=s.textureStrength>0?a:null;const l=s.finish!=="uncoated",c=s.textureStrength*(l?.35:1)*.6;n.normalScale.set(c,c);const h=n.userData.uniforms;h.uShowThrough.value=t.showThrough;const u=e===this.left||e===this.right;h.uUnderK.value=u?t.transmission/2:0,h.uTransmit.value=u||e===this.blockMesh?0:t.transmission,n.needsUpdate=!0,this.dressFinish(e)}dressFinish(e){const t=this.finishes,n=e.material.userData.spec;gv(e.material,t.maskOf(e.userData.Front),t.maskOf(e.userData.Back),n?.clearcoat??0);const r=e===this.left||e===this.right?{shared:this.staticCaster,cut:()=>Vs(!1,ac())}:{shared:this.leafCaster,cut:()=>Vs(!0,ac())};hv(e,t,(n??this.bookSpec).caliperMm*this.pxPerMm(),r,this.onDesk())}onDesk(){return!!this.coverSpec||this.resolved.binding.type==="folded"}setFinishes(e){if(this.finishes.set(e)){for(const t of this.pageMeshes())this.dressFinish(t);this.redraw()}}pxPerMm(){return this.W/(this.appearance.pageWidthMm??150)}stackLeaves(){const e=[],t=[];return this.turned.forEach((n,s)=>{!this.turns.has(s)&&!this.inBlock(s)&&(n?e:t).push(s)}),{left:e,right:t}}inBlock(e){return!!this.block&&e>=this.block.lo&&e<this.block.hi}pagesPerLeaf(){return this.appearance.singlePage?1:2}async loadSpine(e){let t=null;if(typeof e=="string"?t=await this.loader.loadAsync(e).catch(()=>null):t=await(e instanceof HTMLCanvasElement?Promise.resolve():e.decode()).then(()=>new mt(e),()=>null),!!t){if(this.disposed||this.spineSrc!==e){t.dispose();return}t.colorSpace=pt,t.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),t.needsUpdate=!0,this.spineTex=t,this.surfaceKey="",this.buildBook(),this.redraw()}}printSpine(e,t,n){const s=this.spineTex;if(!s)return;const r=s.image,a=r.width/r.height,o=t/n,l=a>o?o/a:1,c=a>o?1:a/o,h=this.coverMaterial;for(const u of[-1,1]){const f=s.clone();f.repeat.set(this.sign*l,c),f.offset.set(this.sign>0?(1-l)/2:(1+l)/2,(1-c)/2),f.needsUpdate=!0;const p=Yr(new qa({map:f,roughness:h.roughness,sheen:h.sheen,sheenRoughness:h.sheenRoughness,clearcoat:h.clearcoat,normalMap:h.normalMap,polygonOffset:!0,polygonOffsetFactor:1,polygonOffsetUnits:4}),this.sign),m=new rt(new jt(t,n),p);m.rotation.y=u*(Math.PI/2),m.position.set(u*(e/2+.05),0,t/2),m.receiveShadow=!0,this.spineFaces.push(m),this.stage.add(m)}}clearSpine(){for(const e of this.spineFaces)e.removeFromParent(),e.geometry.dispose(),e.material.map?.dispose(),e.material.dispose();this.spineFaces=[]}buildBook(){const{left:e,right:t}=this.stackLeaves(),n=this.appearance.extraLeaves??{before:0,after:0},s=`${e.length}|${t.length}|${this.W}|${this.H}|${n.before}|${n.after}`;if(s===this.surfaceKey&&this.surfaces)return;this.surfaceKey=s;const r=this.pxPerMm();eo.uEdgeK.value=r;const a=this.appearance.singlePage?.5:1,o=(I,R)=>(I.reduce((U,V)=>U+this.specOf(V).caliperMm,0)*a+R*this.bookSpec.caliperMm)*r,l=o(e,n.before),c=o(t,n.after),h=this.resolved.binding.type,u=!!this.coverSpec||h==="folded",f=I=>I!==void 0&&this.specOf(I).rigidity>.5,{left:p,right:m,board:x}=P0(h,this.W,r,l,c,{flatLeft:f(e[e.length-1]),flatRight:f(t[0]),noCase:u});this.surfaces={left:p,right:m};const{W:g,H:d}=this;for(const[I,R,U,V]of[[this.right,m,p,1],[this.left,p,m,-1]]){const F=I0(R,U,g),X=I.geometry.attributes.position,B=I.geometry.attributes.ao;for(let W=0;W<X.count;W++){const ee=W%(wn+1),le=Math.floor(W/(wn+1)),ce=us(ee/wn),[De,Ie]=dt(R,ce*g);X.setXYZ(W,V*De,le===0?d/2:-d/2,Ie+sh),B.setX(W,F[Math.round(ce*(F.length-1))])}X.needsUpdate=!0,B.needsUpdate=!0,I.geometry.computeVertexNormals(),I.geometry.computeBoundingSphere()}for(const I of this.stacks)I.removeFromParent(),I.geometry.dispose(),I.material!==this.edges&&I.material!==this.coverMaterial&&I.material.dispose();this.stacks=[];for(const[I,R,U]of[[m,1,t.length+n.after],[p,-1,e.length+n.before]]){if(I.t<.05)continue;const V=R>0?t:e,F=R>0?0:n.before,X=R>0?n.after:0,B=R>0?X?void 0:V[V.length-1]:F?void 0:V[0],W=R>0?V[0]:V[V.length-1],ee=Ie=>Ie!==void 0&&this.coverSpec!==null&&this.specOf(Ie)===this.coverSpec,le=(this.coverSpec?.caliperMm??0)*r,ce=this.coverSpec?{lo:ee(B)?le/I.t:-1,hi:ee(W)&&W!==B?1-le/I.t:2,color:this.boardColor()}:void 0,De=new rt(U0(I,R,g,d,Math.round(U*a),this.appearance.edgeOutline),ce?oc(this.sign,ce,this.edges.color):this.edges);De.castShadow=De.receiveShadow=!0,this.stacks.push(De),this.stage.add(De)}u&&h!=="folded"&&this.coverMaterial.color.copy(this.boardColor());const E=Math.min(l,c)<.5?Math.max(l,c)+x:Math.max(dt(p,0)[1],dt(m,0)[1]),_=Math.min(.04*g,Math.max(1.5,(this.coverSpec?.caliperMm??Mi[h].boardMm)*r));if(this.clearSpine(),this.fold={top:E>.4?E-.3:0,back:_,side:l<c?-1:1},E>.4){const I=d+(u?0:2*Mi[h].squareMm*r),R=new rt(new vn(_,I,E-.3),this.coverMaterial);R.position.set(0,0,(E-.3)/2),R.castShadow=R.receiveShadow=!0,this.stacks.push(R),this.stage.add(R),this.printSpine(_,E-.3,I)}for(const I of[...this.covers.children])I.removeFromParent(),I.geometry.dispose();const M=Mi[h],b=M.squareMm*r,A=M.jointMm*r,v=dt(m,g)[0],y=dt(p,g)[0],P=(I,R,U,V,F)=>{const X=Math.max(.1,U-.6),B=new rt(new vn(R-I,V,X),this.coverMaterial),W=(I+R)/2,ee=F&&F.rise>0?Math.atan2(F.rise,F.run):0;B.position.set(W,0,X/2+(F&&F.rise>0?F.rise*Math.max(0,1-Math.abs(W)/F.run):0)),B.rotation.y=W>0?ee:-ee,B.castShadow=B.receiveShadow=!0,this.covers.add(B)},C=d+2*b;u||(P(A,v+b,x,C,m),P(-(y+b),-A,x,C,p),A>0&&P(-A,A,x*.7,C));const L=this.coverMaterial.normalMap;if(L){const I=this.resolved.binding.coverMaterial==="cloth"?6:60;L.repeat.set(g/r/I,d/r/I)}for(const I of this.staticCasters)I.removeFromParent(),I.geometry.dispose();this.staticCasters=[this.left,this.right,...this.stacks,...this.covers.children].map(I=>{const R=new rt(Xl(I.geometry),this.staticCaster);return R.position.copy(I.position),R.frustumCulled=!1,this.shadowScene.add(R),R}),this.left.userData.caster=this.staticCasters[0],this.right.userData.caster=this.staticCasters[1],this.dressFinish(this.left),this.dressFinish(this.right),An.uOccRadius.value=.14*g,this.layoutLight()}layoutLight(){const e=this.env;if(!e)return;const{W:t,H:n}=this,s=4*Math.max(t,n),r=e.key;this.key.position.set(this.sign*r.x*s,r.y*s,r.z*s),this.key.target.position.set(0,0,0);const a=this.key.shadow.camera,o=.62*Math.hypot(2*t,n)+.1*t;Object.assign(a,{left:-o,right:o,top:o,bottom:-o,near:s*.2,far:s*2}),a.updateProjectionMatrix()}layout(){const e=this.canvas.getBoundingClientRect(),t=e.width,n=e.height;if(!t||!n)return;const s=Math.min(window.devicePixelRatio||1,3);this.renderer.setPixelRatio(1),this.renderer.setSize(Math.round(t*s),Math.round(n*s),!1),this.picture.setSize(Math.round(t*s),Math.round(n*s)),this.buffer.set(Math.round(t*s),Math.round(n*s)),this.dpr=s;const r=this.spread.getBoundingClientRect(),a=r.width/2||1,o=r.height||1;if(a!==this.W||o!==this.H){this.W=a,this.H=o;for(const C of[this.left,this.right,...this.leaves.values()])C.material.userData.spec=null}this.buildBook(),this.videos.length&&this.packVideos();const l=this.pxPerMm(),c=40*Math.max(a,o);this.desk.userData.size!==c&&(this.desk.userData.size=c,this.desk.geometry.dispose(),this.desk.geometry=new jt(c,c));const h=this.desk.material,u=ec(this.resolved.surface.type);if(h.map&&u!=="none"){const C=(h.userData.tileMm??Zr(u).tileMm)*l;for(const L of[h.map,h.normalMap,h.roughnessMap,h.aoMap])L?.repeat.set(c/C,c/C)}const f=this.home(),p=this.orbit.pitch??f.pitch,m=this.orbit.yaw??f.yaw,x=Mi[this.resolved.binding.type].squareMm*l,g=Math.max(this.topZ("left"),this.topZ("right")),d=[];for(const C of[-(a+x),a+x])for(const L of[-(o/2+x),o/2+x])for(const I of[0,g])d.push(new G(C,L,I));const w=this.camera;w.aspect=t/n,w.clearViewOffset();const E=r.width/t,_=r.height/n,M=C=>{w.position.set(Math.sin(m)*Math.sin(p)*C,-Math.cos(m)*Math.sin(p)*C,g/2+Math.cos(p)*C),w.up.set(-Math.sin(m),Math.cos(m),0),w.lookAt(0,0,g/2),w.near=C*.35,w.far=C*4+c,w.updateProjectionMatrix(),w.updateMatrixWorld();let L=1/0,I=-1/0,R=1/0,U=-1/0;for(const V of d){const F=V.clone().project(w);L=Math.min(L,F.x),I=Math.max(I,F.x),R=Math.min(R,F.y),U=Math.max(U,F.y)}return{x0:L,x1:I,y0:R,y1:U}};let b=n/2/Math.tan(Kl*Math.PI/360)*.3,A=b*20;for(let C=0;C<32;C++){const L=(b+A)/2,I=M(L);(I.x1-I.x0)/2<=E&&(I.y1-I.y0)/2<=_?A=L:b=L}const v=M(A),y=Math.round(t*s),P=Math.round(n*s);if(w.setViewOffset(y,P,(v.x0+v.x1)/2*y/2,-((v.y0+v.y1)/2)*P/2,y,P),w.updateProjectionMatrix(),this.shadowTarget){const C=a*1.6+80,L=o*.9+80;Object.assign(this.shadowCamera,{left:-C,right:C,top:L,bottom:-L}),this.shadowCamera.updateProjectionMatrix();const I=Math.min(1,1536/(2*C));this.shadowTarget.setSize(Math.round(2*C*I),Math.round(2*L*I)),An.uShadowBox.value.set(-C,-L,2*C,2*L),An.uShadowMap.value=this.shadowTarget.texture}}topZ(e){const t=this.surfaces?.[e];return t?t.zs[t.zs.length-1]:0}midZ(e){const t=this.surfaces?.[e];return t?dt(t,this.W/2)[1]:0}home(){return{yaw:this.resolved.yaw*Math.PI/180,pitch:this.resolved.tilt*Math.PI/180}}view(){const e=this.home(),t=this.orbit.yaw??e.yaw,n=this.orbit.pitch??e.pitch,s=r=>Math.round(r*180/Math.PI)+0;return{tilt:s(n),yaw:s(Math.atan2(Math.sin(t),Math.cos(t)))}}orbitBy(e,t){cancelAnimationFrame(this.orbitFrame),this.orbitFrame=0;const n=this.home(),s=this.orbit.pitch??n.pitch;this.orbit={yaw:(this.orbit.yaw??n.yaw)-e*.006,pitch:Math.min(Rv,Math.max(0,s-t*.006))},this.raf||this.starting?this.layout():this.redraw()}resetOrbit(){cancelAnimationFrame(this.orbitFrame);const e=this.home(),t=this.orbit.yaw===null?0:Math.atan2(Math.sin(this.orbit.yaw-e.yaw),Math.cos(this.orbit.yaw-e.yaw)),n=this.orbit.pitch??e.pitch;if(Math.abs(t)<.001&&Math.abs(n-e.pitch)<.001)return this.orbit={yaw:null,pitch:null},this.redraw();const s=performance.now(),r=450+250*Math.min(1,Math.hypot(t,n-e.pitch)),a=o=>{if(this.orbitFrame=0,this.disposed)return;const l=Math.min(1,(o-s)/r),c=jr(l),h=this.home();this.orbit=l<1?{yaw:h.yaw+t*(1-c),pitch:n+(h.pitch-n)*c}:{yaw:null,pitch:null},this.layout(),!this.raf&&!this.starting&&this.draw(),l<1&&(this.orbitFrame=requestAnimationFrame(a))};this.orbitFrame=requestAnimationFrame(a)}orbitFrame=0;setPaper(e,t,n){this.paper=[e,t,n];for(const s of[this.left,this.right,...this.leaves.values()])s.material.userData.uniforms.uPaper.value.setRGB(e,t,n,pt);this.redraw()}videos=[];atlas=null;atlasKey="";setVideos(e){const t=s=>JSON.stringify(s.frame.crop??null),n=e.length===this.videos.length&&e.every((s,r)=>s.element===this.videos[r].element&&t(s)===t(this.videos[r]));this.videos=e.slice(),n||(this.atlasKey=""),this.packVideos(),this.dressVideos(),this.redraw()}setVideo(e){this.setVideos(e?[e]:[])}packVideos(){const e=this.videos.map(({frame:n})=>{const s=Math.hypot(n.across.x*this.W,n.across.y*this.H)*this.dpr,r=Math.hypot(n.down.x*this.W,n.down.y*this.H)*this.dpr;return{width:Math.max(16,Math.round(s)),height:Math.max(16,Math.round(r))}}),t=this.videos.map((n,s)=>`${e[s].width}x${e[s].height}`).join(",")+`|${this.videos.length}`;if(!(t===this.atlasKey&&(this.atlas||!this.videos.length))){if(this.atlasKey=t,!this.videos.length)this.atlas?.dispose(),this.atlas=null;else{const n=Math.min(ir,this.renderer.capabilities.maxTextureSize??ir);this.atlas??=new J0(s=>{s&&this.dressVideos(),this.redraw()},n),this.atlas.set(this.videos.map((s,r)=>({element:s.element,...s.frame.crop?{crop:s.frame.crop}:{},...e[r]})))}this.dressVideos(),this.redraw()}}dressVideos(){for(const e of this.pageMeshes())this.dressVideo(e)}pageMeshes(){return[this.left,this.right,...this.leaves.values(),...this.blockMesh?[this.blockMesh]:[]]}dressVideo(e){const t=e.material.userData.uniforms,n=this.atlas;let s=0;for(const r of n?this.videos:[]){if(s>=En)break;const a=r.src?e.userData.Front===r.src?1:e.userData.Back===r.src?2:0:0,o=a?n.rectOf(r.element):null;if(!o)continue;const{origin:l,across:c,down:h}=r.frame;t.uVidOA.value[s].set(l.x,l.y,c.x,c.y),t.uVidDF.value[s].set(h.x,h.y,a,0),t.uVidRect.value[s].set(o.x,o.y,o.width,o.height),s++}if(t.uVidCount.value=s,t.uVideo.value=s?n.texture:null,s){const r=n.size;t.uVidTexel.value.set(1/r.width,1/r.height)}}touch(e){if(!e||typeof e=="string")return;const t=this.ready.get(e);let n=!1;for(const s of this.details.values())s.src!==e||!s.tex||(s.tex.needsUpdate=!0,n=!0);!t&&!n||(t&&(t.needsUpdate=!0),this.redraw())}preload(e){for(const t of e)for(const n of this.book[t]??[])n&&this.texture(n)}texture(e){let t=this.textures.get(e);if(!t){const n=s=>(s.colorSpace=pt,s.minFilter=qt,s.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.ready.set(e,s),s);if(typeof e=="string")t=this.loader.loadAsync(e).then(n,()=>null);else{const s=new mt(e);t=(e instanceof HTMLCanvasElement?Promise.resolve():e.decode()).then(()=>(s.needsUpdate=!0,n(s)),()=>null)}this.textures.set(e,t)}return t}setBook(e,t){const n=e.length!==this.book.length;if(this.book=e,n||t!==void 0){const r=Math.max(0,Math.min(e.length-1,t??this.settledAt()));if(n){cancelAnimationFrame(this.raf),this.raf=0,this.turns.clear(),this.block=null;for(const a of this.leaves.values())a.removeFromParent(),a.userData.caster.removeFromParent(),ta(a);this.leaves.clear()}this.turned=Array.from({length:Math.max(0,e.length-1)},(a,o)=>o<r),this.target=r,this.reported=r,n&&this.setAppearance(this.appearance),this.raf||this.clear()}for(const[r,a]of this.leaves)this.assign(a,"Front",e[r]?.[1]??null),this.assign(a,"Back",e[r+1]?.[0]??null);const s=new Set(e.flat());for(const r of[this.left,this.right])s.add(r.userData.Front).add(r.userData.Back).add(r.userData.Under);for(const[r,a]of this.ready)s.has(r)||(a.dispose(),this.ready.delete(r),this.textures.delete(r));this.redraw()}assign(e,t,n){const s=e.material.userData.uniforms;if(e.userData[t]===n||(e.userData[t]=n,this.dressVideo(e),t!=="Under"&&this.dressFinish(e),s[`uHas${t}`].value=0,s[`u${t}`].value=null,n===""&&(s[`uHas${t}`].value=2),!n))return;const r=o=>{!o||e.userData[t]!==n||(s[`u${t}`].value=o,s[`uHas${t}`].value=1,t!=="Under"&&this.dressFinish(e),this.redraw())},a=this.ready.get(n);a?r(a):this.texture(n).then(r)}leaf(e){let t=this.leaves.get(e);return t||(t=this.leafMesh(),this.assign(t,"Front",this.book[e]?.[1]??null),this.assign(t,"Back",this.book[e+1]?.[0]??null),this.leaves.set(e,t)),this.dressPage(t,this.specOf(e)),t}leafMesh(){const e=lc(),t=new rt(e,Qr(this.sign<0,this.sign,ch));t.material.userData.uniforms.uPaper.value.setRGB(...this.paper,pt),t.castShadow=t.receiveShadow=!0,t.frustumCulled=!1;const n=new rt(Xl(t.geometry),this.leafCaster);return n.frustumCulled=!1,n.visible=!1,this.shadowScene.add(n),t.userData.caster=n,t}blockLeaf(e,t){this.blockMesh??=this.leafMesh();const n=this.blockMesh;return this.assign(n,"Front",this.book[e]?.[1]??null),this.assign(n,"Back",this.book[t]?.[0]??null),this.dressPage(n,this.specOf(e)),n}blockThickness(e,t){let n=0;for(let s=e;s<t;s++)n+=this.specOf(s).caliperMm;return Math.max(.5,n*(this.appearance.singlePage?.5:1)*this.pxPerMm())}foldCover(e){const t=this.appearance.coverLeaves,n=f=>f===t?.front||f===t?.back,s=f=>{const p=f.userData.board;let m=1/0;for(const x of p?.back.visible?[f,p.back]:[f]){const g=x.geometry.attributes.position;for(let d=0;d<=$i;d++)m=Math.min(m,g.getZ(d*(hn+1)))}return m};let r=1/0;if(this.coverSpec){for(const{k:p,mesh:m}of e)n(p)&&(r=Math.min(r,s(m)));const f=this.block;f&&this.blockMesh&&[t?.front,t?.back].some(p=>p!==void 0&&p>=f.lo&&p<f.hi)&&(r=Math.min(r,s(this.blockMesh)))}const{top:a,back:o,side:l}=this.fold,c=r-.03,h=.3;if(this.hinge.visible=a>0&&c>a,!this.hinge.visible)return;const u=c-a+.05;this.hinge.scale.set(o/2+h,this.H,u),this.hinge.position.set(l*(o/2-h)/2,0,a-.05+u/2)}boardParts(e){let t=e.userData.board;if(!t){const n=new rt(lc(),e.material);n.castShadow=n.receiveShadow=!0,n.frustumCulled=!1;const s=lv(hh(e)),r=new rt(s.geometry,s.material);r.castShadow=r.receiveShadow=!0,e.add(n,r),t={back:n,slab:r},e.userData.board=t}return t}go(e){if(this.target=Math.max(0,Math.min(this.book.length-1,e)),this.raf||this.starting)return;const t=Math.min(this.target,this.settledAt()),n=Math.max(this.target,this.settledAt());if(t===n)return this.onSettle(this.target);this.starting=!0;const s=[],r=(n-t)*this.pagesPerLeaf()>Zs,a=r?[t,n]:Array.from({length:Math.min(n,t+2)-t+1},(o,l)=>t+l);for(const o of a)for(const l of this.book[o]??[])l&&s.push(l);this.preload(r?[t,n]:Array.from({length:n-t+1},(o,l)=>t+l)),Promise.race([Promise.all(s.map(o=>this.texture(o))),new Promise(o=>setTimeout(o,700))]).then(()=>{this.starting=!1,!this.disposed&&(this.layout(),this.lastFrame=performance.now(),this.raf=requestAnimationFrame(this.frame))})}settledAt(){const e=this.turned.indexOf(!1);return e<0?this.turned.length:e}lift(e,t,n={u:this.W,v:-this.H/2}){return{forward:e,G:n,P:{...n},anim:{start:t,duration:Zl,from:n,to:{u:-n.u,v:n.v},arc:.28*this.H,lands:!0}}}frame=e=>{if(this.raf=0,this.disposed)return;const t=Math.min(40,Math.max(1,e-(this.lastFrame||e-16)));this.lastFrame=e;const n=this.turned.length,s=h=>Ji(h.G,h.P);for(const[h,u]of this.turns){const f=this.specOf(h);if(u.held){const{aim:p}=u.held,m=1-Math.pow(1-f.follow,t/16);u.P=Gs(u.G,{u:u.P.u+(p.u-u.P.u)*m,v:u.P.v+(p.v-u.P.v)*m},this.H)}else if(u.spring){const p=u.spring,m=Math.min(1,(e-p.start)/p.duration),x=2*m**3-3*m**2+1,g=m**3-2*m**2+m,d=-2*m**3+3*m**2,w=E=>x*p.from[E]+g*p.duration*p.vel[E]+d*p.to[E];u.P=Gs(u.G,{u:w("u"),v:w("v")},this.H),m>=1&&(this.turned[h]=p.lands?u.forward:!u.forward,this.turns.delete(h))}else if(u.anim){const{start:p,duration:m,from:x,to:g,arc:d,lands:w}=u.anim,E=Math.min(1,(e-p)/m),_=d?jr(E):Tv(E);u.P=Gs(u.G,{u:x.u+(g.u-x.u)*_,v:x.v+(g.v-x.v)*_+d*Math.sin(Math.PI*_)},this.H),E>=1&&(this.turned[h]=w?u.forward:!u.forward,this.turns.delete(h))}}if(this.block){const{turn:h,lo:u,hi:f}=this.block,p=h.anim,m=Math.min(1,(e-p.start)/p.duration);if(h.P={u:p.from.u+(p.to.u-p.from.u)*jr(m),v:p.from.v},m>=1){for(let x=u;x<f;x++)this.turned[x]=h.forward;this.block=null}}const r=this.settledAt(),a=Math.abs(this.target-r);if(!this.block&&this.turns.size===0&&a>1&&a*this.pagesPerLeaf()>Zs){const h=this.target>r,u=h?r:this.target,f=h?this.target:r,p={u:this.W,v:0},m=C0*(1+.25*Ut(Zs,400,a*this.pagesPerLeaf()));this.block={lo:u,hi:f,turn:{forward:h,rigid:!0,G:p,P:{...p},anim:{start:e,duration:m,from:p,to:{u:-p.u,v:0},arc:0,lands:!0}}}}const o=Math.abs(this.target-this.settledAt())||1,l=Math.min(R0,.7/o),c=(h,u)=>{const f=this.turns.get(h);return f?f.forward===u&&!f.held&&s(f)>=l:u?this.turned[h]:!this.turned[h]};for(let h=0;h<this.target&&h<n&&!this.block;h++)if(!(this.turned[h]||this.turns.has(h))){if(h>0&&!c(h-1,!0))break;this.turns.set(h,{...this.lift(!0,e),rigid:this.rigidOf(h)})}for(let h=n-1;h>=this.target&&!this.block;h--)if(!(!this.turned[h]||this.turns.has(h))){if(h<n-1&&!c(h+1,!1))break;this.turns.set(h,{...this.lift(!1,e),rigid:this.rigidOf(h)})}this.draw(),this.spread.classList.add("is-turning"),this.turns.size>0||this.block||this.settledAt()!==this.target?this.raf=requestAnimationFrame(this.frame):this.settle()};settle(){this.target===this.reported?this.clear():(this.reported=this.target,this.onSettle(this.target))}toWorld(e){const t=this.canvas.getBoundingClientRect(),n=new Ne((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height*2-1));this.camera.updateMatrixWorld(),this.raycaster.setFromCamera(n,this.camera);const s=new G,r=c=>this.raycaster.ray.intersectPlane(new sn(new G(0,0,1),-c),s)?{x:s.x,y:s.y}:null,a=this.midZ("left"),o=this.midZ("right");let l=r((a+o)/2);return l&&(l=r(l.x*this.sign>0?o:a)??l),l?{x:this.sign*l.x,y:l.y}:{x:0,y:1e9}}rayAt(e){const t=this.canvas.getBoundingClientRect(),n=new Ne((e.clientX-t.left)/t.width*2-1,-((e.clientY-t.top)/t.height*2-1));this.scene.updateMatrixWorld(),this.camera.updateMatrixWorld(),this.raycaster.setFromCamera(n,this.camera)}pagePoint(e){this.surfaces||this.layout(),this.rayAt(e);const t=[this.left,this.right].filter(o=>o.visible),n=[...this.leaves.values(),...this.blockMesh?[this.blockMesh]:[]].filter(o=>o.visible);for(const o of n)o.geometry.computeBoundingSphere();const s=this.raycaster.intersectObjects([...t,...n],!1)[0];if(!s||!s.uv||s.object!==this.left&&s.object!==this.right)return null;const r=this.sign<0?1-s.uv.x:s.uv.x,a=s.object===this.right;return{side:a?1:0,x:a?r:1-r,y:1-s.uv.y}}screenPoint(e,t,n){this.surfaces||this.layout();const s=e===1?this.right:this.left;if(!s.visible)return null;const r=e===1?t:1-t,a=Math.min(1,Math.max(0,this.sign<0?1-r:r)),o=s.geometry.attributes.position,l=s.geometry.attributes.uv,c=wn+1;let h=0;for(;h<wn-1&&l.getX(h+1)<a;)h++;const u=l.getX(h),f=l.getX(h+1),p=f>u?Math.min(1,Math.max(0,(a-u)/(f-u))):0,m=(E,_,M)=>new G(o.getX(E),o.getY(E),o.getZ(E)).lerp(new G(o.getX(_),o.getY(_),o.getZ(_)),M),x=m(h,h+1,p),g=m(c+h,c+h+1,p),d=x.lerp(g,n);this.scene.updateMatrixWorld(),this.camera.updateMatrixWorld(),s.localToWorld(d).project(this.camera);const w=this.canvas.getBoundingClientRect();return{x:w.left+(d.x+1)/2*w.width,y:w.top+(1-d.y)/2*w.height}}rigidOf(e){return this.specOf(e).rigidity>.5}hit(e){this.surfaces||this.layout();const{x:t,y:n}=this.toWorld(e);return Math.abs(n)>this.H/2||Math.abs(t)>this.W*1.05||Math.abs(t)<Jl*this.W?0:t>0?1:-1}grab(e){if(this.raf||this.starting||this.turns.size)return!1;this.layout();const{x:t,y:n}=this.toWorld(e),s=this.settledAt(),r=t>0,a=r?s:s-1;if(a<0||a>=this.turned.length||Math.abs(t)>this.W*1.05||Math.abs(t)<Jl*this.W||Math.abs(n)>this.H/2)return!1;const o={u:Math.max(.15*this.W,Math.min(this.W,Math.abs(t))),v:n};return this.turns.set(a,{forward:r,G:o,P:{...o},held:{aim:{...o},samples:[]},rigid:this.rigidOf(a)}),this.lastFrame=performance.now(),this.raf=requestAnimationFrame(this.frame),!0}drag(e){const t=[...this.turns.values()].find(a=>a.held);if(!t?.held)return;const{x:n,y:s}=this.toWorld(e);t.held.aim=t.rigid&&this.surfaces?this.boardAim(t,{x:n}):Gs(t.G,{u:t.forward?n:-n,v:s},this.H);const r=performance.now();for(t.held.samples.push({t:r,p:{...t.held.aim}});t.held.samples.length>2&&r-t.held.samples[0].t>100;)t.held.samples.shift()}boardAim(e,t){const n=this.surfaces,{W:s}=this,r=this.raycaster.ray.origin.clone(),a=this.raycaster.ray.direction.clone();r.x*=this.sign,a.x*=this.sign;const[o,l]=dt(n.right,s),[c,h]=dt(n.left,s),u=dt(n.right,0)[1],f=dt(n.left,0)[1],p=Math.atan2(l-u,o),m=Math.PI-Math.atan2(h-f,c),x=(u+f)/2,{u:g,v:d}=e.G,w=e.forward?t.x:-t.x,E=Math.acos(Math.min(1,Math.max(-1,w/g)))/Math.PI;let _;if(Math.abs(a.y)>1e-4){const A=(d-r.y)/a.y,v=r.x+a.x*A,y=r.z+a.z*A-x,P=Math.atan2(y,v),C=(Math.min(Math.max(P<-Math.PI/2?P+2*Math.PI:P,p),m)-p)/(m-p||1),L=Ut(.15*g,.45*g,Math.hypot(v,y));_=E+(C-E)*L}else{const A=new G;let v=1/0;_=0;for(let y=0;y<=180;y++){const P=p+(m-p)*y/180,C=A.set(g*Math.cos(P),d,x+g*Math.sin(P)).sub(r).cross(a).lengthSq();C<v&&(v=C,_=y/180)}}const M=(1-Math.cos(Math.PI*_))/2,b=e.forward?M:1-M;return{u:g*(1-2*b),v:d}}release(e=!1){const t=[...this.turns].find(([,E])=>E.held);if(!t)return;const[n,s]=t,{samples:r}=s.held;if(s.held=void 0,e){s.anim={start:performance.now(),duration:Zl,from:{...s.P},to:{u:-s.G.u,v:s.G.v},arc:(s.G.v>0?-1:1)*.2*this.H,lands:!0},this.target=s.forward?n+1:n,this.onTarget(this.target);return}const a=r[0],o=r[r.length-1],l=a&&o?o.t-a.t:0,c=l>8?{u:(o.p.u-a.p.u)/l,v:(o.p.v-a.p.v)/l}:{u:0,v:0},h=Math.hypot(c.u,c.v);h>4&&(c.u*=4/h,c.v*=4/h),o&&performance.now()-o.t>80&&(c.u=c.v=0);const f=Ji(s.G,{u:s.P.u+c.u*250,v:s.P.v})>this.turnAt,p=f?{u:-s.G.u,v:s.G.v}:{...s.G},m=Math.hypot(p.u-s.P.u,p.v-s.P.v),x=Math.min(700,Math.max(280,(180+.9*m)*(.0085/this.specOf(n).spring))),g=(c.u*(p.u-s.P.u)+c.v*(p.v-s.P.v))/(m||1),d=1.5*m/x,w=g>d?d/g:1;s.spring={from:{...s.P},to:p,vel:{u:c.u*w,v:c.v*w},start:performance.now(),duration:x,lands:f},f&&(this.target=s.forward?n+1:n,this.onTarget(this.target))}draw(){this.buildBook();const e=this.surfaces,{W:t,H:n}=this,s=this.turned.length,r=[...this.turns].sort(([p],[m])=>p-m).map(([p,m])=>{const x=this.specOf(p);return{k:p,q:Ji(m.G,m.P),forward:m.forward,fold:Dv(m.G,m.P,t,n,x.roll),mesh:this.leaf(p),spec:x}});for(const p of this.leaves.values())p.visible=p.userData.caster.visible=!1;const a=this.pxPerMm();if(r.forEach(({k:p,q:m,forward:x,fold:g,mesh:d,spec:w},E)=>{const _=x?m:1-m,M=(.5+.6*((1-_)*(r.length-1-E)+_*E))*Math.max(1,w.caliperMm*a),b=.012*Math.max(0,1/w.roll-.75)*Math.sin(Math.PI*m)*(1-w.rigidity),A=performance.now();if(this.turns.get(p)?.rigid){const v=Math.max(.5,w.caliperMm*a),y=this.boardParts(d),P=(I,R)=>ea(I,g,x,t,n,Math.min(M,.6),e,1,m,0,A,{thick:v,face:R}),{phi:C,pivot:L}=P(d.geometry,1);P(y.back.geometry,-1),Yi(d.geometry,1),Yi(y.back.geometry,-1),y.slab.position.set(t/2*Math.cos(C),0,L+t/2*Math.sin(C)),y.slab.rotation.set(0,-C,0),y.slab.scale.set(t,n,v*.97),y.slab.material.color.copy(w===this.coverSpec?this.boardColor():new Le(w.paper.shade.hex)),y.back.visible=y.slab.visible=!0}else{ea(d.geometry,g,x,t,n,M,e,w.rigidity,m,b,A),Yi(d.geometry,0);const v=d.userData.board;v&&(v.back.visible=v.slab.visible=!1)}d.visible=d.userData.caster.visible=!0,d.parent||this.stage.add(d)}),this.blockMesh){const p=this.blockMesh.userData.caster;this.blockMesh.visible=p.visible=!1;const m=this.blockMesh.userData.board;m&&(m.back.visible=m.slab.visible=!1)}if(this.block){const{lo:p,hi:m,turn:x}=this.block,g=this.blockLeaf(p,m),d=Ji(x.G,x.P),w=this.blockThickness(p,m),E=this.boardParts(g),_=(v,y)=>ea(v,null,x.forward,t,n,.5,e,1,d,0,0,{thick:w,face:y}),{phi:M,pivot:b}=_(g.geometry,1);_(E.back.geometry,-1),Yi(g.geometry,1),Yi(E.back.geometry,-1),E.slab.position.set(t/2*Math.cos(M),0,b+t/2*Math.sin(M)),E.slab.rotation.set(0,-M,0),E.slab.scale.set(t,n,w*.97);const A=this.specOf(p);E.slab.material.color.copy(A===this.coverSpec?this.boardColor():new Le(A.paper.shade.hex)),g.visible=E.back.visible=E.slab.visible=g.userData.caster.visible=!0,g.parent||this.stage.add(g)}this.foldCover(r);let o=-1;for(let p=0;p<s;p++)this.turned[p]&&!this.turns.has(p)&&!this.inBlock(p)&&(o=p);let l=s;for(let p=s-1;p>=0;p--)!this.turned[p]&&!this.turns.has(p)&&!this.inBlock(p)&&(l=p);const c=this.book[o+1]?.[0]??null,h=this.book[l]?.[1]??null;this.assign(this.left,"Back",c),this.assign(this.right,"Front",h),this.assign(this.left,"Front",o>=0?this.book[o]?.[1]??null:null),this.assign(this.right,"Back",this.book[l+1]?.[0]??null);const u=(p,m)=>p>=0&&p<s&&this.turned[p]===m&&!this.turns.has(p)&&!this.inBlock(p);this.assign(this.left,"Under",u(o-1,!0)?this.book[o]?.[0]??null:null),this.assign(this.right,"Under",u(l+1,!1)?this.book[l+1]?.[1]??null:null);const f=this.appearance.extraLeaves;this.left.visible=c!==null||(f?.before??0)>0,this.right.visible=h!==null||(f?.after??0)>0,this.dressPage(this.left,o>=0?this.specOf(o):this.bookSpec),this.dressPage(this.right,l<s?this.specOf(l):this.bookSpec);for(const p of[...this.leaves.values(),this.blockMesh])p?.visible&&x0(p.userData.caster,p.geometry);for(const p of this.staticCasters)p.visible=!0;this.staticCasters[0].visible=this.left.visible,this.staticCasters[1].visible=this.right.visible,An.uShadowOn.value=this.shadowTarget?1:0,this.shadowTarget&&(this.renderer.setRenderTarget(this.shadowTarget),this.renderer.render(this.shadowScene,this.shadowCamera),this.renderer.setRenderTarget(null)),this.mirror(r.length>0||this.block!==null),this.behind(r.map(p=>p.mesh)),this.picture.render(()=>this.drawLoupe())}setLens(e){!e&&!this.lens||(this.lens=e,this.raf||this.redraw())}get maxTextureSize(){return this.renderer.capabilities.maxTextureSize??4096}setDetail(e){for(const[t,n]of this.details)e.get(t)!==n.src&&(n.tex?.dispose(),this.details.delete(t));for(const[t,n]of e){if(!t||!n||this.details.has(t))continue;const s={src:n,tex:null};this.details.set(t,s);const r=a=>{if(a.colorSpace=pt,a.minFilter=qt,a.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.details.get(t)!==s)return a.dispose();s.tex=a,this.redraw()};typeof n=="string"?this.loader.loadAsync(n).then(r,()=>{}):(n instanceof HTMLCanvasElement?Promise.resolve():n.decode()).then(()=>{const o=new mt(n);o.needsUpdate=!0,r(o)},()=>{})}}drawLoupe(){const e=this.lens;if(!e)return;const t=this.canvas.getBoundingClientRect(),n=this.dpr,s={x:(e.x-t.left)*n,y:(e.y-t.top)*n,radius:e.radius*n,rim:e.rim*n,zoom:e.zoom};this.loupe??=new Lo;const r=[],a=(o,l)=>{const c=o.value;o.value=l,r.push(()=>o.value=c)};this.loupe.capture(this.renderer,this.scene,this.camera,s,()=>{a(Ci.uBehindOn,0);for(const o of this.pageMeshes()){const l=o.material.userData.uniforms;a(l.uReflectionOn,0);for(const c of["Front","Back"]){const h=this.details.get(o.userData[c])?.tex;h&&l[`uHas${c}`].value===1&&a(l[`u${c}`],h)}}},()=>{for(const o of r.reverse())o()}),this.loupe.draw(this.renderer,this.buffer.x,this.buffer.y,s)}behind(e){const t=Ci;t.uBehindOn.value=0,t.uBehind.value=t.uBehindDepth.value=null;const n=e.filter(h=>h.visible&&h.material.userData.uniforms.uTransmit.value>0);if(!this.mirrorOk||!n.length)return;const s=Math.max(1,Math.round(this.buffer.x/2)),r=Math.max(1,Math.round(this.buffer.y/2));let a=this.behindTarget;a?(a.width!==s||a.height!==r)&&a.setSize(s,r):(a=new Mt(s,r,{type:yt,minFilter:qt,magFilter:Ye,generateMipmaps:!0}),a.depthTexture=new Pi(s,r),this.behindTarget=a);for(const h of n)h.visible=!1;const o=this.renderer.shadowMap.autoUpdate;this.renderer.shadowMap.autoUpdate=!1,this.renderer.shadowMap.needsUpdate=!0;const l=[this.left,this.right].map(h=>h.material.userData.uniforms.uLeafOcc),c=l.map(h=>h.value);for(const h of l)h.value=0;this.renderer.setRenderTarget(a),this.renderer.clear(),this.renderer.render(this.scene,this.camera),this.renderer.setRenderTarget(null),this.renderer.shadowMap.autoUpdate=o,l.forEach((h,u)=>h.value=c[u]);for(const h of n)h.visible=!0;t.uBehind.value=a.texture,t.uBehindDepth.value=a.depthTexture,t.uBehindSize.value.copy(this.buffer),t.uBehindClip.value.set(this.camera.near,this.camera.far),t.uBehindScale.value=r/2*this.camera.projectionMatrix.elements[5],t.uBehindFloor.value=.25*this.pxPerMm(),t.uBehindOn.value=1}mirror(e){const t=[{side:"left",page:this.left},{side:"right",page:this.right}];let n=null;for(const{side:s,page:r}of t){const a=r.material.userData.uniforms,o=this.mirrorOk&&e&&r.visible&&r.material.userData.spec?.paper.finish==="gloss";if(a.uReflectionOn.value=o?1:0,!o)continue;const l=Uv(this.surfaces[s],this.W,(s==="left"?-1:1)*this.sign);if(!n||n.plane.normal.dot(l.normal)<.99999||Math.abs(n.plane.constant-l.constant)>.25){const c=this.mirrorTarget(s);this.drawMirror(c,l),n={plane:l,target:c}}a.uReflection.value=n.target.texture,a.uReflectionSize.value.copy(this.buffer),a.uReflectionNormal.value.copy(l.normal)}}mirrorTarget(e){const t=Math.min(1,1.5/this.dpr),n=Math.max(1,Math.round(this.buffer.x*t)),s=Math.max(1,Math.round(this.buffer.y*t));let r=this.mirrors[e];return r?(r.width!==n||r.height!==s)&&r.setSize(n,s):(r=new Mt(n,s,{type:yt,minFilter:Ye,magFilter:Ye,generateMipmaps:!1,samples:4}),this.mirrors[e]=r),r}drawMirror(e,t){const n=new Set([this.key,this.key.target,...this.leaves.values()]);this.blockMesh&&n.add(this.blockMesh),Nv({renderer:this.renderer,scene:this.scene,camera:this.camera,mirror:this.mirrorCamera,stage:this.stage,keep:n},e,t)}clear(){if(!(this.raf||this.starting)){if(this.persistent)return this.redraw();this.spread.classList.remove("is-turning"),this.picture.cancel(),this.renderer.clear()}}redraw(){!this.persistent||this.disposed||this.still||(this.still=requestAnimationFrame(()=>{this.still=0,!(this.disposed||this.raf||this.starting)&&(this.layout(),this.draw())}))}dispose(){this.disposed=!0,this.setVideos([]),cancelAnimationFrame(this.raf),cancelAnimationFrame(this.still),cancelAnimationFrame(this.orbitFrame);for(const e of this.ready.values())e.dispose();this.finishes.dispose(),this.shadowTarget?.dispose(),this.picture.dispose(),this.loupe?.dispose();for(const e of this.details.values())e.tex?.dispose();this.details.clear(),this.mirrors.left?.dispose(),this.mirrors.right?.dispose(),this.behindTarget?.depthTexture?.dispose(),this.behindTarget?.dispose(),this.leafCaster.dispose(),this.staticCaster.dispose();for(const e of this.staticCasters)e.geometry.dispose();this.scene.environment?.dispose(),this.pmrem?.dispose();for(const e of this.leaves.values())ta(e);this.blockMesh&&ta(this.blockMesh);for(const e of[this.left,this.right])for(const t of["cutDepth","cutCaster"])e.userData[t]?.dispose();for(const e of[this.left,this.right,this.desk,...this.stacks])e.geometry.dispose(),e.material.dispose();for(const e of this.covers.children)e.geometry.dispose();this.hinge.geometry.dispose(),this.clearSpine(),this.spineTex?.dispose(),this.coverMaterial.normalMap?.dispose(),this.coverMaterial.dispose(),this.edges.dispose(),this.renderer.dispose()}}function Ov(){if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return!1;try{return!!document.createElement("canvas").getContext("webgl2")}catch{return!1}}function Bv(i,e=!0){const t=[];let n=0;for(i>0&&e&&t.push([null,n++]);n<i;n+=2)t.push([n,n+1<i?n+1:null]);return t}function js(i,e){return Math.max(0,i.findIndex(t=>t[0]===e||t[1]===e))}const na=`
.postext-folio {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: 0;
  overflow: hidden;
  /* Horizontal swipes turn the spread. */
  touch-action: pan-y pinch-zoom;
  outline: none;
}
.postext-folio:focus-visible {
  outline: 2px solid var(--postext-folio-accent, #4f8cff);
  outline-offset: -4px;
}
.postext-folio-spread {
  position: absolute;
  display: grid;
  grid-template-columns: 1fr 1fr;
  /* Page surfaces (z 1) and their spine shading (z 2) paint above every
     page's drop shadow, as the canvas draws them. */
  isolation: isolate;
}
.postext-folio-spread.is-solo {
  grid-template-columns: 1fr;
}
/* The canvas draws the book: the DOM pages stay (sources, text
   alternatives, click targets) but are not seen. */
.postext-folio-spread.is-gl > .postext-folio-page {
  opacity: 0;
}
/* Hand mode: a page is taken by its outer half, and the hand shows only
   there (the viewer marks it as the pointer moves). */
.postext-folio.is-over-grip,
.postext-folio.is-over-grip .postext-folio-spread.is-by-hand > .postext-folio-page:not(.is-empty) {
  cursor: grab;
}
.postext-folio-spread.is-held,
.postext-folio-spread.is-held > .postext-folio-page {
  cursor: grabbing !important;
}
/* Orbit and select modes: one finger drags the view or the selection,
   never the page; the cursor says which. */
.postext-folio.is-orbit,
.postext-folio.is-select,
.postext-folio.is-magnify {
  touch-action: none;
}
/* Magnify mode: the glass is the pointer (#527). */
.postext-folio.is-magnifying,
.postext-folio.is-magnifying .postext-folio-spread > .postext-folio-page,
.postext-folio.is-magnifying .postext-folio-flip {
  cursor: none;
}
.postext-folio.is-orbit .postext-folio-spread > .postext-folio-page:not(.is-empty),
.postext-folio.is-orbit {
  cursor: move;
}
.postext-folio.is-orbiting,
.postext-folio.is-orbiting * {
  cursor: grabbing !important;
}
.postext-folio.is-select .postext-folio-spread > .postext-folio-page:not(.is-empty) {
  cursor: default;
}
.postext-folio.is-select.is-over-page,
.postext-folio.is-select.is-over-page .postext-folio-spread > .postext-folio-page {
  cursor: text;
}
/* Under the glass the pointer selects what lies at its centre (#543): a
   text cursor there, over the pages. */
.postext-folio.is-magnify.is-over-page,
.postext-folio.is-magnify.is-over-page .postext-folio-spread > .postext-folio-page,
.postext-folio.is-magnify.is-over-page .postext-folio-flip {
  cursor: text;
}
/* Over something a click acts on (a video that plays on the page), in
   every pointer mode. */
.postext-folio.is-over-action,
.postext-folio.is-over-action.is-select,
.postext-folio.is-over-action.is-orbit,
.postext-folio.is-over-action .postext-folio-spread > .postext-folio-page:not(.is-empty),
.postext-folio.is-over-action.is-select .postext-folio-spread > .postext-folio-page:not(.is-empty),
.postext-folio.is-over-action.is-orbit .postext-folio-spread > .postext-folio-page:not(.is-empty) {
  cursor: pointer;
}
/* A video on a page of the DOM spread (no WebGL): laid over its poster. */
.postext-folio-page > .postext-folio-video {
  position: absolute;
  z-index: 2;
  left: 0;
  top: 0;
  transform-origin: 0 0;
  object-fit: cover;
  background: #000;
  pointer-events: none;
}
.postext-folio-spread,
.postext-folio-page {
  user-select: none;
  -webkit-user-select: none;
}
/* The book in WebGL: over the whole box, centred on the spread (sized by
   the viewer), with room for a lifted leaf. */
.postext-folio-flip {
  position: absolute;
  z-index: 3;
  pointer-events: none;
}
.postext-folio-page {
  position: relative;
  margin: 0;
  min-width: 0;
}
.postext-folio-page > img,
.postext-folio-page > .postext-folio-surface {
  position: relative;
  z-index: 1;
  display: block;
  width: 100%;
  height: 100%;
  background: #fff;
}
.postext-folio-page.is-blank {
  background: var(--postext-folio-paper, #fff);
}
.postext-folio-page:not(.is-empty) {
  box-shadow:
    0 1px 1px rgb(0 0 0 / 0.35),
    0 16px 36px -8px rgb(0 0 0 / 0.65);
}
/* The spine: each page darkens towards the fold. */
.postext-folio-page:not(.is-empty)::after {
  content: "";
  position: absolute;
  z-index: 2;
  inset: 0;
  pointer-events: none;
}
.postext-folio-page.is-verso::after {
  background: linear-gradient(to left, rgb(0 0 0 / 0.16), rgb(0 0 0 / 0.04) 3%, transparent 9%);
}
.postext-folio-page.is-recto::after {
  background: linear-gradient(to right, rgb(0 0 0 / 0.18), rgb(0 0 0 / 0.05) 3%, transparent 9%);
}
/* A right-bound book lies mirrored: the verso on the right, the recto on
   the left, each shaded towards the fold. */
.postext-folio[dir="rtl"] .postext-folio-page.is-verso::after {
  background: linear-gradient(to right, rgb(0 0 0 / 0.16), rgb(0 0 0 / 0.04) 3%, transparent 9%);
}
.postext-folio[dir="rtl"] .postext-folio-page.is-recto::after {
  background: linear-gradient(to left, rgb(0 0 0 / 0.18), rgb(0 0 0 / 0.05) 3%, transparent 9%);
}
.postext-folio-nav {
  position: absolute;
  z-index: 4;
  top: 50%;
  transform: translateY(-50%);
  display: grid;
  place-items: center;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 1.5px solid var(--postext-folio-nav-border, color-mix(in srgb, currentColor 35%, transparent));
  border-radius: 999px;
  background: transparent;
  color: inherit;
  cursor: pointer;
  transition: border-color 0.15s, color 0.15s, opacity 0.15s;
}
.postext-folio-nav.is-prev {
  left: 12px;
}
.postext-folio-nav.is-next {
  right: 12px;
}
.postext-folio[dir="rtl"] .postext-folio-nav.is-prev {
  left: auto;
  right: 12px;
}
.postext-folio[dir="rtl"] .postext-folio-nav.is-next {
  right: auto;
  left: 12px;
}
.postext-folio-nav[hidden] {
  display: none;
}
.postext-folio-nav:hover:not(:disabled) {
  border-color: var(--postext-folio-accent, #4f8cff);
  color: var(--postext-folio-accent, #4f8cff);
}
.postext-folio-nav:focus-visible {
  outline: 2px solid var(--postext-folio-accent, #4f8cff);
  outline-offset: 2px;
}
.postext-folio-nav:disabled {
  opacity: 0.3;
  cursor: default;
}
.postext-folio-count {
  position: absolute;
  z-index: 4;
  left: 0;
  right: 0;
  bottom: 12px;
  text-align: center;
  pointer-events: none;
  margin: 0;
  font: inherit;
  font-size: 0.875em;
  font-variant-numeric: tabular-nums;
  opacity: 0.8;
}
/* Announced, not shown. */
.postext-folio-count.is-unseen {
  width: 1px;
  height: 1px;
  overflow: hidden;
  clip-path: inset(50%);
  white-space: nowrap;
}
/* One page at a time: the buttons and the count in a bar under the page. */
.postext-folio.is-single .postext-folio-nav {
  top: auto;
  bottom: 12px;
  transform: none;
}
.postext-folio.is-single .postext-folio-count {
  bottom: 24px;
}
@media (prefers-reduced-motion: reduce) {
  .postext-folio-nav {
    transition: none;
  }
}
`,cc="postext-folio-styles";function kv(i){const e=i.getRootNode(),t="head"in e?e.head:e;if(!t)return;const n="getElementById"in e?e.getElementById(cc):null;if(n){n.textContent!==na&&(n.textContent=na);return}const s=document.createElement("style");s.id=cc,s.textContent=na,t.append(s)}const fh={region:"Book",prev:"Previous pages",next:"Next pages",count:(i,e)=>i.length>1?`Pages ${i[0]+1}–${i[i.length-1]+1} of ${e}`:`Page ${(i[0]??0)+1} of ${e}`},Qi=6,dh=40,ph=560,xi=12,zv=20,to=1.5,no=10,Hv=5.5,Si=(i,e,t)=>Math.max(e,Math.min(t,i)),hc=i=>`<svg aria-hidden="true" viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="${i==="left"?"m15 18-6-6 6-6":"m9 18 6-6-6-6"}"/></svg>`,kn=i=>i&&typeof i=="object"&&"src"in i?i.src:i??null,Vv=i=>i&&typeof i=="object"&&"src"in i?i.alt:void 0,es=i=>i&&typeof i=="object"&&"src"in i?i.paper:void 0;function mh(i){const e=new Map;for(const t of i){if(!t||typeof t!="object"||!("src"in t))continue;const n=t.finish;t.src&&(n?.mask||n?.cut||n?.through)&&e.set(t.src,n)}return e}function Gv(i){if(!i||typeof i=="string")return null;const e=i instanceof HTMLCanvasElement?i.width:i.naturalWidth,t=i instanceof HTMLCanvasElement?i.height:i.naturalHeight;return e>0&&t>0?e/t:null}function Wv(i){const e=document.createElement("canvas").getContext("2d");if(!e)return null;e.fillStyle="#fff",e.fillRect(0,0,1,1),e.fillStyle=i,e.fillRect(0,0,1,1);const t=e.getImageData(0,0,1,1).data;return[t[0]/255,t[1]/255,t[2]/255]}function Xv(i){const{options:e,controls:t,showCount:n,root:s,prevBtn:r,spreadEl:a,count:o,rtl:l,singleGl:c,vs:h,vlate:u}=i;function f(){const d=h.appearance.extraPages??{before:0,after:0},w=h.spreads.slice(0,-1).map((E,_)=>h.single?es(h.pages[E[1]]):es(h.pages[E[1]??-1])??es(h.pages[h.spreads[_+1]?.[0]??-1]));return{folio:h.appearance.folio,pageWidthMm:h.appearance.pageWidthMm,extraLeaves:h.single?{before:d.before,after:d.after}:{before:Math.ceil(d.before/2),after:Math.ceil(d.after/2)},leafPapers:w,singlePage:h.single,textureBaseUrl:h.appearance.textureBaseUrl,coverLeaves:p(),...h.appearance.spineImage?{spineImage:h.appearance.spineImage}:{},...h.appearance.edgeOutline?{edgeOutline:h.appearance.edgeOutline}:{}}}function p(){const d=h.appearance.covers;if(!d||h.spreads.length<2)return;const w=h.spreads[h.spreads.length-1];return{...d.front&&(h.single||h.spreads[0][0]===null)?{front:0}:{},...d.back&&!h.single&&w[1]===null?{back:h.spreads.length-2}:{}}}function m(){if(e.aspect)return e.aspect;for(const d of h.pages){const w=Gv(kn(d));if(w)return w}return 1/Math.SQRT2}function x(){const d=window.devicePixelRatio||1,w=s.getBoundingClientRect(),E=Math.floor(w.width*d),_=Math.floor(w.height*d),M=m(),b=Math.round(xi*d),A=R=>{let U=Math.max(2,Math.floor(R));for(;U>2&&(U%2||Math.round(U/M)%2);)U--;return U};let v,y,P,C;if(h.single){const R=t?Math.round((r.offsetWidth+2*xi)*d):b,U=Math.max(0,E-2*b),V=Math.max(0,_-b-R);v=A(Math.min(U,V>0?V*M:1/0));const F=Math.round(v/M),X=b+Math.floor((U-v)/2);P=b+Math.max(0,Math.floor((V-F)/2)),h.flipper?(C=2,y=l()?X:X-v):(C=1,y=X)}else{C=2;const R=Math.round((t?r.offsetWidth+2*xi:xi)*d),U=Math.round(Math.max(zv,n?o.offsetHeight+2*xi:xi)*d),V=Math.max(0,E-2*R),F=Math.max(0,_-2*U),X=h.flipper?1/Math.max(.7,Math.cos(Zn(h.appearance.folio).tilt*Math.PI/180)):1;v=A(Math.min(V/2,F>0?F*X*M:1/0)),y=Math.floor((E-2*v)/2),P=Math.floor((_-Math.round(v/M))/2)}const L=Math.max(1,Math.round(v/M));if(Object.assign(a.style,{left:`${y/d}px`,top:`${P/d}px`,width:`${C*v/d}px`,height:`${L/d}px`}),h.flipCanvas){const R=y+v,U=P+L/2,V=Math.max(R,E-R),F=Math.max(U,_-U);Object.assign(h.flipCanvas.style,{left:`${(R-V)/d}px`,top:`${(U-F)/d}px`,width:`${2*V/d}px`,height:`${2*F/d}px`})}const I={width:v/d,height:L/d,deviceWidth:v,deviceHeight:L};(I.deviceWidth!==h.slot.deviceWidth||I.deviceHeight!==h.slot.deviceHeight)&&(h.slot=I,e.onLayout?.(h.slot),u.scheduleDetail(300)),u.placeDomVideo(),h.flipper?.redraw()}function g(d,w){const E=document.createElement("div");E.className="postext-folio-page",(!h.single||c())&&E.classList.add(w===0?"is-verso":"is-recto");const _=d===null?null:kn(h.pages[d]);if(_===null)E.classList.add("is-empty"),E.setAttribute("aria-hidden","true");else if(_==="")E.classList.add("is-blank"),E.setAttribute("aria-hidden","true");else{const M=Vv(h.pages[d])??"";if(typeof _=="string"){const b=document.createElement("img");b.src=_,b.alt=M,b.draggable=!1,b.decoding="async",E.append(b)}else _.classList.add("postext-folio-surface"),_ instanceof HTMLCanvasElement?(_.setAttribute("role","img"),M&&_.setAttribute("aria-label",M)):(_.alt=M,_.draggable=!1),E.append(_)}return E}return{flipAppearance:f,aspect:m,fit:x,pageEl:g}}function qv(i){const{options:e,animate:t,root:n,prevBtn:s,nextBtn:r,spreadEl:a,count:o,rtl:l,pagesOf:c,singleGl:h,bookOf:u,flipAppearance:f,fit:p,pageEl:m,vs:x,vlate:g}=i;function d(){x.flipper?.setVideos(x.pageVideos.map(C=>({src:kn(x.pages[C.page]),element:C.element,frame:C}))),E()}const w=C=>{C.element.classList.contains("postext-folio-video")&&(C.element.classList.remove("postext-folio-video"),C.element.remove())};function E(){if(x.flipper){for(const R of x.pageVideos)w(R);return}const C=[...a.children],L=x.spreads[x.shown]??[null,null],I=x.single&&!h()?[L[0]??L[1]]:L;for(const R of x.pageVideos){const U=I.indexOf(R.page),V=U>=0?C[U]:void 0;if(!V){R.element.remove();continue}const F=V.clientWidth,X=V.clientHeight,B=100;R.element.classList.add("postext-folio-video"),Object.assign(R.element.style,{width:`${B}px`,height:`${B}px`,transform:`matrix(${R.across.x*F/B}, ${R.across.y*X/B}, ${R.down.x*F/B}, ${R.down.y*X/B}, ${R.origin.x*F}, ${R.origin.y*X})`}),R.element.parentElement!==V&&V.append(R.element)}}function _(){const C=x.spreads[x.shown]??[null,null],L=x.single&&!h()?[C[0]??C[1]]:C;a.replaceChildren(...L.map((R,U)=>m(R,U))),a.classList.toggle("is-solo",x.single&&!h()),a.classList.toggle("is-by-hand",!!x.flipper),a.classList.toggle("is-gl",!!x.flipper);const I=c(x.spreads[x.current]);o.textContent=I.length?x.labels.count(I,x.pages.length):"",s.disabled=x.current<=0,r.disabled=x.current>=x.spreads.length-1,E(),x.flipper?.clear(),g.scheduleDetail(120)}function M(C){x.shown=C,_(),e.onChange?.({spread:C,pages:c(x.spreads[C])})}function b(C){const L=Math.max(0,Math.min(x.spreads.length-1,C));L===x.current&&L===x.shown||(x.current=L,e.onTarget?.({spread:L,pages:c(x.spreads[L])}),x.flipper?(x.flipper.go(L),o.textContent=x.labels.count(c(x.spreads[L]),x.pages.length),s.disabled=L<=0,r.disabled=L>=x.spreads.length-1):M(L))}function A(C){const L=Math.max(0,Math.min(x.spreads.length-1,C));L===x.current&&L===x.shown||(x.current=L,e.onTarget?.({spread:L,pages:c(x.spreads[L])}),x.flipper?.setBook(u(),L),M(L))}function v(){if(x.flipper?.dispose(),x.flipper=null,x.flipCanvas?.remove(),x.flipCanvas=null,!t||x.spreads.length<2||!Ov())return;x.flipCanvas=document.createElement("canvas"),x.flipCanvas.className="postext-folio-flip",x.flipCanvas.setAttribute("aria-hidden","true"),n.append(x.flipCanvas);const C=f();x.appearanceKey=JSON.stringify(C),x.flipper=new Fv(x.flipCanvas,a,u(),x.shown,M,I=>{x.current=I,e.onTarget?.({spread:I,pages:c(x.spreads[I])}),o.textContent=x.labels.count(c(x.spreads[I]),x.pages.length)},x.binding,{persistent:!0,turnAt:x.single?.2:.5,appearance:C});const L=Wv(x.paper);L&&x.flipper.setPaper(...L),x.flipper.setFinishes(mh(x.pages)),x.pageVideos.length&&d(),x.details=new Map,x.detailAsked=new Map,x.lensAt&&x.flipper.setLens(g.lensOf(x.lensAt))}function y(C){x.single=x.mode==="single"||x.mode==="auto"&&n.clientWidth>0&&n.clientWidth<ph,x.spreads=x.single?x.pages.map((L,I)=>[null,I]):Bv(x.pages.length,x.firstPageRecto),x.current=x.shown=js(x.spreads,C),n.dir=l()?"rtl":"ltr",n.style.setProperty("--postext-folio-paper",x.paper),n.classList.toggle("is-single",x.single),s.innerHTML=hc(l()?"right":"left"),r.innerHTML=hc(l()?"left":"right"),v(),p(),_()}function P(){n.setAttribute("aria-label",x.labels.region),s.setAttribute("aria-label",x.labels.prev),r.setAttribute("aria-label",x.labels.next)}return{applyVideo:d,unplace:w,placeDomVideo:E,render:_,go:b,jump:A,rebuild:y,applyLabels:P}}function Yv(i){const{options:e,root:t,prevBtn:n,nextBtn:s,rtl:r,go:a,vs:o,vlate:l}=i;n.addEventListener("click",()=>a(o.current-1)),s.addEventListener("click",()=>a(o.current+1)),t.addEventListener("keydown",u=>{if(u.target!==t)return;if(o.interaction==="magnify"&&o.flipper&&(u.key==="+"||u.key==="="||u.key==="-"||u.key==="Escape")){if(u.key==="Escape"){if(!o.lensAt)return;l.hideLens()}else l.raiseLens(),l.zoomBy(u.key==="-"?1/1.25:1.25);u.preventDefault();return}const f=r()?"ArrowLeft":"ArrowRight",p=r()?"ArrowRight":"ArrowLeft";if(u.key===p||u.key==="PageUp")a(o.current-1);else if(u.key===f||u.key==="PageDown")a(o.current+1);else if(u.key==="Home")a(0);else if(u.key==="End")a(o.spreads.length-1);else return;u.preventDefault()}),t.addEventListener("contextmenu",u=>{o.flipper&&u.preventDefault()}),t.addEventListener("pointerdown",u=>{if(!(u.button===2||u.button===0&&o.interaction==="orbit")||!o.flipper||o.holding||u.target.closest(".postext-folio-nav"))return;u.preventDefault();const p=u.button===2?2:1,m=u.pointerId;t.classList.add("is-orbiting");let x=u.clientX,g=u.clientY;const d=_=>{if(_.pointerId===m){if((_.buttons&p)===0)return E();o.flipper?.orbitBy(_.clientX-x,_.clientY-g),x=_.clientX,g=_.clientY}},w=_=>{_.pointerId===m&&E()},E=()=>{t.classList.remove("is-orbiting"),window.removeEventListener("pointermove",d),window.removeEventListener("pointerup",w),window.removeEventListener("pointercancel",w),window.removeEventListener("blur",E)};window.addEventListener("pointermove",d),window.addEventListener("pointerup",w),window.addEventListener("pointercancel",w),window.addEventListener("blur",E)}),t.addEventListener("pointermove",u=>{if(u.buttons)return;const f=o.holding?null:l.aimedPageAt(u);(o.interaction==="select"||o.interaction==="magnify")&&t.classList.toggle("is-over-page",!!f),e.isPageAction&&t.classList.toggle("is-over-action",!!f&&e.isPageAction(f)),t.classList.toggle("is-over-grip",o.interaction==="hand"&&!o.holding&&!!o.flipper&&o.flipper.hit(u)!==0)});let c=null,h=!1;return t.addEventListener("pointerdown",u=>{if(c=null,o.interaction==="hand"||u.button!==0||!e.onPageClick||!e.isPageAction||u.target.closest(".postext-folio-nav"))return;const f=l.aimedPageAt(u);!f||!e.isPageAction(f)||(c={x:u.clientX,y:u.clientY,id:u.pointerId,point:f},l.leftToHost()&&u.stopPropagation())},!0),t.addEventListener("pointermove",u=>{c&&l.leftToHost()&&u.pointerId===c.id&&u.stopPropagation()},!0),t.addEventListener("pointerup",u=>{const f=c;!f||u.pointerId!==f.id||(c=null,l.leftToHost()&&(u.stopPropagation(),h=!0),Math.hypot(u.clientX-f.x,u.clientY-f.y)<Qi&&e.onPageClick?.(f.point))},!0),t.addEventListener("click",u=>{h&&(h=!1,u.stopPropagation())},!0),t.addEventListener("pointerleave",u=>{t.classList.remove("is-over-action","is-over-grip","is-over-page"),u.pointerType==="mouse"&&l.hideLens()}),{}}function Kv(i){const{options:e,root:t,spreadEl:n,rtl:s,pagesOf:r,aspect:a,go:o,vs:l,vlate:c}=i;l.lensAt=null,l.lensZoom=e.magnifier?.zoom?Si(e.magnifier.zoom,to,no):null,l.details=new Map,l.detailAsked=new Map,l.detailTimer=0;function h(){if(l.lensZoom)return l.lensZoom;const _=l.slot.width/(l.appearance.pageWidthMm??150);return _>0?Si(Hv/_,2,8):3}function u(_){const M=t.getBoundingClientRect(),b=e.magnifier?.diameter??Si(.42*Math.min(M.width,M.height),180,520),A=Si(b*.045,8,18);return{x:_.x,y:_.y,radius:b/2-A,rim:A,zoom:h()}}function f(_){if(_.pointerType!=="touch")return{x:_.clientX,y:_.clientY};const M=u({x:_.clientX,y:_.clientY});return{x:M.x,y:M.y-(M.radius+M.rim+28)}}function p(_){if(!l.flipper)return;const M=u(f(_));l.lensAt={x:M.x,y:M.y},t.classList.add("is-magnifying"),l.flipper.setLens(M)}function m(){if(l.lensAt)return;const _=n.getBoundingClientRect();l.lensAt={x:_.left+_.width/2,y:_.top+_.height/2},t.classList.add("is-magnifying")}function x(){l.lensAt&&(l.lensAt=null,t.classList.remove("is-magnifying"),l.flipper?.setLens(null))}function g(_){l.lensZoom=Si(h()*_,to,no),l.lensAt&&l.flipper?.setLens(u(l.lensAt)),d(250)}t.addEventListener("pointermove",_=>{l.interaction!=="magnify"||l.holding||_.pointerType==="touch"&&!_.buttons||p(_)}),t.addEventListener("pointerdown",_=>{l.interaction!=="magnify"||_.button!==0||_.target.closest(".postext-folio-nav")||p(_)});for(const _ of["pointerup","pointercancel"])t.addEventListener(_,M=>{M.pointerType==="touch"&&x()});t.addEventListener("wheel",_=>{if(l.interaction!=="magnify"||!l.flipper)return;_.preventDefault();const M=_.deltaMode===1?_.deltaY*16:_.deltaY;g(Math.exp(-M*.0015))},{passive:!1});function d(_){l.interaction!=="magnify"||!e.detail||(clearTimeout(l.detailTimer),l.detailTimer=window.setTimeout(w,_))}function w(){const _=e.detail,M=l.flipper;if(l.interaction!=="magnify"||!_||!M||!l.slot.deviceWidth||l.disposed)return;const b=M.maxTextureSize,A=Math.max(l.slot.deviceWidth,Math.min(b,Math.floor(b*a()),Math.ceil(l.slot.deviceWidth*h()/256)*256)),v=new Map;for(const y of new Set([...r(l.spreads[l.shown]),...r(l.spreads[l.current])])){const P=kn(l.pages[y]);P&&v.set(P,y)}for(const y of[...l.details.keys()])v.has(y)||l.details.delete(y);for(const y of[...l.detailAsked.keys()])v.has(y)||l.detailAsked.delete(y);M.setDetail(l.details);for(const[y,P]of v)(l.detailAsked.get(y)??0)>=A||(l.detailAsked.set(y,A),Promise.resolve(_.paint(P,A)).then(C=>{!C||l.flipper!==M||l.interaction!=="magnify"||kn(l.pages[P])!==y||(l.details.set(y,C),M.setDetail(l.details))},()=>l.detailAsked.delete(y)))}function E(){x(),clearTimeout(l.detailTimer),!(!l.details.size&&!l.detailAsked.size)&&(l.details=new Map,l.detailAsked=new Map,l.flipper?.setDetail(l.details),e.detail?.release?.())}return t.addEventListener("pointerdown",_=>{l.interaction==="hand"&&(c.onPage(_)||_.pointerType!=="mouse"&&(l.swipe={x:_.clientX,y:_.clientY}))}),t.addEventListener("pointerup",_=>{const M=l.swipe;if(l.swipe=null,!M)return;const b=_.clientX-M.x;Math.abs(b)>dh&&Math.abs(b)>Math.abs(_.clientY-M.y)&&o(l.current+(b<0!==s()?1:-1))}),{zoomNow:h,lensOf:u,heldAt:f,raiseLens:m,hideLens:x,zoomBy:g,scheduleDetail:d,releaseLens:E}}function Zv(i){const{options:e,root:t,spreadEl:n,rtl:s,singleGl:r,go:a,heldAt:o,scheduleDetail:l,releaseLens:c,vs:h}=i;function u(M){if(M.button!==0||h.holding)return!1;const b=M.target;return b.closest(".postext-folio-nav")||(h.flipper?!h.flipper.hit(M):!b.closest(".postext-folio-spread"))?!1:(h.press={x:M.clientX,y:M.clientY},h.pressPoint=e.onPageClick?g(M):null,r()?(f(M),!0):h.flipper?.grab(M)?(M.preventDefault(),p(M,h.press),!0):!1)}function f(M){M.stopPropagation(),h.swipe=null;const b=M.pointerId,A={x:M.clientX,y:M.clientY},v=s()?1:-1,y=()=>{window.removeEventListener("pointermove",P),window.removeEventListener("pointerup",C,!0),window.removeEventListener("pointercancel",L)},P=I=>{if(I.pointerId!==b)return;const R=I.clientX-A.x,U=I.clientY-A.y;Math.hypot(R,U)<Qi||Math.abs(U)>Math.abs(R)||Math.sign(R)===v&&(y(),h.flipper?.grab(M)&&(p(M,A),h.flipper.drag(I)))},C=I=>{if(I.pointerId!==b)return;y(),h.press=null;const R=I.clientX-A.x,U=I.clientY-A.y;Math.hypot(R,U)<Qi?m()||a(h.current+1):Math.abs(R)>dh&&Math.abs(R)>Math.abs(U)&&Math.sign(R)===-v&&a(h.current-1),I.stopPropagation()},L=I=>{I.pointerId===b&&y()};window.addEventListener("pointermove",P),window.addEventListener("pointerup",C,!0),window.addEventListener("pointercancel",L)}function p(M,b){const A=M.pointerId,v=I=>{I.pointerId===A&&((I.buttons&1)===0?L(!1):h.flipper?.drag(I))},y=I=>{I.pointerId===A&&L(Math.hypot(I.clientX-b.x,I.clientY-b.y)<Qi)},P=I=>{I.pointerId===A&&L(!1)},C=()=>L(!1),L=I=>{window.removeEventListener("pointermove",v),window.removeEventListener("pointerup",y,!0),window.removeEventListener("pointercancel",P),window.removeEventListener("blur",C),n.classList.remove("is-held"),h.holding=null,h.press=null,h.flipper?.release(I&&!m())};window.addEventListener("pointermove",v),window.addEventListener("pointerup",y,!0),window.addEventListener("pointercancel",P),window.addEventListener("blur",C),h.holding=L,h.swipe=null,n.classList.add("is-held");try{n.setPointerCapture(A)}catch{}}t.addEventListener("pointerup",M=>{if(h.holding||r()||h.interaction!=="hand")return;const b=h.press;if(h.press=null,!(!!b&&Math.hypot(M.clientX-b.x,M.clientY-b.y)<Qi))return;if(m()){h.swipe=null;return}if(h.flipper){const y=h.flipper.hit(M);return y?(h.swipe=null,a(h.current+(h.single?1:y))):void 0}if(!M.target.closest(".postext-folio-page:not(.is-empty)"))return;const v=n.getBoundingClientRect();h.swipe=null,h.single?a(h.current+1):a(h.current+(M.clientX>v.left+v.width/2!==s()?1:-1))});function m(){const M=h.pressPoint;return h.pressPoint=null,!!M&&!!e.onPageClick?.(M)}const x=M=>{const b=h.spreads[h.shown];return b?h.single&&!r()?b[0]??b[1]:b[M]:null};function g(M){if(h.flipper){const A=h.flipper.pagePoint(M);if(!A)return null;const v=x(A.side);return v==null?null:{page:v,x:A.x,y:A.y}}const b=[...n.children];for(let A=0;A<b.length;A++){const v=b[A].getBoundingClientRect();if(M.clientX<v.left||M.clientX>v.right||M.clientY<v.top||M.clientY>v.bottom)continue;const y=b.length===1?1:A,P=b.length===1?x(0):x(y);return P==null?null:{page:P,x:(M.clientX-v.left)/v.width,y:(M.clientY-v.top)/v.height}}return null}function d(){return h.interaction==="select"||h.interaction==="magnify"}function w(M){if(h.interaction!=="magnify")return g(M);const b=o(M);return g({clientX:b.x,clientY:b.y})}function E(M){if(!h.spreads[h.shown])return null;const A=x(1)===M.page?1:x(0)===M.page?0:-1;if(A<0)return null;const v=A;if(h.flipper)return h.flipper.screenPoint(v,M.x,M.y);const y=[...n.children],P=y.length===1?y[0]:y[v];if(!P)return null;const C=P.getBoundingClientRect();return{x:C.left+M.x*C.width,y:C.top+M.y*C.height}}function _(){t.classList.toggle("is-orbit",h.interaction==="orbit"),t.classList.toggle("is-select",h.interaction==="select"),t.classList.toggle("is-magnify",h.interaction==="magnify"),d()||t.classList.remove("is-over-page"),h.interaction!=="hand"&&t.classList.remove("is-over-grip"),h.interaction==="magnify"?l(0):c()}return{onPage:u,leftToHost:d,aimedPageAt:w,pointOnScreen:E,applyInteraction:_}}function Jv(i,e){const t={},n={};kv(i),t.labels={...fh,...e.labels},t.pages=e.pages,t.firstPageRecto=e.firstPageRecto??!0,t.binding=e.binding??"left",t.mode=e.mode??"auto",t.paper=e.paper??"#fff",t.appearance=e.appearance??{};let s=JSON.stringify(t.pages.map(es));t.appearanceKey="";const r=e.animate??!0,a=e.controls??!0,o=e.showCount??!0;t.interaction=e.interaction??"hand";const l=document.createElement("div");l.className="postext-folio",l.tabIndex=0,l.setAttribute("role","group"),l.setAttribute("aria-roledescription","carousel");const c=document.createElement("button"),h=document.createElement("button");for(const z of[c,h])z.type="button",z.className="postext-folio-nav";const u=document.createElement("div");u.className="postext-folio-spread";const f=document.createElement("p");f.className="postext-folio-count",f.setAttribute("aria-live","polite"),c.classList.add("is-prev"),h.classList.add("is-next"),l.append(u,c,h,f),o||f.classList.add("is-unseen"),a||(c.hidden=h.hidden=!0),i.append(l),t.single=!1,t.spreads=[],t.current=0,t.shown=0,t.flipper=null,t.flipCanvas=null,t.holding=null,t.press=null,t.swipe=null,t.disposed=!1,t.slot={width:0,height:0,deviceWidth:0,deviceHeight:0},t.pageVideos=[],t.pressPoint=null;const p=()=>t.binding==="right",m=z=>(z??[null,null]).filter(K=>K!==null),x=()=>t.single&&!!t.flipper,g=()=>t.spreads.map((z,K)=>t.single?[K===0?null:"",kn(t.pages[z[1]])]:z.map($=>$===null?null:kn(t.pages[$]))),{flipAppearance:d,aspect:w,fit:E,pageEl:_}=Xv({options:e,controls:a,showCount:o,root:l,prevBtn:c,spreadEl:u,count:f,rtl:p,singleGl:x,vs:t,vlate:n}),{applyVideo:M,unplace:b,placeDomVideo:A,render:v,go:y,jump:P,rebuild:C,applyLabels:L}=qv({options:e,animate:r,root:l,prevBtn:c,nextBtn:h,spreadEl:u,count:f,rtl:p,pagesOf:m,singleGl:x,bookOf:g,flipAppearance:d,fit:E,pageEl:_,vs:t,vlate:n});Object.assign(n,{placeDomVideo:A}),Yv({options:e,root:l,prevBtn:c,nextBtn:h,rtl:p,go:y,vs:t,vlate:n});const{zoomNow:I,lensOf:R,heldAt:U,raiseLens:V,hideLens:F,zoomBy:X,scheduleDetail:B,releaseLens:W}=Kv({options:e,root:l,spreadEl:u,rtl:p,pagesOf:m,aspect:w,go:y,vs:t,vlate:n});Object.assign(n,{lensOf:R,raiseLens:V,hideLens:F,zoomBy:X,scheduleDetail:B});const{onPage:ee,leftToHost:le,aimedPageAt:ce,pointOnScreen:De,applyInteraction:Ie}=Zv({options:e,root:l,spreadEl:u,rtl:p,singleGl:x,go:y,heldAt:U,scheduleDetail:B,releaseLens:W,vs:t});Object.assign(n,{onPage:ee,leftToHost:le,aimedPageAt:ce});let Fe=-1;const Q=new ResizeObserver(()=>{if(t.disposed)return;const z=l.clientWidth,K=t.single,$=t.mode==="single"||t.mode==="auto"&&z>0&&z<ph;Fe>=0&&$!==K?C(m(t.spreads[t.shown])[0]??0):E(),Fe=z});return Q.observe(l),L(),Ie(),C(e.at??0),{element:l,goToPage:(z,K)=>(K?.instant?P:y)(js(t.spreads,z)),goToSpread:(z,K)=>(K?.instant?P:y)(z),next:()=>y(t.current+1),prev:()=>y(t.current-1),setLabels(z){t.labels={...t.labels,...z},L(),v()},get pageSize(){return t.slot},resetView(){t.flipper?.resetOrbit()},getView(){return t.flipper?.view()??null},setInteraction(z){z!==t.interaction&&(t.interaction=z,Ie())},setMagnification(z){t.lensZoom=z?Si(z,to,no):null,t.lensAt&&t.flipper?.setLens(R(t.lensAt)),B(250)},getMagnifier(){return{zoom:I(),held:t.lensAt!==null}},holdMagnifier(z){if(!z){F();return}t.interaction!=="magnify"||!t.flipper||(V(),t.lensAt&&t.flipper.setLens(R(t.lensAt)),B(250))},pageAt:ce,pointOnScreen:De,refreshPage(z){t.flipper?.touch(z)},setPageVideo(z){this.setPageVideos(z?[z]:[])},setPageVideos(z){for(const K of t.pageVideos)z.some($=>$.element===K.element)||b(K);t.pageVideos=z.slice(),M()},setAppearance(z){t.appearance={...t.appearance,...z};const K=d(),$=JSON.stringify(K);$!==t.appearanceKey&&(t.appearanceKey=$,t.flipper?.setAppearance(K),E())},get state(){return{spread:t.current,pages:m(t.spreads[t.current])}},setPages(z,K={}){const $=K.at??m(t.spreads[t.shown])[0]??0,j=z.length!==t.pages.length||(K.firstPageRecto??t.firstPageRecto)!==t.firstPageRecto||(K.binding??t.binding)!==t.binding||(K.mode??t.mode)!==t.mode||(K.paper??t.paper)!==t.paper;if(t.pages=z,t.firstPageRecto=K.firstPageRecto??t.firstPageRecto,t.binding=K.binding??t.binding,t.mode=K.mode??t.mode,t.paper=K.paper??t.paper,j)return C($);t.flipper?.setFinishes(mh(t.pages)),t.flipper?.setBook(g(),K.at!==void 0?js(t.spreads,K.at):void 0),B(0);const ae=JSON.stringify(t.pages.map(es));if(t.flipper&&ae!==s){const Pe=d();t.appearanceKey=JSON.stringify(Pe),t.flipper.setAppearance(Pe)}s=ae,K.at!==void 0&&(t.current=t.shown=js(t.spreads,K.at)),t.pageVideos.length&&t.flipper?.setVideos(t.pageVideos.map(Pe=>({src:kn(t.pages[Pe.page]),element:Pe.element,frame:Pe}))),E(),v()},dispose(){t.disposed=!0,clearTimeout(t.detailTimer);for(const z of t.pageVideos)z.element.remove();t.pageVideos=[],Q.disconnect(),t.holding?.(!1),t.flipper?.dispose(),l.remove()}}}function ts(i){return(i.pageIndexOffset??0)%2===0}function $n(i,e){const t=Math.max(0,e.trimOffset);return{width:i.width-2*t,height:i.height-2*t}}function uc(i){const e=i.config.page.backgroundColor.hex;return e&&e!=="transparent"?e:"#fff"}function Qv(i,e){const t=i.pages[0],n=Math.max(0,e?.extraPages?.before??i.pageIndexOffset??0),s=Math.max(0,e?.extraPages?.after??(i.bookPageCount??0)-n-i.pages.length),r=Ch(e&&"folio"in e?e.folio:i.config.folio,i.config.page.sizePreset),a=Zn(r).binding.cover==="pages",o=n+i.pages.length,l=jv(i);return{covers:{front:a&&n===0,back:a&&s===0&&o%2===0},...l?{edgeOutline:l}:{},...t?{pageWidthMm:$n(t,i).width*25.4/(i.config.page.dpi||300)}:{},...e,folio:r,extraPages:{before:n,after:s}}}function jv(i){const e=i.pages.findIndex((m,x)=>!!m.dieCut?.outline?.length&&Rh(i,x)==="recto"),t=i.pages[e],n=t?.dieCut?.outline?.[0];if(!t||!n)return;const s=Ph(n,6)[0];if(!s||s.length<3)return;const r=Math.max(0,i.trimOffset),{width:a,height:o}=$n(t,i),l=i.config.page.binding==="right",c=s.map(m=>[Math.min(1,Math.max(0,l?(r+a-m.x)/a:(m.x-r)/a)),Math.min(1,Math.max(0,(m.y-r)/o))]),h=c.map(([m])=>m<.001),u=c.length,f=h.findIndex((m,x)=>m&&!h[(x+1)%u]);if(f<0)return;const p=[];for(let m=0;m<=u;m++){const x=(f+m)%u;if(p.push([c[x][0],c[x][1]]),m>0&&h[x])break}return p[0][1]>p[p.length-1][1]&&p.reverse(),p}const fc=i=>i?.paper,dc=new WeakMap;function rr(i){let e=dc.get(i);return e===void 0&&(e=JSON.stringify(i),dc.set(i,e)),e}function $v(i,e,t,n){const s=new Map,r=new Map;for(const o of e)i[o]&&r.set(i[o],o);if(r.size===0)return s;let a=null;for(const o of n){const l=t[o];if(!l)continue;let c=r.get(l);c===void 0&&(a??=new Map([...r].map(([h,u])=>[rr(h),u])),c=a.get(rr(l))),c!==void 0&&(s.set(o,c),r.delete(i[c]),a=null)}return s}const ex=()=>typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,tx=700,nx=24e6,ix=120,sx=i=>typeof requestIdleCallback=="function"?requestIdleCallback(i,{timeout:500}):setTimeout(i,50),gh=i=>typeof cancelIdleCallback=="function"?cancelIdleCallback(i):clearTimeout(i),rx=32,pc=new WeakMap;function vh(i,e){let t=pc.get(i);t||pc.set(i,t=new Map);let n=t.get(e);return n||(n=i.pages[e]?.dieCut?.holes.length?Lh(i,e,rx):[],t.set(e,n)),n}function xh(i,e){return vh(i,e).map(t=>t.pageIndex).filter(t=>t>=0)}function ax(i,e){const t=i.pages[e]?.dieCut;return!!t&&(t.holes.length>0||!!t.outline)}function ox(i,e){const t=new Set(e),n=new Set;for(const s of[...t])for(const r of xh(i,s))t.has(r)||(t.add(r),n.add(r));return{keep:t,deep:n}}function lx(i,e,t,n){const s=i.pages[e],r=vh(i,e);if(!s||r.length===0)return;const a=Math.max(0,i.trimOffset),o=s.width-2*a,l=s.height-2*a,c=Math.max(1,Math.round(t)),h=Math.max(1,Math.round(c*l/o)),u=c/o,f=document.createElement("canvas"),p=document.createElement("canvas");f.width=p.width=c,f.height=p.height=h;const m=document.createElement("canvas");m.width=c,m.height=h;const x=f.getContext("2d"),g=p.getContext("2d"),d=m.getContext("2d");if(!x||!g||!d)return;const w=Zn(i.config.folio).binding.coverColor.hex;for(const A of[x,g,d])A.setTransform(u,0,0,u,-a*u,-a*u);for(let A=r.length-1;A>=0;A--){const v=r[A];for(const C of[x,g]){C.save();for(const L of v.clips)C.beginPath(),xc(C,L),C.clip("nonzero")}const y=v.pageIndex>=0?n(v.pageIndex):void 0;y?x.drawImage(y,a,a,o,l):(x.fillStyle=v.pageIndex<0?w:i.pages[v.pageIndex]?.background??"#ffffff",x.fillRect(0,0,s.width,s.height));const P=`rgb(${A+1}, 0, 0)`;y?(d.globalCompositeOperation="copy",d.drawImage(y,a,a,o,l),d.globalCompositeOperation="source-in",d.fillStyle=P,d.fillRect(0,0,s.width,s.height),g.setTransform(1,0,0,1,0,0),g.drawImage(m,0,0)):(g.fillStyle=P,g.fillRect(0,0,s.width,s.height)),x.restore(),g.restore()}let E,_;try{E=x.getImageData(0,0,c,h).data,_=g.getImageData(0,0,c,h).data}catch{return}finally{for(const A of[f,p,m])A.width=A.height=0}const M=new Uint8ClampedArray(c*h*4),b=cx(i,r,c,h,u,a);for(let A=0;A<M.length;A+=4){const v=_[A+3]>=128?_[A]:0;M[A]=E[A],M[A+1]=E[A+1],M[A+2]=E[A+2],M[A+3]=v}return{width:c,height:h,data:M,layers:r.length,...b?{cuts:b}:{},...r[r.length-1].pageIndex<0?{end:!0}:{}}}function cx(i,e,t,n,s,r){const a=new Uint8ClampedArray(t*n*4),o=document.createElement("canvas");o.width=t,o.height=n;const l=o.getContext("2d",{willReadFrequently:!0});if(l){try{for(let c=1;c<=Math.min(e.length,32);c++){const h=e[c-1].pageIndex,u=h>=0?i.pages[h]?.dieCut?.holes:void 0,f=u?.length?Dh(u):void 0;if(!u||!f)continue;const p=Math.max(0,Math.floor((f.x-r)*s)-1),m=Math.max(0,Math.floor((f.y-r)*s)-1),x=Math.min(t,Math.ceil((f.x+f.width-r)*s)+1),g=Math.min(n,Math.ceil((f.y+f.height-r)*s)+1);if(x<=p||g<=m)continue;l.setTransform(1,0,0,1,0,0),l.clearRect(0,0,t,n),l.setTransform(s,0,0,s,-r*s,-r*s),l.fillStyle="#000",l.beginPath(),xc(l,u),l.fill("nonzero");const d=l.getImageData(p,m,x-p,g-m).data,w=c-1>>3,E=1<<(c-1&7);for(let _=m;_<g;_++)for(let M=p;M<x;M++){if(d[((_-m)*(x-p)+(M-p))*4+3]<128)continue;const b=(_*t+M)*4+w;a[b]=a[b]|E}}}catch{return}finally{o.width=o.height=0}return a}}const mc=new WeakMap;let hx=1;const ux=i=>{if(!i)return 0;let e=mc.get(i);return e||mc.set(i,e=hx++),e},gc=new WeakMap;function fx(i,e,t,n){const s=`${Math.round(t)}|${xh(i,e).map(l=>ux(n(l))).join(",")}`;let r=gc.get(i);r||gc.set(i,r=new Map);const a=r.get(e);if(a?.key===s)return a.through;const o=lx(i,e,t,n);return r.set(e,{key:s,through:o}),o}const dx=160;function px(i,e,t,n){if(!i){const c=e.length?e:[0];if(Math.abs((t[0]??0)-(c[0]??0))>Zs)return{run:{from:c,block:t},pages:[...c]};i={from:c,block:null}}const s=i.block??i.from,r=Math.max(0,Math.min(...s,...t)-1),a=Math.min(n-1,Math.max(...s,...t)+1),o=[];for(let c=r;c<=a;c++)o.push(c);(t[0]??0)<(s[0]??0)&&o.reverse();const l=i.block?[...i.from,...o]:o;return{run:i,pages:l.slice(0,dx)}}const mx=8;function gx(i){const{options:e,reach:t,slotWidth:n,sources:s,ds:r,dlate:a}=i;function o(){const E=new Set,_=2*t+1;for(const M of r.focus)for(let b=M-_;b<=M+_;b++)b>=0&&b<r.current.pages.length&&E.add(b);for(const M of r.sweep)E.add(M);return ox(r.current,E)}const l=()=>o().keep,c=(E,_,M)=>M.has(E)?Math.max(1,Math.round(_/2)):_,h=(E,_,M)=>{const b=r.painted.get(E);return M.has(E)?(b??0)<c(E,_,M):b!==_};function u(E,_){const M=r.current.pages[E];if(!M)return;const b=document.createElement("canvas"),A=_/$n(M,r.current).width;_c(M,r.current,b,{trim:!0,output:"folio",scale:A,singleInk:e.singleInk,pageNegative:e.pageNegative,...e.forms?{forms:e.forms}:{},...e.printPreview?{printPreview:e.printPreview}:{}});const v=Ih(M,r.current,{trim:!0,scale:A/2});v&&r.masks.set(b,v);const y=r.canvases[E];y&&(y.width=y.height=0),r.canvases[E]=b,r.painted.set(E,_),f(r.decorated[E]),r.decorated[E]=null,p(E)}const f=E=>{E&&(E.width=E.height=0)};function p(E){const _=e.decorate,M=r.canvases[E],b=r.current.pages[E];if(!_||!M||!b)return!1;let A=r.decorated[E];const v=!A;A??=document.createElement("canvas"),(A.width!==M.width||A.height!==M.height)&&(A.width=M.width,A.height=M.height);const y=A.getContext("2d");if(!y)return!1;y.setTransform(1,0,0,1,0,0),y.globalCompositeOperation="source-over",y.globalAlpha=1,y.drawImage(M,0,0);const P=Math.max(0,r.current.trimOffset),C=M.width/$n(b,r.current).width;y.setTransform(C,0,0,C,-P*C,-P*C),y.save();const L=_(E,y);return y.restore(),!L&&v?!1:(r.decorated[E]=A,v)}function m(E){if(!r.ready)return;const _=n(),M=l();let b=!1;for(const A of E)A<0||A>=r.current.pages.length||r.painted.get(A)===_||(u(A,_),b=!0);for(const A of[...r.painted.keys()]){if(M.has(A))continue;const v=r.canvases[A];v&&(v.width=v.height=0),r.canvases[A]=null,f(r.decorated[A]),r.decorated[A]=null,r.painted.delete(A),b=!0}b&&a.viewer.setPages(s()),d()}function x(E){const _=px(r.run,r.settled,E,r.current.pages.length);r.run=_.run,r.sweep=_.pages,cancelAnimationFrame(r.sweepFrame),r.sweepFrame=requestAnimationFrame(g)}function g(){r.sweepFrame=0;const E=n(),_=performance.now();let M=!1;for(const b of r.sweep)if(r.painted.get(b)!==E&&(u(b,E),M=!0,performance.now()-_>mx))break;M&&(a.viewer.setPages(s()),r.sweepFrame=requestAnimationFrame(g))}function d(){gh(r.idle),r.idle=sx(()=>{const E=n(),_=v=>Math.min(...r.focus.map(y=>Math.abs(v-y))),{keep:M,deep:b}=o(),A=[...M].filter(v=>h(v,E,b)).sort((v,y)=>_(v)-_(y)).slice(0,4);if(A.length){for(const v of A)u(v,c(v,E,b));a.viewer.setPages(s()),d()}})}return{wanted:l,paint:u,free:f,decorate:p,refresh:m,startSweep:x,around:E=>{const _=E.pages.length?E.pages:[0];return[..._,_[0]-2,_[0]-1,_[_.length-1]+1,_[_.length-1]+2]}}}function vx(i){const{options:e,ds:t,dlate:n}=i;let s=new Map;t.players=[];const r=new Set,a=new Set,o=v=>{let y=s.get(v);if(!y){const P=t.current.pages[v];y=P?Oh(P,t.current):[],s.set(v,y)}return y},l=v=>{const y=v.video;if(y.source==="file")return(y.fileId?e.videoUrl?.(y.fileId):void 0)??y.link},c=v=>e.videos===!1?void 0:o(v.page).find(y=>l(y)&&Fh(y,v.x,v.y)),h=(v,y)=>t.players.find(P=>P.page===v&&P.spot.key===y.key),u=v=>n.viewer.state.pages.includes(v.page),f=(v,y)=>{e.onVideo?.({resourceId:v.spot.resourceId,page:v.page,state:y})};function p(){n.viewer.setPageVideos(t.players.filter(v=>v.shown).map(v=>({page:v.page,element:v.element,origin:v.spot.origin,across:v.spot.across,down:v.spot.down,...v.spot.crop?{crop:v.spot.crop}:{}})))}function m(v,y="stopped"){t.players.includes(v)&&(t.players=t.players.filter(P=>P!==v),f(v,y),v.element.pause(),v.release?.(),v.shown&&p(),g(v))}function x(){for(const v of[...t.players])m(v)}function g(v){if(!v.alongside){for(const y of t.players)y.heldBy===v&&(y.heldBy=null,u(y)&&y.element.play().catch(()=>{}));t.turning||b(n.viewer.state.pages,{exclusive:!1})}}function d(v){if(v.heldBy=null,!v.alongside)for(const C of t.players)C.heldBy&&(C.heldBy=v);const y=[...t.players.filter(C=>C!==v),v].map(C=>({q:C,alongside:C.alongside,paused:C.element.paused})),P=kh(y[y.length-1],y);for(const{q:C}of P.hold)C.heldBy=v,C.element.pause();for(const{q:C}of P.pause)C.element.pause();for(const{q:C}of P.stop)m(C)}function w(v,y,P=!1){const C=l(y);if(!C)return;const L=y.video.player,I=L.exclusive===!1,R=document.createElement("video");R.playsInline=!0,R.preload="auto",/^(blob|data):/i.test(C)||(R.crossOrigin="anonymous");const U={start:y.video.start??0,end:y.video.end};R.loop=L.loop&&!U.start;const V=navigator.userActivation?.hasBeenActive??!1;R.muted=L.muted||P&&(I||!V);const F={page:v,spot:y,element:R,shown:!1,autoMuted:!L.muted&&R.muted,alongside:I,heldBy:null};t.players=[...t.players,F],d(F);const X=()=>t.players.includes(F);R.addEventListener("error",()=>X()&&m(F,"error")),R.addEventListener("loadedmetadata",()=>{U.start&&(R.currentTime=U.start)},{once:!0}),R.addEventListener("loadeddata",()=>{X()&&(F.shown=!0,p())},{once:!0}),R.addEventListener("play",()=>X()&&d(F)),R.addEventListener("playing",()=>X()&&f(F,"playing")),R.addEventListener("pause",()=>{!X()||R.ended||(f(F,"paused"),g(F))});const B=()=>{X()&&(L.loop?(R.currentTime=U.start,R.play().catch(()=>{})):m(F))};R.addEventListener("ended",B),R.addEventListener("timeupdate",()=>{U.end&&R.currentTime>=U.end&&B()});const W=n.viewer.pageSize,ee=Math.max(Math.hypot(y.down.x*W.deviceWidth,y.down.y*W.deviceHeight),Math.hypot(y.across.x*W.deviceWidth,y.across.y*W.deviceHeight));Uh(R,C,{hls:Nh(y.video,C),maxHeight:ee,corsTag:!0}).then(le=>{if(!X())return le();F.release=le,!F.heldBy&&R.play().catch(ce=>{if(X()){if(ce?.name==="NotAllowedError"&&!R.muted)return R.muted=!0,F.autoMuted=!L.muted,R.play();throw ce}}).catch(()=>X()&&m(F,"error"))},()=>X()&&m(F,"error"))}function E(v){const y=c(v);if(!y)return!1;const P=h(v.page,y);return P?_(P):w(v.page,y),!0}function _(v){if(v.autoMuted&&!v.element.paused){v.autoMuted=!1,v.element.muted=!1;return}v.element.paused?v.element.play().catch(()=>{}):v.element.pause()}t.autoTimer=0;const M=()=>{clearTimeout(t.autoTimer),t.autoTimer=window.setTimeout(()=>{t.turning||b(n.viewer.state.pages)},tx)};function b(v,{exclusive:y=!0}={}){if(e.videos===!1)return;const P={players:t.players.map(C=>({page:C.page,key:C.spot.key,alongside:C.alongside,paused:C.element.paused,shown:C.shown})),autoplayed:r,autoStarted:a};for(const{page:C,spot:L}of Bh(v,o,I=>!!l(I),P,{exclusive:y,reducedMotion:ex()}))L.video.player.exclusive===!1?a.add(Mc(C,L.key)):r.add(L.key),w(C,L,!0)}function A(){s=new Map;let v=!1;for(const y of[...t.players]){const P=[y.page,...n.viewer.state.pages];for(let L=0;L<t.current.pages.length;L++)P.push(L);const C=P.find(L=>o(L).some(I=>I.key===y.spot.key&&l(I)===l(y.spot)));if(C===void 0||!t.turning&&!n.viewer.state.pages.includes(C)){m(y);continue}y.page=C,y.spot=o(C).find(L=>L.key===y.spot.key&&l(L)===l(y.spot)),v||=y.shown}v&&p()}return{autoplayed:r,autoStarted:a,spotsOf:o,urlOf:l,spotAt:c,stopPlayer:m,stopVideos:x,startVideo:w,toggleVideoAt:E,togglePlaying:_,scheduleAutoplay:M,followVideos:A}}function xx(i){const{options:e,free:t,ds:n,dlate:s}=i,r=new Map;let a=Promise.resolve();const o=new Set;n.sharpFrame=0;function l(p,m){const x=e.decorate,g=m.doc.pages[p],d=m.canvas.getContext("2d");if(!x||!g||!d)return!1;if(m.bare)d.setTransform(1,0,0,1,0,0),d.globalCompositeOperation="source-over",d.globalAlpha=1,d.drawImage(m.bare,0,0);else{const M=document.createElement("canvas");M.width=m.canvas.width,M.height=m.canvas.height,M.getContext("2d")?.drawImage(m.canvas,0,0),m.bare=M}const w=Math.max(0,m.doc.trimOffset),E=m.canvas.width/$n(g,m.doc).width;d.setTransform(E,0,0,E,-w*E,-w*E),d.save();const _=x(p,d);return d.restore(),d.setTransform(1,0,0,1,0,0),_||(t(m.bare),m.bare=null),_}function c(){n.sharpFrame=0;for(const p of o){const m=r.get(p);!m||m.doc!==n.current||(l(p,m),s.viewer.refreshPage(m.canvas))}o.clear()}function h(p,m){const x=a.then(()=>new Promise(g=>{setTimeout(()=>{const d=n.current.pages[p];if(!d)return g(null);const w=$n(d,n.current),E=Math.max(1,Math.min(m,Math.round(w.width*1.5),Math.floor(Math.sqrt(nx*w.width/w.height)))),_=r.get(p);if(_&&_.doc===n.current&&_.width>=E)return g(_.canvas);const M=document.createElement("canvas"),b=E/w.width;_c(d,n.current,M,{trim:!0,output:"folio",scale:b,singleInk:e.singleInk,pageNegative:e.pageNegative,...e.forms?{forms:e.forms}:{},...e.printPreview?{printPreview:e.printPreview}:{}});const A={canvas:M,bare:null,width:E,doc:n.current};l(p,A),_&&u(_),r.delete(p),r.set(p,A);for(const[v,y]of r){if(r.size<=4)break;u(y),r.delete(v)}g(M)},0)}));return a=x.catch(()=>{}),x}function u(p){t(p.canvas),t(p.bare)}function f(){for(const p of r.values())u(p);r.clear(),o.clear(),cancelAnimationFrame(n.sharpFrame),n.sharpFrame=0}return{sharp:r,sharpDirty:o,redecorateSharp:c,paintSharp:h,releaseSharp:f}}const vc={lead:0,trail:0,pad:0};function ia(i,e){const t=e?.coverFaces;if(!t||!t.front&&!t.back)return vc;const n=Zn(e&&"folio"in e?e.folio:i.config.folio).binding;if(n.cover==="pages"||n.type==="saddleStitch"||n.type==="folded")return vc;const s=i.pages.length,r=e?.extraPages?.before??i.pageIndexOffset??0,a=e?.extraPages?.after??Math.max(0,(i.bookPageCount??0)-r-s),o=t.front&&r===0&&ts(i)?t.front:void 0,l=t.back&&a===0?t.back:void 0,c=o?2:0,h=o?!0:ts(i),u=l&&(c+s)%2===(h?1:0)?1:0;return{lead:c,trail:l?u+2:0,pad:u,...o?{front:o,...t.frontAlt?{frontAlt:t.frontAlt}:{}}:{},...l?{back:l,...t.backAlt?{backAlt:t.backAlt}:{}}:{}}}function _h(i,e){if(!e.lead&&!e.trail)return i;const t=(n,s)=>s?{src:n,alt:s}:n;return[...e.front?[t(e.front,e.frontAlt),""]:[],...i,...e.back?[...e.pad?[""]:[],"",t(e.back,e.backAlt)]:[]]}function _x(i,e){return!e.lead&&!e.trail?i:{...i,covers:{front:!!e.front,back:!!e.back}}}function Mx(i,e){const t=n=>{const s=n-i().lead;return s>=0&&s<e()?s:void 0};return{toView:n=>n+i().lead,toDoc:t,state(n){const{lead:s}=i();if(!s&&!i().trail)return n;const r=n.pages.map(t).filter(u=>u!==void 0),a=e(),o=n.pages[0]??0;!r.length&&a&&r.push(o<s?0:a-1);const l=s+a+i().trail-1,c=n.pages.length===1&&i().front&&o===0?"front":n.pages.length===1&&i().back&&o===l?"back":void 0,h={front:!!i().front,back:!!i().back,...c?{closed:c}:{}};return{spread:s?Math.max(0,n.spread-1):n.spread,pages:r,cover:h}},point(n){if(!n)return n;const s=t(n.page);return s===void 0?null:{...n,page:s}}}}function Sx(i,e,t,n){const s=i?.count??e;return{...i,count:r=>{const a=r.map(t.toDoc).filter(o=>o!==void 0);return a.length?s(a,n()):""}}}function yx(i,e,t){const n=Object.create(i);return Object.assign(n,{goToPage:(s,r)=>{const a=e.state(i.state);r?.instant&&a.cover?.closed&&a.pages[0]===s||i.goToPage(e.toView(s),r)},goToSpread:(s,r)=>i.goToSpread(s+(t().lead?1:0),r),setPages:(s,r)=>{const a=t();i.setPages(_h(s,a),{...r,...r?.at!==void 0?{at:e.toView(r.at)}:{},...a.lead&&r&&"firstPageRecto"in r?{firstPageRecto:!0}:{}})},setPageVideo:s=>i.setPageVideo(s?{...s,page:e.toView(s.page)}:null),setPageVideos:s=>i.setPageVideos(s.map(r=>({...r,page:e.toView(r.page)}))),pageAt:s=>e.point(i.pageAt(s)),pointOnScreen:s=>i.pointOnScreen({...s,page:e.toView(s.page)})}),Object.defineProperty(n,"state",{get:()=>e.state(i.state)}),n}function wx(i,e,t={}){const n={},s={},r=t.window??3;n.current=e,n.canvases=[],n.masks=new WeakMap,n.decorated=[],n.painted=new Map,n.focus=[t.at??0],n.idle=0,n.settled=[],n.sweep=[],n.sweepFrame=0,n.run=null,n.turning=!1;let a=0;n.ready=!1;let o=t.appearance,l=ia(e,o);const c=Mx(()=>l,()=>n.current.pages.length),h=$=>Sx($,fh.count,c,()=>n.current.pages.length),u=()=>_x(Qv(n.current,o),l),f=()=>K.pageSize.deviceWidth,p=($,j)=>{const ae=n.masks.get(j),Pe=ax(n.current,$);if(!ae&&!Pe)return;const we=Pe?fx(n.current,$,j.width/2,Oe=>n.canvases[Oe]):void 0;return{...ae?{mask:ae}:{},...Pe?{cut:Pe}:{},...we?{through:we}:{}}},m=()=>n.current.pages.map(($,j)=>{const ae=n.canvases[j],Pe=fc(n.current.pages[j]);if(n.painted.has(j)&&ae){const we=p(j,ae);return{src:n.decorated[j]??ae,alt:t.alt?.(j)??`Page ${j+1}`,...Pe?{paper:Pe}:{},...we?{finish:we}:{}}}return Pe?{src:"",paper:Pe}:""}),{wanted:x,paint:g,free:d,decorate:w,refresh:E,startSweep:_,around:M}=gx({options:t,reach:r,slotWidth:f,sources:m,ds:n,dlate:s}),{autoplayed:b,autoStarted:A,spotsOf:v,urlOf:y,spotAt:P,stopPlayer:C,stopVideos:L,startVideo:I,toggleVideoAt:R,togglePlaying:U,scheduleAutoplay:V,followVideos:F}=vx({options:t,ds:n,dlate:s}),{sharp:X,sharpDirty:B,redecorateSharp:W,paintSharp:ee,releaseSharp:le}=xx({options:t,free:d,ds:n,dlate:s}),ce=$=>l.front&&$===0?l.front:l.back&&$===l.lead+n.current.pages.length+l.trail-1?l.back:"",De=($,j,ae)=>$==="front"&&l.lead&&j===0?-l.lead:$==="back"&&l.trail&&j===ae-1?ae+l.trail-1:j,Ie=()=>{const $=l,j=c.state(z.state),ae=j.pages[0]??0;if(l=ia(n.current,o),z.setAppearance(u()),$.front===l.front&&$.back===l.back&&$.lead===l.lead&&$.trail===l.trail)return;const Pe=ae===0&&!$.lead&&l.lead?-l.lead:De(j.cover?.closed,ae,n.current.pages.length);K.setPages(m(),{at:Pe,firstPageRecto:ts(n.current)}),n.focus=K.state.pages,n.turning||(n.settled=K.state.pages),E(M(K.state)),t.onChange?.(K.state)},Fe=e.pages[0],Q=t.detail??{paint:ee,release:le},z=Jv(i,{...t,labels:h(t.labels),detail:{...Q,paint:($,j)=>{const ae=c.toDoc($);return ae!==void 0?Q.paint(ae,j):ce($)}},pages:_h(e.pages.map($=>{const j=fc($);return j?{src:"",paper:j}:""}),l),appearance:u(),aspect:Fe?($=>$.width/$.height)($n(Fe,e)):void 0,firstPageRecto:l.lead?!0:ts(e),binding:e.binding==="right"?"right":"left",paper:t.paper??uc(e),...t.at!==void 0?{at:t.at===0&&l.lead?0:c.toView(t.at)}:{},onTarget:$=>{const j=c.state($);n.focus=j.pages,n.turning=!0,_(j.pages),E(M(j)),t.onTarget?.(j)},onPageClick:$=>{const j=c.point($);return!!j&&(R(j)||!!t.onPageClick?.(j))},isPageAction:$=>{const j=c.point($);return!!j&&(!!P(j)||!!t.isPageAction?.(j))},onChange:$=>{const j=c.state($);for(const ae of[...n.players])j.pages.includes(ae.page)||C(ae);for(const ae of[...A])j.pages.some(Pe=>ae.startsWith(Mc(Pe,"")))||A.delete(ae);V(),n.focus=j.pages,n.settled=j.pages,n.turning=!1,n.sweep=[],n.run=null,cancelAnimationFrame(n.sweepFrame),E([]),t.onChange?.(j)},onLayout:$=>{t.onLayout?.($),n.ready&&(clearTimeout(a),a=window.setTimeout(()=>E(M(K.state)),ix))}}),K=yx(z,c,()=>l);return Object.assign(s,{viewer:K}),n.ready=!0,n.focus=K.state.pages,n.settled=K.state.pages,E(M(K.state)),V(),globalThis.__postextFolioPreserve&&(globalThis.__postextFolioVideos={playing:()=>n.players,autoplayed:b,spots:$=>v($),state:()=>K.state,turning:()=>n.turning}),K.element.addEventListener("keydown",$=>{if($.target!==K.element||$.key!==" "&&$.key!=="Enter"||t.videos===!1)return;const j=K.state.pages,ae=n.players.filter(we=>j.includes(we.page)),Pe=ae.find(we=>!we.alongside)??ae[0];if(Pe)U(Pe);else{const we=j.find(Oe=>v(Oe).some(Qe=>y(Qe)));if(we===void 0)return;I(we,v(we).find(Oe=>y(Oe)))}$.preventDefault()}),{element:K.element,goToPage:K.goToPage,goToSpread:K.goToSpread,next:K.next,prev:K.prev,setPages:K.setPages,refreshPage:K.refreshPage,setPageVideo:K.setPageVideo,setPageVideos:K.setPageVideos,toggleVideoAt:R,stopVideo:L,setLabels:$=>z.setLabels(h($)),resetView:K.resetView,getView:K.getView,setInteraction:K.setInteraction,setMagnification:K.setMagnification,getMagnifier:K.getMagnifier,holdMagnifier:K.holdMagnifier,pageAt:K.pageAt,pointOnScreen:K.pointOnScreen,setAppearance($){o={...o,...$},Ie()},get pageSize(){return K.pageSize},get state(){return K.state},setDocument($,j={}){j.appearance&&(o={...o,...j.appearance});const ae=Math.max(0,Math.min($.pages.length-1,j.at??K.state.pages[0]??0)),Pe=K.state.cover?.closed,we=n.current,Oe=n.canvases,Qe=n.decorated,Ge=n.painted;if(n.current=$,n.canvases=[],n.decorated=[],n.painted=new Map,n.focus=[ae],!j.repaint&&($.config===we.config||rr($.config)===rr(we.config)))for(const[Ke,tt]of $v(we.pages,[...Ge.keys()],$.pages,x())){const ft=Oe[tt];ft&&(n.canvases[Ke]=ft,n.painted.set(Ke,Ge.get(tt)),Oe[tt]=null,n.decorated[Ke]=Qe[tt]??null,Qe[tt]=null)}const gt=f();for(let Ke=ae-2;Ke<=ae+3;Ke++)Ke>=0&&Ke<$.pages.length&&n.painted.get(Ke)!==gt&&g(Ke,gt);for(const Ke of Oe)Ke&&(Ke.width=Ke.height=0);for(const Ke of Qe)d(Ke);for(const Ke of n.painted.keys())w(Ke);l=ia($,o),z.setAppearance(u()),K.setPages(m(),{firstPageRecto:ts($),binding:$.binding==="right"?"right":"left",paper:t.paper??uc($),at:De(Pe,ae,$.pages.length)}),n.focus=K.state.pages,n.turning||(n.settled=K.state.pages,n.sweep=[],n.run=null),E(M(K.state)),F(),V()},redecorate($){const j=$?[...$]:null;let ae=!1;for(const Pe of j??[...n.painted.keys()]){if(!n.painted.has(Pe))continue;const we=n.decorated[Pe];w(Pe)?ae=!0:we&&K.refreshPage(we)}ae&&K.setPages(m());for(const Pe of j??[...X.keys()])X.has(Pe)&&B.add(Pe);B.size&&!n.sharpFrame&&(n.sharpFrame=requestAnimationFrame(W))},dispose(){clearTimeout(n.autoTimer),L(),gh(n.idle),cancelAnimationFrame(n.sweepFrame),clearTimeout(a),K.dispose(),le();for(const $ of n.canvases)$&&($.width=$.height=0);for(const $ of n.decorated)d($);n.canvases=[],n.decorated=[],n.painted.clear()}}}export{Zs as B,so as C,Qt as D,na as F,yi as G,yt as H,tr as L,sa as M,St as N,ti as O,Vt as P,bt as S,Xc as T,it as V,r0 as W,G as a,ls as b,wx as c,ra as d,rt as e,jt as f,Ne as g,Mt as h,mt as i,fn as j,qt as k,En as l,Fv as m,Ov as n,Jv as o,ts as p,K0 as q,qi as r,js as s,Bv as t};
