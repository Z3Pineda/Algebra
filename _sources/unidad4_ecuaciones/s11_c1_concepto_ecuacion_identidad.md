---
title: "S11·C1 Concepto de ecuación e identidad"
---

# S11·C1 Concepto de ecuación e identidad

:::{admonition} 🔧 Equilibrio de fuerzas en un brazo mecánico
:class: ingenieria

Un brazo de palanca está en equilibrio cuando la suma de momentos a la izquierda iguala la suma de momentos a la derecha:

$$F_1 \cdot d_1 = F_2 \cdot d_2$$

Si $F_1 = 150$ N, $d_1 = 0.40$ m y $d_2 = 0.60$ m, el ingeniero necesita hallar la fuerza $F_2$ que mantiene el equilibrio:

$$150 \cdot 0.40 = F_2 \cdot 0.60$$

Esta relación es una **ecuación**: solo es verdadera para un valor específico de $F_2$ (en este caso, $F_2 = 100$ N). Resolver ecuaciones es la herramienta central del ingeniero para encontrar magnitudes desconocidas en sistemas mecánicos.
:::

**Pregunta detonadora**

> ¿La expresión $2(x + 3) = 2x + 6$ es verdadera para cualquier valor de $x$, o solo para algunos? ¿Y la expresión $3x + 5 = 20$?

---

## Teoría

### ¿Qué es una ecuación?

Una **ecuación** es una igualdad entre dos expresiones algebraicas que contiene al menos una **incógnita** — una letra cuyo valor se desconoce y se busca determinar.

$$3x + 5 = 20$$

Una ecuación es **verdadera solo para ciertos valores** de la incógnita. En el ejemplo anterior, solo $x = 5$ satisface la igualdad.

**Partes de una ecuación:**

| Parte | Nombre | Ejemplo en $3x + 5 = 20$ |
|-------|--------|:------------------------:|
| Lado izquierdo del $=$ | **Miembro izquierdo** | $3x + 5$ |
| Lado derecho del $=$ | **Miembro derecho** | $20$ |
| Letra desconocida | **Incógnita** | $x$ |
| Valor(es) que la satisfacen | **Solución** (o raíz) | $x = 5$ |

**Analogía mecánica:** una ecuación es como una condición de operación de una máquina — por ejemplo, "la presión interna debe ser exactamente 3 bar para que el sistema funcione". Solo un valor cumple la especificación.

---

### ¿Qué es una identidad?

Una **identidad** es una igualdad que es **verdadera para todos los valores** de las variables que aparecen en ella.

$$2(x + 3) = 2x + 6$$

Si expandimos el miembro izquierdo: $2x + 6 = 2x + 6$ ✓ — se cumple para cualquier $x$.

Otras identidades importantes:

$$a + b = b + a \quad \text{(conmutativa)}$$
$$(a + b) + c = a + (b + c) \quad \text{(asociativa)}$$
$$a(b + c) = ab + ac \quad \text{(distributiva)}$$

:::{admonition} 🔧 Ingeniería — tolerancias y especificaciones
:class: ingenieria

La identidad distributiva aparece al calcular cargas distribuidas:

$$w \cdot (L_1 + L_2) = wL_1 + wL_2$$

donde $w$ es la carga por unidad de longitud (N/m) y $L_1$, $L_2$ son tramos del viga. Esta relación vale **para cualquier** valor de $w$, $L_1$ y $L_2$ — es una identidad, no una ecuación con incógnita.

En cambio, $wL = 5000$ (con $w$ y $L$ desconocidos) **sí** es una ecuación: solo ciertos pares $(w, L)$ la satisfacen.
:::

---

### Ecuación vs. identidad

| Característica | Ecuación | Identidad |
|----------------|:--------:|:---------:|
| Contiene incógnita | Sí | Puede o no |
| Valores que la satisfacen | Uno o varios específicos | **Todos** los permitidos |
| Objetivo | Hallar la(s) solución(es) | Simplificar o transformar |
| Ejemplo | $2x + 3 = 11$ | $2(x + 3) = 2x + 6$ |

**Prueba rápida:** sustituye dos valores distintos de $x$. Si ambos dan igualdad verdadera, probablemente es identidad. Si solo uno (o ninguno) funciona, es ecuación.

---

### Clasificación de ecuaciones por grado

El **grado** de una ecuación es el mayor exponente de la incógnita (después de simplificar):

| Grado | Forma general | Nombre | Ejemplo |
|:-----:|:-------------:|--------|---------|
| 1 | $ax + b = 0$ | Lineal | $3x - 7 = 0$ |
| 2 | $ax^2 + bx + c = 0$ | Cuadrática | $x^2 - 5x + 6 = 0$ |
| 3 | $ax^3 + bx^2 + cx + d = 0$ | Cúbica | $x^3 - 8 = 0$ |

En esta unidad trabajaremos principalmente con **ecuaciones lineales** (grado 1).

---

### Ecuaciones de ingeniería mecánica

Las ecuaciones aparecen constantemente en la práctica profesional:

**1. Equilibrio de fuerzas** ($\sum F = 0$):

$$F_1 + F_2 = F_3 \quad \Rightarrow \quad \text{hallar } F_3$$

**2. Condiciones de operación** (velocidad, presión, temperatura):

$$P \cdot V = nRT \quad \Rightarrow \quad \text{hallar } T \text{ para condiciones dadas}$$

**3. Especificaciones de tolerancia:**

$$d_{real} = d_{nominal} + \Delta \quad \Rightarrow \quad \text{hallar } \Delta \text{ máximo permitido}$$

**4. Ley de Hooke** (resorte):

$$F = kx \quad \Rightarrow \quad \text{hallar } x \text{ para una fuerza dada}$$

Todas estas relaciones son ecuaciones cuando hay al menos una magnitud desconocida.

```{warning}
No confundas **ecuación** con **fórmula**.

- **Fórmula:** relación general entre variables ($A = \pi r^2$) — puede usarse para calcular cualquier variable.
- **Ecuación:** igualdad con incógnita cuyo valor se busca ($\pi r^2 = 78.5$ con $r$ desconocido).

Una fórmula se convierte en ecuación cuando fijas todos los valores excepto uno.
```

---

### Verificación de una solución

Para comprobar si un valor es solución de una ecuación, **sustitúyelo en ambos miembros** y verifica que sean iguales.

**Ejemplo:** ¿Es $x = 4$ solución de $2x + 3 = 11$?

$$\text{MI: } 2(4) + 3 = 8 + 3 = 11 \qquad \text{MD: } 11 \qquad \checkmark$$

¿Es $x = 3$ solución?

$$\text{MI: } 2(3) + 3 = 9 \qquad \text{MD: } 11 \qquad \times$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_ECUACION_IDENTIDAD"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Mostrar $2(x+3)=2x+6$ con $x=1,5,-2$ — siempre verdadera → identidad
2. Mostrar $3x+5=20$ con $x=5$ (verdadera) y $x=3$ (falsa) → ecuación
3. Etiquetar miembro izquierdo, miembro derecho e incógnita en una ecuación
4. Ejemplo de equilibrio: $150 \cdot 0.40 = F_2 \cdot 0.60$ — resolver $F_2$
5. Clasificar por grado: lineal ($x$), cuadrática ($x^2$), cúbica ($x^3$)
6. Cierre: diferencia ecuación vs. identidad con tabla comparativa
```

---

## Visualización interactiva

Clasifica cada igualdad como ecuación o identidad. Sustituye valores de $x$ y observa cuándo se cumple.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s11c1-ecuacion-identidad" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    var ejemplos = [
        {
            expr: '3x + 5 = 20',
            tipo: 'Ecuacion',
            color: '#1d4ed8',
            evalMI: function(x) { return 3*x + 5; },
            evalMD: function(x) { return 20; },
            solucion: 5
        },
        {
            expr: '2(x + 3) = 2x + 6',
            tipo: 'Identidad',
            color: '#16a34a',
            evalMI: function(x) { return 2*(x+3); },
            evalMD: function(x) { return 2*x + 6; },
            solucion: null
        },
        {
            expr: 'x² - 4 = 0',
            tipo: 'Ecuacion',
            color: '#1d4ed8',
            evalMI: function(x) { return x*x - 4; },
            evalMD: function(x) { return 0; },
            solucion: '±2'
        },
        {
            expr: '(a+b)² = a² + 2ab + b²',
            tipo: 'Identidad',
            color: '#16a34a',
            evalMI: function(x) { return (x+2)*(x+2); },
            evalMD: function(x) { return x*x + 4*x + 4; },
            solucion: null
        }
    ];

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s11c1-ecuacion-identidad', {
            boundingbox: [-1, 13, 14, -1],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var activo = 0;
        var valorX = 3;
        var dinamicos = [];
        var botones = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar(idx) {
            limpiar();
            activo = idx;
            var e = ejemplos[idx];

            botones.forEach(function(b, i) {
                b.setAttribute({
                    fillColor: i === idx ? e.color : '#e5e7eb',
                    strokeColor: i === idx ? e.color : '#9ca3af'
                });
            });

            var mi = e.evalMI(valorX);
            var md = e.evalMD(valorX);
            var cumple = Math.abs(mi - md) < 0.001;

            dinamicos.push(board.create('text', [7, 12,
                e.expr], { fontSize: 16, color: e.color, fontWeight: 'bold', anchorX: 'middle' }));

            dinamicos.push(board.create('text', [7, 10.5,
                'Tipo: ' + e.tipo], { fontSize: 14, color: e.color, anchorX: 'middle' }));

            dinamicos.push(board.create('text', [3, 8.5,
                'x = ' + valorX], { fontSize: 14, color: '#374151', fontWeight: 'bold' }));

            dinamicos.push(board.create('text', [3, 7.2,
                'MI = ' + mi.toFixed(2)], { fontSize: 13, color: '#1d4ed8' }));
            dinamicos.push(board.create('text', [3, 6.2,
                'MD = ' + md.toFixed(2)], { fontSize: 13, color: '#c2410c' }));

            var resColor = cumple ? '#16a34a' : '#dc2626';
            var resTexto = cumple ? 'Igualdad VERDADERA ✓' : 'Igualdad FALSA ✗';
            dinamicos.push(board.create('text', [3, 4.8, resTexto], {
                fontSize: 13, color: resColor, fontWeight: 'bold'
            }));

            if (e.solucion !== null) {
                dinamicos.push(board.create('text', [3, 3.5,
                    'Solucion: x = ' + e.solucion], {
                    fontSize: 12, color: '#7c3aed'
                }));
            } else {
                dinamicos.push(board.create('text', [3, 3.5,
                    'Verdadera para TODOS los x'], {
                    fontSize: 12, color: '#16a34a', fontStyle: 'italic'
                }));
            }

            // Slider x
            var slX = board.create('slider', [[8, 7], [12, 7], [-5, valorX, 10]], {
                name: 'x', snapWidth: 0.5, fillColor: e.color
            });
            slX.on('drag', function() {
                valorX = slX.Value();
                dibujar(idx);
            });
            dinamicos.push(slX);

            dinamicos.push(board.create('text', [10, 8.2,
                'Mueve x y observa'], {
                fontSize: 11, color: '#6b7280', anchorX: 'middle'
            }));
        }

        var labels = ['3x+5=20', '2(x+3)=2x+6', 'x²-4=0', '(a+b)²'];
        labels.forEach(function(lbl, i) {
            var col = i % 2, fila = Math.floor(i / 2);
            var btn = board.create('button', [0.5 + col*6.5, 12.5 - fila*0.8, lbl], {
                fixed: true, highlight: false, size: 3,
                fillColor: '#e5e7eb', strokeColor: '#9ca3af'
            });
            (function(idx) { btn.on('down', function() { dibujar(idx); }); })(i);
            botones.push(btn);
        });

        dibujar(0);
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Cuatro botones permiten alternar entre ecuaciones e identidades. Un deslizador de $x$ evalúa ambos miembros en tiempo real. Las ecuaciones muestran cuándo la igualdad se cumple (solo en la solución); las identidades permanecen verdaderas para cualquier $x$. Refuerza la diferencia conceptual antes de resolver ecuaciones.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfuT9_l2OFt6jbXZCB7ed5-mlG-KR2Pb93GkaiKh52DfwW7EA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Ecuación e identidad
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "¿Cuál es una identidad?" → $2(x+3)=2x+6$
P2 (MC): "¿Cuál es una ecuación?" → $4x-1=15$
P3 (T/F): "$x+5=5+x$ es una identidad." → Verdadero
P4 (Fill): "En $7x-2=19$, la incógnita es ___" → x
P5 (MC): "¿Grado de $2x+5=11$?" → 1 (lineal)
P6 (Fill): "¿Es $x=3$ solución de $2x+1=7$?" → Sí (MI=7, MD=7)
P7 (MC ingeniería): "$F_1 d_1 = F_2 d_2$ con $F_2$ desconocida es:" → Ecuación
P8 (T/F): "Una identidad tiene una sola solución." → Falso
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Ecuación
  - Igualdad verdadera **solo para ciertos valores** de la incógnita
* - Identidad
  - Igualdad verdadera **para todos** los valores permitidos
* - Miembro izquierdo / derecho
  - Expresiones a cada lado del signo $=$
* - Incógnita
  - Variable cuyo valor se busca ($x$, $F$, $t$, etc.)
* - Grado
  - Mayor exponente de la incógnita: 1 = lineal, 2 = cuadrática
* - Verificación
  - Sustituir el valor propuesto en ambos miembros y comparar
```

:::{admonition} Siguiente clase
:class: tip
Ya distingues ecuación de identidad y conoces las partes de una ecuación. En la siguiente clase aprenderás a **resolver ecuaciones lineales** paso a paso usando las propiedades de la igualdad.

➡️ [Ir a S11·C2 Ecuaciones lineales](s11_c2_ecuaciones_lineales.md)
:::
