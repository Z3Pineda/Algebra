---
title: "S2·C1 Proposición y valor de verdad"
---

# S2·C1 Proposición y valor de verdad

:::{admonition} 🔧 El sistema de diagnóstico de una fresadora CNC
:class: ingenieria

Una fresadora CNC tiene un panel de diagnóstico que monitorea el estado de la máquina cada segundo. Cada sensor genera mensajes como:

- *"La temperatura del husillo supera 80°C"*
- *"La presión hidráulica está en rango"*
- *"¿Cuántos RPM tiene el husillo?"*
- *"¡Detener la operación!"*

El sistema de control necesita evaluar cuáles son **verdaderos** o **falsos** para decidir si detiene la máquina. Pero no todos los mensajes pueden serlo — solo los que son **proposiciones lógicas**.
:::

**Pregunta detonadora**

> El sensor dice: *"La temperatura es alta"*. ¿Puedes saber si eso es verdadero o falso? ¿Qué falta para que sea una proposición útil?

---

## Teoría

### ¿Qué es una proposición?

**Definición simple:**
Una proposición es un enunciado al que puedes responder con un rotundo **sí (Verdadero)** o un rotundo **no (Falso)**. Sin ambigüedad.

**Definición formal:**
Una proposición es un enunciado declarativo con un **valor de verdad** bien definido: **V** o **F**.

Las proposiciones se nombran con letras minúsculas: $p$, $q$, $r$, $s$...

---

### ¿Qué NO es una proposición?

| Tipo | Ejemplo | Por qué no |
|------|---------|------------|
| **Pregunta** | "¿Cuántos RPM tiene el husillo?" | No tiene valor V o F |
| **Orden** | "¡Detener la operación!" | No es declarativo |
| **Ambiguo** | "La temperatura es alta" | Sin criterio preciso |

```{warning}
"La temperatura es alta" **no es proposición** — "alta" no está definido con precisión.  
"La temperatura supera 80°C" **sí es proposición** — tiene un criterio exacto y verificable.
```

---

### Ejemplos de proposiciones en ingeniería

| Proposición | Símbolo | Valor |
|-------------|:-------:|:-----:|
| "La temperatura del husillo supera 80°C" | $p$ | V o F según sensor |
| "La presión está entre 50 y 60 bar" | $q$ | V o F según manómetro |
| "$5 + 3 = 9$" | $r$ | F (siempre) |
| "El acero tiene mayor densidad que el aluminio" | $s$ | V (siempre) |

---

### Proposición abierta

Una **proposición abierta** $P(x)$ tiene una **variable** — no tiene valor fijo hasta que se sustituye $x$:

$$P(x): \quad x > 5$$

- $P(3)$: "$3 > 5$" → **F**
- $P(7)$: "$7 > 5$" → **V**

:::{admonition} 🔧 Proposición abierta en control de calidad
:class: ingenieria
Sea $P(d)$: "el diámetro $d$ está dentro de tolerancia" → $24.5 \leq d \leq 25.5$

- Eje con $d = 25.1$ mm: $P(25.1)$ → **V** ✅ aprobado
- Eje con $d = 24.2$ mm: $P(24.2)$ → **F** ❌ rechazado
:::

---

### Conexión con conjuntos

$$A = \{x \in U \mid P(x)\}$$

El conjunto $A$ contiene exactamente los valores de $x$ para los que $P(x)$ es **verdadera** — el **conjunto solución**.

**Ejemplo:** $P(x): x^2 = 9 \implies A = \{-3, 3\}$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/LBtfbJ-rTmw"
    allowfullscreen>
  </iframe>
</div>
```

---

## Descargar clase en PDF

Descarga el **apunte completo de esta clase** (PDF preparado por la docente). No uses el menú del navegador «Imprimir»; ese genera otra versión de la página web.

```{raw} html
<div class="quizizz-link">
  <a href="../_static/s2_c1_proposicion_valor_verdad.pdf" class="pdf-btn" download="s2_c1_proposicion_valor_verdad.pdf">
    📄 Descargar apunte en PDF
  </a>
</div>
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdn9eM0bMArqVvKcIQCyLF6cM3UdEXOBNEGOiK8TjJanJxDCw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Proposición y valor de verdad
  </a>
</div>
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Definición clave
* - Proposición
  - Enunciado declarativo con valor V o F exacto
* - No proposición
  - Preguntas, órdenes y enunciados ambiguos
* - Valor de verdad
  - V (verdadero) o F (falso)
* - Proposición abierta $P(x)$
  - Enunciado con variable — el valor depende de $x$
* - Conjunto solución
  - $\{x \in U \mid P(x)\}$ — valores que hacen verdadera la proposición
```

:::{admonition} Siguiente clase
:class: tip
Ya sabes identificar proposiciones y evaluar su valor de verdad. En la siguiente clase aprenderás a encontrar el **conjunto solución** de una proposición abierta.

➡️ [Ir a S2·C2 Conjunto solución de una proposición abierta](s2_c2_conjunto_solucion.md)
:::
