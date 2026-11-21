---
layout: ../../../../../layouts/Manual.astro
title: "Was CodeDeck dir abnimmt"
nav: "Was es dir abnimmt"
part: 1
order: 2
purpose: >-
  Diese Seite zeigt an sechs alltäglichen Fragen, wobei dir CodeDeck hilft, wenn du mit einer KI programmierst.
---

Bei der Arbeit mit einem Coding-Agent stellen sich immer wieder dieselben Fragen. Auf dieser Seite findest du sie der Reihe nach, so wie sie im Lauf eines Arbeitstags auftauchen, und jeweils die Antwort, die CodeDeck darauf gibt.

## Was tun meine KI-Sessions gerade?

Sobald mehr als eine **KI-Session** läuft, verliert man leicht den Überblick. Vielleicht arbeitet eine Session an einer neuen Funktion, während eine zweite die Dokumentation überarbeitet, und eine dritte hast du gestern Abend gestartet und fast vergessen.

CodeDeck zeigt dir alle Sessions eines Projekts in einer Liste. An jeder Session steht in wenigen Worten, was sie gerade tut, und wie lange sie schon dabei ist. Jede Session bekommt außerdem eine eigene **Farbe** und einen Kurznamen, die sie überall behält. So erkennst du auch an einer geänderten Datei oder an einem Punkt im Verlauf sofort, welche Session dahintersteckt.

Arbeitest du an mehreren Projekten, zeigt dir die **Projektliste**, in welchem Projekt eine Session gerade etwas von dir braucht. Du musst dafür nicht jedes Projekt einzeln öffnen.

## Wartet eine Session auf mich?

Eine KI-Session hält oft an, weil sie eine Rückfrage hat oder um Erlaubnis für einen Befehl bittet. Wenn du gerade in einem anderen Fenster arbeitest, kann sie dort lange unbemerkt warten.

CodeDeck hebt solche Sessions deutlich hervor und sagt dir, **worauf sie warten**. Genauso erfährst du, wenn eine Session mit ihrer Arbeit fertig ist und auf deinen nächsten Auftrag wartet. Auf Wunsch meldet sich CodeDeck dann auch über die Taskleiste und mit einer Nachricht auf dem Desktop. Wenn du gerade nicht gestört werden willst, schaltest du diese Meldungen für eine Weile ab.

## Was hat die KI geändert?

Wenn eine Session mit einer Aufgabe fertig ist, möchtest du wissen, was sie in deinem Projekt verändert hat. Im Chat ist das längst hochgescrollt und über viele Meldungen verteilt.

CodeDeck zeigt dir die Änderungen an einem Ort. Zuerst siehst du als Übersicht, welche Dateien neu sind, welche gelöscht, verschoben oder bearbeitet wurden. Mit einem Klick auf eine Datei siehst du darunter die geänderten Zeilen, den sogenannten **Diff**. Du kannst dir die Änderungen einer bestimmten **Runde** ansehen, also alles, was eine Session auf einen einzelnen Prompt hin getan hat, oder alles, was seit dem letzten Commit geändert wurde. Dateien, die du dir angesehen hast, hakst du ab, damit du bei vielen Änderungen nicht den Faden verlierst.

## Wie komme ich zurück, wenn etwas schiefgeht?

Manchmal gefällt dir das Ergebnis einer Runde nicht, oder die KI hat sich verrannt. Ohne Vorsorge ist es mühsam, den Stand von vorher wiederherzustellen, besonders wenn du seit dem letzten Commit noch anderes geändert hast.

CodeDeck legt deshalb von selbst einen **Sicherungspunkt** an, bevor eine Session in einer Runde zum ersten Mal etwas in deinem Projekt ändert, und einen weiteren, wenn sie fertig ist. Du siehst diese Punkte auf dem **Trail**, dem Verlauf deines Projekts am Rand des Fensters. Mit einem Klick auf einen Sicherungspunkt siehst du, was sich seitdem geändert hat, und mit „Hierher zurückgehen“ stellst du die Dateien so wieder her, wie sie zu diesem Zeitpunkt waren. Bevor CodeDeck das tut, sichert es auch den aktuellen Stand. Du kannst den Schritt zurück also ebenfalls wieder rückgängig machen.

Der Trail zeigt dir außerdem mit seiner Farbe, **wie sicher deine Arbeit** gerade ist: ob es noch Änderungen gibt, die nicht committet sind, ob deine Commits nur auf deinem Rechner liegen oder ob sie schon auf einem Server sind.

## Wie sage ich der KI genau, was ich meine?

Oft möchtest du der KI für den nächsten Schritt etwas Bestimmtes zeigen: eine Datei, an der sie sich orientieren soll, eine Änderung, die sie sich noch einmal ansehen soll, oder eine einzelne Zeile, an der dir etwas auffällt. Pfade abzutippen und Stellen zu beschreiben ist umständlich und fehleranfällig.

In CodeDeck **hängst** du solche Dinge mit einem Klick **an**. Du kannst Dateien und Ordner anhängen, Änderungen, Kommentare zu einzelnen Zeilen eines Diffs und Hinweise, die du mit `@ai` direkt in eine Datei geschrieben hast. CodeDeck sammelt alles unter **Nächster Prompt**. Wenn du der Session im Chat deinen nächsten Prompt schickst, bekommt sie die Anhänge mitgeliefert, und die Liste ist danach wieder leer. Bis dahin siehst du genau, was die KI zusätzlich bekommen wird.

## Und was ist mit Entwürfen und Notizen der KI?

Während einer Runde entsteht oft mehr als der eigentliche Code: ein Entwurf, ein kleines Testskript, eine Notiz oder eine Seite, die die KI irgendwo veröffentlicht hat. Solche Dinge gehören meist nicht ins Projekt, sollen aber auch nicht verloren gehen.

Die **Werkbank** sammelt sie getrennt von deiner eigentlichen Arbeit. CodeDeck bittet jede Session beim Start, Entwürfe in einem eigenen Ordner im Projekt abzulegen, den Git nicht beachtet. Auf der Werkbank siehst du diese Dateien, dazu Dateien, die eine Session außerhalb des Projekts geschrieben hat, und Seiten, die sie veröffentlicht hat. Was du behalten willst, ziehst du ins Projekt, den Rest räumst du weg.
