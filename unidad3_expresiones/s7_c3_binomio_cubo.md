---
title: "S7·C3 Binomio al cubo"
---

# S7·C3 Binomio al cubo

:::{admonition} 🔧 Volumen de un cubo con tolerancia
:class: ingenieria

Una pieza cúbica tiene lado nominal $a$ mm. Por variaciones del proceso, el lado real es $(a + e)$ mm donde $e$ es el error dimensional.

El volumen real es:
$$(a + e)^3 = a^3 + 3a^2e + 3ae^2 + e^3$$

Si $a = 50$ mm y $e = 0.2$ mm:
$$(50 + 0.2)^3 = 125000 + 3(2500)(0.2) + 3(50)(0.04) + 0.008$$
$$= 125000 + 1500 + 6 + 0.008 = 126506.008 \text{ mm}^3$$

El término $3a^2e = 1500$ mm³ es el más significativo — los términos con $e^2$ y $e^3$ son casi despreciables cuando $e$ es pequeño.
:::

**Pregunta detonadora**

> ¿Cuántos términos tiene $(a+b)^3$? ¿Puedes predecirlos sin hacer los cálculos?

---

## Teoría

### Fórmula del cubo de un binomio (suma)

$$(a + b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$

**Demostración:**

$$(a+b)^3 = (a+b)^2(a+b) = (a^2+2ab+b^2)(a+b)$$

$$= a^3 + a^2b + 2a^2b + 2ab^2 + ab^2 + b^3$$

$$= a^3 + 3a^2b + 3ab^2 + b^3$$

**Cómo recordarlo:**

> $a^3$ + **tres** $a^2b$ + **tres** $ab^2$ + $b^3$

Los coeficientes son **1, 3, 3, 1** — los mismos que en el triángulo de Pascal para la fila 3.

---

### Fórmula del cubo de un binomio (diferencia)

$$(a - b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$

**Regla de los signos:** los signos **alternan** — empezando con positivo.

| Término | Signo | Expresión |
|---------|:-----:|-----------|
| 1° | $+$ | $a^3$ |
| 2° | $-$ | $3a^2b$ |
| 3° | $+$ | $3ab^2$ |
| 4° | $-$ | $b^3$ |

---

### Ejemplos

**Ejemplo 1:**
$$(x + 2)^3 = x^3 + 3x^2(2) + 3x(4) + 8 = x^3 + 6x^2 + 12x + 8$$

**Ejemplo 2:**
$$(x - 3)^3 = x^3 - 3x^2(3) + 3x(9) - 27 = x^3 - 9x^2 + 27x - 27$$

**Ejemplo 3:**
$$(2a + 5)^3 = (2a)^3 + 3(2a)^2(5) + 3(2a)(25) + 125$$
$$= 8a^3 + 3(4a^2)(5) + 6a(25) + 125 = 8a^3 + 60a^2 + 150a + 125$$

---

### Comparación de los cuatro productos notables

| Producto | Fórmula | Términos |
|----------|---------|:--------:|
| $(a+b)^2$ | $a^2+2ab+b^2$ | 3 |
| $(a-b)^2$ | $a^2-2ab+b^2$ | 3 |
| $(a+b)(a-b)$ | $a^2-b^2$ | 2 |
| $(a+b)^3$ | $a^3+3a^2b+3ab^2+b^3$ | 4 |
| $(a-b)^3$ | $a^3-3a^2b+3ab^2-b^3$ | 4 |

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_BINOMIO_CUBO"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Mostrar el cubo de lado (a+b) como figura 3D dividida en 8 piezas
2. Las 8 piezas son: 1 cubo a³, 3 prismas a²b, 3 prismas ab², 1 cubo b³
3. Los coeficientes 1,3,3,1 son las cantidades de cada tipo de pieza
4. Conectar con el triángulo de Pascal: fila 3 = 1,3,3,1
5. Resolver (x+2)³ directamente con la fórmula
6. Variante con diferencia: signos alternos
```

---

## Visualización interactiva

Aplica la fórmula del binomio al cubo con distintos valores. Verifica el resultado sustituyendo.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s7c3-cubo" class="jsxgraph-container" style="height:440px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s7c3-cubo', {
            boundingbox: [-1, 11, 13, -2],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slA = board.create('slider', [[7,10],[11,10],[1,2,5]], {
            name:'a', snapWidth:1, fillColor:'#3b82f6' });
        var slB = board.create('slider', [[7,8.5],[11,8.5],[1,3,8]], {
            name:'b', snapWidth:1, fillColor:'#f97316' });
        var btnSuma = true;

        var dinamicos = [];
        function limpiar() {
            dinamicos.forEach(function(o){ try{board.removeObject(o);}catch(e){} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var a = Math.round(slA.Value());
            var b = Math.round(slB.Value());
            var s = btnSuma ? 1 : -1;
            var signo = btnSuma ? '+' : '-';

            var t1 = a*a*a;
            var t2 = 3*a*a*b*s;
            var t3 = 3*a*b*b;
            var t4 = b*b*b*s;

            // Expresión
            dinamicos.push(board.create('text', [6, 10,
                '(' + a + 'x ' + signo + ' ' + b + ')³'], {
                fontSize: 17, color: '#374151', fontWeight: 'bold', anchorX: 'middle' }));

            // Coeficientes
            dinamicos.push(board.create('text', [6, 9,
                'Coeficientes (Pascal fila 3): 1, 3, 3, 1'], {
                fontSize: 11, color: '#6b7280', anchorX: 'middle', fontStyle: 'italic' }));

            // Términos
            var terminos = [
                { val: t1,  expr: t1+'x³',  color: '#3b82f6' },
                { val: t2,  expr: (t2>=0?'+':'')+t2+'x²', color: '#16a34a' },
                { val: t3,  expr: '+'+t3+'x', color: '#f97316' },
                { val: t4,  expr: (t4>=0?'+':'')+t4,  color: '#7c3aed' }
            ];

            terminos.forEach(function(t, i) {
                dinamicos.push(board.create('text', [1.5+i*2.8, 7.5, t.expr], {
                    fontSize: 14, color: t.color, fontWeight: 'bold', anchorX: 'middle' }));
            });

            // Resultado completo
            var total = t1 + t2 + t3 + t4;
            dinamicos.push(board.create('text', [6, 6.2,
                '= ' + t1 + 'x³ ' + (t2>=0?'+ ':'')+t2 + 'x² + ' + t3 + 'x ' + (t4>=0?'+ ':'')+t4], {
                fontSize: 15, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));

            // Verificación con x=1
            var xval = 1;
            var izq = Math.pow(a*xval + b*s, 3);
            var der = t1 + t2 + t3 + t4;
            dinamicos.push(board.create('text', [6, 4.8,
                'Verificacion x=1: ('+a+(s>0?'+':'-')+b+')³ = '+(a+b*s)+'³ = '+izq+' = '+der], {
                fontSize: 11, color: '#374151', anchorX: 'middle', fontStyle: 'italic' }));
        }

        var btnS = board.create('text', [3, 3.5, '(ax + b)³'], {
            fontSize: 12, color: '#16a34a', fontWeight: 'bold', anchorX: 'middle',
            cssStyle: 'cursor:pointer; padding:5px 12px; background:#dcfce7; border-radius:6px;'
        });
        var btnR = board.create('text', [9, 3.5, '(ax - b)³'], {
            fontSize: 12, color: '#dc2626', fontWeight: 'bold', anchorX: 'middle',
            cssStyle: 'cursor:pointer; padding:5px 12px; background:#fee2e2; border-radius:6px;'
        });
        btnS.on('down', function() { btnSuma=true; dibujar(); });
        btnR.on('down', function() { btnSuma=false; dibujar(); });

        board.create('text', [6, 1.5,
            'Ajusta a y b, cambia entre suma y diferencia'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle' });

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Deslizadores a y b con botones para suma/diferencia. Muestra los 4 términos coloreados con coeficientes 1,3,3,1. La verificación con x=1 confirma el resultado. Los signos alternos se muestran correctamente para la diferencia.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdJSUBci-C50OSov5SG2yYXjhYqbxiS4890tyw4INVL-lhfOg/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Binomio al cubo
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "(x+1)³ = x³+___x²+___x+___" → 3, 3, 1
P2 (Fill): "(x-2)³ = x³-___x²+___x-___" → 6, 12, 8
P3 (Fill): "(2x+3)³. El coeficiente de x² es ___" → 36
P4 (MC): "Los coeficientes de (a+b)³ son:" → 1, 3, 3, 1
P5 (T/F): "(a-b)³ = a³-b³" → Falso (faltan los términos medios)
P6 (Fill): "(a-b)³. El signo del 3° término (3ab²) es ___" → positivo
P7 (Fill ingeniería): "Lado=50+0.2. Volumen=(50)³+3(50)²(0.2)+3(50)(0.04)+0.008 = ___mm³" → 126506.008
P8 (Fill): "(x+y)³. El 2° término es ___x²y" → 3
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Fórmula
  - Resultado
* - $(a+b)^3$
  - $a^3 + 3a^2b + 3ab^2 + b^3$
* - $(a-b)^3$
  - $a^3 - 3a^2b + 3ab^2 - b^3$
* - Coeficientes
  - $1, 3, 3, 1$ (triángulo de Pascal, fila 3)
* - Signos en diferencia
  - Alternan: $+, -, +, -$
* - Número de términos
  - 4
```

:::{admonition} Siguiente clase
:class: tip
Con tres productos notables dominados, en la siguiente clase aprenderás el **producto de un binomio por un trinomio** — el que resulta directamente de la suma y diferencia de cubos.

➡️ [Ir a S7·C4 Producto de un binomio por un trinomio](s7_c4_binomio_por_trinomio.md)
:::
