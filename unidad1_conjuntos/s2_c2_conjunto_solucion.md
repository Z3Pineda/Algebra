---
title: "S2·C2 Conjunto solución de una proposición abierta"
---

# S2·C2 Conjunto solución de una proposición abierta

:::{admonition} 🔧 El filtro de calidad de una línea CNC
:class: ingenieria

Una línea CNC fabrica ejes en serie. Al final de la línea hay un sistema de medición automático que evalúa cada eje contra esta condición:

$$P(d): \quad 24.5 \leq d \leq 25.5 \text{ mm}$$

De los últimos 10 ejes fabricados, los diámetros medidos fueron:

$$\{24.3,\ 24.8,\ 25.0,\ 25.5,\ 25.7,\ 24.9,\ 25.1,\ 25.3,\ 24.6,\ 25.4\}$$

¿Cuál es el **conjunto de ejes aprobados**? ¿Y el de rechazados?

Para responder, necesitas encontrar el **conjunto solución** de la proposición abierta $P(d)$.
:::

**Pregunta detonadora**

> Si la proposición abierta es $P(x): x^2 - 5x + 6 = 0$, ¿cuántos valores de $x$ la hacen verdadera? ¿Cómo los encuentras?

---

## Teoría

### ¿Qué es el conjunto solución?

**Definición simple:**
El conjunto solución de una proposición abierta $P(x)$ es la colección de todos los valores de $x$ que hacen la proposición **verdadera**.

**Definición formal:**
Dado un universo $U$ y una proposición abierta $P(x)$, el **conjunto solución** es:

$$S = \{x \in U \mid P(x) \text{ es verdadera}\}$$

---

### Pasos para encontrar el conjunto solución

1. **Identificar el universo** $U$ — ¿en qué conjunto busco? ($\mathbb{N}$, $\mathbb{Z}$, $\mathbb{R}$...)
2. **Evaluar la proposición** $P(x)$ para cada valor candidato
3. **Incluir** en $S$ solo los valores que hacen $P(x)$ verdadera

---

### Ejemplos con distintos universos

#### Ejemplo 1 — Universo finito

$$P(x): x + 3 > 6 \quad U = \{1, 2, 3, 4, 5, 6, 7\}$$

| $x$ | $x + 3$ | $x + 3 > 6$ | ¿Entra a $S$? |
|:---:|:-------:|:-----------:|:---:|
| 1 | 4 | F | ❌ |
| 2 | 5 | F | ❌ |
| 3 | 6 | F | ❌ |
| 4 | 7 | V | ✅ |
| 5 | 8 | V | ✅ |
| 6 | 9 | V | ✅ |
| 7 | 10 | V | ✅ |

$$S = \{4, 5, 6, 7\}$$

---

#### Ejemplo 2 — Ecuación (universo $\mathbb{Z}$)

$$P(x): x^2 = 9 \quad U = \mathbb{Z}$$

¿Qué enteros al cuadrado dan 9?

- $x = 3$: $3^2 = 9$ → V ✅
- $x = -3$: $(-3)^2 = 9$ → V ✅
- Cualquier otro: F ❌

$$S = \{-3, 3\}$$

---

#### Ejemplo 3 — Universo $\mathbb{R}$ (intervalo)

$$P(x): 24.5 \leq x \leq 25.5 \quad U = \mathbb{R}$$

$$S = [24.5,\ 25.5]$$

Este conjunto tiene **infinitos** elementos — todos los números reales entre 24.5 y 25.5.

:::{admonition} 🔧 Aplicación al problema de la línea CNC
:class: ingenieria
Evaluamos $P(d): 24.5 \leq d \leq 25.5$ para cada eje:

| $d$ (mm) | $P(d)$ | Resultado |
|:--------:|:------:|-----------|
| 24.3 | F | ❌ Rechazado |
| 24.8 | V | ✅ Aprobado |
| 25.0 | V | ✅ Aprobado |
| 25.5 | V | ✅ Aprobado |
| 25.7 | F | ❌ Rechazado |
| 24.9 | V | ✅ Aprobado |
| 25.1 | V | ✅ Aprobado |
| 25.3 | V | ✅ Aprobado |
| 24.6 | V | ✅ Aprobado |
| 25.4 | V | ✅ Aprobado |

$$S_{\text{aprobados}} = \{24.8,\ 25.0,\ 25.5,\ 24.9,\ 25.1,\ 25.3,\ 24.6,\ 25.4\}$$

$$|S_{\text{aprobados}}| = 8 \quad \text{de 10 ejes}$$
:::

---

### Conjunto solución vacío y universal

| Caso | Proposición | Conjunto solución |
|------|-------------|:-----------------:|
| Nunca verdadera | $P(x): x \neq x$ | $S = \emptyset$ |
| Siempre verdadera | $P(x): x = x$ | $S = U$ |
| A veces verdadera | $P(x): x > 5$ | $S \subset U$ |

```{warning}
Si ningún valor de $U$ hace verdadera la proposición, el conjunto solución es el **conjunto vacío** $\emptyset$ — no es un error, es un resultado válido.
```

---

### Proposición compuesta — conjunto solución con dos condiciones

Cuando la proposición tiene **dos condiciones** unidas con $\wedge$ (y) o $\vee$ (o):

$$P(x): x > 2 \wedge x < 7 \quad U = \mathbb{N}$$

Un valor entra al conjunto solución solo si cumple **las dos** condiciones:

$$S = \{3, 4, 5, 6\}$$

$$P(x): x < 2 \vee x > 5 \quad U = \{0,1,2,3,4,5,6,7\}$$

Un valor entra si cumple **al menos una**:

$$S = \{0, 1, 6, 7\}$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/Gt6NUQh1g5U"
    allowfullscreen>
  </iframe>
</div>
```


---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSe6obcpFFiQG4qlcof50_PExNAB1Yp0syi5PHnZE5vwI6ioQQ/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Conjunto solución
  </a>
</div>
```



---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Concepto
  - Definición
* - Conjunto solución $S$
  - $\{x \in U \mid P(x) \text{ es verdadera}\}$
* - Pasos
  - 1. Identificar $U$ · 2. Evaluar $P(x)$ · 3. Incluir valores que dan V
* - $S = \emptyset$
  - Ningún valor hace verdadera la proposición
* - $S = U$
  - Todos los valores hacen verdadera la proposición
* - Proposición con $\wedge$
  - Deben cumplirse **ambas** condiciones
* - Proposición con $\vee$
  - Debe cumplirse **al menos una** condición
```

:::{admonition} Siguiente clase
:class: tip
Ya sabes encontrar el conjunto solución de una proposición. En la siguiente clase exploraremos los **conectivos lógicos** $\wedge$, $\vee$ y $\neg$ en profundidad — las herramientas para construir proposiciones complejas.

➡️ [Ir a S2·C3 Conjunción y disyunción](s2_c3_conjuncion_disyuncion.md)
:::
