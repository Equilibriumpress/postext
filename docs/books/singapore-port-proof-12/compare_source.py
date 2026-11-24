#!/usr/bin/env python3
"""Render and compare twelve Postext proof pages with the original source PDF.

Requires a local original PDF, Postext CLI, PyMuPDF and Pillow.
Runs on a local checkout, not through GitHub Actions.
"""
from __future__ import annotations

import argparse
import json
import math
import subprocess
import sys
from pathlib import Path

try:
    import fitz
    from PIL import Image, ImageChops, ImageDraw, ImageStat
except ImportError as exc:
    raise SystemExit("Install pymupdf and pillow for source comparison") from exc

ROOT = Path(__file__).resolve().parent
ORDERED_PAGES = [1, 2, 11, 12, 13, 49, 51, 52, 54, 95, 100, 180]


def source_geometry(pdf: Path) -> list[dict]:
    doc = fitz.open(pdf)
    if doc.page_count != 194:
        raise ValueError(f"Expected the same 194-page source PDF, got {doc.page_count}")
    out: list[dict] = []
    for n in ORDERED_PAGES:
        page = doc[n - 1]
        r = page.rect
        blocks = []
        for block in page.get_text("dict").get("blocks", []):
            if block.get("type") != 0:
                continue
            lines = []
            for line in block.get("lines", []):
                spans = line.get("spans", [])
                txt = "".join(span.get("text", "") for span in spans).strip()
                if txt:
                    lines.append(txt)
            if lines:
                blocks.append({"bboxPt": [round(float(v), 2) for v in block["bbox"]],
                               "lines": lines[:5]})
        out.append({
            "sourcePdfPage": n,
            "widthMm": round(r.width * 25.4 / 72, 3),
            "heightMm": round(r.height * 25.4 / 72, 3),
            "textBlocks": blocks,
            "imageCount": len(page.get_image_info()),
            "fontNames": sorted({span.get("font", "") for block in page.get_text("dict").get("blocks", [])
                                 for line in block.get("lines", []) for span in line.get("spans", [])}),
        })
    doc.close()
    return out


def render_source(pdf: Path, output: Path, dpi: int) -> None:
    doc = fitz.open(pdf)
    for n in ORDERED_PAGES:
        page = doc[n - 1]
        pix = page.get_pixmap(matrix=fitz.Matrix(dpi / 72, dpi / 72), alpha=False)
        pix.save(output / f"source-{n:03d}.png")
    doc.close()


def render_postext(output: Path, dpi: int) -> None:
    command = ["postext", "images", str(ROOT), "--pages", "#1-#12",
               "-f", "png", "--dpi", str(dpi), "-o", str(output)]
    subprocess.run(command, check=True)


def compare(output: Path) -> list[dict]:
    results = []
    for i, source_page in enumerate(ORDERED_PAGES, start=1):
        actual = output / f"source-{source_page:03d}.png"
        candidates = [output / f"page-{i:03d}.png", output / f"page-{i}.png"]
        proof = next((p for p in candidates if p.exists()), None)
        if proof is None:
            raise FileNotFoundError(f"No Postext page {i} found in {output}")
        with Image.open(actual) as original, Image.open(proof) as composed:
            a = original.convert("RGB")
            b = composed.convert("RGB").resize(a.size, Image.Resampling.LANCZOS)
            diff = ImageChops.difference(a, b)
            mean_rms = math.sqrt(sum(v * v for v in ImageStat.Stat(diff).rms) / 3)
            board = Image.new("RGB", (a.width * 2, a.height), "white")
            board.paste(a, (0, 0))
            board.paste(b, (a.width, 0))
            ImageDraw.Draw(board).text((12, 10), f"PDF PAGE {source_page}", fill="#202020")
            ImageDraw.Draw(board).text((a.width + 12, 10), f"POSTEXT PROOF {i}", fill="#202020")
            board.save(output / f"pair-{source_page:03d}.png")
            diff.save(output / f"diff-{source_page:03d}.png")
            results.append({
                "pdfPage": source_page,
                "postextProofPage": i,
                "pixelRootMeanDifference": round(mean_rms, 2),
                "result": "MANUAL VISUAL APPROVAL REQUIRED",
            })
    return results


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--source", required=True, type=Path, help="Local original 194-page PDF, never commit it")
    parser.add_argument("--output", type=Path, default=ROOT / ".proof-output")
    parser.add_argument("--dpi", type=int, default=150)
    parser.add_argument("--skip-postext", action="store_true", help="Use Postext page renders already in output")
    args = parser.parse_args()
    pdf = args.source.resolve()
    if not pdf.exists() or pdf.suffix.lower() != ".pdf":
        raise SystemExit("Source PDF path does not exist or is not a PDF")
    args.output.mkdir(parents=True, exist_ok=True)
    geom = source_geometry(pdf)
    (args.output / "source-geometry.json").write_text(json.dumps(geom, indent=2), encoding="utf-8")
    render_source(pdf, args.output, args.dpi)
    if not args.skip_postext:
        render_postext(args.output, args.dpi)
    summary = {
        "sourcePdfPageCount": 194,
        "selectedSourcePages": ORDERED_PAGES,
        "dpi": args.dpi,
        "comparisons": compare(args.output),
        "note": "Pixel difference is diagnostic, not automated editorial sign-off."
    }
    (args.output / "comparison.json").write_text(json.dumps(summary, indent=2), encoding="utf-8")
    print(json.dumps({"pairs": len(summary["comparisons"]), "report": str(args.output)}, indent=2))


if __name__ == "__main__":
    main()
