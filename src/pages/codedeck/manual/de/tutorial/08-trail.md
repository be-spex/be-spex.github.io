---
layout: ../../../../../layouts/Manual.astro
title: "Sicher aufbewahrt: Trail und Snapshots"
nav: "Trail und Snapshots"
part: 2
order: 8
purpose: >-
  Du liest am Trail ab, wie sicher deine Arbeit ist, und gehst zu einem Snapshot zurück, wenn eine Runde danebenging.
draft: true
---

Manchmal geht eine Runde daneben: Die KI hat sich verrannt oder etwas umgebaut, das gut war. Dann willst du schnell und sicher zum Stand davor zurück. Dafür gibt es den **Trail** und die **Snapshots**, also die Sicherungen deiner Projektdateien, die CodeDeck während der Runden anlegt.

## Was der Trail zeigt

Der Trail ist die schmale Spalte mit der senkrechten Linie zwischen dem Deck und der Dateiliste. Er zeigt den **Verlauf** deines Projekts in Git, das Neueste oben. Liegen in Unterordnern des Projekts weitere Git-Repositorys, zeigt er deren Commits auf derselben Linie mit.

![Der zugeklappte Trail: eine senkrechte Linie mit Punkten, oben bernsteinfarben, weiter unten grau](/codedeck/manual/de/trail-zu.webp)

Die **Farbe der Linie** sagt dir auf einen Blick, wie sicher deine Arbeit ist:

- **Bernsteinfarben** ist sie oben, solange es Änderungen gibt, die noch nicht committet sind. Die gibt es nur in deinem Projektordner und in den Snapshots.
- **Blass bernsteinfarben mit hohlen Ringen** ist sie bei Commits, die nur auf deinem Rechner liegen und noch nicht gepusht sind.
- **Grau mit gefüllten Punkten** ist sie bei Commits, die schon auf dem Server liegen.

Am neuesten gepushten Commit steht der Name des Servers, zum Beispiel `origin`, und daneben, wie viele Commits noch zu pushen oder zu holen sind. Ein kleiner Funke im Punkt bedeutet, dass ein Coding-Agent an diesem Commit mitgewirkt hat.

## Mit der Maus

Lässt du die Maus kurz auf dem Trail ruhen, klappt er als **Zeitleiste** auf, über das Deck hinweg. Dann siehst du zu jedem Punkt die Commit-Nachricht oder den Namen des Snapshots, die Uhrzeit, die Zahl der geänderten Dateien und, nach Tagen getrennt, wann was geschah.

![Der aufgeklappte Trail: oben „Nicht committete Änderungen in 2 Repos“, darunter nach Tagen geordnet Snapshots und Commits mit Nachricht, Uhrzeit und Zahl der Dateien](/codedeck/manual/de/trail-offen.webp)

Ein **Klick auf einen Punkt** zeigt im Reiter Änderungen, was dieser Commit oder Snapshot geändert hat. Klickst du danach mit gedrückter **Strg**-Taste einen zweiten Punkt an, vergleicht CodeDeck die beiden. Jedes Zeichen auf dem Trail erklärt sich in einem Hinweis, wenn du mit der Maus darauf zeigst.

## Snapshots

Bevor eine KI-Session in einer Runde zum ersten Mal etwas in deinem Projekt ändert, legt CodeDeck einen **Snapshot** an, eine Sicherung deiner Projektdateien. Ist die Runde vorbei und hat sich etwas geändert, folgt ein zweiter. Du musst dafür nichts tun.

Auf dem Trail erscheinen Snapshots in der Farbe der Session, die sie ausgelöst hat: ein **Anker** vor einer Runde, eine **Fahne** an ihrem Ende und ein **gebogener Pfeil**, wo jemand zurückgegangen ist. Folgen drei oder mehr Snapshots aufeinander, fasst CodeDeck sie zu einem Stapel mit ihrer Zahl zusammen, damit der Trail kurz bleibt. Ein Klick klappt ihn auf.

Snapshots sind keine Commits. Sie landen nicht auf deinen Branches und werden nicht gepusht, sie gehören nur dir. Der Trail zeigt die Snapshots seit dem letzten Commit, denn das ist die Arbeit, die noch nicht anders gesichert ist. CodeDeck bewahrt sie 14 Tage lang auf, höchstens 50 je Repository. Mehr dazu steht auf der Seite [Snapshots](/codedeck/manual/de/nachschlagen/snapshots/).

## Zu einem Snapshot zurückgehen

So holst du den Stand vor einer missglückten Runde zurück:

1. Klicke auf dem Trail auf den **Anker** vor dieser Runde. Ist er in einem Stapel, klappe den Stapel zuerst auf.
2. Der Reiter Änderungen zeigt jetzt, was sich seit diesem Snapshot geändert hat. Sieh es dir an, um sicher zu sein, dass es der richtige ist.
3. Klicke auf **Hierher zurückgehen**.

![Ein gewählter Snapshot im Reiter Änderungen: oben sein Name, die Session und das Datum, darunter „11 Dateien geändert, seit dieser Snapshot am Ende der Runde entstand“ und der Knopf „Hierher zurückgehen“](/codedeck/manual/de/trail-snapshot.webp)

CodeDeck fragt noch einmal nach und sagt dir genau, was passiert: Die geänderten Dateien werden auf den Stand des Snapshots gesetzt, und Dateien, die seitdem neu entstanden sind, werden gelöscht. Mit **Zurückgehen** bestätigst du.

![Die Rückfrage: „Setzt 11 Dateien in orbit-api zurück, wie sie waren; seitdem neue Dateien werden gelöscht. Der jetzige Stand wird vorher als Snapshot gesichert, du kannst also wieder zurück.“ mit den Knöpfen „Abbrechen“ und „Zurückgehen“](/codedeck/manual/de/trail-zurueckgehen.webp)

Bevor CodeDeck zurückgeht, sichert es den **jetzigen Stand** als eigenen Snapshot. Er erscheint auf dem Trail mit dem gebogenen Pfeil. Überlegst du es dir anders, klickst du auf diesen Snapshot und gehst genauso zu ihm zurück. Das Zurückgehen lässt sich also jederzeit rückgängig machen, und du verlierst nichts.

Arbeiten mehrere Sessions im Projekt, kannst du bei einem gewählten Snapshot mit **nur diese Session** einstellen, dass der Trail nur noch die Snapshots dieser einen Session zeigt. Mit **Zurück zum nicht Committeten** kehrst du zur gewohnten Ansicht der Änderungen zurück.

## Probier es aus

Lass eine Session eine kleine Änderung machen. Wenn die Runde fertig ist, klicke auf dem Trail auf den Anker vor dieser Runde und gehe mit **Hierher zurückgehen** dorthin zurück. Sieh nach, dass die Änderung verschwunden ist. Klicke dann auf den neuen Snapshot mit dem gebogenen Pfeil und gehe zu ihm zurück: Die Änderung ist wieder da.

## Mehr dazu

- [Snapshots](/codedeck/manual/de/nachschlagen/snapshots/): wie CodeDeck sie anlegt, wie lange sie bleiben und was technisch dahintersteckt.
- [Git-Grundlagen](/codedeck/manual/de/nachschlagen/git-grundlagen/): Commit, Push und Server erklärt.
- [Änderungen und Runden](/codedeck/manual/de/nachschlagen/aenderungen/): Vergleiche zwischen zwei Punkten.
