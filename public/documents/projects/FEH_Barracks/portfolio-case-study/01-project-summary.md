# Project Summary

## One-line version

FEH Barracks Manager is a cross-platform Fire Emblem Heroes collection manager that combines a custom scraping/data pipeline, cloud-synced user data, and a portable desktop launcher.

## Short portfolio summary

I built FEH Barracks Manager to solve a real personal pain point: Fire Emblem Heroes has a huge roster, constant updates, and a lot of player-specific state that is hard to track across devices. I wanted one place to manage owned heroes, merge projects, favorite units, build notes, teams, tavern-style social features, and desktop-friendly local assets without giving up cloud sync.

The final system is not just a CRUD app. It includes:

- a Next.js web application with Supabase auth and per-user synced data
- a custom scraping pipeline that reconciles Game8 and Fandom into a local FEH hero dataset
- a portable Electron launcher that can ship the app with local FEH assets and update bundles from GitHub releases
- cross-device usage across desktop browser, mobile browser, and launcher

## What makes it strong as a portfolio piece

- It solves a real niche product problem for an active game community.
- It combines frontend, backend, scraping, auth, release engineering, and product design.
- It shows iteration under unstable upstream data sources.
- It includes decisions about cost control, data ownership, and distribution tradeoffs.
- It has enough scope to talk about both product thinking and engineering execution.

## My role

This is a solo-built project. The work spans:

- product definition
- UX design
- frontend implementation
- Supabase schema and auth flows
- scraper architecture and maintenance
- launcher packaging
- release pipeline and deployment
- ongoing data quality and bug triage

## Current feature set at a glance

- email, Google, and Discord sign-in
- account settings with provider linking/unlinking
- synced barracks, favorites, notes, and teams
- hero browser and owned-library management
- FEH build tracking: merges, dupes, blessings, equipped slots, fodder/manual inventory
- AI export context for build/planning workflows
- official FEH news feed and FEH video feed in the dashboard
- tavern/social layer and profile handling
- portable Windows launcher with update flow and local asset sync

