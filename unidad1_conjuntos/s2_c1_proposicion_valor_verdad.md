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
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_PROPOSICION_VERDAD"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Panel de diagnóstico de la fresadora con varios mensajes
2. Clasificar cada mensaje: proposición ✅ o no ❌ con animación
3. Diferencia entre "temperatura alta" (ambiguo) vs "temperatura > 80°C" (preciso)
4. Evaluar P(x): x>5 para x=3,5,7 — el valor de verdad cambia
5. Conexión: P(x) verdadera → elemento entra al conjunto solución
```

---

## Visualización interactiva

Mueve el deslizador y observa cómo la proposición $P(d): 24.5 \leq d \leq 25.5$ cambia su valor de verdad según el diámetro del eje.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s2c1-proposicion" class="jsxgraph-container"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s2c1-proposicion', {
            boundingbox: [22, 5, 28, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        board.create('line', [[22.5, 0],[27.5, 0]], {
            strokeColor: '#374151', strokeWidth: 2,
            straightFirst: false, straightLast: false
        });

        for (var i = 23; i <= 27; i++) {
            board.create('point', [i, 0], {
                size: 3, fixed: true, color: '#374151',
                name: String(i),
                label: { offset: [0, -18], fontSize: 11, color: '#374151' }
            });
        }

        board.create('line', [[24.5, -0.3],[24.5, 0.8]], {
            strokeColor: '#16a34a', strokeWidth: 2,
            straightFirst: false, straightLast: false, dash: 2 });
        board.create('line', [[25.5, -0.3],[25.5, 0.8]], {
            strokeColor: '#16a34a', strokeWidth: 2,
            straightFirst: false, straightLast: false, dash: 2 });
        board.create('segment', [[24.5, 0],[25.5, 0]], {
            strokeColor: '#16a34a', strokeWidth: 6 });
        board.create('text', [25, 1.2, '[24.5, 25.5] zona aceptable'], {
            fontSize: 11, color: '#16a34a', anchorX: 'middle' });

        var sl = board.create('slider',
            [[23, -1.5],[27, -1.5],[23, 25.1, 27]], {
            name: 'd (mm)', snapWidth: 0.1,
            baseline: { strokeColor: '#374151' },
            highline:  { strokeColor: '#3b82f6' },
            fillColor: '#3b82f6'
        });

        board.create('point', [function() { return sl.Value(); }, 0], {
            size: 8,
            color: function() {
                var d = sl.Value();
                return (d >= 24.5 && d <= 25.5) ? '#16a34a' : '#dc2626';
            },
            fixed: true, name: '', label: { fontSize: 0 }
        });

        board.create('text', [25, 2.5, function() {
            return 'd = ' + sl.Value().toFixed(1) + ' mm';
        }], { fontSize: 15, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' });

        board.create('text', [25, 3.8, function() {
            var d = sl.Value();
            var dentro = d >= 24.5 && d <= 25.5;
            return dentro
                ? 'P(d) = VERDADERO  -  eje APROBADO'
                : 'P(d) = FALSO  -  eje RECHAZADO';
        }], {
            fontSize: 13, fontWeight: 'bold', anchorX: 'middle',
            color: function() {
                return (sl.Value() >= 24.5 && sl.Value() <= 25.5)
                    ? '#16a34a' : '#dc2626';
            }
        });

        board.create('text', [25, -2.5,
            'P(d): 24.5 <= d <= 25.5'], {
            fontSize: 12, color: '#374151', anchorX: 'middle' });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
El deslizador controla el diámetro d (23–27 mm). El punto cambia de verde a rojo según si d está en [24.5, 25.5]. El texto muestra P(d) = VERDADERO/FALSO con el diagnóstico aprobado/rechazado.
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

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "¿Cuál es una proposición?" → "La presión hidráulica es 55 bar"
P2 (T/F): "'¡Detener la operación!' es una proposición." → Falso
P3 (MC): "¿Por qué 'temperatura alta' NO es proposición?" → "alta" es ambiguo
P4 (T/F): "Una proposición abierta P(x) tiene valor de verdad fijo." → Falso
P5 (Fill): "Sea P(x): x+3=10. El valor de P(7) es ___." → Verdadero
P6 (Fill): "Sea P(x): x+3=10. El valor de P(5) es ___." → Falso
P7 (MC): "Conjunto solución de P(x): x²=16 en ℤ:" → {-4, 4}
P8 (MC ingeniería): "Sistema evalúa P(d): 24.5≤d≤25.5. Eje con d=25.6..." → Se rechaza
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
