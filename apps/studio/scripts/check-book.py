#!/usr/bin/env python3
"""Explicit, local structural gate; never invokes GitHub Actions or produces exports."""
from pathlib import Path
import argparse
import subprocess
import sys

ROOT = Path(__file__).resolve().parents[3]
SCRIPTS = ROOT / "plugins/postext/skills/postext-port/scripts"

def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("book", type=Path)
    args = parser.parse_args()
    book = args.book.resolve()
    if not (book / "preset.json").is_file():
        parser.error(f"missing preset.json: {book}")
    commands = [
        [sys.executable, str(SCRIPTS / "lint_project.py"), str(book)],
        [sys.executable, str(SCRIPTS / "preset_kit.py"), "lint", str(book), "--max-size", "1"],
    ]
    failed = False
    for command in commands:
        print("+", " ".join(command), flush=True)
        failed |= subprocess.run(command, cwd=ROOT).returncode != 0
    print("Structural gate:", "FAIL" if failed else "PASS")
    print("Browser checks, visual comparison and exports require separate evidence.")
    return int(failed)

if __name__ == "__main__":
    raise SystemExit(main())
