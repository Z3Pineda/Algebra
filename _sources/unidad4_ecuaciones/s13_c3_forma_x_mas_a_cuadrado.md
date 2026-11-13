---
title: "S13·C3 Ecuaciones de la forma (x+a)²=b"
---

# S13·C3 Ecuaciones de la forma (x+a)²=b

:::{admonition} 🔧 Diámetro de una pieza circular a partir del área
:class: ingenieria

El área de un círculo es $A = \pi r^2$. Si $A = 78.5$ cm² y $\pi \approx 3.14$:

$$\pi r^2 = 78.5 \quad \Rightarrow \quad r^2 = 25 \quad \Rightarrow \quad (r)^2 = 25$$

Aplicando raíz cuadrada: $r = \pm 5$. Solo $r = 5$ cm es válido (radio positivo).

Ecuaciones con un **cuadrado perfecto aislado** se resuelven directamente con $\sqrt{\phantom{x}}$ — técnica clave para tolerancias en piezas circulares y cálculo de dimensiones a partir del área.
:::

**Pregunta detonadora**

> Para resolver $(x - 3)^2 = 16$, ¿por qué hay que considerar **ambos** signos al aplicar la raíz cuadrada?

---

## Teoría

### Forma cuadrada pura

Una ecuación de la forma:

$$(x + a)^2 = b$$

tiene el cuadrado perfecto **ya aislado**. Se resuelve aplicando raíz cuadrada en ambos lados.

**Regla fundamental:**

$$(x + a)^2 = b \quad \Rightarrow \quad x + a = \pm\sqrt{b}$$

El símbolo $\pm$ recuerda que tanto $(+\sqrt{b})^2$ como $(-\sqrt{b})^2$ dan $b$.

---

### Caso 1 — Dos soluciones reales ($b > 0$)

$$(x - 3)^2 = 16$$

$$x - 3 = \pm\sqrt{16} = \pm 4$$

$$x = 3 + 4 = 7 \quad \text{o} \quad x = 3 - 4 = -1$$

**Soluciones:** $x = 7$ y $x = -1$

**Verificación:** $(7-3)^2 = 16$ ✓ y $(-1-3)^2 = (-4)^2 = 16$ ✓

---

### Caso 2 — Una solución ($b = 0$)

$$(x + 5)^2 = 0$$

$$x + 5 = 0 \quad \Rightarrow \quad x = -5$$

Solo **una** solución (raíz doble).

---

### Caso 3 — Sin solución real ($b < 0$)

$$(x - 2)^2 = -9$$

No existe ningún número real cuyo cuadrado sea $-9$. **Sin soluciones reales.**

En ingeniería, esto puede indicar que los datos del problema son **inconsistentes** o que se requiere el conjunto de números complejos.

```{warning}
Errores frecuentes al aplicar raíz cuadrada:

- Olvidar el $\pm$: $(x-3)^2 = 16 \Rightarrow x = 7$ solamente — **incorrecto**
- Confundir $(x+a)^2 = b$ con $x^2 + a^2 = b$ — son formas distintas
- Tomar $\sqrt{b}$ negativo cuando $b > 0$ sin considerar ambas raíces
```

---

### Pasos de resolución

| Paso | Acción |
|:----:|--------|
| 1 | Identificar la forma $(x + a)^2 = b$ (o llevarla a esa forma) |
| 2 | Aplicar raíz cuadrada: $x + a = \pm\sqrt{b}$ |
| 3 | Despejar $x = -a \pm \sqrt{b}$ |
| 4 | Verificar ambas soluciones (si existen) |
| 5 | Descartar raíces que no tengan sentido en contexto |

---

### Ejemplo — Área y dimensiones

Un cuadrado tiene área $A = (s)^2 = 144$ cm²:

$$s^2 = 144 \quad \Rightarrow \quad s = \pm 12$$

Solo $s = 12$ cm (lado positivo).

**Con tolerancia:** si $(s - 12)^2 = 0.25$, entonces:

$$s - 12 = \pm 0.5 \quad \Rightarrow \quad s = 12.5 \text{ o } s = 11.5 \text{ cm}$$

Rango de tolerancia: $\pm 0.5$ cm respecto al nominal.

---

### Relación con ecuaciones incompletas

**Forma $ax^2 + c = 0$:**

$$x^2 - 49 = 0 \quad \Rightarrow \quad x^2 = 49 \quad \Rightarrow \quad x = \pm 7$$

Es un caso especial de $(x+a)^2 = b$ con $a = 0$.

**Forma $ax^2 = k$:**

$$3x^2 = 27 \quad \Rightarrow \quad x^2 = 9 \quad \Rightarrow \quad x = \pm 3$$

:::{admonition} 🔧 Ingeniería — tolerancia en eje circular
:class: ingenieria

El diámetro nominal de un eje es $D = 40$ mm con tolerancia $(D - 40)^2 = 0.09$:

$$D - 40 = \pm 0.3 \quad \Rightarrow \quad D = 40.3 \text{ mm o } D = 39.7 \text{ mm}$$

El eje puede medir entre **39.7 mm y 40.3 mm**. La forma $(x+a)^2 = b$ modela bandas de tolerancia simétricas.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_FORMA_X_MAS_A_CUADRADO"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. (x-3)²=16 → x-3=±4 → x=7, x=-1
2. Importancia del ± con animacion de ambas raices
3. (x+5)²=0 → una solucion
4. (x-2)²=-9 → sin solucion real
5. Area circular: r²=25 → r=±5, solo r=5
6. Tolerancia: (D-40)²=0.09 → D=40.3 o 39.7
```

---

## Visualización interactiva

Ajusta $a$ y $b$ en $(x+a)^2 = b$ y observa las soluciones sobre la recta numérica.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s13c3-forma-cuadrada" class="jsxgraph-container" style="height:480px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s13c3-forma-cuadrada', {
            boundingbox: [-12, 8, 12, -3],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slA = board.create('slider', [[-10, 6.5], [-5, 6.5], [-8, -3, 2]], {
            name: 'a', snapWidth: 0.5, fillColor: '#1d4ed8' });
        var slB = board.create('slider', [[3, 6.5], [8, 6.5], [-5, 16, 25]], {
            name: 'b', snapWidth: 0.5, fillColor: '#c2410c' });

        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var a = slA.Value(), b = slB.Value();

            dinamicos.push(board.create('text', [0, 7.2,
                '(x + ' + a + ')² = ' + b], {
                fontSize: 14, color: '#374151', fontWeight: 'bold', anchorX: 'middle'
            }));

            if (b < 0) {
                dinamicos.push(board.create('text', [0, 5,
                    'Sin solucion real (b < 0)'], {
                    fontSize: 13, color: '#dc2626', fontWeight: 'bold', anchorX: 'middle'
                }));
                return;
            }

            var raiz = Math.sqrt(b);
            var x1 = -a + raiz;
            var x2 = -a - raiz;

            dinamicos.push(board.create('text', [0, 5.5,
                'x + ' + a + ' = ±' + raiz.toFixed(2)], {
                fontSize: 12, color: '#1d4ed8', anchorX: 'middle'
            }));

            if (Math.abs(x1 - x2) < 0.01) {
                dinamicos.push(board.create('point', [x1, 0], {
                    size: 5, fillColor: '#ca8a04', strokeColor: '#ca8a04',
                    name: 'x = ' + x1.toFixed(2), label: { fontSize: 11, offset: [0, 15] }
                }));
                dinamicos.push(board.create('text', [0, 4,
                    '1 solucion (raiz doble)'], {
                    fontSize: 12, color: '#ca8a04', anchorX: 'middle'
                }));
            } else {
                dinamicos.push(board.create('point', [x1, 0], {
                    size: 5, fillColor: '#16a34a', strokeColor: '#16a34a',
                    name: 'x₁=' + x1.toFixed(2), label: { fontSize: 10, offset: [0, 15] }
                }));
                dinamicos.push(board.create('point', [x2, 0], {
                    size: 5, fillColor: '#16a34a', strokeColor: '#16a34a',
                    name: 'x₂=' + x2.toFixed(2), label: { fontSize: 10, offset: [0, -18] }
                }));
                dinamicos.push(board.create('text', [0, 4,
                    '2 soluciones: x = ' + x1.toFixed(2) + ', x = ' + x2.toFixed(2)], {
                    fontSize: 11, color: '#16a34a', anchorX: 'middle'
                }));
            }
        }

        slA.on('drag', dibujar);
        slB.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Deslizadores para $a$ y $b$ en $(x+a)^2 = b$. Muestra las raíces en el eje $x$. Si $b < 0$, indica sin solución real. Si $b = 0$ o las raíces coinciden, muestra raíz doble. Refuerza el significado del $\pm$.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPT01x-2naH1cw_QenU8z_A3Loz6lri9QqSB55zRxXWx2zRQ/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Forma (x+a)²=b
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "(x-3)²=16 → x=___ o x=___" → 7, -1
P2 (Fill): "(x+5)²=0 → x=___" → -5
P3 (MC): "(x-2)²=-9 tiene:" → 0 soluciones reales
P4 (T/F): "Al aplicar raiz cuadrada hay que usar ±." → Verdadero
P5 (Fill): "x²=49 → x=___" → ±7
P6 (Fill): "r²=25 → r=___ cm (radio positivo)" → 5
P7 (MC ingeniería): "(D-40)²=0.09 → D=___ mm" → 40.3 o 39.7
P8 (MC): "b>0 en (x+a)²=b implica:" → Dos soluciones (salvo raiz doble si b=0)
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Forma
  - $(x + a)^2 = b$
* - Método
  - $x + a = \pm\sqrt{b}$ → $x = -a \pm \sqrt{b}$
* - $b > 0$
  - Dos soluciones reales (salvo raíz doble si $\sqrt{b} = 0$)
* - $b = 0$
  - Una solución: $x = -a$
* - $b < 0$
  - Sin soluciones reales
* - Ingeniería
  - Radio desde área, tolerancias circulares simétricas
```

:::{admonition} Siguiente clase
:class: tip
Ya resuelves ecuaciones con cuadrado aislado. En la siguiente clase aprenderás **completar el cuadrado** para transformar cualquier cuadrática a esa forma.

➡️ [Ir a S13·C4 Completando el cuadrado](s13_c4_completando_cuadrados.md)
:::
