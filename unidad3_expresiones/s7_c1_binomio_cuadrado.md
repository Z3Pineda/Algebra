---
title: "S7·C1 Binomio al cuadrado"
---

# S7·C1 Binomio al cuadrado

:::{admonition} 🔧 Área de una placa cuadrada con margen
:class: ingenieria

Un ingeniero diseña una placa cuadrada de lado $(x + 5)$ cm. Necesita calcular el área total para ordenar el material.

$$A = (x + 5)^2$$

En lugar de multiplicar $(x+5)(x+5)$ con FOIL cada vez, existe una **fórmula directa** que te da el resultado inmediatamente:

$$A = x^2 + 2(x)(5) + 5^2 = x^2 + 10x + 25$$

Esta fórmula es el **binomio al cuadrado** — uno de los productos notables más usados en ingeniería mecánica.
:::

**Pregunta detonadora**

> ¿Por qué $(a + b)^2 \neq a^2 + b^2$? ¿Qué término falta?

---

## Teoría

### Fórmula del binomio al cuadrado (suma)

$$(a + b)^2 = a^2 + 2ab + b^2$$

**Demostración:**

$$(a + b)^2 = (a + b)(a + b) = a^2 + ab + ab + b^2 = a^2 + 2ab + b^2$$

**Cómo recordarlo:**

> Cuadrado del primero + **doble producto** + cuadrado del segundo

---

### Fórmula del binomio al cuadrado (diferencia)

$$(a - b)^2 = a^2 - 2ab + b^2$$

**Demostración:**

$$(a - b)^2 = (a - b)(a - b) = a^2 - ab - ab + b^2 = a^2 - 2ab + b^2$$

```{warning}
El error más común: $(a + b)^2 \neq a^2 + b^2$

El término del **doble producto** $2ab$ nunca puede ignorarse. Representa el "área de los rectángulos" en la interpretación geométrica.
```

---

### Interpretación geométrica

Un cuadrado de lado $(a + b)$ tiene área $(a+b)^2$. Al dividirlo en regiones:

| Región | Dimensiones | Área |
|--------|-------------|:----:|
| Cuadrado grande | $a \times a$ | $a^2$ |
| Rectángulo 1 | $a \times b$ | $ab$ |
| Rectángulo 2 | $b \times a$ | $ba = ab$ |
| Cuadrado pequeño | $b \times b$ | $b^2$ |
| **Total** | | $a^2 + 2ab + b^2$ |

---

### Ejemplos

**Ejemplo 1:**
$$(3x + 4)^2 = (3x)^2 + 2(3x)(4) + 4^2 = 9x^2 + 24x + 16$$

**Ejemplo 2:**
$$(5a - 2b)^2 = (5a)^2 - 2(5a)(2b) + (2b)^2 = 25a^2 - 20ab + 4b^2$$

**Ejemplo 3:**
$$(x + 1)^2 = x^2 + 2x + 1$$

**Ejemplo 4 — ingeniería:**
El área de un cuadrado con lado $(d - 0.1)$ mm (pieza con tolerancia negativa):
$$(d - 0.1)^2 = d^2 - 0.2d + 0.01 \text{ mm}^2$$

---

### Identificación del producto notable

Para aplicar la fórmula, identifica $a$ y $b$:

| Expresión | $a$ | $b$ | Resultado |
|-----------|:---:|:---:|-----------|
| $(x + 7)^2$ | $x$ | $7$ | $x^2 + 14x + 49$ |
| $(2x - 3)^2$ | $2x$ | $3$ | $4x^2 - 12x + 9$ |
| $(3a + 5b)^2$ | $3a$ | $5b$ | $9a^2 + 30ab + 25b^2$ |
| $\left(\frac{x}{2} + 4\right)^2$ | $\frac{x}{2}$ | $4$ | $\frac{x^2}{4} + 4x + 16$ |

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_BINOMIO_CUADRADO"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Mostrar el cuadrado de lado (a+b) como figura geométrica
2. Dividirlo en 4 regiones: a², ab, ab, b² — cada una con su color
3. Sumarlas: a²+2ab+b² — la fórmula emerge naturalmente
4. Contraejemplo: (3+4)²=49, pero 3²+4²=25 ≠ 49 — el 2ab=24 es real
5. Resolver (3x+4)² directamente con la fórmula
6. Variante con diferencia: (a-b)² con b negativo
```

---

## Visualización interactiva

Ajusta $a$ y $b$ y observa cómo se forma el binomio al cuadrado geométricamente.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s7c1-binomio2" class="jsxgraph-container" style="height:480px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s7c1-binomio2', {
            boundingbox: [-1, 11, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slA = board.create('slider', [[7,10],[11,10],[1,3,6]], {
            name:'a', snapWidth:0.5, fillColor:'#3b82f6' });
        var slB = board.create('slider', [[7,8.5],[11,8.5],[0.5,2,4]], {
            name:'b', snapWidth:0.5, fillColor:'#f97316' });

        var dinamicos = [];
        function limpiar() {
            dinamicos.forEach(function(o){ try{board.removeObject(o);}catch(e){} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var a = slA.Value(), b = slB.Value();
            var tot = a + b;
            var ox = 0.5, oy = 1; // origen del cuadrado

            // Cuadrado total (a+b)²
            var sq = board.create('polygon', [
                [ox, oy], [ox+tot, oy], [ox+tot, oy+tot], [ox, oy+tot]
            ], {
                fillColor: '#f8fafc', fillOpacity: 1,
                strokeColor: '#374151', strokeWidth: 2,
                vertices: { visible: false }
            });
            dinamicos.push(sq);

            // Región a² (abajo izquierda)
            var r1 = board.create('polygon', [
                [ox, oy], [ox+a, oy], [ox+a, oy+a], [ox, oy+a]
            ], {
                fillColor: '#dbeafe', fillOpacity: 0.8,
                strokeColor: '#1d4ed8', strokeWidth: 1,
                vertices: { visible: false }
            });
            dinamicos.push(r1);
            dinamicos.push(board.create('text',
                [ox+a/2, oy+a/2, 'a² = '+Math.round(a*a*10)/10], {
                fontSize: 11, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle'
            }));

            // Región ab (abajo derecha)
            var r2 = board.create('polygon', [
                [ox+a, oy], [ox+tot, oy], [ox+tot, oy+a], [ox+a, oy+a]
            ], {
                fillColor: '#fef9c3', fillOpacity: 0.8,
                strokeColor: '#ca8a04', strokeWidth: 1,
                vertices: { visible: false }
            });
            dinamicos.push(r2);
            dinamicos.push(board.create('text',
                [ox+a+b/2, oy+a/2, 'ab = '+Math.round(a*b*10)/10], {
                fontSize: 11, color: '#ca8a04', fontWeight: 'bold', anchorX: 'middle'
            }));

            // Región ab (arriba izquierda)
            var r3 = board.create('polygon', [
                [ox, oy+a], [ox+a, oy+a], [ox+a, oy+tot], [ox, oy+tot]
            ], {
                fillColor: '#fef9c3', fillOpacity: 0.8,
                strokeColor: '#ca8a04', strokeWidth: 1,
                vertices: { visible: false }
            });
            dinamicos.push(r3);
            dinamicos.push(board.create('text',
                [ox+a/2, oy+a+b/2, 'ab = '+Math.round(a*b*10)/10], {
                fontSize: 11, color: '#ca8a04', fontWeight: 'bold', anchorX: 'middle'
            }));

            // Región b² (arriba derecha)
            var r4 = board.create('polygon', [
                [ox+a, oy+a], [ox+tot, oy+a], [ox+tot, oy+tot], [ox+a, oy+tot]
            ], {
                fillColor: '#ffedd5', fillOpacity: 0.8,
                strokeColor: '#c2410c', strokeWidth: 1,
                vertices: { visible: false }
            });
            dinamicos.push(r4);
            dinamicos.push(board.create('text',
                [ox+a+b/2, oy+a+b/2, 'b² = '+Math.round(b*b*10)/10], {
                fontSize: 11, color: '#c2410c', fontWeight: 'bold', anchorX: 'middle'
            }));

            // Fórmula
            var a2 = Math.round(a*a*10)/10;
            var ab2 = Math.round(2*a*b*10)/10;
            var b2 = Math.round(b*b*10)/10;
            var tot2 = Math.round((a+b)*(a+b)*10)/10;

            dinamicos.push(board.create('text', [7, 7,
                '(a+b)² = '+a2+' + '+ab2+' + '+b2+' = '+tot2], {
                fontSize: 13, color: '#1d4ed8', fontWeight: 'bold'
            }));
            dinamicos.push(board.create('text', [7, 6,
                'a='+Math.round(a*10)/10+'  b='+Math.round(b*10)/10+'  a+b='+Math.round(tot*10)/10], {
                fontSize: 12, color: '#374151'
            }));
        }

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Cuadrado de lado (a+b) dividido en 4 regiones coloreadas: a² (azul), dos ab (amarillo), b² (naranja). Los deslizadores cambian a y b y todas las áreas se actualizan. La fórmula se muestra con los valores numéricos. Visualiza perfectamente por qué el término 2ab no puede ignorarse.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScY9OMn687osaYdFK1SDXd_67aSkpBz3bXbkfMaMKnufcD-aw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Binomio al cuadrado
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "(x+5)² = x²+___x+___" → 10, 25
P2 (Fill): "(x-3)² = x²+___x+___" → -6, 9
P3 (Fill): "(2x+7)² = ___x²+___x+___" → 4, 28, 49
P4 (Fill): "(3a-4b)² = ___a²+___ab+___b²" → 9, -24, 16
P5 (T/F): "(x+5)² = x²+25" → Falso (falta 10x)
P6 (MC): "¿Cuál es el término del doble producto de (4x-3)²?" → -24x
P7 (Fill ingeniería): "Lado de placa = (x+5) cm. Área = x²+___x+___" → 10, 25
P8 (Fill): "(x/2+3)² = x²/___+___x+___" → 4, 3, 9
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Fórmula
  - Resultado
* - $(a+b)^2$
  - $a^2 + 2ab + b^2$
* - $(a-b)^2$
  - $a^2 - 2ab + b^2$
* - Error común
  - $(a+b)^2 \neq a^2 + b^2$ — falta el $2ab$
* - Patrón
  - Cuadrado del 1° + doble producto + cuadrado del 2°
```

:::{admonition} Siguiente clase
:class: tip
Ya dominas el binomio al cuadrado. En la siguiente clase verás el **producto de binomios conjugados** — la fórmula que elimina el término central completamente.

➡️ [Ir a S7·C2 Producto de binomios conjugados](s7_c2_binomios_conjugados.md)
:::
