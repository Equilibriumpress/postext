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
  const limit = 16 * 1024 * 1024;
  const pending = new Map();
  const queue = [];
  let active = 0;
  function schedule(task) {
    return new Promise((resolve, reject) => {
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
    const timer = setTimeout(() => controller.abort(), 18000);
    try {
      const res = await originalFetch(url, { ...init, signal: controller.signal });
      if (!res.ok) throw new Error('HTTP ' + res.status + ' ' + url);
      // Keep the timeout alive until the complete body has arrived.
      const declared = Number(res.headers.get('content-length') || 0);
      if (declared > limit) throw new Error('Resource exceeds 16 MB');
      const bytes = await res.arrayBuffer();
      if (!bytes.byteLength || bytes.byteLength > limit) throw new Error('Empty or oversized resource');
      return { bytes, url: res.url, mime: (res.headers.get('content-type') || '').split(';')[0].toLowerCase() };
    } finally { clearTimeout(timer); }
  }
  async function verifyJpeg(result) {
    if (result.url && !allowedImage(result.url)) throw new Error('Unapproved Wikimedia redirect');
    const b = new Uint8Array(result.bytes);
    if (result.mime !== 'image/jpeg' || b[0] !== 255 || b[1] !== 216 || b[2] !== 255)
      throw new Error('Commons response is not a JPEG');
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
      for (let attempt = 0; attempt < 2; attempt++) {
        try {
          return await verifyJpeg(await checkedFetch(candidate, {
            mode: 'cors', credentials: 'omit', cache: 'default', referrerPolicy: 'no-referrer',
          }));
        } catch (err) {
          last = err;
          if (attempt === 0) await new Promise(resolve => setTimeout(resolve, 400));
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
