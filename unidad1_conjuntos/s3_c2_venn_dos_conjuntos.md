---
title: "S3·C2 Diagramas de Venn con dos conjuntos"
---

# S3·C2 Diagramas de Venn con dos conjuntos

:::{admonition} 🔧 Análisis de fallas en dos sistemas
:class: ingenieria

El departamento de mantenimiento registró qué equipos fallaron durante el mes en dos sistemas:

- **Sistema H** (Hidráulico): `{bomba_1, bomba_2, cilindro_A, válvula_3}`
- **Sistema E** (Eléctrico): `{motor_1, bomba_2, sensor_T, válvula_3}`

El jefe de mantenimiento necesita responder visualmente:

1. ¿Qué equipos fallaron **solo** en el sistema hidráulico?
2. ¿Qué equipos fallaron en **ambos** sistemas al mismo tiempo?
3. ¿Qué equipos fallaron **solo** en el sistema eléctrico?
4. ¿Qué equipos **no** fallaron en ninguno?

Un diagrama de Venn responde las cuatro preguntas de un vistazo.
:::

**Pregunta detonadora**

> Si un diagrama de Venn con 1 conjunto tiene 2 regiones, ¿cuántas tendrá uno con 2 conjuntos? ¿Y con 3?

---

## Teoría

### Estructura del diagrama de Venn con dos conjuntos

Un diagrama de Venn con dos conjuntos tiene **4 regiones distintas**:

| Región | Notación | Descripción |
|--------|----------|-------------|
| Solo izquierda | $A - B$ | En $A$ pero **no** en $B$ |
| Centro | $A \cap B$ | En $A$ **y** en $B$ |
| Solo derecha | $B - A$ | En $B$ pero **no** en $A$ |
| Exterior | $(A \cup B)'$ | **Ni** en $A$ ni en $B$ |

**Total de regiones: $2^2 = 4$**

---

### Cómo construir un diagrama de Venn

**Paso 1:** Dibuja el rectángulo del universo $U$

**Paso 2:** Dibuja dos círculos solapados dentro del rectángulo — uno para $A$ y otro para $B$

**Paso 3:** Coloca cada elemento en la región correcta:
- Si pertenece solo a $A$ → región izquierda
- Si pertenece a $A$ y a $B$ → región central
- Si pertenece solo a $B$ → región derecha
- Si no pertenece a ninguno → exterior

---

### Aplicación al problema de mantenimiento

$$H = \{\text{bomba\_1, bomba\_2, cilindro\_A, válvula\_3}\}$$
$$E = \{\text{motor\_1, bomba\_2, sensor\_T, válvula\_3}\}$$

Clasificando cada equipo:

| Equipo | ¿En H? | ¿En E? | Región |
|--------|:---:|:---:|--------|
| bomba_1 | ✅ | ❌ | Solo H |
| bomba_2 | ✅ | ✅ | $H \cap E$ |
| cilindro_A | ✅ | ❌ | Solo H |
| válvula_3 | ✅ | ✅ | $H \cap E$ |
| motor_1 | ❌ | ✅ | Solo E |
| sensor_T | ❌ | ✅ | Solo E |

$$H \cap E = \{\text{bomba\_2, válvula\_3}\} \quad \leftarrow \text{equipos críticos: fallaron en ambos sistemas}$$

---

### Principio de Inclusión-Exclusión

Para contar sin duplicar los elementos de la intersección:

$$|H \cup E| = |H| + |E| - |H \cap E| = 4 + 4 - 2 = 6$$

Verificación: $|\text{solo H}| + |H \cap E| + |\text{solo E}| = 2 + 2 + 2 = 6$ ✅

---

### Los cuatro casos especiales entre dos conjuntos

| Caso | Diagrama | Condición |
|------|----------|-----------|
| **Disjuntos** | Círculos separados | $A \cap B = \emptyset$ |
| **Intersección parcial** | Círculos solapados | $A \cap B \neq \emptyset$, $A \neq B$ |
| **Subconjunto** | A dentro de B | $A \subseteq B$ |
| **Iguales** | Círculos coincidentes | $A = B$ |

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_VENN_DOS"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Construir el diagrama paso a paso: rectángulo U, dos círculos, etiquetas
2. Colocar los equipos de H y E en sus regiones correspondientes uno a uno
3. Iluminar cada región con su color y nombre: solo H (azul), H∩E (morado), solo E (naranja), exterior (gris)
4. Mostrar el PIE con los números: 4+4-2=6
5. Animar los 4 casos especiales: disjuntos → parcial → subconjunto → iguales
```

---

## Visualización interactiva

Arrastra los elementos a la región correcta del diagrama de Venn. El sistema verifica automáticamente tu respuesta.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s3c2-venn2" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s3c2-venn2', {
            boundingbox: [-1, 10, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        // Universo
        board.create('polygon', [[0.2,0.2],[12,0.2],[12,9],[0.2,9]], {
            fillColor: '#f8fafc', fillOpacity: 1,
            strokeColor: '#374151', strokeWidth: 2,
            vertices: { visible: false }
        });
        board.create('text', [0.5, 8.7, 'U'], {
            fontSize: 13, color: '#6b7280', fontStyle: 'italic' });

        // Círculo H
        board.create('circle', [[4.2, 5], 2.8], {
            fillColor: '#dbeafe', fillOpacity: 0.4,
            strokeColor: '#1d4ed8', strokeWidth: 2 });
        board.create('text', [2.5, 8.2, 'H (Hidraulico)'], {
            fontSize: 12, color: '#1d4ed8', fontWeight: 'bold' });

        // Círculo E
        board.create('circle', [[7.8, 5], 2.8], {
            fillColor: '#ffedd5', fillOpacity: 0.4,
            strokeColor: '#c2410c', strokeWidth: 2 });
        board.create('text', [7.2, 8.2, 'E (Electrico)'], {
            fontSize: 12, color: '#c2410c', fontWeight: 'bold' });

        // Elementos en sus regiones correctas
        var datos = [
            { nombre: 'bomba_1',   x: 2.5, y: 5.8, color: '#1d4ed8', region: 'solo H' },
            { nombre: 'cilindro_A',x: 2.5, y: 4.2, color: '#1d4ed8', region: 'solo H' },
            { nombre: 'bomba_2',   x: 6.0, y: 5.8, color: '#7c3aed', region: 'H n E' },
            { nombre: 'valvula_3', x: 6.0, y: 4.2, color: '#7c3aed', region: 'H n E' },
            { nombre: 'motor_1',   x: 9.5, y: 5.8, color: '#c2410c', region: 'solo E' },
            { nombre: 'sensor_T',  x: 9.5, y: 4.2, color: '#c2410c', region: 'solo E' },
        ];

        datos.forEach(function(d) {
            board.create('point', [d.x, d.y], {
                size: 6, color: d.color, fixed: true,
                name: d.nombre,
                label: { offset: [0,10], fontSize: 9, color: d.color }
            });
        });

        // Etiquetas de regiones
        board.create('text', [2.5, 2.8, 'Solo H'], {
            fontSize: 11, color: '#1d4ed8', fontStyle: 'italic', anchorX: 'middle' });
        board.create('text', [6.0, 2.8, 'H n E'], {
            fontSize: 11, color: '#7c3aed', fontStyle: 'italic', anchorX: 'middle' });
        board.create('text', [9.5, 2.8, 'Solo E'], {
            fontSize: 11, color: '#c2410c', fontStyle: 'italic', anchorX: 'middle' });

        // PIE
        board.create('text', [6, -0.8,
            '|H u E| = |H| + |E| - |H n E| = 4 + 4 - 2 = 6'], {
            fontSize: 12, color: '#374151', anchorX: 'middle', fontWeight: 'bold' });

        board.create('text', [6, -2,
            'Los puntos morados fallaron en AMBOS sistemas - son los mas criticos'], {
            fontSize: 11, color: '#7c3aed', anchorX: 'middle', fontStyle: 'italic' });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Diagrama de Venn con los equipos del problema de mantenimiento distribuidos en sus regiones correctas. Los puntos morados (bomba_2 y válvula_3) están en la intersección. El PIE se muestra debajo. Ideal para proyectar en clase mientras se explican las cuatro regiones.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRYZM1rOwtjul5lsBv2roibmU5lHEMb0zzfeogQxvzjphvTw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Venn con dos conjuntos
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

Sean A={1,2,3,4,5}, B={3,4,5,6,7}, U={1,...,10}

P1 (Fill): "¿Cuántas regiones distintas tiene un Venn de 2 conjuntos?" → 4
P2 (Fill): "A∩B = {___,___,___}" → 3,4,5
P3 (Fill): "A-B = {___,___}" → 1,2
P4 (Fill): "B-A = {___,___}" → 6,7
P5 (Fill): "|A∪B| = ___ + ___ - ___ = ___" → 5,5,3,7
P6 (MC): "Si A∩B=∅, ¿cómo se ven los círculos?" → Separados (disjuntos)
P7 (MC): "Si A⊆B, ¿cómo se ven?" → El círculo A está dentro del B
P8 (MC ingeniería): "H y E son los sistemas con fallas. bomba_2 falla en ambos. ¿En qué región del Venn está?" → H∩E (intersección)
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 25 30 45

* - Región
  - Notación
  - Descripción
* - Solo A
  - $A - B$
  - En $A$ pero no en $B$
* - Intersección
  - $A \cap B$
  - En ambos
* - Solo B
  - $B - A$
  - En $B$ pero no en $A$
* - Exterior
  - $(A \cup B)'$
  - En ninguno
* - PIE
  - $|A \cup B|$
  - $= |A| + |B| - |A \cap B|$
```

:::{admonition} Siguiente clase
:class: tip
Ya dominas el Venn de dos conjuntos. En la siguiente clase agregaremos un tercer conjunto — con 3 círculos el análisis se vuelve mucho más poderoso para la ingeniería.

➡️ [Ir a S3·C3 Diagramas de Venn con tres conjuntos](s3_c3_venn_tres_conjuntos.md)
:::
