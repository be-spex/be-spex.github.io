---
layout: ../../../../../layouts/Manual.astro
title: "Was sonst anfiel: Werkbank"
nav: "Werkbank"
part: 2
order: 6
purpose: >-
  Du weißt, wo Entwürfe und Wegwerf-Dateien der KI landen, wie du Brauchbares ins Projekt übernimmst und wie du der KI mit @ai-Hinweisen Aufgaben in Dateien hinterlässt.
draft: true
---

Neben den eigentlichen Änderungen entsteht während einer Runde oft noch mehr: ein Entwurf, Testdaten, ein kleines Skript zum Ausprobieren oder eine Seite, die die KI irgendwo veröffentlicht hat. Der Reiter **Werkbank** sammelt all das, getrennt von deiner eigentlichen Arbeit. Dort stehen auch die Aufgaben, die du der KI mit `@ai` in deinen Dateien hinterlassen hast.

## Warum es die Werkbank gibt

Ohne Vorgabe legt die KI solche Dateien meist in einem temporären Verzeichnis wie `/tmp` ab, manchmal in deinem Home-Ordner, weit weg vom Projekt. Dort findest du sie kaum wieder, und nach einem Neustart sind sie oft verschwunden. Landen sie dagegen mitten im Projekt, liegen sie zwischen den echten Änderungen und geraten leicht in einen Commit. Deshalb bekommt jede neue KI-Session von CodeDeck eine **Startregel** mit: Entwürfe, Mock-ups, Wegwerf-Skripte und Testdaten gehören in den Ordner `.scratch/` im Projekt. Was trotzdem anderswo landet, findet CodeDeck ebenfalls und zeigt es dir.

Die Werkbank zeigt ihren Inhalt in **Kacheln**, oben das, was am ehesten eine Entscheidung von dir braucht. Was du seit deinem letzten Blick noch nicht gesehen hast, trägt die Marke **neu** oder **geändert**, und am Reiter zeigt ein Punkt, dass es Neues gibt. Jede Kachel lässt sich mit dem Pfeil vor ihrem Titel zuklappen, und das Fragezeichen rechts erklärt sie.

## Der Scratch-Ordner

Der **Scratch-Ordner** `.scratch/` liegt in deinem Projekt, wird von Git aber ignoriert. CodeDeck trägt ihn dafür in die lokale Ausschlussliste von Git ein (`.git/info/exclude`), nicht in die `.gitignore`, sodass sich an deinem Projekt nichts ändert. Was dort liegt, kommt also nie aus Versehen in einen Commit.

![Die Kachel Scratch-Ordner mit 19 Dateien: Dateien mit Größe und Alter, zwei davon als „neu“ markiert, zwei Ordner](/codedeck/manual/de/werkbank-scratch.webp)

Die Kachel listet die Dateien und Ordner mit Größe, Alter und der Session, die sie geschrieben hat. Mit den Werkzeugen rechts siehst du eine Datei an, bearbeitest sie, zeigst sie im Dateimanager oder legst sie in den Papierkorb. Ein Doppelklick öffnet eine Datei zum Ansehen, ein Klick mit der mittleren Maustaste zum Bearbeiten.

Willst du eine Datei behalten, **ziehst du sie auf einen Ordner in der Dateiliste**. CodeDeck verschiebt sie dorthin, und sie wird Teil deines Projekts. Was du nicht mehr brauchst, legst du in den Papierkorb, aus dem du es noch zurückholen kannst.

## Außerhalb des Projekts

Manchmal schreibt eine Session trotzdem eine Datei außerhalb des Projekts, zum Beispiel nach `/tmp` oder in ihren eigenen Ordner. Solche Dateien zeigt die Kachel **Außerhalb des Projekts** unter **Dateien**, mit der Session, die sie geschrieben hat.

![Die Kachel „Außerhalb des Projekts“: unter Dateien eine neue Datei in ~/.claude/plans mit dem Knopf „In den Scratch-Ordner“ und eine bereits kopierte Datei aus /tmp, unter Online ein Artefakt auf claude.ai](/codedeck/manual/de/werkbank-ausserhalb.webp)
 Mit **In den Scratch-Ordner** holst du eine Kopie ins Projekt, von dort kannst du sie wie oben ins Projekt ziehen. Das Original bleibt, wo es ist.

Unter **Online** stehen Seiten, die eine Session im Internet veröffentlicht hat, etwa ein Artefakt auf claude.ai, ein Gist oder ein Paste. Davon gibt es keine Datei, nur die Adresse, die die Session am Ende ihrer Runde nennt. CodeDeck merkt sie sich, damit sie nicht im Chat verloren geht. Du öffnest die Seite im Browser oder kopierst ihren Link.

Mit dem Kreuz nimmst du einen Eintrag von der Liste. Die Datei oder Seite selbst bleibt dabei bestehen. Diese Kachel erscheint nur, wenn es etwas zu zeigen gibt.

## @ai-Hinweise

Manchmal fällt dir beim Lesen einer Datei etwas auf, das die KI erledigen soll. Statt es ihr später umständlich zu beschreiben, schreibst du es direkt an die Stelle, in deinem gewohnten Editor. Eine solche Zeile beginnt mit `@ai`, entweder allein oder als Kommentar in der Schreibweise der Datei:

```
@ai Hier fehlt ein Beispiel mit curl.
// @ai Die Fehlermeldung sollte den Grenzwert nennen.
# @ai Diese Option in der README erklären.
<!-- @ai Den Absatz kürzen. -->
```

Wichtig ist, dass `@ai` am Anfang der Zeile steht. Steht schon anderer Text davor, oder steht die Zeile in einem Codeblock in einer Markdown-Datei, ist sie kein Hinweis. So bleiben Texte, die nur über solche Hinweise sprechen, außen vor.

![Die Kachel „Hinweise in deinen Dateien“ mit drei offenen Hinweisen in docs/api.md und docs/limits.md, jeweils mit Zeilennummer, rechts oben „Alle anhängen“](/codedeck/manual/de/werkbank-hinweise.webp)

Die Kachel **Hinweise in deinen Dateien** sammelt alle Hinweise im Projekt mit Datei und Zeile. Mit der Büroklammer an einem Hinweis hängst du ihn an deinen nächsten Prompt, mit **Alle anhängen** alle auf einmal. Hat die KI einen Hinweis erledigt und die Zeile entfernt, verschwindet er aus der Liste, und CodeDeck zählt ihn als erledigt. Kann dein Coding-Agent keine Anhänge entgegennehmen, kopierst du die Hinweise mit **Als Aufgabe kopieren** und fügst sie im Chat ein.

## Probier es aus

Schreibe in einer Datei deines Projekts eine Zeile wie `// @ai Diese Funktion kommentieren` und speichere sie. Öffne den Reiter **Werkbank**: Der Hinweis steht unter **Hinweise in deinen Dateien**. Hänge ihn mit der Büroklammer an deinen nächsten Prompt. Sieh dir danach den Scratch-Ordner an und ziehe, falls dort schon etwas liegt, eine Datei probeweise auf einen Ordner in der Dateiliste.

## Mehr dazu

- [Werkbank](/codedeck/manual/de/nachschlagen/werkbank/): Scratch-Ordner, Abgelegtes und @ai-Hinweise im Detail.
- [Nächster Prompt](/codedeck/manual/de/nachschlagen/anhaenge/): wie angehängte Hinweise bei der KI ankommen und wann sie als erledigt gelten.
