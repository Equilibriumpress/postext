/* Postext Studio: source-linked Commons JPEG resources.
 * Only GETs under this host's books/<id>/resources/commons/<name>.jpg
 * are virtual. All other requests use the original fetch unchanged.
 * Native Postext receives normal JPEG bytes, not a remote image element.
 */
(function installCommonsResourceLoader(scope) {
  'use strict';
  const script = scope.document.currentScript;
  if (!script || !script.src || typeof scope.fetch !== 'function') return;
  const books = new URL('books/', script.src);
  const originalFetch = scope.fetch.bind(scope);
  const limit = 2 * 1024 * 1024;
  const MAX_PIXELS = 2500000;
  let batchDeadline=0;
  const pending = new Map();
  const queue = [];
  let active = 0;
  function schedule(task) {
    return new Promise((resolve, reject) => {
      if (!active && !queue.length) batchDeadline=Date.now()+30000;
      queue.push({ task, resolve, reject });
      drain();
    });
  }
  function drain() {
    while (active < 2 && queue.length) {
      const job = queue.shift();
      active++;
      Promise.resolve().then(job.task).then(job.resolve, job.reject).finally(() => {
        active--;
        drain();
      });
    }
  }
  function allowedImage(value) {
    try {
      const u = new URL(value);
      return u.protocol === 'https:' && !u.username && !u.password && !u.port &&
        ((u.hostname === 'upload.wikimedia.org' && u.pathname.startsWith('/wikipedia/commons/')) ||
         (u.hostname === 'thumb.wikimedia.org' && u.pathname.startsWith('/wikipedia/commons/thumb/'))) &&
        /\.jpe?g$/i.test(u.pathname);
    } catch { return false; }
  }
  function validDescriptor(d) {
    if (!d || d.version !== 1 || typeof d.source !== 'string' ||
        typeof d.author !== 'string' || !d.author.trim() ||
        typeof d.license !== 'string' ||
        !/^(CC0 1\.0|CC BY(?:-SA)? (?:2\.0|2\.5|3\.0|4\.0)|Public domain)$/i.test(d.license) ||
        !Array.isArray(d.urls) || d.urls.length < 1 || d.urls.length > 3 ||
        !d.urls.every(allowedImage)) return false;
    try {
      const u = new URL(d.source);
      return u.origin === 'https://commons.wikimedia.org' && /^\/wiki\/File:/i.test(decodeURIComponent(u.pathname));
    } catch { return false; }
  }
  async function checkedFetch(url, init) {
    const controller = new AbortController();
    const remaining=batchDeadline-Date.now();
    if(remaining<=0)throw new Error('Commons batch deadline exceeded');
    const timer = setTimeout(() => controller.abort(), Math.min(6500,remaining));
    try {
      const res = await originalFetch(url, { ...init, signal: controller.signal });
      if (!res.ok) throw new Error('HTTP ' + res.status + ' ' + url);
      // Keep the timeout alive until the complete body has arrived.
      const declared = Number(res.headers.get('content-length') || 0);
      if (declared > limit) throw new Error('Resource exceeds 2 MiB');
      let bytes;
      if(res.body?.getReader){
        const reader=res.body.getReader(),chunks=[];let total=0;
        try{while(true){const {done,value}=await reader.read();if(done)break;total+=value.byteLength;if(total>limit){await reader.cancel();throw new Error('Resource exceeds 2 MiB');}chunks.push(value);}}
        finally{reader.releaseLock();}
        const joined=new Uint8Array(total);let pos=0;for(const chunk of chunks){joined.set(chunk,pos);pos+=chunk.byteLength;}bytes=joined.buffer;
      }else bytes=await res.arrayBuffer();
      if (!bytes.byteLength || bytes.byteLength > limit) throw new Error('Empty or oversized resource');
      return { bytes, url: res.url, mime: (res.headers.get('content-type') || '').split(';')[0].toLowerCase() };
    } finally { clearTimeout(timer); }
  }
  async function verifyJpeg(result) {
    if (result.url && !allowedImage(result.url)) throw new Error('Unapproved Wikimedia redirect');
    const b = new Uint8Array(result.bytes);
    if (result.mime !== 'image/jpeg' || b[0] !== 255 || b[1] !== 216 || b[2] !== 255)
      throw new Error('Commons response is not a JPEG');
    // Read JPEG dimensions before allocating a full decoded image.
    let i=2,dimensions=null;
    while(i+3<b.length){
      if(b[i++]!==255)break;
      while(b[i]===255)i++;
      const marker=b[i++];if(marker===218||marker===217)break;
      if(marker===1||(marker>=208&&marker<=215))continue;
      const len=b[i]*256+b[i+1];if(len<2||i+len>b.length)break;
      if([192,193,194,195,197,198,199,201,202,203,205,206,207].includes(marker)&&len>=7){dimensions=[b[i+5]*256+b[i+6],b[i+3]*256+b[i+4]];break;}
      i+=len;
    }
    if(!dimensions||!dimensions[0]||!dimensions[1]||dimensions[0]*dimensions[1]>MAX_PIXELS||Math.max(...dimensions)>2200)throw new Error('JPEG dimensions exceed safe preview budget');
    const blob = new Blob([result.bytes], { type: 'image/jpeg' });
    if (typeof scope.createImageBitmap === 'function') {
      const bitmap = await scope.createImageBitmap(blob);
      try { if (!bitmap.width || !bitmap.height) throw new Error('Invalid JPEG dimensions'); }
      finally { bitmap.close(); }
    } else {
      const url = URL.createObjectURL(blob);
      try {
        const image = new scope.Image();
        image.src = url;
        await image.decode();
        if (!image.naturalWidth || !image.naturalHeight) throw new Error('Invalid JPEG dimensions');
      } finally { URL.revokeObjectURL(url); }
    }
    return result.bytes;
  }
  async function load(url) {
    const desc = new URL(url);
    desc.search = '';
    desc.hash = '';
    desc.pathname += '.json';
    const record = await checkedFetch(desc.href, { cache: 'no-store', credentials: 'same-origin' });
    if (record.bytes.byteLength > 16384) throw new Error('Commons descriptor too large');
    const d = JSON.parse(new TextDecoder().decode(record.bytes));
    if (!validDescriptor(d)) throw new Error('Invalid Commons descriptor: ' + desc.pathname);
    let last;
    for (const candidate of d.urls) {
      for (let attempt = 0; attempt < 1; attempt++) {
        try {
          const started=Date.now();
          const bytes=await verifyJpeg(await checkedFetch(candidate, {
            mode: 'cors', credentials: 'omit', cache: 'default', referrerPolicy: 'no-referrer',
          }));
          console.info('[Postext Commons] ready',{source:d.source,bytes:bytes.byteLength,ms:Date.now()-started});
          return bytes;
        } catch (err) {
          last = err;
          console.warn('[Postext Commons] variant failed',d.source,String(err));
        }
      }
    }
    throw new Error('Commons resource unavailable: ' + d.source + ' (' + String(last) + ')');
  }
  scope.fetch = function studioFetch(input, init) {
    let url;
    try { url = new URL(typeof input === 'string' || input instanceof URL ? input : input.url, scope.document.baseURI); }
    catch { return originalFetch(input, init); }
    const method = (init && init.method) || (input && input.method) || 'GET';
    if (method.toUpperCase() !== 'GET' || url.origin !== books.origin ||
        !url.pathname.startsWith(books.pathname) ||
        !/^[a-z0-9][a-z0-9-]*\/resources\/commons\/[a-z0-9][a-z0-9-]*\.jpg$/i.test(url.pathname.slice(books.pathname.length))) {
      return originalFetch(input, init);
    }
    const key = url.origin + url.pathname;
    let job = pending.get(key);
    if (!job) {
      job = schedule(() => load(key)).finally(() => pending.delete(key));
      pending.set(key, job);
    }
    // Each native reader gets its own Response. Failed photos abort the preset
    // load instead of quietly exporting a missing image. Nothing is pinned to Git.
    return job.then(bytes => new Response(bytes, { status: 200, headers: { 'Content-Type': 'image/jpeg' } }));
  };
})(window);
