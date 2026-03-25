# Launcher and Distribution

## Why the launcher exists

The launcher exists because the product has a split personality:

- browser app for synced user state
- local desktop experience for richer FEH assets and portable usage

Instead of trying to force the browser app to own all local media, the launcher handles desktop packaging and bundle updates.

## What the launcher does

- wraps the FEH Barracks web app in an Electron desktop shell
- checks GitHub releases for updates
- downloads release bundles such as:
  - `feh-data-bundle.zip`
  - `feh-assets-full-bundle.zip`
- stores local FEH data next to the EXE in portable mode when possible
- surfaces update status and release notes to the user

## Why this is interesting technically

This is not a generic Electron wrapper.

It handles:

- portable desktop packaging
- release-asset update logic
- local/remote app coordination
- asset bundling strategy
- version messaging and install-state awareness

## Release strategy

The project uses GitHub Releases as the distribution layer for:

- launcher executable
- data bundle
- full local asset bundle

That makes release management explicit and user-visible while avoiding a more complex installer/update stack.

## Key lesson

The launcher can update local bundles, but an old launcher EXE still remains an old binary until the user downloads the new executable.

That distinction became an important product and UX lesson:

- app/data version
- installed local data version
- launcher binary version

all need to be communicated clearly.

## Why this helps the portfolio case

This shows that the project is not just “a website.” It includes:

- release packaging
- asset distribution
- desktop delivery
- update UX

That broadens the story from frontend engineering into product delivery and distribution engineering.

