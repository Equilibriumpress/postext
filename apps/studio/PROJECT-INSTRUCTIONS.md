# Postext Studio — projectinstructie

Dit bestand bevat de bindende projectafspraken voor ChatGPT, Codex en andere agents. De officiële upstream-skill blijft de technische bron voor de werkwijze. De verplichte ontwerpgoedkeuring vóór volledige productie is een aanvullende Studio-regel.

## 1. Architectuur en bronnen

- Repository: https://github.com/Equilibriumpress/postext
- Upstream: https://github.com/drnachio/postext
- Documentatie: https://postext.dev/en/docs
- Studio: https://equilibriumpress.github.io/postext/
- Productiecontrole: https://equilibriumpress.github.io/postext/qa/

Behoud de oorspronkelijke Postext-engine, Sandbox, bibliotheek, Cookbook en publicatiefunctionaliteit. GitHub is de definitieve bron. Boeken en proefedities worden rechtstreeks geopend vanuit de bestaande bibliotheek; geen handmatige import of download als standaardwerkwijze.

Lees vóór iedere boekproductie, reconstructie, layoutontwikkeling of exportverbetering [postext-port/SKILL.md](../../plugins/postext/skills/postext-port/SKILL.md). Raadpleeg de relevante bestanden in [references](../../plugins/postext/skills/postext-port/references/): design-analysis, composed-pages, playbooks, verification, configuration, document-format, project-format en sources. Gebruik ook de officiële documentatie, Cookbook-recepten en voorbeeldboeken. Gebruik bestaande Postext-functionaliteit vóór ontwikkeling van nieuwe functionaliteit.

## 2. Officiële productieworkflow (stappen 0–8)

### 0. Agree the brief

Leg vast: getrouwe reconstructie, herontwerp of nieuw boek; doelgroep, redactioneel concept, bronmateriaal, ontwerpreferenties, formaat, omvang, talen, uitvoerformaten, rechten, lettertypen en drukwerkspecificaties. Gebruik bij reconstructie een PDF van het origineel, ook bij DOCX/IDML als inhoudsbron. Bij nieuwe boeken: kies representatieve ontwerpvoorbeelden en relevante Cookbook-recepten.

### 1. Inventory

Gebruik waar relevant `inventory.py` en `composed_check.py round`. Inventariseer pagina's, fonts, illustraties, tabellen, kaarten en vectoren. Classificeer iedere bronpagina als flow of composed. Leg herhaalbare paginatypes, leesvolgorde en bronverwijzingen vast.

### 2. Measure the design

Volg design-analysis.md. Meet met `measure_layout.py` en `pdf_extract.py roles` waar bron-PDF's beschikbaar zijn. Leg trim, binnen- en buitenmarges, kolommen, grid, typografische rollen, regelafstand, kleuren, kaders, beeldposities, openers, folio's en bijschriften vast. Noteer bij iedere meting de bronpagina of ontwerpreferentie. Maak een componentbibliotheek met herbruikbare stijlen. Bewaar de specificatie in `DESIGN-SPEC.json`. Onderscheid metingen van gekozen waarden.

### 3. Scaffold the project

Gebruik `preset_kit.py init` en de officiële helpers. Beheer geometrie en ontwerpregels in `build_preset.py` en bijbehorende specificaties. Genereer `preset.json`; bewerk het niet handmatig. Gebruik één template per terugkerend paginatype, inheritance, variants, modules, grids en spreads voor variaties. Houd templates vrij van boekinhoud.

### 4. Extract the content into draft chapters

Gebruik bronafhankelijke bestaande scripts: `pdf_extract.py`, `pdf_regions.py`, `pdf_figures.py`, `extract_tables.py`, `template_dedupe.py`, `anchors.py`, `pandoc_to_postext.py` en `idml_extract.py`. Extraheer originele tekst, afbeeldingen, kaarten, vectoren, tabellen, labels, bijschriften en links. Behoud broninhoud en credits zonder ongevraagde redactie. Bij nieuw werk: ontwikkel inhoud vanuit het afgesproken concept.

### 5. Curate: make it Postext, not a transcript

Gebruik native Markdown en Postext Flow/Composed Pages, hoofdstukopeners, automatische inhoudsopgaven, kruisverwijzingen, voetnoten, indexen, callouts, tekstomloop, modules, repeating grids, kaartlabels, ankers, connectors en vectorvormen. Bewaar inhoud in Markdown, vorm in config en illustraties als afzonderlijke resources. Behoud originele kaartdefinities, SVG's en gepinde geografische data. Gebruik geen complete pagina-afbeelding als vervanging voor een reconstrueerbare bewerkbare pagina. Leg bewuste afwijkingen vast.

### 6. Fonts and images

Gebruik `fonts.py`, `images.py` en `convert_assets.py` waar relevant. Controleer licenties, lettertypedekking, vervangende lettertypen, afmetingen, resolutie, uitsnede, alt-tekst, credits, drukprofiel en omslagen. Behoud vectoren waar mogelijk. Genereer het manifest met `build_preset.py`.

### 7. Verify and iterate

Render native Postext-pagina's. Vergelijk met bron of goedgekeurde referentie. Wijzig ontwerpinstellingen afzonderlijk en beoordeel telkens de nieuwe rendering. Controleer per mijlpaal:

- `lint_project.py`
- `preset_kit.py lint` (configuratiebudget 1 MB)
- `postext check` voor iedere editie
- `composed_check.py check --stress 1.3` voor composed pages
- Native Sandbox Checks, via WebMCP indien beschikbaar
- `compare_pages.py` voor visuele bronvergelijking
- `port_audit.py` voor PDF-attributen bij reconstructie

Bekijk iedere pagina naast de bron of relevante ontwerpreferentie. Controleer typografie, regelafstand, leesvolgorde, illustraties, bijschriften, labels, paginaovergangen, folio's en links. Documenteer opzettelijke overlappingen en toegestane afwijkingen. Geen tekst verkleinen om een geometriefout te maskeren. Een technische controle vervangt geen visuele beoordeling.

### 8. Deliver

Lever een geldig Postext-project op via de bestaande bibliotheek. De upstream-skill verbiedt packing bij een mislukte composed-check; respecteer die regel wanneer een bundle wordt verpakt. Exporteer PDF, fixed-layout EPUB3 en reflowable EPUB3 in de browser. Controleer PDF-paginering, inhoud, links, bladwijzers, tekstextractie en afbeeldingen. Controleer EPUB-leesvolgorde, navigatie, links, fonts en resources; gebruik EPUBCheck voor beide EPUBs. Rapporteer afwijkingen, technische beperkingen en resterende beslissingen.

## 3. Verplichte ontwerpgoedkeuring (Studio-aanvulling)

Doorloop stappen 3–7 eerst voor een representatieve proefeditie, doorgaans 8–12 pagina's of een proefhoofdstuk. Kies de relevante paginatypes: omslag, inhoudsopgave, opener, tekstpagina, foto/spread, kaart, infographic en informatiepanelen. Toon de proef in de bestaande GitHub-bibliotheek, met daadwerkelijk gerenderde pagina's en bevindingen.

Vraag expliciet akkoord vóór volledige productie of uitrol naar een serie. Registreer de goedkeuring en de bijbehorende commit. Zonder goedkeuring blijft het boek een proef. Na akkoord: pas de vastgelegde ontwerpregels toe op het volledige boek en herhaal de controles. Dit is een projectregel, geen letterlijk upstream-voorschrift.

## 4. Bestandsstructuur

Per boek onder `docs/books/<id>/`:

- `build_preset.py`: reproduceerbare presetgenerator.
- `preset.json`: gegenereerd manifest.
- `DESIGN-SPEC.json`: ontwerpspecificatie en bronmetingen.
- `PRODUCTION-STATUS.json`: fase, broncommit, engineversie, controles en goedkeuringsbewijs.
- `chapters/<lang>/`: geordende Markdown-hoofdstukken.
- `resources/`: afzonderlijke illustraties, kaarten en overige resources.
- `fonts/`: benodigde fonts met licentiegegevens.
- `QA.md`: controleverslag, afwijkingen en beperkingen.

Bewaar tijdelijke meet- en vergelijkingsbestanden apart van publicatieresources. Publiceer bronmateriaal alleen met passende rechten. Behoud bestaande boeken en hun geschiedenis; migreer oudere projecten wanneer ze worden gereviseerd, niet automatisch.

## 5. Ontwerpstandaard en vrijgave

Streef naar professionele uitgeverskwaliteit, met samenhangende typografie, doelgerichte composities, afwisseling en herbruikbare componenten. Gebruik officiële voorbeelden als technische referentie, niet als vervanging voor een doordacht boekontwerp.

Vrijgave vereist: nul lintfouten, geen onopgeloste waarschuwingen, configuratie binnen het aanbevolen budget van 1 MB, convergentie, geen onbedoelde overlappingen, lege frames of tekstoverloop, juiste leesvolgorde, geslaagde toepasselijke stresstest met 30% langere tekst, visuele beoordeling van iedere pagina, correcte bijschriften en links, gecontroleerde PDF en EPUBs. Bij getrouwe reconstructie streef naar oorspronkelijke paginaovergangen en documenteer afwijkingen. Leg bij elke controle bewijs, datum, versie en resultaat vast. Gebruik NOT RUN indien niet uitgevoerd. Geen PASS afleiden uit broncode of bestandsaanwezigheid.

Statusvolgorde: ontwerpconcept → technische proef → visueel goedgekeurd ontwerp → volledige productie → publicatiegereed. Bij ontbrekende controles blijft de betreffende vrijgave geblokkeerd.

## 6. Browser, GitHub en publicatie

Gebruik de bestaande Sandbox voor previews, native checks en uitvoer; WebMCP indien toegankelijk. Officiële scripts mogen buiten de browser worden uitgevoerd voor extractie, meting, presetgeneratie en kwaliteitscontrole. Geen alternatieve layoutengine, parser of exportservice ontwikkelen als Postext de functie al heeft.

Gebruik de bestaande GitHub Pages-publicatie. Neem nieuwe boeken en proefedities op in `docs/books/index.json`. Behoud originele engine, bibliotheek en bestaande projecten. Start geen GitHub Actions voor tests of builds zonder expliciet verzoek. Bij een gevraagde implementatie en merge: voer de GitHub-wijzigingen werkelijk uit en meld commit, PR, merge en geverifieerde deploymentstatus. Niet-uitgevoerde browser- of exportcontroles blijven NOT RUN.

Zie ook [PRODUCTION-PROTOCOL.md](PRODUCTION-PROTOCOL.md), [PST22-29-QA.md](PST22-29-QA.md) en [seriesproductie](templates/SERIES-PRODUCTION.md).

## 7. Korte ChatGPT-projectinstructie

Onderstaande tekst is bedoeld om in de projectinstellingen te plakken.

Postext Studio: https://github.com/Equilibriumpress/postext
Lees vóór elke boekproductie, reconstructie, layout- of exportwijziging verplicht apps/studio/PROJECT-INSTRUCTIONS.md en plugins/postext/skills/postext-port/SKILL.md. Volg de negen officiële stappen, gebruik de bestaande scripts en native Postext-technieken. Meet het ontwerp, genereer presets, render proefpagina’s en vraag goedkeuring vóór volledige productie. Behoud broninhoud, Sandbox, bibliotheek en engine. Beheer boeken in GitHub, inhoud in Markdown, vorm in config, illustraties apart. Controleer alle pagina’s, PDF en beide EPUB3-formaten. Exporteer in de browser. Geen test- of build-Actions zonder verzoek. Meld ontbrekende controles en werkelijke commit- en mergestatus.
