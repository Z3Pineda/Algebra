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
    src="https://www.youtube.com/embed/I9_QGb8HVrw"
    allowfullscreen>
  </iframe>
</div>
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
