---
layout: ../../../../../layouts/Manual.astro
title: "Wenn eine Runde fertig ist: Änderungen"
nav: "Änderungen"
part: 2
order: 5
purpose: >-
  Du siehst dir an, was eine Runde geändert hat, kommentierst einzelne Zeilen für die KI und markierst Dateien als angesehen.
draft: true
---

<aside class="plan">

**Arbeitsanweisung:** Entspricht Schritt 4 der Führung; zentrales Kapitel, besonders ausführlich. Prüfen: `ChangesView.tsx`,
 `DiffParts.tsx`, `src/turns.ts`, `src/notes.ts`, `src/reviewed.ts`, `RowTools.tsx`. Bilder: Änderungen „alles
 nicht Committete“, eine Runde gewählt, Kommentar an einer Zeile, Schalter „Angesehen“, Werkzeuge einer Zeile,
 Kurzbericht der Runde.

</aside>

## Was eine Runde ist

<aside class="plan">

**Inhalt:** Alles, was eine KI-Session auf einen deiner Prompts hin tut, bis sie fertig ist und wieder auf dich wartet.
   Warum CodeDeck in Runden denkt (Sicherungspunkt am Anfang und Ende).

</aside>

## Den Diff lesen

<aside class="plan">

**Inhalt:** Was ein Diff ist (für Leser ohne Git-Erfahrung, Link Git-Grundlagen). Ansicht Struktur und Code, Zeichen für
   neu, geändert, gelöscht, verschoben. Farbe der Session, die eine Datei geschrieben hat.

</aside>

## Was du dir ansiehst: jetzt, Runde, Commit, Sicherungspunkt

<aside class="plan">

**Inhalt:** Die Auswahl oben (Frühere, Runden, „Alles nicht Committete“) und die Wahl über den Trail; Vergleich zweier
   Punkte mit Strg+Klick.

</aside>

## Zeilen kommentieren

<aside class="plan">

**Inhalt:** Die Sprechblase an einer Zeile; der Kommentar geht mit dem nächsten Prompt an die KI. Strg+Enter.

</aside>

## Dateien als angesehen markieren

<aside class="plan">

**Inhalt:** Der Schalter „Angesehen“ und der Hinweis „seit dem Ansehen geändert“.

</aside>

## Dateien öffnen und anhängen

<aside class="plan">

**Inhalt:** Die Werkzeuge einer Zeile beim Überfahren: ansehen, bearbeiten, in Dirq öffnen, anhängen. Kein Doppelklick.

</aside>

## Probier es aus

<aside class="plan">

**Inhalt:** Nach einer Runde den Diff durchgehen, eine Zeile kommentieren und eine Datei als angesehen markieren.

</aside>
