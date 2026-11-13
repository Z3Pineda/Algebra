---
title: "S15·C3 División sintética y teorema del residuo"
---

# S15·C3 División sintética y teorema del residuo

:::{admonition} 🔧 Evaluar un modelo polinomial en operación
:class: ingenieria

La resistencia de un material en función de la temperatura $T$ (°C) es:

$$R(T) = 2T^3 - 5T^2 + T + 10$$

Para evaluar $R(3)$ en el punto de operación, la **división sintética** (Ruffini) calcula $P(3)$ sin multiplicar potencias — método eficiente para tabular valores en diseño y simulación.
:::

**Pregunta detonadora**

> ¿Cuál es el residuo al dividir $x^3 - 2x + 4$ entre $(x - 2)$? ¿Coincide con $P(2)$?

---

## Teoría

### Teorema del residuo

Al dividir $P(x)$ entre $(x - a)$:

$$\boxed{P(a) = \text{residuo}}$$

El **residuo** de la división es igual al valor del polinomio en $x = a$.

**Corolario:** $(x - a)$ es factor de $P(x)$ si y solo si $P(a) = 0$ (teorema del factor — S15·C4).

---

### División sintética (Ruffini)

Divide $P(x)$ entre $(x - a)$ de forma compacta. Solo funciona cuando el divisor es **lineal** de la forma $(x - a)$.

**Ejemplo:** $P(x) = 2x^3 - 5x^2 + x + 10$, dividir entre $(x - 3)$:

| Paso | Acción |
|:----:|--------|
| 1 | Escribir $a = 3$ y coeficientes $2, -5, 1, 10$ |
| 2 | Bajar el primer coeficiente |
| 3 | Multiplicar por $a$, sumar al siguiente; repetir |

```
  3 │  2   -5    1   10
    │      6   -3    6
    └──────────────────
       2    1   -2    8
```

**Resultado:** cociente $2x^2 + x - 2$, residuo $8$.

**Verificación:** $P(3) = 2(27) - 5(9) + 3 + 10 = 54 - 45 + 13 = 8$ ✓

---

### Algoritmo paso a paso

Para $P(x) = a_n x^n + \cdots + a_0$ entre $(x - a)$:

1. Fila de coeficientes: $a_n, a_{n-1}, \ldots, a_0$
2. Esquina inferior izquierda: escribir $a$
3. Primer número de la fila inferior = $a_n$
4. Cada siguiente: (número anterior) $\times a$ + (coeficiente de arriba)

Último número de la fila inferior = **residuo**.

Los demás = coeficientes del **cociente** (grado $n-1$).

---

### Ejemplo 2

$P(x) = x^3 - 6x^2 + 11x - 6$, dividir entre $(x - 2)$:

```
  2 │  1   -6   11   -6
    │      2   -8    6
    └──────────────────
       1   -4    3    0
```

Residuo $0$ → $P(2) = 0$ → $(x - 2)$ **es factor** de $P$.

---

### Evaluación eficiente

Para tabular $P(x)$ en varios puntos:

| $x$ | $P(x)$ (sintética) |
|:---:|:------------------:|
| 1 | resultado de Ruffini con $a=1$ |
| 2 | residuo con $a=2$ |
| 3 | residuo con $a=3$ |

```{warning}
La división sintética **solo** aplica cuando el divisor es $(x - a)$ — un factor lineal.

Para dividir entre $(x + 3)$, usa $a = -3$ (porque $x + 3 = x - (-3)$).

Para divisores cuadráticos o de mayor grado, usa división larga de polinomios (S9·C3).
```

:::{admonition} 🔧 Ingeniería — tabla de operación
:class: ingenieria

Si $P(T) = 0.01T^3 - 0.2T^2 + 2T + 50$ modela presión (kPa) vs temperatura, Ruffini con $T = 100, 200, 300$ genera una tabla de operación sin calculadora simbólica — útil en campo y en exámenes.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_DIVISION_SINTETICA"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Teorema del residuo: P(a)=residuo
2. Ruffini con 2x³-5x²+x+10 entre (x-3)
3. Verificar P(3)=8
4. Caso residuo 0: x³-6x²+11x-6, a=2
5. Divisor (x+3) → a=-3
6. Tabla de evaluacion en puntos de operacion
```

---

## Visualización interactiva

Observa la división sintética paso a paso para $P(x) = x^3 - 2x + 4$ con $a = 2$.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s15c3-sintetica" class="jsxgraph-container" style="height:480px"></div>

<script>
(function() {
    var pasos = [
        'P(x) = x³ - 2x + 4, dividir entre (x - 2)',
        'Coeficientes: 1, 0, -2, 4  (falta x² → 0)',
        'a = 2',
        'Fila 1: bajar 1',
        '1×2=2, 0+2=2',
        '2×2=4, -2+4=2',
        '2×2=4, 4+4=8 → residuo',
        'P(2) = 8 ✓  Cociente: x²+2x+2'
    ];

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s15c3-sintetica', {
            boundingbox: [-1, 11, 13, -1],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var p = 0, dinamicos = [];

        function dibujar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
            for (var i = 0; i <= p; i++) {
                dinamicos.push(board.create('text', [1, 10 - i * 1.1, (i+1) + '. ' + pasos[i]], {
                    fontSize: i === p ? 13 : 11,
                    color: i === p ? '#1d4ed8' : '#374151',
                    fontWeight: i === p ? 'bold' : 'normal'
                }));
            }
            if (p > 0) {
                var bp = board.create('text', [4, 1, '< Anterior'], {
                    fontSize: 12, cssStyle: 'cursor:pointer; padding:5px 12px; background:#f1f5f9; border-radius:6px;'
                });
                bp.on('down', function() { p--; dibujar(); });
                dinamicos.push(bp);
            }
            if (p < pasos.length - 1) {
                var bn = board.create('text', [9, 1, 'Siguiente >'], {
                    fontSize: 12, cssStyle: 'cursor:pointer; padding:5px 12px; background:#dbeafe; border-radius:6px;'
                });
                bn.on('down', function() { p++; dibujar(); });
                dinamicos.push(bn);
            }
        }
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Recorrido paso a paso de Ruffini con botones Anterior/Siguiente. Refuerza incluir coeficiente 0 para términos faltantes y conectar residuo con $P(a)$.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfTZFd5d_ZhVAQhpzpJYCUJDWAK3Y7r7uM-q6Z-6y7DeCKwkw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: División sintética
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "Teorema del residuo: P(a) es el ___" → Residuo al dividir entre (x-a)
P2 (Fill): "2x³-5x²+x+10, (x-3): residuo=___" → 8
P3 (Fill): "x³-6x²+11x-6, (x-2): residuo=___" → 0
P4 (T/F): "Residuo 0 → (x-a) es factor." → Verdadero
P5 (MC): "Dividir entre (x+3), usar a=___" → -3
P6 (Fill): "x³-2x+4, P(2)=___" → 8
P7 (MC ingeniería): "Ruffini sirve para:" → Evaluar P en puntos de operacion
P8 (T/F): "Sintetica funciona con divisor x²+1." → Falso
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Teorema del residuo
  - $P(a) =$ residuo al dividir entre $(x-a)$
* - División sintética
  - Algoritmo de Ruffini; solo divisor $(x-a)$
* - Coeficiente 0
  - Incluir para términos faltantes en el grado
* - Residuo 0
  - $(x-a)$ es factor de $P(x)$
* - $(x+a)$
  - Usar $a = -3$ para $(x+3)$
* - Ingeniería
  - Tabular modelos polinomiales en puntos de operación
```

:::{admonition} Siguiente clase
:class: tip
Ya evalúas polinomios con Ruffini. En la siguiente clase verás el **teorema del factor**, las **raíces** y el **teorema fundamental del álgebra**.

➡️ [Ir a S15·C4 Teorema del factor, raíces y teorema fundamental](s15_c4_teorema_factor_raices.md)
:::
