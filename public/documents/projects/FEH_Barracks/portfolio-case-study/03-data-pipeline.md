# Data Pipeline

## Core problem

The game has a large and growing roster, and upstream community sources are not designed as stable APIs. Hero pages, ranking pages, skill pages, and asset sources all have inconsistent structure and naming.

So the data pipeline had to do more than scrape pages. It had to:

- discover heroes reliably
- parse structured hero data
- reconcile missing records
- restore gaps after source failures
- preserve assets and aliases

## Main pipeline design

The pipeline intentionally uses two stages:

1. `Maintenance_Updater.js`
   - discovery/scout role
   - updates the high-level index

2. `build_parser.js`
   - deep-research role
   - enriches individual hero/unit pages into `db/units/*.json`

This separation is important because the discovery and deep-parse phases fail in different ways and hit rate limits differently.

## Supporting data tools

The project includes utility scripts for:

- index reconciliation
- rarity recovery
- fandom name map generation
- alias validation
- fullbody/headshot/quote pulls
- release bundle generation

## Real challenge: upstream inconsistency

One of the biggest technical lessons in this project was that the initial “scroll the full Game8 hero list” approach was not reliable enough.

The turning point:

- some heroes did not appear in the default Game8 scroll view
- but they *did* appear when searched directly
- this created false gaps in the local catalog

The stronger approach became:

- use Fandom’s hero list as a better roster seed
- resolve Game8 hero pages from that roster
- keep Game8 as canonical identity
- use Fandom as a strong asset/headshot/quote source

That is a stronger engineering story than “I scraped a website once.” It shows adaptation when the first extraction model stopped being reliable.

## Catalog quality work

The project also had to recover from a real data-loss event and rebuild consistency between:

- `db/index.json`
- `db/units/*.json`
- Supabase `public.heroes`
- local asset manifests

That recovery work included:

- restoring missing heroes
- backfilling old archive URLs
- fixing rarity coverage
- reconciling duplicate/legacy slugs
- making import logic smarter about supplementing missing rows from unit files

## Why this is portfolio-worthy

This pipeline shows:

- custom ETL thinking
- data normalization across messy sources
- recovery and repair under imperfect conditions
- practical tradeoffs between canonical identity and secondary source enrichment

