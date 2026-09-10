---
title: "S8·C4 Cubos y agrupación"
---

# S8·C4 Cubos y agrupación

:::{admonition} 🔧 Volumen de material en un contenedor cúbico hueco
:class: ingenieria

Un contenedor cúbico de acero tiene lado exterior $L = 10$ cm y cavidad interior de lado $l = 7$ cm. El volumen de metal es la diferencia de dos cubos:

$$V = L^3 - l^3 = 10^3 - 7^3 = 1000 - 343 = 657 \text{ cm}^3$$

Para estimar el consumo de material con tolerancias, el ingeniero factoriza:

$$L^3 - l^3 = (L - l)(L^2 + Ll + l^2)$$

$$V = (10 - 7)(100 + 70 + 49) = (3)(219) = 657 \text{ cm}^3$$

La forma factorizada separa el **espesor de pared** $(L - l)$ del **área de referencia** $(L^2 + Ll + l^2)$ — útil cuando $L$ y $l$ varían con la tolerancia de fabricación. Si la densidad del acero es $\rho = 7.85$ g/cm³:

$$m = \rho \cdot V = 7.85 \times 657 \approx 5157 \text{ g} \approx 5.16 \text{ kg}$$

La factorización convierte un cálculo con potencias cúbicas en una expresión más manejable para el análisis de materiales.
:::

**Pregunta detonadora**

> $x^3 - 8$ tiene solo dos términos, como $x^2 - 9$. ¿Se factoriza igual que una diferencia de cuadrados? ¿Qué fórmula necesitas?

---

## Teoría

### Suma y diferencia de cubos

Así como $a^2 - b^2 = (a+b)(a-b)$, existen fórmulas para **sumar o restar** dos cubos perfectos:

$$\boxed{a^3 + b^3 = (a + b)(a^2 - ab + b^2)}$$

$$\boxed{a^3 - b^3 = (a - b)(a^2 + ab + b^2)}$$

| Tipo | Binomio (1.er factor) | Trinomio (2.º factor) |
|------|----------------------|------------------------|
| **Suma** $a^3 + b^3$ | $(a + b)$ — signo **igual** | $a^2 - ab + b^2$ |
| **Diferencia** $a^3 - b^3$ | $(a - b)$ — signo **igual** | $a^2 + ab + b^2$ |

**Regla mnemotécnica SOP** (Same, Opposite, Positive):

- El **binomio** lleva el **mismo** signo que la expresión original ($+$ o $-$).
- El término central del **trinomio** lleva el signo **opuesto**.
- Los extremos del trinomio ($a^2$ y $b^2$) son siempre **positivos**.

---

### ¿Cómo reconocer suma o diferencia de cubos?

1. Son **exactamente dos términos**.
2. Los términos se **suman o restan**.
3. **Ambos son cubos perfectos** (número, variable o expresión elevada a potencia múltiplo de 3).

**Ejemplos reconocidos:**

| Expresión | $a$ | $b$ | Tipo |
|-----------|:---:|:---:|------|
| $x^3 - 27$ | $x$ | $3$ | Diferencia |
| $x^3 + 64$ | $x$ | $4$ | Suma |
| $8x^3 - 125$ | $2x$ | $5$ | Diferencia |
| $27a^3 + 8b^3$ | $3a$ | $2b$ | Suma |
| $(x+1)^3 - (x-1)^3$ | $x+1$ | $x-1$ | Diferencia |

```{warning}
No confundas diferencia de **cuadrados** con diferencia de **cubos**.

- $x^2 - 9 = (x+3)(x-3)$ — trinomio **no** aparece
- $x^3 - 9$ — **no** es diferencia de cubos ($9$ no es cubo perfecto)
- $x^3 - 27 = (x-3)(x^2 + 3x + 9)$ — trinomio **sí** aparece

Tampoco confundas con $(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$, que tiene **cuatro** términos.
```

---

### Ejemplos — diferencia de cubos

**Ejemplo 1:**

$$x^3 - 8 = (x)^3 - (2)^3 = (x - 2)(x^2 + 2x + 4)$$

**Ejemplo 2:**

$$27x^3 - 64 = (3x)^3 - (4)^3 = (3x - 4)(9x^2 + 12x + 16)$$

**Ejemplo 3 — ingeniería (volumen):**

$$L^3 - l^3 = (L - l)(L^2 + Ll + l^2)$$

Con $L = 10$, $l = 7$: $(3)(100 + 70 + 49) = 657$ cm³ ✓

---

### Ejemplos — suma de cubos

**Ejemplo 4:**

$$x^3 + 27 = (x + 3)(x^2 - 3x + 9)$$

**Ejemplo 5:**

$$8a^3 + 125b^3 = (2a)^3 + (5b)^3 = (2a + 5b)(4a^2 - 10ab + 25b^2)$$

**Ejemplo 6 — ingeniería (dos bloques de material):**

Dos piezas cúbicas de distinto tamaño se funden en un lote. Si los lados son $a$ y $b$:

$$V_{total} = a^3 + b^3 = (a + b)(a^2 - ab + b^2)$$

El primer factor $(a + b)$ representa la **suma de lados** — dato útil para estimar el empaque conjunto.

---

### Factor común antes de cubos

$$54x^3 - 16 = 2(27x^3 - 8) = 2(3x - 2)(9x^2 + 6x + 4)$$

$$x^6 - 1 = (x^2)^3 - 1^3 = (x^2 - 1)(x^4 + x^2 + 1) = (x-1)(x+1)(x^4 + x^2 + 1)$$

En el segundo caso, $x^2 - 1$ sigue siendo diferencia de cuadrados.

---

### Factorización por agrupación

Cuando un polinomio tiene **cuatro o más términos** y no encaja en las fórmulas anteriores, se usa el método de **agrupación**:

| Paso | Acción |
|------|--------|
| 1 | Agrupar términos en pares (o tríos) convenientes |
| 2 | Sacar factor común en **cada grupo** |
| 3 | Identificar el **binomio común** que queda |
| 4 | Factorizar ese binomio común |
| 5 | Verificar multiplicando |

**Condición de éxito:** ambos grupos deben producir el **mismo binomio** como factor.

**Ejemplo 7 — cuatro términos:**

$$ax + ay + bx + by$$

Agrupar $(ax + ay)$ y $(bx + by)$:

$$= a(x + y) + b(x + y) = (x + y)(a + b)$$

**Ejemplo 8 — con potencias:**

$$2x^3 + 3x^2 + 2x + 3$$

$$= x^2(2x + 3) + 1(2x + 3) = (2x + 3)(x^2 + 1)$$

**Ejemplo 9 — agrupación + diferencia de cuadrados:**

$$x^3 + 2x^2 - 4x - 8$$

$$= x^2(x + 2) - 4(x + 2) = (x + 2)(x^2 - 4) = (x + 2)(x + 2)(x - 2) = (x + 2)^2(x - 2)$$

**Ejemplo 10 — ingeniería (costo de materiales):**

El costo de dos componentes es $C = 3p_A x + 3p_A y + 2p_B x + 2p_B y$, donde $p_A$ y $p_B$ son precios unitarios:

$$C = 3p_A(x + y) + 2p_B(x + y) = (x + y)(3p_A + 2p_B)$$

La agrupación revela que el costo depende de una sola variable combinada $(x + y)$.

:::{admonition} 🔧 Análisis de materiales compuestos
:class: ingenieria

En un ensamble con dos aleaciones, la masa total es:

$$m = \rho_1 V_1 + \rho_2 V_2$$

Si $V_1 = a^3$ y $V_2 = b^3$ (bloques cúbicos):

$$m = \rho_1 a^3 + \rho_2 b^3$$

Cuando $\rho_1 = \rho_2 = \rho$:

$$m = \rho(a^3 + b^3) = \rho(a + b)(a^2 - ab + b^2)$$

La factorización permite separar la contribución geométrica $(a+b)(a^2-ab+b^2)$ de la propiedad del material $\rho$ — esencial en análisis de costos y peso en diseño mecánico.
:::

---

### Cuándo usar cada método

```{list-table}
:header-rows: 1
:widths: 40 60

* - Patrón de la expresión
  - Método
* - Todos los términos comparten un factor
  - Factor común (S8·C1)
* - Dos términos, resta, cuadrados perfectos
  - Diferencia de cuadrados (S8·C3)
* - Tres términos, grado 2
  - Tanteo o AC (S8·C2)
* - Dos términos, suma o resta, cubos perfectos
  - Suma o diferencia de cubos
* - Cuatro o más términos
  - Agrupación
* - Combinación
  - Factor común primero, luego el método que corresponda
```

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_CUBOS_AGRUPACION"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Contraste: $x^2 - 8$ (no factorizable con enteros) vs $x^3 - 8$ (sí: cubos)
2. Diferencia de cubos: $x^3 - 27$ → identificar $a=x$, $b=3$ → $(x-3)(x^2+3x+9)$
3. Regla SOP: mismo signo en binomio, opuesto en el medio, positivos en extremos
4. Suma de cubos: $x^3 + 64 = (x+4)(x^2-4x+16)$
5. Contenedor hueco: $L^3 - l^3 = (L-l)(L^2+Ll+l^2)$ con $L=10$, $l=7$
6. Agrupación: $2x^3+3x^2+2x+3$ → sacar $(2x+3)$ de ambos grupos
7. Cierre: árbol de decisión — ¿cuántos términos? ¿qué potencias?
```

---

## Visualización interactiva

Ajusta los lados exterior $L$ e interior $l$ de un cubo hueco y observa la factorización $L^3 - l^3 = (L-l)(L^2+Ll+l^2)$.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s8c4-cubos" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s8c4-cubos', {
            boundingbox: [-2, 14, 16, -4],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slL = board.create('slider', [[9, 12], [14, 12], [8, 10, 12]], {
            name: 'L', snapWidth: 0.5, fillColor: '#3b82f6' });
        var sll = board.create('slider', [[9, 10.5], [14, 10.5], [4, 7, 9]], {
            name: 'l', snapWidth: 0.5, fillColor: '#f97316' });

        var dinamicos = [];
        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var L = slL.Value(), l = sll.Value();
            if (l >= L) l = L - 1;

            var esc = 0.45, ox = 0.5, oy = 0.5;

            // Cubo exterior (vista frontal esquemática)
            dinamicos.push(board.create('polygon', [
                [ox, oy], [ox + L * esc, oy],
                [ox + L * esc, oy + L * esc], [ox, oy + L * esc]
            ], {
                fillColor: '#dbeafe', fillOpacity: 0.6,
                strokeColor: '#1d4ed8', strokeWidth: 2,
                vertices: { visible: false }
            }));

            // Cavidad interior
            var gap = (L - l) * esc / 2;
            dinamicos.push(board.create('polygon', [
                [ox + gap, oy + gap], [ox + gap + l * esc, oy + gap],
                [ox + gap + l * esc, oy + gap + l * esc], [ox + gap, oy + gap + l * esc]
            ], {
                fillColor: '#ffffff', fillOpacity: 1,
                strokeColor: '#c2410c', strokeWidth: 2,
                vertices: { visible: false }
            }));

            var L3 = Math.round(L * L * L);
            var l3 = Math.round(l * l * l);
            var diff = L3 - l3;
            var esp = L - l;
            var tri = Math.round((L * L + L * l + l * l) * 10) / 10;
            var prod = Math.round(esp * tri * 10) / 10;
            var masa = Math.round(7.85 * diff / 100) / 10;

            dinamicos.push(board.create('text', [9, 8.5,
                'L³ - l³ = ' + L3 + ' - ' + l3 + ' = ' + diff + ' cm³'], {
                fontSize: 13, color: '#1d4ed8', fontWeight: 'bold'
            }));
            dinamicos.push(board.create('text', [9, 7,
                '(L-l)(L²+Ll+l²) = (' + esp + ')(' + tri + ') = ' + prod], {
                fontSize: 13, color: '#c2410c', fontWeight: 'bold'
            }));
            dinamicos.push(board.create('text', [9, 5.5,
                'Espesor pared = L-l = ' + esp + ' cm'], {
                fontSize: 12, color: '#374151'
            }));
            dinamicos.push(board.create('text', [9, 4,
                'Masa ≈ ρ·V = 7.85 × ' + diff + ' ≈ ' + masa + ' kg'], {
                fontSize: 11, color: '#6b7280'
            }));
            dinamicos.push(board.create('text', [9, 2.5,
                'SOP: binomio (L-l), trinomio L²+Ll+l²'], {
                fontSize: 11, color: '#6b7280'
            }));

            // Etiquetas en el dibujo
            dinamicos.push(board.create('text',
                [ox + L * esc / 2, oy - 0.6, 'L=' + L], {
                fontSize: 10, anchorX: 'middle', color: '#1d4ed8'
            }));
            dinamicos.push(board.create('text',
                [ox + gap + l * esc / 2, oy + gap + l * esc / 2, 'l=' + l], {
                fontSize: 10, anchorX: 'middle', color: '#c2410c'
            }));
        }

        slL.on('drag', dibujar);
        sll.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Cubo hueco esquemático con lados $L$ (exterior, azul) y $l$ (interior, naranja). Los deslizadores actualizan $L^3 - l^3$ y su forma factorizada $(L-l)(L^2+Ll+l^2)$, el espesor de pared y una estimación de masa con $\rho = 7.85$ g/cm³. Conecta la diferencia de cubos con el análisis de volúmenes y materiales en ingeniería mecánica.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7l9sxFuDTYq3CS5-4o74zT4ZyXIm40oN8_jju-huichs-fg/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Cubos y agrupación
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~12 min):**

P1 (Fill): "x³ - 27 = (x - ___)(x² + ___x + 9)" → 3, 3
P2 (Fill): "x³ + 64 = (x + ___)(x² - ___x + 16)" → 4, 4
P3 (Fill): "8x³ - 125 = (___x - 5)(4x² + ___x + 25)" → 2, 10
P4 (Fill): "L³ - l³ = (L - l)(L² + ___ + l²)" → Ll
P5 (T/F): "x³ - 9 es diferencia de cubos" → Falso (9 no es cubo perfecto)
P6 (MC): "¿Factorización de 2x³+3x²+2x+3?" → (2x+3)(x²+1)
P7 (Fill agrupación): "ax+ay+bx+by = (x+y)(___)" → a+b
P8 (Fill ingeniería): "L=10, l=7 → L³-l³ = ___ cm³" → 657
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Fórmula
  - Factorización
* - Suma de cubos
  - $a^3 + b^3 = (a+b)(a^2 - ab + b^2)$
* - Diferencia de cubos
  - $a^3 - b^3 = (a-b)(a^2 + ab + b^2)$
* - Regla SOP
  - Binomio: mismo signo · Trinomio: opuesto en el medio, positivos en extremos
* - Agrupación
  - Agrupar → factor común por grupo → sacar binomio común
* - Ingeniería
  - $L^3 - l^3$ para volúmenes huecos; agrupación para costos y masas combinadas
```

:::{admonition} Siguiente clase
:class: tip
Completaste los cuatro métodos de factorización de la Semana 8. La siguiente sesión es de **autogestión**: ejercicios integradores que combinan factor común, trinomios, diferencia de cuadrados, cubos y agrupación.

➡️ [Ir a S8·Auto Factorización](s8_auto_factorizacion.md)
:::
