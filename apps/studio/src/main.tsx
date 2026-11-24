import React from 'react';
import { createRoot } from 'react-dom/client';
import { PostextSandbox, DEFAULT_MARKDOWN_EN } from 'postext-sandbox';
import './styles.css';

// Both sources are served by this GitHub Pages site. The original showcase
// presets are copied from apps/web/public/presets at build time. Books under
// docs/books/ are versioned independently, without rebuilding the app.
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
const presetSources = [{ url: base + 'books' }, { url: base + 'presets' }];

function Studio() {
  return (
    <main id="studio" className="h-dvh w-screen overflow-hidden">
      <PostextSandbox
        initialMarkdown={DEFAULT_MARKDOWN_EN}
        locale="en"
        presetSources={presetSources}
        outputProfileBaseUrl={base + 'icc/'}
        homeUrl={base}
        webmcp={false}
      />
    </main>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode><Studio /></React.StrictMode>
);
