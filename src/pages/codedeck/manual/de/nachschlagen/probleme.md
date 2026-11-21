---
layout: ../../../../../layouts/Manual.astro
title: "Wenn etwas nicht klappt"
nav: "Wenn etwas nicht klappt"
part: 3
order: 14
purpose: >-
  Antworten auf häufige Fragen und Probleme, jeweils mit Ursache und Abhilfe.
draft: true
---

<aside class="plan">

**Arbeitsanweisung:** Als Fragen formuliert, je Antwort Ursache und Abhilfe. Fragen aus Praxistests und Rückmeldungen sammeln
 (`docs/PLAN.md`, `docs/praxistest-*`). Startliste unten, beim Schreiben ergänzen.

</aside>

## CodeDeck sieht meine Session nicht

<aside class="plan">

**Inhalt:** Coding-Agent nicht verbunden, Session vor dem Verbinden gestartet.

</aside>

## Die Frage steht im Terminal, aber nicht in der Desktop-App

**Was du siehst:** CodeDeck meldet, dass eine KI-Session fragt, zum Beispiel um Erlaubnis für einen Befehl. In der Desktop-App deines Coding-Agents, im Browser oder auf dem Handy erscheint die Frage aber nicht, und die Session wirkt dort, als hinge sie. Öffnest du die Session im Terminal, steht die Frage dort.

**Ursache:** Eine Erlaubnisfrage stellt der Coding-Agent in dem Programm, in dem die Session tatsächlich läuft, also im Terminal. Bei Claude Code sollen solche Fragen über Remote Control auch an die Desktop-App, den Browser und das Handy weitergereicht werden. Das klappt derzeit nicht zuverlässig: Je nach Version von Claude Code und je nach Art der Frage kommt sie dort an oder nicht. Das ist ein bekanntes Problem von Claude Code, für das es zahlreiche Fehlermeldungen gibt, und keines von CodeDeck. CodeDeck greift in die Erlaubnisfragen nicht ein.

**Abhilfe:** Öffne die Session im Terminal und beantworte die Frage dort. In der Sessionspalte geht das mit dem Werkzeug **In einem Terminal öffnen**, das erscheint, wenn du mit der Maus auf die Karte zeigst, oder mit einem Klick der mittleren Maustaste auf die Karte. Läuft die Session in tmux, schließt du das Terminalfenster danach einfach wieder, die Session läuft weiter. Danach kannst du in der Desktop-App wie gewohnt weiterarbeiten.

Das Verhalten wird weiter beobachtet. Sobald klar ist, wann Fragen ankommen und wann nicht, wird CodeDeck darauf eingestellt.

## ▶ und ＋ fehlen

<aside class="plan">

**Inhalt:** tmux oder Coding-Agent fehlen; Rechner-Check.

</aside>

## Terminal öffnet sich nicht

<aside class="plan">

**Inhalt:** kein Terminal-Programm gefunden, `$TERMINAL`.

</aside>

## Pull ist gesperrt

<aside class="plan">

**Inhalt:** Gründe und Abhilfe.

</aside>

## Diagnose kopieren und Fehler melden

<aside class="plan">

**Inhalt:** CodeDeck-Menü.

</aside>
