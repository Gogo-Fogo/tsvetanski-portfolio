# Hard Problems and Solutions

## 1. Upstream hero discovery was unreliable

### Problem

The first discovery model trusted the Game8 all-heroes scroll view too much. In practice, some heroes were absent from the unfiltered list but appeared when searched directly.

### Why it mattered

That meant the scraper could look “successful” while still missing real heroes.

### Fix

- stop trusting blank-scroll discovery as canonical
- seed from a stronger roster source
- resolve back to Game8 pages for canonical identity
- add reconciliation logic instead of assuming one pass is enough

## 2. Naming mismatches across sources

### Problem

Fandom, Game8, and player language do not always align on hero names or labels.

### Fix

- treat Game8 as canonical identity
- keep alias maps
- use Fandom metadata only as enrichment
- validate aliases separately

## 3. Data recovery after drive loss

### Problem

A drive failure meant local data had to be reconstructed from recovered snapshots and runtime folders that were not meant to be the source of truth.

### Fix

- promote the recovered data back into canonical project paths
- avoid treating runtime `feh-data/` as source
- restore `db/` from the best recovered snapshot
- re-run reconciliation/import passes to clean the catalog

This is a strong portfolio story because it shows recovery discipline, not just feature delivery.

## 4. Heavy assets vs cloud cost

### Problem

FEH art assets are large. Putting everything into Supabase Storage would have created cost and operational problems.

### Fix

- keep cloud data lightweight and synced
- ship heavy assets locally for launcher users
- keep the browser app focused on metadata, proxies, and manageable runtime payloads

## 5. UX drift from too many management surfaces

### Problem

Initially, the app duplicated hero management between the main barracks screen and the owned-heroes screen. That made editing awkward and forced too much scrolling.

### Fix

- move owned-hero editing into the dedicated `My Heroes` surface
- shift the main barracks page toward dashboard/navigation
- replace a long inline editor with a centered modal editor

That change improved clarity and mobile usability at the same time.

## 6. Version alignment across site, release, and launcher

### Problem

A desktop launcher that downloads bundles can easily drift from:

- the web app version
- GitHub release tag
- launcher binary version

### Fix

- tighten version-label handling
- make release/tag naming explicit
- ship release-specific banner assets
- surface launcher-vs-installed-vs-latest info clearly

## 7. Auth and identity linking

### Problem

Adding Google and Discord sign-in is not just a button problem. It affects redirect config, Supabase auth settings, provider linking, and account continuity.

### Fix

- add proper OAuth provider setup
- add callback handling
- build account settings for link/unlink flows
- support password updates for OAuth-created accounts too

