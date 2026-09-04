"""
S2·C3 — Conjunción y disyunción
Álgebra · Ingeniería Mecánica Administrativa
Manim Community v0.18+

Renderizar (prueba):
    manim -pql video_s2c3_conjuncion_disyuncion.py ConjuncionDisyuncion

Renderizar (final):
    manim -pqh video_s2c3_conjuncion_disyuncion.py ConjuncionDisyuncion

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
    return [0.0, 39.97, 72.75, 110.18, 129.67, 155.30, 174.11, 207.02, 248.24]


def cargar_fin_audio() -> float:
    if SYNC_FILE.exists():
        data = json.loads(SYNC_FILE.read_text(encoding="utf-8"))
        return float(data["bloques"][-1]["fin_s"])
    return 260.26

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


def celda_vf(valor: bool, destacar: bool = False) -> Text:
    color = VERDE if valor else ROJO
    txt = Text("V" if valor else "F", font_size=18, color=color, weight=BOLD)
    if destacar:
        txt.set_stroke(AMARILLO, width=2)
    return txt


def tabla_verdad(conectivo: str, titulo: str, color: str) -> VGroup:
    """conectivo: 'and' o 'or'"""
    ops = {
        "and": (r"p \land q", lambda p, q: p and q, (True, True)),
        "or": (r"p \lor q", lambda p, q: p or q, (False, False)),
    }
    simbolo, fn, unico = ops[conectivo]

    enc = Text(titulo, font_size=17, color=color, weight=BOLD)
    hdr = VGroup(
        Text("p", font_size=16, color=WHITE, weight=BOLD),
        Text("q", font_size=16, color=WHITE, weight=BOLD),
        MathTex(simbolo, font_size=18, color=color),
    ).arrange(RIGHT, buff=0.55)

    filas = VGroup(hdr)
    combos = [(True, True), (True, False), (False, True), (False, False)]
    for p, q in combos:
        res = fn(p, q)
        dest = (p, q) == unico
        fila = VGroup(
            celda_vf(p), celda_vf(q), celda_vf(res, destacar=dest),
        ).arrange(RIGHT, buff=0.55)
        filas.add(fila)
    filas.arrange(DOWN, buff=0.16, aligned_edge=LEFT)

    fondo = RoundedRectangle(
        corner_radius=0.12, width=3.35, height=2.55,
        color=color, stroke_width=2, fill_color=color, fill_opacity=0.08,
    )
    grp = VGroup(enc, filas).arrange(DOWN, buff=0.22)
    encajar_vertical(grp, fondo, margen=0.20)
    return VGroup(fondo, grp)


def prensa_icono() -> VGroup:
    base = RoundedRectangle(
        corner_radius=0.08, width=2.8, height=0.45,
        color=GRIS, fill_color=GRIS, fill_opacity=0.35, stroke_width=2,
    )
    columna = Rectangle(
        width=0.45, height=1.6, color=AZUL_OSCURO,
        fill_color=AZUL_OSCURO, fill_opacity=0.9, stroke_width=2,
    ).next_to(base, UP, buff=0).align_to(base, LEFT).shift(RIGHT * 0.35)
    cabeza = Rectangle(
        width=1.4, height=0.35, color=GRIS_CLARO,
        fill_color=GRIS_CLARO, fill_opacity=0.8, stroke_width=2,
    ).next_to(columna, UP, buff=0).shift(RIGHT * 0.5)
    guarda = Arc(radius=0.55, start_angle=PI, angle=PI, color=VERDE, stroke_width=3)
    guarda.next_to(cabeza, UP, buff=0.05).shift(LEFT * 0.2)
    lbl = Text("Prensa hidráulica", font_size=14, color=GRIS_CLARO).next_to(base, DOWN, buff=0.12)
    return VGroup(base, columna, cabeza, guarda, lbl)


def tarjeta_caso(titulo: str, resultado: str, ok: bool) -> VGroup:
    fondo = RoundedRectangle(
        corner_radius=0.10, width=4.6, height=0.82,
        color=VERDE if ok else ROJO,
        fill_color=VERDE if ok else ROJO,
        fill_opacity=0.10 if ok else 0.08,
        stroke_width=2,
    )
    tit = Text(titulo, font_size=14, color=WHITE)
    res = Text(resultado, font_size=14, color=VERDE if ok else ROJO, weight=BOLD)
    grp = VGroup(tit, res).arrange(DOWN, buff=0.10)
    encajar_vertical(grp, fondo, margen=0.14)
    return VGroup(fondo, grp)


def mini_venn_interseccion() -> VGroup:
    u = Rectangle(width=3.2, height=2.0, color=GRIS, stroke_width=2)
    a = Circle(radius=0.65, color=AZUL_CLARO, stroke_width=2).shift(LEFT * 0.35)
    b = Circle(radius=0.65, color=NARANJA, stroke_width=2).shift(RIGHT * 0.35)
    inter = Intersection(a.copy().set_fill(AZUL_CLARO, opacity=0.35), b.copy().set_fill(NARANJA, opacity=0.35))
    lbl = MathTex(r"A \cap B", font_size=24, color=AMARILLO).next_to(u, DOWN, buff=0.15)
    return VGroup(u, a, b, inter, lbl)


def mini_venn_union() -> VGroup:
    u = Rectangle(width=3.2, height=2.0, color=GRIS, stroke_width=2)
    a = Circle(radius=0.65, color=AZUL_CLARO, fill_color=AZUL_CLARO, fill_opacity=0.22, stroke_width=2)
    a.shift(LEFT * 0.35)
    b = Circle(radius=0.65, color=NARANJA, fill_color=NARANJA, fill_opacity=0.22, stroke_width=2)
    b.shift(RIGHT * 0.35)
    lbl = MathTex(r"A \cup B", font_size=24, color=AMARILLO).next_to(u, DOWN, buff=0.15)
    return VGroup(u, a, b, lbl)


def chip_numero(n: int, color: str) -> VGroup:
    c = Circle(radius=0.22, color=color, fill_color=color, fill_opacity=0.25, stroke_width=2)
    t = Text(str(n), font_size=14, color=WHITE, weight=BOLD).move_to(c)
    return VGroup(c, t)


# ══════════════════════════════════════════════════════════════════
class ConjuncionDisyuncion(Scene):
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
        self._bloque_2_conjuncion()
        self._bloque_3_prensa()
        self._bloque_4_disyuncion()
        self._bloque_5_alarma()
        self._bloque_6_diferencia()
        self._bloque_7_conjuntos()
        self._bloque_8_ejemplo()
        self._bloque_9_cierre()

    # ── BLOQUE 1 — Apertura ───────────────────────────────────────
    def _bloque_1_apertura(self):
        titulo = tarjeta_titulo(
            "S2·C3 · Conjunción y disyunción", AZUL_CLARO, ancho=6.5,
        ).to_edge(UP, buff=0.38)

        prensa = prensa_icono().scale(0.95).move_to(LEFT * 3.8 + UP * 0.35)

        arranque = VGroup(
            Text("Arranque de prensa", font_size=17, color=VERDE, weight=BOLD),
            MathTex(r"p \land g", font_size=26, color=VERDE),
            Text("Presión en rango  Y  guarda cerrada", font_size=14, color=GRIS_CLARO),
            Text("Si una falla → no arranca", font_size=14, color=ROJO),
        ).arrange(DOWN, buff=0.16, aligned_edge=LEFT)

        alarma = VGroup(
            Text("Sistema de alarma", font_size=17, color=NARANJA, weight=BOLD),
            MathTex(r"s \lor v", font_size=26, color=NARANJA),
            Text("Sobrecalentamiento  O  vibración excesiva", font_size=14, color=GRIS_CLARO),
            Text("Basta una condición → suena", font_size=14, color=AMARILLO),
        ).arrange(DOWN, buff=0.16, aligned_edge=LEFT)

        panel = RoundedRectangle(
            corner_radius=0.14, width=7.2, height=3.35,
            color=AZUL_CLARO, stroke_width=2, fill_color=PANEL_BG, fill_opacity=0.95,
        ).move_to(RIGHT * 1.8 + DOWN * 0.05)
        contenido = VGroup(arranque, alarma).arrange(DOWN, buff=0.45, aligned_edge=LEFT)
        encajar_vertical(contenido, panel, margen=0.28)

        clave = Text(
            "El  Y  y el  O  determinan el comportamiento del sistema.",
            font_size=17, color=AMARILLO, slant=ITALIC,
        ).to_edge(DOWN, buff=0.55)

        self.play(FadeIn(titulo, shift=DOWN * 0.15), run_time=0.5)
        self._tick(0.5)
        self.play(FadeIn(prensa, shift=RIGHT * 0.2), run_time=0.7)
        self._tick(0.7)
        self.play(DrawBorderThenFill(panel), FadeIn(contenido), run_time=0.85)
        self._tick(0.85)
        self.play(FadeIn(clave, shift=UP * 0.1), run_time=0.55)
        self._tick(0.55)

        fadeout = 0.6
        self._sync_wait(1, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 2 — Conjunción ─────────────────────────────────────
    def _bloque_2_conjuncion(self):
        enc = tarjeta_titulo("Conjunción — el  Y  lógico", VERDE, ancho=5.5)
        enc.to_edge(UP, buff=0.38)

        def_txt = Text(
            "p ∧ q  es verdadera solo cuando\np y q son verdaderas al mismo tiempo.",
            font_size=18, color=WHITE, line_spacing=1.1,
        ).next_to(enc, DOWN, buff=0.35)

        tabla = tabla_verdad("and", "Tabla de verdad", VERDE).next_to(def_txt, DOWN, buff=0.4)

        nota = Text(
            "Una sola condición falsa → toda la conjunción es falsa.",
            font_size=16, color=AMARILLO, slant=ITALIC,
        ).to_edge(DOWN, buff=0.55)

        self.play(FadeIn(enc), FadeIn(def_txt), run_time=0.65)
        self._tick(0.65)
        self.play(FadeIn(tabla, shift=UP * 0.15), run_time=0.85)
        self._tick(0.85)
        self.play(FadeIn(nota), run_time=0.5)
        self._tick(0.5)

        fadeout = 0.6
        self._sync_wait(2, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 3 — Prensa interlock ───────────────────────────────
    def _bloque_3_prensa(self):
        enc = tarjeta_titulo("Prensa — enclavamiento (interlock)", AZUL_CLARO, ancho=6.5)
        enc.to_edge(UP, buff=0.38)

        cond = MathTex(r"p \land g \quad (\text{presión en rango} \land \text{guarda cerrada})", font_size=24, color=WHITE)
        cond.next_to(enc, DOWN, buff=0.32)

        casos = VGroup(
            tarjeta_caso("p = V,  g = V", "Prensa arranca", True),
            tarjeta_caso("p = V,  g = F", "Bloqueada", False),
            tarjeta_caso("p = F,  g = V", "Bloqueada", False),
            tarjeta_caso("p = F,  g = F", "Bloqueada", False),
        ).arrange(DOWN, buff=0.14).next_to(cond, DOWN, buff=0.35)

        nota = Text(
            "Interlock: todas las condiciones de seguridad deben cumplirse.",
            font_size=15, color=GRIS_CLARO, slant=ITALIC,
        ).to_edge(DOWN, buff=0.52)

        self.play(FadeIn(enc), Write(cond), run_time=0.7)
        self._tick(0.7)
        for c in casos:
            self.play(FadeIn(c, shift=RIGHT * 0.12), run_time=0.45)
            self._tick(0.45)
        self.play(FadeIn(nota), run_time=0.5)
        self._tick(0.5)

        fadeout = 0.6
        self._sync_wait(3, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 4 — Disyunción ─────────────────────────────────────
    def _bloque_4_disyuncion(self):
        enc = tarjeta_titulo("Disyunción — el  O  lógico", NARANJA, ancho=5.5)
        enc.to_edge(UP, buff=0.38)

        def_txt = Text(
            "p ∨ q  es verdadera cuando\nal menos una proposición es verdadera.",
            font_size=18, color=WHITE, line_spacing=1.1,
        ).next_to(enc, DOWN, buff=0.35)

        tabla = tabla_verdad("or", "Tabla de verdad", NARANJA).move_to(DOWN * 0.15)

        nota = Text(
            "Solo es falsa cuando p y q son falsas al mismo tiempo.",
            font_size=16, color=AMARILLO, slant=ITALIC,
        ).to_edge(DOWN, buff=0.55)

        self.play(FadeIn(enc), FadeIn(def_txt), run_time=0.6)
        self._tick(0.6)
        self.play(FadeIn(tabla, shift=UP * 0.15), run_time=0.75)
        self._tick(0.75)
        self.play(FadeIn(nota), run_time=0.45)
        self._tick(0.45)

        fadeout = 0.6
        self._sync_wait(4, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 5 — Alarma ─────────────────────────────────────────
    def _bloque_5_alarma(self):
        enc = tarjeta_titulo("Alarma — activación con  O", NARANJA, ancho=5.2)
        enc.to_edge(UP, buff=0.38)

        cond = MathTex(
            r"s \lor v \quad (\text{sobrecalentamiento} \lor \text{vibración excesiva})",
            font_size=24, color=WHITE,
        ).next_to(enc, DOWN, buff=0.32)

        casos = VGroup(
            tarjeta_caso("s = V,  v = V", "Alarma suena", True),
            tarjeta_caso("s = V,  v = F", "Alarma suena", True),
            tarjeta_caso("s = F,  v = V", "Alarma suena", True),
            tarjeta_caso("s = F,  v = F", "Silencio", False),
        ).arrange(DOWN, buff=0.14).next_to(cond, DOWN, buff=0.35)

        self.play(FadeIn(enc), Write(cond), run_time=0.65)
        self._tick(0.65)
        self.play(LaggedStart(*[FadeIn(c, shift=RIGHT * 0.12) for c in casos], lag_ratio=0.18), run_time=1.0)
        self._tick(1.0)

        fadeout = 0.6
        self._sync_wait(5, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 6 — Diferencia clave ───────────────────────────────
    def _bloque_6_diferencia(self):
        enc = tarjeta_titulo("Diferencia clave", AMARILLO, ancho=4.2)
        enc.to_edge(UP, buff=0.38)

        col_and = RoundedRectangle(
            corner_radius=0.14, width=4.8, height=2.8,
            color=VERDE, stroke_width=2, fill_color=VERDE, fill_opacity=0.08,
        )
        col_or = RoundedRectangle(
            corner_radius=0.14, width=4.8, height=2.8,
            color=NARANJA, stroke_width=2, fill_color=NARANJA, fill_opacity=0.08,
        )
        columnas = VGroup(col_and, col_or).arrange(RIGHT, buff=0.45).move_to(DOWN * 0.1)

        txt_and = VGroup(
            Text("Conjunción  Y", font_size=19, color=VERDE, weight=BOLD),
            Text("Más restrictiva", font_size=16, color=GRIS_CLARO),
            Text("Verdadera en 1 de 4 casos", font_size=15, color=WHITE),
            Text("(solo V, V)", font_size=14, color=VERDE),
        ).arrange(DOWN, buff=0.20).move_to(col_and)

        txt_or = VGroup(
            Text("Disyunción  O", font_size=19, color=NARANJA, weight=BOLD),
            Text("Más permisiva", font_size=16, color=GRIS_CLARO),
            Text("Verdadera en 3 de 4 casos", font_size=15, color=WHITE),
            Text("(solo falla en F, F)", font_size=14, color=NARANJA),
        ).arrange(DOWN, buff=0.20).move_to(col_or)

        self.play(FadeIn(enc), run_time=0.45)
        self._tick(0.45)
        self.play(DrawBorderThenFill(col_and), FadeIn(txt_and), run_time=0.65)
        self._tick(0.65)
        self.play(DrawBorderThenFill(col_or), FadeIn(txt_or), run_time=0.65)
        self._tick(0.65)

        fadeout = 0.6
        self._sync_wait(6, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 7 — Conexión con conjuntos ─────────────────────────
    def _bloque_7_conjuntos(self):
        enc = tarjeta_titulo("Conexión con conjuntos", VIOLETA, ancho=5.0)
        enc.to_edge(UP, buff=0.38)

        col_y = VGroup(
            MathTex(r"p \land q \;\;\Rightarrow\;\; A \cap B", font_size=26, color=VERDE),
            Text("Intersección — cumplen las DOS", font_size=15, color=GRIS_CLARO),
            mini_venn_interseccion().scale(0.85),
        ).arrange(DOWN, buff=0.22)

        col_o = VGroup(
            MathTex(r"p \lor q \;\;\Rightarrow\;\; A \cup B", font_size=26, color=NARANJA),
            Text("Unión — cumplen AL MENOS UNA", font_size=15, color=GRIS_CLARO),
            mini_venn_union().scale(0.85),
        ).arrange(DOWN, buff=0.22)

        columnas = VGroup(col_y, col_o).arrange(RIGHT, buff=0.55).next_to(enc, DOWN, buff=0.35)

        self.play(FadeIn(enc), run_time=0.45)
        self._tick(0.45)
        self.play(FadeIn(col_y, shift=RIGHT * 0.15), run_time=0.75)
        self._tick(0.75)
        self.play(FadeIn(col_o, shift=LEFT * 0.15), run_time=0.75)
        self._tick(0.75)

        fadeout = 0.6
        self._sync_wait(7, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 8 — Ejemplo numérico ───────────────────────────────
    def _bloque_8_ejemplo(self):
        enc = tarjeta_titulo("Ejemplo numérico — U = {1,…,10}", AZUL_CLARO, ancho=6.2)
        enc.to_edge(UP, buff=0.38)

        props = VGroup(
            MathTex(r"P(x): x \text{ es par}", font_size=24, color=AZUL_CLARO),
            MathTex(r"Q(x): x > 5", font_size=24, color=NARANJA),
        ).arrange(DOWN, buff=0.18).next_to(enc, DOWN, buff=0.28)

        a_nums = [2, 4, 6, 8, 10]
        b_nums = [6, 7, 8, 9, 10]
        inter = [6, 8, 10]
        union = [2, 4, 6, 7, 8, 9, 10]

        def fila_conjunto(nombre: str, nums: list[int], color: str) -> VGroup:
            lbl = Text(nombre, font_size=15, color=color, weight=BOLD)
            chips = VGroup(*[chip_numero(n, color) for n in nums]).arrange(RIGHT, buff=0.10)
            return VGroup(lbl, chips).arrange(DOWN, buff=0.12, aligned_edge=LEFT)

        filas = VGroup(
            fila_conjunto("A  (P: par)", a_nums, AZUL_CLARO),
            fila_conjunto("B  (Q: x > 5)", b_nums, NARANJA),
            fila_conjunto("A ∩ B  (P ∧ Q)", inter, VERDE),
            fila_conjunto("A ∪ B  (P ∨ Q)", union, AMARILLO),
        ).arrange(DOWN, buff=0.28, aligned_edge=LEFT).next_to(props, DOWN, buff=0.35)

        self.play(FadeIn(enc), FadeIn(props), run_time=0.65)
        self._tick(0.65)
        for fila in filas:
            self.play(FadeIn(fila, shift=RIGHT * 0.12), run_time=0.55)
            self._tick(0.55)

        fadeout = 0.6
        self._sync_wait(8, fadeout=fadeout)
        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)

    # ── BLOQUE 9 — Cierre ─────────────────────────────────────────
    def _bloque_9_cierre(self):
        titulo = Text("Resumen", font_size=34, color=WHITE, weight=BOLD).to_edge(UP, buff=0.42)

        tarj_and = RoundedRectangle(
            corner_radius=0.14, width=5.2, height=1.65,
            color=VERDE, stroke_width=2, fill_color=VERDE, fill_opacity=0.10,
        )
        txt_and = VGroup(
            Text("Conjunción  →  ∩", font_size=20, color=VERDE, weight=BOLD),
            Text("Ambas condiciones deben cumplirse", font_size=15, color=GRIS_CLARO),
        ).arrange(DOWN, buff=0.18).move_to(tarj_and)

        tarj_or = RoundedRectangle(
            corner_radius=0.14, width=5.2, height=1.65,
            color=NARANJA, stroke_width=2, fill_color=NARANJA, fill_opacity=0.10,
        )
        txt_or = VGroup(
            Text("Disyunción  →  ∪", font_size=20, color=NARANJA, weight=BOLD),
            Text("Basta con que se cumpla una", font_size=15, color=GRIS_CLARO),
        ).arrange(DOWN, buff=0.18).move_to(tarj_or)

        tarjetas = VGroup(VGroup(tarj_and, txt_and), VGroup(tarj_or, txt_or)).arrange(RIGHT, buff=0.45)
        tarjetas.move_to(DOWN * 0.05)

        self.play(FadeIn(titulo, shift=DOWN * 0.15), run_time=0.4)
        self._tick(0.4)
        self.play(
            LaggedStart(
                FadeIn(tarjetas[0], shift=UP * 0.12),
                FadeIn(tarjetas[1], shift=UP * 0.12),
                lag_ratio=0.35,
            ),
            run_time=0.85,
        )
        self._tick(0.85)

        fadeout = 0.7
        fin_audio = cargar_fin_audio()
        restante = fin_audio - self._t - fadeout
        if restante > 0:
            self.wait(restante)
            self._tick(restante)

        self.play(FadeOut(Group(*self.mobjects)), run_time=fadeout)
        self._tick(fadeout)


if __name__ == "__main__":
    print("Renderiza con: manim -pql video_s2c3_conjuncion_disyuncion.py ConjuncionDisyuncion")
