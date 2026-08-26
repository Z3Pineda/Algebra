"""
Trailer del curso — Álgebra para Ingeniería Mecánica Administrativa
Manim Community v0.18+

Renderizar (baja calidad, prueba):
    manim -pql algebra_curso_trailer.py AlgebraCursoTrailer

Renderizar (alta calidad):
    manim -pqh algebra_curso_trailer.py AlgebraCursoTrailer

Duración aproximada: ~3 minutos
"""

from manim import *
import numpy as np

# ── Paleta del curso ─────────────────────────────────────────────
AZUL = "#1d4ed8"
AZUL_CLARO = "#3b82f6"
AZUL_OSCURO = "#1e3a8a"
NARANJA = "#f97316"
NARANJA_CLARO = "#fb923c"
GRIS = "#64748b"
FONDO = "#0f172a"


def crear_engranaje(radio=0.55, dientes=14, color=AZUL, grosor_diente=0.12):
    """Engranaje simple con círculo central y dientes rectangulares."""
    cuerpo = Circle(radius=radio * 0.62, color=color, fill_color=color, fill_opacity=1, stroke_width=0)
    agujero = Circle(radius=radio * 0.18, color=FONDO, fill_color=FONDO, fill_opacity=1, stroke_width=0)

    dientes_grp = VGroup()
    for i in range(dientes):
        ang = i * TAU / dientes
        d = Rectangle(
            width=grosor_diente,
            height=radio * 0.35,
            color=color,
            fill_color=color,
            fill_opacity=1,
            stroke_width=0,
        )
        d.move_to(
            (radio * 0.82) * np.array([np.cos(ang), np.sin(ang), 0])
        )
        d.rotate(ang + PI / 2)
        dientes_grp.add(d)

    return VGroup(dientes_grp, cuerpo, agujero)


def valor_texto(num, color=WHITE, font_size=36):
    """Etiqueta numérica como Text (evita fallos al cambiar dígitos)."""
    return Text(str(num), font_size=font_size, color=color, weight=BOLD)


def crear_contenedor(ancho=4.2, alto=2.4, color=AZUL):
    """Contenedor tipo caja (vista frontal)."""
    caja = RoundedRectangle(
        corner_radius=0.15,
        width=ancho,
        height=alto,
        color=color,
        stroke_width=4,
        fill_color=color,
        fill_opacity=0.08,
    )
    # Reborde superior (perspectiva ligera)
    tapa = Line(
        caja.get_corner(UL) + LEFT * 0.15 + UP * 0.12,
        caja.get_corner(UR) + RIGHT * 0.15 + UP * 0.12,
        color=AZUL_CLARO,
        stroke_width=3,
    )
    lateral = Polygon(
        caja.get_corner(UL),
        caja.get_corner(UL) + LEFT * 0.15 + UP * 0.12,
        caja.get_corner(UR) + RIGHT * 0.15 + UP * 0.12,
        caja.get_corner(UR),
        color=AZUL_CLARO,
        fill_color=AZUL_CLARO,
        fill_opacity=0.15,
        stroke_width=2,
    )
    return VGroup(caja, lateral, tapa)


def icono_conjuntos():
    """Dos círculos tipo Venn."""
    c1 = Circle(radius=0.45, color=AZUL, stroke_width=5, fill_color=AZUL, fill_opacity=0.2)
    c2 = Circle(radius=0.45, color=NARANJA, stroke_width=5, fill_color=NARANJA, fill_opacity=0.2)
    c1.shift(LEFT * 0.25)
    c2.shift(RIGHT * 0.25)
    return VGroup(c1, c2)


def icono_numeros_reales():
    """Recta numérica con ticks."""
    linea = Line(LEFT * 1.1, RIGHT * 1.1, color=AZUL, stroke_width=4)
    ticks = VGroup(
        *[
            Line(UP * 0.12, DOWN * 0.12, color=AZUL, stroke_width=2).move_to(
                linea.point_from_proportion(i / 4)
            )
            for i in range(5)
        ]
    )
    punto = Dot(color=NARANJA, radius=0.08).move_to(linea.point_from_proportion(0.65))
    return VGroup(linea, ticks, punto)


def icono_expresiones():
    """Monomio + binomio estilizado."""
    term1 = Text("x²", color=AZUL, font_size=42)
    mas = Text("+", color=GRIS, font_size=42)
    term2 = Text("3x", color=NARANJA, font_size=42)
    grp = VGroup(term1, mas, term2).arrange(RIGHT, buff=0.15)
    caja = SurroundingRectangle(grp, color=AZUL_CLARO, buff=0.12, stroke_width=2, corner_radius=0.08)
    return VGroup(caja, grp)


def icono_ecuaciones():
    """Balanza simplificada con igualdad."""
    base = Line(LEFT * 0.9 + DOWN * 0.5, RIGHT * 0.9 + DOWN * 0.5, color=AZUL, stroke_width=4)
    poste = Line(DOWN * 0.5, UP * 0.3, color=AZUL, stroke_width=4)
    barra = Line(LEFT * 0.7 + UP * 0.3, RIGHT * 0.7 + UP * 0.3, color=NARANJA, stroke_width=5)
    izq = Text("2x", color=AZUL, font_size=36).next_to(barra.get_start(), DOWN, buff=0.25)
    der = Text("10", color=NARANJA, font_size=36).next_to(barra.get_end(), DOWN, buff=0.25)
    return VGroup(base, poste, barra, izq, der)


def icono_valor_absoluto():
    """Gráfica en V de |x|."""
    eje_x = Line(LEFT * 1.2, RIGHT * 1.2, color=GRIS, stroke_width=2)
    v_izq = Line(LEFT * 1.0 + DOWN * 0.9, ORIGIN, color=AZUL, stroke_width=5)
    v_der = Line(ORIGIN, RIGHT * 1.0 + DOWN * 0.9, color=NARANJA, stroke_width=5)
    vert = Dot(color=WHITE, radius=0.06)
    return VGroup(eje_x, v_izq, v_der, vert)


def crear_tarjeta_unidad(titulo, icono_fn, indice):
    """Tarjeta de unidad con ícono geométrico."""
    fondo = RoundedRectangle(
        corner_radius=0.2,
        width=5.5,
        height=3.2,
        color=AZUL if indice % 2 == 0 else NARANJA,
        stroke_width=4,
        fill_color=AZUL_OSCURO if indice % 2 == 0 else "#7c2d12",
        fill_opacity=0.35,
    )
    badge = Circle(radius=0.28, color=NARANJA if indice % 2 == 0 else AZUL, fill_opacity=1, stroke_width=0)
    num = Text(str(indice + 1), font_size=28, color=WHITE, weight=BOLD).move_to(badge)
    titulo_txt = Text(titulo, font_size=36, color=WHITE, weight=BOLD)
    titulo_txt.next_to(fondo.get_top(), DOWN, buff=0.45)

    icono = icono_fn().scale(0.85)
    icono.next_to(fondo.get_center(), DOWN, buff=0.15)

    badge.to_corner(UL, buff=0.2).shift(RIGHT * 0.15 + DOWN * 0.15)

    return VGroup(fondo, badge, num, titulo_txt, icono)


class AlgebraCursoTrailer(Scene):
    """Animación introductoria del curso (~3 min)."""

    def construct(self):
        self.camera.background_color = FONDO

        # ═══════════════════════════════════════════════════════════
        # SECCIÓN 1 — Engranaje + pregunta (~40 s)
        # ═══════════════════════════════════════════════════════════
        titulo_curso = Text(
            "Álgebra · Ingeniería Mecánica Administrativa",
            font_size=32,
            color=AZUL_CLARO,
        ).to_edge(UP, buff=0.5)

        engranaje = crear_engranaje(radio=0.7, color=NARANJA).shift(LEFT * 2.8 + UP * 0.3)
        contenedor = crear_contenedor().shift(RIGHT * 1.2 + DOWN * 0.2)

        pregunta = Text(
            "¿Cuántas piezas caben en el contenedor?",
            font_size=40,
            color=WHITE,
            weight=BOLD,
        ).next_to(contenedor, UP, buff=0.55)

        pieza_mini = crear_engranaje(radio=0.22, dientes=10, color=NARANJA_CLARO)

        self.play(FadeIn(titulo_curso, shift=DOWN * 0.3), run_time=1.2)
        self.wait(0.5)

        self.play(
            DrawBorderThenFill(contenedor),
            FadeIn(pregunta, shift=UP * 0.2),
            run_time=1.8,
        )
        self.play(
            FadeIn(engranaje, scale=0.5),
            Rotate(engranaje, angle=PI, run_time=1.5, rate_func=smooth),
            run_time=1.5,
        )
        self.wait(0.8)

        # Colocar piezas dentro del contenedor (rejilla)
        piezas = VGroup()
        posiciones = [
            RIGHT * 0.35 + UP * 0.35,
            RIGHT * 0.95 + UP * 0.35,
            RIGHT * 1.55 + UP * 0.35,
            RIGHT * 0.35 + DOWN * 0.35,
            RIGHT * 0.95 + DOWN * 0.35,
            RIGHT * 1.55 + DOWN * 0.35,
        ]
        for pos in posiciones:
            p = pieza_mini.copy().move_to(contenedor.get_center() + pos * 0.55)
            piezas.add(p)

        self.play(
            LaggedStart(*[FadeIn(p, scale=0.3) for p in piezas], lag_ratio=0.15),
            run_time=2.0,
        )
        self.wait(1.0)

        # ═══════════════════════════════════════════════════════════
        # SECCIÓN 2 — Datos que cambian → respuesta cambia (~45 s)
        # ═══════════════════════════════════════════════════════════
        subtitulo = Text(
            "Al cambiar los datos, cambia la respuesta",
            font_size=30,
            color=NARANJA_CLARO,
        ).to_edge(DOWN, buff=0.6)

        panel_datos = RoundedRectangle(
            corner_radius=0.12,
            width=3.6,
            height=2.6,
            color=AZUL,
            stroke_width=3,
            fill_color=AZUL_OSCURO,
            fill_opacity=0.4,
        ).to_corner(DL, buff=0.5).shift(RIGHT * 0.3 + UP * 0.3)

        lbl_l = Text("Largo (cm)", font_size=22, color=GRIS).move_to(panel_datos.get_top() + DOWN * 0.45)
        lbl_a = Text("Ancho (cm)", font_size=22, color=GRIS).move_to(panel_datos.get_top() + DOWN * 1.05)
        lbl_p = Text("Pieza Ø (cm)", font_size=22, color=GRIS).move_to(panel_datos.get_top() + DOWN * 1.65)

        val_l = valor_texto(60).next_to(lbl_l, RIGHT, buff=0.3)
        val_a = valor_texto(40).next_to(lbl_a, RIGHT, buff=0.3)
        val_p = valor_texto(8, NARANJA).next_to(lbl_p, RIGHT, buff=0.3)

        respuesta_lbl = Text("Piezas que caben:", font_size=26, color=GRIS)
        respuesta = valor_texto(30, NARANJA, font_size=56)

        grupo_resp = VGroup(respuesta_lbl, respuesta).arrange(DOWN, buff=0.2)
        grupo_resp.next_to(engranaje, DOWN, buff=0.6)

        self.play(
            FadeIn(subtitulo),
            FadeIn(panel_datos),
            Write(VGroup(lbl_l, lbl_a, lbl_p)),
            FadeIn(VGroup(val_l, val_a, val_p)),
            FadeIn(grupo_resp),
            run_time=2.0,
        )
        self.wait(0.8)

        # Animación: cambiar dimensiones y recalcular (simulado)
        escenarios = [
            (60, 40, 8, 30, 6),
            (80, 40, 8, 40, 8),
            (80, 50, 10, 32, 6),
            (100, 60, 10, 54, 9),
            (90, 45, 9, 50, 8),
        ]

        for largo, ancho, diam, piezas_n, num_vis in escenarios:
            nuevo_cont = crear_contenedor(
                ancho=2.8 + largo / 35,
                alto=1.6 + ancho / 35,
            ).move_to(contenedor.get_center())

            nuevas_piezas = VGroup()
            cols = min(3, max(2, num_vis // 2))
            filas = max(1, (num_vis + cols - 1) // cols)
            idx = 0
            for r in range(filas):
                for c in range(cols):
                    if idx >= num_vis:
                        break
                    offset = (
                        RIGHT * (c - (cols - 1) / 2) * 0.55
                        + UP * ((filas - 1) / 2 - r) * 0.55
                    )
                    nuevas_piezas.add(
                        pieza_mini.copy().move_to(nuevo_cont.get_center() + offset * 0.55)
                    )
                    idx += 1

            nuevo_val_l = valor_texto(largo).move_to(val_l)
            nuevo_val_a = valor_texto(ancho).move_to(val_a)
            nuevo_val_p = valor_texto(diam, NARANJA).move_to(val_p)
            nueva_resp = valor_texto(piezas_n, NARANJA, font_size=56).move_to(respuesta)

            self.play(
                ReplacementTransform(val_l, nuevo_val_l),
                ReplacementTransform(val_a, nuevo_val_a),
                ReplacementTransform(val_p, nuevo_val_p),
                ReplacementTransform(respuesta, nueva_resp),
                run_time=0.8,
                rate_func=smooth,
            )
            val_l, val_a, val_p, respuesta = nuevo_val_l, nuevo_val_a, nuevo_val_p, nueva_resp
            self.play(
                FadeOut(VGroup(contenedor, piezas), scale=0.6),
                run_time=0.5,
            )
            contenedor = nuevo_cont
            piezas = nuevas_piezas
            self.add(contenedor, piezas)
            self.play(
                FadeIn(contenedor, scale=0.6),
                FadeIn(piezas, scale=0.6),
                run_time=0.5,
            )
            self.wait(0.5)

        # Transición a unidades
        grupo_escena1 = VGroup(
            titulo_curso, engranaje, contenedor, pregunta, piezas,
            subtitulo, panel_datos, lbl_l, lbl_a, lbl_p,
            val_l, val_a, val_p, grupo_resp,
        )
        puente = Text(
            "Para resolverlo necesitas herramientas de todo el curso…",
            font_size=32,
            color=WHITE,
        )
        self.play(FadeOut(grupo_escena1, shift=UP * 0.5), run_time=1.2)
        self.play(FadeIn(puente, scale=0.95), run_time=1.0)
        self.wait(1.2)
        self.play(FadeOut(puente), run_time=0.8)

        # ═══════════════════════════════════════════════════════════
        # SECCIÓN 3 — Cinco tarjetas de unidades (~75 s)
        # ═══════════════════════════════════════════════════════════
        unidades = [
            ("Conjuntos", icono_conjuntos),
            ("Números Reales", icono_numeros_reales),
            ("Expresiones", icono_expresiones),
            ("Ecuaciones", icono_ecuaciones),
            ("Valor Absoluto", icono_valor_absoluto),
        ]

        encabezado_unidades = Text(
            "5 unidades · un solo objetivo: decidir con precisión",
            font_size=34,
            color=AZUL_CLARO,
        ).to_edge(UP, buff=0.55)

        self.play(FadeIn(encabezado_unidades, shift=DOWN * 0.2), run_time=1.0)

        tarjeta_anterior = None
        for i, (nombre, icono_fn) in enumerate(unidades):
            tarjeta = crear_tarjeta_unidad(nombre, icono_fn, i)
            tarjeta.move_to(ORIGIN)

            descripcion = self._descripcion_unidad(nombre)
            descripcion.next_to(tarjeta, DOWN, buff=0.45)

            if tarjeta_anterior is None:
                self.play(
                    FadeIn(tarjeta, scale=0.85, shift=RIGHT * 0.6),
                    FadeIn(descripcion, shift=UP * 0.2),
                    run_time=1.4,
                )
            else:
                self.play(
                    FadeOut(tarjeta_anterior, shift=LEFT * 0.8, scale=0.9),
                    FadeOut(desc_anterior, shift=LEFT * 0.5),
                    FadeIn(tarjeta, shift=RIGHT * 0.8, scale=0.9),
                    FadeIn(descripcion, shift=UP * 0.2),
                    run_time=1.3,
                )

            # Pulso de color en el borde
            self.play(
                tarjeta[0].animate.set_stroke(
                    color=NARANJA if i % 2 == 0 else AZUL_CLARO,
                    width=6,
                ),
                run_time=0.5,
            )
            self.play(
                tarjeta[0].animate.set_stroke(
                    color=AZUL if i % 2 == 0 else NARANJA,
                    width=4,
                ),
                run_time=0.4,
            )
            self.wait(1.8)

            tarjeta_anterior = tarjeta
            desc_anterior = descripcion

        self.play(
            FadeOut(tarjeta_anterior, scale=1.1),
            FadeOut(desc_anterior),
            FadeOut(encabezado_unidades),
            run_time=1.0,
        )

        # ═══════════════════════════════════════════════════════════
        # SECCIÓN 4 — Cierre (~25 s)
        # ═══════════════════════════════════════════════════════════
        # Íconos en fila
        mini_iconos = VGroup(
            icono_conjuntos().scale(0.45),
            icono_numeros_reales().scale(0.45),
            icono_expresiones().scale(0.45),
            icono_ecuaciones().scale(0.45),
            icono_valor_absoluto().scale(0.45),
        ).arrange(RIGHT, buff=0.55)

        cierre = Text(
            "Esto es lo que podrás hacer\nal final del semestre",
            font_size=46,
            color=WHITE,
            weight=BOLD,
            line_spacing=1.2,
        )

        subt = Text(
            "Modelar · calcular · verificar · decidir",
            font_size=28,
            color=NARANJA_CLARO,
        )

        grupo_cierre = VGroup(cierre, subt, mini_iconos).arrange(DOWN, buff=0.55)
        grupo_cierre.move_to(ORIGIN)

        marco = SurroundingRectangle(
            grupo_cierre,
            color=AZUL,
            buff=0.45,
            corner_radius=0.15,
            stroke_width=3,
        )

        self.play(Create(marco), run_time=1.0)
        self.play(
            Write(cierre),
            LaggedStart(*[FadeIn(m, scale=0.5) for m in mini_iconos], lag_ratio=0.12),
            run_time=2.2,
        )
        self.play(FadeIn(subt, shift=UP * 0.15), run_time=0.8)
        self.wait(1.5)

        # Destello final
        self.play(
            marco.animate.set_stroke(color=NARANJA, width=5),
            cierre.animate.set_color(NARANJA_CLARO),
            run_time=0.8,
        )
        self.wait(2.0)
        self.play(FadeOut(VGroup(marco, grupo_cierre)), run_time=1.2)

    @staticmethod
    def _descripcion_unidad(nombre):
        textos = {
            "Conjuntos": "Clasificar piezas aceptables y rechazadas",
            "Números Reales": "Medir y ubicar dimensiones en la recta",
            "Expresiones": "Simplificar fórmulas de volumen y área",
            "Ecuaciones": "Calcular cuántas piezas caben exactamente",
            "Valor Absoluto": "Verificar tolerancias |d − d₀| ≤ t",
        }
        return Text(
            textos.get(nombre, ""),
            font_size=24,
            color=GRIS,
            slant=ITALIC,
        )


if __name__ == "__main__":
    print("Renderiza con: manim -pql algebra_curso_trailer.py AlgebraCursoTrailer")
