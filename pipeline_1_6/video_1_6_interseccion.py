"""
Video 1.6 — Cómo calcular la intersección de dos conjuntos
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Duración aproximada: ~2:50 min

Renderizar (prueba):
    manim -pql video_1_6_interseccion.py Interseccion

Renderizar (final):
    manim -pqh video_1_6_interseccion.py Interseccion

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
    return [0.0, 12.826, 31.817, 80.823, 106.449]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 117.368

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
class Interseccion(Scene):
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
        self._escena_errores()
        self._escena_cierre()

    # ──────────────────────────────────────────────────────────────
    # ESCENA 1 — Apertura
    # ──────────────────────────────────────────────────────────────
    def _escena_apertura(self):
        titulo = Text(
            "1.6 · Intersección de conjuntos",
            font_size=38, color=AZUL_CLARO, weight=BOLD,
        ).to_edge(UP, buff=0.5)

        formula = MathTex(
            r"A \cap B",
            font_size=90, color=WHITE,
        ).move_to(ORIGIN + UP * 0.3)

        desc = Text(
            "Solo lo que está simultáneamente en A y en B.",
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
            r"A \cap B = \{\ x\ \mid\ x \in A\ \text{y}\ x \in B\ \}",
            font_size=36, color=WHITE,
        ).next_to(encabezado, DOWN, buff=0.5)

        circ_a = Circle(radius=1.4, color=AZUL_CLARO, stroke_width=3)
        circ_a.set_fill(AZUL_CLARO, opacity=0.15)
        circ_b = Circle(radius=1.4, color=NARANJA, stroke_width=3)
        circ_b.set_fill(NARANJA, opacity=0.15)
        circ_a.shift(LEFT * 0.9)
        circ_b.shift(RIGHT * 0.9)

        interseccion_fill = Intersection(
            Circle(radius=1.4).shift(LEFT * 0.9),
            Circle(radius=1.4).shift(RIGHT * 0.9),
            color=VERDE, fill_opacity=0.6, stroke_width=0,
        )

        lbl_a = Text("A", font_size=32, color=AZUL_CLARO, weight=BOLD).next_to(circ_a, LEFT, buff=0.2)
        lbl_b = Text("B", font_size=32, color=NARANJA, weight=BOLD).next_to(circ_b, RIGHT, buff=0.2)

        venn = VGroup(circ_a, circ_b, interseccion_fill, lbl_a, lbl_b).move_to(ORIGIN + DOWN * 0.9)

        nota = Text(
            "Solo la zona central sombreada es A ∩ B",
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
        self.play(FadeIn(interseccion_fill, scale=0.6), run_time=0.9)
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
            "Paso 1 — Identificar qué elementos están en A y también en B",
            font_size=21, color=AMARILLO, weight=BOLD,
        )
        paso1_ej = MathTex(
            r"8 \in A\ \text{y}\ 8 \in B \quad \checkmark \qquad"
            r"12 \in A\ \text{y}\ 12 \in B \quad \checkmark",
            font_size=30, color=WHITE,
        )
        paso1 = VGroup(paso1_lbl, paso1_ej).arrange(DOWN, buff=0.2, aligned_edge=LEFT)

        paso2_lbl = Text(
            "Paso 2 — Los que no están en ambos, se descartan",
            font_size=21, color=AMARILLO, weight=BOLD,
        )
        paso2_ej = MathTex(
            r"6 \notin B \quad \times \qquad"
            r"10 \notin B \quad \times \qquad"
            r"16 \notin A \quad \times",
            font_size=30, color=ROJO,
        )
        paso2 = VGroup(paso2_lbl, paso2_ej).arrange(DOWN, buff=0.2, aligned_edge=LEFT)

        paso3_lbl = Text(
            "Paso 3 — Escribir el resultado entre llaves",
            font_size=21, color=AMARILLO, weight=BOLD,
        )
        paso3_ej = MathTex(
            r"A \cap B = \{8,\ 12\}\ \text{mm}",
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
    # ESCENA 4 — Errores comunes
    # ──────────────────────────────────────────────────────────────
    def _escena_errores(self):
        encabezado = Text(
            "Errores comunes",
            font_size=30, color=ROJO,
        ).to_edge(UP, buff=0.5)

        errores = [
            (
                r"A \cap B = \{6,\ 8,\ 10,\ 12,\ 16\}",
                r"A \cap B = \{8,\ 12\}",
                "Confundir intersección con unión",
            ),
            (
                r"A \cap B = \{6,\ 10\}",
                r"A \cap B = \{8,\ 12\}",
                "Incluir solo los exclusivos de A",
            ),
            (
                r"A \cap B = \emptyset",
                r"A \cap B = \{8,\ 12\}",
                "Declarar conjunto vacío sin verificar",
            ),
        ]

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)

        filas = VGroup()
        for mal, bien, razon in errores:
            f_mal  = MathTex(mal,  font_size=26, color=ROJO)
            flecha = Text("→", font_size=22, color=GRIS)
            f_bien = MathTex(bien, font_size=26, color=VERDE)
            r_txt  = Text(razon, font_size=19, color=GRIS, slant=ITALIC)
            fila   = VGroup(
                VGroup(f_mal, flecha, f_bien).arrange(RIGHT, buff=0.3),
                r_txt,
            ).arrange(DOWN, buff=0.12, aligned_edge=LEFT)
            filas.add(fila)

        filas.arrange(DOWN, buff=0.5).move_to(ORIGIN + DOWN * 0.1)

        for fila in filas:
            self.play(FadeIn(fila, shift=RIGHT * 0.3), run_time=0.8)
            self._tick(0.8)
            self.wait(1.2)
            self._tick(1.2)

        self._sync_wait(4)
        self.play(FadeOut(VGroup(encabezado, filas)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 5 — Cierre
    # ──────────────────────────────────────────────────────────────
    def _escena_cierre(self):
        definicion = Text(
            "A ∩ B contiene solo los elementos\n"
            "que están simultáneamente en A y en B.",
            font_size=32, color=WHITE, weight=BOLD, line_spacing=1.4,
        ).move_to(ORIGIN + UP * 0.4)

        siguiente = Text(
            "Siguiente: 1.7 · Diferencia de conjuntos  →",
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
    print("Renderiza con: manim -pql video_1_6_interseccion.py Interseccion")
