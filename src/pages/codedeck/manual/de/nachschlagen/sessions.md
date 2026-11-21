---
layout: ../../../../../layouts/Manual.astro
title: "KI-Sessions im Detail"
nav: "KI-Sessions"
part: 3
order: 3
purpose: >-
  Alle Zustände einer KI-Session, wo Sessions laufen können und was CodeDeck mit ihnen tun kann.
draft: true
---

<aside class="plan">

**Arbeitsanweisung:** Prüfen: `SessionsPanel.tsx`, `doors.rs`, `place.rs`, `tmux.rs`, `docs/SITZUNGEN.md`,
 `docs/SITZUNGEN-PRUEFUNG.md`, `harness/claude.rs` (`parked`, `attach`).

</aside>

## Die Zustände

<aside class="plan">

**Inhalt:** arbeitet, fragt, fragt vielleicht, Runde fertig, untätig, beendet, im Hintergrund, wird gestartet.

</aside>

## Wo eine Session läuft

<aside class="plan">

**Inhalt:** tmux (von CodeDeck gestartet), eigenes Terminal, Desktop-App, im Hintergrund, aus der Ferne erreichbar.

</aside>

## Wege in eine Session

<aside class="plan">

**Inhalt:** Antworten, Terminal, Desktop; was je nach Ort und Rechner angeboten wird und warum.

</aside>

## Starten, Fortsetzen, Beenden

<aside class="plan">

**Inhalt:** Was CodeDeck startet und beendet (nur selbst gestartete), Startbefehl ansehen und kopieren.

</aside>

## Titel, Farbe, Kurzname

<aside class="plan">

**Inhalt:** Wie Sessions benannt und gefärbt werden; Umbenennen; Entfernen aus „Früher“.

</aside>
