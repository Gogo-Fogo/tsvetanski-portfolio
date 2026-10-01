"""Build the /creative art gallery from the full-resolution originals.

`art-source/<category>/` holds the real files — phone photos, scans, exports.
This script turns each one into a web-sized derivative in
`public/images/animation/<category>/` and records its pixel dimensions in
`public/images/animation/manifest.json`, which `src/app/creative/` reads.

Two properties matter, because the previous approach violated both:

* it never crops — the aspect ratio that was shot is the aspect ratio served;
* it never upscales — a 900px scan stays 900px, rather than being stretched
  into a 420px tile and then blown up again by the browser.

Run:  python scripts/build-creative-art.py

The script is idempotent. A category with no originals keeps whatever the
legacy contact-sheet splitter produced; a category with originals drops those
legacy tiles entirely so low-res crops never sit next to real pieces.
"""

from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path

from PIL import Image, ImageOps

ROOT = Path(__file__).resolve().parent.parent

# ui-design first: it is the section that leads the gallery on /creative.
CATEGORIES = ("ui-design", "traditional", "digital", "3d")
IMAGE_SUFFIXES = {".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp", ".bmp"}

MAX_LONG_EDGE = 1800
JPEG_QUALITY = 88
CAPTIONS_FILE = "captions.json"


def slugify(value: str) -> str:
    """Lowercase kebab-case, safe for filenames and URLs."""
    text = re.sub(r"[^a-z0-9]+", "-", value.lower()).strip("-")
    return text or "piece"


def flatten_to_rgb(image: Image.Image) -> Image.Image:
    """Drop transparency onto white so the derivative can be a JPEG."""
    image = ImageOps.exif_transpose(image)
    if image.mode in ("RGBA", "LA") or (image.mode == "P" and "transparency" in image.info):
        rgba = image.convert("RGBA")
        canvas = Image.new("RGB", rgba.size, (255, 255, 255))
        canvas.paste(rgba, mask=rgba.split()[-1])
        return canvas
    return image.convert("RGB")


def fit_long_edge(image: Image.Image, max_edge: int) -> tuple[Image.Image, bool]:
    """Downscale so the long edge is at most `max_edge`. Never enlarges."""
    longest = max(image.size)
    if longest <= max_edge:
        return image, False
    scale = max_edge / longest
    target = (max(1, round(image.width * scale)), max(1, round(image.height * scale)))
    return image.resize(target, Image.LANCZOS), True


def collect_sources(category_dir: Path) -> list[Path]:
    files = [
        path
        for path in category_dir.rglob("*")
        if path.is_file() and path.suffix.lower() in IMAGE_SUFFIXES and not path.name.startswith(".")
    ]
    return sorted(files)


def load_manifest(path: Path) -> dict:
    if not path.exists():
        return {}
    with path.open(encoding="utf-8") as handle:
        return json.load(handle)


def load_captions(source_root: Path) -> dict:
    """Human titles/notes, keyed `<category>/<source-stem>`.

    Kept next to the art rather than in TypeScript so adding a piece is a
    drop-in plus one JSON entry, with no code change.
    """
    path = source_root / CAPTIONS_FILE
    if not path.exists():
        return {}
    with path.open(encoding="utf-8") as handle:
        data = json.load(handle)
    return {key: value for key, value in data.items() if not key.startswith("_")}


def title_from_slug(slug: str) -> str:
    return slug.replace("-", " ").strip().capitalize()


def build(args: argparse.Namespace) -> int:
    source_root = args.source.resolve()
    out_root = args.out_root.resolve()
    gallery_dir = out_root / "public" / "images" / "animation"
    manifest_path = gallery_dir / "manifest.json"
    manifest_in = (args.manifest_in or manifest_path).resolve()

    if not source_root.is_dir():
        print(f"error: source folder not found: {source_root}", file=sys.stderr)
        return 1

    manifest = load_manifest(manifest_in)
    captions = load_captions(source_root)
    missing_captions: list[str] = []

    # Categories whose legacy contact-sheet tiles must disappear once real
    # originals exist, so crops never appear beside the real thing.
    superseded: set[str] = set()
    total_written = 0
    summary: list[str] = []

    for category in CATEGORIES:
        category_dir = source_root / category
        if not category_dir.is_dir():
            continue

        files = collect_sources(category_dir)
        if not files:
            continue

        target_dir = gallery_dir / category
        target_dir.mkdir(parents=True, exist_ok=True)

        pieces = []
        used_names: set[str] = set()
        for index, path in enumerate(files, start=1):
            stem = slugify(path.stem)
            name = f"{category}-{stem}.jpg"
            if name in used_names:
                name = f"{category}-{stem}-{index}.jpg"
            used_names.add(name)

            with Image.open(path) as raw:
                source_size = ImageOps.exif_transpose(raw).size
                image = flatten_to_rgb(raw)

            scaled, resized = fit_long_edge(image, args.max_edge)
            target = target_dir / name
            scaled.save(target, "JPEG", quality=args.quality, optimize=True, progressive=True)

            caption_key = f"{category}/{path.stem}"
            caption = captions.get(caption_key)
            if caption is None:
                missing_captions.append(caption_key)

            pieces.append(
                {
                    "name": name,
                    "width": scaled.width,
                    "height": scaled.height,
                    "source": str(path.relative_to(source_root)).replace("\\", "/"),
                    "sourceWidth": source_size[0],
                    "sourceHeight": source_size[1],
                    "downscaled": resized,
                    "title": caption.get("title") or title_from_slug(stem),
                    "note": caption.get("note") or caption.get("title") or title_from_slug(stem),
                }
            )
            total_written += 1

        manifest[f"art-source/{category}"] = {
            "category": category,
            "count": len(pieces),
            "fullRes": True,
            "pieces": pieces,
        }
        superseded.add(category)
        summary.append(f"  {category:<12} {len(pieces):>3} piece(s) from originals")

    # Retire the legacy split tiles for any category that now has originals.
    retired: list[str] = []

    # A full-resolution group whose source folder was renamed or removed takes
    # its generated files with it, so the gallery never serves orphans.
    available = {category for category in CATEGORIES if (source_root / category).is_dir()}
    for key in list(manifest.keys()):
        entry = manifest[key]
        if not entry.get("fullRes") or entry.get("category") in available:
            continue
        category_dir = gallery_dir / str(entry["category"])
        for piece in entry.get("pieces", []):
            stale = category_dir / piece["name"]
            if stale.exists():
                stale.unlink()
                retired.append(str(stale.relative_to(out_root)))
        if category_dir.is_dir() and not any(category_dir.iterdir()):
            category_dir.rmdir()
        del manifest[key]

    for key in list(manifest.keys()):
        entry = manifest[key]
        if entry.get("fullRes") or entry.get("category") not in superseded:
            continue
        for piece in entry.get("pieces", []):
            stale = gallery_dir / entry["category"] / piece["name"]
            if stale.exists():
                stale.unlink()
                retired.append(str(stale.relative_to(out_root)))
        del manifest[key]

    # Drop entries whose files were removed by hand.
    for key in list(manifest.keys()):
        entry = manifest[key]
        missing = [
            piece["name"]
            for piece in entry.get("pieces", [])
            if not (gallery_dir / entry["category"] / piece["name"]).exists()
        ]
        if len(missing) == len(entry.get("pieces", [])) and missing:
            del manifest[key]

    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    with manifest_path.open("w", encoding="utf-8") as handle:
        json.dump(dict(sorted(manifest.items())), handle, indent=2)
        handle.write("\n")

    print(f"source:  {source_root}")
    print(f"gallery: {gallery_dir}")
    if summary:
        print("\n".join(summary))
    else:
        print("  no originals found — gallery left as-is")
    if retired:
        print(f"\nretired {len(retired)} legacy tile(s) superseded by originals")
    if missing_captions:
        print(f"\nno caption for {len(missing_captions)} file(s) — falling back to the filename:")
        for key in missing_captions:
            print(f"  {key}")
    print(f"wrote {total_written} derivative(s); manifest has {len(manifest)} source group(s)")
    return 0


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__, formatter_class=argparse.RawDescriptionHelpFormatter)
    parser.add_argument("--source", type=Path, default=ROOT / "art-source", help="folder holding full-resolution originals")
    parser.add_argument("--out-root", type=Path, default=ROOT, help="repo root to write the gallery into")
    parser.add_argument("--manifest-in", type=Path, default=None, help="read an existing manifest from here instead")
    parser.add_argument("--max-edge", type=int, default=MAX_LONG_EDGE, help=f"long-edge cap for derivatives (default {MAX_LONG_EDGE})")
    parser.add_argument("--quality", type=int, default=JPEG_QUALITY, help=f"JPEG quality (default {JPEG_QUALITY})")
    return build(parser.parse_args())


if __name__ == "__main__":
    raise SystemExit(main())
