"""
Video 1.3 — Cómo escribir un conjunto por comprensión
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Duración aproximada: ~2:50 min

Renderizar (prueba):
    manim -pql video_1_3_comprension.py Comprension

Renderizar (final):
    manim -pqh video_1_3_comprension.py Comprension

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
    return [0.0, 13.244, 33.672, 74.423, 100.859]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 113.371

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


def caja_formula(formula, color_borde=AZUL_CLARO, ancho=9.0, alto=1.3):
    rect = RoundedRectangle(
        corner_radius=0.15, width=ancho, height=alto,
        color=color_borde, stroke_width=3,
        fill_color=AZUL_OSCURO, fill_opacity=0.3,
    )
    lbl = MathTex(formula, color=WHITE, font_size=38).move_to(rect)
    return VGroup(rect, lbl)


def etiqueta_parte(texto, color):
    return Text(texto, font_size=22, color=color, weight=BOLD)


# ═════════════════════════════════════════════════════════════════
class Comprension(Scene):
    section_starts: list[float]
    _t: float

    def setup(self) -> None:
        self.section_starts = cargar_section_starts()
        self._t = 0.0

    def _tick(self, seconds: float) -> None:
        self._t += seconds

    def _sync_wait(self, next_section: int, fadeout: float = 0.7) -> None:
        """Espera hasta el inicio del bloque de audio / escena siguiente."""
        if next_section >= len(self.section_starts):
            return
        remaining = self.section_starts[next_section] - self._t - fadeout
        if remaining > 0:
            self.wait(remaining)
            self._tick(remaining)

    def construct(self):
        self.camera.background_color = FONDO
        self._escena_apertura()
        self._escena_anatomia()
        self._escena_ejemplos()
        self._escena_errores()
        self._escena_cierre()

    # ──────────────────────────────────────────────────────────────
    # ESCENA 1 — Apertura
    # ──────────────────────────────────────────────────────────────
    def _escena_apertura(self):
        titulo = Text(
            "1.3 · Notación por comprensión",
            font_size=38, color=AZUL_CLARO, weight=BOLD,
        ).to_edge(UP, buff=0.5)

        formula = MathTex(
            r"A = \{\ x\ \mid\ \text{condición}\ \}",
            font_size=54, color=WHITE,
        ).move_to(ORIGIN + UP * 0.3)

        desc = Text(
            "Definir el conjunto por la regla que cumplen sus elementos,\n"
            "no listándolos uno a uno.",
            font_size=24, color=GRIS, line_spacing=1.3,
        ).next_to(formula, DOWN, buff=0.6)

        self.play(FadeIn(titulo, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(Write(formula), run_time=1.6)
        self._tick(1.6)
        self.play(FadeIn(desc, shift=UP * 0.1), run_time=0.8)
        self._tick(0.8)
        self._sync_wait(1)
        self.play(FadeOut(VGroup(titulo, formula, desc)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 2 — Anatomía de la notación
    # ──────────────────────────────────────────────────────────────
    def _escena_anatomia(self):
        encabezado = Text(
            "Partes de la notación",
            font_size=30, color=AZUL_CLARO,
        ).to_edge(UP, buff=0.5)

        formula = MathTex(
            r"A", r"=", r"\{",
            r"x",
            r"\in",
            r"\mathbb{R}",
            r"\mid",
            r"x > 0",
            r"\}",
            font_size=52,
        ).move_to(ORIGIN + UP * 0.8)

        colores = [WHITE, WHITE, WHITE, AMARILLO, GRIS, VERDE, GRIS, NARANJA, WHITE]
        for parte, color in zip(formula, colores):
            parte.set_color(color)

        lbl_x = Text(
            "variable\ngenérica", font_size=18, color=AMARILLO, line_spacing=1.05,
        )
        lbl_r = Text(
            "universo\ndonde vive x", font_size=18, color=VERDE, line_spacing=1.05,
        )
        lbl_c = Text(
            "condición\nque debe cumplir", font_size=18, color=NARANJA, line_spacing=1.05,
        )
        labels = VGroup(lbl_x, lbl_r, lbl_c).arrange(RIGHT, buff=0.85)
        labels.next_to(formula, DOWN, buff=1.15)

        flecha_x = Arrow(
            formula[3].get_bottom(), lbl_x.get_top(),
            color=AMARILLO, buff=0.08, stroke_width=2,
        )
        flecha_r = Arrow(
            formula[5].get_bottom(), lbl_r.get_top(),
            color=VERDE, buff=0.08, stroke_width=2,
        )
        flecha_c = Arrow(
            formula[7].get_bottom(), lbl_c.get_top(),
            color=NARANJA, buff=0.08, stroke_width=2,
        )

        lbl_barra = Text("\"tal que\"", font_size=20, color=GRIS, slant=ITALIC)
        lbl_barra.next_to(formula[6], UP, buff=0.45)
        flecha_barra = Arrow(
            lbl_barra.get_bottom(), formula[6].get_top(),
            color=GRIS, buff=0.08, stroke_width=2,
        )

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(Write(formula), run_time=1.4)
        self._tick(1.4)
        self.wait(0.5)
        self._tick(0.5)

        self.play(GrowArrow(flecha_x), FadeIn(lbl_x), run_time=0.8)
        self._tick(0.8)
        self.play(GrowArrow(flecha_r), FadeIn(lbl_r), run_time=0.8)
        self._tick(0.8)
        self.play(GrowArrow(flecha_barra), FadeIn(lbl_barra), run_time=0.8)
        self._tick(0.8)
        self.play(GrowArrow(flecha_c), FadeIn(lbl_c), run_time=0.8)
        self._tick(0.8)
        self._sync_wait(2)

        self.play(
            FadeOut(VGroup(
                encabezado, formula,
                flecha_x, lbl_x,
                flecha_r, lbl_r,
                flecha_barra, lbl_barra,
                flecha_c, lbl_c,
            )),
            run_time=0.7,
        )
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 3 — Ejemplos de ingeniería
    # ──────────────────────────────────────────────────────────────
    def _escena_ejemplos(self):
        encabezado = Text(
            "Ejemplos en ingeniería mecánica",
            font_size=30, color=VERDE,
        ).to_edge(UP, buff=0.5)

        datos = [
            (
                r"D = \{\ d \in \mathbb{R}^+\ \mid\ d \geq 8\ \}\ \text{mm}",
                "Diámetros de tornillos de 8 mm o más",
            ),
            (
                r"T = \{\ t \in \mathbb{R}\ \mid\ 150 \leq t \leq 300\ \}\ \text{°C}",
                "Temperaturas de operación dentro del rango seguro",
            ),
            (
                r"P = \{\ p \in \mathbb{Z}^+\ \mid\ p\ \text{es par},\ p \leq 12\ \}",
                "Número de cilindros par, hasta 12",
            ),
        ]

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)

        filas = VGroup()
        for formula, desc in datos:
            f = MathTex(formula, font_size=30, color=WHITE)
            d = Text(desc, font_size=19, color=GRIS, slant=ITALIC)
            fila = VGroup(f, d).arrange(DOWN, buff=0.15, aligned_edge=LEFT)
            marco = SurroundingRectangle(
                fila, color=VERDE, buff=0.22,
                corner_radius=0.12, stroke_width=2,
            )
            filas.add(VGroup(marco, fila))

        filas.arrange(DOWN, buff=0.38).move_to(ORIGIN + DOWN * 0.2)

        for bloque in filas:
            self.play(
                DrawBorderThenFill(bloque[0]),
                FadeIn(bloque[1], shift=RIGHT * 0.2),
                run_time=0.9,
            )
            self._tick(0.9)
            self.wait(1.3)
            self._tick(1.3)

        self._sync_wait(3)
        self.play(FadeOut(VGroup(encabezado, filas)), run_time=0.7)
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
                r"\{\ x\ \mid\ x > 0\ \}",
                r"\{\ x \in \mathbb{R}\ \mid\ x > 0\ \}",
                "Falta declarar el universo de x",
            ),
            (
                r"\{\ x \in \mathbb{R}\ \mid\ \}",
                r"\{\ x \in \mathbb{R}\ \mid\ x > 0\ \}",
                "Falta la condición después de la barra",
            ),
            (
                r"\{\ x \in \mathbb{R}\ |\ x > 0\ \}",
                r"\{\ x \in \mathbb{R}\ \mid\ x > 0\ \}",
                "Usar | en lugar de \\mid en LaTeX",
            ),
        ]

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)

        filas = VGroup()
        for mal, bien, razon in errores:
            f_mal  = MathTex(mal,  font_size=28, color=ROJO)
            flecha = Text("→", font_size=26, color=GRIS)
            f_bien = MathTex(bien, font_size=28, color=VERDE)
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
            "Notación por comprensión:\n"
            "{ x ∈ universo | condición }\n"
            "El universo y la condición son obligatorios.",
            font_size=30, color=WHITE, weight=BOLD, line_spacing=1.4,
        ).move_to(ORIGIN + UP * 0.4)

        siguiente = Text(
            "Siguiente: 1.4 · Pertenencia — ∈ y ∉  →",
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
    print("Renderiza con: manim -pql video_1_3_comprension.py Comprension")
