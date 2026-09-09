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

<!--
## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_VENN_DOS"
    allowfullscreen>
  </iframe>
</div>
```

---
-->

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeRYZM1rOwtjul5lsBv2roibmU5lHEMb0zzfeogQxvzjphvTw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Venn con dos conjuntos
  </a>
</div>
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
