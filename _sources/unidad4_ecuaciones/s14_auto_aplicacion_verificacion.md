---
title: "S14·Auto Ejercicios de aplicación y verificación"
---

# S14·Auto Ejercicios de aplicación y verificación

:::{admonition} Esta es tu clase de autogestión
:class: tip

Consolida **fórmula general, radicales, forma cuadrática y sistemas mixtos** de la Semana 14.

**¿Qué hay aquí?**
- Repaso rápido de S14·C1 a S14·C4
- Ejercicios con énfasis en verificación y discriminante
- Problema integrador de ingeniería
- Quiz de cierre

**Tiempo estimado: 50 minutos**
:::

---

## Repaso rápido

| Clase | Tema | Lo más importante |
|-------|------|-------------------|
| S14·C1 | Fórmula general | $x=\frac{-b\pm\sqrt{b^2-4ac}}{2a}$; $\Delta>0$, $=0$, $<0$ |
| S14·C2 | Radicales | Aislar → elevar al cuadrado → verificar (extrañas) |
| S14·C3 | Forma cuadrática | $u=f(x)$ → cuadrática en $u$ → deshacer |
| S14·C4 | Lineal + cuadrática | Sustituir; 0, 1 o 2 intersecciones |

---

## Parte 1 — Fórmula general y discriminante

### Ejercicio 1

Resuelve y clasifica $\Delta$.

**a)** $2x^2 - 7x + 3 = 0$

**b)** $x^2 + 4x + 4 = 0$

**c)** $x^2 + x + 3 = 0$

::::{admonition} Ver solución
:class: dropdown

**a)** $\Delta = 49-24=25>0$. $x=\dfrac{7\pm 5}{4}$ → $x=3$ o $x=\dfrac{1}{2}$

**b)** $\Delta=0$. $x=-2$ (raíz doble)

**c)** $\Delta=1-12=-11<0$. Sin soluciones reales
::::

---

## Parte 2 — Interpretar $\Delta$ en contexto

### Ejercicio 2

Un rotor cumple $v^2 - 80v + 1500 = 0$ donde $v$ es velocidad (m/s).

**a)** Calcula $\Delta$ e interpreta.

**b)** ¿Existen velocidades críticas reales?

::::{admonition} Ver solución
:class: dropdown

**a)** $\Delta = 6400 - 6000 = 400 > 0$ — **dos** velocidades críticas reales

**b)** $v = \dfrac{80 \pm 20}{2}$ → $v = 50$ m/s o $v = 30$ m/s. Ambas son físicamente admisibles; el ingeniero analiza cuál corresponde al modo crítico superior o inferior.
::::

---

## Parte 3 — Ecuaciones con radicales

### Ejercicio 3

Resuelve y verifica.

**a)** $\sqrt{2x + 1} = 5$

**b)** $\sqrt{x + 4} = x - 2$

::::{admonition} Ver solución
:class: dropdown

**a)** $2x+1=25$ → $x=12$. Verificación: $\sqrt{25}=5$ ✓

**b)** $x+4=(x-2)^2$ → $x^2-5x=0$ → $x=0$ o $x=5$

- $x=0$: $\sqrt{4}=2$, $0-2=-2$ → ✗ extraña
- $x=5$: $\sqrt{9}=3$, $5-2=3$ → ✓

**Solución:** $x=5$
::::

---

## Parte 4 — Forma cuadrática

### Ejercicio 4

**a)** $x^4 - 13x^2 + 36 = 0$

**b)** $x^{2/3} - 5x^{1/3} + 6 = 0$

::::{admonition} Ver solución
:class: dropdown

**a)** $u=x^2$: $u^2-13u+36=0$ → $(u-4)(u-9)=0$ → $u=4,9$ → $x=\pm 2$, $x=\pm 3$

**b)** $u=x^{1/3}$: $u^2-5u+6=0$ → $u=2,3$ → $x=8$, $x=27$
::::

---

## Parte 5 — Sistemas lineal-cuadrática

### Ejercicio 5

$$\begin{cases} x + y = 13 \\ xy = 42 \end{cases}$$

::::{admonition} Ver solución
:class: dropdown

$y=13-x$. Sustituir: $x(13-x)=42$ → $x^2-13x+42=0$ → $(x-6)(x-7)=0$

$x=6$, $y=7$ o $x=7$, $y=6$. Dos puntos de operación: $(6,7)$ y $(7,6)$.
::::

---

## Parte 6 — Problema integrador

### Ejercicio 6

Un proyectil: $h = -5t^2 + 40t + 5$ (m).

**a)** ¿Cuándo $h=0$? Usa fórmula general.

**b)** ¿Altura máxima y cuándo ocurre?

**c)** Resuelve $\sqrt{t + 1} = 3$ (tiempo auxiliar en otro sensor). Verifica.

::::{admonition} Ver solución
:class: dropdown

**a)** $-5t^2+40t+5=0$ → $t^2-8t-1=0$. $\Delta=64+4=68$. $t=\dfrac{8\pm\sqrt{68}}{2}=\dfrac{8\pm 2\sqrt{17}}{2}=4\pm\sqrt{17}$

Solo $t=4+\sqrt{17}\approx 8.12$ s es positivo para aterrizaje.

**b)** Vértice: $t=4$ s, $h=-5(16)+160+5=85$ m

**c)** $t+1=9$ → $t=8$. Verificación: $\sqrt{9}=3$ ✓
::::

---

## Quiz de cierre — Semana 14

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeGTV77OsHR9RRi_WYMX5xUIzusNANHxg9-uxgVckUpcCDqEw/viewform" target="_blank" class="quizizz-btn">
    📝 Quiz de cierre — Semana 14
  </a>
</div>
```

```{note}
**Para el docente — Quiz Quizizz (12 preguntas, ~15 min):**

Fórmula general y discriminante (3): 2x²-7x+3=0 con Δ=25>0 da x=3 o x=1/2; x²+4x+4=0 con Δ=0 da x=-2 raíz doble; x²+x+3=0 con Δ=-11<0 sin solución real
Interpretación ingeniería (1): v²-80v+1500=0 con Δ=400>0 da v=50 o v=30 m/s, dos velocidades críticas
Radicales (2): √(2x+1)=5 da x=12 verificado, √(x+4)=x-2 da x=5 válido pero x=0 es raíz extraña
Forma cuadrática (2): x⁴-13x²+36=0 con u=x² da x=±2,±3; x^(2/3)-5x^(1/3)+6=0 con u=x^(1/3) da x=8,27
Sistemas mixtos (1): x+y=13 y xy=42 da (x,y)=(6,7) o (7,6)
Problema integrador (2): proyectil h=-5t²+40t+5, altura máxima 85 m en t=4 s, √(t+1)=3 da t=8 verificado
```

---

## Resumen de la semana

```{list-table}
:header-rows: 1
:widths: 20 80

* - Clase
  - Lo que debes dominar
* - S14·C1
  - Fórmula general; $\Delta$ y número de soluciones; interpretación física.
* - S14·C2
  - Radicales: aislar, elevar al cuadrado, verificar, descartar extrañas.
* - S14·C3
  - Sustitución $u=f(x)$; bicuadráticas y exponentes fraccionarios.
* - S14·C4
  - Sistema lineal + cuadrática; intersección recta-parábola.
* - S14·Auto
  - Verificación obligatoria; interpretar $\Delta$ en ingeniería.
```

:::{admonition} Siguiente semana
:class: tip
La Semana 14 está completa. La próxima semana trabajarás **sistemas cuadráticos** y **funciones polinomiales** — cierre de la Unidad 4.

➡️ [Ir a S15·C1 Sistemas de ecuaciones cuadráticas](s15_c1_sistemas_cuadraticos.md)
:::
