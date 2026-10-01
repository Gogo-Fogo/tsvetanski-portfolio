"""Split the Digital Animation contact sheets into individual artwork files.

The source sheets in public/images are 2-column collages holding 4-8 separate
pieces each. Shown as single gallery tiles they are unreadable, so this detects
the white gutters, cuts each panel out, upscales it, and writes the pieces to
public/images/animation/<category>/ along with a manifest.json that
src/app/creative/animation-gallery.ts reads for pixel dimensions.

Run:  python scripts/split-animation-sheets.py

Review sheets showing every cut are written to outputs/animation-split-check/.

This is the legacy fallback path. Any category that has full-resolution
originals in art-source/ is skipped here and owned by
scripts/build-creative-art.py instead, so low-res crops never end up beside
real pieces. Full-resolution manifest groups survive a re-run of this script.
"""

from __future__ import annotations

import json
from pathlib import Path

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

ROOT = Path(__file__).resolve().parent.parent
SOURCE_DIR = ROOT / "public" / "images"
OUTPUT_DIR = ROOT / "public" / "images" / "animation"
CHECK_DIR = ROOT / "outputs" / "animation-split-check"

WHITE_CUTOFF = 246
MIN_PANEL_HEIGHT = 24
MIN_PANEL_WIDTH = 24
MERGE_GAP = 4
PADDING = 4

# These source sheets are low resolution, so each piece is upscaled with a
# high-quality filter and lightly sharpened. That keeps the gallery tiles
# crisp instead of relying on the browser to blur them up to tile size.
TARGET_LONG_EDGE = 420
MAX_UPSCALE = 2.6

SHEETS = [
    {"source": "Art_Storyboards.jpg", "category": "ui-design", "split": False},
    {"source": "Art_3D.jpg", "category": "3d", "split": True},
    {"source": "Art_3D_2.jpg", "category": "3d", "split": True},
    {"source": "Art_Digital.jpg", "category": "digital", "split": True},
    {"source": "Art_Digital_2.jpg", "category": "digital", "split": True},
    {"source": "Art_Traditional_Charcoal_Pencil_etc.jpg", "category": "traditional", "split": True},
    {"source": "Art_Traditional_Charcoal_Pencil_etc_2.jpg", "category": "traditional", "split": True},
]

# Full-resolution originals live here, one folder per category. Any category
# present in this tree is owned by scripts/build-creative-art.py, and the
# splitter must stay out of it.
ART_SOURCE_DIR = ROOT / "art-source"
IMAGE_SUFFIXES = {".jpg", ".jpeg", ".png", ".tif", ".tiff", ".webp", ".bmp"}


def categories_with_originals() -> set[str]:
    """Categories that already have full-resolution originals on disk."""
    found: set[str] = set()
    if not ART_SOURCE_DIR.is_dir():
        return found
    for category_dir in ART_SOURCE_DIR.iterdir():
        if not category_dir.is_dir():
            continue
        if any(
            path.is_file() and path.suffix.lower() in IMAGE_SUFFIXES
            for path in category_dir.rglob("*")
        ):
            found.add(category_dir.name)
    return found


def bands(profile: np.ndarray, threshold: float, min_size: int, merge_gap: int):
    """Return (start, end) runs where profile exceeds threshold."""
    active = profile > threshold
    runs: list[list[int]] = []
    for index, value in enumerate(active):
        if value:
            if runs and index - runs[-1][1] <= merge_gap:
                runs[-1][1] = index
            else:
                runs.append([index, index])
    return [(start, end) for start, end in runs if end - start + 1 >= min_size]


def find_column_gutter(mask: np.ndarray) -> int:
    """Locate the vertical white gutter separating the two collage columns."""
    _, width = mask.shape
    coverage = mask.mean(axis=0)
    low = coverage < 0.01
    best_center = width // 2
    best_score = -1
    left_bound = max(1, int(width * 0.25))
    right_bound = min(width - 1, int(width * 0.75))
    run_start = None
    for x in range(left_bound, right_bound):
        if low[x]:
            if run_start is None:
                run_start = x
        elif run_start is not None:
            run_end = x - 1
            if run_end - run_start + 1 > best_score:
                best_score = run_end - run_start + 1
                best_center = (run_start + run_end + 1) // 2
            run_start = None
    if run_start is not None:
        run_end = right_bound - 1
        if run_end - run_start + 1 > best_score:
            best_center = (run_start + run_end + 1) // 2
    return best_center


def split_sheet(path: Path) -> list[tuple[int, int, int, int]]:
    image = Image.open(path).convert("RGB")
    mask = np.array(image.convert("L")) < WHITE_CUTOFF
    _, width = mask.shape
    gutter = find_column_gutter(mask)

    boxes: list[tuple[int, int, int, int]] = []
    for x0, x1 in ((0, gutter), (gutter, width)):
        column = mask[:, x0:x1]
        coverage = column.mean(axis=1)
        for top, bottom in bands(coverage, 0.01, MIN_PANEL_HEIGHT, MERGE_GAP):
            row = mask[top : bottom + 1, x0:x1]
            col_coverage = row.mean(axis=0)
            spans = bands(col_coverage, 0.01, MIN_PANEL_WIDTH, MERGE_GAP)
            if not spans:
                continue
            left = x0 + spans[0][0]
            right = x0 + spans[-1][1] + 1
            boxes.append((left, top, right, bottom + 1))

    # Reading order: top-to-bottom, then left-to-right within a visual row.
    boxes.sort(key=lambda box: (round(box[1] / 12), box[0]))
    return boxes


def pad_box(box: tuple[int, int, int, int], size: tuple[int, int]):
    left, top, right, bottom = box
    width, height = size
    return (
        max(0, left - PADDING),
        max(0, top - PADDING),
        min(width, right + PADDING),
        min(height, bottom + PADDING),
    )


def upscale(crop: Image.Image) -> Image.Image:
    factor = min(MAX_UPSCALE, max(1.0, TARGET_LONG_EDGE / max(crop.width, crop.height)))
    if factor <= 1.01:
        return crop
    enlarged = crop.resize((round(crop.width * factor), round(crop.height * factor)), Image.LANCZOS)
    return enlarged.filter(ImageFilter.UnsharpMask(radius=2, percent=65, threshold=3))


def main() -> None:
    CHECK_DIR.mkdir(parents=True, exist_ok=True)

    # Keep the groups that scripts/build-creative-art.py owns, so re-running
    # the splitter never throws away full-resolution pieces.
    manifest_path = OUTPUT_DIR / "manifest.json"
    preserved: dict[str, object] = {}
    if manifest_path.exists():
        try:
            existing = json.loads(manifest_path.read_text(encoding="utf-8"))
        except json.JSONDecodeError:
            existing = {}
        preserved = {
            key: value
            for key, value in existing.items()
            if isinstance(value, dict) and value.get("fullRes")
        }

    owned = categories_with_originals()
    manifest: dict[str, object] = dict(preserved)
    for sheet in SHEETS:
        source_path = SOURCE_DIR / str(sheet["source"])
        category = str(sheet["category"])

        if category in owned:
            print(f"{sheet['source']}: skipped (art-source/{category}/ has full-resolution originals)")
            continue

        target_dir = OUTPUT_DIR / category
        target_dir.mkdir(parents=True, exist_ok=True)

        image = Image.open(source_path).convert("RGB")
        if sheet["split"]:
            raw_boxes = split_sheet(source_path)
        else:
            raw_boxes = [(0, 0, image.width, image.height)]
        boxes = [pad_box(box, image.size) for box in raw_boxes]

        stem = source_path.stem.lower().replace("art_", "").replace("_", "-")
        crops: list[tuple[str, Image.Image]] = []
        for index, box in enumerate(boxes, start=1):
            name = f"{stem}-{index:02d}.jpg"
            crop = upscale(image.crop(box))
            crop.save(target_dir / name, quality=92, subsampling=0)
            crops.append((name, crop))

        manifest[str(sheet["source"])] = {
            "category": category,
            "count": len(crops),
            "pieces": [
                {"name": name, "width": crop.width, "height": crop.height}
                for name, crop in crops
            ],
        }

        # Verification contact sheet so the cuts can be eyeballed.
        label_height = 18
        columns = len(crops) if len(crops) <= 4 else (len(crops) + 1) // 2
        cell_width = max(crop.width for _, crop in crops) + 10
        rows = (len(crops) + columns - 1) // columns
        cell_height = max(crop.height for _, crop in crops) + label_height + 10
        sheet_image = Image.new("RGB", (columns * cell_width, rows * cell_height), (255, 255, 255))
        draw = ImageDraw.Draw(sheet_image)
        for index, (name, crop) in enumerate(crops):
            x = (index % columns) * cell_width + 5
            y = (index // columns) * cell_height + 5
            draw.text((x, y), f"{index + 1}. {name} {crop.width}x{crop.height}", fill=(200, 0, 0))
            sheet_image.paste(crop, (x, y + label_height))
        sheet_image.save(CHECK_DIR / f"{source_path.stem}-crops.png")
        print(f"{sheet['source']}: {len(crops)} pieces -> {category}")

    manifest_path.write_text(json.dumps(manifest, indent=2), encoding="utf-8")
    print(f"\nwrote {OUTPUT_DIR}")
    print(f"wrote check sheets to {CHECK_DIR}")


if __name__ == "__main__":
    main()
