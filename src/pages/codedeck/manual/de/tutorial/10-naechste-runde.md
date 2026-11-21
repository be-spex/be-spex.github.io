---
layout: ../../../../../layouts/Manual.astro
title: "Die Runde abschließen"
nav: "Runde abschließen"
part: 2
order: 10
purpose: >-
  Du fasst die Runde zusammen, kennst den Weg in die nächste und weißt, wie du mit mehreren Sessions und Projekten zugleich arbeitest.
draft: true
---

Du hast eine ganze Arbeitsrunde mit CodeDeck durchlaufen. Dieses letzte Kapitel fasst sie zusammen und zeigt dir, wie du mit mehreren Sessions und Projekten gleichzeitig arbeitest.

## Die Runde als Kreislauf

Eine Runde endet nicht wirklich, sie geht in die nächste über. Mit deinem nächsten Prompt beginnt der Kreislauf von vorn.

![Die Arbeitsrunde als Kreislauf mit sechs Stationen: Auftrag geben, Arbeit verfolgen, Änderungen prüfen, Werkbank sichten, Prompt vorbereiten, Sichern](/codedeck/manual/de/runde-kreislauf.svg)

1. **Auftrag geben:** Du startest eine KI-Session oder schreibst einer laufenden im Chat, was sie tun soll ([Kapitel 3](/codedeck/manual/de/tutorial/03-session-starten/)).
2. **Arbeit verfolgen:** Während sie arbeitet, zeigt dir die Sessionspalte ihren Zustand und der Reiter Aktivität den Verlauf. Fragt sie etwas, meldet sich CodeDeck ([Kapitel 4](/codedeck/manual/de/tutorial/04-aktivitaet/)).
3. **Änderungen prüfen:** Ist die Runde fertig, siehst du dir im Reiter Änderungen an, was sie getan hat, und kommentierst Zeilen ([Kapitel 5](/codedeck/manual/de/tutorial/05-aenderungen/)).
4. **Werkbank sichten:** Du schaust, was nebenbei entstanden ist, übernimmst Brauchbares und räumst den Rest weg ([Kapitel 6](/codedeck/manual/de/tutorial/06-werkbank/)).
5. **Prompt vorbereiten:** Du hängst an, was die KI für die nächste Runde braucht ([Kapitel 7](/codedeck/manual/de/tutorial/07-naechster-prompt/)).
6. **Sichern:** Ist das Ergebnis gut, committest und pushst du es. Ist es misslungen, gehst du zu einem Snapshot zurück ([Kapitel 8](/codedeck/manual/de/tutorial/08-trail/) und [9](/codedeck/manual/de/tutorial/09-commit/)).

Nicht jede Runde braucht jede Station. Oft prüfst du nur kurz die Änderungen und schickst den nächsten Prompt, und committest erst nach einigen Runden. Die Snapshots sichern dich in der Zwischenzeit ab.

## Mit mehreren Sessions

In einem Projekt können mehrere KI-Sessions nebeneinander arbeiten, zum Beispiel eine an einer Funktion und eine an der Dokumentation. CodeDeck hält sie auseinander: Jede hat ihre Farbe und ihren Kurznamen, an ihrer Karte, an den Dateien, die sie geändert hat, und an ihren Snapshots. Zeigst du mit der Maus auf eine Session, treten ihre Dateien und Snapshots hervor, und der Rest tritt zurück.

Zwei Dinge solltest du dabei beachten. Erstens wählst du unter **Nächster Prompt** mit **Für**, welche Session die Anhänge bekommen soll, denn bei mehreren laufenden Sessions geht sonst nichts hinaus. Zweitens lohnt es sich, den Sessions Aufgaben in verschiedenen Bereichen des Projekts zu geben. Ändern zwei Sessions dieselbe Datei, kommen sie sich in die Quere, und es wird schwer zu sagen, welche Änderung von wem stammt.

## Mit mehreren Projekten

Arbeitest du an mehreren Projekten, behältst du sie über die **Projektliste** im Blick. Unter **Wartet in anderen Projekten** erscheinen Sessions aus anderen Projekten, die dich etwas fragen oder fertig sind, und ein Klick bringt dich hin. Mit **Strg+Tab** springst du zum vorigen Projekt zurück.

Arbeitest du jeden Tag an denselben Projekten, kannst du sie auf die **Tagesliste** setzen: im Menü eines Projekts mit **Auf der Tagesliste**. Der Knopf ▶ oben in der Projektliste startet dann für alle Projekte der Tagesliste eine Session, in denen noch keine läuft. In den Einstellungen unter **Allgemein** kannst du festlegen, dass das beim Start von CodeDeck von selbst geschieht.

Damit du nichts verpasst, während du in einem anderen Fenster arbeitest, meldet sich CodeDeck in der Taskleiste und auf Wunsch mit einer Nachricht auf dem Desktop. Was es meldet, stellst du in den Schnelleinstellungen unter **Melden, wenn ich woanders bin** ein. Brauchst du Ruhe, schaltest du die Meldungen dort mit **Nicht stören** für eine Weile ab. Mehr dazu steht unter [Meldungen](/codedeck/manual/de/nachschlagen/aufmerksamkeit/).

## Wie es weitergeht

Damit kennst du alle Bereiche von CodeDeck und die Handgriffe einer Arbeitsrunde. Wenn du später etwas genauer wissen willst, hilft dir der Teil [Nachschlagen](/codedeck/manual/de/nachschlagen/). Er behandelt jedes Thema für sich und vollständig. Fragen zur Einrichtung, zu Programmen und zur Installation beantwortet der [Anhang](/codedeck/manual/de/anhang/).

Und wenn du dich nach einer Pause schnell wieder erinnern willst, wo was ist: Die Führung **Tutorial: Projektfenster** im CodeDeck-Menü hinter dem Logo geht dieselbe Runde in wenigen Schritten durch, direkt in deinem Fenster.

Viel Freude bei der Arbeit mit CodeDeck.
