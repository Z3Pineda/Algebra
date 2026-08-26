"""
Video 1.10 — Diagramas de Venn y conteo
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Duración aproximada: ~2:50 min

Renderizar (prueba):
    manim -pql video_1_10_venn_conteo.py VennConteo

Renderizar (final):
    manim -pqh video_1_10_venn_conteo.py VennConteo

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
    return [0.0, 13.949, 43.102, 76.669, 102.791, 128.757]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 136.463


def cargar_duracion_bloque(indice: int) -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][indice]["duracion_s"])
    defaults = [13.949, 29.153, 33.567, 26.122, 25.966, 7.706]
    return defaults[indice] if indice < len(defaults) else 15.0

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


def venn_base(centro=ORIGIN, sep=0.9, radio=1.3, ancho=6.0, alto=3.6):
    """Devuelve (rect_u, circ_a, circ_b) con contornos visibles."""
    rect_u = Rectangle(
        width=ancho, height=alto,
        color=GRIS, stroke_width=2,
        fill_color=FONDO, fill_opacity=1,
    ).move_to(centro)
    circ_a = Circle(
        radius=radio, color=AZUL_CLARO, stroke_width=3,
        fill_opacity=0,
    ).move_to(centro + LEFT * sep)
    circ_b = Circle(
        radius=radio, color=NARANJA, stroke_width=3,
        fill_opacity=0,
    ).move_to(centro + RIGHT * sep)
    return rect_u, circ_a, circ_b


# ═════════════════════════════════════════════════════════════════
class VennConteo(Scene):
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

    def _wait_until(self, target_t: float) -> None:
        remaining = target_t - self._t
        if remaining > 0:
            self.wait(remaining)
            self._tick(remaining)

    def construct(self):
        self.camera.background_color = FONDO
        self._escena_apertura()
        self._escena_regiones()
        self._escena_llenar_regiones()
        self._escena_dato_faltante()
        self._escena_errores()
        self._escena_cierre()

    # ──────────────────────────────────────────────────────────────
    # ESCENA 1 — Apertura
    # ──────────────────────────────────────────────────────────────
    def _escena_apertura(self):
        titulo = Text(
            "1.10 · Diagramas de Venn y conteo",
            font_size=36, color=AZUL_CLARO, weight=BOLD,
        ).to_edge(UP, buff=0.5)

        desc = Text(
            "El diagrama de Venn distribuye los elementos\n"
            "en regiones para contar sin errores.",
            font_size=26, color=GRIS, line_spacing=1.25,
        )
        bloque_texto = VGroup(titulo, desc).arrange(DOWN, buff=0.35).to_edge(UP, buff=0.45)

        rect_u, circ_a, circ_b = venn_base(centro=ORIGIN, sep=0.85, radio=1.15)
        diagrama = VGroup(rect_u, circ_a, circ_b)
        diagrama.next_to(bloque_texto, DOWN, buff=0.55)

        lbl_a = Text("A", font_size=26, color=AZUL_CLARO, weight=BOLD).move_to(
            circ_a.get_center() + LEFT * 0.45 + UP * 0.5)
        lbl_b = Text("B", font_size=26, color=NARANJA, weight=BOLD).move_to(
            circ_b.get_center() + RIGHT * 0.45 + UP * 0.5)
        lbl_u = Text("U", font_size=20, color=GRIS).next_to(rect_u, UL, buff=0.08)

        self.play(FadeIn(bloque_texto, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(
            DrawBorderThenFill(rect_u),
            Create(circ_b),
            Create(circ_a),
            FadeIn(lbl_a), FadeIn(lbl_b), FadeIn(lbl_u),
            run_time=1.2,
        )
        self._tick(1.2)
        self._sync_wait(1)
        self.play(FadeOut(VGroup(bloque_texto, rect_u, circ_a, circ_b,
                                  lbl_a, lbl_b, lbl_u)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 2 — Las cuatro regiones
    # ──────────────────────────────────────────────────────────────
    def _escena_regiones(self):
        encabezado = Text(
            "Las cuatro regiones del diagrama",
            font_size=30, color=AZUL_CLARO,
        ).to_edge(UP, buff=0.5)

        centro = ORIGIN + DOWN * 0.5
        sep    = 0.9
        radio  = 1.3

        rect_u = Rectangle(
            width=6.2, height=3.8, color=GRIS, stroke_width=2,
            fill_color=FONDO, fill_opacity=1,
        ).move_to(centro)

        zona_solo_a = Difference(
            Circle(radius=radio).move_to(centro + LEFT * sep),
            Circle(radius=radio).move_to(centro + RIGHT * sep),
            color=AZUL_CLARO, fill_opacity=0.0, stroke_width=0,
        )
        zona_inter = Intersection(
            Circle(radius=radio).move_to(centro + LEFT * sep),
            Circle(radius=radio).move_to(centro + RIGHT * sep),
            color=VERDE, fill_opacity=0.0, stroke_width=0,
        )
        zona_solo_b = Difference(
            Circle(radius=radio).move_to(centro + RIGHT * sep),
            Circle(radius=radio).move_to(centro + LEFT * sep),
            color=NARANJA, fill_opacity=0.0, stroke_width=0,
        )

        circ_a = Circle(radius=radio, color=AZUL_CLARO, stroke_width=3,
                        fill_color=FONDO, fill_opacity=0).move_to(centro + LEFT * sep)
        circ_b = Circle(radius=radio, color=NARANJA, stroke_width=3,
                        fill_color=FONDO, fill_opacity=0).move_to(centro + RIGHT * sep)

        lbl_a = Text("A", font_size=26, color=AZUL_CLARO, weight=BOLD).move_to(
            centro + LEFT * sep + UP * 0.7)
        lbl_b = Text("B", font_size=26, color=NARANJA, weight=BOLD).move_to(
            centro + RIGHT * sep + UP * 0.7)
        lbl_u = Text("U", font_size=20, color=GRIS).next_to(rect_u, UL, buff=0.1)

        regiones = [
            (zona_solo_a, AZUL_CLARO, "I\nSolo A",    centro + LEFT * 1.6),
            (zona_inter,  VERDE,      "II\nA ∩ B",    centro),
            (zona_solo_b, NARANJA,    "III\nSolo B",  centro + RIGHT * 1.6),
        ]

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(
            DrawBorderThenFill(rect_u),
            Create(circ_b),
            Create(circ_a),
            FadeIn(lbl_a), FadeIn(lbl_b), FadeIn(lbl_u),
            run_time=1.0,
        )
        self._tick(1.0)

        for zona, color, etiqueta, pos in regiones:
            zona_fill = zona.copy().set_fill(color, opacity=0.45)
            lbl = Text(etiqueta, font_size=19, color=color,
                       weight=BOLD, line_spacing=1.1).move_to(pos)
            self.play(FadeIn(zona_fill, scale=0.8), FadeIn(lbl), run_time=0.9)
            self._tick(0.9)
            self.wait(0.8)
            self._tick(0.8)

        lbl_iv = Text("IV\nFuera de A y B", font_size=16, color=GRIS,
                      line_spacing=1.05)
        lbl_iv.move_to(rect_u.get_corner(DL) + RIGHT * 1.15 + UP * 0.55)
        self.play(FadeIn(lbl_iv), run_time=0.7)
        self._tick(0.7)
        self._sync_wait(2)
        self.play(FadeOut(Group(*self.mobjects)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 3 — Llenar el diagrama con datos reales
    # ──────────────────────────────────────────────────────────────
    def _escena_llenar_regiones(self):
        encabezado = Text(
            "Llenar el diagrama con datos",
            font_size=30, color=VERDE,
        ).to_edge(UP, buff=0.5)

        datos = Text(
            "A = {6, 8, 10, 12}   B = {8, 12, 16}",
            font_size=26, color=WHITE,
        ).next_to(encabezado, DOWN, buff=0.4)

        centro = ORIGIN + DOWN * 1.0
        sep = 0.9
        radio = 1.2

        rect_u = Rectangle(
            width=6.0, height=3.4, color=GRIS, stroke_width=2,
            fill_color=FONDO, fill_opacity=1,
        ).move_to(centro)
        circ_a = Circle(radius=radio, color=AZUL_CLARO, stroke_width=3,
                        fill_color=FONDO, fill_opacity=0).move_to(centro + LEFT * sep)
        circ_b = Circle(radius=radio, color=NARANJA, stroke_width=3,
                        fill_color=FONDO, fill_opacity=0).move_to(centro + RIGHT * sep)
        lbl_a = Text("A", font_size=24, color=AZUL_CLARO, weight=BOLD).move_to(
            centro + LEFT * sep + UP * 0.65)
        lbl_b = Text("B", font_size=24, color=NARANJA, weight=BOLD).move_to(
            centro + RIGHT * sep + UP * 0.65)

        solo_a  = Text("6\n10", font_size=24, color=AZUL_CLARO,
                        line_spacing=1.2).move_to(centro + LEFT * 1.5)
        inter   = Text("8\n12", font_size=24, color=VERDE,
                        line_spacing=1.2).move_to(centro)
        solo_b  = Text("16", font_size=24, color=NARANJA).move_to(centro + RIGHT * 1.5)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(FadeIn(datos), run_time=0.7)
        self._tick(0.7)
        self.play(
            DrawBorderThenFill(rect_u),
            Create(circ_b),
            Create(circ_a),
            FadeIn(lbl_a), FadeIn(lbl_b),
            run_time=1.0,
        )
        self._tick(1.0)
        self.wait(0.3)
        self._tick(0.3)
        self.play(FadeIn(inter, scale=0.7), run_time=0.8)
        self._tick(0.8)
        self.wait(0.5)
        self._tick(0.5)
        self.play(FadeIn(solo_a, shift=RIGHT * 0.2), run_time=0.8)
        self._tick(0.8)
        self.wait(0.5)
        self._tick(0.5)
        self.play(FadeIn(solo_b, shift=LEFT * 0.2), run_time=0.8)
        self._tick(0.8)
        self._sync_wait(3)
        self.play(FadeOut(Group(*self.mobjects)), run_time=0.7)
        self._tick(0.7)

    # ──────────────────────────────────────────────────────────────
    # ESCENA 4 — Dato faltante con el diagrama
    # ──────────────────────────────────────────────────────────────
    def _escena_dato_faltante(self):
        encabezado = Text(
            "Encontrar un dato faltante",
            font_size=30, color=AMARILLO, weight=BOLD,
        ).to_edge(UP, buff=0.5)

        problema = Text(
            "En un taller: 30 piezas inspeccionadas.\n"
            "18 aprobaron prueba de dureza.\n"
            "12 aprobaron prueba de dimensión.\n"
            "7 aprobaron las dos pruebas.\n"
            "¿Cuántas aprobaron al menos una?",
            font_size=21, color=WHITE, line_spacing=1.25,
        )
        problema.to_edge(LEFT, buff=0.55).shift(DOWN * 0.25)

        centro = RIGHT * 3.0 + DOWN * 0.2
        sep, radio = 0.72, 0.95
        rect_u, circ_a, circ_b = venn_base(
            centro=centro, sep=sep, radio=radio, ancho=4.8, alto=2.7,
        )
        lbl_u = Text("U", font_size=18, color=GRIS).next_to(rect_u, UL, buff=0.06)
        lbl_a = Text("A", font_size=22, color=AZUL_CLARO, weight=BOLD).move_to(
            circ_a.get_center() + LEFT * 0.35 + UP * 0.45,
        )
        lbl_b = Text("B", font_size=22, color=NARANJA, weight=BOLD).move_to(
            circ_b.get_center() + RIGHT * 0.35 + UP * 0.45,
        )
        tag_a = Text("Dureza", font_size=16, color=AZUL_CLARO).next_to(circ_a, UP, buff=0.08)
        tag_b = Text("Dimensión", font_size=16, color=NARANJA).next_to(circ_b, UP, buff=0.08)
        dato_a = Text("|A| = 18", font_size=18, color=WHITE).next_to(tag_a, UP, buff=0.06)
        dato_b = Text("|B| = 12", font_size=18, color=WHITE).next_to(tag_b, UP, buff=0.06)
        dato_u = Text("n = 30", font_size=18, color=GRIS).next_to(rect_u, UR, buff=0.08)
        dato_inter = Text("7", font_size=30, color=VERDE, weight=BOLD).move_to(centro)
        dato_solo_a = Text("11", font_size=24, color=AZUL_CLARO).move_to(centro + LEFT * 1.05)
        dato_solo_b = Text("5", font_size=24, color=NARANJA).move_to(centro + RIGHT * 1.05)

        diagrama = VGroup(
            rect_u, circ_a, circ_b, lbl_u, lbl_a, lbl_b,
            tag_a, tag_b, dato_a, dato_b, dato_u, dato_inter,
        )
        diagrama_sol = VGroup(dato_solo_a, dato_solo_b)

        sol1 = MathTex(
            r"|A \cup B| = |A| + |B| - |A \cap B|",
            font_size=28, color=WHITE,
        )
        sol2 = MathTex(
            r"|A \cup B| = 18 + 12 - 7 = 23",
            font_size=28, color=WHITE,
        )
        sol3 = MathTex(
            r"\text{11 solo A} + \text{7 ambas} + \text{5 solo B} = 23",
            font_size=24, color=VERDE,
        )
        for s in (sol1, sol2, sol3):
            if s.width > 5.6:
                s.scale_to_fit_width(5.6)
        soluciones = VGroup(sol1, sol2, sol3).arrange(DOWN, buff=0.38, aligned_edge=LEFT)
        soluciones.to_edge(LEFT, buff=0.55).shift(DOWN * 0.25)

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(FadeIn(problema, shift=UP * 0.1), run_time=0.8)
        self._tick(0.8)
        self.play(
            DrawBorderThenFill(rect_u),
            Create(circ_b),
            Create(circ_a),
            FadeIn(lbl_u), FadeIn(lbl_a), FadeIn(lbl_b),
            FadeIn(tag_a), FadeIn(tag_b),
            FadeIn(dato_a), FadeIn(dato_b), FadeIn(dato_u),
            FadeIn(dato_inter, scale=0.8),
            run_time=1.2,
        )
        self._tick(1.2)

        inicio_b4 = self.section_starts[3]
        dur_b4 = cargar_duracion_bloque(3)
        self._wait_until(inicio_b4 + dur_b4 * 0.58)

        self.play(FadeOut(problema, shift=LEFT * 0.2), run_time=0.7)
        self._tick(0.7)
        self.wait(0.15)
        self._tick(0.15)

        self.play(FadeIn(sol1, shift=UP * 0.15), run_time=0.9)
        self._tick(0.9)
        self.play(FadeIn(sol2, shift=UP * 0.15), run_time=0.9)
        self._tick(0.9)
        self.play(
            FadeIn(dato_solo_a, scale=0.8),
            FadeIn(dato_solo_b, scale=0.8),
            run_time=0.8,
        )
        self._tick(0.8)
        self.play(FadeIn(sol3, shift=UP * 0.15), run_time=0.9)
        self._tick(0.9)
        self.wait(0.5)
        self._tick(0.5)

        self._sync_wait(4)
        self.play(
            FadeOut(VGroup(
                encabezado, soluciones, diagrama, diagrama_sol,
            )),
            run_time=0.7,
        )
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
                "Poner elementos en la zona incorrecta",
                "Los comunes van en la intersección, no en solo A o solo B",
            ),
            (
                "Colocar el mismo elemento en dos regiones",
                "Cada elemento pertenece a una sola región del diagrama",
            ),
            (
                "Omitir los elementos fuera de A y B",
                "La región IV existe aunque no se pida explícitamente",
            ),
        ]

        self.play(FadeIn(encabezado, shift=DOWN * 0.2), run_time=0.7)
        self._tick(0.7)

        filas = VGroup()
        for error, correccion in errores:
            e_txt = Text(f"✗  {error}", font_size=19, color=ROJO)
            c_txt = Text(f"✓  {correccion}", font_size=19, color=VERDE)
            if e_txt.width > 11.0:
                e_txt.scale_to_fit_width(11.0)
            if c_txt.width > 11.0:
                c_txt.scale_to_fit_width(11.0)
            fila  = VGroup(e_txt, c_txt).arrange(DOWN, buff=0.18, aligned_edge=LEFT)
            filas.add(fila)

        filas.arrange(DOWN, buff=0.5).move_to(ORIGIN + DOWN * 0.05)

        for fila in filas:
            self.play(FadeIn(fila, shift=RIGHT * 0.3), run_time=0.9)
            self._tick(0.9)
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
            "El diagrama de Venn divide los elementos\n"
            "en cuatro regiones sin traslape.\n"
            "Cada elemento ocupa exactamente una región.",
            font_size=29, color=WHITE, weight=BOLD, line_spacing=1.4,
        ).move_to(ORIGIN + UP * 0.4)

        siguiente = Text(
            "Fin del bloque de conjuntos  ·  Siguiente unidad: Números Reales  →",
            font_size=20, color=NARANJA_CLARO,
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
    print("Renderiza con: manim -pql video_1_10_venn_conteo.py VennConteo")
