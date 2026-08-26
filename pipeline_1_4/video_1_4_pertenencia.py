"""
Video 1.4 — Pertenencia: ∈ y ∉
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Duración aproximada: ~2:50 min

Renderizar (prueba):
    manim -pql video_1_4_pertenencia.py Pertenencia

Renderizar (final):
    manim -pqh video_1_4_pertenencia.py Pertenencia

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
    return [0.0, 20.506, 38.87, 70.661, 94.459]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 108.826

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


def caja_formula(formula, color_borde=AZUL_CLARO, ancho=8.0, alto=1.2):
    rect = RoundedRectangle(
        corner_radius=0.15, width=ancho, height=alto,
        color=color_borde, stroke_width=3,
        fill_color=AZUL_OSCURO, fill_opacity=0.3,
    )
    lbl = MathTex(formula, color=WHITE, font_size=38).move_to(rect)
    return VGroup(rect, lbl)


# ═════════════════════════════════════════════════════════════════
class Pertenencia(Scene):
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
        self._escena_simbolos()
        self._escena_ejemplos()
        self._escena_errores()
        self._escena_cierre()

    # ──────────────────────────────────────────────────────────────
    # ESCENA 1 — Apertura
    # ──────────────────────────────────────────────────────────────
    def _escena_apertura(self):
        titulo = Text(
            "1.4 · Pertenencia — ∈ y ∉",
            font_size=38, color=AZUL_CLARO, weight=BOLD,
        ).to_edge(UP, buff=0.5)

        formula_si = MathTex(r"8 \in D", font_size=64, color=VERDE)
        formula_no = MathTex(r"5 \notin D", font_size=64, color=ROJO)
        par = VGroup(formula_si, formula_no).arrange(RIGHT, buff=1.8).move_to(ORIGIN + UP * 0.2)

        desc = Text(
            "D = {6, 8, 10, 12} mm — diámetros disponibles en almacén",
            font_size=24, color=GRIS,
        ).next_to(par, DOWN, buff=0.7)

        self.play(FadeIn(titulo, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(
            LaggedStart(
                Write(formula_si),
                Write(formula_no),
                lag_ratio=0.4,
            ),
            run_time=1.6,
        )
        self._tick(1.6)
        self.play(FadeIn(desc, shift=UP * 0.1), run_time=0.8)
        self._tick(0.8)
        self._sync_wait(1)
        self.play(FadeOut(VGroup(titulo, par, desc)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 2 — Los dos símbolos
    # ──────────────────────────────────────────────────────────────
    def _escena_simbolos(self):
        encabezado = Text(
            "Los dos símbolos",
            font_size=30, color=AZUL_CLARO,
        ).to_edge(UP, buff=0.5)

        s1_sym  = MathTex(r"\in", font_size=80, color=VERDE)
        s1_lbl  = Text("pertenece a", font_size=28, color=VERDE, weight=BOLD)
        s1_ej   = MathTex(r"8 \in \{6,\,8,\,10,\,12\}", font_size=34, color=WHITE)
        s1_desc = Text("8 sí está en el conjunto", font_size=22, color=GRIS, slant=ITALIC)
        s1 = VGroup(s1_sym, s1_lbl, s1_ej, s1_desc).arrange(DOWN, buff=0.3)

        s2_sym  = MathTex(r"\notin", font_size=80, color=ROJO)
        s2_lbl  = Text("no pertenece a", font_size=28, color=ROJO, weight=BOLD)
        s2_ej   = MathTex(r"5 \notin \{6,\,8,\,10,\,12\}", font_size=34, color=WHITE)
        s2_desc = Text("5 no está en el conjunto", font_size=22, color=GRIS, slant=ITALIC)
        s2 = VGroup(s2_sym, s2_lbl, s2_ej, s2_desc).arrange(DOWN, buff=0.3)

        par = VGroup(s1, s2).arrange(RIGHT, buff=1.6).move_to(ORIGIN + DOWN * 0.1)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(FadeIn(s1, shift=RIGHT * 0.3), run_time=1.0)
        self._tick(1.0)
        self.wait(0.8)
        self._tick(0.8)
        self.play(FadeIn(s2, shift=LEFT * 0.3), run_time=1.0)
        self._tick(1.0)
        self._sync_wait(2)
        self.play(FadeOut(VGroup(encabezado, par)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 3 — Ejemplos de ingeniería
    # ──────────────────────────────────────────────────────────────
    def _escena_ejemplos(self):
        encabezado = Text(
            "Ejemplos en ingeniería mecánica",
            font_size=30, color=VERDE,
        ).to_edge(UP, buff=0.5)

        conjunto = MathTex(
            r"D = \{6,\,8,\,10,\,12\}\ \text{mm}",
            font_size=34, color=AMARILLO,
        ).next_to(encabezado, DOWN, buff=0.4)

        datos = [
            (r"8 \in D",    VERDE, "8 mm está disponible. Pertenece."),
            (r"9 \notin D", ROJO,  "9 mm no está en el catálogo. No pertenece."),
            (r"6 \in D",    VERDE, "6 mm está disponible. Pertenece."),
            (r"7 \notin D", ROJO,  "7 mm no existe en almacén. No pertenece."),
        ]

        filas = VGroup()
        for formula, color, desc in datos:
            f = MathTex(formula, font_size=36, color=color)
            d = Text(desc, font_size=21, color=GRIS, slant=ITALIC)
            fila = VGroup(f, d).arrange(RIGHT, buff=0.7)
            filas.add(fila)

        filas.arrange(DOWN, buff=0.42).next_to(conjunto, DOWN, buff=0.5)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(FadeIn(conjunto), run_time=0.7)
        self._tick(0.7)

        for fila in filas:
            self.play(FadeIn(fila, shift=RIGHT * 0.2), run_time=0.8)
            self._tick(0.8)
            self.wait(1.0)
            self._tick(1.0)

        self._sync_wait(3)
        self.play(FadeOut(VGroup(encabezado, conjunto, filas)), run_time=0.7)
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
                r"\{8\} \in D",
                r"8 \in D",
                "El elemento es 8, no el conjunto {8}",
            ),
            (
                r"8 \in \{6,\,8,\,10,\,12\} = \text{verdadero}",
                r"8 \in D \quad \checkmark",
                "La pertenencia no se escribe con igual",
            ),
            (
                r"D \in 8",
                r"8 \in D",
                "El elemento va a la izquierda del símbolo",
            ),
        ]

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)

        filas = VGroup()
        for mal, bien, razon in errores:
            f_mal  = MathTex(mal,  font_size=26, color=ROJO)
            flecha = Text("→", font_size=24, color=GRIS)
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
            "x ∈ A : x cumple el criterio de A.\n"
            "x ∉ A : x no cumple el criterio de A.\n"
            "El elemento va siempre a la izquierda del símbolo.",
            font_size=30, color=WHITE, weight=BOLD, line_spacing=1.4,
        ).move_to(ORIGIN + UP * 0.4)

        siguiente = Text(
            "Siguiente: 2.1 · Unión de conjuntos  →",
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
    print("Renderiza con: manim -pql video_1_4_pertenencia.py Pertenencia")
