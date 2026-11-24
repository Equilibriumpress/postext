# PST-09–13 regression gate

Compare https://postext.dev/en/sandbox with https://equilibriumpress.github.io/postext/ on the same device, locale and viewport. Use a private window first to avoid saved drafts; do not clear existing user projects. For each book test fresh original, switch to another book and back, and reload the page. Wait for fonts and book loading to finish before capturing pages.

- All 11 original example books: shelf thumbnail, first two canvas pages, first page in PDF and first spread in Folio, chapter selector, locale, binding and page direction.
- Alternate Kokoro, Hongloumeng, Alf Layla, Paradise Lost, Pepper&Carrot and a small Equilibrium title. Test fast switching and returning after reload. Record missing resources, console errors, page number, chapter, and memory pressure in Safari.
- Test a saved draft separately: edits must survive switching, and Restore original must affect only the selected draft.
- Check fixed EPUB and reflowable EPUB with the upstream check scripts. Verify PDF links and page order. Inspect screenshots side by side before design approval.
- Check all nine shipped designs and Cookbook hash links in a new build.
- Keep the engine and sample books unchanged until a reproducible cause is identified.

## Current evidence

Git tree comparison: 1,428 original example files are byte-identical in docs/presets; 11 manifest checks found no missing declared file/thumbnail references. No visual acceptance, Safari run or export verification has been performed. Source parity changes require a fresh local static build; the existing compiled JS remains unchanged until then. No GitHub Actions were requested.
