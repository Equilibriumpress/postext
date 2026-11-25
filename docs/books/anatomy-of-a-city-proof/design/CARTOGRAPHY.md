# AOC-23–24: live cartography and atlas styling

## Research and decision

PagedPress uses an OpenFreeMap/OSM vector renderer before pagination. In Studio the existing Commons browser adapter already supplies bytes to the native Postext resource loader. Use the same separation for maps: fetch real vector features in the browser, project them, produce a bounded SVG resource before native layout, keep the native engine unchanged. Do not make a map from invented coordinates.

For Dutch books, [PDOK BGT OGC API Features](https://www.pdok.nl/ogc-apis/-/article/basisregistratie-grootschalige-topografie-bgt-) is an official candidate. The endpoint is https://api.pdok.nl/kadaster/bgt/ogc/v1/ ; it provides bbox queries for physical objects. Verify available collection IDs, CRS, limits, pagination, licence, CORS and geometry completeness before implementation. [Amsterdam BGT dataset](https://api.data.amsterdam.nl/v1/docs/datasets/bgt.html) is an alternative. For worldwide books, assess OpenFreeMap vector tiles / OpenStreetMap, attribution and ODbL obligations. No live endpoint was wired into the production loader in this revision.

## Reusable styles

- Water-first: water polygon fill #56786B; banks fine #263A35; buildings #D2CABE; streets #F1EDE3.
- Figure-ground: buildings #222926; land #F1EDE3; water #DDE7E1; street voids retain land colour.
- Network: road centerlines #B9573D, contextual geometry #D2CABE, water #56786B. Show source limitations in captions.

Use scale-dependent stroke widths, a north arrow, distance scale, attribution, clear legend, geometry clipping, stable projection and native Postext label styles. Map variants should share data and change only the styling. A frozen SVG is not a live tile map.

## Current proof

Existing source-referenced Adamlink street excerpts now have a separate SVG without place names; four labels are authored in Markdown via native figure labels. The aerial image and the 1662 plan add real geographic context. There are still no complete modern water/road/building polygon layers. The new layer styles are design specifications only. Native label placement and CORS/export for a future live map remain untested.
