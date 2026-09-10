---
title: "S12·C3 Método de sustitución"
---

# S12·C3 Método de sustitución

:::{admonition} 🔧 Dos corrientes en un circuito eléctrico
:class: ingenieria

En un nodo de un circuito se cumple la ley de Kirchhoff: la suma de corrientes entrantes iguala la suma de salientes.

$$I_1 + I_2 = 12 \text{ A}$$
$$2I_1 - I_2 = 3 \text{ A}$$

De la primera ecuación: $I_2 = 12 - I_1$. Sustituyendo en la segunda:

$$2I_1 - (12 - I_1) = 3 \quad \Rightarrow \quad 3I_1 = 15 \quad \Rightarrow \quad I_1 = 5 \text{ A}, \quad I_2 = 7 \text{ A}$$

El **método de sustitución** despeja una incógnita y la reemplaza en la otra ecuación — la técnica más directa cuando una ecuación ya tiene una variable aislada.
:::

**Pregunta detonadora**

> En el sistema $\begin{cases} y = 3x - 2 \\ 2x + y = 13 \end{cases}$, ¿por qué conviene sustituir la expresión de $y$ de la primera ecuación en la segunda?

---

## Teoría

### ¿Qué es el método de sustitución?

El **método de sustitución** resuelve un sistema $2 \times 2$ en cuatro pasos:

| Paso | Acción |
|:----:|--------|
| 1 | Despejar una incógnita en **una** de las ecuaciones |
| 2 | **Sustituir** esa expresión en la **otra** ecuación |
| 3 | Resolver la ecuación resultante (una sola incógnita) |
| 4 | Sustituir el valor hallado para obtener la segunda incógnita |

**Idea clave:** si $y = 3x - 2$, entonces en cualquier ecuación del sistema puedes reemplazar $y$ por $3x - 2$.

---

### Ejemplo 1 — Una variable ya despejada

$$\begin{cases} y = 2x + 1 \\ 3x + y = 11 \end{cases}$$

**Paso 1:** $y$ ya está despejada en la ecuación 1.

**Paso 2:** Sustituir en la ecuación 2:

$$3x + (2x + 1) = 11$$

**Paso 3:** $5x + 1 = 11 \Rightarrow 5x = 10 \Rightarrow x = 2$

**Paso 4:** $y = 2(2) + 1 = 5$

**Solución:** $(2, 5)$

**Verificación:** $2(2)+1=5$ ✓ y $3(2)+5=11$ ✓

---

### Ejemplo 2 — Despejar primero

$$\begin{cases} 2x + y = 7 \\ x - y = 2 \end{cases}$$

**Paso 1:** Despejar $y$ de la ecuación 1: $y = 7 - 2x$

**Paso 2:** Sustituir en la ecuación 2:

$$x - (7 - 2x) = 2$$
$$x - 7 + 2x = 2$$
$$3x = 9 \quad \Rightarrow \quad x = 3$$

**Paso 3:** $y = 7 - 2(3) = 1$

**Solución:** $(3, 1)$

---

### Ejemplo 3 — Equilibrio estático (dos fuerzas)

$$\begin{cases} F_x + F_y = 300 \\ 2F_x - F_y = 150 \end{cases}$$

Despejar $F_y$ de la ecuación 1: $F_y = 300 - F_x$

Sustituir en la ecuación 2:

$$2F_x - (300 - F_x) = 150$$
$$3F_x = 450 \quad \Rightarrow \quad F_x = 150 \text{ N}$$
$$F_y = 300 - 150 = 150 \text{ N}$$

**Solución:** $(150, 150)$ N — fuerzas iguales en ambas direcciones.

---

### ¿Qué ecuación despejar?

Elige la ecuación donde despejar sea **más fácil**:

- Coeficiente 1 en alguna incógnita: $x + 3y = 10$ → despeja $x$
- Variable ya aislada: $y = 4x - 1$ → usa directamente
- Evita fracciones si es posible

---

### Casos especiales

**Sistema incompatible (sin solución):**

$$\begin{cases} x + y = 5 \\ 2x + 2y = 12 \end{cases}$$

Despejando $y = 5 - x$ y sustituyendo: $2x + 2(5-x) = 12 \Rightarrow 10 = 12$ ✗

Contradicción → **no hay solución**. Las rectas son paralelas.

**Sistema indeterminado (infinitas soluciones):**

$$\begin{cases} x + y = 5 \\ 2x + 2y = 10 \end{cases}$$

Sustituyendo: $2x + 2(5-x) = 10 \Rightarrow 10 = 10$ ✓ (identidad)

Infinitas soluciones: $y = 5 - x$ para cualquier $x$.

```{warning}
Si al sustituir obtienes una **contradicción** (como $10 = 12$), el sistema es **incompatible**.

Si obtienes una **identidad** (como $10 = 10$), el sistema es **indeterminado**.

No confundas estos casos con un error de aritmética — verifica reemplazando en ambas ecuaciones originales.
```

---

### Circuito eléctrico — dos corrientes

$$\begin{cases} I_1 + I_2 = 12 \\ 2I_1 - I_2 = 3 \end{cases}$$

$I_2 = 12 - I_1$. Sustituir:

$$2I_1 - (12 - I_1) = 3 \Rightarrow 3I_1 = 15 \Rightarrow I_1 = 5 \text{ A}, \ I_2 = 7 \text{ A}$$

**Verificación:** $5+7=12$ ✓ y $2(5)-7=3$ ✓

:::{admonition} 🔧 Ingeniería — costos de dos insumos
:class: ingenieria

Un lote requiere $x$ kg del insumo A ($\$45$/kg) e $y$ kg del insumo B ($\$60$/kg). Restricciones:

$$\begin{cases} x + y = 100 \quad \text{(masa total)} \\ 45x + 60y = 5400 \quad \text{(presupuesto)} \end{cases}$$

$y = 100 - x$. Sustituir: $45x + 60(100-x) = 5400$

$-15x = -600 \Rightarrow x = 40$, $y = 60$

Se usan **40 kg de A** y **60 kg de B**.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_METODO_SUSTITUCION"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Sistema con y ya despejada: y=2x+1 en 3x+y=11
2. Despejar y de 2x+y=7 y sustituir en x-y=2
3. Caso incompatible: contradiccion 10=12
4. Caso indeterminado: identidad 10=10
5. Circuito: I1+I2=12, 2I1-I2=3
6. Verificacion en ambas ecuaciones originales
```

---

## Visualización interactiva

Observa el método de sustitución paso a paso. Navega entre ecuaciones y sustituciones.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s12c3-sustitucion" class="jsxgraph-container" style="height:480px"></div>

<script>
(function() {
    var sistema = {
        pasos: [
            { texto: 'Sistema: 2x + y = 7  y  x - y = 2', tipo: 'inicio' },
            { texto: 'Paso 1: Despejar y → y = 7 - 2x', tipo: 'despeje' },
            { texto: 'Paso 2: Sustituir en ec. 2 → x - (7-2x) = 2', tipo: 'sust' },
            { texto: 'Paso 3: Simplificar → 3x - 7 = 2 → 3x = 9 → x = 3', tipo: 'resolver' },
            { texto: 'Paso 4: y = 7 - 2(3) = 1', tipo: 'back' },
            { texto: 'Solucion: (3, 1) ✓', tipo: 'fin' }
        ]
    };

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s12c3-sustitucion', {
            boundingbox: [-1, 11, 13, -1],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var pasoActual = 0;
        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var p = sistema.pasos[pasoActual];
            var esFin = p.tipo === 'fin';

            dinamicos.push(board.create('text', [6, 10, 'Metodo de sustitucion'], {
                fontSize: 15, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle'
            }));

            for (var i = 0; i <= pasoActual; i++) {
                var col = i === pasoActual ? (esFin ? '#16a34a' : '#1d4ed8') : '#6b7280';
                dinamicos.push(board.create('text', [1, 8.5 - i * 1.2, sistema.pasos[i].texto], {
                    fontSize: i === pasoActual ? 13 : 11,
                    color: col, fontWeight: i === pasoActual ? 'bold' : 'normal'
                }));
            }

            if (pasoActual > 0) {
                var bp = board.create('text', [3, 1.5, '< Anterior'], {
                    fontSize: 12, color: '#374151', fontWeight: 'bold', anchorX: 'middle',
                    cssStyle: 'cursor:pointer; padding:5px 12px; background:#f1f5f9; border-radius:6px;'
                });
                bp.on('down', function() { pasoActual--; dibujar(); });
                dinamicos.push(bp);
            }
            if (pasoActual < sistema.pasos.length - 1) {
                var bn = board.create('text', [9, 1.5, 'Siguiente >'], {
                    fontSize: 12, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle',
                    cssStyle: 'cursor:pointer; padding:5px 12px; background:#dbeafe; border-radius:6px;'
                });
                bn.on('down', function() { pasoActual++; dibujar(); });
                dinamicos.push(bn);
            }

            dinamicos.push(board.create('text', [6, 0.3,
                'Paso ' + (pasoActual + 1) + ' de ' + sistema.pasos.length], {
                fontSize: 10, color: '#9ca3af', anchorX: 'middle'
            }));
        }

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Recorrido paso a paso del sistema 2x+y=7, x-y=2 por sustitución. Botones Anterior/Siguiente. Al final muestra la solución (3,1) en verde. Complementa la resolución algebraica en pizarra.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScJ7nWW-eQ8uM0f776QQYIvf87YxGpA86EtU2kZhXL2LUcuBQ/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Método de sustitución
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "y=2x+1 en 3x+y=11 → x=___" → 2
P2 (Fill): "2x+y=7, x-y=2 → (x,y)=(___,___)" → 3, 1
P3 (MC): "Primer paso del metodo de sustitucion:" → Despejar una incognita
P4 (Fill): "I1+I2=12, 2I1-I2=3 → I1=___ A" → 5
P5 (T/F): "Si al sustituir queda 10=12, el sistema es incompatible." → Verdadero
P6 (T/F): "Si al sustituir queda 10=10, hay infinitas soluciones." → Verdadero
P7 (MC ingeniería): "En equilibrio estatico con Fx y Fy, conviene:" → Sistema 2x2 por sustitucion
P8 (Fill): "x+y=100, 45x+60y=5400 → x=___ kg" → 40
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Paso
  - Acción
* - 1
  - Despejar una incógnita en la ecuación más conveniente
* - 2
  - Sustituir esa expresión en la otra ecuación
* - 3
  - Resolver la ecuación con una sola incógnita
* - 4
  - Hallar la segunda incógnita y verificar en ambas ecuaciones
* - Caso incompatible
  - Contradicción al sustituir (ej. $10 = 12$)
* - Caso indeterminado
  - Identidad al sustituir (ej. $10 = 10$)
* - Ingeniería
  - Corrientes en nodos, fuerzas en equilibrio, costos de insumos
```

:::{admonition} Siguiente clase
:class: tip
Ya resuelves sistemas por sustitución. En la siguiente clase aprenderás el **método de suma o resta** (eliminación) y la **solución gráfica** con intersección de rectas.

➡️ [Ir a S12·C4 Método de suma o resta y solución gráfica](s12_c4_metodo_suma_resta_grafico.md)
:::
