---
title: "S13·C4 Completando el cuadrado"
---

# S13·C4 Completando el cuadrado

:::{admonition} 🔧 Vértice de una trayectoria parabólica
:class: ingenieria

La altura de un proyectil es $h = -5t^2 + 30t + 2$ (metros). Para hallar el **tiempo de altura máxima**, reescribimos como:

$$h = -5(t^2 - 6t) + 2 = -5(t^2 - 6t + 9 - 9) + 2 = -5(t - 3)^2 + 47$$

El vértice está en $t = 3$ s, $h = 47$ m — altura máxima. **Completar el cuadrado** revela el vértice de la parábola, esencial en optimización de trayectorias y diseño mecánico.
:::

**Pregunta detonadora**

> Para completar el cuadrado en $x^2 + 6x$, ¿qué número sumas y restas? ¿Por qué no altera el valor de la expresión?

---

## Teoría

### ¿Qué es completar el cuadrado?

Es transformar una expresión cuadrática en un **cuadrado perfecto** más una constante:

$$x^2 + bx + \underbrace{\left(\frac{b}{2}\right)^2}_{\text{completar}} = \left(x + \frac{b}{2}\right)^2$$

**Regla:** toma la mitad del coeficiente de $x$ y elévala al cuadrado.

---

### Pasos para $x^2 + bx$

| Paso | Acción | Ejemplo $x^2 + 6x$ |
|:----:|--------|---------------------|
| 1 | Tomar la mitad de $b$: $\dfrac{b}{2}$ | $\dfrac{6}{2} = 3$ |
| 2 | Elevar al cuadrado: $\left(\dfrac{b}{2}\right)^2$ | $3^2 = 9$ |
| 3 | Sumar y restar ese valor | $x^2 + 6x + 9 - 9$ |
| 4 | Factorizar el trinomio perfecto | $(x + 3)^2 - 9$ |

---

### Resolver $x^2 + 6x - 7 = 0$ completando el cuadrado

**Paso 1:** Mover $c$ al otro lado:

$$x^2 + 6x = 7$$

**Paso 2:** Completar: $\left(\dfrac{6}{2}\right)^2 = 9$

$$x^2 + 6x + 9 = 7 + 9$$
$$(x + 3)^2 = 16$$

**Paso 3:** Raíz cuadrada:

$$x + 3 = \pm 4 \quad \Rightarrow \quad x = -3 \pm 4$$

**Soluciones:** $x = 1$ y $x = -7$

---

### Caso con $a \neq 1$

Resolver $2x^2 + 8x - 10 = 0$:

**Paso 1:** Dividir entre $a = 2$:

$$x^2 + 4x - 5 = 0 \quad \Rightarrow \quad x^2 + 4x = 5$$

**Paso 2:** Completar: $\left(\dfrac{4}{2}\right)^2 = 4$

$$x^2 + 4x + 4 = 5 + 4 \quad \Rightarrow \quad (x + 2)^2 = 9$$

**Paso 3:** $x + 2 = \pm 3 \Rightarrow x = 1$ o $x = -5$

---

### Vértice de la parábola

La forma **vértice** de $y = ax^2 + bx + c$ es:

$$y = a(x - h)^2 + k$$

donde $(h, k)$ es el **vértice** — punto máximo o mínimo.

Completando el cuadrado en $y = -5t^2 + 30t + 2$:

$$y = -5(t - 3)^2 + 47 \quad \Rightarrow \quad \text{vértice: } (3, 47)$$

Como $a = -5 < 0$, el vértice es un **máximo**.

```{warning}
Al completar el cuadrado con $a \neq 1$:

1. **Primero** divide toda la ecuación entre $a$ (si $a \neq 1$)
2. Completa el cuadrado **solo** en el lado con $x^2$ y $x$
3. Si dividiste al inicio, no olvides que el resultado ya está normalizado

Si sumas $(b/2)^2$ a un lado, **suma lo mismo** al otro lado para mantener la igualdad.
```

---

### Derivación de la fórmula general

Partiendo de $ax^2 + bx + c = 0$ con $a \neq 0$:

$$x^2 + \frac{b}{a}x = -\frac{c}{a}$$

Completar: $\left(\dfrac{b}{2a}\right)^2 = \dfrac{b^2}{4a^2}$

$$x^2 + \frac{b}{a}x + \frac{b^2}{4a^2} = \frac{b^2 - 4ac}{4a^2}$$

$$\left(x + \frac{b}{2a}\right)^2 = \frac{b^2 - 4ac}{4a^2}$$

$$x + \frac{b}{2a} = \pm\frac{\sqrt{b^2 - 4ac}}{2a}$$

$$\boxed{x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}$$

Esta es la **fórmula general** — se obtiene sistemáticamente completando el cuadrado.

---

### Tabla de cuadrados perfectos útiles

| Expresión | Completar con | Resultado |
|-----------|:-------------:|-----------|
| $x^2 + 4x$ | $+4$ | $(x+2)^2 - 4$ |
| $x^2 + 6x$ | $+9$ | $(x+3)^2 - 9$ |
| $x^2 - 10x$ | $+25$ | $(x-5)^2 - 25$ |
| $x^2 + 7x$ | $+\dfrac{49}{4}$ | $\left(x+\dfrac{7}{2}\right)^2 - \dfrac{49}{4}$ |

:::{admonition} 🔧 Ingeniería — optimización de costo
:class: ingenieria

El costo de fabricación es $C(x) = 2x^2 - 12x + 25$ (miles de pesos), con $x$ = miles de unidades.

Completando: $C = 2(x^2 - 6x) + 25 = 2(x-3)^2 - 18 + 25 = 2(x-3)^2 + 7$

El **mínimo** costo es $C = 7$ (miles de pesos) cuando $x = 3$ (3000 unidades). El vértice $(3, 7)$ guía la decisión de producción óptima.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_COMPLETANDO_CUADRADO"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. x²+6x: sumar y restar 9 → (x+3)²-9
2. Resolver x²+6x-7=0 → (x+3)²=16 → x=1, x=-7
3. Caso a≠1: 2x²+8x-10=0, dividir entre 2 primero
4. Vértice de h=-5t²+30t+2 → (3, 47)
5. Derivacion de formula general paso a paso
6. Costo minimo C(x)=2(x-3)²+7
```

---

## Visualización interactiva

Observa cómo completar el cuadrado transforma la parábola y revela su vértice.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s13c4-completar" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s13c4-completar', {
            boundingbox: [-8, 12, 8, -5],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slB = board.create('slider', [[-6, 10.5], [2, 10.5], [-10, 6, 10]], {
            name: 'b', snapWidth: 0.5, fillColor: '#1d4ed8' });
        var slC = board.create('slider', [[-6, 9], [2, 9], [-10, -7, 10]], {
            name: 'c', snapWidth: 0.5, fillColor: '#c2410c' });

        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var b = slB.Value(), c = slC.Value();

            var f = function(x) { return x * x + b * x + c; };
            dinamicos.push(board.create('functiongraph', [f, -8, 8], {
                strokeColor: '#1d4ed8', strokeWidth: 2.5
            }));

            var h = -b / 2;
            var k = h * h + b * h + c;

            dinamicos.push(board.create('point', [h, k], {
                size: 5, fillColor: '#16a34a', strokeColor: '#16a34a',
                name: 'V(' + h.toFixed(1) + ',' + k.toFixed(1) + ')',
                label: { fontSize: 11, offset: [10, 10] }
            }));

            var completar = (b / 2) * (b / 2);
            dinamicos.push(board.create('text', [0, 11,
                'x² + ' + b + 'x + ' + c + ' = (x+' + (b/2).toFixed(1) + ')² + ' + (c - completar).toFixed(1)], {
                fontSize: 11, color: '#374151', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [0, -3.5,
                'Completar: (b/2)² = ' + completar.toFixed(2)], {
                fontSize: 10, color: '#6b7280', anchorX: 'middle', fontStyle: 'italic'
            }));
        }

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
Deslizadores para $b$ y $c$ en $x^2 + bx + c$. Muestra la parábola, el vértice en verde y la forma completada $(x + b/2)^2 + k$. Conecta completar el cuadrado con la forma vértice y optimización.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScYaKPokooHbnknk6ClzSU1ARq1nnA2LDIWURGdvqvMBfHAQA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Completando el cuadrado
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "x²+6x completado: (x+___)² - ___" → 3, 9
P2 (Fill): "x²+6x-7=0 → (x+3)²=___" → 16
P3 (Fill): "x²+6x-7=0 → x=___ o x=___" → 1, -7
P4 (MC): "Para x²+4x, se suma y resta:" → 4
P5 (Fill): "Vertice de x²-6x+5: x=___" → 3
P6 (T/F): "La formula general se deriva completando el cuadrado." → Verdadero
P7 (MC ingeniería): "h=-5(t-3)²+47 → altura max en t=___" → 3
P8 (Fill): "2x²+8x-10=0: primero dividir entre ___" → 2
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Regla
  - Sumar y restar $\left(\dfrac{b}{2}\right)^2$
* - Pasos
  - Aislar $x^2$ y $x$ → completar → factorizar → raíz cuadrada
* - Con $a \neq 1$
  - Dividir entre $a$ antes de completar
* - Forma vértice
  - $a(x-h)^2 + k$; vértice $(h, k)$
* - Fórmula general
  - $x = \dfrac{-b \pm \sqrt{b^2-4ac}}{2a}$ (derivada de completar)
* - Ingeniería
  - Altura máxima de proyectil, costo mínimo de producción
```

:::{admonition} Siguiente clase
:class: tip
Dominas completar el cuadrado y la forma vértice. En la siguiente clase practicarás **todos los métodos** de resolución en autogestión antes de la fórmula general.

➡️ [Ir a S13·Auto Práctica de ecuaciones cuadráticas](s13_auto_ecuaciones_cuadraticas.md)
:::
