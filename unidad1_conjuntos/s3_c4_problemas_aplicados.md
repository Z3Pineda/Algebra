---
title: "S3·C4 Problemas aplicados con conjuntos y lógica"
---

# S3·C4 Problemas aplicados con conjuntos y lógica

:::{admonition} 🔧 Auditoría de certificaciones en una planta industrial
:class: ingenieria

El departamento de Recursos Humanos de una planta con **60 técnicos** levantó un censo de certificaciones:

- **S** — Soldadura: 32 técnicos
- **C** — CNC (Control Numérico): 25 técnicos
- **M** — Metrología: 20 técnicos
- $S \cap C$: 10 técnicos tienen ambas
- $S \cap M$: 8 técnicos tienen ambas
- $C \cap M$: 7 técnicos tienen ambas
- $S \cap C \cap M$: 3 técnicos tienen las tres

Preguntas que el jefe de planta necesita responder:

1. ¿Cuántos técnicos tienen **al menos una** certificación?
2. ¿Cuántos **no tienen ninguna**?
3. ¿Cuántos tienen **exactamente dos** certificaciones?
4. ¿Qué porcentaje de la planta tiene la certificación de soldadura **pero no** CNC?
:::

**Pregunta detonadora**

> Si en una encuesta una persona marcó tanto "soldadura" como "CNC", al contar cuántos marcaron alguna de las dos, ¿debes contarla una o dos veces?

---

## Problema 1 — Auditoría de certificaciones (PIE de 3 conjuntos)

**Datos:**

| Dato | Valor |
|------|------:|
| Total de técnicos | 60 |
| $|S|$ | 32 |
| $|C|$ | 25 |
| $|M|$ | 20 |
| $|S \cap C|$ | 10 |
| $|S \cap M|$ | 8 |
| $|C \cap M|$ | 7 |
| $|S \cap C \cap M|$ | 3 |

**Solución paso a paso:**

**1) Técnicos con al menos una certificación — PIE:**

$$|S \cup C \cup M| = 32 + 25 + 20 - 10 - 8 - 7 + 3 = 55$$

**2) Sin ninguna certificación:**

$$60 - 55 = 5 \text{ técnicos}$$

**3) Las 8 regiones del diagrama:**

| Región | Cálculo | Resultado |
|--------|---------|:---------:|
| Solo S | $32 - 10 - 8 + 3$ | 17 |
| Solo C | $25 - 10 - 7 + 3$ | 11 |
| Solo M | $20 - 8 - 7 + 3$ | 8 |
| S y C (no M) | $10 - 3$ | 7 |
| S y M (no C) | $8 - 3$ | 5 |
| C y M (no S) | $7 - 3$ | 4 |
| S y C y M | — | 3 |
| Ninguna | — | 5 |
| **Total** | | **60 ✅** |

**4) Exactamente dos certificaciones:**

$$7 + 5 + 4 = 16 \text{ técnicos}$$

**5) Solo soldadura (sin CNC):**

$$|S - C| = |S| - |S \cap C| = 32 - 10 = 22$$

$$\frac{22}{60} \times 100 = 36.7\%$$

---

## Problema 2 — Sistema de control con lógica proposicional

Una válvula industrial se abre bajo las siguientes condiciones:

- $p$: La presión supera 8 bar
- $q$: La temperatura supera 200°C
- $r$: El operador activó el modo manual

**Condición de apertura:** $(p \vee q) \wedge r$

La válvula se abre si **(hay presión alta O temperatura alta) Y el operador activó el modo manual**.

**Preguntas:**

**a)** ¿Cuántas de las 8 combinaciones posibles abren la válvula?

**b)** Si $p$=V, $q$=F, $r$=V, ¿se abre la válvula?

**c)** ¿Cuál es la negación de la condición de apertura?

**Solución:**

**a)** Tabla de verdad de $(p \vee q) \wedge r$:

| $p$ | $q$ | $r$ | $p \vee q$ | $(p \vee q) \wedge r$ |
|:---:|:---:|:---:|:----------:|:---------------------:|
| V | V | V | V | **V** ✅ |
| V | V | F | V | F |
| V | F | V | V | **V** ✅ |
| V | F | F | V | F |
| F | V | V | V | **V** ✅ |
| F | V | F | V | F |
| F | F | V | F | F |
| F | F | F | F | F |

**3 de 8 combinaciones abren la válvula.**

**b)** $p$=V, $q$=F, $r$=V:
$p \vee q = $ V $\wedge r = $ V → **válvula abierta** ✅

**c)** $\neg[(p \vee q) \wedge r]$

Aplicando De Morgan:

$$\neg[(p \vee q) \wedge r] \equiv \neg(p \vee q) \vee \neg r \equiv (\neg p \wedge \neg q) \vee \neg r$$

En palabras: *"La válvula permanece cerrada si (no hay presión ni temperatura) O si el operador no activó el modo manual."*

---

## Problema 3 — Conjunto solución con contexto de tolerancias

Una pieza se aprueba si cumple **dos** condiciones simultáneas:

$$P_1(d): 24.5 \leq d \leq 25.5 \quad \text{(tolerancia de diámetro)}$$
$$P_2(L): L > 100 \quad \text{(longitud mínima)}$$

De 8 piezas fabricadas:

| Pieza | $d$ (mm) | $L$ (mm) | $P_1(d)$ | $P_2(L)$ | $P_1 \wedge P_2$ |
|:-----:|:--------:|:--------:|:--------:|:--------:|:----------------:|
| 1 | 24.3 | 105 | F | V | F |
| 2 | 24.8 | 98 | V | F | F |
| 3 | 25.0 | 110 | V | V | **V** ✅ |
| 4 | 25.5 | 102 | V | V | **V** ✅ |
| 5 | 25.7 | 95 | F | F | F |
| 6 | 24.9 | 115 | V | V | **V** ✅ |
| 7 | 25.1 | 99 | V | F | F |
| 8 | 25.3 | 107 | V | V | **V** ✅ |

$$S = \{\text{pieza\_3, pieza\_4, pieza\_6, pieza\_8}\} \quad |S| = 4 \text{ de 8 aprobadas}$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_PROBLEMAS_APLICADOS"
    allowfullscreen>
  </iframe>
</div>
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSezVHKTq5UTGEG1ETBl4vFXjzVxhgP_wO89QI61IRm8Bm0oIg/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Problemas aplicados
  </a>
</div>
```

---

## Resumen de la clase

```{list-table}
:header-rows: 1
:widths: 30 70

* - Técnica
  - Cuándo usarla
* - PIE de 2 conjuntos
  - Contar elementos en la unión de dos grupos sin duplicar
* - PIE de 3 conjuntos
  - Contar elementos en la unión de tres grupos
* - Tabla de verdad
  - Analizar todas las combinaciones de una condición lógica compuesta
* - Conjunto solución
  - Identificar qué elementos cumplen una proposición
* - Diagrama de Venn
  - Visualizar y organizar los resultados del PIE
```

:::{admonition} Siguiente clase
:class: tip
Has aplicado todas las herramientas de la Unidad 1 a problemas reales. En la clase de autogestión consolidarás todo con ejercicios integradores antes del quiz final de la unidad.

➡️ [Ir a S3·Auto Tarea integradora](s3_auto_tarea_integradora.md)
:::
