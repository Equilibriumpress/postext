import React from 'react';
import { createRoot } from 'react-dom/client';
import { PostextSandbox, DEFAULT_MARKDOWN_EN } from 'postext-sandbox';
import './styles.css';
import { recipeBundleCandidates, recipeBundleEditions } from './cookbook';

// Both sources are served by this GitHub Pages site. The original showcase
// presets are copied from apps/web/public/presets at build time. Books under
// docs/books/ are versioned independently, without rebuilding the app.
const base = import.meta.env.BASE_URL.replace(/\/?$/, '/');
const presetSources = [{ url: base + 'presets' }, { url: base + 'books' }];
const designUrls = ['novel', 'manual', 'magazine', 'two-colour', 'composition-es', 'composition-en-us', 'composition-en-gb', 'composition-fr', 'composition-de'].map(id => base + 'designs/' + id + '.postext');
const hashBundles = { recipe: recipeBundleCandidates };
const hashBundleEditions = { recipe: recipeBundleEditions };

function Studio() {
  return (
    <div id="studio" className="h-dvh w-screen overflow-hidden">
      <PostextSandbox
        initialMarkdown={DEFAULT_MARKDOWN_EN}
        locale="en"
        presetSources={presetSources}
        outputProfileBaseUrl={base + 'icc/'}
        homeUrl={base}
        designUrls={designUrls}
        hashBundles={hashBundles}
        hashBundleEditions={hashBundleEditions}
      />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode><Studio /></React.StrictMode>
);
