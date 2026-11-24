# Production protocol — PST-18

Read the upstream postext-port skill first. Use the source inventory, layout measurements, references/composed-pages.md and other relevant upstream references rather than inventing a competing layout engine.

## Gates for every book
1. Brief: rights confirmed once, source edition pinned, page size and page count recorded, text/resource inventory and expected output editions.
2. Layout inventory: classify each page as flow or composed. Identify recurring page types; keep reusable frame definitions free of prose. Record source page numbers, asset identity, reading order and font licenses. Use the original source dimensions, not a template from a different trim.
3. Create the preset (version 2) and enriched Markdown; keep images and maps separate. Preserve original text, captions, map definitions, SVGs, links and credits. Pin cartographic data.
4. Structural gate: run `python3 apps/studio/scripts/check-book.py docs/books/<id>` in a checkout. This wraps the original upstream `lint_project.py` and `preset_kit.py lint --max-size 1`. A failed command blocks approval. If tools are inaccessible, record NOT RUN, never PASS. For composed pages also use upstream `composed_check.py check` against the matching CLI version where available; it is a diagnostic, not the public export path.
5. In the browser use the native Checks panel for every chapter and edition. Resolve missing templates, slots, resource references, unexpected blank pages, empty frames, overlaps, overflow, unexpected scaling, and missing fonts. Record intentional overlaps with reasons. Do not suppress warnings globally. 
6. Compare representative pages with the source at the same trim size. Review every page before release: typography, page order/count, photo crops, labels, reading order and hyperlinks. Verify font substitutions and exact source text; redaction and factual changes require permission.
7. Export PDF, fixed-layout EPUB3 and reflowable EPUB3 from the browser. Inspect PDF links, page count and text extraction, and EPUB navigation, reading order, images, and links. Run EPUBCheck on both EPUBs when available; record the version and result. Use upstream checks instead of asserting quality from manifest validity. Fixed-layout and reflowable are different outputs, not equivalent visual layouts.
8. Update the catalog only with a valid manifest, and record source commit, expected engine version, build/deploy status, and evidence for each gate. A draft or proof remains explicitly named as such until visual/editorial approval.

## Release and updates
No automatic build or test actions. A book-only commit requires Pages deployment, not a new engine bundle. Changes to engine/Sandbox/host need a fresh static build and browser comparison before runtime parity is claimed. Preserve all seven pre-existing titles and all original examples. See PST09-13-QA.md and PST14-19-QA.md.
