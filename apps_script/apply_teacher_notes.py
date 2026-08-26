#!/usr/bin/env python3
"""Inserta bloques de notas_docente_16_archivos.md en los .md del libro."""

from __future__ import annotations

import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
NOTES = ROOT / "notas_docente_16_archivos.md"
UNIT_DIRS = [
    ROOT / "unidad1_conjuntos",
    ROOT / "unidad2_funciones",
    ROOT / "unidad3_expresiones",
    ROOT / "unidad4_ecuaciones",
    ROOT / "unidad5_desigualdades",
]

SECTION_RE = re.compile(
    r"^##\s+\d+\.\s+(?P<slug>[a-z0-9_]+\.md)\s*\n\n(```\{note\}.*?```)",
    re.MULTILINE | re.DOTALL,
)


def find_md(slug: str) -> Path | None:
    name = slug if slug.endswith(".md") else f"{slug}.md"
    for d in UNIT_DIRS:
        p = d / name
        if p.exists():
            return p
    return None


def replace_quiz_note_block(content: str, new_note_block: str) -> str | None:
    btn_idx = content.find("quizizz-btn")
    if btn_idx == -1:
        return None
    raw_start = content.rfind("```{raw} html", 0, btn_idx)
    if raw_start == -1:
        return None
    div_end = content.find("</div>", btn_idx)
    if div_end == -1:
        return None
    raw_end = content.find("```", div_end)
    if raw_end == -1:
        return None
    raw_end += 3

    note_start = content.find("```{note}", raw_end)
    if note_start == -1:
        return None
    note_block_preview = content[note_start : note_start + 400]
    if "Para el docente —" not in note_block_preview:
        return None
    if not any(x in note_block_preview for x in ("Quiz", "Google Forms")):
        return None

    note_end = content.find("```", note_start + 10)
    if note_end == -1:
        return None
    note_end += 3

    return content[:note_start] + new_note_block + content[note_end:]


def main() -> None:
    text = NOTES.read_text(encoding="utf-8")
    sections = {
        m.group("slug"): m.group(2).strip()
        for m in SECTION_RE.finditer(text)
    }
    print(f"Secciones extraídas: {len(sections)}")

    updated = []
    missing = []
    for slug, note_block in sections.items():
        md_path = find_md(slug)
        if md_path is None:
            missing.append(slug)
            continue
        content = md_path.read_text(encoding="utf-8")
        if "docs.google.com/forms" in content and "REEMPLAZA_" not in content:
            print(f"AVISO: {slug} ya tiene Google Forms real — omitido")
            continue
        new_content = replace_quiz_note_block(content, note_block)
        if new_content is None:
            missing.append(f"{slug} (no se encontró bloque quiz+note)")
            continue
        md_path.write_text(new_content, encoding="utf-8")
        updated.append(slug)
        print(f"OK: {md_path.relative_to(ROOT)}")

    print(f"\nActualizados: {len(updated)}")
    if missing:
        print("Problemas:", missing)


if __name__ == "__main__":
    main()
