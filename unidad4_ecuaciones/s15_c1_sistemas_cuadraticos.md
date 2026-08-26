---
title: "S15·C1 Sistemas de ecuaciones cuadráticas"
---

# S15·C1 Sistemas de ecuaciones cuadráticas

:::{admonition} 🔧 Dos trayectorias parabólicas que se cruzan
:class: ingenieria

Dos piezas lanzadas siguen:

$$h_1 = -5t^2 + 20t \quad \text{y} \quad h_2 = -5t^2 + 15t + 6$$

¿Cuándo están a la misma altura? Igualar:

$$-5t^2 + 20t = -5t^2 + 15t + 6 \quad \Rightarrow \quad 5t = 6 \quad \Rightarrow \quad t = 1.2 \text{ s}$$

Un **sistema cuadrático** busca puntos donde dos relaciones cuadráticas se cumplen simultáneamente — intersección de dos parábolas.
:::

**Pregunta detonadora**

> ¿Cuántos puntos de intersección pueden tener dos parábolas distintas en el plano?

---

## Teoría

### ¿Qué es un sistema cuadrático?

$$\begin{cases} ax^2 + by^2 + cxy + dx + ey + f = 0 \\ a'x^2 + b'y^2 + c'xy + d'x + e'y + f' = 0 \end{cases}$$

En esta unidad nos enfocamos en sistemas $2 \times 2$ donde **ambas** ecuaciones son cuadráticas (o una lineal y una cuadrática, ya visto en S14·C4).

**Solución:** par $(x, y)$ que satisface **ambas** ecuaciones.

---

### Método de sustitución

| Paso | Acción |
|:----:|--------|
| 1 | Despejar una incógnita de la ecuación más simple |
| 2 | Sustituir en la otra ecuación |
| 3 | Resolver (puede resultar ecuación de grado 4 en una variable) |
| 4 | Obtener las parejas $(x, y)$ y verificar |

---

### Ejemplo 1 — Una ecuación factorizable

$$\begin{cases} x^2 + y^2 = 25 \\ x + y = 7 \end{cases}$$

De la segunda: $y = 7 - x$. Sustituir:

$$x^2 + (7-x)^2 = 25 \quad \Rightarrow \quad 2x^2 - 14x + 24 = 0 \quad \Rightarrow \quad x^2 - 7x + 12 = 0$$

$$(x-3)(x-4)=0 \quad \Rightarrow \quad (3,4) \text{ y } (4,3)$$

**Dos puntos** — dos parábolas/circunferencia y recta (caso mixto).

---

### Ejemplo 2 — Dos parábolas

$$\begin{cases} y = x^2 \\ y = 2x + 3 \end{cases}$$

(Sistema mixto) $x^2 = 2x + 3$ → $x = -1$, $x = 3$ → $(-1,1)$, $(3,9)$.

**Sistema puramente cuadrático:**

$$\begin{cases} y = x^2 - 2 \\ y = -x^2 + 4 \end{cases}$$

$$x^2 - 2 = -x^2 + 4 \quad \Rightarrow \quad 2x^2 = 6 \quad \Rightarrow \quad x = \pm\sqrt{3}$$

Puntos: $(\sqrt{3}, 1)$ y $(-\sqrt{3}, 1)$ — **dos intersecciones**.

---

### Interpretación gráfica

Dos cónicas (parábolas, elipses, hipérbolas) pueden intersectarse en **0, 1, 2, 3 o 4** puntos (en el plano real).

| Intersecciones | Configuración típica |
|:--------------:|---------------------|
| 0 | No se cruzan |
| 1 | Tangencia |
| 2 | Secantes (caso más común) |
| 3–4 | Configuraciones especiales |

---

### Método gráfico

1. Despejar $y$ en ambas ecuaciones (si es posible)
2. Graficar las dos curvas
3. Leer coordenadas de los puntos de cruce

:::{admonition} 🔧 Ingeniería — trayectorias cruzadas
:class: ingenieria

Si $h_1(t) = -5t^2 + 20t$ e $h_2(t) = -5t^2 + 15t + 6$, igualar alturas da ecuación **lineal** en $t$ (los términos $t^2$ se cancelan). Esto ocurre cuando ambas trayectorias tienen la misma aceleración vertical — el cruce se reduce a una ecuación de primer grado.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_SISTEMAS_CUADRATICOS"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Sistema x²+y²=25, x+y=7 → (3,4) y (4,3)
2. Dos parabolas y=x²-2 e y=-x²+4
3. Grafico con 0, 1, 2 intersecciones
4. Metodo sustitucion paso a paso
5. Trayectorias h1 y h2 iguales en t=1.2 s
6. Hasta 4 puntos de interseccion posibles
```

---

## Visualización interactiva

Ajusta dos parábolas $y = ax^2 + c$ e $y = bx^2 + d$ y observa las intersecciones.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s15c1-sist-cuad" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s15c1-sist-cuad', {
            boundingbox: [-5, 12, 5, -5],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slA1 = board.create('slider', [[-4, 11], [0, 11], [-2, 1, 2]], { name: 'a1', snapWidth: 0.25, fillColor: '#1d4ed8' });
        var slC1 = board.create('slider', [[-4, 10], [0, 10], [-4, -2, 4]], { name: 'c1', snapWidth: 0.25, fillColor: '#1d4ed8' });
        var slA2 = board.create('slider', [[1, 11], [4, 11], [-2, -1, 2]], { name: 'a2', snapWidth: 0.25, fillColor: '#c2410c' });
        var slC2 = board.create('slider', [[1, 10], [4, 10], [-4, 4, 4]], { name: 'c2', snapWidth: 0.25, fillColor: '#c2410c' });
        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var a1 = slA1.Value(), c1 = slC1.Value(), a2 = slA2.Value(), c2 = slC2.Value();
            var f1 = function(x) { return a1*x*x + c1; };
            var f2 = function(x) { return a2*x*x + c2; };
            dinamicos.push(board.create('functiongraph', [f1, -5, 5], { strokeColor: '#1d4ed8', strokeWidth: 2.5 }));
            dinamicos.push(board.create('functiongraph', [f2, -5, 5], { strokeColor: '#c2410c', strokeWidth: 2.5 }));

            var A = a1 - a2, C = c1 - c2;
            if (Math.abs(A) < 0.01) {
                dinamicos.push(board.create('text', [0, -3, 'Parabolas paralelas (misma apertura)'], { fontSize: 11, color: '#6b7280', anchorX: 'middle' }));
                return;
            }
            var xs = Math.sqrt(-C/A);
            if (C/A <= 0) {
                [-xs, xs].forEach(function(x) {
                    if (!isNaN(x)) {
                        dinamicos.push(board.create('point', [x, f1(x)], { size: 4, fillColor: '#16a34a', strokeColor: '#16a34a' }));
                    }
                });
                dinamicos.push(board.create('text', [0, -3, C/A <= 0 ? '2 intersecciones' : '0 intersecciones'], { fontSize: 11, color: '#16a34a', anchorX: 'middle' }));
            } else {
                dinamicos.push(board.create('text', [0, -3, '0 intersecciones reales'], { fontSize: 11, color: '#dc2626', anchorX: 'middle' }));
            }
        }

        slA1.on('drag', dibujar); slC1.on('drag', dibujar);
        slA2.on('drag', dibujar); slC2.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Cuatro deslizadores para $y=a_1x^2+c_1$ e $y=a_2x^2+c_2$. Marca intersecciones en verde. El estudiante explora cuándo hay 0 o 2 cruces al mover las parábolas.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfhkCAimkdz3tD76MWJddZIXrPXLdbQ_ZLLgsmCT99BJEXKJg/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Sistemas cuadráticos
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "x²+y²=25, x+y=7 → (3,___)" → 4
P2 (MC): "Metodo principal:" → Sustitucion
P3 (Fill): "y=x², y=2x+3 → x=___ o x=___" → -1, 3
P4 (MC): "Dos parabolas pueden intersectarse en max:" → 4 puntos (plano real)
P5 (T/F): "Grafico muestra intersecciones de curvas." → Verdadero
P6 (Fill): "y=x²-2, y=-x²+4 → x=±___" → √3
P7 (MC ingeniería): "Igualar h1=h2 busca:" → Instante de misma altura
P8 (MC): "0 intersecciones significa:" → Sistema sin solucion real
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Sistema cuadrático
  - Dos ecuaciones de grado 2 con dos incógnitas
* - Sustitución
  - Despejar → sustituir → resolver → verificar
* - Gráfico
  - Intersección de dos cónicas
* - Intersecciones
  - 0, 1, 2, 3 o 4 puntos (reales)
* - Ingeniería
  - Trayectorias que se cruzan, puntos de operación cuadráticos
```

:::{admonition} Siguiente clase
:class: tip
Ya resuelves sistemas cuadráticos. En la siguiente clase estudiarás **funciones polinomiales de grado $n$** y su comportamiento global.

➡️ [Ir a S15·C2 Función polinomial de grado n](s15_c2_funcion_polinomial_grado_n.md)
:::
