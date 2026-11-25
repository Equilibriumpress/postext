# Permanent source-linked Commons photographs

The Studio host, not the Postext layout engine, resolves selected external JPEGs. This follows the browser-side byte preparation principle used by [PagedPress](https://github.com/Equilibriumpress/PagedPress/blob/main/WIKIMEDIA-COMMONS.md). No image binaries in Git. The standard browser loader stores decoded resources through its existing IndexedDB mechanism. PDF/EPUB use the same resource bytes; offline export content must be verified on real outputs.

## Authoring

1. Verify the Commons file page, maker, licence and third-party rights. Record them in Markdown credits and a descriptor. Select a direct JPEG thumbnail, preferably 1280–1920 px for ordinary pages or 2200+ for large print use; add the original direct URL as fallback (16 MB limit).
2. Store a small JSON descriptor at `resources/commons/<slug>.jpg.json`. Example: [Amsterdam](../../docs/books/anatomy-of-a-city-proof/resources/commons/reguliersgracht.jpg.json). The manifest's bitmap file is `resources/commons/<slug>.jpg`, with intended dimensions. No actual JPEG under that path.
3. Use `::resource{id="..."}` in native Markdown. Attribute maker, source and licence visibly. This first version supports JPEG only, with explicit allowed licences and two Wikimedia media origins. Other file formats remain ordinary local resources.
4. Reopen the GitHub book. Browser fetches the declared URL, retries and falls back, validates MIME/signature/decode, and then passes real bytes to native loading. If both variants fail, the preset load rejects. No false placeholder exports. Existing local assets and every other fetch remain untouched.
5. Check PDF and both EPUBs offline. Live resolution requires network and CORS, and Wikimedia may change or remove images. The licence is editorially verified and recorded, not re-queried automatically. Changes to a source should be reviewed before commercial use.

The host adapter is loaded synchronously before the Sandbox module in the existing static HTML. The staging script preserves it on future builds. Source and published script are identical. No build required for this small host extension. Python preset and lint helpers recognise the descriptor but do not download it. The native command-line renderer and portable .postext packer still expect materialized files; use the Studio browser for this workflow. No server proxy, alternate renderer or engine fork needed. Browser integration and export verification remain required.

MAP-07 performance update: 2 MiB per response, JPEG SOF checks before decoding (2.5 million pixels, 2200px longest edge), 6.5-second request and 30-second batch deadlines. Try each declared variant once; oversized originals are rejected. Failed image loads remain explicit errors. Browser validation pending.
