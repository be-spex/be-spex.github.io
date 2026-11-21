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

Jetzt beginnt die eigentliche Arbeitsrunde. In diesem Kapitel startest du eine KI-Session, gibst ihr einen Auftrag und verfolgst in der Spalte **Sessions**, was sie tut. Wenn sie dich etwas fragt, antwortest du ihr.

## Was eine KI-Session ist

Eine **KI-Session** ist ein Gespräch mit deinem Coding-Agent in einem bestimmten Projekt. Du schreibst im Chat der Session, was du möchtest, und die KI arbeitet daraufhin in deinem Projektordner: Sie liest Dateien, ändert sie und führt Befehle aus. Die Session läuft in einem Terminal oder in der Desktop-App deines Coding-Agents, nicht in CodeDeck. CodeDeck zeigt dir, was sie tut.

In einem Projekt können mehrere Sessions gleichzeitig laufen, zum Beispiel eine für eine neue Funktion und eine für die Dokumentation. Jede bekommt in CodeDeck eine eigene **Farbe** und einen **Kurznamen** aus einem Buchstaben, die sie überall behält: in der Sessionspalte, an den Dateien, die sie geändert hat, und an ihren Sicherungspunkten auf dem Trail. Mehr über Sessions erfährst du auf der Seite [KI-Sessions](/codedeck/manual/de/nachschlagen/sessions/).

## Eine Session starten

Es gibt zwei Wege, eine Session zu starten, und beide führen zum selben Ergebnis: Die Session erscheint in der Sessionspalte, sobald sie ihren ersten Schritt meldet.

![Die Sessionspalte: oben das Konto „Work“ mit den Knöpfen ▶ und ＋, darunter fünf KI-Sessions: eine arbeitet, zwei fragen etwas, eine hat ihre Runde fertig, und eine wird gerade gestartet](/codedeck/manual/de/session-starten-spalte.webp)

**In CodeDeck** startest du eine Session mit den beiden Knöpfen oben in der Spalte. Der Knopf **＋** beginnt eine neue Unterhaltung. Der Knopf **▶** setzt die letzte Unterhaltung dieses Projekts in einer neuen Session fort, sodass die KI weiß, worum es zuletzt ging. Solange in dem Projekt schon eine Session läuft, startet ▶ keine zweite.

CodeDeck startet die Session in **tmux**, einem Programm, das Terminal-Sitzungen im Hintergrund weiterlaufen lässt. Das hat zwei Vorteile: Die Session läuft weiter, auch wenn du CodeDeck oder ein Terminalfenster schließt, und du kannst sie jederzeit in einem Terminal öffnen. Bei Claude Code startet CodeDeck die Session außerdem so, dass du sie auch aus der Desktop-App, im Browser oder vom Handy aus erreichst.

Gleich nach dem Klick erscheint am Ende der Liste die Zeile **Wird gestartet …**. Sie bleibt, bis die Session ihren ersten Schritt meldet. Bei einer neuen Session in einem Ordner, in dem der Coding-Agent noch nie gearbeitet hat, fragt er oft zuerst, ob du dem Ordner vertraust. Bis diese Frage beantwortet ist, meldet er sich nicht, deshalb steht an der Zeile **fragt vielleicht**. Mit dem Knopf **Terminal** öffnest du die Session und beantwortest die Frage. Danach kannst du das Terminalfenster einfach schließen: Die Session läuft in tmux weiter, nur das Fenster, das auf sie schaut, ist weg. Wer lieber mit der Tastatur arbeitet, verlässt tmux mit **Strg+B** und danach **D** und hat das Terminal dann wieder für anderes frei.

**Von Hand** startest du eine Session wie gewohnt: Du öffnest ein Terminal im Projektordner und startest dort deinen Coding-Agent. Auch diese Session meldet sich in CodeDeck, sobald sie ihren ersten Schritt tut, vorausgesetzt, dein Coding-Agent ist mit CodeDeck verbunden (siehe [Kapitel 1](/codedeck/manual/de/tutorial/01-vorbereitung/)). Sessions, die schon vor CodeDeck liefen, findet CodeDeck in den Protokollen des Coding-Agents und zeigt sie ebenfalls an.

Gib deiner Session jetzt einen Auftrag. Schreibe dazu im Chat der Session, also im Terminal oder in der Desktop-App, was die KI tun soll, zum Beispiel „Ergänze die README um einen Abschnitt zur Installation“.

## Den Status lesen

Jede Session steht in der Liste als **Karte**. Die Karten stehen in der Reihenfolge, in der die Sessions gestartet wurden, und behalten ihren Platz. So springt nichts, wenn eine Session fragt oder fertig wird.

Oben auf der Karte stehen der Kurzname, der Titel der Session und rechts ihr **Status** als farbige Marke:

- **arbeitet** bedeutet, dass die Session gerade an deinem Auftrag arbeitet. Darunter steht der Schritt, an dem sie ist, zum Beispiel die Datei, die sie gerade bearbeitet.
- **fragt** bedeutet, dass die Session auf eine Antwort von dir wartet, und die Zeit daneben sagt, seit wann. Darunter steht ihre Frage. Wenn sie um Erlaubnis für einen Befehl oder eine Datei bittet, steht der Befehl oder die Datei gleich mit dabei, damit du ohne Umweg entscheiden kannst.
- **Runde fertig** bedeutet, dass die Session mit ihrer Arbeit fertig ist und auf deinen nächsten Prompt wartet. Darunter stehen ihre letzten Worte, meist eine kurze Zusammenfassung dessen, was sie getan hat.
- **untätig** bedeutet, dass die Session zwar noch läuft, aber schon länger nichts mehr getan hat.
- **beendet** bedeutet, dass das Programm der Session nicht mehr läuft. Die Unterhaltung ist aber nicht verloren, du kannst sie fortsetzen.

Sessions, die auf dich warten, weil sie fragen oder eine fertige Runde haben, die du noch nicht angesehen hast, sind **hervorgehoben**: Ihre Karte ist erhaben und farbig umrandet. Die Zahl neben der Überschrift „Sessions“ zählt sie. Eine fertige Runde bleibt so lange hervorgehoben, bis du sie dir angesehen hast oder sie beiseitelegst.

Mit dem kleinen Pfeil unten links auf einer Karte klappst du ihre Einzelheiten auf: welche Dateien die Session geschrieben hat, was sie von CodeDeck angehängt bekommen hat, in welchem Ordner sie arbeitet und womit sie gestartet wurde.

Sessions, mit denen du gerade nicht beschäftigt bist, sammelt CodeDeck unter **Früher** am Ende der Liste. Dazu gehören beendete Sessions, Sessions, die CodeDeck nur aus den Protokollen kennt, und Sessions, die seit Stunden untätig sind. Dieser Bereich ist zugeklappt, solange andere Sessions laufen, und die zuletzt aktive Session steht darin oben.

## Antworten und in die Session wechseln

Unten rechts auf jeder Karte steht der Knopf, der dich in die Session bringt. Welcher es ist, hängt davon ab, wo die Session läuft und was gerade gebraucht wird:

- **Antworten** erscheint, wenn die Session dich etwas fragt. Er bringt dich dorthin, wo die Session läuft, in die Desktop-App, wenn sie dort erreichbar ist, sonst ins Terminal.
- **Desktop** öffnet die Session in der Desktop-App deines Coding-Agents, wenn sie dort erreichbar ist.
- **Terminal** öffnet die Session in einem Terminalfenster. Läuft sie in tmux, hängt sich das neue Fenster an ihre tmux-Sitzung. Hast du sie selbst in einem Terminal gestartet, holt CodeDeck dieses Fenster nach vorn. Das geht allerdings nur unter X11, unter Wayland wechselst du selbst dorthin.

Dasselbe erreichst du mit einem Doppelklick auf die Karte. Ein Klick mit der mittleren Maustaste öffnet die Session immer im Terminal.

Eine Einschränkung solltest du kennen: Bei Claude Code kommen Erlaubnisfragen derzeit nicht immer in der Desktop-App an, im Terminal stehen sie dagegen immer. Wenn die Desktop-App keine Frage zeigt, obwohl CodeDeck **fragt** meldet, öffne die Session also im Terminal, am schnellsten mit der mittleren Maustaste. Mehr dazu steht unter [Wenn etwas nicht klappt](/codedeck/manual/de/nachschlagen/probleme/#die-frage-steht-im-terminal-aber-nicht-in-der-desktop-app).

Ist eine Runde fertig, zeigt die Karte zusätzlich **Runde ansehen**. Dieser Knopf öffnet im Deck den Reiter Änderungen mit genau dem, was die Session in dieser Runde geändert hat. Darum geht es in [Kapitel 5](/codedeck/manual/de/tutorial/05-aenderungen/). Bei einer beendeten Session steht dort **Fortsetzen**: Damit setzt du ihre Unterhaltung in einer neuen Session in tmux fort.

Wenn du mit der Maus auf eine Karte zeigst, erscheinen rechts oben weitere Werkzeuge. Je nach Session sind das **In der Desktop-App öffnen** und **In einem Terminal öffnen**, außerdem **Neu starten** und **Beenden** für Sessions, die CodeDeck gestartet hat. Beenden hält nur das Programm an: Die Unterhaltung bleibt erhalten und lässt sich fortsetzen. Eine Session, die du von Hand gestartet hast, endet dagegen dort, wo sie läuft. Bei einer fertigen Runde findest du außerdem das Häkchen **Angesehen**, das die Karte bis zur nächsten Runde beiseitelegt. Das Menü **Mehr** öffnest du auch mit einem Rechtsklick. Darin kannst du die Session umbenennen und ihr einen eigenen Kurznamen geben, ihren Startbefehl kopieren oder eine Session, die nicht mehr läuft, aus der Liste nehmen.

## Coding-Agent und Konto wählen

Ganz oben in der Sessionspalte steht, mit welchem **Konto** und welchem Coding-Agent die Sessions dieses Projekts starten, im Bild „Work“ mit Claude Code. Ein Konto ist eine Konfiguration deines Coding-Agents, wie du sie in [Kapitel 1](/codedeck/manual/de/tutorial/01-vorbereitung/) verbunden hast.

![Das Menü der Kontowahl: „Die KI-Sessions dieses Projekts laufen mit“, darunter die Konten Work mit Häkchen und Private, ganz unten „Konten einrichten…“](/codedeck/manual/de/session-starten-konto.webp)

Mit einem Klick auf den Namen wählst du ein anderes Konto für dieses Projekt. Neue Sessions starten dann mit diesem Konto. Laufen gerade noch Sessions mit dem bisherigen Konto, fragt CodeDeck nach, ob du sie **weiterlaufen lassen** willst, bis sie enden, oder ob CodeDeck sie **jetzt beenden** soll. **Konten einrichten…** öffnet die Einstellungen im Bereich Coding-Agents.

Die beiden Balken unter dem Konto zeigen, wie viel von deinem Kontingent beim Anbieter verbraucht ist. Was sie bedeuten, erklärt das nächste Kapitel.

## Probier es aus

Starte in deinem Projekt mit **＋** eine neue Session. Wenn die Zeile **fragt vielleicht** zeigt, öffne die Session mit **Terminal**, beantworte die Frage und schließe das Terminalfenster wieder. Gib der Session im Chat eine kleine Aufgabe und beobachte, wie ihr Status von **arbeitet** zu **Runde fertig** wechselt. Wenn sie zwischendurch um Erlaubnis fragt, antworte ihr über **Antworten**. Klappe zum Schluss die Einzelheiten ihrer Karte auf und sieh nach, welche Dateien sie geschrieben hat.

## Mehr dazu

- [KI-Sessions](/codedeck/manual/de/nachschlagen/sessions/): alle Zustände, Wege in eine Session, Sessions im Hintergrund und Fernzugriff im Detail.
- [Konten und Verbrauch](/codedeck/manual/de/nachschlagen/konten/): mehrere Konten nutzen und den Verbrauch im Blick behalten.
- [Meldungen](/codedeck/manual/de/nachschlagen/aufmerksamkeit/): wie CodeDeck dir Bescheid gibt, wenn eine Session auf dich wartet.
- [Programme](/codedeck/manual/de/anhang/programme/): tmux und das Terminal-Programm.
