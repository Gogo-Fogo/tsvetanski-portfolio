"""Build web-sized project card images for the registry (src/content/projects.ts).

Each card is a 16:10 JPEG, at most 1200 px wide, written to public/images/cards/<slug>.jpg.
Sources are real captures already in public/ (or the project's own YouTube thumbnail).
`focus` is the crop centre as fractions of width and height; tune it when a crop cuts
off the subject.

    python scripts/build-card-images.py
"""

from __future__ import annotations

import io
import urllib.request
from pathlib import Path

from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
PUBLIC = ROOT / "public"
OUT = PUBLIC / "images" / "cards"
RATIO = 16 / 10
MAX_WIDTH = 1200

# slug: (source, (focus_x, focus_y))
CARDS: dict[str, tuple[str, tuple[float, float]]] = {
    "mumosa-crisis-response-vr": ("images/projects/mumosa-crisis-response-vr/mumosa-home-card.jpg", (0.5, 0.5)),
    "birdwatching": ("images/projects/birdwatching/birdwatching-forest-hero.jpg", (0.5, 0.5)),
    "shift-culture-vr": ("images/B360_bike_simulator.png", (0.5, 0.55)),
    "vr-drift-simulator": ("images/DriftImmersive_Banner.png", (0.5, 0.5)),
    "patapon-vr-the-first-beat": ("images/projects/patapon-vr/patapon-boss-battle.png", (0.5, 0.5)),
    "shinobi-story": ("images/ShinobiStoryHeroClean.png", (0.5, 0.45)),
    "shinobi-story-2": ("images/projects/shinobi-story-2/character-creator-in-engine.jpg", (0.5, 0.5)),
    "lizard-wizard": ("images/projects/lizard-wizard/spider-sensing-sandbox.jpg", (0.3, 0.5)),
    "shonen-showdown": ("images/projects/shonen-showdown/duel-fp-01.png", (0.5, 0.5)),
    "prince-of-persia-warrior-within-mod": (
        "images/projects/prince-of-persia-warrior-within-mod/prince-character-select-current-20260505.png",
        (0.5, 0.5),
    ),
    "guilty-as-arrr": ("images/GuiltyAsArr_Playtest.png", (0.5, 0.5)),
    "shogun-flowers-fall-in-blood": ("images/ShogunFlowersFallinBlood_banner.png", (0.5, 0.35)),
    "bg3-toolkit-modding": ("images/projects/bg3-toolkit-modding/bg3-modding-banner.jpg", (0.5, 0.5)),
    "fallout-level-design": ("images/projects/fallout/hall-of-idols/hall-of-idols-p01-img01.png", (0.5, 0.5)),
    "totally-bugged-out": ("images/Totally Bugged Out_banner.png", (0.5, 0.5)),
    "cranky-game-jam": ("images/CRANKY_Animation_Blender_Rigging.png", (0.5, 0.5)),
    "cranky-squirrel-annihilator": ("images/CrankyTheSquirrelAnnihilator_banner.png", (0.5, 0.5)),
    "trash-been": ("https://img.youtube.com/vi/zCdPRazVHYM/hqdefault.jpg", (0.5, 0.5)),
    "the-signal": ("images/Banner_TheSignal.jpg", (0.5, 0.5)),
    "the-last-paycheck": ("images/TheLastPaycheck_Banner.png", (0.5, 0.5)),
    "black-dice-engine": ("images/projects/black-dice-engine/black-dice-home-card.jpg", (0.5, 0.5)),
    "ami-research-companion": ("images/projects/ami/ami-chat-evidence-illustrated.png", (0.5, 0.3)),
    "feh-barracks-manager": ("images/projects/feh-barracks/feh-hero-library.png", (0.5, 0.3)),
    "tur-workout-tracker": ("images/projects/tur-workout-tracker/tur-banner.jpg", (0.9, 0.5)),
    "comfyui-production-pipeline": ("images/projects/comfyui-production-pipeline/prince-birefnet-cutout.png", (0.5, 0.5)),
    "horror-vn-kit": ("images/projects/horror-vn-kit/branching-choices.png", (0.5, 0.5)),
    "legion-go-console-dock": ("images/projects/legion-go-console-dock/dock-exploded-render.jpg", (0.5, 0.5)),
    "figuresmith": ("https://img.youtube.com/vi/rR83laKg7MM/hqdefault.jpg", (0.5, 0.5)),
    "cpse": ("https://img.youtube.com/vi/YP9sqDBSWdo/maxresdefault.jpg", (0.5, 0.5)),
}


def load(source: str) -> Image.Image:
    if source.startswith("http"):
        with urllib.request.urlopen(source, timeout=30) as response:
            return Image.open(io.BytesIO(response.read())).convert("RGB")
    return Image.open(PUBLIC / source).convert("RGB")


def crop_to_ratio(image: Image.Image, focus: tuple[float, float]) -> Image.Image:
    width, height = image.size
    if width / height > RATIO:
        new_width, new_height = round(height * RATIO), height
    else:
        new_width, new_height = width, round(width / RATIO)
    left = min(max(round(focus[0] * width - new_width / 2), 0), width - new_width)
    top = min(max(round(focus[1] * height - new_height / 2), 0), height - new_height)
    return image.crop((left, top, left + new_width, top + new_height))


def main() -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    for slug, (source, focus) in CARDS.items():
        card = crop_to_ratio(load(source), focus)
        if card.width > MAX_WIDTH:
            card = card.resize((MAX_WIDTH, round(MAX_WIDTH / RATIO)), Image.LANCZOS)
        path = OUT / f"{slug}.jpg"
        card.save(path, "JPEG", quality=82, optimize=True, progressive=True)
        print(f"{slug}: {card.width}x{card.height}, {path.stat().st_size // 1024} KB")


if __name__ == "__main__":
    main()
