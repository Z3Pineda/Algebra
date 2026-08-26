"""
Video — Tres formas de representar un conjunto
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Renderizar (prueba):
    manim -pql video_tres_formas.py TresFormas

Renderizar (final):
    manim -pqh video_tres_formas.py TresFormas

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
    return [0.0, 12.38, 32.57, 72.52, 97.12, 114.63]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 127.19

# ── Paleta ────────────────────────────────────────────────────────
AZUL        = "#1d4ed8"
AZUL_CLARO  = "#3b82f6"
AZUL_OSCURO = "#1e3a8a"
NARANJA     = "#f97316"
GRIS        = "#64748b"
VERDE       = "#22c55e"
ROJO        = "#ef4444"
AMARILLO    = "#facc15"
VIOLETA     = "#7c3aed"
FONDO       = "#0f172a"

ELEMENTOS   = ["2", "4", "6", "8", "10"]
RADIO_VENN  = 1.5
CENTRO_VENN = ORIGIN


def tarjeta_titulo(texto, color, ancho=4.5):
    rect = RoundedRectangle(
        corner_radius=0.12, width=ancho, height=0.7,
        color=color, stroke_width=2,
        fill_color=color, fill_opacity=0.15,
    )
    lbl = Text(texto, font_size=24, color=color, weight=BOLD).move_to(rect)
    return VGroup(rect, lbl)


# ══════════════════════════════════════════════════════════════════
class TresFormas(Scene):
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
        self._escena_extension()
        self._escena_comprension()
        self._escena_venn()
        self._escena_tres_juntas()

    def _escena_apertura(self):
        titulo = Text(
            "Tres formas de representar un conjunto",
            font_size=38, color=AZUL_CLARO, weight=BOLD,
        ).to_edge(UP, buff=0.6)

        conjunto = MathTex(
            r"A = \{2,\ 4,\ 6,\ 8,\ 10\}",
            font_size=54, color=AMARILLO,
        ).move_to(ORIGIN + UP * 0.3)

        subtitulo = Text(
            "El mismo conjunto — tres notaciones distintas.",
            font_size=26, color=GRIS,
        ).next_to(conjunto, DOWN, buff=0.6)

        tarjetas = VGroup(
            tarjeta_titulo("Extensión",    AZUL_CLARO),
            tarjeta_titulo("Comprensión",  VERDE),
            tarjeta_titulo("Venn",         NARANJA),
        ).arrange(RIGHT, buff=0.5).next_to(subtitulo, DOWN, buff=0.5)

        self.play(FadeIn(titulo, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(Write(conjunto), run_time=1.3)
        self._tick(1.3)
        self.play(FadeIn(subtitulo, shift=UP * 0.1), run_time=0.7)
        self._tick(0.7)
        self.play(
            LaggedStart(*[FadeIn(t, scale=0.85) for t in tarjetas],
                        lag_ratio=0.3),
            run_time=1.2,
        )
        self._tick(1.2)

        fadeout = 0.7
        self._sync_wait(1, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    def _escena_extension(self):
        encabezado = tarjeta_titulo("Extensión", AZUL_CLARO, ancho=5.0)
        encabezado.to_edge(UP, buff=0.5)

        desc = Text(
            "Listar todos los elementos entre llaves.",
            font_size=24, color=GRIS,
        ).next_to(encabezado, DOWN, buff=0.4)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.6)
        self._tick(0.6)
        self.play(FadeIn(desc), run_time=0.5)
        self._tick(0.5)
        self.wait(0.3)
        self._tick(0.3)

        lbl_a    = MathTex(r"A", r"=", font_size=52, color=AMARILLO)
        llave_ab = MathTex(r"\{", font_size=52, color=AZUL_CLARO)

        lbl_a.move_to(ORIGIN + UP * 0.3 + LEFT * 4.2)
        llave_ab.next_to(lbl_a, RIGHT, buff=0.15)

        self.play(Write(lbl_a), run_time=0.7)
        self._tick(0.7)
        self.play(Write(llave_ab), run_time=0.5)
        self._tick(0.5)

        elementos_tex = []
        cursor = llave_ab

        for i, num in enumerate(ELEMENTOS):
            if i < len(ELEMENTOS) - 1:
                elem = MathTex(rf"{num},\ ", font_size=52, color=AZUL_CLARO)
            else:
                elem = MathTex(rf"{num}", font_size=52, color=AZUL_CLARO)

            elem.next_to(cursor, RIGHT, buff=0.05)
            self.play(FadeIn(elem, shift=RIGHT * 0.2), run_time=0.55)
            self._tick(0.55)
            self.play(elem.animate.set_color(WHITE), run_time=0.2)
            self._tick(0.2)
            self.play(elem.animate.set_color(AZUL_CLARO), run_time=0.2)
            self._tick(0.2)

            elementos_tex.append(elem)
            cursor = elem

        llave_ci = MathTex(r"\}", font_size=52, color=AZUL_CLARO)
        llave_ci.next_to(cursor, RIGHT, buff=0.05)
        self.play(Write(llave_ci), run_time=0.4)
        self._tick(0.4)

        nota1 = Text("✓  Sin repetición", font_size=22, color=VERDE)
        nota2 = Text("✓  El orden no importa", font_size=22, color=VERDE)
        notas = VGroup(nota1, nota2).arrange(DOWN, buff=0.2, aligned_edge=LEFT)
        notas.next_to(llave_ci.get_right(), DOWN, buff=0.9).shift(LEFT * 1.5)

        self.play(
            LaggedStart(FadeIn(nota1), FadeIn(nota2), lag_ratio=0.4),
            run_time=0.9,
        )
        self._tick(0.9)

        self.ext_grp = VGroup(lbl_a, llave_ab, *elementos_tex, llave_ci)

        fadeout = 0.7
        self._sync_wait(2, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    def _escena_comprension(self):
        encabezado = tarjeta_titulo("Comprensión", VERDE, ancho=5.0)
        encabezado.to_edge(UP, buff=0.5)

        desc = Text(
            "Definir el conjunto mediante una condición.",
            font_size=24, color=GRIS,
        ).next_to(encabezado, DOWN, buff=0.4)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.6)
        self._tick(0.6)
        self.play(FadeIn(desc), run_time=0.5)
        self._tick(0.5)
        self.wait(0.3)
        self._tick(0.3)

        partes = [
            (r"A",              AMARILLO, "Nombre del conjunto"),
            (r"=",              WHITE,    ""),
            (r"\{",             VERDE,    "Abre llaves"),
            (r"x",              AMARILLO, "Variable genérica"),
            (r"\in",            GRIS,     "pertenece a"),
            (r"\mathbb{N}",     VERDE,    "Universo: números naturales"),
            (r"\mid",           GRIS,     "tal que"),
            (r"x\ \text{par}", NARANJA,  "Primera condición"),
            (r",",              GRIS,     ""),
            (r"x \leq 10",      NARANJA,  "Segunda condición"),
            (r"\}",             VERDE,    "Cierra llaves"),
        ]

        formula_grp = VGroup()

        for tex, color, _explic in partes:
            mob = MathTex(tex, font_size=44, color=color)
            if len(formula_grp) == 0:
                mob.move_to(ORIGIN + UP * 0.5 + LEFT * 5.0)
            else:
                mob.next_to(formula_grp[-1], RIGHT, buff=0.12)
            formula_grp.add(mob)

        for mob, (_, color, explic) in zip(formula_grp, partes):
            self.play(Write(mob), run_time=0.45)
            self._tick(0.45)

            if explic:
                lbl = Text(explic, font_size=18, color=color, slant=ITALIC)
                flecha = Arrow(
                    mob.get_bottom() + DOWN * 0.05,
                    mob.get_bottom() + DOWN * 0.6,
                    color=color, stroke_width=2, buff=0.05,
                )
                lbl.next_to(flecha, DOWN, buff=0.05)
                self.play(GrowArrow(flecha), FadeIn(lbl), run_time=0.4)
                self._tick(0.4)
                self.wait(0.5)
                self._tick(0.5)
                self.play(FadeOut(flecha), FadeOut(lbl), run_time=0.3)
                self._tick(0.3)

        resultado = MathTex(
            r"\Rightarrow\ \{2,\ 4,\ 6,\ 8,\ 10\}",
            font_size=38, color=AZUL_CLARO,
        ).next_to(formula_grp, DOWN, buff=0.7)

        self.play(FadeIn(resultado, shift=UP * 0.2), run_time=0.8)
        self._tick(0.8)

        self.comp_grp = VGroup(formula_grp, resultado)

        fadeout = 0.7
        self._sync_wait(3, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    def _escena_venn(self):
        encabezado = tarjeta_titulo("Diagrama de Venn", NARANJA, ancho=5.5)
        encabezado.to_edge(UP, buff=0.5)

        desc = Text(
            "Representación visual — cada elemento en su lugar.",
            font_size=24, color=GRIS,
        ).next_to(encabezado, DOWN, buff=0.4)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.6)
        self._tick(0.6)
        self.play(FadeIn(desc), run_time=0.5)
        self._tick(0.5)
        self.wait(0.3)
        self._tick(0.3)

        rect_u = Rectangle(
            width=7.0, height=4.5,
            color=GRIS, stroke_width=3,
            fill_color=FONDO, fill_opacity=1,
        ).move_to(CENTRO_VENN + DOWN * 0.85)

        lbl_u = Text("U", font_size=22, color=GRIS, weight=BOLD).move_to(
            rect_u.get_corner(UL) + RIGHT * 0.22 + DOWN * 0.18)

        self.play(Create(rect_u), FadeIn(lbl_u), run_time=0.9)
        self._tick(0.9)

        circ_a = Circle(
            radius=RADIO_VENN, color=NARANJA, stroke_width=3,
            fill_color=NARANJA, fill_opacity=0.12,
        ).move_to(rect_u.get_center())

        lbl_a = Text("A", font_size=26, color=NARANJA, weight=BOLD).move_to(
            circ_a.get_top() + DOWN * 0.38)

        self.play(DrawBorderThenFill(circ_a), FadeIn(lbl_a), run_time=0.9)
        self._tick(0.9)

        pos_elementos = [
            circ_a.get_center() + UP * 0.7 + LEFT * 0.8,
            circ_a.get_center() + UP * 0.7 + RIGHT * 0.8,
            circ_a.get_center() + DOWN * 0.1,
            circ_a.get_center() + DOWN * 0.9 + LEFT * 0.6,
            circ_a.get_center() + DOWN * 0.9 + RIGHT * 0.6,
        ]

        nums = []
        for num, pos in zip(ELEMENTOS, pos_elementos):
            n = Text(num, font_size=28, color=WHITE, weight=BOLD).move_to(pos)
            nums.append(n)
            self.play(FadeIn(n, scale=0.4), run_time=0.45)
            self._tick(0.45)

        card = MathTex(r"|A| = 5", font_size=32, color=AMARILLO).next_to(
            rect_u, DOWN, buff=0.3)
        self.play(FadeIn(card, shift=UP * 0.1), run_time=0.6)
        self._tick(0.6)

        self.venn_grp = VGroup(rect_u, lbl_u, circ_a, lbl_a, *nums, card)

        fadeout = 0.7
        self._sync_wait(4, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    def _escena_tres_juntas(self):
        titulo = Text(
            "El mismo conjunto — tres formas",
            font_size=32, color=WHITE, weight=BOLD,
        ).to_edge(UP, buff=0.5)

        tit_ext = tarjeta_titulo("Extensión", AZUL_CLARO, ancho=3.8)
        ext_formula = MathTex(
            r"A = \{2,\ 4,\ 6,\ 8,\ 10\}",
            font_size=26, color=AZUL_CLARO,
        )
        col_ext = VGroup(tit_ext, ext_formula).arrange(DOWN, buff=0.3)
        col_ext.move_to(LEFT * 4.2 + DOWN * 0.3)

        tit_comp = tarjeta_titulo("Comprensión", VERDE, ancho=3.8)
        comp_formula = MathTex(
            r"A = \{x \in \mathbb{N} \mid x\ \text{par},\ x \leq 10\}",
            font_size=22, color=VERDE,
        )
        col_comp = VGroup(tit_comp, comp_formula).arrange(DOWN, buff=0.3)
        col_comp.move_to(ORIGIN + DOWN * 0.3)

        tit_venn = tarjeta_titulo("Venn", NARANJA, ancho=3.8)

        rect_mini = Rectangle(
            width=3.0, height=2.2,
            color=GRIS, stroke_width=2,
            fill_color=FONDO, fill_opacity=1,
        )
        circ_mini = Circle(
            radius=0.82, color=NARANJA, stroke_width=2,
            fill_color=NARANJA, fill_opacity=0.15,
        ).move_to(rect_mini.get_center())
        lbl_u_mini = Text("U", font_size=14, color=GRIS, weight=BOLD).move_to(
            rect_mini.get_corner(UL) + RIGHT * 0.12 + DOWN * 0.10)
        lbl_a_mini = Text("A", font_size=16, color=NARANJA, weight=BOLD).move_to(
            circ_mini.get_top() + DOWN * 0.20)

        pos_mini = [
            circ_mini.get_center() + UP * 0.22 + LEFT * 0.35,
            circ_mini.get_center() + UP * 0.22 + RIGHT * 0.35,
            circ_mini.get_center() + DOWN * 0.05,
            circ_mini.get_center() + DOWN * 0.38 + LEFT * 0.3,
            circ_mini.get_center() + DOWN * 0.38 + RIGHT * 0.3,
        ]
        nums_mini = VGroup(*[
            Text(n, font_size=16, color=WHITE, weight=BOLD).move_to(p)
            for n, p in zip(ELEMENTOS, pos_mini)
        ])

        venn_mini = VGroup(rect_mini, circ_mini, lbl_u_mini, lbl_a_mini, nums_mini)
        col_venn  = VGroup(tit_venn, venn_mini).arrange(DOWN, buff=0.3)
        col_venn.move_to(RIGHT * 4.2 + DOWN * 0.3)

        linea1 = DashedLine(
            UP * 2.5, DOWN * 2.5, color=GRIS, stroke_width=1, dash_length=0.15,
        ).move_to(LEFT * 2.1)
        linea2 = DashedLine(
            UP * 2.5, DOWN * 2.5, color=GRIS, stroke_width=1, dash_length=0.15,
        ).move_to(RIGHT * 2.1)

        self.play(FadeIn(titulo, shift=DOWN * 0.2), run_time=0.6)
        self._tick(0.6)
        self.play(Create(linea1), Create(linea2), run_time=0.5)
        self._tick(0.5)

        self.play(
            LaggedStart(
                AnimationGroup(FadeIn(tit_ext), FadeIn(ext_formula, shift=UP * 0.1)),
                AnimationGroup(FadeIn(tit_comp), FadeIn(comp_formula, shift=UP * 0.1)),
                AnimationGroup(
                    FadeIn(tit_venn),
                    DrawBorderThenFill(rect_mini),
                    DrawBorderThenFill(circ_mini),
                    FadeIn(lbl_u_mini), FadeIn(lbl_a_mini),
                    FadeIn(nums_mini),
                ),
                lag_ratio=0.4,
            ),
            run_time=2.0,
        )
        self._tick(2.0)
        self.wait(1.0)
        self._tick(1.0)

        self._sync_wait(5)

        marco_ext  = SurroundingRectangle(ext_formula,  color=AZUL_CLARO,
                                          buff=0.15, corner_radius=0.08, stroke_width=2)
        marco_comp = SurroundingRectangle(comp_formula, color=VERDE,
                                          buff=0.15, corner_radius=0.08, stroke_width=2)
        marco_venn = SurroundingRectangle(circ_mini,    color=NARANJA,
                                          buff=0.15, corner_radius=0.08, stroke_width=2)

        conclusion = Text(
            "Mismos elementos — notaciones equivalentes.",
            font_size=23, color=AMARILLO, weight=BOLD,
        ).to_edge(DOWN, buff=0.5)

        self.play(
            Create(marco_ext),
            Create(marco_comp),
            Create(marco_venn),
            run_time=0.9,
        )
        self._tick(0.9)
        self.play(FadeIn(conclusion, shift=UP * 0.1), run_time=0.7)
        self._tick(0.7)
        self.wait(3.0)
        self._tick(3.0)

        fadeout = 1.2
        fin_audio = cargar_fin_audio()
        restante = fin_audio - self._t - fadeout
        if restante > 0:
            self.wait(restante)
            self._tick(restante)

        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)


if __name__ == "__main__":
    print("Renderiza con: manim -pql video_tres_formas.py TresFormas")
