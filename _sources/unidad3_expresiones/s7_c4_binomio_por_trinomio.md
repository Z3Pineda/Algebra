---
title: "S7·C4 Producto de un binomio por un trinomio"
---

# S7·C4 Producto de un binomio por un trinomio

:::{admonition} 🔧 Suma y diferencia de cubos en piezas mecánicas
:class: ingenieria

En el análisis de materiales, la suma y diferencia de cubos aparece cuando se estudia la variación de volumen bajo esfuerzo:

$$V_{final} - V_{inicial} = (a^3 - b^3) = (a - b)(a^2 + ab + b^2)$$

Si $a = 10$ cm y $b = 8$ cm:
$$10^3 - 8^3 = (10-8)(100+80+64) = 2 \times 244 = 488 \text{ cm}^3$$

Esta factorización proviene directamente del producto de un binomio por un trinomio especial — el tema de hoy.
:::

**Pregunta detonadora**

> ¿Cuántos términos tiene el producto de un binomio (2 términos) por un trinomio (3 términos) antes de simplificar? ¿Y después?

---

## Teoría

### Producto general: binomio × trinomio

Aplicando la distributiva dos veces:

$$(a + b)(c + d + e) = ac + ad + ae + bc + bd + be$$

Antes de simplificar: $2 \times 3 = 6$ productos parciales.

---

### Caso especial: suma de cubos

$$(a + b)(a^2 - ab + b^2) = a^3 + b^3$$

**Demostración:**

$$(a+b)(a^2-ab+b^2)$$
$$= a(a^2-ab+b^2) + b(a^2-ab+b^2)$$
$$= a^3-a^2b+ab^2 + a^2b-ab^2+b^3$$
$$= a^3 \cancel{-a^2b} \cancel{+ab^2} \cancel{+a^2b} \cancel{-ab^2} +b^3$$
$$= a^3 + b^3$$

Todos los términos intermedios se cancelan. Solo quedan $a^3 + b^3$.

---

### Caso especial: diferencia de cubos

$$(a - b)(a^2 + ab + b^2) = a^3 - b^3$$

**Demostración:**

$$(a-b)(a^2+ab+b^2)$$
$$= a(a^2+ab+b^2) - b(a^2+ab+b^2)$$
$$= a^3+a^2b+ab^2 - a^2b-ab^2-b^3$$
$$= a^3 \cancel{+a^2b} \cancel{+ab^2} \cancel{-a^2b} \cancel{-ab^2} - b^3$$
$$= a^3 - b^3$$

---

### Cómo identificar el trinomio especial

Dado el binomio $(a \pm b)$, el trinomio que lo acompaña es siempre:

$$a^2 \mp ab + b^2$$

**Regla:**
1. El primer término del trinomio es el **cuadrado del primero** del binomio: $a^2$
2. El término del medio es el **producto** de los dos, con signo **opuesto** al binomio: $\mp ab$
3. El último término es el **cuadrado del segundo**: $b^2$

```{warning}
El trinomio especial NO es el mismo que el binomio al cuadrado:

$(a+b)^2 = a^2 + 2ab + b^2$ → coeficiente $2$ y signo $+$

Trinomio especial para suma de cubos: $a^2 - ab + b^2$ → coeficiente $1$ y signo $-$
```

---

### Tabla resumen de productos notables completa

| Nombre | Producto | Resultado |
|--------|----------|-----------|
| Cuadrado suma | $(a+b)^2$ | $a^2+2ab+b^2$ |
| Cuadrado diferencia | $(a-b)^2$ | $a^2-2ab+b^2$ |
| Conjugados | $(a+b)(a-b)$ | $a^2-b^2$ |
| Cubo suma | $(a+b)^3$ | $a^3+3a^2b+3ab^2+b^3$ |
| Cubo diferencia | $(a-b)^3$ | $a^3-3a^2b+3ab^2-b^3$ |
| Suma de cubos | $(a+b)(a^2-ab+b^2)$ | $a^3+b^3$ |
| Diferencia de cubos | $(a-b)(a^2+ab+b^2)$ | $a^3-b^3$ |

---

### Ejemplos

**Ejemplo 1 — suma de cubos:**
$$(x+3)(x^2-3x+9) = x^3 + 27 = x^3 + 3^3$$

**Ejemplo 2 — diferencia de cubos:**
$$(2a-5)(4a^2+10a+25) = (2a)^3 - 5^3 = 8a^3 - 125$$

**Ejemplo 3 — verificación:**
¿Es $(2x+3)(4x^2-6x+9)$ una suma de cubos?

Aquí $a=2x$, $b=3$. El trinomio especial sería $(2x)^2 - (2x)(3) + 3^2 = 4x^2 - 6x + 9$ ✅

Resultado: $(2x)^3 + 3^3 = 8x^3 + 27$ ✅

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_BINOMIO_TRINOMIO"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Mostrar el producto general binomio×trinomio: 6 productos con distributiva doble
2. Para la suma de cubos: animar los 6 términos y mostrar cuáles se cancelan (4 términos)
3. Resultado: solo a³+b³
4. Mostrar la tabla completa de los 7 productos notables
5. Ejemplo (x+3)(x²-3x+9)=x³+27 — reconocer el patrón
6. Cierre: estos productos se "leen al revés" como factorizaciones en la próxima semana
```

---

## Visualización interactiva

Verifica los productos notables con valores numéricos. Observa que el resultado siempre es una suma o diferencia de cubos.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s7c4-btrinomio" class="jsxgraph-container" style="height:460px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s7c4-btrinomio', {
            boundingbox: [-1, 11, 13, -2],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slA = board.create('slider', [[7,10],[11,10],[1,2,5]], {
            name:'a', snapWidth:1, fillColor:'#3b82f6' });
        var slB = board.create('slider', [[7,8.5],[11,8.5],[1,3,7]], {
            name:'b', snapWidth:1, fillColor:'#f97316' });
        var modoSuma = true;

        var dinamicos = [];
        function limpiar() {
            dinamicos.forEach(function(o){ try{board.removeObject(o);}catch(e){} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var a = Math.round(slA.Value());
            var b = Math.round(slB.Value());

            if (modoSuma) {
                // (a+b)(a²-ab+b²) = a³+b³
                var bin = '(' + a + 'x + ' + b + ')';
                var t1 = a*a, t2 = -(a*b), t3 = b*b;
                var tri = '(' + t1 + 'x² ' + (t2>=0?'+ ':'')+t2 + 'x + ' + t3 + ')';

                dinamicos.push(board.create('text', [6, 10, bin + ' × ' + tri], {
                    fontSize: 14, color: '#374151', fontWeight: 'bold', anchorX: 'middle' }));

                // Los 6 productos
                var prods = [
                    {expr: a*t1+'x³', cancel: false, color: '#3b82f6'},
                    {expr: (a*t2>=0?'+':'')+a*t2+'x²', cancel: true, color: '#dc2626'},
                    {expr: '+'+a*t3+'x', cancel: true, color: '#dc2626'},
                    {expr: (b*t1>=0?'+':'')+b*t1+'x²', cancel: true, color: '#dc2626'},
                    {expr: (b*t2>=0?'+':'')+b*t2+'x', cancel: true, color: '#dc2626'},
                    {expr: '+'+b*t3, cancel: false, color: '#f97316'}
                ];

                prods.forEach(function(p, i) {
                    var xp = 1 + i*2;
                    dinamicos.push(board.create('text', [xp, 8.2, p.expr], {
                        fontSize: 11, color: p.cancel ? '#9ca3af' : p.color,
                        fontWeight: p.cancel ? 'normal' : 'bold',
                        anchorX: 'middle'
                    }));
                    if (p.cancel) {
                        dinamicos.push(board.create('segment',
                            [[xp-0.6, 8.3],[xp+0.6, 8.3]], {
                            strokeColor: '#dc2626', strokeWidth: 2 }));
                    }
                });

                var res1 = a*a*a, res2 = b*b*b;
                dinamicos.push(board.create('text', [6, 6.8,
                    '= ' + res1 + 'x³ + ' + res2], {
                    fontSize: 18, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));
                dinamicos.push(board.create('text', [6, 5.8,
                    '= (' + a + 'x)³ + ' + b + '³  (suma de cubos)'], {
                    fontSize: 13, color: '#16a34a', anchorX: 'middle' }));

            } else {
                // (a-b)(a²+ab+b²) = a³-b³
                var bin = '(' + a + 'x - ' + b + ')';
                var t1 = a*a, t2 = a*b, t3 = b*b;
                var tri = '(' + t1 + 'x² + ' + t2 + 'x + ' + t3 + ')';

                dinamicos.push(board.create('text', [6, 10, bin + ' × ' + tri], {
                    fontSize: 14, color: '#374151', fontWeight: 'bold', anchorX: 'middle' }));

                var res1 = a*a*a, res2 = b*b*b;
                dinamicos.push(board.create('text', [6, 7.5,
                    '= ' + res1 + 'x³ - ' + res2], {
                    fontSize: 18, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));
                dinamicos.push(board.create('text', [6, 6.5,
                    '= (' + a + 'x)³ - ' + b + '³  (diferencia de cubos)'], {
                    fontSize: 13, color: '#16a34a', anchorX: 'middle' }));
            }

            // Verificación
            var xv = 2;
            var lhs = modoSuma
                ? Math.pow(a*xv+b,3) - Math.pow(b,3)*0 + Math.pow(b,3)
                : 0;
            var res1n = Math.pow(a,3)*Math.pow(xv,3);
            var res2n = Math.pow(b,3);
            var check = modoSuma ? res1n+res2n : res1n-res2n;
            var binVal = modoSuma ? a*xv+b : a*xv-b;
            var triVal = modoSuma
                ? a*a*xv*xv - a*b*xv + b*b
                : a*a*xv*xv + a*b*xv + b*b;
            dinamicos.push(board.create('text', [6, 4.5,
                'Verificacion x=2: '+binVal+' × '+triVal+' = '+binVal*triVal+' = '+check], {
                fontSize: 11, color: '#374151', anchorX: 'middle', fontStyle: 'italic' }));
        }

        var btnS = board.create('text', [3, 3, 'Suma de cubos'], {
            fontSize: 12, color: '#16a34a', fontWeight: 'bold', anchorX: 'middle',
            cssStyle: 'cursor:pointer; padding:5px 12px; background:#dcfce7; border-radius:6px;'
        });
        var btnR = board.create('text', [9, 3, 'Diferencia de cubos'], {
            fontSize: 12, color: '#dc2626', fontWeight: 'bold', anchorX: 'middle',
            cssStyle: 'cursor:pointer; padding:5px 12px; background:#fee2e2; border-radius:6px;'
        });
        btnS.on('down', function() { modoSuma=true; dibujar(); });
        btnR.on('down', function() { modoSuma=false; dibujar(); });

        board.create('text', [6, 1.5, 'Ajusta a y b para ver los productos de cubos'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle' });

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Para la suma de cubos muestra los 6 productos parciales con los 4 que se cancelan tachados en rojo. Para la diferencia muestra el resultado directo. Verificación numérica con x=2 en ambos casos.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfZnTbEzMVs5ddf18riDXiI_ElyRgP1JM8jXX2NdQc8su7u2g/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Binomio por trinomio
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "(x+4)(x²-4x+16) = x³+___" → 64
P2 (Fill): "(x-5)(x²+5x+25) = x³-___" → 125
P3 (Fill): "(2x+3)(4x²-6x+9) = ___x³+___" → 8, 27
P4 (MC): "¿Qué es el trinomio especial para (a+b)(a²?ab+b²)?" → a²-ab+b²
P5 (T/F): "El trinomio especial de (a+b) es el mismo que (a+b)²." → Falso
P6 (Fill): "(3a-2b)(9a²+6ab+4b²) = ___a³-___b³" → 27, 8
P7 (MC): "¿Cuántos términos tiene a³+b³?" → 2 (siempre)
P8 (Fill ingeniería): "10³-8³=(10-8)(100+___+64)=2×___=___" → 80, 244, 488
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 40 60

* - Producto
  - Resultado
* - $(a+b)(a^2-ab+b^2)$
  - $a^3+b^3$ (suma de cubos)
* - $(a-b)(a^2+ab+b^2)$
  - $a^3-b^3$ (diferencia de cubos)
* - Trinomio especial
  - Cuadrado del 1° $\mp$ producto $+$ cuadrado del 2°
* - Error a evitar
  - El término medio del trinomio tiene coeficiente 1, no 2
* - Términos en el resultado
  - Solo 2 (los intermedios se cancelan)
```

:::{admonition} Siguiente clase
:class: tip
Has completado los 7 productos notables. En la clase de autogestión los practicarás todos juntos. La próxima semana los "leerás al revés" — eso se llama **factorización**.

➡️ [Ir a S7·Auto Práctica de productos notables](s7_auto_productos_notables.md)
:::
