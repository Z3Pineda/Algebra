---
title: "S9·C4 Simplificación, multiplicación y división de fracciones algebraicas"
---

# S9·C4 Simplificación, multiplicación y división de fracciones algebraicas

:::{admonition} 🔧 Relación de transmisión y rendimiento mecánico
:class: ingenieria

Un sistema de engranajes tiene relación de transmisión:

$$i = \frac{\omega_{entrada}}{\omega_{salida}} = \frac{N_{salida}}{N_{entrada}}$$

Si las velocidades se modelan como fracciones algebraicas:

$$\frac{2x^2 - 8}{x^2 + 4x + 4} \cdot \frac{x + 2}{4x}$$

antes de calcular, el ingeniero **simplifica** factorizando numerador y denominador:

$$\frac{2(x^2-4)}{(x+2)^2} \cdot \frac{x+2}{4x} = \frac{2(x+2)(x-2)}{(x+2)^2} \cdot \frac{x+2}{4x} = \frac{x-2}{2x}$$

El **rendimiento** $\eta = P_{salida}/P_{entrada}$ también se expresa como fracción algebraica. Dominar simplificación, multiplicación y división de fracciones es esencial para modelar **transmisiones, palancas y eficiencia** en sistemas mecánicos.
:::

**Pregunta detonadora**

> ¿Puedes simplificar $\frac{x^2 - 9}{x^2 + 5x + 6}$ factorizando arriba y abajo? ¿Qué términos se cancelan?

---

## Teoría

### ¿Qué es una fracción algebraica?

Una **fracción algebraica** es el cociente de dos polinomios:

$$\frac{P(x)}{Q(x)} \qquad (Q(x) \neq 0)$$

El numerador y el denominador pueden ser monomios, binomios o polinomios de mayor grado. Las técnicas de factorización de la Semana 8 son la herramienta principal para simplificarlas.

---

### Simplificación de fracciones algebraicas

**Procedimiento:**

| Paso | Acción |
|------|--------|
| 1 | Factorizar completamente numerador y denominador |
| 2 | Identificar factores comunes |
| 3 | Cancelar factores iguales (no términos sueltos) |
| 4 | Escribir la fracción simplificada |
| 5 | Indicar restricciones: valores que anulan el denominador **original** |

$$\frac{x^2 - 9}{x^2 + 5x + 6} = \frac{(x+3)(x-3)}{(x+2)(x+3)} = \frac{x-3}{x+2} \qquad (x \neq -3, -2)$$

```{warning}
Solo se cancelan **factores** (multiplicaciones), nunca **términos** (sumas).

- Correcto: $\frac{(x+3)(x-2)}{(x+3)} = x-2$
- Incorrecto: $\frac{x^2 - 4}{x + 2} \neq x - 4$ (no se cancela el $+2$ suelto)

Primero factoriza, luego cancela.
```

---

### Multiplicación de fracciones algebraicas

$$\frac{A}{B} \cdot \frac{C}{D} = \frac{A \cdot C}{B \cdot D}$$

Factoriza antes de multiplicar para simplificar:

$$\frac{2x}{x^2-1} \cdot \frac{x+1}{4} = \frac{2x}{(x+1)(x-1)} \cdot \frac{x+1}{4} = \frac{2x}{4(x-1)} = \frac{x}{2(x-1)}$$

---

### División de fracciones algebraicas

Dividir fracciones = multiplicar por el **recíproco** del divisor:

$$\frac{A}{B} \div \frac{C}{D} = \frac{A}{B} \cdot \frac{D}{C}$$

**Ejemplo 1:**

$$\frac{x^2 - 4}{x} \div \frac{x + 2}{2x^2} = \frac{x^2 - 4}{x} \cdot \frac{2x^2}{x + 2}$$

$$= \frac{(x+2)(x-2)}{x} \cdot \frac{2x^2}{x+2} = \frac{2x(x-2)}{1} = 2x(x-2)$$

**Ejemplo 2 — ingeniería (ley de la palanca):**

La ventaja mecánica $VM = F_{salida}/F_{entrada}$. Si:

$$\frac{F_s}{F_e} = \frac{3x^2 + 6x}{x^2 - 4} \div \frac{x + 2}{x - 2}$$

$$= \frac{3x(x+2)}{(x+2)(x-2)} \cdot \frac{x-2}{x+2} = \frac{3x}{x+2}$$

---

### Restricciones del dominio

Al simplificar, las restricciones provienen del denominador **original** (antes de cancelar):

$$\frac{(x-1)(x+2)}{x+2} = x-1 \qquad (x \neq -2)$$

Aunque el factor $(x+2)$ se cancela, $x = -2$ sigue excluido porque anulaba el denominador original.

---

### Conexión con ingeniería

:::{admonition} 🔧 Transmisión, rendimiento y palancas
:class: ingenieria

| Concepto | Fracción algebraica | Operación |
|----------|--------------------|-----------|
| Relación de engranajes | $\frac{N_2}{N_1} = \frac{\omega_1}{\omega_2}$ | Simplificar |
| Rendimiento | $\eta = \frac{P_{out}}{P_{in}}$ | Dividir fracciones |
| Ventaja mecánica | $VM = \frac{F_b \cdot d_b}{F_e \cdot d_e}$ | Multiplicar y simplificar |
| Reducción compuesta | $i_{total} = i_1 \cdot i_2 \cdot i_3$ | Producto de fracciones |

Simplificar antes de sustituir valores numéricos reduce errores de cálculo en taller y laboratorio.
:::

**Ejemplo 3 — simplificación completa:**

$$\frac{x^3 - x}{x^2 - 2x + 1} = \frac{x(x^2-1)}{(x-1)^2} = \frac{x(x+1)(x-1)}{(x-1)^2} = \frac{x(x+1)}{x-1} \qquad (x \neq 1)$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_FRACCIONES_ALGEBRAICAS"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Definir fracción algebraica P(x)/Q(x)
2. Simplificar (x²-9)/(x²+5x+6): factorizar y cancelar (x+3)
3. Advertencia: cancelar factores, no términos
4. Multiplicar: 2x/(x²-1) · (x+1)/4
5. Dividir: multiplicar por el recíproco con ejemplo completo
6. Cierre: relación de engranajes y rendimiento η = P_out/P_in
```

---

## Visualización interactiva

Factoriza y cancela factores en una fracción algebraica paso a paso.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s9c4-fracciones" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s9c4-fracciones', {
            boundingbox: [-1, 13, 14, -1],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var etapas = [
            { t: 'Fracción original:', f: '(x² - 9) / (x² + 5x + 6)', c: '#374151', y: 11 },
            { t: 'Factorizar numerador:', f: '(x+3)(x-3)', c: '#3b82f6', y: 9.5 },
            { t: 'Factorizar denominador:', f: '(x+2)(x+3)', c: '#f97316', y: 8 },
            { t: 'Cancelar (x+3):', f: '~~(x+3)~~ / ~~(x+3)~~', c: '#9ca3af', y: 6.5 },
            { t: 'Simplificada:', f: '(x-3) / (x+2)', c: '#16a34a', y: 5 },
            { t: 'Restricciones:', f: 'x ≠ -3, -2', c: '#c2410c', y: 3.5 }
        ];

        etapas.forEach(function(e) {
            board.create('text', [0.5, e.y, e.t], { fontSize: 11, color: '#6b7280' });
            board.create('text', [5, e.y, e.f], {
                fontSize: 13, color: e.c, fontWeight: e.y <= 5 ? 'bold' : 'normal'
            });
        });

        board.create('text', [8, 1.5, 'i = ω₁/ω₂ = N₂/N₁'], {
            fontSize: 12, color: '#1d4ed8', fontWeight: 'bold'
        });
        board.create('text', [8, 0.3, 'Transmisión mecánica'], {
            fontSize: 10, color: '#6b7280'
        });

        // Flecha de flujo
        for (var i = 0; i < 4; i++) {
            board.create('segment', [[11, etapas[i].y - 0.3], [11, etapas[i+1].y + 0.3]], {
                strokeColor: '#d1d5db', strokeWidth: 1.5, lastArrow: { type: 2, size: 5 }
            });
        }
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Muestra la simplificación de $(x^2-9)/(x^2+5x+6)$ en cinco etapas: factorización del numerador y denominador, cancelación del factor común $(x+3)$, resultado simplificado y restricciones del dominio. Incluye referencia a la relación de transmisión $i = \omega_1/\omega_2$.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfIwQG3jfh0gbOG4NeDfkkeJN_mQfN72jE3DS-z4ZBEu36c6A/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Fracciones algebraicas
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~12 min):**

P1 (Fill): "(x²-9)/(x+3) simplificada = ___" → x-3
P2 (Fill): "(x²-4)/(x-2) = ___" → x+2
P3 (Fill): "(2x)/(x²-1) · (x+1)/4 = x/(___)" → 2(x-1)
P4 (MC): "(x²-4)/x ÷ (x+2)/(2x²) = ?" → 2x(x-2)
P5 (T/F): "Se puede cancelar términos en sumas" → Falso
P6 (Fill): "(x³-x)/(x²-2x+1) = x(x+1)/(___)" → x-1
P7 (Fill ingeniería): "η = P_out/P_in es una ___ algebraica" → fracción
P8 (Fill): "Dividir fracciones = multiplicar por el ___" → recíproco
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Simplificar
  - Factorizar numerador y denominador; cancelar factores comunes
* - Multiplicar
  - $\frac{A}{B} \cdot \frac{C}{D} = \frac{AC}{BD}$ — factorizar antes
* - Dividir
  - Multiplicar por el recíproco: $\frac{A}{B} \div \frac{C}{D} = \frac{A}{B} \cdot \frac{D}{C}$
* - Precaución
  - Cancelar **factores**, no términos sueltos
* - Ingeniería
  - Transmisión $i$, rendimiento $\eta$, ventaja mecánica $VM$
```

:::{admonition} Siguiente clase
:class: tip
Completaste los cuatro temas de la Semana 9. La siguiente sesión es de **autogestión**: ejercicios integradores de división y fracciones algebraicas.

➡️ [Ir a S9·Auto Fracciones algebraicas](s9_auto_fracciones_algebraicas.md)
:::
