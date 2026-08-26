---
title: "S11·C4 Ecuaciones con fracciones"
---

# S11·C4 Ecuaciones con fracciones

:::{admonition} 🔧 Resistencias eléctricas en paralelo
:class: ingenieria

En un circuito con dos resistencias en paralelo, la resistencia equivalente cumple:

$$\frac{1}{R_T} = \frac{1}{R_1} + \frac{1}{R_2}$$

Si $R_1 = 6$ Ω y $R_2 = 3$ Ω, el técnico necesita hallar $R_T$:

$$\frac{1}{R_T} = \frac{1}{6} + \frac{1}{3} = \frac{1}{6} + \frac{2}{6} = \frac{3}{6} = \frac{1}{2}$$

Por lo tanto $R_T = 2$ Ω.

Las ecuaciones con fracciones aparecen en circuitos, transmisiones mecánicas y balances de materiales. Eliminar denominadores con el MCM es la técnica clave.
:::

**Pregunta detonadora**

> Para resolver $\dfrac{x}{3} + \dfrac{x}{2} = 5$, ¿por qué conviene multiplicar toda la ecuación por el MCM de 3 y 2 antes de despejar?

---

## Teoría

### ¿Por qué aparecen fracciones en ecuaciones?

Las fracciones surgen naturalmente en fórmulas de ingeniería:

- Resistencias en paralelo: $\dfrac{1}{R_T} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$
- Velocidades en trenes de engranajes: $\dfrac{1}{v} = \dfrac{1}{v_1} + \dfrac{1}{v_2}$
- Concentraciones en mezclas: $\dfrac{C_1 V_1 + C_2 V_2}{V_1 + V_2} = C_f$

Resolver ecuaciones con fracciones requiere **eliminar los denominadores** para obtener una ecuación equivalente más simple.

---

### Método: multiplicar por el MCM

**Procedimiento:**

| Paso | Acción |
|:----:|--------|
| 1 | Identificar **todos** los denominadores |
| 2 | Calcular el **MCM** de esos denominadores |
| 3 | Multiplicar **cada término** de la ecuación por el MCM |
| 4 | Simplificar — los denominadores desaparecen |
| 5 | Resolver la ecuación resultante (lineal) |
| 6 | Verificar que la solución **no anula** ningún denominador |

**Ejemplo 1:**

$$\frac{x}{3} + \frac{x}{2} = 5$$

MCM$(3, 2) = 6$. Multiplicamos cada término por 6:

$$6 \cdot \frac{x}{3} + 6 \cdot \frac{x}{2} = 6 \cdot 5$$
$$2x + 3x = 30$$
$$5x = 30$$
$$x = 6$$

**Verificación:** $\dfrac{6}{3} + \dfrac{6}{2} = 2 + 3 = 5$ ✓

---

### Ecuaciones con denominadores numéricos

**Ejemplo 2:**

$$\frac{2x - 1}{4} = \frac{x + 3}{2}$$

MCM$(4, 2) = 4$:

$$4 \cdot \frac{2x-1}{4} = 4 \cdot \frac{x+3}{2}$$
$$2x - 1 = 2(x + 3)$$
$$2x - 1 = 2x + 6$$
$$-1 = 6 \quad \times$$

Esta ecuación **no tiene solución** — los miembros son inconsistentes.

**Ejemplo 3:**

$$\frac{x + 2}{3} - \frac{x - 1}{2} = 4$$

MCM$(3, 2) = 6$:

$$6 \cdot \frac{x+2}{3} - 6 \cdot \frac{x-1}{2} = 6 \cdot 4$$
$$2(x + 2) - 3(x - 1) = 24$$
$$2x + 4 - 3x + 3 = 24$$
$$-x + 7 = 24$$
$$x = -17$$

**Verificación:** $\dfrac{-15}{3} - \dfrac{-18}{2} = -5 + 9 = 4$ ✓

---

### Ecuaciones con denominadores algebraicos

Cuando la incógnita aparece en el denominador, hay **restricciones de dominio**: ningún denominador puede ser cero.

**Ejemplo 4:**

$$\frac{3}{x} + \frac{2}{x} = \frac{5}{2}$$

Restricción: $x \neq 0$.

MCM$(x, x, 2) = 2x$. Multiplicamos por $2x$:

$$2x \cdot \frac{3}{x} + 2x \cdot \frac{2}{x} = 2x \cdot \frac{5}{2}$$
$$6 + 4 = 5x$$
$$10 = 5x$$
$$x = 2$$

**Verificación:** $x = 2 \neq 0$ ✓. $\dfrac{3}{2} + \dfrac{2}{2} = 1.5 + 1 = 2.5 = \dfrac{5}{2}$ ✓

```{warning}
Siempre verifica que la solución **no hace cero ningún denominador** de la ecuación original.

Ejemplo: $\dfrac{1}{x} = \dfrac{2}{x}$ parece no tener solución, pero si $x = 0$ ambos lados son indefinidos — $x = 0$ queda **excluido** del dominio.
```

---

### Resistencias en paralelo — despejar $R_T$

$$\frac{1}{R_T} = \frac{1}{R_1} + \frac{1}{R_2}$$

Para dos resistencias iguales $R_1 = R_2 = R$:

$$\frac{1}{R_T} = \frac{1}{R} + \frac{1}{R} = \frac{2}{R}$$

$$R_T = \frac{R}{2}$$

**Ejemplo numérico:** $R_1 = 12$ Ω, $R_2 = 4$ Ω:

$$\frac{1}{R_T} = \frac{1}{12} + \frac{1}{4} = \frac{1}{12} + \frac{3}{12} = \frac{4}{12} = \frac{1}{3}$$
$$R_T = 3 \text{ Ω}$$

---

### Trenes de engranajes — relación de velocidades

Si dos engranajes con $N_1$ y $N_2$ dientes giran juntos:

$$\frac{\omega_1}{\omega_2} = \frac{N_2}{N_1}$$

Para hallar $\omega_2$ cuando $\omega_1 = 120$ rad/s, $N_1 = 40$, $N_2 = 60$:

$$\frac{120}{\omega_2} = \frac{60}{40} = \frac{3}{2}$$

Multiplicamos cruzado: $120 \cdot 2 = 60 \cdot \omega_2 \Rightarrow \omega_2 = 80$ rad/s.

:::{admonition} 🔧 Ingeniería — mezclas de aleaciones
:class: ingenieria

Una aleación al $30\%$ de cobre se mezcla con otra al $50\%$. Si se usan $x$ kg de la primera y $(20 - x)$ kg de la segunda, la concentración final es:

$$\frac{0.30x + 0.50(20 - x)}{20} = 0.38$$

Multiplicando por 20:

$$0.30x + 10 - 0.50x = 7.6$$
$$-0.20x = -2.4$$
$$x = 12 \text{ kg}$$

Se necesitan **12 kg** de la aleación al 30%.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_ECUACIONES_FRACCIONES"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Mostrar x/3 + x/2 = 5 — calcular MCM(3,2)=6 y multiplicar cada término
2. Caso con paréntesis: (x+2)/3 - (x-1)/2 = 4
3. Restricción de dominio: 3/x + 2/x = 5/2 con x≠0
4. Resistencias en paralelo: 1/R_T = 1/6 + 1/3 → R_T = 2 Ω
5. Advertencia: verificar que la solución no anula denominadores
6. Mezcla de aleaciones como problema aplicado
```

---

## Visualización interactiva

Observa cómo el MCM elimina los denominadores paso a paso. Selecciona una ecuación y navega la resolución.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s11c4-fracciones" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function mcm(a, b) { return a * b / gcd(a, b); }
    function gcd(a, b) {
        while (b) { var t = b; b = a % b; a = t; }
        return a;
    }

    var ecuaciones = [
        {
            nombre: 'x/3 + x/2 = 5',
            dens: [3, 2],
            mcmVal: 6,
            pasos: [
                'MCM(3, 2) = 6',
                '6·(x/3) + 6·(x/2) = 6·5',
                '2x + 3x = 30',
                '5x = 30  →  x = 6'
            ],
            color: '#1d4ed8'
        },
        {
            nombre: '1/R_T = 1/6 + 1/3',
            dens: [1, 6, 3],
            mcmVal: 6,
            pasos: [
                'MCM(6, 3) = 6',
                '6/R_T = 6/6 + 6/3 = 1 + 2',
                '6/R_T = 3',
                'R_T = 6/3 = 2 Ω'
            ],
            color: '#16a34a'
        },
        {
            nombre: '(x+2)/3 - (x-1)/2 = 4',
            dens: [3, 2],
            mcmVal: 6,
            pasos: [
                'MCM(3, 2) = 6',
                '2(x+2) - 3(x-1) = 24',
                '2x+4 - 3x+3 = 24',
                '-x + 7 = 24  →  x = -17'
            ],
            color: '#7c3aed'
        }
    ];

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s11c4-fracciones', {
            boundingbox: [-1, 13, 14, -1],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var eqIdx = 0, paso = 0;
        var dinamicos = [], btnEq = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var eq = ecuaciones[eqIdx];

            btnEq.forEach(function(b, i) {
                b.setAttribute({
                    fillColor: i === eqIdx ? eq.color : '#e5e7eb',
                    strokeColor: i === eqIdx ? eq.color : '#9ca3af'
                });
            });

            dinamicos.push(board.create('text', [7, 12, eq.nombre], {
                fontSize: 15, color: eq.color, fontWeight: 'bold', anchorX: 'middle'
            }));

            dinamicos.push(board.create('text', [7, 10.8,
                'MCM = ' + eq.mcmVal], {
                fontSize: 13, color: '#c2410c', anchorX: 'middle', fontWeight: 'bold'
            }));

            for (var i = 0; i <= paso && i < eq.pasos.length; i++) {
                var esUltimo = i === eq.pasos.length - 1;
                dinamicos.push(board.create('text', [1.5, 9.2 - i * 1.3,
                    (i + 1) + '. ' + eq.pasos[i]], {
                    fontSize: esUltimo && i === paso ? 14 : 12,
                    color: esUltimo && i === paso ? eq.color : '#374151',
                    fontWeight: esUltimo && i === paso ? 'bold' : 'normal'
                }));
            }

            dinamicos.push(board.create('text', [7, 2.5,
                'Paso ' + (paso + 1) + ' de ' + eq.pasos.length], {
                fontSize: 11, color: '#6b7280', anchorX: 'middle'
            }));

            if (paso > 0) {
                var bp = board.create('text', [4, 1, '< Anterior'], {
                    fontSize: 12, color: '#374151', fontWeight: 'bold', anchorX: 'middle',
                    cssStyle: 'cursor:pointer; padding:5px 12px; background:#f1f5f9; border-radius:6px;'
                });
                bp.on('down', function() { paso--; dibujar(); });
                dinamicos.push(bp);
            }
            if (paso < eq.pasos.length - 1) {
                var bn = board.create('text', [10, 1, 'Siguiente >'], {
                    fontSize: 12, color: eq.color, fontWeight: 'bold', anchorX: 'middle',
                    cssStyle: 'cursor:pointer; padding:5px 12px; background:#dbeafe; border-radius:6px;'
                });
                bn.on('down', function() { paso++; dibujar(); });
                dinamicos.push(bn);
            }
        }

        ecuaciones.forEach(function(eq, i) {
            var btn = board.create('button', [0.5 + i * 4.2, 12.8, eq.nombre.substring(0, 14)], {
                fixed: true, highlight: false, size: 2,
                fillColor: '#e5e7eb', strokeColor: '#9ca3af'
            });
            (function(idx) {
                btn.on('down', function() { eqIdx = idx; paso = 0; dibujar(); });
            })(i);
            btnEq.push(btn);
        });

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Tres ecuaciones con fracciones (numérica, resistencias en paralelo, con paréntesis). Botones superiores cambian de ecuación; Anterior/Siguiente navegan los pasos. Se destaca el MCM y cómo cada término se multiplica para eliminar denominadores.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf654suXp11tEh3Ac2msVQj5Y8oWUaH4EhL5t02AiJ-WmI2NA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Ecuaciones con fracciones
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "x/3 + x/2 = 5 → x = ___" → 6
P2 (Fill): "MCM(4, 6) = ___" → 12
P3 (Fill): "1/R_T = 1/6 + 1/3 → R_T = ___ Ω" → 2
P4 (MC): "Primer paso para x/4 + 1 = 3:" → Multiplicar por MCM(4,1)=4
P5 (T/F): "Si x=0 anula un denominador, x=0 no es solución válida." → Verdadero
P6 (Fill): "(x+2)/3 - (x-1)/2 = 4 → x = ___" → -17
P7 (MC ingeniería): "En 1/R_T = 1/R_1 + 1/R_2, R_T es:" → Menor que R_1 y R_2
P8 (Fill): "3/x + 2/x = 5/2 con x≠0 → x = ___" → 2
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Método MCM
  - Multiplicar **cada término** por el MCM de los denominadores
* - Denominadores numéricos
  - MCM de los números; simplificar y resolver ecuación lineal
* - Denominadores algebraicos
  - MCM incluye expresiones con $x$; verificar restricciones
* - Restricción de dominio
  - Ningún denominador puede ser cero; excluir esos valores
* - Ingeniería
  - Resistencias paralelo, engranajes, mezclas de materiales
* - Verificación
  - Sustituir en ecuación original; confirmar denominadores ≠ 0
```

:::{admonition} Siguiente clase
:class: tip
Ya resuelves ecuaciones con fracciones numéricas y algebraicas. En la siguiente clase pondrás en práctica **todo lo aprendido** resolviendo problemas de modelación de ingeniería en autogestión.

➡️ [Ir a S11·Auto Problemas de modelación con ecuaciones lineales](s11_auto_modelacion_ecuaciones.md)
:::
