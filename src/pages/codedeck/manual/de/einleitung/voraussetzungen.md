---
layout: ../../../../../layouts/Manual.astro
title: "Für wen CodeDeck gedacht ist"
nav: "Für wen es gedacht ist"
part: 1
order: 4
purpose: >-
  Diese Seite hilft dir einzuschätzen, ob CodeDeck zu deiner Arbeitsweise passt, und sagt, was du auf deinem Rechner dafür brauchst.
---

## Wem CodeDeck am meisten nützt

CodeDeck ist für Menschen gemacht, die mit einem Coding-Agent an echten Projekten arbeiten und nicht nur gelegentlich eine Frage stellen. Am meisten hast du davon, wenn du der KI größere Aufgaben gibst und sie dann eine Weile allein arbeiten lässt. Dann willst du hinterher genau sehen, was sie getan hat, und du willst sicher zurückkönnen, wenn es nicht passt.

Besonders hilfreich wird CodeDeck, wenn du **mehrere KI-Sessions** gleichzeitig laufen lässt oder zwischen **mehreren Projekten** wechselst. Gerade dann geht im Chat allein leicht unter, wer gerade was tut und wer auf dich wartet.

Wenn du die KI dagegen nur ab und zu für eine kurze Frage nutzt und jede Antwort sofort selbst übernimmst, brauchst du CodeDeck vermutlich nicht.

## Was du mitbringen solltest

Du solltest ein Terminal grundsätzlich bedienen können, denn viele Coding-Agents laufen dort, und auch bei der Installation hilft es.

Git-Kenntnisse brauchst du dagegen nicht. CodeDeck nutzt Git im Hintergrund, und alles, was du darüber wissen musst, erklärt dir das Handbuch an der Stelle, an der es gebraucht wird. Wer genauer verstehen will, was hinter Begriffen wie Commit, Branch oder Push steckt, findet die Grundlagen auf der Seite [Git-Grundlagen](/codedeck/manual/de/nachschlagen/git-grundlagen/). Für Begriffe aus der KI-Welt gibt es entsprechend die [KI-Grundlagen](/codedeck/manual/de/nachschlagen/ki-grundlagen/).

## Was du auf deinem Rechner brauchst

CodeDeck läuft unter **Linux**. Außerdem braucht es drei Programme: **git** für den Stand und den Verlauf deiner Projekte, einen **Coding-Agent**, mit dem du arbeitest, und **tmux**, damit CodeDeck KI-Sessions für dich starten, fortsetzen und beenden kann. Als Coding-Agent unterstützt CodeDeck heute Claude Code. Weitere sollen folgen.

Ohne tmux funktioniert CodeDeck auch, dann aber nur als Beobachter: Es zeigt dir die KI-Sessions, die du selbst gestartet hast, kann aber keine neuen starten. Hilfreich sind außerdem ein Terminal-Programm, in dem CodeDeck eine Session mit einem Klick öffnen kann, und ein Symbol in der Leiste deines Desktops, über das du CodeDeck schnell nach vorn holst. Einige kleine Betrachter für Markdown, Diffs und andere Formate machen die Arbeit angenehmer, sind aber nicht nötig.

Du musst das alles nicht vorab prüfen. Beim ersten Start schaut CodeDeck nach, was auf deinem Rechner vorhanden ist, und sagt dir im **Willkommensfenster**, was fehlt und wofür es gebraucht wird. Ausführliche Hinweise zu den einzelnen Programmen findest du im Anhang unter [Programme](/codedeck/manual/de/anhang/programme/) und [Coding-Agents](/codedeck/manual/de/anhang/coding-agents/). Wenn dein Desktop unter Wayland läuft, lies dort auch die Seite [Wayland und X11](/codedeck/manual/de/anhang/wayland/), denn einige Funktionen verhalten sich dann etwas anders.
