---
title: "S16·C1 Valor absoluto e interpretación gráfica"
---

# S16·C1 Valor absoluto e interpretación gráfica

:::{admonition} 🔧 Error absoluto en un micrómetro digital
:class: ingenieria

Un micrómetro mide $d = 25.47$ mm y el valor nominal de la pieza es $d_0 = 25.50$ mm. El **error absoluto** es:

$$|d - d_0| = |25.47 - 25.50| = |-0.03| = 0.03 \text{ mm}$$

El valor absoluto expresa la **distancia** entre la medición y el nominal, sin importar si la pieza quedó corta o larga. En control de calidad, $|d - d_0| \leq t$ define la banda de tolerancia aceptable.
:::

**Pregunta detonadora**

> ¿Por qué $|{-5}| = 5$ y no $-5$? ¿Qué representa geométricamente el valor absoluto?

---

## Teoría

### Definición

El **valor absoluto** de un número real $x$, denotado $|x|$, es su **distancia al cero** en la recta numérica:

$$|x| = \begin{cases} x & \text{si } x \geq 0 \\ -x & \text{si } x < 0 \end{cases}$$

**Ejemplos:**

$$|5| = 5 \qquad |-5| = 5 \qquad |0| = 0 \qquad \left|-\dfrac{3}{4}\right| = \dfrac{3}{4}$$

---

### Interpretación geométrica

En la recta numérica, $|a - b|$ es la **distancia** entre $a$ y $b$:

$$|a - b| = \text{distancia entre } a \text{ y } b$$

Si $d_0 = 25.50$ mm y $d = 25.47$ mm, entonces $|d - d_0| = 0.03$ mm es la desviación respecto al nominal.

---

### Propiedades fundamentales

| Propiedad | Enunciado | Ejemplo |
|-----------|-----------|---------|
| No negatividad | $|x| \geq 0$ | $|-7| = 7 \geq 0$ |
| Simetría | $|-x| = |x|$ | $|-4| = |4| = 4$ |
| Producto | $|ab| = |a| \cdot |b|$ | $|(-3)(4)| = 12$ |
| Cociente | $\left|\dfrac{a}{b}\right| = \dfrac{|a|}{|b|}$ ($b \neq 0$) | $\left|-\dfrac{6}{2}\right| = 3$ |
| Desigualdad triangular | $|a + b| \leq |a| + |b|$ | $|3 + (-5)| = 2 \leq 3 + 5$ |

**Desigualdad triangular en ingeniería:** la magnitud de una suma de fuerzas no supera la suma de magnitudes individuales.

---

### Ecuación fundamental

$$|x| = a \quad (a \geq 0) \quad \Rightarrow \quad x = a \text{ o } x = -a$$

Si $a < 0$, no hay solución real (distancia no puede ser negativa).

---

### Gráfica de $f(x) = |x|$

La función valor absoluto tiene forma de **V** con vértice en el origen:

- Si $x \geq 0$: $f(x) = x$ (recta con pendiente 1)
- Si $x < 0$: $f(x) = -x$ (recta con pendiente $-1$)

---

### Transformaciones: $f(x) = |x - h| + k$

| Parámetro | Efecto | Vértice |
|-----------|--------|:-------:|
| $h$ | Traslación horizontal | $(h, k)$ |
| $k$ | Traslación vertical | $(h, k)$ |

**Ejemplo:** $f(x) = |x - 3| + 2$ — vértice en $(3, 2)$; la V se abre hacia arriba.

En metrología, $|x - d_0|$ modela desviación respecto al nominal $d_0$.

```{warning}
Errores frecuentes con valor absoluto:

- Confundir $|-5|$ con $-5$ — el resultado es **siempre** $\geq 0$
- Olvidar que $|a + b| \neq |a| + |b|$ en general (ejemplo: $|3 + (-5)| = 2 \neq 8$)
- En $|x - h|$, el vértice está en $x = h$, no en $x = -h$
```

:::{admonition} 🔧 Ingeniería — desviación respecto al nominal
:class: ingenieria

Si el diámetro nominal es $d_0 = 40$ mm y la tolerancia es $\pm 0.05$ mm, la condición de aceptación es:

$$|d - 40| \leq 0.05 \quad \Leftrightarrow \quad 39.95 \leq d \leq 40.05 \text{ mm}$$

La gráfica de $f(d) = |d - 40|$ tiene vértice en $(40, 0)$: mide cuánto se aleja cada medición del valor de diseño.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_VALOR_ABSOLUTO"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Distancia al cero en recta numérica: |5|=5, |-5|=5
2. Propiedades: |x|≥0, |-x|=|x|, |ab|=|a||b|
3. Desigualdad triangular con ejemplo numérico
4. Gráfica de f(x)=|x| — forma de V
5. Transformación |x-h|+k: vértice en (h,k)
6. Error absoluto |d-d0| en micrómetro
```

---

## Visualización interactiva

Ajusta $h$ y $k$ en $f(x) = |x - h| + k$ y observa cómo se mueve el vértice.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s16c1-valor-abs" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s16c1-valor-abs', {
            boundingbox: [-6, 10, 8, -2],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slH = board.create('slider', [[-5, 9], [0, 9], [-4, 0, 6]], {
            name: 'h', snapWidth: 0.5, fillColor: '#1d4ed8' });
        var slK = board.create('slider', [[-5, 7.5], [0, 7.5], [-2, 2, 6]], {
            name: 'k', snapWidth: 0.5, fillColor: '#c2410c' });
        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var h = slH.Value(), k = slK.Value();
            var f = function(x) { return Math.abs(x - h) + k; };
            dinamicos.push(board.create('functiongraph', [f, -6, 8], {
                strokeColor: '#1d4ed8', strokeWidth: 2.5
            }));
            dinamicos.push(board.create('point', [h, k], {
                size: 5, fillColor: '#16a34a', strokeColor: '#16a34a',
                name: 'V(' + h.toFixed(1) + ',' + k.toFixed(1) + ')',
                label: { fontSize: 11, offset: [10, 10] }
            }));
            dinamicos.push(board.create('text', [4, 8.5,
                'f(x) = |x - ' + h.toFixed(1) + '| + ' + k.toFixed(1)], {
                fontSize: 13, color: '#374151', fontWeight: 'bold'
            }));
            dinamicos.push(board.create('text', [4, 7.5,
                'Nominal h = ' + h.toFixed(1) + ', offset k = ' + k.toFixed(1)], {
                fontSize: 11, color: '#6b7280', fontStyle: 'italic'
            }));
        }

        slH.on('drag', dibujar);
        slK.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Deslizadores $h$ y $k$ mueven el vértice de $|x-h|+k$ en tiempo real. Conecta traslaciones con desviación respecto a un nominal ($h$) y offset de instrumento ($k$).
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfrBVj5iGh55mlvpbRiwta5Tb_E5VP_ERpRDdae4ywxlrx1nw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Valor absoluto e interpretación gráfica
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "|-7| = ___" → 7
P2 (MC): "|x| representa:" → Distancia al cero
P3 (T/F): "|-x| = |x|" → Verdadero
P4 (Fill): "|3-5| = ___" → 2
P5 (MC): "Vértice de |x-3|+2:" → (3, 2)
P6 (MC): "|a+b| ≤ |a|+|b| es:" → Desigualdad triangular
P7 (MC ingeniería): "|d-25.5|=0.03 significa:" → Error absoluto 0.03 mm
P8 (T/F): "|x|=-5 tiene solucion real." → Falso
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Definición
  - $|x|$ = distancia de $x$ al cero
* - $|x| \geq 0$
  - Siempre no negativo; $|0| = 0$
* - $|-x| = |x|$
  - Simetría respecto al cero
* - $|ab| = |a||b|$
  - Valor absoluto del producto
* - Desigualdad triangular
  - $|a+b| \leq |a| + |b|$
* - $f(x)=|x-h|+k$
  - Vértice en $(h,k)$; desviación respecto al nominal
* - Ingeniería
  - Error absoluto, tolerancias, instrumentos de medición
```

:::{admonition} Siguiente clase
:class: tip
Ya interpretas el valor absoluto y su gráfica. En la siguiente clase resolverás **ecuaciones** con valor absoluto separando en dos casos.

➡️ [Ir a S16·C2 Ecuaciones con valor absoluto](s16_c2_ecuaciones_valor_absoluto.md)
:::
