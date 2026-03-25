# Prince of Persia: Warrior Within

## Status

Draft 5. This document captures the current Prince identity, card-pool roadmap, and design guardrails for future content work.

## High Concept

Create a Slay the Spire 2 character mod based on the Prince from *Warrior Within*.

The character's core fantasy is:

- survive impossible turns by stealing time back
- pay for those second chances by attracting the Dahaka
- feel aggressive, grim, mobile, and hunted

## Warrior Within Essence

The Prince should feel like:

- a grim survivor under pressure
- a dual-wielding fighter who keeps moving because stopping means dying
- someone who survives by skill, motion, and nerve rather than planted defense
- someone who uses time as a dangerous refusal of fate, not as calm wizardry

Important source-facing truths to preserve:

- he is more desperate and violent than the *Sands of Time* version
- his acrobatics are survival tools, not playful flourish
- dual blades and improvised off-hand weapons matter
- the Dahaka is not background flavor; pursuit is part of the fantasy

## Non-Goals

The Prince should not drift into:

- a stealth-assassin core
- a heavy shield-tank core
- a serene time-mage core
- a stall-heavy counter-lock deck
- a Dark Prince / corruption-first identity in the base pool

## Locked Direction

- Character source: Prince of Persia, *Warrior Within* era
- Visual direction for now: MS Paint placeholder art
- Core relic direction: `Dagger of Time`
- Core punishment direction: Dahaka chase pressure
- Technical direction: STS2 built-in modding + BaseLib
- Final long-term pool target: `88` real Prince cards
- Build toward `88` in waves `32 -> 56 -> 88`
- Generated combat-only utility cards such as `Wind Back`, rewind choices, and Dahaka escape cards do **not** count toward the `88`

## Core Pillars

### 1. Aggressive Survival

The Prince should survive by creating better exchanges, not by sitting behind raw defense.

Design goal:

- reward motion, pressure, and timing
- let defense feel like dodging, deflecting, slipping, or crossing blades
- keep the class dangerous even when under pressure

### 2. Stolen Time

Time manipulation should feel powerful, tempting, and costly.

Design goal:

- rewinds should matter
- rewinds should not be free puzzle solving
- the Dagger should stay iconic and readable

### 3. Relentless Pursuit

Using time should make the Prince feel increasingly hunted.

Design goal:

- first rewind creates tension
- repeated rewinds create panic
- some cards can exploit that pressure without making `Hunted` a separate silo

## Core Systems Direction

### Dagger of Time

The Dagger should remain the clean centerpiece of the class.

Direction:

- the Dagger opens access to rewind
- rewind should stay simple and legible at the base-rules level
- proactive time-travel value should come mostly from surrounding cards, powers, and payoffs rather than from overcomplicating the relic itself

### Honest Rewind Baseline

Baseline rewind should stay honest:

- snapshot means snapshot
- the default rule should not broadly preserve buffs, setups, or state across rewinds
- true "carry something through time" effects belong to later standout cards, powers, or relic upgrades

### Hunted As A Light Mechanic

The hunted feeling should support the class without becoming a fourth silo.

Direction:

- some cards may care whether the Prince rewound this combat
- some cards may care whether Dahaka pressure crossed a threshold
- this should stay lighter than the main Flow / Counter / Time families

## Mechanical Language

The Prince's combat language should lean on:

- `Movement`
- `Main-hand`
- `Off-hand`
- `Dual`

These are strong scaffolding, not hard tribal prisons.

Interpretation:

- `Movement` covers vaults, slips, kicks, rebounds, dodges, and acrobatic setup
- `Main-hand` covers committed primary strikes
- `Off-hand` covers fast follow-ups, grabs, throws, or temporary secondary-weapon pressure
- `Dual` rewards combining both sides of the kit in the same turn

Important note:

- temporary off-hand / weapon improvisation belongs inside the **Flow** family as a subtheme
- it should not become a separate fourth build

## Build Families

The Prince should support three main build families that all still feel like the same hunted Warrior Within character.

### 1. Dual-Blade Flow

Emotional payoff:

- flow-state chains

Gameplay feel:

- pressure in motion
- follow-up attacks
- momentum and angle changes
- dual-weapon sequencing

What this family says:

- "Don't let them breathe."

What it should avoid:

- feeling like generic shiv spam
- feeling like abstract combo math detached from swordplay

### 2. Deflect / Counter

Emotional payoff:

- clutch turnarounds

Gameplay feel:

- spoil the enemy's exchange
- slip danger
- punish commitment
- survive by technique rather than bulk

What this family says:

- "Commit, and I will make you regret it."

Guardrails:

- defense should stay modest and tempo-oriented
- punish windows should usually be once-per-turn or next-hit style
- common cards should rarely fully negate enemy turns
- avoid retained, zero-cost, perfect-answer packages that turn the lane into stall-scumming

### 3. Time Predator

Emotional payoff:

- forbidden spikes

Gameplay feel:

- reckless lines
- Sand pressure
- second-attempt advantage
- dangerous proactive rewind setups

What this family says:

- "I can take this line because time is not done with me yet."

Important note:

- this lane should make rewind proactively appealing
- it should not reduce time travel to a panic button used only after mistakes

## Hybrid Expectation

These families must intertwine naturally.

Healthy hybrids:

- **Flow + Counter:** the most natural hybrid; motion turns enemy commitment into mistakes
- **Flow + Time:** the flashiest hybrid; aggressive overextension backed by time theft
- **Counter + Time:** the slower, more deliberate hybrid; survive the ugly timeline long enough to weaponize it

Design rule:

- the pool should create overlapping verbs and payoffs, not isolated tribes

## Card Feel Principles

Every Prince card should earn its place through both fantasy and play feel.

Each card should have:

- a **fantasy payoff**: does it feel like Warrior Within Prince?
- a **play-feel payoff**: why does pressing it feel good?

Build-feel targets:

- **Flow** should feel best through chained rhythm and smooth pressure
- **Counter** should feel best through clutch reversal moments
- **Time** should feel best through risky spikes and "I got away with that" turns

Reject or redesign cards that are:

- efficient but emotionally flat
- too close to Silent poison / stealth identity
- too close to Ironclad planted defense
- pure generic value with no Prince-specific texture
- likely to create counter-lock or stall-scum gameplay

## Rarity Principles

- commons define the identity and make the builds draftable
- uncommons deepen the lane and add engines
- rares should turbocharge or finish a lane, not rescue one that does not work yet

This matters especially for Wave 1: the Prince should not need rares to feel like himself.

## 88-Card Pool Roadmap

The final target is `88` real Prince pool cards, matching the current vanilla-sized STS2 character pools.

Build toward `88` in waves instead of filling a quota blindly.

### Wave 1: `32` Total Cards

Goal:

- make all three families visible and draftable in Act 1
- add mostly commons and uncommons
- use placeholder art freely while mechanics are tuned

Wave 1 requirements:

- each family gets at least 2 commons worth taking early
- each family gets at least 1 uncommon engine or identity card
- each family gets at least 1 payoff that makes the lane feel real
- hybrids start showing up naturally in ordinary runs
- no broad snapshot-breaking persistence tricks yet

### Wave 2: `56` Total Cards

Goal:

- deepen hybrids
- add stronger engines
- expand hunted/time-support cards carefully
- add more specialized off-hand and proactive rewind enablers

### Wave 3: `88` Total Cards

Goal:

- reach full vanilla-like breadth
- add sidegrades, niche tech, and broader payoff texture
- reserve the most exotic "break the rules of time" effects for this stage or later high-rarity content

## Current Live Baseline (2026-03-24)

The current implementation already provides a usable base for this roadmap:

- the Prince is selectable and has a custom placeholder starter deck and reward pool
- Sand exists as the premium Prince resource
- Sand-cost cards already exist
- `Wind Back` is the current rewind delivery path
- rewind is snapshot-based and currently stays inside the Dahaka chase window once the chase begins
- Dahaka pressure and escape/combat flow now work well enough to return focus to broader card design

This means the next big design step is not inventing a new class foundation from scratch. It is expanding the card ecology around the current systems.

## Test Questions For Each Wave

For each wave, ask:

- do the three families feel emotionally distinct, not just numerically different?
- do hybrid decks happen naturally without forced tribal drafting?
- do Flow cards make turns feel smooth and kinetic?
- do Counter cards create clutch reversals without creating stall loops?
- do Time cards tempt proactive rewind use instead of only covering mistakes?
- does the Prince still feel hunted once rewinds start happening?

## Out Of Scope For The Base Pool

These can still matter later, but they are not the base-pool center of gravity:

- Dark Prince / corruption-first mechanics
- broad cross-rewind persistence as a default rule
- `The Sands' Paradox` extra-act route
- confrontation-route reward structure beyond the current Dahaka baseline

## Next Design Step

Turn Wave 1 into an implementation plan:

- define the first card additions up to `32` total pool cards
- make sure each family has commons, an uncommon identity card, and a payoff
- add bridge cards that deliberately create hybrids
- keep placeholder art acceptable until the mechanics feel right
- keep `TODO.md` and build status aligned as the pool expands
