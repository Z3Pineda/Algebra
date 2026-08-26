---
title: "S1·C4 Operaciones básicas con conjuntos"
---

# S1·C4 Operaciones básicas con conjuntos

:::{admonition} 🔧 El almacén de refacciones — decisiones de compra
:class: ingenieria

El jefe de almacén tiene dos listas:

- **Lista A** — piezas que necesitan lubricación: `{tornillo, engrane, rodamiento, pistón}`
- **Lista B** — piezas de acero inoxidable: `{engrane, válvula, rodamiento, tuerca}`

Necesita responder cuatro preguntas:

1. ¿Qué piezas están en **alguna** de las dos listas? → unión
2. ¿Qué piezas están en **ambas** listas? → intersección
3. ¿Qué piezas están en A pero **no** en B? → diferencia
4. ¿Qué piezas **no** están en A? → complemento
:::

---

## Teoría

### Unión $A \cup B$

$$A \cup B = \{x \mid x \in A \ \text{o} \ x \in B\}$$

$$A \cup B = \{\text{tornillo, engrane, rodamiento, pistón, válvula, tuerca}\}$$

```{warning}
Los elementos que aparecen en ambos conjuntos se escriben **una sola vez** en la unión.
```

:::{admonition} 🔧 Ingeniería
:class: ingenieria
$A \cup B$ = todas las piezas que el almacén necesita si cualquier sistema entra a mantenimiento.
:::

---

### Intersección $A \cap B$

$$A \cap B = \{x \mid x \in A \ \text{y} \ x \in B\}$$

$$A \cap B = \{\text{engrane, rodamiento}\}$$

:::{admonition} 🔧 Ingeniería
:class: ingenieria
$A \cap B$ = piezas críticas que necesitan lubricante especial anticorrosión.
:::

---

### Diferencia $A - B$

$$A - B = \{x \mid x \in A \ \text{y} \ x \notin B\} = \{\text{tornillo, pistón}\}$$

```{warning}
La diferencia **no es conmutativa**: $A - B \neq B - A$ en general.
```

---

### Complemento $A'$

$$A' = \{x \in U \mid x \notin A\} = \text{piezas que NO necesitan lubricación}$$

---

### Tabla resumen

| Operación | Símbolo | Condición | Ingeniería |
|-----------|:-------:|-----------|------------|
| Unión | $A \cup B$ | En $A$ **o** en $B$ | Pedido general |
| Intersección | $A \cap B$ | En $A$ **y** en $B$ | Doble especificación |
| Diferencia | $A - B$ | En $A$ pero **no** en $B$ | Solo un grupo |
| Complemento | $A'$ | **No** está en $A$ | Fuera de especificación |

---

### Principio de Inclusión-Exclusión

$$|A \cup B| = |A| + |B| - |A \cap B|$$

**Ejemplo:** En 60 válvulas: 25 con fuga, 18 con corrosión, 8 con ambas.

$$|F \cup C| = 25 + 18 - 8 = 35 \text{ válvulas con al menos una falla}$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_OPERACIONES_CONJUNTOS"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Dos círculos A y B con piezas mecánicas como íconos
2. Animar unión: ambos círculos se iluminan en azul
3. Animar intersección: solo el área central en naranja
4. Animar diferencia A-B: área de A que no se solapa en rojo
5. Animar complemento: todo fuera del círculo A
6. PIE con números animados: |A∪B| = |A| + |B| - |A∩B|
```

---

## Visualización interactiva

Selecciona una operación y observa qué región se activa en el diagrama de Venn.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s1c4-operaciones" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s1c4-operaciones', {
            boundingbox: [-1, 10, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var soloA  = ['tornillo', 'piston'];
        var inter  = ['engrane', 'rodamiento'];
        var soloB  = ['valvula', 'tuerca'];

        board.create('polygon', [[0.3,0.5],[12,0.5],[12,9],[0.3,9]], {
            fillColor: '#f8fafc', fillOpacity: 1,
            strokeColor: '#374151', strokeWidth: 2,
            vertices: { visible: false }
        });
        board.create('text', [0.6, 8.7, 'U'], {
            fontSize: 13, color: '#6b7280', fontStyle: 'italic' });

        var cA = board.create('circle', [[4.2, 5], 2.5], {
            fillColor: '#3b82f6', fillOpacity: 0.3,
            strokeColor: '#1d4ed8', strokeWidth: 2 });
        var cB = board.create('circle', [[7.8, 5], 2.5], {
            fillColor: '#f97316', fillOpacity: 0.3,
            strokeColor: '#c2410c', strokeWidth: 2 });

        board.create('text', [2.5, 8.2, 'A'], {
            fontSize: 16, color: '#1d4ed8', fontWeight: 'bold' });
        board.create('text', [9.5, 8.2, 'B'], {
            fontSize: 16, color: '#c2410c', fontWeight: 'bold' });

        var posA   = [[2.5,6],[2.5,4.5]];
        var posInt = [[6,6],[6,4.5]];
        var posB   = [[9.5,6],[9.5,4.5]];

        function crearPuntos(lista, posiciones, color) {
            lista.forEach(function(e, i) {
                board.create('point', posiciones[i], {
                    size: 6, color: color, fixed: true, name: e,
                    label: { fontSize: 10, color: '#1e293b', offset: [0,10] }
                });
            });
        }
        crearPuntos(soloA,  posA,   '#1d4ed8');
        crearPuntos(inter,  posInt, '#7c3aed');
        crearPuntos(soloB,  posB,   '#c2410c');

        var resultados = {
            union:        'A U B = {tornillo, engrane, rodamiento, piston, valvula, tuerca}',
            interseccion: 'A n B = {engrane, rodamiento}',
            diferencia:   'A - B = {tornillo, piston}',
            complemento:  "A\' = {valvula, tuerca} y todo lo demas fuera de A"
        };

        var txtRes = board.create('text', [6, -1,
            resultados.union], {
            fontSize: 12, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle'
        });

        var btnDefs = [
            { label: 'A U B', x: 1,   modo: 'union',        color: '#1d4ed8' },
            { label: 'A n B', x: 4,   modo: 'interseccion', color: '#c2510c' },
            { label: 'A - B', x: 7,   modo: 'diferencia',   color: '#dc2626' },
            { label: "A\'",   x: 10,  modo: 'complemento',  color: '#16a34a' },
        ];

        btnDefs.forEach(function(b) {
            var btn = board.create('text', [b.x, -2, b.label], {
                fontSize: 13, color: '#374151', fontWeight: 'bold',
                cssStyle: 'cursor:pointer; padding:4px 10px; background:#f1f5f9; border-radius:6px;'
            });
            btn.on('down', function() {
                txtRes.setText(resultados[b.modo]);
                txtRes.setAttribute({ color: b.color });
                board.update();
            });
        });

        board.create('text', [6, -2.5,
            'Clic en cada operacion para ver el resultado'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle'
        });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Cuatro botones activan cada operación. El resultado aparece en texto debajo del diagrama. Ideal para mostrar en clase mientras los alumnos identifican qué elementos pertenecen a cada región.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSesBAUUWEnXhkhn1vDMCQryihaq3zeJ1mV84s6CPQkrPt8ufw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Operaciones con conjuntos
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (10 preguntas, ~15 min):**

Sean A={1,2,3,4,5}, B={3,4,5,6,7}, U={1,...,10}

P1-P5: A∪B={1,2,3,4,5,6,7}, A∩B={3,4,5}, A-B={1,2}, B-A={6,7}, A'={6,7,8,9,10}
P6: |A∪B|=7
P7: PIE: 5+5-3=7
P8 (ingeniería): 45 vibración + 30 calor - 20 ambas = 55
P9 (T/F): A-B=B-A siempre → Falso
P10: Si A∩B=∅ los conjuntos son → Disjuntos
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 20 20 30 30

* - Operación
  - Símbolo
  - Cuándo entra un elemento
  - Ejemplo
* - Unión
  - $A \cup B$
  - En $A$ **o** en $B$
  - Pedido general
* - Intersección
  - $A \cap B$
  - En $A$ **y** en $B$
  - Doble especificación
* - Diferencia
  - $A - B$
  - En $A$ pero **no** en $B$
  - Solo un grupo
* - Complemento
  - $A'$
  - **No** está en $A$
  - Fuera de especificación
* - PIE
  - $|A \cup B|$
  - $= |A| + |B| - |A \cap B|$
  - Contar sin duplicar
```

:::{admonition} Siguiente clase
:class: tip
Con las cuatro operaciones dominadas, en la clase de autogestión reforzarás todo lo de la semana con ejercicios guiados.

➡️ [Ir a S1·Auto Repaso de conjuntos](s1_auto_repaso_conjuntos.md)
:::
