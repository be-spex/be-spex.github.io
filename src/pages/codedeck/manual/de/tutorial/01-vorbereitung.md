---
layout: ../../../../../layouts/Manual.astro
title: "Vorbereitung: CodeDeck einrichten"
nav: "Vorbereitung"
part: 2
order: 1
purpose: >-
  Nach diesem Kapitel läuft CodeDeck, kennt deinen Coding-Agent und hat dein erstes Projekt auf der Liste.
---

Bevor die erste Arbeitsrunde beginnen kann, sind drei Dinge zu erledigen: CodeDeck muss auf deinem Rechner laufen, es muss wissen, an welchen Projekten du arbeitest, und es muss mit deinem Coding-Agent verbunden sein. Das dauert nur ein paar Minuten, und du machst es nur einmal.

## CodeDeck installieren

Wie du CodeDeck installierst und später aktualisierst, beschreibt der Anhang unter [Installation](/codedeck/manual/de/anhang/installation/). Wenn CodeDeck installiert ist, startest du es wie jedes andere Programm über das Menü deines Desktops oder mit dem Befehl `codedeck` im Terminal.

## Willkommen und Rechner-Check

Beim ersten Start öffnet sich das Fenster **Willkommen bei CodeDeck**. CodeDeck hat zu diesem Zeitpunkt bereits nachgesehen, mit welchen Programmen es auf deinem Rechner zusammenarbeiten kann, und zeigt dir das Ergebnis als Liste.

![Das Willkommensfenster: oben „Alles, was CodeDeck braucht, ist da“, darunter die Liste der gefundenen Programme wie Claude Code, git und tmux, jeweils mit „gefunden“ oder „fehlt“ und einer Einstufung](/codedeck/manual/de/vorbereitung-willkommen.webp)

Jede Zeile nennt ein Programm und sagt dir, ob CodeDeck es **gefunden** hat oder ob es **fehlt**. Daneben steht, wie wichtig das Programm für CodeDeck ist:

- **essenziell** bedeutet, dass CodeDeck es für seine eigentliche Arbeit braucht. Dazu gehören dein Coding-Agent, git und tmux.
- **hilfreich** bedeutet, dass ohne das Programm ein Teil von CodeDeck fehlt, etwa das Öffnen einer Session im Terminal mit einem Klick oder das Symbol in der Leiste deines Desktops.
- **nice to have** bedeutet, dass das Programm die Arbeit angenehmer macht, zum Beispiel ein kleiner Betrachter für Markdown-Dateien oder Diffs.

Wenn du mit der Maus auf das Symbol ⓘ am Ende einer Zeile zeigst, erklärt CodeDeck dir, wofür es das Programm braucht. Fehlt ein Programm, das sich über die Paketverwaltung deines Systems installieren lässt, zeigt CodeDeck unter der Zeile den passenden Befehl zum Kopieren an. Nachdem du etwas installiert hast, klickst du auf **Erneut prüfen**, und die Liste wird aktualisiert. Ausführliche Hinweise zu jedem Programm findest du im Anhang unter [Programme](/codedeck/manual/de/anhang/programme/).

Wenn dein Desktop unter Wayland läuft, zeigt das Willkommensfenster zusätzlich einen Hinweis, welche Funktionen dort eingeschränkt sind und wie du dir trotzdem ein Tastenkürzel für CodeDeck einrichtest. Die Hintergründe stehen auf der Seite [Wayland und X11](/codedeck/manual/de/anhang/wayland/).

Mit **Erzähl mir mehr** kommst du auf eine zweite Seite. Sie erklärt in vier kurzen Abschnitten, was ein Projekt ist, wie die Projektliste aufgebaut ist und wie CodeDeck von deinen KI-Sessions erfährt. Du kannst sie jetzt lesen oder dich auf dieses Tutorial verlassen, das dieselben Dinge ausführlicher erklärt.

![Die zweite Seite des Willkommensfensters, „Deine Projekte“, mit vier Kästen: Die Projektliste, Ein Projekt, KI-Sessions hören, Hinzufügen und öffnen](/codedeck/manual/de/vorbereitung-deine-projekte.webp)

Das Willkommensfenster erscheint bei jedem Start von CodeDeck, bis du unten **Beim Start nicht mehr zeigen** ankreuzt. Sollte später ein essenzielles Programm verschwinden, zum Beispiel nach einem Systemwechsel, zeigt CodeDeck es von selbst wieder an. Du kannst es außerdem jederzeit über das CodeDeck-Menü hinter dem Logo öffnen, mit dem Eintrag **Willkommen und Rechner-Check**.

## Das erste Projekt hinzufügen

Für CodeDeck ist ein **Projekt** ein Ordner, in dem du mit einem Coding-Agent arbeitest. Meist ist das ein Git-Repository, es kann aber auch ein Ordner sein, der mehrere Repositorys enthält. CodeDeck merkt sich deine Projekte in einer **Projektliste** und verfolgt die KI-Sessions jedes Projekts auf dieser Liste, auch wenn das Fenster des Projekts gerade geschlossen ist.

Beim ersten Start ist die Liste noch leer, und CodeDeck bietet dir zwei Wege an, sie zu füllen.

![Die leere Projektliste mit dem Hinweis „Noch keine Projekte“ und den beiden Knöpfen „Projekt hinzufügen …“ und „Alle Projekte in einem Verzeichnis…“](/codedeck/manual/de/vorbereitung-leere-liste.webp)

Mit **Projekt hinzufügen …** wählst du einen einzelnen Ordner aus, der dann auf die Liste kommt. Mit **Alle Projekte in einem Verzeichnis…** wählst du einen übergeordneten Ordner, und CodeDeck nimmt jeden Ordner darin als eigenes Projekt auf. Das ist praktisch, wenn du alle deine Projekte zum Beispiel unter `~/projects` sammelst.

Später, wenn die Liste nicht mehr leer ist, findest du beide Befehle im Menü ⋯ neben der Überschrift „Projekte“. Ein Klick auf ein Projekt in der Liste öffnet es in einem **Projektfenster**. Öffne jetzt dein erstes Projekt, denn den nächsten Schritt erledigst du dort. Wie das Projektfenster aufgebaut ist, zeigt dir das nächste Kapitel ausführlich.

### Wenn der Ordner noch kein Git-Repository ist

CodeDeck braucht für viele seiner Aufgaben ein **Git-Repository**: Nur dann kann es Sicherungspunkte anlegen, dir zeigen, was sich in jeder Runde geändert hat, und zu einem früheren Stand zurückgehen. Ein Git-Repository ist dabei nichts Aufwendiges. Es entsteht einfach in deinem Projektordner, du brauchst dafür weder einen Server noch ein Konto irgendwo.

Wenn der Ordner, den du aufgenommen hast, noch kein Git-Repository ist, musst du dafür nicht ins Terminal wechseln. CodeDeck erledigt das auf Wunsch für dich. Sobald du das Projekt öffnest, siehst du in der Mitte des Fensters den Hinweis **Dieser Ordner hat kein Git-Repository**. Er erklärt kurz, wozu das Repository gut ist, und darunter steht der Knopf **git init**.

![Der Hinweis „Dieser Ordner hat kein Git-Repository“ in der Mitte des Projektfensters: Er erklärt, was ein lokales Repository ermöglicht und was ohne es leer bleibt, darunter der Knopf „git init“](/codedeck/manual/de/vorbereitung-git-init.webp)

Ein Klick auf **git init** macht den Ordner zu einem Git-Repository mit dem Branch `main`. CodeDeck tut das nie von selbst, weil es dein Projekt verändert, sondern nur, wenn du den Knopf drückst. An deinen Dateien ändert sich dabei nichts. Den Knopf findest du außerdem unten in der Dateiliste neben „Kein Git-Repo“, falls du den Hinweis in der Mitte gerade nicht vor dir hast.

## Den Coding-Agent verbinden

Damit CodeDeck sieht, was deine KI-Sessions tun, muss dein Coding-Agent CodeDeck Bescheid geben: wenn eine Session startet, wenn sie arbeitet, wenn sie dich etwas fragt und wenn sie mit ihrer Runde fertig ist. Dafür verbindest du den Coding-Agent einmal mit CodeDeck.

Öffne dazu im Projektfenster die Einstellungen. Du erreichst sie über die Schnelleinstellungen oben links neben dem Projektnamen (das Symbol mit den Schiebereglern) und dort über **Alle Einstellungen…**. Wähle links den Bereich **Coding-Agents**. Auf der Startseite ohne geöffnetes Projekt sind die Einstellungen noch nicht verfügbar.

![Die Einstellungen im Bereich Coding-Agents: drei Konfigurationen von Claude Code, zwei davon „Verbunden“ mit dem Knopf „Trennen“, eine „Nicht verbunden“ mit dem Knopf „Verbinden“](/codedeck/manual/de/vorbereitung-coding-agents.webp)

Hier siehst du jede **Konfiguration** deines Coding-Agents, die CodeDeck auf deinem Rechner gefunden hat. Bei Claude Code ist eine Konfiguration ein Ordner wie `~/.claude`, in dem der Coding-Agent seine Einstellungen und seine Anmeldung aufbewahrt. Die meisten Menschen haben genau eine. Wer zum Beispiel ein Konto für die Arbeit und eines für private Projekte nutzt, hat zwei. CodeDeck behandelt jede Konfiguration als eigenes **Konto** und zeigt dessen Namen, Zeichen und Farbe später an den Projekten und Sessions an. Den Namen kannst du hier gleich ändern.

Klicke bei jeder Konfiguration, mit der du arbeitest, auf **Verbinden**. Danach steht dort **Verbunden**. CodeDeck trägt dabei einen kleinen Befehl in die Einstellungen deines Coding-Agents ein, der ihm künftig jeden Schritt einer Session meldet. Sonst ändert sich nichts in der Datei, und die Fassung von vorher bleibt als Kopie daneben erhalten. Wenn du die Verbindung wieder lösen willst, klickst du auf **Trennen**.

KI-Sessions, die schon liefen, bevor du verbunden hast, melden sich ab ihrem nächsten Schritt. Du musst sie also nicht neu starten.

Wie diese Meldungen technisch funktionieren, erklären die [KI-Grundlagen](/codedeck/manual/de/nachschlagen/ki-grundlagen/). Welche Coding-Agents CodeDeck unterstützt, steht im Anhang unter [Coding-Agents](/codedeck/manual/de/anhang/coding-agents/).

## Probier es aus

Füge ein eigenes kleines Projekt zur Liste hinzu und öffne es mit einem Klick. Wenn es noch kein Git-Repository ist, mach es mit **git init** zu einem. Öffne danach über das CodeDeck-Menü noch einmal **Willkommen und Rechner-Check** und sieh nach, ob alle Programme, die als essenziell eingestuft sind, gefunden wurden. Prüfe zum Schluss in den Einstellungen unter **Coding-Agents**, ob dort bei deiner Konfiguration **Verbunden** steht.

## Mehr dazu

- [Projekte und Fenster](/codedeck/manual/de/nachschlagen/projekte/): alles über die Projektliste, Gruppen und mehrere Projektfenster.
- [Konten und Verbrauch](/codedeck/manual/de/nachschlagen/konten/): mehrere Konfigurationen deines Coding-Agents nutzen.
- [Programme](/codedeck/manual/de/anhang/programme/), [Coding-Agents](/codedeck/manual/de/anhang/coding-agents/) und [Wayland und X11](/codedeck/manual/de/anhang/wayland/) im Anhang.
