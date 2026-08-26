---
title: "S14·C1 Fórmula general"
---

# S14·C1 Fórmula general

:::{admonition} 🔧 Frecuencia natural de vibración
:class: ingenieria

Un sistema masa-resorte tiene ecuación característica:

$$m\omega^2 + c\omega + k = 0$$

Con $m = 2$ kg, $c = 6$ N·s/m y $k = 4$ N/m, la frecuencia natural $\omega$ satisface:

$$2\omega^2 + 6\omega + 4 = 0 \quad \Rightarrow \quad \omega^2 + 3\omega + 2 = 0$$

La **fórmula general** resuelve cualquier cuadrática de forma directa — esencial en vibraciones, rotores críticos y tiempos de caída.
:::

**Pregunta detonadora**

> En $x^2 - 5x + 6 = 0$, ¿cuánto vale el discriminante $\Delta = b^2 - 4ac$? ¿Qué te indica sobre el número de soluciones?

---

## Teoría

### La fórmula cuadrática

Para $ax^2 + bx + c = 0$ con $a \neq 0$:

$$\boxed{x = \frac{-b \pm \sqrt{b^2 - 4ac}}{2a}}$$

Esta fórmula se obtiene completando el cuadrado (S13·C4) y funciona **siempre**, sin importar si la ecuación factoriza fácilmente.

---

### El discriminante

$$\Delta = b^2 - 4ac$$

El discriminante determina el **número y tipo** de soluciones reales:

| Condición | Soluciones reales | Interpretación gráfica |
|-----------|:-----------------:|------------------------|
| $\Delta > 0$ | **2** distintas | Parábola corta el eje $x$ en dos puntos |
| $\Delta = 0$ | **1** (doble) | Parábola toca el eje $x$ en un punto |
| $\Delta < 0$ | **0** | Parábola no corta el eje $x$ |

---

### Ejemplo 1 — $\Delta > 0$

$$x^2 - 5x + 6 = 0 \quad (a=1,\ b=-5,\ c=6)$$

$$\Delta = (-5)^2 - 4(1)(6) = 25 - 24 = 1 > 0$$

$$x = \frac{5 \pm \sqrt{1}}{2} = \frac{5 \pm 1}{2} \quad \Rightarrow \quad x = 3 \text{ o } x = 2$$

---

### Ejemplo 2 — $\Delta = 0$

$$x^2 - 4x + 4 = 0$$

$$\Delta = 16 - 16 = 0 \quad \Rightarrow \quad x = \frac{4 \pm 0}{2} = 2 \text{ (raíz doble)}$$

---

### Ejemplo 3 — $\Delta < 0$

$$x^2 + 2x + 5 = 0$$

$$\Delta = 4 - 20 = -16 < 0 \quad \Rightarrow \quad \text{sin soluciones reales}$$

---

### Ejemplo 4 — Coeficientes no unitarios

$$3x^2 - 2x - 1 = 0$$

$$\Delta = 4 + 12 = 16 \quad \Rightarrow \quad x = \frac{2 \pm 4}{6} = 1 \text{ o } x = -\frac{1}{3}$$

```{warning}
Errores frecuentes con la fórmula general:

- Olvidar el signo de $b$ en $-b$: si $b = -5$, entonces $-b = +5$
- Poner $b^2 - 4ac$ con signo incorrecto en $c$ negativo
- Dividir solo el numerador entre $2a$ y olvidar el $\pm$
- No simplificar $\sqrt{\Delta}$ cuando es cuadrado perfecto
```

---

### Aplicaciones en ingeniería

**Velocidad crítica de un rotor** — ecuación de pandeo:

$$v^2 - 120v + 2000 = 0 \quad \Rightarrow \quad v = \frac{120 \pm \sqrt{6400}}{2} \approx 46.1 \text{ o } 43.4 \text{ m/s}$$

**Tiempo de caída** — $h = h_0 - \frac{1}{2}gt^2$ con $h = 0$:

$$5t^2 - 50 = 0 \quad \Rightarrow \quad t = \sqrt{10} \approx 3.16 \text{ s}$$

**Frecuencia natural** — $\omega^2 + 3\omega + 2 = 0$:

$$\omega = \frac{-3 \pm 1}{2} \quad \Rightarrow \quad \omega = -1 \text{ o } \omega = -2 \text{ rad/s}$$

:::{admonition} 🔧 Ingeniería — interpretar $\Delta$ en diseño
:class: ingenieria

Si $\Delta < 0$ en una ecuación de tiempo o velocidad, **no hay solución física real** con los parámetros dados — hay que revisar el modelo o los datos. Si $\Delta = 0$, el sistema está en un **punto crítico** (transición entre dos regímenes). Si $\Delta > 0$, existen dos escenarios posibles — evalúa cuál tiene sentido físico.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_FORMULA_GENERAL"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Formula x=(-b±√(b²-4ac))/(2a)
2. Calcular Δ en x²-5x+6=0 → Δ=1 → x=3, x=2
3. Caso Δ=0: x²-4x+4=0 → raiz doble
4. Caso Δ<0: x²+2x+5=0 → sin solucion real
5. Aplicacion: frecuencia natural ω²+3ω+2=0
6. Interpretar Δ en contexto de ingenieria
```

---

## Visualización interactiva

Ajusta $a$, $b$ y $c$ y observa la parábola junto con $\Delta$ y las raíces calculadas por la fórmula general.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s14c1-formula" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s14c1-formula', {
            boundingbox: [-6, 10, 8, -6],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slA = board.create('slider', [[-5, 9], [0, 9], [-2, 1, 2]], { name: 'a', snapWidth: 0.25, fillColor: '#1d4ed8' });
        var slB = board.create('slider', [[-5, 7.5], [0, 7.5], [-8, -5, 8]], { name: 'b', snapWidth: 0.5, fillColor: '#c2410c' });
        var slC = board.create('slider', [[-5, 6], [0, 6], [-6, 6, 6]], { name: 'c', snapWidth: 0.5, fillColor: '#16a34a' });
        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var a = slA.Value(), b = slB.Value(), c = slC.Value();
            if (Math.abs(a) < 0.05) return;

            var f = function(x) { return a*x*x + b*x + c; };
            dinamicos.push(board.create('functiongraph', [f, -6, 8], { strokeColor: '#1d4ed8', strokeWidth: 2.5 }));

            var disc = b*b - 4*a*c;
            var tipo, col;
            if (disc > 0.01) {
                tipo = 'Δ > 0: 2 soluciones';
                col = '#16a34a';
                var sd = Math.sqrt(disc);
                var x1 = (-b - sd)/(2*a), x2 = (-b + sd)/(2*a);
                dinamicos.push(board.create('point', [x1, 0], { size: 4, fillColor: col, strokeColor: col, name: 'x₁' }));
                dinamicos.push(board.create('point', [x2, 0], { size: 4, fillColor: col, strokeColor: col, name: 'x₂' }));
            } else if (Math.abs(disc) <= 0.01) {
                tipo = 'Δ = 0: 1 solucion';
                col = '#ca8a04';
                dinamicos.push(board.create('point', [-b/(2*a), 0], { size: 4, fillColor: col, strokeColor: col, name: 'x' }));
            } else {
                tipo = 'Δ < 0: 0 soluciones reales';
                col = '#dc2626';
            }

            dinamicos.push(board.create('text', [4, 8, 'Δ = ' + disc.toFixed(2)], { fontSize: 13, color: col, fontWeight: 'bold' }));
            dinamicos.push(board.create('text', [4, 7, tipo], { fontSize: 12, color: col }));
            if (disc >= 0) {
                var sd2 = Math.sqrt(Math.max(0, disc));
                var x1f = (-b - sd2)/(2*a), x2f = (-b + sd2)/(2*a);
                dinamicos.push(board.create('text', [4, 6,
                    'x = (' + (-b).toFixed(1) + ' ± ' + sd2.toFixed(2) + ') / ' + (2*a).toFixed(1)], { fontSize: 10, color: '#374151' }));
            }
        }

        slA.on('drag', dibujar); slB.on('drag', dibujar); slC.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Tres deslizadores para $a$, $b$, $c$. Calcula $\Delta$ en tiempo real, clasifica el tipo de solución y marca las raíces. Conecta la fórmula general con la gráfica de la parábola.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeHRm51pIOz0n5rqotPitYapiz0bPhHtrKyN-mu77O_6f87HQ/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Fórmula general
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "x²-5x+6=0 → Δ=___" → 1
P2 (MC): "Δ>0 implica:" → 2 soluciones reales
P3 (Fill): "x²-4x+4=0 → x=___" → 2
P4 (MC): "Δ<0 implica:" → 0 soluciones reales
P5 (Fill): "3x²-2x-1=0 → x=1 o x=___" → -1/3
P6 (T/F): "La formula general se deriva completando el cuadrado." → Verdadero
P7 (MC ingeniería): "Δ<0 en ecuacion de tiempo significa:" → No hay solucion fisica real
P8 (Fill): "ω²+3ω+2=0 → ω=___ o ω=___" → -1, -2
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Fórmula general
  - $x = \dfrac{-b \pm \sqrt{b^2-4ac}}{2a}$
* - Discriminante
  - $\Delta = b^2 - 4ac$
* - $\Delta > 0$
  - Dos soluciones reales distintas
* - $\Delta = 0$
  - Una solución (raíz doble)
* - $\Delta < 0$
  - Sin soluciones reales
* - Ingeniería
  - Frecuencia natural, velocidad crítica, tiempo de caída
```

:::{admonition} Siguiente clase
:class: tip
Ya resuelves cuadráticas con la fórmula general. En la siguiente clase trabajarás **ecuaciones con radicales**, elevando al cuadrado con verificación obligatoria.

➡️ [Ir a S14·C2 Ecuaciones con radicales](s14_c2_ecuaciones_con_radicales.md)
:::
