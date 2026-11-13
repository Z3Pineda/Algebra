---
title: "S10·C3 Radicales — suma, resta, producto y división"
---

# S10·C3 Radicales — suma, resta, producto y división

:::{admonition} 🔧 Magnitud de una fuerza resultante
:class: ingenieria

Dos fuerzas perpendiculares actúan sobre un componente: $F_1 = 300$ N y $F_2 = 400$ N. La magnitud de la fuerza resultante es:

$$R = \sqrt{F_1^2 + F_2^2} = \sqrt{300^2 + 400^2} = \sqrt{250{,}000} = 500 \text{ N}$$

Antes de evaluar, conviene **simplificar el radical**:

$$\sqrt{250{,}000} = \sqrt{25 \times 10{,}000} = \sqrt{25} \cdot \sqrt{10{,}000} = 5 \times 100 = 500$$

En mecánica, los radicales aparecen en diagonales de piezas ($d = \sqrt{a^2 + b^2}$), magnitudes vectoriales y velocidades resultantes. Dominar simplificación y operaciones con radicales evita errores numéricos en taller.
:::

**Pregunta detonadora**

> ¿Se puede escribir $\sqrt{50}$ de una forma más simple? ¿Por qué $\sqrt{2} + \sqrt{3}$ no es igual a $\sqrt{5}$?

---

## Teoría

### ¿Qué es un radical?

Un **radical** es la expresión $\sqrt[n]{a}$ (raíz $n$-ésima de $a$):

| Símbolo | Nombre | Ejemplo |
|---------|--------|---------|
| $\sqrt{a}$ | Raíz cuadrada | $\sqrt{49} = 7$ |
| $\sqrt[3]{a}$ | Raíz cúbica | $\sqrt[3]{27} = 3$ |
| $\sqrt[n]{a}$ | Raíz $n$-ésima | $\sqrt[4]{16} = 2$ |

**Conexión con exponentes** (S10·C2): $\sqrt[n]{a} = a^{1/n}$

---

### Simplificación de radicales

Un radical está **simplificado** cuando el radicando no tiene factores que se puedan sacar como raíz exacta.

$$\sqrt{a^2b} = a\sqrt{b} \qquad (a \geq 0)$$

**Procedimiento:**

| Paso | Acción |
|------|--------|
| 1 | Factorizar el radicando |
| 2 | Separar factores que son potencias perfectas de $n$ |
| 3 | Sacar esos factores del radical |
| 4 | Simplificar el coeficiente |

**Ejemplo 1:**

$$\sqrt{72} = \sqrt{36 \cdot 2} = \sqrt{36} \cdot \sqrt{2} = 6\sqrt{2}$$

**Ejemplo 2:**

$$\sqrt[3]{54} = \sqrt[3]{27 \cdot 2} = \sqrt[3]{27} \cdot \sqrt[3]{2} = 3\sqrt[3]{2}$$

**Ejemplo 3 — ingeniería:**

$$d = \sqrt{2^2 + 3^2} = \sqrt{4 + 9} = \sqrt{13} \quad \text{(ya simplificado)}$$

---

### Suma y resta de radicales semejantes

Solo se pueden combinar radicales con el **mismo índice** y el **mismo radicando**:

$$a\sqrt[n]{x} + b\sqrt[n]{x} = (a + b)\sqrt[n]{x}$$

**Ejemplos:**

$$3\sqrt{2} + 5\sqrt{2} = 8\sqrt{2}$$

$$7\sqrt[3]{5} - 2\sqrt[3]{5} = 5\sqrt[3]{5}$$

**No son semejantes** (no se pueden sumar directamente):

$$\sqrt{2} + \sqrt{3} \neq \sqrt{5}$$

$$2\sqrt{3} + 3\sqrt{2} \quad \text{(índice igual pero radicando distinto)}$$

```{warning}
Errores frecuentes con radicales:

- $\sqrt{a + b} \neq \sqrt{a} + \sqrt{b}$ (ej: $\sqrt{9+16} = 5 \neq 3+4 = 7$)
- $\sqrt{a \cdot b} = \sqrt{a} \cdot \sqrt{b}$ ✓ (sí es válido)
- Solo suma/resta radicales **semejantes**
```

---

### Producto de radicales

$$\sqrt[n]{a} \cdot \sqrt[n]{b} = \sqrt[n]{a \cdot b}$$

**Ejemplos:**

$$\sqrt{3} \cdot \sqrt{12} = \sqrt{36} = 6$$

$$\sqrt{2} \cdot \sqrt{8} = \sqrt{16} = 4$$

$$\sqrt[3]{4} \cdot \sqrt[3]{2} = \sqrt[3]{8} = 2$$

---

### División de radicales

$$\frac{\sqrt[n]{a}}{\sqrt[n]{b}} = \sqrt[n]{\frac{a}{b}} \qquad (b \neq 0)$$

**Ejemplo:**

$$\frac{\sqrt{50}}{\sqrt{2}} = \sqrt{\frac{50}{2}} = \sqrt{25} = 5$$

---

### Racionalización del denominador

Eliminar radicales del **denominador** multiplicando numerador y denominador por el factor adecuado:

**Caso 1 — denominador con $\sqrt{a}$:**

$$\frac{3}{\sqrt{2}} = \frac{3}{\sqrt{2}} \cdot \frac{\sqrt{2}}{\sqrt{2}} = \frac{3\sqrt{2}}{2}$$

**Caso 2 — denominador con $\sqrt{a} + \sqrt{b}$ (conjugado):**

$$\frac{1}{\sqrt{5} + \sqrt{3}} = \frac{1}{\sqrt{5}+\sqrt{3}} \cdot \frac{\sqrt{5}-\sqrt{3}}{\sqrt{5}-\sqrt{3}} = \frac{\sqrt{5}-\sqrt{3}}{5-3} = \frac{\sqrt{5}-\sqrt{3}}{2}$$

---

### Conexión con ingeniería

:::{admonition} 🔧 Diagonales, vectores y velocidades
:class: ingenieria

| Aplicación | Fórmula | Radical |
|------------|---------|---------|
| Diagonal de pieza rectangular | $d = \sqrt{L^2 + W^2}$ | $\sqrt{a^2+b^2}$ |
| Magnitud de fuerza resultante | $R = \sqrt{F_x^2 + F_y^2}$ | Simplificar antes de evaluar |
| Velocidad resultante | $v = \sqrt{v_x^2 + v_y^2}$ | m/s |
| Distancia entre puntos | $d = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}$ | mm o m |

Racionalizar denominadores es útil cuando el resultado debe expresarse sin radicales en el divisor — requisito común en informes de laboratorio.
:::

**Ejemplo 4:**

Velocidad $v_x = 6$ m/s, $v_y = 8$ m/s:

$$v = \sqrt{6^2 + 8^2} = \sqrt{36 + 64} = \sqrt{100} = 10 \text{ m/s}$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_RADICALES"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Simplificar √72 = 6√2 factorizando 72 = 36·2
2. Suma de semejantes: 3√2 + 5√2 = 8√2
3. Contraejemplo: √2 + √3 ≠ √5
4. Producto: √3 · √12 = √36 = 6
5. Racionalizar 3/√2 → 3√2/2
6. Cierre: R = √(300² + 400²) = 500 N
```

---

## Visualización interactiva

Simplifica $\sqrt{a^2 + b^2}$ y compara con la fuerza resultante de dos componentes perpendiculares.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s10c3-radicales" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s10c3-radicales', {
            boundingbox: [-1, 12, 14, -2],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slA = board.create('slider', [[8, 10], [13, 10], [1, 3, 6]], {
            name: 'a', snapWidth: 0.5, fillColor: '#3b82f6' });
        var slB = board.create('slider', [[8, 8.5], [13, 8.5], [1, 4, 8]], {
            name: 'b', snapWidth: 0.5, fillColor: '#f97316' });

        var dinamicos = [];
        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var a = slA.Value(), b = slB.Value();
            var R = Math.round(Math.sqrt(a * a + b * b) * 100) / 100;
            var esc = 0.4;

            dinamicos.push(board.create('segment', [[0, 0], [a * esc, 0]], {
                strokeColor: '#3b82f6', strokeWidth: 3,
                lastArrow: { type: 2, size: 6 }
            }));
            dinamicos.push(board.create('segment', [[0, 0], [0, b * esc]], {
                strokeColor: '#f97316', strokeWidth: 3,
                lastArrow: { type: 2, size: 6 }
            }));
            dinamicos.push(board.create('segment', [[0, 0], [a * esc, b * esc]], {
                strokeColor: '#16a34a', strokeWidth: 3, dash: 2,
                lastArrow: { type: 2, size: 6 }
            }));

            dinamicos.push(board.create('text', [a * esc / 2, -0.5, 'Fx=' + a], {
                fontSize: 11, color: '#3b82f6', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [-0.8, b * esc / 2, 'Fy=' + b], {
                fontSize: 11, color: '#f97316'
            }));
            dinamicos.push(board.create('text', [8, 6.5,
                'R = √(a²+b²) = √(' + (a*a) + '+' + (b*b) + ') = ' + R], {
                fontSize: 14, color: '#16a34a', fontWeight: 'bold'
            }));
            dinamicos.push(board.create('text', [8, 5,
                '√(' + (a*a+b*b) + ') = ' + R + ' N'], {
                fontSize: 12, color: '#374151'
            }));
            dinamicos.push(board.create('text', [8, 3.5,
                '3√2 + 5√2 = 8√2  (semejantes)'], {
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
Vectores $F_x = a$ y $F_y = b$ perpendiculares con resultante $R = \sqrt{a^2+b^2}$. Los deslizadores cambian las componentes y actualizan el radical y su valor numérico. Incluye recordatorio de radicales semejantes.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdneenDl-IsIesmT87KdmfdSBZatQ8ylGAyILA9DxXAunONsw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Radicales
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "√72 = ___√2" → 6
P2 (Fill): "3√5 + 7√5 = ___√5" → 10
P3 (T/F): "√2+√3 = √5" → Falso
P4 (Fill): "√3 · √12 = ___" → 6
P5 (Fill): "√50/√2 = ___" → 5
P6 (Fill): "3/√2 racionalizado = ___√2/2" → 3
P7 (Fill ingeniería): "√(3²+4²) = ___" → 5
P8 (Fill): "∛54 = ___∛2" → 3
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Operación
  - Regla
* - Simplificar
  - Factorizar radicando; sacar potencias perfectas
* - Suma/resta
  - Solo radicales **semejantes** (mismo índice y radicando)
* - Producto
  - $\sqrt[n]{a}\cdot\sqrt[n]{b} = \sqrt[n]{ab}$
* - División
  - $\frac{\sqrt[n]{a}}{\sqrt[n]{b}} = \sqrt[n]{a/b}$
* - Racionalizar
  - Multiplicar por conjugado para eliminar radical del denominador
```

:::{admonition} Siguiente clase
:class: tip
Ya dominas las operaciones con radicales. En la siguiente clase verás **factorial, combinatorios y el teorema del binomio** — herramientas para contar configuraciones y expandir potencias de binomios de cualquier orden.

➡️ [Ir a S10·C4 Factorial, combinatorios y binomio](s10_c4_factorial_combinatorios_binomio.md)
:::
