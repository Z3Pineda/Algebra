---
title: "S1·C3 Representación de conjuntos"
---

# S1·C3 Representación de conjuntos

:::{admonition} 🔧 El catálogo de refacciones
:class: ingenieria

El almacén recibe un pedido urgente: necesita identificar todas las piezas de acero inoxidable con diámetro mayor a 20 mm.

El encargado tiene tres formas de comunicar esa información al proveedor:

1. **Listar cada pieza:** "engrane ref. 045, rodamiento ref. 112, válvula ref. 203..."
2. **Describir la regla:** "todas las piezas de acero inoxidable con diámetro > 20 mm"
3. **Mostrar un diagrama** con las piezas agrupadas visualmente

Las tres formas dicen lo mismo. En matemáticas se llaman extensión, comprensión y diagrama de Venn.
:::

**Pregunta detonadora**

> Si el conjunto tiene 500 piezas, ¿cuál de las tres formas usarías para comunicarlo? ¿Y si tiene solo 4?

---

## Teoría

### Forma 1 — Extensión

Se listan **todos los elementos** del conjunto entre llaves:

$$A = \{2,\ 4,\ 6,\ 8,\ 10\} \qquad M = \{\text{tornillo},\ \text{tuerca},\ \text{arandela},\ \text{remache}\}$$

Para conjuntos grandes con patrón claro se usan puntos suspensivos:

$$P = \{2,\ 4,\ 6,\ \ldots,\ 100\} \qquad \mathbb{N} = \{0,\ 1,\ 2,\ 3,\ \ldots\}$$

### Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/5mSR9vn-Q7c"
    allowfullscreen>
  </iframe>
</div>
```
---

### Forma 2 — Comprensión

Se describe la **regla** que deben cumplir los elementos:

$$A = \{x \in U \mid P(x)\}$$

Se lee: *"$A$ es el conjunto de todos los $x$ en $U$ tales que $P(x)$ es verdadera"*

| Por extensión | Por comprensión |
|---------------|-----------------|
| $A = \{2, 4, 6, 8, 10\}$ | $A = \{x \in \mathbb{N} \mid x \text{ es par},\ x \leq 10\}$ |
| $T = \{24.5, \ldots, 25.5\}$ | $T = \{x \in \mathbb{R} \mid 24.5 \leq x \leq 25.5\}$ |

:::{admonition} 🔧 Control de calidad con comprensión
:class: ingenieria
El conjunto de ejes aceptables en una línea CNC:
$$E = \{x \in \mathbb{R} \mid 24.5 \leq x \leq 25.5\}$$
Escribirlo por extensión sería imposible — hay infinitos valores reales entre 24.5 y 25.5.
:::

### Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/Odm3Eo7gSI0"
    allowfullscreen>
  </iframe>
</div>
```


```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/IgPsLRBy-JA"
    allowfullscreen>
  </iframe>
</div>
```

---

### Forma 3 — Diagrama de Venn

Representación **visual** usando figuras geométricas:
- El **rectángulo** = conjunto universal $U$
- Los **círculos** = cada conjunto
- Los **puntos** dentro = elementos

### Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/TDnw6p9uACc"
    allowfullscreen>
  </iframe>
</div>
```



**Problema**

>En un taller hay 30 piezas. 18 necesitan lubricación. 12 tienen dureza mayor a 60 HRC. 7 cumplen las dos condiciones. ¿Cuántas piezas cumplen al menos una?"

### Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/MOlPgpg1gc0"
    allowfullscreen>
  </iframe>
</div>
```
---

## Representaciones para un solo conjunto

### Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/oDUlQkI_Vek"
    allowfullscreen>
  </iframe>
</div>
```
---


### Conjuntos numéricos importantes

| Símbolo | Nombre | Contiene | Ingeniería |
|:-------:|--------|----------|------------|
| $\mathbb{N}$ | Naturales | $0, 1, 2, 3, \ldots$ | Número de tornillos |
| $\mathbb{Z}$ | Enteros | $\ldots, -2, -1, 0, 1, 2, \ldots$ | Temperatura en °C |
| $\mathbb{Q}$ | Racionales | Fracciones exactas | Relación de engranajes $3/2$ |
| $\mathbb{R}$ | Reales | Todos + irracionales | Longitud de un eje |

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/45rgzcvWcNM"
    allowfullscreen>
  </iframe>
</div>
```

---

## Descargar clase en PDF

Descarga el **apunte completo de esta clase** (PDF preparado por la docente). No uses el menú del navegador «Imprimir»; ese genera otra versión de la página web.

```{raw} html
<div class="quizizz-link">
  <a href="../_static/s1_c3_representacion_conjuntos.pdf" class="pdf-btn" download="s1_c3_representacion_conjuntos.pdf">
    📄 Descargar apunte en PDF
  </a>
</div>
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf7eCtJvgcZPhIF47oJVae53lAjiyd68jEVyN0dJB6eJjCF-w/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Representación de conjuntos
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "¿Cómo se llama la forma de representar listando todos los elementos?" 
P2 (MC): "¿Comprensión de {1,3,5,7,9}?" 
P3 (T/F): "{x ∈ ℝ | 24.5 ≤ x ≤ 25.5} ¿se puede representar por extensión?" 
P4 (Fill): "El símbolo | en {x ∈ U | P(x)} se lee como '___'." 
P5 (MC): "¿Qué conjunto numérico incluye negativos pero NO decimales?" 
P6 (MC): "La forma más adecuada para el conjunto de temperaturas entre 60°C y 90°C es:"
P7 (T/F): "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ, ¿es Falso o Verdadero?" 
P8 (Fill): "Sea B = {x ∈ ℕ | x² = 9}. Por extensión, B = {___}." 
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 25 35 40

* - Forma
  - Sintaxis
  - Mejor para
* - Extensión
  - $A = \{a, b, c, \ldots\}$
  - Conjuntos pequeños y finitos
* - Comprensión
  - $A = \{x \in U \mid P(x)\}$
  - Conjuntos grandes o con regla clara
* - Diagrama de Venn
  - Figura geométrica
  - Visualizar relaciones entre conjuntos
* - $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$
  - Jerarquía numérica
  - Base para toda la aritmética y el álgebra
```

:::{admonition} Siguiente clase
:class: tip
Ya sabes cómo describir un conjunto de tres formas. En la siguiente clase aprenderás a **operar** con conjuntos: unirlos, intersectarlos y restarlos.

➡️ [Ir a S1·C4 Operaciones básicas con conjuntos](s1_c4_operaciones_basicas.md)
:::
