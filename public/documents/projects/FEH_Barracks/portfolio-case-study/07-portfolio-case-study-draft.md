# Portfolio Case Study Draft

## Title

FEH Barracks Manager: Building a cross-platform collection manager for a live-service game community

## Short intro

FEH Barracks Manager is a solo-built Fire Emblem Heroes companion app that helps players track owned heroes, merge projects, favorites, notes, builds, and teams across browser, mobile, and a portable desktop launcher.

What started as a personal tool became a broader systems project that combined frontend product design, cloud sync, web scraping, data normalization, desktop packaging, and release distribution.

## The problem

Fire Emblem Heroes has a very large roster and a lot of player-specific state. Tracking owned units is only one part of the real problem. Players also care about merge plans, dupes, inheritance fodder, team-building, and keeping all of that usable across devices.

On top of that, the community data sources that make this possible are not stable APIs. They are public sites with inconsistent naming, uneven discovery behavior, and changing layouts.

So the product problem was actually two problems:

- build a useful FEH collection manager
- build a resilient data pipeline behind it

## My approach

I split the system into four parts:

- a Next.js + Supabase app for auth and synced user data
- a local FEH dataset with canonical catalog and per-unit files
- a custom scraping/reconciliation pipeline using Game8 and Fandom
- an Electron launcher for portable desktop use and local asset updates

I also made a deliberate cost/control decision: keep user state in Supabase, but keep heavy art assets in local release bundles rather than pushing everything into cloud storage.

## Key engineering work

### Auth and synced state

I implemented email, Google, and Discord sign-in with Supabase, then added account settings so users can link and unlink providers and manage passwords without losing the continuity of their cloud-synced FEH data.

### Data reliability

One of the hardest parts of the project was learning that upstream discovery was not reliable enough. Some heroes were missing from the source site’s default list view even though they still existed and were searchable directly.

I adapted the pipeline by treating Game8 as canonical identity while using stronger roster seeding and reconciliation to close gaps instead of trusting a single scrape pass.

### UX restructuring

The initial app duplicated too much hero editing between multiple screens. I moved detailed owned-hero management into a dedicated `My Heroes` surface and later turned the build editor into a centered modal so it worked better on both desktop and mobile.

### Desktop distribution

I also built a portable launcher that reads GitHub releases, downloads update bundles, and supports a richer local-asset desktop experience without forcing the web app to own massive media payloads.

## Outcome

The result is a full-stack fan-product with real product depth:

- synced FEH account data
- owned hero and build management
- structured hero/build export for AI-assisted planning
- desktop and browser usage modes
- a maintained local FEH dataset
- release engineering for app, launcher, and bundles

## What this project says about me

This project is a strong example of how I work:

- I build around real user behavior, not just technical novelty.
- I can handle both product UX and systems/debugging work.
- I adapt when the first architecture stops being reliable.
- I care about release quality, distribution, and maintainability, not just feature demos.

## Suggested closing line

FEH Barracks Manager is the kind of project I like most: a personal product with real users, messy real-world data, multiple delivery surfaces, and enough technical depth to force good engineering decisions.

