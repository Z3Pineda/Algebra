---
title: "S3·C3 Diagramas de Venn con tres conjuntos"
---

# S3·C3 Diagramas de Venn con tres conjuntos

:::{admonition} 🔧 Análisis de fallas en tres sistemas
:class: ingenieria

El departamento de mantenimiento ahora analiza tres sistemas simultáneamente:

- **H** (Hidráulico): `{bomba_1, bomba_2, cilindro_A, válvula_3}`
- **E** (Eléctrico): `{motor_1, bomba_2, sensor_T, válvula_3}`
- **N** (Neumático): `{compresor, cilindro_A, cilindro_C, regulador}`

Con tres sistemas aparecen preguntas más complejas:

1. ¿Qué equipos fallaron en **los tres sistemas** al mismo tiempo? → zona central
2. ¿Qué equipos fallaron en **exactamente dos** sistemas? → zonas de intersección parcial
3. ¿Cuál es el equipo **más crítico** de toda la planta?

Con dos conjuntos teníamos 4 regiones. Con tres tenemos **8 regiones**.
:::

**Pregunta detonadora**

> Con $n$ conjuntos, ¿cuántas regiones tiene el diagrama de Venn? ¿Puedes encontrar la fórmula antes de verla?

---

## Teoría

### Las 8 regiones del Venn de tres conjuntos

| # | Región | Notación | Descripción |
|---|--------|----------|-------------|
| 1 | Solo A | $A - B - C$ | Solo en $A$ |
| 2 | Solo B | $B - A - C$ | Solo en $B$ |
| 3 | Solo C | $C - A - B$ | Solo en $C$ |
| 4 | A y B (no C) | $(A \cap B) - C$ | En $A$ y $B$, pero no en $C$ |
| 5 | A y C (no B) | $(A \cap C) - B$ | En $A$ y $C$, pero no en $B$ |
| 6 | B y C (no A) | $(B \cap C) - A$ | En $B$ y $C$, pero no en $A$ |
| 7 | Centro | $A \cap B \cap C$ | En los **tres** |
| 8 | Exterior | $(A \cup B \cup C)'$ | En ninguno |

**Total: $2^3 = 8$ regiones**

---

### Fórmula general

$$\text{Regiones de un Venn con } n \text{ conjuntos} = 2^n$$

| $n$ | Regiones | ¿Dibujable con círculos? |
|:---:|:--------:|:---:|
| 1 | 2 | ✅ |
| 2 | 4 | ✅ |
| 3 | 8 | ✅ |
| 4 | 16 | ⚠️ Solo con elipses |
| 5 | 32 | ❌ |

---

### Principio de Inclusión-Exclusión para tres conjuntos

$$|A \cup B \cup C| = |A|+|B|+|C| - |A \cap B| - |A \cap C| - |B \cap C| + |A \cap B \cap C|$$

**¿Por qué sumamos $|A \cap B \cap C|$ al final?**

Al restar las tres intersecciones dobles, restamos la intersección triple **tres veces** — una de más. Por eso la sumamos una vez al final.

---

### Aplicación al problema de tres sistemas

$$H = \{\text{bomba\_1, bomba\_2, cilindro\_A, válvula\_3}\}$$
$$E = \{\text{motor\_1, bomba\_2, sensor\_T, válvula\_3}\}$$
$$N = \{\text{compresor, cilindro\_A, cilindro\_C, regulador}\}$$

Clasificando cada equipo en las 8 regiones:

| Equipo | H | E | N | Región |
|--------|:---:|:---:|:---:|--------|
| bomba_1 | ✅ | ❌ | ❌ | Solo H |
| motor_1 | ❌ | ✅ | ❌ | Solo E |
| compresor | ❌ | ❌ | ✅ | Solo N |
| cilindro_C | ❌ | ❌ | ✅ | Solo N |
| regulador | ❌ | ❌ | ✅ | Solo N |
| bomba_2 | ✅ | ✅ | ❌ | H y E (no N) |
| válvula_3 | ✅ | ✅ | ❌ | H y E (no N) |
| cilindro_A | ✅ | ❌ | ✅ | H y N (no E) |
| sensor_T | ❌ | ✅ | ❌ | Solo E |

$$H \cap E \cap N = \emptyset \quad \leftarrow \text{ningún equipo falló en los tres sistemas}$$

Los equipos **más críticos** son `bomba_2` y `válvula_3` (fallaron en H y E) y `cilindro_A` (falló en H y N).

---

### PIE aplicado

$$|H \cup E \cup N| = 4 + 4 + 4 - 2 - 1 - 0 + 0 = 9 \text{ equipos con al menos una falla}$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_VENN_TRES"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Partir del Venn de 2 conjuntos (4 regiones) y agregar el tercer círculo
2. Mostrar cómo cada círculo nuevo dobla el número de regiones: 4→8
3. Numerar las 8 regiones con animación
4. Colocar los equipos de H, E, N en sus regiones una por una
5. Demostrar el PIE de 3 conjuntos con los números reales
6. Cierre: los equipos en intersecciones son los más críticos para el mantenimiento
```

---

## Visualización interactiva

Explora las 8 regiones del Venn de tres conjuntos. Haz clic en cada región para ver qué equipos pertenecen ahí.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s3c3-venn3" class="jsxgraph-container" style="height:540px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s3c3-venn3', {
            boundingbox: [-1, 11, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        // Universo
        board.create('polygon', [[0.2,0.2],[12,0.2],[12,10.2],[0.2,10.2]], {
            fillColor: '#f8fafc', fillOpacity: 1,
            strokeColor: '#374151', strokeWidth: 2,
            vertices: { visible: false }
        });
        board.create('text', [0.5, 9.9, 'U'], {
            fontSize: 13, color: '#6b7280', fontStyle: 'italic' });

        // Tres círculos en triángulo
        board.create('circle', [[4.5, 6.5], 2.8], {
            fillColor: '#dbeafe', fillOpacity: 0.25,
            strokeColor: '#1d4ed8', strokeWidth: 2 });
        board.create('circle', [[7.5, 6.5], 2.8], {
            fillColor: '#ffedd5', fillOpacity: 0.25,
            strokeColor: '#c2410c', strokeWidth: 2 });
        board.create('circle', [[6.0, 3.8], 2.8], {
            fillColor: '#dcfce7', fillOpacity: 0.25,
            strokeColor: '#15803d', strokeWidth: 2 });

        // Etiquetas
        board.create('text', [2.8, 9.5, 'H'], {
            fontSize: 14, color: '#1d4ed8', fontWeight: 'bold' });
        board.create('text', [9.2, 9.5, 'E'], {
            fontSize: 14, color: '#c2410c', fontWeight: 'bold' });
        board.create('text', [6.0, 0.8, 'N'], {
            fontSize: 14, color: '#15803d', fontWeight: 'bold' });

        // Elementos en regiones
        var puntos = [
            { nombre: 'bomba_1',   x: 3.0, y: 7.5, color: '#1d4ed8' },
            { nombre: 'sensor_T',  x: 9.0, y: 7.5, color: '#c2410c' },
            { nombre: 'motor_1',   x: 9.0, y: 6.0, color: '#c2410c' },
            { nombre: 'compresor', x: 5.0, y: 2.0, color: '#15803d' },
            { nombre: 'cilindro_C',x: 7.0, y: 2.0, color: '#15803d' },
            { nombre: 'regulador', x: 6.0, y: 1.2, color: '#15803d' },
            { nombre: 'bomba_2',   x: 6.0, y: 7.8, color: '#7c3aed' },
            { nombre: 'valvula_3', x: 5.5, y: 7.0, color: '#7c3aed' },
            { nombre: 'cilindro_A',x: 4.5, y: 4.8, color: '#065f46' },
        ];

        puntos.forEach(function(p) {
            board.create('point', [p.x, p.y], {
                size: 5, color: p.color, fixed: true,
                name: p.nombre,
                label: { offset: [0,9], fontSize: 8, color: p.color }
            });
        });

        // Texto explicativo dinámico
        var txtInfo = board.create('text', [6, -1.2,
            'Puntos morados: H n E  |  Punto verde oscuro: H n N  |  Centro HEN = vacio'], {
            fontSize: 10, color: '#374151', anchorX: 'middle', fontStyle: 'italic'
        });

        // PIE
        board.create('text', [6, -2.2,
            '|H u E u N| = 4+4+4 - 2-1-0 + 0 = 9 equipos con fallas'], {
            fontSize: 11, color: '#1d4ed8', anchorX: 'middle', fontWeight: 'bold'
        });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Diagrama de Venn de 3 conjuntos con los equipos de mantenimiento distribuidos en sus regiones. Puntos morados en H∩E (bomba_2, válvula_3), punto verde oscuro en H∩N (cilindro_A). El PIE aparece debajo. El centro está vacío (ningún equipo falló en los tres sistemas).
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFkg0BBLyon-5yidQkKKVrmnXU-1RYy6rzd_QIJRUunJlfTw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Venn con tres conjuntos
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~12 min):**

P1 (Fill): "Un Venn de 3 conjuntos tiene ___ regiones." → 8
P2 (Fill): "La fórmula de regiones para n conjuntos es ___." → 2^n
P3 (MC): "¿En qué región está un elemento que pertenece a A, B pero no a C?" → (A∩B)-C
P4 (Fill — PIE): "|A∪B∪C| = |A|+|B|+|C| - |A∩B| - |A∩C| - |B∩C| + ___" → |A∩B∩C|
P5 (Fill ingeniería): "De 50 técnicos: soldadura S=28, maquinado M=22, metrología T=18, S∩M=12, S∩T=8, M∩T=6, S∩M∩T=4. |S∪M∪T| = ___" → 46
P6 (Fill): "Sin ninguna certificación: ___" → 4
P7 (MC): "¿Cuál equipo está en H∩E según el diagrama del problema?" → bomba_2
P8 (MC): "¿Cuántas regiones tiene un Venn de 4 conjuntos?" → 16
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 20 35 45

* - Región
  - Notación
  - Elementos que contiene
* - Solo A
  - $A - B - C$
  - En A, no en B ni C
* - Solo B
  - $B - A - C$
  - En B, no en A ni C
* - Solo C
  - $C - A - B$
  - En C, no en A ni B
* - A y B (no C)
  - $(A \cap B) - C$
  - En A y B, no en C
* - A y C (no B)
  - $(A \cap C) - B$
  - En A y C, no en B
* - B y C (no A)
  - $(B \cap C) - A$
  - En B y C, no en A
* - Centro
  - $A \cap B \cap C$
  - En los tres
* - Exterior
  - $(A \cup B \cup C)'$
  - En ninguno
* - PIE
  - $|A \cup B \cup C|$
  - $= |A|+|B|+|C|-|A \cap B|-|A \cap C|-|B \cap C|+|A \cap B \cap C|$
```

:::{admonition} Siguiente clase
:class: tip
Con los diagramas de Venn dominados, en la siguiente clase aplicarás todo lo aprendido en la Unidad 1 resolviendo **problemas aplicados** — situaciones reales de ingeniería que combinan conjuntos, lógica y Venn.

➡️ [Ir a S3·C4 Problemas aplicados con conjuntos y lógica](s3_c4_problemas_aplicados.md)
:::
