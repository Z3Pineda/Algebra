"""
Video 1.7 — Cómo calcular la diferencia de conjuntos
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Duración aproximada: ~2:50 min

Renderizar (prueba):
    manim -pql video_1_7_diferencia.py Diferencia

Renderizar (final):
    manim -pqh video_1_7_diferencia.py Diferencia

Sincronizacion con audio: generar section_starts.json con sync_timeline.py
"""

from __future__ import annotations

import json
from pathlib import Path

from manim import *

SYNC_FILE = Path(__file__).resolve().parent / "section_starts.json"


def cargar_section_starts() -> list[float]:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return [float(x) for x in data["section_starts"]]
    return [0.0, 12.669, 30.302, 70.583, 95.269, 116.742]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 125.728

# ── Paleta del curso ──────────────────────────────────────────────
AZUL         = "#1d4ed8"
AZUL_CLARO   = "#3b82f6"
AZUL_OSCURO  = "#1e3a8a"
NARANJA      = "#f97316"
NARANJA_CLARO= "#fb923c"
GRIS         = "#64748b"
VERDE        = "#22c55e"
ROJO         = "#ef4444"
AMARILLO     = "#facc15"
FONDO        = "#0f172a"


# ═════════════════════════════════════════════════════════════════
class Diferencia(Scene):
    section_starts: list[float]
    _t: float

    def setup(self) -> None:
        self.section_starts = cargar_section_starts()
        self._t = 0.0

    def _tick(self, seconds: float) -> None:
        self._t += seconds

    def _sync_wait(self, next_section: int, fadeout: float = 0.7) -> None:
        if next_section >= len(self.section_starts):
            return
        remaining = self.section_starts[next_section] - self._t - fadeout
        if remaining > 0:
            self.wait(remaining)
            self._tick(remaining)

    def construct(self):
        self.camera.background_color = FONDO
        self._escena_apertura()
        self._escena_definicion()
        self._escena_procedimiento()
        self._escena_no_conmutativa()
        self._escena_errores()
        self._escena_cierre()

    # ──────────────────────────────────────────────────────────────
    # ESCENA 1 — Apertura
    # ──────────────────────────────────────────────────────────────
    def _escena_apertura(self):
        titulo = Text(
            "1.7 · Diferencia de conjuntos",
            font_size=38, color=AZUL_CLARO, weight=BOLD,
        ).to_edge(UP, buff=0.5)

        formula = MathTex(
            r"A - B",
            font_size=90, color=WHITE,
        ).move_to(ORIGIN + UP * 0.3)

        desc = Text(
            "Lo que está en A pero no está en B.",
            font_size=28, color=GRIS,
        ).next_to(formula, DOWN, buff=0.6)

        self.play(FadeIn(titulo, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(Write(formula), run_time=1.2)
        self._tick(1.2)
        self.play(FadeIn(desc, shift=UP * 0.1), run_time=0.8)
        self._tick(0.8)
        self._sync_wait(1)
        self.play(FadeOut(VGroup(titulo, formula, desc)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 2 — Definición formal + Venn
    # ──────────────────────────────────────────────────────────────
    def _escena_definicion(self):
        encabezado = Text(
            "Definición",
            font_size=30, color=AZUL_CLARO,
        ).to_edge(UP, buff=0.5)

        definicion = MathTex(
            r"A - B = \{\ x\ \mid\ x \in A\ \text{y}\ x \notin B\ \}",
            font_size=36, color=WHITE,
        ).next_to(encabezado, DOWN, buff=0.5)

        circ_a = Circle(radius=1.4, color=AZUL_CLARO, stroke_width=3)
        circ_a.set_fill(AZUL_CLARO, opacity=0.0)
        circ_b = Circle(radius=1.4, color=NARANJA, stroke_width=3)
        circ_b.set_fill(NARANJA, opacity=0.0)
        circ_a.shift(LEFT * 0.9)
        circ_b.shift(RIGHT * 0.9)

        zona_a = Difference(
            Circle(radius=1.4).shift(LEFT * 0.9),
            Circle(radius=1.4).shift(RIGHT * 0.9),
            color=AZUL_CLARO, fill_opacity=0.6, stroke_width=0,
        )

        lbl_a = Text("A", font_size=32, color=AZUL_CLARO, weight=BOLD).next_to(circ_a, LEFT, buff=0.2)
        lbl_b = Text("B", font_size=32, color=NARANJA, weight=BOLD).next_to(circ_b, RIGHT, buff=0.2)

        venn = VGroup(circ_a, circ_b, zona_a, lbl_a, lbl_b).move_to(ORIGIN + DOWN * 0.9)

        nota = Text(
            "Solo la zona exclusiva de A es A − B",
            font_size=22, color=GRIS, slant=ITALIC,
        ).next_to(venn, DOWN, buff=0.35)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(Write(definicion), run_time=1.2)
        self._tick(1.2)
        self.play(
            DrawBorderThenFill(circ_a),
            DrawBorderThenFill(circ_b),
            FadeIn(lbl_a), FadeIn(lbl_b),
            run_time=1.0,
        )
        self._tick(1.0)
        self.play(FadeIn(zona_a, scale=0.7), run_time=0.9)
        self._tick(0.9)
        self.play(FadeIn(nota), run_time=0.7)
        self._tick(0.7)
        self._sync_wait(2)
        self.play(FadeOut(VGroup(encabezado, definicion, venn, nota)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 3 — Procedimiento paso a paso
    # ──────────────────────────────────────────────────────────────
    def _escena_procedimiento(self):
        encabezado = Text(
            "Procedimiento paso a paso",
            font_size=30, color=VERDE,
        ).to_edge(UP, buff=0.5)

        conj_a = MathTex(
            r"A = \{6,\ 8,\ 10,\ 12\}\ \text{mm}",
            font_size=34, color=AZUL_CLARO,
        )
        conj_b = MathTex(
            r"B = \{8,\ 12,\ 16\}\ \text{mm}",
            font_size=34, color=NARANJA,
        )
        conjuntos = VGroup(conj_a, conj_b).arrange(DOWN, buff=0.3, aligned_edge=LEFT)
        conjuntos.next_to(encabezado, DOWN, buff=0.45)

        paso1_lbl = Text(
            "Paso 1 — Partir de los elementos de A",
            font_size=22, color=AMARILLO, weight=BOLD,
        )
        paso1_ej = MathTex(
            r"6,\ 8,\ 10,\ 12",
            font_size=32, color=AZUL_CLARO,
        )
        paso1 = VGroup(paso1_lbl, paso1_ej).arrange(DOWN, buff=0.2, aligned_edge=LEFT)

        paso2_lbl = Text(
            "Paso 2 — Eliminar los que también están en B",
            font_size=22, color=AMARILLO, weight=BOLD,
        )
        paso2_ej = MathTex(
            r"8 \in B\ \times \qquad 12 \in B\ \times",
            font_size=30, color=ROJO,
        )
        paso2 = VGroup(paso2_lbl, paso2_ej).arrange(DOWN, buff=0.2, aligned_edge=LEFT)

        paso3_lbl = Text(
            "Paso 3 — Escribir el resultado entre llaves",
            font_size=22, color=AMARILLO, weight=BOLD,
        )
        paso3_ej = MathTex(
            r"A - B = \{6,\ 10\}\ \text{mm}",
            font_size=34, color=VERDE,
        )
        paso3 = VGroup(paso3_lbl, paso3_ej).arrange(DOWN, buff=0.2, aligned_edge=LEFT)

        pasos = VGroup(paso1, paso2, paso3).arrange(DOWN, buff=0.4, aligned_edge=LEFT)
        pasos.next_to(conjuntos, DOWN, buff=0.4)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(FadeIn(conjuntos, shift=RIGHT * 0.2), run_time=0.9)
        self._tick(0.9)
        self.wait(0.5)
        self._tick(0.5)

        for paso in pasos:
            self.play(FadeIn(paso, shift=RIGHT * 0.2), run_time=0.9)
            self._tick(0.9)
            self.wait(1.3)
            self._tick(1.3)

        self._sync_wait(3)
        self.play(FadeOut(VGroup(encabezado, conjuntos, pasos)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 4 — La diferencia NO es conmutativa
    # ──────────────────────────────────────────────────────────────
    def _escena_no_conmutativa(self):
        encabezado = Text(
            "La diferencia no es conmutativa",
            font_size=30, color=ROJO,
        ).to_edge(UP, buff=0.5)

        izq = MathTex(
            r"A - B = \{6,\ 10\}",
            font_size=36, color=AZUL_CLARO,
        )
        distinto = Text("≠", font_size=48, color=ROJO)
        der = MathTex(
            r"B - A = \{16\}",
            font_size=36, color=NARANJA,
        )

        exp_izq = Text(
            "Diámetros en A\nque no están en B",
            font_size=17, color=GRIS, slant=ITALIC, line_spacing=1.05,
        )
        exp_der = Text(
            "Diámetros en B\nque no están en A",
            font_size=17, color=GRIS, slant=ITALIC, line_spacing=1.05,
        )

        col_izq = VGroup(izq, exp_izq).arrange(DOWN, buff=0.32)
        col_der = VGroup(der, exp_der).arrange(DOWN, buff=0.32)
        comparacion = VGroup(col_izq, distinto, col_der).arrange(RIGHT, buff=1.0)
        comparacion.move_to(ORIGIN + UP * 0.15)

        regla = Text(
            "El orden de los conjuntos cambia el resultado.",
            font_size=24, color=AMARILLO, weight=BOLD,
        ).next_to(comparacion, DOWN, buff=0.55)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(
            FadeIn(col_izq, shift=RIGHT * 0.3),
            FadeIn(distinto),
            FadeIn(col_der, shift=LEFT * 0.3),
            run_time=1.0,
        )
        self._tick(1.0)
        self.play(FadeIn(regla, shift=UP * 0.1), run_time=0.8)
        self._tick(0.8)
        self._sync_wait(4)
        self.play(
            FadeOut(VGroup(encabezado, comparacion, regla)),
            run_time=0.7,
        )
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 5 — Errores comunes
    # ──────────────────────────────────────────────────────────────
    def _escena_errores(self):
        encabezado = Text(
            "Errores comunes",
            font_size=30, color=ROJO,
        ).to_edge(UP, buff=0.5)

        errores = [
            (
                r"A - B = \{8,\ 12\}",
                r"A - B = \{6,\ 10\}",
                "Escribir los elementos comunes en lugar de los exclusivos",
            ),
            (
                r"A - B = B - A",
                r"A - B \neq B - A",
                "Asumir que la diferencia es conmutativa",
            ),
            (
                r"A - B = \{6,\ 8,\ 10,\ 12,\ 16\}",
                r"A - B = \{6,\ 10\}",
                "No eliminar los elementos que están en B",
            ),
        ]

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)

        filas = VGroup()
        for mal, bien, razon in errores:
            f_mal  = MathTex(mal,  font_size=22, color=ROJO)
            flecha = Text("→", font_size=20, color=GRIS)
            f_bien = MathTex(bien, font_size=22, color=VERDE)
            formulas = VGroup(f_mal, flecha, f_bien).arrange(RIGHT, buff=0.35)
            if formulas.width > 11.5:
                formulas.scale_to_fit_width(11.5)
            r_txt  = Text(razon, font_size=17, color=GRIS, slant=ITALIC)
            if r_txt.width > 11.0:
                r_txt.scale_to_fit_width(11.0)
            fila   = VGroup(formulas, r_txt).arrange(DOWN, buff=0.28, aligned_edge=LEFT)
            filas.add(fila)

        filas.arrange(DOWN, buff=0.62).move_to(ORIGIN + DOWN * 0.05)

        for fila in filas:
            self.play(FadeIn(fila, shift=RIGHT * 0.3), run_time=0.8)
            self._tick(0.8)
            self.wait(1.2)
            self._tick(1.2)

        self._sync_wait(5)
        self.play(FadeOut(VGroup(encabezado, filas)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 6 — Cierre
    # ──────────────────────────────────────────────────────────────
    def _escena_cierre(self):
        definicion = Text(
            "A − B contiene los elementos de A\n"
            "que no están en B.\n"
            "El orden importa: A − B ≠ B − A.",
            font_size=30, color=WHITE, weight=BOLD, line_spacing=1.4,
        ).move_to(ORIGIN + UP * 0.4)

        siguiente = Text(
            "Siguiente: 1.8 · Complemento de un conjunto  →",
            font_size=22, color=NARANJA_CLARO,
        ).next_to(definicion, DOWN, buff=0.8)

        marco = SurroundingRectangle(
            definicion, color=AZUL, buff=0.4,
            corner_radius=0.15, stroke_width=3,
        )

        self.play(Create(marco), run_time=0.8)
        self._tick(0.8)
        self.play(Write(definicion), run_time=1.4)
        self._tick(1.4)
        self.play(FadeIn(siguiente, shift=UP * 0.15), run_time=0.7)
        self._tick(0.7)

        fin_audio = cargar_fin_audio()
        restante = fin_audio - self._t - 1.0
        if restante > 0:
            self.wait(restante)
            self._tick(restante)

        self.play(FadeOut(VGroup(marco, definicion, siguiente)), run_time=1.0)


if __name__ == "__main__":
    print("Renderiza con: manim -pql video_1_7_diferencia.py Diferencia")
