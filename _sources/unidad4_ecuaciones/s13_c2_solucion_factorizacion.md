---
title: "S13·C2 Solución por factorización"
---

# S13·C2 Solución por factorización

:::{admonition} 🔧 Dimensiones óptimas de una placa rectangular
:class: ingenieria

El área de una placa rectangular debe ser 24 cm². Si el largo excede al ancho en 5 cm y el ancho es $x$ cm:

$$x(x + 5) = 24 \quad \Rightarrow \quad x^2 + 5x - 24 = 0$$

Factorizando: $(x + 8)(x - 3) = 0$, así $x = -8$ o $x = 3$.

Solo $x = 3$ cm tiene sentido (ancho positivo). El largo es $8$ cm. La **factorización** convierte una ecuación cuadrática en dos ecuaciones lineales simples.
:::

**Pregunta detonadora**

> Si $(x - 2)(x + 3) = 0$, ¿por qué basta con resolver $x - 2 = 0$ o $x + 3 = 0$ por separado?

---

## Teoría

### Propiedad del producto nulo

Si el producto de dos factores es cero, **al menos uno** de los factores es cero:

$$AB = 0 \quad \Rightarrow \quad A = 0 \quad \text{o} \quad B = 0$$

Esta propiedad es la base de la **solución por factorización**.

---

### Estrategia general

| Paso | Acción |
|:----:|--------|
| 1 | Escribir la ecuación en forma $ax^2 + bx + c = 0$ |
| 2 | **Factorizar** completamente el trinomio (o binomio) |
| 3 | Igualar **cada factor** a cero |
| 4 | Resolver las ecuaciones lineales resultantes |
| 5 | Verificar cada solución en la ecuación original |

---

### Ejemplo 1 — Trinomio factorizable (tanteo)

$$x^2 - 5x + 6 = 0$$

Buscar dos números que sumen $-5$ y multipliquen $6$: $-2$ y $-3$.

$$(x - 2)(x - 3) = 0$$

$$x - 2 = 0 \quad \text{o} \quad x - 3 = 0 \quad \Rightarrow \quad x = 2 \quad \text{o} \quad x = 3$$

**Soluciones:** $x = 2$, $x = 3$

---

### Ejemplo 2 — Factor común primero

$$2x^2 - 8x = 0$$

Sacar factor común $2x$:

$$2x(x - 4) = 0$$

$$2x = 0 \quad \text{o} \quad x - 4 = 0 \quad \Rightarrow \quad x = 0 \quad \text{o} \quad x = 4$$

---

### Ejemplo 3 — Diferencia de cuadrados

$$x^2 - 49 = 0$$

$$x^2 - 7^2 = (x + 7)(x - 7) = 0$$

$$x = -7 \quad \text{o} \quad x = 7$$

---

### Ejemplo 4 — Trinomio con $a \neq 1$ (método AC)

$$2x^2 + 7x + 3 = 0$$

$AC = 6$; números que suman 7: $1$ y $6$.

$$2x^2 + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3) = 0$$

$$x = -\frac{1}{2} \quad \text{o} \quad x = -3$$

---

### Métodos de factorización (repaso S8)

| Tipo | Cuándo usarlo | Ejemplo |
|------|---------------|---------|
| Factor común | Todos los términos comparten algo | $2x^2 - 8x = 2x(x-4)$ |
| Diferencia de cuadrados | $a^2 - b^2$ | $x^2 - 9 = (x+3)(x-3)$ |
| Tanteo | $x^2 + bx + c$, $a = 1$ | $x^2 - 5x + 6$ |
| AC | $ax^2 + bx + c$, $a \neq 1$ | $2x^2 + 7x + 3$ |

```{warning}
Antes de factorizar, **siempre** lleva la ecuación a forma igualada a cero:

$$x^2 + 5x = 24 \quad \Rightarrow \quad x^2 + 5x - 24 = 0 \quad \text{(resta 24 en ambos lados)}$$

Si no lo haces, la factorización no aplica la propiedad del producto nulo correctamente.
```

---

### Puntos de equilibrio en sistemas mecánicos

La fuerza neta sobre un componente es $F = x^2 - 9$ (kN). Equilibrio cuando $F = 0$:

$$x^2 - 9 = 0 \quad \Rightarrow \quad (x+3)(x-3) = 0 \quad \Rightarrow \quad x = \pm 3 \text{ kN}$$

En contexto físico, evalúa cuál raíz es admisible.

:::{admonition} 🔧 Ingeniería — placa rectangular
:class: ingenieria

$x(x+5) = 24 \Rightarrow x^2 + 5x - 24 = 0$. Factorizar: $(x+8)(x-3) = 0$.

$x = 3$ cm (ancho), largo $= 8$ cm. Verificación: $3 \times 8 = 24$ cm² ✓

La raíz negativa $x = -8$ se descarta — no hay dimensiones negativas.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_FACTORIZACION_CUADRATICA"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Propiedad AB=0 → A=0 o B=0
2. x²-5x+6=0 por tanteo → (x-2)(x-3)=0
3. Factor común: 2x²-8x=0 → 2x(x-4)=0
4. Diferencia de cuadrados: x²-49=0
5. Placa: x²+5x-24=0 → x=3 cm
6. Siempre igualar a cero antes de factorizar
```

---

## Visualización interactiva

Observa cómo la factorización descompone la parábola en sus raíces — los puntos donde corta el eje $x$.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s13c2-factorizacion" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    var ejemplos = [
        { eq: 'x² - 5x + 6 = 0', fac: '(x-2)(x-3) = 0', r1: 2, r2: 3, a: 1, b: -5, c: 6 },
        { eq: 'x² - 49 = 0', fac: '(x+7)(x-7) = 0', r1: -7, r2: 7, a: 1, b: 0, c: -49 },
        { eq: '2x² - 8x = 0', fac: '2x(x-4) = 0', r1: 0, r2: 4, a: 2, b: -8, c: 0 }
    ];

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s13c2-factorizacion', {
            boundingbox: [-10, 8, 10, -5],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var idx = 0, dinamicos = [], btnEj = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar(i) {
            limpiar();
            idx = i;
            var e = ejemplos[i];

            btnEj.forEach(function(b, j) {
                b.setAttribute({
                    fillColor: j === i ? '#1d4ed8' : '#e5e7eb',
                    strokeColor: j === i ? '#1d4ed8' : '#9ca3af'
                });
            });

            var f = function(x) { return e.a*x*x + e.b*x + e.c; };
            dinamicos.push(board.create('functiongraph', [f, -10, 10], {
                strokeColor: '#1d4ed8', strokeWidth: 2.5
            }));

            dinamicos.push(board.create('point', [e.r1, 0], {
                size: 5, fillColor: '#16a34a', strokeColor: '#16a34a',
                name: 'x=' + e.r1, label: { fontSize: 11, offset: [0, 12] }
            }));
            dinamicos.push(board.create('point', [e.r2, 0], {
                size: 5, fillColor: '#16a34a', strokeColor: '#16a34a',
                name: 'x=' + e.r2, label: { fontSize: 11, offset: [0, 12] }
            }));

            dinamicos.push(board.create('text', [0, 6.5, e.eq], {
                fontSize: 13, color: '#374151', fontWeight: 'bold', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [0, 5.5, 'Factorizado: ' + e.fac], {
                fontSize: 12, color: '#1d4ed8', anchorX: 'middle'
            }));
        }

        ejemplos.forEach(function(e, i) {
            var btn = board.create('button', [-8 + i * 5.5, 7.5, 'Ej ' + (i+1)], {
                fixed: true, highlight: false, size: 2,
                fillColor: '#e5e7eb', strokeColor: '#9ca3af'
            });
            (function(j) { btn.on('down', function() { dibujar(j); }); })(i);
            btnEj.push(btn);
        });

        dibujar(0);
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Tres ecuaciones factorizables. Al seleccionar cada ejemplo, se grafica la parábola y se marcan las raíces en verde. Muestra la equivalencia entre factores nulos y cortes con el eje $x$.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9l4XMRjPLfkMinhJLraZuggndOjQKehjMKdlop97CKt_qhA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Solución por factorización
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "Si (x-2)(x+3)=0, las soluciones son:" → x=2, x=-3
P2 (Fill): "x²-5x+6=0 factorizado: (x-2)(x-___)=0" → 3
P3 (Fill): "2x²-8x=0 → x=0 o x=___" → 4
P4 (MC): "x²-49=0 se factoriza como:" → (x+7)(x-7)
P5 (T/F): "Antes de factorizar hay que igualar a cero." → Verdadero
P6 (Fill): "x²+5x-24=0 → x=___ (positivo)" → 3
P7 (MC): "Propiedad clave:" → AB=0 → A=0 o B=0
P8 (MC ingeniería): "Raiz negativa de dimension x se:" → Descarta si x es longitud
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Producto nulo
  - $AB = 0 \Rightarrow A = 0$ o $B = 0$
* - Procedimiento
  - Igualar a 0 → factorizar → cada factor = 0
* - Factor común
  - Sacar lo común antes de otros métodos
* - Diferencia de cuadrados
  - $a^2 - b^2 = (a+b)(a-b)$
* - Trinomios
  - Tanteo ($a=1$) o AC ($a \neq 1$)
* - Ingeniería
  - Dimensiones de piezas, equilibrio $F = 0$
```

:::{admonition} Siguiente clase
:class: tip
Ya resuelves cuadráticas factorizando. En la siguiente clase trabajarás ecuaciones de la forma **$(x+a)^2 = b$** aplicando raíz cuadrada directamente.

➡️ [Ir a S13·C3 Ecuaciones de la forma (x+a)²=b](s13_c3_forma_x_mas_a_cuadrado.md)
:::
