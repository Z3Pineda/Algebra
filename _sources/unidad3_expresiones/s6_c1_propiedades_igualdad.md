---
title: "S6·C1 Propiedades de la igualdad"
---

# S6·C1 Propiedades de la igualdad

:::{admonition} 🔧 Calibración de instrumentos de medición
:class: ingenieria

Un técnico calibra un micrómetro. El instrumento marca 0.05 mm cuando debería marcar cero — tiene un error de offset de 0.05 mm.

Para corregir cada medición, el técnico resta 0.05 mm a todos los valores:

$$d_{real} = d_{medido} - 0.05$$

Si $d_{medido} = 25.37$ mm, entonces $d_{real} = 25.32$ mm.

Esta operación — aplicar la misma transformación a ambos lados de una igualdad — es exactamente lo que hacen las **propiedades de la igualdad**. Sin ellas, no podríamos resolver ninguna ecuación.
:::

**Pregunta detonadora**

> Si una balanza está equilibrada con 5 kg en cada lado, ¿qué pasa si agregas 2 kg a un solo lado? ¿Y si agregas 2 kg a los dos lados? ¿Qué propiedad describes con eso?

---

## Teoría

### ¿Qué es una igualdad?

Una **igualdad** es un enunciado que afirma que dos expresiones tienen el mismo valor:

$$A = B$$

Las propiedades de la igualdad establecen las operaciones que puedes hacer sobre una igualdad **sin romperla** — siempre que hagas lo mismo en ambos lados.

---

### Propiedad reflexiva

$$a = a$$

Todo número es igual a sí mismo. Parece trivial, pero es la base de toda verificación.

**Ejemplo:** Si un eje mide 25 mm, entonces $25 = 25$.

---

### Propiedad simétrica

$$\text{Si } a = b \text{, entonces } b = a$$

El orden de una igualdad puede invertirse.

**Ejemplo:** Si $x = 5$, entonces $5 = x$.

---

### Propiedad transitiva

$$\text{Si } a = b \text{ y } b = c \text{, entonces } a = c$$

:::{admonition} 🔧 Ingeniería
:class: ingenieria
Si la tolerancia del eje A es igual a la del eje B, y la del eje B es igual a la del eje C, entonces A y C tienen la misma tolerancia.

En ingeniería esto se usa para encadenar especificaciones: $d_A = d_B$ y $d_B = d_C$ → $d_A = d_C$.
:::

---

### Propiedad de adición

$$\text{Si } a = b \text{, entonces } a + c = b + c$$

Puedes **sumar el mismo número en ambos lados** sin cambiar la igualdad.

**Ejemplo:**

$$x - 7 = 12$$
$$x - 7 + 7 = 12 + 7 \quad \leftarrow \text{sumamos 7 en ambos lados}$$
$$x = 19$$

---

### Propiedad de sustracción

$$\text{Si } a = b \text{, entonces } a - c = b - c$$

**Ejemplo:**

$$x + 5 = 18$$
$$x + 5 - 5 = 18 - 5$$
$$x = 13$$

---

### Propiedad de multiplicación

$$\text{Si } a = b \text{, entonces } a \cdot c = b \cdot c$$

**Ejemplo:**

$$\frac{x}{4} = 9$$
$$\frac{x}{4} \cdot 4 = 9 \cdot 4$$
$$x = 36$$

---

### Propiedad de división

$$\text{Si } a = b \text{ y } c \neq 0 \text{, entonces } \frac{a}{c} = \frac{b}{c}$$

```{warning}
No se puede dividir entre **cero**. Esta propiedad requiere explícitamente $c \neq 0$.
```

**Ejemplo:**

$$5x = 35$$
$$\frac{5x}{5} = \frac{35}{5}$$
$$x = 7$$

---

### Propiedad de sustitución

$$\text{Si } a = b \text{, entonces } a \text{ puede reemplazarse por } b \text{ en cualquier expresión}$$

Esta propiedad es la base del álgebra: permite reemplazar una expresión por otra equivalente.

**Ejemplo:**

Si $v = 60$ km/h y la fórmula es $d = v \cdot t$, entonces $d = 60t$.

---

### Tabla resumen

| Propiedad | Enunciado formal |
|-----------|-----------------|
| Reflexiva | $a = a$ |
| Simétrica | $a = b \implies b = a$ |
| Transitiva | $a=b \wedge b=c \implies a=c$ |
| Adición | $a=b \implies a+c = b+c$ |
| Sustracción | $a=b \implies a-c = b-c$ |
| Multiplicación | $a=b \implies ac = bc$ |
| División | $a=b,\ c\neq 0 \implies \frac{a}{c} = \frac{b}{c}$ |
| Sustitución | $a=b \implies$ reemplaza $a$ por $b$ |

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_PROPIEDADES_IGUALDAD"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Animar una balanza equilibrada: agregar peso a un solo lado → desequilibrio
2. Agregar el mismo peso a los dos lados → equilibrio mantenido (propiedad de adición)
3. Mostrar cómo cada propiedad "mueve" términos de un lado al otro
4. Resolver x-7=12 paso a paso con la propiedad de adición
5. Resolver 5x=35 con la propiedad de división
6. Cierre: las propiedades garantizan que al resolver una ecuación no "rompemos" la igualdad
```

---

## Visualización interactiva

Aplica las propiedades de la igualdad para resolver ecuaciones simples. Selecciona qué operación aplicar a ambos lados.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s6c1-balanza" class="jsxgraph-container" style="height:460px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s6c1-balanza', {
            boundingbox: [-1, 11, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        // Ecuaciones paso a paso
        var pasos = [
            { izq: '3x - 6', der: '9',       prop: 'Ecuacion inicial' },
            { izq: '3x - 6 + 6', der: '9 + 6', prop: 'Prop. adicion (+6 en ambos lados)' },
            { izq: '3x', der: '15',           prop: 'Simplificacion' },
            { izq: '3x / 3', der: '15 / 3',  prop: 'Prop. division (/3 en ambos lados)' },
            { izq: 'x', der: '5',             prop: 'Solucion: x = 5' }
        ];

        var pasoActual = 0;
        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e){} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var p = pasos[pasoActual];

            // Barra de la balanza
            dinamicos.push(board.create('segment', [[2, 7],[10, 7]], {
                strokeColor: '#374151', strokeWidth: 4 }));
            // Poste
            dinamicos.push(board.create('segment', [[6, 4],[6, 7]], {
                strokeColor: '#374151', strokeWidth: 3 }));
            // Cadenas
            dinamicos.push(board.create('segment', [[3, 7],[3, 5.5]], {
                strokeColor: '#374151', strokeWidth: 2 }));
            dinamicos.push(board.create('segment', [[9, 7],[9, 5.5]], {
                strokeColor: '#374151', strokeWidth: 2 }));

            // Platos
            var colorIzq = (pasoActual === pasos.length-1) ? '#16a34a' : '#dbeafe';
            var colorDer = (pasoActual === pasos.length-1) ? '#16a34a' : '#ffedd5';

            dinamicos.push(board.create('polygon',
                [[1.5,5.5],[4.5,5.5],[4.5,4.5],[1.5,4.5]], {
                fillColor: colorIzq, fillOpacity: 0.8,
                strokeColor: '#374151', strokeWidth: 1,
                vertices: { visible: false }
            }));
            dinamicos.push(board.create('polygon',
                [[7.5,5.5],[10.5,5.5],[10.5,4.5],[7.5,4.5]], {
                fillColor: colorDer, fillOpacity: 0.8,
                strokeColor: '#374151', strokeWidth: 1,
                vertices: { visible: false }
            }));

            // Expresiones
            dinamicos.push(board.create('text', [3, 5, p.izq], {
                fontSize: 14, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));
            dinamicos.push(board.create('text', [9, 5, p.der], {
                fontSize: 14, color: '#c2410c', fontWeight: 'bold', anchorX: 'middle' }));

            // Signo igual
            dinamicos.push(board.create('text', [6, 5, '='], {
                fontSize: 18, color: '#374151', fontWeight: 'bold', anchorX: 'middle' }));

            // Propiedad aplicada
            dinamicos.push(board.create('text', [6, 3.2, p.prop], {
                fontSize: 12, color: '#7c3aed', fontStyle: 'italic', anchorX: 'middle' }));

            // Paso
            dinamicos.push(board.create('text', [6, 9.5,
                'Paso ' + (pasoActual+1) + ' de ' + pasos.length], {
                fontSize: 12, color: '#374151', anchorX: 'middle' }));

            // Botones anterior/siguiente
            if (pasoActual > 0) {
                var btnPrev = board.create('text', [3, 1.5, '◀ Anterior'], {
                    fontSize: 12, color: '#374151', fontWeight: 'bold', anchorX: 'middle',
                    cssStyle: 'cursor:pointer; padding:5px 12px; background:#f1f5f9; border-radius:6px;'
                });
                btnPrev.on('down', function() { pasoActual--; dibujar(); });
                dinamicos.push(btnPrev);
            }
            if (pasoActual < pasos.length-1) {
                var btnNext = board.create('text', [9, 1.5, 'Siguiente ▶'], {
                    fontSize: 12, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle',
                    cssStyle: 'cursor:pointer; padding:5px 12px; background:#dbeafe; border-radius:6px;'
                });
                btnNext.on('down', function() { pasoActual++; dibujar(); });
                dinamicos.push(btnNext);
            }
        }

        board.create('text', [6, -1,
            'Navega los pasos para ver como se aplica cada propiedad'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle'
        });

        board.create('text', [6, -2,
            'Ecuacion: 3x - 6 = 9'], {
            fontSize: 13, color: '#374151', fontWeight: 'bold', anchorX: 'middle'
        });

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Una balanza muestra la ecuación 3x-6=9 en 5 pasos. Los botones "Anterior/Siguiente" navegan entre pasos mostrando qué propiedad se aplica en cada uno. Al llegar a la solución x=5, los platos cambian a verde.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdwotub2Znx01E4pKsoN5tIe5ZiS8kO1SUDrUO0A3RF43IOqg/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Propiedades de la igualdad
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "Si x+8=15, ¿qué propiedad se usa para escribir x=7?" → Sustracción
P2 (MC): "Si 4x=28, ¿qué propiedad da x=7?" → División
P3 (T/F): "Si a=b, entonces b=a." → Verdadero (simétrica)
P4 (MC): "Si a=b y b=c, entonces a=c. ¿Qué propiedad es?" → Transitiva
P5 (Fill): "Si x-5=12, entonces x = ___" → 17
P6 (Fill): "Si 3x=21, entonces x = ___" → 7
P7 (Fill): "Si x/4=6, entonces x = ___" → 24
P8 (MC ingeniería): "Un sensor marca 0.05 mm de más en todas las lecturas. Para corregir usas:" → Propiedad de sustracción (restar 0.05 a ambos lados)
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 25 40 35

* - Propiedad
  - Enunciado
  - Para qué sirve
* - Reflexiva
  - $a = a$
  - Verificación
* - Simétrica
  - $a=b \implies b=a$
  - Invertir el orden
* - Transitiva
  - $a=b, b=c \implies a=c$
  - Encadenar igualdades
* - Adición
  - $a=b \implies a+c=b+c$
  - Mover términos negativos
* - Sustracción
  - $a=b \implies a-c=b-c$
  - Mover términos positivos
* - Multiplicación
  - $a=b \implies ac=bc$
  - Eliminar denominadores
* - División
  - $a=b \implies a/c=b/c$
  - Aislar la variable
```

:::{admonition} Siguiente clase
:class: tip
Con las propiedades dominadas, en la siguiente clase aprenderás qué es una **expresión algebraica** y cómo identificar y operar sus términos.

➡️ [Ir a S6·C2 Expresión algebraica y términos semejantes](s6_c2_expresion_algebraica_terminos.md)
:::
