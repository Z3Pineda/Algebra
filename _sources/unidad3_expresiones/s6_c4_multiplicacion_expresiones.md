---
title: "S6·C4 Multiplicación de expresiones algebraicas"
---

# S6·C4 Multiplicación de expresiones algebraicas

:::{admonition} 🔧 Área de una placa metálica con tolerancia
:class: ingenieria

Una placa rectangular de acero tiene dimensiones nominales de $a$ por $b$ milímetros. Al fabricarla, ambas dimensiones tienen un exceso de $t$ mm por tolerancia del proceso.

Dimensiones reales: $(a + t)$ por $(b + t)$

Área real:
$$A = (a + t)(b + t) = ab + at + bt + t^2$$

Si $a = 100$ mm, $b = 80$ mm, $t = 0.5$ mm:
$$A = (100)(80) + (100)(0.5) + (80)(0.5) + (0.5)^2 = 8000 + 50 + 40 + 0.25 = 8090.25 \text{ mm}^2$$

Este cálculo requiere multiplicar dos binomios — la operación que aprenderás hoy.
:::

**Pregunta detonadora**

> ¿Cuántos términos resultan de multiplicar $(a + b)(c + d)$? ¿Por qué?

---

## Teoría

### Multiplicación de monomio por polinomio

Se distribuye el monomio sobre cada término del polinomio (propiedad distributiva):

$$k \cdot (a_1 + a_2 + \ldots + a_n) = k \cdot a_1 + k \cdot a_2 + \ldots + k \cdot a_n$$

**Ejemplos:**

$$3x(2x^2 - 5x + 4) = 6x^3 - 15x^2 + 12x$$

$$-2a^2(3a - 7b + 1) = -6a^3 + 14a^2b - 2a^2$$

**Regla de exponentes al multiplicar:**

$$x^m \cdot x^n = x^{m+n}$$

$$x^3 \cdot x^2 = x^5 \qquad a^2 \cdot a = a^3 \qquad y \cdot y^4 = y^5$$

---

### Multiplicación de binomio por binomio — método FOIL

Para multiplicar $(a + b)(c + d)$ se multiplican todos los pares posibles:

$$\underbrace{ac}_{\text{Primeros}} + \underbrace{ad}_{\text{Externos}} + \underbrace{bc}_{\text{Internos}} + \underbrace{bd}_{\text{Últimos}}$$

$$(a + b)(c + d) = ac + ad + bc + bd$$

:::{admonition} 🔧 FOIL significa
:class: ingenieria
- **F**irst (Primeros): los dos primeros términos
- **O**uter (Externos): el primero con el último
- **I**nner (Internos): el último con el primero
- **L**ast (Últimos): los dos últimos términos
:::

**Ejemplo 1:**

$$(x + 3)(x + 5) = x^2 + 5x + 3x + 15 = x^2 + 8x + 15$$

**Ejemplo 2:**

$$(2x - 4)(3x + 1) = 6x^2 + 2x - 12x - 4 = 6x^2 - 10x - 4$$

**Ejemplo 3 — regresa al problema de la placa:**

$$(a + t)(b + t) = ab + at + bt + t^2$$

---

### Multiplicación de polinomio por polinomio

Se multiplica cada término del primer polinomio por cada término del segundo:

$$(2x^2 - 3x + 1)(x + 4)$$

$$= 2x^2(x + 4) - 3x(x + 4) + 1(x + 4)$$

$$= 2x^3 + 8x^2 - 3x^2 - 12x + x + 4$$

$$= 2x^3 + 5x^2 - 11x + 4$$

**Número de productos parciales:**
$$(\text{términos en A}) \times (\text{términos en B})$$

Un binomio × trinomio da $2 \times 3 = 6$ productos parciales antes de combinar.

---

### Regla del signo en la multiplicación

| Signos | Resultado | Ejemplo |
|:------:|:---------:|---------|
| $(+)(+)$ | $+$ | $3x \cdot 5x = 15x^2$ |
| $(+)(-)$ | $-$ | $3x \cdot (-5x) = -15x^2$ |
| $(-)(+)$ | $-$ | $(-3x) \cdot 5x = -15x^2$ |
| $(-)(-)$ | $+$ | $(-3x) \cdot (-5x) = 15x^2$ |

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_MULTIPLICACION_EXPR"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Mostrar la placa metálica y la necesidad de multiplicar (a+t)(b+t)
2. Animar el método FOIL con flechas de color conectando cada par: F=azul, O=verde, I=rojo, L=morado
3. Mostrar que FOIL es la distributiva aplicada dos veces
4. Ejemplo numérico: (x+3)(x+5) con cada producto coloreado
5. Mostrar (2x²-3x+1)(x+4) como extensión natural del FOIL
6. Cierre: número de productos = (términos A)×(términos B)
```

---

## Visualización interactiva

Observa cómo se construye el producto de dos binomios. Mueve los coeficientes y ve todos los productos parciales.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s6c4-foil" class="jsxgraph-container" style="height:480px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s6c4-foil', {
            boundingbox: [-1, 12, 13, -2],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        // (ax + b)(cx + d)
        var slA = board.create('slider', [[1,11],[4,11],[-5,1,5]], {
            name:'a', snapWidth:1, fillColor:'#3b82f6' });
        var slB = board.create('slider', [[1,9.5],[4,9.5],[-9,3,9]], {
            name:'b', snapWidth:1, fillColor:'#3b82f6' });
        var slC = board.create('slider', [[7,11],[10,11],[-5,2,5]], {
            name:'c', snapWidth:1, fillColor:'#f97316' });
        var slD = board.create('slider', [[7,9.5],[10,9.5],[-9,5,9]], {
            name:'d', snapWidth:1, fillColor:'#f97316' });

        function r(s) { return Math.round(s.Value()); }

        function polyStr(a, b) {
            var s = '';
            if (a === 1) s = 'x';
            else if (a === -1) s = '-x';
            else s = String(a) + 'x';
            if (b >= 0) s += ' + ' + b;
            else s += ' - ' + Math.abs(b);
            return s;
        }

        function coefStr(n) {
            if (n === 1) return '';
            if (n === -1) return '-';
            return String(n);
        }

        var dinamicos = [];
        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e){} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var a=r(slA), b=r(slB), c=r(slC), d=r(slD);

            // Binomios
            dinamicos.push(board.create('text', [2.5, 11.8, '(' + polyStr(a,b) + ')'], {
                fontSize: 13, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));
            dinamicos.push(board.create('text', [8.5, 11.8, '(' + polyStr(c,d) + ')'], {
                fontSize: 13, color: '#c2410c', fontWeight: 'bold', anchorX: 'middle' }));

            // 4 productos FOIL
            var F = a*c; // x²
            var O = a*d; // x (externo)
            var I = b*c; // x (interno)
            var L = b*d; // constante

            var colores = ['#3b82f6','#16a34a','#f97316','#7c3aed'];
            var labels = ['F (Primeros)','O (Externos)','I (Internos)','L (Ultimos)'];
            var prods = [
                coefStr(F) + 'x²',
                (O >= 0 ? '+' : '') + coefStr(O) + 'x',
                (I >= 0 ? '+' : '') + coefStr(I) + 'x',
                (L >= 0 ? '+' : '') + String(L)
            ];

            [0,1,2,3].forEach(function(i) {
                dinamicos.push(board.create('text', [3+i*2.5, 7.5, labels[i]], {
                    fontSize: 10, color: colores[i], anchorX: 'middle' }));
                dinamicos.push(board.create('text', [3+i*2.5, 6.5, prods[i]], {
                    fontSize: 14, color: colores[i], fontWeight: 'bold', anchorX: 'middle' }));
            });

            // Combinar los x
            var coefX = O + I;
            var resultado2 = F;
            var resultado1 = coefX;
            var resultado0 = L;

            function polyRes(a, b, c) {
                var s = '';
                if (a === 1) s = 'x²';
                else if (a === -1) s = '-x²';
                else if (a !== 0) s = String(a) + 'x²';
                if (b === 1) s += (s?'':' ') + (s?'+x':'x');
                else if (b === -1) s += ' -x';
                else if (b > 0 && s) s += ' + ' + b + 'x';
                else if (b > 0) s = b + 'x';
                else if (b < 0) s += ' - ' + Math.abs(b) + 'x';
                if (c > 0 && s) s += ' + ' + c;
                else if (c > 0) s = String(c);
                else if (c < 0) s += ' - ' + Math.abs(c);
                return s || '0';
            }

            dinamicos.push(board.create('text', [6, 5, '= ' + polyRes(resultado2, resultado1, resultado0)], {
                fontSize: 16, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));

            if (O !== 0 && I !== 0) {
                dinamicos.push(board.create('text', [6, 4,
                    'Terminos x: ' + coefStr(O) + 'x + (' + coefStr(I) + 'x) = ' + coefStr(coefX) + 'x'], {
                    fontSize: 11, color: '#374151', anchorX: 'middle', fontStyle: 'italic' }));
            }
        }

        board.create('text', [6, 1,
            'Ajusta a, b, c, d para ver como cambia el producto'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle' });

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
4 deslizadores para (ax+b)(cx+d). Muestra los 4 productos FOIL con colores distintos (azul, verde, naranja, morado). La suma de los términos en x (O+I) se muestra explícitamente. El resultado final aparece simplificado. Ideal para observar en tiempo real cómo cambia el producto al modificar los coeficientes.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-oetGWhvtpCDFfQGxPmaqw6DijNr7FrM0stxrMPkBWpqqHw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Multiplicación de expresiones
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (10 preguntas, ~12 min):**

P1 (Fill): "3x(2x²-5x+4) = ___x³+___x²+___x" → 6, -15, 12
P2 (Fill): "(x+3)(x+5) = x²+___x+___" → 8, 15
P3 (Fill): "(x-4)(x+2) = x²+___x+___" → -2, -8
P4 (Fill): "(2x+1)(3x-4) = ___x²+___x+___" → 6, -5, -4
P5 (T/F): "(x+3)² = x²+9" → Falso (falta el término 6x)
P6 (Fill): "x² · x³ = x^___" → 5
P7 (Fill): "(-3x²)(4x³) = ___x^___" → -12, 5
P8 (Fill): "(x+2)(x²-3x+1) = x³+___x²+___x+___" → -1, -5, 2
P9 (MC ingeniería): "(a+t)(b+t) con a=100,b=80,t=0.5. Área = ___mm²" → 8090.25
P10 (Fill): "(2x-3)(2x+3) = 4x²+___" → -9 (diferencia de cuadrados — anticipo)
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Tipo
  - Procedimiento
* - Monomio × polinomio
  - Distribuir el monomio sobre cada término
* - Binomio × binomio (FOIL)
  - $F + O + I + L$ — 4 productos, combinar términos semejantes
* - Polinomio × polinomio
  - Cada término de A × cada término de B
* - Regla de exponentes
  - $x^m \cdot x^n = x^{m+n}$
* - Número de productos
  - $(\text{términos en A}) \times (\text{términos en B})$
```

:::{admonition} Siguiente clase
:class: tip
Has dominado la multiplicación general. En la clase de autogestión practicarás todo lo de la semana. La próxima semana aprenderás los **productos notables** — los casos especiales de multiplicación que aparecen constantemente en ingeniería.

➡️ [Ir a S6·Auto Ejercicios de simplificación algebraica](s6_auto_simplificacion_algebraica.md)
:::
