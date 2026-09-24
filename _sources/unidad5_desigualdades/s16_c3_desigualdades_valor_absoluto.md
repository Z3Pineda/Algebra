---
title: "S16·C3 Desigualdades con valor absoluto"
---

# S16·C3 Desigualdades con valor absoluto

:::{admonition} 🔧 Control de calidad GD&T en manufactura
:class: ingenieria

Una pieza cumple la especificación si su longitud $L$ está dentro de la tolerancia:

$$|L - 100| \leq 0.5 \text{ mm}$$

Esto equivale al **intervalo**:

$$99.5 \leq L \leq 100.5 \text{ mm}$$

Las desigualdades con valor absoluto traducen **bandas de aceptación** en control de calidad y especificaciones geométricas (GD&T) en taller mecánico.
:::

**Pregunta detonadora**

> ¿Por qué $|x - 3| < 5$ se escribe como $-5 < x - 3 < 5$ y no como dos desigualdades separadas sin conectar?

---

## Teoría

### Desigualdad $|f(x)| < k$ (con $k > 0$)

La distancia de $f(x)$ al cero es **menor que** $k$:

$$|f(x)| < k \quad \Leftrightarrow \quad -k < f(x) < k$$

**Solución:** un **intervalo** (conjunto de puntos entre $-k$ y $k$ en la recta).

**Ejemplo 1:**

$$|x - 3| < 5 \quad \Leftrightarrow \quad -5 < x - 3 < 5 \quad \Leftrightarrow \quad -2 < x < 8$$

**Intervalo:** $(-2, 8)$

---

### Desigualdad $|f(x)| \leq k$

$$|f(x)| \leq k \quad \Leftrightarrow \quad -k \leq f(x) \leq k$$

Los **extremos incluidos** (corchetes en intervalo).

**Ejemplo — tolerancia:**

$$|L - 100| \leq 0.5 \quad \Leftrightarrow \quad 99.5 \leq L \leq 100.5 \text{ mm}$$

**Intervalo:** $[99.5, 100.5]$

---

### Desigualdad $|f(x)| > k$ (con $k > 0$)

La distancia es **mayor que** $k$ — estás **lejos** del cero:

$$|f(x)| > k \quad \Leftrightarrow \quad f(x) > k \quad \text{o} \quad f(x) < -k$$

**Solución:** **unión** de dos intervalos (no uno solo).

**Ejemplo 2:**

$$|x - 3| > 5 \quad \Leftrightarrow \quad x - 3 > 5 \quad \text{o} \quad x - 3 < -5$$

$$x > 8 \quad \text{o} \quad x < -2$$

**Intervalos:** $(-\infty, -2) \cup (8, \infty)$

---

### Representación en recta numérica

| Desigualdad | Gráfica | Tipo |
|-------------|---------|------|
| $|x-a| < r$ | Segmento abierto centrado en $a$ | Intervalo |
| $|x-a| \leq r$ | Segmento cerrado | Intervalo |
| $|x-a| > r$ | Dos rayos hacia afuera | Unión |

---

### Tabla de casos

| Forma | $k > 0$ | Solución |
|-------|:-------:|----------|
| $|f(x)| < k$ | Sí | $-k < f(x) < k$ |
| $|f(x)| \leq k$ | Sí | $-k \leq f(x) \leq k$ |
| $|f(x)| > k$ | Sí | $f(x) > k$ o $f(x) < -k$ |
| $|f(x)| < k$ | No ($k \leq 0$) | Todas las $x$ (si $k<0$) o vacío |

---

### Ejemplo 3 — Tolerancia en diámetro

Nominal $d_0 = 40$ mm, tolerancia $t = 0.08$ mm:

$$|d - 40| \leq 0.08 \quad \Leftrightarrow \quad 39.92 \leq d \leq 40.08 \text{ mm}$$

Piezas fuera de este intervalo se **rechazan** en control de calidad.

```{warning}
Errores frecuentes:

- Confundir $|x-a| < r$ (intervalo **uno**) con $|x-a| > r$ (unión de **dos**)
- Olvidar invertir la desigualdad al multiplicar por negativo
- Escribir $|d-d_0| \leq t$ como $d_0 - t < d < d_0 + t$ pero olvidar el caso de igualdad en los extremos cuando es $\leq$
```

:::{admonition} 🔧 Ingeniería — GD&T y banda aceptable
:class: ingenieria

En GD&T (Geometric Dimensioning & Tolerancing), la tolerancia dimensional $|L - L_0| \leq t$ define la **zona de aceptación**. El inspector mide $L$ y verifica pertenencia al intervalo $[L_0 - t, L_0 + t]$. Deslizar nominal y tolerancia en la visualización reproduce exactamente esta banda dinámica.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_DESIGUALDADES_VALOR_ABSOLUTO"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. |x-3|<5 → -2<x<8 en recta numérica
2. |x-3|>5 → x<-2 o x>8 (dos rayos)
3. |d-d0|≤t → intervalo [d0-t, d0+t]
4. Diferencia < vs > vs ≤
5. Ejemplo GD&T L=100±0.5
6. Representacion intervalo vs union
```

---

## Visualización interactiva

Ajusta el nominal $d_0$ y la tolerancia $t$; observa el intervalo aceptable $|d - d_0| \leq t$ en la recta.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s16c3-desigualdad" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s16c3-desigualdad', {
            boundingbox: [-2, 6, 14, -2],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slD0 = board.create('slider', [[0, 5], [5, 5], [80, 100, 120]], {
            name: 'd₀', snapWidth: 1, fillColor: '#1d4ed8' });
        var slT = board.create('slider', [[0, 4], [5, 4], [0.1, 0.5, 2]], {
            name: 't', snapWidth: 0.1, fillColor: '#c2410c' });
        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var d0 = slD0.Value(), t = slT.Value();
            var lo = d0 - t, hi = d0 + t;

            dinamicos.push(board.create('segment', [[lo, 0.5], [hi, 0.5]], {
                strokeColor: '#16a34a', strokeWidth: 8, fixed: true
            }));
            dinamicos.push(board.create('point', [d0, 0.5], {
                size: 4, fillColor: '#1d4ed8', strokeColor: '#1d4ed8', name: 'nominal'
            }));
            dinamicos.push(board.create('point', [lo, 0.5], {
                size: 3, fillColor: '#ca8a04', strokeColor: '#ca8a04', name: lo.toFixed(2)
            }));
            dinamicos.push(board.create('point', [hi, 0.5], {
                size: 3, fillColor: '#ca8a04', strokeColor: '#ca8a04', name: hi.toFixed(2)
            }));

            dinamicos.push(board.create('text', [7, 4.5,
                '|d - ' + d0 + '| ≤ ' + t.toFixed(1)], { fontSize: 13, color: '#374151', fontWeight: 'bold' });
            dinamicos.push(board.create('text', [7, 3.8,
                'Aceptable: [' + lo.toFixed(2) + ', ' + hi.toFixed(2) + '] mm'], {
                fontSize: 12, color: '#16a34a', fontWeight: 'bold'
            }));
            dinamicos.push(board.create('text', [7, 3.1,
                'Fuera de banda → pieza rechazada'], {
                fontSize: 10, color: '#dc2626', fontStyle: 'italic'
            }));
        }

        slD0.on('drag', dibujar);
        slT.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Deslizadores para nominal $d_0$ y tolerancia $t$. Segmento verde muestra $[d_0-t, d_0+t]$. Punto azul = nominal; extremos = cotas límite. Simula control de calidad GD&T en tiempo real.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScxYGK7oCugdOElaN3tcT8-FK-wRBA-xwWJMJ8QtCjmz1tUww/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Desigualdades con valor absoluto
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "|x-3|<5 → intervalo:" → (-2, 8)
P2 (Fill): "|x-3|>5 → x<___ o x>___" → -2, 8
P3 (Fill): "|L-100|≤0.5 → L en [___,___]" → 99.5, 100.5
P4 (MC): "|f(x)|<k equivale a:" → -k < f(x) < k
P5 (T/F): "|x-a|>r tiene un solo intervalo." → Falso (union de dos)
P6 (MC ingeniería): "|d-40|≤0.08 → d max:" → 40.08
P7 (MC): "|d-d0|≤t modela:" → Tolerancia simetrica
P8 (Fill): "|d-40|≤0.08 → d min=___" → 39.92
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Desigualdad
  - Solución (con $k > 0$)
* - $|f(x)| < k$
  - $-k < f(x) < k$ — **intervalo**
* - $|f(x)| \leq k$
  - $-k \leq f(x) \leq k$ — intervalo cerrado
* - $|f(x)| > k$
  - $f(x) > k$ o $f(x) < -k$ — **unión** de dos intervalos
* - Tolerancia
  - $|d - d_0| \leq t \Leftrightarrow d_0 - t \leq d \leq d_0 + t$
* - Recta numérica
  - Segmento (cerca) vs dos rayos (lejos)
* - Ingeniería
  - Control de calidad, GD&T, banda aceptable
```

:::{admonition} Siguiente clase
:class: tip
Dominas desigualdades con valor absoluto y tolerancias. En la siguiente clase harás un **repaso integrador** de las cinco unidades del curso.

➡️ [Ir a S16·C4 Repaso general del curso](s16_c4_repaso_general.md)
:::
