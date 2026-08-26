---
title: "S8·C1 Factor común"
---

# S8·C1 Factor común

:::{admonition} 🔧 Análisis de fuerzas en un soporte mecánico
:class: ingenieria

Un ingeniero modela las fuerzas horizontales que actúan sobre un soporte de acero. La expresión total es:

$$F_h = 12kx + 18k \quad \text{(N)}$$

donde $k$ es la rigidez del resorte (N/mm) y $x$ es el desplazamiento (mm).

Antes de resolver el equilibrio, conviene **simplificar** la expresión. Observa que ambos términos comparten el factor $6k$:

$$F_h = 6k(2x + 3)$$

Ahora el análisis es más claro: la fuerza total es $6k$ veces la expresión $(2x + 3)$. Este procedimiento — extraer lo que se repite en cada término — se llama **sacar factor común** y es el primer paso de toda factorización.
:::

**Pregunta detonadora**

> En la expresión $15x^2 + 10x$, ¿qué parte se repite en los dos términos? ¿Puedes reescribirla como un producto en lugar de una suma?

---

## Teoría

### ¿Qué es el factor común?

Un **factor común** es una expresión (número, variable o polinomio) que **divide exactamente a cada término** de una suma algebraica.

Si todos los términos comparten el factor $f$, entonces:

$$a \cdot f + b \cdot f = f(a + b)$$

La operación inversa — pasar de la suma al producto — se llama **factorizar** o **sacar factor común**.

**Analogía mecánica:** si dos piezas comparten el mismo diámetro de tornillo, puedes describirlas con un solo parámetro común en lugar de repetir la medida en cada una.

---

### Factor común monomio

Cuando el factor común es un **monomio** (un solo término: número, variable o producto de ambos), se obtiene en dos pasos:

1. **Coeficientes:** hallar el **máximo común divisor (MCD)** de los coeficientes numéricos.
2. **Variables:** para cada letra, tomar el **menor exponente** que aparece en todos los términos.

**Procedimiento:**

| Paso | Acción |
|------|--------|
| 1 | Identificar el MCD de los coeficientes |
| 2 | Identificar la parte literal común (menor exponente por variable) |
| 3 | Escribir el factor común fuera del paréntesis |
| 4 | Dentro del paréntesis: dividir cada término entre el factor común |

**Ejemplo 1 — solo coeficientes:**

$$4x + 8 = 4(x + 2)$$

Verificación: $4 \cdot x + 4 \cdot 2 = 4x + 8$ ✓

**Ejemplo 2 — coeficientes y variables:**

$$6x^2 + 9x$$

| Elemento | Término 1 | Término 2 | Factor común |
|----------|:---------:|:---------:|:------------:|
| Coeficiente | $6$ | $9$ | MCD$(6,9) = 3$ |
| Variable $x$ | $x^2$ | $x^1$ | $x^1 = x$ |
| **Factor común** | | | $3x$ |

$$6x^2 + 9x = 3x(2x + 3)$$

**Ejemplo 3 — varias variables:**

$$10a^2b + 15ab^2 = 5ab(2a + 3b)$$

MCD$(10, 15) = 5$; variable $a$: exponente mínimo $1$; variable $b$: exponente mínimo $1$ → factor $5ab$.

---

### Factor común polinomio

A veces el factor común **no es un monomio**, sino un **binomio o trinomio** que se repite en varios términos.

**Ejemplo 4:**

$$3(x + 2) + 5(x + 2)$$

El binomio $(x + 2)$ aparece en ambos términos:

$$3(x + 2) + 5(x + 2) = (x + 2)(3 + 5) = (x + 2)(8) = 8(x + 2)$$

**Ejemplo 5 — con coeficientes distintos:**

$$2a(b + 3) - 7(b + 3) = (b + 3)(2a - 7)$$

**Ejemplo 6 — ingeniería (tolerancias):**

Dos dimensiones de una pieza mecanizada comparten la misma tolerancia base $t$:

$$d_1 = t(x + 0.05), \qquad d_2 = t(x - 0.05)$$

La suma de ambas dimensiones es:

$$d_1 + d_2 = t(x + 0.05) + t(x - 0.05) = t\bigl[(x + 0.05) + (x - 0.05)\bigr] = t(2x) = 2tx$$

El factor común $t$ representa la **tolerancia de fabricación** compartida por ambas medidas.

```{warning}
No confundas **factor común** con **términos semejantes**.

- Factor común: $6x + 9 = 3(2x + 3)$ — se extrae lo que se repite.
- Términos semejantes: $6x + 9x = 15x$ — se suman coeficientes.

La factorización produce un **producto**; la suma de semejantes produce un **solo término**.
```

---

### Verificación de la factorización

Siempre puedes comprobar el resultado **multiplicando** el factor común por cada término del paréntesis (propiedad distributiva):

$$f \cdot a + f \cdot b = f(a + b)$$

**Ejemplo:** $3x(2x + 3) = 3x \cdot 2x + 3x \cdot 3 = 6x^2 + 9x$ ✓

En ingeniería, verificar una factorización es como **recalibrar un instrumento**: si al expandir recuperas la expresión original, el procedimiento fue correcto.

---

### Estrategia paso a paso

**Para factor común monomio:**

1. Escribe cada término descompuesto: $6x^2 = 3 \cdot 2 \cdot x \cdot x$
2. Marca lo que se repite en todos: $3$ y $x$
3. Saca el factor: $3x(2x + 3)$

**Para factor común polinomio:**

1. Identifica el **grupo que se repite** (puede estar con signo distinto: $+(b+3)$ y $-(b+3)$)
2. Sácalo como factor común
3. Simplifica lo que queda dentro del segundo paréntesis

---

### Tabla de referencia rápida

| Expresión | Factor común | Resultado |
|-----------|:------------:|-----------|
| $8x + 12$ | $4$ | $4(2x + 3)$ |
| $5x^3 + 10x^2$ | $5x^2$ | $5x^2(x + 2)$ |
| $12a^2b - 18ab^2$ | $6ab$ | $6ab(2a - 3b)$ |
| $7(x-1) + 3(x-1)$ | $(x-1)$ | $(x-1)(10) = 10(x-1)$ |
| $4(y+2) - 9(y+2)$ | $(y+2)$ | $(y+2)(-5) = -5(y+2)$ |

:::{admonition} 🔧 Ingeniería — materiales y fuerzas
:class: ingenieria

El volumen de material en dos secciones cilíndricas de un eje puede expresarse como:

$$V = \pi r^2 h_1 + \pi r^2 h_2 = \pi r^2(h_1 + h_2)$$

El factor común $\pi r^2$ es el **área de la sección transversal** — un dato que el ingeniero usa una sola vez en lugar de calcularlo por separado para cada tramo.

Lo mismo ocurre con fuerzas distribuidas: si $F = kx_1 + kx_2 = k(x_1 + x_2)$, el factor $k$ (rigidez) concentra la información física del sistema.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_FACTOR_COMUN"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Mostrar la expresión $6x^2 + 9x$ como dos bloques rectangulares de distinto tamaño
2. Resaltar el ancho común $3x$ en ambos bloques — "esto se repite"
3. Escribir $3x(2x + 3)$ y expandir con la distributiva para verificar
4. Caso con coeficientes: $4x + 8 \to 4(x+2)$ — solo MCD numérico
5. Caso polinomio: $3(x+2) + 5(x+2) \to 8(x+2)$ — el grupo $(x+2)$ como factor
6. Cierre: conexión con fuerza $F_h = 12kx + 18k = 6k(2x+3)$ en un soporte
```

---

## Visualización interactiva

Ajusta los coeficientes de $ax^2 + bx$ y observa cómo se identifica el factor común monomio.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s8c1-factor-comun" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function gcd(a, b) {
        a = Math.abs(Math.round(a));
        b = Math.abs(Math.round(b));
        while (b) { var t = b; b = a % b; a = t; }
        return a || 1;
    }

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s8c1-factor-comun', {
            boundingbox: [-1, 12, 14, -2],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slA = board.create('slider', [[8, 11], [12, 11], [2, 6, 12]], {
            name: 'a', snapWidth: 1, fillColor: '#3b82f6' });
        var slB = board.create('slider', [[8, 9.5], [12, 9.5], [3, 9, 18]], {
            name: 'b', snapWidth: 1, fillColor: '#f97316' });

        var dinamicos = [];
        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var a = slA.Value(), b = slB.Value();
            var g = gcd(a, b);
            var q1 = a / g, q2 = b / g;

            // Bloque 1: ax² → g·x por q1·x (ancho g, alto q1 en unidades x)
            var ox = 0.5, oy = 0.5;
            var esc = 0.35;

            var wComun = g * esc;
            var h1 = q1 * esc;
            var h2 = q2 * esc;

            // Factor común (banda vertical compartida)
            var fc = board.create('polygon', [
                [ox, oy], [ox + wComun, oy],
                [ox + wComun, oy + h1 + h2 + 0.3], [ox, oy + h1 + h2 + 0.3]
            ], {
                fillColor: '#dbeafe', fillOpacity: 0.35,
                strokeColor: '#1d4ed8', strokeWidth: 2, dash: 2,
                vertices: { visible: false }
            });
            dinamicos.push(fc);

            dinamicos.push(board.create('text',
                [ox + wComun / 2, oy + h1 + h2 + 0.8, 'factor común: ' + g + 'x'], {
                fontSize: 12, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle'
            }));

            // Término 1: ax²
            var r1 = board.create('polygon', [
                [ox, oy + h2 + 0.3], [ox + wComun, oy + h2 + 0.3],
                [ox + wComun, oy + h2 + 0.3 + h1], [ox, oy + h2 + 0.3 + h1]
            ], {
                fillColor: '#bfdbfe', fillOpacity: 0.85,
                strokeColor: '#1d4ed8', strokeWidth: 1.5,
                vertices: { visible: false }
            });
            dinamicos.push(r1);
            dinamicos.push(board.create('text',
                [ox + wComun + 0.4, oy + h2 + 0.3 + h1 / 2, a + 'x²'], {
                fontSize: 13, color: '#1d4ed8', fontWeight: 'bold'
            }));

            // Término 2: bx
            var r2 = board.create('polygon', [
                [ox, oy], [ox + wComun, oy],
                [ox + wComun, oy + h2], [ox, oy + h2]
            ], {
                fillColor: '#ffedd5', fillOpacity: 0.85,
                strokeColor: '#c2410c', strokeWidth: 1.5,
                vertices: { visible: false }
            });
            dinamicos.push(r2);
            dinamicos.push(board.create('text',
                [ox + wComun + 0.4, oy + h2 / 2, b + 'x'], {
                fontSize: 13, color: '#c2410c', fontWeight: 'bold'
            }));

            // Etiquetas internas
            dinamicos.push(board.create('text',
                [ox + wComun / 2, oy + h2 + 0.3 + h1 / 2, q1 + 'x'], {
                fontSize: 10, color: '#1e40af', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text',
                [ox + wComun / 2, oy + h2 / 2, q2], {
                fontSize: 10, color: '#9a3412', anchorX: 'middle'
            }));

            // Fórmulas
            dinamicos.push(board.create('text', [8, 7.5,
                a + 'x² + ' + b + 'x = ' + g + 'x(' + q1 + 'x + ' + q2 + ')'], {
                fontSize: 14, color: '#1d4ed8', fontWeight: 'bold'
            }));
            dinamicos.push(board.create('text', [8, 6.5,
                'MCD(' + a + ',' + b + ') = ' + g + '  |  variable común: x'], {
                fontSize: 12, color: '#374151'
            }));
            dinamicos.push(board.create('text', [8, 5.5,
                'Verificación: ' + g + 'x·' + q1 + 'x + ' + g + 'x·' + q2 +
                ' = ' + a + 'x² + ' + b + 'x ✓'], {
                fontSize: 11, color: '#6b7280'
            }));
        }

        slA.on('drag', dibujar);
        slB.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Dos bloques apilados representan los términos $ax^2$ (azul) y $bx$ (naranja). La banda vertical sombreada muestra el factor común $gx$ (MCD de los coeficientes por la variable $x$). Los deslizadores cambian $a$ y $b$; la factorización y la verificación se actualizan en tiempo real. Refuerza la idea de que sacar factor común es "agrupar lo que se repite".
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdqC62-dwpR_EtXzy9hX_I185EDkxJFxv_4bdWjLpsUdjk2oQ/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Factor común
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "4x + 12 = 4(x + ___)" → 3
P2 (Fill): "6x² + 9x = ___x(2x + ___)" → 3, 3
P3 (Fill): "10a²b + 15ab² = ___ab(2a + ___b)" → 5, 3
P4 (Fill): "3(x+2) + 5(x+2) = ___ (x+2)" → 8
P5 (T/F): "8x + 12 = 4(2x + 4)" → Falso (dentro del paréntesis debe ser 3, no 4)
P6 (MC): "¿Factor común de 12x³ + 8x²?" → 4x²
P7 (Fill ingeniería): "Fh = 12kx + 18k = ___k(2x + ___)" → 6, 3
P8 (Fill): "2(y-1) - 7(y-1) = ___ (y-1)" → -5
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Concepto
  - Descripción
* - Factor común
  - Expresión que divide a **todos** los términos de una suma
* - Factor común monomio
  - MCD de coeficientes + menor exponente de cada variable
* - Factor común polinomio
  - Binomio o trinomio que se repite en varios términos
* - Propiedad clave
  - $af + bf = f(a + b)$ — distributiva en reversa
* - Verificación
  - Multiplicar el factor por el paréntesis debe recuperar la expresión original
```

:::{admonition} Siguiente clase
:class: tip
Ya sabes sacar factor común monomio y polinomio. En la siguiente clase aplicarás esta técnica para **factorizar trinomios** — expresiones con tres términos que no siempre comparten un solo factor obvio.

➡️ [Ir a S8·C2 Factorización de trinomios](s8_c2_factorizacion_trinomios.md)
:::
