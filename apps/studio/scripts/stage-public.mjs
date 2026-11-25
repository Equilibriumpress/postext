import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { resolve } from 'node:path';

const here = fileURLToPath(new URL('.', import.meta.url));
const repo = resolve(here, '../../..');
const publicDir = resolve(here, '../public');
mkdirSync(publicDir, { recursive: true });

// The full upstream showcase library comes directly from the fork, not a
// separately maintained copy. These generated copies are gitignored.
for (const [source, dest] of [
  ['apps/web/public/presets', 'presets'],
  ['apps/web/public/icc', 'icc'],
  ['apps/web/public/designs', 'designs'],
  ['docs/books', 'books'],
]) {
  const from = resolve(repo, source);
  const to = resolve(publicDir, dest);
  if (!existsSync(from)) throw new Error('Required studio source missing: ' + from);
  rmSync(to, { recursive: true, force: true });
  cpSync(from, to, { recursive: true });
  console.log('Staged', source, '→', dest);
}

 // Only the captured bundles and edition manifests are needed by the Sandbox.
 const cookbookSource = resolve(repo, 'apps/web/public/cookbook');
 const cookbookDest = resolve(publicDir, 'cookbook');
 rmSync(cookbookDest, { recursive: true, force: true });
 cpSync(cookbookSource, cookbookDest, { recursive: true, filter: (path) =>
   !/\.[^/]+$/.test(path) || /(?:\.postext|\/capture\.json)$/.test(path)
 });
 cpSync(resolve(repo, 'apps/studio/src/host-parity.css'), resolve(publicDir, 'host-parity.css'));

// Keep the source-linked Commons loader in future static Studio builds.
cpSync(resolve(repo, 'apps/studio/src/commons-resource-loader.js'), resolve(publicDir, 'commons-resource-loader.js'));

cpSync(resolve(repo, 'apps/studio/src/map-resource-loader.js'), resolve(publicDir, 'map-resource-loader.js'));

cpSync(resolve(repo, 'apps/studio/src/map-vector.worker.js'), resolve(publicDir, 'map-vector.worker.js'));

cpSync(resolve(repo, 'apps/studio/src/map-preparation.html'), resolve(publicDir, 'map-preparation.html'));
