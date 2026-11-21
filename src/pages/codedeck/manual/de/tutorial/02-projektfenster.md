---
layout: ../../../../../layouts/Manual.astro
title: "Das Projektfenster"
nav: "Das Projektfenster"
part: 2
order: 2
purpose: >-
  Du lernst die Bereiche des Projektfensters kennen und weißt, wo du was findest und wie du zwischen Projekten wechselst.
---

Im vorigen Kapitel hast du dein erstes Projekt geöffnet. Das Fenster, das sich dabei geöffnet hat, ist das **Projektfenster**. In ihm verbringst du die meiste Zeit mit CodeDeck. Dieses Kapitel verschafft dir zuerst einen Überblick über seine Bereiche und erklärt dann die linke Spalte genauer, mit der du dich zwischen deinen Projekten bewegst.

## Die Bereiche auf einen Blick

Das Projektfenster ist in Spalten aufgeteilt. Jede Spalte beantwortet eine Frage, die sich bei der Arbeit mit der KI stellt.

![Das Projektfenster mit allen Spalten, nummeriert von 1 bis 6: links die Projektliste, daneben die KI-Sessions und darunter Nächster Prompt, in der Mitte das Deck, rechts davon der Trail und ganz rechts die Dateiliste](/codedeck/manual/de/projektfenster-bereiche.webp)

1. **Die Projektliste** ganz links zeigt, an welchem Projekt du gerade bist und ob in deinen anderen Projekten etwas los ist. Sie ist das Thema dieses Kapitels.
2. **Die Sessions** daneben zeigen alle KI-Sessions dieses Projekts, was sie gerade tun und ob eine auf dich wartet. Oben in dieser Spalte startest du neue Sessions. Darum geht es in Kapitel 3, [KI-Session starten](/codedeck/manual/de/tutorial/03-session-starten/).
3. **Nächster Prompt** unten in derselben Spalte fasst zusammen, was du für die nächste Runde an den Prompt gehängt hast. Kapitel 7, [Nächster Prompt](/codedeck/manual/de/tutorial/07-naechster-prompt/), erklärt das Anhängen.
4. **Das Deck** in der Mitte ist die große Arbeitsfläche. Es hat vier Reiter: **Aktivität** zeigt, was die Sessions in den letzten Stunden getan haben, **Änderungen** zeigt, was sie geändert haben, **Werkbank** sammelt, was sonst noch angefallen ist, und **Nächster Prompt** zeigt alles, was mit deinem nächsten Prompt mitgeht. Rechts in der Reiterleiste steht die Frage, die der offene Reiter beantwortet, und die Glocke daneben zeigt dir die letzten Ereignisse und Tipps. Jeder Reiter hat sein eigenes Kapitel, von [Aktivität](/codedeck/manual/de/tutorial/04-aktivitaet/) bis [Nächster Prompt](/codedeck/manual/de/tutorial/07-naechster-prompt/).
5. **Der Trail** ist die schmale Spalte mit der senkrechten Linie. Er zeigt den Verlauf deines Projekts in Git und die Sicherungspunkte, und seine Farbe sagt dir, wie sicher deine Arbeit gerade ist. Mehr dazu in Kapitel 8, [Trail und Sicherungspunkte](/codedeck/manual/de/tutorial/08-trail/).
6. **Die Dateiliste** ganz rechts zeigt die Dateien deines Projekts als Baum. Oben steht der Branch, auf dem du arbeitest, und von dort aus erreichst du die Git-Aktionen wie Commit und Push. Darum geht es in Kapitel 9, [Dateien und Commit](/codedeck/manual/de/tutorial/09-commit/).

Du musst dir diese Aufteilung nicht sofort merken. Jedes Symbol in CodeDeck erklärt sich in einem kleinen Hinweis, wenn du mit der Maus darauf zeigst. Und die Führung „Tutorial: Projektfenster“ im CodeDeck-Menü leuchtet die Bereiche bei Bedarf noch einmal der Reihe nach aus.

## Die Projektliste

Ganz oben in der linken Spalte steht der **Name des Projekts**, das dieses Fenster gerade zeigt, und darunter der Ordner, in dem es liegt. Das farbige Zeichen links daneben ist das Zeichen des Projekts. CodeDeck gibt jedem Projekt eine eigene Farbe, damit du die Projekte auch in der Taskleiste deines Desktops auseinanderhalten kannst.

![Die Projektliste: oben das aktuelle Projekt orbit-api, darunter „Wartet in anderen Projekten“ mit vier Karten, dann „Zuletzt“ und die Projekte, gruppiert nach Ordnern](/codedeck/manual/de/projektfenster-projektliste.webp)

Darunter folgt die Liste aller deiner Projekte. Sie ist in mehrere Abschnitte gegliedert:

- **Wartet in anderen Projekten** erscheint nur, wenn es etwas zu melden gibt. Hier stehen KI-Sessions aus anderen Projekten, die dich gerade etwas fragen oder mit ihrer Runde fertig sind. Jede Karte nennt die Session und in einer Zeile, worauf sie wartet. Karten mit einer Frage sind farbig umrandet, damit du sie nicht übersiehst.
- **Zuletzt** zeigt die Projekte, die du zuletzt geöffnet hast. So kommst du schnell zu den zwei, drei Projekten zurück, zwischen denen du gerade hin und her wechselst.
- Darunter stehen **alle deine Projekte**, gruppiert nach den Ordnern, in denen sie liegen. Liegen zum Beispiel mehrere Projekte im Ordner `acme`, bilden sie eine Gruppe, die du mit einem Klick auf ihre Überschrift zu- und aufklappen kannst.

Neben dem Namen eines Projekts stehen manchmal kleine Zeichen. Sie zeigen dir, mit welchem Konto die KI-Sessions dieses Projekts arbeiten, ob es dort Änderungen gibt, die noch nicht committet oder gepusht sind, und ob auf der Werkbank etwas Neues liegt. Zeigst du mit der Maus auf ein Zeichen, erklärt CodeDeck, was es bedeutet.

**Ein Klick auf ein Projekt** zeigt es in diesem Fenster. CodeDeck merkt sich dabei für jedes Projekt, welcher Reiter offen war und was du dir angesehen hast, sodass du beim Zurückwechseln dort weitermachst, wo du aufgehört hast. Mit **Strg+Tab** kommst du jederzeit zum vorigen Projekt zurück. Wenn du ein Projekt lieber in einem eigenen Fenster neben dem aktuellen haben möchtest, klickst du es mit gedrückter **Strg**-Taste oder mit der mittleren Maustaste an. Zeigst du mit der Maus auf ein Projekt, erscheinen außerdem kleine Werkzeuge, darunter eines zum Öffnen in einem neuen Fenster. Weitere Befehle für ein Projekt findest du in seinem Menü, das du mit einem Rechtsklick öffnest.

Neue Projekte nimmst du über das Menü ⋯ neben der Überschrift „Projekte“ auf, wie im [vorigen Kapitel](/codedeck/manual/de/tutorial/01-vorbereitung/) beschrieben. Dort kannst du die Liste auch sortieren.

## Das CodeDeck-Menü und die Schnelleinstellungen

Oben rechts in der Kopfzeile der Projektliste sitzen zwei Knöpfe, die du immer wieder brauchen wirst.

Das **CodeDeck-Logo** ganz rechts öffnet das **CodeDeck-Menü**. Es enthält alles, was nicht zu einem bestimmten Projekt gehört.

![Das CodeDeck-Menü mit den Einträgen Über CodeDeck, Willkommen und Rechner-Check, Tutorial: Projektfenster, Tutorial: Tastenkürzel, Handbuch, Webseite, Diagnose kopieren, Fehler melden und Projekt schließen](/codedeck/manual/de/projektfenster-menue.webp)

- **Über CodeDeck** zeigt die Version und die Lizenz.
- **Willkommen und Rechner-Check** öffnet das Willkommensfenster aus dem ersten Kapitel wieder, etwa nachdem du ein fehlendes Programm installiert hast.
- **Tutorial: Projektfenster** startet die Führung durch das Fenster, und **Tutorial: Tastenkürzel** zeigt dir die wichtigsten Tastenkürzel.
- **Handbuch** und **Webseite** öffnen die Seiten von CodeDeck im Browser.
- **Diagnose kopieren** legt Angaben über deine CodeDeck-Version, deinen Desktop und die Verbindungen in die Zwischenablage. Die brauchst du, wenn du mit **Fehler melden…** ein Problem meldest.
- **Projekt schließen** schließt das Projekt und mit ihm das Fenster. Das geht auch mit **Strg+W**.

Links neben dem Logo öffnet das Symbol mit den Schiebereglern die **Schnelleinstellungen**. Hier findest du, was du im Alltag öfter umstellst.

![Die Schnelleinstellungen: „Nicht stören“ mit einer Auswahl, darunter „Melden, wenn ich woanders bin“ mit den Häkchen „eine Session fragt“, „eine Runde ist fertig“, „ein Git-Befehl scheitert“, in der Taskleiste und als Meldung, ganz unten „Alle Einstellungen…“](/codedeck/manual/de/projektfenster-schnelleinstellungen.webp)

Mit **Nicht stören** schaltest du die Meldungen von CodeDeck für eine Weile ab, zum Beispiel während einer Besprechung. Unter **Melden, wenn ich woanders bin** legst du fest, wann CodeDeck sich meldet, während du in einem anderen Fenster arbeitest: wenn eine Session dich etwas fragt, wenn eine Runde fertig ist oder wenn ein Git-Befehl scheitert. Außerdem wählst du, ob es das in der Taskleiste tut, mit einer Nachricht auf dem Desktop oder auf beide Arten. **Alle Einstellungen…** öffnet die Einstellungen mit allen übrigen Möglichkeiten, darunter die Sprache und das Farbschema unter **Benutzeroberfläche**.

## Spalten anpassen

Die Breite der Sessions und der Dateiliste kannst du ändern, indem du die Trennlinie zwischen zwei Spalten mit der Maus ziehst. Das Deck in der Mitte nimmt sich den Platz, der übrig bleibt.

Wenn du mehr Platz brauchst, kannst du Spalten auch ganz zuklappen. Die **Dateiliste** klappst du mit **Strg+B** zu und wieder auf. Zugeklappt bleibt von ihr eine schmale Leiste am rechten Rand, und ein Klick darauf öffnet sie wieder. Die **Projektliste** klappst du mit **Strg+Shift+L** oder mit einem Klick auf das Zeichen des Projekts oben links zu. Zugeklappt zeigt sie nur noch die Zeichen deiner Projekte untereinander, und ein Klick auf ein Zeichen wechselt weiterhin das Projekt.

CodeDeck merkt sich die Breiten und die zugeklappte Dateiliste für jedes Projekt einzeln. So kann jedes Projekt so aussehen, wie es für die Arbeit daran am besten passt. Ob die Projektliste zugeklappt ist, gilt dagegen für alle Projekte gemeinsam, denn mit ihr bewegst du dich zwischen den Projekten.

## Probier es aus

Füge ein zweites Projekt zur Liste hinzu, falls du noch keines hast, und wechsle mit einem Klick dorthin. Kehre dann mit **Strg+Tab** zum ersten Projekt zurück und wieder zurück zum zweiten. Klappe anschließend die Dateiliste mit **Strg+B** zu und wieder auf, und ziehe die Trennlinie neben den Sessions ein Stück nach rechts. Wenn du danach das Projekt wechselst und zurückkommst, hat CodeDeck sich die neue Breite gemerkt.

## Mehr dazu

- [Projekte und Fenster](/codedeck/manual/de/nachschlagen/projekte/): die Projektliste, Gruppen, mehrere Fenster und die Startseite im Detail.
- [Meldungen](/codedeck/manual/de/nachschlagen/aufmerksamkeit/): wann und wie CodeDeck sich meldet, und „Nicht stören“.
- [Einstellungen](/codedeck/manual/de/nachschlagen/einstellungen/): alle Einstellungen, Themes und die Sprache.
- [Tastenkürzel](/codedeck/manual/de/nachschlagen/tastenkuerzel/): alle Tastenkürzel auf einen Blick.
