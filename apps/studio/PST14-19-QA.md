# PST-14–19 source and acceptance report — 2026-11-24

## PST-14 and PST-15
Upstream merged into studio/pst-14-19 in PR #5, merge 5637bd588527595bd2962daa169211d647e301f6. Engine source now 1.98.1; 27 upstream commits. The comparison showed no upstream changes to .github workflows. The host imports PostextSandbox from the original workspace, and the fork's host passes native presetSources, nine design URLs, ICC URL, and Cookbook hash bundles. Unlike the official Next.js page, the static host uses English and does not pass site-localized labels, the site language/theme switches or the branded home link. This is host difference, not a new typesetter. Existing original showcase staging and independent GitHub book shelf are retained.

Runtime acceptance: NOT RUN. The terminal cannot resolve GitHub and cannot obtain the build dependencies; no new static bundle generated. Current compiled docs assets are not proof of 1.98.1 deployment. Do not infer live parity from source parity. After an authorized/local build, use PST09-13-QA.md, additionally check the new sidebar type metrics, drag geometry, scoped design edits, WebMCP, and IDML export against the official sandbox. Record browser/device, screenshot and output evidence. No Actions started.

## PST-16 and PST-17
All eleven original example presets inspected. See templates/upstream-layout-catalog.md. Four new independent starter projects were written in commit aa1ff8231033054b5d87839eafd40611def5de22. The four manifests and Markdown samples were reread from GitHub; JSON parsed, each catalog entry resolved, declared callout IDs matched the sample text. Each declares seven variants from two existing upstream open font families, copied by Git blob reference. Full upstream lint, render and export NOT RUN. Eleven catalog entries including seven existing books.

## PST-18
AGENTS.md and PRODUCTION-PROTOCOL.md record mandatory upstream skill and native checks. check-book.py invokes the upstream structural checks without Actions. Script not executed in this environment. Browser exports remain the user-facing publication path.

## PST-19 — book-specific source audit
| Project | Chapters | Resources | Page templates | Assessment |
|---|---:|---:|---:|---|
| the-human-mind | 38 | 31 | 16 | A4 composed visual edition, 8.8/12.3 pt main defaults, five diagram types and designed idea frames. Preserve 80-page target and check all spreads against original design. |
| the-human-mind-reading | 39 | 31 | 0 | A4 flowing reading edition, 10/15 pt Lora. Compare asymmetric outer-column approach from Feduchi before changing geometry; reflow edition must remain distinct. |
| singapore | 4 | 19 | 6 | Independent pocket guide design proof, 104 × 191 mm. Keep separate from source reconstruction. |
| singapore-directions | 41 | 284 | 2 | Full reconstruction draft, 104 × 191 mm, two-column flow. Native page-type coverage is inadequate for source-faithful layout. |
| singapore-port-proof-12 | 1 | 25 | 11 | Representative pocket-format reconstruction with native frames and original resources; exact source geometry/export sign-off pending. |

Concrete sample inspection: The Big Six (full reconstruction) has source page 12 composed into two frames but places the next page's photographs and captions in a running sequence. The 12-page proof uses explicit photo and caption slots for source pages 12 and 13. The full draft also contains extraction artifacts such as words split by spaces (refl ect, fl ock). Do not copy those as text or silently rewrite unrelated passages. Verify against the original source and preserve each picture/caption pairing. Port page types from the 12-page proof by source geometry, not from an unrelated magazine starter. Validate the 194-page target only against the original edition; current page count is NOT confirmed.

Human Mind: sample chapter 02 uses a native comparison page and a native ideas page, with individually named slots and a resource reference. This is the correct basis. Improve unreviewed spreads by reusing the existing five visual categories; inspect body size, diagram label legibility, panel overflow and spacing, and compare actual page order. The reading edition is a separate flowing edition; do not force fixed pages into it.

No existing book content or original illustrations were modified in this audit. No rendered page or export was available for visual acceptance. Prioritize source-faithful Singapore sample validation and Human Mind spread review after the 1.98.1 bundle is published. Editorial status: all proofs remain unapproved.
