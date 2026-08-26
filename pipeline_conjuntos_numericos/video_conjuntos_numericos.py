"""
Video — Conjuntos numéricos: ℕ ℤ ℚ ℝ
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Renderizar (prueba):
    manim -pql video_conjuntos_numericos.py ConjuntosNumericos

Renderizar (final):
    manim -pqh video_conjuntos_numericos.py ConjuntosNumericos

Sincronizacion: python sync_timeline.py  →  section_starts.json
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
    return [0.0, 13.27, 33.10, 60.21, 96.47, 136.41, 156.79]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 178.60

# ── Paleta ────────────────────────────────────────────────────────
AZUL        = "#1d4ed8"
AZUL_CLARO  = "#3b82f6"
NARANJA     = "#f97316"
GRIS        = "#64748b"
VERDE       = "#22c55e"
ROJO        = "#ef4444"
AMARILLO    = "#facc15"
VIOLETA     = "#7c3aed"
FONDO       = "#0f172a"

COLOR_N = VERDE
COLOR_Z = AZUL_CLARO
COLOR_Q = NARANJA
COLOR_R = AMARILLO


def fila_resumen(y: float, sym: str, color: str, nombre: str, contiene: str, ing: str) -> VGroup:
    sym_mob = MathTex(sym, font_size=28, color=color)
    nom_mob = Text(nombre, font_size=20, color=color, weight=BOLD)
    cont_mob = Text(contiene, font_size=18, color=WHITE)
    ing_mob = Text(ing, font_size=17, color=GRIS, slant=ITALIC)
    sym_mob.move_to(LEFT * 5.15 + UP * y)
    nom_mob.move_to(LEFT * 3.55 + UP * y)
    cont_mob.move_to(LEFT * 0.35 + UP * y)
    ing_mob.move_to(RIGHT * 3.35 + UP * y)
    return VGroup(sym_mob, nom_mob, cont_mob, ing_mob)


# ══════════════════════════════════════════════════════════════════
class ConjuntosNumericos(Scene):
    section_starts: list[float]
    _t: float

    def setup(self) -> None:
        self.section_starts = cargar_section_starts()
        self._t = 0.0

    def _tick(self, seconds: float) -> None:
        self._t += seconds

    def _sync_wait(self, next_section: int, fadeout: float = 0.0) -> None:
        if next_section >= len(self.section_starts):
            return
        remaining = self.section_starts[next_section] - self._t - fadeout
        if remaining > 0:
            self.wait(remaining)
            self._tick(remaining)

    def construct(self):
        self.camera.background_color = FONDO
        self._escena_apertura()
        self._escena_naturales()
        self._escena_enteros()
        self._escena_racionales()
        self._escena_reales()
        self._escena_contencion()
        self._escena_cierre()

    def _escena_apertura(self):
        titulo = Text(
            "Conjuntos numéricos",
            font_size=48, color=WHITE, weight=BOLD,
        ).to_edge(UP, buff=0.6)

        simbolos = VGroup(
            MathTex(r"\mathbb{N}", font_size=72, color=COLOR_N),
            MathTex(r"\mathbb{Z}", font_size=72, color=COLOR_Z),
            MathTex(r"\mathbb{Q}", font_size=72, color=COLOR_Q),
            MathTex(r"\mathbb{R}", font_size=72, color=COLOR_R),
        ).arrange(RIGHT, buff=1.4).move_to(ORIGIN + UP * 0.2)

        nombres = VGroup(
            Text("Naturales",   font_size=22, color=COLOR_N),
            Text("Enteros",     font_size=22, color=COLOR_Z),
            Text("Racionales",  font_size=22, color=COLOR_Q),
            Text("Reales",      font_size=22, color=COLOR_R),
        )
        for nombre, simbolo in zip(nombres, simbolos):
            nombre.next_to(simbolo, DOWN, buff=0.25)

        subtitulo = Text(
            "Cuatro conjuntos. Cada uno contiene al anterior.",
            font_size=24, color=GRIS,
        ).to_edge(DOWN, buff=0.7)

        self.play(FadeIn(titulo, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(
            LaggedStart(*[Write(s) for s in simbolos], lag_ratio=0.25),
            run_time=1.6,
        )
        self._tick(1.6)
        self.play(
            LaggedStart(*[FadeIn(n, shift=UP * 0.1) for n in nombres], lag_ratio=0.2),
            run_time=1.0,
        )
        self._tick(1.0)
        self.play(FadeIn(subtitulo, shift=UP * 0.1), run_time=0.7)
        self._tick(0.7)

        fadeout = 0.7
        self._sync_wait(1, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    def _escena_naturales(self):
        sym = MathTex(r"\mathbb{N}", font_size=80, color=COLOR_N).to_edge(UP, buff=0.5)
        nombre = Text("Números naturales", font_size=32,
                      color=COLOR_N, weight=BOLD).next_to(sym, RIGHT, buff=0.5)

        elementos = MathTex(
            r"0,\ 1,\ 2,\ 3,\ 4,\ 5,\ \ldots",
            font_size=46, color=WHITE,
        ).move_to(ORIGIN + UP * 0.5)

        regla = Text(
            "Contar. Sin negativos. Sin fracciones.",
            font_size=26, color=GRIS,
        ).next_to(elementos, DOWN, buff=0.5)

        ing_marco = RoundedRectangle(
            corner_radius=0.15, width=8.0, height=1.1,
            color=COLOR_N, stroke_width=2,
            fill_color=COLOR_N, fill_opacity=0.10,
        ).to_edge(DOWN, buff=0.6)
        ing_txt = Text(
            "🔧  Número de tornillos en un ensamble:  0, 1, 2, 3, ...",
            font_size=24, color=COLOR_N,
        ).move_to(ing_marco)

        self.play(Write(sym), FadeIn(nombre), run_time=0.8)
        self._tick(0.8)
        self.play(Write(elementos), run_time=1.2)
        self._tick(1.2)
        self.play(FadeIn(regla, shift=UP * 0.1), run_time=0.6)
        self._tick(0.6)
        self.play(DrawBorderThenFill(ing_marco), FadeIn(ing_txt), run_time=0.8)
        self._tick(0.8)

        fadeout = 0.7
        self._sync_wait(2, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    def _escena_enteros(self):
        sym    = MathTex(r"\mathbb{Z}", font_size=80, color=COLOR_Z).to_edge(UP, buff=0.5)
        nombre = Text("Números enteros", font_size=32,
                      color=COLOR_Z, weight=BOLD).next_to(sym, RIGHT, buff=0.5)

        recta = NumberLine(
            x_range=[-4, 4, 1],
            length=9,
            color=GRIS,
            include_numbers=True,
            numbers_with_elongated_ticks=list(range(-4, 5)),
            font_size=28,
        ).move_to(ORIGIN + UP * 0.3)

        puntos = VGroup(*[
            Dot(recta.n2p(n), color=COLOR_Z, radius=0.12)
            for n in range(-4, 5)
        ])

        flecha_neg = Arrow(recta.n2p(-1.5), recta.n2p(-3.5),
                           color=ROJO, stroke_width=2, buff=0.1).shift(UP * 0.5)
        flecha_pos = Arrow(recta.n2p(1.5), recta.n2p(3.5),
                           color=VERDE, stroke_width=2, buff=0.1).shift(UP * 0.5)
        lbl_neg = Text("negativos", font_size=20, color=ROJO).next_to(flecha_neg, UP, buff=0.1)
        lbl_pos = Text("positivos", font_size=20, color=VERDE).next_to(flecha_pos, UP, buff=0.1)

        contencion = MathTex(
            r"\mathbb{N} \subset \mathbb{Z}",
            font_size=34, color=GRIS,
        ).next_to(recta, DOWN, buff=0.5)

        ing_marco = RoundedRectangle(
            corner_radius=0.15, width=8.5, height=1.1,
            color=COLOR_Z, stroke_width=2,
            fill_color=COLOR_Z, fill_opacity=0.10,
        ).to_edge(DOWN, buff=0.4)
        ing_txt = Text(
            "🌡  Temperatura de operación en °C:  −40, −10, 0, 25, 300",
            font_size=22, color=COLOR_Z,
        ).move_to(ing_marco)

        self.play(Write(sym), FadeIn(nombre), run_time=0.8)
        self._tick(0.8)
        self.play(Create(recta), run_time=1.0)
        self._tick(1.0)
        self.play(LaggedStart(*[FadeIn(p, scale=0.4) for p in puntos],
                              lag_ratio=0.1), run_time=1.2)
        self._tick(1.2)
        self.play(
            GrowArrow(flecha_neg), FadeIn(lbl_neg),
            GrowArrow(flecha_pos), FadeIn(lbl_pos),
            run_time=0.8,
        )
        self._tick(0.8)
        self.play(FadeIn(contencion, shift=UP * 0.1), run_time=0.6)
        self._tick(0.6)
        self.play(DrawBorderThenFill(ing_marco), FadeIn(ing_txt), run_time=0.8)
        self._tick(0.8)

        fadeout = 0.7
        self._sync_wait(3, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    def _escena_racionales(self):
        sym    = MathTex(r"\mathbb{Q}", font_size=80, color=COLOR_Q).to_edge(UP, buff=0.5)
        nombre = Text("Números racionales", font_size=32,
                      color=COLOR_Q, weight=BOLD).next_to(sym, RIGHT, buff=0.5)

        definicion = Text(
            "Todo número que puede escribirse como fracción p/q\ncon p, q enteros y q ≠ 0.",
            font_size=24, color=GRIS, line_spacing=1.3,
        ).move_to(ORIGIN + UP * 1.0)

        ejemplos = VGroup(
            MathTex(r"\frac{1}{2} = 0.5",    font_size=36, color=COLOR_Q),
            MathTex(r"\frac{3}{4} = 0.75",   font_size=36, color=COLOR_Q),
            MathTex(r"\frac{1}{3} = 0.333\ldots", font_size=36, color=COLOR_Q),
            MathTex(r"-\frac{5}{2} = -2.5",  font_size=36, color=COLOR_Q),
        ).arrange(RIGHT, buff=0.7).move_to(ORIGIN + DOWN * 0.1)

        contencion = MathTex(
            r"\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}",
            font_size=32, color=GRIS,
        ).next_to(ejemplos, DOWN, buff=0.45)

        ing_marco = RoundedRectangle(
            corner_radius=0.15, width=8.5, height=1.1,
            color=COLOR_Q, stroke_width=2,
            fill_color=COLOR_Q, fill_opacity=0.10,
        ).to_edge(DOWN, buff=0.4)
        ing_txt = Text(
            "⚙️  Relación de transmisión de engranajes:  3/2, 5/3, 7/4",
            font_size=22, color=COLOR_Q,
        ).move_to(ing_marco)

        self.play(Write(sym), FadeIn(nombre), run_time=0.8)
        self._tick(0.8)
        self.play(FadeIn(definicion, shift=UP * 0.1), run_time=0.7)
        self._tick(0.7)
        self.play(
            LaggedStart(*[FadeIn(e, scale=0.8) for e in ejemplos], lag_ratio=0.25),
            run_time=1.4,
        )
        self._tick(1.4)
        self.play(FadeIn(contencion, shift=UP * 0.1), run_time=0.6)
        self._tick(0.6)
        self.play(DrawBorderThenFill(ing_marco), FadeIn(ing_txt), run_time=0.8)
        self._tick(0.8)

        fadeout = 0.7
        self._sync_wait(4, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    def _escena_reales(self):
        sym    = MathTex(r"\mathbb{R}", font_size=80, color=COLOR_R).to_edge(UP, buff=0.5)
        nombre = Text("Números reales", font_size=32,
                      color=COLOR_R, weight=BOLD).next_to(sym, RIGHT, buff=0.5)

        definicion = Text(
            "Todos los racionales más los irracionales.\nCubren la recta numérica sin huecos.",
            font_size=24, color=GRIS, line_spacing=1.3,
        ).move_to(ORIGIN + UP * 0.9)

        recta_r = Line(LEFT * 4.5, RIGHT * 4.5, color=COLOR_R, stroke_width=5)
        recta_r.move_to(ORIGIN + UP * 0.1)
        lbl_menos_inf = MathTex(r"-\infty", font_size=28, color=GRIS).next_to(recta_r, LEFT, buff=0.2)
        lbl_mas_inf   = MathTex(r"+\infty", font_size=28, color=GRIS).next_to(recta_r, RIGHT, buff=0.2)

        irracionales = VGroup(
            MathTex(r"\sqrt{2} = 1.4142\ldots", font_size=28, color=COLOR_R),
            MathTex(r"\pi = 3.1415\ldots",      font_size=28, color=COLOR_R),
            MathTex(r"e = 2.7182\ldots",        font_size=28, color=COLOR_R),
        ).arrange(RIGHT, buff=0.6).next_to(recta_r, DOWN, buff=0.4)

        nota = Text(
            "Los irracionales no pueden escribirse como fracción exacta.",
            font_size=21, color=GRIS, slant=ITALIC,
        ).next_to(irracionales, DOWN, buff=0.25)

        contencion = MathTex(
            r"\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}",
            font_size=30, color=GRIS,
        ).next_to(nota, DOWN, buff=0.3)

        ing_marco = RoundedRectangle(
            corner_radius=0.15, width=8.5, height=1.1,
            color=COLOR_R, stroke_width=2,
            fill_color=COLOR_R, fill_opacity=0.10,
        ).to_edge(DOWN, buff=0.4)
        ing_txt = Text(
            "📏  Longitud de un eje de transmisión:  cualquier valor positivo en ℝ",
            font_size=21, color=COLOR_R,
        ).move_to(ing_marco)

        self.play(Write(sym), FadeIn(nombre), run_time=0.8)
        self._tick(0.8)
        self.play(FadeIn(definicion, shift=UP * 0.1), run_time=0.7)
        self._tick(0.7)
        self.play(Create(recta_r), FadeIn(lbl_menos_inf), FadeIn(lbl_mas_inf), run_time=0.9)
        self._tick(0.9)
        self.play(
            LaggedStart(*[FadeIn(i, scale=0.8) for i in irracionales], lag_ratio=0.3),
            run_time=1.1,
        )
        self._tick(1.1)
        self.play(FadeIn(nota), run_time=0.5)
        self._tick(0.5)
        self.play(FadeIn(contencion, shift=UP * 0.1), run_time=0.6)
        self._tick(0.6)
        self.play(DrawBorderThenFill(ing_marco), FadeIn(ing_txt), run_time=0.8)
        self._tick(0.8)

        fadeout = 0.7
        self._sync_wait(5, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    def _escena_contencion(self):
        encabezado = Text(
            "Cada conjunto contiene al anterior",
            font_size=30, color=WHITE, weight=BOLD,
        ).to_edge(UP, buff=0.5)

        datos = [
            (0.72, COLOR_N, r"\mathbb{N}",  "Naturales"),
            (1.32, COLOR_Z, r"\mathbb{Z}",  "Enteros"),
            (1.95, COLOR_Q, r"\mathbb{Q}",  "Racionales"),
            (2.58, COLOR_R, r"\mathbb{R}",  "Reales"),
        ]

        centro_circ = ORIGIN + UP * 0.05
        circulos = []
        for radio, color, _sym, _ in datos:
            c = Circle(
                radius=radio, color=color, stroke_width=3,
                fill_color=color, fill_opacity=0.07,
            ).move_to(centro_circ)
            circulos.append(c)

        etiquetas = []
        for (_radio, color, sym, _nombre), c in zip(datos, circulos):
            lbl = MathTex(sym, font_size=24, color=color)
            lbl.move_to(c.get_top() + DOWN * 0.28)
            etiquetas.append(lbl)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.6)
        self._tick(0.6)

        for c, lbl in zip(circulos, etiquetas):
            self.play(DrawBorderThenFill(c), FadeIn(lbl), run_time=0.7)
            self._tick(0.7)
            self.wait(0.4)
            self._tick(0.4)

        contencion = MathTex(
            r"\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}",
            font_size=30, color=WHITE,
        ).next_to(circulos[-1], DOWN, buff=0.42)

        self.play(Write(contencion), run_time=1.0)
        self._tick(1.0)
        self.wait(2.5)
        self._tick(2.5)

        fadeout = 0.7
        self._sync_wait(6, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    def _escena_cierre(self):
        encabezado = Text(
            "Resumen",
            font_size=34, color=WHITE, weight=BOLD,
        ).to_edge(UP, buff=0.5)

        filas = [
            (r"\mathbb{N}", COLOR_N, "Naturales",  "0, 1, 2, 3 …",        "Nº de tornillos"),
            (r"\mathbb{Z}", COLOR_Z, "Enteros",    "−2, −1, 0, 1, 2 …",   "Temperatura °C"),
            (r"\mathbb{Q}", COLOR_Q, "Racionales", "Fracciones exactas",   "Relación engranajes"),
            (r"\mathbb{R}", COLOR_R, "Reales",     "Todos + irracionales", "Longitud de un eje"),
        ]

        ys = [0.85, 0.15, -0.55, -1.25]
        tabla = VGroup(*[
            fila_resumen(y, sym, color, nombre, contiene, ing)
            for y, (sym, color, nombre, contiene, ing) in zip(ys, filas)
        ])

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.6)
        self._tick(0.6)
        self.play(
            LaggedStart(*[FadeIn(f, shift=RIGHT * 0.2) for f in tabla],
                        lag_ratio=0.3),
            run_time=1.6,
        )
        self._tick(1.6)
        self.wait(3.0)
        self._tick(3.0)

        fadeout = 1.0
        fin_audio = cargar_fin_audio()
        restante = fin_audio - self._t - fadeout
        if restante > 0:
            self.wait(restante)
            self._tick(restante)

        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)


if __name__ == "__main__":
    print("Renderiza con: manim -pql video_conjuntos_numericos.py ConjuntosNumericos")
