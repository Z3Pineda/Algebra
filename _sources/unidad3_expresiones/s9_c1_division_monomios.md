---
title: "S9·C1 División de monomios"
---

# S9·C1 División de monomios

:::{admonition} 🔧 Velocidad angular en un eje de transmisión
:class: ingenieria

Un motor gira a $n_1 = 1200$ rpm. El eje de salida, con relación de reducción, gira más lento. Si la relación entre velocidades angulares es:

$$\frac{\omega_2}{\omega_1} = \frac{r_1}{r_2}$$

y las frecuencias cumplen $\omega = 2\pi f$, al simplificar expresiones con potencias de la misma variable aparece la regla:

$$\frac{x^m}{x^n} = x^{m-n}$$

Por ejemplo, al reducir unidades en resistencia de materiales:

$$\frac{\text{N/m}^2}{\text{Pa}} = \frac{\text{kg·m/s}^2 \cdot \text{m}^{-2}}{\text{kg·m}^{-1}\text{·s}^{-2}} = \frac{\text{m}^0}{\text{m}^0} = 1$$

Dividir monomios — coeficientes entre coeficientes, variables entre variables — es el primer paso para simplificar fórmulas de ingeniería.
:::

**Pregunta detonadora**

> ¿Cuánto es $\frac{x^5}{x^2}$? ¿Y $\frac{x^3}{x^3}$? ¿Y $\frac{x^2}{x^5}$? ¿Puedes encontrar un patrón sin calcular cada caso por separado?

---

## Teoría

### ¿Qué es un monomio?

Un **monomio** es una expresión algebraica formada por el producto de un número (coeficiente) y una o más variables con exponentes enteros positivos:

$$5x^3y^2, \quad -3a^2b, \quad \frac{2}{7}t^4$$

Dividir monomios es la operación inversa de multiplicar monomios — y aparece constantemente al simplificar fórmulas de mecánica.

---

### Regla fundamental de división

Para la misma variable con base no nula:

$$\frac{x^m}{x^n} = x^{m-n} \qquad (x \neq 0)$$

**¿Por qué?** Al escribir la división como fracción y cancelar factores comunes:

$$\frac{x^5}{x^2} = \frac{x \cdot x \cdot x \cdot x \cdot x}{x \cdot x} = x^3 = x^{5-2}$$

---

### Caso 1: $m > n$ (exponente positivo en el resultado)

El exponente del numerador es **mayor** — quedan factores en el numerador:

$$\frac{x^7}{x^3} = x^{7-3} = x^4$$

$$\frac{12a^5b^3}{3a^2b} = \frac{12}{3} \cdot a^{5-2} \cdot b^{3-1} = 4a^3b^2$$

---

### Caso 2: $m = n$ (resultado 1)

Los exponentes son **iguales** — se cancelan completamente:

$$\frac{x^4}{x^4} = x^{4-4} = x^0 = 1 \qquad (x \neq 0)$$

$$\frac{6m^3n^2}{2m^3n^2} = \frac{6}{2} \cdot m^{3-3} \cdot n^{2-2} = 3 \cdot 1 \cdot 1 = 3$$

En ingeniería: si dos magnitudes tienen las mismas unidades y se dividen, las unidades se cancelan y queda un número puro (adimensional).

---

### Caso 3: $m < n$ (exponente negativo en el resultado)

El exponente del denominador es **mayor** — el resultado lleva la variable al denominador:

$$\frac{x^2}{x^5} = x^{2-5} = x^{-3} = \frac{1}{x^3}$$

$$\frac{8p^2q}{4p^5q^3} = 2 \cdot p^{2-5} \cdot q^{1-3} = 2p^{-3}q^{-2} = \frac{2}{p^3q^2}$$

```{warning}
La base **no puede ser cero** cuando aparece en el denominador.

- $\frac{x^3}{x^2}$ está definida para $x \neq 0$
- $\frac{0}{0}$ es **indeterminado** — no se puede simplificar
- $\frac{5}{0}$ es **indefinido**
```

---

### Procedimiento general

Para dividir un monomio entre otro:

| Paso | Acción |
|------|--------|
| 1 | Dividir **coeficientes** numéricos |
| 2 | Para cada variable: restar exponentes ($m - n$) |
| 3 | Escribir exponentes negativos como factores en el denominador (si aplica) |
| 4 | Simplificar la fracción numérica |

**Ejemplo 1:**

$$\frac{-15x^4y^2}{5x^2y^5} = -3x^{4-2}y^{2-5} = -3x^2y^{-3} = \frac{-3x^2}{y^3}$$

**Ejemplo 2:**

$$\frac{20a^3b^4c}{4a^3b^2} = 5b^{4-2}c = 5b^2c$$

---

### Conexión con ingeniería

:::{admonition} 🔧 Resistencia de materiales — reducción de unidades
:class: ingenieria

El esfuerzo normal $\sigma$ se define como $\sigma = F/A$. Si $F = 5000$ N y $A = 25 \times 10^{-4}$ m²:

$$\sigma = \frac{5000}{25 \times 10^{-4}} = \frac{5000}{0.0025} = 2{,}000{,}000 \text{ Pa}$$

Al manipular expresiones simbólicas antes de sustituir valores:

$$\frac{F \cdot x^2}{A \cdot x} = \frac{F}{A} \cdot x^{2-1} = \frac{F}{A} \cdot x$$

La división de monomios separa la parte numérica de la parte dimensional — esencial en análisis dimensional.
:::

**Ejemplo 3 — velocidad angular:**

Si $\omega_1 = 2\pi n_1$ y $\omega_2 = 2\pi n_2$:

$$\frac{\omega_1}{\omega_2} = \frac{2\pi n_1}{2\pi n_2} = \frac{n_1}{n_2}$$

Las unidades $2\pi$ se cancelan ($m = n$) y queda la relación de revoluciones.

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_DIVISION_MONOMIOS"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Mostrar $\frac{x^5}{x^2}$ cancelando factores uno a uno → $x^3$
2. Caso $m > n$: $\frac{a^4}{a^1} = a^3$ con barras de cancelación
3. Caso $m = n$: $\frac{x^3}{x^3} = 1$ — todo se cancela
4. Caso $m < n$: $\frac{x^2}{x^5} = \frac{1}{x^3}$ — factores van al denominador
5. Ejemplo completo: $\frac{12a^5b^2}{3a^2b^4}$ paso a paso
6. Cierre: relación $\omega_1/\omega_2 = n_1/n_2$ en un eje de transmisión
```

---

## Visualización interactiva

Ajusta los exponentes $m$ y $n$ en $\frac{x^m}{x^n}$ y observa los tres casos: $m>n$, $m=n$, $m<n$.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s9c1-division-monomios" class="jsxgraph-container" style="height:480px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s9c1-division-monomios', {
            boundingbox: [-1, 12, 14, -2],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slM = board.create('slider', [[8, 10], [13, 10], [1, 5, 8]], {
            name: 'm', snapWidth: 1, fillColor: '#3b82f6' });
        var slN = board.create('slider', [[8, 8.5], [13, 8.5], [1, 3, 8]], {
            name: 'n', snapWidth: 1, fillColor: '#f97316' });

        var dinamicos = [];
        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var m = slM.Value(), n = slN.Value();
            var diff = m - n;
            var caso, color, resultado;

            if (m > n) {
                caso = 'm > n';
                color = '#16a34a';
                resultado = 'x^' + diff;
            } else if (m === n) {
                caso = 'm = n';
                color = '#1d4ed8';
                resultado = '1';
            } else {
                caso = 'm < n';
                color = '#c2410c';
                resultado = '1/x^' + (-diff);
            }

            // Barras de factores (visual)
            var ox = 0.5, oy = 5;
            for (var i = 0; i < m; i++) {
                dinamicos.push(board.create('segment', [[ox + i * 0.5, oy + 1], [ox + i * 0.5 + 0.35, oy + 1]], {
                    strokeColor: '#3b82f6', strokeWidth: 8
                }));
            }
            dinamicos.push(board.create('text', [ox + m * 0.25, oy + 2, 'numerador: x^' + m], {
                fontSize: 11, color: '#3b82f6', anchorX: 'middle'
            }));

            var min = Math.min(m, n);
            for (var j = 0; j < min; j++) {
                dinamicos.push(board.create('segment', [[ox + j * 0.5, oy - 0.5], [ox + j * 0.5 + 0.35, oy - 0.5]], {
                    strokeColor: '#9ca3af', strokeWidth: 8, dash: 2
                }));
            }
            for (var k = min; k < n; k++) {
                dinamicos.push(board.create('segment', [[ox + k * 0.5, oy - 0.5], [ox + k * 0.5 + 0.35, oy - 0.5]], {
                    strokeColor: '#f97316', strokeWidth: 8
                }));
            }
            dinamicos.push(board.create('text', [ox + n * 0.25, oy - 1.5, 'denominador: x^' + n], {
                fontSize: 11, color: '#f97316', anchorX: 'middle'
            }));

            dinamicos.push(board.create('text', [8, 6.5,
                'x^' + m + ' / x^' + n + ' = x^(' + m + '-' + n + ') = ' + resultado], {
                fontSize: 14, color: color, fontWeight: 'bold'
            }));
            dinamicos.push(board.create('text', [8, 5,
                'Caso: ' + caso], { fontSize: 13, color: color });
            dinamicos.push(board.create('text', [8, 3.5,
                'Regla: x^m / x^n = x^(m-n)'], {
                fontSize: 12, color: '#374151'
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
Deslizadores $m$ y $n$ controlan $\frac{x^m}{x^n}$. Barras azules (numerador) y naranjas (denominador) muestran cancelación visual. El resultado y el caso ($m>n$, $m=n$, $m<n$) se actualizan con color verde, azul u naranja según corresponda.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf6rsQ8PHvJ9Mw-rDndHJ-2skkt3rm0GUgPXugbvjZ7Xqyepg/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: División de monomios
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "x^8 / x^3 = x^___" → 5
P2 (Fill): "x^4 / x^4 = ___" → 1
P3 (Fill): "x^2 / x^6 = 1/x^___" → 4
P4 (Fill): "12a^5 / 3a^2 = ___a^3" → 4
P5 (MC): "¿Resultado de 8x^3y^2 / 2xy^4?" → 4x²/y²
P6 (T/F): "x^0 = 0 para todo x" → Falso (x^0 = 1, x≠0)
P7 (Fill ingeniería): "ω₁/ω₂ = 2πn₁/(2πn₂) = n₁/___" → n₂
P8 (Fill): "-15b^4 / 5b^7 = ___/b^3" → -3
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Regla
  - $\frac{x^m}{x^n} = x^{m-n}$ con $x \neq 0$
* - Caso $m > n$
  - Exponente positivo: $x^{m-n}$
* - Caso $m = n$
  - Resultado $1$ (unidades se cancelan)
* - Caso $m < n$
  - Exponente negativo: $\frac{1}{x^{n-m}}$
* - Procedimiento
  - Coeficientes entre coeficientes; variables restando exponentes
```

:::{admonition} Siguiente clase
:class: tip
Ya dominas la división de monomios. En la siguiente clase extenderás esa regla para **dividir un polinomio completo entre un monomio** — dividiendo término a término.

➡️ [Ir a S9·C2 División de polinomio entre monomio](s9_c2_division_polinomio_monomio.md)
:::
