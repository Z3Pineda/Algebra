#!/usr/bin/env python3
"""Actualiza enlaces quizizz-btn en .md desde JSON exportado de Apps Script."""

from __future__ import annotations

import json
import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UNIT_DIRS = [
    ROOT / "unidad1_conjuntos",
    ROOT / "unidad2_funciones",
    ROOT / "unidad3_expresiones",
    ROOT / "unidad4_ecuaciones",
    ROOT / "unidad5_desigualdades",
]

BTN_HREF_RE = re.compile(
    r'(<a\s+href=")([^"]+)("(?:\s+target="_blank")?\s+class="quizizz-btn">)',
    re.IGNORECASE,
)


def find_md(slug: str) -> Path | None:
    for d in UNIT_DIRS:
        p = d / f"{slug}.md"
        if p.exists():
            return p
    return None


def load_urls(path: Path) -> dict[str, str]:
    data = json.loads(path.read_text(encoding="utf-8"))
    if isinstance(data, list):
        items = data
    elif "forms" in data:
        items = data["forms"]
    else:
        raise ValueError("JSON debe ser lista o { forms: [...] }")

    out: dict[str, str] = {}
    for item in items:
        slug = item.get("slug")
        url = item.get("publicUrl") or item.get("public_url") or item.get("url")
        if slug and url:
            out[slug] = url
    return out


def build_title_to_slug() -> dict[str, str]:
    """Mapea título del .md y formTitle ('… — Quiz') al slug."""
    sys.path.insert(0, str(Path(__file__).resolve().parent))
    import generate_quizzes as gq  # noqa: E402

    mapping: dict[str, str] = {}
    for d in UNIT_DIRS:
        if not d.is_dir():
            continue
        for md_path in d.glob("*.md"):
            content = md_path.read_text(encoding="utf-8")
            if "quizizz-btn" not in content:
                continue
            slug = md_path.stem
            title = gq.get_title(content, slug)
            mapping[title] = slug
            mapping[f"{title} — Quiz"] = slug
            mapping[f"{title} - Quiz"] = slug
    return mapping


def load_urls_by_title(path: Path) -> dict[str, str]:
    data = json.loads(path.read_text(encoding="utf-8"))
    items = data if isinstance(data, list) else data.get("forms", [])
    title_map = build_title_to_slug()

    out: dict[str, str] = {}
    sin_match: list[str] = []

    for item in items:
        url = item.get("publicUrl") or item.get("public_url") or item.get("url")
        if not url:
            continue
        slug = item.get("slug")
        if not slug:
            for key in ("formTitle", "titulo", "title"):
                raw = item.get(key, "")
                slug = title_map.get(raw)
                if slug:
                    break
        if slug:
            out[slug] = url
        else:
            sin_match.append(item.get("formTitle") or item.get("titulo") or str(item)[:60])

    if sin_match:
        print(f"⚠ Sin slug ({len(sin_match)}):")
        for s in sin_match[:20]:
            print(f"   - {s}")
        if len(sin_match) > 20:
            print(f"   … y {len(sin_match) - 20} más")

    return out


def apply_url(md_path: Path, url: str) -> bool:
    content = md_path.read_text(encoding="utf-8")
    if "quizizz-btn" not in content:
        return False
    new_content, n = BTN_HREF_RE.subn(rf"\1{url}\3", content, count=1)
    if n == 0:
        return False
    md_path.write_text(new_content, encoding="utf-8")
    return True


def main() -> None:
    if len(sys.argv) < 2:
        print("Uso: py apps_script/apply_form_urls.py ruta/al/algebra_quiz_urls.json")
        print("     py apps_script/apply_form_urls.py --match-title ruta/recuperado.json")
        print("     py apps_script/apply_form_urls.py --dry-run [--match-title] ruta/al/json")
        sys.exit(1)

    args = sys.argv[1:]
    dry_run = False
    match_title = False
    if args[0] == "--dry-run":
        dry_run = True
        args = args[1:]
    if args and args[0] == "--match-title":
        match_title = True
        args = args[1:]
    if not args:
        print("Falta ruta al JSON")
        sys.exit(1)

    json_path = Path(args[0])
    if not json_path.exists():
        print(f"No existe: {json_path}")
        sys.exit(1)

    urls = load_urls_by_title(json_path) if match_title else load_urls(json_path)
    updated: list[str] = []
    missing_md: list[str] = []
    no_btn: list[str] = []

    for slug, url in sorted(urls.items()):
        md = find_md(slug)
        if md is None:
            missing_md.append(slug)
            continue
        if dry_run:
            print(f"[dry-run] {slug} → {url[:60]}…")
            updated.append(slug)
            continue
        if apply_url(md, url):
            updated.append(slug)
        else:
            no_btn.append(slug)

    print(f"URLs en JSON: {len(urls)}")
    print(f"Actualizados: {len(updated)}" + (" (simulación)" if dry_run else ""))
    if missing_md:
        print(f"Sin .md: {', '.join(missing_md)}")
    if no_btn:
        print(f"Sin botón quizizz-btn: {', '.join(no_btn)}")


if __name__ == "__main__":
    main()
