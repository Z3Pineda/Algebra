#!/usr/bin/env python3
"""Genera CrearTodosLosQuizzes.gs — script maestro para Apps Script."""

from __future__ import annotations

import json
import sys
from pathlib import Path

# Importar lógica de parseo desde generate_quizzes.py (mismo directorio)
sys.path.insert(0, str(Path(__file__).resolve().parent))
import generate_quizzes as gq  # noqa: E402

OUT = Path(__file__).resolve().parent
MASTER_GS = OUT / "CrearTodosLosQuizzes.gs"
MASTER_HEADER = OUT / "_master_script_header.gs"

# Slugs con formulario ya publicado (no regenerar por defecto)
DEFAULT_SKIP = ["s1_c1_presentacion_diagnostico"]


def render_preguntas_js(exercises: list[dict]) -> list[str]:
    lines: list[str] = []
    for ex in exercises:
        opts = ", ".join(f'"{gq.js_escape(o)}"' for o in ex["opciones"])
        lines.append("      {")
        lines.append(f'        categoria: "{gq.js_escape(ex["categoria"])}",')
        lines.append(f'        pregunta: "{gq.js_escape(ex["pregunta"])}",')
        lines.append(f"        opciones: [{opts}],")
        lines.append(f"        correcta: {ex['correcta']}")
        lines.append("      },")
    return lines


def render_quiz_def(slug: str, title: str, description: str, exercises: list[dict]) -> list[str]:
    lines = [
        "    {",
        f'      slug: "{gq.js_escape(slug)}",',
        f'      formTitle: "{gq.js_escape(title)} — Quiz",',
        f'      title: "{gq.js_escape(title)}",',
        f'      description: "{gq.js_escape(description)}",',
        "      preguntas: [",
    ]
    lines.extend(render_preguntas_js(exercises))
    lines.append("      ],")
    lines.append("    },")
    return lines


def collect_quizzes() -> list[dict]:
    quizzes: list[dict] = []
    md_files = sorted(p for d in gq.UNIT_DIRS if d.is_dir() for p in d.glob("*.md"))
    for md_path in md_files:
        content = md_path.read_text(encoding="utf-8")
        if "quizizz-btn" not in content:
            continue
        note = gq.extract_quiz_block(content)
        if note is None:
            continue
        exercises, status = gq.parse_quiz_note(note)
        if status != "ok" or not exercises:
            continue
        slug = md_path.stem
        title = gq.get_title(content, slug)
        quizzes.append(
            {
                "slug": slug,
                "md": str(md_path.relative_to(gq.ROOT)),
                "title": title,
                "description": gq.build_description(exercises),
                "preguntas": exercises,
            }
        )
    return quizzes


def render_master_gs(quizzes: list[dict], skip_slugs: list[str]) -> str:
    header = MASTER_HEADER.read_text(encoding="utf-8")
    skip_js = ", ".join(f'"{gq.js_escape(s)}"' for s in skip_slugs)

    body_lines = [
        header.replace("__SKIP_SLUGS__", skip_js),
        "",
        "var QUIZZES = [",
    ]
    for q in quizzes:
        body_lines.extend(render_quiz_def(q["slug"], q["title"], q["description"], q["preguntas"]))
    body_lines.append("];")
    body_lines.append("")
    return "\n".join(body_lines)


def main() -> None:
    quizzes = collect_quizzes()
    content = render_master_gs(quizzes, DEFAULT_SKIP)
    MASTER_GS.write_text(content, encoding="utf-8")

    manifest = {
        "total_quizzes": len(quizzes),
        "skip_by_default": DEFAULT_SKIP,
        "output_gs": "apps_script/CrearTodosLosQuizzes.gs",
        "slugs": [q["slug"] for q in quizzes],
    }
    (OUT / "_master_manifest.json").write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(f"Generado {MASTER_GS.name}: {len(quizzes)} quizzes, {len(content):,} caracteres")
    print(f"Omitidos por defecto al ejecutar: {', '.join(DEFAULT_SKIP) or '(ninguno)'}")


if __name__ == "__main__":
    main()
