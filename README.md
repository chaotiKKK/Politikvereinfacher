# Politikvereinfacher

**Die Endbenutzer-Ebene der „Bilanz der Republik“** — ein einziges, offline-fähiges
HTML-Dokument über Ausgaben, Steuern, Schulden, Soziales und Energie Deutschlands 2014–2026.
Alle Zahlen mit Quellenangabe.

Diese Fassung führt die Endbenutzer-Ebene aus diesem Repository
(`deutschland-bilanz-optimiert.html`) mit dem vollständigen Inhalt und Funktionsumfang des
Projekts [deutschland-bilanz](https://github.com/chaotiKKK/deutschland-bilanz) zusammen
(Stand: Version 2.3.0). Ergebnis ist **`index.html`** — eine Seite, keine Installation,
kein Build, keine Netzverbindung nötig.

## Ansehen

```bash
# einfach im Browser öffnen
index.html

# oder lokal ausliefern (für Service Worker / PWA-Installation)
python3 -m http.server 8000
# → http://localhost:8000/index.html
```

## Inhalt

- **17 Abschnitte:** I Einnahmen · II Ausgaben · III Schulden · IV Außen & Energie ·
  V Organe · VI Sicherheit · VII Strom · VIII Regierung · IX Wohnen · X Personal ·
  XI USA-Kriege · XII SU/RU-Kriege · XIII Parteiprogramme · XIV Staat & Politik ·
  XV Staatsaufbau · Historie 1981–2026 (46 Jahre) · Verträge Deutschland–Russland
  (15 Abkommen, 2+4-Vertrag mit allen zehn Artikeln)
- **Einstieg „In 60 Sekunden“** — vier Kernzahlen in Alltagssprache mit Beleg-Sprungmarken, Lese-Legende (Rot/Grün/Gold), Abschnitt „Was die Zahlen nicht sind“ und Glossar mit 10 Fachbegriffen
- **60 interaktive SVG-Charts**, selbst gerendert, ohne Fremdbibliothek
- **Rechner:** Steuerrechner (Brutto/Netto), Inflationsrechner, EU-Vergleich (27 Staaten),
  Sektorszenario-Engine
- **Quellenregister** mit Stand und Zuordnung zu jedem Kapitel

## Bedienung (Endbenutzer-Ebene)

| Element | Funktion |
|---|---|
| PDF | Druckansicht / „Als PDF speichern“ |
| Kompakt / Detail | reduziert die Seite auf Kernaussagen — erneut klicken zeigt alles |
| Theme | 10 Farbwelten (Papier, Dunkel, Kontrast, Sepia, Ozean, Tanne, HK-Hell, Grau, Solarized, Sol-Dark) |
| Zoom, Text A−/A+, Schrift | größere Darstellung, lesbare Schrift, wird gespeichert |
| Suche | filtert alle Karten live, Trefferzahl wird angesagt |
| Inhaltsverzeichnis | bleibt beim Scrollen sichtbar, markiert den aktuellen Abschnitt |
| Teilen | Link mit Theme, Zoom, Textgröße und Sprungposition |
| Einstellungen | Sichern/Laden als JSON |
| CSV | Tabellen exportieren |
| Offline | `manifest.json` + `sw.js`: Installation als App, danach ohne Netz nutzbar |

**Selbsttest:** `index.html?selftest` prüft Charts, Inhalte und Funktionen und zeigt das
Ergebnis als Liste auf der Seite.

## Dateien

| Datei | Zweck |
|---|---|
| `index.html` | die zusammengeführte Endbenutzer-Seite (alles inline) |
| `manifest.json` | PWA-Manifest (Name, Icons, Startseite) |
| `sw.js` | Service Worker: Offline-Cache, relative Pfade |
| `icons/icon.svg` | App-Icon (skalierbar, Papier/Tinte/Gold) |
| `data/history_1981_2026.json` | Historien-Daten 1981–2026 (Spiegel der eingebetteten Daten) |
| `data/terminology.json` | Terminologie für die Farbkodierung |
| `LICENSE` | CC-BY 4.0 |

Die Pfade in `index.html`, `manifest.json` und `sw.js` sind **relativ**, damit die Seite auch
unter einem Unterpfad (z. B. GitHub Pages) vollständig funktioniert.

## Quellen & Lizenz

Die Inhalte stehen unter **CC-BY 4.0** (siehe [LICENSE](LICENSE)); Quellenangaben sind Pflicht.
Die Einzelquellen stehen in jedem Abschnitt und gesammelt im Quellenregister der Seite.

## Hinweis zu den Vorstufen

`deutschland-bilanz.html` und `deutschland-bilanz-optimiert.html` sind die Vorstufen dieser
Zusammenführung. Ihre Inhalte und Endbenutzer-Verbesserungen sind vollständig in `index.html`
aufgegangen; für die Nutzung ist nur noch `index.html` relevant.
