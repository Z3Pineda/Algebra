"""
S2·C2 — Conjunto solución de una proposición abierta
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Renderizar (prueba):
    manim -pql video_s2c2_conjunto_solucion.py ConjuntoSolucion

Renderizar (final, 8 bloques):
    manim -pqh video_s2c2_conjunto_solucion.py ConjuntoSolucion

Renderizar (final, 9 bloques):
    manim -pqh video_s2c2_conjunto_solucion.py ConjuntoSolucionFull

Sincronizacion:
    python sync_timeline.py           → section_starts.json
    python sync_timeline.py --full    → section_starts_full.json
"""

from __future__ import annotations

import json
from pathlib import Path

from manim import *

ROOT = Path(__file__).resolve().parent
SYNC_FILE = ROOT / "section_starts.json"
SYNC_FILE_FULL = ROOT / "section_starts_full.json"


def cargar_section_starts(sync_file: Path) -> list[float]:
    if sync_file.exists():
        data = json.loads(sync_file.read_text(encoding="utf-8"))
        return [float(x) for x in data["section_starts"]]
    if sync_file == SYNC_FILE_FULL:
        return [0.0, 21.45, 55.48, 94.07, 118.73, 142.45, 169.87, 199.16, 218.83]
    return [0.0, 21.45, 55.48, 94.07, 118.73, 146.16, 175.44, 195.11]


def cargar_fin_audio(sync_file: Path) -> float:
    if sync_file.exists():
        data = json.loads(sync_file.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    if sync_file == SYNC_FILE_FULL:
        return 235.44
    return 211.72

# ── Paleta ────────────────────────────────────────────────────────
AZUL        = "#1d4ed8"
AZUL_CLARO  = "#3b82f6"
AZUL_OSCURO = "#1e3a8a"
NARANJA     = "#f97316"
GRIS        = "#64748b"
GRIS_CLARO  = "#94a3b8"
VERDE       = "#22c55e"
ROJO        = "#ef4444"
AMARILLO    = "#facc15"
VIOLETA     = "#7c3aed"
FONDO       = "#0f172a"
PANEL_BG    = "#0d1b2a"


def tarjeta_titulo(texto: str, color: str, ancho: float = 5.0) -> VGroup:
    rect = RoundedRectangle(
        corner_radius=0.12, width=ancho, height=0.72,
        color=color, stroke_width=2,
        fill_color=color, fill_opacity=0.15,
    )
    lbl = Text(texto, font_size=22, color=color, weight=BOLD).move_to(rect)
    return VGroup(rect, lbl)


def badge(texto: str, color: str, ancho: float = 1.4) -> VGroup:
    rect = RoundedRectangle(
        corner_radius=0.10, width=ancho, height=0.50,
        color=color, fill_color=color, fill_opacity=0.28, stroke_width=2,
    )
    lbl = Text(texto, font_size=16, color=color, weight=BOLD).move_to(rect)
    return VGroup(rect, lbl)


def encajar_vertical(grupo: Mobject, caja: Mobject, margen: float = 0.22) -> None:
    alto_disp = caja.height - 2 * margen
    if grupo.height > alto_disp:
        grupo.scale_to_fit_height(alto_disp)
    grupo.move_to(caja.get_center())


def sello_vf(valor: bool, escala: float = 1.0) -> VGroup:
    color = VERDE if valor else ROJO
    circ = Circle(radius=0.32 * escala, color=color, fill_color=color, fill_opacity=0.22, stroke_width=3)
    txt = Text("V" if valor else "F", font_size=int(28 * escala), color=color, weight=BOLD).move_to(circ)
    return VGroup(circ, txt)


def paso_tarjeta(num: int, titulo: str, desc: str, color: str) -> VGroup:
    fondo = RoundedRectangle(
        corner_radius=0.12, width=3.15, height=1.55,
        color=color, stroke_width=2, fill_color=color, fill_opacity=0.10,
    )
    n = Circle(radius=0.22, color=color, fill_color=color, fill_opacity=0.35, stroke_width=2)
    n_lbl = Text(str(num), font_size=16, color=color, weight=BOLD).move_to(n)
    tit = Text(titulo, font_size=17, color=color, weight=BOLD)
    des = Text(desc, font_size=13, color=GRIS_CLARO, line_spacing=1.05)
    grp = VGroup(VGroup(n, n_lbl), tit, des).arrange(DOWN, buff=0.14)
    encajar_vertical(grp, fondo, margen=0.18)
    return VGroup(fondo, grp)


def fila_eval(x: int | float, expr: str, ok: bool) -> VGroup:
    izq = MathTex(rf"x = {x}", font_size=24, color=WHITE)
    mid = Text(expr, font_size=15, color=GRIS_CLARO)
    sello = sello_vf(ok, escala=0.55)
    fila = VGroup(izq, mid, sello).arrange(RIGHT, buff=0.28)
    return fila


def eje_chip(d: float, ok: bool) -> VGroup:
    cuerpo = RoundedRectangle(
        corner_radius=0.06, width=0.95, height=0.38,
        color=VERDE if ok else ROJO,
        fill_color=VERDE if ok else ROJO,
        fill_opacity=0.22 if ok else 0.18,
        stroke_width=2,
    )
    lbl = Text(f"{d}", font_size=14, color=WHITE, weight=BOLD).move_to(cuerpo)
    icon = Text("✓" if ok else "✗", font_size=13, color=VERDE if ok else ROJO, weight=BOLD)
    icon.next_to(cuerpo, UP, buff=0.06)
    return VGroup(cuerpo, lbl, icon)


def linea_cinta(n: int = 10) -> VGroup:
    cinta = RoundedRectangle(
        corner_radius=0.08, width=8.5, height=0.35,
        color=GRIS, fill_color=GRIS, fill_opacity=0.25, stroke_width=2,
    )
    flecha = Arrow(cinta.get_left() + LEFT * 0.5, cinta.get_right() + RIGHT * 0.5, color=AZUL_CLARO, buff=0)
    lbl = Text("Línea CNC — medición al final", font_size=14, color=GRIS_CLARO)
    lbl.next_to(cinta, UP, buff=0.18)
    ejes = VGroup(*[
        Rectangle(width=0.55, height=0.14, color=AMARILLO, fill_color=AMARILLO, fill_opacity=0.6, stroke_width=1)
        for _ in range(n)
    ]).arrange(RIGHT, buff=0.12).move_to(cinta)
    return VGroup(flecha, cinta, ejes, lbl)


def tarjeta_caso(titulo: str, ejemplo: str, color: str) -> VGroup:
    fondo = RoundedRectangle(
        corner_radius=0.14, width=3.45, height=2.15,
        color=color, stroke_width=2, fill_color=color, fill_opacity=0.10,
    )
    tit = Text(titulo, font_size=18, color=color, weight=BOLD)
    ej = Text(ejemplo, font_size=14, color=GRIS_CLARO, line_spacing=1.05)
    grp = VGroup(tit, ej).arrange(DOWN, buff=0.22)
    encajar_vertical(grp, fondo, margen=0.22)
    return VGroup(fondo, grp)


# ══════════════════════════════════════════════════════════════════
class _ConjuntoSolucionBase(Scene):
    section_starts: list[float]
    _t: float
    incluir_bloque_5: bool = False
    sync_file: Path = SYNC_FILE

    def setup(self) -> None:
        self.section_starts = cargar_section_starts(self.sync_file)
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

    def _next_section(self, bloque_visual: int) -> int:
        if self.incluir_bloque_5:
            return bloque_visual
        if bloque_visual <= 4:
            return bloque_visual
        return bloque_visual - 1

    def construct(self):
        self.camera.background_color = FONDO
        self._bloque_1_apertura()
        self._bloque_2_definicion()
        self._bloque_3_ejemplo_finito()
        self._bloque_4_ejemplo_enteros()
        if self.incluir_bloque_5:
            self._bloque_5_ejemplo_real()
        self._bloque_6_cnc()
        self._bloque_7_vacio_universal()
        self._bloque_8_dos_condiciones()
        self._bloque_9_cierre()

    # ── BLOQUE 1 — Apertura ───────────────────────────────────────
    def _bloque_1_apertura(self):
        titulo = tarjeta_titulo(
            "S2·C2 · Conjunto solución de una proposición abierta",
            AZUL_CLARO, ancho=8.5,
        ).to_edge(UP, buff=0.38)

        cinta = linea_cinta(10).move_to(UP * 1.55)

        prop = MathTex(
            r"P(d): \quad 24.5 \leq d \leq 25.5 \text{ mm}",
            font_size=30, color=AMARILLO,
        ).next_to(cinta, DOWN, buff=0.55)

        nota = Text(
            "10 ejes fabricados — algunos cumplen, otros no.",
            font_size=18, color=GRIS,
        ).next_to(prop, DOWN, buff=0.35)

        conjunto = MathTex(
            r"A = \{d \mid P(d)\} \quad \text{(conjunto solución)}",
            font_size=26, color=VERDE,
        ).next_to(nota, DOWN, buff=0.35)

        marco = SurroundingRectangle(conjunto, color=VERDE, buff=0.18, corner_radius=0.10, stroke_width=2)

        self.play(FadeIn(titulo, shift=DOWN * 0.15), run_time=0.5)
        self._tick(0.5)
        self.play(FadeIn(cinta, shift=RIGHT * 0.2), run_time=0.75)
        self._tick(0.75)
        self.play(Write(prop), run_time=0.85)
        self._tick(0.85)
        self.play(FadeIn(nota, shift=UP * 0.1), run_time=0.55)
        self._tick(0.55)
        self.play(Write(conjunto), Create(marco), run_time=0.75)
        self._tick(0.75)

        fadeout = 0.6
        self._sync_wait(1, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 2 — Definición formal ──────────────────────────────
    def _bloque_2_definicion(self):
        enc = tarjeta_titulo("Conjunto solución de P(x)", AZUL_CLARO, ancho=6.0)
        enc.to_edge(UP, buff=0.38)

        def_box = RoundedRectangle(
            corner_radius=0.14, width=10.2, height=1.65,
            color=AZUL_CLARO, stroke_width=2, fill_color=AZUL_CLARO, fill_opacity=0.12,
        ).move_to(UP * 1.35)

        def_txt = Text(
            "Conjunto de todos los valores de x en U\n"
            "para los cuales P(x) es verdadera.",
            font_size=19, color=WHITE, line_spacing=1.1,
        )
        encajar_vertical(def_txt, def_box, margen=0.26)

        pasos = VGroup(
            paso_tarjeta(1, "Universo U", "¿Dónde buscamos?", AZUL_CLARO),
            paso_tarjeta(2, "Evaluar P(x)", "¿V o F?", AMARILLO),
            paso_tarjeta(3, "Incluir V", "Formar el conjunto", VERDE),
        ).arrange(RIGHT, buff=0.28).next_to(def_box, DOWN, buff=0.45)

        self.play(FadeIn(enc, shift=DOWN * 0.15), run_time=0.5)
        self._tick(0.5)
        self.play(DrawBorderThenFill(def_box), FadeIn(def_txt), run_time=0.85)
        self._tick(0.85)
        self.play(LaggedStart(*[FadeIn(p, shift=UP * 0.15) for p in pasos], lag_ratio=0.22), run_time=1.1)
        self._tick(1.1)

        fadeout = 0.6
        self._sync_wait(2, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 3 — Ejemplo universo finito ───────────────────────
    def _bloque_3_ejemplo_finito(self):
        enc = tarjeta_titulo("Ejemplo 1 — universo finito", VERDE, ancho=5.5)
        enc.to_edge(UP, buff=0.38)

        px = MathTex(r"P(x): \quad x + 3 > 6", font_size=32, color=WHITE)
        ux = MathTex(r"U = \{1, 2, 3, 4, 5, 6, 7\}", font_size=26, color=AZUL_CLARO)
        header = VGroup(px, ux).arrange(DOWN, buff=0.22).next_to(enc, DOWN, buff=0.35)

        evals_data = [
            (1, "1+3=4  →  no > 6", False),
            (2, "2+3=5  →  no > 6", False),
            (3, "3+3=6  →  no > 6", False),
            (4, "4+3=7  →  sí > 6", True),
        ]
        filas = VGroup(*[fila_eval(x, txt, ok) for x, txt, ok in evals_data])
        filas.arrange(DOWN, buff=0.18, aligned_edge=LEFT).next_to(header, DOWN, buff=0.35)

        resto = VGroup(
            fila_eval(5, "5+3=8  →  sí > 6", True),
            fila_eval(6, "6+3=9  →  sí > 6", True),
            fila_eval(7, "7+3=10 →  sí > 6", True),
        ).arrange(DOWN, buff=0.16, aligned_edge=LEFT)

        sol = MathTex(r"A = \{4, 5, 6, 7\}", font_size=30, color=VERDE)
        sol_box = SurroundingRectangle(sol, color=VERDE, buff=0.16, corner_radius=0.08, stroke_width=2)

        self.play(FadeIn(enc), Write(header), run_time=0.75)
        self._tick(0.75)

        for fila in filas:
            self.play(FadeIn(fila, shift=RIGHT * 0.15), run_time=0.45)
            self._tick(0.45)

        resto.next_to(filas, DOWN, buff=0.22).align_to(filas, LEFT)
        self.play(LaggedStart(*[FadeIn(f, shift=RIGHT * 0.1) for f in resto], lag_ratio=0.2), run_time=0.85)
        self._tick(0.85)

        sol_grp = VGroup(sol, sol_box).next_to(resto, DOWN, buff=0.35)
        self.play(Write(sol), Create(sol_box), run_time=0.75)
        self._tick(0.75)

        fadeout = 0.6
        self._sync_wait(3, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 4 — Ecuación en enteros ────────────────────────────
    def _bloque_4_ejemplo_enteros(self):
        enc = tarjeta_titulo("Ejemplo 2 — ecuación en ℤ", NARANJA, ancho=5.5)
        enc.to_edge(UP, buff=0.38)

        px = MathTex(r"P(x): \quad x^2 = 9", font_size=34, color=WHITE)
        ux = MathTex(r"U = \mathbb{Z}", font_size=28, color=AZUL_CLARO)
        header = VGroup(px, ux).arrange(DOWN, buff=0.22).next_to(enc, DOWN, buff=0.35)

        casos = VGroup(
            fila_eval(3, "3² = 9  →  entra", True),
            fila_eval(-3, "(-3)² = 9  →  entra", True),
            Text("Otros enteros → cuadrado ≠ 9 → no entran", font_size=16, color=GRIS),
        ).arrange(DOWN, buff=0.28, aligned_edge=LEFT).next_to(header, DOWN, buff=0.45)

        sol = MathTex(r"A = \{-3,\ 3\}", font_size=32, color=VERDE)
        marco = SurroundingRectangle(sol, color=VERDE, buff=0.16, corner_radius=0.08, stroke_width=2)

        self.play(FadeIn(enc), Write(header), run_time=0.7)
        self._tick(0.7)
        self.play(LaggedStart(*[FadeIn(c, shift=RIGHT * 0.15) for c in casos], lag_ratio=0.25), run_time=1.0)
        self._tick(1.0)
        sol_grp = VGroup(sol, marco).next_to(casos, DOWN, buff=0.45)
        self.play(Write(sol), Create(marco), run_time=0.75)
        self._tick(0.75)

        fadeout = 0.6
        self._sync_wait(4, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 5 — Universo real ──────────────────────────────────
    def _bloque_5_ejemplo_real(self):
        enc = tarjeta_titulo("Ejemplo 3 — universo ℝ", VIOLETA, ancho=5.2)
        enc.to_edge(UP, buff=0.38)

        px = MathTex(r"P(x): \quad 24.5 \leq x \leq 25.5", font_size=30, color=WHITE)
        ux = MathTex(r"U = \mathbb{R}", font_size=28, color=AZUL_CLARO)
        header = VGroup(px, ux).arrange(DOWN, buff=0.22).next_to(enc, DOWN, buff=0.35)

        recta = NumberLine(
            x_range=[24, 26, 0.5], length=9.0, color=GRIS,
            include_numbers=True,
            numbers_with_elongated_ticks=[24, 24.5, 25, 25.5, 26],
            font_size=22,
        ).move_to(DOWN * 0.05)

        zona = Rectangle(
            width=recta.n2p(25.5)[0] - recta.n2p(24.5)[0],
            height=0.42, color=VERDE, fill_color=VERDE, fill_opacity=0.30, stroke_width=0,
        ).move_to(recta.n2p(25) + UP * 0.22)

        intervalo = MathTex(r"A = [24.5,\ 25.5]", font_size=30, color=VERDE)
        nota = Text(
            "Infinitos reales — no es lista finita.",
            font_size=17, color=GRIS_CLARO, slant=ITALIC,
        )

        self.play(FadeIn(enc), Write(header), run_time=0.7)
        self._tick(0.7)
        self.play(Create(recta), FadeIn(zona), run_time=0.85)
        self._tick(0.85)
        intervalo.next_to(recta, DOWN, buff=0.55)
        nota.next_to(intervalo, DOWN, buff=0.22)
        self.play(Write(intervalo), FadeIn(nota), run_time=0.75)
        self._tick(0.75)

        fadeout = 0.6
        self._sync_wait(self._next_section(5), fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 6 — Aplicación CNC ─────────────────────────────────
    def _bloque_6_cnc(self):
        enc = tarjeta_titulo("Aplicación CNC — 10 ejes", AMARILLO, ancho=5.5)
        enc.to_edge(UP, buff=0.38)

        prop = MathTex(r"P(d): \quad 24.5 \leq d \leq 25.5 \text{ mm}", font_size=26, color=WHITE)
        prop.next_to(enc, DOWN, buff=0.32)

        ok_vals = [24.8, 25.0, 25.5, 24.9, 25.1, 25.3, 24.6, 25.4]
        bad_vals = [24.3, 25.7]

        chips_ok = VGroup(*[eje_chip(d, True) for d in ok_vals]).arrange_in_grid(rows=2, cols=4, buff=(0.18, 0.22))
        chips_bad = VGroup(*[eje_chip(d, False) for d in bad_vals]).arrange(RIGHT, buff=0.25)

        panel_ok = RoundedRectangle(
            corner_radius=0.12, width=8.8, height=1.55,
            color=VERDE, stroke_width=2, fill_color=VERDE, fill_opacity=0.08,
        )
        lbl_ok = Text("Conjunto solución — 8 ejes", font_size=15, color=VERDE, weight=BOLD)
        chips_ok.move_to(panel_ok)
        grp_ok = VGroup(panel_ok, chips_ok)
        lbl_ok.next_to(grp_ok, UP, buff=0.12)

        panel_bad = RoundedRectangle(
            corner_radius=0.12, width=3.2, height=0.85,
            color=ROJO, stroke_width=2, fill_color=ROJO, fill_opacity=0.08,
        )
        lbl_bad = Text("Rechazados", font_size=14, color=ROJO, weight=BOLD)
        chips_bad.move_to(panel_bad)
        grp_bad = VGroup(panel_bad, chips_bad)
        lbl_bad.next_to(grp_bad, UP, buff=0.10)

        grupos = VGroup(
            VGroup(lbl_ok, grp_ok),
            VGroup(lbl_bad, grp_bad),
        ).arrange(DOWN, buff=0.35).next_to(prop, DOWN, buff=0.35)

        card = MathTex(r"|A| = 8 \text{ de } 10 \text{ ejes}", font_size=28, color=AMARILLO)
        card.next_to(grupos, DOWN, buff=0.35)

        self.play(FadeIn(enc), Write(prop), run_time=0.65)
        self._tick(0.65)
        self.play(DrawBorderThenFill(panel_ok), FadeIn(lbl_ok), LaggedStart(*[FadeIn(c) for c in chips_ok], lag_ratio=0.08), run_time=1.1)
        self._tick(1.1)
        self.play(DrawBorderThenFill(panel_bad), FadeIn(lbl_bad), FadeIn(chips_bad), run_time=0.75)
        self._tick(0.75)
        self.play(Write(card), run_time=0.65)
        self._tick(0.65)

        fadeout = 0.6
        self._sync_wait(self._next_section(6), fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 7 — Vacío y universal ──────────────────────────────
    def _bloque_7_vacio_universal(self):
        enc = tarjeta_titulo("Tres casos posibles", AZUL_CLARO, ancho=4.5)
        enc.to_edge(UP, buff=0.38)

        tarjetas = VGroup(
            tarjeta_caso("Conjunto vacío ∅", "Ningún valor de U\nhace verdadera P(x)", ROJO),
            tarjeta_caso("Conjunto universal", "Todos los valores de U\ncumplen P(x)", VERDE),
            tarjeta_caso("Subconjunto propio", "Algunos entran,\notros no", AMARILLO),
        ).arrange(RIGHT, buff=0.25).move_to(DOWN * 0.15)

        self.play(FadeIn(enc, shift=DOWN * 0.15), run_time=0.5)
        self._tick(0.5)
        self.play(LaggedStart(*[FadeIn(t, shift=UP * 0.15) for t in tarjetas], lag_ratio=0.22), run_time=1.2)
        self._tick(1.2)

        fadeout = 0.6
        self._sync_wait(self._next_section(7), fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 8 — Dos condiciones ────────────────────────────────
    def _bloque_8_dos_condiciones(self):
        enc = tarjeta_titulo("Proposición con dos condiciones", NARANJA, ancho=6.2)
        enc.to_edge(UP, buff=0.38)

        col_y = RoundedRectangle(
            corner_radius=0.14, width=5.0, height=3.2,
            color=AZUL_CLARO, stroke_width=2, fill_color=AZUL_CLARO, fill_opacity=0.08,
        )
        col_o = RoundedRectangle(
            corner_radius=0.14, width=5.0, height=3.2,
            color=NARANJA, stroke_width=2, fill_color=NARANJA, fill_opacity=0.08,
        )
        columnas = VGroup(col_y, col_o).arrange(RIGHT, buff=0.45).move_to(DOWN * 0.1)

        txt_y = VGroup(
            Text("Conectivo  Y", font_size=20, color=AZUL_CLARO, weight=BOLD),
            Text("Debe cumplir las\nDOS condiciones", font_size=16, color=GRIS_CLARO, line_spacing=1.1),
            MathTex(r"P(x): A(x) \land B(x)", font_size=24, color=WHITE),
        ).arrange(DOWN, buff=0.28).move_to(col_y)

        txt_o = VGroup(
            Text("Conectivo  O", font_size=20, color=NARANJA, weight=BOLD),
            Text("Basta UNA condición\npara entrar", font_size=16, color=GRIS_CLARO, line_spacing=1.1),
            MathTex(r"P(x): A(x) \lor B(x)", font_size=24, color=WHITE),
        ).arrange(DOWN, buff=0.28).move_to(col_o)

        self.play(FadeIn(enc), run_time=0.45)
        self._tick(0.45)
        self.play(DrawBorderThenFill(col_y), FadeIn(txt_y), run_time=0.7)
        self._tick(0.7)
        self.play(DrawBorderThenFill(col_o), FadeIn(txt_o), run_time=0.7)
        self._tick(0.7)

        fadeout = 0.6
        self._sync_wait(self._next_section(8), fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 9 — Cierre ─────────────────────────────────────────
    def _bloque_9_cierre(self):
        titulo = Text("Resumen", font_size=34, color=WHITE, weight=BOLD).to_edge(UP, buff=0.42)

        pasos = VGroup(
            paso_tarjeta(1, "Identificar U", "Universo de búsqueda", AZUL_CLARO),
            paso_tarjeta(2, "Evaluar P(x)", "Verdadero o falso", AMARILLO),
            paso_tarjeta(3, "Conservar V", "Conjunto solución A", VERDE),
        ).arrange(RIGHT, buff=0.28).move_to(UP * 0.15)

        cierre = Text(
            "A contiene exactamente los valores de U\nque hacen verdadera la proposición.",
            font_size=20, color=VERDE, line_spacing=1.12, weight=BOLD,
        ).next_to(pasos, DOWN, buff=0.55)

        marco = SurroundingRectangle(cierre, color=VERDE, buff=0.2, corner_radius=0.10, stroke_width=2)

        self.play(FadeIn(titulo, shift=DOWN * 0.15), run_time=0.45)
        self._tick(0.45)
        self.play(LaggedStart(*[FadeIn(p, shift=UP * 0.12) for p in pasos], lag_ratio=0.2), run_time=1.0)
        self._tick(1.0)
        self.play(FadeIn(cierre, shift=UP * 0.1), Create(marco), run_time=0.65)
        self._tick(0.65)

        fadeout = 0.8
        fin_audio = cargar_fin_audio(self.sync_file)
        restante = fin_audio - self._t - fadeout
        if restante > 0:
            self.wait(restante)
            self._tick(restante)

        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)


class ConjuntoSolucion(_ConjuntoSolucionBase):
    incluir_bloque_5 = False
    sync_file = SYNC_FILE


class ConjuntoSolucionFull(_ConjuntoSolucionBase):
    incluir_bloque_5 = True
    sync_file = SYNC_FILE_FULL


if __name__ == "__main__":
    print("Renderiza con: manim -pql video_s2c2_conjunto_solucion.py ConjuntoSolucion")
    print("Version completa: manim -pql video_s2c2_conjunto_solucion.py ConjuntoSolucionFull")
