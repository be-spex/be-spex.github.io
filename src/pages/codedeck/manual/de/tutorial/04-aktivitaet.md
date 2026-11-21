---
layout: ../../../../../layouts/Manual.astro
title: "Während sie arbeitet: Aktivität"
nav: "Aktivität"
part: 2
order: 4
purpose: >-
  Du verstehst die Zeitleiste der Sessions, siehst, wie sicher deine Arbeit gerade ist, und liest den Verbrauch deines Kontos ab.
draft: true
---

Deine Session arbeitet jetzt an ihrem Auftrag. Während du wartest oder an etwas anderem arbeitest, gibt dir der Reiter **Aktivität** den Überblick über die letzten Stunden.

## Das Deck und seine vier Reiter

Das **Deck** in der Mitte des Fensters hat vier Reiter. Jeder beantwortet eine Frage, die sich während einer Runde stellt, und die Frage des offenen Reiters steht rechts in der Reiterleiste:

- **Aktivität**: Was tun die Sessions?
- **Änderungen**: Was hat die KI geändert? Die Zahl am Reiter nennt die Dateien, die noch nicht committet sind.
- **Werkbank**: Was ist sonst entstanden, das noch nicht zum Projekt gehört? Ein Punkt am Reiter zeigt, dass dort etwas Neues liegt, die Zahl, was noch auf eine Entscheidung wartet.
- **Nächster Prompt**: Was hängst du an deinen nächsten Prompt? Die Zahl nennt die Anhänge.

Zeigst du mit der Maus auf einen Reiter, erklärt er in ein paar Sätzen, wofür er da ist. Ein Projekt öffnet im Reiter Änderungen.

## Die Zeitleiste lesen

Oben im Reiter Aktivität steht die **Zeitleiste** des Tages. Jede KI-Session hat darin eine Zeile mit ihrem Kurznamen, ihrem Titel, der Zahl ihrer Runden und dem Zeitpunkt, an dem sie zuletzt aktiv war.

![Der Reiter Aktivität: oben die Zeitleiste mit drei Sessions, darunter „Wie sicher ist deine Arbeit“ mit 6 Dateien, 3 Commits und 9 Snapshots, dann die Verbrauchskarten zweier Konten und die Liste „Geschriebene Dokumente“](/codedeck/manual/de/aktivitaet-reiter.webp)

Die Blöcke in einer Zeile zeigen, was die Session wann getan hat. Die Legende über der Zeitleiste nennt die Zeichen:

- Ein **gefüllter Block** bedeutet, dass die Session gearbeitet hat. Ein Block entspricht ungefähr einer Runde.
- Ein **gerahmter Block** bedeutet, dass die Session dich etwas gefragt und auf deine Antwort gewartet hat.
- Ein **gestreifter Block** bedeutet, dass die Runde zwar vorbei war, aber etwas weiterlief, das die Session gestartet hatte, zum Beispiel ein Build. Weiß CodeDeck nicht, wann es endete, läuft der Block blass aus.
- Ein kleines **Dreieck** unter der Zeile markiert einen Snapshot, den CodeDeck vor einer Runde angelegt hat.
- Die senkrechte Linie zeigt die aktuelle Uhrzeit.

Zeigst du mit der Maus auf einen Block, siehst du den Prompt, der die Runde ausgelöst hat, und wie lange die Session gearbeitet und gewartet hat. Mit den Pfeilen oben links blätterst du zu früheren Tagen, das Kalendersymbol bringt dich zurück zu heute. Mit **Strg** und dem Mausrad zoomst du an der Stelle des Mauszeigers hinein, durch Ziehen verschiebst du den Ausschnitt, und ein Doppelklick zeigt wieder den ganzen Tag. Das Fragezeichen neben der Überschrift erklärt alle Zeichen und Begriffe.

## Wie sicher ist deine Arbeit

Darunter fasst CodeDeck in drei Zahlen zusammen, wie gut deine Arbeit gerade gesichert ist:

- **Nicht committet** zählt die Dateien mit Änderungen, die noch nicht in Git gesichert sind. Sie gibt es nur in deinem Projektordner und in den Snapshots.
- **Committet, noch nicht gepusht** zählt die Commits, die nur auf deinem Rechner liegen und noch nicht auf dem Server.
- **Snapshots zum Zurückgehen** zählt die Snapshots, zu denen du zurückkehren kannst.

Der Satz darunter sagt, was das für dich bedeutet, zum Beispiel „Was noch nicht in Git gesichert ist, gibt es nur in deinem Ordner und in den Snapshots.“ Ist alles gepusht, steht dort, dass nichts gefährdet ist. Was Commit und Push genau sind, erklären die [Git-Grundlagen](/codedeck/manual/de/nachschlagen/git-grundlagen/).

## Verbrauch des Kontos

Die meisten Coding-Agents arbeiten mit einem **Kontingent**: In einem bestimmten Zeitraum darfst du nur eine gewisse Menge nutzen, danach musst du warten, bis es neu beginnt. Der Abschnitt **Verbrauch** zeigt für jedes Konto eine Karte mit einem Balken je Zeitraum, bei Claude Code für die letzten fünf Stunden und für die Woche.

Jeder Balken nennt, wie viel Prozent verbraucht sind, wann das Kontingent neu beginnt und wie viel des Zeitraums schon vorbei ist. Die weiße Markierung im Balken zeigt diesen Anteil der Zeit: Reicht der Balken über die Markierung hinaus, verbrauchst du schneller, als die Zeit vergeht. Wird es knapp, färbt sich der Balken bernsteinfarben und warnt **bei diesem Tempo vor dem Reset aufgebraucht**.

CodeDeck schätzt dabei nichts, die Zahlen kommen vom Coding-Agent selbst über seine Statuszeile, und zwar mit einer laufenden Session. Bevor die erste Session geantwortet hat, gibt es deshalb noch keine Zahlen. Wenn die Zahlen noch nicht eingerichtet sind, klickst du auf die Balken oben in der Sessionspalte und dort auf **Einrichten…**. Die Balken in der Sessionspalte zeigen nur das Konto des Projekts, die Karten hier alle Konten. Mehr dazu steht unter [Konten und Verbrauch](/codedeck/manual/de/nachschlagen/konten/).

## Geschriebene Dokumente und die Glocke

Ganz unten listet **Geschriebene Dokumente** die Markdown-, HTML- und Textdateien, die deine Sessions in den letzten 24 Stunden geschrieben haben, die neueste oben. Oft ist ein solches Dokument das eigentliche Ergebnis einer Runde, etwa ein Konzept oder eine Zusammenfassung. Mit dem Auge öffnest du es zum Lesen, mit dem Stift zum Bearbeiten in deinem Editor.

Die **Glocke** rechts in der Reiterleiste öffnet **Hinweise und Tipps**. Dort findest du Tipps zum gerade offenen Reiter, die letzten Ereignisse im Projekt unter **Was geschah**, was jeder Coding-Agent mit CodeDeck kann, und unter **Erkannt auf diesem Rechner**, welche Programme CodeDeck gefunden hat.

![Die geöffnete Glocke „Hinweise und Tipps“: oben „Gut zu wissen“ mit zwei Tipps, darunter „Was geschah“ mit den letzten Ereignissen und ihren Uhrzeiten](/codedeck/manual/de/aktivitaet-glocke.webp)

## Probier es aus

Gib deiner Session einen Auftrag und öffne den Reiter **Aktivität**, während sie arbeitet. Beobachte, wie in ihrer Zeile ein Block wächst. Zeige danach mit der Maus auf den Block und lies den Prompt nach. Sieh dir unter **Wie sicher ist deine Arbeit** an, wie viele Dateien noch nicht committet sind, und öffne zum Schluss die Glocke.

## Mehr dazu

- [KI-Sessions](/codedeck/manual/de/nachschlagen/sessions/): Runden, Hintergrundaufgaben und was CodeDeck über eine Session weiß.
- [Konten und Verbrauch](/codedeck/manual/de/nachschlagen/konten/): Verbrauch einrichten und mehrere Konten.
- [Snapshots](/codedeck/manual/de/nachschlagen/snapshots/): wann CodeDeck sie anlegt und wie lange sie bleiben.
