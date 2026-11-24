# PST-16 — original showcase inventory

Source snapshot: upstream commit a7c18f461c9b3482d4d3d35bf76f22f1e12dc986, Postext 1.98.1. Each row refers to `apps/web/public/presets/<id>/preset.json`. All eleven original manifests were inspected. The existing layouts are primarily native flow/heading designs; they are not interchangeable fixed-page templates.

| ID | Trim | Native approach | Suitable application |
|---|---|---|---|
| alf-layla | 170 × 240 mm | Arabic RTL, right binding, ornamental frame, plates | RTL books |
| bioquimica-feduchi | 210 × 280 mm preset | oneAndHalf, 30.56% outer float column, 6 mm gutter, 10/12 pt body | Science, Human Mind reading |
| deep-sky | 225 × 297 mm | double, 6 mm gutter, 12.35/16.9 pt body, full-width opener, ficha/cita/datos | Travel magazine, photo essays |
| don-quijote | 155 × 235 mm | asymmetric text/margin notes and plates | Annotated literature |
| hongloumeng | 148 × 210 mm | vertical Chinese, parallel editions, CJK numbering | Multilingual books |
| kokoro | 127 × 188 mm | vertical Japanese, ruby, original cover, right binding | Literary editions |
| openstax-fisica | 210 × 275 mm | asymmetric textbook, equations and callouts | Educational guides |
| paradise-lost | 156 × 234 mm | verse, footnotes, plates | Poetry and annotated classics |
| pepper-carrot | 210 × 297 mm | comics panel and multilingual balloon layout | Graphic stories |
| pintura-espanola | 210 × 270 mm | single, 22/44 mm mirrored inner/outer margins, 11/15.5 pt body, facing plates | Atlas, visual catalogue |
| senales | 168 × 237 mm | double, 6 mm gutter, 9.3/13.2 pt body, callouts and data panels | Visual nonfiction |

Four native, editable starter projects are registered in the shelf: template-photo-magazine, template-science-textbook, template-visual-atlas and template-data-editorial. They reuse source page geometry, selected typography and callout settings. Source-specific advanced openers, artwork and icons were omitted, and font families standardized to Archivo/Newsreader; this makes the starter independent of restricted original fonts. They are unapproved layout proofs.

For source-faithful pocket guides use the native composed page types already present in `docs/books/singapore-port-proof-12/preset.json`: cover, photo plate, section opener, idea lead, tile page, viewpoints, map article, listing, map plate and listing continuation. For A4 visual nonfiction use the Human Mind visual templates, especially the five diagram categories and ideas spread. Reuse template geometry only after checking target trim and source measurements. Never transplant original prose or image IDs from a different publication.
