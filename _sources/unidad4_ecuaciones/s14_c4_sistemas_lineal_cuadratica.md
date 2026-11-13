---
title: "S14·C4 Sistemas con una ecuación lineal y una cuadrática"
---

# S14·C4 Sistemas con una ecuación lineal y una cuadrática

:::{admonition} 🔧 Punto de operación lineal y cuadrático
:class: ingenieria

Un sistema mecánico cumple simultáneamente:

$$\begin{cases} P + Q = 100 \quad \text{(balance de flujo, lineal)} \\ PQ = 2400 \quad \text{(potencia, cuadrática)} \end{cases}$$

De la lineal: $Q = 100 - P$. Sustituir en la cuadrática:

$$P(100 - P) = 2400 \quad \Rightarrow \quad P^2 - 100P + 2400 = 0$$

Los puntos de operación son las intersecciones de una **recta** y una **parábola**.
:::

**Pregunta detonadora**

> ¿Cuántos puntos de intersección pueden tener una recta y una parábola? ¿Qué significa cada caso en un sistema mixto?

---

## Teoría

### Forma del sistema

$$\begin{cases} ax + by = c \quad \text{(lineal)} \\ dx^2 + ey^2 + \ldots = f \quad \text{(cuadrática)} \end{cases}$$

**Método:** sustitución — despejar una incógnita de la ecuación lineal e insertar en la cuadrática.

---

### Ejemplo 1 — Dos soluciones

$$\begin{cases} y = x + 1 \\ y = x^2 - 2x + 3 \end{cases}$$

Sustituir: $x + 1 = x^2 - 2x + 3$

$$x^2 - 3x + 2 = 0 \quad \Rightarrow \quad (x-1)(x-2) = 0 \quad \Rightarrow \quad x = 1, 2$$

$y = 2$ e $y = 3$. **Soluciones:** $(1, 2)$ y $(2, 3)$ — dos puntos de intersección.

---

### Ejemplo 2 — Una solución (tangencia)

$$\begin{cases} y = 2x - 1 \\ y = x^2 \end{cases}$$

$$2x - 1 = x^2 \quad \Rightarrow \quad x^2 - 2x + 1 = 0 \quad \Rightarrow \quad (x-1)^2 = 0$$

$x = 1$, $y = 1$. **Un solo punto:** $(1, 1)$ — la recta es tangente a la parábola ($\Delta = 0$).

---

### Ejemplo 3 — Sin solución real

$$\begin{cases} y = x + 5 \\ y = x^2 + 1 \end{cases}$$

$$x^2 + 1 = x + 5 \quad \Rightarrow \quad x^2 - x - 4 = 0$$

$\Delta = 1 + 16 = 17 > 0$ → dos soluciones: $x = \dfrac{1 \pm \sqrt{17}}{2}$ — **sí hay intersección**.

Para **sin solución:** $y = x + 10$, $y = x^2$ → $x^2 - x - 10 = 0$ tiene soluciones reales. Mejor: $y = -x + 1$, $y = x^2 + 3$ → $x^2 + x - 2 = 0$ → $x = 1$, $x = -2$ (sí hay).

**Sin solución real:** $y = x$, $y = x^2 + 1$ → $x^2 - x + 1 = 0$, $\Delta = -3 < 0$ → **ninguna** intersección.

---

### Interpretación gráfica

| Intersecciones | Sistema | Gráfica |
|:--------------:|---------|---------|
| 0 | Sin solución real | Recta no corta parábola |
| 1 | Una solución (tangente) | Recta toca parábola |
| 2 | Dos soluciones | Recta secante a parábola |

---

### Problema de ingeniería

$$\begin{cases} x + y = 100 \\ xy = 2400 \end{cases}$$

$y = 100 - x$. Sustituir: $x(100-x) = 2400$

$$x^2 - 100x + 2400 = 0 \quad \Rightarrow \quad (x-40)(x-60) = 0$$

$x = 40$, $y = 60$ o $x = 60$, $y = 40$ — dos puntos de operación posibles.

```{warning}
Tras sustituir, la ecuación resultante en una incógnita suele ser **cuadrática**. Calcula $\Delta$ para anticipar cuántas soluciones reales tendrá el sistema antes de resolver completamente.
```

:::{admonition} 🔧 Ingeniería — comportamiento mixto
:class: ingenieria

En un proceso con restricción lineal de recursos ($x + y = \text{capacidad}$) y relación cuadrática de rendimiento ($xy = k$), el sistema mixto da los **puntos de operación** donde ambas condiciones se cumplen. El ingeniero elige el punto según criterios de eficiencia o seguridad.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_SISTEMA_LINEAL_CUADRATICA"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Sistema y=x+1, y=x²-2x+3 → (1,2) y (2,3)
2. Grafico: recta y parabola, dos intersecciones
3. Caso tangente: una solucion
4. Caso Δ<0: sin interseccion
5. Problema x+y=100, xy=2400
6. Pasos: despejar de lineal → sustituir en cuadratica
```

---

## Visualización interactiva

Ajusta la recta $y = mx + b$ y observa cuántas intersecciones tiene con $y = x^2 - 2x + 3$.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s14c4-lineal-cuad" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s14c4-lineal-cuad', {
            boundingbox: [-2, 10, 8, -2],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slM = board.create('slider', [[-1, 9], [3, 9], [-2, 1, 3]], { name: 'm', snapWidth: 0.25, fillColor: '#c2410c' });
        var slB = board.create('slider', [[-1, 8], [3, 8], [-2, 1, 5]], { name: 'b', snapWidth: 0.25, fillColor: '#c2410c' });
        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var m = slM.Value(), b = slB.Value();
            var par = function(x) { return x*x - 2*x + 3; };
            var lin = function(x) { return m*x + b; };

            dinamicos.push(board.create('functiongraph', [par, -2, 8], { strokeColor: '#1d4ed8', strokeWidth: 2.5 }));
            dinamicos.push(board.create('functiongraph', [lin, -2, 8], { strokeColor: '#c2410c', strokeWidth: 2 }));

            var A = 1, B = -2-m, C = 3-b;
            var disc = B*B - 4*A*C;
            var nSol;
            if (disc > 0.01) {
                nSol = '2 intersecciones';
                var sd = Math.sqrt(disc);
                var x1 = (-B-sd)/2, x2 = (-B+sd)/2;
                dinamicos.push(board.create('point', [x1, lin(x1)], { size: 4, fillColor: '#16a34a', strokeColor: '#16a34a' }));
                dinamicos.push(board.create('point', [x2, lin(x2)], { size: 4, fillColor: '#16a34a', strokeColor: '#16a34a' }));
            } else if (Math.abs(disc) <= 0.01) {
                nSol = '1 interseccion (tangente)';
                var xt = -B/2;
                dinamicos.push(board.create('point', [xt, lin(xt)], { size: 4, fillColor: '#ca8a04', strokeColor: '#ca8a04' }));
            } else {
                nSol = '0 intersecciones';
            }

            dinamicos.push(board.create('text', [4, 1, nSol + ' (Δ=' + disc.toFixed(2) + ')'], {
                fontSize: 12, color: disc >= 0 ? '#16a34a' : '#dc2626', fontWeight: 'bold'
            }));
        }

        slM.on('drag', dibujar); slB.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Parábola fija $y=x^2-2x+3$ y recta ajustable $y=mx+b$. Muestra intersecciones y $\Delta$ de la cuadrática resultante. El estudiante ve 0, 1 o 2 soluciones al mover la recta.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScQRde-72knYrWN1VTRQsdLtU2hixzjeBl7ADdnf3iIaKBiJw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Sistemas lineal-cuadrática
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "y=x+1, y=x²-2x+3 → (x,y)=(1,___)" → 2
P2 (MC): "Metodo principal:" → Sustitucion desde ecuacion lineal
P3 (Fill): "x+y=100, xy=2400 → x=___ o x=___" → 40, 60
P4 (MC): "Recta tangente a parabola → ___ soluciones" → 1
P5 (T/F): "Puede haber 0 soluciones reales." → Verdadero
P6 (MC): "Graficamente:" → Interseccion recta y parabola
P7 (MC ingeniería): "x+y=capacidad, xy=k modela:" → Punto de operacion
P8 (Fill): "y=x, y=x²+1 → Δ=___" → -3
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Sistema mixto
  - Una ecuación lineal + una cuadrática
* - Método
  - Despejar de la lineal → sustituir en cuadrática
* - 0 soluciones
  - Recta no corta parábola ($\Delta < 0$)
* - 1 solución
  - Tangencia ($\Delta = 0$)
* - 2 soluciones
  - Secante ($\Delta > 0$)
* - Ingeniería
  - Punto de operación con restricción lineal y relación cuadrática
```

:::{admonition} Siguiente clase
:class: tip
Ya resuelves sistemas lineal-cuadráticos. En la siguiente clase practicarás **aplicación y verificación** de todos los métodos cuadráticos en autogestión.

➡️ [Ir a S14·Auto Ejercicios de aplicación y verificación](s14_auto_aplicacion_verificacion.md)
:::
