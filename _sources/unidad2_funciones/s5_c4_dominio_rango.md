---
title: "S5·C4 Dominio y rango de una función"
---

# S5·C4 Dominio y rango de una función

:::{admonition} 🔧 El rango de operación de un sensor de presión
:class: ingenieria

Un sensor de presión industrial tiene las siguientes especificaciones:

- **Rango de entrada:** 0 a 400 bar (presiones que puede medir)
- **Rango de salida:** 4 a 20 mA (señal eléctrica que genera)

La función que convierte presión en señal eléctrica es:

$$I(P) = \frac{16}{400} \cdot P + 4 = 0.04P + 4$$

- Si $P = 0$ bar: $I(0) = 4$ mA (señal mínima)
- Si $P = 400$ bar: $I(400) = 20$ mA (señal máxima)
- Si $P = 200$ bar: $I(200) = 12$ mA (señal media)

El **dominio** es el conjunto de presiones válidas: $[0, 400]$.  
El **rango** es el conjunto de señales posibles: $[4, 20]$.

¿Qué pasa si intentas medir una presión negativa? ¿O mayor a 400 bar?
:::

**Pregunta detonadora**

> Para la función $f(x) = \sqrt{x}$, ¿qué valores de $x$ puedes usar? ¿Por qué no puedes poner $x = -4$?

---

## Teoría

### Dominio de una función

**Definición:**
El **dominio** de una función $f: A \to B$ es el conjunto de todos los valores de entrada para los que la función está definida.

$$\text{Dom}(f) = \{x \in A \mid f(x) \text{ existe}\}$$

**Casos que restringen el dominio:**

| Restricción | Razón | Ejemplo |
|-------------|-------|---------|
| Denominador $\neq 0$ | División entre cero no existe | $f(x) = \frac{1}{x-3}$ → $x \neq 3$ |
| Radicando $\geq 0$ | Raíz de negativo no es real | $f(x) = \sqrt{x-2}$ → $x \geq 2$ |
| Logaritmo de positivo | $\log$ solo existe para positivos | $f(x) = \ln(x)$ → $x > 0$ |
| Sin restricciones | Polinomios, funciones lineales | $f(x) = 3x+1$ → $x \in \mathbb{R}$ |

---

### Rango (imagen) de una función

**Definición:**
El **rango** (o imagen) de $f$ es el conjunto de todos los valores que realmente produce la función:

$$\text{Ran}(f) = \{f(x) \mid x \in \text{Dom}(f)\}$$

```{warning}
El **codominio** ($B$) puede ser más grande que el rango.  
El rango es solo lo que la función **realmente alcanza**, no todo lo que podría.

Por ejemplo: $f(x) = x^2$ con $f: \mathbb{R} \to \mathbb{R}$  
- Codominio: $\mathbb{R}$ (todos los reales)  
- Rango: $[0, +\infty)$ (solo los no negativos — el cuadrado nunca es negativo)
```

---

### Ejemplos de dominio y rango

#### Ejemplo 1 — Función lineal

$$f(x) = 2x - 5$$

- **Dominio:** $\mathbb{R}$ — no hay restricciones
- **Rango:** $\mathbb{R}$ — cualquier valor real puede ser salida

#### Ejemplo 2 — Función con denominador

$$g(x) = \frac{3}{x - 4}$$

- **Dominio:** $x \neq 4$ → $(-\infty, 4) \cup (4, +\infty)$
- **Rango:** $y \neq 0$ → $(-\infty, 0) \cup (0, +\infty)$

#### Ejemplo 3 — Función con raíz cuadrada

$$h(x) = \sqrt{x + 1}$$

El radicando debe ser $\geq 0$: $x + 1 \geq 0 \implies x \geq -1$

- **Dominio:** $[-1, +\infty)$
- **Rango:** $[0, +\infty)$ — la raíz cuadrada siempre es $\geq 0$

#### Ejemplo 4 — Función cuadrática

$$q(x) = x^2 - 3$$

- **Dominio:** $\mathbb{R}$
- **Rango:** $[-3, +\infty)$ — el mínimo es $-3$ cuando $x = 0$

:::{admonition} 🔧 Dominio y rango en ingeniería
:class: ingenieria
El sensor de presión tiene:

$$I(P) = 0.04P + 4 \quad \text{con } P \in [0, 400]$$

- **Dominio:** $[0, 400]$ bar — solo presiones físicamente posibles y dentro del rango del sensor
- **Rango:** $[4, 20]$ mA — calculado: $I(0) = 4$, $I(400) = 20$

Si el sistema recibe una señal de 2 mA (fuera del rango), indica un **fallo del sensor**, no una presión de $-50$ bar.
:::

---

### Dominio natural

Cuando no se especifica el dominio, se asume el **dominio natural**: el conjunto más grande de reales para el que la función está definida.

| Función | Dominio natural |
|---------|:--------------:|
| $f(x) = x^2 + 5$ | $\mathbb{R}$ |
| $f(x) = \frac{1}{x}$ | $\mathbb{R} - \{0\}$ |
| $f(x) = \sqrt{x}$ | $[0, +\infty)$ |
| $f(x) = \frac{\sqrt{x}}{x-1}$ | $[0,1) \cup (1, +\infty)$ |

---

### Cómo leer dominio y rango en una gráfica

- **Dominio:** observa la extensión horizontal de la gráfica (valores de $x$ que aparecen)
- **Rango:** observa la extensión vertical de la gráfica (valores de $y$ que aparecen)

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_DOMINIO_RANGO"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Mostrar f(x)=√x: intentar x=-1 → error. Intentar x=0,1,4,9 → funciona
2. Animar el dominio como proyección horizontal de la gráfica
3. Animar el rango como proyección vertical de la gráfica
4. Mostrar f(x)=1/(x-3): la "brecha" en x=3 — asíntota vertical
5. Comparar codominio ℝ vs. rango [0,∞) de f(x)=x²
6. Cierre: el sensor de presión con su dominio [0,400] y rango [4,20]
```

---

## Visualización interactiva

Explora el dominio y rango de distintas funciones. Mueve el deslizador y observa los valores de entrada y salida posibles.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s5c4-domrango" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s5c4-domrango', {
            boundingbox: [-6, 7, 6, -5],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var funciones = [
            {
                nombre: 'f(x) = 2x - 1',
                fn: function(x) { return 2*x - 1; },
                dom: 'Dom: R (todos los reales)',
                ran: 'Ran: R (todos los reales)',
                xMin: -5, xMax: 5
            },
            {
                nombre: 'f(x) = x²',
                fn: function(x) { return x*x; },
                dom: 'Dom: R',
                ran: 'Ran: [0, +inf)',
                xMin: -4, xMax: 4
            },
            {
                nombre: 'f(x) = sqrt(x)',
                fn: function(x) { return x >= 0 ? Math.sqrt(x) : NaN; },
                dom: 'Dom: [0, +inf)',
                ran: 'Ran: [0, +inf)',
                xMin: 0, xMax: 5
            },
            {
                nombre: 'f(x) = 1/x',
                fn: function(x) { return Math.abs(x) < 0.01 ? NaN : 1/x; },
                dom: 'Dom: R - {0}',
                ran: 'Ran: R - {0}',
                xMin: -5, xMax: 5
            }
        ];

        var idxActual = 0;
        var curvaObj = null;
        var ptObj = null;
        var linV = null;
        var linH = null;
        var txtInfo = [];

        var sl = board.create('slider', [[-5, -3.5],[5, -3.5],[-5, 1, 5]], {
            name: 'x', snapWidth: 0.1,
            baseline: { strokeColor: '#374151' },
            highline:  { strokeColor: '#3b82f6' },
            fillColor: '#3b82f6'
        });

        function limpiar() {
            if (curvaObj) { try { board.removeObject(curvaObj); } catch(e){} curvaObj = null; }
            if (ptObj) { try { board.removeObject(ptObj); } catch(e){} ptObj = null; }
            if (linV) { try { board.removeObject(linV); } catch(e){} linV = null; }
            if (linH) { try { board.removeObject(linH); } catch(e){} linH = null; }
            txtInfo.forEach(function(t) { try { board.removeObject(t); } catch(e){} });
            txtInfo = [];
        }

        function dibujar(idx) {
            limpiar();
            var f = funciones[idx];

            curvaObj = board.create('functiongraph', [f.fn, f.xMin, f.xMax], {
                strokeColor: '#3b82f6', strokeWidth: 2.5 });

            // Línea vertical
            linV = board.create('line',
                [function(){return [sl.Value(),-6];},
                 function(){return [sl.Value(), 6];}], {
                strokeColor: '#dc2626', strokeWidth: 1, dash: 2,
                straightFirst:false, straightLast:false });

            // Punto y línea horizontal
            ptObj = board.create('point',
                [function(){return sl.Value();},
                 function(){var y=f.fn(sl.Value()); return isNaN(y)?0:y;}], {
                size: 7, color: '#dc2626', fixed: true, name: '', label:{fontSize:0}
            });

            linH = board.create('line',
                [function(){var y=f.fn(sl.Value()); return isNaN(y)?[0,0]:[sl.Value(),y];},
                 function(){var y=f.fn(sl.Value()); return isNaN(y)?[0,0]:[0,y];}], {
                strokeColor: '#16a34a', strokeWidth: 1, dash: 2,
                straightFirst:false, straightLast:false });

            txtInfo.push(board.create('text', [-5.5, 6.5, f.nombre], {
                fontSize: 13, color: '#1d4ed8', fontWeight: 'bold' }));
            txtInfo.push(board.create('text', [-5.5, 5.8, f.dom], {
                fontSize: 11, color: '#374151' }));
            txtInfo.push(board.create('text', [-5.5, 5.2, f.ran], {
                fontSize: 11, color: '#374151' }));

            txtInfo.push(board.create('text', [-5.5, 4.2, function() {
                var x = sl.Value();
                var y = f.fn(x);
                if (isNaN(y)) return 'x='+x.toFixed(2)+' -> f(x) NO DEFINIDA';
                return 'x='+x.toFixed(2)+' -> f(x)='+y.toFixed(2);
            }], { fontSize: 12, color: '#dc2626', fontWeight: 'bold' }));
        }

        // Botones
        funciones.forEach(function(f, i) {
            var labels = ['2x-1','x²','sqrt(x)','1/x'];
            var btn = board.create('text', [-4.5+i*2.8, -4.5, labels[i]], {
                fontSize: 11, color: '#374151', fontWeight: 'bold', anchorX: 'middle',
                cssStyle: 'cursor:pointer; padding:3px 8px; background:#f1f5f9; border-radius:5px;'
            });
            btn.on('down', function() { idxActual = i; dibujar(i); });
        });

        dibujar(0);
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
4 funciones con botones. El deslizador mueve x y muestra f(x). La línea roja vertical indica x, la línea verde horizontal indica f(x). Para funciones con restricciones (sqrt, 1/x) muestra "NO DEFINIDA" cuando x está fuera del dominio. El dominio y rango se muestran en texto.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScXObkX0V0Y35vc_WJ5STbX6-R9jk91acPzLiT21e0bjG8HiA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Dominio y rango
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (10 preguntas, ~12 min):**

P1 (MC): "¿Cuál es el dominio natural de f(x)=1/(x+5)?" → R-{-5}
P2 (MC): "¿Cuál es el dominio de f(x)=√(x-3)?" → [3,+∞)
P3 (Fill): "f(x)=2x+7. Dom(f)=___" → R (todos los reales)
P4 (MC): "f(x)=x². Rango:" → [0,+∞)
P5 (Fill): "f(x)=√x. f(9)=___" → 3
P6 (T/F): "El rango siempre es igual al codominio." → Falso
P7 (MC): "El dominio se lee en la gráfica como la extensión:" → Horizontal (eje x)
P8 (MC): "El rango se lee en la gráfica como la extensión:" → Vertical (eje y)
P9 (MC ingeniería): "Sensor: I(P)=0.04P+4, P∈[0,400]. ¿Cuál es el rango?" → [4,20]
P10 (Fill ingeniería): "Si el sensor envía 2 mA (fuera del rango [4,20]), indica..." → falla del sensor
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 25 75

* - Concepto
  - Definición
* - Dominio
  - Conjunto de todos los valores de $x$ para los que $f(x)$ existe
* - Rango (imagen)
  - Conjunto de todos los valores que realmente produce $f$
* - Codominio
  - Conjunto $B$ completo — puede ser mayor que el rango
* - Restricción raíz
  - $\sqrt{g(x)}$ exige $g(x) \geq 0$
* - Restricción denominador
  - $\frac{1}{g(x)}$ exige $g(x) \neq 0$
* - En la gráfica
  - Dominio = extensión horizontal; Rango = extensión vertical
```

:::{admonition} Siguiente clase
:class: tip
Has completado los cuatro temas de la Semana 5. En la clase de autogestión identificarás funciones, calcularás dominios y rangos con ejercicios guiados.

➡️ [Ir a S5·Auto Identificación de funciones, dominio y rango](s5_auto_identificacion_funciones.md)
:::
