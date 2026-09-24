---
title: "S2·C3 Conjunción y disyunción"
---

# S2·C3 Conjunción y disyunción

:::{admonition} 🔧 Sistema de seguridad de una prensa hidráulica
:class: ingenieria

Una prensa hidráulica industrial solo puede activarse si se cumplen condiciones específicas de seguridad. El tablero de control tiene dos sensores principales:

- **$p$** — La presión hidráulica está en rango
- **$g$** — La guarda de protección está cerrada

El manual de seguridad dice:

> *"La prensa puede arrancar si la presión está bien **Y** la guarda está cerrada."*

¿Qué pasa si la presión está bien pero la guarda está abierta? ¿Puede arrancar?

Por otro lado, el sistema de **alarma** dice:

> *"La alarma suena si hay sobrecalentamiento **O** hay vibración excesiva."*

¿Cuándo NO suena la alarma?

La diferencia entre el **Y** y el **O** puede salvar vidas en un entorno industrial.
:::

**Pregunta detonadora**

> Un rociador de incendios se activa con humo **Y** calor. Una alarma suena con humo **O** calor. ¿Cuál de los dos es más fácil de activar? ¿Cuál es más seguro para evitar falsas activaciones?

---

## Teoría

### Conjunción $p \wedge q$ — el "Y" lógico

**Definición:**
La conjunción de dos proposiciones $p$ y $q$ es verdadera **únicamente** cuando **ambas** son verdaderas.

$$p \wedge q$$

Se lee: *"$p$ y $q$"*

**Tabla de verdad:**

| $p$ | $q$ | $p \wedge q$ |
|:---:|:---:|:------------:|
| V | V | **V** |
| V | F | F |
| F | V | F |
| F | F | F |

```{warning}
La conjunción es **F** en cuanto **una sola** de las partes sea F. Solo hay un caso donde es V: cuando las dos son V simultáneamente.
```

:::{admonition} 🔧 Ingeniería — conjunción
:class: ingenieria
**Condición de arranque:** $p \wedge g$

| $p$ (presión OK) | $g$ (guarda cerrada) | $p \wedge g$ | Resultado |
|:---:|:---:|:---:|---|
| V | V | **V** | ✅ La prensa arranca |
| V | F | F | 🔒 Bloqueada — guarda abierta |
| F | V | F | 🔒 Bloqueada — presión fuera de rango |
| F | F | F | 🔒 Bloqueada — ambas fallas |

Solo en el primer caso la prensa puede operar. Esto se llama **enclavamiento** (interlock) en sistemas industriales.
:::

---

### Disyunción $p \vee q$ — el "O" lógico

**Definición:**
La disyunción de dos proposiciones $p$ y $q$ es verdadera cuando **al menos una** de ellas es verdadera.

$$p \vee q$$

Se lee: *"$p$ o $q$"*

**Tabla de verdad:**

| $p$ | $q$ | $p \vee q$ |
|:---:|:---:|:----------:|
| V | V | V |
| V | F | **V** |
| F | V | **V** |
| F | F | F |

```{warning}
La disyunción es **F** solo cuando **ambas** son F. En cualquier otro caso es V.
```

:::{admonition} 🔧 Ingeniería — disyunción
:class: ingenieria
**Condición de alarma:** $s \vee v$ (sobrecalentamiento O vibración)

| $s$ (sobrecalentamiento) | $v$ (vibración) | $s \vee v$ | Resultado |
|:---:|:---:|:---:|---|
| V | V | V | 🔴 Alarma suena |
| V | F | V | 🔴 Alarma suena |
| F | V | V | 🔴 Alarma suena |
| F | F | **F** | ✅ Sistema normal |

La alarma solo **no suena** cuando los dos sensores están en cero. Basta con que uno detecte algo para activarla.
:::

---

### Diferencia clave entre $\wedge$ y $\vee$

| | Conjunción $\wedge$ | Disyunción $\vee$ |
|---|:---:|:---:|
| Es V cuando | **Ambas** son V | **Al menos una** es V |
| Es F cuando | **Al menos una** es F | **Ambas** son F |
| Número de casos V | 1 de 4 | 3 de 4 |
| Más restrictivo | ✅ Sí | ❌ No |

---

### Conjunto solución de proposiciones compuestas

La conjunción y la disyunción también definen conjuntos solución:

**Con conjunción ($\wedge$):**
$$S = \{x \in U \mid P(x) \wedge Q(x)\} = \{x \in U \mid P(x)\} \cap \{x \in U \mid Q(x)\}$$

La conjunción corresponde a la **intersección** de conjuntos.

**Con disyunción ($\vee$):**
$$S = \{x \in U \mid P(x) \vee Q(x)\} = \{x \in U \mid P(x)\} \cup \{x \in U \mid Q(x)\}$$

La disyunción corresponde a la **unión** de conjuntos.

:::{admonition} 🔧 Conexión conjuntos ↔ lógica
:class: ingenieria
| Lógica | Conjuntos | Ingeniería |
|--------|-----------|------------|
| $P(x) \wedge Q(x)$ | $A \cap B$ | Piezas que cumplen **ambas** especificaciones |
| $P(x) \vee Q(x)$ | $A \cup B$ | Piezas que cumplen **al menos una** |
| $\neg P(x)$ | $A'$ | Piezas que **no** cumplen la especificación |

Esta tabla es el puente entre la Unidad 1 y la lógica proposicional completa.
:::

---

### Ejemplo completo

$$U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$$
$$P(x): x \text{ es par} \qquad Q(x): x > 5$$

$$A = \{x \in U \mid P(x)\} = \{2, 4, 6, 8, 10\}$$
$$B = \{x \in U \mid Q(x)\} = \{6, 7, 8, 9, 10\}$$

$$S_{\wedge} = A \cap B = \{6, 8, 10\} \quad \leftarrow \text{pares Y mayores que 5}$$
$$S_{\vee} = A \cup B = \{2, 4, 6, 7, 8, 9, 10\} \quad \leftarrow \text{pares O mayores que 5}$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/xb6nBNNS1Ek"
    allowfullscreen>
  </iframe>
</div>
```

---

## Descargar clase en PDF

Descarga el **apunte completo de esta clase** (PDF preparado por la docente). No uses el menú del navegador «Imprimir»; ese genera otra versión de la página web.

```{raw} html
<div class="quizizz-link">
  <a href="../_static/s2_c3_conjuncion_disyuncion.pdf" class="pdf-btn" download="s2_c3_conjuncion_disyuncion.pdf">
    📄 Descargar apunte en PDF
  </a>
</div>
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoVjyyP-_GbEHo-EHr3U0WzvQoqYfeZ0-yALxyJ1C6wxFFtQ/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Conjunción y disyunción
  </a>
</div>
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 20 20 30 30

* - Conectivo
  - Símbolo
  - Verdadero cuando
  - Equivalente en conjuntos
* - Conjunción
  - $p \wedge q$
  - **Ambas** son V
  - $A \cap B$ (intersección)
* - Disyunción
  - $p \vee q$
  - **Al menos una** es V
  - $A \cup B$ (unión)
* - Falso cuando
  - $\wedge$: alguna es F
  - $\vee$: ambas son F
  - —
```

:::{admonition} Siguiente clase
:class: tip
Ya dominas la conjunción y la disyunción. En la siguiente clase completaremos los conectivos lógicos con la **implicación** y la **negación** — los que permiten describir relaciones causa-efecto en sistemas de control.

➡️ [Ir a S2·C4 Implicación y negación](s2_c4_implicacion_negacion.md)
:::
