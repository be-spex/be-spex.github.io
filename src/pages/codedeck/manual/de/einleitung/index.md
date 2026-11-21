---
layout: ../../../../layouts/Manual.astro
title: "Was CodeDeck ist"
part: 1
order: 1
purpose: >-
  Nach dieser Seite weißt du, wofür CodeDeck da ist, was es dir bei der Arbeit mit einem Coding-Agent nützt und was es bewusst nicht ist.
draft: true
---

<aside class="plan">

**Arbeitsanweisung:** Klare, ruhige Einordnung ohne Werbesprache. Der Leser soll danach entscheiden können, ob CodeDeck zu seiner
 Arbeitsweise passt. Grundlage: `README.md` und `docs/KONZEPT.md` Teil 1 und 4 im CodeDeck-Repo, die Texte der
 App-Seite (`src/data/apps.ts`, Eintrag `codedeck`) und das Willkommensfenster. Ein Bild: das Projektfenster
 neben einem Terminal mit laufendem Coding-Agent (Montage oder Skizze), damit das „daneben“ sichtbar wird.

</aside>

## CodeDeck in einem Satz

<aside class="plan">

**Inhalt:** Ein ruhiges Radar neben deinem Coding-Agent: Es zeigt, was deine KI-Sessions tun und geändert haben, sichert
   deine Arbeit und sammelt, was du der KI als Nächstes mitgibst. Danach drei, vier Sätze, die das ausführen.

</aside>

## Wie CodeDeck und dein Coding-Agent zusammenarbeiten

<aside class="plan">

**Inhalt:** Du arbeitest weiter im Terminal oder in der Desktop-App deines Coding-Agents. Der Coding-Agent meldet CodeDeck
   über Hooks jeden Schritt (gestartet, arbeitet, fragt, Runde fertig); CodeDeck liest den Stand deines Projekts aus
   Git. Eine einfache Skizze: Coding-Agent ↔ Hooks ↔ CodeDeck ↔ Git/Projektordner. Ausdrücklich: CodeDeck schreibt
   keine Prompts für dich und greift nicht in den Chat ein; es hängt nur an, was du ausgewählt hast.

</aside>

## Was es dir nützt

<aside class="plan">

**Inhalt:** Je Nutzen ein kurzer Absatz mit fett gesetztem Stichwort: den Überblick über mehrere Sessions und Projekte
   behalten, ohne Terminals abzusuchen; sehen, was eine Runde geändert hat; jederzeit zu einem Stand vor einer Runde
   zurück (Sicherungspunkte); gezielt Dateien, Änderungen und Kommentare an den nächsten Prompt hängen; Entwürfe der
   KI getrennt von der eigentlichen Arbeit (Werkbank); merken, wenn eine Session auf dich wartet.

</aside>

## Was CodeDeck nicht ist

<aside class="plan">

**Inhalt:** Klare Abgrenzung, je Punkt ein Satz mit Begründung: kein Editor und keine IDE (Dateien öffnen in deinem Editor
   oder in kleinen Betrachtern); kein Coding-Agent und kein Chat (die KI läuft in deinem Coding-Agent); kein
   vollständiger Git-Client (nur die häufigen Aktionen: Fetch, Pull, Commit, Push; kein Merge, kein Rebase, kein
   Vormerken einzelner Zeilen); kein Cloud-Dienst (alles bleibt auf deinem Rechner, kein Konto bei be spex); kein
   Ersatz für Code-Review durch Menschen. Ziel: Der Leser erwartet nichts, was CodeDeck nicht kann.

</aside>

## Für wen CodeDeck gedacht ist

<aside class="plan">

**Inhalt:** Wer mit einem Coding-Agent an echten Projekten arbeitet, oft mit mehreren Sessions oder Projekten zugleich,
   unter Linux. Was man mitbringen sollte (Terminal grundsätzlich bedienen können) und was nicht nötig ist
   (Git-Kenntnisse: Teil 3 erklärt das Nötige).

</aside>

## Was du brauchst

<aside class="plan">

**Inhalt:** Kurz: Linux, git, ein Coding-Agent (heute Claude Code), empfohlen tmux und ein Terminal-Programm. Für alles
   Weitere Verweis auf Anhang A (Programme), B (Coding-Agents) und C (Wayland). Der Rechner-Check im
   Willkommensfenster sagt, was fehlt.

</aside>
