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
  ['docs/books', 'books'],
]) {
  const from = resolve(repo, source);
  const to = resolve(publicDir, dest);
  if (!existsSync(from)) throw new Error('Required studio source missing: ' + from);
  rmSync(to, { recursive: true, force: true });
  cpSync(from, to, { recursive: true });
  console.log('Staged', source, '→', dest);
}
