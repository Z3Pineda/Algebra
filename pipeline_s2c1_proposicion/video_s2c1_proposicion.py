"""
S2·C1 — Proposición y valor de verdad
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Renderizar (prueba):
    manim -pql video_s2c1_proposicion.py Proposicion

Renderizar (final):
    manim -pqh video_s2c1_proposicion.py Proposicion

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
    return [0.0, 25.73, 74.95, 104.80, 130.30, 158.98, 195.53]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 219.19

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


# ══════════════════════════════════════════════════════════════════
# HELPERS VISUALES
# ══════════════════════════════════════════════════════════════════

def tarjeta_titulo(texto: str, color: str, ancho: float = 5.0) -> VGroup:
    rect = RoundedRectangle(
        corner_radius=0.12, width=ancho, height=0.72,
        color=color, stroke_width=2,
        fill_color=color, fill_opacity=0.15,
    )
    lbl = Text(texto, font_size=24, color=color, weight=BOLD).move_to(rect)
    return VGroup(rect, lbl)


def badge(texto: str, color: str, ancho: float = 1.4) -> VGroup:
    rect = RoundedRectangle(
        corner_radius=0.10, width=ancho, height=0.52,
        color=color, fill_color=color, fill_opacity=0.28, stroke_width=2,
    )
    lbl = Text(texto, font_size=17, color=color, weight=BOLD).move_to(rect)
    return VGroup(rect, lbl)


def engranaje(radio: float = 0.45, dientes: int = 12, color: str = NARANJA) -> VGroup:
    cuerpo = Circle(
        radius=radio * 0.62, color=color,
        fill_color=color, fill_opacity=1, stroke_width=0,
    )
    agujero = Circle(
        radius=radio * 0.18, color=FONDO,
        fill_color=FONDO, fill_opacity=1, stroke_width=0,
    )
    grp = VGroup()
    for i in range(dientes):
        ang = i * TAU / dientes
        d = Rectangle(
            width=radio * 0.22, height=radio * 0.38,
            color=color, fill_color=color, fill_opacity=1, stroke_width=0,
        )
        d.move_to(radio * 0.84 * np.array([np.cos(ang), np.sin(ang), 0]))
        d.rotate(ang + PI / 2)
        grp.add(d)
    return VGroup(grp, cuerpo, agujero)


def fresadora_cnc() -> VGroup:
    """Esquema simplificado de fresadora CNC."""
    base = RoundedRectangle(
        corner_radius=0.08, width=3.6, height=0.55,
        color=GRIS, fill_color=GRIS, fill_opacity=0.35, stroke_width=2,
    )
    columna = Rectangle(
        width=0.55, height=2.0, color=AZUL_CLARO,
        fill_color=AZUL_OSCURO, fill_opacity=0.9, stroke_width=2,
    ).next_to(base, UP, buff=0).align_to(base, LEFT).shift(RIGHT * 0.45)

    carril = Line(
        columna.get_top() + RIGHT * 0.2,
        columna.get_top() + RIGHT * 2.4,
        color=GRIS_CLARO, stroke_width=3,
    )
    husillo = Rectangle(
        width=0.22, height=0.95, color=GRIS_CLARO,
        fill_color=GRIS_CLARO, fill_opacity=1, stroke_width=0,
    ).move_to(carril.get_center() + DOWN * 0.55)

    punta = Triangle(color=NARANJA, fill_color=NARANJA, fill_opacity=1, stroke_width=0)
    punta.scale(0.14).next_to(husillo, DOWN, buff=0.02)

    pieza = RoundedRectangle(
        corner_radius=0.05, width=1.5, height=0.28,
        color=AMARILLO, fill_color=AMARILLO, fill_opacity=0.55, stroke_width=2,
    ).move_to(base.get_center() + UP * 0.18 + RIGHT * 0.5)

    eng = engranaje(radio=0.32, color=NARANJA).move_to(base.get_center() + LEFT * 1.1)

    lbl = Text("Fresadora CNC", font_size=16, color=GRIS_CLARO)
    lbl.next_to(base, DOWN, buff=0.18)

    return VGroup(base, columna, carril, husillo, punta, pieza, eng, lbl)


def widget_sensor(etiqueta: str, valor: str, color: str) -> VGroup:
    marco = RoundedRectangle(
        corner_radius=0.10, width=2.05, height=1.05,
        color=color, stroke_width=2,
        fill_color=color, fill_opacity=0.12,
    )
    dot = Dot(color=color, radius=0.07).move_to(marco.get_corner(UL) + RIGHT * 0.22 + DOWN * 0.18)
    lbl = Text(etiqueta, font_size=14, color=GRIS_CLARO).move_to(marco.get_top() + DOWN * 0.28)
    val = Text(valor, font_size=22, color=color, weight=BOLD).move_to(marco.get_center() + DOWN * 0.12)
    return VGroup(marco, dot, lbl, val)


def icono_tipo(tipo: str) -> VGroup:
    if tipo == "temp":
        tubo = RoundedRectangle(
            corner_radius=0.04, width=0.18, height=0.62,
            color=ROJO, fill_color=ROJO, fill_opacity=0.25, stroke_width=2,
        )
        bulb = Circle(radius=0.14, color=ROJO, fill_color=ROJO, fill_opacity=0.5, stroke_width=2)
        bulb.next_to(tubo, DOWN, buff=0)
        mer = Rectangle(
            width=0.12, height=0.38, color=ROJO,
            fill_color=ROJO, fill_opacity=0.85, stroke_width=0,
        ).move_to(tubo.get_center() + DOWN * 0.08)
        return VGroup(tubo, bulb, mer)

    if tipo == "presion":
        c = Circle(radius=0.32, color=AZUL_CLARO, stroke_width=2)
        aguja = Line(ORIGIN, UP * 0.22, color=AMARILLO, stroke_width=3)
        aguja.rotate(-PI / 4)
        return VGroup(c, aguja)

    if tipo == "rpm":
        c = Circle(radius=0.30, color=VIOLETA, stroke_width=2)
        t = Text("?", font_size=28, color=VIOLETA, weight=BOLD).move_to(c)
        return VGroup(c, t)

    if tipo == "orden":
        octo = RegularPolygon(n=8, color=ROJO, fill_color=ROJO, fill_opacity=0.85, stroke_width=0)
        octo.scale(0.34)
        t = Text("!", font_size=24, color=WHITE, weight=BOLD).move_to(octo)
        return VGroup(octo, t)

    # ambiguo
    tri = Triangle(color=AMARILLO, fill_color=AMARILLO, fill_opacity=0.85, stroke_width=0)
    tri.scale(0.38).rotate(PI)
    t = Text("!", font_size=22, color=FONDO, weight=BOLD).move_to(tri.get_center() + DOWN * 0.04)
    return VGroup(tri, t)


def caja_vf(ancho: float = 1.72, alto: float = 0.62) -> VGroup:
    """Marco con badges V y F sin empalmar con el borde."""
    marco = RoundedRectangle(
        corner_radius=0.10, width=ancho, height=alto,
        color=AMARILLO, stroke_width=2,
        fill_color=AMARILLO, fill_opacity=0.14,
    )
    v = badge("V", VERDE, ancho=0.58)
    f = badge("F", ROJO, ancho=0.58)
    inner = VGroup(v, f).arrange(RIGHT, buff=0.22)
    inner.scale_to_fit_width(ancho - 0.28)
    inner.move_to(marco.get_center())
    return VGroup(marco, inner)


def encajar_vertical(grupo: Mobject, caja: Mobject, margen: float = 0.22) -> None:
    """Escala y centra un grupo dentro de un recuadro con margen."""
    alto_disp = caja.height - 2 * margen
    if grupo.height > alto_disp:
        grupo.scale_to_fit_height(alto_disp)
    grupo.move_to(caja.get_center())


def fila_panel(texto: str, tipo: str, es_prop: bool | None) -> VGroup:
    fondo = RoundedRectangle(
        corner_radius=0.10, width=10.0, height=0.72,
        color=GRIS, fill_color=PANEL_BG, fill_opacity=0.9, stroke_width=1,
    )

    icono = icono_tipo(tipo).scale(0.65)
    icon_box = RoundedRectangle(
        corner_radius=0.08, width=0.68, height=0.68,
        color=GRIS, fill_color=GRIS, fill_opacity=0.15, stroke_width=1,
    )
    icono.move_to(icon_box)

    msg = Text(texto, font_size=13, color=WHITE)

    if es_prop is True:
        b = badge("PROP. ✓", VERDE, ancho=1.35)
    elif es_prop is False:
        b = badge("NO PROP. ✗", ROJO, ancho=1.45)
    else:
        b = badge("?", AMARILLO, ancho=0.80)

    izq = VGroup(VGroup(icon_box, icono), msg).arrange(RIGHT, buff=0.18)
    izq.move_to(fondo.get_left() + RIGHT * (0.26 + izq.width / 2))
    b.move_to(fondo.get_right() + LEFT * (0.24 + b.width / 2))
    izq.set_y(fondo.get_center()[1])
    b.set_y(fondo.get_center()[1])
    b.set_opacity(0)

    return VGroup(fondo, VGroup(izq, b))


def tarjeta_concepto(
    titulo: str,
    ejemplo: str,
    razon: str,
    color: str,
    icono: Mobject | None = None,
) -> VGroup:
    fondo = RoundedRectangle(
        corner_radius=0.14, width=3.55, height=2.65,
        color=color, stroke_width=2,
        fill_color=color, fill_opacity=0.10,
    )
    tit = Text(titulo, font_size=18, color=color, weight=BOLD)
    ej = Text(ejemplo, font_size=14, color=GRIS_CLARO, slant=ITALIC, line_spacing=1.0)
    rz = Text(razon, font_size=13, color=GRIS, line_spacing=1.05)
    partes = [tit, ej, rz]
    if icono is not None:
        partes.insert(0, icono.copy().scale(0.68))
    grp = VGroup(*partes).arrange(DOWN, buff=0.16)
    encajar_vertical(grp, fondo, margen=0.24)
    return VGroup(fondo, grp)


def termometro_comparacion(es_ambiguo: bool) -> VGroup:
    tubo = RoundedRectangle(
        corner_radius=0.05, width=0.28, height=1.55,
        color=GRIS, fill_color=GRIS, fill_opacity=0.2, stroke_width=2,
    )
    bulb = Circle(radius=0.20, color=GRIS, fill_color=GRIS, fill_opacity=0.2, stroke_width=2)
    bulb.next_to(tubo, DOWN, buff=0)

    if es_ambiguo:
        mer = Rectangle(
            width=0.18, height=0.55, color=AMARILLO,
            fill_color=AMARILLO, fill_opacity=0.7, stroke_width=0,
        ).move_to(tubo.get_center() + DOWN * 0.35)
        zona = DashedLine(
            tubo.get_right() + RIGHT * 0.15 + UP * 0.2,
            tubo.get_right() + RIGHT * 0.55 + UP * 0.2,
            color=AMARILLO, dash_length=0.06,
        )
        lbl = Text("¿alta?", font_size=15, color=AMARILLO, slant=ITALIC)
        lbl.next_to(zona, RIGHT, buff=0.08)
        return VGroup(tubo, bulb, mer, zona, lbl)

    umbral = DashedLine(
        tubo.get_left() + LEFT * 0.12 + UP * 0.15,
        tubo.get_right() + RIGHT * 0.12 + UP * 0.15,
        color=VERDE, dash_length=0.06,
    )
    mer = Rectangle(
        width=0.18, height=0.95, color=ROJO,
        fill_color=ROJO, fill_opacity=0.75, stroke_width=0,
    ).move_to(tubo.get_center() + UP * 0.05)
    lbl = Text("80°C", font_size=15, color=VERDE, weight=BOLD)
    lbl.next_to(umbral, LEFT, buff=0.08)
    sensor = Text("sensor", font_size=13, color=GRIS_CLARO)
    sensor.next_to(bulb, DOWN, buff=0.12)
    return VGroup(tubo, bulb, mer, umbral, lbl, sensor)


def sello_vf(valor: bool) -> VGroup:
    color = VERDE if valor else ROJO
    circ = Circle(radius=0.38, color=color, fill_color=color, fill_opacity=0.22, stroke_width=3)
    txt = Text("V" if valor else "F", font_size=34, color=color, weight=BOLD).move_to(circ)
    return VGroup(circ, txt)


def eje_tolerancia(d: float, aprobado: bool) -> VGroup:
    cuerpo = Rectangle(
        width=1.35, height=0.22, color=GRIS_CLARO,
        fill_color=GRIS_CLARO, fill_opacity=0.35, stroke_width=2,
    )
    borde = Line(
        cuerpo.get_left() + UP * 0.11, cuerpo.get_right() + UP * 0.11,
        color=WHITE, stroke_width=1,
    )
    lbl = Text(f"d = {d} mm", font_size=16, color=WHITE, weight=BOLD)
    lbl.next_to(cuerpo, UP, buff=0.12)
    sello = sello_vf(aprobado).scale(0.55).next_to(cuerpo, RIGHT, buff=0.22)
    estado = Text(
        "APROBADO" if aprobado else "RECHAZADO",
        font_size=14, color=VERDE if aprobado else ROJO, weight=BOLD,
    ).next_to(cuerpo, DOWN, buff=0.12)
    return VGroup(cuerpo, borde, lbl, sello, estado)


def tarjeta_resumen(titulo: str, texto: str, color: str) -> VGroup:
    fondo = RoundedRectangle(
        corner_radius=0.14, width=5.4, height=1.35,
        color=color, stroke_width=2,
        fill_color=color, fill_opacity=0.12,
    )
    t = Text(titulo, font_size=19, color=color, weight=BOLD).align_to(fondo, UP).shift(DOWN * 0.28)
    d = Text(texto, font_size=14, color=GRIS_CLARO, line_spacing=1.05)
    d.next_to(t, DOWN, buff=0.16)
    if d.get_bottom()[1] < fondo.get_bottom()[1] + 0.14:
        d.scale_to_fit_width(fondo.width - 0.45)
        d.next_to(t, DOWN, buff=0.16)
        d.shift(UP * (fondo.get_bottom()[1] + 0.14 - d.get_bottom()[1]))
    return VGroup(fondo, t, d)


# ══════════════════════════════════════════════════════════════════
class Proposicion(Scene):
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
        self._bloque_1_apertura()
        self._bloque_2_panel()
        self._bloque_3_definicion()
        self._bloque_4_ambiguo()
        self._bloque_5_abierta()
        self._bloque_6_conjunto()
        self._bloque_7_cierre()

    # ── BLOQUE 1 — Apertura ───────────────────────────────────────
    def _bloque_1_apertura(self):
        titulo = tarjeta_titulo("S2·C1 · Proposición y valor de verdad", AZUL_CLARO, ancho=7.2)
        titulo.to_edge(UP, buff=0.42)

        maquina = fresadora_cnc().scale(0.95).move_to(LEFT * 3.35 + DOWN * 0.15)
        husillo_grp = maquina[3]  # husillo
        engr = maquina[6]

        sensores = VGroup(
            widget_sensor("Temperatura", "82°C", ROJO),
            widget_sensor("Presión", "OK", AZUL_CLARO),
            widget_sensor("Velocidad", "1200", VIOLETA),
        ).arrange(DOWN, buff=0.18).next_to(maquina, RIGHT, buff=0.35)

        textos = VGroup(
            Text("Monitorea temperatura, presión y velocidad", font_size=21, color=WHITE),
            Text("en tiempo real — cada segundo.", font_size=21, color=WHITE),
            Text("¿Verdadero o falso? → decidir si detener", font_size=20, color=AMARILLO),
            Text("Solo las proposiciones lógicas\nse pueden evaluar así.", font_size=20, color=VERDE, weight=BOLD, line_spacing=1.1),
        ).arrange(DOWN, buff=0.22, aligned_edge=LEFT)
        textos.next_to(sensores, RIGHT, buff=0.55).align_to(sensores, UP)

        decision = caja_vf().next_to(textos, DOWN, buff=0.38).align_to(textos, LEFT)

        self.play(FadeIn(titulo, shift=DOWN * 0.15), run_time=0.55)
        self._tick(0.55)
        self.play(
            DrawBorderThenFill(maquina[0]),
            Create(maquina[1]),
            Create(maquina[2]),
            FadeIn(maquina[4:]),
            run_time=1.0,
        )
        self._tick(1.0)
        self.play(FadeIn(husillo_grp), FadeIn(maquina[5]), run_time=0.4)
        self._tick(0.4)
        self.play(
            LaggedStart(*[FadeIn(s, shift=LEFT * 0.2) for s in sensores], lag_ratio=0.25),
            run_time=0.9,
        )
        self._tick(0.9)
        self.play(
            Rotate(engr, angle=TAU / 3, about_point=engr.get_center()),
            Rotate(husillo_grp, angle=TAU / 2, about_point=husillo_grp.get_center()),
            run_time=1.1,
            rate_func=smooth,
        )
        self._tick(1.1)
        self.play(
            LaggedStart(*[FadeIn(t, shift=UP * 0.12) for t in textos], lag_ratio=0.2),
            run_time=1.0,
        )
        self._tick(1.0)
        self.play(FadeIn(decision, scale=0.8), run_time=0.5)
        self._tick(0.5)

        # Pulso en sensores durante la espera
        for _ in range(2):
            self.play(
                *[s[1].animate.set_color(WHITE) for s in sensores],
                run_time=0.25,
            )
            self._tick(0.25)
            self.play(
                *[s[1].animate.set_color([ROJO, AZUL_CLARO, VIOLETA][i]) for i, s in enumerate(sensores)],
                run_time=0.25,
            )
            self._tick(0.25)

        fadeout = 0.6
        self._sync_wait(1, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 2 — Panel de diagnóstico ───────────────────────────
    def _bloque_2_panel(self):
        encabezado = tarjeta_titulo("Panel de diagnóstico — Fresadora CNC", AZUL_CLARO, ancho=7.5)
        encabezado.to_edge(UP, buff=0.38)

        panel = RoundedRectangle(
            corner_radius=0.18, width=10.8, height=5.85,
            color=AZUL_CLARO, stroke_width=2,
            fill_color=PANEL_BG, fill_opacity=1,
        ).move_to(DOWN * 0.18)

        barra = Rectangle(
            width=10.8, height=0.48, color=AZUL_OSCURO,
            fill_color=AZUL_OSCURO, fill_opacity=0.95, stroke_width=0,
        ).align_to(panel, UP).shift(DOWN * 0.04)
        barra_txt = Text("● SISTEMA ACTIVO", font_size=14, color=VERDE, weight=BOLD)
        barra_txt.move_to(barra.get_center()).shift(LEFT * 3.55)
        hora = Text("t = 0 s", font_size=13, color=GRIS_CLARO)
        hora.move_to(barra.get_center()).shift(RIGHT * 3.85)

        mensajes_data = [
            ("Temp. del husillo supera 80 °C", "temp", True),
            ("Presión hidráulica en rango", "presion", True),
            ("¿Cuántos RPM tiene el husillo?", "rpm", False),
            ("¡Detener la operación!", "orden", False),
            ("La temperatura es alta", "ambiguo", False),
        ]
        filas = VGroup(*[fila_panel(txt, tipo, prop) for txt, tipo, prop in mensajes_data])
        filas.arrange(DOWN, buff=0.13, aligned_edge=LEFT)
        filas.next_to(barra, DOWN, buff=0.22)
        filas.set_x(panel.get_center()[0])

        margen_inf = 0.26
        limite_inf = panel.get_bottom()[1] + margen_inf
        if filas.get_bottom()[1] < limite_inf:
            filas.shift(UP * (limite_inf - filas.get_bottom()[1]))

        self.play(FadeIn(encabezado, shift=DOWN * 0.15), run_time=0.5)
        self._tick(0.5)
        self.play(DrawBorderThenFill(panel), FadeIn(barra), FadeIn(barra_txt), FadeIn(hora), run_time=0.75)
        self._tick(0.75)

        for i, fila in enumerate(filas):
            nueva_hora = Text(
                f"t = {i + 1} s", font_size=13, color=GRIS_CLARO,
            ).move_to(barra.get_center()).shift(RIGHT * 3.85)
            self.play(
                FadeIn(fila, shift=RIGHT * 0.35),
                Transform(hora, nueva_hora),
                run_time=0.45,
            )
            self._tick(0.45)

        self.wait(0.35)
        self._tick(0.35)

        for fila, (_, _, es_prop) in zip(filas, mensajes_data):
            badge_mob = fila[1][1]
            color_fondo = VERDE if es_prop else ROJO
            self.play(
                FadeIn(badge_mob, scale=0.7),
                fila[0].animate.set_stroke(color_fondo, width=2),
                run_time=0.45,
            )
            self._tick(0.45)
            self.wait(0.25)
            self._tick(0.25)

        fadeout = 0.7
        self._sync_wait(2, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 3 — Definición formal ──────────────────────────────
    def _bloque_3_definicion(self):
        encabezado = tarjeta_titulo("¿Qué es una proposición?", AZUL_CLARO, ancho=5.5)
        encabezado.to_edge(UP, buff=0.40)

        def_box = RoundedRectangle(
            corner_radius=0.14, width=10.0, height=1.75,
            color=AZUL_CLARO, stroke_width=2,
            fill_color=AZUL_CLARO, fill_opacity=0.12,
        ).move_to(UP * 1.45)

        def_txt = Text(
            "Enunciado declarativo al que se puede asignar\n"
            "un valor de verdad exacto: V o F.",
            font_size=20, color=WHITE, line_spacing=1.12,
        )
        def_txt.move_to(def_box.get_center() + LEFT * 1.05 + DOWN * 0.02)

        chips = caja_vf(ancho=1.55, alto=0.56).scale(0.92)
        chips.move_to(def_box.get_center() + RIGHT * 3.55)

        tarjetas = VGroup(
            tarjeta_concepto(
                "Pregunta",
                "¿Cuántos RPM tiene el husillo?",
                "No afirma ni niega\n— sin valor V/F",
                ROJO, icono_tipo("rpm"),
            ),
            tarjeta_concepto(
                "Orden",
                "¡Detener la operación!",
                "No es declarativa",
                NARANJA, icono_tipo("orden"),
            ),
            tarjeta_concepto(
                "Ambiguo",
                "La temperatura es alta",
                "Interpretación subjetiva",
                AMARILLO, icono_tipo("ambiguo"),
            ),
        ).arrange(RIGHT, buff=0.22)
        tarjetas.next_to(def_box, DOWN, buff=0.48)

        self.play(FadeIn(encabezado, shift=DOWN * 0.15), run_time=0.5)
        self._tick(0.5)
        self.play(DrawBorderThenFill(def_box), Write(def_txt), run_time=0.9)
        self._tick(0.9)
        self.play(FadeIn(chips, scale=0.85), run_time=0.45)
        self._tick(0.45)

        for t in tarjetas:
            self.play(FadeIn(t, shift=UP * 0.2), run_time=0.55)
            self._tick(0.55)
            self.wait(0.35)
            self._tick(0.35)

        fadeout = 0.6
        self._sync_wait(3, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 4 — Ambiguo vs verificable ─────────────────────────
    def _bloque_4_ambiguo(self):
        encabezado = tarjeta_titulo("Ambiguo vs. verificable", AMARILLO, ancho=5.5)
        encabezado.to_edge(UP, buff=0.42)

        col_mal = RoundedRectangle(
            corner_radius=0.16, width=5.2, height=4.5,
            color=ROJO, stroke_width=2, fill_color=ROJO, fill_opacity=0.08,
        )
        col_bien = RoundedRectangle(
            corner_radius=0.16, width=5.2, height=4.5,
            color=VERDE, stroke_width=2, fill_color=VERDE, fill_opacity=0.08,
        )
        columnas = VGroup(col_mal, col_bien).arrange(RIGHT, buff=0.45).move_to(DOWN * 0.15)

        term_mal = termometro_comparacion(True).scale(0.95).move_to(col_mal.get_center() + UP * 0.95)
        term_bien = termometro_comparacion(False).scale(0.95).move_to(col_bien.get_center() + UP * 0.95)

        txt_mal = VGroup(
            Text("✗  No es proposición", font_size=20, color=ROJO, weight=BOLD),
            Text('"La temperatura es alta"', font_size=21, color=ROJO, slant=ITALIC),
            Text("Sin umbral definido.\nDepende del contexto y del operador.", font_size=17, color=GRIS, line_spacing=1.1),
        ).arrange(DOWN, buff=0.22).move_to(col_mal.get_center() + DOWN * 1.05)

        txt_bien = VGroup(
            Text("✓  Sí es proposición", font_size=20, color=VERDE, weight=BOLD),
            Text('"La temperatura supera 80°C"', font_size=21, color=VERDE, slant=ITALIC),
            Text("Valor exacto + sensor.\nResultado verificable.", font_size=17, color=GRIS, line_spacing=1.1),
        ).arrange(DOWN, buff=0.22).move_to(col_bien.get_center() + DOWN * 1.05)

        self.play(FadeIn(encabezado, shift=DOWN * 0.15), run_time=0.5)
        self._tick(0.5)
        self.play(DrawBorderThenFill(col_mal), FadeIn(txt_mal[0]), run_time=0.55)
        self._tick(0.55)
        self.play(FadeIn(term_mal, shift=DOWN * 0.2), FadeIn(txt_mal[1:]), run_time=0.75)
        self._tick(0.75)
        self.play(
            Indicate(txt_mal[2], color=AMARILLO, scale_factor=1.03),
            Indicate(term_mal[3], color=AMARILLO, scale_factor=1.08),
            run_time=0.7,
        )
        self._tick(0.7)

        self.play(DrawBorderThenFill(col_bien), FadeIn(txt_bien[0]), run_time=0.55)
        self._tick(0.55)
        self.play(FadeIn(term_bien, shift=DOWN * 0.2), FadeIn(txt_bien[1:]), run_time=0.75)
        self._tick(0.75)
        self.play(
            Indicate(term_bien[3], color=VERDE, scale_factor=1.08),
            Flash(term_bien[4], color=VERDE, flash_radius=0.35),
            run_time=0.65,
        )
        self._tick(0.65)

        fadeout = 0.6
        self._sync_wait(4, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 5 — Proposición abierta P(x) ───────────────────────
    def _bloque_5_abierta(self):
        encabezado = tarjeta_titulo("Proposición abierta P(x)", AZUL_CLARO, ancho=5.8)
        encabezado.to_edge(UP, buff=0.42)

        caja_px = RoundedRectangle(
            corner_radius=0.12, width=4.2, height=0.95,
            color=AZUL_CLARO, stroke_width=2, fill_color=AZUL_CLARO, fill_opacity=0.12,
        ).move_to(UP * 1.85)
        px = MathTex(r"P(x): \quad x > 5", font_size=42, color=WHITE).move_to(caja_px)

        nota = Text(
            "Contiene una variable: el valor de verdad depende de x.",
            font_size=18, color=GRIS,
        ).next_to(caja_px, DOWN, buff=0.28)

        recta = NumberLine(
            x_range=[0, 10, 1], length=9.0, color=GRIS,
            include_numbers=True, numbers_with_elongated_ticks=[0, 5, 10],
            font_size=24,
        ).move_to(DOWN * 0.15)

        zona = Rectangle(
            width=recta.n2p(10)[0] - recta.n2p(5)[0],
            height=0.35, color=VERDE, fill_color=VERDE, fill_opacity=0.25, stroke_width=0,
        )
        zona.move_to(recta.n2p(7.5) + UP * 0.18)
        zona_lbl = MathTex(r"x > 5", font_size=24, color=VERDE).next_to(zona, UP, buff=0.12)
        corte = DashedLine(recta.n2p(5) + UP * 0.35, recta.n2p(5) + DOWN * 0.35, color=AMARILLO)

        self.play(FadeIn(encabezado, shift=DOWN * 0.15), run_time=0.5)
        self._tick(0.5)
        self.play(DrawBorderThenFill(caja_px), Write(px), run_time=0.8)
        self._tick(0.8)
        self.play(FadeIn(nota), Create(recta), run_time=0.7)
        self._tick(0.7)
        self.play(FadeIn(zona), Write(zona_lbl), Create(corte), run_time=0.65)
        self._tick(0.65)

        casos = [(3, False), (5, False), (7, True)]
        eval_grp = VGroup()
        for x, ok in casos:
            dot = Dot(recta.n2p(x), color=VERDE if ok else ROJO, radius=0.11)
            lbl = MathTex(rf"x={x}", font_size=26, color=WHITE).next_to(dot, DOWN, buff=0.35)
            sello = sello_vf(ok).scale(0.62).next_to(lbl, DOWN, buff=0.15)
            fila = VGroup(dot, lbl, sello)
            eval_grp.add(fila)

        for fila in eval_grp:
            self.play(
                FadeIn(fila[0], scale=0.5),
                Indicate(fila[0], color=VERDE if fila[2][1].text == "V" else ROJO),
                run_time=0.45,
            )
            self._tick(0.45)
            self.play(FadeIn(fila[1], shift=UP * 0.1), run_time=0.3)
            self._tick(0.3)
            self.play(FadeIn(fila[2], scale=0.5), run_time=0.35)
            self._tick(0.35)
            self.wait(0.25)
            self._tick(0.25)

        cierre = Text(
            "El enunciado no cambia. Lo que cambia es el valor de x.",
            font_size=18, color=AMARILLO, slant=ITALIC,
        ).to_edge(DOWN, buff=0.55)
        self.play(FadeIn(cierre, shift=UP * 0.1), run_time=0.5)
        self._tick(0.5)

        fadeout = 0.6
        self._sync_wait(5, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 6 — Conjunto solución ──────────────────────────────
    def _bloque_6_conjunto(self):
        encabezado = tarjeta_titulo("Control de calidad — conjunto solución", VERDE, ancho=7.8)
        encabezado.to_edge(UP, buff=0.42)

        prop = MathTex(
            r"P(d): \quad 24.5 \leq d \leq 25.5 \text{ mm}",
            font_size=30, color=WHITE,
        ).next_to(encabezado, DOWN, buff=0.35)

        recta = NumberLine(
            x_range=[24, 26, 0.5], length=8.5, color=GRIS,
            include_numbers=True,
            numbers_with_elongated_ticks=[24, 24.5, 25, 25.5, 26],
            font_size=22,
        ).move_to(UP * 0.55)

        tol = Rectangle(
            width=recta.n2p(25.5)[0] - recta.n2p(24.5)[0],
            height=0.38, color=VERDE, fill_color=VERDE, fill_opacity=0.30, stroke_width=0,
        ).move_to(recta.n2p(25) + UP * 0.2)
        tol_lbl = Text("zona aprobada", font_size=14, color=VERDE).next_to(tol, UP, buff=0.1)

        self.play(FadeIn(encabezado, shift=DOWN * 0.15), run_time=0.5)
        self._tick(0.5)
        self.play(Write(prop), run_time=0.75)
        self._tick(0.75)
        self.play(Create(recta), FadeIn(tol), FadeIn(tol_lbl), run_time=0.75)
        self._tick(0.75)

        ejes_data = [(25.1, True), (24.2, False), (25.5, True)]
        ejes = VGroup()
        for d, ok in ejes_data:
            eje = eje_tolerancia(d, ok).scale(0.95)
            dot = Dot(recta.n2p(d), color=VERDE if ok else ROJO, radius=0.10)
            ejes.add(VGroup(eje, dot))

        ejes.arrange(RIGHT, buff=0.55).move_to(DOWN * 1.05)

        for grp in ejes:
            self.play(
                FadeIn(grp[1], scale=0.5),
                FadeIn(grp[0], shift=UP * 0.2),
                run_time=0.55,
            )
            self._tick(0.55)
            self.wait(0.35)
            self._tick(0.35)

        conjunto = MathTex(
            r"\{d \mid 24.5 \leq d \leq 25.5\} \text{ mm}",
            font_size=28, color=AMARILLO,
        ).to_edge(DOWN, buff=1.05)
        nota = Text(
            "Conjunto solución: valores de d que hacen verdadera P(d).",
            font_size=16, color=GRIS_CLARO, slant=ITALIC,
        ).next_to(conjunto, DOWN, buff=0.15)
        marco = SurroundingRectangle(
            VGroup(conjunto, nota), color=AMARILLO, buff=0.18, corner_radius=0.1, stroke_width=2,
        )

        self.play(Write(conjunto), Create(marco), FadeIn(nota), run_time=0.85)
        self._tick(0.85)

        fadeout = 0.6
        self._sync_wait(6, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 7 — Cierre ─────────────────────────────────────────
    def _bloque_7_cierre(self):
        titulo = Text("Resumen", font_size=36, color=WHITE, weight=BOLD).to_edge(UP, buff=0.45)

        tarjetas = VGroup(
            tarjeta_resumen("Proposición", "Enunciado con valor V o F exacto", AZUL_CLARO),
            tarjeta_resumen("No proposición", "Preguntas, órdenes, enunciados ambiguos", ROJO),
            tarjeta_resumen("Proposición abierta", "P(x): el valor depende de x", NARANJA),
            tarjeta_resumen("Conjunto solución", "Valores que hacen verdadera la proposición", VERDE),
        )
        tarjetas.arrange_in_grid(rows=2, cols=2, buff=(0.45, 0.35)).move_to(DOWN * 0.05)

        siguiente = RoundedRectangle(
            corner_radius=0.10, width=9.5, height=0.62,
            color=NARANJA, stroke_width=2, fill_color=NARANJA, fill_opacity=0.12,
        ).to_edge(DOWN, buff=0.42)
        sig_txt = Text(
            "Siguiente: S2·C2 · Conjunto solución de una proposición abierta  →",
            font_size=17, color=NARANJA,
        ).move_to(siguiente)

        self.play(FadeIn(titulo, shift=DOWN * 0.15), run_time=0.5)
        self._tick(0.5)
        self.play(
            LaggedStart(*[FadeIn(t, shift=UP * 0.15) for t in tarjetas], lag_ratio=0.18),
            run_time=1.2,
        )
        self._tick(1.2)
        self.play(DrawBorderThenFill(siguiente), FadeIn(sig_txt), run_time=0.55)
        self._tick(0.55)
        self.wait(1.5)
        self._tick(1.5)

        fadeout = 1.0
        fin_audio = cargar_fin_audio()
        restante = fin_audio - self._t - fadeout
        if restante > 0:
            self.wait(restante)
            self._tick(restante)

        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)


if __name__ == "__main__":
    print("Renderiza con: manim -pql video_s2c1_proposicion.py Proposicion")
