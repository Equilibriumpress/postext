# Equilibrium Press Postext Studio — repository instructions

Before any book conversion, page-layout change or export improvement, read `plugins/postext/skills/postext-port/SKILL.md` and its linked references for the relevant format. Follow `apps/studio/PRODUCTION-PROTOCOL.md`.

Preserve upstream engine, Sandbox, original examples, all existing book entries and original source assets. Store prose in Markdown, form in configuration, artwork in separate resources. Do not embed whole source pages as images to simulate a port. Use native composed pages for fixed layouts and the native flow engine for running text. Do not edit source wording without permission. Prefer upstream techniques from `apps/studio/templates/upstream-layout-catalog.md`.

GitHub is the canonical source. Books live under `docs/books/<id>/` with one catalog entry in `docs/books/index.json`. Exports and book rendering take place in the browser. Do not launch GitHub Actions for builds or tests unless explicitly authorized. GitHub Pages deployment is separate. Never describe source changes as a published runtime upgrade until the static bundle is rebuilt and deployed. Report technical validation separately from visual and editorial approval.
