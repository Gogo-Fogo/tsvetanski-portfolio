# Art Assets — Source of Truth

Drop your **full-resolution** artwork in here. The site never reads this folder
directly — `scripts/build-creative-art.py` turns each file into a web-sized
derivative under `public/images/animation/<category>/` and records it in
`public/images/animation/manifest.json`, which `/creative` reads.

## Layout

```
art-source/
  ui-design/     low-fidelity interface and interaction design
  traditional/   charcoal, pencil, ink, life drawing
  digital/       digital painting, illustration, model sheets
  3d/            renders, viewport captures, sculpts, rig tests
```

Category folders map 1:1 to the sections on `/creative`. The script walks them
recursively, so subfolders are fine (`traditional/2024-life-drawing/...`).

## Captions

`captions.json` holds the title and note for each piece, keyed
`<category>/<filename-stem>`. The build merges them into the manifest, so
adding art is a file drop plus one JSON entry — no TypeScript edit, and no
separate listing that can drift out of step with the files on disk.

## Rules the build follows

- **Never crops.** Aspect ratio is preserved exactly as shot.
- **Never upscales.** A 900px-wide scan stays 900px wide. Upscaling was the
  problem with the old contact-sheet split, so the pipeline refuses to do it.
- **Applies EXIF rotation**, so phone photos come in the right way up.
- **Downscales to a 1800px long edge** (configurable) at JPEG quality 88.

## Running it

```powershell
python scripts/build-creative-art.py
```

Re-runnable and idempotent. It only rewrites a category that has source files,
and it deletes the old contact-sheet tiles for that category once real
originals exist, so the two never mix in the gallery.

## Provenance

Originals here are committed so the gallery is reproducible from a clone. If
the folder grows past ~100 MB, move the originals to external storage and point
the script at them instead — see `--source` in the script's `--help`.

Two sources, both recovered from the artist rather than re-derived:

- `ui-design/` — the five phone photos of the low-fidelity MUMOSA UI design
  sheets (`IMG_3551`–`IMG_3559`), from `Downloads/ful res`. The same photos are
  served at full resolution from
  `public/images/projects/mumosa-crisis-response-vr/` for that project page;
  they are duplicated here so the creative gallery has its own source tree.
- `3d/`, `digital/`, `traditional/` — pulled from the older portfolio at
  <https://gtsvetan.weebly.com/> and renamed to descriptive slugs. These are
  the `_orig` uploads (525–1714px), which is several times the resolution of
  the contact sheets that used to feed this gallery.

Before those arrived, the gallery was built from seven 500×800 contact sheets
in `public/images/`, cut into 44 panels of roughly 250px and upscaled. Every
one of those has now been retired. `scripts/split-animation-sheets.py` is kept
only as a fallback for a category with no originals; it skips any category that
has files here.
