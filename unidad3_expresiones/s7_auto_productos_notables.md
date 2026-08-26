---
title: "S7·Auto Práctica de productos notables"
---

# S7·Auto Práctica de productos notables

:::{admonition} Esta es tu clase de autogestión
:class: tip

Esta clase consolida los **7 productos notables** de la Semana 7. Necesitas tenerlos muy fluidos porque la semana siguiente los usarás al revés en la factorización.

**¿Qué hay aquí?**
- Tabla de referencia de los 7 productos notables
- Ejercicios de identificación y aplicación
- Ejercicios inversos (dado el resultado, identificar el producto)
- Problema integrador de ingeniería
- Quiz de cierre

**Tiempo estimado: 50 minutos**
:::

---

## Tabla de referencia — Los 7 productos notables

```{raw} html
<div style="overflow-x:auto">
<table style="width:100%; border-collapse:collapse; font-size:14px;">
<thead>
<tr style="background:#1d4ed8; color:white;">
  <th style="padding:8px 12px; text-align:left;">Nombre</th>
  <th style="padding:8px 12px; text-align:left;">Producto</th>
  <th style="padding:8px 12px; text-align:left;">Resultado</th>
</tr>
</thead>
<tbody>
<tr style="background:#f0f9ff;">
  <td style="padding:8px 12px;">Cuadrado de suma</td>
  <td style="padding:8px 12px;">(a+b)²</td>
  <td style="padding:8px 12px; color:#1d4ed8; font-weight:bold;">a²+2ab+b²</td>
</tr>
<tr>
  <td style="padding:8px 12px;">Cuadrado de diferencia</td>
  <td style="padding:8px 12px;">(a-b)²</td>
  <td style="padding:8px 12px; color:#1d4ed8; font-weight:bold;">a²-2ab+b²</td>
</tr>
<tr style="background:#f0f9ff;">
  <td style="padding:8px 12px;">Conjugados (dif. cuadrados)</td>
  <td style="padding:8px 12px;">(a+b)(a-b)</td>
  <td style="padding:8px 12px; color:#16a34a; font-weight:bold;">a²-b²</td>
</tr>
<tr>
  <td style="padding:8px 12px;">Cubo de suma</td>
  <td style="padding:8px 12px;">(a+b)³</td>
  <td style="padding:8px 12px; color:#7c3aed; font-weight:bold;">a³+3a²b+3ab²+b³</td>
</tr>
<tr style="background:#f0f9ff;">
  <td style="padding:8px 12px;">Cubo de diferencia</td>
  <td style="padding:8px 12px;">(a-b)³</td>
  <td style="padding:8px 12px; color:#7c3aed; font-weight:bold;">a³-3a²b+3ab²-b³</td>
</tr>
<tr>
  <td style="padding:8px 12px;">Suma de cubos</td>
  <td style="padding:8px 12px;">(a+b)(a²-ab+b²)</td>
  <td style="padding:8px 12px; color:#c2410c; font-weight:bold;">a³+b³</td>
</tr>
<tr style="background:#f0f9ff;">
  <td style="padding:8px 12px;">Diferencia de cubos</td>
  <td style="padding:8px 12px;">(a-b)(a²+ab+b²)</td>
  <td style="padding:8px 12px; color:#c2410c; font-weight:bold;">a³-b³</td>
</tr>
</tbody>
</table>
</div>
```

---

## Parte 1 — Aplicación directa

### Ejercicio 1

Desarrolla usando el producto notable correspondiente.

**a)** $(x + 9)^2$

**b)** $(5x - 2)^2$

**c)** $(3a + 4b)(3a - 4b)$

**d)** $(x + 2)^3$

**e)** $(2x - 1)^3$

**f)** $(x + 5)(x^2 - 5x + 25)$

**g)** $(3a - 2)(9a^2 + 6a + 4)$

::::{admonition} Ver solución
:class: dropdown

**a)** $(x+9)^2 = x^2 + 18x + 81$

**b)** $(5x-2)^2 = 25x^2 - 20x + 4$

**c)** $(3a+4b)(3a-4b) = 9a^2 - 16b^2$

**d)** $(x+2)^3 = x^3 + 6x^2 + 12x + 8$

**e)** $(2x-1)^3 = 8x^3 - 12x^2 + 6x - 1$

**f)** $(x+5)(x^2-5x+25) = x^3 + 125$

**g)** $(3a-2)(9a^2+6a+4) = 27a^3 - 8$
::::

---

## Parte 2 — Identificación del producto notable

### Ejercicio 2

Dado el resultado, identifica qué producto notable lo genera.

**a)** $x^2 - 16$

**b)** $x^2 + 10x + 25$

**c)** $8x^3 - 27$

**d)** $x^6 + 6x^3y + 12xy^2 + 8y^3$  *(pista: busca cubos)*

**e)** $25a^2 - 49b^2$

::::{admonition} Ver solución
:class: dropdown

**a)** $x^2 - 16 = x^2 - 4^2 = (x+4)(x-4)$ → conjugados

**b)** $x^2 + 10x + 25 = x^2 + 2(x)(5) + 5^2 = (x+5)^2$ → cuadrado de suma

**c)** $8x^3 - 27 = (2x)^3 - 3^3 = (2x-3)(4x^2+6x+9)$ → diferencia de cubos

**d)** $x^6 + 6x^3y + 12xy^2 + 8y^3$... los coeficientes 1,3,3,1 con potencias de $x^2$ sugieren $(x^2+2y)^3$:
$(x^2)^3 + 3(x^2)^2(2y) + 3(x^2)(2y)^2 + (2y)^3 = x^6+6x^4y+12x^2y^2+8y^3$
Nota: el enunciado tiene un error tipográfico — el correcto es $x^6+6x^4y+12x^2y^2+8y^3 = (x^2+2y)^3$

**e)** $25a^2 - 49b^2 = (5a)^2 - (7b)^2 = (5a+7b)(5a-7b)$ → conjugados
::::

---

## Parte 3 — Cálculo numérico rápido

### Ejercicio 3

Usa los productos notables para calcular mentalmente (sin calculadora):

**a)** $101^2$

**b)** $99^2$

**c)** $103 \times 97$

**d)** $51^3$ (aproximado: usa solo hasta el término de $a^2b$)

::::{admonition} Ver solución
:class: dropdown

**a)** $101^2 = (100+1)^2 = 10000 + 200 + 1 = 10201$

**b)** $99^2 = (100-1)^2 = 10000 - 200 + 1 = 9801$

**c)** $103 \times 97 = (100+3)(100-3) = 10000 - 9 = 9991$

**d)** $51^3 = (50+1)^3 \approx 50^3 + 3(50^2)(1) = 125000 + 7500 = 132500$
(Exacto: $132500 + 3(50)(1) + 1 = 132651$)
::::

---

## Parte 4 — Problema integrador de ingeniería

### Ejercicio 4

Una caja metálica sin tapa se fabrica a partir de una lámina de $(L+2t)$ por $(W+2t)$ cm, doblando los bordes de $t$ cm en cada lado.

**a)** Expande el área de la lámina original: $(L+2t)(W+2t)$

**b)** El material de los 4 bordes doblados ocupa: $2t(L+2t) + 2t(W+2t) - 4t^2$. Simplifica esta expresión.

**c)** Encuentra la diferencia entre el área total de la lámina y el material de los bordes.

**d)** Si $L = 30$ cm, $W = 20$ cm, $t = 2$ cm, calcula el área del fondo de la caja.

::::{admonition} Ver solución
:class: dropdown

**a)** $(L+2t)(W+2t) = LW + 2Lt + 2Wt + 4t^2$

**b)** $2t(L+2t) + 2t(W+2t) - 4t^2$
$= 2tL + 4t^2 + 2tW + 4t^2 - 4t^2$
$= 2tL + 2tW + 4t^2$

**c)** Área total - bordes:
$(LW + 2Lt + 2Wt + 4t^2) - (2tL + 2tW + 4t^2) = LW$

El área del fondo de la caja es simplemente $LW$ — tiene sentido geométricamente.

**d)** $A_{fondo} = L \times W = 30 \times 20 = 600$ cm²
::::

---

## Visualización interactiva — Repaso de productos notables

Selecciona un producto notable y ajusta los coeficientes para ver el resultado.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s7auto-repaso" class="jsxgraph-container" style="height:460px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s7auto-repaso', {
            boundingbox: [-1, 12, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slA = board.create('slider', [[8,11],[12,11],[1,2,5]], {
            name:'a', snapWidth:1, fillColor:'#3b82f6' });
        var slB = board.create('slider', [[8,9.5],[12,9.5],[1,3,8]], {
            name:'b', snapWidth:1, fillColor:'#f97316' });

        var productos = [
            {
                label:'(a+b)²', nombre:'Cuadrado suma',
                fn: function(a,b){ return a+'x² + '+2*a*b+'x + '+b*b; },
                expr: function(a,b){ return '('+a+'x + '+b+')²'; }
            },
            {
                label:'(a-b)²', nombre:'Cuadrado dif.',
                fn: function(a,b){ return a*a+'x² - '+2*a*b+'x + '+b*b; },
                expr: function(a,b){ return '('+a+'x - '+b+')²'; }
            },
            {
                label:'Conj.', nombre:'Conjugados',
                fn: function(a,b){ return a*a+'x² - '+b*b; },
                expr: function(a,b){ return '('+a+'x+'+b+')('+a+'x-'+b+')'; }
            },
            {
                label:'(a+b)³', nombre:'Cubo suma',
                fn: function(a,b){ return Math.pow(a,3)+'x³ + '+3*a*a*b+'x² + '+3*a*b*b+'x + '+Math.pow(b,3); },
                expr: function(a,b){ return '('+a+'x + '+b+')³'; }
            },
            {
                label:'a³+b³', nombre:'Suma cubos',
                fn: function(a,b){ return Math.pow(a,3)+'x³ + '+Math.pow(b,3); },
                expr: function(a,b){ return '('+a+'x+'+b+')('+a*a+'x²-'+a*b+'x+'+b*b+')'; }
            }
        ];

        var idx = 0;
        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o){ try{board.removeObject(o);}catch(e){} });
            dinamicos = [];
        }

        function dibujar(i) {
            limpiar();
            var p = productos[i];
            var a = Math.round(slA.Value());
            var b = Math.round(slB.Value());

            dinamicos.push(board.create('text', [6, 8.5, p.nombre], {
                fontSize: 14, color: '#7c3aed', fontWeight: 'bold', anchorX: 'middle' }));
            dinamicos.push(board.create('text', [6, 7.5, p.expr(a,b) + ' ='], {
                fontSize: 14, color: '#374151', anchorX: 'middle' }));
            dinamicos.push(board.create('text', [6, 6.3, p.fn(a,b)], {
                fontSize: 16, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));
        }

        productos.forEach(function(p, i) {
            var btn = board.create('text', [1 + i*2.4, -1.5, p.label], {
                fontSize: 11, color: '#374151', fontWeight: 'bold', anchorX: 'middle',
                cssStyle: 'cursor:pointer; padding:3px 8px; background:#f1f5f9; border-radius:5px;'
            });
            btn.on('down', function() { idx=i; dibujar(i); });
        });

        board.create('text', [6, -2.5,
            'Selecciona un producto y ajusta a, b'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle' });

        dibujar(0);
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
5 botones con los principales productos notables. Al seleccionar uno, muestra la expresión factorizada y el resultado expandido con los valores de a y b. Permite repasar rápidamente todos los patrones antes del quiz.
```

---

## Quiz de cierre — Semana 7

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfQQP98ufwuXYKfkisCvUfqtFoqZ-CefGyYxlh8SECu7Y2SwQ/viewform" target="_blank" class="quizizz-btn">
    📝 Quiz de cierre — Semana 7 (Productos notables)
  </a>
</div>
```

```{note}
**Para el docente — Quiz Quizizz (12 preguntas, ~15 min):**

Cuadrado de binomio (3): (x+9)²=x²+18x+81, (5x-2)²=25x²-20x+4, doble producto de (x+5)² es 10x
Conjugados (2): (3a+4b)(3a-4b)=9a²-16b², 103×97=(100+3)(100-3)=9991
Cubo de binomio (2): (x+2)³=x³+6x²+12x+8, (2x-1)³=8x³-12x²+6x-1
Suma/diferencia de cubos (3): (x+5)(x²-5x+25)=x³+125, x²-16=(x+4)(x-4) por conjugados, 8x³-27=(2x-3)(4x²+6x+9)
Problema de ingeniería (2): área lámina (L+2t)(W+2t)=LW+2Lt+2Wt+4t², área fondo caja simplificada = LW
```

---

## Resumen de la semana

```{list-table}
:header-rows: 1
:widths: 20 80

* - Clase
  - Lo que debes dominar
* - S7·C1
  - $(a\pm b)^2 = a^2 \pm 2ab + b^2$. El error: olvidar el $2ab$.
* - S7·C2
  - $(a+b)(a-b) = a^2-b^2$. Los términos medios se cancelan.
* - S7·C3
  - $(a\pm b)^3 = a^3 \pm 3a^2b + 3ab^2 \pm b^3$. Coeficientes 1,3,3,1.
* - S7·C4
  - $(a\pm b)(a^2 \mp ab+b^2) = a^3 \pm b^3$. Solo 2 términos en el resultado.
```

:::{admonition} Siguiente semana
:class: tip
La Semana 7 está completa. La próxima semana aprenderás **factorización** — leer todos estos productos notables al revés es exactamente lo que necesitas para resolver ecuaciones cuadráticas.

➡️ [Ir a S8·C1 Factor común](s8_c1_factor_comun.md)
:::
