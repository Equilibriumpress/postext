# Series production standard — PST-29

1. Confirm source edition and rights, audience, trim, expected physical pagination and formats. Pin source commit, fonts, licenses and route data.
2. Choose a native design family: Coastal Field Notes (Dinas candidate), pocket guide (Singapore proof), visual nonfiction (Human Mind), or existing starters. Choose relevant upstream Cookbook recipes from /postext/qa/. Match trim and intended use.
3. Read postext-port skill, inventory, measurement, preset_kit and composed-page references. Keep content in Markdown and images separate. Reuse page-kind templates, modules, grids, anchors and connectors. Do not transplant facts, source photo IDs or maps.
4. Copy approved reference project into unique book ID, pin its reference commit and design specification. Replace chapters and resources; preserve styles and validate slots, font fallback, page palette, reading order, citations and credits. Keep original books unchanged.
5. Produce representative proof pages: cover, contents, opener, flow, dense page, photo spread, map/diagram, back matter. Render and compare before whole-book rollout. Record specific accepted differences.
6. Run apps/studio/scripts/check-book.py and official composed_check.py check --stress 1.3 where available. Collect native checks JSON and PNG proofs using the original Sandbox or /postext/qa/. Inspect every page at print and tablet size. Record NOT RUN when unavailable.
7. Export PDF, fixed and reflow EPUB in browser. Verify pagination, links, PDF outline, image resolution, reading order, fonts, accessibility and navigation. Run EPUBCheck on both EPUBs. Do not infer approval from successful generation.
8. Keep release evidence: source commit, engine source version and deployed asset, native findings, approved page proofs, export versions/hashes, validation and explicit editorial approval. No reference master promotion or series rollout before approval. Publish using existing Pages process, not test/build Actions.

Canonical candidate: docs/books/dinas-island-premium/DESIGN-SPEC.json and preset.json. Status NOT APPROVED; see PST22-29-QA.md.
