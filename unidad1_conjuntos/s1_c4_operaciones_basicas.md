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

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/T73XLLb633M"
    allowfullscreen>
  </iframe>
</div>
```
---

### Intersección $A \cap B$

$$A \cap B = \{x \mid x \in A \ \text{y} \ x \in B\}$$

$$A \cap B = \{\text{engrane, rodamiento}\}$$

:::{admonition} 🔧 Ingeniería
:class: ingenieria
$A \cap B$ = piezas críticas que necesitan lubricante especial anticorrosión.
:::

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/f_JGunq8-Ys"
    allowfullscreen>
  </iframe>
</div>
```
---

### Diferencia $A - B$

$$A - B = \{x \mid x \in A \ \text{y} \ x \notin B\} = \{\text{tornillo, pistón}\}$$

```{warning}
La diferencia **no es conmutativa**: $A - B \neq B - A$ en general.
```
## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/tCbSnAho3Aw"
    allowfullscreen>
  </iframe>
</div>
```
---

### Complemento $A'$

$$A' = \{x \in U \mid x \notin A\} = \text{piezas que NO necesitan lubricación}$$

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/QrR-Tw6S_RA"
    allowfullscreen>
  </iframe>
</div>
```
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
    src="https://www.youtube.com/embed/UflR0vM0kEA"
    allowfullscreen>
  </iframe>
</div>
```

---

## Descargar clase en PDF

Descarga el **apunte completo de esta clase** (PDF preparado por la docente). No uses el menú del navegador «Imprimir»; ese genera otra versión de la página web.

```{raw} html
<div class="quizizz-link">
  <a href="../_static/s1_c4_operaciones_basicas.pdf" class="pdf-btn" download="s1_c4_operaciones_basicas.pdf">
    📄 Descargar apunte en PDF
  </a>
</div>
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
