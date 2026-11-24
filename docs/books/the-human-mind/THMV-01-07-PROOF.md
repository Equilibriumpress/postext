# THMV-01–07 · Visual Edition 2.0 design proof

Base: a41adf67b75f292cae830de342162a2f615739b9. Source edition: [PagedPress](https://github.com/Equilibriumpress/PagedPress/tree/9ed47d315c945439feeb6bb9a3ec72a74a477a63/public/books/the-human-mind). Followed postext-port SKILL.md and composed-pages reference. The original PagedPress CSS uses coloured infographic pages, eight numbered insights and two applications; the port had five templates, undifferentiated editorial pages, 8.8 pt body and concatenated contents labels. No original editorial prose or diagram rewritten. Cover colours harmonised, original SVG artwork retained. The cover retains its source text. The Reading Edition and engine are unchanged.

## Implemented

- THMV-01: source comparison and inventory of 80 authored pages, 38 chapter files, 31 SVG resources.
- THMV-02: shared palette, type roles, native frame styles, fixed A4 grid and folios. Retain known Archivo / Open Sans fonts rather than introduce unverified font downloads. 16 templates including five unchanged fallback templates.
- THMV-03: cover, title, reading guide, two indexed contents pages; separate linked book title, author/theme, page range.
- THMV-04: six thematic opening pairs, distinct theme palettes, linked reading list, counterpoint and question.
- THMV-05: five native infographic compositions (comparison, process, case, network, science), keeping original SVGs. The case composition places its scene before the diagram; the network composition uses a separate vertical takeaway rail. Theme palette overrides and reusable card styles avoid per-page templates.
- THMV-06: eight independently framed insights and two exercise cards for the pilot; retain the legacy layout for the other 24 spreads until THMV-08.
- THMV-07: six pilot spreads: Thinking, Fast and Slow (8–9), Remember (22–23), Emotional Agility (34–35), Atomic Habits (44–45), Social (64–65), Livewired (70–71).

## Structural checks performed

- 29 changed authored pages retain all 29 original page IDs and order; 60 internal reference target IDs preserved in sequence.
- Every frame slot in changed Markdown matches its template; new frame rectangles lie within A4 and no pair of new frame rectangles intersects (static geometry only). Preset parses as JSON. Other chapters remain byte-for-byte untouched by this commit. All 31 resource references remain.
- 80 authored page fences remain the design target, not a claim of rendered pagination.

## Visual acceptance still required

Open the GitHub branch version in Sandbox. Use Checks to verify frame overflow/overlap, contrast, and the actual 80-page pagination. Compare the six pairs with PagedPress at full page and iPad scale. Verify titles, small labels, folios, all 60 internal links and 30 external bibliography links. Export PDF and fixed/reflow EPUB in the browser and inspect Apple Books/Safari. No engine execution or browser render was available during this source-only revision; no GitHub Actions launched by the agent. Do not roll out THMV-08 until the visual proof is accepted.
