# Equilibrium Press · Postext Studio

A static GitHub Pages host for the **complete upstream Postext Sandbox**, without rebuilding the editor, Books shelf, layout engine or PDF/EPUB export code.

This is the first integration step. The bundled proof under \`docs/books/\` is not a migration of a PagedPress title; the DesignCraft GeoJSON map adapter and production book conversions are separate follow-ups.

## Architecture

- \`packages/postext-sandbox\` is imported unchanged from this fork's pnpm workspace.
- The original showcase books from \`apps/web/public/presets/\` are staged into the static site's \`presets/\` folder.
- Equilibrium Press books are standalone Postext preset directories in \`docs/books/\`, with a single \`index.json\`.
- The existing Books interface lists both sources. It may also save local projects in the browser, independently of GitHub.
- The host provides the existing Canvas, PDF, HTML, Folio, EPUB and SCORM tabs.
- PDF/EPUB generation remains client-side. No GitHub Actions job is required for book output.
- All local exports, storage, project resets and browser-generated content are the original Sandbox's behaviors, not automatic GitHub writes.

## Build locally, not in GitHub Actions

This fork uses Node specified by the root \`.nvmrc\` and pnpm specified by the root \`package.json\`.

From the repository root:

1. \`pnpm install --no-frozen-lockfile\` (the new studio workspace needs a lockfile importer).
2. \`pnpm turbo run build --filter=postext-studio\`
3. Commit the generated \`docs/index.html\`, \`docs/assets/\`, \`docs/presets/\`, \`docs/icc/\` and the refreshed \`pnpm-lock.yaml\`.
4. In GitHub repository Settings > Pages, select **Deploy from a branch**, branch **main**, folder **/docs**.

Website: https://equilibriumpress.github.io/postext/

For local development, first build the engine and Sandbox packages, then run \`pnpm --filter postext-studio dev\`.

The Vite build uses \`emptyOutDir: false\` because the upstream repository already has documentation under \`docs/\` and books are maintained there separately. Never run a clean that deletes the \`docs/books/\` source directory.

Note: upstream's \`.github/workflows\` remain in the fork. They have not been disabled here. Avoid PR/merge until the repository's Actions are disabled in Settings, or separate the fork's upstream workflows from active CI. This initial development branch makes no Actions-based deployment claims.

## Add a GitHub-authored book without rebuilding the app

1. Create \`docs/books/<book-id>/preset.json\` with Postext's \`version: 2\` manifest.
2. Store ordered Markdown chapters, SVG/bitmap resources, optional fonts and map files inside that directory.
3. Add one entry to \`docs/books/index.json\`.
4. Commit the files to the published branch. The Sandbox fetches these presets when the Books shelf is opened.

No GitHub Actions are needed to add, replace or remove book files. Existing local Sandbox projects remain separate from versioned GitHub presets.

For the DesignCraft adapter, preserve pinned SVGs for reproducible layout and only regenerate them on an explicit request. A live tile fetch must never change the geographical source of a published edition.

## Host parity

The host uses upstream web styles, native WebMCP, shipped design bundles and captured Cookbook links. Build locally before publishing the JavaScript changes. See `PST09-13-QA.md` for the visual acceptance gate. Stage and commit `docs/designs`, `docs/cookbook` and `docs/host-parity.css` alongside the generated assets.
