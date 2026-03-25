# Architecture

## Top-level system

The project is split into four major layers:

1. `app/`
   - Next.js 16 web app
   - React 19 UI
   - Supabase-backed auth and per-user data

2. `scraper/` + `scripts/`
   - discovery and parsing pipeline
   - reconciliation and data repair tools
   - asset pull scripts for Fandom/Game8 content

3. `db/`
   - canonical local FEH dataset
   - `index.json` catalog plus per-unit JSON, assets, manifests, aliases

4. `launcher/`
   - Electron wrapper for desktop users
   - release/update UX
   - local FEH asset bundle consumption

## Web app architecture

The web app uses the App Router and server/client separation in Next.js.

Key responsibilities:

- server-render protected pages using Supabase server client
- client-side interaction for filters, hero editing, tavern UI, and account linking
- API routes for serving local media proxies such as headshots/fullbody assets
- route-based user flows for login, callback handling, reset password, barracks, hero pages, and account settings

## Data ownership model

The project deliberately separates lightweight cloud data from heavy local assets.

Supabase stores:

- user auth identity
- profiles
- barracks entries
- favorites
- notes
- teams
- hero catalog metadata used by the app

Local data / release bundles store:

- FEH hero catalog source archive
- per-hero raw scraped text and structured unit files
- headshots, fullbody art, quotes, and manifests

This decision keeps Supabase cost under control while still allowing the launcher to feel rich and desktop-native.

## Why this split matters

- The app stays fast and cheap to host.
- The launcher can ship richer local assets.
- Source data stays recoverable even if upstream pages change later.
- User-owned state remains cloud-synced and account-bound.

## Identity model

Game8 is treated as canonical for hero identity.

That means:

- canonical hero naming and URLs come from Game8
- Fandom identifiers are metadata and asset helpers, not the source of truth for unit identity
- alias resolution exists to support historical names, alternate labels, and user-facing search

This matters because different FEH community sources name the same hero differently.

