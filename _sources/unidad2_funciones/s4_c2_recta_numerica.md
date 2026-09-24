---
title: "S4·C2 La recta numérica"
---

# S4·C2 La recta numérica

:::{admonition} 🔧 El control de tolerancias en un torno CNC
:class: ingenieria

Un operador de torno CNC fabrica ejes con diámetro nominal de **25 mm**. La especificación técnica dice:

$$d \in [24.8,\ 25.2] \text{ mm}$$

El inspector mide los últimos 6 ejes y obtiene:

$$24.6,\quad 24.9,\quad 25.0,\quad 25.1,\quad 25.3,\quad 24.8$$

¿Cuáles pasan la inspección? Para responder visualmente, necesitas ubicar cada medida en la **recta numérica** y verificar si cae dentro del intervalo aceptable.
:::

**Pregunta detonadora**

> ¿Dónde está $\sqrt{2}$ en la recta numérica? ¿Está entre 1 y 2? ¿Más cerca de cuál?

---

## Teoría

### ¿Qué es la recta numérica?

La **recta numérica** es una línea infinita donde cada punto corresponde exactamente a un número real, y cada número real corresponde exactamente a un punto.

**Propiedades fundamentales:**
- Se extiende infinitamente hacia la derecha ($+\infty$) e izquierda ($-\infty$)
- El **origen** es el punto 0
- Los números positivos están a la **derecha** del 0
- Los números negativos están a la **izquierda** del 0
- Dos números distintos siempre están en posiciones distintas
- Entre dos números siempre hay infinitos números más

---

### Orden en la recta numérica

La posición de un número en la recta define su **orden**:

$$a < b \iff a \text{ está a la izquierda de } b$$

**Ejemplo:** $-3 < -1 < 0 < \frac{1}{2} < 1 < \sqrt{2} < 2 < \pi < 4$

```{warning}
Con números negativos, el mayor está más cerca del cero:  
$-1 > -5$ porque $-1$ está más a la derecha en la recta.  
Esto es contraintuitivo pero fundamental — siempre piensa en la **posición** en la recta.
```

---

### Valor absoluto $|x|$

El **valor absoluto** de un número es su **distancia al cero** en la recta numérica, siempre positiva:

$$|x| = \begin{cases} x & \text{si } x \geq 0 \\ -x & \text{si } x < 0 \end{cases}$$

**Ejemplos:**
$$|5| = 5 \qquad |-5| = 5 \qquad |0| = 0 \qquad |-3.7| = 3.7$$

**Distancia entre dos puntos:**
$$d(a, b) = |b - a|$$

$$d(-3, 4) = |4 - (-3)| = |7| = 7$$

:::{admonition} 🔧 Valor absoluto en tolerancias
:class: ingenieria
La desviación de una pieza respecto al nominal es $|d - d_0|$ donde $d_0$ es el valor nominal.

Si el eje mide 24.7 mm y el nominal es 25.0 mm:
$$\text{desviación} = |24.7 - 25.0| = |-0.3| = 0.3 \text{ mm}$$

Si la tolerancia es $\pm 0.2$ mm, esta pieza se **rechaza** porque $0.3 > 0.2$.
:::

---

### Intervalos en la recta numérica

Los **intervalos** son subconjuntos contiguos de la recta numérica. Hay cuatro tipos:

| Tipo | Notación | Descripción | Recta |
|------|----------|-------------|-------|
| Cerrado | $[a, b]$ | Incluye $a$ y $b$ | ●———● |
| Abierto | $(a, b)$ | Excluye $a$ y $b$ | ○———○ |
| Semiabierto | $[a, b)$ | Incluye $a$, excluye $b$ | ●———○ |
| Semiabierto | $(a, b]$ | Excluye $a$, incluye $b$ | ○———● |

**Notación con conjuntos:**
$$[a, b] = \{x \in \mathbb{R} \mid a \leq x \leq b\}$$
$$(a, b) = \{x \in \mathbb{R} \mid a < x < b\}$$

:::{admonition} 🔧 Intervalos en ingeniería
:class: ingenieria
La especificación del eje $d \in [24.8, 25.2]$ es un **intervalo cerrado** — incluye los valores límite exactos. Si la pieza mide exactamente 24.8 mm, está en el límite pero todavía es aceptable.

El intervalo **abierto** $(0, \infty)$ se usa para presiones y temperaturas que deben ser estrictamente positivas.
:::

---

### Aplicación al problema del torno

| Medida | Está en $[24.8, 25.2]$? | Resultado |
|:------:|:-----------------------:|-----------|
| 24.6 | ❌ | Rechazada ($24.6 < 24.8$) |
| 24.9 | ✅ | Aprobada |
| 25.0 | ✅ | Aprobada |
| 25.1 | ✅ | Aprobada |
| 25.3 | ❌ | Rechazada ($25.3 > 25.2$) |
| 24.8 | ✅ | Aprobada (límite inferior, incluido) |

**4 de 6 ejes aprobados.**

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_RECTA_NUMERICA"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Dibujar la recta numérica con el origen y los enteros del -5 al 5
2. Colocar fracciones entre enteros: 1/2, -3/4, 5/3
3. Revelar π y √2 con sus posiciones aproximadas
4. Animar el valor absoluto: mostrar la distancia al cero como una flecha
5. Mostrar un intervalo [24.8, 25.2] en la recta con los 6 ejes del problema
6. Cierre: los que caen dentro del intervalo están aprobados, los que quedan fuera rechazados
```

---

## Visualización interactiva

Arrastra el punto sobre la recta numérica y observa el valor absoluto y a qué intervalo pertenece.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s4c2-recta" class="jsxgraph-container" style="height:460px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s4c2-recta', {
            boundingbox: [-6, 6, 6, -4],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        // Recta numérica
        var recta = board.create('line', [[-5.5, 0],[5.5, 0]], {
            strokeColor: '#374151', strokeWidth: 2,
            straightFirst: false, straightLast: false
        });

        // Marcas del -5 al 5
        for (var i = -5; i <= 5; i++) {
            board.create('point', [i, 0], {
                size: 3, fixed: true, color: '#374151',
                name: String(i),
                label: { offset: [0, -18], fontSize: 12, color: '#374151' }
            });
        }

        // Intervalo de tolerancia [-2, 2] como ejemplo
        board.create('segment', [[-2, 0],[2, 0]], {
            strokeColor: '#16a34a', strokeWidth: 6 });
        board.create('point', [-2, 0], {
            size: 6, color: '#16a34a', fixed: true, name: '-2',
            label: { offset: [0, 12], fontSize: 10, color: '#16a34a' }
        });
        board.create('point', [2, 0], {
            size: 6, color: '#16a34a', fixed: true, name: '2',
            label: { offset: [0, 12], fontSize: 10, color: '#16a34a' }
        });
        board.create('text', [0, 0.8, 'Intervalo [-2, 2]'], {
            fontSize: 10, color: '#16a34a', anchorX: 'middle' });

        // Punto arrastrable
        var p = board.create('glider', [1.5, 0, recta], {
            size: 9, color: '#3b82f6', name: '', label: { fontSize: 0 }
        });

        // Valor del punto
        board.create('text', [0, 3.5, function() {
            return 'x = ' + p.X().toFixed(2);
        }], { fontSize: 16, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' });

        // Valor absoluto
        board.create('text', [0, 2.8, function() {
            return '|x| = ' + Math.abs(p.X()).toFixed(2);
        }], { fontSize: 14, color: '#7c3aed', anchorX: 'middle' });

        // Distancia al cero (segmento)
        board.create('segment', [
            function() { return [0, 0.3]; },
            function() { return [p.X(), 0.3]; }
        ], {
            strokeColor: '#7c3aed', strokeWidth: 3,
            lastArrow: true, firstArrow: true
        });

        // Pertenencia al intervalo
        board.create('text', [0, 2.1, function() {
            var x = p.X();
            if (x >= -2 && x <= 2) return 'x PERTENECE a [-2, 2]  APROBADO';
            return 'x NO pertenece a [-2, 2]  RECHAZADO';
        }], {
            fontSize: 13, fontWeight: 'bold', anchorX: 'middle',
            color: function() {
                var x = p.X();
                return (x >= -2 && x <= 2) ? '#16a34a' : '#dc2626';
            }
        });

        // Color dinámico del punto
        board.on('update', function() {
            var x = p.X();
            p.setAttribute({ color: (x >= -2 && x <= 2) ? '#16a34a' : '#dc2626' });
        });

        board.create('text', [0, -2.5,
            'Arrastra el punto azul sobre la recta'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle'
        });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Punto arrastrable sobre la recta numérica. El intervalo [-2,2] está marcado en verde. El punto cambia de color (verde=dentro, rojo=fuera) y muestra el valor absoluto y la pertenencia al intervalo. Conecta directamente con el concepto de tolerancias.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf-gxMkaHwGGAQVdpSMiPIWXiLXwFTO-vhCAWRj0NWTuKLaEw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Recta numérica e intervalos
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "¿Cuál es mayor: -2 o -8?" → -2 (más a la derecha)
P2 (Fill): "|-7| = ___" → 7
P3 (Fill): "d(-3, 5) = |5-(-3)| = ___" → 8
P4 (MC): "¿Qué intervalo incluye ambos extremos?" → Cerrado [a,b]
P5 (T/F): "x=4 pertenece al intervalo (3, 5)." → Verdadero
P6 (T/F): "x=3 pertenece al intervalo (3, 5)." → Falso (abierto, excluye 3)
P7 (MC ingeniería): "Tolerancia: d ∈ [24.8, 25.2]. Pieza con d=24.8 mm..." → Aprobada (límite incluido)
P8 (Fill ingeniería): "Desviación de una pieza: d=25.4, nominal=25.0. |25.4-25.0| = ___ mm" → 0.4
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Definición
* - Recta numérica
  - Línea donde cada punto = un número real
* - Orden
  - $a < b$ si $a$ está a la izquierda de $b$
* - Valor absoluto $|x|$
  - Distancia al cero: siempre $\geq 0$
* - Distancia $d(a,b)$
  - $|b - a|$
* - Intervalo cerrado $[a,b]$
  - Incluye los extremos: $a \leq x \leq b$
* - Intervalo abierto $(a,b)$
  - Excluye los extremos: $a < x < b$
```

:::{admonition} Siguiente clase
:class: tip
Ya ubicas números e intervalos en la recta. En la siguiente clase exploraremos las **propiedades de los números reales** — las reglas que hacen posible el álgebra.

➡️ [Ir a S4·C3 Propiedades de los números reales](s4_c3_propiedades_reales.md)
:::
