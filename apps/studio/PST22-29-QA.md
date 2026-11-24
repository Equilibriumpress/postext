# PST-22–29 — production workflow, 2026-11-24

Base: e6df6a0faab9d700bb2eeb61a3f03d0daffc7158. Engine source package 1.98.1. Static HTML points to docs/assets/index-Cr1e9c2I.js. Source version is not runtime attestation. The original Sandbox is imported by apps/studio/src/main.tsx. The official WebMCP docs and implementation in packages/postext-sandbox/src/webmcp/tools/{book,library,editionChecks,pages}.ts were consulted.

| Gate | Implementation | Acceptance |
|---|---|---|
| PST-22 | Browser companion calls native WebMCP registry, state, book, warnings, composed checks, render and export. | Source inspected; runtime NOT RUN. |
| PST-23 | Records actual registered tools, active book, static entry, manifest SHA-256, device and pages. | Live upstream/fork comparison NOT RUN. |
| PST-24 | 13 upstream recipe scripts classified by technique; all paths verified. | 12 staged English bundles, recipe 024 source-only. |
| PST-25 | Native recipe links via existing hash resolver, including modules, grids, connectors 156, 158, 162. | Runtime opening and adaptation NOT RUN. |
| PST-26 | PNG proof per layout page and native findings JSON. | Visual acceptance NOT RUN. |
| PST-27 | Dinas Premium chosen as reference candidate; DFP-10–19 revision unchanged pending render. | NOT APPROVED. |
| PST-28 | Native PDF, fixed and reflow EPUB generation, byte count and signature checks. | Export generation and validation NOT RUN. |
| PST-29 | Series protocol and evidence requirements. | Implemented; reference not yet approved. |

## Browser use
After Pages publishes, open https://equilibriumpress.github.io/postext/qa/ . Original Sandbox remains unchanged. No new build, proxy or service. The companion shares browser storage, so use a clean profile for canonical review. It refuses locally edited samples rather than resetting them. It does not write GitHub. Do not edit embedded book while reviewing. Tool failures, missing images, stale samples, nonzero findings, incomplete editions or unexpected counts require investigation. Generated signatures are not proof of conformity.

## Runtime parity
Open official and fork Sandbox in same device/browser, locale and clean storage. Use the same original showcase preset version and assets. Compare registered native tools, warnings, page geometry, screenshots, PDF and both EPUBs. Record deployment URLs, source revisions, entry asset and date. Exact deployed engine version and equivalence not established by source or tool presence.

## Dinas reference acceptance
Use existing REVISION-2-QA.md and DESIGN-SPEC.json. Compare revision with original 16-page baseline PDF, especially p3, p6–9 and p12–14. Check recto/verso folios, no Figure. prefix, no clipped captions, five stage markers, spine safe area, native warnings, no unexpected pages, nine contents links and eleven external credits links, composed-section PDF outline, both EPUB reading orders and fonts. Existing panorama/Strumble images below 300ppi print target. Run upstream lint_project.py, preset_kit.py lint and composed_check.py --stress 1.3 in an available checkout; run EPUBCheck on both EPUBs. Require actual page-by-page approval. Do not blindly change DFP revision without new render evidence.

## Limitations
Container DNS cannot resolve live Studio and no Postext CLI is installed; web retrieval could not open live Studio. No browser render, PDF/EPUB export, structural CLI or visual sign-off in this task. No engine or book-content changes. No Actions launched.
