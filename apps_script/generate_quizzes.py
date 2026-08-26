#!/usr/bin/env python3
"""Genera archivos .gs de Google Apps Script desde notas de quiz en .md."""

from __future__ import annotations

import json
import re
import textwrap
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
OUT = Path(__file__).resolve().parent
UNIT_DIRS = [
    ROOT / "unidad1_conjuntos",
    ROOT / "unidad2_funciones",
    ROOT / "unidad3_expresiones",
    ROOT / "unidad4_ecuaciones",
    ROOT / "unidad5_desigualdades",
]

QUIZ_NOTE_RE = re.compile(
    r"\*\*Para el docente — (?:Google Forms|actividad Quizizz|Quiz Quizizz)[^*]*\*\*\s*\n(.*?)(?=\n```|\Z)",
    re.DOTALL | re.IGNORECASE,
)
TITLE_RE = re.compile(r'^title:\s*"(.+)"', re.MULTILINE)
P_LINE_RE = re.compile(
    r'^P(\d+)\s*\(([^)]+)\):\s*(.+?)\s*→\s*(.+?)(?:\s*\([^)]*\))?\s*$',
    re.MULTILINE,
)
P_MC_BLOCK_RE = re.compile(
    r'^P(\d+)\s*\(([^)]+)\):\s*"([^"]+)"\s*\n-\s*(.+?)(?=\n\n|\nP\d|\Z)',
    re.MULTILINE | re.DOTALL,
)
COMPACT_RANGE_RE = re.compile(r"^P(\d+)-P(\d+):\s*(.+)$", re.MULTILINE)
COMPACT_P_RE = re.compile(r"^P(\d+)\s*(?:\(([^)]*)\))?\s*:\s*(.+)$", re.MULTILINE)
CATEGORY_HEADER_RE = re.compile(r"^(.+?\(\d+\)):\s*(.*)$", re.MULTILINE)
LATEX_EXPR_RE = re.compile(r"\$([^$]+)\$")
TOPIC_ONLY_RE = re.compile(
    r"^(?:S\d+\s|Semana\s|U\d+\s|Proposiciones|Concepto|Representación|Conjunción y|Implicación y|Problema integrador|Números \(|Recta numérica|Propiedades \(|Producto cartesiano|Factor común \(|Trinomios|Diferencia de cuadrados|Cubos \(|Agrupación \()",
    re.MULTILINE | re.IGNORECASE,
)


def strip_latex(s: str) -> str:
    s = re.sub(r"\\frac\{([^}]+)\}\{([^}]+)\}", r"\1/\2", s)
    s = s.replace("\\times", "×").replace("\\div", "÷").replace("\\sqrt", "√")
    s = s.replace("\\cdot", "·")
    s = re.sub(r"\\[a-zA-Z]+", "", s)
    s = s.replace("{", "").replace("}", "").replace("$", "").replace("\\$", "$")
    s = re.sub(r"\s+", " ", s).strip()
    return s


def js_escape(s: str) -> str:
    return s.replace("\\", "\\\\").replace('"', '\\"').replace("\n", " ")


def unique_options(correct: str, distractors: list[str]) -> list[str]:
    opts = [correct]
    for d in distractors:
        d = d.strip()
        if d and d not in opts:
            opts.append(d)
    fillers = ["0", "1", "-1", "2", "Ninguna de las anteriores", "No se puede determinar"]
    i = 0
    while len(opts) < 4 and i < len(fillers):
        if fillers[i] not in opts:
            opts.append(fillers[i])
        i += 1
    return opts[:4]


def numeric_distractors(correct: str) -> list[str]:
    distractors = []
    try:
        if "/" in correct:
            num, den = correct.split("/", 1)
            n, d = int(num.strip()), int(den.strip())
            distractors = [f"{n}/{d+1}", f"{n+1}/{d}", f"{n-1}/{d}"]
        elif correct.replace(".", "", 1).replace("-", "", 1).isdigit():
            v = float(correct)
            distractors = [str(int(v + 1)), str(int(v - 1)), str(int(-v))]
        else:
            distractors = []
    except (ValueError, ZeroDivisionError):
        distractors = []
    return distractors


def parse_equation_expr(expr: str) -> tuple[str, str] | None:
    """Convierte '(-4)×(-3)=12' o LaTeX a (pregunta, respuesta)."""
    raw = strip_latex(expr)
    if "→" in raw:
        parts = raw.split("→", 1)
        return parts[0].strip().rstrip("=") + "?", parts[1].strip()
    if "=" in raw:
        left, right = raw.split("=", 1)
        left = left.strip()
        right = right.strip()
        if "___" in left or "?" in left:
            return left.replace("___", "___") + " — completa el valor.", right
        q = f"¿Cuánto es {left}?"
        return q, right
    return None


def parse_proportion(text: str) -> tuple[str, str] | None:
    text = text.strip()
    if "→" in text:
        left, ans = text.split("→", 1)
        return left.strip() + "?", ans.strip()
    if "=" in text and "%" in text:
        left, right = text.split("=", 1)
        return f"¿Cuánto es {left.strip()}?", right.strip()
    if "→" not in text and "piezas" in text.lower() and "=" in text:
        # 4 piezas $60 → 10 piezas=$150 embedded in line
        m = re.search(r"(.+?=\s*\$?\d+)", text)
        if m:
            return m.group(1).replace("=", " → ") + "?", text.split("=")[-1].strip()
    return None


def distractors_for_answer(correct: str, kind: str, question: str) -> list[str]:
    correct_clean = strip_latex(correct.split("(")[0].strip())
    cl = correct_clean.lower()

    if kind.upper() in ("T/F", "TF", "V/F"):
        if cl.startswith("f"):
            return ["Verdadero", "Depende del contexto", "Solo en casos especiales"]
        return ["Falso", "Depende del contexto", "Solo en casos especiales"]

    if kind.upper() == "MC":
        # MC already has one correct text; build thematic wrong options
        pool = {
            "conjunto": ["Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
            "venn": ["2 regiones", "4 regiones", "6 regiones"],
            "funcion": ["No es función", "Relación cualquiera", "Dominio vacío"],
            "ecuacion": ["x = 0", "x = 1", "Sin solución"],
            "factor": ["2x", "x", "4x"],
            "valor absoluto": ["-5", "0", "5 y -5"],
        }
        ql = question.lower()
        for key, vals in pool.items():
            if key in ql:
                return [v for v in vals if v.lower() != cl.lower()][:3]
        return ["Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"]

    # Fill / numeric / default
    if "," in correct_clean:
        correct_clean = correct_clean.split(",")[0].strip()

    num_d = numeric_distractors(correct_clean)
    if num_d:
        return num_d

    if cl in ("verdadero", "falso"):
        return distractors_for_answer(correct, "T/F", question)

    # Text fills
    alts = []
    if len(correct_clean) > 2:
        alts.append(correct_clean[::-1][: len(correct_clean)])
    alts.extend(["universal", "vacío", "intersección", "unión", "complemento"])
    return [a for a in alts if a.lower() != cl.lower()][:3]


def exercise_from_p_line(num: str, kind: str, body: str, answer: str) -> dict | None:
    body = body.strip().strip('"')
    answer = answer.strip()
    # Remove trailing explanation in parentheses for T/F false
    if "(" in answer and kind.upper() == "T/F":
        answer = answer.split("(", 1)[0].strip()

    question = body
    if kind.upper().startswith("FILL") and "___" not in question:
        question = body + " — escribe la respuesta."

    correct = answer.split(",")[0].strip() if kind.upper().startswith("FILL") and "," in answer else answer
    correct = strip_latex(correct)

    if kind.upper() in ("T/F", "TF", "V/F"):
        opts = unique_options(
            "Verdadero" if correct.lower().startswith("v") else "Falso",
            distractors_for_answer(correct, "T/F", question),
        )
        correct_idx = opts.index("Verdadero") if correct.lower().startswith("v") else opts.index("Falso")
    elif kind.upper() == "MC":
        opts = unique_options(strip_latex(correct), distractors_for_answer(correct, "MC", question))
        correct_idx = 0
    else:
        opts = unique_options(strip_latex(correct), distractors_for_answer(correct, "Fill", question))
        correct_idx = 0

    return {
        "categoria": f"P{num} ({kind})",
        "pregunta": strip_latex(question),
        "opciones": opts,
        "correcta": correct_idx,
    }


def make_exercise(categoria: str, pregunta: str, correct: str, kind: str = "Fill") -> dict:
    correct = strip_latex(correct)
    if kind.upper() in ("T/F", "TF", "V/F"):
        opts = unique_options(
            "Verdadero" if correct.lower().startswith("v") else "Falso",
            distractors_for_answer(correct, "T/F", pregunta),
        )
        correct_idx = opts.index("Verdadero") if correct.lower().startswith("v") else opts.index("Falso")
    elif kind.upper() == "MC":
        opts = unique_options(correct, distractors_for_answer(correct, "MC", pregunta))
        correct_idx = 0
    else:
        opts = unique_options(correct, distractors_for_answer(correct, kind, pregunta))
        correct_idx = 0
    return {
        "categoria": categoria,
        "pregunta": strip_latex(pregunta),
        "opciones": opts,
        "correcta": correct_idx,
    }


def parse_mc_options(line: str) -> tuple[list[str], int]:
    """Parsea '- a) {4}  b) {2}  c) {-2, 2} ✅  d) {-4, 4}'"""
    opts = []
    correct_idx = 0
    for m in re.finditer(r"[a-d]\)\s*([^✅]+?)(?:\s*✅)?(?=\s+[a-d]\)|$)", line):
        text = m.group(1).strip()
        is_correct = "✅" in line[m.start() : m.end() + 2]
        idx = len(opts)
        opts.append(strip_latex(text))
        if is_correct or "✅" in m.group(0):
            correct_idx = idx
    if "✅" in line and not any("✅" in o for o in opts):
        for i, part in enumerate(re.split(r"\s+[a-d]\)\s*", line)):
            if i == 0:
                continue
            if "✅" in part:
                correct_idx = i - 1
    # Re-parse more reliably
    parts = re.findall(r"[a-d]\)\s*([^a-d]+?)(?=\s+[a-d]\)|$)", line)
    if parts:
        opts = [strip_latex(p.replace("✅", "").strip()) for p in parts]
        for i, p in enumerate(re.findall(r"[a-d]\)\s*([^a-d]+?)(?=\s+[a-d]\)|$)", line)):
            if "✅" in p:
                correct_idx = i
    while len(opts) < 4:
        opts.append(f"Opción {len(opts)+1}")
    return opts[:4], correct_idx


def parse_compact_p_lines(body: str, context: str = "", skip_p: set[str] | None = None) -> list[dict]:
    exercises = []
    skip_p = skip_p or set()
    ctx = context
    for line in body.splitlines():
        line = line.strip()
        if not line:
            continue
        if line.startswith("Sean ") or line.startswith("Sea "):
            ctx = line
            continue
        m_range = COMPACT_RANGE_RE.match(line)
        if m_range:
            start, end, content = int(m_range.group(1)), int(m_range.group(2)), m_range.group(3)
            parts = re.split(r",\s*(?=[A-Za-z|∪∩\-']+\s*=)", content)
            for i, part in enumerate(parts):
                if "=" not in part:
                    continue
                left, right = part.split("=", 1)
                q = f"{ctx} — ¿cuál es el resultado de {left.strip()}?" if ctx else f"¿Cuál es {left.strip()}?"
                exercises.append(
                    make_exercise(f"P{start + i}", q, right.strip().strip("{}"), "Fill")
                )
            continue
        m = COMPACT_P_RE.match(line)
        if not m:
            continue
        num, kind, content = m.group(1), m.group(2) or "", m.group(3)
        if num in skip_p:
            continue
        # Líneas estándar P# (Tipo): "..." → ya parseadas
        if kind and re.search(r'"[^"]+"\s*→', line):
            continue
        if "→" in content:
            q, ans = content.split("→", 1)
            exercises.append(make_exercise(f"P{num} ({kind or 'Fill'})", q.strip(), ans.strip(), kind or "Fill"))
        elif "=" in content:
            left, right = content.split("=", 1)
            q = f"{ctx} — {left.strip()}?" if ctx else f"¿Cuánto es {left.strip()}?"
            exercises.append(make_exercise(f"P{num} ({kind or 'Fill'})", q, right.strip(), kind or "Fill"))
        else:
            exercises.append(make_exercise(f"P{num} ({kind or 'MC'})", content.strip() + "?", content.strip(), "MC"))
    return exercises


def split_clauses(text: str) -> list[str]:
    """Separa por comas respetando llaves anidadas."""
    parts: list[str] = []
    current: list[str] = []
    depth = 0
    for char in text:
        if char in "{[(":
            depth += 1
        elif char in "}])":
            depth = max(0, depth - 1)
        if char == "," and depth == 0:
            piece = "".join(current).strip()
            if piece:
                parts.append(piece)
            current = []
        else:
            current.append(char)
    piece = "".join(current).strip()
    if piece:
        parts.append(piece)
    return parts


SKIP_NOTE_LINES = (
    "Configuración:",
    "Puntaje mínimo",
    "Enlace:",
)


def exercise_from_clause(cat: str, clause: str) -> dict | None:
    """Convierte una cláusula de categoría (auto/repaso) en pregunta MC."""
    clause = clause.strip().strip(".")
    if not clause:
        return None

    if "→" in clause:
        left, right = clause.split("→", 1)
        left = left.strip()
        right = right.strip()
        if " da " in right.lower():
            right = re.split(r"\s+da\s+", right, maxsplit=1, flags=re.I)[-1].strip()
        return make_exercise(cat, left + "?", right, "Fill")

    if re.search(r"\s+da\s+", clause, re.I):
        left, right = re.split(r"\s+da\s+", clause, maxsplit=1, flags=re.I)
        return make_exercise(cat, left.strip() + "?", right.strip(), "Fill")

    if "=" in clause:
        if re.search(r"\|[^|]+\|=", clause) or re.search(r"[A-Za-z][\w']*=", clause):
            idx = clause.index("=")
            left, right = clause[:idx].strip(), clause[idx + 1 :].strip()
        else:
            left, right = clause.rsplit("=", 1)
            left, right = left.strip(), right.strip()
        if " con " in left and left.count("=") == 0:
            pass
        q = left if left.endswith("?") else f"¿Cuál es {left}?"
        return make_exercise(cat, q, right, "Fill")

    if any(
        tok in clause
        for tok in ("∉", "∈", "≡", "es proposición", "no es proposición", "permiten", "rechazados", "corresponde")
    ):
        return make_exercise(cat, clause + "?", "Verdadero", "T/F")

    if re.search(r"(?:^|\s)(?:sí|si)\s+es\s+función", clause, re.I):
        return make_exercise(cat, clause + "?", "Verdadero", "T/F")
    if "no es función" in clause.lower():
        return make_exercise(cat, clause + "?", "Verdadero", "T/F")

    return make_exercise(cat, clause + "?", clause.split()[-1] if clause.split() else clause, "MC")


def parse_latex_category_blocks(body: str) -> list[dict]:
    exercises = []
    for line in body.splitlines():
        line = line.strip()
        if not line or any(line.startswith(p) for p in SKIP_NOTE_LINES):
            continue
        m = CATEGORY_HEADER_RE.match(line)
        if not m:
            continue
        header = m.group(1)
        if re.match(r"^P\d", header.strip()):
            continue
        cat = header.split("(")[0].strip()
        content = m.group(2).strip()
        if not content:
            continue

        # Proporciones / flechas embebidas
        for arrow_m in re.finditer(r"([^,$]+→[^,$]+)", content):
            parsed = parse_proportion(arrow_m.group(1).replace("\\$", "$"))
            if parsed:
                q, ans = parsed
                exercises.append(make_exercise(cat, q, ans.replace("$", "").strip(), "Fill"))

        plain = LATEX_EXPR_RE.sub("", content)
        for arrow_m in re.finditer(r"([^,$]+→[^,$]+)", plain):
            sub = arrow_m.group(1).strip()
            if "→" in sub:
                left, right = sub.split("→", 1)
                exercises.append(make_exercise(cat, left.strip() + "?", right.strip(), "Fill"))

        for latex in LATEX_EXPR_RE.findall(content):
            if "=" not in latex:
                continue
            parsed = parse_equation_expr(latex)
            if parsed:
                q, ans = parsed
                exercises.append(make_exercise(cat, q, ans, "Fill"))

        for clause in split_clauses(plain):
            ex = exercise_from_clause(cat, clause)
            if ex:
                exercises.append(ex)

        segments = re.split(r",\s*(?=\d+%|\d+\s*piezas|barra\s)", plain)
        for seg in segments:
            if seg in split_clauses(plain):
                continue
            ex = exercise_from_clause(cat, seg)
            if ex:
                exercises.append(ex)
    return exercises


def is_topic_only_note(body: str) -> bool:
    if re.search(r"\(\d+\):.*[=→≡]", body):
        return False
    if LATEX_EXPR_RE.search(body) and any("=" in x for x in LATEX_EXPR_RE.findall(body)):
        return False
    if re.search(r"^\s*P\d+\s*\(", body, re.MULTILINE):
        if re.search(r"→\s*(Falso|Verdadero|\d|\{|-?\d)", body):
            return False
        if re.search(r"^\s*-\s*a\)", body, re.MULTILINE):
            return False
        if COMPACT_RANGE_RE.search(body) or re.search(r"^P\d+:\s*\|", body, re.MULTILINE):
            return False
        if re.search(r'^P\d+-P\d+:', body, re.MULTILINE):
            return False
    if TOPIC_ONLY_RE.search(body):
        return True
    if re.search(r"\(\d+\):\s*[A-Za-zÁÉÍÓÚáéíóú]", body) and not re.search(
        r"^\s*P\d+", body, re.MULTILINE
    ):
        if not any("=" in x for x in LATEX_EXPR_RE.findall(body)):
            if not re.search(r"→\s*(Falso|Verdadero|\d|\{|-?\d)", body):
                return True
    return False


def parse_quiz_note(note_body: str) -> tuple[list[dict], str]:
    exercises: list[dict] = []
    body = re.sub(r"^Enlace:.*$", "", note_body, flags=re.MULTILINE).strip()
    body = re.sub(r"^Configuración:.*$", "", body, flags=re.MULTILINE).strip()
    body = re.sub(r"^Puntaje mínimo.*$", "", body, flags=re.MULTILINE).strip()

    if is_topic_only_note(body):
        return [], "partial"

    # Contexto para compact P (Sean A=...)
    context = ""
    for line in body.splitlines():
        if line.strip().startswith("Sean ") or line.strip().startswith("Sea "):
            context = line.strip()

    # P estándar con →
    parsed_p_nums: set[str] = set()
    for m in P_LINE_RE.finditer(body):
        ex = exercise_from_p_line(m.group(1), m.group(2), m.group(3), m.group(4))
        if ex:
            exercises.append(ex)
            parsed_p_nums.add(m.group(1))

    # MC con opciones en línea siguiente
    for m in P_MC_BLOCK_RE.finditer(body):
        num, kind, question, opt_line = m.group(1), m.group(2), m.group(3), m.group(4).strip()
        parsed_p_nums.add(num)
        opts, correct_idx = parse_mc_options(opt_line.replace("\n", " "))
        exercises.append(
            {
                "categoria": f"P{num} ({kind})",
                "pregunta": strip_latex(question),
                "opciones": opts,
                "correcta": correct_idx,
            }
        )

    # Compact P1-P5, P6:, etc.
    exercises.extend(parse_compact_p_lines(body, context, parsed_p_nums))

    # Categorías con ejercicios resueltos (formato auto/repaso y LaTeX)
    if not re.search(r"^\s*P\d+", body, re.MULTILINE):
        exercises.extend(parse_latex_category_blocks(body))

    # Deduplicar por pregunta
    seen = set()
    unique = []
    for ex in exercises:
        key = (ex["categoria"], ex["pregunta"])
        if key not in seen:
            seen.add(key)
            unique.append(ex)
    exercises = unique

    if not exercises:
        if TOPIC_ONLY_RE.search(body) or re.search(r"^\s*-\s+", body, re.MULTILINE):
            return [], "partial"
        return [], "empty"
    return exercises, "ok"


def extract_quiz_block(content: str) -> str | None:
    if "quizizz-btn" not in content:
        return None
    m = QUIZ_NOTE_RE.search(content)
    if not m:
        return None
    return m.group(1)


def get_title(content: str, slug: str) -> str:
    m = TITLE_RE.search(content)
    if m:
        return m.group(1)
    return slug.replace("_", " ")


def build_description(exercises: list[dict]) -> str:
    cats = []
    for e in exercises:
        c = e["categoria"].split("(")[0].strip()
        if c not in cats:
            cats.append(c)
    if len(cats) > 5:
        return f"Quiz del curso — {len(exercises)} preguntas de opción múltiple."
    return "Quiz: " + ", ".join(cats[:6])


def render_gs(title: str, description: str, exercises: list[dict]) -> str:
    preguntas_js = json.dumps(exercises, ensure_ascii=False, indent=2)
    # Google Apps Script uses JS, not JSON — convert to JS object literal style
    lines = ["function crearQuiz() {"]
    lines.append(f'  var form = FormApp.create("{js_escape(title)} — Quiz");')
    lines.append("  form.setIsQuiz(true);")
    lines.append(f'  form.setTitle("{js_escape(title)}");')
    lines.append(f'  form.setDescription("{js_escape(description)}");')
    lines.append("  form.setShuffleQuestions(true);")
    lines.append("")
    lines.append("  var preguntas = [")
    for ex in exercises:
        opts = ", ".join(f'"{js_escape(o)}"' for o in ex["opciones"])
        lines.append("    {")
        lines.append(f'      categoria: "{js_escape(ex["categoria"])}",')
        lines.append(f'      pregunta: "{js_escape(ex["pregunta"])}",')
        lines.append(f"      opciones: [{opts}],")
        lines.append(f"      correcta: {ex['correcta']}")
        lines.append("    },")
    lines.append("  ];")
    lines.append("")
    lines.append("  for (var i = 0; i < preguntas.length; i++) {")
    lines.append("    var p = preguntas[i];")
    lines.append("    var item = form.addMultipleChoiceItem();")
    lines.append('    item.setTitle("[" + p.categoria + "] " + p.pregunta);')
    lines.append("    item.setRequired(true);")
    lines.append("    var choices = [];")
    lines.append("    for (var j = 0; j < p.opciones.length; j++) {")
    lines.append("      choices.push(item.createChoice(p.opciones[j], j === p.correcta));")
    lines.append("    }")
    lines.append("    item.setChoices(choices);")
    lines.append("    item.setPoints(1);")
    lines.append("  }")
    lines.append("")
    lines.append('  Logger.log("✅ Formulario creado: " + form.getTitle());')
    lines.append('  Logger.log("🔗 Editar: " + form.getEditUrl());')
    lines.append('  Logger.log("🔗 Compartir: " + form.getPublishedUrl());')
    lines.append("}")
    return "\n".join(lines) + "\n"


def main():
    generated = []
    partial = []
    pending = []

    md_files = sorted(
        p for d in UNIT_DIRS if d.is_dir() for p in d.glob("*.md")
    )

    for md_path in md_files:
        content = md_path.read_text(encoding="utf-8")
        if "quizizz-btn" not in content:
            continue
        note = extract_quiz_block(content)
        if note is None:
            pending.append((str(md_path.relative_to(ROOT)), "tiene botón quiz pero sin bloque de notas de quiz"))
            continue

        exercises, status = parse_quiz_note(note)
        slug = md_path.stem
        title = get_title(content, slug)
        out_path = OUT / f"{slug}.gs"

        if status == "partial":
            partial.append((str(md_path.relative_to(ROOT)), "notas sin ejercicios resueltos (solo temas)"))
            if out_path.exists():
                out_path.unlink()
            continue
        if not exercises:
            pending.append((str(md_path.relative_to(ROOT)), "no se pudieron extraer ejercicios"))
            if out_path.exists():
                out_path.unlink()
            continue

        description = build_description(exercises)
        gs_content = render_gs(title, description, exercises)
        out_path = OUT / f"{slug}.gs"
        out_path.write_text(gs_content, encoding="utf-8")
        generated.append(
            {
                "md": str(md_path.relative_to(ROOT)),
                "gs": f"apps_script/{slug}.gs",
                "preguntas": len(exercises),
            }
        )

    summary = {
        "generated": generated,
        "partial": partial,
        "pending": pending,
        "total_gs": len(generated),
    }
    (OUT / "_generation_summary.json").write_text(
        json.dumps(summary, ensure_ascii=False, indent=2), encoding="utf-8"
    )
    print(json.dumps(summary, ensure_ascii=False, indent=2))


if __name__ == "__main__":
    main()
