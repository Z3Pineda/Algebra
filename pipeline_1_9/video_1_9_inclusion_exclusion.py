"""
Video 1.9 — Principio de inclusión-exclusión
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Duración aproximada: ~2:50 min

Renderizar (prueba):
    manim -pql video_1_9_inclusion_exclusion.py InclusionExclusion

Renderizar (final):
    manim -pqh video_1_9_inclusion_exclusion.py InclusionExclusion

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
    return [0.0, 21.316, 52.872, 72.516, 94.877, 116.585]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 130.534

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
class InclusionExclusion(Scene):
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
        self._escena_problema()
        self._escena_formula()
        self._escena_procedimiento()
        self._escena_errores()
        self._escena_cierre()

    # ──────────────────────────────────────────────────────────────
    # ESCENA 1 — Apertura
    # ──────────────────────────────────────────────────────────────
    def _escena_apertura(self):
        titulo = Text(
            "1.9 · Principio de inclusión-exclusión",
            font_size=36, color=AZUL_CLARO, weight=BOLD,
        ).to_edge(UP, buff=0.5)

        formula = MathTex(
            r"|A \cup B| = |A| + |B| - |A \cap B|",
            font_size=52, color=WHITE,
        ).move_to(ORIGIN + UP * 0.3)

        desc = Text(
            "Contar elementos de la unión sin sumar dos veces\nlos que están en ambos conjuntos.",
            font_size=24, color=GRIS, line_spacing=1.3,
        ).next_to(formula, DOWN, buff=0.6)

        self.play(FadeIn(titulo, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(Write(formula), run_time=1.4)
        self._tick(1.4)
        self.play(FadeIn(desc, shift=UP * 0.1), run_time=0.8)
        self._tick(0.8)
        self._sync_wait(1)
        self.play(FadeOut(VGroup(titulo, formula, desc)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 2 — El problema: por qué no basta sumar
    # ──────────────────────────────────────────────────────────────
    def _escena_problema(self):
        encabezado = Text(
            "¿Por qué no basta con sumar |A| + |B|?",
            font_size=28, color=AMARILLO, weight=BOLD,
        ).to_edge(UP, buff=0.5)

        conj_a = MathTex(
            r"A = \{6,\ 8,\ 10,\ 12\} \quad |A| = 4",
            font_size=32, color=AZUL_CLARO,
        )
        conj_b = MathTex(
            r"B = \{8,\ 12,\ 16\} \quad |B| = 3",
            font_size=32, color=NARANJA,
        )
        conjuntos = VGroup(conj_a, conj_b).arrange(DOWN, buff=0.35, aligned_edge=LEFT)
        conjuntos.next_to(encabezado, DOWN, buff=0.5)

        suma_mal = MathTex(
            r"|A| + |B| = 4 + 3 = 7",
            font_size=34, color=ROJO,
        )
        nota_mal = Text(
            "Incorrecto — el 8 y el 12 se contaron dos veces",
            font_size=20, color=ROJO, slant=ITALIC,
        )
        bloque_mal = VGroup(suma_mal, nota_mal).arrange(DOWN, buff=0.2, aligned_edge=LEFT)

        union_real = MathTex(
            r"A \cup B = \{6,\ 8,\ 10,\ 12,\ 16\} \quad |A \cup B| = 5",
            font_size=28, color=VERDE,
        )
        nota_bien = Text(
            "Correcto — 5 elementos distintos en la unión",
            font_size=20, color=VERDE, slant=ITALIC,
        )
        bloque_bien = VGroup(union_real, nota_bien).arrange(DOWN, buff=0.2, aligned_edge=LEFT)

        todo = VGroup(bloque_mal, bloque_bien).arrange(DOWN, buff=0.5, aligned_edge=LEFT)
        todo.next_to(conjuntos, DOWN, buff=0.45)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(FadeIn(conjuntos, shift=RIGHT * 0.2), run_time=0.9)
        self._tick(0.9)
        self.wait(0.5)
        self._tick(0.5)
        self.play(FadeIn(bloque_mal, shift=RIGHT * 0.2), run_time=0.9)
        self._tick(0.9)
        self.wait(1.0)
        self._tick(1.0)
        self.play(FadeIn(bloque_bien, shift=RIGHT * 0.2), run_time=0.9)
        self._tick(0.9)
        self._sync_wait(2)
        self.play(FadeOut(VGroup(encabezado, conjuntos, todo)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 3 — La fórmula explicada parte por parte
    # ──────────────────────────────────────────────────────────────
    def _escena_formula(self):
        encabezado = Text(
            "La fórmula parte por parte",
            font_size=30, color=AZUL_CLARO,
        ).to_edge(UP, buff=0.5)

        formula = MathTex(
            r"|A \cup B|", r"=",
            r"|A|", r"+", r"|B|", r"-", r"|A \cap B|",
            font_size=44,
        ).next_to(encabezado, DOWN, buff=0.55)

        colores = [VERDE, WHITE, AZUL_CLARO, WHITE, NARANJA, ROJO, AMARILLO]
        for parte, color in zip(formula, colores):
            parte.set_color(color)

        lbl_union = Text("total en\nla unión", font_size=17, color=VERDE, line_spacing=1.05)
        lbl_a = Text("elementos\nen A", font_size=17, color=AZUL_CLARO, line_spacing=1.05)
        lbl_b = Text("elementos\nen B", font_size=17, color=NARANJA, line_spacing=1.05)
        lbl_inter = Text("repetidos\na restar", font_size=17, color=AMARILLO, line_spacing=1.05)

        labels = VGroup(lbl_union, lbl_a, lbl_b, lbl_inter).arrange(RIGHT, buff=0.7)
        labels.next_to(formula, DOWN, buff=1.0)

        flechas = VGroup(
            Arrow(formula[0].get_bottom(), lbl_union.get_top(), color=VERDE, buff=0.08, stroke_width=2),
            Arrow(formula[2].get_bottom(), lbl_a.get_top(), color=AZUL_CLARO, buff=0.08, stroke_width=2),
            Arrow(formula[4].get_bottom(), lbl_b.get_top(), color=NARANJA, buff=0.08, stroke_width=2),
            Arrow(formula[6].get_bottom(), lbl_inter.get_top(), color=AMARILLO, buff=0.08, stroke_width=2),
        )

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(Write(formula), run_time=1.4)
        self._tick(1.4)
        self.play(
            LaggedStart(
                AnimationGroup(GrowArrow(flechas[0]), FadeIn(lbl_union)),
                AnimationGroup(GrowArrow(flechas[1]), FadeIn(lbl_a)),
                AnimationGroup(GrowArrow(flechas[2]), FadeIn(lbl_b)),
                AnimationGroup(GrowArrow(flechas[3]), FadeIn(lbl_inter)),
                lag_ratio=0.3,
            ),
            run_time=2.0,
        )
        self._tick(2.0)
        self._sync_wait(3)
        self.play(
            FadeOut(VGroup(encabezado, formula, flechas, labels)),
            run_time=0.7,
        )
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 4 — Procedimiento numérico
    # ──────────────────────────────────────────────────────────────
    def _escena_procedimiento(self):
        encabezado = Text(
            "Aplicación numérica",
            font_size=30, color=VERDE,
        ).to_edge(UP, buff=0.5)

        datos = MathTex(
            r"|A| = 4 \qquad |B| = 3 \qquad |A \cap B| = 2",
            font_size=34, color=WHITE,
        ).next_to(encabezado, DOWN, buff=0.5)

        inter_detalle = MathTex(
            r"A \cap B = \{8,\ 12\} \quad \Rightarrow \quad |A \cap B| = 2",
            font_size=28, color=AMARILLO,
        ).next_to(datos, DOWN, buff=0.35)

        paso1 = MathTex(
            r"|A \cup B| = |A| + |B| - |A \cap B|",
            font_size=34, color=WHITE,
        )
        paso2 = MathTex(
            r"|A \cup B| = 4 + 3 - 2",
            font_size=34, color=WHITE,
        )
        paso3 = MathTex(
            r"|A \cup B| = 5",
            font_size=42, color=VERDE,
        )

        pasos = VGroup(paso1, paso2, paso3).arrange(DOWN, buff=0.4)
        pasos.next_to(inter_detalle, DOWN, buff=0.45)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(FadeIn(datos), run_time=0.8)
        self._tick(0.8)
        self.play(FadeIn(inter_detalle), run_time=0.8)
        self._tick(0.8)
        self.wait(0.5)
        self._tick(0.5)

        for paso in pasos:
            self.play(FadeIn(paso, shift=RIGHT * 0.2), run_time=0.9)
            self._tick(0.9)
            self.wait(1.1)
            self._tick(1.1)

        self._sync_wait(4)
        self.play(FadeOut(VGroup(encabezado, datos, inter_detalle, pasos)), run_time=0.7)
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
                r"|A \cup B| = |A| + |B|",
                r"|A \cup B| = |A| + |B| - |A \cap B|",
                "Olvidar restar la intersección",
            ),
            (
                r"|A \cup B| = |A| + |B| + |A \cap B|",
                r"|A \cup B| = |A| + |B| - |A \cap B|",
                "Sumar la intersección en lugar de restarla",
            ),
            (
                r"|A \cap B| = 0\ \text{sin verificar}",
                r"\text{Siempre calcular }|A \cap B|",
                "Asumir que la intersección es vacía",
            ),
        ]

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)

        filas = VGroup()
        for mal, bien, razon in errores:
            f_mal  = MathTex(mal,  font_size=20, color=ROJO)
            flecha = Text("→", font_size=20, color=GRIS)
            f_bien = MathTex(bien, font_size=20, color=VERDE)
            formulas = VGroup(f_mal, flecha, f_bien).arrange(RIGHT, buff=0.35)
            if formulas.width > 11.5:
                formulas.scale_to_fit_width(11.5)
            r_txt  = Text(razon, font_size=17, color=GRIS, slant=ITALIC)
            if r_txt.width > 11.0:
                r_txt.scale_to_fit_width(11.0)
            fila   = VGroup(formulas, r_txt).arrange(DOWN, buff=0.28, aligned_edge=LEFT)
            filas.add(fila)

        filas.arrange(DOWN, buff=0.55).move_to(ORIGIN + DOWN * 0.05)

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
            "Para contar los elementos de A ∪ B:\nsumar |A| + |B| y restar |A ∩ B|.\nLos elementos compartidos se cuentan una sola vez.",
            font_size=28, color=WHITE, weight=BOLD, line_spacing=1.4,
        ).move_to(ORIGIN + UP * 0.4)

        siguiente = Text(
            "Siguiente: 1.10 · Diagramas de Venn y conteo  →",
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
    print("Renderiza con: manim -pql video_1_9_inclusion_exclusion.py InclusionExclusion")
