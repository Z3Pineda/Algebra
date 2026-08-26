---
title: "S2·C3 Conjunción y disyunción"
---

# S2·C3 Conjunción y disyunción

:::{admonition} 🔧 Sistema de seguridad de una prensa hidráulica
:class: ingenieria

Una prensa hidráulica industrial solo puede activarse si se cumplen condiciones específicas de seguridad. El tablero de control tiene dos sensores principales:

- **$p$** — La presión hidráulica está en rango
- **$g$** — La guarda de protección está cerrada

El manual de seguridad dice:

> *"La prensa puede arrancar si la presión está bien **Y** la guarda está cerrada."*

¿Qué pasa si la presión está bien pero la guarda está abierta? ¿Puede arrancar?

Por otro lado, el sistema de **alarma** dice:

> *"La alarma suena si hay sobrecalentamiento **O** hay vibración excesiva."*

¿Cuándo NO suena la alarma?

La diferencia entre el **Y** y el **O** puede salvar vidas en un entorno industrial.
:::

**Pregunta detonadora**

> Un rociador de incendios se activa con humo **Y** calor. Una alarma suena con humo **O** calor. ¿Cuál de los dos es más fácil de activar? ¿Cuál es más seguro para evitar falsas activaciones?

---

## Teoría

### Conjunción $p \wedge q$ — el "Y" lógico

**Definición:**
La conjunción de dos proposiciones $p$ y $q$ es verdadera **únicamente** cuando **ambas** son verdaderas.

$$p \wedge q$$

Se lee: *"$p$ y $q$"*

**Tabla de verdad:**

| $p$ | $q$ | $p \wedge q$ |
|:---:|:---:|:------------:|
| V | V | **V** |
| V | F | F |
| F | V | F |
| F | F | F |

```{warning}
La conjunción es **F** en cuanto **una sola** de las partes sea F. Solo hay un caso donde es V: cuando las dos son V simultáneamente.
```

:::{admonition} 🔧 Ingeniería — conjunción
:class: ingenieria
**Condición de arranque:** $p \wedge g$

| $p$ (presión OK) | $g$ (guarda cerrada) | $p \wedge g$ | Resultado |
|:---:|:---:|:---:|---|
| V | V | **V** | ✅ La prensa arranca |
| V | F | F | 🔒 Bloqueada — guarda abierta |
| F | V | F | 🔒 Bloqueada — presión fuera de rango |
| F | F | F | 🔒 Bloqueada — ambas fallas |

Solo en el primer caso la prensa puede operar. Esto se llama **enclavamiento** (interlock) en sistemas industriales.
:::

---

### Disyunción $p \vee q$ — el "O" lógico

**Definición:**
La disyunción de dos proposiciones $p$ y $q$ es verdadera cuando **al menos una** de ellas es verdadera.

$$p \vee q$$

Se lee: *"$p$ o $q$"*

**Tabla de verdad:**

| $p$ | $q$ | $p \vee q$ |
|:---:|:---:|:----------:|
| V | V | V |
| V | F | **V** |
| F | V | **V** |
| F | F | F |

```{warning}
La disyunción es **F** solo cuando **ambas** son F. En cualquier otro caso es V.
```

:::{admonition} 🔧 Ingeniería — disyunción
:class: ingenieria
**Condición de alarma:** $s \vee v$ (sobrecalentamiento O vibración)

| $s$ (sobrecalentamiento) | $v$ (vibración) | $s \vee v$ | Resultado |
|:---:|:---:|:---:|---|
| V | V | V | 🔴 Alarma suena |
| V | F | V | 🔴 Alarma suena |
| F | V | V | 🔴 Alarma suena |
| F | F | **F** | ✅ Sistema normal |

La alarma solo **no suena** cuando los dos sensores están en cero. Basta con que uno detecte algo para activarla.
:::

---

### Diferencia clave entre $\wedge$ y $\vee$

| | Conjunción $\wedge$ | Disyunción $\vee$ |
|---|:---:|:---:|
| Es V cuando | **Ambas** son V | **Al menos una** es V |
| Es F cuando | **Al menos una** es F | **Ambas** son F |
| Número de casos V | 1 de 4 | 3 de 4 |
| Más restrictivo | ✅ Sí | ❌ No |

---

### Conjunto solución de proposiciones compuestas

La conjunción y la disyunción también definen conjuntos solución:

**Con conjunción ($\wedge$):**
$$S = \{x \in U \mid P(x) \wedge Q(x)\} = \{x \in U \mid P(x)\} \cap \{x \in U \mid Q(x)\}$$

La conjunción corresponde a la **intersección** de conjuntos.

**Con disyunción ($\vee$):**
$$S = \{x \in U \mid P(x) \vee Q(x)\} = \{x \in U \mid P(x)\} \cup \{x \in U \mid Q(x)\}$$

La disyunción corresponde a la **unión** de conjuntos.

:::{admonition} 🔧 Conexión conjuntos ↔ lógica
:class: ingenieria
| Lógica | Conjuntos | Ingeniería |
|--------|-----------|------------|
| $P(x) \wedge Q(x)$ | $A \cap B$ | Piezas que cumplen **ambas** especificaciones |
| $P(x) \vee Q(x)$ | $A \cup B$ | Piezas que cumplen **al menos una** |
| $\neg P(x)$ | $A'$ | Piezas que **no** cumplen la especificación |

Esta tabla es el puente entre la Unidad 1 y la lógica proposicional completa.
:::

---

### Ejemplo completo

$$U = \{1, 2, 3, 4, 5, 6, 7, 8, 9, 10\}$$
$$P(x): x \text{ es par} \qquad Q(x): x > 5$$

$$A = \{x \in U \mid P(x)\} = \{2, 4, 6, 8, 10\}$$
$$B = \{x \in U \mid Q(x)\} = \{6, 7, 8, 9, 10\}$$

$$S_{\wedge} = A \cap B = \{6, 8, 10\} \quad \leftarrow \text{pares Y mayores que 5}$$
$$S_{\vee} = A \cup B = \{2, 4, 6, 7, 8, 9, 10\} \quad \leftarrow \text{pares O mayores que 5}$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_CONJUNCION_DISYUNCION"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Mostrar los dos sensores de la prensa (p y g) como interruptores
2. Animar la tabla de verdad de p∧g: fila por fila, iluminando cada combinación
3. Resaltar que solo una fila da V — la más restrictiva
4. Cambiar al sistema de alarma (s∨v): animar la tabla
5. Resaltar que tres filas dan V — basta un sensor
6. Comparación visual: ∧ tiene 1 caso V, ∨ tiene 3 casos V
7. Cierre: la conexión ∧↔∩ y ∨↔∪ con diagramas de Venn
```

---

## Visualización interactiva

Activa o desactiva los sensores $p$ y $q$ con los botones y observa el resultado de $p \wedge q$ y $p \vee q$ simultáneamente.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s2c3-conjdisy" class="jsxgraph-container" style="height:480px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s2c3-conjdisy', {
            boundingbox: [-1, 10, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var valP = false;
        var valQ = false;

        // --- Indicadores de sensores ---
        var ledP = board.create('circle', [[2, 7.5], 0.6], {
            fillColor: '#9ca3af', fillOpacity: 1,
            strokeColor: '#374151', strokeWidth: 1
        });
        var ledQ = board.create('circle', [[6, 7.5], 0.6], {
            fillColor: '#9ca3af', fillOpacity: 1,
            strokeColor: '#374151', strokeWidth: 1
        });

        board.create('text', [2, 6.5, 'p'], {
            fontSize: 14, color: '#374151', fontWeight: 'bold', anchorX: 'middle'
        });
        board.create('text', [6, 6.5, 'q'], {
            fontSize: 14, color: '#374151', fontWeight: 'bold', anchorX: 'middle'
        });

        var txtP = board.create('text', [2, 8.8, 'p = F'], {
            fontSize: 13, color: '#dc2626', anchorX: 'middle', fontWeight: 'bold'
        });
        var txtQ = board.create('text', [6, 8.8, 'q = F'], {
            fontSize: 13, color: '#dc2626', anchorX: 'middle', fontWeight: 'bold'
        });

        // --- Resultados ---
        var resConj = board.create('text', [2, 4, 'p AND q = F'], {
            fontSize: 15, color: '#dc2626', anchorX: 'middle', fontWeight: 'bold'
        });
        var resDisy = board.create('text', [6, 4, 'p OR q = F'], {
            fontSize: 15, color: '#dc2626', anchorX: 'middle', fontWeight: 'bold'
        });

        // Etiquetas operaciones
        board.create('text', [2, 5, 'Conjuncion (Y)'], {
            fontSize: 12, color: '#6b7280', anchorX: 'middle'
        });
        board.create('text', [6, 5, 'Disyuncion (O)'], {
            fontSize: 12, color: '#6b7280', anchorX: 'middle'
        });

        // Descripción ingeniería
        var descConj = board.create('text', [2, 2.8, 'Prensa: BLOQUEADA'], {
            fontSize: 11, color: '#dc2626', anchorX: 'middle', fontStyle: 'italic'
        });
        var descDisy = board.create('text', [6, 2.8, 'Alarma: SILENCIO'], {
            fontSize: 11, color: '#16a34a', anchorX: 'middle', fontStyle: 'italic'
        });

        // --- Botones ---
        var btnP = board.create('text', [2, 1.2, 'CLIC: cambiar p'], {
            fontSize: 12, color: '#1d4ed8', anchorX: 'middle', fontWeight: 'bold',
            cssStyle: 'cursor:pointer; padding:6px 14px; background:#dbeafe; border-radius:8px;'
        });
        var btnQ = board.create('text', [6, 1.2, 'CLIC: cambiar q'], {
            fontSize: 12, color: '#7c3aed', anchorX: 'middle', fontWeight: 'bold',
            cssStyle: 'cursor:pointer; padding:6px 14px; background:#ede9fe; border-radius:8px;'
        });

        function actualizar() {
            var conj = valP && valQ;
            var disy = valP || valQ;

            // LEDs
            ledP.setAttribute({ fillColor: valP ? '#16a34a' : '#9ca3af' });
            ledQ.setAttribute({ fillColor: valQ ? '#16a34a' : '#9ca3af' });

            // Textos valores
            txtP.setText('p = ' + (valP ? 'V' : 'F'));
            txtP.setAttribute({ color: valP ? '#16a34a' : '#dc2626' });
            txtQ.setText('q = ' + (valQ ? 'V' : 'F'));
            txtQ.setAttribute({ color: valQ ? '#16a34a' : '#dc2626' });

            // Resultados
            resConj.setText('p AND q = ' + (conj ? 'V' : 'F'));
            resConj.setAttribute({ color: conj ? '#16a34a' : '#dc2626' });
            resDisy.setText('p OR q = ' + (disy ? 'V' : 'F'));
            resDisy.setAttribute({ color: disy ? '#16a34a' : '#dc2626' });

            // Descripción
            descConj.setText(conj ? 'Prensa: PUEDE ARRANCAR' : 'Prensa: BLOQUEADA');
            descConj.setAttribute({ color: conj ? '#16a34a' : '#dc2626' });
            descDisy.setText(disy ? 'Alarma: SONANDO' : 'Alarma: SILENCIO');
            descDisy.setAttribute({ color: disy ? '#dc2626' : '#16a34a' });

            board.update();
        }

        btnP.on('down', function() { valP = !valP; actualizar(); });
        btnQ.on('down', function() { valQ = !valQ; actualizar(); });

        board.create('text', [4, -1.5,
            'Haz clic en los botones para cambiar el valor de p y q'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle'
        });

        // Línea divisoria
        board.create('segment', [[4, -0.5],[4, 9.5]], {
            strokeColor: '#e2e8f0', strokeWidth: 1, dash: 2
        });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Dos botones cambian el valor de p y q (V/F). Los LEDs cambian de gris a verde. Los resultados de p∧q y p∨q se actualizan en tiempo real con la interpretación de ingeniería: "Prensa: PUEDE ARRANCAR / BLOQUEADA" y "Alarma: SONANDO / SILENCIO".
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdoVjyyP-_GbEHo-EHr3U0WzvQoqYfeZ0-yALxyJ1C6wxFFtQ/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Conjunción y disyunción
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (10 preguntas, ~12 min):**

P1 (MC): "Si p=V y q=F, ¿cuál es p∧q?" → F
P2 (MC): "Si p=F y q=F, ¿cuál es p∨q?" → F
P3 (MC): "Si p=V y q=F, ¿cuál es p∨q?" → V
P4 (T/F): "p∧q es V cuando al menos una proposición es V." → Falso (necesita ambas)
P5 (T/F): "p∨q es F solo cuando ambas proposiciones son F." → Verdadero
P6 (MC ingeniería): "La prensa arranca con p∧g. Si p=V y g=F, ¿arranca?"
→ No — g=F hace que p∧g=F

P7 (MC ingeniería): "La alarma suena con s∨v. Si s=F y v=V, ¿suena?"
→ Sí — v=V hace que s∨v=V

P8 (MC): "¿A qué operación de conjuntos corresponde P(x)∧Q(x)?"
→ A∩B (intersección)

P9 (MC): "¿A qué operación corresponde P(x)∨Q(x)?"
→ A∪B (unión)

P10 (Fill): "Sea P(x): x es par, Q(x): x>5, U={1,...,10}.
El conjunto solución de P(x)∧Q(x) es {___,___,___}." → 6, 8, 10
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 20 20 30 30

* - Conectivo
  - Símbolo
  - Verdadero cuando
  - Equivalente en conjuntos
* - Conjunción
  - $p \wedge q$
  - **Ambas** son V
  - $A \cap B$ (intersección)
* - Disyunción
  - $p \vee q$
  - **Al menos una** es V
  - $A \cup B$ (unión)
* - Falso cuando
  - $\wedge$: alguna es F
  - $\vee$: ambas son F
  - —
```

:::{admonition} Siguiente clase
:class: tip
Ya dominas la conjunción y la disyunción. En la siguiente clase completaremos los conectivos lógicos con la **implicación** y la **negación** — los que permiten describir relaciones causa-efecto en sistemas de control.

➡️ [Ir a S2·C4 Implicación y negación](s2_c4_implicacion_negacion.md)
:::
