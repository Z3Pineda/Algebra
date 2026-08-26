"""
Video 1.1 — ¿Conjunto o no conjunto?
Manim Community v0.18+

Renderizar (alta calidad):
    manim -pqh video_1_1_conjunto_o_no.py ConjuntoONo

Duración aproximada: ~185 s (ajustada a timestamps de narración)
"""

from manim import *

AZUL = "#1d4ed8"
VERDE = "#16a34a"
ROJO = "#dc2626"
AMBAR = "#d97706"
GRIS = "#64748b"
FONDO = "#0f172a"


def tarjeta(texto, color=AZUL, ancho=11):
    t = Text(texto, font_size=28, color=WHITE, line_spacing=1.2)
    t.scale_to_fit_width(ancho - 1.2)
    box = RoundedRectangle(
        corner_radius=0.2,
        width=ancho,
        height=max(1.4, t.height + 0.8),
        color=color,
        fill_color=color,
        fill_opacity=0.15,
        stroke_width=3,
    )
    g = VGroup(box, t)
    t.move_to(box.get_center())
    return g


def ejemplo_fila(enunciado, es_conjunto, motivo=""):
    icono = Text("✓" if es_conjunto else "✗", font_size=40, color=VERDE if es_conjunto else ROJO)
    titulo = Text(enunciado, font_size=30, color=WHITE, weight=BOLD)
    fila = VGroup(icono, titulo).arrange(RIGHT, buff=0.35)
    if motivo:
        sub = Text(motivo, font_size=24, color=GRIS)
        sub.next_to(fila, DOWN, aligned_edge=LEFT, buff=0.2)
        return VGroup(fila, sub)
    return fila


class ConjuntoONo(Scene):
    def construct(self):
        self.camera.background_color = FONDO

        # ── Bloque 1 (~0–35 s): definición ───────────────────────────
        titulo = Text("¿Qué es un conjunto?", font_size=52, color=AZUL, weight=BOLD)
        titulo.to_edge(UP, buff=0.6)

        def1 = Text(
            "Un conjunto es una colección de elementos\nbien definida.",
            font_size=36,
            color=WHITE,
            line_spacing=1.3,
        )
        def2 = Text(
            "Bien definida = la pertenencia es verificable.\n"
            "O cumple el criterio, o no lo cumple.\n"
            "No hay casos intermedios.",
            font_size=32,
            color=GRIS,
            line_spacing=1.25,
        )
        bloque1 = VGroup(def1, def2).arrange(DOWN, buff=0.6).move_to(ORIGIN)

        self.play(FadeIn(titulo, shift=DOWN * 0.2), run_time=1.2)
        self.play(FadeIn(def1, shift=UP * 0.15), run_time=1.5)
        self.wait(2)
        self.play(FadeIn(def2, shift=UP * 0.15), run_time=1.5)
        self.wait(8)
        self.play(FadeOut(VGroup(titulo, bloque1)), run_time=1)

        # ── Bloque 2 (~15–24 s): criterio verificable ───────────────
        titulo2 = Text("Regla de oro", font_size=48, color=AMBAR, weight=BOLD)
        titulo2.to_edge(UP, buff=0.6)

        ok = tarjeta("Criterio verificable  →  CONJUNTO", VERDE, 10)
        no = tarjeta("Criterio subjetivo o ausente  →  NO es conjunto", ROJO, 10)
        regla = VGroup(ok, no).arrange(DOWN, buff=0.7).move_to(ORIGIN)

        self.play(FadeIn(titulo2), run_time=0.8)
        self.play(FadeIn(ok, shift=LEFT * 0.3), run_time=1.2)
        self.wait(2)
        self.play(FadeIn(no, shift=RIGHT * 0.3), run_time=1.2)
        self.wait(24.8)  # ~46 s: fin bloque2 / inicio bloque3 (sin solapar audio)
        self.play(FadeOut(VGroup(titulo2, regla)), run_time=1)

        # ── Bloque 3 (~46–65 s): ejemplos SÍ ───────────────────────
        titulo3 = Text("Sí son conjuntos", font_size=48, color=VERDE, weight=BOLD)
        titulo3.to_edge(UP, buff=0.55)

        ej1 = ejemplo_fila("Tornillos de diámetro 8 mm", True, "Criterio medible")
        ej2 = ejemplo_fila("Enteros del 1 al 10", True, "Criterio explícito")
        ej3 = ejemplo_fila("Piezas con dureza > 60 HRC", True, "Umbral + prueba estándar")
        ejemplos_ok = VGroup(ej1, ej2, ej3).arrange(DOWN, buff=0.55, aligned_edge=LEFT)
        ejemplos_ok.next_to(titulo3, DOWN, buff=0.6)

        self.play(FadeIn(titulo3), run_time=0.8)
        for ej in [ej1, ej2, ej3]:
            self.play(FadeIn(ej, shift=UP * 0.2), run_time=1)
            self.wait(3)
        self.wait(4.7)  # ~65 s: fin bloque3 / inicio bloque4
        self.play(FadeOut(VGroup(titulo3, ejemplos_ok)), run_time=1)

        # ── Bloque 4 (~65–81 s): ejemplos NO ──────────────────────
        titulo4 = Text("No son conjuntos", font_size=48, color=ROJO, weight=BOLD)
        titulo4.to_edge(UP, buff=0.55)

        nej1 = ejemplo_fila("Piezas resistentes", False, "Sin condición ni umbral")
        nej2 = ejemplo_fila("Números grandes", False, "Sin límite definido")
        nej3 = ejemplo_fila("Piezas de buena calidad", False, "Criterio subjetivo")
        ejemplos_no = VGroup(nej1, nej2, nej3).arrange(DOWN, buff=0.55, aligned_edge=LEFT)
        ejemplos_no.next_to(titulo4, DOWN, buff=0.6)

        self.play(FadeIn(titulo4), run_time=0.8)
        for ej in [nej1, nej2, nej3]:
            self.play(FadeIn(ej, shift=UP * 0.2), run_time=1)
            self.wait(2)
        self.wait(5.4)  # ~81 s: fin bloque4 / inicio bloque5
        self.play(FadeOut(VGroup(titulo4, ejemplos_no)), run_time=1)

        # ── Bloque 5 (~81 s+): conclusión ──────────────────────────
        titulo5 = Text("Pertenencia ∈", font_size=48, color=AZUL, weight=BOLD)
        titulo5.to_edge(UP, buff=0.6)

        c1 = Text(
            "Un elemento pertenece a un conjunto\nsi y solo si cumple el criterio que lo define.",
            font_size=34,
            color=WHITE,
            line_spacing=1.25,
        )
        c2 = Text(
            "Sin criterio objetivo: no hay pertenencia.\nNo hay conjunto.",
            font_size=34,
            color=AMBAR,
            line_spacing=1.25,
        )
        cierre = VGroup(c1, c2).arrange(DOWN, buff=0.7).move_to(ORIGIN)

        self.play(FadeIn(titulo5), run_time=0.8)
        self.play(FadeIn(c1), run_time=1.2)
        self.wait(5)
        self.play(FadeIn(c2), run_time=1.2)
        self.wait(8)
        self.play(FadeOut(VGroup(titulo5, cierre)), run_time=1.5)
