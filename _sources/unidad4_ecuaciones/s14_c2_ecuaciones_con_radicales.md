---
title: "S14·C2 Ecuaciones con radicales"
---

# S14·C2 Ecuaciones con radicales

:::{admonition} 🔧 Velocidad a partir de energía cinética
:class: ingenieria

La energía cinética de una pieza en movimiento es $E_k = \frac{1}{2}mv^2$. Si $E_k = 450$ J y $m = 10$ kg:

$$\frac{1}{2}(10)v^2 = 450 \quad \Rightarrow \quad v^2 = 90 \quad \Rightarrow \quad v = \sqrt{90}$$

Para resolver $v = \sqrt{90}$ numéricamente, primero hay que **aislar el radical** y aplicar operaciones inversas. Las ecuaciones con raíces aparecen en energía, resistencias equivalentes y normas de esfuerzo.
:::

**Pregunta detonadora**

> Al resolver $\sqrt{x + 3} = 5$, ¿por qué debes verificar la solución en la ecuación original después de elevar al cuadrado?

---

## Teoría

### Estrategia general

| Paso | Acción |
|:----:|--------|
| 1 | Aislar el **radical** en un miembro |
| 2 | **Elevar al cuadrado** ambos lados |
| 3 | Resolver la ecuación resultante |
| 4 | **Verificar** cada solución en la ecuación **original** |

---

### Ejemplo 1 — Un radical

$$\sqrt{x + 3} = 5$$

Ya está aislado. Elevar al cuadrado:

$$x + 3 = 25 \quad \Rightarrow \quad x = 22$$

**Verificación:** $\sqrt{22 + 3} = \sqrt{25} = 5$ ✓

---

### Ejemplo 2 — Radical con coeficiente

$$2\sqrt{x - 1} = 6$$

$$\sqrt{x - 1} = 3 \quad \Rightarrow \quad x - 1 = 9 \quad \Rightarrow \quad x = 10$$

**Verificación:** $2\sqrt{9} = 2(3) = 6$ ✓

---

### Soluciones extrañas

Elevar al cuadrado puede introducir **soluciones que no satisfacen** la ecuación original.

**Ejemplo 3:**

$$\sqrt{x} = x - 2$$

Elevar al cuadrado: $x = (x-2)^2 = x^2 - 4x + 4$

$$x^2 - 5x + 4 = 0 \quad \Rightarrow \quad (x-1)(x-4) = 0 \quad \Rightarrow \quad x = 1 \text{ o } x = 4$$

**Verificación:**
- $x = 1$: $\sqrt{1} = 1$ pero $1 - 2 = -1$ → $1 \neq -1$ ✗ **extraña**
- $x = 4$: $\sqrt{4} = 2$ y $4 - 2 = 2$ ✓ **válida**

**Solución:** solo $x = 4$.

```{warning}
**Siempre verifica** en la ecuación original. Las soluciones extrañas surgen porque:

$$a = b \quad \Rightarrow \quad a^2 = b^2 \quad \text{(siempre)}$$
$$a^2 = b^2 \quad \nRightarrow \quad a = b \quad \text{(puede ser } a = -b \text{)}$$

Además, $\sqrt{x}$ requiere $x \geq 0$ en los reales.
```

---

### Dos radicales

$$\sqrt{x + 5} = \sqrt{2x + 3}$$

Elevar al cuadrado: $x + 5 = 2x + 3 \Rightarrow x = 2$

**Verificación:** $\sqrt{7} = \sqrt{7}$ ✓

---

### Energía cinética — despejar $v$

$$\frac{1}{2}mv^2 = E_k \quad \Rightarrow \quad v^2 = \frac{2E_k}{m} \quad \Rightarrow \quad v = \pm\sqrt{\frac{2E_k}{m}}$$

En velocidad escalar (magnitud): $v = \sqrt{\dfrac{2E_k}{m}}$ (solo valor positivo).

Con $E_k = 450$ J, $m = 10$ kg: $v = \sqrt{90} \approx 9.49$ m/s.

:::{admonition} 🔧 Ingeniería — resistencia equivalente
:class: ingenieria

En algunos modelos, la resistencia equivalente $R_{eq}$ satisface:

$$\sqrt{R_{eq}} = \sqrt{R_1} + \sqrt{R_2}$$

Si $R_1 = 4$ Ω y $R_{eq} = 25$ Ω: $\sqrt{R_2} = 5 - 2 = 3 \Rightarrow R_2 = 9$ Ω.

Verificar: $\sqrt{4} + \sqrt{9} = 2 + 3 = 5 = \sqrt{25}$ ✓
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_ECUACIONES_RADICALES"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Aislar radical → elevar al cuadrado → resolver
2. √x = x-2 → x=1 extraña, x=4 valida
3. Importancia de verificar en ecuacion original
4. Energia cinetica: v=√(2Ek/m)
5. Dos radicales: √(x+5)=√(2x+3)
6. Restriccion de dominio x≥0 para √x
```

---

## Visualización interactiva

Resuelve $\sqrt{x} = x - 2$ paso a paso y observa por qué $x = 1$ es solución extraña.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s14c2-radicales" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s14c2-radicales', {
            boundingbox: [-1, 8, 10, -3],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var f1 = function(x) { return x >= 0 ? Math.sqrt(x) : NaN; };
        var f2 = function(x) { return x - 2; };

        board.create('functiongraph', [f1, 0, 10], { strokeColor: '#1d4ed8', strokeWidth: 2.5 });
        board.create('functiongraph', [f2, -1, 10], { strokeColor: '#c2410c', strokeWidth: 2.5 });

        board.create('point', [4, 2], {
            size: 5, fillColor: '#16a34a', strokeColor: '#16a34a',
            name: 'x=4 ✓', label: { fontSize: 11, offset: [8, 8] }
        });
        board.create('point', [1, 1], {
            size: 4, fillColor: '#dc2626', strokeColor: '#dc2626',
            name: 'x=1 ✗', label: { fontSize: 11, offset: [-30, 8] }
        });

        board.create('text', [5, 6.5, 'y = √x (azul)'], { fontSize: 11, color: '#1d4ed8' });
        board.create('text', [5, 6, 'y = x - 2 (naranja)'], { fontSize: 11, color: '#c2410c' });
        board.create('text', [5, 5, 'Interseccion valida: x = 4'], { fontSize: 12, color: '#16a34a', fontWeight: 'bold' });
        board.create('text', [5, 4.3, 'x=1 cumple x² pero NO √x=x-2'], { fontSize: 11, color: '#dc2626' });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Grafica $y=\sqrt{x}$ e $y=x-2$. La intersección en $(4,2)$ es la solución válida. El punto $(1,1)$ está sobre $\sqrt{x}$ pero no sobre $x-2$ en $x=1$ — ilustra solución extraña.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeUO5_BKUnAQP9V-h_PQ9ZrbEit-Ne5BryOiAT_I964GUhTFA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Ecuaciones con radicales
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "√(x+3)=5 → x=___" → 22
P2 (Fill): "√x=x-2 → solucion valida x=___" → 4
P3 (T/F): "x=1 es solucion de √x=x-2." → Falso (extraña)
P4 (MC): "Despues de elevar al cuadrado hay que:" → Verificar en ecuacion original
P5 (Fill): "2√(x-1)=6 → x=___" → 10
P6 (MC ingeniería): "Ek=450 J, m=10 kg → v=√___" → 90
P7 (T/F): "Elevar al cuadrado puede crear soluciones extrañas." → Verdadero
P8 (Fill): "√(x+5)=√(2x+3) → x=___" → 2
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Paso
  - Acción
* - Aislar
  - Dejar el radical solo en un miembro
* - Elevar al cuadrado
  - Aplicar en ambos lados
* - Resolver
  - Ecuación resultante (lineal o cuadrática)
* - Verificar
  - Sustituir en ecuación **original** — descartar extrañas
* - Dominio
  - $\sqrt{x}$ requiere $x \geq 0$
* - Ingeniería
  - Energía cinética, resistencias con raíces
```

:::{admonition} Siguiente clase
:class: tip
Ya resuelves ecuaciones con radicales verificando soluciones. En la siguiente clase verás ecuaciones de **forma cuadrática** mediante sustitución $u = f(x)$.

➡️ [Ir a S14·C3 Ecuaciones de forma cuadrática](s14_c3_ecuaciones_forma_cuadratica.md)
:::
