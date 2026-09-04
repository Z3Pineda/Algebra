"""
Video — Introducción al curso de Álgebra
Ingeniería Mecánica Administrativa
Manim Community v0.18+

Secciones:
  1. (~40s) Pregunta detonadora — contenedor y piezas
  2. (~45s) Datos que cambian — panel animado
  3. (~75s) Cinco unidades del curso — tarjetas
  4. (~25s) Cierre — llamada a la acción

Renderizar (prueba):
    manim -pql video_intro_curso.py IntroCurso

Sincronizacion: python sync_timeline.py  →  section_starts.json
"""

from __future__ import annotations

import json
from pathlib import Path

import numpy as np
from manim import *

SYNC_FILE = Path(__file__).resolve().parent / "section_starts.json"


def cargar_section_starts() -> list[float]:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return [float(x) for x in data["section_starts"]]
    return [0.0, 23.72, 48.33, 98.32]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 113.50

# ── Paleta ────────────────────────────────────────────────────────
AZUL        = "#1d4ed8"
AZUL_CLARO  = "#3b82f6"
AZUL_OSCURO = "#1e3a8a"
NARANJA     = "#f97316"
NARANJA_OSC = "#c2410c"
GRIS        = "#64748b"
GRIS_CLARO  = "#94a3b8"
VERDE       = "#22c55e"
ROJO        = "#ef4444"
AMARILLO    = "#facc15"
VIOLETA     = "#7c3aed"
FONDO       = "#0f172a"


# ══════════════════════════════════════════════════════════════════
# HELPERS DE ICONOS
# ══════════════════════════════════════════════════════════════════

def engranaje(radio=0.5, dientes=14, color=NARANJA) -> VGroup:
    cuerpo  = Circle(radius=radio * 0.62, color=color,
                     fill_color=color, fill_opacity=1, stroke_width=0)
    agujero = Circle(radius=radio * 0.18, color=FONDO,
                     fill_color=FONDO, fill_opacity=1, stroke_width=0)
    grp = VGroup()
    for i in range(dientes):
        ang = i * TAU / dientes
        d = Rectangle(width=radio * 0.22, height=radio * 0.38,
                      color=color, fill_color=color,
                      fill_opacity=1, stroke_width=0)
        d.move_to(radio * 0.84 * np.array([np.cos(ang), np.sin(ang), 0]))
        d.rotate(ang + PI / 2)
        grp.add(d)
    return VGroup(grp, cuerpo, agujero)


def contenedor_rect(ancho=2.4, alto=2.0, color=AZUL_CLARO) -> VGroup:
    """Rectángulo abierto por arriba (U-shape)."""
    fondo  = Line(LEFT * ancho / 2, RIGHT * ancho / 2, color=color, stroke_width=4)
    lado_l = Line(LEFT * ancho / 2, LEFT * ancho / 2 + UP * alto,
                  color=color, stroke_width=4)
    lado_r = Line(RIGHT * ancho / 2, RIGHT * ancho / 2 + UP * alto,
                  color=color, stroke_width=4)
    return VGroup(fondo, lado_l, lado_r)


def pieza_cuadrada(lado=0.28, color=AZUL_OSCURO) -> VGroup:
    return Square(side_length=lado, color=color,
                  fill_color=color, fill_opacity=1, stroke_width=0)


def pieza_circular(radio=0.15, color=GRIS_CLARO) -> VGroup:
    return Circle(radius=radio, color=color,
                  fill_color=color, fill_opacity=1, stroke_width=0)


def tarjeta_unidad(titulo, subtitulo, icono_mob, color, ancho=2.0, alto=2.85) -> VGroup:
    fondo = RoundedRectangle(
        corner_radius=0.18, width=ancho, height=alto,
        color=color, stroke_width=3,
        fill_color=color, fill_opacity=0.12,
    )
    icono = icono_mob.copy().scale(0.78)
    tit_size = 16 if "\n" in titulo else 18
    tit = Text(
        titulo, font_size=tit_size, color=color, weight=BOLD, line_spacing=0.92,
    )
    sub = Text(subtitulo, font_size=13, color=GRIS_CLARO, line_spacing=1.05)
    contenido = VGroup(icono, tit, sub).arrange(DOWN, buff=0.26)
    contenido.move_to(fondo.get_center() + DOWN * 0.04)
    return VGroup(fondo, contenido)


def rejilla_piezas(
    cont: VGroup, cont_ancho: float, cols: int, filas: int,
    lado: float, color=AZUL_OSCURO,
) -> VGroup:
    base = cont[0].get_center()
    margen_x = (cont_ancho - cols * lado - (cols - 1) * 0.12) / 2
    margen_y = 0.30
    piezas = []
    for fila in range(filas):
        for col in range(cols):
            x = (
                base[0] - cont_ancho / 2 + margen_x
                + col * (lado + 0.12) + lado / 2
            )
            y = base[1] + margen_y + fila * (lado + 0.10) + lado / 2
            piezas.append(pieza_cuadrada(lado, color).move_to([x, y, 0]))
    return VGroup(*piezas)


# ══════════════════════════════════════════════════════════════════
class IntroCurso(Scene):
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
        self._seccion_1_pregunta()
        self._seccion_2_datos()
        self._seccion_3_unidades()
        self._seccion_4_cierre()

    # ─────────────────────────────────────────────────────────────
    # SECCIÓN 1 — Pregunta detonadora (~40 s)
    # ─────────────────────────────────────────────────────────────
    def _seccion_1_pregunta(self):
        # Título del curso
        titulo_linea1 = Text("Álgebra", font_size=64,
                             color=AZUL_CLARO, weight=BOLD)
        titulo_linea2 = Text("Ingeniería Mecánica Administrativa",
                             font_size=28, color=GRIS_CLARO)
        titulo = VGroup(titulo_linea1, titulo_linea2).arrange(DOWN, buff=0.3)
        titulo.move_to(ORIGIN + UP * 0.5)

        self.play(
            LaggedStart(
                Write(titulo_linea1),
                FadeIn(titulo_linea2, shift=UP * 0.2),
                lag_ratio=0.5,
            ),
            run_time=1.4,
        )
        self._tick(1.4)
        self.wait(1.2)
        self._tick(1.2)
        self.play(titulo.animate.scale(0.55).to_edge(UP, buff=0.28), run_time=0.8)
        self._tick(0.8)
        self.titulo_curso = titulo

        eng = engranaje(radio=0.7, color=NARANJA).move_to(LEFT * 5.0 + DOWN * 0.4)
        self.play(FadeIn(eng, scale=0.5), run_time=0.6)
        self._tick(0.6)
        self.play(Rotate(eng, angle=TAU / 4, about_point=eng.get_center()),
                  run_time=1.2, rate_func=smooth)
        self._tick(1.2)

        cont_ancho, cont_alto = 2.8, 2.2
        cont = contenedor_rect(cont_ancho, cont_alto, AZUL_CLARO)
        cont.move_to(LEFT * 2.6 + DOWN * 0.45)
        self.play(Create(cont), run_time=0.9)
        self._tick(0.9)

        pregunta = Text("¿Cuántas piezas caben\nen el contenedor?",
                        font_size=30, color=WHITE, weight=BOLD,
                        line_spacing=1.2)
        pregunta.move_to(RIGHT * 3.2 + DOWN * 0.35)
        self.play(FadeIn(pregunta, shift=LEFT * 0.3), run_time=0.8)
        self._tick(0.8)
        self.wait(0.8)
        self._tick(0.8)

        cols, filas = 3, 2
        lado_pieza = 0.50
        piezas = rejilla_piezas(cont, cont_ancho, cols, filas, lado_pieza)
        piezas.shift(UP * 2.5)
        for p in piezas:
            self.add(p)

        self.play(
            LaggedStart(
                *[p.animate.shift(DOWN * 2.5) for p in piezas],
                lag_ratio=0.18,
            ),
            run_time=2.0,
        )
        self._tick(2.0)

        cuenta = MathTex(r"n = 6", font_size=38, color=VERDE)
        cuenta.next_to(cont, DOWN, buff=0.30)
        self.play(FadeIn(cuenta, scale=0.7), run_time=0.6)
        self._tick(0.6)

        self.seccion1_grp = VGroup(eng, cont, pregunta, cuenta, *piezas)
        fadeout = 0.7
        self._sync_wait(1, fadeout=fadeout)
        self.play(FadeOut(self.seccion1_grp), run_time=fadeout)
        self._tick(fadeout)

    # ─────────────────────────────────────────────────────────────
    # SECCIÓN 2 — Datos que cambian (~45 s)
    # ─────────────────────────────────────────────────────────────
    def _seccion_2_datos(self):
        if hasattr(self, "titulo_curso"):
            self.play(FadeOut(self.titulo_curso), run_time=0.4)
            self._tick(0.4)

        subtitulo = Text("Al cambiar los datos, cambia la respuesta",
                         font_size=28, color=AMARILLO, weight=BOLD)
        subtitulo.to_edge(UP, buff=0.55)
        self.play(FadeIn(subtitulo, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)

        # Panel de parámetros
        panel = RoundedRectangle(
            corner_radius=0.15, width=4.0, height=3.2,
            color=GRIS, stroke_width=2,
            fill_color=FONDO, fill_opacity=0.8,
        ).to_edge(LEFT, buff=0.5).shift(DOWN * 0.2)

        lbl_largo  = Text("Largo",    font_size=20, color=GRIS_CLARO)
        lbl_ancho  = Text("Ancho",    font_size=20, color=GRIS_CLARO)
        lbl_diam   = Text("Pieza Ø",  font_size=20, color=GRIS_CLARO)
        lbl_res    = Text("Resultado",font_size=20, color=VERDE)

        val_largo = DecimalNumber(3.0, num_decimal_places=1,
                                  font_size=28, color=AZUL_CLARO)
        val_ancho = DecimalNumber(2.0, num_decimal_places=1,
                                  font_size=28, color=AZUL_CLARO)
        val_diam  = DecimalNumber(0.5, num_decimal_places=1,
                                  font_size=28, color=NARANJA)
        val_res   = Integer(6, font_size=32, color=VERDE)

        filas_panel = VGroup(
            VGroup(lbl_largo, val_largo).arrange(RIGHT, buff=0.4),
            VGroup(lbl_ancho, val_ancho).arrange(RIGHT, buff=0.4),
            VGroup(lbl_diam,  val_diam ).arrange(RIGHT, buff=0.4),
            VGroup(lbl_res,   val_res  ).arrange(RIGHT, buff=0.4),
        ).arrange(DOWN, buff=0.38, aligned_edge=LEFT)
        filas_panel.move_to(panel.get_center())

        self.play(FadeIn(panel), FadeIn(filas_panel), run_time=0.8)
        self._tick(0.8)

        cont_ancho, cont_alto = 3.0, 2.4
        cont_pos = RIGHT * 3.1 + DOWN * 0.15
        cont = contenedor_rect(cont_ancho, cont_alto, AZUL_CLARO).move_to(cont_pos)
        piezas_v = rejilla_piezas(cont, cont_ancho, 3, 2, 0.42)

        self.play(Create(cont), FadeIn(piezas_v), run_time=0.8)
        self._tick(0.8)

        # Cinco escenarios
        escenarios = [
            # (largo, ancho, diám, resultado, nueva_forma_contenedor)
            (4.0, 2.0, 0.5,  8,  (3.6, 2.4)),
            (3.0, 3.0, 0.5, 12,  (3.0, 3.0)),
            (3.0, 2.0, 1.0,  2,  (3.0, 2.4)),
            (5.0, 2.0, 0.5, 10,  (4.2, 2.4)),
            (3.0, 2.0, 0.5,  6,  (3.0, 2.4)),
        ]

        for largo, ancho, diam, res, (c_ancho, c_alto) in escenarios:
            nuevo_cont = contenedor_rect(c_ancho, c_alto, AZUL_CLARO).move_to(cont_pos)

            self.play(
                ChangeDecimalToValue(val_largo, largo),
                ChangeDecimalToValue(val_ancho, ancho),
                ChangeDecimalToValue(val_diam,  diam),
                ChangeDecimalToValue(val_res,   res),
                Transform(cont, nuevo_cont),
                run_time=1.1,
                rate_func=smooth,
            )
            self._tick(1.1)
            self.wait(0.5)
            self._tick(0.5)

        fadeout = 0.7
        self._sync_wait(2, fadeout=fadeout)
        self.play(FadeOut(VGroup(subtitulo, panel, filas_panel, cont, piezas_v)),
                  run_time=fadeout)
        self._tick(fadeout)

    # ─────────────────────────────────────────────────────────────
    # SECCIÓN 3 — Cinco unidades (~75 s)
    # ─────────────────────────────────────────────────────────────
    def _seccion_3_unidades(self):
        puente = Text(
            "Para resolverlo necesitas\nherramientas de todo el curso…",
            font_size=34, color=WHITE, weight=BOLD, line_spacing=1.3,
        ).move_to(ORIGIN)

        self.play(Write(puente), run_time=1.2)
        self._tick(1.2)
        self.wait(1.5)
        self._tick(1.5)
        self.play(puente.animate.scale(0.52).to_edge(UP, buff=0.62), run_time=0.7)
        self._tick(0.7)

        # ── Ícono 1: Conjuntos — diagrama de Venn simplificado
        circ_a = Circle(radius=0.38, color=AZUL_CLARO, stroke_width=2,
                        fill_color=AZUL_CLARO, fill_opacity=0.2)
        circ_b = Circle(radius=0.38, color=VERDE, stroke_width=2,
                        fill_color=VERDE, fill_opacity=0.2)
        circ_a.shift(LEFT * 0.22)
        circ_b.shift(RIGHT * 0.22)
        icono_conj = VGroup(circ_a, circ_b).scale(0.9)

        # ── Ícono 2: Números Reales — recta numérica
        recta = NumberLine(
            x_range=[-1, 1, 1], length=1.4,
            include_numbers=False, color=AZUL_CLARO, stroke_width=3,
        )
        puntos_recta = VGroup(*[
            Dot(recta.n2p(x), radius=0.07, color=AZUL_CLARO)
            for x in [-0.5, 0, 0.5]
        ])
        icono_reales = VGroup(recta, puntos_recta)

        # ── Ícono 3: Expresiones — fórmula
        icono_expr = MathTex(r"x^2 + 3x", font_size=30, color=NARANJA)

        # ── Ícono 4: Ecuaciones — balanza
        base_bal   = Line(LEFT * 0.6, RIGHT * 0.6, color=AMARILLO, stroke_width=3)
        soporte    = Line(ORIGIN, UP * 0.4, color=AMARILLO, stroke_width=3)
        plato_izq  = Line(LEFT * 0.55 + UP * 0.4,
                          LEFT * 0.15 + UP * 0.55, color=AMARILLO, stroke_width=2)
        plato_der  = Line(RIGHT * 0.15 + UP * 0.55,
                          RIGHT * 0.55 + UP * 0.4, color=AMARILLO, stroke_width=2)
        lbl_bal    = MathTex(r"2x = 10", font_size=20, color=AMARILLO)
        lbl_bal.next_to(base_bal, DOWN, buff=0.08)
        icono_ecua = VGroup(base_bal, soporte, plato_izq, plato_der, lbl_bal).scale(0.82)

        # ── Ícono 5: Valor Absoluto — gráfica V
        ejes_v = VGroup(
            Line(DOWN * 0.4, UP * 0.6, color=GRIS, stroke_width=2),
            Line(LEFT * 0.65, RIGHT * 0.65, color=GRIS, stroke_width=2),
        )
        graf_v = VMobject(color=VIOLETA, stroke_width=3)
        graf_v.set_points_as_corners([
            LEFT * 0.5 + UP * 0.5,
            ORIGIN + DOWN * 0.1,
            RIGHT * 0.5 + UP * 0.5,
        ])
        icono_vabs = VGroup(ejes_v, graf_v)

        # Datos de cada tarjeta
        unidades = [
            ("Conjuntos",        "Clasificar piezas\naceptables",       icono_conj,  AZUL_CLARO),
            ("Números\nReales",   "Ubicar dimensiones\nen la recta",     icono_reales, VERDE),
            ("Expresiones",      "Simplificar fórmulas\nde volumen",    icono_expr,  NARANJA),
            ("Ecuaciones",       "Calcular cuántas\npiezas caben",      icono_ecua,  AMARILLO),
            ("Valor\nAbsoluto",   "Verificar tolerancias\nde fabricación",icono_vabs, VIOLETA),
        ]

        tarjetas = VGroup(*[
            tarjeta_unidad(tit, sub, ico, col, ancho=1.88, alto=2.9)
            for tit, sub, ico, col in unidades
        ]).arrange(RIGHT, buff=0.22).move_to(DOWN * 0.45)

        encabezado_tarj = Text(
            "5 unidades · un solo objetivo: decidir con precisión",
            font_size=20, color=GRIS_CLARO,
        ).next_to(tarjetas, UP, buff=0.32)

        self.play(FadeIn(encabezado_tarj, shift=DOWN * 0.1), run_time=0.6)
        self._tick(0.6)
        self.play(
            LaggedStart(
                *[FadeIn(t, shift=UP * 0.3, scale=0.85) for t in tarjetas],
                lag_ratio=0.22,
            ),
            run_time=2.2,
        )
        self._tick(2.2)

        # Destacar cada tarjeta con descripción breve
        descripciones = [
            "¿Qué piezas cumplen el criterio?",
            "¿En qué punto de la recta está esa medida?",
            "¿Cómo simplifico la fórmula del volumen?",
            "¿Cuántas piezas caben exactamente?",
            "¿La pieza está dentro de la tolerancia?",
        ]

        for tarjeta, desc in zip(tarjetas, descripciones):
            desc_txt = Text(desc, font_size=19, color=WHITE, slant=ITALIC)
            desc_txt.to_edge(DOWN, buff=0.5)
            marco = SurroundingRectangle(
                tarjeta, buff=0.08, color=WHITE,
                corner_radius=0.18, stroke_width=2,
            )
            self.play(Create(marco), FadeIn(desc_txt), run_time=0.5)
            self._tick(0.5)
            self.wait(1.1)
            self._tick(1.1)
            self.play(FadeOut(marco), FadeOut(desc_txt), run_time=0.35)
            self._tick(0.35)

        fadeout = 0.7
        self._sync_wait(3, fadeout=fadeout)
        self.play(FadeOut(VGroup(puente, encabezado_tarj, tarjetas)), run_time=fadeout)
        self._tick(fadeout)

    # ─────────────────────────────────────────────────────────────
    # SECCIÓN 4 — Cierre (~25 s)
    # ─────────────────────────────────────────────────────────────
    def _seccion_4_cierre(self):
        frase1 = Text(
            "Esto es lo que podrás hacer",
            font_size=36, color=WHITE, weight=BOLD,
        ).move_to(ORIGIN + UP * 1.2)

        frase2 = Text(
            "al final del semestre",
            font_size=36, color=AMARILLO, weight=BOLD,
        ).next_to(frase1, DOWN, buff=0.2)

        self.play(
            LaggedStart(
                FadeIn(frase1, shift=DOWN * 0.2),
                FadeIn(frase2, shift=DOWN * 0.2),
                lag_ratio=0.4,
            ),
            run_time=1.0,
        )
        self._tick(1.0)
        self.wait(0.8)
        self._tick(0.8)

        # Cuatro verbos
        verbos_data = [
            ("Modelar",    AZUL_CLARO),
            ("Calcular",   VERDE),
            ("Verificar",  NARANJA),
            ("Decidir",    AMARILLO),
        ]

        verbos = VGroup(*[
            Text(v, font_size=32, color=c, weight=BOLD)
            for v, c in verbos_data
        ]).arrange(RIGHT, buff=0.7).move_to(ORIGIN + DOWN * 0.1)

        separadores = VGroup(*[
            Text("·", font_size=32, color=GRIS).move_to(
                (verbos[i].get_right() + verbos[i + 1].get_left()) / 2
            )
            for i in range(len(verbos) - 1)
        ])

        self.play(
            LaggedStart(
                *[FadeIn(v, shift=UP * 0.3) for v in verbos],
                lag_ratio=0.2,
            ),
            run_time=1.0,
        )
        self._tick(1.0)
        self.play(FadeIn(separadores), run_time=0.4)
        self._tick(0.4)

        # Fila de mini-íconos
        mini_iconos = VGroup(
            engranaje(radio=0.25, color=NARANJA),
            pieza_cuadrada(0.28, AZUL_OSCURO),
            pieza_circular(0.16, GRIS_CLARO),
            engranaje(radio=0.20, dientes=10, color=VERDE),
            pieza_cuadrada(0.28, VIOLETA),
        ).arrange(RIGHT, buff=0.4).next_to(verbos, DOWN, buff=0.7)

        self.play(
            LaggedStart(*[FadeIn(ic, scale=0.4) for ic in mini_iconos],
                        lag_ratio=0.15),
            run_time=0.9,
        )
        self._tick(0.9)

        marco = SurroundingRectangle(
            VGroup(frase1, frase2, verbos, mini_iconos),
            color=AZUL, buff=0.4, corner_radius=0.2, stroke_width=3,
        )
        self.play(Create(marco), run_time=0.8)
        self._tick(0.8)
        self.wait(3.0)
        self._tick(3.0)

        fadeout = 1.4
        fin_audio = cargar_fin_audio()
        restante = fin_audio - self._t - fadeout
        if restante > 0:
            self.wait(restante)
            self._tick(restante)

        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)


if __name__ == "__main__":
    print("Renderiza con: manim -pql video_intro_curso.py IntroCurso")
