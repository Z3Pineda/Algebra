"""
S2·C4 — Implicación y negación
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Renderizar (prueba):
    manim -pql video_s2c4_implicacion_negacion.py ImplicacionNegacion

Renderizar (final):
    manim -pqh video_s2c4_implicacion_negacion.py ImplicacionNegacion
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
    return [0.0, 26.75, 42.63, 74.53, 118.41, 142.13, 161.31, 201.33, 219.61, 245.71]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 267.52

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
        color=color, stroke_width=2, fill_color=color, fill_opacity=0.15,
    )
    lbl = Text(texto, font_size=22, color=color, weight=BOLD).move_to(rect)
    return VGroup(rect, lbl)


def encajar_vertical(grupo: Mobject, caja: Mobject, margen: float = 0.22) -> None:
    alto_disp = caja.height - 2 * margen
    if grupo.height > alto_disp:
        grupo.scale_to_fit_height(alto_disp)
    grupo.move_to(caja.get_center())


def celda_vf(valor: bool, destacar: bool = False) -> Text:
    color = VERDE if valor else ROJO
    txt = Text("V" if valor else "F", font_size=18, color=color, weight=BOLD)
    if destacar:
        txt.set_stroke(AMARILLO, width=2)
    return txt


def horno_icono() -> VGroup:
    cuerpo = RoundedRectangle(
        corner_radius=0.10, width=2.4, height=1.5,
        color=GRIS, fill_color=GRIS, fill_opacity=0.30, stroke_width=2,
    )
    puerta = Rectangle(
        width=0.9, height=0.65, color=AZUL_OSCURO,
        fill_color=AZUL_OSCURO, fill_opacity=0.7, stroke_width=2,
    ).move_to(cuerpo.get_center() + DOWN * 0.15)
    llama = VGroup(*[
        Triangle(color=NARANJA, fill_color=NARANJA, fill_opacity=0.85, stroke_width=0)
        .scale(0.12).rotate(PI).shift(RIGHT * i * 0.18)
        for i in range(-1, 2)
    ]).move_to(cuerpo.get_center() + UP * 0.35)
    vent = Rectangle(
        width=0.55, height=0.18, color=AZUL_CLARO,
        fill_color=AZUL_CLARO, fill_opacity=0.5, stroke_width=1,
    ).next_to(cuerpo, UP, buff=0.05)
    lbl = Text("Horno industrial", font_size=14, color=GRIS_CLARO).next_to(cuerpo, DOWN, buff=0.14)
    return VGroup(cuerpo, puerta, llama, vent, lbl)


def tabla_negacion() -> VGroup:
    hdr = VGroup(
        Text("p", font_size=16, color=WHITE, weight=BOLD),
        MathTex(r"\lnot p", font_size=18, color=VIOLETA),
    ).arrange(RIGHT, buff=0.75)
    filas = VGroup(hdr)
    for p in (True, False):
        filas.add(VGroup(celda_vf(p), celda_vf(not p)).arrange(RIGHT, buff=0.75))
    filas.arrange(DOWN, buff=0.18, aligned_edge=LEFT)
    fondo = RoundedRectangle(
        corner_radius=0.12, width=2.5, height=1.35,
        color=VIOLETA, stroke_width=2, fill_color=VIOLETA, fill_opacity=0.08,
    )
    encajar_vertical(filas, fondo, margen=0.18)
    return VGroup(fondo, filas)


def tabla_implicacion() -> VGroup:
    hdr = VGroup(
        Text("p", font_size=15, color=WHITE, weight=BOLD),
        Text("q", font_size=15, color=WHITE, weight=BOLD),
        MathTex(r"p \Rightarrow q", font_size=16, color=AZUL_CLARO),
    ).arrange(RIGHT, buff=0.42)
    filas = VGroup(hdr)
    combos = [(True, True), (True, False), (False, True), (False, False)]
    for p, q in combos:
        res = (not p) or q
        dest = p and not q
        filas.add(VGroup(
            celda_vf(p), celda_vf(q), celda_vf(res, destacar=dest),
        ).arrange(RIGHT, buff=0.42))
    filas.arrange(DOWN, buff=0.14, aligned_edge=LEFT)
    fondo = RoundedRectangle(
        corner_radius=0.12, width=3.55, height=2.45,
        color=AZUL_CLARO, stroke_width=2, fill_color=AZUL_CLARO, fill_opacity=0.08,
    )
    encajar_vertical(filas, fondo, margen=0.18)
    return VGroup(fondo, filas)


def tarjeta_caso(titulo: str, resultado: str, ok: bool) -> VGroup:
    fondo = RoundedRectangle(
        corner_radius=0.10, width=4.85, height=0.78,
        color=VERDE if ok else ROJO,
        fill_color=VERDE if ok else ROJO,
        fill_opacity=0.10 if ok else 0.08,
        stroke_width=2,
    )
    tit = Text(titulo, font_size=13, color=WHITE)
    res = Text(resultado, font_size=13, color=VERDE if ok else ROJO, weight=BOLD)
    grp = VGroup(tit, res).arrange(DOWN, buff=0.08)
    encajar_vertical(grp, fondo, margen=0.12)
    return VGroup(fondo, grp)


def fila_neg_ing(p_txt: str, p_val: bool) -> VGroup:
    p_lbl = Text(p_txt, font_size=16, color=WHITE)
    p_s = celda_vf(p_val)
    flecha = Text("→", font_size=18, color=GRIS_CLARO)
    not_hdr = Text("¬", font_size=20, color=VIOLETA, weight=BOLD)
    not_s = celda_vf(not p_val)
    fila = VGroup(p_lbl, p_s, flecha, not_hdr, not_s).arrange(RIGHT, buff=0.32)
    return fila


def tarjeta_de_morgan(
    formula: MathTex,
    linea1: str,
    linea2: str,
    color: str,
    ancho: float = 8.4,
    alto: float = 1.85,
) -> VGroup:
    fondo = RoundedRectangle(
        corner_radius=0.12, width=ancho, height=alto,
        color=color, stroke_width=2, fill_color=color, fill_opacity=0.10,
    )
    ej1 = Text(linea1, font_size=14, color=GRIS_CLARO)
    ej2 = Text(linea2, font_size=14, color=GRIS_CLARO)
    grp = VGroup(formula, ej1, ej2).arrange(DOWN, buff=0.20)
    encajar_vertical(grp, fondo, margen=0.24)
    return VGroup(fondo, grp)


def escena_centrada(*elementos: Mobject, buff: float = 0.42, shift_y: float = -0.05) -> VGroup:
    """Apila elementos y centra el bloque en el encuadre."""
    grp = VGroup(*elementos).arrange(DOWN, buff=buff)
    grp.move_to(ORIGIN + DOWN * shift_y)
    return grp


def tabla_cuatro_conectivos() -> VGroup:
    """Tabla en tres columnas alineadas — sin posiciones absolutas."""
    datos = [
        ("Negación ¬", "p es verdadera", "Invertir estado", VIOLETA),
        ("Conjunción ∧", "Alguna proposición es F", "Arranque seguro", VERDE),
        ("Disyunción ∨", "Ambas son falsas", "Activar alarmas", NARANJA),
        ("Implicación ⇒", "p = V y q = F", "Especificaciones", AZUL_CLARO),
    ]
    buff_fila = 0.30

    col_n = VGroup(
        Text("Conectivo", font_size=15, color=GRIS, weight=BOLD),
        *[
            Text(n, font_size=16, color=c, weight=BOLD)
            for n, _, _, c in datos
        ],
    ).arrange(DOWN, buff=buff_fila, aligned_edge=LEFT)

    col_r = VGroup(
        Text("Falso cuando…", font_size=15, color=GRIS, weight=BOLD),
        *[Text(r, font_size=15, color=WHITE) for _, r, _, _ in datos],
    ).arrange(DOWN, buff=buff_fila, aligned_edge=LEFT)

    col_u = VGroup(
        Text("Uso en ingeniería", font_size=15, color=GRIS, weight=BOLD),
        *[
            Text(u, font_size=14, color=GRIS_CLARO, slant=ITALIC)
            for _, _, u, _ in datos
        ],
    ).arrange(DOWN, buff=buff_fila, aligned_edge=LEFT)

    cols = VGroup(col_n, col_r, col_u).arrange(RIGHT, buff=0.72, aligned_edge=UP)

    panel = RoundedRectangle(
        corner_radius=0.14, width=10.6, height=3.25,
        color=AZUL_CLARO, stroke_width=2, fill_color=AZUL_CLARO, fill_opacity=0.08,
    )
    encajar_vertical(cols, panel, margen=0.24)
    return VGroup(panel, cols)


# ══════════════════════════════════════════════════════════════════
class ImplicacionNegacion(Scene):
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
        self._bloque_2_negacion()
        self._bloque_3_negacion_ing()
        self._bloque_4_de_morgan()
        self._bloque_5_implicacion()
        self._bloque_6_p_falsa()
        self._bloque_7_horno()
        self._bloque_8_neg_implicacion()
        self._bloque_9_tabla()
        self._bloque_10_cierre()

    # ── BLOQUE 1 — Apertura ───────────────────────────────────────
    def _bloque_1_apertura(self):
        titulo = tarjeta_titulo(
            "S2·C4 · Implicación y negación", AZUL_CLARO, ancho=6.5,
        ).to_edge(UP, buff=0.38)

        horno = horno_icono().scale(0.95).move_to(LEFT * 3.5 + UP * 0.2)

        regla1 = VGroup(
            Text("Regla 1 — causa-efecto", font_size=16, color=AZUL_CLARO, weight=BOLD),
            MathTex(r"T > 800°\text{C} \Rightarrow \text{enfriamiento ON}", font_size=22, color=WHITE),
            Text("Implicación", font_size=14, color=AZUL_CLARO),
        ).arrange(DOWN, buff=0.14, aligned_edge=LEFT)

        regla2 = VGroup(
            Text("Regla 2 — estado invertido", font_size=16, color=VIOLETA, weight=BOLD),
            Text("El horno NO está en temperatura\nde operación", font_size=14, color=GRIS_CLARO, line_spacing=1.05),
            Text("Negación", font_size=14, color=VIOLETA),
        ).arrange(DOWN, buff=0.14, aligned_edge=LEFT)

        panel = RoundedRectangle(
            corner_radius=0.14, width=7.0, height=3.1,
            color=AZUL_CLARO, stroke_width=2, fill_color=PANEL_BG, fill_opacity=0.95,
        ).move_to(RIGHT * 1.9 + DOWN * 0.05)
        contenido = VGroup(regla1, regla2).arrange(DOWN, buff=0.45, aligned_edge=LEFT)
        encajar_vertical(contenido, panel, margen=0.28)

        clave = Text(
            "Los dos últimos conectivos: implicación y negación.",
            font_size=17, color=AMARILLO, slant=ITALIC,
        ).to_edge(DOWN, buff=0.55)

        self.play(FadeIn(titulo, shift=DOWN * 0.15), run_time=0.5)
        self._tick(0.5)
        self.play(FadeIn(horno, shift=RIGHT * 0.2), run_time=0.65)
        self._tick(0.65)
        self.play(DrawBorderThenFill(panel), FadeIn(contenido), run_time=0.8)
        self._tick(0.8)
        self.play(FadeIn(clave), run_time=0.5)
        self._tick(0.5)

        fadeout = 0.6
        self._sync_wait(1, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 2 — Negación ───────────────────────────────────────
    def _bloque_2_negacion(self):
        enc = tarjeta_titulo("Negación — el NO lógico", VIOLETA, ancho=5.2)

        def_txt = Text(
            "¬p invierte el valor de verdad:\nV ↔ F",
            font_size=20, color=WHITE, line_spacing=1.15,
        )

        tabla = tabla_negacion()

        cierre = VGroup(
            MathTex(r"\lnot(\lnot p) \equiv p", font_size=32, color=AMARILLO),
            Text("La doble negación cancela.", font_size=17, color=GRIS_CLARO, slant=ITALIC),
        ).arrange(DOWN, buff=0.20)

        escena_centrada(enc, def_txt, tabla, cierre, buff=0.40, shift_y=-0.02)

        self.play(FadeIn(enc), FadeIn(def_txt), run_time=0.55)
        self._tick(0.55)
        self.play(FadeIn(tabla), run_time=0.65)
        self._tick(0.65)
        self.play(Write(cierre[0]), FadeIn(cierre[1]), run_time=0.6)
        self._tick(0.6)

        fadeout = 0.6
        self._sync_wait(2, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 3 — Negación en ingeniería ─────────────────────────
    def _bloque_3_negacion_ing(self):
        enc = tarjeta_titulo("Negación en sistemas de control", VIOLETA, ancho=6.2)

        filas = VGroup(
            fila_neg_ing("Presión en rango", True),
            fila_neg_ing("Sensor detectó falla", False),
            fila_neg_ing("T > 800 °C", True),
        ).arrange(DOWN, buff=0.38, aligned_edge=LEFT)

        panel = RoundedRectangle(
            corner_radius=0.14, width=9.6, height=2.75,
            color=VIOLETA, stroke_width=2,
            fill_color=VIOLETA, fill_opacity=0.08,
        )
        filas.move_to(panel)

        nota = Text(
            "Negación → alarmas o estados de emergencia.",
            font_size=17, color=AMARILLO, slant=ITALIC,
        )

        escena_centrada(enc, VGroup(panel, filas), nota, buff=0.48, shift_y=-0.02)

        self.play(FadeIn(enc), run_time=0.45)
        self._tick(0.45)
        self.play(DrawBorderThenFill(panel), run_time=0.45)
        self._tick(0.45)
        for f in filas:
            self.play(FadeIn(f, shift=RIGHT * 0.12), run_time=0.5)
            self._tick(0.5)
        self.play(FadeIn(nota), run_time=0.45)
        self._tick(0.45)

        fadeout = 0.6
        self._sync_wait(3, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 4 — De Morgan ──────────────────────────────────────
    def _bloque_4_de_morgan(self):
        enc = tarjeta_titulo("Leyes de De Morgan", AMARILLO, ancho=5.0)

        ley1 = tarjeta_de_morgan(
            MathTex(r"\lnot(p \land q) \equiv \lnot p \lor \lnot q", font_size=24, color=VERDE),
            "Hay presión Y flujo",
            "¬: no presión O no flujo",
            VERDE,
        )
        ley2 = tarjeta_de_morgan(
            MathTex(r"\lnot(p \lor q) \equiv \lnot p \land \lnot q", font_size=24, color=NARANJA),
            "Hay vibración O calor",
            "¬: no vibración Y no calor",
            NARANJA,
        )
        leyes = VGroup(ley1, ley2).arrange(DOWN, buff=0.42)

        escena_centrada(enc, leyes, buff=0.52, shift_y=-0.02)

        self.play(FadeIn(enc), run_time=0.45)
        self._tick(0.45)
        self.play(FadeIn(ley1, shift=UP * 0.12), run_time=0.7)
        self._tick(0.7)
        self.play(FadeIn(ley2, shift=UP * 0.12), run_time=0.7)
        self._tick(0.7)

        fadeout = 0.6
        self._sync_wait(4, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 5 — Implicación ────────────────────────────────────
    def _bloque_5_implicacion(self):
        enc = tarjeta_titulo("Implicación — si… entonces", AZUL_CLARO, ancho=5.5)

        def_txt = VGroup(
            MathTex(r"p \Rightarrow q", font_size=34, color=WHITE),
            Text("Si p ocurre, entonces q debe ocurrir.", font_size=17, color=GRIS_CLARO),
        ).arrange(DOWN, buff=0.22)

        tabla = tabla_implicacion()

        nota = Text(
            "Falsa solo cuando p = V y q = F.",
            font_size=17, color=AMARILLO, slant=ITALIC,
        )

        escena_centrada(enc, def_txt, tabla, nota, buff=0.38, shift_y=-0.02)

        self.play(FadeIn(enc), FadeIn(def_txt), run_time=0.6)
        self._tick(0.6)
        self.play(FadeIn(tabla, shift=UP * 0.12), run_time=0.75)
        self._tick(0.75)
        self.play(FadeIn(nota), run_time=0.45)
        self._tick(0.45)

        fadeout = 0.6
        self._sync_wait(5, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 6 — p falsa ────────────────────────────────────────
    def _bloque_6_p_falsa(self):
        enc = tarjeta_titulo("¿Por qué V cuando p es falsa?", AZUL_CLARO, ancho=6.0)

        ejemplo = VGroup(
            MathTex(r"\text{Si llueve} \Rightarrow \text{el piso se moja}", font_size=26, color=WHITE),
            Text("No llueve → la regla no se incumple.", font_size=18, color=VERDE, line_spacing=1.1),
            Text("Simplemente no aplica.", font_size=18, color=GRIS_CLARO),
            Text("Solo falla si p ocurre y q no se produce.", font_size=17, color=AMARILLO, weight=BOLD),
        ).arrange(DOWN, buff=0.30)

        panel = RoundedRectangle(
            corner_radius=0.14, width=8.2, height=2.85,
            color=AZUL_CLARO, stroke_width=2, fill_color=AZUL_CLARO, fill_opacity=0.08,
        )
        encajar_vertical(ejemplo, panel, margen=0.28)

        escena_centrada(enc, VGroup(panel, ejemplo), buff=0.48, shift_y=-0.02)

        self.play(FadeIn(enc), run_time=0.45)
        self._tick(0.45)
        self.play(DrawBorderThenFill(panel), run_time=0.35)
        self._tick(0.35)
        self.play(LaggedStart(*[FadeIn(e, shift=UP * 0.1) for e in ejemplo], lag_ratio=0.22), run_time=1.0)
        self._tick(1.0)

        fadeout = 0.6
        self._sync_wait(6, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 7 — Horno ──────────────────────────────────────────
    def _bloque_7_horno(self):
        enc = tarjeta_titulo("Horno — regla de enfriamiento", NARANJA, ancho=5.8)

        regla = MathTex(
            r"T > 800°\text{C} \Rightarrow \text{enfriamiento ON}",
            font_size=24, color=WHITE,
        )

        casos = VGroup(
            tarjeta_caso("T alta, enfriamiento ON", "Regla cumplida ✓", True),
            tarjeta_caso("T alta, enfriamiento OFF", "FALLA del sistema ✗", False),
            tarjeta_caso("T normal, enfriamiento ON", "No aplica — no viola", True),
            tarjeta_caso("T normal, enfriamiento OFF", "Reposo — cumple", True),
        ).arrange(DOWN, buff=0.14)

        escena_centrada(enc, regla, casos, buff=0.36, shift_y=-0.04)

        self.play(FadeIn(enc), Write(regla), run_time=0.65)
        self._tick(0.65)
        for i, c in enumerate(casos):
            self.play(FadeIn(c, shift=RIGHT * 0.1), run_time=0.42)
            self._tick(0.42)
            if i == 1:
                self.play(Indicate(c, color=ROJO, scale_factor=1.03), run_time=0.45)
                self._tick(0.45)

        fadeout = 0.6
        self._sync_wait(7, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 8 — Negación implicación ───────────────────────────
    def _bloque_8_neg_implicacion(self):
        enc = tarjeta_titulo("Negación de la implicación", ROJO, ancho=5.5)

        formula = MathTex(
            r"\lnot(p \Rightarrow q) \;\;\equiv\;\; p \land \lnot q",
            font_size=32, color=AMARILLO,
        )

        ejemplo = VGroup(
            Text("Condición de falla en ingeniería:", font_size=17, color=WHITE, weight=BOLD),
            Text("La hipótesis ocurrió y la conclusión no se produjo.", font_size=16, color=GRIS_CLARO),
            Text("T > 800 °C  y  enfriamiento NO arrancó.", font_size=16, color=ROJO, weight=BOLD),
        ).arrange(DOWN, buff=0.22)

        panel = RoundedRectangle(
            corner_radius=0.12, width=7.6, height=1.75,
            color=ROJO, stroke_width=2, fill_color=ROJO, fill_opacity=0.08,
        )
        encajar_vertical(ejemplo, panel, margen=0.22)

        escena_centrada(enc, formula, VGroup(panel, ejemplo), buff=0.46, shift_y=-0.02)

        self.play(FadeIn(enc), Write(formula), run_time=0.7)
        self._tick(0.7)
        self.play(DrawBorderThenFill(panel), FadeIn(ejemplo), run_time=0.65)
        self._tick(0.65)

        fadeout = 0.6
        self._sync_wait(8, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 9 — Tabla cuatro conectivos ────────────────────────
    def _bloque_9_tabla(self):
        enc = tarjeta_titulo("Los cuatro conectivos", AZUL_CLARO, ancho=4.5)

        tabla_grp = tabla_cuatro_conectivos()
        panel, cols = tabla_grp[0], tabla_grp[1]

        escena_centrada(enc, tabla_grp, buff=0.48, shift_y=-0.02)

        self.play(FadeIn(enc), DrawBorderThenFill(panel), run_time=0.55)
        self._tick(0.55)
        self.play(
            LaggedStart(
                FadeIn(cols[0], shift=RIGHT * 0.08),
                FadeIn(cols[1], shift=RIGHT * 0.08),
                FadeIn(cols[2], shift=RIGHT * 0.08),
                lag_ratio=0.25,
            ),
            run_time=1.1,
        )
        self._tick(1.1)

        fadeout = 0.6
        self._sync_wait(9, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 10 — Cierre ────────────────────────────────────────
    def _bloque_10_cierre(self):
        titulo = Text("Resumen — 4 conectivos lógicos", font_size=30, color=WHITE, weight=BOLD)

        items = VGroup(
            Text("Negación: invierte V/F", font_size=18, color=VIOLETA),
            Text("Conjunción: V solo si ambas cumplen", font_size=18, color=VERDE),
            Text("Disyunción: V si al menos una cumple", font_size=18, color=NARANJA),
            Text("Implicación: F solo si p ocurre y q no", font_size=18, color=AZUL_CLARO),
        ).arrange(DOWN, buff=0.30, aligned_edge=LEFT)

        panel = RoundedRectangle(
            corner_radius=0.12, width=7.2, height=2.55,
            color=AZUL_CLARO, stroke_width=2, fill_color=AZUL_CLARO, fill_opacity=0.10,
        )
        encajar_vertical(items, panel, margen=0.28)

        escena_centrada(titulo, VGroup(panel, items), buff=0.48, shift_y=-0.02)

        self.play(FadeIn(titulo, shift=DOWN * 0.15), run_time=0.45)
        self._tick(0.45)
        self.play(DrawBorderThenFill(panel), LaggedStart(*[FadeIn(it, shift=UP * 0.1) for it in items], lag_ratio=0.2), run_time=1.0)
        self._tick(1.0)

        fadeout = 0.8
        fin_audio = cargar_fin_audio()
        restante = fin_audio - self._t - fadeout
        if restante > 0:
            self.wait(restante)
            self._tick(restante)

        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)


if __name__ == "__main__":
    print("Renderiza con: manim -pql video_s2c4_implicacion_negacion.py ImplicacionNegacion")
