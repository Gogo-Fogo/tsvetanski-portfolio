# Resume and Interview Notes

## Resume-ready bullets

- Built a cross-platform companion app for Fire Emblem Heroes using Next.js, React, Supabase, and Electron, supporting browser, mobile, and portable desktop usage.
- Designed and maintained a custom data pipeline that reconciles Game8 and Fandom into a structured local hero catalog, including asset pulls, alias resolution, and recovery tooling.
- Implemented multi-provider authentication with email, Google, and Discord, plus account linking/unlinking and password management for shared user identity across sign-in methods.
- Created a release workflow that packages a portable launcher, data bundle, and full local asset bundle through GitHub Releases.
- Reworked owned-hero management UX into a dedicated library flow with modal editing for merges, dupes, blessings, build slots, and fodder tracking.

## Strong technical talking points

### Why was this harder than a normal CRUD app?

Because the project had to combine:

- user-authenticated cloud state
- unstable third-party source data
- local asset management
- desktop packaging
- product UX for a complex niche domain

### What was the most interesting technical challenge?

The biggest challenge was data quality and source reliability. Hero discovery looked complete at first, but upstream behavior was inconsistent. I had to redesign the discovery/reconciliation approach instead of assuming the source site’s main list was trustworthy.

### What decisions show engineering judgment?

- separating cloud user state from heavy local assets
- keeping Game8 canonical and Fandom secondary
- adding reconciliation instead of trusting scrape success blindly
- moving complex hero editing into a modal instead of a long inline layout
- making release assets and launcher updates explicit through GitHub Releases

## Good “why this matters” lines

- This project shows I can own product architecture end to end.
- It demonstrates practical engineering under messy real-world constraints.
- It proves I can turn a niche personal tool into a system with real distribution and maintenance concerns.

## Things to avoid overclaiming

- Do not say it uses official FEH APIs. It does not.
- Do not say mobile was exhaustively QA-tested on every device.
- Do not imply the launcher self-updates its binary unless that is explicitly added later.
- Do not frame scraping as trivial; the stronger story is that the pipeline had to evolve because source behavior was unreliable.

