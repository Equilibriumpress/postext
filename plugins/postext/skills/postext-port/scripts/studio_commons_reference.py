"""Validate Studio's source-linked JPEG descriptor, not image bytes."""
import json
import re
from urllib.parse import urlparse, unquote

def commons_reference(root, file):
    if not isinstance(file, str) or not re.fullmatch(r"resources/commons/[a-z0-9][a-z0-9-]*\.jpg", file, re.I):
        return False
    try:
        d = json.loads((root / (file + ".json")).read_text(encoding="utf-8"))
        source = urlparse(d["source"])
        if source.scheme != "https" or source.netloc != "commons.wikimedia.org" or not unquote(source.path).lower().startswith("/wiki/file:"):
            return False
        if d.get("version") != 1 or not isinstance(d.get("author"), str) or not d["author"].strip():
            return False
        if not re.fullmatch(r"CC0 1\.0|CC BY(?:-SA)? (?:2\.0|2\.5|3\.0|4\.0)|Public domain", d.get("license", ""), re.I):
            return False
        urls = d["urls"]
        if not isinstance(urls, list) or not 1 <= len(urls) <= 3:
            return False
        for value in urls:
            u = urlparse(value)
            if u.scheme != "https" or u.username or u.password or u.port or not re.search(r"\.jpe?g$", u.path, re.I):
                return False
            if not ((u.hostname == "upload.wikimedia.org" and u.path.startswith("/wikipedia/commons/")) or (u.hostname == "thumb.wikimedia.org" and u.path.startswith("/wikipedia/commons/thumb/"))):
                return False
        return True
    except (OSError, ValueError, KeyError, TypeError, AttributeError):
        return False
