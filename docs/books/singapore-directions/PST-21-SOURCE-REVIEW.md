# PST-21 — The Big Six, source PDF pages 12–13 (printed folios 10–11)

Source: original 194-page Rough Guide Directions PDF previously supplied by the publisher. Pages 12 and 13 were inspected as PDF page images and extracted text. Seven image files in the full reconstruction were opened individually and matched to their actual subjects. The raw PDF was not accessible for programmatic measurement; frame geometry is estimated from normalized page images at the existing 104 × 191 mm trim. Open Sans (upstream Signals preset) is a substitute, not a verified original font.

## Implementation
- Two reusable native page templates, shared with the existing twelve-page proof, with specific photo and caption/reference frames, blue ground, navigation and source folios.
- Correct picture associations: 012-03 historical collage; 012-02 Changi Museum; 012-01 hawker centre; 013-01 birds; 013-04 National Museum; 013-03 Chinatown Heritage Centre; 013-02 zoo.
- Full source prose retained from existing Markdown. Restored the omitted zoo and Chinatown wording in the proof from the full reconstruction; corrected extraction splits and moved each reference back to its subject. Navigation labels and printed folios are visible text; interactive destination mapping is not verified and is not invented.
- Native rotated heading, threaded introduction, independent editable frames and reference strips; no page images or new engine code. The rotated title's unrotated geometry crosses the trim; verify the final rotated bounds in the native Checks panel. No blanket overlap exceptions. Text scaling disabled for text frames to expose overflow.

## Documentation consulted
- https://postext.dev/en/docs/skill
- https://postext.dev/en/docs/sandbox-design-checks
- docs/composed-page-books-en.mdx
- docs/composed-pages-en.mdx
- docs/configuration-composed-pages-en.mdx
- plugins/postext/skills/postext-port/SKILL.md and references/composed-pages.md

## Acceptance
Manifest JSON, two page fences, declared slot names, seven resource IDs and existing image contents checked. Browser render, actual printed geometry, original font verification, native lint/composed checks, PDF and both EPUB exports NOT RUN. Check source-image comparison for cropping, overflow, frame order, rotation, link strips and actual page count; do not expand across the full edition until the spread is approved. Existing other chapters untouched. No GitHub Actions or engine build.
