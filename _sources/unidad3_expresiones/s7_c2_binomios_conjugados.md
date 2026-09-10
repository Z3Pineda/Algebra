---
title: "S7·C2 Producto de binomios conjugados"
---

# S7·C2 Producto de binomios conjugados

:::{admonition} 🔧 Diferencia de áreas en una pieza anular
:class: ingenieria

Una arandela tiene radio exterior $R$ y radio interior $r$. El área del anillo metálico es:

$$A = \pi R^2 - \pi r^2 = \pi(R^2 - r^2)$$

Si $R = D + t$ y $r = D - t$ (donde $D$ es el radio medio y $t$ es la semiancho del anillo):

$$R^2 - r^2 = (D+t)^2 - (D-t)^2$$

¿Cuánto es esto? Existe una fórmula directa:

$$R^2 - r^2 = (R+r)(R-r) = (D+t+D-t)(D+t-(D-t)) = (2D)(2t) = 4Dt$$

Esto es la **diferencia de cuadrados** — que resulta del producto de binomios conjugados.
:::

**Pregunta detonadora**

> Calcula $(x + 7)(x - 7)$ usando FOIL. ¿Qué pasa con los términos medios? ¿Por qué se cancelan?

---

## Teoría

### Binomios conjugados

Dos binomios son **conjugados** si son iguales excepto por el signo del segundo término:

$$\underbrace{(a + b)}_{\text{conjugado 1}} \quad \text{y} \quad \underbrace{(a - b)}_{\text{conjugado 2}}$$

---

### Fórmula del producto de conjugados

$$(a + b)(a - b) = a^2 - b^2$$

**Demostración con FOIL:**

$$(a+b)(a-b) = \underbrace{a^2}_F \underbrace{-ab}_O \underbrace{+ab}_I \underbrace{-b^2}_L = a^2 - b^2$$

Los términos $-ab$ y $+ab$ se **cancelan** — por eso el resultado solo tiene dos términos.

**El resultado es siempre una diferencia de cuadrados.**

---

### Ejemplos

**Ejemplo 1:**
$$(x + 5)(x - 5) = x^2 - 25$$

**Ejemplo 2:**
$$(3a + 2b)(3a - 2b) = (3a)^2 - (2b)^2 = 9a^2 - 4b^2$$

**Ejemplo 3:**
$$(4x + 7)(4x - 7) = 16x^2 - 49$$

**Ejemplo 4 — ingeniería:**
$$(D + t)(D - t) = D^2 - t^2$$

Área del anillo: $A = \pi(R+r)(R-r) = \pi \cdot (2D)(2t) = 4\pi Dt$

---

### Aplicaciones numéricas del producto de conjugados

Esta fórmula también acelera cálculos numéricos:

$$98 \times 102 = (100-2)(100+2) = 100^2 - 2^2 = 10000 - 4 = 9996$$

$$49 \times 51 = (50-1)(50+1) = 2500 - 1 = 2499$$

:::{admonition} 🔧 Cálculo rápido en ingeniería
:class: ingenieria
En tolerancias simétricas, si el nominal es $N$ y la tolerancia es $\pm t$:

$$A_{max} \times A_{min} = (N+t)(N-t) = N^2 - t^2$$

Para $N = 50$ mm, $t = 0.1$ mm:
$$(50.1)(49.9) = 50^2 - 0.01 = 2499.99 \text{ mm}^2$$

Sin necesidad de calculadora para el valor exacto.
:::

---

### Comparación de los tres productos notables vistos

| Producto | Fórmula | Número de términos |
|----------|---------|:-----------------:|
| $(a+b)^2$ | $a^2 + 2ab + b^2$ | 3 |
| $(a-b)^2$ | $a^2 - 2ab + b^2$ | 3 |
| $(a+b)(a-b)$ | $a^2 - b^2$ | 2 |

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_CONJUGADOS"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~3 min):**
1. Mostrar la arandela y el cálculo del área del anillo
2. Animar (a+b)(a-b) con FOIL: los términos medios se cancelan en rojo
3. Resultado: solo a²-b²
4. Ejemplo numérico: 98×102=(100-2)(100+2)=9996 más rápido que la multiplicación directa
5. Comparación de los 3 productos notables lado a lado
```

---

## Visualización interactiva

Observa cómo los términos medios se cancelan en el producto de conjugados.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s7c2-conjugados" class="jsxgraph-container" style="height:440px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s7c2-conjugados', {
            boundingbox: [-1, 11, 13, -2],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slA = board.create('slider', [[8, 10],[12, 10],[1, 3, 8]], {
            name:'a', snapWidth:1, fillColor:'#3b82f6' });
        var slB = board.create('slider', [[8, 8.5],[12, 8.5],[1, 2, 6]], {
            name:'b', snapWidth:1, fillColor:'#f97316' });

        var dinamicos = [];
        function limpiar() {
            dinamicos.forEach(function(o){ try{board.removeObject(o);}catch(e){} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var a = Math.round(slA.Value());
            var b = Math.round(slB.Value());

            // Expresión
            dinamicos.push(board.create('text', [6, 9.5,
                '(' + a + 'x + ' + b + ')(' + a + 'x - ' + b + ')'], {
                fontSize: 16, color: '#374151', fontWeight: 'bold', anchorX: 'middle' }));

            // FOIL paso a paso
            var F = a*a, O = -(a*b), I = a*b, L = -(b*b);

            var pasos = [
                { label: 'F', expr: F + 'x²', color: '#3b82f6' },
                { label: 'O', expr: (O>=0?'+':'')+O+'x', color: '#dc2626' },
                { label: 'I', expr: (I>=0?'+':'')+I+'x', color: '#16a34a' },
                { label: 'L', expr: (L>=0?'+':'')+L, color: '#f97316' }
            ];

            pasos.forEach(function(p, i) {
                dinamicos.push(board.create('text', [2+i*2.5, 7.5, p.label], {
                    fontSize: 13, color: '#6b7280', anchorX: 'middle' }));
                dinamicos.push(board.create('text', [2+i*2.5, 6.5, p.expr], {
                    fontSize: 14, color: p.color, fontWeight: 'bold', anchorX: 'middle' }));
            });

            // Cancelación
            dinamicos.push(board.create('text', [6, 5.2,
                O+'x + '+I+'x = 0  (se cancelan!)'], {
                fontSize: 13, color: '#dc2626', anchorX: 'middle', fontStyle: 'italic' }));

            // Resultado
            var res2 = F, res0 = L;
            dinamicos.push(board.create('text', [6, 4,
                '= ' + res2 + 'x² ' + (res0>=0?'+ ':'')+res0], {
                fontSize: 18, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));

            // Fórmula directa
            dinamicos.push(board.create('text', [6, 2.8,
                'Directo: (' + a + 'x)² - (' + b + ')² = ' + F + 'x² - ' + b*b], {
                fontSize: 12, color: '#16a34a', anchorX: 'middle' }));

            // Valor numérico con x=1
            var numFOIL = (a+b)*(a-b);
            var numDirec = a*a - b*b;
            dinamicos.push(board.create('text', [6, 1.8,
                'Verificacion x=1: ('+a+'+'+b+')('+a+'-'+b+') = '+(a+b)+'×'+(a-b)+' = '+numFOIL+' = '+F+'-'+b*b+' = '+numDirec], {
                fontSize: 11, color: '#374151', anchorX: 'middle', fontStyle: 'italic' }));
        }

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Deslizadores para a y b en (ax+b)(ax-b). Muestra los 4 términos FOIL coloreados, resalta la cancelación de los términos medios en rojo, y presenta el resultado directo con la fórmula a²-b². Incluye verificación numérica con x=1.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSd0MaPkLbw54KApNUMU6SzA1GZRR2_rfWnrhYOPP1_OuJcNug/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Producto de binomios conjugados
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "(x+8)(x-8) = x²-___" → 64
P2 (Fill): "(3x+5)(3x-5) = ___x²-___" → 9, 25
P3 (Fill): "(4a+3b)(4a-3b) = ___a²-___b²" → 16, 9
P4 (MC): "¿Cuántos términos tiene el producto de conjugados?" → 2 (siempre)
P5 (T/F): "(x+4)(x-4) = x²-8x-16" → Falso (es x²-16)
P6 (Fill numérico): "97×103 = (100-3)(100+3) = 10000-___ = ___" → 9, 9991
P7 (Fill ingeniería): "(D+t)(D-t) = D²-___" → t²
P8 (MC): "¿Cuál expresa el área de un anillo con radios R y r?" → π(R+r)(R-r)
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Concepto
  - Detalle
* - Fórmula
  - $(a+b)(a-b) = a^2 - b^2$
* - Por qué funciona
  - Los términos medios $+ab$ y $-ab$ se cancelan
* - Resultado
  - Siempre dos términos: diferencia de cuadrados
* - Aplicación numérica
  - $98 \times 102 = 100^2 - 2^2 = 9996$
* - Ingeniería
  - Área de anillos, tolerancias simétricas
```

:::{admonition} Siguiente clase
:class: tip
Dominaste la diferencia de cuadrados. En la siguiente clase aprenderás el **binomio al cubo** — la extensión natural del binomio al cuadrado.

➡️ [Ir a S7·C3 Binomio al cubo](s7_c3_binomio_cubo.md)
:::
