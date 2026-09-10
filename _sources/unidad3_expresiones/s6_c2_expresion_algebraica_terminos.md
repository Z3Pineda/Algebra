---
title: "S6·C2 Expresión algebraica y términos semejantes"
---

# S6·C2 Expresión algebraica y términos semejantes

:::{admonition} 🔧 El costo de fabricación de una pieza
:class: ingenieria

El costo de fabricar una pieza en un torno CNC depende de varios factores:

$$C = 3h + 2h + 15m + 8m + 500$$

Donde:
- $h$ = horas de operación del torno
- $m$ = metros de material usado
- $500$ = costo fijo de setup

El departamento de costos necesita simplificar esta expresión para hacer presupuestos rápidos. ¿Puedes combinar los términos con $h$ y los términos con $m$?

$$C = (3h + 2h) + (15m + 8m) + 500 = 5h + 23m + 500$$

Esto es exactamente lo que hacemos al **identificar y combinar términos semejantes**.
:::

**Pregunta detonadora**

> En la expresión $4x^2 + 3x - 7x^2 + 2$, ¿cuáles términos son "del mismo tipo"? ¿Puedes simplificarla?

---

## Teoría

### ¿Qué es una expresión algebraica?

**Definición:**
Una expresión algebraica es una combinación de números, variables y operaciones matemáticas ($+$, $-$, $\times$, $\div$, potencias, raíces).

**Ejemplos:**

| Expresión | Tipo |
|-----------|------|
| $5x - 3$ | Binomio (2 términos) |
| $x^2 + 4x - 7$ | Trinomio (3 términos) |
| $3x^3 - 2x^2 + x - 8$ | Polinomio (4 términos) |
| $\frac{2x}{x-1}$ | Expresión racional |
| $\sqrt{x+5}$ | Expresión radical |

---

### Partes de un término algebraico

Un **término** es un producto de un coeficiente y una o más variables con sus exponentes:

$$\underbrace{5}_{\text{coef.}} \underbrace{x^2}_{\text{variable}} \underbrace{y}_{\text{variable}}$$

| Parte | Definición | Ejemplo en $-7x^3y^2$ |
|-------|------------|----------------------|
| **Coeficiente** | El factor numérico | $-7$ |
| **Variable** | La letra | $x$, $y$ |
| **Exponente** | La potencia de la variable | $3$ en $x$, $2$ en $y$ |
| **Grado del término** | Suma de exponentes | $3 + 2 = 5$ |

**Término independiente:** un número sin variable. Su grado es 0.

---

### Grado de un polinomio

El **grado de un polinomio** es el grado del término de mayor grado.

$$p(x) = 4x^5 - 3x^3 + 2x - 7 \quad \to \quad \text{grado } 5$$

| Grado | Nombre | Ejemplo |
|:-----:|--------|---------|
| 0 | Constante | $8$ |
| 1 | Lineal | $3x - 5$ |
| 2 | Cuadrático | $x^2 + 2x - 1$ |
| 3 | Cúbico | $2x^3 - x + 4$ |
| $n$ | Grado $n$ | $ax^n + \ldots$ |

---

### Términos semejantes

Dos términos son **semejantes** si tienen exactamente las mismas variables con los mismos exponentes. Solo pueden diferir en el coeficiente.

| Par de términos | ¿Semejantes? | Razón |
|-----------------|:---:|-------|
| $3x^2$ y $-7x^2$ | ✅ | Misma variable, mismo exponente |
| $5xy$ y $2xy$ | ✅ | Mismas variables y exponentes |
| $4x^2$ y $4x^3$ | ❌ | Mismo coeficiente pero diferente exponente |
| $3x$ y $3y$ | ❌ | Diferentes variables |
| $8$ y $-5$ | ✅ | Ambos son términos independientes |

```{warning}
Solo se pueden combinar términos **semejantes**. Sumar $3x^2 + 5x$ no se puede simplificar más — son términos distintos aunque tengan la misma variable.
```

---

### Cómo combinar términos semejantes

Se suman o restan los **coeficientes**, manteniendo la parte variable igual:

$$3x^2 - 7x^2 = (3-7)x^2 = -4x^2$$

$$5xy + 2xy - xy = (5+2-1)xy = 6xy$$

**Ejemplo completo:**

$$4x^2 + 3x - 7x^2 + 2 - 5x + 9$$

Agrupando semejantes:

$$= (4x^2 - 7x^2) + (3x - 5x) + (2 + 9)$$

$$= -3x^2 - 2x + 11$$

:::{admonition} 🔧 Regreso al problema de costos
:class: ingenieria
$$C = 3h + 2h + 15m + 8m + 500$$
$$= (3+2)h + (15+8)m + 500$$
$$= 5h + 23m + 500$$

Ahora el presupuesto es inmediato: por cada hora extra de torno aumenta $5 unidades, y por cada metro extra de material aumenta $23 unidades.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_EXPRESIONES_TERMINOS"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Mostrar la expresión de costos de la planta y simplificarla paso a paso
2. Animar la identificación de partes de un término: coeficiente, variable, exponente
3. Mostrar términos semejantes con color: azul para x², verde para x, gris para constantes
4. Combinar: los del mismo color se juntan, los de diferente color no
5. Ejemplo completo: 4x²+3x-7x²+2-5x+9 → -3x²-2x+11 con animación
```

---

## Visualización interactiva

Identifica los términos semejantes y observa cómo se combinan.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s6c2-terminos" class="jsxgraph-container" style="height:440px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s6c2-terminos', {
            boundingbox: [-1, 11, 13, -2],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var expresiones = [
            {
                expr: '4x² + 3x - 7x² + 2 - 5x + 9',
                grupos: [
                    { terminos: ['4x²', '-7x²'], resultado: '-3x²', color: '#3b82f6' },
                    { terminos: ['3x', '-5x'],   resultado: '-2x',  color: '#16a34a' },
                    { terminos: ['2', '9'],       resultado: '11',   color: '#f97316' }
                ],
                simplificado: '-3x² - 2x + 11'
            },
            {
                expr: '5h + 2h + 15m + 8m + 500',
                grupos: [
                    { terminos: ['5h', '2h'],     resultado: '7h',   color: '#3b82f6' },
                    { terminos: ['15m', '8m'],    resultado: '23m',  color: '#16a34a' },
                    { terminos: ['500'],          resultado: '500',  color: '#f97316' }
                ],
                simplificado: '7h + 23m + 500'
            },
            {
                expr: '2a³ - a³ + 4a - 3a + 6',
                grupos: [
                    { terminos: ['2a³', '-a³'],   resultado: 'a³',   color: '#3b82f6' },
                    { terminos: ['4a', '-3a'],    resultado: 'a',    color: '#16a34a' },
                    { terminos: ['6'],            resultado: '6',    color: '#f97316' }
                ],
                simplificado: 'a³ + a + 6'
            }
        ];

        var idx = 0;
        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e){} });
            dinamicos = [];
        }

        function dibujar(i) {
            limpiar();
            var e = expresiones[i];

            // Expresión original
            dinamicos.push(board.create('text', [6, 10, e.expr], {
                fontSize: 15, color: '#374151', fontWeight: 'bold', anchorX: 'middle' }));

            // Grupos
            e.grupos.forEach(function(g, gi) {
                var y = 8 - gi * 2.2;
                var txt = g.terminos.join(' + ');
                dinamicos.push(board.create('text', [3, y, txt + '  =  ' + g.resultado], {
                    fontSize: 13, color: g.color, fontWeight: 'bold', anchorX: 'middle'
                }));
                // Caja de color
                dinamicos.push(board.create('polygon', [
                    [0.5, y-0.6],[5.5, y-0.6],[5.5, y+0.6],[0.5, y+0.6]
                ], {
                    fillColor: g.color, fillOpacity: 0.1,
                    strokeColor: g.color, strokeWidth: 1,
                    vertices: { visible: false }
                }));
            });

            // Flecha
            dinamicos.push(board.create('segment', [[6, 5],[6, 3.5]], {
                strokeColor: '#374151', strokeWidth: 2,
                lastArrow: true }));

            // Resultado simplificado
            dinamicos.push(board.create('text', [6, 3, '= ' + e.simplificado], {
                fontSize: 16, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));
        }

        // Botones de expresión
        expresiones.forEach(function(e, i) {
            var btn = board.create('text', [2 + i*4, -0.5,
                ['Expr. 1','Expr. 2','Expr. 3'][i]], {
                fontSize: 12, color: '#374151', fontWeight: 'bold', anchorX: 'middle',
                cssStyle: 'cursor:pointer; padding:4px 10px; background:#f1f5f9; border-radius:6px;'
            });
            btn.on('down', function() { idx = i; dibujar(i); });
        });

        board.create('text', [6, -1.5,
            'Selecciona una expresion para ver como se agrupan los terminos semejantes'], {
            fontSize: 10, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle'
        });

        dibujar(0);
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
3 expresiones con botones. Cada una muestra los grupos de términos semejantes codificados por color con el resultado de combinarlos. Al final aparece la expresión simplificada. Ideal para mostrar en clase el proceso de agrupación.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScxmkH1NJGIflZGXP7PQ_S4cgjT1fN0iqBtxA0FdSPB31nOhw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Expresiones y términos semejantes
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "¿Cuáles son términos semejantes en 3x²+5x-2x²+7?" → 3x² y -2x²
P2 (Fill): "3x² + (-2x²) = ___x²" → 1 (o simplemente x²)
P3 (Fill): "5x + 3x - 2x = ___x" → 6
P4 (MC): "¿Cuál es el grado del polinomio 4x³-2x+7?" → 3
P5 (Fill): "El coeficiente de -7x³y² es ___" → -7
P6 (Fill): "Simplifica: 2a+3b-a+5b = ___" → a+8b
P7 (MC): "¿Qué tipo de expresión es x²+3x-4?" → Trinomio cuadrático
P8 (Fill ingeniería): "C=3h+2h+15m+8m. Simplificado: C=___h+___m" → 5, 23
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Definición
* - Término algebraico
  - Producto de coeficiente y variables con exponentes
* - Coeficiente
  - El factor numérico del término
* - Grado del término
  - Suma de los exponentes de sus variables
* - Grado del polinomio
  - Grado del término de mayor grado
* - Términos semejantes
  - Mismas variables con mismos exponentes
* - Combinar semejantes
  - Sumar/restar los coeficientes, mantener la parte variable
```

:::{admonition} Siguiente clase
:class: tip
Ya sabes identificar términos semejantes. En la siguiente clase operarás con expresiones completas: **suma y resta de polinomios**.

➡️ [Ir a S6·C3 Suma y resta de expresiones algebraicas](s6_c3_suma_resta_expresiones.md)
:::
