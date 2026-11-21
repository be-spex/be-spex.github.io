---
layout: ../../../../layouts/Manual.astro
title: "CodeDeck-Handbuch"
part: 0
order: 0
purpose: >-
  Hier beginnt das Handbuch: Eine kurze Geschichte zeigt, wie ein Arbeitstag mit CodeDeck aussieht, danach führt ein Wegweiser zu den vier Teilen.
draft: true
---

<aside class="plan">

**Arbeitsanweisung:** Diese Seite öffnet das Handbuch. Sie erzählt zuerst eine Geschichte und zeigt danach den Weg durch die vier Teile.

 **Für alle Seiten des Handbuchs gilt** (bei jeder Seite vor dem Schreiben lesen):

 - Zielgruppe: Menschen, die mit einem Coding-Agent (z. B. Claude Code) programmieren oder es vorhaben. Git und KI
   werden nicht vorausgesetzt; jeder Fachbegriff wird beim ersten Auftreten kurz erklärt oder verlinkt (Teil 3).
 - Sprache: Du-Form, ganze, leicht verständliche Sätze, die den Leser abholen. Keine verkürzten Konstruktionen
   („Schreibt eine KI-Session, …“), sondern „Wenn eine KI-Session …“. Ein neuer Gesichtspunkt beginnt einen neuen
   Absatz. Wichtige Begriffe dezent hervorheben (fett), damit man das Thema beim Überfliegen findet.
 - Begriffe wie in der Oberfläche: „KI-Session“ (bei der ersten Nennung im Absatz, danach „Session“), „Coding-Agent“
   für das Programm (nie „KI-Werkzeug“, nie „Sitzung“), „Runde“, „Sicherungspunkt“, „Trail“, „Deck“, „Werkbank“,
   „Nächster Prompt“, „Anhängen“. Namen von Knöpfen und Reitern genau wie in der deutschen Oberfläche.
 - Jede Aussage über das Verhalten vor dem Schreiben im Code prüfen (CodeDeck-Repo: `CLAUDE.md` „Karte“, dann die
   genannten Dateien; `docs/KONZEPT.md` für das Warum). Was nicht gebaut ist, steht nicht im Handbuch.
 - Bilder: Ausschnitte aus der Vorschau mit Beispieldaten (Projekt `orbit-api`, Branch `feature/rate-limit`),
   deutsche Oberfläche, aufgenommen mit `tools/shot.mjs` im CodeDeck-Repo (`npx vite --port 5391`, Aufruf im Kopf der
   Datei). Alle Aufnahmen eines Kapitels in einem Skript sammeln (`tools/manual-shots.mjs`, beim ersten Kapitel mit
   Bildern anlegen), damit sie sich nach Änderungen der Oberfläche neu erzeugen lassen. Ablage als WebP unter
   `public/codedeck/manual/de/<kapitel>-<name>.webp`, jedes Bild mit Alt-Text, der sagt, was man sieht. Ausschnitte
   statt ganzer Fenster, wo es um einen Bereich geht; ein ganzes Fenster nur für Überblicke.
 - Die Kästen „Arbeitsanweisung“ und „Inhalt“ beim Befüllen entfernen; `draft: true` erst entfernen, wenn die
   Seite fertig und vom Nutzer abgenommen ist. Eine Seite je Session, danach dem Nutzer zeigen.
 - Erst die deutsche Fassung; die englische entsteht danach unter `/codedeck/manual/en/` mit gleicher Struktur.
 - Länge: so ausführlich wie nötig, aber jede Seite muss ohne die anderen verständlich bleiben; Querverweise statt
   Wiederholungen.

</aside>

## Ein Vormittag mit CodeDeck

<aside class="plan">

**Inhalt:** Eine Geschichte in der Du-Form (keine Figur mit Namen), etwa eine Bildschirmseite: Du startest morgens dein
   Projekt, gibst einer KI-Session eine Aufgabe und arbeitest an etwas anderem. CodeDeck meldet, dass die Session
   etwas fragt; du antwortest. Die Runde ist fertig, du siehst dir den Diff an, kommentierst eine Zeile, hängst
   eine Datei an und schickst den nächsten Prompt. Etwas geht schief, du gehst zu einem Sicherungspunkt zurück.
   Am Ende committest und pushst du. Jede Station in einem Satz mit dem Bereich von CodeDeck, der dabei hilft,
   und verlinkt auf die passende Seite im Tutorial. Ein Überblicksbild des Projektfensters dazu.

</aside>

## So ist das Handbuch aufgebaut

<aside class="plan">

**Inhalt:** Vier Karten oder kurze Absätze, je Teil ein Satz, für wen und wann man ihn liest: Einleitung (was CodeDeck
   ist und was nicht), Tutorial (einmal durcharbeiten), Nachschlagen (bei Fragen zu einzelnen Themen), Anhang
   (Programme, Coding-Agents, Wayland). Dazu ein Hinweis, dass die Führung im Programm (CodeDeck-Menü →
   „Tutorial: Projektfenster“) die Kurzfassung des Tutorials ist.

</aside>
