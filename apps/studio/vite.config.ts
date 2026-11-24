import { fileURLToPath, URL } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const here = (path: string): string => fileURLToPath(new URL(path, import.meta.url));

// This is a *static* host for the complete Postext Sandbox. The original
// Next.js website remains untouched. GitHub Pages publishes from main:/docs.
export default defineConfig({
  base: '/postext/',
  plugins: [react()],
  // The Postext layout worker uses lazy-loaded chunks for citations.
  // Vite's IIFE default cannot package a code-splitting worker.
  worker: { format: 'es' },
  publicDir: here('./public'),
  optimizeDeps: {
    // The Sandbox starts a module worker through import.meta.url. Let Vite
    // transform the workspace package rather than pre-bundling that URL.
    exclude: ['postext-sandbox'],
  },
  server: { fs: { allow: [here('../../')] } },
  build: {
    outDir: here('../../docs'),
    // docs/ also contains upstream MDX documentation and our independent
    // books/ folder. Never erase either while building the studio.
    emptyOutDir: false,
    target: 'es2022',
    sourcemap: false,
  },
});
