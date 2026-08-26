---
title: "S1·C2 Concepto de conjunto"
---

# S1·C2 Concepto de conjunto

:::{admonition} 🔧 El almacén de refacciones
:class: ingenieria

Eres el encargado de un almacén en una planta automotriz. Tienes cientos de piezas: tornillos, engranes, rodamientos, pistones, válvulas, tuercas...

Tu jefe te pregunta: *"¿Cuáles de estas piezas necesitan lubricación?"*

Para responder sin equivocarte necesitas **agrupar** las piezas con algo en común. Eso es exactamente lo que hace un conjunto en matemáticas: agrupa objetos que comparten una propiedad.

Hoy aprenderás a crear, nombrar y describir esos grupos con precisión.
:::

**Pregunta detonadora**

> Tienes estas piezas en el almacén: tornillo, engrane, rodamiento, pistón, válvula, tuerca, filtro.  
> ¿Cómo describirías el grupo de piezas que tienen forma circular sin listarlas una por una?

---

## Teoría

### ¿Qué es un conjunto?

**Definición simple:**
Un conjunto es una *bolsa imaginaria* donde metes objetos que tienen algo en común. Cada objeto dentro se llama **elemento**.

**Definición formal:**
Un conjunto es una colección bien definida de objetos distintos, agrupados según una propiedad o regla clara.

La palabra clave es **bien definida**: para cualquier objeto, debe quedar claro si pertenece o no al conjunto. Sin ambigüedad.

| Agrupación | ¿Es conjunto? | ¿Por qué? |
|------------|:---:|-----------|
| Piezas que necesitan lubricación | ✅ | Criterio claro y verificable |
| Números mayores que 10 | ✅ | Criterio matemático preciso |
| Piezas "bonitas" del almacén | ❌ | "Bonita" es subjetivo |
| Personas altas del grupo | ❌ | "Alta" es ambiguo sin medida exacta |

---

### Notación de conjuntos

Los conjuntos se nombran con **letras mayúsculas**: $A$, $B$, $C$, $M$, $U$...

Sus elementos se escriben entre **llaves** $\{ \}$, separados por comas:

$$M = \{\text{tornillo},\ \text{tuerca},\ \text{arandela},\ \text{remache}\}$$

$M$ = conjunto de elementos de unión mecánica.

---

### Pertenencia: $\in$ y $\notin$

| Símbolo | Se lee | Ejemplo |
|:-------:|--------|---------|
| $\in$ | "pertenece a" | $\text{tornillo} \in M$ |
| $\notin$ | "no pertenece a" | $\text{pistón} \notin M$ |

:::{admonition} 🔧 En control de calidad
:class: ingenieria
Sea $A = \{\text{piezas aprobadas en la revisión del día}\}$.

- Si una pieza pasa la revisión: pieza $\in A$ ✅
- Si una pieza falla: pieza $\notin A$ ❌
:::

---

### El conjunto universal $U$

El **conjunto universal** $U$ contiene **todos** los objetos del contexto que se está analizando.

$$U = \{\text{todas las piezas del almacén}\}$$

---

### El conjunto vacío $\emptyset$

El **conjunto vacío** es el conjunto que no tiene ningún elemento:

$$\emptyset = \{\}$$

```{warning}
$\{0\}$ no es el conjunto vacío — es un conjunto con un elemento: el número cero.  
$\emptyset$ es el conjunto sin ningún elemento.
```

---

### Cardinalidad $|A|$

La **cardinalidad** es el número de elementos del conjunto:

$$A = \{2, 4, 6, 8\} \implies |A| = 4 \qquad \emptyset \implies |\emptyset| = 0$$

:::{admonition} 🔧 Cardinalidad en inventarios
:class: ingenieria
Si $L = \{\text{piezas con falla en el lote}\}$ y $|L| = 0$, el lote está libre de fallas.  
Si $|L| > 0$, hay al menos una pieza defectuosa — se detiene la línea.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/vCjUGfuUo2Y"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente (sobre el video)**
1. Mesa con piezas mecánicas mezcladas
2. Una bolsa aparece y las piezas que necesitan lubricación entran — se forma el conjunto A
3. Aparece la notación: A = {tornillo, engrane, rodamiento, pistón}
4. Destacar: tornillo ∈ A con flecha. válvula ∉ A con tachado
5. Mostrar U como rectángulo que contiene todo
6. Mostrar ∅ — la bolsa se vacía
7. Cardinalidad: |A| = 4 contando uno a uno
```

---



## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf9Co87huKKh7TlNIrBYYWAg_O3oaKb2ciX2CjlQfKxTJUqtA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Concepto de conjunto
  </a>
</div>
```


---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Concepto
  - Definición clave
* - Conjunto
  - Colección **bien definida** de objetos distintos
* - Elemento
  - Cada objeto dentro del conjunto
* - $x \in A$
  - "$x$ pertenece a $A$"
* - $x \notin A$
  - "$x$ no pertenece a $A$"
* - Conjunto universal $U$
  - Contiene todos los objetos del contexto
* - Conjunto vacío $\emptyset$
  - Sin ningún elemento; $|\emptyset| = 0$
* - Cardinalidad $|A|$
  - Número de elementos del conjunto
```

:::{admonition} Siguiente clase
:class: tip
Ya sabes qué es un conjunto y cómo nombrarlo. En la siguiente clase aprenderás las tres formas de **describir** un conjunto: listar sus elementos, dar una regla, o dibujarlo.

➡️ [Ir a S1·C3 Representación de conjuntos](s1_c3_representacion_conjuntos.md)
:::
