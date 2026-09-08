import { cp, mkdir, rm } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
const root = fileURLToPath(new URL('.', import.meta.url));
await rm(new URL('./dist/', import.meta.url), { recursive: true, force: true });
await mkdir(new URL('./dist/', import.meta.url));
for (const path of ['index.html', 'src', 'assets']) {
  await cp(`${root}${path}`, `${root}dist/${path}`, { recursive: true });
}
console.log('Built dist/ — static files only. No external services or runtime dependencies.');
