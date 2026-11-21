---
layout: ../../../../../layouts/Manual.astro
title: "Übergabe: Nächster Prompt"
part: 2
order: 7
purpose: >-
  Du verstehst, was Anhängen bedeutet, was du alles an den nächsten Prompt hängen kannst und wie es beim Coding-Agent ankommt.
draft: true
---

<aside class="plan">

**Arbeitsanweisung:** Entspricht den Schritten 6 und 7 der Führung. Prüfen: `NextPromptView.tsx`, `AttachmentList.tsx`,
 `AttachTarget.tsx`, `src/attachments.ts`, `changes.ts`, `bridge.rs` (Übergabe), `harness/claude.rs` `reply`.
 Bilder: Reiter Nächster Prompt mit Anhängen aller Arten, Zusammenfassung in der Session-Spalte, Auswahl „Für“
 bei mehreren Sessions, Quittung nach dem Prompt.

</aside>

## Was Anhängen bedeutet

<aside class="plan">

**Inhalt:** Du sammelst, was die KI für ihre nächste Runde wissen soll; CodeDeck hängt es an deinen nächsten Prompt.
   Nichts wird in den Chat kopiert.

</aside>

## Was du anhängen kannst und wo

<aside class="plan">

**Inhalt:** Dateien (Dateiliste), Änderungen (Runde, Commit, Datei in Änderungen), Kommentare zu Zeilen (Sprechblase),
   @ai-Hinweise (Werkbank). Je Art ein Bild der Büroklammer an ihrem Ort.

</aside>

## Wie es beim Coding-Agent ankommt

<aside class="plan">

**Inhalt:** Ablauf beim Abschicken: Der Coding-Agent meldet den Prompt, CodeDeck fügt die Anhänge als Text an; Dateien als
   Pfad, Änderungen als Git-Befehl, Kommentare mit Datei und Zeile. Danach ist die Liste leer, die Quittung zeigt,
   wer was bekam. Was bei Coding-Agents ohne diese Fähigkeit passiert (Zwischenablage, Anhang B).

</aside>

## Für welche Session

<aside class="plan">

**Inhalt:** Bei mehreren Sessions: bewusst wählen; ohne Wahl wartet CodeDeck. Die Zusammenfassung in der Session-Spalte
   und „Öffnen“.

</aside>

## Der genaue Text und die Startregeln

<aside class="plan">

**Inhalt:** Was der Reiter zeigt, Entfernen einzelner Anhänge, die Startregeln (was jede neue Session einmal bekommt).
   Tokens: die Schätzung und warum große Anhänge teuer sind.

</aside>

## Probier es aus

<aside class="plan">

**Inhalt:** Eine Datei und einen Kommentar anhängen, den nächsten Prompt schicken und die Quittung ansehen.

</aside>
