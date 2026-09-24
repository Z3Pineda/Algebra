---
title: "S10·C1 Exponentes enteros y exponente cero"
---

# S10·C1 Exponentes enteros y exponente cero

:::{admonition} 🔧 Notación científica en resistencia de materiales
:class: ingenieria

El módulo de elasticidad del acero es $E \approx 2 \times 10^{11}$ Pa. Escribir este valor en notación científica usa **leyes de exponentes**:

$$2 \times 10^{11} = 2 \times 10^{5} \cdot 10^{6} = 200{,}000 \times 10^{6}$$

Al calcular esfuerzos $\sigma = F/A$, si $F = 5 \times 10^{3}$ N y $A = 2 \times 10^{-4}$ m²:

$$\sigma = \frac{5 \times 10^{3}}{2 \times 10^{-4}} = 2.5 \times 10^{3-(-4)} = 2.5 \times 10^{7} \text{ Pa}$$

Las leyes de exponentes permiten manipular magnitudes enormes (presiones en Pascal) y pequeñas (fuerzas en Newton) sin perder precisión — herramienta esencial en ingeniería mecánica.
:::

**Pregunta detonadora**

> ¿Cuánto es $2^3 \cdot 2^4$? ¿Puedes escribirlo como una sola potencia de $2$ sin calcular cada factor?

---

## Teoría

### ¿Qué es un exponente?

Un **exponente** indica cuántas veces se multiplica una base por sí misma:

$$x^n = \underbrace{x \cdot x \cdot x \cdots x}_{n \text{ veces}} \qquad (n \text{ entero positivo})$$

En ingeniería, los exponentes aparecen en notación científica ($3.2 \times 10^8$), en fórmulas de potencia ($P = I^2 R$) y en unidades compuestas (m/s²).

---

### Ley 1: Producto de potencias (misma base)

$$x^m \cdot x^n = x^{m+n}$$

**Ejemplo:**

$$x^3 \cdot x^4 = x^{3+4} = x^7$$

$$2^5 \cdot 2^3 = 2^{5+3} = 2^8 = 256$$

**¿Por qué?** Tres factores de $x$ más cuatro factores de $x$ son siete factores de $x$.

---

### Ley 2: Cociente de potencias (misma base)

$$\frac{x^m}{x^n} = x^{m-n} \qquad (x \neq 0)$$

**Ejemplo:**

$$\frac{x^7}{x^3} = x^{7-3} = x^4$$

$$\frac{10^8}{10^5} = 10^{8-5} = 10^3 = 1000$$

Esta ley ya la aplicaste en S9·C1 al dividir monomios.

---

### Ley 3: Potencia de una potencia

$$(x^m)^n = x^{m \cdot n}$$

**Ejemplo:**

$$(x^2)^3 = x^{2 \cdot 3} = x^6$$

$$(10^3)^2 = 10^{3 \cdot 2} = 10^6 = 1{,}000{,}000$$

---

### Ley 4: Potencia de un producto

$$(xy)^n = x^n y^n$$

**Ejemplo:**

$$(2xy)^3 = 2^3 \cdot x^3 \cdot y^3 = 8x^3y^3$$

$$(3 \times 10^4)^2 = 3^2 \times (10^4)^2 = 9 \times 10^8$$

---

### Ley 5: Potencia de un cociente

$$\left(\frac{x}{y}\right)^n = \frac{x^n}{y^n} \qquad (y \neq 0)$$

**Ejemplo:**

$$\left(\frac{a}{b}\right)^2 = \frac{a^2}{b^2}$$

---

### Exponente cero

Para cualquier base no nula:

$$x^0 = 1 \qquad (x \neq 0)$$

**Demostración** usando la ley del cociente con $m = n$:

$$\frac{x^n}{x^n} = x^{n-n} = x^0$$

Pero $\frac{x^n}{x^n} = 1$, entonces $x^0 = 1$.

**Ejemplos:**

$$5^0 = 1, \qquad (-3)^0 = 1, \qquad (2xy)^0 = 1 \quad (x, y \neq 0)$$

```{warning}
$0^0$ es **indeterminado** — no se define en este curso.

La expresión $0^n = 0$ para $n > 0$, pero $x^0 = 1$ solo cuando $x \neq 0$.
```

---

### Notación científica

Un número se escribe como $a \times 10^n$ donde $1 \leq a < 10$ y $n$ es entero.

| Valor | Notación científica |
|------:|:-------------------:|
| $450{,}000$ | $4.5 \times 10^5$ |
| $0.0032$ | $3.2 \times 10^{-3}$ |
| Módulo de Young del acero | $\approx 2 \times 10^{11}$ Pa |

**Multiplicar en notación científica:**

$$(3 \times 10^4)(2 \times 10^6) = 6 \times 10^{4+6} = 6 \times 10^{10}$$

---

### Conexión con ingeniería

:::{admonition} 🔧 Presiones, fuerzas y unidades SI
:class: ingenieria

| Magnitud | Unidad | Ejemplo con exponentes |
|----------|--------|------------------------|
| Fuerza | Newton (N) | $F = 3.5 \times 10^3$ N |
| Presión | Pascal (Pa) | $p = 1.2 \times 10^5$ Pa |
| Esfuerzo | Pa = N/m² | $\sigma = \frac{10^4 \text{ N}}{10^{-2} \text{ m}^2} = 10^6$ Pa |

Al dividir unidades compuestas, las leyes de exponentes simplifican el cálculo dimensional automáticamente.
:::

**Ejemplo integrado:**

$$\frac{(2 \times 10^3)^2 \cdot 10^{-1}}{(4 \times 10^2)} = \frac{4 \times 10^6 \cdot 10^{-1}}{4 \times 10^2} = \frac{4}{4} \times 10^{6-1-2} = 10^3$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_EXPONENTES_ENTEROS"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Definir $x^n$ como producto repetido
2. Ley producto: $x^3 \cdot x^4 = x^7$ con barras de factores
3. Ley cociente: $x^7/x^3 = x^4$
4. Potencia de potencia: $(x^2)^3 = x^6$
5. Potencia de producto: $(2xy)^3 = 8x^3y^3$
6. Exponente cero: $x^0 = 1$ vía $x^n/x^n$
7. Cierre: notación científica $2 \times 10^{11}$ Pa
```

---

## Visualización interactiva

Ajusta los exponentes $m$ y $n$ y observa las leyes del producto y cociente en tiempo real.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s10c1-exponentes" class="jsxgraph-container" style="height:480px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s10c1-exponentes', {
            boundingbox: [-1, 12, 14, -2],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slM = board.create('slider', [[8, 10], [13, 10], [1, 3, 7]], {
            name: 'm', snapWidth: 1, fillColor: '#3b82f6' });
        var slN = board.create('slider', [[8, 8.5], [13, 8.5], [1, 4, 7]], {
            name: 'n', snapWidth: 1, fillColor: '#f97316' });

        var dinamicos = [];
        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var m = slM.Value(), n = slN.Value();
            var prod = m + n, coc = m - n;

            dinamicos.push(board.create('text', [7, 11,
                'Leyes de exponentes (misma base x)'], {
                fontSize: 14, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 9.5,
                'x^' + m + ' · x^' + n + ' = x^(' + m + '+' + n + ') = x^' + prod], {
                fontSize: 13, color: '#3b82f6', fontWeight: 'bold', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 8,
                'x^' + m + ' / x^' + n + ' = x^(' + m + '-' + n + ') = x^' + coc], {
                fontSize: 13, color: '#f97316', fontWeight: 'bold', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 6.5,
                '(x^' + m + ')^' + n + ' = x^(' + m + '·' + n + ') = x^' + (m * n)], {
                fontSize: 13, color: '#16a34a', fontWeight: 'bold', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 5,
                'x^0 = 1  (x ≠ 0)'], {
                fontSize: 12, color: '#374151', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 3.5,
                'Ej: 2×10^' + m + ' · 3×10^' + n + ' = 6×10^' + prod], {
                fontSize: 11, color: '#6b7280', anchorX: 'middle'
            }));
        }

        slM.on('drag', dibujar);
        slN.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Deslizadores $m$ y $n$ actualizan las tres leyes principales (producto, cociente, potencia de potencia) y un ejemplo de notación científica. Refuerza que los exponentes se suman al multiplicar y se restan al dividir.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSd0jmROeLCpVbnZ9qFd11Mb36EvF50OqSg5QYCVJ2YW-ZOPGA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Exponentes enteros
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "x^4 · x^3 = x^___" → 7
P2 (Fill): "x^8 / x^5 = x^___" → 3
P3 (Fill): "(x^2)^4 = x^___" → 8
P4 (Fill): "(3xy)^2 = ___x^2y^2" → 9
P5 (Fill): "7^0 = ___" → 1
P6 (MC): "(2×10³)(4×10⁵) = ?" → 8×10⁸
P7 (Fill ingeniería): "10⁸/10⁵ = 10^___" → 3
P8 (T/F): "0⁰ = 1" → Falso (indeterminado)
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Ley
  - Fórmula
* - Producto
  - $x^m \cdot x^n = x^{m+n}$
* - Cociente
  - $\frac{x^m}{x^n} = x^{m-n}$ con $x \neq 0$
* - Potencia de potencia
  - $(x^m)^n = x^{mn}$
* - Potencia de producto
  - $(xy)^n = x^n y^n$
* - Exponente cero
  - $x^0 = 1$ con $x \neq 0$
```

:::{admonition} Siguiente clase
:class: tip
Ya dominas las leyes de exponentes enteros positivos y el exponente cero. En la siguiente clase extenderás el concepto a **exponentes negativos y fraccionarios** — la puerta hacia los radicales.

➡️ [Ir a S10·C2 Exponentes negativos y fraccionarios](s10_c2_exponentes_negativos_fraccionarios.md)
:::
