# Production record — first design proof

Original small-format field guide, not a conversion of an existing book. Editorial language English, trim 170 × 235 mm, 11 authored composed pages plus a flowing chapter. Actual page count depends on native layout. The source photographs and existing map were retained as separate files, not baked into pages. All reader-facing prose is Markdown; the thumbnail is a separate shelf graphic.

## Native technique inventory
- Cover and image-led feature pages use independent photo frames and text slots.
- Automatic linked contents uses takes: toc and the Markdown toc directive.
- Native route map uses the pinned SVG and GPX-derived GeoJSON from pembrokeshire-map-proof.
- Native figure labels are separate Markdown, anchored on the original conceptual SVG.
- Two-column essay uses a next chain.
- Repeating 2-column grid uses repeat.frames; each card is a Markdown piece.
- Connected diagram uses native decoration connectors, not a baked image.
- Module page uses one reusable note-module three times.
- Flow chapter uses native paragraphs, headings and callout.
- Source links are actual Markdown links; their output behavior requires export validation.

## Official references used
plugins/postext/skills/postext-port/SKILL.md; references/composed-pages.md sections 6.4, 6.5, 6.11, 6.12, 6.16, 6.17 and 7; docs/composed-page-books-en.mdx; docs/composed-pages-en.mdx; docs/configuration-composed-pages-en.mdx. Source design references Deep Sky and Signals. 

## Asset provenance
Photographs copied without new modifications from Equilibriumpress/PagedPress, picture credits retained. Map SVG and GeoJSON copied byte-identically by Git blob ID. Font variants reused from official Deep Sky-derived starter; source OFL terms apply. Conceptual cross-section and thumbnail original.

## Evidence
Static JSON and declared page-template/resource references checked before commit, resource and font paths included. Native lint_project.py, preset_kit.py lint, composed_check.py, actual browser render, PDF, fixed and reflow EPUB: NOT RUN. No editorial or visual approval claimed. In particular verify native repeat grid/module behavior, chained text, contents page and anchored label positioning, and inspect all fixed frames for clipping. No engine changes or Actions required.
