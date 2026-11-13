---
title: "S15·C2 Función polinomial de grado n"
---

# S15·C2 Función polinomial de grado n

:::{admonition} 🔧 Curva de rendimiento de un motor
:class: ingenieria

La potencia de un motor (kW) en función de la velocidad angular $\omega$ (rad/s) se modela con un polinomio:

$$P(\omega) = -0.02\omega^3 + 0.5\omega^2 + 2\omega$$

Es una **función polinomial de grado 3**. Conocer su grado, coeficiente líder y raíces permite predecir rendimiento, calibrar sensores y analizar perfiles de temperatura en procesos térmicos.
:::

**Pregunta detonadora**

> En $P(x) = 2x^4 - 3x^2 + x - 5$, ¿cuál es el grado? ¿Cuál es el coeficiente líder?

---

## Teoría

### Definición

Una **función polinomial** de grado $n$ tiene la forma:

$$P(x) = a_n x^n + a_{n-1} x^{n-1} + \cdots + a_1 x + a_0 \quad (a_n \neq 0)$$

| Elemento | Descripción |
|----------|-------------|
| **Grado** $n$ | Mayor exponente de $x$ |
| **Coeficiente líder** $a_n$ | Coeficiente de $x^n$ |
| **Término independiente** $a_0$ | Constante (valor en $x=0$) |

---

### Ejemplos

| Polinomio | Grado | Coef. líder | Término ind. |
|-----------|:-----:|:-----------:|:------------:|
| $3x^2 - 5x + 1$ | 2 | $3$ | $1$ |
| $-x^4 + 2x$ | 4 | $-1$ | $0$ |
| $5$ | 0 | $5$ | $5$ |

---

### Comportamiento en los extremos

Para $|x|$ muy grande, domina el término $a_n x^n$:

| Grado $n$ | $a_n > 0$ | $a_n < 0$ |
|:---------:|:---------:|:---------:|
| **Par** | $x \to \pm\infty$: $P \to +\infty$ | $P \to -\infty$ |
| **Impar** | $x \to +\infty$: $+\infty$; $x \to -\infty$: $-\infty$ | $x \to +\infty$: $-\infty$; $x \to -\infty$: $+\infty$ |

**Ejemplo:** $P(x) = -2x^4 + x^2 + 3$ — grado par, $a_n < 0$ → $P \to -\infty$ cuando $|x| \to \infty$.

---

### Raíces reales

Una **raíz** (o cero) es un valor $r$ tal que $P(r) = 0$.

**Gráficamente:** intersecciones con el eje $x$.

Un polinomio de grado $n$ tiene **como máximo** $n$ raíces reales.

**Ejemplo:** $P(x) = x^3 - 4x = x(x-2)(x+2)$ — raíces $-2, 0, 2$ (tres raíces reales).

---

### Aplicaciones en ingeniería

| Contexto | Polinomio típico |
|----------|------------------|
| Calibración de sensores | $y = a_2x^2 + a_1x + a_0$ |
| Perfil de temperatura | $T(x) = b_3x^3 + b_2x^2 + b_1x + T_0$ |
| Curva de rendimiento | $P(\omega) = c_n\omega^n + \cdots$ |

:::{admonition} 🔧 Ingeniería — calibración cuadrática
:class: ingenieria

Un sensor linealizado tiene error modelado por $E(x) = 0.01x^2 - 0.05x + 0.02$ donde $x$ es la lectura. Las raíces de $E(x)=0$ indican puntos donde el error es cero — útiles para calibración en esos valores de operación.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_POLINOMIO_GRADO_N"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Definicion P(x)=a_n x^n+...+a_0
2. Grado, coeficiente lider, termino independiente
3. Comportamiento extremos: par/impar, signo de a_n
4. Raices = cortes con eje x
5. Ejemplo P(ω)=-0.02ω³+0.5ω²+2ω
6. Maximo n raices reales
```

---

## Visualización interactiva

Ajusta el grado y los coeficientes y observa la forma del polinomio y sus raíces aproximadas.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s15c2-polinomio" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s15c2-polinomio', {
            boundingbox: [-4, 15, 4, -15],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slGr = board.create('slider', [[-3.5, 13], [0, 13], [1, 2, 4]], { name: 'grado', snapWidth: 1, fillColor: '#7c3aed' });
        var slA = board.create('slider', [[-3.5, 11.5], [0, 11.5], [-2, 1, 2]], { name: 'a_n', snapWidth: 0.25, fillColor: '#1d4ed8' });
        var slC = board.create('slider', [[0.5, 13], [3.5, 13], [-5, 0, 5]], { name: 'a0', snapWidth: 0.5, fillColor: '#16a34a' });
        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var n = Math.round(slGr.Value()), an = slA.Value(), a0 = slC.Value();
            if (Math.abs(an) < 0.05) return;

            var f = function(x) {
                var y = an * Math.pow(x, n) + a0;
                for (var k = 1; k < n; k++) {
                    y += (k % 2 === 0 ? -0.5 : 0.5) * Math.pow(x, k);
                }
                return y;
            };

            dinamicos.push(board.create('functiongraph', [f, -4, 4], { strokeColor: '#1d4ed8', strokeWidth: 2.5 }));

            for (var x = -3.9; x <= 3.9; x += 0.05) {
                var y1 = f(x), y2 = f(x + 0.05);
                if (y1 * y2 <= 0 && Math.abs(y1) < 12) {
                    dinamicos.push(board.create('point', [x, 0], { size: 3, fillColor: '#16a34a', strokeColor: '#16a34a', name: '', fixed: true }));
                }
            }

            var extremo = an > 0 ? '+∞' : '-∞';
            if (n % 2 === 0) extremo = '±∞ → ' + (an > 0 ? '+∞' : '-∞');
            dinamicos.push(board.create('text', [0, 14, 'Grado ' + n + ', a_n=' + an + ', extremos: ' + extremo], {
                fontSize: 11, color: '#374151', anchorX: 'middle'
            }));
        }

        slGr.on('drag', dibujar); slA.on('drag', dibujar); slC.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Deslizador de grado (1–4), coeficiente líder y término independiente. Grafica el polinomio y marca aproximaciones de raíces en el eje $x$. Muestra comportamiento en extremos según paridad y signo de $a_n$.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScDPaQeONj7b6zZRSUE_EXpaZIkOKn-hz38mM_wzJ1PmQLC9w/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Función polinomial
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "2x⁴-3x²+x-5 grado=___" → 4
P2 (Fill): "Coeficiente lider de -x³+2x:" → -1
P3 (MC): "Grado par, a_n>0 → extremos:" → +∞ ambos lados
P4 (MC): "Raiz de P(x) es:" → r tal que P(r)=0
P5 (T/F): "Grado n → max n raices reales." → Verdadero
P6 (Fill): "Termino independiente de 3x²-5x+7:" → 7
P7 (MC ingeniería): "Curva de calibracion es polinomio porque:" → Modela relacion no lineal
P8 (MC): "P(x)=5 es polinomio grado:" → 0
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Grado $n$
  - Mayor exponente; $a_n \neq 0$
* - Coeficiente líder
  - $a_n$; determina comportamiento en extremos
* - Término independiente
  - $a_0 = P(0)$
* - Extremos
  - Par/impar y signo de $a_n$ fijan $\pm\infty$
* - Raíces
  - $P(r)=0$; cortes con eje $x$; máximo $n$ reales
* - Ingeniería
  - Calibración, temperatura, rendimiento
```

:::{admonition} Siguiente clase
:class: tip
Ya conoces funciones polinomiales. En la siguiente clase aprenderás **división sintética** y el **teorema del residuo** para evaluar polinomios eficientemente.

➡️ [Ir a S15·C3 División sintética y teorema del residuo](s15_c3_division_sintetica_residuo.md)
:::
