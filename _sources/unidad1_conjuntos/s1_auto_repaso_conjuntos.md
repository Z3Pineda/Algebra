---
title: "S1·Auto Repaso de conjuntos"
---

# S1·Auto Repaso de conjuntos

:::{admonition} Esta es tu clase de autogestión
:class: tip

Esta clase la haces **por tu cuenta**, a tu ritmo, sin el docente presente. El objetivo es reforzar todo lo visto en la Semana 1.

**¿Qué hay aquí?**
- Repaso visual de los conceptos clave
- Ejercicios resueltos para guiarte
- Un reto de ingeniería para aplicar todo junto
- Un quiz final para medir cómo vas

**Tiempo estimado: 50 minutos**
:::

---

## Repaso rápido de la semana

| Clase | Tema | Lo más importante |
|-------|------|-------------------|
| S1·C1 | Diagnóstico | Regla de signos, fracciones, orden de operaciones |
| S1·C2 | Concepto de conjunto | Colección bien definida, $\in$, $\notin$, $\emptyset$, $\|A\|$ |
| S1·C3 | Representación | Extensión, comprensión $\{x \in U \mid P(x)\}$, Venn |
| S1·C4 | Operaciones | $A \cup B$, $A \cap B$, $A - B$, $A'$, PIE |

---

## Ejercicios

### Ejercicio 1

Sea $U = \{1,2,3,4,5,6,7,8,9,10\}$ y $A = \{2,4,6,8,10\}$.

**a)** ¿Cuántos elementos tiene $A$? ¿Y $U$?  
**b)** Escribe $A$ por comprensión.  
**c)** ¿Es $7 \in A$? ¿Es $7 \in U$?  
**d)** Calcula $A'$.

::::{admonition} Ver solución
:class: dropdown
**a)** $|A| = 5$, $|U| = 10$

**b)** $A = \{x \in \mathbb{N} \mid x \text{ es par},\ 1 \leq x \leq 10\}$

**c)** $7 \notin A$ (7 es impar), pero $7 \in U$

**d)** $A' = \{1, 3, 5, 7, 9\}$
::::

---

### Ejercicio 2

Sean $A = \{1, 3, 5, 7, 9\}$, $B = \{1, 2, 3, 4, 5\}$, $U = \{1,2,3,4,5,6,7,8,9,10\}$

Calcula: **a)** $A \cup B$ **b)** $A \cap B$ **c)** $A - B$ **d)** $B - A$ **e)** $A'$ **f)** $|A \cup B|$ con PIE

::::{admonition} Ver solución
:class: dropdown
**a)** $A \cup B = \{1, 2, 3, 4, 5, 7, 9\}$

**b)** $A \cap B = \{1, 3, 5\}$

**c)** $A - B = \{7, 9\}$

**d)** $B - A = \{2, 4\}$

**e)** $A' = \{2, 4, 6, 8, 10\}$

**f)** $|A \cup B| = 5 + 5 - 3 = 7$ ✅
::::

---

### Ejercicio 3 — Ingeniería

En una revisión de 100 motores:
- 42 presentaron vibración excesiva ($V$)
- 35 presentaron sobrecalentamiento ($S$)
- 18 presentaron **ambas** fallas

Responde: **a)** ¿Cuántos con al menos una falla? **b)** ¿Solo vibración? **c)** ¿Solo calor? **d)** ¿Sin fallas?

::::{admonition} Ver solución
:class: dropdown
**a)** $|V \cup S| = 42 + 35 - 18 = 59$

**b)** Solo V: $42 - 18 = 24$

**c)** Solo S: $35 - 18 = 17$

**d)** Sin fallas: $100 - 59 = 41$

Verificación: $24 + 18 + 17 + 41 = 100$ ✅
::::

---

## Visualización interactiva — PIE con deslizadores

Mueve los deslizadores y observa cómo cambia el Principio de Inclusión-Exclusión en tiempo real.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s1auto-pie" class="jsxgraph-container"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s1auto-pie', {
            boundingbox: [-1, 11, 15, -4],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slA = board.create('slider', [[8, 9.5],[13, 9.5],[0, 30, 50]], {
            name: '|A|', snapWidth: 1,
            baseline: { strokeColor: '#3b82f6' },
            highline:  { strokeColor: '#3b82f6' },
            fillColor: '#3b82f6'
        });
        var slB = board.create('slider', [[8, 8],[13, 8],[0, 25, 50]], {
            name: '|B|', snapWidth: 1,
            baseline: { strokeColor: '#f97316' },
            highline:  { strokeColor: '#f97316' },
            fillColor: '#f97316'
        });
        var slInt = board.create('slider', [[8, 6.5],[13, 6.5],[0, 10, 30]], {
            name: '|AnB|', snapWidth: 1,
            baseline: { strokeColor: '#7c3aed' },
            highline:  { strokeColor: '#7c3aed' },
            fillColor: '#7c3aed'
        });

        board.create('circle', [[3, 5.5], 3], {
            fillColor: '#dbeafe', fillOpacity: 0.4,
            strokeColor: '#3b82f6', strokeWidth: 2 });
        board.create('circle', [[6, 5.5], 3], {
            fillColor: '#ffedd5', fillOpacity: 0.4,
            strokeColor: '#f97316', strokeWidth: 2 });
        board.create('text', [1.2, 8.8, 'A'], {
            fontSize: 15, color: '#1d4ed8', fontWeight: 'bold' });
        board.create('text', [8, 8.8, 'B'], {
            fontSize: 15, color: '#c2410c', fontWeight: 'bold' });

        board.create('text', [8, 5, function() {
            var a = Math.round(slA.Value());
            var b = Math.round(slB.Value());
            var i = Math.min(Math.round(slInt.Value()), Math.min(a, b));
            return '|A U B| = ' + a + ' + ' + b + ' - ' + i + ' = ' + (a+b-i);
        }], { fontSize: 14, color: '#1d4ed8', fontWeight: 'bold' });

        board.create('text', [8, 3.8, function() {
            var a = Math.round(slA.Value());
            var i = Math.min(Math.round(slInt.Value()), a);
            return 'Solo A: ' + (a - i);
        }], { fontSize: 12, color: '#1d4ed8' });

        board.create('text', [8, 3.0, function() {
            var b = Math.round(slB.Value());
            var i = Math.min(Math.round(slInt.Value()), b);
            return 'Solo B: ' + (b - i);
        }], { fontSize: 12, color: '#c2410c' });

        board.create('text', [8, 2.2, function() {
            var a = Math.round(slA.Value());
            var b = Math.round(slB.Value());
            var i = Math.min(Math.round(slInt.Value()), Math.min(a,b));
            return 'A n B: ' + i;
        }], { fontSize: 12, color: '#7c3aed' });

        board.create('text', [0, -1.5,
            'Mueve los deslizadores y observa como cambia el PIE'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic'
        });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Tres deslizadores controlan |A|, |B| y |A∩B|. El PIE se calcula en tiempo real. Permite explorar casos extremos: disjuntos (|A∩B|=0) y subconjunto (|A∩B|=|A|).
```

---

## Quiz de cierre

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfEyKGEIjYzaOsIv5JlUZGj6XjSCDc8T2zfBLXprMZOzi4XAQ/viewform" target="_blank" class="quizizz-btn">
    📝 Quiz de cierre — Semana 1
  </a>
</div>
```

```{note}
**Para el docente — Quiz Quizizz (12 preguntas, ~15 min):**

Concepto (3): |A|=5 con A={2,4,6,8,10}, A'={1,3,5,7,9} con U={1..10}, 7∉A pero 7∈U
Representación (2): A∪B={1,2,3,4,5,7,9} con A={1,3,5,7,9} B={1,2,3,4,5}, A∩B={1,3,5}
Operaciones (4): A-B={7,9}, B-A={2,4}, A'={2,4,6,8,10}, |A∪B|=5+5-3=7
PIE ingeniería (3): |V∪S|=42+35-18=59, solo V=42-18=24, sin fallas=100-59=41
```

---

## Resumen de la semana

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Lo que debes saber hacer
* - Conjunto bien definido
  - Determinar si una agrupación es o no un conjunto
* - Notación
  - Escribir $x \in A$, $x \notin A$, $|A|$, $\emptyset$
* - Extensión
  - Listar todos los elementos entre llaves
* - Comprensión
  - Escribir $A = \{x \in U \mid P(x)\}$ y leerlo en voz alta
* - Unión
  - Calcular $A \cup B$ sin repetir elementos
* - Intersección
  - Calcular $A \cap B$
* - Diferencia
  - Calcular $A - B$ y saber que $A - B \neq B - A$
* - Complemento
  - Calcular $A'$ dado $U$
* - PIE
  - Aplicar $|A \cup B| = |A| + |B| - |A \cap B|$
```

:::{admonition} Siguiente clase
:class: tip
La Semana 1 está completa. La próxima clase arrancamos con **proposiciones lógicas** — el lenguaje que conecta el álgebra con la toma de decisiones en ingeniería.

➡️ [Ir a S2·C1 Proposición y valor de verdad](s2_c1_proposicion_valor_verdad.md)
:::
