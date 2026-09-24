---
title: "S9·C3 División de polinomios — algoritmo de la división"
---

# S9·C3 División de polinomios — algoritmo de la división

:::{admonition} 🔧 Análisis dimensional en mecánica
:class: ingenieria

En mecánica, las ecuaciones deben ser **dimensionalmente homogéneas**: cada término de una ecuación tiene las mismas unidades. Al modelar la energía cinética de un sistema:

$$E = \frac{1}{2}mv^2 + kx^2 + E_0$$

si se divide la energía total entre un polinomio en $x$ que describe la deformación:

$$\frac{2x^3 + 5x^2 - 3x + 7}{x + 2}$$

el algoritmo de división produce un **cociente** (parte entera de la razón) y un **residuo** (lo que sobra). La verificación:

$$\text{dividendo} = \text{divisor} \times \text{cociente} + \text{residuo}$$

es análoga a verificar que las unidades de un lado de la ecuación coinciden con las del otro — una comprobación esencial en ingeniería.
:::

**Pregunta detonadora**

> Al dividir 17 entre 5 obtienes cociente 3 y residuo 2, porque $17 = 5 \times 3 + 2$. ¿Crees que algo parecido funciona al dividir $x^2 + 5x + 6$ entre $x + 2$?

---

## Teoría

### Elementos de la división

Al dividir polinomios intervienen cuatro piezas:

| Elemento | Símbolo | Descripción |
|----------|---------|-------------|
| **Dividendo** | $D(x)$ | Polinomio que se divide (el de mayor grado) |
| **Divisor** | $d(x)$ | Polinomio por el que se divide |
| **Cociente** | $Q(x)$ | Resultado de la división |
| **Residuo** | $R(x)$ | Lo que sobra; grado de $R$ < grado de $d$ |

**Identidad fundamental:**

$$D(x) = d(x) \cdot Q(x) + R(x)$$

Si $R(x) = 0$, la división es **exacta**.

---

### Algoritmo de división larga

El procedimiento es paralelo a la división aritmética de números:

| Paso | Acción |
|------|--------|
| 1 | Ordenar dividendo y divisor por potencias decrecientes |
| 2 | Dividir el primer término del dividendo entre el primer término del divisor → primer término del cociente |
| 3 | Multiplicar ese término por el divisor completo |
| 4 | Restar del dividendo (cambiar signos y sumar) |
| 5 | Bajar el siguiente término y repetir hasta que el grado del resto sea menor que el del divisor |

**Ejemplo 1:**

$$\frac{x^2 + 5x + 6}{x + 2}$$

| Paso | Operación | Resto parcial |
|------|-----------|---------------|
| 1 | $x^2 \div x = x$ | |
| 2 | $x(x+2) = x^2+2x$ | $(x^2+5x)-(x^2+2x) = 3x$ |
| 3 | $3x \div x = 3$ | |
| 4 | $3(x+2) = 3x+6$ | $(3x+6)-(3x+6) = 0$ |

**Cociente:** $Q(x) = x + 3$. **Residuo:** $R(x) = 0$ (división exacta).

Verificación: $(x+2)(x+3) = x^2+5x+6$ ✓

---

### Ejemplo con residuo no nulo

**Ejemplo 2:**

$$\frac{2x^3 - 5x^2 + 3x - 1}{x - 2}$$

| Paso | Cociente acumulado | Resto |
|------|-------------------|-------|
| $2x^3 \div x = 2x^2$ | $2x^2$ | $-x^2+3x$ |
| $-x^2 \div x = -x$ | $2x^2 - x$ | $x - 1$ |
| $x \div x = 1$ | $2x^2 - x + 1$ | $1$ |

**Cociente:** $Q(x) = 2x^2 - x + 1$. **Residuo:** $R(x) = 1$.

Verificación:

$$(x-2)(2x^2-x+1)+1 = 2x^3-5x^2+3x-2+1 = 2x^3-5x^2+3x-1 \checkmark$$

---

### División sintética (caso especial)

Cuando el divisor es de la forma $x - k$, existe un método abreviado llamado **división sintética**. Se estudiará con más detalle al resolver ecuaciones polinomiales.

Para $x + 2 = x - (-2)$, se usa $k = -2$.

```{warning}
Antes de iniciar la división larga:

- Ordena ambos polinomios de mayor a menor grado.
- Si falta algún grado intermedio, escribe $0x^n$ (ej: $x^3 + 1 = x^3 + 0x^2 + 0x + 1$).
- El grado del residuo siempre es **menor** que el grado del divisor.
```

---

### Conexión con ingeniería

:::{admonition} 🔧 Verificación dimensional y modelos polinomiales
:class: ingenieria

Si la deformación de un resorte se modela como $D(x) = 3x^3 + 2x^2 - 5x + 4$ y se quiere evaluar el comportamiento cuando $x = -1$ (compresión unitaria), dividir entre $(x+1)$ da:

$$\frac{3x^3+2x^2-5x+4}{x+1} = 3x^2 - x - 4 + \frac{8}{x+1}$$

- El **cociente** $3x^2 - x - 4$ describe el comportamiento "suave" del sistema.
- El **residuo** $8$ indica que en $x = -1$ hay un término no divisible — análogo a una discrepancia en unidades que el ingeniero debe investigar.

La identidad $D = d \cdot Q + R$ garantiza que el modelo es **consistente** — como una ecuación dimensionalmente balanceada.
:::

**Ejemplo 3:**

$$\frac{x^3 - 6x^2 + 11x - 6}{x - 2}$$

Cociente: $x^2 - 4x + 3$. Residuo: $0$.

Factorización: $(x-2)(x^2-4x+3) = (x-2)(x-1)(x-3)$ — la división exacta revela las raíces.

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_DIVISION_POLINOMIOS"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Analogía numérica: $17 = 5 \times 3 + 2$
2. Esquema: dividendo, divisor, cociente, residuo
3. División larga de $(x^2+5x+6)/(x+2)$ paso a paso con colores
4. Caso con residuo: $(2x^3-5x^2+3x-1)/(x-2)$
5. Verificación: multiplicar divisor × cociente + residuo
6. Cierre: conexión con análisis dimensional — balancear ambos lados
```

---

## Visualización interactiva

Sigue paso a paso la división de $x^2 + 5x + 6$ entre $x + 2$.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s9c3-division-larga" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s9c3-division-larga', {
            boundingbox: [-1, 14, 14, -1],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var pasos = [
            { txt: 'Dividendo: x² + 5x + 6  |  Divisor: x + 2', y: 12.5, color: '#374151' },
            { txt: 'Paso 1: x² ÷ x = x  →  primer término del cociente', y: 11, color: '#3b82f6' },
            { txt: 'Paso 2: x(x+2) = x² + 2x  →  restar', y: 9.5, color: '#3b82f6' },
            { txt: 'Resto parcial: 3x + 6', y: 8, color: '#16a34a' },
            { txt: 'Paso 3: 3x ÷ x = 3  →  segundo término del cociente', y: 6.5, color: '#f97316' },
            { txt: 'Paso 4: 3(x+2) = 3x + 6  →  restar → residuo = 0', y: 5, color: '#f97316' },
            { txt: 'Cociente: Q(x) = x + 3', y: 3.2, color: '#1d4ed8' },
            { txt: 'Residuo: R(x) = 0  (división exacta)', y: 2, color: '#1d4ed8' },
            { txt: 'Verificación: (x+2)(x+3) + 0 = x² + 5x + 6 ✓', y: 0.5, color: '#16a34a' }
        ];

        pasos.forEach(function(p) {
            board.create('text', [0.5, p.y, p.txt], {
                fontSize: 12, color: p.color, fontWeight: p.y <= 3.2 ? 'bold' : 'normal'
            });
        });

        // Esquema visual tipo división
        board.create('text', [9, 12, 'D(x) = d(x)·Q(x) + R(x)'], {
            fontSize: 13, color: '#1d4ed8', fontWeight: 'bold'
        });
        board.create('polygon', [[8.5, 10], [12.5, 10], [12.5, 7], [8.5, 7]], {
            fillColor: '#dbeafe', fillOpacity: 0.4,
            strokeColor: '#1d4ed8', strokeWidth: 1.5,
            vertices: { visible: false }
        });
        board.create('text', [10.5, 8.5, 'x²+5x+6'], {
            fontSize: 11, anchorX: 'middle', color: '#1d4ed8'
        });
        board.create('text', [8.2, 9.5, 'x+2'], {
            fontSize: 11, color: '#c2410c'
        });
        board.create('text', [12.8, 9.5, 'x+3'], {
            fontSize: 11, color: '#16a34a', fontWeight: 'bold'
        });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Lista paso a paso la división de $(x^2+5x+6)/(x+2)$ con colores por etapa. Incluye esquema de la identidad $D = d \cdot Q + R$ y caja tipo división larga. El residuo cero confirma la factorización $(x+2)(x+3)$.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6hcb19Gu0AW-vGkTdjZ11YOjrdkHRmyOaN90epkmjCdB_9w/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: División de polinomios
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~12 min):**

P1 (Fill): "(x²+5x+6)/(x+2) → Q(x)=x+___" → 3
P2 (Fill): "(x²+5x+6)/(x+2) → R(x)=___" → 0
P3 (Fill): "(2x³-5x²+3x-1)/(x-2) → residuo = ___" → 1
P4 (MC): "Identidad de división:" → D = d·Q + R
P5 (T/F): "El grado del residuo puede ser igual al del divisor" → Falso
P6 (Fill): "(x³-8)/(x-2) → Q(x)=x²+___x+4" → 2
P7 (Fill ingeniería): "Si R=0, la división es ___" → exacta
P8 (Fill): "(x²-9)/(x+3) → Q(x)=___" → x-3
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Identidad
  - $D(x) = d(x) \cdot Q(x) + R(x)$
* - Algoritmo
  - Dividir términos principales → multiplicar → restar → repetir
* - Residuo
  - Grado de $R$ < grado de $d$. Si $R=0$, división exacta
* - Verificación
  - Multiplicar $d \cdot Q + R$ debe dar el dividendo
* - Ingeniería
  - Analogía con balance dimensional: ambos lados deben ser consistentes
```

:::{admonition} Siguiente clase
:class: tip
Ya dominas la división de polinomios. En la siguiente clase aplicarás división y factorización para **simplificar, multiplicar y dividir fracciones algebraicas** — expresiones que aparecen en transmisiones y rendimiento mecánico.

➡️ [Ir a S9·C4 Fracciones algebraicas](s9_c4_fracciones_algebraicas.md)
:::
