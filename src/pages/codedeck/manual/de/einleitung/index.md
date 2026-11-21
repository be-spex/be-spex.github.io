---
layout: ../../../../../layouts/Manual.astro
title: "Was CodeDeck ist"
nav: "Was CodeDeck ist"
part: 1
order: 1
purpose: >-
  Nach dieser Seite weißt du, wofür CodeDeck da ist und wie es neben deinem Coding-Agent mitläuft.
---

## Arbeiten mit einem Coding-Agent

Wenn du mit einem **Coding-Agent** wie Claude Code programmierst, beschreibst du in einem Chat, was du haben möchtest. Die KI liest dann selbst die Dateien deines Projekts, schreibt Code, legt Dateien an und führt Befehle aus. Das geht schnell, und oft ist nach wenigen Minuten erledigt, wofür du früher eine Stunde gebraucht hättest.

Der Chat zeigt dir dabei aber nur einen langen, durchlaufenden Text. Nach einer Viertelstunde weißt du oft nicht mehr genau, welche Dateien die KI angefasst hat. Wenn du mehrere **KI-Sessions** nebeneinander laufen lässt, vielleicht sogar in mehreren Projekten, merkst du manchmal erst nach Minuten, dass eine Session längst auf eine Antwort von dir wartet. Und wenn dir das Ergebnis einer Session nicht gefällt, ist nicht immer klar, wie du sicher zu dem Stand davor zurückkommst.

## Was CodeDeck daran ändert

CodeDeck ist eine Desktop-App für Linux, die neben deinem Coding-Agent läuft. Sie übernimmt nicht das Gespräch mit der KI, sondern zeigt dir, was dabei herauskommt.

In einem eigenen Fenster siehst du jederzeit, **welche KI-Sessions** in deinem Projekt arbeiten, welche gerade **auf dich warten** und **was sie geändert haben**. Jedes Mal, bevor eine Session in deinem Projekt etwas ändert, legt CodeDeck von selbst einen **Sicherungspunkt** an, zu dem du später zurückkehren kannst. Und wenn du der KI für den nächsten Schritt etwas mitgeben möchtest, etwa eine Datei, eine Änderung oder einen Kommentar zu einer Zeile, sammelt CodeDeck das für dich und hängt es an deinen **nächsten Prompt**.

CodeDeck drängt sich dabei nicht in den Vordergrund. Solange alles läuft, kannst du das Fenster ignorieren oder in den Hintergrund schieben. Erst wenn eine Session etwas von dir braucht, meldet sich CodeDeck.

![Das Projektfenster von CodeDeck: links die Projektliste, daneben die KI-Sessions des Projekts mit ihrem Zustand, in der Mitte die Änderungen als Dateibaum und rechts der Trail mit dem Verlauf des Projekts](/codedeck/manual/de/einleitung-projektfenster.webp)

## Du arbeitest weiter wie gewohnt

Mit der KI sprichst du weiterhin dort, wo du es gewohnt bist: im Terminal oder in der Desktop-App deines Coding-Agents. Dort schreibst du deine Aufträge, und dort beantwortest du Rückfragen. CodeDeck hat keinen eigenen Chat und schreibt nichts in deinen Chat hinein.

Am besten stellst du dir zwei Fenster nebeneinander vor. Im einen sprichst du mit der KI, im anderen siehst du, was dabei in deinem Projekt passiert. Du kannst jederzeit hinüberschauen und musst dafür nicht im Chat hochscrollen oder in anderen Fenstern suchen.

![Skizze: links das Fenster des Coding-Agents, in dem du mit der KI sprichst, rechts daneben CodeDeck, das die KI-Sessions, die Änderungen und den Verlauf des Projekts zeigt](/codedeck/manual/de/einleitung-daneben.svg)

Damit das klappt, verbindest du deinen Coding-Agent einmal mit CodeDeck. Danach erfährt CodeDeck von selbst, wann eine Session startet, wann sie arbeitet, wann sie dich etwas fragt und wann sie mit ihrer Arbeit fertig ist. Wie du die Verbindung einrichtest, zeigt dir das [Tutorial](/codedeck/manual/de/tutorial/01-vorbereitung/).

Auf Wunsch startet CodeDeck neue KI-Sessions auch für dich, mit einem Klick und im richtigen Projektordner. Auch dann läuft die KI in deinem Coding-Agent, und du kannst jede Session im Terminal oder in der Desktop-App öffnen und dort mit ihr weiterarbeiten.

## Alles bleibt auf deinem Rechner

CodeDeck ist kein Online-Dienst. Du brauchst kein Konto bei be spex, und CodeDeck selbst schickt nichts ins Internet. Nur wenn du in CodeDeck auf Push, Pull oder Fetch klickst, spricht Git mit dem Server deines Projekts, genau wie auf der Kommandozeile. Alles, was CodeDeck über deine Projekte weiß, liegt in deinem Projektordner und in deinem Benutzerverzeichnis. Welche Daten das genau sind, steht auf der Seite [Deine Daten](/codedeck/manual/de/nachschlagen/daten/).

<aside class="box">

### Für Technikinteressierte: wie das Zusammenspiel funktioniert

CodeDeck erfährt auf zwei Wegen, was geschieht.

Der erste Weg sind die **Hooks** deines Coding-Agents. Hooks sind kleine Befehle, die der Coding-Agent bei bestimmten Ereignissen selbst aufruft. Wenn du deinen Coding-Agent mit CodeDeck verbindest, trägt CodeDeck einen solchen Befehl in dessen Einstellungen ein. Der Befehl meldet jedes Ereignis einer KI-Session an das laufende CodeDeck, zum Beispiel, dass sie gestartet ist, eine Datei schreibt, um Erlaubnis fragt oder ihre Runde beendet hat. Die Meldung bleibt auf deinem Rechner, und der Inhalt deiner Dateien geht nicht mit. Läuft CodeDeck nicht, tut der Befehl nichts. Die Einstellungsdatei, wie sie vorher war, bleibt als Kopie erhalten, und „Trennen“ nimmt die Einträge wieder heraus.

Der zweite Weg ist **Git**. Den Stand deines Projekts, die Änderungen und den Verlauf liest CodeDeck mit dem ganz normalen Programm `git` auf der Kommandozeile. Deshalb gelten deine eigene Git-Konfiguration und deine Zugangsdaten, und jeder Befehl, den CodeDeck ausführt, wird dir angezeigt.

Auch die **Sicherungspunkte** sind Git-Commits. CodeDeck legt sie aber nicht auf deinen Branches an, sondern unter einem eigenen Namen (`refs/codedeck/snapshots/`) und über eine Kopie des Git-Index. Deine Branches, dein Index und das, was du pushst, bleiben dadurch unberührt.

</aside>
