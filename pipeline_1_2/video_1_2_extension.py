"""
Video 1.2 — Cómo escribir un conjunto por extensión
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Duración aproximada: ~2:50 min

Renderizar (prueba):
    manim -pql video_1_2_extension.py Extension

Renderizar (final):
    manim -pqh video_1_2_extension.py Extension

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
    return [0.0, 15.882, 34.795, 74.684, 103.68]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 118.047

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


def caja_codigo(texto, color_borde=AZUL_CLARO, ancho=7.0, alto=1.1):
    rect = RoundedRectangle(
        corner_radius=0.15, width=ancho, height=alto,
        color=color_borde, stroke_width=3,
        fill_color=AZUL_OSCURO, fill_opacity=0.3,
    )
    lbl = MathTex(texto, color=WHITE, font_size=36).move_to(rect)
    return VGroup(rect, lbl)


def etiqueta(texto, color):
    rect = RoundedRectangle(
        corner_radius=0.1, width=3.2, height=0.55,
        color=color, fill_color=color, fill_opacity=0.2, stroke_width=2,
    )
    lbl = Text(texto, font_size=20, color=color, weight=BOLD).move_to(rect)
    return VGroup(rect, lbl)


# ═════════════════════════════════════════════════════════════════
class Extension(Scene):
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
        self._escena_reglas()
        self._escena_ejemplos_correctos()
        self._escena_errores_comunes()
        self._escena_cierre()

    # ──────────────────────────────────────────────────────────────
    # ESCENA 1 — Apertura
    # ──────────────────────────────────────────────────────────────
    def _escena_apertura(self):
        titulo = Text(
            "1.2 · Notación por extensión",
            font_size=38, color=AZUL_CLARO, weight=BOLD,
        ).to_edge(UP, buff=0.5)

        # Concepto central: llaves con elementos
        notacion = MathTex(
            r"A = \{", r"a_1", r",\, a_2", r",\, a_3", r",\, \ldots", r"\}",
            font_size=60, color=WHITE,
        ).move_to(ORIGIN + UP * 0.3)

        desc = Text(
            "Listar cada elemento explícitamente entre llaves.",
            font_size=26, color=GRIS,
        ).next_to(notacion, DOWN, buff=0.6)

        self.play(FadeIn(titulo, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(Write(notacion), run_time=1.6)
        self._tick(1.6)
        self.play(FadeIn(desc, shift=UP * 0.1), run_time=0.8)
        self._tick(0.8)
        self._sync_wait(1)
        self.play(FadeOut(VGroup(titulo, notacion, desc)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 2 — Las dos reglas
    # ──────────────────────────────────────────────────────────────
    def _escena_reglas(self):
        encabezado = Text(
            "Dos reglas de la notación por extensión",
            font_size=30, color=AZUL_CLARO,
        ).to_edge(UP, buff=0.5)

        # Regla 1
        r1_titulo = Text("Regla 1 — Sin repeticiones", font_size=26,
                         color=AMARILLO, weight=BOLD)
        r1_mal  = MathTex(r"\{1,\, 2,\, 2,\, 3\}", font_size=40, color=ROJO)
        r1_bien = MathTex(r"\{1,\, 2,\, 3\}",      font_size=40, color=VERDE)
        cruz    = Text("✗", font_size=36, color=ROJO).next_to(r1_mal, RIGHT, buff=0.3)
        check1  = Text("✓", font_size=36, color=VERDE).next_to(r1_bien, RIGHT, buff=0.3)
        r1_grp  = VGroup(r1_titulo,
                         VGroup(r1_mal, cruz).arrange(RIGHT, buff=0.2),
                         VGroup(r1_bien, check1).arrange(RIGHT, buff=0.2),
                         ).arrange(DOWN, buff=0.35, aligned_edge=LEFT)

        # Regla 2
        r2_titulo = Text("Regla 2 — El orden no importa", font_size=26,
                         color=AMARILLO, weight=BOLD)
        r2_a = MathTex(r"\{1,\, 2,\, 3\}", font_size=40, color=VERDE)
        igual = Text("=", font_size=36, color=GRIS)
        r2_b = MathTex(r"\{3,\, 1,\, 2\}", font_size=40, color=VERDE)
        r2_fila = VGroup(r2_a, igual, r2_b).arrange(RIGHT, buff=0.4)
        r2_grp  = VGroup(r2_titulo, r2_fila).arrange(DOWN, buff=0.35, aligned_edge=LEFT)

        todo = VGroup(r1_grp, r2_grp).arrange(DOWN, buff=0.7, aligned_edge=LEFT)
        todo.move_to(ORIGIN + DOWN * 0.1)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(FadeIn(r1_titulo), run_time=0.6)
        self._tick(0.6)
        self.play(
            FadeIn(VGroup(r1_mal, cruz), shift=RIGHT * 0.3),
            run_time=0.7,
        )
        self._tick(0.7)
        self.play(
            FadeIn(VGroup(r1_bien, check1), shift=RIGHT * 0.3),
            run_time=0.7,
        )
        self._tick(0.7)
        self.wait(0.8)
        self._tick(0.8)
        self.play(FadeIn(r2_titulo), run_time=0.6)
        self._tick(0.6)
        self.play(
            LaggedStart(
                FadeIn(r2_a), FadeIn(igual), FadeIn(r2_b),
                lag_ratio=0.3,
            ),
            run_time=1.0,
        )
        self._tick(1.0)
        self._sync_wait(2)
        self.play(FadeOut(VGroup(encabezado, todo)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 3 — Ejemplos correctos
    # ──────────────────────────────────────────────────────────────
    def _escena_ejemplos_correctos(self):
        encabezado = Text(
            "Ejemplos en ingeniería mecánica",
            font_size=30, color=VERDE,
        ).to_edge(UP, buff=0.5)

        datos = [
            (
                r"D = \{6,\, 8,\, 10,\, 12\} \text{ mm}",
                "Diámetros estándar de tornillos disponibles en almacén",
            ),
            (
                r"T = \{200,\, 250,\, 300\} \text{ °C}",
                "Temperaturas de operación de tres aleaciones",
            ),
            (
                r"N = \{1,\, 2,\, 3,\, 4,\, 5,\, 6\}",
                "Número de cilindros posibles en motores de la línea",
            ),
        ]

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)

        filas = VGroup()
        for formula, desc in datos:
            f  = MathTex(formula, font_size=34, color=WHITE)
            d  = Text(desc, font_size=19, color=GRIS, slant=ITALIC)
            fila = VGroup(f, d).arrange(DOWN, buff=0.15, aligned_edge=LEFT)
            marco = SurroundingRectangle(
                fila, color=VERDE, buff=0.2,
                corner_radius=0.12, stroke_width=2,
            )
            filas.add(VGroup(marco, fila))

        filas.arrange(DOWN, buff=0.4).move_to(ORIGIN + DOWN * 0.2)

        for bloque in filas:
            self.play(
                DrawBorderThenFill(bloque[0]),
                FadeIn(bloque[1], shift=RIGHT * 0.2),
                run_time=0.9,
            )
            self._tick(0.9)
            self.wait(1.2)
            self._tick(1.2)

        self._sync_wait(3)
        self.play(FadeOut(VGroup(encabezado, filas)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 4 — Errores comunes
    # ──────────────────────────────────────────────────────────────
    def _escena_errores_comunes(self):
        encabezado = Text(
            "Errores comunes",
            font_size=30, color=ROJO,
        ).to_edge(UP, buff=0.5)

        errores = [
            (
                r"\{6,\, 8,\, 8,\, 10\}",
                r"\{6,\, 8,\, 10\}",
                "Elemento repetido",
            ),
            (
                r"\{6,\, 8,\, 10,\}",
                r"\{6,\, 8,\, 10\}",
                "Coma al final",
            ),
            (
                r"(6,\, 8,\, 10)",
                r"\{6,\, 8,\, 10\}",
                "Paréntesis en lugar de llaves",
            ),
        ]

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)

        filas = VGroup()
        for mal, bien, razon in errores:
            f_mal  = MathTex(mal,  font_size=32, color=ROJO)
            flecha = Text("→", font_size=28, color=GRIS)
            f_bien = MathTex(bien, font_size=32, color=VERDE)
            r_txt  = Text(razon, font_size=19, color=GRIS, slant=ITALIC)
            fila   = VGroup(
                VGroup(f_mal, flecha, f_bien).arrange(RIGHT, buff=0.35),
                r_txt,
            ).arrange(DOWN, buff=0.1, aligned_edge=LEFT)
            filas.add(fila)

        filas.arrange(DOWN, buff=0.5).move_to(ORIGIN + DOWN * 0.1)

        for fila in filas:
            self.play(FadeIn(fila, shift=RIGHT * 0.3), run_time=0.8)
            self._tick(0.8)
            self.wait(1.1)
            self._tick(1.1)

        self._sync_wait(4)
        self.play(FadeOut(VGroup(encabezado, filas)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 5 — Cierre
    # ──────────────────────────────────────────────────────────────
    def _escena_cierre(self):
        definicion = Text(
            "Notación por extensión:\nlistar todos los elementos entre llaves,\nsin repetir, sin importar el orden.",
            font_size=32, color=WHITE, weight=BOLD, line_spacing=1.3,
        ).move_to(ORIGIN + UP * 0.4)

        siguiente = Text(
            "Siguiente: 1.3 · Notación por comprensión  →",
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
        # Relleno hasta fin del bloque 5 de audio
        fin_audio = cargar_fin_audio()
        restante = fin_audio - self._t - 1.0
        if restante > 0:
            self.wait(restante)
            self._tick(restante)
        self.play(FadeOut(VGroup(marco, definicion, siguiente)), run_time=1.0)


if __name__ == "__main__":
    print("Renderiza con: manim -pql video_1_2_extension.py Extension")
