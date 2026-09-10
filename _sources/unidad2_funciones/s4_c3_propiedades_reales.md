---
title: "S4·C3 Propiedades de los números reales"
---

# S4·C3 Propiedades de los números reales

:::{admonition} 🔧 Cálculo de fuerzas en una estructura mecánica
:class: ingenieria

Un ingeniero calcula la fuerza total en una estructura con tres componentes:

$$F_{total} = F_1 + F_2 + F_3 = 150 + 200 + 75 = 425 \text{ N}$$

Luego necesita verificar que el orden en que suma no importa:

$$F_1 + F_2 + F_3 = F_3 + F_1 + F_2 = 425 \text{ N}$$

También necesita distribuir una fuerza de 300 N entre dos apoyos con razón 2:1:

$$300 \times \frac{2}{3} + 300 \times \frac{1}{3} = 300 \times \left(\frac{2}{3} + \frac{1}{3}\right) = 300 \times 1 = 300 \text{ N}$$

Estas manipulaciones son posibles gracias a las **propiedades de los números reales**.
:::

**Pregunta detonadora**

> ¿Es lo mismo calcular $(2 \times 3) \times 4$ que $2 \times (3 \times 4)$? ¿Y $(8 - 3) - 2$ que $8 - (3 - 2)$? ¿Por qué uno funciona y el otro no?

---

## Teoría

### Propiedades de la suma

#### Conmutativa
$$a + b = b + a$$

El orden de los sumandos no cambia la suma.

$$150 + 200 = 200 + 150 = 350$$

#### Asociativa
$$(a + b) + c = a + (b + c)$$

La forma de agrupar no cambia el resultado.

$$(150 + 200) + 75 = 150 + (200 + 75) = 425$$

#### Elemento neutro (cero)
$$a + 0 = 0 + a = a$$

Sumar cero no cambia el número.

#### Elemento inverso (opuesto)
$$a + (-a) = 0$$

Todo número tiene un opuesto que al sumarlo da cero.

$$350 + (-350) = 0$$

---

### Propiedades de la multiplicación

#### Conmutativa
$$a \times b = b \times a$$

$$\frac{3}{4} \times 200 = 200 \times \frac{3}{4} = 150$$

#### Asociativa
$$(a \times b) \times c = a \times (b \times c)$$

$$(2 \times 3) \times 4 = 2 \times (3 \times 4) = 24$$

#### Elemento neutro (uno)
$$a \times 1 = 1 \times a = a$$

#### Elemento inverso (recíproco)
$$a \times \frac{1}{a} = 1 \quad (a \neq 0)$$

$$5 \times \frac{1}{5} = 1$$

#### Propiedad del cero
$$a \times 0 = 0 \times a = 0$$

```{warning}
**División entre cero no está definida.** $\frac{a}{0}$ no existe para ningún valor de $a$.  
En ingeniería: si el denominador de una ecuación puede ser cero, hay una condición de indeterminación que debe analizarse cuidadosamente.
```

---

### Propiedad distributiva

La propiedad que más usarás en álgebra:

$$a \times (b + c) = a \times b + a \times c$$

$$a \times (b - c) = a \times b - a \times c$$

**Ejemplos:**

$$3 \times (4 + 5) = 3 \times 4 + 3 \times 5 = 12 + 15 = 27$$

$$300 \times \left(\frac{2}{3} + \frac{1}{3}\right) = 300 \times \frac{2}{3} + 300 \times \frac{1}{3} = 200 + 100 = 300$$

:::{admonition} 🔧 Distributiva en ingeniería
:class: ingenieria
Al calcular el momento total de tres fuerzas sobre un eje:

$$M = F \times (d_1 + d_2) = F \times d_1 + F \times d_2$$

La fuerza $F$ se distribuye sobre cada distancia. Esta es la base del análisis de vigas y estructuras.
:::

---

### Tabla resumen de propiedades

| Propiedad | Suma | Multiplicación |
|-----------|------|----------------|
| Conmutativa | $a+b = b+a$ | $ab = ba$ |
| Asociativa | $(a+b)+c = a+(b+c)$ | $(ab)c = a(bc)$ |
| Neutro | $a+0 = a$ | $a \cdot 1 = a$ |
| Inverso | $a+(-a) = 0$ | $a \cdot \frac{1}{a} = 1$ |
| Distributiva | \multicolumn{2}{|c|}{$a(b+c) = ab + ac$} |

---

### ¿Qué NO es conmutativo ni asociativo?

```{warning}
La **resta** y la **división** NO son conmutativas ni asociativas:

$$8 - 3 \neq 3 - 8 \qquad \frac{8}{4} \neq \frac{4}{8}$$

$$(8 - 3) - 2 = 3 \neq 8 - (3 - 2) = 7$$

$$\frac{(8 \div 4)}{2} = 1 \neq \frac{8}{(4 \div 2)} = 4$$

Siempre que veas resta o división en paréntesis, respeta el orden de las operaciones.
```

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_PROPIEDADES_REALES"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Mostrar la conmutativa con cajas: mover 2+3 y 3+2, misma suma
2. Mostrar la asociativa: reagrupar (2+3)+4 = 2+(3+4)
3. Animar la distributiva: rectángulo de área a×(b+c) dividido en dos
4. Contraejemplo: (8-3)-2 ≠ 8-(3-2) con números concretos
5. Cierre: tabla de propiedades con check verde/rojo para suma/resta/multiplicación/división
```

---

## Visualización interactiva

Verifica las propiedades con valores concretos. Cambia los números y observa si la propiedad se cumple.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s4c3-props" class="jsxgraph-container" style="height:460px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s4c3-props', {
            boundingbox: [-1, 12, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slA = board.create('slider', [[1, 10],[5, 10],[-10, 3, 10]], {
            name: 'a', snapWidth: 1,
            baseline: { strokeColor: '#3b82f6' },
            highline:  { strokeColor: '#3b82f6' },
            fillColor: '#3b82f6'
        });
        var slB = board.create('slider', [[1, 8.5],[5, 8.5],[-10, 4, 10]], {
            name: 'b', snapWidth: 1,
            baseline: { strokeColor: '#f97316' },
            highline:  { strokeColor: '#f97316' },
            fillColor: '#f97316'
        });
        var slC = board.create('slider', [[1, 7],[5, 7],[-10, 2, 10]], {
            name: 'c', snapWidth: 1,
            baseline: { strokeColor: '#16a34a' },
            highline:  { strokeColor: '#16a34a' },
            fillColor: '#16a34a'
        });

        function r(s) { return Math.round(s.Value()); }

        var propiedades = [
            {
                nombre: 'Conmutativa +',
                izq: function() { return r(slA)+r(slB); },
                der: function() { return r(slB)+r(slA); },
                izqStr: function() { return r(slA)+' + '+r(slB); },
                derStr: function() { return r(slB)+' + '+r(slA); }
            },
            {
                nombre: 'Asociativa +',
                izq: function() { return (r(slA)+r(slB))+r(slC); },
                der: function() { return r(slA)+(r(slB)+r(slC)); },
                izqStr: function() { return '('+r(slA)+'+'+r(slB)+')+'+r(slC); },
                derStr: function() { return r(slA)+'+('+r(slB)+'+'+r(slC)+')'; }
            },
            {
                nombre: 'Distributiva',
                izq: function() { return r(slA)*(r(slB)+r(slC)); },
                der: function() { return r(slA)*r(slB)+r(slA)*r(slC); },
                izqStr: function() { return r(slA)+'*('+r(slB)+'+'+r(slC)+')'; },
                derStr: function() { return r(slA)+'*'+r(slB)+'+'+r(slA)+'*'+r(slC); }
            },
            {
                nombre: 'Resta NO asoc.',
                izq: function() { return (r(slA)-r(slB))-r(slC); },
                der: function() { return r(slA)-(r(slB)-r(slC)); },
                izqStr: function() { return '('+r(slA)+'-'+r(slB)+')-'+r(slC); },
                derStr: function() { return r(slA)+'-('+r(slB)+'-'+r(slC)+')'; }
            }
        ];

        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e){} });
            dinamicos = [];
        }

        function mostrar(idx) {
            limpiar();
            var p = propiedades[idx];
            var vi = p.izq(), vd = p.der();
            var cumple = vi === vd;
            var col = cumple ? '#16a34a' : '#dc2626';

            dinamicos.push(board.create('text', [9, 10,
                p.nombre], {
                fontSize: 15, color: '#1d4ed8', fontWeight: 'bold' }));

            dinamicos.push(board.create('text', [9, 8.5,
                p.izqStr() + ' = ' + vi], {
                fontSize: 13, color: '#374151' }));

            dinamicos.push(board.create('text', [9, 7.2, cumple ? '=' : '≠'], {
                fontSize: 22, color: col, fontWeight: 'bold', anchorX: 'middle' }));

            dinamicos.push(board.create('text', [9, 6,
                p.derStr() + ' = ' + vd], {
                fontSize: 13, color: '#374151' }));

            dinamicos.push(board.create('text', [9, 4.5,
                cumple ? 'PROPIEDAD SE CUMPLE ✓' : 'PROPIEDAD NO SE CUMPLE ✗'], {
                fontSize: 14, color: col, fontWeight: 'bold', anchorX: 'middle' }));
        }

        var btnDefs = [
            'Conmutativa', 'Asociativa', 'Distributiva', 'Resta'
        ];
        btnDefs.forEach(function(label, i) {
            var btn = board.create('text', [1.5 + i*2.8, -1.5, label], {
                fontSize: 11, color: '#374151', fontWeight: 'bold', anchorX: 'middle',
                cssStyle: 'cursor:pointer; padding:4px 8px; background:#f1f5f9; border-radius:6px;'
            });
            btn.on('down', function() { mostrar(i); });
        });

        board.create('text', [6, -2.5,
            'Selecciona una propiedad y cambia a, b, c para verificarla'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle'
        });

        mostrar(0);
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Tres deslizadores para a, b, c. Cuatro botones muestran una propiedad diferente. El resultado calcula ambos lados y muestra si son iguales (verde) o no (rojo). El botón "Resta" muestra que la resta NO es asociativa.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdMaOS2OKbyNfRuiAmlf7ELtTlC43lfBfRVUjuf2KMCE3g-4Q/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Propiedades de los números reales
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "¿Qué propiedad justifica 3+7 = 7+3?" → Conmutativa de la suma
P2 (MC): "¿Qué propiedad justifica 2×(3+4) = 2×3 + 2×4?" → Distributiva
P3 (T/F): "La resta es conmutativa: a-b = b-a" → Falso
P4 (Fill): "El elemento neutro de la multiplicación es ___." → 1
P5 (Fill): "El inverso aditivo de -5 es ___." → 5
P6 (T/F): "(8-3)-2 = 8-(3-2)" → Falso (3 ≠ 7)
P7 (Fill): "4 × (10 + 5) = 4×___ + 4×5" → 10
P8 (MC ingeniería): "Un ingeniero calcula F×(d₁+d₂). Para distribuirlo usa:" → Propiedad distributiva
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 25 35 40

* - Propiedad
  - Fórmula
  - ¿Aplica a ÷ y −?
* - Conmutativa
  - $a+b=b+a$, $ab=ba$
  - ❌ No
* - Asociativa
  - $(a+b)+c=a+(b+c)$
  - ❌ No
* - Neutro suma
  - $a+0=a$
  - —
* - Neutro producto
  - $a \cdot 1=a$
  - —
* - Inverso aditivo
  - $a+(-a)=0$
  - —
* - Inverso multiplicativo
  - $a \cdot \frac{1}{a}=1$
  - —
* - Distributiva
  - $a(b+c)=ab+ac$
  - ✅ Sí
```

:::{admonition} Siguiente clase
:class: tip
Con las propiedades dominadas, en la siguiente clase usaremos los números reales para construir el **producto cartesiano** — la base del plano coordenado y las funciones.

➡️ [Ir a S4·C4 Producto cartesiano](s4_c4_producto_cartesiano.md)
:::
