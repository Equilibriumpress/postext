#!/usr/bin/env python3
"""Regenerate the Postext manifest from measured-layout configuration and assets.

The JSON files are the editable design and source-resource inventories.
No source-page bitmap, paragraph text, or PDF content is embedded in the config.
"""
from __future__ import annotations

import argparse
import json
from pathlib import Path

ROOT = Path(__file__).resolve().parent


def build() -> dict:
    config = json.loads((ROOT / "layout.json").read_text(encoding="utf-8"))
    resources = json.loads((ROOT / "resource-manifest.json").read_text(encoding="utf-8"))
    entry = {
        "version": 2,
        "configVersion": 22,
        "id": "singapore-port-proof-12",
        "name": "SINGAPORE · Twelve-page Reconstruction Proof",
        "locale": "en",
        "locales": ["en"],
        "description": "Twelve representative editable Postext compositions referenced to specific pages of the original 194-page Rough Guide Directions Singapore PDF; source-comparison acceptance pending.",
        "tags": ["singapore", "source-verified", "editorial-port", "proof"],
        "view": {"canvasScope": "book"},
        "chapters": [
            {"title": "Twelve representative source pages",
             "file": "chapters/en/01-twelve-source-pages.md"}
        ],
        "config": config,
        "resources": resources,
        "fonts": [],
        "thumbnail": "thumbnail.jpg",
        "license": "© Rough Guides. Reference-source permission asserted by project owner.",
        "credits": "Mark Lewis · Rough Guides",
    }
    if len(config["pageTemplates"]) != 11:
        raise ValueError("Expected eleven source-page types in the pilot")
    if len(resources) != 25:
        raise ValueError("Expected twenty-five original source assets")
    for resource in resources:
        if not (ROOT / resource["file"]).is_file():
            raise FileNotFoundError(resource["file"])
    source = (ROOT / entry["chapters"][0]["file"]).read_text(encoding="utf-8")
    if source.count("::::page{") != 12:
        raise ValueError("Expected exactly twelve composed source pages")
    for match in __import__("re").findall(r'::resource\{id="([^"]+)"\}', source):
        if match not in {resource["id"] for resource in resources}:
            raise ValueError(f"Missing original resource: {match}")
    return entry


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--check", action="store_true", help="Compare generated preset against checked-in JSON")
    args = parser.parse_args()
    target = ROOT / "preset.json"
    rendered = json.dumps(build(), ensure_ascii=False, indent=2) + "\n"
    if args.check:
        if target.read_text(encoding="utf-8") != rendered:
            raise SystemExit("Generated manifest differs from preset.json")
        print("SG-PORT-12: generator and manifest match")
    else:
        target.write_text(rendered, encoding="utf-8")
        print(f"Generated {target.name}")


if __name__ == "__main__":
    main()
