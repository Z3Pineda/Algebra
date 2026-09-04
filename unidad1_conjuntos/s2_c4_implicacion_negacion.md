---
title: "S2·C4 Implicación y negación"
---

# S2·C4 Implicación y negación

:::{admonition} 🔧 El sistema de control de un horno industrial
:class: ingenieria

Un horno industrial tiene dos reglas de control escritas en el manual:

**Regla 1 — Implicación:**
> *"Si la temperatura supera 800°C, entonces el sistema de enfriamiento se activa."*

Esta regla dice: cuando ocurre $p$, debe ocurrir $q$. Si $p$ ocurre pero $q$ no, hay una **falla**.

**Regla 2 — Negación:**
> *"El horno NO está en temperatura de operación."*

Esta regla invierte el estado: si estaba bien, ahora está mal. Si estaba mal, ahora está bien.

Estas dos ideas — la implicación y la negación — son los últimos conectivos lógicos que necesitas para describir cualquier condición en un sistema de control.
:::

**Pregunta detonadora**

> Si la regla dice *"si llueve, el piso se moja"* y el piso **no** está mojado, ¿puedes concluir que no llovió? ¿Por qué?

---

## Teoría

### Negación $\neg p$ — el "NO" lógico

**Definición:**
La negación de una proposición invierte su valor de verdad. Si $p$ es V, $\neg p$ es F, y viceversa.

**Tabla de verdad:**

| $p$ | $\neg p$ |
|:---:|:--------:|
| V | F |
| F | V |

**Doble negación:**
$$\neg(\neg p) \equiv p$$

Negar dos veces regresa al enunciado original.

:::{admonition} 🔧 Ingeniería — negación
:class: ingenieria
| Proposición $p$ | Negación $\neg p$ |
|---|---|
| "La presión está en rango" (V) | "La presión **no** está en rango" (F) |
| "El sensor detectó falla" (F) | "El sensor **no** detectó falla" (V) |
| "La temperatura supera 800°C" (V) | "La temperatura **no** supera 800°C" (F) |

En sistemas de control, la negación se usa para activar alarmas o estados de emergencia cuando la condición normal falla.
:::

---

### Cómo negar correctamente expresiones compuestas

Al negar una conjunción o disyunción **no** basta agregar "no" al principio. Se aplican las **Leyes de De Morgan**:

$$\neg(p \wedge q) \equiv \neg p \vee \neg q$$
$$\neg(p \vee q) \equiv \neg p \wedge \neg q$$ 

**Regla práctica:**
1. Niega cada proposición por separado
2. Cambia el conector: $\wedge \to \vee$ o $\vee \to \wedge$

| Enunciado original | Negación incorrecta ❌ | Negación correcta ✅ |
|--------------------|-----------------------|----------------------|
| "Hay presión **y** hay flujo" | "No hay presión **y** no hay flujo" | "No hay presión **o** no hay flujo" |
| "Hay vibración **o** calor" | "No hay vibración **o** no hay calor" | "No hay vibración **y** no hay calor" |

---

### Implicación $p \rightarrow q$ — el "Si... entonces"

**Definición:**
La implicación "$p$ implica $q$" es verdadera en todos los casos, **excepto** cuando $p$ es verdadera y $q$ es falsa.

$$p \rightarrow q$$

Se lee: *"Si $p$, entonces $q$"* o *"$p$ implica $q$"*

**Tabla de verdad:**

| $p$ | $q$ | $p \rightarrow q$ |
|:---:|:---:|:-----------------:|
| V | V | V |
| V | F | **F** |
| F | V | V |
| F | F | V |

```{warning}
La implicación es **F** únicamente cuando la hipótesis ($p$) es V y la conclusión ($q$) es F.  
Las otras tres filas son V — incluyendo los casos donde $p$ es F.

Esto parece extraño al principio. Piénsalo así: *"si llueve, el piso se moja"* — si no llueve, la regla no dice nada sobre el piso. No la viola.
```

:::{admonition} 🔧 Ingeniería — implicación
:class: ingenieria
Regla: *"Si la temperatura supera 800°C ($p$), el enfriamiento se activa ($q$)"*

| $p$ (temp > 800°C) | $q$ (enfriamiento) | $p \rightarrow q$ | Diagnóstico |
|:---:|:---:|:---:|---|
| V | V | V | ✅ Sistema funciona correctamente |
| V | F | **F** | ❌ **FALLA**: temperatura alta, enfriamiento no activó |
| F | V | V | ⚠️ Enfriamiento activo sin necesidad (gasto extra) |
| F | F | V | ✅ Temperatura normal, enfriamiento en reposo |

Solo el segundo caso representa una falla real del sistema. La implicación es el conectivo que modela las **especificaciones de comportamiento** en ingeniería.
:::

---

### Negación de la implicación

$$\neg(p \rightarrow q) \equiv p \wedge \neg q$$

La única forma de que *"si $p$ entonces $q$"* sea **falso** es que $p$ ocurra **y** $q$ no ocurra.

En ingeniería: la negación de una especificación de control es exactamente la **condición de falla**.

---

### Tabla completa de los cuatro conectivos

| $p$ | $q$ | $\neg p$ | $p \wedge q$ | $p \vee q$ | $p \rightarrow q$ |
|:---:|:---:|:--------:|:------------:|:----------:|:-----------------:|
| V | V | F | V | V | V |
| V | F | F | F | V | **F** |
| F | V | V | F | V | V |
| F | F | V | F | F | V |

---

### Resumen de la semana — los cuatro conectivos

| Conectivo | Símbolo | Es F cuando | Ingeniería |
|-----------|:-------:|-------------|------------|
| Negación | $\neg p$ | $p$ es V | Estado de falla o alarma |
| Conjunción | $p \wedge q$ | Alguna es F | Condición de arranque seguro |
| Disyunción | $p \vee q$ | Ambas son F | Activación de alarma |
| Implicación | $p \rightarrow q$ | $p$=V y $q$=F | Especificación de comportamiento |

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/yoQeTQGJ0qE"
    allowfullscreen>
  </iframe>
</div>
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDKngwapLiAWMwSIRnVzsQUUo4esrm8KN6nzc2yDM0zWrQmA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Implicación y negación
  </a>
</div>
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 25 20 30 25

* - Conectivo
  - Símbolo
  - Es F cuando
  - Clave para recordarlo
* - Negación
  - $\neg p$
  - $p$ es V
  - Invierte el valor
* - De Morgan 1
  - $\neg(p \wedge q)$
  - —
  - $\equiv \neg p \vee \neg q$
* - De Morgan 2
  - $\neg(p \vee q)$
  - —
  - $\equiv \neg p \wedge \neg q$
* - Implicación
  - $p \rightarrow q$
  - $p$=V y $q$=F
  - "La promesa se incumplió"
* - Neg. implicación
  - $\neg(p \rightarrow q)$
  - —
  - $\equiv p \wedge \neg q$
```

:::{admonition} Siguiente clase
:class: tip
Has completado los cuatro conectivos lógicos. En la clase de autogestión reforzarás proposiciones y conectivos con ejercicios guiados antes de pasar a los diagramas de Venn la próxima semana.

➡️ [Ir a S2·Auto Ejercicios de lógica](s2_auto_ejercicios_logica.md)
:::
