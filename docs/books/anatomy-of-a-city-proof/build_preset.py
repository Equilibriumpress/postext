#!/usr/bin/env python3
"""Generate the manifest with the official Postext helper."""
from pathlib import Path
import json, sys
PROJECT = Path(__file__).resolve().parent
sys.path.insert(0, str(PROJECT.parents[2] / "plugins/postext/skills/postext-port/scripts"))
from preset_kit import mm, write_manifest

def read(p):
    return json.loads((PROJECT / p).read_text(encoding="utf-8"))

def build():
    spec = read("DESIGN-SPEC.json")
    manifest = read("design/book.json")
    config = read("design/typography-and-layout.json")
    config["page"]["width"], config["page"]["height"] = map(mm, spec["trimMm"])
    config["page"]["margins"]["left"] = mm(spec["inner"])
    config["page"]["margins"]["right"] = mm(spec["outer"])
    config["colorPalette"] = [{"id": k, "name": k, "value": {"hex": v, "model": "hex"}} for k, v in spec["palette"].items()]
    config["pageTemplates"] = read("design/page-families.json")
    manifest["config"] = config
    return write_manifest(PROJECT, manifest)

if __name__ == "__main__":
    print(build())
