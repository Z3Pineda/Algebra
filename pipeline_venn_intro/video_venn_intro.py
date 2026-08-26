"""
Video — Introducción al diagrama de Venn
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Renderizar (prueba):
    manim -pql video_venn_intro.py VennIntro

Renderizar (final):
    manim -pqh video_venn_intro.py VennIntro

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
    return [0.0, 13.37, 27.72, 46.60, 71.29, 92.73, 117.11]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 125.47

# ── Paleta ────────────────────────────────────────────────────────
AZUL        = "#1d4ed8"
AZUL_CLARO  = "#3b82f6"
AZUL_OSCURO = "#1e3a8a"
NARANJA     = "#f97316"
GRIS        = "#64748b"
VERDE       = "#22c55e"
ROJO        = "#ef4444"
AMARILLO    = "#facc15"
FONDO       = "#0f172a"

RADIO  = 1.35
SEP    = 0.90
CENTRO = ORIGIN + UP * 0.15


def leyenda_bajo_rect(rect_u: Rectangle, *textos: Text, buff: float = 0.42) -> VGroup:
    grupo = VGroup(*textos).arrange(DOWN, buff=0.16, aligned_edge=LEFT)
    grupo.next_to(rect_u, DOWN, buff=buff)
    return grupo


def etiqueta_region(pos, nombre: str, desc: str, color: str) -> VGroup:
    lbl = Text(nombre, font_size=17, color=color, weight=BOLD).move_to(pos)
    sub = Text(
        desc, font_size=13, color=GRIS, slant=ITALIC, line_spacing=0.85,
    ).next_to(lbl, DOWN, buff=0.06)
    return VGroup(lbl, sub)


def hacer_universo(centro=ORIGIN):
    return Rectangle(
        width=8.2, height=5.0,
        color=GRIS, stroke_width=3,
        fill_color=FONDO, fill_opacity=1,
    ).move_to(centro)


def hacer_circulo_a(centro=ORIGIN):
    return Circle(
        radius=RADIO, color=AZUL_CLARO, stroke_width=3,
        fill_color=FONDO, fill_opacity=0,
    ).move_to(centro + LEFT * SEP)


def hacer_circulo_b(centro=ORIGIN):
    return Circle(
        radius=RADIO, color=NARANJA, stroke_width=3,
        fill_color=FONDO, fill_opacity=0,
    ).move_to(centro + RIGHT * SEP)


# ══════════════════════════════════════════════════════════════════
class VennIntro(Scene):
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
        self._escena_universo()
        self._escena_dos_conjuntos()
        self._escena_cuatro_regiones()
        self._escena_elementos()
        self._escena_leer_diagrama()
        self._escena_cierre()

    def _escena_apertura(self):
        titulo = Text(
            "Diagrama de Venn",
            font_size=52, color=AZUL_CLARO, weight=BOLD,
        ).move_to(ORIGIN + UP * 0.5)

        subtitulo = Text(
            "Una herramienta visual para organizar y contar elementos.",
            font_size=26, color=GRIS,
        ).next_to(titulo, DOWN, buff=0.5)

        autor = Text(
            "John Venn · 1880",
            font_size=20, color=GRIS, slant=ITALIC,
        ).next_to(subtitulo, DOWN, buff=0.3)

        self.play(Write(titulo), run_time=1.2)
        self._tick(1.2)
        self.play(FadeIn(subtitulo, shift=UP * 0.1), run_time=0.8)
        self._tick(0.8)
        self.play(FadeIn(autor, shift=UP * 0.1), run_time=0.6)
        self._tick(0.6)
        self._sync_wait(1, fadeout=0.7)
        self.play(FadeOut(VGroup(titulo, subtitulo, autor)), run_time=0.7)
        self._tick(0.7)

    def _escena_universo(self):
        encabezado = Text(
            "Paso 1 — El universo U",
            font_size=30, color=AZUL_CLARO,
        ).to_edge(UP, buff=0.5)

        rect_u = hacer_universo(CENTRO)
        lbl_u = Text("U", font_size=26, color=GRIS, weight=BOLD).next_to(
            rect_u, UL, buff=0.12)

        desc = Text(
            "U es el conjunto de todos los elementos posibles\n"
            "en el contexto del problema.",
            font_size=22, color=GRIS, line_spacing=1.3,
        )
        ejemplo = Text(
            "Ejemplo: todas las piezas del almacén.",
            font_size=20, color=AMARILLO, slant=ITALIC,
        )
        leyenda_u = leyenda_bajo_rect(rect_u, desc, ejemplo)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.6)
        self._tick(0.6)
        self.play(Create(rect_u), FadeIn(lbl_u), run_time=1.0)
        self._tick(1.0)
        self.play(FadeIn(leyenda_u, shift=UP * 0.1), run_time=0.7)
        self._tick(0.7)

        self.rect_u = rect_u
        self.lbl_u = lbl_u
        self._sync_wait(2, fadeout=0.6)
        self.play(FadeOut(VGroup(encabezado, leyenda_u)), run_time=0.6)
        self._tick(0.6)

    def _escena_dos_conjuntos(self):
        encabezado = Text(
            "Paso 2 — Los conjuntos A y B",
            font_size=30, color=AZUL_CLARO,
        ).to_edge(UP, buff=0.5)

        circ_a = hacer_circulo_a(CENTRO)
        circ_b = hacer_circulo_b(CENTRO)

        lbl_a = Text("A", font_size=30, color=AZUL_CLARO, weight=BOLD).move_to(
            circ_a.get_top() + DOWN * 0.45)
        lbl_b = Text("B", font_size=30, color=NARANJA, weight=BOLD).move_to(
            circ_b.get_top() + DOWN * 0.45)

        desc_a = Text(
            "A — piezas que necesitan lubricación",
            font_size=20, color=AZUL_CLARO,
        )
        desc_b = Text(
            "B — piezas con dureza mayor a 60 HRC",
            font_size=20, color=NARANJA,
        )
        leyenda_ab = leyenda_bajo_rect(self.rect_u, desc_a, desc_b)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.6)
        self._tick(0.6)
        self.play(DrawBorderThenFill(circ_a), FadeIn(lbl_a), run_time=1.0)
        self._tick(1.0)
        self.wait(0.35)
        self._tick(0.35)
        self.play(DrawBorderThenFill(circ_b), FadeIn(lbl_b), run_time=1.0)
        self._tick(1.0)
        self.play(FadeIn(leyenda_ab, shift=UP * 0.1), run_time=0.6)
        self._tick(0.6)

        self.circ_a = circ_a
        self.circ_b = circ_b
        self.lbl_a = lbl_a
        self.lbl_b = lbl_b
        self.leyenda_ab = leyenda_ab

        self._sync_wait(3, fadeout=0.6)
        self.play(FadeOut(VGroup(encabezado, leyenda_ab)), run_time=0.6)
        self._tick(0.6)

    def _escena_cuatro_regiones(self):
        encabezado = Text(
            "Las cuatro regiones",
            font_size=30, color=AZUL_CLARO,
        ).to_edge(UP, buff=0.5)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.6)
        self._tick(0.6)
        self.play(FadeOut(VGroup(self.lbl_a, self.lbl_b)), run_time=0.35)
        self._tick(0.35)

        fuera_pos = self.rect_u.get_corner(DR) + LEFT * 1.05 + UP * 0.75
        regiones = [
            {
                "zona": Difference(
                    Circle(radius=RADIO).move_to(CENTRO + LEFT * SEP),
                    Circle(radius=RADIO).move_to(CENTRO + RIGHT * SEP),
                    color=AZUL_CLARO, fill_opacity=0.45, stroke_width=0,
                ),
                "pos_lbl": CENTRO + LEFT * (SEP + 0.62) + UP * 0.12,
                "color": AZUL_CLARO,
                "nombre": "Solo A",
                "desc": "En A\nno en B",
            },
            {
                "zona": Intersection(
                    Circle(radius=RADIO).move_to(CENTRO + LEFT * SEP),
                    Circle(radius=RADIO).move_to(CENTRO + RIGHT * SEP),
                    color=VERDE, fill_opacity=0.55, stroke_width=0,
                ),
                "pos_lbl": CENTRO + UP * 0.48,
                "color": VERDE,
                "nombre": "A ∩ B",
                "desc": "En A y\nen B",
            },
            {
                "zona": Difference(
                    Circle(radius=RADIO).move_to(CENTRO + RIGHT * SEP),
                    Circle(radius=RADIO).move_to(CENTRO + LEFT * SEP),
                    color=NARANJA, fill_opacity=0.45, stroke_width=0,
                ),
                "pos_lbl": CENTRO + RIGHT * (SEP + 0.62) + UP * 0.12,
                "color": NARANJA,
                "nombre": "Solo B",
                "desc": "En B\nno en A",
            },
            {
                "zona": None,
                "pos_lbl": fuera_pos,
                "color": GRIS,
                "nombre": "Fuera",
                "desc": "En U\nen ninguno",
            },
        ]

        zonas_mostradas = VGroup()
        desc_grp = VGroup()

        for r in regiones:
            bloque = etiqueta_region(r["pos_lbl"], r["nombre"], r["desc"], r["color"])

            if r["zona"] is not None:
                self.play(
                    FadeIn(r["zona"], scale=0.7),
                    FadeIn(bloque),
                    run_time=0.8,
                )
                self._tick(0.8)
            else:
                self.play(FadeIn(bloque), run_time=0.8)
                self._tick(0.8)

            self.wait(0.45)
            self._tick(0.45)

            if r["zona"] is not None:
                zonas_mostradas.add(r["zona"])
            desc_grp.add(bloque)

        self.zonas = zonas_mostradas
        self._sync_wait(4, fadeout=0.7)
        self.play(FadeOut(VGroup(encabezado, desc_grp, zonas_mostradas)), run_time=0.7)
        self._tick(0.7)

    def _escena_elementos(self):
        encabezado = Text(
            "Colocar los elementos en su región",
            font_size=28, color=VERDE,
        ).to_edge(UP, buff=0.5)

        conj_a = Text("A = {engrane, rodamiento, tornillo, pistón}",
                      font_size=19, color=AZUL_CLARO)
        conj_b = Text("B = {rodamiento, pistón, válvula}",
                      font_size=19, color=NARANJA)
        leyenda_conj = leyenda_bajo_rect(self.rect_u, conj_a, conj_b, buff=0.38)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.6)
        self._tick(0.6)
        self.play(FadeIn(leyenda_conj, shift=UP * 0.1), run_time=0.7)
        self._tick(0.7)
        self.wait(0.35)
        self._tick(0.35)

        solo_a = VGroup(
            Text("engrane", font_size=18, color=AZUL_CLARO),
            Text("tornillo", font_size=18, color=AZUL_CLARO),
        ).arrange(DOWN, buff=0.18).move_to(CENTRO + LEFT * (SEP + 0.62))

        inter = VGroup(
            Text("rodamiento", font_size=16, color=VERDE),
            Text("pistón", font_size=16, color=VERDE),
        ).arrange(DOWN, buff=0.16).move_to(CENTRO + DOWN * 0.05)

        solo_b = VGroup(
            Text("válvula", font_size=18, color=NARANJA),
        ).move_to(CENTRO + RIGHT * (SEP + 0.62))

        self.play(FadeIn(inter, scale=0.7), run_time=0.8)
        self._tick(0.8)
        self.wait(0.3)
        self._tick(0.3)
        self.play(FadeIn(solo_a, shift=RIGHT * 0.2), run_time=0.8)
        self._tick(0.8)
        self.wait(0.3)
        self._tick(0.3)
        self.play(FadeIn(solo_b, shift=LEFT * 0.2), run_time=0.8)
        self._tick(0.8)

        self.elementos = VGroup(solo_a, inter, solo_b)
        self._sync_wait(5, fadeout=0.6)
        self.play(FadeOut(VGroup(encabezado, leyenda_conj)), run_time=0.6)
        self._tick(0.6)

    def _escena_leer_diagrama(self):
        encabezado = Text(
            "Cómo leer el diagrama",
            font_size=28, color=AMARILLO, weight=BOLD,
        ).to_edge(UP, buff=0.5)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.6)
        self._tick(0.6)

        preguntas = [
            ("¿Qué tiene A?", "engrane, tornillo, rodamiento, pistón", AZUL_CLARO,
             "Zona de A completa — solo A + intersección"),
            ("¿Qué tiene B?", "rodamiento, pistón, válvula", NARANJA,
             "Zona de B completa — solo B + intersección"),
            ("¿Qué comparten?", "rodamiento, pistón", VERDE,
             "Solo la zona central — la intersección"),
            ("¿Cuántos elementos en total?", "|A ∪ B| = 5", AMARILLO,
             "Todos los elementos distintos en A o B"),
        ]

        for pregunta, respuesta, color, nota in preguntas:
            p = Text(f"▶  {pregunta}", font_size=21, color=color, weight=BOLD)
            r = Text(respuesta, font_size=19, color=WHITE)
            n = Text(nota, font_size=17, color=GRIS, slant=ITALIC)
            bloque = VGroup(p, r, n).arrange(DOWN, buff=0.10, aligned_edge=LEFT)
            bloque.next_to(self.rect_u, DOWN, buff=0.38)

            self.play(FadeIn(bloque, shift=UP * 0.2), run_time=0.7)
            self._tick(0.7)
            self.wait(1.2)
            self._tick(1.2)
            self.play(FadeOut(bloque), run_time=0.4)
            self._tick(0.4)

        self._sync_wait(6, fadeout=0.5)
        self.play(FadeOut(encabezado), run_time=0.5)
        self._tick(0.5)

    def _escena_cierre(self):
        self.play(FadeOut(Group(*self.mobjects)), run_time=0.7)
        self._tick(0.7)

        definicion = Text(
            "El diagrama de Venn organiza elementos\n"
            "en cuatro regiones sin traslape.\n"
            "Cada elemento ocupa exactamente una región.",
            font_size=30, color=WHITE, weight=BOLD, line_spacing=1.4,
        ).move_to(ORIGIN + UP * 0.4)

        siguiente = Text(
            "Siguiente: operaciones — unión, intersección, diferencia  →",
            font_size=20, color=NARANJA,
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

        fadeout = 1.0
        fin_audio = cargar_fin_audio()
        restante = fin_audio - self._t - fadeout
        if restante > 0:
            self.wait(restante)
            self._tick(restante)

        self.play(FadeOut(VGroup(marco, definicion, siguiente)), run_time=fadeout)
        self._tick(fadeout)


if __name__ == "__main__":
    print("Renderiza con: manim -pql video_venn_intro.py VennIntro")
