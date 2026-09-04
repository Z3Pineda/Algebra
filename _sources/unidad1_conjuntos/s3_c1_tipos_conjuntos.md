---
title: "S3·C1 Tipos de conjuntos"
---

# S3·C1 Tipos de conjuntos

:::{admonition} 🔧 Clasificación de lotes en una planta de manufactura
:class: ingenieria

Al final del turno, el supervisor de calidad revisa los lotes de piezas fabricadas y los clasifica:

- **Lote A**: `{pieza_01, pieza_02, pieza_03}` — 3 piezas aprobadas
- **Lote B**: `{}` — ninguna pieza pasó la inspección
- **Lote C**: todos los números de serie posibles del sistema → infinitos
- **Lote D**: `{pieza_01, pieza_02, pieza_03}` — mismo contenido que A, diferente etiqueta
- **Lote E**: `{pieza_01, pieza_02, pieza_03, pieza_04}` — 4 piezas (mismo tipo que A, diferente cantidad)

¿Son los lotes D y A el mismo lote? ¿Son iguales A y E?

Para responder con precisión se necesita saber los **tipos de conjuntos** y cuándo dos conjuntos son iguales o simplemente equivalentes.
:::

**Pregunta detonadora**

> Dos cajas de herramientas tienen exactamente las mismas herramientas. ¿Son la misma caja? ¿En qué caso dos conjuntos son **iguales** y en qué caso son solo **equivalentes**?

---

## Teoría

### Conjunto finito e infinito

| Tipo | Definición | Ejemplo |
|------|------------|---------|
| **Finito** | Tiene un número contable y limitado de elementos | $A = \{1, 2, 3, 4, 5\}$ — $|A| = 5$ |
| **Infinito** | El conteo no termina | $\mathbb{N} = \{0, 1, 2, 3, \ldots\}$ |

:::{admonition} 🔧 Ingeniería
:class: ingenieria
- **Finito:** el conjunto de piezas en un lote de producción — siempre hay un número exacto
- **Infinito:** el conjunto de posibles diámetros de un eje en $\mathbb{R}$ — entre 24.5 y 25.5 mm hay infinitos valores
:::

---

### Conjunto vacío $\emptyset$

Ya lo conocemos: no tiene ningún elemento.

$$\emptyset = \{\} \qquad |\emptyset| = 0$$

**Propiedades importantes:**
- $\emptyset \subseteq A$ para cualquier conjunto $A$ — el vacío es subconjunto de todos
- $A \cup \emptyset = A$
- $A \cap \emptyset = \emptyset$

```{warning}
El conjunto vacío **no es igual** a $\{0\}$, ni a $\{\emptyset\}$.  
- $\{0\}$ tiene un elemento: el número cero  
- $\{\emptyset\}$ tiene un elemento: el conjunto vacío  
- $\emptyset$ no tiene ningún elemento
```

---

### Conjunto unitario

Un conjunto con **exactamente un elemento**:

$$A = \{7\} \qquad B = \{\text{tornillo}\} \qquad C = \{0\}$$

:::{admonition} 🔧 Ingeniería
:class: ingenieria
El conjunto solución de $x^2 = 49$ en $\mathbb{N}$: $S = \{7\}$ — un unitario, porque solo $x=7$ cumple la condición (en $\mathbb{N}$ no consideramos $-7$).
:::

---

### Conjuntos iguales

Dos conjuntos $A$ y $B$ son **iguales** ($A = B$) si tienen exactamente los **mismos elementos**, sin importar el orden ni la repetición.

$$A = \{1, 2, 3\} \quad B = \{3, 1, 2\} \implies A = B$$
$$A = \{1, 1, 2, 3\} \quad B = \{1, 2, 3\} \implies A = B$$

**Condición formal:** $A = B \iff A \subseteq B \text{ y } B \subseteq A$

```{warning}
En un conjunto, el **orden no importa** y los **elementos no se repiten**.  
$\{1, 2, 3\} = \{3, 2, 1\} = \{1, 1, 2, 3\}$
```

---

### Conjuntos equivalentes

Dos conjuntos son **equivalentes** ($A \sim B$) si tienen la **misma cardinalidad**, aunque sus elementos sean distintos.

$$A = \{1, 2, 3\} \quad B = \{\text{tornillo, engrane, rodamiento}\}$$
$$|A| = |B| = 3 \implies A \sim B$$

Son equivalentes pero **no iguales** — tienen el mismo número de elementos pero elementos distintos.

| Relación | Condición | Símbolo |
|----------|-----------|:-------:|
| Igualdad | Mismos elementos | $A = B$ |
| Equivalencia | Misma cardinalidad | $A \sim B$ |

---

### Subconjunto y subconjunto propio

Ya conocemos $A \subseteq B$. Ahora la distinción:

| Relación | Símbolo | Definición |
|----------|:-------:|------------|
| Subconjunto | $A \subseteq B$ | Todo elemento de $A$ está en $B$ (puede ser igual) |
| Subconjunto propio | $A \subset B$ | Todo elemento de $A$ está en $B$ **y** $A \neq B$ |
| No es subconjunto | $A \not\subseteq B$ | Existe algún elemento de $A$ que no está en $B$ |

**Ejemplo:**
$$A = \{1, 2\} \quad B = \{1, 2, 3\}$$
$$A \subset B \quad \text{(subconjunto propio — A está en B pero A ≠ B)}$$
$$B \not\subseteq A \quad \text{(el 3 está en B pero no en A)}$$

---

### Conjunto potencia $\mathcal{P}(A)$

El **conjunto potencia** de $A$ es el conjunto de todos los subconjuntos posibles de $A$, incluyendo $\emptyset$ y el propio $A$:

$$|\mathcal{P}(A)| = 2^{|A|}$$

**Ejemplo:** $A = \{1, 2, 3\}$, $|A| = 3$, $|\mathcal{P}(A)| = 2^3 = 8$

$$\mathcal{P}(A) = \{\emptyset,\ \{1\},\ \{2\},\ \{3\},\ \{1,2\},\ \{1,3\},\ \{2,3\},\ \{1,2,3\}\}$$

---

### Resumen de tipos

| Tipo | Definición | Ejemplo |
|------|------------|---------|
| Finito | $|A|$ es un número natural | $\{2, 4, 6\}$ |
| Infinito | El conteo no termina | $\mathbb{N}$, $\mathbb{R}$ |
| Vacío | $|A| = 0$ | $\emptyset$ |
| Unitario | $|A| = 1$ | $\{5\}$ |
| Iguales | Mismos elementos | $\{1,2\} = \{2,1\}$ |
| Equivalentes | Misma cardinalidad | $\{1,2\} \sim \{a,b\}$ |

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_TIPOS_CONJUNTOS"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Mostrar los 6 tipos de conjuntos uno por uno con íconos de piezas mecánicas
2. Para igualdad: dos bolsas con las mismas piezas en diferente orden → son iguales
3. Para equivalencia: una bolsa con tornillos y otra con engranes, misma cantidad → equivalentes pero no iguales
4. Para subconjunto: diagrama de Venn con A dentro de B
5. Para conjunto potencia: árbol que muestra todos los subconjuntos de {1,2,3}
```

---

## Visualización interactiva

Explora los tipos de relación entre dos conjuntos. Modifica los elementos y observa qué relación se cumple.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s3c1-tipos" class="jsxgraph-container" style="height:480px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s3c1-tipos', {
            boundingbox: [-1, 11, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        // Pares de conjuntos predefinidos
        var casos = [
            {
                nombre: 'Iguales',
                A: [1, 2, 3], B: [3, 1, 2],
                desc: 'A = {1,2,3}  B = {3,1,2}  ->  A = B (mismos elementos)'
            },
            {
                nombre: 'Equivalentes',
                A: [1, 2, 3], B: ['a', 'b', 'c'],
                desc: 'A = {1,2,3}  B = {a,b,c}  ->  A ~ B  |A|=|B|=3'
            },
            {
                nombre: 'Subconjunto propio',
                A: [1, 2], B: [1, 2, 3, 4],
                desc: 'A = {1,2}  B = {1,2,3,4}  ->  A SUBSET B  (A ≠ B)'
            },
            {
                nombre: 'Disjuntos',
                A: [1, 3, 5], B: [2, 4, 6],
                desc: 'A = {1,3,5}  B = {2,4,6}  ->  A n B = vacio'
            }
        ];

        var casoActual = 0;
        var objDinam = [];

        function limpiar() {
            objDinam.forEach(function(o) { try { board.removeObject(o); } catch(e){} });
            objDinam = [];
        }

        function dibujar(idx) {
            limpiar();
            var c = casos[idx];

            // Título
            objDinam.push(board.create('text', [6, 9.5, c.nombre], {
                fontSize: 18, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));

            // Conjuntos
            objDinam.push(board.create('text', [2, 8.2,
                'A = {' + c.A.join(', ') + '}  |A|=' + c.A.length], {
                fontSize: 13, color: '#1d4ed8', anchorX: 'middle' }));
            objDinam.push(board.create('text', [9, 8.2,
                'B = {' + c.B.join(', ') + '}  |B|=' + c.B.length], {
                fontSize: 13, color: '#c2410c', anchorX: 'middle' }));

            // Descripción
            objDinam.push(board.create('text', [6, 1.5, c.desc], {
                fontSize: 12, color: '#374151', anchorX: 'middle', fontStyle: 'italic' }));

            // Diagrama visual según caso
            if (idx === 0) {
                // Iguales — círculos coincidentes
                objDinam.push(board.create('circle', [[6, 5], 2.5], {
                    fillColor: '#a5b4fc', fillOpacity: 0.4,
                    strokeColor: '#1d4ed8', strokeWidth: 2 }));
                objDinam.push(board.create('text', [6, 6.5, 'A = B'], {
                    fontSize: 14, color: '#1d4ed8', anchorX: 'middle', fontWeight: 'bold' }));
                c.A.forEach(function(e, i) {
                    objDinam.push(board.create('point',
                        [5 + (i-1)*0.8, 4.8], {
                        size: 5, color: '#1d4ed8', fixed: true,
                        name: String(e),
                        label: { offset: [0,10], fontSize: 11, color: '#1d4ed8' }
                    }));
                });
            } else if (idx === 1) {
                // Equivalentes — círculos separados mismo tamaño
                objDinam.push(board.create('circle', [[3, 5], 2], {
                    fillColor: '#dbeafe', fillOpacity: 0.5,
                    strokeColor: '#1d4ed8', strokeWidth: 2 }));
                objDinam.push(board.create('circle', [[9, 5], 2], {
                    fillColor: '#ffedd5', fillOpacity: 0.5,
                    strokeColor: '#c2410c', strokeWidth: 2 }));
                objDinam.push(board.create('text', [3, 7.2, 'A'], {
                    fontSize: 14, color: '#1d4ed8', anchorX: 'middle', fontWeight: 'bold' }));
                objDinam.push(board.create('text', [9, 7.2, 'B'], {
                    fontSize: 14, color: '#c2410c', anchorX: 'middle', fontWeight: 'bold' }));
                objDinam.push(board.create('text', [6, 5, '|A| = |B|'], {
                    fontSize: 13, color: '#7c3aed', anchorX: 'middle', fontWeight: 'bold' }));
            } else if (idx === 2) {
                // Subconjunto propio — A dentro de B
                objDinam.push(board.create('circle', [[6, 5], 3], {
                    fillColor: '#ffedd5', fillOpacity: 0.4,
                    strokeColor: '#c2410c', strokeWidth: 2 }));
                objDinam.push(board.create('circle', [[6, 5.5], 1.5], {
                    fillColor: '#dbeafe', fillOpacity: 0.6,
                    strokeColor: '#1d4ed8', strokeWidth: 2 }));
                objDinam.push(board.create('text', [6, 7.3, 'B'], {
                    fontSize: 14, color: '#c2410c', anchorX: 'middle', fontWeight: 'bold' }));
                objDinam.push(board.create('text', [6, 5.5, 'A'], {
                    fontSize: 13, color: '#1d4ed8', anchorX: 'middle', fontWeight: 'bold' }));
            } else if (idx === 3) {
                // Disjuntos — círculos separados sin contacto
                objDinam.push(board.create('circle', [[3.5, 5], 2], {
                    fillColor: '#dbeafe', fillOpacity: 0.5,
                    strokeColor: '#1d4ed8', strokeWidth: 2 }));
                objDinam.push(board.create('circle', [[8.5, 5], 2], {
                    fillColor: '#ffedd5', fillOpacity: 0.5,
                    strokeColor: '#c2410c', strokeWidth: 2 }));
                objDinam.push(board.create('text', [3.5, 7.2, 'A'], {
                    fontSize: 14, color: '#1d4ed8', anchorX: 'middle', fontWeight: 'bold' }));
                objDinam.push(board.create('text', [8.5, 7.2, 'B'], {
                    fontSize: 14, color: '#c2410c', anchorX: 'middle', fontWeight: 'bold' }));
                objDinam.push(board.create('text', [6, 5, 'A n B = vacio'], {
                    fontSize: 13, color: '#374151', anchorX: 'middle', fontWeight: 'bold' }));
            }
        }

        // Botones
        casos.forEach(function(c, i) {
            var btn = board.create('text', [1.5 + i * 2.8, -1.5, c.nombre], {
                fontSize: 11, color: '#374151', fontWeight: 'bold', anchorX: 'middle',
                cssStyle: 'cursor:pointer; padding:4px 8px; background:#f1f5f9; border-radius:6px;'
            });
            btn.on('down', function() { dibujar(i); });
        });

        board.create('text', [6, -2.5,
            'Selecciona un tipo de relacion para ver el diagrama'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle'
        });

        dibujar(0);
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Cuatro botones muestran los tipos de relación entre conjuntos: Iguales (círculos coincidentes), Equivalentes (círculos separados mismo tamaño), Subconjunto propio (A dentro de B), Disjuntos (círculos separados). Cada caso muestra los conjuntos concretos y el diagrama correspondiente.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfLKXmY4JYpa5osysCAnfGNGgkBMc8oS3tetJIrvC3OVvnGdA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Tipos de conjuntos
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "¿Cuál es un conjunto infinito?" → ℕ = {0,1,2,...}
P2 (T/F): "{0} = ∅" → Falso ({0} tiene un elemento)
P3 (MC): "¿Son iguales A={1,2,3} y B={3,2,1}?" → Sí, el orden no importa
P4 (MC): "A={1,2,3} y B={a,b,c}. ¿Qué relación tienen?" → Equivalentes (|A|=|B|=3)
P5 (T/F): "Si A⊂B entonces A=B." → Falso (⊂ es subconjunto propio, A≠B)
P6 (Fill): "Si |A|=4, entonces |P(A)| = ___." → 16
P7 (MC): "¿Cuántos subconjuntos tiene {a,b}?" → 4 (∅,{a},{b},{a,b})
P8 (MC ingeniería): "El conjunto solución de P(x): x²=49 en ℕ es un conjunto..." → Unitario ({7})
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 25 40 35

* - Tipo
  - Definición
  - Ejemplo
* - Finito
  - $|A|$ es número natural
  - $\{2, 4, 6\}$
* - Infinito
  - El conteo no termina
  - $\mathbb{N}$, $\mathbb{R}$
* - Vacío $\emptyset$
  - $|A| = 0$
  - Lote sin piezas aprobadas
* - Unitario
  - $|A| = 1$
  - $\{7\}$
* - Iguales $A = B$
  - Mismos elementos
  - $\{1,2,3\} = \{3,2,1\}$
* - Equivalentes $A \sim B$
  - Misma cardinalidad
  - $\{1,2,3\} \sim \{a,b,c\}$
* - Subconjunto propio $A \subset B$
  - $A \subseteq B$ y $A \neq B$
  - $\{1,2\} \subset \{1,2,3\}$
* - Conjunto potencia $\mathcal{P}(A)$
  - Todos los subconjuntos de $A$
  - $|\mathcal{P}(A)| = 2^{|A|}$
```

:::{admonition} Siguiente clase
:class: tip
Ya conoces todos los tipos de conjuntos. En la siguiente clase aprenderás a representar visualmente las relaciones entre **dos conjuntos** usando diagramas de Venn.

➡️ [Ir a S3·C2 Diagramas de Venn con dos conjuntos](s3_c2_venn_dos_conjuntos.md)
:::
