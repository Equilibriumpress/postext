# PST-07 · Exportcontrole, 24 November 2026

## Uitgevoerde controles zonder GitHub Actions

Postext CLI 1.94.0 werd rechtstreeks uitgevoerd op de GitHub-boekbronnen in een tijdelijke bouwomgeving. Geen GitHub Actions-workflow gestart voor deze boekcontrole.

### Visuele editie `the-human-mind`

- `postext check`: 80 A4-pagina's, geslaagd, nul waarschuwingen na correcties aan de fonts en figuurbijschriften
- PDF: 80 pagina's, 30 externe hyperlinkannotaties naar de bronnen en 60 interne bestemmingslinks, 4,181,202 bytes in de eerste export
- Fixed-layout EPUB 3: 80 inhoudspagina's, metadata `rendition:layout=pre-paginated`, 31 SVG-assets en 30 externe bibliografie-URL's, ZIP-structuur leesbaar
- De EPUB had eerst 90 meldingen dat Arial-varianten in SVG niet ingesloten konden worden. De SVG-labels zijn met Open Sans verwerkt. De tweede fixed-layout-export had nul waarschuwingen
- Op de definitieve uitvoer is nog geen visuele vergelijking met het originele PagedPress-PDF gedaan. De 80 pagina's en de bestandsstructuur zijn gecontroleerd, niet de identieke weergave of pagina-marges in Safari/Apple Books

### Uitgebreide leeseditie `the-human-mind-reading`

- 30 boeken, 6 thematische essays, 240 ideeën, 60 oefeningen, 30 SVG-illustraties
- `postext check` op eerste import: 139 Postext-pagina's, met één informatiebericht over het ontbrekende omslagbijschrift. Bijschrift toegevoegd in manifest
- Reflowable EPUB 3: ZIP en manifest gecontroleerd. 40 XHTML-bestanden en 31 SVG's. Het aantal fysieke pagina's varieert op het leesapparaat
- PDF/fixed-layout export van deze langere leeseditie is niet vereist voor de eerste kwaliteitsproef

### Status

PST-07 heeft aantoonbaar werkende PDF, fixed EPUB en reflowable EPUB-output. Nog open: Safari/iPad en Apple Books visuele controle, illustratieve overeenstemming met PagedPress en controle van tekst/posities buiten de paginakaders.
