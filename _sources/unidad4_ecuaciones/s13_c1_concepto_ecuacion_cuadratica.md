---
title: "S13·C1 Concepto de ecuación cuadrática"
---

# S13·C1 Concepto de ecuación cuadrática

:::{admonition} 🔧 Trayectoria de un proyectil
:class: ingenieria

Un proyectil se lanza desde el suelo con velocidad inicial $v_0 = 20$ m/s en un ángulo tal que su altura $h$ (metros) respecto al tiempo $t$ (segundos) sigue:

$$h = 20t - 5t^2$$

Para hallar cuándo vuelve al suelo ($h = 0$):

$$20t - 5t^2 = 0$$

Esta ecuación tiene **exponente 2** en la incógnita — es **cuadrática**. Aparece en trayectorias parabólicas, deflexión de vigas y análisis de esfuerzos en materiales.
:::

**Pregunta detonadora**

> ¿La ecuación $x^2 - 5x + 6 = 0$ es lineal o cuadrática? ¿Cuántas soluciones podría tener?

---

## Teoría

### ¿Qué es una ecuación cuadrática?

Una **ecuación cuadrática** es una ecuación de segundo grado en la incógnita, es decir, el mayor exponente de $x$ es 2.

**Forma general:**

$$ax^2 + bx + c = 0 \quad (a \neq 0)$$

| Coeficiente | Nombre | Rol |
|:-----------:|--------|-----|
| $a$ | Coeficiente **cuadrático** | Multiplica a $x^2$; determina la "apertura" de la parábola |
| $b$ | Coeficiente **lineal** | Multiplica a $x$ |
| $c$ | Término **independiente** | Constante |

**Ejemplos:**

| Ecuación | $a$ | $b$ | $c$ |
|----------|:---:|:---:|:---:|
| $x^2 - 5x + 6 = 0$ | $1$ | $-5$ | $6$ |
| $2x^2 + 3x - 1 = 0$ | $2$ | $3$ | $-1$ |
| $-x^2 + 4 = 0$ | $-1$ | $0$ | $4$ |

---

### Clasificación

**Completa** — contiene los tres términos ($ax^2$, $bx$ y $c$):

$$x^2 - 5x + 6 = 0$$

**Incompleta** — falta al menos un término:

| Tipo | Forma | Ejemplo |
|------|-------|---------|
| Falta $bx$ | $ax^2 + c = 0$ | $x^2 - 9 = 0$ |
| Falta $c$ | $ax^2 + bx = 0$ | $2x^2 - 8x = 0$ |
| Solo $ax^2$ | $ax^2 = 0$ | $3x^2 = 0$ |

---

### Interpretación gráfica

La expresión $y = ax^2 + bx + c$ es una **parábola**. Las soluciones de $ax^2 + bx + c = 0$ son los valores de $x$ donde la parábola **corta el eje $x$** (donde $y = 0$).

| Soluciones reales | Gráfica |
|:-----------------:|---------|
| 2 | La parábola corta el eje $x$ en dos puntos |
| 1 | La parábola toca el eje $x$ en un solo punto (vértice) |
| 0 | La parábola no corta el eje $x$ |

---

### Verificación de soluciones

Sustituye cada valor propuesto en la ecuación **original** y comprueba que el resultado sea 0.

**Ejemplo:** ¿Son $x = 2$ y $x = 3$ soluciones de $x^2 - 5x + 6 = 0$?

$$x = 2: \quad (2)^2 - 5(2) + 6 = 4 - 10 + 6 = 0 \quad \checkmark$$
$$x = 3: \quad (3)^2 - 5(3) + 6 = 9 - 15 + 6 = 0 \quad \checkmark$$

Ambos valores son **raíces** de la ecuación.

```{warning}
Errores frecuentes al identificar ecuaciones cuadráticas:

- Olvidar que $a \neq 0$ — si $a = 0$, la ecuación es **lineal**, no cuadrática
- Confundir el término independiente $c$ con el coeficiente lineal $b$
- Verificar sustituyendo en pasos intermedios en lugar de la ecuación original
```

---

### Aplicaciones en ingeniería

**Trayectorias parabólicas** — altura del proyectil:

$$h = v_0 \sin(\theta)\, t - \frac{1}{2}g t^2 = 0 \quad \Rightarrow \quad t = 0 \text{ o } t = \frac{2 v_0 \sin\theta}{g}$$

**Deflexión de vigas** (simplificada) — flecha máxima:

$$\delta = \frac{5 w L^4}{384 EI} \quad \text{(relación cuadrática en cargas distribuidas)}$$

**Resistencia de materiales** — esfuerzo admisible:

$$\sigma = \frac{M \cdot y}{I} \quad \Rightarrow \quad y^2 \text{ aparece en ecuaciones de pandeo}$$

:::{admonition} 🔧 Ingeniería — tiempo de vuelo de un proyectil
:class: ingenieria

Con $h = 20t - 5t^2 = 0$, factor común $5t$:

$$5t(4 - t) = 0 \quad \Rightarrow \quad t = 0 \text{ (despegue) o } t = 4 \text{ s (aterrizaje)}$$

El proyectil permanece **4 segundos** en el aire. Las ecuaciones cuadráticas traducen condiciones físicas en tiempos y distancias concretas.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_ECUACION_CUADRATICA"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Forma general ax²+bx+c=0 — identificar a, b, c
2. Completa vs incompleta con ejemplos
3. Parábola y cortes con el eje x (0, 1 o 2 soluciones)
4. Verificar x=2 y x=3 en x²-5x+6=0
5. Proyectil: 20t-5t²=0 → t=4 s
6. Cierre: cuadrática = grado 2, a≠0
```

---

## Visualización interactiva

Ajusta los coeficientes $a$, $b$ y $c$ y observa la parábola junto con el número de soluciones reales.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s13c1-cuadratica" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s13c1-cuadratica', {
            boundingbox: [-6, 12, 8, -8],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slA = board.create('slider', [[-5, 11], [0, 11], [-2, 1, 2]], {
            name: 'a', snapWidth: 0.25, fillColor: '#1d4ed8' });
        var slB = board.create('slider', [[-5, 9.5], [0, 9.5], [-6, -5, 6]], {
            name: 'b', snapWidth: 0.5, fillColor: '#c2410c' });
        var slC = board.create('slider', [[-5, 8], [0, 8], [-6, 6, 6]], {
            name: 'c', snapWidth: 0.5, fillColor: '#16a34a' });

        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var a = slA.Value(), b = slB.Value(), c = slC.Value();
            if (Math.abs(a) < 0.05) return;

            var f = function(x) { return a * x * x + b * x + c; };
            dinamicos.push(board.create('functiongraph', [f, -6, 8], {
                strokeColor: '#1d4ed8', strokeWidth: 2.5
            }));

            var disc = b * b - 4 * a * c;
            var tipo, color;
            if (disc > 0.01) {
                tipo = '2 soluciones reales';
                color = '#16a34a';
                var x1 = (-b - Math.sqrt(disc)) / (2 * a);
                var x2 = (-b + Math.sqrt(disc)) / (2 * a);
                dinamicos.push(board.create('point', [x1, 0], {
                    size: 4, fillColor: '#16a34a', strokeColor: '#16a34a', name: 'x1', label: { fontSize: 11 }
                }));
                dinamicos.push(board.create('point', [x2, 0], {
                    size: 4, fillColor: '#16a34a', strokeColor: '#16a34a', name: 'x2', label: { fontSize: 11 }
                }));
            } else if (Math.abs(disc) <= 0.01) {
                tipo = '1 solucion (doble)';
                color = '#ca8a04';
                var xv = -b / (2 * a);
                dinamicos.push(board.create('point', [xv, 0], {
                    size: 4, fillColor: '#ca8a04', strokeColor: '#ca8a04', name: 'x', label: { fontSize: 11 }
                }));
            } else {
                tipo = '0 soluciones reales';
                color = '#dc2626';
            }

            dinamicos.push(board.create('text', [4, 10,
                a + 'x² + ' + b + 'x + ' + c + ' = 0'], {
                fontSize: 13, color: '#374151', fontWeight: 'bold'
            }));
            dinamicos.push(board.create('text', [4, 9,
                'Discriminante: ' + disc.toFixed(2) + ' → ' + tipo], {
                fontSize: 12, color: color, fontWeight: 'bold'
            }));
        }

        slA.on('drag', dibujar);
        slB.on('drag', dibujar);
        slC.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Tres deslizadores controlan $a$, $b$ y $c$. La parábola se actualiza en tiempo real y se marcan las raíces reales (cortes con el eje $x$). El discriminante $b^2-4ac$ clasifica el número de soluciones. Conecta álgebra y gráfica.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSe9tWTqMM2gINAqY-7uPv3K89_QZZaxjOIVD8_GaHGOR5DlWQ/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Concepto de ecuación cuadrática
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "Forma general de ecuacion cuadratica:" → ax²+bx+c=0, a≠0
P2 (Fill): "En x²-5x+6=0, b = ___" → -5
P3 (MC): "x²-9=0 es cuadratica:" → Incompleta
P4 (T/F): "x=3 es solucion de x²-5x+6=0." → Verdadero
P5 (MC): "Si a=0 en ax²+bx+c=0, la ecuacion es:" → Lineal
P6 (MC ingeniería): "20t-5t²=0 modela:" → Tiempo en que h=0 (proyectil)
P7 (Fill): "Verificar x=2 en x²-5x+6: resultado = ___" → 0
P8 (MC): "Graficamente, soluciones son:" → Cortes con eje x
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Forma general
  - $ax^2 + bx + c = 0$ con $a \neq 0$
* - Coeficientes
  - $a$ (cuadrático), $b$ (lineal), $c$ (independiente)
* - Completa
  - Tiene los tres términos
* - Incompleta
  - Falta $bx$, $c$ o ambos
* - Verificación
  - Sustituir en la ecuación original; resultado debe ser 0
* - Ingeniería
  - Trayectorias, deflexión de vigas, esfuerzos en materiales
```

:::{admonition} Siguiente clase
:class: tip
Ya identificas ecuaciones cuadráticas y verificas soluciones. En la siguiente clase aprenderás a resolverlas **factorizando** con la propiedad del producto nulo.

➡️ [Ir a S13·C2 Solución por factorización](s13_c2_solucion_factorizacion.md)
:::
