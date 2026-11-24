# Singapore · 12-page Postext reconstruction proof

This is an editorial source-layout exercise against the 194-page **Rough Guide Directions Singapore** PDF supplied by the rights-authorized project user, not a new independent guide. It deliberately lives alongside the earlier 194-page transcription and the 29-page original city guide.

## Reference and scope

Source pages, in PDF page order: **1, 2, 11, 12, 13, 49, 51, 52, 54, 95, 100 and 180**. The reference image for each of these pages was inspected through the uploaded source PDF. The original PDF binary is currently retrieval-only and cannot be materialized into the execution container. Consequently `inventory.py`, `measure_layout.py`, `pdf_regions.py`, `template_dedupe.py` and pixel-by-pixel `compare_pages.py` cannot yet run against that exact source here.

## What is genuinely implemented

- Twelve native `::::page` objects using **ten shared page-kind templates**, fixed positions in mm and source text as Markdown frame content. Pages are editable, rather than scanned-page facsimiles.
- The source's **104 × 191 mm** vertical form is retained from the existing book preset. The original embedded cover JPEG (619 × 1134 px) and map asset (295 × 541 px) have the corresponding portrait aspect ratio. This corroborates the aspect ratio but does **not** constitute a measurement of the source PDF MediaBox.
- Twenty-five original raster/vector resources are reused by immutable Git blob SHA. The 194-page reconstruction and its assets remain untouched.
- Map 054 and full map plate 180 remain native SVG (but their existing embedded lettering is not yet separated into editable Postext map labels).
- Clearly identified source text is placed into corresponding image, lead, caption or column frames. PDF extraction artefacts in copied excerpts (such as `fl ock`) were normalized in the proof's Markdown without treating the original manuscript as fully proofread.

## Fidelity not yet established

The source PDF pages were visually inspected at an indexed thumbnail resolution of 512 pixels. Exact line breaking, source fonts, actual crop positions, photo frame fit, page geometry, frame overflow, contrast, export and pagination cannot be approved through source-only assertions. Some longer entries are trimmed to the visible-page text boundary, and remaining copy and small captions require line-by-line reconciliation against the original PDF before a final replica is claimed.

This branch makes a **real, inspectable native Postext proof**, not a verified page-matched replica. The first formal acceptance must be performed with the exact PDF binary and a Postext CLI renderer, with source and generated pages compared side-by-side at 150 dpi or higher.

## Validation sequence still required

1. Get the **exact original PDF binary** into the local checkout's `source/` folder without committing the copyrighted file. Check page dimensions, typefaces, text blocks and image bboxes with the skill scripts.
2. Run `postext check docs/books/singapore-port-proof-12 --json`, inspect frameOverflow, image warnings and contentInConfig.
3. Run `postext images docs/books/singapore-port-proof-12 --pages '#1-#12' --dpi 150 -f jpeg -o /tmp/sg-proof`, then compare each selected source PDF page with the corresponding ordered proof image. Do not compare proof page position 4 with original PDF page 4, since the proof is deliberately noncontiguous.
4. Run `scripts/compare_pages.py` and adjust the common templates, real fonts, photo crops and text flow until the twelve page pairs are visually satisfactory.
5. Once the 12-page acceptance passes, apply the same measured templates to all 194 pages. Do not promote the provisional proof into a claim of finished publication.

## Page inventory

| Original PDF page | Role | Template | Reference |
|---:|---|---|---|
| 1 | cover | `rg-cover` | Image and live title overlay |
| 2 | full-page photo | `rg-full-photo` | Original photo-002-01 |
| 11 | section opener | `rg-section-opener` | Ideas, four-photo strip and violet ground |
| 12 | ideas lead | `rg-idea-lead` | The Big Six, lead column, Changi Museum and Newton Circus |
| 13 | ideas photo cards | `rg-idea-tiles` | Jurong, Chinatown, National Museum, zoo illustration |
| 49 | viewpoints | `rg-viewpoints` | Cable Car, Mount Faber, Raffles Place |
| 51 | section opener | `rg-section-opener` | Places, four-photo strip and blue ground |
| 52 | full-page photo | `rg-full-photo` | Original photo-052-01 |
| 54 | map with running text | `rg-map-article` | Map 054 native SVG, two-column body |
| 95 | listing continuation | `rg-listing-continuation` | Chinatown listings continued plus photo |
| 100 | listing opener | `rg-listing` | Boat Quay eating section, two columns and photo |
| 180 | full-page vector map | `rg-map-plate` | Map 180 native SVG with source lettering |

## Design rule

Every reader-visible sentence is held in Markdown or its original SVG resource, not in the config. The config holds templates, font styles, positioning and short presentation labels. Images stay as source files; no rasterized original page is substituted for an editable layout.

The original book and its 194-page raw transcription are unchanged. Full source comparison and final visual sign-off remain open.
