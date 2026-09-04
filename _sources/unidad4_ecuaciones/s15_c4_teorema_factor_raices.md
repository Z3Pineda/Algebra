---
title: "S15·C4 Teorema del factor, raíces y teorema fundamental"
---

# S15·C4 Teorema del factor, raíces y teorema fundamental

:::{admonition} 🔧 Polinomio característico de vibraciones
:class: ingenieria

El polinomio característico de un sistema vibratorio es:

$$P(\lambda) = \lambda^3 - 6\lambda^2 + 11\lambda - 6$$

Si $P(1) = 0$, entonces $(\lambda - 1)$ es **factor** y $\lambda = 1$ es **raíz** — una frecuencia modal del sistema. Encontrar raíces de polinomios es central en análisis de vibraciones y control.
:::

**Pregunta detonadora**

> Si $P(2) = 0$, ¿qué puedes afirmar sobre $(x - 2)$ y $P(x)$?

---

## Teoría

### Teorema del factor

$$(x - a) \text{ es factor de } P(x) \quad \Longleftrightarrow \quad P(a) = 0$$

**Equivalencias:**

| Enunciado | Significado |
|-----------|-------------|
| $P(a) = 0$ | $a$ es **raíz** (o cero) de $P$ |
| $(x - a)$ divide a $P(x)$ | $P(x) = (x-a) \cdot Q(x)$ |
| $P(a) = 0$ | $a$ es intersección con eje $x$ |

---

### Teorema fundamental del álgebra

Todo polinomio de grado $n \geq 1$ con coeficientes complejos tiene **exactamente $n$ raíces** en $\mathbb{C}$, contando **multiplicidad**.

**En los reales:** como máximo $n$ raíces reales; las restantes son complejas conjugadas.

**Ejemplo:** $x^2 + 1 = 0$ — 0 raíces reales, 2 complejas ($\pm i$).

---

### Multiplicidad

Si $(x-a)^2$ divide a $P(x)$ pero $(x-a)^3$ no, entonces $a$ es raíz de **multiplicidad 2** (raíz doble).

$$P(x) = (x-2)^2(x+1) \quad \Rightarrow \quad \text{raíz } 2 \text{ (doble), raíz } -1 \text{ (simple)}$$

Gráficamente, raíz doble **toca** el eje $x$ sin cruzarlo.

---

### Encontrar raíces racionales

**Prueba de raíces racionales:** si $\dfrac{p}{q}$ es raíz racional (en forma irreducible) de $P(x) = a_n x^n + \cdots + a_0$, entonces:

- $p$ divide a $a_0$
- $q$ divide a $a_n$

**Ejemplo:** $P(x) = 2x^3 - 5x^2 + x + 2$

Posibles raíces: $\pm 1, \pm 2, \pm \dfrac{1}{2}$

Probar con Ruffini: $P(2) = 16 - 20 + 2 + 2 = 0$ → $(x-2)$ es factor.

---

### Ejemplo completo — factorizar

$$P(x) = x^3 - 6x^2 + 11x - 6$$

Posibles raíces racionales: $\pm 1, \pm 2, \pm 3, \pm 6$

$P(1) = 1 - 6 + 11 - 6 = 0$ → $(x-1)$ es factor.

Ruffini con $a=1$: cociente $x^2 - 5x + 6 = (x-2)(x-3)$

$$P(x) = (x-1)(x-2)(x-3)$$

**Raíces:** $1, 2, 3$ — tres raíces reales simples (grado 3).

---

### Estrategia para encontrar raíces

| Paso | Acción |
|:----:|--------|
| 1 | Listar candidatos racionales ($p/q$) |
| 2 | Probar con Ruffini o evaluar $P(a)$ |
| 3 | Si $P(a)=0$, factorizar $(x-a)$ y repetir con cociente |
| 4 | Cociente de grado 2 → factorizar o fórmula general |

```{warning}
No todo polinomio tiene raíces racionales. $x^2 - 2 = 0$ tiene raíces $\pm\sqrt{2}$ — irracionales.

La prueba de raíces racionales **solo** lista candidatos; hay que verificar cada uno.
```

:::{admonition} 🔧 Ingeniería — vibraciones y control
:class: ingenieria

En un sistema de 3 masas, $P(\lambda) = \lambda^3 - 6\lambda^2 + 11\lambda - 6$ modela frecuencias. Factorizar completamente da $\lambda = 1, 2, 3$ — tres modos de vibración. Raíces del polinomio característico determinan estabilidad y respuesta dinámica del sistema.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_TEOREMA_FACTOR"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Teorema del factor: P(a)=0 ↔ (x-a) factor
2. Teorema fundamental: n raices contando multiplicidad
3. Multiplicidad: (x-2)² raiz doble
4. Prueba p/q: p|a0, q|an
5. Factorizar x³-6x²+11x-6 → (x-1)(x-2)(x-3)
6. Polinomio caracteristico en vibraciones
```

---

## Visualización interactiva

Factoriza $P(x) = x^3 - 6x^2 + 11x - 6$ y observa las raíces en el eje $x$.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s15c4-factor" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s15c4-factor', {
            boundingbox: [-1, 8, 6, -3],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var f = function(x) { return x*x*x - 6*x*x + 11*x - 6; };
        board.create('functiongraph', [f, -0.5, 5.5], { strokeColor: '#1d4ed8', strokeWidth: 2.5 });

        [1, 2, 3].forEach(function(r) {
            board.create('point', [r, 0], {
                size: 5, fillColor: '#16a34a', strokeColor: '#16a34a',
                name: 'λ=' + r, label: { fontSize: 11, offset: [0, 12] }
            });
        });

        board.create('text', [2.5, 6.5, 'P(λ) = (λ-1)(λ-2)(λ-3)'], {
            fontSize: 13, color: '#374151', fontWeight: 'bold'
        });
        board.create('text', [2.5, 5.7, '3 raices reales → 3 modos de vibracion'], {
            fontSize: 11, color: '#16a34a'
        });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Gráfica de $P(\lambda)=\lambda^3-6\lambda^2+11\lambda-6$ con raíces marcadas en $\lambda=1,2,3$. Conecta factorización con modos de vibración en ingeniería.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSecjOca64u9bKRohfakbWRnhALYgDZPcyC6oliCKjFUV11PLg/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Teorema del factor y raíces
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (T/F): "P(2)=0 → (x-2) es factor." → Verdadero
P2 (MC): "Grado 4 → max ___ raices reales" → 4
P3 (Fill): "x³-6x²+11x-6 raices: ___, ___, ___" → 1, 2, 3
P4 (MC): "Teorema fundamental:" → n raices en C contando multiplicidad
P5 (MC): "Raiz doble graficamente:" → Toca eje x sin cruzar
P6 (Fill): "Posibles racionales de 2x²-1: ±___" → 1, 1/2
P7 (MC ingeniería): "Raices de polinomio caracteristico:" → Frecuencias modales
P8 (T/F): "x²+1=0 tiene raices reales." → Falso
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Teorema del factor
  - $(x-a)$ factor $\Leftrightarrow$ $P(a)=0$
* - Raíz
  - Valor $a$ con $P(a)=0$; corte con eje $x$
* - Teorema fundamental
  - Grado $n$ → exactamente $n$ raíces en $\mathbb{C}$
* - Multiplicidad
  - Repetición de raíz; $(x-a)^k$ en factorización
* - Raíces racionales
  - Candidatos $p/q$: $p|a_0$, $q|a_n$
* - Ingeniería
  - Polinomio característico, modos de vibración
```

:::{admonition} Siguiente clase
:class: tip
Completaste la teoría de la Unidad 4. En la siguiente clase harás **repaso integrador** de las cinco semanas antes de pasar a la Unidad 5.

➡️ [Ir a S15·Auto Repaso general Unidad 4](s15_auto_repaso_unidad4.md)
:::
