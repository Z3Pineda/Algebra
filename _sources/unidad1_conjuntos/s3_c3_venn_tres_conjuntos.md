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

$$H = \{\text{bomba}_1, \text{bomba}_2, \text{cilindro}_A, \text{válvula}_3\}$$
$$E = \{\text{motor}_1, \text{bomba}_2, \text{sensor}_T, \text{válvula}_3\}$$
$$N = \{\text{compresor}, \text{cilindro}_A, \text{cilindro}_C, \text{regulador}\}$$

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

<!--
## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_VENN_TRES"
    allowfullscreen>
  </iframe>
</div>
```

---
-->

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdFkg0BBLyon-5yidQkKKVrmnXU-1RYy6rzd_QIJRUunJlfTw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Venn con tres conjuntos
  </a>
</div>
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
