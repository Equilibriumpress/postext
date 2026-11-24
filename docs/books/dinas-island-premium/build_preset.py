#!/usr/bin/env python3
"""Generate the native Postext manifest from the house design and asset inventory."""
from pathlib import Path
import json
import sys

PROJECT = Path(__file__).resolve().parent
ROOT = PROJECT.parents[2]
sys.path.insert(0, str(ROOT / "plugins/postext/skills/postext-port/scripts"))
from preset_kit import mm, write_manifest

def read(path):
    return json.loads((PROJECT / path).read_text(encoding="utf-8"))

def build():
    spec = read("DESIGN-SPEC.json")
    manifest = read("design/book.json")
    config = read("design/typography-and-layout.json")
    config["page"]["width"], config["page"]["height"] = map(mm, spec["trimMm"])
    config["page"]["margins"]["left"] = mm(spec["inner"])
    config["page"]["margins"]["right"] = mm(spec["outer"])
    config["colorPalette"] = [{"id": key, "name": key, "value": {"hex": value, "model": "hex"}} for key, value in spec["palette"].items()]
    config["pageTemplates"] = read("design/page-families.json")
    manifest["config"] = config
    return write_manifest(PROJECT, manifest)

if __name__ == "__main__":
    print(build())
