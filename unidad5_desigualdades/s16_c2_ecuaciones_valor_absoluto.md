---
title: "S16·C2 Ecuaciones con valor absoluto"
---

# S16·C2 Ecuaciones con valor absoluto

:::{admonition} 🔧 Tolerancia simétrica en un eje mecanizado
:class: ingenieria

El diámetro nominal de un eje es $d_0 = 50$ mm con desviación máxima permitida de $0.02$ mm. Una pieza mide $d = 50.015$ mm. ¿Cumple la especificación?

$$|d - 50| = |0.015| = 0.015 \leq 0.02 \quad \checkmark$$

Para hallar los **límites exactos**, se resuelve $|d - 50| = 0.02$:

$$d - 50 = 0.02 \text{ o } d - 50 = -0.02 \quad \Rightarrow \quad d = 50.02 \text{ o } d = 49.98 \text{ mm}$$

Las ecuaciones con valor absoluto modelan **tolerancias simétricas** en manufactura.
:::

**Pregunta detonadora**

> Para resolver $|x - 3| = 7$, ¿por qué obtienes **dos** ecuaciones lineales?

---

## Teoría

### Ecuación básica $|f(x)| = k$

| Caso | Condición | Soluciones |
|------|-----------|------------|
| Dos soluciones | $k > 0$ | $f(x) = k$ **o** $f(x) = -k$ |
| Una solución | $k = 0$ | $f(x) = 0$ |
| Sin solución | $k < 0$ | Ninguna (distancia $\geq 0$) |

---

### Ejemplo 1 — $|x - 3| = 7$

$$x - 3 = 7 \quad \text{o} \quad x - 3 = -7$$

$$x = 10 \quad \text{o} \quad x = -4$$

**Verificación:** $|10-3|=7$ ✓ y $|-4-3|=7$ ✓

---

### Ejemplo 2 — $|2x + 1| = 9$

$$2x + 1 = 9 \quad \text{o} \quad 2x + 1 = -9$$

$$x = 4 \quad \text{o} \quad x = -5$$

---

### Ejemplo 3 — $|x - 5| = 0$

$$x - 5 = 0 \quad \Rightarrow \quad x = 5 \quad \text{(única solución)}$$

---

### Ejemplo 4 — $|x + 2| = -3$

Como $|-3| = 3 \neq -3$ y el valor absoluto nunca es negativo, la ecuación $|x+2| = -3$ **no tiene solución real**.

En notación $|f(x)| = k$ con $k < 0$: **sin solución**.

---

### Método paso a paso

| Paso | Acción |
|:----:|--------|
| 1 | Aislar el valor absoluto (si hace falta) |
| 2 | Identificar $k$; verificar si $k \geq 0$ |
| 3 | Separar: $f(x) = k$ y $f(x) = -k$ |
| 4 | Resolver cada ecuación lineal |
| 5 | **Verificar** cada solución en la ecuación original |

---

### Ecuaciones $|f(x)| = |g(x)|$

Si ambos lados tienen valor absoluto:

$$|f(x)| = |g(x)| \quad \Rightarrow \quad f(x) = g(x) \quad \text{o} \quad f(x) = -g(x)$$

**Ejemplo 5:**

$$|x - 1| = |2x + 4|$$

**Caso 1:** $x - 1 = 2x + 4 \Rightarrow x = -5$

**Caso 2:** $x - 1 = -(2x + 4) = -2x - 4 \Rightarrow 3x = -3 \Rightarrow x = -1$

**Verificación:** $|-5-1|=6$, $|2(-5)+4|=6$ ✓ y $|-1-1|=2$, $|2(-1)+4|=2$ ✓

```{warning}
Errores frecuentes:

- Olvidar el caso $f(x) = -k$ cuando $k > 0$
- Incluir soluciones que no verifican en la ecuación original
- Intentar resolver $|f(x)| = k$ con $k < 0$ — siempre imposible
```

---

### Tolerancias en ingeniería

Especificación: $|d - 50| \leq 0.02$ mm (desigualdad — próxima clase).

Ecuación de **límites**: $|d - 50| = 0.02$ → $d = 50.02$ o $d = 49.98$ mm.

:::{admonition} 🔧 Ingeniería — desviación máxima permitida
:class: ingenieria

Una pieza cumple si $|L - L_0| \leq \delta$, donde $L_0$ es la cota nominal y $\delta$ la tolerancia. Resolver $|L - L_0| = \delta$ da las **cotas límite** superior e inferior — datos esenciales en planos de taller y GD&T.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_ECUACIONES_VALOR_ABSOLUTO"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. |x-3|=7 → x-3=7 o x-3=-7
2. Casos k>0, k=0, k<0
3. |2x+1|=9 paso a paso
4. |f(x)|=|g(x)| → dos casos
5. Tolerancia |d-50|=0.02 → cotas limite
6. Verificacion obligatoria
```

---

## Visualización interactiva

Observa las soluciones de $|x - h| = k$ al mover $h$ y $k$ — intersecciones de la V con la recta $y = k$.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s16c2-ecuaciones" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s16c2-ecuaciones', {
            boundingbox: [-8, 10, 10, -2],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slH = board.create('slider', [[-6, 9], [-2, 9], [-3, 3, 6]], { name: 'h', snapWidth: 0.5, fillColor: '#1d4ed8' });
        var slK = board.create('slider', [[-6, 7.5], [-2, 7.5], [1, 4, 8]], { name: 'k', snapWidth: 0.5, fillColor: '#c2410c' });
        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var h = slH.Value(), k = slK.Value();
            if (k < 0) return;

            var f = function(x) { return Math.abs(x - h); };
            dinamicos.push(board.create('functiongraph', [f, -8, 10], { strokeColor: '#1d4ed8', strokeWidth: 2.5 }));
            dinamicos.push(board.create('line', [[0, k], [1, k]], {
                strokeColor: '#c2410c', strokeWidth: 2, dash: 2, fixed: true
            }));

            if (k >= 0) {
                var x1 = h + k, x2 = h - k;
                dinamicos.push(board.create('point', [x1, k], { size: 4, fillColor: '#16a34a', strokeColor: '#16a34a', name: 'x₁' }));
                dinamicos.push(board.create('point', [x2, k], { size: 4, fillColor: '#16a34a', strokeColor: '#16a34a', name: 'x₂' }));
                dinamicos.push(board.create('text', [5, 8.5, '|x-' + h.toFixed(1) + '|=' + k.toFixed(1)], { fontSize: 12, color: '#374151', fontWeight: 'bold' }));
                dinamicos.push(board.create('text', [5, 7.8, 'x=' + x2.toFixed(1) + ' o x=' + x1.toFixed(1)], { fontSize: 11, color: '#16a34a' }));
            }
        }

        slH.on('drag', dibujar); slK.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
La gráfica de $|x-h|$ (azul) y la recta horizontal $y=k$ (naranja). Los puntos verdes son las soluciones de $|x-h|=k$. Si $k=0$, un solo punto; si $k>0$, dos simétricos respecto a $h$.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfaWAHeZQ4exbUW0cNjk1vjYRx9kVxekiE8cTmuZUgxFWWaVw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Ecuaciones con valor absoluto
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "|x-3|=7 → x=___ o x=___" → 10, -4
P2 (Fill): "|2x+1|=9 → x=___ o x=___" → 4, -5
P3 (MC): "|x+2|=-3 tiene:" → 0 soluciones
P4 (MC): "|x-5|=0 → x=___" → 5
P5 (Fill): "|d-50|=0.02 → d=___ o d=___" → 50.02, 49.98
P6 (T/F): "|f(x)|=k con k<0: sin solucion." → Verdadero
P7 (Fill): "|x-1|=|2x+4| → x=___ o x=___" → -5, -1
P8 (MC ingeniería): "Resolver |L-L0|=δ da:" → Cotas limite
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Forma
  - Resolución
* - $|f(x)| = k$, $k > 0$
  - $f(x) = k$ o $f(x) = -k$
* - $|f(x)| = 0$
  - $f(x) = 0$ (una solución)
* - $|f(x)| = k$, $k < 0$
  - Sin solución real
* - $|f(x)| = |g(x)|$
  - $f(x)=g(x)$ o $f(x)=-g(x)$
* - Verificación
  - Sustituir en ecuación original
* - Ingeniería
  - Tolerancias simétricas; cotas límite $|L-L_0|=\delta$
```

:::{admonition} Siguiente clase
:class: tip
Ya resuelves ecuaciones con valor absoluto. En la siguiente clase trabajarás **desigualdades** $|f(x)| < k$ y $|f(x)| > k$ — la base formal de las tolerancias.

➡️ [Ir a S16·C3 Desigualdades con valor absoluto](s16_c3_desigualdades_valor_absoluto.md)
:::
