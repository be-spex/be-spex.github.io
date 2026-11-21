---
layout: ../../../../../layouts/Manual.astro
title: "Dateien und Commit"
nav: "Dateien und Commit"
part: 2
order: 9
purpose: >-
  Du findest dich im Dateibaum zurecht und bringst deine Arbeit mit Commit und Push in Git.
draft: true
---

Die Runde ist geprüft, und das Ergebnis gefällt dir. Jetzt sicherst du es in Git. In diesem Kapitel lernst du dafür die Dateiliste genauer kennen und erfährst, wie du mit CodeDeck committest und pushst.

## Der Dateibaum

Die Dateiliste ganz rechts zeigt die Dateien deines Projekts als Baum. Ist sie zugeklappt, öffnest du sie mit **Strg+B** oder dem Knopf oben in der schmalen Leiste.

![Die Dateiliste: oben der Branch mit den Zahlen, darunter das Suchfeld und die Filter, dann der Baum mit hervorgehobenen Ordnern, einer Zahl an geänderten Ordnern und einem Buchstaben an einer geänderten Datei](/codedeck/manual/de/dateien-baum.webp)

**Was du im Baum siehst:**

- Dateien und Ordner mit Änderungen, die noch nicht committet sind, haben einen farbigen Namen. Ein Buchstabe rechts sagt, was passiert ist: **M** für geändert, **A** für neu hinzugefügt, **?** für neu und Git noch unbekannt, **R** für umbenannt. Gelöschte Dateien bleiben grau und durchgestrichen stehen, bis du committest.
- Ein zugeklappter Ordner zeigt neben seinem Namen, wie viele Änderungen in ihm liegen. Lässt du die Maus auf seinem Namen ruhen, siehst du einen Steckbrief: Dateien, Größe, geschätzte Tokens, Änderungen und welche Sessions darin geschrieben haben.
- Ein Punkt in der Farbe einer Session zeigt, dass sie die Datei gerade geändert hat. In den Schnelleinstellungen der Liste kannst du einstellen, dass die Punkte bis zum nächsten Commit bleiben.
- Ein **@** zeigt eine Datei mit @ai-Hinweisen, eine Büroklammer eine angehängte Datei.
- Ordner, die selbst ein Git-Repository sind, tragen ihren Branch. Ein Klick darauf öffnet ihre Git-Aktionen.

**Wie du damit arbeitest:** Ein Doppelklick öffnet eine Datei zum Ansehen, ein Klick mit der mittleren Maustaste zum Bearbeiten. Beim Überfahren erscheinen **Bearbeiten**, die **Büroklammer** und **⋯**. Das Menü ⋯ oder ein Rechtsklick enthält alles Weitere: Pfad kopieren, im Dateimanager oder Terminal öffnen, umbenennen, in den Papierkorb legen, anhängen, als wichtig markieren und ausblenden. Bei Ordnern kommen neue Dateien und Ordner und „Als Projekt öffnen“ dazu.

Mit gedrückter **Strg**-Taste wählst du mehrere Einträge aus, mit **Umschalt** einen ganzen Bereich. Das Menü wirkt dann auf alle gewählten Einträge.

Auch mit der Tastatur kommst du durch den Baum: Die Pfeiltasten bewegen dich, **Rechts** klappt einen Ordner auf und **Links** zu, **Enter** öffnet eine Datei zum Ansehen und **Strg+Enter** zum Bearbeiten, die **Leertaste** hängt an, und die Kontextmenü-Taste öffnet das Menü.

**Suchen und filtern:** Das Feld **Im Projekt suchen** findet jede Datei im ganzen Projekt, auch wenn ihr Ordner zugeklappt ist. Dabei reichen ein paar Buchstaben aus dem Namen. Die Filter darunter zeigen nur bestimmte Dateien: **Neu** und **Geändert** zeigen, was offen ist, **Angehängt**, **@ai** und **Wichtig**, was du markiert hast. Innerhalb einer Gruppe zählt jeder gewählte Filter dazu, zwischen den beiden Gruppen grenzen sie ein. „Geändert“ zusammen mit „Wichtig“ zeigt also nur die geänderten wichtigen Dateien. Mit Suche oder Filter wird der Baum zu einer flachen Liste, und das orange Symbol rechts setzt die Filter zurück.

**Ausblenden und wichtig:** Was du nicht sehen willst, blendest du über das Menü aus, zum Beispiel einen großen Ordner mit Testdaten. Was Git ignoriert, etwa `node_modules`, ist von selbst ausgeblendet. Ob Ausgeblendetes abgedunkelt erscheint oder ganz verschwindet, stellst du in den Schnelleinstellungen der Liste ein, dem Symbol mit den Reglern. Was du oft brauchst, markierst du als **wichtig**: Es steht dann mit hellem, fettem Namen im Baum, ein wichtiger Ordner mit gefülltem Symbol.

## Branch und Zahlen in der Kopfzeile

Oben in der Dateiliste steht der **Branch**, auf dem du arbeitest, im Bild `feature/rate-limit`. Die Zahlen daneben fassen zusammen, was offen ist: Die Zahl mit dem Dokument nennt die Änderungen, die noch nicht committet sind, die Zahl mit **↑** die Commits, die noch nicht gepusht sind, und eine Zahl mit **↓** die Commits, die auf dem Server warten.

![Die zugeklappte Dateiliste als schmale Leiste: oben das Symbol für den Branch, darunter die Zahlen 5 und 2](/codedeck/manual/de/dateien-leiste.webp)

Auch die zugeklappte Leiste zeigt diese Zahlen, damit du sie immer im Blick hast.

## Die Git-Aktionen

Ein Klick auf den Branch oder **Strg+G** öffnet die **Git-Aktionen**. Dort stehen die vier Schritte, die du bei der Arbeit mit der KI ständig brauchst, jeweils mit einem Satz, was sie tun.

![Die Git-Aktionen: Fetch und Pull, darunter „5 nicht committete Änderungen“ mit dem Feld für die Commit-Nachricht und dem Knopf Commit, dann „2 Commits noch nicht gepusht“ mit Push](/codedeck/manual/de/dateien-aktionen.webp)

- **Fetch** schaut auf dem Server nach neuen Commits. Deine Dateien bleiben dabei, wie sie sind.
- **Pull** holt neue Commits vom Server in deine Dateien. Das geht nur, wenn es dort Neues gibt und du selbst keine Commits hast, die noch nicht gepusht sind. Gibt es auf beiden Seiten neue Commits, müsste Git sie zusammenführen. Das tut CodeDeck bewusst nicht, dafür nimmst du die Kommandozeile, zum Beispiel mit `git pull --rebase`. Die Zahlen stammen vom letzten Fetch, deshalb steht Fetch gleich darüber.
- **Commit** speichert deine Änderungen mit einer Nachricht als einen Commit in deinem Repository.
- **Push** schickt deine Commits auf den Server, damit sie auch dort sicher sind. Hat dein Branch dort noch kein Gegenstück, **veröffentlicht** Push ihn. Hat dein Repository noch gar keinen Server, trägst du unter **Remote hinzufügen** seine Adresse ein, danach geht Push dorthin.

Zeigst du mit der Maus auf eine Aktion, siehst du den genauen Git-Befehl, bevor er läuft. Danach steht dort, was Git geantwortet hat. Alle Befehle, die CodeDeck ausgeführt hat, findest du unter **Git-Befehle** mit **Strg+Umschalt+G**. Was hinter Fetch, Pull, Commit und Push steckt, erklären die [Git-Grundlagen](/codedeck/manual/de/nachschlagen/git-grundlagen/).

## Committen

Am einfachsten committest du im Reiter **Änderungen**. Über den Änderungen jedes Repositorys steht dort eine Zeile für die Commit-Nachricht.

![Die Commit-Zeile im Reiter Änderungen: „orbit-api“, der Branch und „5 nicht committete Änderungen“, darunter das Feld „Commit-Nachricht für orbit-api“ und der Knopf Commit](/codedeck/manual/de/dateien-commit.webp)

Schreibe in einem Satz, was sich geändert hat, und klicke auf **Commit** oder drücke **Strg+Enter**. Der Commit enthält alle Änderungen dieses Repositorys, die noch nicht committet sind. Einzelne Dateien oder Zeilen vorzumerken, wie es manche Git-Programme anbieten, sieht CodeDeck bewusst nicht vor: Was du siehst, ist das, was du committest. Danach wird die Linie auf dem Trail blass bernsteinfarben, denn der Commit liegt jetzt nur auf deinem Rechner.

Ist dir in der Nachricht ein Fehler unterlaufen und der Commit ist noch nicht gepusht, kannst du sie ändern: Wähle den Commit auf dem Trail, dann steht im Reiter Änderungen neben seiner Nachricht ein Stift, **Commit-Nachricht ändern**.

## Pushen

Solange Commits nur auf deinem Rechner liegen, sind sie bei einem Defekt der Festplatte verloren, und niemand sonst sieht sie. Pushe deshalb regelmäßig, spätestens wenn eine Arbeit fertig ist. Öffne dazu die Git-Aktionen und klicke auf **Push**. Danach wird die Linie auf dem Trail grau, und am obersten Commit steht der Name des Servers.

## Probier es aus

Committe die Änderungen deiner letzten Runde im Reiter **Änderungen** mit einer kurzen Nachricht. Öffne dann mit **Strg+G** die Git-Aktionen, zeige mit der Maus auf **Push**, lies den Befehl und klicke darauf. Sieh zum Schluss auf dem Trail nach, wie sich die Farbe der Linie geändert hat.

## Mehr dazu

- [Git-Grundlagen](/codedeck/manual/de/nachschlagen/git-grundlagen/): Commit, Branch, Push und Pull erklärt.
- [Projekte und Fenster](/codedeck/manual/de/nachschlagen/projekte/): Projekte mit mehreren Repositorys.
- [Einstellungen](/codedeck/manual/de/nachschlagen/einstellungen/): der Bereich „Dateien und Verzeichnisse“.
