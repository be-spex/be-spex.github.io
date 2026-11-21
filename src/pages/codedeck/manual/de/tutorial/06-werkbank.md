---
layout: ../../../../../layouts/Manual.astro
title: "Was sonst anfiel: Werkbank"
nav: "Werkbank"
part: 2
order: 6
purpose: >-
  Du weißt, wo Entwürfe und Wegwerf-Dateien der KI landen, wie du Brauchbares ins Projekt übernimmst und wie du der KI mit @ai-Hinweisen Aufgaben in Dateien hinterlässt.
draft: true
---

<aside class="plan">

**Arbeitsanweisung:** Entspricht Schritt 5 der Führung. Prüfen: `WorkbenchView.tsx`, `FoundTiles.tsx`, `HintsTile.tsx`,
 `src-tauri/src/scratch.rs`, `findings.rs`, `markers.rs`, `rules.rs` (die Startregel zum Scratch-Ordner). Bilder:
 Werkbank mit allen drei Kacheln, Ziehen einer Datei in den Dateibaum, ein @ai-Hinweis in einer Datei.

</aside>

## Warum es die Werkbank gibt

<aside class="plan">

**Inhalt:** KI-Sessions erzeugen nebenbei Entwürfe, Testdaten, Skripte. CodeDeck weist sie per Startregel an, diese in
   `.scratch/` abzulegen, damit sie nicht zwischen den echten Änderungen liegen.

</aside>

## Der Scratch-Ordner

<aside class="plan">

**Inhalt:** Was drin liegt, warum Git ihn ignoriert, Aufräumen (älter als 7 Tage), ins Projekt ziehen.

</aside>

## Woanders Abgelegtes und veröffentlichte Seiten

<aside class="plan">

**Inhalt:** Dateien, die Sessions außerhalb des Projekts geschrieben haben (z. B. /tmp), „In den Scratch-Ordner“;
   veröffentlichte Seiten mit Link.

</aside>

## @ai-Hinweise

<aside class="plan">

**Inhalt:** Eine Zeile mit `@ai` in einer Datei als Anweisung für die KI; Schreibweisen (`// @ai`, `# @ai`,
   `<!-- @ai`); anhängen mit der Büroklammer; der Hinweis verschwindet, wenn die KI ihn erledigt hat.

</aside>

## Probier es aus

<aside class="plan">

**Inhalt:** Einen @ai-Hinweis in eine Datei schreiben und an den nächsten Prompt hängen.

</aside>
