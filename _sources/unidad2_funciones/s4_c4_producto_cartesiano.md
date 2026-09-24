---
title: "S4·C4 Producto cartesiano"
---

# S4·C4 Producto cartesiano

:::{admonition} 🔧 Tabla de materiales y tratamientos
:class: ingenieria

Una planta metalúrgica tiene:

- **Materiales ($M$):** `{acero, aluminio, titanio}`
- **Tratamientos ($T$):** `{temple, recocido, nitrurado}`

El departamento de ingeniería necesita evaluar **todas las combinaciones posibles** de material + tratamiento para decidir cuál es óptima.

| | Temple | Recocido | Nitrurado |
|---|:---:|:---:|:---:|
| **Acero** | (acero, temple) | (acero, recocido) | (acero, nitrurado) |
| **Aluminio** | (aluminio, temple) | (aluminio, recocido) | (aluminio, nitrurado) |
| **Titanio** | (titanio, temple) | (titanio, recocido) | (titanio, nitrurado) |

Esta tabla de **9 combinaciones** es exactamente el producto cartesiano $M \times T$.
:::

**Pregunta detonadora**

> Si un sistema tiene 4 sensores y 3 niveles de alarma, ¿cuántas combinaciones (sensor, alarma) distintas existen? ¿Cómo las organizarías sin repetir ni omitir ninguna?

---

## Teoría

### ¿Qué es el producto cartesiano?

**Definición:**
El producto cartesiano de dos conjuntos $A$ y $B$ es el conjunto de todos los **pares ordenados** $(a, b)$ donde $a \in A$ y $b \in B$.

$$A \times B = \{(a, b) \mid a \in A,\ b \in B\}$$

**El orden importa:** $(a, b) \neq (b, a)$ en general.

---

### Ejemplo básico

$$A = \{1, 2, 3\} \qquad B = \{x, y\}$$

$$A \times B = \{(1,x),\ (1,y),\ (2,x),\ (2,y),\ (3,x),\ (3,y)\}$$

$$B \times A = \{(x,1),\ (x,2),\ (x,3),\ (y,1),\ (y,2),\ (y,3)\}$$

```{warning}
$A \times B \neq B \times A$ en general — el orden de los conjuntos importa porque el orden dentro de cada par importa.  
$(1, x) \neq (x, 1)$
```

---

### Cardinalidad del producto cartesiano

$$|A \times B| = |A| \times |B|$$

Si $A$ tiene 3 elementos y $B$ tiene 2, entonces $A \times B$ tiene $3 \times 2 = 6$ pares.

**Generalización:**
$$|A \times B \times C| = |A| \times |B| \times |C|$$

:::{admonition} 🔧 Ingeniería
:class: ingenieria
Con 3 materiales y 3 tratamientos: $|M \times T| = 3 \times 3 = 9$ combinaciones a evaluar.  
Con 4 sensores y 3 niveles de alarma: $4 \times 3 = 12$ combinaciones posibles.  
Con 5 materiales, 4 tratamientos y 3 temperaturas: $5 \times 4 \times 3 = 60$ experimentos.
:::

---

### El plano cartesiano: $\mathbb{R} \times \mathbb{R}$

El caso más importante para la ingeniería: el producto cartesiano de $\mathbb{R}$ consigo mismo.

$$\mathbb{R}^2 = \mathbb{R} \times \mathbb{R} = \{(x, y) \mid x, y \in \mathbb{R}\}$$

Cada par $(x, y)$ es un **punto en el plano**:
- $x$ = posición horizontal (abscisa)
- $y$ = posición vertical (ordenada)

**El plano cartesiano** es la representación visual de $\mathbb{R}^2$.

:::{admonition} 🔧 Plano cartesiano en ingeniería
:class: ingenieria
La gráfica de velocidad vs. tiempo de un motor es un subconjunto de $\mathbb{R}^2$: cada punto $(t, v)$ representa la velocidad $v$ en el instante $t$.  
Las curvas de tolerancia, los diagramas de fase y las gráficas de rendimiento son todos subconjuntos de $\mathbb{R}^2$.
:::

---

### Relación entre producto cartesiano y funciones

Una **función** $f: A \to B$ es un subconjunto especial de $A \times B$ donde:
- Cada elemento de $A$ aparece exactamente una vez como primera componente
- A cada elemento de $A$ le corresponde exactamente un elemento de $B$

$$f = \{(a, f(a)) \mid a \in A\} \subseteq A \times B$$

Esto lo exploraremos en profundidad en la Semana 5.

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_PRODUCTO_CARTESIANO"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Mostrar dos conjuntos A={1,2,3} y B={x,y} como listas
2. Animar la formación de cada par ordenado uno a uno — líneas que conectan elementos
3. Mostrar el resultado como tabla (filas=A, columnas=B)
4. Mostrar A×B vs B×A — los pares cambian de orden
5. Escalar al plano cartesiano: A=ℝ, B=ℝ → cuadrícula de puntos → plano continuo
6. Cierre: graficar 3 puntos de la función y=x² como pares (x, x²)
```

---

## Visualización interactiva

Selecciona elementos de A y B para construir el producto cartesiano. Observa los pares que se forman.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s4c4-cartesiano" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s4c4-cartesiano', {
            boundingbox: [-1, 11, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var setA = ['1','2','3'];
        var setB = ['x','y','z'];
        var activoA = [true, true, true];
        var activoB = [true, true, true];
        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e){} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var A = setA.filter(function(_, i) { return activoA[i]; });
            var B = setB.filter(function(_, i) { return activoB[i]; });

            // Pares resultantes
            var pares = [];
            A.forEach(function(a) {
                B.forEach(function(b) {
                    pares.push('('+a+','+b+')');
                });
            });

            // Etiqueta cardinalidad
            dinamicos.push(board.create('text', [6, 9.5,
                '|A| = '+A.length+'  |B| = '+B.length+'  |A×B| = '+(A.length*B.length)], {
                fontSize: 14, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));

            // Mostrar pares en grilla
            if (pares.length === 0) {
                dinamicos.push(board.create('text', [6, 7, 'A×B = vacio'], {
                    fontSize: 16, color: '#dc2626', anchorX: 'middle', fontWeight: 'bold' }));
            } else {
                var cols = Math.min(pares.length, 3);
                pares.forEach(function(p, i) {
                    var col = i % 3;
                    var row = Math.floor(i / 3);
                    dinamicos.push(board.create('text',
                        [2 + col*3.5, 8.2 - row*1.4, p], {
                        fontSize: 13, color: '#7c3aed', fontWeight: 'bold', anchorX: 'middle'
                    }));
                });
            }
        }

        // Botones para A
        board.create('text', [2.5, 2.5, 'Conjunto A:'], {
            fontSize: 12, color: '#1d4ed8', fontWeight: 'bold' });
        setA.forEach(function(e, i) {
            var btn = board.create('text', [2 + i*2, 1.5, e], {
                fontSize: 13, color: activoA[i] ? '#1d4ed8' : '#9ca3af',
                fontWeight: 'bold', anchorX: 'middle',
                cssStyle: 'cursor:pointer; padding:5px 12px; background:#dbeafe; border-radius:6px;'
            });
            btn.on('down', function() {
                activoA[i] = !activoA[i];
                btn.setAttribute({ color: activoA[i] ? '#1d4ed8' : '#9ca3af' });
                dibujar();
            });
        });

        // Botones para B
        board.create('text', [7.5, 2.5, 'Conjunto B:'], {
            fontSize: 12, color: '#c2410c', fontWeight: 'bold' });
        setB.forEach(function(e, i) {
            var btn = board.create('text', [7 + i*2, 1.5, e], {
                fontSize: 13, color: activoB[i] ? '#c2410c' : '#9ca3af',
                fontWeight: 'bold', anchorX: 'middle',
                cssStyle: 'cursor:pointer; padding:5px 12px; background:#ffedd5; border-radius:6px;'
            });
            btn.on('down', function() {
                activoB[i] = !activoB[i];
                btn.setAttribute({ color: activoB[i] ? '#c2410c' : '#9ca3af' });
                dibujar();
            });
        });

        board.create('text', [6, -1.5,
            'Clic en los elementos para activarlos o desactivarlos'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle'
        });
        board.create('text', [6, -2.5,
            'Observa como cambia |A×B| = |A| × |B|'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle'
        });

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Botones para activar/desactivar elementos de A={1,2,3} y B={x,y,z}. Los pares del producto cartesiano aparecen automáticamente y la cardinalidad se actualiza. Permite explorar casos con conjuntos vacíos y verificar que |A×B|=|A|×|B|.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeX_XcH5sySMYQv080btGKjM5_6w-Z7hUC3gt6YzAMAi2RAsg/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Producto cartesiano
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "A={a,b} y B={1,2,3}. |A×B| = ___" → 6
P2 (MC): "¿Cuál es el par correcto del producto cartesiano A={1,2} × B={x,y}?"
→ (1,x) ✅ (no (x,1))
P3 (T/F): "A×B = B×A siempre." → Falso
P4 (Fill): "A={1,2,3} y B=∅. |A×B| = ___" → 0
P5 (MC): "¿Qué representa ℝ² = ℝ×ℝ?" → El plano cartesiano
P6 (Fill ingeniería): "Una planta tiene 4 materiales y 5 tratamientos. ¿Cuántas combinaciones debe evaluar?" → 20
P7 (MC): "El punto (3, -2) en el plano cartesiano tiene:"
→ x=3 (horizontal), y=-2 (vertical)
P8 (T/F): "Una función f:A→B es un subconjunto de A×B." → Verdadero
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Concepto
  - Definición
* - Producto cartesiano
  - $A \times B = \{(a,b) \mid a \in A, b \in B\}$
* - Par ordenado
  - $(a,b)$ — el orden importa: $(a,b) \neq (b,a)$
* - Cardinalidad
  - $|A \times B| = |A| \times |B|$
* - No conmutativo
  - $A \times B \neq B \times A$ en general
* - Plano cartesiano
  - $\mathbb{R}^2 = \mathbb{R} \times \mathbb{R}$ — todos los puntos del plano
* - Conexión con funciones
  - Una función es un subconjunto especial de $A \times B$
```

:::{admonition} Siguiente clase
:class: tip
Con el producto cartesiano dominado, en la clase de autogestión consolidarás los números reales y el plano. La próxima semana arrancamos con **relaciones y funciones** — el corazón de la Unidad 2.

➡️ [Ir a S4·Auto Clasificación de números y producto cartesiano](s4_auto_clasificacion_numeros.md)
:::
