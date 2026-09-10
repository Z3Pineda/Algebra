---
title: "S9·C2 División de polinomio entre monomio"
---

# S9·C2 División de polinomio entre monomio

:::{admonition} 🔧 Esfuerzo unitario en una viga sometida a carga
:class: ingenieria

La fuerza total distribuida sobre una viga de longitud $L$ se modela como:

$$F(x) = 6x^2 + 9x + 3 \quad \text{(N)}$$

Si el esfuerzo unitario (fuerza por unidad de área) en una sección de área $A = 3x$ m² es:

$$\sigma(x) = \frac{F(x)}{A} = \frac{6x^2 + 9x + 3}{3x}$$

Para simplificar, se **divide cada término del polinomio entre el monomio**:

$$\sigma(x) = \frac{6x^2}{3x} + \frac{9x}{3x} + \frac{3}{3x} = 2x + 3 + \frac{1}{x} \quad \text{(Pa)}$$

Este procedimiento — dividir término a término — es la base para simplificar fórmulas de **potencia, trabajo y presión** en ingeniería mecánica.
:::

**Pregunta detonadora**

> ¿Puedes dividir $(8x^3 - 12x^2 + 4x)$ entre $4x$ dividiendo cada término por separado? ¿El resultado es un polinomio o algo más?

---

## Teoría

### ¿Qué significa dividir un polinomio entre un monomio?

Dividir un polinomio $P(x)$ entre un monomio $M(x)$ significa aplicar la división **a cada término** del polinomio:

$$\frac{a + b + c}{M} = \frac{a}{M} + \frac{b}{M} + \frac{c}{M}$$

Esto es válido porque la división se **distribuye** sobre la suma (cuando el divisor es el mismo para todos los términos).

---

### Procedimiento paso a paso

| Paso | Acción |
|------|--------|
| 1 | Escribir el polinomio sobre el monomio como fracción |
| 2 | Separar en una fracción por cada término |
| 3 | Dividir cada término (coeficientes y variables) |
| 4 | Simplificar cada resultado |
| 5 | Escribir la expresión final ordenada |

**Ejemplo 1:**

$$\frac{8x^3 - 12x^2 + 4x}{4x} = \frac{8x^3}{4x} - \frac{12x^2}{4x} + \frac{4x}{4x} = 2x^2 - 3x + 1$$

**Ejemplo 2 — con varias variables:**

$$\frac{15a^3b^2 - 10a^2b^3 + 5ab}{5ab} = 3a^2b - 2ab^2 + 1$$

**Ejemplo 3 — resultado con denominador:**

$$\frac{6x^2 + 9x + 3}{3x} = 2x + 3 + \frac{1}{x}$$

El último término $\frac{1}{x} = x^{-1}$ no es un monomio con exponente positivo — la expresión se llama **fracción algebraica**.

```{warning}
Solo puedes dividir término a término cuando el **divisor es un monomio** (un solo término).

Para dividir entre un **binomio o trinomio** necesitas el algoritmo de división larga (S9·C3).
```

---

### Casos especiales

**Divisor con signo negativo:**

$$\frac{6x^2 - 9x}{-3x} = -2x + 3$$

**Sacar factor común antes de dividir** (simplifica el trabajo):

$$\frac{12x^3 + 18x^2}{6x^2} = \frac{6x^2(2x + 3)}{6x^2} = 2x + 3$$

---

### Conexión con ingeniería

:::{admonition} 🔧 Potencia, trabajo y presión
:class: ingenieria

| Magnitud | Fórmula simbólica | División polinomio/monomio |
|----------|-------------------|----------------------------|
| Potencia | $P = \frac{W}{t}$ | $\frac{3t^2 + 6t}{3t} = t + 2$ (simplifica la tasa) |
| Presión | $p = \frac{F}{A}$ | $\frac{10x^2 + 5x}{5x} = 2x + 1$ |
| Trabajo unitario | $w = \frac{W}{V}$ | $\frac{6x^3 + 3x^2}{3x^2} = 2x + 1$ |

En resistencia de materiales, el esfuerzo $\sigma = F/A$ es el ejemplo más directo: una fuerza (a veces expresada como polinomio) dividida entre un área (monomio) da el esfuerzo en cada sección.
:::

**Ejemplo 4 — ingeniería:**

Potencia media en un intervalo modelada por $W(t) = 4t^3 + 6t^2$ J, dividida entre tiempo $t$:

$$P_{media}(t) = \frac{W(t)}{t} = \frac{4t^3}{t} + \frac{6t^2}{t} = 4t^2 + 6t \quad \text{(W)}$$

---

### Verificación

Multiplica el resultado por el divisor — debe recuperar el dividendo:

$$(2x^2 - 3x + 1)(4x) = 8x^3 - 12x^2 + 4x \checkmark$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_POLINOMIO_MONOMIO"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Mostrar $\frac{8x^3-12x^2+4x}{4x}$ separando en tres fracciones
2. Dividir cada término con la regla $x^m/x^n$
3. Resultado: $2x^2-3x+1$ y verificación multiplicando
4. Caso con $\frac{1}{x}$: $\frac{6x^2+9x+3}{3x} = 2x+3+\frac{1}{x}$
5. Factor común previo: $\frac{6x^2(2x+3)}{6x^2}$
6. Cierre: esfuerzo $\sigma = F/A$ en una viga
```

---

## Visualización interactiva

Observa cómo cada término del polinomio se divide entre el monomio divisor.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s9c2-polinomio-monomio" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s9c2-polinomio-monomio', {
            boundingbox: [-1, 13, 14, -2],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var terminos = [
            { num: '6x²', den: '3x', res: '2x', color: '#3b82f6', y: 9 },
            { num: '9x',  den: '3x', res: '3',  color: '#16a34a', y: 7 },
            { num: '3',   den: '3x', res: '1/x', color: '#c2410c', y: 5 }
        ];

        terminos.forEach(function(t, i) {
            board.create('text', [0.5, t.y, t.num + ' / ' + t.den], {
                fontSize: 13, color: t.color, fontWeight: 'bold'
            });
            board.create('segment', [[5, t.y], [6.5, t.y]], {
                strokeColor: '#9ca3af', strokeWidth: 1.5, lastArrow: { type: 2, size: 6 }
            });
            board.create('text', [7, t.y, '= ' + t.res], {
                fontSize: 13, color: t.color, fontWeight: 'bold'
            });
        });

        board.create('text', [7, 3, 'σ(x) = 2x + 3 + 1/x'], {
            fontSize: 15, color: '#1d4ed8', fontWeight: 'bold'
        });
        board.create('text', [7, 1.5, 'F(x) = 6x² + 9x + 3  |  A = 3x'], {
            fontSize: 12, color: '#374151'
        });
        board.create('text', [7, 0.2, 'σ = F/A — esfuerzo unitario'], {
            fontSize: 11, color: '#6b7280'
        });

        // Barra de suma visual
        board.create('text', [0.5, 10.5, '(6x² + 9x + 3) / 3x'], {
            fontSize: 14, color: '#1d4ed8', fontWeight: 'bold'
        });
        board.create('text', [0.5, 10, '= término / término / término'], {
            fontSize: 11, color: '#6b7280'
        });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Muestra el ejemplo de esfuerzo unitario $\sigma = (6x^2+9x+3)/(3x)$ descompuesto en tres divisiones independientes con flechas hacia cada resultado parcial. La suma final $2x+3+1/x$ aparece abajo. Conecta la división término a término con el cálculo de esfuerzos en vigas.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScCYlLhX7Q5PzPSDTe256W9ilxmyB-LNyTyH2e9T_oi08jNBg/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Polinomio entre monomio
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "(8x³-12x²+4x)/4x = ___x² - ___x + 1" → 2, 3
P2 (Fill): "(15a²b-10ab²)/5ab = ___a - ___b" → 3, 2
P3 (Fill): "(6x²+9x+3)/3x = 2x+3+___" → 1/x
P4 (MC): "¿(12x³+8x²)/(4x²)?" → 3x+2
P5 (T/F): "(x²+4x)/x² = x+4" → Falso (es x+4/x o 1+4/x)
P6 (Fill): "(-6x²+9x)/(-3x) = ___x - 3" → 2
P7 (Fill ingeniería): "W=4t³+6t², P=W/t = ___t²+___t" → 4, 6
P8 (Fill): "(10x²+5x)/5x = ___x + 1" → 2
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Regla
  - $\frac{a+b+c}{M} = \frac{a}{M}+\frac{b}{M}+\frac{c}{M}$
* - Condición
  - El divisor debe ser un **monomio**
* - Procedimiento
  - Dividir coeficientes y restar exponentes en cada término
* - Atajo
  - Sacar factor común en dividendo y divisor antes de dividir
* - Ingeniería
  - Esfuerzo $\sigma=F/A$, potencia $P=W/t$, presión $p=F/A$
```

:::{admonition} Siguiente clase
:class: tip
Ya divides polinomios entre monomios. En la siguiente clase aprenderás el **algoritmo de división larga** para dividir entre binomios y trinomios — con cociente y residuo.

➡️ [Ir a S9·C3 División de polinomios](s9_c3_division_polinomios.md)
:::
