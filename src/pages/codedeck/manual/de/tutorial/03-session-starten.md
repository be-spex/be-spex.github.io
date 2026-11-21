---
layout: ../../../../../layouts/Manual.astro
title: "Eine KI-Session starten und verfolgen"
nav: "KI-Session starten"
part: 2
order: 3
purpose: >-
  Du startest eine KI-Session, erkennst an ihrem Status, was sie gerade tut, und antwortest ihr, wenn sie dich etwas fragt.
draft: true
---

<aside class="plan">

**Arbeitsanweisung:** Entspricht Schritt 2 der Führung. Prüfen: `SessionsPanel.tsx` (Liste, Karte, Knopfzeile, „Früher“),
 `HeaderBar.tsx` (StartButtons, Konto), `src-tauri/src/tmux.rs`, `doors.rs`. Bilder: Session-Spalte mit
 arbeitender, fragender und fertiger Session; Knöpfe ▶ und ＋; eine Frage mit Befehl; „Wird gestartet …“.

</aside>

## Was eine KI-Session ist

<aside class="plan">

**Inhalt:** Ein Gespräch mit dem Coding-Agent in einem Projekt, das in einem Terminal oder der Desktop-App läuft. Kurz,
   mit Link ins Nachschlagen → Sessions.

</aside>

## Eine Session starten

<aside class="plan">

**Inhalt:** Zwei Wege: mit ＋ (neues Gespräch) bzw. ▶ (letztes Gespräch fortsetzen) in CodeDeck, dann läuft sie in tmux;
   oder wie gewohnt im eigenen Terminal. In beiden Fällen erscheint sie mit dem ersten Schritt. Die Zeile
   „Wird gestartet …“ und warum eine neue Session oft erst etwas fragt (Ordner vertrauen).

</aside>

## Den Status lesen

<aside class="plan">

**Inhalt:** Die Zustände mit Bild und Farbe: arbeitet, fragt, Runde fertig (bis angesehen), untätig, beendet. Die Frage
   mit dem Befehl, um den es geht; die letzten Worte nach einer Runde. Reihenfolge der Liste, „Früher“.

</aside>

## Antworten, Terminal, Desktop

<aside class="plan">

**Inhalt:** Was „Antworten“ tut: dorthin wechseln, wo die Session läuft. Warum eine Frage im Terminal steht und nicht in der
   Desktop-App (die Frage ist ein Dialog im Programm, in dem die Session läuft). „Runde ansehen“, „Fortsetzen“,
   Beenden; was bei von Hand gestarteten Sessions anders ist.

</aside>

## Coding-Agent und Konto wählen

<aside class="plan">

**Inhalt:** Das Konto oben in der Spalte: mit welchem Coding-Agent und Konto neue Sessions starten; was mit laufenden
   Sessions passiert, wenn man wechselt. Verweis Nachschlagen → Konten und Verbrauch.

</aside>

## Probier es aus

<aside class="plan">

**Inhalt:** Eine Session mit ＋ starten, ihr eine kleine Aufgabe geben und den Status beobachten; auf eine Frage mit
   „Antworten“ reagieren.

</aside>
