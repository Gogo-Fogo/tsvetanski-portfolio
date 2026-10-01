"""Cut Georgi's portrait out of its photo background for the homepage and About page.

Runs with ComfyUI's Python (it has torch + the background-removal models):

    G:/AI_Tools/ComfyUI_windows_portable/python_embeded/python.exe scripts/cutout-portrait.py

Uses BiRefNet-HR (2048 px) from the ComfyUI-RMBG model folder, then:
- decontaminates edge colours so the bright street background doesn't leave a white fringe
  (semi-transparent pixels take their colour from nearby solid foreground, not the photo),
- chokes the alpha slightly and drops faint specks,
- crops to head and shoulders and writes a 2x-resolution PNG.
"""

from __future__ import annotations

import sys
from pathlib import Path

import numpy as np
import torch
from PIL import Image, ImageFilter
from torchvision import transforms

ROOT = Path(__file__).resolve().parent.parent
SOURCE = ROOT / "public/images/Georgi_PFP.jpg"
OUTPUT = ROOT / "public/images/georgi-hero-portrait.webp"
MODELS = Path("G:/AI_Tools/ComfyUI_windows_portable/ComfyUI/models/RMBG")
MODEL = sys.argv[1] if len(sys.argv) > 1 else "BiRefNet"  # or "RMBG-2.0"
SIZE = 2048 if MODEL == "BiRefNet" else 1024


def load_model():
    """Load BiRefNet the way ComfyUI-RMBG does (transformers' remote-code loader chokes on it)."""
    import importlib.util
    import types

    from safetensors.torch import load_file
    from transformers import PreTrainedModel

    folder = MODELS / MODEL
    spec = importlib.util.spec_from_file_location("BiRefNetConfig", folder / "BiRefNet_config.py")
    config_module = importlib.util.module_from_spec(spec)
    sys.modules["BiRefNetConfig"] = config_module
    sys.modules["BiRefNet_config"] = config_module
    spec.loader.exec_module(config_module)

    source = (folder / "birefnet.py").read_text(encoding="utf-8")
    source = source.replace("from .BiRefNet_config import BiRefNetConfig", "from BiRefNetConfig import BiRefNetConfig")
    module = types.ModuleType("portrait_birefnet")
    sys.modules["portrait_birefnet"] = module
    exec(source, module.__dict__)
    cls = next(
        value
        for value in module.__dict__.values()
        if isinstance(value, type) and issubclass(value, PreTrainedModel) and value is not PreTrainedModel
    )
    model = cls(config_module.BiRefNetConfig())
    weights = folder / ("BiRefNet-HR.safetensors" if MODEL == "BiRefNet" else "model.safetensors")
    model.load_state_dict(load_file(str(weights)))
    return model


def predict_alpha(image: Image.Image) -> np.ndarray:
    model = load_model()
    model.to("cuda").eval().half()
    prep = transforms.Compose(
        [
            transforms.Resize((SIZE, SIZE)),
            transforms.ToTensor(),
            transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225]),
        ]
    )
    with torch.no_grad():
        pred = model(prep(image).unsqueeze(0).to("cuda").half())[-1].sigmoid().float().cpu()[0, 0]
    alpha = transforms.functional.resize(pred.unsqueeze(0), list(image.size[::-1]), antialias=True)[0]
    return alpha.clamp(0, 1).numpy()


def decontaminate(rgb: np.ndarray, alpha: np.ndarray) -> np.ndarray:
    """Estimate the true foreground colour under soft edges (pymatting's multilevel solver),
    so the bright street background doesn't bleed into hair and shoulders."""
    from pymatting import estimate_foreground_ml

    return estimate_foreground_ml(rgb / 255.0, alpha) * 255.0


def main() -> None:
    image = Image.open(SOURCE).convert("RGB")
    alpha = predict_alpha(image)

    # Choke: push near-transparent to 0 and near-solid to 1, sharpening the matte edge.
    alpha = np.clip((alpha - 0.08) / 0.84, 0, 1)

    # Keep only the person: drop anything not connected to the big central blob
    # (stray plants or the railing the model might keep).
    from scipy import ndimage

    labels, count = ndimage.label(alpha > 0.5)
    if count > 1:
        sizes = ndimage.sum(np.ones_like(alpha), labels, range(1, count + 1))
        keep = labels == (int(np.argmax(sizes)) + 1)
        keep = ndimage.binary_dilation(keep, iterations=6)
        alpha = alpha * keep

    # Sky shows through the hair spike and the model keeps some of it. Above the hairline
    # (source y < 200, so the face is untouched), fade out bright, grey pixels.
    source = np.asarray(image, dtype=np.float32)
    luma = source @ np.array([0.299, 0.587, 0.114], dtype=np.float32)
    chroma = source.max(axis=2) - source.min(axis=2)
    sky = np.clip((luma - 170) / 40, 0, 1) * np.clip((60 - chroma) / 30, 0, 1)
    sky[200:] = 0
    alpha = alpha * (1 - sky)
    # A slight blur smooths the stair-stepped, speckled rim the sky fade can leave.
    alpha = np.asarray(Image.fromarray((alpha * 255).astype(np.uint8)).filter(ImageFilter.GaussianBlur(0.8)), dtype=np.float32) / 255

    rgb = decontaminate(np.asarray(image, dtype=np.float32), alpha)
    rgba = np.dstack([np.clip(rgb, 0, 255), alpha * 255]).astype(np.uint8)
    cutout = Image.fromarray(rgba, "RGBA")

    # Head-and-shoulders crop at the hero's 330:285 ratio; transparent padding at the sides.
    top = 55
    height = image.height - top
    width = round(height * 330 / 285)
    canvas = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    canvas.paste(cutout.crop((0, top, image.width, image.height)), ((width - image.width) // 2, 0))
    canvas.save(OUTPUT, "WEBP", quality=90, method=6)
    print(f"{MODEL}: wrote {OUTPUT} {canvas.size}")


if __name__ == "__main__":
    main()
