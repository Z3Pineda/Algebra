---
title: "S14·C3 Ecuaciones de forma cuadrática"
---

# S14·C3 Ecuaciones de forma cuadrática

:::{admonition} 🔧 Modos de vibración en un sistema mecánico
:class: ingenieria

La ecuación de frecuencias de un sistema con dos modos satisface:

$$\omega^4 - 5\omega^2 + 4 = 0$$

No es cuadrática en $\omega$, pero con $u = \omega^2$ se convierte en:

$$u^2 - 5u + 4 = 0 \quad \Rightarrow \quad (u-1)(u-4) = 0$$

Las frecuencias son $\omega = \pm 1$ y $\omega = \pm 2$ rad/s. La **sustitución** transforma ecuaciones de forma cuadrática en cuadráticas estándar.
:::

**Pregunta detonadora**

> En $x^4 - 5x^2 + 4 = 0$, ¿qué sustitución convierte la ecuación en una cuadrática en $u$?

---

## Teoría

### ¿Qué es forma cuadrática?

Una ecuación es de **forma cuadrática** si, con la sustitución $u = f(x)$, se convierte en:

$$au^2 + bu + c = 0$$

**Pasos:**

| Paso | Acción |
|:----:|--------|
| 1 | Identificar la expresión que se repite: $f(x)$ |
| 2 | Sustituir $u = f(x)$ |
| 3 | Resolver la cuadrática en $u$ |
| 4 | Deshacer: resolver $f(x) = u_i$ para cada valor de $u$ |

---

### Ejemplo 1 — Bicuadrática

$$x^4 - 5x^2 + 4 = 0$$

Sustituir $u = x^2$:

$$u^2 - 5u + 4 = 0 \quad \Rightarrow \quad (u-1)(u-4) = 0 \quad \Rightarrow \quad u = 1 \text{ o } u = 4$$

Deshacer: $x^2 = 1 \Rightarrow x = \pm 1$; $x^2 = 4 \Rightarrow x = \pm 2$

**Soluciones:** $x = -2, -1, 1, 2$ (cuatro raíces reales)

---

### Ejemplo 2 — Con exponentes fraccionarios

$$x^{2/3} - 3x^{1/3} + 2 = 0$$

Sustituir $u = x^{1/3}$. Entonces $x^{2/3} = u^2$:

$$u^2 - 3u + 2 = 0 \quad \Rightarrow \quad (u-1)(u-2) = 0 \quad \Rightarrow \quad u = 1 \text{ o } u = 2$$

Deshacer: $x^{1/3} = 1 \Rightarrow x = 1$; $x^{1/3} = 2 \Rightarrow x = 8$

**Soluciones:** $x = 1$, $x = 8$

---

### Ejemplo 3 — Con expresión repetida

$$(x + 1)^2 - 5(x + 1) + 6 = 0$$

Sustituir $u = x + 1$:

$$u^2 - 5u + 6 = 0 \quad \Rightarrow \quad (u-2)(u-3) = 0$$

$x + 1 = 2 \Rightarrow x = 1$; $x + 1 = 3 \Rightarrow x = 2$

---

### Ejemplo 4 — Factorizable como forma cuadrática

$$x^4 + x^2 - 6 = 0 \quad \Rightarrow \quad u = x^2: \quad u^2 + u - 6 = 0$$

$$(u+3)(u-2) = 0 \quad \Rightarrow \quad u = -3 \text{ (descartar)} \text{ o } u = 2$$

$x^2 = 2 \Rightarrow x = \pm\sqrt{2}$

```{warning}
Al deshacer la sustitución:

- Si $u = x^2$ y $u = -3$, no hay $x$ real ($x^2 \geq 0$)
- Si $u = x^{1/3}$, siempre hay un $x$ real para cada $u$
- Verificar **todas** las soluciones en la ecuación original
```

---

### Frecuencias en sistemas vibratorios

La ecuación característica $\omega^4 - 5\omega^2 + 4 = 0$ con $u = \omega^2$ da dos frecuencias al cuadrado: $1$ y $4$ rad²/s².

$\omega = \pm 1$ y $\omega = \pm 2$ rad/s — cuatro modos (positivos y negativos indican dirección).

:::{admonition} 🔧 Ingeniería — análisis modal
:class: ingenieria

En vibraciones, ecuaciones como $\lambda^4 - 3\lambda^2 + 2 = 0$ (con $\lambda = \omega^2$) determinan **frecuencias naturales**. Resolver la forma cuadrática identifica modos de vibración que el ingeniero debe evitar o controlar en diseño.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_FORMA_CUADRATICA"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. x⁴-5x²+4=0 con u=x² → u²-5u+4=0
2. Deshacer: x=±1, x=±2
3. x^(2/3)-3x^(1/3)+2=0 con u=x^(1/3)
4. (x+1)²-5(x+1)+6=0
5. Descartar u=-3 cuando u=x²
6. Aplicacion frecuencias ω⁴-5ω²+4=0
```

---

## Visualización interactiva

Observa cómo $u = x^2$ transforma $x^4 - 5x^2 + 4 = 0$ en una parábola en $u$.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s14c3-forma-cuad" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s14c3-forma-cuad', {
            boundingbox: [-3, 8, 8, -2],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var f = function(u) { return u*u - 5*u + 4; };
        board.create('functiongraph', [f, -1, 6], { strokeColor: '#1d4ed8', strokeWidth: 2.5 });

        board.create('point', [1, 0], { size: 4, fillColor: '#16a34a', strokeColor: '#16a34a', name: 'u=1 → x=±1' });
        board.create('point', [4, 0], { size: 4, fillColor: '#16a34a', strokeColor: '#16a34a', name: 'u=4 → x=±2' });

        board.create('text', [4, 6, 'u = x²'], { fontSize: 14, color: '#7c3aed', fontWeight: 'bold' });
        board.create('text', [4, 5.2, 'u² - 5u + 4 = 0'], { fontSize: 12, color: '#374151' });
        board.create('text', [4, 4.4, '4 soluciones en x: ±1, ±2'], { fontSize: 11, color: '#16a34a' });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Parábola en $u$: $u^2-5u+4=0$ con raíces $u=1$ y $u=4$. Cada $u$ genera dos $x$ al deshacer $u=x^2$. Conecta sustitución con número total de soluciones.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfJl9RMGTYcGCKHqLmoJKUJrNSAJsT589dBvN5cPWoh_K7tGw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Forma cuadrática
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "x⁴-5x²+4=0 sustitucion:" → u=x²
P2 (Fill): "u²-5u+4=0 → u=___ o u=___" → 1, 4
P3 (Fill): "x⁴-5x²+4=0 → x=___ (todas)" → ±1, ±2
P4 (MC): "x^(2/3)-3x^(1/3)+2=0 → u=___" → x^(1/3)
P5 (Fill): "u=1,2 → x=___" → 1, 8
P6 (T/F): "u=-3 con u=x² no da x real." → Verdadero
P7 (MC ingeniería): "ω⁴-5ω²+4=0 modela:" → Frecuencias de vibracion
P8 (Fill): "(x+1)²-5(x+1)+6=0 → x=___ o x=___" → 1, 2
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Forma cuadrática
  - $u = f(x)$ convierte en $au^2 + bu + c = 0$
* - Pasos
  - Sustituir → resolver en $u$ → deshacer $f(x) = u_i$
* - Bicuadrática
  - $u = x^2$ en ecuaciones con $x^4$, $x^2$, constante
* - Exponentes fraccionarios
  - $u = x^{1/3}$ cuando aparecen $x^{2/3}$, $x^{1/3}$
* - Cuidado
  - Descartar $u < 0$ si $u = x^2$; verificar soluciones
* - Ingeniería
  - Frecuencias naturales, modos de vibración
```

:::{admonition} Siguiente clase
:class: tip
Ya resuelves ecuaciones de forma cuadrática. En la siguiente clase combinarás una ecuación **lineal** con una **cuadrática** — sistemas mixtos.

➡️ [Ir a S14·C4 Sistemas con una ecuación lineal y una cuadrática](s14_c4_sistemas_lineal_cuadratica.md)
:::
