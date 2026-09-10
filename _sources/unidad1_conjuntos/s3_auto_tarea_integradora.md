---
title: "S3·Auto Tarea integradora — Unidad 1"
---

# S3·Auto Tarea integradora — Unidad 1

:::{admonition} Esta es tu clase de autogestión y preparación para el quiz
:class: tip

Esta es la **última clase antes del quiz de la Unidad 1**. Integra todos los temas de las tres semanas:

- Conjuntos y operaciones (Semana 1)
- Proposiciones y conectivos lógicos (Semana 2)
- Tipos de conjuntos y diagramas de Venn (Semana 3)

**¿Qué hay aquí?**
- 4 problemas integradores con solución colapsable
- Una visualización de repaso general
- El quiz final de la Unidad 1

**Tiempo estimado: 50 minutos**
:::

---

## Repaso general — Unidad 1 completa

| Semana | Temas clave |
|--------|-------------|
| **S1** | Conjuntos, notación, pertenencia, extensión, comprensión, operaciones ($\cup$, $\cap$, $-$, $'$), PIE |
| **S2** | Proposición, valor de verdad, conjunto solución, $\wedge$, $\vee$, $\neg$, $\rightarrow$, De Morgan |
| **S3** | Tipos de conjuntos, igualdad vs. equivalencia, $\mathcal{P}(A)$, Venn de 2 y 3 conjuntos, PIE de 3 |

---

## Problema 1 — Operaciones con conjuntos

Sean $U = \{1,2,3,4,5,6,7,8,9,10\}$, $A = \{1,3,5,7,9\}$, $B = \{2,3,5,8,9\}$, $C = \{3,6,9\}$.

**a)** Calcula $A \cup B$

**b)** Calcula $A \cap C$

**c)** Calcula $(A \cup B) - C$

**d)** Calcula $B'$

**e)** Verifica con el PIE: $|A \cup B|$

**f)** ¿Es $C \subseteq A$? ¿Es $C \subset A$?

::::{admonition} Ver solución
:class: dropdown

**a)** $A \cup B = \{1,2,3,5,7,8,9\}$

**b)** $A \cap C = \{3, 9\}$ (elementos comunes a A y C)

**c)** $A \cup B = \{1,2,3,5,7,8,9\}$, quitamos lo que está en C={3,6,9}:
$(A \cup B) - C = \{1,2,5,7,8\}$

**d)** $B' = U - B = \{1,4,5,6,7,9,10\}$

**e)** $A \cap B = \{3,5,9\}$, $|A \cap B| = 3$

$|A \cup B| = |A| + |B| - |A \cap B| = 5 + 5 - 3 = 7$ ✅ (coincide con el inciso a)

**f)** $C = \{3,6,9\}$. ¿Está el 6 en A? No. → $C \not\subseteq A$

Como $C$ no es subconjunto de $A$, tampoco es subconjunto propio.
::::

---

## Problema 2 — Proposiciones y lógica

Sea $p$: "La pieza tiene el diámetro correcto" y $q$: "La pieza no tiene rebaba".

**a)** Escribe en palabras: $p \wedge q$, $p \vee \neg q$, $p \rightarrow q$

**b)** Si $p$=V y $q$=F, evalúa: $p \wedge q$, $\neg p \vee q$, $p \rightarrow q$

**c)** ¿Cuál es la negación correcta de $p \wedge q$?

**d)** ¿Cuándo es F la proposición $p \rightarrow q$?

**e)** ¿A qué operación de conjuntos corresponde $p \wedge q$? ¿Y $p \vee q$?

::::{admonition} Ver solución
:class: dropdown

**a)**
- $p \wedge q$: "La pieza tiene el diámetro correcto **y** no tiene rebaba" (pieza perfecta)
- $p \vee \neg q$: "La pieza tiene el diámetro correcto **o** tiene rebaba"
- $p \rightarrow q$: "Si la pieza tiene el diámetro correcto, entonces no tiene rebaba"

**b)** Con $p$=V, $q$=F:
- $p \wedge q = $ V $\wedge$ F $=$ **F**
- $\neg p \vee q = $ F $\vee$ F $=$ **F**
- $p \rightarrow q = $ **F** (hipótesis V, conclusión F → falla)

**c)** Por De Morgan: $\neg(p \wedge q) \equiv \neg p \vee \neg q$

"La pieza **no** tiene el diámetro correcto **o** tiene rebaba"

**d)** $p \rightarrow q$ es F solo cuando $p$=V y $q$=F: el diámetro es correcto pero la pieza tiene rebaba. La especificación dice que si el diámetro está bien, no debería haber rebaba — si la hay, hay una contradicción.

**e)** $p \wedge q \leftrightarrow A \cap B$ (intersección) | $p \vee q \leftrightarrow A \cup B$ (unión)
::::

---

## Problema 3 — Diagrama de Venn y PIE

En una empresa de 80 empleados se realizó una encuesta sobre idiomas:

- Hablan inglés ($I$): 45
- Hablan francés ($F$): 30
- Hablan alemán ($A$): 25
- $I \cap F$: 15
- $I \cap A$: 12
- $F \cap A$: 8
- $I \cap F \cap A$: 5

**a)** ¿Cuántos hablan al menos un idioma extranjero?

**b)** ¿Cuántos no hablan ninguno?

**c)** Calcula las 8 regiones del Venn.

**d)** ¿Cuántos hablan exactamente un idioma?

**e)** ¿Cuántos hablan exactamente dos idiomas?

::::{admonition} Ver solución
:class: dropdown

**a)** PIE:
$$|I \cup F \cup A| = 45+30+25-15-12-8+5 = 70$$

**b)** Sin ninguno: $80 - 70 = 10$ empleados

**c)** Las 8 regiones:

| Región | Cálculo | Resultado |
|--------|---------|:---------:|
| Solo I | $45-15-12+5$ | 23 |
| Solo F | $30-15-8+5$ | 12 |
| Solo A | $25-12-8+5$ | 10 |
| I∩F (no A) | $15-5$ | 10 |
| I∩A (no F) | $12-5$ | 7 |
| F∩A (no I) | $8-5$ | 3 |
| I∩F∩A | — | 5 |
| Ninguno | — | 10 |
| **Total** | | **80 ✅** |

**d)** Exactamente un idioma: $23+12+10 = 45$

**e)** Exactamente dos idiomas: $10+7+3 = 20$
::::

---

## Problema 4 — Problema integrador completo

Un sistema de acceso a una zona restringida de una planta tiene tres condiciones:

- $p$: El empleado tiene credencial vigente
- $q$: El sensor biométrico lo reconoció
- $r$: El turno activo coincide con el horario del empleado

**Condición de acceso:** $p \wedge (q \vee r)$

**a)** ¿Cuántas de las 8 combinaciones permiten el acceso?

**b)** Si $p$=V, $q$=F, $r$=V, ¿se permite el acceso?

**c)** Escribe la negación de la condición de acceso y simplifica con De Morgan.

**d)** El área de sistemas detectó que en 100 intentos de acceso:
- 70 tenían credencial vigente ($p$)
- 60 fueron reconocidos biométricamente ($q$)
- 80 tenían turno activo ($r$)
- $p \cap q$: 50, $p \cap r$: 55, $q \cap r$: 45, $p \cap q \cap r$: 40

¿Cuántos intentos tuvieron al menos una condición cumplida?

::::{admonition} Ver solución
:class: dropdown

**a)** Tabla de verdad de $p \wedge (q \vee r)$:

| p | q | r | q∨r | p∧(q∨r) |
|:---:|:---:|:---:|:---:|:---:|
| V | V | V | V | **V** ✅ |
| V | V | F | V | **V** ✅ |
| V | F | V | V | **V** ✅ |
| V | F | F | F | F |
| F | V | V | V | F |
| F | V | F | V | F |
| F | F | V | V | F |
| F | F | F | F | F |

**3 de 8 combinaciones** permiten el acceso (todas requieren $p$=V).

**b)** $p$=V, $q$=F, $r$=V: $q \vee r = $ V → $p \wedge$ V = V → **acceso permitido** ✅

**c)** $\neg[p \wedge (q \vee r)]$

Paso 1 — De Morgan exterior: $\neg p \vee \neg(q \vee r)$

Paso 2 — De Morgan interior: $\neg p \vee (\neg q \wedge \neg r)$

En palabras: *"El acceso se niega si el empleado no tiene credencial vigente, O si no fue reconocido biométricamente Y su turno no está activo."*

**d)** PIE de 3 conjuntos:

$|p \cup q \cup r| = 70+60+80-50-55-45+40 = 100$

**Los 100 intentos tuvieron al menos una condición cumplida.** (El resultado 100 no es coincidencia — implica que ningún intento fue completamente negativo.)
::::

---

## Visualización interactiva — Repaso general

Selecciona un tema para repasar su concepto visual clave.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s3auto-repaso" class="jsxgraph-container" style="height:480px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s3auto-repaso', {
            boundingbox: [-1, 11, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var temas = [
            { label: 'Operaciones', fn: mostrarOperaciones },
            { label: 'Tabla verdad', fn: mostrarTabla },
            { label: 'Venn 2', fn: mostrarVenn2 },
            { label: 'Venn 3', fn: mostrarVenn3 }
        ];

        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e){} });
            dinamicos = [];
        }

        function mostrarOperaciones() {
            limpiar();
            dinamicos.push(board.create('text', [6, 9.5, 'Operaciones con conjuntos'], {
                fontSize: 16, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));
            var ops = [
                ['A u B', 'En A O en B', '#3b82f6'],
                ['A n B', 'En A Y en B', '#7c3aed'],
                ['A - B', 'En A pero NO en B', '#dc2626'],
                ["A'",    'NO en A (en U)', '#16a34a'],
                ['|AuB|', '|A|+|B|-|AnB|', '#f59e0b']
            ];
            ops.forEach(function(op, i) {
                dinamicos.push(board.create('text', [1, 8-i*1.4, op[0]], {
                    fontSize: 14, color: op[2], fontWeight: 'bold' }));
                dinamicos.push(board.create('text', [4, 8-i*1.4, op[1]], {
                    fontSize: 13, color: '#374151' }));
            });
        }

        function mostrarTabla() {
            limpiar();
            dinamicos.push(board.create('text', [6, 9.5, 'Tabla de verdad resumen'], {
                fontSize: 16, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));
            var combis = [[true,true],[true,false],[false,true],[false,false]];
            var headers = ['p','q','¬p','p∧q','p∨q','p→q'];
            headers.forEach(function(h, j) {
                dinamicos.push(board.create('text', [1+j*1.8, 8.5, h], {
                    fontSize: 12, color: '#374151', fontWeight: 'bold', anchorX: 'middle' }));
            });
            combis.forEach(function(c, i) {
                var p=c[0], q=c[1];
                var vals = [p, q, !p, p&&q, p||q, !p||q];
                vals.forEach(function(v, j) {
                    var col = v ? '#16a34a' : '#dc2626';
                    dinamicos.push(board.create('text', [1+j*1.8, 7.2-i*1.5, v?'V':'F'], {
                        fontSize: 13, color: col, fontWeight: 'bold', anchorX: 'middle' }));
                });
            });
        }

        function mostrarVenn2() {
            limpiar();
            dinamicos.push(board.create('text', [6, 9.5, 'Venn de 2 conjuntos — 4 regiones'], {
                fontSize: 15, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));
            board.create('polygon', [[0.5,1],[11.5,1],[11.5,8.5],[0.5,8.5]], {
                fillColor: '#f8fafc', fillOpacity: 1,
                strokeColor: '#374151', strokeWidth: 1,
                vertices: { visible: false }
            });
            dinamicos.push(board.create('circle', [[4, 5], 2.5], {
                fillColor: '#dbeafe', fillOpacity: 0.4, strokeColor: '#1d4ed8', strokeWidth: 2 }));
            dinamicos.push(board.create('circle', [[8, 5], 2.5], {
                fillColor: '#ffedd5', fillOpacity: 0.4, strokeColor: '#c2410c', strokeWidth: 2 }));
            dinamicos.push(board.create('text', [2.2, 7.8, 'A'], { fontSize: 14, color: '#1d4ed8', fontWeight: 'bold' }));
            dinamicos.push(board.create('text', [9.8, 7.8, 'B'], { fontSize: 14, color: '#c2410c', fontWeight: 'bold' }));
            dinamicos.push(board.create('text', [2.2, 5, 'Solo A'], { fontSize: 11, color: '#1d4ed8', anchorX: 'middle' }));
            dinamicos.push(board.create('text', [6, 5, 'A n B'], { fontSize: 11, color: '#7c3aed', anchorX: 'middle' }));
            dinamicos.push(board.create('text', [9.8, 5, 'Solo B'], { fontSize: 11, color: '#c2410c', anchorX: 'middle' }));
            dinamicos.push(board.create('text', [1, 2, 'Exterior'], { fontSize: 10, color: '#6b7280' }));
        }

        function mostrarVenn3() {
            limpiar();
            dinamicos.push(board.create('text', [6, 9.5, 'Venn de 3 conjuntos — 8 regiones'], {
                fontSize: 15, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));
            dinamicos.push(board.create('circle', [[4.5, 6], 2.5], {
                fillColor: '#dbeafe', fillOpacity: 0.25, strokeColor: '#1d4ed8', strokeWidth: 2 }));
            dinamicos.push(board.create('circle', [[7.5, 6], 2.5], {
                fillColor: '#ffedd5', fillOpacity: 0.25, strokeColor: '#c2410c', strokeWidth: 2 }));
            dinamicos.push(board.create('circle', [[6, 3.8], 2.5], {
                fillColor: '#dcfce7', fillOpacity: 0.25, strokeColor: '#15803d', strokeWidth: 2 }));
            dinamicos.push(board.create('text', [3, 9, 'A'], { fontSize: 14, color: '#1d4ed8', fontWeight: 'bold' }));
            dinamicos.push(board.create('text', [9, 9, 'B'], { fontSize: 14, color: '#c2410c', fontWeight: 'bold' }));
            dinamicos.push(board.create('text', [6, 0.8, 'C'], { fontSize: 14, color: '#15803d', fontWeight: 'bold' }));
            dinamicos.push(board.create('text', [6, 5.3, 'Centro'], { fontSize: 10, color: '#374151', anchorX: 'middle' }));
            dinamicos.push(board.create('text', [6, -1, '2^3 = 8 regiones'], { fontSize: 12, color: '#7c3aed', anchorX: 'middle', fontWeight: 'bold' }));
        }

        // Botones
        temas.forEach(function(t, i) {
            var btn = board.create('text', [1.5 + i*3, -2, t.label], {
                fontSize: 12, color: '#374151', fontWeight: 'bold', anchorX: 'middle',
                cssStyle: 'cursor:pointer; padding:5px 10px; background:#f1f5f9; border-radius:6px;'
            });
            btn.on('down', function() { t.fn(); });
        });

        mostrarOperaciones();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Cuatro botones de repaso: Operaciones (tabla resumen), Tabla de verdad (los 4 conectivos), Venn 2 (4 regiones), Venn 3 (8 regiones). Útil para repasar visualmente antes del quiz.
```

---

## Quiz final — Unidad 1

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeFOpqGRfBT8a5wrZ9-VHe9TkM2Jp6Q7-lOWQBFsLTvw5ypUw/viewform" target="_blank" class="quizizz-btn">
    📝 Quiz final — Unidad 1 completa
  </a>
</div>
```

```{note}
**Para el docente — Quiz Quizizz (15 preguntas, ~20 min):**

Operaciones con conjuntos (5): A∪B={1,2,3,5,7,8,9} con A={1,3,5,7,9} B={2,3,5,8,9}, A∩C={3,9}, B'={1,4,5,6,7,9,10}, |A∪B|=5+5-3=7, C⊄A porque 6∉A
Proposiciones y lógica (5): p∧q=F con p=V q=F, ¬p∨q=F con p=V q=F, p→q es F cuando p=V y q=F, ¬(p∧q)≡¬p∨¬q, p∧q corresponde a intersección A∩B
Venn y PIE de 3 conjuntos (5): |I∪F∪A|=45+30+25-15-12-8+5=70 hablan idioma, sin ninguno=80-70=10, solo I=23, exactamente dos idiomas=20
Problema integrador acceso (no contado en las 15, usar como reserva): 3 de 8 combinaciones permiten acceso en p∧(q∨r), PIE de acceso=70+60+80-50-55-45+40=100

Puntaje mínimo para avanzar a la Unidad 2: 70%
```

---

## Resumen de la Unidad 1

```{list-table}
:header-rows: 1
:widths: 20 80

* - Semana
  - Lo que debes dominar
* - S1
  - Definir conjuntos. Usar notación. Calcular $\cup$, $\cap$, $-$, $'$. Aplicar PIE con 2 conjuntos.
* - S2
  - Identificar proposiciones. Evaluar $\wedge$, $\vee$, $\neg$, $\rightarrow$. Aplicar De Morgan. Calcular conjunto solución.
* - S3
  - Clasificar tipos de conjuntos. Leer y construir Venn de 2 y 3 conjuntos. Aplicar PIE con 3 conjuntos. Resolver problemas integradores.
```

:::{admonition} ¡Unidad 1 completada!
:class: tip

Felicidades — completaste la Unidad 1. Si aprobaste el quiz con al menos 70%, estás listo para la Unidad 2.

En la **Unidad 2** usarás los conjuntos y la lógica para trabajar con **números reales, recta numérica e intervalos** — la base matemática de las tolerancias dimensionales en ingeniería mecánica.

➡️ [Ir a S4·C1 Números naturales y enteros](../unidad2_funciones/s4_c1_numeros_naturales_enteros.md)
:::
