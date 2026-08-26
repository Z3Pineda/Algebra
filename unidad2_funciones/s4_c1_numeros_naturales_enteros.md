---
title: "S4·C1 Números naturales, enteros, racionales, irracionales y reales"
---

# S4·C1 Números naturales, enteros, racionales, irracionales y reales

:::{admonition} 🔧 Las medidas en el taller de manufactura
:class: ingenieria

En un taller de manufactura conviven distintos tipos de números todo el tiempo:

- El operador fabrica **3 piezas** por turno → número natural
- La temperatura del horno bajó **−15°C** respecto al setpoint → número entero negativo
- La relación de transmisión del engranaje es **3/4** → fracción, número racional
- El diámetro de un eje es $\sqrt{2}$ pulgadas ≈ 1.41421... → número irracional
- La tolerancia dimensional es **±0.05 mm** → número real

Cada tipo de número responde a una necesidad diferente. Conocerlos te permite elegir el correcto para cada cálculo.
:::

**Pregunta detonadora**

> Si mides un eje y obtienes 25.13847... mm con decimales que no terminan ni se repiten, ¿a qué conjunto de números pertenece esa medida? ¿Puedes representarla exactamente como fracción?

---

## Teoría

### Los conjuntos numéricos

Los números se organizan en conjuntos que se contienen unos a otros como capas de una cebolla:

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$

---

### Números naturales $\mathbb{N}$

**Definición:** Los números que usamos para contar. Incluyen el cero.

$$\mathbb{N} = \{0, 1, 2, 3, 4, 5, \ldots\}$$

**Características:**
- No tienen signo negativo
- No tienen decimales
- Son infinitos

:::{admonition} 🔧 Ingeniería
:class: ingenieria
Número de piezas en un lote, número de tornillos en una brida, número de ciclos de una máquina. Siempre que cuentes objetos físicos enteros usas $\mathbb{N}$.
:::

---

### Números enteros $\mathbb{Z}$

**Definición:** Todos los naturales más sus opuestos negativos.

$$\mathbb{Z} = \{\ldots, -3, -2, -1, 0, 1, 2, 3, \ldots\}$$

**Características:**
- Incluyen negativos
- No tienen decimales
- $\mathbb{N} \subset \mathbb{Z}$

:::{admonition} 🔧 Ingeniería
:class: ingenieria
Temperatura bajo cero, posición relativa a un punto de referencia, nivel de voltaje (positivo o negativo), dirección de giro (+1 = horario, -1 = antihorario).
:::

---

### Números racionales $\mathbb{Q}$

**Definición:** Todos los números que se pueden expresar como fracción $\frac{p}{q}$ donde $p, q \in \mathbb{Z}$ y $q \neq 0$.

$$\mathbb{Q} = \left\{\frac{p}{q} \mid p, q \in \mathbb{Z},\ q \neq 0\right\}$$

**Incluye:**
- Fracciones: $\frac{3}{4}$, $\frac{-2}{5}$, $\frac{7}{1}$
- Decimales exactos: $0.25 = \frac{1}{4}$
- Decimales periódicos: $0.\overline{3} = \frac{1}{3}$, $1.\overline{6} = \frac{5}{3}$

```{warning}
Un decimal es racional si **termina** o si tiene un **bloque que se repite infinitamente**.  
$0.25$ → racional (termina)  
$0.333...$ → racional ($= 1/3$, se repite)  
$0.12112111211112...$ → **irracional** (no termina, no se repite)
```

:::{admonition} 🔧 Ingeniería
:class: ingenieria
Relación de transmisión de engranajes ($3/2$), eficiencia de un motor ($\eta = 85/100 = 0.85$), tolerancias expresadas como fracciones de pulgada ($1/32"$).
:::

---

### Números irracionales $\mathbb{I}$

**Definición:** Números reales que **no** se pueden expresar como fracción. Sus decimales son infinitos y no periódicos.

**Ejemplos famosos:**

| Número | Valor aproximado | Dónde aparece |
|--------|:----------------:|---------------|
| $\sqrt{2}$ | 1.41421356... | Diagonal de un cuadrado de lado 1 |
| $\sqrt{3}$ | 1.73205080... | Altura de un triángulo equilátero |
| $\pi$ | 3.14159265... | Circunferencia / diámetro |
| $e$ | 2.71828182... | Crecimiento exponencial |

:::{admonition} 🔧 Ingeniería
:class: ingenieria
$\pi$ aparece en el cálculo de áreas y volúmenes de cilindros, conos y esferas — piezas muy comunes en mecánica.  
$\sqrt{2}$ aparece al calcular diagonales y fuerzas en sistemas inclinados 45°.
:::

---

### Números reales $\mathbb{R}$

**Definición:** La unión de todos los racionales e irracionales. Representan **cualquier punto** en la recta numérica.

$$\mathbb{R} = \mathbb{Q} \cup \mathbb{I}$$

**La jerarquía completa:**

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$

| Todo $\mathbb{N}$ es... | Todo $\mathbb{Z}$ es... | Todo $\mathbb{Q}$ es... |
|:-----------------------:|:-----------------------:|:-----------------------:|
| también $\mathbb{Z}$ | también $\mathbb{Q}$ | también $\mathbb{R}$ |

```{warning}
Los irracionales **no** son subconjunto de $\mathbb{Q}$ — están fuera de él pero dentro de $\mathbb{R}$.  
$\mathbb{Q}$ y $\mathbb{I}$ son **disjuntos**: $\mathbb{Q} \cap \mathbb{I} = \emptyset$
```

---

### Tabla clasificadora

| Número | $\mathbb{N}$ | $\mathbb{Z}$ | $\mathbb{Q}$ | $\mathbb{R}$ |
|--------|:---:|:---:|:---:|:---:|
| $5$ | ✅ | ✅ | ✅ | ✅ |
| $-3$ | ❌ | ✅ | ✅ | ✅ |
| $\frac{2}{7}$ | ❌ | ❌ | ✅ | ✅ |
| $0.\overline{6}$ | ❌ | ❌ | ✅ | ✅ |
| $\sqrt{5}$ | ❌ | ❌ | ❌ | ✅ |
| $\pi$ | ❌ | ❌ | ❌ | ✅ |

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_NUMEROS_REALES"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Mostrar la recta numérica vacía
2. Colocar los naturales uno a uno: 0,1,2,3...
3. Agregar los enteros negativos: ...-3,-2,-1
4. Intercalar fracciones entre enteros: 1/2, 3/4, -2/3
5. Mostrar que entre dos racionales siempre hay otro racional (densidad)
6. Revelar los irracionales: π, √2 — puntos que "llenan los huecos"
7. Cierre: los reales llenan toda la recta sin huecos
8. Diagrama de círculos concéntricos: N ⊂ Z ⊂ Q ⊂ R
```

---

## Visualización interactiva

Mueve el deslizador y observa en qué conjuntos numéricos cae cada número.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s4c1-numeros" class="jsxgraph-container" style="height:480px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s4c1-numeros', {
            boundingbox: [-1, 12, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        // Botones de números predefinidos
        var numeros = [
            { label: '5',      val: 5,             tipo: 'natural'    },
            { label: '-3',     val: -3,            tipo: 'entero'     },
            { label: '2/3',    val: 2/3,           tipo: 'racional'   },
            { label: '0.333',  val: 1/3,           tipo: 'racional'   },
            { label: 'sqrt(2)',val: Math.sqrt(2),  tipo: 'irracional' },
            { label: 'pi',     val: Math.PI,       tipo: 'irracional' },
        ];

        var actual = 0;
        var dinamicos = [];

        var colores = {
            natural:    '#3b82f6',
            entero:     '#7c3aed',
            racional:   '#f97316',
            irracional: '#dc2626'
        };

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e){} });
            dinamicos = [];
        }

        function esNatural(v)    { return Number.isInteger(v) && v >= 0; }
        function esEntero(v)     { return Number.isInteger(v); }
        function esRacional(v)   { return ['natural','entero','racional'].indexOf(numeros[actual].tipo) >= 0; }
        function esIrracional(v) { return numeros[actual].tipo === 'irracional'; }

        function mostrar(idx) {
            limpiar();
            var n = numeros[idx];
            var col = colores[n.tipo];

            // Título
            dinamicos.push(board.create('text', [6, 10.5, 'Numero: ' + n.label + '  (' + n.val.toFixed(5) + '...)'], {
                fontSize: 16, color: col, fontWeight: 'bold', anchorX: 'middle' }));

            // Conjuntos concéntricos visuales
            var conjuntos = [
                { nombre: 'R (Reales)',      r: 4.5, color: '#dcfce7', borde: '#15803d' },
                { nombre: 'Q (Racionales)',  r: 3.2, color: '#fff7ed', borde: '#c2410c' },
                { nombre: 'Z (Enteros)',     r: 2.0, color: '#ede9fe', borde: '#7c3aed' },
                { nombre: 'N (Naturales)',   r: 1.0, color: '#dbeafe', borde: '#1d4ed8' },
            ];

            conjuntos.forEach(function(c) {
                dinamicos.push(board.create('circle', [[6, 5], c.r], {
                    fillColor: c.color, fillOpacity: 0.5,
                    strokeColor: c.borde, strokeWidth: 2 }));
                dinamicos.push(board.create('text', [6, 5 + c.r - 0.3, c.nombre], {
                    fontSize: 10, color: c.borde, anchorX: 'middle', fontStyle: 'italic' }));
            });

            // Punto en su capa correcta
            var posiciones = {
                natural:    [6, 5],
                entero:     [6, 6.2],
                racional:   [6, 7.4],
                irracional: [6, 8.8]
            };

            var pos = posiciones[n.tipo];
            dinamicos.push(board.create('point', pos, {
                size: 10, color: col, fixed: true, name: n.label,
                label: { offset: [15, 0], fontSize: 13, color: col, fontWeight: 'bold' }
            }));

            // Pertenencia
            var pertenece = [];
            if (n.tipo === 'natural')    pertenece = ['N', 'Z', 'Q', 'R'];
            if (n.tipo === 'entero')     pertenece = ['Z', 'Q', 'R'];
            if (n.tipo === 'racional')   pertenece = ['Q', 'R'];
            if (n.tipo === 'irracional') pertenece = ['R'];

            dinamicos.push(board.create('text', [0.5, 2,
                'Pertenece a: ' + pertenece.join(', ')], {
                fontSize: 13, color: col, fontWeight: 'bold' }));

            var noPertenece = ['N','Z','Q','R'].filter(function(c) { return pertenece.indexOf(c) < 0; });
            if (noPertenece.length > 0) {
                dinamicos.push(board.create('text', [0.5, 1,
                    'No pertenece a: ' + noPertenece.join(', ')], {
                    fontSize: 12, color: '#6b7280' }));
            }
        }

        // Botones
        numeros.forEach(function(n, i) {
            var btn = board.create('text', [1 + i * 2, -1.5, n.label], {
                fontSize: 12, color: colores[n.tipo], fontWeight: 'bold', anchorX: 'middle',
                cssStyle: 'cursor:pointer; padding:5px 10px; background:#f1f5f9; border-radius:6px;'
            });
            btn.on('down', function() { actual = i; mostrar(i); });
        });

        board.create('text', [6, -2.5,
            'Selecciona un numero para ver a que conjuntos pertenece'], {
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
6 botones con números representativos de cada tipo. Al seleccionar uno, aparece un punto en el diagrama de círculos concéntricos (N⊂Z⊂Q⊂R) en la capa correcta, y se listan los conjuntos a los que pertenece y a los que no.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfC0ghB8lfdpfUG-YFPcOUkTdteP4eH6ZubA_sCbz5VrnvccA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Clasificación de números
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (10 preguntas, ~12 min):**

P1 (MC): "¿A cuál conjunto pertenece -7 pero NO pertenece 3/4?" → ℤ
P2 (MC): "¿Cuál de estos es irracional?" → √7
P3 (T/F): "Todo número natural es también racional." → Verdadero
P4 (MC): "0.666... (periódico) es:" → Racional (= 2/3)
P5 (MC): "¿Cuál es la jerarquía correcta?" → N⊂Z⊂Q⊂R
P6 (Fill): "ℚ ∩ ℐ = ___" → ∅ (vacío)
P7 (MC): "π pertenece a:" → ℝ pero no a ℚ
P8 (MC ingeniería): "La relación de transmisión 3/2 de un engranaje es:" → Racional
P9 (T/F): "√4 = 2 es irracional." → Falso (√4=2, que es natural)
P10 (MC): "¿Cuántos conjuntos numéricos contienen al número -5/3?" → 2 (ℚ y ℝ)
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 15 25 35 25

* - Conjunto
  - Símbolo
  - Contiene
  - Ejemplo en ingeniería
* - Naturales
  - $\mathbb{N}$
  - $0, 1, 2, 3, \ldots$
  - Número de piezas
* - Enteros
  - $\mathbb{Z}$
  - $\ldots, -2, -1, 0, 1, 2, \ldots$
  - Temperatura bajo cero
* - Racionales
  - $\mathbb{Q}$
  - Fracciones y decimales exactos/periódicos
  - Relación de engranajes
* - Irracionales
  - $\mathbb{I}$
  - Decimales infinitos no periódicos
  - $\pi$, $\sqrt{2}$
* - Reales
  - $\mathbb{R}$
  - $\mathbb{Q} \cup \mathbb{I}$
  - Cualquier medida dimensional
```

:::{admonition} Siguiente clase
:class: tip
Ya conoces los tipos de números reales. En la siguiente clase aprenderás a ubicarlos en la **recta numérica** — la representación visual que conecta los números con las medidas de ingeniería.

➡️ [Ir a S4·C2 La recta numérica](s4_c2_recta_numerica.md)
:::
