---
title: "S2·Auto Ejercicios de lógica"
---

# S2·Auto Ejercicios de lógica

:::{admonition} Esta es tu clase de autogestión
:class: tip

Esta clase la haces **por tu cuenta**, a tu ritmo. El objetivo es consolidar los cuatro conectivos lógicos de la Semana 2 antes de pasar a los diagramas de Venn.

**¿Qué hay aquí?**
- Repaso rápido de los cuatro conectivos
- Ejercicios resueltos con solución colapsable
- Un reto de ingeniería completo
- Quiz de cierre de la semana

**Tiempo estimado: 50 minutos**
:::

---

## Repaso rápido de la semana

| Clase | Tema | Lo más importante |
|-------|------|-------------------|
| S2·C1 | Proposición y valor de verdad | Enunciado declarativo V o F. Proposición abierta $P(x)$ |
| S2·C2 | Conjunto solución | $S = \{x \in U \mid P(x)\}$ — valores que hacen V la proposición |
| S2·C3 | Conjunción y disyunción | $\wedge$ = ambas V; $\vee$ = al menos una V |
| S2·C4 | Implicación y negación | $\neg$ invierte; $\rightarrow$ es F solo si $p$=V y $q$=F |

---

## Parte 1 — Proposiciones y valores de verdad

### Ejercicio 1

Clasifica cada enunciado: ¿es proposición? Si lo es, indica si es V, F, o depende del contexto.

| Enunciado | ¿Proposición? | Valor |
|-----------|:---:|:---:|
| "El acero tiene mayor densidad que el plástico" | | |
| "¿Cuántos engranes tiene la caja de cambios?" | | |
| "Cierra la válvula de seguridad" | | |
| "$3 \times 4 = 13$" | | |
| "El eje número 47 tiene diámetro de 25.1 mm" | | |
| "Esta pieza es pesada" | | |

::::{admonition} Ver solución
:class: dropdown

| Enunciado | ¿Proposición? | Valor |
|-----------|:---:|:---:|
| "El acero tiene mayor densidad que el plástico" | ✅ | V (siempre) |
| "¿Cuántos engranes tiene la caja de cambios?" | ❌ | Es pregunta |
| "Cierra la válvula de seguridad" | ❌ | Es orden |
| "$3 \times 4 = 13$" | ✅ | F (siempre) |
| "El eje número 47 tiene diámetro de 25.1 mm" | ✅ | Depende de la medición |
| "Esta pieza es pesada" | ❌ | "Pesada" es ambiguo |
::::

---

## Parte 2 — Conjunto solución

### Ejercicio 2

Encuentra el conjunto solución de cada proposición abierta.

**a)** $P(x): 2x - 1 = 7 \quad U = \mathbb{Z}$

**b)** $P(x): x^2 - 4 = 0 \quad U = \mathbb{Z}$

**c)** $P(x): x > 3 \wedge x < 8 \quad U = \{1, 2, 3, 4, 5, 6, 7, 8, 9\}$

**d)** $P(x): x < 2 \vee x > 6 \quad U = \{1, 2, 3, 4, 5, 6, 7\}$

::::{admonition} Ver solución
:class: dropdown

**a)** $2x - 1 = 7 \Rightarrow 2x = 8 \Rightarrow x = 4$

$$S = \{4\}$$

**b)** $x^2 = 4 \Rightarrow x = 2$ o $x = -2$

$$S = \{-2, 2\}$$

**c)** Se necesitan valores mayores que 3 **y** menores que 8 en el universo dado:

$$S = \{4, 5, 6, 7\}$$

**d)** Se necesitan valores menores que 2 **o** mayores que 6:

$$S = \{1, 7\}$$

(El 2 y el 6 no entran porque las condiciones son estrictas: $x < 2$ y $x > 6$)
::::

---

## Parte 3 — Tablas de verdad

### Ejercicio 3

Completa la tabla de verdad para la expresión $\neg p \wedge q$:

| $p$ | $q$ | $\neg p$ | $\neg p \wedge q$ |
|:---:|:---:|:--------:|:-----------------:|
| V | V | | |
| V | F | | |
| F | V | | |
| F | F | | |

::::{admonition} Ver solución
:class: dropdown

| $p$ | $q$ | $\neg p$ | $\neg p \wedge q$ |
|:---:|:---:|:--------:|:-----------------:|
| V | V | F | F |
| V | F | F | F |
| F | V | **V** | **V** |
| F | F | V | F |

La expresión $\neg p \wedge q$ es V únicamente cuando $p$ es F y $q$ es V.

Interpretación de ingeniería: "El sensor principal **no** detectó falla **y** el sensor secundario **sí** detectó falla" → situación inusual que requiere revisión.
::::

---

### Ejercicio 4

Completa la tabla de verdad para la expresión $p \rightarrow \neg q$:

| $p$ | $q$ | $\neg q$ | $p \rightarrow \neg q$ |
|:---:|:---:|:--------:|:----------------------:|
| V | V | | |
| V | F | | |
| F | V | | |
| F | F | | |

::::{admonition} Ver solución
:class: dropdown

| $p$ | $q$ | $\neg q$ | $p \rightarrow \neg q$ |
|:---:|:---:|:--------:|:----------------------:|
| V | V | F | **F** |
| V | F | V | V |
| F | V | F | V |
| F | F | V | V |

La expresión es F solo en la primera fila: $p$=V y $\neg q$=F (es decir, $p$=V y $q$=V).

Interpretación: "Si hay temperatura alta ($p$), entonces el enfriador **no** está activo ($\neg q$)" — es F cuando la temperatura es alta y el enfriador sí está activo, que sería el estado normal correcto.
::::

---

## Parte 4 — Negación y De Morgan

### Ejercicio 5

Escribe la negación correcta de cada enunciado. Luego indica cuál ley de De Morgan aplicaste.

**a)** "La presión está en rango ($p$) **y** el flujo es normal ($q$)"

**b)** "Hay vibración ($v$) **o** hay sobrecalentamiento ($s$)"

**c)** "Si la temperatura sube ($t$), el ventilador se activa ($f$)"

::::{admonition} Ver solución
:class: dropdown

**a)** $\neg(p \wedge q) \equiv \neg p \vee \neg q$

Negación: *"La presión **no** está en rango **o** el flujo **no** es normal"*

Ley aplicada: De Morgan 1

**b)** $\neg(v \vee s) \equiv \neg v \wedge \neg s$

Negación: *"**No** hay vibración **y** **no** hay sobrecalentamiento"*

Ley aplicada: De Morgan 2

**c)** $\neg(t \rightarrow f) \equiv t \wedge \neg f$

Negación: *"La temperatura subió **y** el ventilador **no** se activó"*

Esta es la condición de **falla** del sistema de enfriamiento.
::::

---

## Parte 5 — Reto de ingeniería

### Ejercicio 6 — Sistema de arranque completo

Un torno CNC tiene tres condiciones de seguridad:

- $p$: La velocidad del husillo es menor a 3000 RPM
- $q$: La guarda está cerrada
- $r$: El operador presionó el botón de inicio

**Condición de arranque:** $(p \wedge q) \rightarrow r$

Se lee: *"Si la velocidad está en rango y la guarda está cerrada, entonces el operador presionó inicio"*

**Preguntas:**

**a)** ¿En qué casos es F la condición de arranque?

**b)** Completa la tabla de verdad parcial:

| $p$ | $q$ | $r$ | $p \wedge q$ | $(p \wedge q) \rightarrow r$ |
|:---:|:---:|:---:|:------------:|:----------------------------:|
| V | V | V | | |
| V | V | F | | |
| V | F | V | | |
| F | F | F | | |

**c)** ¿Cuál fila representa el riesgo más alto? ¿Por qué?

::::{admonition} Ver solución
:class: dropdown

**a)** La implicación $(p \wedge q) \rightarrow r$ es F solo cuando la hipótesis es V y la conclusión es F:
- $p \wedge q$ = V (velocidad OK y guarda cerrada)  
- $r$ = F (el operador NO presionó inicio)

Esto significa: la máquina tiene todo listo para arrancar pero no hay autorización del operador — si arrancara de todos modos, sería una falla de seguridad.

**b)**

| $p$ | $q$ | $r$ | $p \wedge q$ | $(p \wedge q) \rightarrow r$ |
|:---:|:---:|:---:|:------------:|:----------------------------:|
| V | V | V | V | **V** ✅ Arranque autorizado |
| V | V | F | V | **F** ❌ Riesgo: condiciones OK sin autorización |
| V | F | V | F | **V** Guarda abierta, no cumple condición |
| F | F | F | F | **V** Ninguna condición cumplida |

**c)** La fila 2 ($p$=V, $q$=V, $r$=F) representa el mayor riesgo: las condiciones físicas están listas (velocidad OK, guarda cerrada) pero no hay autorización del operador. Si el sistema arrancara en este estado, violaría el protocolo de seguridad.
::::

---

## Visualización interactiva — Tablas de verdad

Selecciona una expresión y observa su tabla de verdad completa con interpretación.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s2auto-tablas" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s2auto-tablas', {
            boundingbox: [-1, 12, 14, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var combis = [
            [true,  true],
            [true,  false],
            [false, true],
            [false, false]
        ];

        var expresiones = [
            {
                nombre: 'NOT p',
                fn: function(p, q) { return !p; },
                col: 'NOT p'
            },
            {
                nombre: 'p AND q',
                fn: function(p, q) { return p && q; },
                col: 'p AND q'
            },
            {
                nombre: 'p OR q',
                fn: function(p, q) { return p || q; },
                col: 'p OR q'
            },
            {
                nombre: 'p -> q',
                fn: function(p, q) { return !p || q; },
                col: 'p -> q'
            }
        ];

        var modoIdx = 0;
        var celdas  = [];

        function vf(b) { return b ? 'V' : 'F'; }

        function dibujarTabla(idx) {
            celdas.forEach(function(c) { try { board.removeObject(c); } catch(e){} });
            celdas = [];

            var expr = expresiones[idx];
            var yBase = 10;
            var rowH  = 1.8;

            // Encabezado
            celdas.push(board.create('text', [1, yBase + 0.8, 'p'], {
                fontSize: 14, color: '#374151', fontWeight: 'bold', anchorX: 'middle' }));
            celdas.push(board.create('text', [3.5, yBase + 0.8, 'q'], {
                fontSize: 14, color: '#374151', fontWeight: 'bold', anchorX: 'middle' }));
            celdas.push(board.create('text', [7, yBase + 0.8, expr.col], {
                fontSize: 14, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));

            // Línea separadora
            celdas.push(board.create('segment', [[0, yBase], [12, yBase]], {
                strokeColor: '#374151', strokeWidth: 1 }));

            // Filas
            combis.forEach(function(c, i) {
                var p = c[0], q = c[1];
                var res = expr.fn(p, q);
                var y = yBase - (i + 1) * rowH + rowH / 2;
                var col = res ? '#16a34a' : '#dc2626';

                celdas.push(board.create('text', [1, y, vf(p)], {
                    fontSize: 13, color: p ? '#16a34a' : '#dc2626', anchorX: 'middle' }));
                celdas.push(board.create('text', [3.5, y, vf(q)], {
                    fontSize: 13, color: q ? '#16a34a' : '#dc2626', anchorX: 'middle' }));
                celdas.push(board.create('text', [7, y, vf(res)], {
                    fontSize: 14, color: col, fontWeight: 'bold', anchorX: 'middle' }));

                // Fondo de fila
                var bg = board.create('polygon', [
                    [0, y - rowH/2], [12, y - rowH/2],
                    [12, y + rowH/2], [0, y + rowH/2]
                ], {
                    fillColor: res ? '#f0fdf4' : '#fef2f2',
                    fillOpacity: 0.4,
                    strokeWidth: 0,
                    vertices: { visible: false }
                });
                celdas.push(bg);
            });
        }

        // Botones de expresión
        expresiones.forEach(function(e, i) {
            var btn = board.create('text', [1 + i * 3, -1, e.nombre], {
                fontSize: 12, color: '#374151', fontWeight: 'bold', anchorX: 'middle',
                cssStyle: 'cursor:pointer; padding:5px 10px; background:#f1f5f9; border-radius:6px;'
            });
            btn.on('down', function() {
                modoIdx = i;
                dibujarTabla(i);
            });
        });

        board.create('text', [6, -2.5,
            'Selecciona una expresion para ver su tabla de verdad'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle'
        });

        dibujarTabla(0);
    }
    init();
})();
</script>
```

---

## Descargar apuntes en PDF

Descarga el **apunte completo de esta sesión** (PDF preparado por la docente). No uses el menú del navegador «Imprimir»; ese genera otra versión de la página web.

```{raw} html
<div class="quizizz-link">
  <a href="../_static/s2_auto_ejercicios_logica.pdf" class="pdf-btn" download="s2_auto_ejercicios_logica.pdf">
    📄 Descargar apunte en PDF
  </a>
</div>
```

---

## Quiz de cierre — Semana 2

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSckv7fr9S6yzUua5Wf7daXZQ-wxTmHNVSjy_pSaltwfJRPHEg/viewform" target="_blank" class="quizizz-btn">
    📝 Quiz de cierre — Semana 2
  </a>
</div>
```



---

## Resumen de la semana

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Lo que debes saber hacer
* - Proposición
  - Identificar si un enunciado es proposición y determinar su valor de verdad
* - Proposición abierta
  - Evaluar $P(x)$ para valores concretos
* - Conjunto solución
  - Calcular $S = \{x \in U \mid P(x)\}$
* - Conjunción $\wedge$
  - Construir la tabla de verdad; saber que solo es V cuando ambas son V
* - Disyunción $\vee$
  - Construir la tabla de verdad; saber que es F solo cuando ambas son F
* - Negación $\neg$
  - Invertir el valor; aplicar De Morgan para expresiones compuestas
* - Implicación $\rightarrow$
  - Construir la tabla; identificar la condición de falla ($p$=V, $q$=F)
* - Conexión lógica ↔ conjuntos
  - $\wedge \leftrightarrow \cap$, $\vee \leftrightarrow \cup$, $\neg \leftrightarrow A'$
```

:::{admonition} Siguiente semana
:class: tip
La Semana 2 está completa. La próxima semana trabajaremos con **diagramas de Venn** — la representación visual que une conjuntos y lógica en una sola herramienta.

➡️ [Ir a S3·C1 Tipos de conjuntos](s3_c1_tipos_conjuntos.md)
:::
