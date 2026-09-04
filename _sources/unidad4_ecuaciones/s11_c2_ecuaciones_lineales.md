---
title: "S11·C2 Ecuaciones lineales"
---

# S11·C2 Ecuaciones lineales

:::{admonition} 🔧 Ley de Hooke en un sistema de resortes
:class: ingenieria

Un resorte obedece la ley de Hooke: la fuerza es proporcional al alargamiento:

$$F = kx$$

donde $F$ es la fuerza (N), $k$ es la constante de rigidez (N/m) y $x$ es el alargamiento (m).

Si un resorte con $k = 250$ N/m debe soportar una carga de $F = 875$ N, el ingeniero resuelve:

$$875 = 250x \quad \Rightarrow \quad x = \frac{875}{250} = 3.5 \text{ m}$$

Resolver ecuaciones lineales es el procedimiento que convierte una relación física en un valor numérico utilizable en diseño.
:::

**Pregunta detonadora**

> Para resolver $3x - 7 = 14$, ¿qué operación aplicarías primero a ambos lados de la igualdad? ¿Por qué?

---

## Teoría

### ¿Qué es una ecuación lineal?

Una **ecuación lineal** (de primer grado) es una ecuación donde la incógnita aparece con exponente 1 y no está en denominador ni dentro de un radical.

**Forma general:**

$$ax + b = 0 \quad (a \neq 0)$$

La solución es única: $x = -\dfrac{b}{a}$.

**Ejemplos de ecuaciones lineales:**

$$2x + 5 = 13 \qquad \frac{x}{3} - 4 = 7 \qquad 3(x - 2) = 12$$

---

### Estrategia de resolución

Usamos las **propiedades de la igualdad** (S6·C1) para aislar la incógnita en un solo miembro:

| Paso | Objetivo | Propiedad |
|:----:|----------|-----------|
| 1 | Eliminar paréntesis | Distributiva |
| 2 | Agrupar términos con $x$ en un miembro | Adición / sustracción |
| 3 | Agrupar constantes en el otro miembro | Adición / sustracción |
| 4 | Despejar $x$ | División o multiplicación |

**Regla de oro:** lo que haces en un miembro, **hazlo en el otro**.

---

### Ejemplo 1 — Ecuación simple

Resolver $3x - 7 = 14$:

| Paso | Operación | Resultado |
|:----:|-----------|-----------|
| 1 | Sumar 7 en ambos lados | $3x = 21$ |
| 2 | Dividir entre 3 en ambos lados | $x = 7$ |

**Verificación:** $3(7) - 7 = 21 - 7 = 14$ ✓

---

### Ejemplo 2 — Con paréntesis

Resolver $2(x + 3) - 5 = 11$:

| Paso | Operación | Resultado |
|:----:|-----------|-----------|
| 1 | Distribuir | $2x + 6 - 5 = 11$ |
| 2 | Simplificar | $2x + 1 = 11$ |
| 3 | Restar 1 en ambos lados | $2x = 10$ |
| 4 | Dividir entre 2 | $x = 5$ |

**Verificación:** $2(5+3) - 5 = 2(8) - 5 = 16 - 5 = 11$ ✓

---

### Ejemplo 3 — Con fracciones (introducción)

Resolver $\dfrac{x}{4} + 3 = 7$:

| Paso | Operación | Resultado |
|:----:|-----------|-----------|
| 1 | Restar 3 en ambos lados | $\dfrac{x}{4} = 4$ |
| 2 | Multiplicar por 4 en ambos lados | $x = 16$ |

**Verificación:** $\dfrac{16}{4} + 3 = 4 + 3 = 7$ ✓

---

### Ecuaciones con agrupaciones

Cuando la incógnita aparece en **ambos miembros**, reúne todos los términos con $x$ en un lado y las constantes en el otro.

**Ejemplo 4:**

$$5x - 3 = 2x + 9$$

| Paso | Operación | Resultado |
|:----:|-----------|-----------|
| 1 | Restar $2x$ en ambos lados | $3x - 3 = 9$ |
| 2 | Sumar 3 en ambos lados | $3x = 12$ |
| 3 | Dividir entre 3 | $x = 4$ |

**Verificación:** MI: $5(4)-3=17$; MD: $2(4)+9=17$ ✓

---

### Verificación de la solución

Siempre sustituye el valor encontrado en la **ecuación original** (no en pasos intermedios):

1. Calcula el miembro izquierdo con el valor de $x$
2. Calcula el miembro derecho
3. Si son iguales → solución correcta ✓

```{warning}
Errores frecuentes al resolver ecuaciones lineales:

- Cambiar de signo al **mover** un término: $x - 5 = 3 \Rightarrow x = 3 + 5$ (no $3 - 5$)
- Dividir solo un término: $\dfrac{2x + 4}{2} \neq x + 4$ — hay que dividir **cada** término
- Olvidar distribuir el signo negativo: $-(x - 3) = -x + 3$ (no $-x - 3$)
```

---

### Aplicaciones en ingeniería

**Ley de Ohm** — hallar corriente:

$$V = IR \quad \Rightarrow \quad I = \frac{V}{R}$$

Si $V = 12$ V y $R = 4$ Ω: $12 = 4I \Rightarrow I = 3$ A.

**Cinemática** — distancia uniforme:

$$d = vt \quad \Rightarrow \quad t = \frac{d}{v}$$

Un vehículo recorre $d = 180$ km a $v = 60$ km/h: $180 = 60t \Rightarrow t = 3$ h.

**Ley de Hooke** — alargamiento del resorte:

$$F = kx \quad \Rightarrow \quad x = \frac{F}{k}$$

:::{admonition} 🔧 Ingeniería — balance de costos
:class: ingenieria

El costo total de producción de $n$ piezas es $C = 500 + 35n$ (500 pesos fijos + 35 por pieza). Si el presupuesto es $C = 2275$ pesos:

$$500 + 35n = 2275$$
$$35n = 1775$$
$$n = 51$$

Se pueden fabricar **51 piezas** con ese presupuesto. La ecuación lineal traduce la restricción económica en una cantidad concreta.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_ECUACIONES_LINEALES"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Resolver $3x-7=14$ paso a paso con balanza animada (propiedades de igualdad)
2. Caso con paréntesis: $2(x+3)-5=11$ — distribuir primero
3. Caso con $x$ en ambos lados: $5x-3=2x+9$
4. Verificación sustituyendo en la ecuación original
5. Aplicación Hooke: $875=250x \to x=3.5$ m con animación de resorte
6. Aplicación Ohm: $12=4I \to I=3$ A
```

---

## Visualización interactiva

Resuelve la ecuación paso a paso. Navega con los botones y observa qué propiedad se aplica en cada paso.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s11c2-lineales" class="jsxgraph-container" style="height:480px"></div>

<script>
(function() {
    var ecuaciones = [
        {
            nombre: '3x - 7 = 14',
            pasos: [
                { izq: '3x - 7', der: '14', prop: 'Ecuacion inicial' },
                { izq: '3x - 7 + 7', der: '14 + 7', prop: 'Adicion (+7 ambos lados)' },
                { izq: '3x', der: '21', prop: 'Simplificacion' },
                { izq: '3x / 3', der: '21 / 3', prop: 'Division (/3 ambos lados)' },
                { izq: 'x', der: '7', prop: 'Solucion: x = 7' }
            ]
        },
        {
            nombre: '2(x+3) - 5 = 11',
            pasos: [
                { izq: '2(x+3) - 5', der: '11', prop: 'Ecuacion inicial' },
                { izq: '2x + 6 - 5', der: '11', prop: 'Distributiva' },
                { izq: '2x + 1', der: '11', prop: 'Simplificacion' },
                { izq: '2x', der: '10', prop: 'Sustraccion (-1 ambos lados)' },
                { izq: 'x', der: '5', prop: 'Solucion: x = 5' }
            ]
        },
        {
            nombre: '5x - 3 = 2x + 9',
            pasos: [
                { izq: '5x - 3', der: '2x + 9', prop: 'Ecuacion inicial' },
                { izq: '5x - 3 - 2x', der: '2x + 9 - 2x', prop: 'Sustraccion (-2x ambos lados)' },
                { izq: '3x - 3', der: '9', prop: 'Simplificacion' },
                { izq: '3x', der: '12', prop: 'Adicion (+3 ambos lados)' },
                { izq: 'x', der: '4', prop: 'Solucion: x = 4' }
            ]
        }
    ];

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s11c2-lineales', {
            boundingbox: [-1, 12, 14, -1],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var eqIdx = 0, pasoActual = 0;
        var dinamicos = [], btnEq = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var eq = ecuaciones[eqIdx];
            var p = eq.pasos[pasoActual];
            var esFinal = pasoActual === eq.pasos.length - 1;

            btnEq.forEach(function(b, i) {
                b.setAttribute({
                    fillColor: i === eqIdx ? '#1d4ed8' : '#e5e7eb',
                    strokeColor: i === eqIdx ? '#1d4ed8' : '#9ca3af'
                });
            });

            dinamicos.push(board.create('text', [7, 11, eq.nombre], {
                fontSize: 15, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle'
            }));

            var colorIzq = esFinal ? '#16a34a' : '#dbeafe';
            var colorDer = esFinal ? '#16a34a' : '#ffedd5';

            dinamicos.push(board.create('polygon',
                [[2, 8.5], [5.5, 8.5], [5.5, 7], [2, 7]], {
                fillColor: colorIzq, fillOpacity: 0.85, strokeColor: '#374151',
                vertices: { visible: false }
            }));
            dinamicos.push(board.create('polygon',
                [[8.5, 8.5], [12, 8.5], [12, 7], [8.5, 7]], {
                fillColor: colorDer, fillOpacity: 0.85, strokeColor: '#374151',
                vertices: { visible: false }
            }));

            dinamicos.push(board.create('text', [3.75, 7.75, p.izq], {
                fontSize: 13, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [10.25, 7.75, p.der], {
                fontSize: 13, color: '#c2410c', fontWeight: 'bold', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 7.75, '='], {
                fontSize: 18, fontWeight: 'bold', anchorX: 'middle'
            }));

            dinamicos.push(board.create('text', [7, 5.8, p.prop], {
                fontSize: 12, color: '#7c3aed', fontStyle: 'italic', anchorX: 'middle'
            }));

            dinamicos.push(board.create('text', [7, 10.2,
                'Paso ' + (pasoActual + 1) + ' de ' + eq.pasos.length], {
                fontSize: 11, color: '#374151', anchorX: 'middle'
            }));

            if (pasoActual > 0) {
                var btnPrev = board.create('text', [4, 3.5, '< Anterior'], {
                    fontSize: 12, color: '#374151', fontWeight: 'bold', anchorX: 'middle',
                    cssStyle: 'cursor:pointer; padding:5px 12px; background:#f1f5f9; border-radius:6px;'
                });
                btnPrev.on('down', function() { pasoActual--; dibujar(); });
                dinamicos.push(btnPrev);
            }
            if (pasoActual < eq.pasos.length - 1) {
                var btnNext = board.create('text', [10, 3.5, 'Siguiente >'], {
                    fontSize: 12, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle',
                    cssStyle: 'cursor:pointer; padding:5px 12px; background:#dbeafe; border-radius:6px;'
                });
                btnNext.on('down', function() { pasoActual++; dibujar(); });
                dinamicos.push(btnNext);
            }
        }

        ecuaciones.forEach(function(eq, i) {
            var btn = board.create('button', [0.5 + i * 4.2, 12.2, eq.nombre.substring(0, 12)], {
                fixed: true, highlight: false, size: 2,
                fillColor: '#e5e7eb', strokeColor: '#9ca3af'
            });
            (function(idx) {
                btn.on('down', function() { eqIdx = idx; pasoActual = 0; dibujar(); });
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
Tres ecuaciones lineales (simple, con paréntesis, con $x$ en ambos lados). Botones superiores cambian de ecuación; botones Anterior/Siguiente navegan los pasos de resolución. Al llegar a la solución, los recuadros se vuelven verdes. Refuerza el uso sistemático de las propiedades de la igualdad.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeFK5NOCgRkVaCIQEmRZavObnyOJiQpKGDrwTUhLwAecl_zIA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Ecuaciones lineales
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "3x - 7 = 14 → x = ___" → 7
P2 (Fill): "2(x+3) - 5 = 11 → x = ___" → 5
P3 (Fill): "5x - 3 = 2x + 9 → x = ___" → 4
P4 (Fill): "x/4 + 3 = 7 → x = ___" → 16
P5 (MC): "Primer paso para 4(x-1)=20:" → Distribuir o dividir entre 4
P6 (Fill ingeniería): "875 = 250x → x = ___ m" → 3.5
P7 (Fill ingeniería): "12 = 4I → I = ___ A" → 3
P8 (T/F): "Siempre verificas sustituyendo en la ecuación original." → Verdadero
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Ecuación lineal
  - Forma $ax + b = 0$; incógnita con exponente 1
* - Estrategia
  - Simplificar → agrupar $x$ → agrupar constantes → despejar
* - Propiedades clave
  - Adición, sustracción, multiplicación y división en ambos lados
* - Con paréntesis
  - Distribuir antes de mover términos
* - Verificación
  - Sustituir en la ecuación **original** y comparar ambos miembros
* - Ingeniería
  - Hooke ($F=kx$), Ohm ($V=IR$), cinemática ($d=vt$)
```

:::{admonition} Siguiente clase
:class: tip
Ya resuelves ecuaciones lineales numéricas. En la siguiente clase aprenderás a **despejar una variable** de fórmulas con varias letras — habilidad esencial para aplicar ecuaciones de ingeniería.

➡️ [Ir a S11·C3 Ecuaciones con literales](s11_c3_ecuaciones_con_literales.md)
:::
