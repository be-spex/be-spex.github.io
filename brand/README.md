# be spex – Corporate Identity

Stand 2026-11-16. Baut auf dem auf, was es schon gibt: Website `bespex.github.io` (Farben, Schrift, „be“ über
„spex“), App-Icons, die URL-Schriftzüge in `Logos/`, die Daten in `bespex.github.io/src/data/apps.ts`. Neu sind die
Regeln, die das zusammenhalten, die Schriftzüge der Qiew-Programme und die Frage, wo was erscheint. Die Tafel dazu:
`board.html` (Bild: `board.png`, neu bauen mit `node brand/build.mjs` aus dem Repo-Wurzelordner).

Dieser Ordner gilt für alle be-spex-Repos. Die Logos als SVG mit Pfaden kommen hierher (`brand/logos/`); was die
Website ausliefern soll, kopiert sie nach `public/`.

---

## 1 Grundgedanke

**be spex macht kleine, fokussierte Programme für Linux.** Jedes Programm tut eine Sache und tritt dann zurück. Die
Identität soll genauso sein: wenige Regeln, überall dieselben, kein Schmuck.

Drei Sätze, die alles Weitere begründen:

1. **Orange heißt be spex.** Das Markenorange taucht in jedem Programm genau einmal als Zeichen auf: im
   Schriftzug als der Teil, der die Idee trägt, im Icon als ein Akzent. Für den Rest ist es zu laut.
2. **Jede App hat ihre Farbe.** Die Akzentfarbe kommt aus dem Icon und gilt auch für Website-Karte und App-Seite.
   So erkennt man Programme der Familie, ohne dass sie gleich aussehen. **In Schriftzügen nicht:** Dort gibt es
   höchstens zwei Farben, und die einzige echte Farbe ist das Markenorange (siehe §7).
3. **Der Name erklärt sich.** Schriftzüge heben hervor, was der Name bedeutet: das Datenformat bei den Qiew-Viewern,
   die Idee bei den anderen Programmen.

## 2 Markenarchitektur

```
be spex                         die Marke (Absender)
├── Qiew                        Familie: ein kleiner Viewer je Dateiart
│   ├── Trisq   TSX/JSX         ├── Marq    Markdown       ├── Jayq   JSON
│   ├── Xaq     XML             ├── Hyqe    HTML           ├── Cusq   CSV
│   ├── Dirq    Diff            └── Maiqe   Mermaid
├── Tray-Helfer                 kleine Programme in der Leiste
│   ├── Maillet   Mail          ├── HatRack   Arbeitskontexte
│   └── PocketTray  Tray-Ordnung
└── Arbeitsplatz                Programme, die man neben der Arbeit offen hat
    └── CodeDeck  KI-Sitzungen
```

- **be spex** ist immer der Absender, nie Teil des Programmnamens („be spex CodeDeck“ ist Absender + Name).
- **Qiew** ist eine Familie mit eigenem Schriftzug, aber ohne eigenes Icon. Die Viewer tragen das Familienzeichen
  im Namen: das **q**.
- **Tray-Helfer** und **Arbeitsplatz** sind Gruppen für die Icon-Form, keine Marken. Sie erscheinen nicht als Namen.

## 3 Schreibweisen

| Wo | Schreibweise | Beispiel |
|---|---|---|
| Fließtext, Titel, UI | `be spex`: klein, mit Leerzeichen | „Ein Programm von be spex“ |
| Technik (Domains, Pakete, Repos, IDs) | `bespex`: ohne Leerzeichen | `bespex.run`, `github.com/bespex` |
| Nicht mehr verwenden | `be-spex`, `BeSpex`, `Be Spex` | |
| Programmnamen im Text | groß am Anfang, sonst wie gewählt | Jayq, CodeDeck, HatRack, PocketTray |
| Schriftzüge (Logo) | klein, außer wo das Logo es anders zeigt | `jayq`, `codeck`, `maillet` |
| Befehle | klein | `jayq`, `codeck`, `hatrack` |

**Gefunden beim Durchsehen:** Die `.desktop`-Dateien schreiben „– by be-spex“ (Hyqe, Xaq, HatRack), `Cargo.toml` von
CodeDeck „by be-spex“. Neu: „– be spex“. `be-spex-archive-keyring` bleibt als Paketname, weil Nutzer ihn schon
installiert haben.

**CodeDeck** (D24): Name in Text, Dateien und Verzeichnissen ist „CodeDeck“, Befehl und Schriftzug `codeck`.

**Produkt und Programm:** Besteht ein Produkt aus mehreren Teilen, heißt das Ganze nach dem Produkt und das Programm
nach seinem Befehl. Das Ganze ist dann ein **Metapaket** mit dem Produktnamen, das das Programm und seine Helfer
mitbringt; das Programm hat sein eigenes Paket. Vorbild ist `qiew` (Metapaket) mit `marq`, `jayq` …

| Produkt | Metapaket | Programm (Befehl, Paket) | Helfer (empfohlen) |
|---|---|---|---|
| Qiew | `qiew` (mit `qiew-setup`) | `marq`, `jayq`, `xaq`, … | – |
| CodeDeck | `codedeck` | `codeck` | `marq`, `dirq`, `jayq` |

Einzelne Programme ohne Helfer (Maillet, HatRack, PocketTray) brauchen kein Metapaket: Paket = Befehl.

**Aussprache** steht für jede App in `apps.ts` (`say`, `ipa`) und gehört auch in die README, gleich unter den Titel.
Neu: CodeDeck „Codeck“ (ˈkoʊdɛk).

## 4 Farben

| Rolle | Wert | Verwendung |
|---|---|---|
| Markenorange | `#f26500` | „be“, hervorgehobener Teil jedes Schriftzugs, das **q** der Viewer |
| Orange hell | `#ff8a3c` | Orange auf dunklem Grund (Text, Links), Verlauf im Icon |
| Orange für Text | `#b84a00` | Links und orange Schrift auf hellem Papier (Kontrast) |
| Markengrau | `#7b828c` | „spex“ auf hellem Grund, zweiter Teil der Schriftzüge |
| Weiß für „spex“ | `#f1f2f4` | „spex“ und zweite Teile auf dunklem Grund |
| Papier / Nacht | `#fbfaf7` / `#131417` | Hintergrund der Website, Dokumente |
| Schrift | `#1d1f23` / `#ecedf0` | Text hell / dunkel |

**App-Akzente** (aus den Icons, bleiben so): Trisq `#12909a` · Marq `#2f6fe0` · Jayq `#7c4ddb` · Xaq `#0f9d7a` ·
Hyqe `#c4452d` · Cusq `#4d7c0f` · Dirq `#be185d` · Maiqe `#b45309` · Maillet `#6d5ef5` · PocketTray `#8fa3c4` ·
HatRack `#2fa7e0` (aus dem Icon, neu in `apps.ts`) · CodeDeck `#6366f1` (Indigo, „KI“ in der App).

Regel: Die App-Farben erscheinen in Icons, Website-Karten und App-Seiten, nie im Schriftzug.

## 5 Schrift

- **Open Sans** (frei, OFL; die Website lädt sie schon als `@fontsource-variable/open-sans`) für alles: Text 400,
  Hervorhebung 600, Schriftzüge 800 mit enger Laufweite (−0,03 em) wie heute „be spex“ auf der Website.
- **Monospace** für Befehle, Dateinamen und Code: System-Monospace (JetBrains Mono, DejaVu Sans Mono).
- Logos werden als SVG mit **Pfaden** ausgeliefert, nicht als Text. Die URL-Schriftzüge in `Logos/` nutzen heute
  „Nimbus Sans“ als Schrift im SVG. Auf Rechnern ohne diese Schrift sieht das anders aus. Neu setzen in Open Sans 800,
  dann in Pfade wandeln.

## 6 Die Dachmarke „be spex“

- **Hauptform:** „be“ (orange) über „spex“ (grau, dunkel: weiß), linksbündig, eng gesetzt. So zeigt es heute
  `be-spex.png` und der Website-Kopf.
- **Einzeilig:** „be spex“, „be“ orange, „spex“ grau. Für Fußzeilen, About-Dialoge und kleine Absenderzeilen.
- **Plakette:** der runde Metall-Badge (`be-spex-logo.png`, `be-spex-badge.webp`). Nur für Avatar und Profilbild
  (GitHub-Organisation, Social), nicht in Programmen, weil er bei kleiner Größe matschig wird.
- **Schutzraum:** um das Logo herum mindestens die Höhe des „e“ frei. Nicht dehnen, nicht umfärben, keine Schatten.

## 7 Schriftzüge der Programme

**Farbregel für alle Schriftzüge:** höchstens zwei Farben, davon eine echte Farbe: das Markenorange. Die andere
ist neutral (Weiß, Grau, Schwarz, je nach Grund). Eine dritte Stufe ist erlaubt, wenn sie dieselbe neutrale Farbe
mit Transparenz ist; dann bleibt Orange trotzdem die einzige Farbe.

### Qiew-Viewer: das Format hervorheben

Regel für alle acht:

- **Buchstaben, die zum Datenformat gehören, voll in Schriftfarbe.**
- **Die übrigen Buchstaben in derselben Farbe, halb durchsichtig** (50 %).
- **Das q im Markenorange**: das Familienzeichen von Qiew und die Verbindung zu be spex.
- Alles klein, Open Sans 800. Die App-Farbe bleibt im Icon.

| App | Schriftzug (voll / halb / **q** orange) | Warum diese Buchstaben |
|---|---|---|
| Trisq | T voll, ri halb, s voll, **q** | **T**S**X**: T und S |
| Marq | Mar voll, **q** | **Mar**kdown |
| Jayq | Jay voll, **q** | JSON, gesprochen „**Jay**son“ |
| Xaq | X voll, a halb, **q** | **X**ML |
| Hyqe | Hy voll, **q**, e halb | **Hy**perText (HTML) |
| Cusq | C voll, u halb, s voll, **q** | **C**S**V**: C und S |
| Dirq | Di voll, r halb, **q** | **Di**ff |
| Maiqe | Mai voll, **q**, e halb | mer**mai**d |

Die Familie selbst: **Qiew**, `Q` orange, `iew` voll in Schriftfarbe: „Quick view“.

### Die anderen Programme: die Idee hervorheben

Regel: **Der Teil, der die Idee trägt, im Markenorange**, der Rest im Markengrau (dunkel: weiß). Klein, Open Sans
800. So zeigen es schon die URL-Schriftzüge in `Logos/` (code|deck, mail|let).

| App | Schriftzug | Idee |
|---|---|---|
| CodeDeck | co·**de**·ck | code und deck teilen sich „de“ (D24) |
| Maillet | **mail**·let | Mail |
| HatRack | **hat**·rack | der Hut, den man aufsetzt |
| PocketTray | **pocket**·tray | die Tasche für selten gebrauchte Icons |

### Vollständiger Titel

Der Name steht nie allein, wo jemand ihn zum ersten Mal sieht. Muster:

> **Name** – Art · Familie · be spex

| App | Vollständiger Titel |
|---|---|
| Jayq | Jayq – JSON viewer · Qiew · be spex |
| CodeDeck | CodeDeck – AI session radar for Linux · be spex |
| Maillet | Maillet – Mail in your tray · be spex |

„Art“ ist das Feld `kind` aus `apps.ts`, die Unterzeile in Lockups ist `tagline`. Ohne Familie entfällt der
mittlere Teil.

## 8 Icons

Drei Formen, eine Bauweise: 512 × 512, abgerundet, ein **heller Hauptglyph** und **ein orangefarbener Akzent**
(Markenorange oder ein warmes Gelb-Orange).

| Form | Für | Aufbau | Heute |
|---|---|---|---|
| **Blatt** | Qiew-Viewer | Dokument mit Eselsohr oben rechts, Verlauf in der App-Farbe, weißer Glyph des Formats, ein Akzent in Orange | alle acht stimmen |
| **Rahmen** | Tray-Helfer | dunkle Fläche, dicker Rahmen in der App-Farbe, heller Glyph | Maillet, HatRack. PocketTray weicht ab (Fläche ohne Rahmen, goldene Dreiecke); Vorschlag: Rahmen in `#8fa3c4` ergänzen |
| **Fläche** | Arbeitsplatz | dunkle Fläche mit Verlauf (`#3a3f46` → `#1b1e22`), Glyph in Orange und App-Farbe | CodeDeck (Stapel: orange = du, indigo = KI) |

- **Größen:** 16, 24, 32, 48, 64, 128, 256, 512 px im hicolor-Theme. Unter 32 px entfallen Eselsohr und Verlauf,
  der Glyph wird dicker (eigene kleine Fassung, nicht nur verkleinert).
- **Symbolische Fassung** (einfarbig, `-symbolic.svg`) für Tray und Panel: nur der Glyph, `currentColor`. Pflicht
  für Tray-Helfer, für CodeDeck mit der Seitenleiste sinnvoll.
- **Favicon:** das Icon selbst; für be spex das „be“ in Orange auf Papier.

## 9 Lockups (Icon + Schriftzug)

| Form | Aufbau | Wo |
|---|---|---|
| **Kopf** | Icon (Höhe = 2 Zeilen) · Schriftzug · darunter `tagline` klein | README-Kopf, App-Seite, About-Dialog |
| **Zeile** | Icon (Höhe = Versalhöhe × 1,4) · Schriftzug | Website-Karte, Menüs, Dokumentkopf |
| **URL** | Schriftzug · `.bespex.run` in Schriftfarbe, normale Stärke, Punkte als Kreise | Folien, Aufkleber, Social-Bilder (wie `Logos/url-*.svg`) |
| **Absender** | „be spex“ einzeilig, klein, rechts oder unten | Fußzeilen, About, Dokumente |

## 10 Domains und Kennungen

| Was | Regel | Beispiele |
|---|---|---|
| Hauptseite | `bespex.run`, bis zum Umzug weiter `bespex.github.io` (Umzug: GitHub Pages mit eigener Domain, alte Adresse leitet um) | |
| App | `<befehl>.bespex.run` → App-Seite der Website | `maillet.bespex.run`, `jayq.bespex.run` |
| Produkt mit mehreren Teilen | `<produkt>.bespex.run` führt, der Befehl leitet dorthin weiter (dieselbe Seite) | `codedeck.bespex.run` ← `codeck.bespex.run`; `qiew.bespex.run` |
| Familie | `qiew.bespex.run` → Qiew-Abschnitt | |
| Weiterleitungen | Befehle von Produkten, Langformen, alte Namen | `codeck.bespex.run` → `codedeck.bespex.run` |
| Pakete | APT-Quelle unter `bespex.run/apt` (Repository `bespex/apt`), Schlüssel als ASCII unter `bespex.run/key.asc`; weitere Formate je Pfad: `bespex.run/rpm`, `bespex.run/arch` | |
| App-ID | bleibt `net.spex.<app>` (alle zehn Tauri-Apps nutzen sie; ein Wechsel verschiebt Einstellungen und Dateizuordnungen). Für Flathub braucht es eine bestätigte Domain: dann `run.bespex.<app>`, als eigene Entscheidung | |
| Repos | `github.com/bespex/<Name>` | `bespex/CodeDeck`, `bespex/Qiew` |

Subdomains folgen dem **Befehl**, wo Programm und Produkt dasselbe sind (kurz, klein, eindeutig). Hat ein Produkt
mehrere Teile, führt der **Produktname**, und der Befehl leitet weiter: `codedeck.bespex.run` (entschieden
2026-11-16), `codeck.bespex.run` zeigt dieselbe Seite.

## 11 Wo was zu sehen ist

| Ort | Was erscheint | Form |
|---|---|---|
| **Fenstertitel** | `Datei – Name` bzw. `Projekt – CodeDeck`, bei Bedarf mit Zustand vorn („● 2 warten · …“) | Text |
| **App-Kopf / Menü** | Icon klein + Name als Text; der Schriftzug nur, wo Platz ist (CodeDeck: Kopf der rechten Spalte) | Zeile |
| **About-Dialog** | Icon groß, Schriftzug, `kind`, Version, Aussprache, „be spex“ als Absender, Link zur Subdomain, Lizenz | Kopf + Absender |
| **Menüpunkt „Über …“** | „Über Jayq“, nicht „About be spex“ | Text |
| **CLI** | `jayq --version` → `jayq 1.4.0 · be spex`; `--help` beginnt mit dem vollständigen Titel | Text |
| **Desktop (`.desktop`)** | `Name` = Name, `GenericName` = `kind`, `Comment` = `tagline` + „– be spex“, `Icon` = Befehl | Text + Icon |
| **Paketbeschreibung (APT)** | erste Zeile = vollständiger Titel ohne „be spex“, dann `description` | Text |
| **Website, Startseite** | „be spex“ groß im Kopf, Programme als Karten in der App-Farbe (Icon + Name + `kind` + `tagline`), Qiew als Gruppe mit Schriftzug | Kopf, Zeile |
| **Website, App-Seite** | Kopf-Lockup mit Schriftzug, Screenshots, Install-Zeile, Aussprache | Kopf |
| **Social-/OG-Bild** (1200 × 630) | Schriftzug groß, `tagline`, Screenshot angeschnitten, „be spex“ unten rechts, Hintergrund Nacht mit App-Farbe als Schein | Kopf + URL |
| **GitHub-Repo** | README: Kopf-Lockup (hell/dunkel per `<picture>`), Aussprache, ein Satz, Screenshot; Social Preview (1280 × 640) wie OG-Bild; Beschreibung = `search` gekürzt; Topics `linux`, Format | Kopf |
| **GitHub-Organisation** | Avatar = Plakette, Beschreibung „small, focused apps for Linux“, Link `bespex.run` | Plakette |
| **Dokumente** (Konzepte, PDFs, Folien) | Kopf: Zeile-Lockup der App links, „be spex“ rechts; Fußzeile: Titel · Datum · Seite; Schrift Open Sans; Orange nur für Überschriften-Akzent | Zeile + Absender |
| **Folien** | Titelfolie mit Kopf-Lockup auf Nacht, letzte Folie mit URL-Lockup | Kopf, URL |
| **Aufkleber / Druck** | URL-Lockup oder Icon allein | URL |

## 12 Ton

- Englisch als Grundsprache (Website, Programme, README), Deutsch als Übersetzung der Programme.
- Kurze, konkrete Sätze, die sagen, was man **sieht** oder **tut**. Keine Superlative, kein „revolutionär“, kein
  „AI-powered“ als Schlagwort.
- Taglines folgen dem Muster der Website: was es zeigt, und was es nicht tut („– just to read“, „never writes to it“).

## 13 Nächste Schritte (Vorschlag)

1. Offen: PocketTray-Rahmen, App-ID bleibt. Entschieden (2026-11-16): Ort `brand/`, Schriftzüge mit höchstens zwei
   Farben (Orange + neutral, Transparenz erlaubt).
2. Schriftzüge und Lockups als SVG-Pfade erzeugen (Open Sans 800), hell und dunkel, in `brand/`.
3. Schreibweisen bereinigen: „be-spex“ in `.desktop`, `Cargo.toml`, README; `--version` angleichen.
4. Website: Schriftzüge auf App-Seiten und Karten, HatRack und CodeDeck in `apps.ts`, OG-Bilder je App.
5. Domains: `bespex.run` als Pages-Domain, Subdomains als Weiterleitungen auf die App-Seiten.
6. In den Apps: About-Dialog nach §11 (CodeDeck: zusammen mit Schritt A der Seitenleiste).
