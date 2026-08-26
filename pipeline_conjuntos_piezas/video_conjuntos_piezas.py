"""
Video — Conjuntos con piezas mecánicas
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Renderizar (prueba):
    manim -pql video_conjuntos_piezas.py ConjuntoPiezas

Renderizar (final):
    manim -pqh video_conjuntos_piezas.py ConjuntoPiezas

Sincronizacion: python sync_timeline.py  →  section_starts.json
"""

from __future__ import annotations

import json
from pathlib import Path

from manim import *
import numpy as np

SYNC_FILE = Path(__file__).resolve().parent / "section_starts.json"


def cargar_section_starts() -> list[float]:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return [float(x) for x in data["section_starts"]]
    return [0.0, 6.22, 14.81, 23.30, 30.72, 38.01, 47.93]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 55.77

# ── Paleta ────────────────────────────────────────────────────────
AZUL        = "#1d4ed8"
AZUL_CLARO  = "#3b82f6"
NARANJA     = "#f97316"
GRIS        = "#64748b"
VERDE       = "#22c55e"
ROJO        = "#ef4444"
AMARILLO    = "#facc15"
FONDO       = "#0f172a"


# ══════════════════════════════════════════════════════════════════
# ICONOS DE PIEZAS
# ══════════════════════════════════════════════════════════════════

def hacer_tornillo(color=GRIS, escala=1.0):
    cuerpo  = Rectangle(width=0.18, height=0.55, color=color,
                        fill_color=color, fill_opacity=1, stroke_width=0)
    cabeza  = RegularPolygon(n=6, color=color, fill_color=color,
                             fill_opacity=1, stroke_width=0).scale(0.18)
    cabeza.next_to(cuerpo, UP, buff=0)
    g = VGroup(cuerpo, cabeza)
    return g.scale(escala)


def hacer_engrane(color=NARANJA, escala=1.0, dientes=10):
    cuerpo  = Circle(radius=0.28, color=color,
                     fill_color=color, fill_opacity=1, stroke_width=0)
    agujero = Circle(radius=0.09, color=FONDO,
                     fill_color=FONDO, fill_opacity=1, stroke_width=0)
    diente_grp = VGroup()
    for i in range(dientes):
        ang = i * TAU / dientes
        d = Rectangle(width=0.09, height=0.14, color=color,
                      fill_color=color, fill_opacity=1, stroke_width=0)
        d.move_to(0.33 * np.array([np.cos(ang), np.sin(ang), 0]))
        d.rotate(ang + PI / 2)
        diente_grp.add(d)
    g = VGroup(diente_grp, cuerpo, agujero)
    return g.scale(escala)


def hacer_rodamiento(color=AZUL_CLARO, escala=1.0):
    ext  = Circle(radius=0.32, color=color, stroke_width=3,
                  fill_color=FONDO, fill_opacity=1)
    med  = Circle(radius=0.20, color=color, stroke_width=2,
                  fill_color=FONDO, fill_opacity=1)
    cent = Circle(radius=0.08, color=color,
                  fill_color=color, fill_opacity=1, stroke_width=0)
    g = VGroup(ext, med, cent)
    return g.scale(escala)


def hacer_piston(color=GRIS, escala=1.0):
    cabeza = Rectangle(width=0.45, height=0.18, color=color,
                       fill_color=color, fill_opacity=1, stroke_width=0)
    cuerpo = Rectangle(width=0.20, height=0.45, color=color,
                       fill_color=color, fill_opacity=1, stroke_width=0)
    cuerpo.next_to(cabeza, DOWN, buff=0)
    g = VGroup(cabeza, cuerpo)
    return g.scale(escala)


def hacer_valvula(color=ROJO, escala=1.0):
    tri  = Triangle(color=color, fill_color=color,
                    fill_opacity=1, stroke_width=0).scale(0.25).rotate(PI)
    tallo = Line(tri.get_bottom(), tri.get_bottom() + DOWN * 0.28,
                 color=color, stroke_width=4)
    g = VGroup(tri, tallo)
    return g.scale(escala)


def hacer_resorte(color=AMARILLO, escala=1.0, vueltas=5):
    puntos = []
    for i in range(vueltas * 2 + 1):
        x = 0.12 * (1 if i % 2 == 0 else -1)
        y = -i * 0.10
        puntos.append([x, y, 0])
    vm = VMobject(color=color, stroke_width=3)
    vm.set_points_as_corners(puntos)
    return vm.scale(escala)


# Posiciones dispersas en la mesa
POSICIONES_MESA = [
    LEFT * 4.0 + UP * 0.5,
    LEFT * 2.2 + DOWN * 0.8,
    LEFT * 0.5 + UP * 1.0,
    RIGHT * 1.5 + DOWN * 0.5,
    RIGHT * 3.2 + UP * 0.7,
    RIGHT * 4.5 + DOWN * 1.0,
]

# Posiciones dentro de la bolsa (conjunto A) — cuadrícula 2×2
POS_DENTRO = [
    LEFT * 0.80 + UP * 0.60,
    RIGHT * 0.80 + UP * 0.60,
    LEFT * 0.80 + DOWN * 0.60,
    RIGHT * 0.80 + DOWN * 0.60,
]


# ══════════════════════════════════════════════════════════════════
class ConjuntoPiezas(Scene):
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
        self._escena_1_mesa()
        self._escena_2_bolsa()
        self._escena_3_notacion()
        self._escena_4_pertenencia()
        self._escena_5_universo()
        self._escena_6_vacio()
        self._escena_7_cardinalidad()

    # ─────────────────────────────────────────────────────────────
    # ESCENA 1 — Mesa con piezas mezcladas
    # ─────────────────────────────────────────────────────────────
    def _escena_1_mesa(self):
        titulo = Text("¿Qué es un conjunto?", font_size=36,
                      color=AZUL_CLARO, weight=BOLD).to_edge(UP, buff=0.5)

        mesa = Rectangle(width=10.5, height=0.12, color=GRIS,
                         fill_color=GRIS, fill_opacity=1,
                         stroke_width=0).shift(DOWN * 1.8)

        piezas_data = [
            hacer_tornillo(escala=1.3),
            hacer_engrane(escala=1.2),
            hacer_rodamiento(escala=1.2),
            hacer_piston(escala=1.2),
            hacer_valvula(escala=1.2),
            hacer_resorte(escala=1.2),
        ]

        for pieza, pos in zip(piezas_data, POSICIONES_MESA):
            pieza.move_to(pos + DOWN * 0.3)

        self.piezas = piezas_data  # guardar para reusar

        self.play(FadeIn(titulo, shift=DOWN * 0.2), run_time=0.6)
        self._tick(0.6)
        self.play(FadeIn(mesa), run_time=0.5)
        self._tick(0.5)
        self.play(
            LaggedStart(*[FadeIn(p, scale=0.5) for p in piezas_data],
                        lag_ratio=0.18),
            run_time=2.0,
        )
        self._tick(2.0)
        self._sync_wait(1)
        self.play(FadeOut(VGroup(titulo, mesa)), run_time=0.6)
        self._tick(0.6)

    # ─────────────────────────────────────────────────────────────
    # ESCENA 2 — Bolsa y agrupación
    # ─────────────────────────────────────────────────────────────
    def _escena_2_bolsa(self):
        self.bolsa = Ellipse(width=3.8, height=2.9, color=VERDE,
                             stroke_width=3, fill_color=VERDE,
                             fill_opacity=0.10).shift(LEFT * 1.5)

        lbl_bolsa = Text("Piezas que necesitan lubricación",
                         font_size=22, color=VERDE).next_to(self.bolsa, DOWN, buff=0.3)

        self.play(DrawBorderThenFill(self.bolsa), run_time=0.9)
        self._tick(0.9)
        self.play(FadeIn(lbl_bolsa, shift=UP * 0.1), run_time=0.6)
        self._tick(0.6)

        for i, target in zip(range(4), POS_DENTRO):
            self.play(
                self.piezas[i].animate.move_to(
                    self.bolsa.get_center() + target * 0.50
                ),
                run_time=0.7,
            )
            self._tick(0.7)

        self.play(
            self.piezas[4].animate.set_opacity(0.3),
            self.piezas[5].animate.set_opacity(0.3),
            run_time=0.7,
        )
        self._tick(0.7)

        self.lbl_bolsa = lbl_bolsa
        self._sync_wait(2)
        self.play(FadeOut(lbl_bolsa), run_time=0.4)
        self._tick(0.4)

    # ─────────────────────────────────────────────────────────────
    # ESCENA 3 — Notación por extensión
    # ─────────────────────────────────────────────────────────────
    def _escena_3_notacion(self):
        # Achica el conjunto y sube
        todo_arriba = VGroup(self.bolsa, *self.piezas[:4])
        self.play(
            todo_arriba.animate.scale(0.65).to_edge(UP, buff=1.2),
            run_time=0.9,
        )
        self._tick(0.9)

        llave_a  = Text("{", font_size=42, color=VERDE)
        elem1    = Text("tornillo", font_size=30, color=WHITE)
        coma1    = Text(",", font_size=30, color=GRIS)
        elem2    = Text("engrane", font_size=30, color=WHITE)
        coma2    = Text(",", font_size=30, color=GRIS)
        elem3    = Text("rodamiento", font_size=30, color=WHITE)
        coma3    = Text(",", font_size=30, color=GRIS)
        elem4    = Text("pistón", font_size=30, color=WHITE)
        llave_c  = Text("}", font_size=42, color=VERDE)

        lbl_a    = Text("A = ", font_size=34, color=AMARILLO, weight=BOLD)

        contenido = VGroup(
            llave_a, elem1, coma1, elem2, coma2,
            elem3, coma3, elem4, llave_c,
        ).arrange(RIGHT, buff=0.12)

        notacion = VGroup(lbl_a, contenido).arrange(RIGHT, buff=0.2)
        notacion.move_to(ORIGIN + DOWN * 0.5)

        self.play(FadeIn(lbl_a, shift=RIGHT * 0.2), run_time=0.6)
        self._tick(0.6)
        self.play(
            LaggedStart(
                FadeIn(llave_a),
                FadeIn(elem1), FadeIn(coma1),
                FadeIn(elem2), FadeIn(coma2),
                FadeIn(elem3), FadeIn(coma3),
                FadeIn(elem4),
                FadeIn(llave_c),
                lag_ratio=0.2,
            ),
            run_time=2.0,
        )
        self._tick(2.0)

        self.notacion = notacion
        self._sync_wait(3)
        self.play(FadeOut(notacion), run_time=0.5)
        self._tick(0.5)

    # ─────────────────────────────────────────────────────────────
    # ESCENA 4 — Pertenencia ∈ y ∉
    # ─────────────────────────────────────────────────────────────
    def _escena_4_pertenencia(self):
        todo = VGroup(self.bolsa, *self.piezas[:4])
        extras = VGroup(self.piezas[4], self.piezas[5])

        # Quitar el conjunto del encuadre para explicar ∈ y ∉ sin amontonamiento
        self.play(
            todo.animate.scale(1 / 0.65),
            FadeOut(todo),
            FadeOut(extras),
            run_time=0.6,
        )
        self._tick(0.6)

        tornillo = hacer_tornillo(escala=1.35)
        flecha1 = Arrow(
            ORIGIN,
            RIGHT * 1.0,
            color=VERDE,
            stroke_width=3,
            buff=0.08,
            max_tip_length_to_length_ratio=0.22,
        )
        in_sym = MathTex(r"\in", font_size=48, color=VERDE)
        lbl_a1 = Text("A", font_size=38, color=VERDE, weight=BOLD)
        txt_p = Text("pertenece", font_size=26, color=VERDE)
        simbolo1 = VGroup(in_sym, lbl_a1, txt_p).arrange(RIGHT, buff=0.28)
        fila1 = VGroup(tornillo, flecha1, simbolo1).arrange(RIGHT, buff=0.55)

        valvula = hacer_valvula(escala=1.35)
        cruz = Text("✗", font_size=32, color=ROJO).move_to(valvula.get_center())
        valvula_grp = VGroup(valvula, cruz)
        flecha2 = Arrow(
            ORIGIN,
            RIGHT * 1.0,
            color=ROJO,
            stroke_width=3,
            buff=0.08,
            max_tip_length_to_length_ratio=0.22,
        )
        notin = MathTex(r"\notin", font_size=48, color=ROJO)
        lbl_a2 = Text("A", font_size=38, color=ROJO, weight=BOLD)
        txt_np = Text("no pertenece", font_size=26, color=ROJO)
        simbolo2 = VGroup(notin, lbl_a2, txt_np).arrange(RIGHT, buff=0.28)
        fila2 = VGroup(valvula_grp, flecha2, simbolo2).arrange(RIGHT, buff=0.55)

        filas = VGroup(fila1, fila2).arrange(DOWN, aligned_edge=LEFT, buff=1.35)
        filas.move_to(ORIGIN)

        self.play(
            FadeIn(tornillo),
            GrowArrow(flecha1),
            FadeIn(simbolo1),
            run_time=1.0,
        )
        self._tick(1.0)
        self.play(
            FadeIn(valvula_grp),
            GrowArrow(flecha2),
            FadeIn(simbolo2),
            run_time=1.0,
        )
        self._tick(1.0)
        self._sync_wait(4, fadeout=1.1)
        self.play(FadeOut(filas), run_time=0.6)
        self._tick(0.6)

        # Restaurar conjunto para la escena del universo U
        todo.move_to(LEFT * 2.0)
        self.play(FadeIn(todo), run_time=0.5)
        self._tick(0.5)

    # ─────────────────────────────────────────────────────────────
    # ESCENA 5 — Universo U
    # ─────────────────────────────────────────────────────────────
    def _escena_5_universo(self):
        universo = Rectangle(
            width=10.0, height=6.2,
            color=GRIS, stroke_width=3,
            fill_color=FONDO, fill_opacity=0,
        ).move_to(ORIGIN)

        lbl_u = Text("U", font_size=24, color=GRIS, weight=BOLD).next_to(
            universo, UL, buff=0.1)

        desc = Text("U contiene todas las piezas del taller",
                    font_size=22, color=GRIS, slant=ITALIC).to_edge(DOWN, buff=0.4)

        # Mover bolsa al centro-izquierda
        todo = VGroup(self.bolsa, *self.piezas[:4])
        self.play(todo.animate.move_to(LEFT * 2.0), run_time=0.7)
        self._tick(0.7)

        self.piezas[4].set_opacity(0.35)
        self.piezas[5].set_opacity(0.35)
        self.piezas[4].move_to(RIGHT * 3.2 + UP * 0.5)
        self.piezas[5].move_to(RIGHT * 3.2 + DOWN * 0.6)

        self.play(Create(universo), FadeIn(lbl_u), run_time=0.9)
        self._tick(0.9)
        self.play(
            FadeIn(self.piezas[4]),
            FadeIn(self.piezas[5]),
            run_time=0.7,
        )
        self._tick(0.7)
        self.play(FadeIn(desc, shift=UP * 0.1), run_time=0.6)
        self._tick(0.6)
        self._sync_wait(5)
        self.play(
            FadeOut(VGroup(universo, lbl_u, desc,
                           self.piezas[4], self.piezas[5])),
            run_time=0.6,
        )
        self._tick(0.6)

    # ─────────────────────────────────────────────────────────────
    # ESCENA 6 — Conjunto vacío ∅
    # ─────────────────────────────────────────────────────────────
    def _escena_6_vacio(self):
        # Centrar la bolsa
        todo = VGroup(self.bolsa, *self.piezas[:4])
        self.play(todo.animate.move_to(ORIGIN), run_time=0.6)
        self._tick(0.6)
        self.play(
            LaggedStart(*[FadeOut(p, shift=DOWN * 0.5) for p in self.piezas[:4]],
                        lag_ratio=0.25),
            run_time=1.5,
        )
        self._tick(1.5)

        vacio = MathTex(r"\emptyset", font_size=80, color=ROJO).move_to(
            self.bolsa.get_center())
        desc  = Text("Conjunto vacío — ningún elemento cumple la condición",
                     font_size=21, color=GRIS).next_to(self.bolsa, DOWN, buff=0.5)

        self.play(FadeIn(vacio, scale=0.5), run_time=0.8)
        self._tick(0.8)
        self.play(FadeIn(desc, shift=UP * 0.1), run_time=0.6)
        self._tick(0.6)
        self._sync_wait(6, fadeout=1.5)
        self.play(FadeOut(vacio), FadeOut(desc), run_time=0.5)
        self._tick(0.5)
        for i, target in enumerate(POS_DENTRO):
            self.piezas[i].move_to(self.bolsa.get_center() + target * 0.50)
        self.play(
            LaggedStart(*[FadeIn(p, scale=0.5) for p in self.piezas[:4]],
                        lag_ratio=0.2),
            run_time=1.0,
        )
        self._tick(1.0)

    # ─────────────────────────────────────────────────────────────
    # ESCENA 7 — Cardinalidad |A| = 4
    # ─────────────────────────────────────────────────────────────
    def _escena_7_cardinalidad(self):
        # Mover bolsa a la izquierda
        todo = VGroup(self.bolsa, *self.piezas[:4])
        self.play(todo.animate.move_to(LEFT * 2.5), run_time=0.7)
        self._tick(0.7)

        lbl_card = Text("|A| = ", font_size=48, color=AMARILLO, weight=BOLD)
        num      = Text("0", font_size=48, color=AMARILLO, weight=BOLD)
        grupo_card = VGroup(lbl_card, num).arrange(RIGHT, buff=0.1)
        grupo_card.move_to(RIGHT * 2.5)

        self.play(FadeIn(lbl_card), run_time=0.6)
        self._tick(0.6)
        self.play(FadeIn(num), run_time=0.4)
        self._tick(0.4)

        colores_flash = [VERDE, AZUL_CLARO, NARANJA, AMARILLO]
        numeros = ["1", "2", "3", "4"]

        for i, (color, n_str) in enumerate(zip(colores_flash, numeros)):
            pieza = self.piezas[i]
            nuevo_num = Text(n_str, font_size=48, color=AMARILLO, weight=BOLD)
            nuevo_num.move_to(num.get_center())

            self.play(
                pieza.animate.scale(1.3).set_color(color),
                run_time=0.35,
            )
            self._tick(0.35)
            self.play(
                Transform(num, nuevo_num),
                pieza.animate.scale(1 / 1.3).set_color(
                    [GRIS, NARANJA, AZUL_CLARO, GRIS][i]
                ),
                run_time=0.35,
            )
            self._tick(0.35)

        marco = SurroundingRectangle(
            VGroup(lbl_card, num), color=VERDE,
            buff=0.25, corner_radius=0.12, stroke_width=3,
        )
        txt_final = Text("El conjunto A tiene 4 elementos",
                         font_size=24, color=VERDE).next_to(marco, DOWN, buff=0.5)

        self.play(Create(marco), run_time=0.7)
        self._tick(0.7)
        self.play(FadeIn(txt_final, shift=UP * 0.1), run_time=0.6)
        self._tick(0.6)

        fadeout = 1.2
        fin_audio = cargar_fin_audio()
        restante = fin_audio - self._t - fadeout
        if restante > 0:
            self.wait(restante)
            self._tick(restante)

        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)


if __name__ == "__main__":
    print("Renderiza con: manim -pql video_conjuntos_piezas.py ConjuntoPiezas")
