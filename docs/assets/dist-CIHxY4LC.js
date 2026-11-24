import{V as q,a as C,S as T,D as R,b as B,P as V,G as X,O as G,d as D,M as z,C as I,T as Z,W as Y,L as $,e as y,f as b,g as j,h as K,N as W,H as J,i as Q,B as tt,j as et,k as st}from"./postext-C2VJv1Ko.js";import{F as xt,l as Mt,m as yt,n as Pt,o as St,c as bt,p as Ft,q as At,r as kt,s as Lt,t as Tt}from"./postext-C2VJv1Ko.js";import{hV as mt}from"./index-Cr1e9c2I.js";import{hW as Ct,hX as Bt,E as Dt,F as zt}from"./index-Cr1e9c2I.js";const F=96,H=120,_=26,at=.11,A=1e3,it=.14,rt=l=>l<.5?4*l*l*l:1-Math.pow(-2*l+2,3)/2,ot=l=>1-Math.pow(1-l,3),O=(l,e,t)=>{const s=Math.min(1,Math.max(0,(t-l)/(e-l)));return s*s*(3-2*s)};function nt(l,e,t,s){const i=l.u-e.u,r=l.v-e.v,o=Math.hypot(i,r);if(o<.5)return null;const a={u:i/o,v:r/o},h=P(l,e),n=at*t*(.3+.7*O(0,.2,h))*(1-O(.62,1,h))*Math.min(1,o/(.1*t)),u=Math.PI*n;let d=(o+u*Math.min(1,u>0?o/u:0))/2;for(const f of[-s/2,s/2])d=Math.min(d,l.u*a.u+(l.v-f)*a.v);return d<=0?null:{F:{u:l.u-a.u*d,v:l.v-a.v*d},n:a,R:n}}function P(l,e){return Math.min(1,Math.max(0,(l.u-e.u)/(2*l.u)))}function k(l,e,t){let{u:s,v:i}=e;for(let r=0;r<4;r++)for(const o of[-t/2,t/2]){const a=Math.hypot(l.u,l.v-o),h=Math.hypot(s,i-o);h>a&&(s*=a/h,i=o+(i-o)*a/h)}return{u:s,v:i}}function ht(l,e,t,s,i,r){const o=l.attributes.position,a=t?1:-1;for(let h=0;h<=H;h++){const n=(.5-h/H)*i;for(let u=0;u<=F;u++){const d=u/F*s;let f=d,c=n,p=0;if(e){const{F:w,n:m,R:v}=e,g=(d-w.u)*m.u+(n-w.v)*m.v;if(g>0){let M;v<.001?M=-g:g<Math.PI*v?(M=v*Math.sin(g/v),p=v*(1-Math.cos(g/v))):(M=-(g-Math.PI*v),p=2*v),f=d-m.u*(g-M),c=n-m.v*(g-M)}}o.setXYZ(h*(F+1)+u,a*f,c,p+r)}}o.needsUpdate=!0,l.computeVertexNormals()}const S=new C(-.22,.3,1).normalize(),E=`
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPos;
  void main() {
    vUv = uv;
    vNormal = normal;
    vPos = position;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`,N=`
  uniform sampler2D uShadowMap;
  uniform vec4 uShadowBox;
  uniform vec3 uLd;
  uniform float uShadowOn;

  float casterAt(vec2 s) {
    vec2 uv = (s - uShadowBox.xy) / uShadowBox.zw;
    if (uv.x < 0.0 || uv.y < 0.0 || uv.x > 1.0 || uv.y > 1.0) return -1e4;
    return texture2D(uShadowMap, uv).r - 10.0;
  }

  // How much of the sky paper lifted nearby hides: 0 … 1.
  float occlusionAt(vec3 p, vec2 s, float spin) {
    float occ = 0.0;
    for (int i = 0; i < 16; i++) {
      float a = float(i) * 2.39996 + spin;
      float r = sqrt((float(i) + 0.5) / 16.0) * 72.0;
      float h = casterAt(s + r * vec2(cos(a), sin(a)));
      occ += clamp((h - p.z - 2.5) / (r + 14.0), 0.0, 1.0);
    }
    return occ / 16.0;
  }

  // The light lost at p: 0 … about 0.6.
  float shadowAt(vec3 p) {
    if (uShadowOn < 0.5) return 0.0;
    vec2 s = p.xy - uLd.xy / uLd.z * p.z;
    float spin = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453) * 6.2831;
    float ambient = 0.34 * occlusionAt(p, s, spin);
    const float bias = 2.5;
    float sum = 0.0;
    float found = 0.0;
    for (int i = 0; i < 12; i++) {
      float a = float(i) * 2.39996 + spin;
      vec2 o = sqrt((float(i) + 0.5) / 12.0) * vec2(cos(a), sin(a));
      float h = casterAt(s + o * 16.0);
      if (h > p.z + bias) {
        sum += h;
        found += 1.0;
      }
    }
    if (found < 0.5) return ambient;
    float gap = sum / found - p.z;
    float spread = clamp(gap * 0.3, 1.5, 40.0);
    float hit = 0.0;
    for (int i = 0; i < 16; i++) {
      float a = float(i) * 2.39996 + spin;
      vec2 o = sqrt((float(i) + 0.5) / 16.0) * vec2(cos(a), sin(a));
      if (casterAt(s + o * spread) > p.z + bias) hit += 1.0;
    }
    // Paper high above casts a paler shadow (more light gets round it).
    float direct = 0.4 * hit / 16.0 * (1.0 - 0.4 * smoothstep(30.0, 300.0, gap));
    return min(0.6, 1.0 - (1.0 - direct) * (1.0 - ambient));
  }
`,lt=`
  uniform sampler2D uFront;
  uniform sampler2D uBack;
  // 0 no page, 1 its image, 2 blank paper.
  uniform float uHasFront;
  uniform float uHasBack;
  uniform vec3 uPaper;
  uniform float uBlank;
  uniform float uLit;
  uniform float uMirror;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPos;
  ${N}

  float spine(float u, float a0, float a1) {
    if (u < 0.03) return mix(a0, a1, u / 0.03);
    if (u < 0.09) return mix(a1, 0.0, (u - 0.03) / 0.06);
    return 0.0;
  }

  void main() {
    bool front = gl_FrontFacing;
    float has = front ? uHasFront : uHasBack;
    vec3 col;
    if (has < 0.5 && uBlank < 0.5) discard;
    if (has < 0.5 || has > 1.5) {
      col = uPaper;
    } else {
      float u = uMirror > 0.5 ? 1.0 - vUv.x : vUv.x;
      vec4 page = front ? texture2D(uFront, vec2(u, vUv.y)) : texture2D(uBack, vec2(1.0 - u, vUv.y));
      // A page cut to a shape (a die-cut leaf's rounded corners, #1586) is
      // transparent past its outline: nothing of the leaf there.
      if (page.a < 0.5) discard;
      col = page.rgb;
    }
    // uv.x is the distance from the spine on both faces.
    col *= 1.0 - (front ? spine(vUv.x, 0.18, 0.05) : spine(vUv.x, 0.16, 0.04));

    vec3 p = vPos;
    if (uLit > 0.5) {
      vec3 n = normalize(vNormal) * (front ? 1.0 : -1.0);
      col *= mix(0.6, 1.0, clamp(dot(n, uLd) / uLd.z, 0.0, 1.0));
      // Look the shadow up a little off the surface (no self-shadow acne).
      p += n * 2.0;
    }
    col *= 1.0 - shadowAt(p);
    gl_FragColor = vec4(col, 1.0);
  }
`,ut=`
  uniform float uW;
  uniform float uH;
  uniform vec2 uPages;
  varying vec2 vUv;
  varying vec3 vNormal;
  varying vec3 vPos;
  ${N}

  float erf(float x) {
    float a = abs(x);
    float t = 1.0 / (1.0 + 0.3275911 * a);
    float y = 1.0 - (((((1.061405429 * t - 1.453152027) * t) + 1.421413741) * t - 0.284496736) * t + 0.254829592) * t * exp(-a * a);
    return sign(x) * y;
  }
  float band(float x, float lo, float hi, float sigma) {
    return 0.5 * (erf((x - lo) / (sigma * 1.4142)) - erf((x - hi) / (sigma * 1.4142)));
  }
  // box-shadow: 0 1px 1px .35, 0 16px 36px -8px .65 (CSS y runs down).
  float page(vec2 p, float x0, float x1) {
    float h = uH / 2.0;
    float soft = 0.65 * band(p.x, x0 + 8.0, x1 - 8.0, 18.0) * band(p.y + 16.0, -h + 8.0, h - 8.0, 18.0);
    float hard = 0.35 * band(p.x, x0, x1, 0.5) * band(p.y + 1.0, -h, h, 0.5);
    return 1.0 - (1.0 - soft) * (1.0 - hard);
  }

  void main() {
    vec2 p = vPos.xy;
    float clear = 1.0;
    if (uPages.x > 0.5) clear *= 1.0 - page(p, -uW, 0.0);
    if (uPages.y > 0.5) clear *= 1.0 - page(p, 0.0, uW);
    clear *= 1.0 - 1.3 * shadowAt(vPos);
    gl_FragColor = vec4(0.0, 0.0, 0.0, 1.0 - clear);
  }
`,dt=`
  uniform vec3 uLd;
  varying float vZ;
  void main() {
    vZ = position.z;
    vec2 s = position.xy - uLd.xy / uLd.z * position.z;
    gl_Position = projectionMatrix * viewMatrix * vec4(s, 0.0, 1.0);
  }
`,ft=`
  varying float vZ;
  void main() {
    gl_FragColor = vec4(vZ + 10.0, 0.0, 0.0, 1.0);
  }
`,x={uShadowMap:{value:null},uShadowBox:{value:new q(0,0,1,1)},uLd:{value:S},uShadowOn:{value:0}},U={uPaper:{value:new C(1,1,1)}};function L(l,e){return new T({vertexShader:E,fragmentShader:lt,side:R,uniforms:{uFront:{value:null},uBack:{value:null},uHasFront:{value:0},uHasBack:{value:0},uBlank:{value:l?1:0},uLit:{value:l?1:0},uMirror:{value:e?1:0},...x,...U}})}class vt{canvas;spread;book;onSettle;onTarget;renderer;scene=new B;camera=new V(_,1,1,1e4);left;right;desk;stage=new X;sign;light;shadowScene=new B;shadowCamera=new G(-1,1,1,-1,1,1e3);shadowTarget=null;casterMaterial=new T({vertexShader:dt,fragmentShader:ft,side:R,blending:I,blendEquation:z,blendEquationAlpha:z,blendSrc:D,blendDst:D,depthTest:!1,depthWrite:!1,uniforms:{uLd:{value:S}}});leaves=new Map;loader=new Z;textures=new Map;ready=new Map;W=1;H=1;turned;turns=new Map;target;raf=0;starting=!1;disposed=!1;reported;persistent;turnAt;still=0;constructor(e,t,s,i,r,o,a="left",{persistent:h=!1,turnAt:n=.5}={}){this.canvas=e,this.spread=t,this.book=s,this.onSettle=r,this.onTarget=o,this.persistent=h,this.turnAt=n,this.sign=a==="right"?-1:1,this.light=new C(this.sign*S.x,S.y,S.z),this.casterMaterial.uniforms.uLd.value=this.light;const u=this.sign<0;this.renderer=new Y({canvas:e,alpha:!0,antialias:!0,premultipliedAlpha:!0}),this.renderer.outputColorSpace=$,this.renderer.setClearColor(0,0),this.left=new y(new b(1,1,1,1),L(!1,u)),this.right=new y(new b(1,1,1,1),L(!1,u)),this.desk=new y(new b(1,1),new T({vertexShader:E,fragmentShader:ut,transparent:!0,depthWrite:!1,uniforms:{uW:{value:1},uH:{value:1},uPages:{value:new j},...x}})),this.desk.renderOrder=-1,this.shadowCamera.position.z=100;const d=this.renderer.extensions;(d.has("EXT_color_buffer_float")||d.has("EXT_color_buffer_half_float"))&&(this.shadowTarget=new K(1,1,{type:J,minFilter:W,magFilter:W,depthBuffer:!1,generateMipmaps:!1})),this.stage.scale.x=this.sign,this.stage.add(this.desk,this.left,this.right),this.scene.add(this.stage),this.target=i,this.reported=i,this.turned=Array.from({length:Math.max(0,s.length-1)},(f,c)=>c<i),this.redraw()}layout(){const e=this.canvas.getBoundingClientRect(),t=e.width,s=e.height;if(!t||!s)return;const i=Math.min(window.devicePixelRatio||1,3);this.renderer.setPixelRatio(1),this.renderer.setSize(Math.round(t*i),Math.round(s*i),!1),this.camera.aspect=t/s,this.camera.position.set(0,0,s/2/Math.tan(_*Math.PI/360)),this.camera.near=this.camera.position.z/20,this.camera.far=this.camera.position.z*4,this.camera.updateProjectionMatrix();const r=this.spread.getBoundingClientRect();this.W=r.width/2,this.H=r.height,this.flat(this.right.geometry,1),this.flat(this.left.geometry,-1);const o=this.desk.geometry.attributes.position;for(let a=0;a<4;a++)o.setXYZ(a,(a%2?1:-1)*this.W*2,(a<2?1:-1)*this.H,-1);if(o.needsUpdate=!0,this.desk.material.uniforms.uW.value=this.W,this.desk.material.uniforms.uH.value=this.H,this.shadowTarget){const a=t/2+60,h=s/2+60;Object.assign(this.shadowCamera,{left:-a,right:a,top:h,bottom:-h}),this.shadowCamera.updateProjectionMatrix();const n=Math.min(1,2048/(2*a));this.shadowTarget.setSize(Math.round(2*a*n),Math.round(2*h*n)),x.uShadowBox.value.set(-a,-h,2*a,2*h),x.uShadowMap.value=this.shadowTarget.texture}}flat(e,t){const s=e.attributes.position,{W:i,H:r}=this;s.setXYZ(0,0,r/2,0),s.setXYZ(1,t*i,r/2,0),s.setXYZ(2,0,-r/2,0),s.setXYZ(3,t*i,-r/2,0),s.needsUpdate=!0,e.computeVertexNormals()}setPaper(e,t,s){U.uPaper.value.set(e,t,s)}preload(e){for(const t of e)for(const s of this.book[t]??[])s&&this.texture(s)}texture(e){let t=this.textures.get(e);if(!t){const s=i=>(i.colorSpace=et,i.minFilter=st,i.anisotropy=this.renderer.capabilities.getMaxAnisotropy(),this.ready.set(e,i),i);if(typeof e=="string")t=this.loader.loadAsync(e).then(s,()=>null);else{const i=new Q(e);t=(e instanceof HTMLCanvasElement?Promise.resolve():e.decode()).then(()=>(i.needsUpdate=!0,s(i)),()=>null)}this.textures.set(e,t)}return t}setBook(e,t){const s=e.length!==this.book.length;if(this.book=e,s||t!==void 0){const r=Math.max(0,Math.min(e.length-1,t??this.settledAt()));if(s){cancelAnimationFrame(this.raf),this.raf=0,this.turns.clear();for(const o of this.leaves.values())o.removeFromParent(),o.userData.caster.removeFromParent(),o.geometry.dispose(),o.material.dispose();this.leaves.clear()}this.turned=Array.from({length:Math.max(0,e.length-1)},(o,a)=>a<r),this.target=r,this.reported=r,this.raf||this.clear()}for(const[r,o]of this.leaves)this.assign(o,"Front",e[r]?.[1]??null),this.assign(o,"Back",e[r+1]?.[0]??null);const i=new Set(e.flat());for(const r of[this.left,this.right])i.add(r.userData.Front).add(r.userData.Back);for(const[r,o]of this.ready)i.has(r)||(o.dispose(),this.ready.delete(r),this.textures.delete(r));this.redraw()}assign(e,t,s){const i=e.material.uniforms;if(e.userData[t]===s||(e.userData[t]=s,i[`uHas${t}`].value=0,i[`u${t}`].value=null,s===""&&(i[`uHas${t}`].value=2),!s))return;const r=a=>{!a||e.userData[t]!==s||(i[`u${t}`].value=a,i[`uHas${t}`].value=1,this.redraw())},o=this.ready.get(s);o?r(o):this.texture(s).then(r)}leaf(e){let t=this.leaves.get(e);if(!t){t=new y(new b(1,1,F,H),L(!0,this.sign<0));const s=new y(t.geometry,this.casterMaterial);s.frustumCulled=!1,this.shadowScene.add(s),t.userData.caster=s,this.assign(t,"Front",this.book[e]?.[1]??null),this.assign(t,"Back",this.book[e+1]?.[0]??null),this.leaves.set(e,t)}return t}go(e){if(this.target=Math.max(0,Math.min(this.book.length-1,e)),this.raf||this.starting)return;const t=Math.min(this.target,this.settledAt()),s=Math.max(this.target,this.settledAt());if(t===s)return this.onSettle(this.target);if((s-t)*2>tt){const r=this.target>this.settledAt();for(let o=t;o<s;o++)this.turned[o]=r?o<s-1:o<=t}this.starting=!0;const i=[];for(let r=t;r<=Math.min(s,t+2);r++)for(const o of this.book[r])o&&i.push(o);this.preload(Array.from({length:s-t+1},(r,o)=>t+o)),Promise.race([Promise.all(i.map(r=>this.texture(r))),new Promise(r=>setTimeout(r,700))]).then(()=>{this.starting=!1,!this.disposed&&(this.layout(),this.raf=requestAnimationFrame(this.frame))})}settledAt(){const e=this.turned.indexOf(!1);return e<0?this.turned.length:e}lift(e,t,s={u:this.W,v:-this.H/2}){return{forward:e,G:s,P:{...s},anim:{start:t,duration:A,from:s,to:{u:-s.u,v:s.v},arc:.28*this.H,lands:!0}}}frame=e=>{if(this.raf=0,this.disposed)return;const t=this.turned.length,s=a=>P(a.G,a.P);for(const[a,h]of this.turns)if(h.held){const{aim:n}=h.held;h.P=k(h.G,{u:h.P.u+(n.u-h.P.u)*.35,v:h.P.v+(n.v-h.P.v)*.35},this.H)}else if(h.anim){const{start:n,duration:u,from:d,to:f,arc:c,lands:p}=h.anim,w=Math.min(1,(e-n)/u),m=c?rt(w):ot(w);h.P=k(h.G,{u:d.u+(f.u-d.u)*m,v:d.v+(f.v-d.v)*m+c*Math.sin(Math.PI*m)},this.H),w>=1&&(this.turned[a]=p?h.forward:!h.forward,this.turns.delete(a))}const i=Math.abs(this.target-this.settledAt())||1,r=Math.min(it,.7/i),o=(a,h)=>{const n=this.turns.get(a);return n?n.forward===h&&!n.held&&s(n)>=r:h?this.turned[a]:!this.turned[a]};for(let a=0;a<this.target&&a<t;a++)if(!(this.turned[a]||this.turns.has(a))){if(a>0&&!o(a-1,!0))break;this.turns.set(a,this.lift(!0,e))}for(let a=t-1;a>=this.target;a--)if(!(!this.turned[a]||this.turns.has(a))){if(a<t-1&&!o(a+1,!1))break;this.turns.set(a,this.lift(!1,e))}this.draw(),this.spread.classList.add("is-turning"),this.turns.size>0||this.settledAt()!==this.target?this.raf=requestAnimationFrame(this.frame):this.settle()};settle(){this.target===this.reported?this.clear():(this.reported=this.target,this.onSettle(this.target))}toWorld(e){const t=this.canvas.getBoundingClientRect();return{x:this.sign*(e.clientX-(t.left+t.width/2)),y:-(e.clientY-(t.top+t.height/2))}}grab(e){if(this.raf||this.starting||this.turns.size)return!1;this.layout();const{x:t,y:s}=this.toWorld(e),i=this.settledAt(),r=t>0,o=r?i:i-1;if(o<0||o>=this.turned.length||Math.abs(t)>this.W||Math.abs(s)>this.H/2)return!1;const a={u:Math.max(.15*this.W,Math.abs(t)),v:s};return this.turns.set(o,{forward:r,G:a,P:{...a},held:{aim:{...a},samples:[]}}),this.raf=requestAnimationFrame(this.frame),!0}drag(e){const t=[...this.turns.values()].find(o=>o.held);if(!t?.held)return;const{x:s,y:i}=this.toWorld(e);t.held.aim=k(t.G,{u:t.forward?s:-s,v:i},this.H);const r=performance.now();for(t.held.samples.push({t:r,q:P(t.G,t.held.aim)});t.held.samples.length>2&&r-t.held.samples[0].t>120;)t.held.samples.shift()}release(e=!1){const t=[...this.turns].find(([,f])=>f.held);if(!t)return;const[s,i]=t,{samples:r}=i.held,o=r[0],a=r[r.length-1],h=o&&a&&a.t>o.t?(a.q-o.q)/(a.t-o.t):0,n=P(i.G,i.P),u=e||n+h*250>this.turnAt,d=u?{u:-i.G.u,v:i.G.v}:{...i.G};i.held=void 0,i.anim={start:performance.now(),duration:e?A:Math.max(260,A*.8*(u?1-n:n)),from:{...i.P},to:d,arc:e?.2*this.H:0,lands:u},u&&(this.target=i.forward?s+1:s,this.onTarget(this.target))}draw(){const{W:e,H:t}=this,s=this.turned.length,i=[...this.turns].sort(([n],[u])=>n-u).map(([n,u])=>({k:n,q:P(u.G,u.P),forward:u.forward,fold:nt(u.G,u.P,e,t),mesh:this.leaf(n)}));for(const n of this.leaves.values())n.visible=n.userData.caster.visible=!1;i.forEach(({q:n,forward:u,fold:d,mesh:f},c)=>{const p=u?n:1-n;ht(f.geometry,d,u,e,t,.6+.8*((1-p)*(i.length-1-c)+p*c)),f.visible=f.userData.caster.visible=!0,f.parent||this.stage.add(f)});let r=-1;for(let n=0;n<s;n++)this.turned[n]&&!this.turns.has(n)&&(r=n);let o=s;for(let n=s-1;n>=0;n--)!this.turned[n]&&!this.turns.has(n)&&(o=n);const a=this.book[r+1]?.[0]??null,h=this.book[o]?.[1]??null;this.assign(this.left,"Back",a),this.assign(this.right,"Front",h),this.desk.material.uniforms.uPages.value.set(+(a!==null),+(h!==null)),x.uLd.value=this.light,x.uShadowOn.value=this.shadowTarget&&i.length?1:0,this.shadowTarget&&i.length&&(this.renderer.setRenderTarget(this.shadowTarget),this.renderer.render(this.shadowScene,this.shadowCamera),this.renderer.setRenderTarget(null)),this.renderer.render(this.scene,this.camera)}clear(){if(!(this.raf||this.starting)){if(this.persistent)return this.redraw();this.spread.classList.remove("is-turning"),this.renderer.clear()}}redraw(){!this.persistent||this.disposed||this.still||(this.still=requestAnimationFrame(()=>{this.still=0,!(this.disposed||this.raf||this.starting)&&(this.layout(),this.draw())}))}dispose(){this.disposed=!0,cancelAnimationFrame(this.raf),cancelAnimationFrame(this.still);for(const e of this.ready.values())e.dispose();this.shadowTarget?.dispose(),this.casterMaterial.dispose();for(const e of[this.left,this.right,this.desk,...this.leaves.values()])e.geometry.dispose(),e.material.dispose();this.renderer.dispose()}}export{xt as FOLIO_CSS,vt as FlatPageFlipper,Mt as MAX_PAGE_VIDEOS,yt as PageFlipper,mt as attachVideoSource,Pt as canFlip,St as createFolio,bt as createFolioFromDocument,Ft as firstPageIsRecto,Ct as hlsLevelCap,Bt as isHlsVideo,At as loadDeskMaps,Dt as pageVideoSpots,kt as paperSpec,zt as spotContains,Lt as spreadOfPage,Tt as spreadsOf};
