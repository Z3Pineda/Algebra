#!/usr/bin/env python3
"""Actualiza iframes de YouTube en .md desde video_urls.json."""

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
DEFAULT_JSON = Path(__file__).resolve().parent / "video_urls.json"

EMBED_SRC_RE = re.compile(
    r'src="https://www\.youtube\.com/embed/[^"]+"',
    re.IGNORECASE,
)
YOUTUBE_ID_RE = re.compile(
    r"(?:youtu\.be/|youtube\.com/embed/|youtube\.com/watch\?v=)([A-Za-z0-9_-]{11})"
)
PLACEHOLDER_RE = re.compile(r"^REEMPLAZA_ID_YOUTUBE_")


def find_md(slug: str) -> Path | None:
    for unit_dir in UNIT_DIRS:
        md_path = unit_dir / f"{slug}.md"
        if md_path.exists():
            return md_path
    return None


def iter_video_md() -> list[Path]:
    pages: list[Path] = []
    for unit_dir in UNIT_DIRS:
        if not unit_dir.is_dir():
            continue
        for md_path in sorted(unit_dir.glob("*.md")):
            content = md_path.read_text(encoding="utf-8")
            if "video-container" in content and "youtube.com/embed/" in content:
                pages.append(md_path)
    return pages


def current_embed_value(content: str) -> str | None:
    match = re.search(
        r'src="https://www\.youtube\.com/embed/([^"?]+)"',
        content,
        re.IGNORECASE,
    )
    return match.group(1) if match else None


def normalize_youtube_id(value: str) -> str | None:
    value = value.strip()
    if not value or PLACEHOLDER_RE.match(value):
        return None
    match = YOUTUBE_ID_RE.search(value)
    if match:
        return match.group(1)
    if re.fullmatch(r"[A-Za-z0-9_-]{11}", value):
        return value
    return None


def load_video_ids(path: Path) -> dict[str, str]:
    data = json.loads(path.read_text(encoding="utf-8"))

    if isinstance(data, dict):
        if "videos" in data:
            items = data["videos"]
        else:
            return {
                slug: video_id
                for slug, video_id in data.items()
                if slug != "videos" and isinstance(video_id, str)
            }
    elif isinstance(data, list):
        items = data
    else:
        raise ValueError("JSON debe ser dict, { videos: [...] } o lista")

    out: dict[str, str] = {}
    for item in items:
        if not isinstance(item, dict):
            continue
        slug = item.get("slug")
        raw = item.get("youtubeId") or item.get("youtube_id") or item.get("id") or item.get("url")
        if not slug or not raw:
            continue
        video_id = normalize_youtube_id(str(raw))
        if video_id:
            out[str(slug)] = video_id
    return out


def apply_video_id(md_path: Path, video_id: str) -> bool:
    content = md_path.read_text(encoding="utf-8")
    if "video-container" not in content:
        return False
    new_content, count = EMBED_SRC_RE.subn(
        f'src="https://www.youtube.com/embed/{video_id}"',
        content,
        count=1,
    )
    if count == 0:
        return False
    md_path.write_text(new_content, encoding="utf-8")
    return True


def init_json(path: Path) -> None:
    videos: list[dict[str, str]] = []
    for md_path in iter_video_md():
        slug = md_path.stem
        current = current_embed_value(md_path.read_text(encoding="utf-8")) or ""
        video_id = normalize_youtube_id(current) or ""
        videos.append(
            {
                "slug": slug,
                "youtubeId": video_id,
                "titulo": _read_title(md_path),
            }
        )

    payload = {
        "_instrucciones": (
            "Pon el ID de YouTube (11 caracteres) o la URL completa en youtubeId. "
            "Deja vacio si aun no subes el video. Luego: "
            "python apps_script/apply_video_urls.py apps_script/video_urls.json"
        ),
        "videos": videos,
    }
    path.write_text(json.dumps(payload, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    filled = sum(1 for item in videos if item["youtubeId"])
    print(f"Plantilla creada: {path}")
    print(f"Paginas con video: {len(videos)}")
    print(f"Con ID ya definido: {filled}")
    print(f"Pendientes: {len(videos) - filled}")


def _read_title(md_path: Path) -> str:
    content = md_path.read_text(encoding="utf-8")
    match = re.search(r'^title:\s*"(.+)"', content, re.MULTILINE)
    return match.group(1) if match else md_path.stem


def report_status() -> None:
    pending: list[str] = []
    done: list[str] = []
    for md_path in iter_video_md():
        slug = md_path.stem
        current = current_embed_value(md_path.read_text(encoding="utf-8")) or ""
        if normalize_youtube_id(current):
            done.append(slug)
        else:
            pending.append(slug)

    print(f"Con video: {len(done)}")
    print(f"Pendientes: {len(pending)}")
    if pending:
        print("\nPendientes:")
        for slug in pending:
            print(f"  - {slug}")


def main() -> None:
    if len(sys.argv) < 2:
        print("Uso:")
        print("  python apps_script/apply_video_urls.py apps_script/video_urls.json")
        print("  python apps_script/apply_video_urls.py --dry-run apps_script/video_urls.json")
        print("  python apps_script/apply_video_urls.py --init [ruta/salida.json]")
        print("  python apps_script/apply_video_urls.py --status")
        sys.exit(1)

    args = sys.argv[1:]
    dry_run = False

    if args[0] == "--init":
        out = Path(args[1]) if len(args) > 1 else DEFAULT_JSON
        init_json(out)
        return

    if args[0] == "--status":
        report_status()
        return

    if args[0] == "--dry-run":
        dry_run = True
        args = args[1:]

    if not args:
        print("Falta ruta al JSON")
        sys.exit(1)

    json_path = Path(args[0])
    if not json_path.exists():
        print(f"No existe: {json_path}")
        print("Crea la plantilla con: python apps_script/apply_video_urls.py --init")
        sys.exit(1)

    video_ids = load_video_ids(json_path)
    updated: list[str] = []
    skipped_empty: list[str] = []
    missing_md: list[str] = []
    no_iframe: list[str] = []

    for slug, video_id in sorted(video_ids.items()):
        md_path = find_md(slug)
        if md_path is None:
            missing_md.append(slug)
            continue

        if dry_run:
            current = current_embed_value(md_path.read_text(encoding="utf-8"))
            print(f"[dry-run] {slug}: {current} -> {video_id}")
            updated.append(slug)
            continue

        if apply_video_id(md_path, video_id):
            updated.append(slug)
        else:
            no_iframe.append(slug)

    all_slugs = set(video_ids)
    for md_path in iter_video_md():
        slug = md_path.stem
        if slug in all_slugs:
            continue
        current = current_embed_value(md_path.read_text(encoding="utf-8"))
        if not normalize_youtube_id(current or ""):
            skipped_empty.append(slug)

    print(f"IDs en JSON: {len(video_ids)}")
    print(f"Actualizados: {len(updated)}" + (" (simulacion)" if dry_run else ""))
    if missing_md:
        print(f"Sin .md: {', '.join(missing_md)}")
    if no_iframe:
        print(f"Sin iframe de video: {', '.join(no_iframe)}")
    if skipped_empty and not dry_run:
        print(f"Sin ID en JSON (no tocados): {len(skipped_empty)}")


if __name__ == "__main__":
    main()
