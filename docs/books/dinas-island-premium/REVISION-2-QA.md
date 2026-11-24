# DFP-10–19: revision 2, source implementation

## Baseline evidence
Publisher-supplied 16-page PDF, reviewed 2026-11-24: 170 × 235 mm, four facing-page spreads; nine internal links on the contents page and eleven external links on the credits page. PDF outline contains only A slower walk and its three subheadings. The unwanted Figure. caption appears eight times. Strumble photograph natural width 86.7 mm at 300 ppi; it is 1024px wide. Atlas recto incorrectly prints spread's first folio 6. The flowing article uses the default Open Sans running head and white ground, and has an unused outer column.

## Changes and acceptance
| ID | Revision | Evidence / remaining check |
|---|---|---|
| DFP-10 | Empty captionPrefix + numberingTemplate, explicit bitmap resolution (190ppi Strumble, 240ppi other images), disable unnecessary frame shrinking. | Native render required; no Figure. labels or unintended scaling. Actual original image resolution unchanged. |
| DFP-11 | Larger intro photograph, improved cover crop and taller native panorama, revised title/deck spacing. | Inspect crops, type hierarchy and frame overflow. |
| DFP-12 | Separate editorial map SVG; preserved route path geometry and source GeoJSON, larger place labels, stronger route line, five numbered native label anchors snapped to 355 existing SVG path vertices. | Verify label position and contrast. Points are approximate stage references, not surveyed navigational coordinates. |
| DFP-13 | Route spread re-composed around two Dinas-specific photographs and five numbered steps, linked visually to map markers. | Confirm photographs and text fit. |
| DFP-14 | Layered original schematic cross-section and explanatory native tree, anchored labels. | Check readability and leader collisions. No claim of measured elevation or mapped geology. |
| DFP-15 | Gallery uses larger intended photo widths and close captions, consistent with source image dimensions. | Check actual photo bounds and caption spacing. |
| DFP-16 | Native margin callout with church photo, caption, observation; page background uses house palette, default header removed. | Confirm sidebar remains on essay page, no afterText warning, no extra pages. |
| DFP-17 | Replaced sheet-level folio with native physical-page footer and parity variants. | Verify both sides print correct labels. Outline missing composed headings remains an exporter-level defect to reproduce; no engine change or build requested. |
| DFP-18 | build_preset.py uses the official preset_kit and separate source manifest, page family and typographic config; measured design spec remains source. | Semantic source reassembly checked; Python kit execution pending checkout. |
| DFP-19 | Source-level validation against actual baseline PDF, planned acceptance checklist below. | No revised PDF or EPUB available yet. |

## Render/export gate (required, not yet passed)
Run official lint_project.py, preset_kit.py lint, composed_check.py check --stress 1.3. In Sandbox, check every edition and inspect all 16 intended pages, especially p3, p6–9, p12–14. Check frameOverflow, frameCovered, emptyFrame, labelOverlap, unknownConfigKey, afterText and folioMissing. Verify no stray Figure. text and no clipped content. Export PDF, fixed-layout EPUB3 and reflowable EPUB3 in browser. Confirm folios and nine internal links/eleven external source links; inspect PDF outline separately, do not claim the missing composed bookmarks fixed. Run EPUBCheck and inspect reading order/links. No release approval before visual evidence. Screen proof photo resolution remains below 300ppi on panorama and Strumble. No engine changes or GitHub Actions.
