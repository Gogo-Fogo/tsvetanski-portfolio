# Features and User Flows

## Main user value

The core promise of the product is simple:

Track your FEH collection once, then access it from desktop, mobile, or the launcher.

## Primary flows

### 1. Sign in

Users can sign in with:

- email/password
- Google
- Discord

Later, they can manage linked identities from the account settings page and set/reset a password even if they started with OAuth.

### 2. Manage barracks

Users can:

- add heroes to their barracks
- favorite heroes
- maintain notes
- build teams
- browse all heroes
- manage owned heroes separately from the full hero browser

### 3. Manage owned heroes

The `My Heroes` view evolved into the real management surface for owned units.

Each owned hero supports:

- merges
- dupes owned
- blessings
- equipped build slots
- fodder/manual inventory
- notes

This is especially useful because FEH players do not just track ownership. They track future build intent.

### 4. Export AI context

The project includes an AI export flow that turns the user’s collection and build state into structured markdown context.

That creates a useful bridge between:

- game data
- user-owned state
- build planning / assistant workflows

### 5. Social / tavern layer

There is also a social layer that lets users:

- search friends
- maintain profiles
- use a tavern-style social screen

That adds personality to the product and makes it feel less like a plain inventory tool.

### 6. Desktop launcher flow

Launcher users get:

- desktop entry point
- local FEH assets
- update status and release notes
- bundle-driven refreshes through GitHub releases

## Dashboard content

The barracks dashboard intentionally became more than just a list page.

It now includes:

- official FEH news
- recent FEH videos tied to current FEH headlines
- quick navigation to the major product surfaces

## Mobile behavior

The app also received a deliberate responsive pass so the important management surfaces remain usable on mobile browser:

- stacked layouts
- responsive card widths
- mobile-friendly modal/editor behavior
- removal of hover-only assumptions where possible

