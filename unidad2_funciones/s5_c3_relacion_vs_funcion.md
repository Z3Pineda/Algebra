---
title: "S5·C3 Diferencia entre relación y función"
---

# S5·C3 Diferencia entre relación y función

:::{admonition} 🔧 Sensores en una línea de producción
:class: ingenieria

Una línea de producción tiene cuatro mediciones:

**Medición 1 — Temperatura del horno:**
Cada segundo se registra exactamente una temperatura. En $t = 30$ s, la temperatura es 850°C. Solo 850°C, no 840°C al mismo tiempo.
→ **Función** ✅

**Medición 2 — Operadores por turno:**
El turno matutino tiene a García y Martínez. El turno nocturno solo tiene a López. Un turno puede tener varios operadores.
→ **Relación, no función** ❌

**Medición 3 — Presión del sistema hidráulico:**
Un manómetro registra la presión en cada instante. Un instante → una presión.
→ **Función** ✅

**Medición 4 — Fallas por componente:**
Un componente puede haber fallado por vibración, temperatura, desgaste o combinaciones. Un componente → varias causas posibles.
→ **Relación, no función** ❌

La diferencia es siempre la misma: **¿una entrada puede tener más de una salida?**
:::

---

## Teoría

### La diferencia en una tabla

| Característica | Relación | Función |
|----------------|----------|---------|
| Definición | $R \subseteq A \times B$ | $f \subseteq A \times B$ con unicidad |
| Flechas por elemento de $A$ | 0, 1, 2, 3... (cualquier cantidad) | Exactamente 1 |
| ¿Toda función es relación? | — | ✅ Sí |
| ¿Toda relación es función? | — | ❌ No necesariamente |
| Notación | $a\ R\ b$ | $f(a) = b$ |

---

### Los cuatro casos posibles

**Caso 1 — Función ✅**

Cada elemento de $A$ tiene exactamente una flecha:

$$A = \{1, 2, 3\} \quad B = \{a, b, c, d\}$$
$$f = \{(1,a),\ (2,c),\ (3,a)\}$$

El 1 va a $a$, el 2 va a $c$, el 3 va a $a$. Todos con exactamente una imagen. ✅

---

**Caso 2 — No función: elemento sin imagen ❌**

$$R = \{(1,a),\ (2,c)\}$$

El elemento 3 no tiene ninguna imagen → falla la condición de **existencia**.

---

**Caso 3 — No función: elemento con dos imágenes ❌**

$$R = \{(1,a),\ (1,b),\ (2,c),\ (3,d)\}$$

El elemento 1 tiene dos imágenes ($a$ y $b$) → falla la condición de **unicidad**.

---

**Caso 4 — Dos elementos con la misma imagen ✅ (sí es función)**

$$f = \{(1,a),\ (2,a),\ (3,b)\}$$

Los elementos 1 y 2 van al mismo destino $a$ — eso está permitido. ✅

```{warning}
El Caso 4 confunde a muchos estudiantes. Recuerda:

- Dos **entradas** con la misma **salida** → ✅ función permitida
- Una **entrada** con dos **salidas** distintas → ❌ no es función

La restricción es solo sobre las entradas, no sobre las salidas.
```

---

### Identificación en gráficas

**Prueba de la línea vertical:** traza líneas verticales sobre la gráfica.

| Gráfica | Resultado | ¿Función? |
|---------|-----------|:---------:|
| $y = x + 2$ | Cada vertical toca 1 punto | ✅ |
| $y = x^2 - 4$ | Cada vertical toca 1 punto | ✅ |
| $x^2 + y^2 = 9$ | Las verticales interiores tocan 2 puntos | ❌ |
| $y = |x|$ | Cada vertical toca 1 punto | ✅ |
| $x = y^2$ | Cada vertical interior toca 2 puntos | ❌ |

---

### Identificación en tablas de datos

Dado un conjunto de pares $(x, y)$, es función si y solo si **no se repite ningún valor de $x$** con diferente $y$.

| $x$ | $y$ | ¿Función? |
|:---:|:---:|:---------:|
| 1 | 5 | |
| 2 | 8 | |
| 3 | 5 | |
| 4 | 11 | |

✅ Función — ningún $x$ se repite con diferente $y$ (el 5 se repite como valor de $y$, pero eso está permitido).

| $x$ | $y$ | ¿Función? |
|:---:|:---:|:---------:|
| 1 | 5 | |
| 2 | 8 | |
| 2 | 3 | |
| 4 | 11 | |

❌ No es función — el $x = 2$ aparece con $y = 8$ y también con $y = 3$.

---

### Ejemplos de ingeniería

| Situación | ¿Función? | Razón |
|-----------|:---------:|-------|
| Tiempo → temperatura del horno | ✅ | Cada instante tiene una temperatura |
| Número de pieza → diámetro medido | ✅ | Cada pieza tiene un diámetro |
| Temperatura → presión en gas ideal (misma cantidad) | ✅ | $P = nRT/V$ — una temperatura, una presión |
| Empleado → certificaciones | ❌ | Un empleado puede tener varias certificaciones |
| Material → tratamientos disponibles | ❌ | Un material puede tratarse de varias formas |
| Pieza → posibles causas de falla | ❌ | Una pieza puede fallar por varias razones |

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_RELACION_VS_FUNCION"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Mostrar los 4 casos del diagrama sagital lado a lado
2. Marcar con ✅ o ❌ cada uno con la razón
3. Animar la prueba de la línea vertical sobre 4 gráficas distintas
4. Mostrar la tabla de datos con x repetido → detectar que no es función
5. Cierre: toda función es relación, pero no toda relación es función — diagrama de conjuntos
```

---

## Visualización interactiva

Prueba la línea vertical sobre distintas curvas. Observa si cada curva es función o no.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s5c3-prueba" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s5c3-prueba', {
            boundingbox: [-5, 6, 5, -4],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var curvas = [
            {
                nombre: 'y = x + 1  (recta)',
                fn: function(x) { return x + 1; },
                esFun: true,
                tipo: 'funcion'
            },
            {
                nombre: 'y = x²  (parabola)',
                fn: function(x) { return x*x; },
                esFun: true,
                tipo: 'funcion'
            },
            {
                nombre: 'circulo x²+y²=4',
                fn: null,
                esFun: false,
                tipo: 'circulo'
            },
            {
                nombre: 'y = |x|',
                fn: function(x) { return Math.abs(x); },
                esFun: true,
                tipo: 'funcion'
            }
        ];

        var curvaActual = 0;
        var objDinam = [];
        var curvaObj = null;

        var slX = board.create('slider', [[-4, -2.5],[4, -2.5],[-4, 0, 4]], {
            name: 'x', snapWidth: 0.1,
            baseline: { strokeColor: '#374151' },
            highline:  { strokeColor: '#7c3aed' },
            fillColor: '#7c3aed'
        });

        function limpiar() {
            objDinam.forEach(function(o) { try { board.removeObject(o); } catch(e){} });
            objDinam = [];
            if (curvaObj) { try { board.removeObject(curvaObj); } catch(e){} curvaObj = null; }
        }

        function dibujar(idx) {
            limpiar();
            var c = curvas[idx];

            if (c.tipo === 'funcion') {
                curvaObj = board.create('functiongraph', [c.fn, -5, 5], {
                    strokeColor: '#3b82f6', strokeWidth: 2.5 });
            } else {
                curvaObj = board.create('circle', [[0,0], 2], {
                    strokeColor: '#3b82f6', strokeWidth: 2.5,
                    fillColor: 'none' });
            }

            // Línea vertical en x del deslizador
            var lineaV = board.create('line',
                [function(){return [slX.Value(), -5];},
                 function(){return [slX.Value(), 5];}], {
                strokeColor: '#dc2626', strokeWidth: 1.5, dash: 2,
                straightFirst: false, straightLast: false
            });
            objDinam.push(lineaV);

            // Puntos de intersección
            if (c.tipo === 'funcion') {
                var pt = board.create('point',
                    [function(){return slX.Value();},
                     function(){return c.fn(slX.Value());}], {
                    size: 7, color: '#dc2626', fixed: true, name: '',
                    label: { fontSize: 0 }
                });
                objDinam.push(pt);

                objDinam.push(board.create('text', [-4.5, 5, function() {
                    return 'x = '+slX.Value().toFixed(2)+'  ->  y = '+c.fn(slX.Value()).toFixed(2);
                }], { fontSize: 12, color: '#dc2626', fontWeight: 'bold' }));

            } else {
                // Círculo: dos intersecciones
                var yVal = function() {
                    var r2 = 4 - slX.Value()*slX.Value();
                    return r2 >= 0 ? Math.sqrt(r2) : null;
                };
                var pt1 = board.create('point',
                    [function(){return slX.Value();},
                     function(){var v=yVal(); return v!==null?v:0;}], {
                    size: 7, color: '#dc2626', fixed: true, name: '',
                    label: { fontSize: 0 }
                });
                var pt2 = board.create('point',
                    [function(){return slX.Value();},
                     function(){var v=yVal(); return v!==null?-v:0;}], {
                    size: 7, color: '#dc2626', fixed: true, name: '',
                    label: { fontSize: 0 }
                });
                objDinam.push(pt1, pt2);

                objDinam.push(board.create('text', [-4.5, 5, function() {
                    var v = yVal();
                    if (v === null) return 'x fuera del circulo';
                    if (Math.abs(v) < 0.01) return 'x='+slX.Value().toFixed(2)+' -> y=0 (1 punto)';
                    return 'x='+slX.Value().toFixed(2)+' -> y='+v.toFixed(2)+' y y='+(-v).toFixed(2)+' (2 puntos!)';
                }], { fontSize: 11, color: '#dc2626', fontWeight: 'bold' }));
            }

            // Resultado
            var col = c.esFun ? '#16a34a' : '#dc2626';
            var msg = c.esFun ? 'ES FUNCION ✓  (pasa la prueba)' : 'NO ES FUNCION ✗  (falla la prueba)';
            objDinam.push(board.create('text', [0, -3.5, msg], {
                fontSize: 13, color: col, fontWeight: 'bold', anchorX: 'middle' }));

            // Nombre
            objDinam.push(board.create('text', [0, 5.5, c.nombre], {
                fontSize: 13, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));
        }

        // Botones de curvas
        curvas.forEach(function(c, i) {
            var btn = board.create('text', [-3.5 + i*2.2, -1.2,
                ['Recta','Parabola','Circulo','|x|'][i]], {
                fontSize: 11, color: '#374151', fontWeight: 'bold', anchorX: 'middle',
                cssStyle: 'cursor:pointer; padding:3px 8px; background:#f1f5f9; border-radius:5px;'
            });
            btn.on('down', function() { curvaActual = i; dibujar(i); });
        });

        dibujar(0);
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
4 botones para cambiar entre curvas (recta, parábola, círculo, |x|). La línea vertical roja se mueve con el deslizador. Para el círculo muestra los dos puntos de intersección y el mensaje "2 puntos!". El resultado verde/rojo indica si pasa la prueba de la línea vertical.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeov4WUggVTijvj-UKJCcVQK16PUVJY3EwwAa5XAtNTvWzlug/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Relación vs. Función
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (T/F): "Toda función es una relación." → Verdadero
P2 (T/F): "Toda relación es una función." → Falso
P3 (MC): "La tabla {(1,5),(2,8),(2,3),(4,11)} — ¿es función?" → No, x=2 tiene dos imágenes
P4 (MC): "La tabla {(1,5),(2,8),(3,5),(4,11)} — ¿es función?" → Sí, cada x tiene una sola imagen
P5 (MC): "¿Cuál gráfica NO es función?" → Un círculo completo x²+y²=9
P6 (MC ingeniería): "Número de pieza → diámetro medido. ¿Función?" → Sí
P7 (MC ingeniería): "Empleado → certificaciones que tiene. ¿Función?" → No (puede tener varias)
P8 (Fill): "Si f(2)=7 y f(2)=3 están en la misma tabla, la tabla ___ es función." → no
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 20 40 40

* - Caso
  - Descripción
  - ¿Función?
* - Cada $a$ → 1 $b$
  - Exactamente una flecha por elemento de A
  - ✅ Sí
* - Algún $a$ → 0 $b$
  - Elemento sin imagen
  - ❌ No
* - Algún $a$ → 2+ $b$
  - Elemento con dos imágenes
  - ❌ No
* - Varios $a$ → mismo $b$
  - Dos entradas, misma salida
  - ✅ Sí (permitido)
* - Prueba visual
  - Línea vertical toca 2+ puntos
  - ❌ No es función
```

:::{admonition} Siguiente clase
:class: tip
Ya sabes distinguir funciones de relaciones. En la siguiente clase aprenderás a calcular el **dominio y el rango** de una función — los conjuntos de entradas y salidas posibles.

➡️ [Ir a S5·C4 Dominio y rango de una función](s5_c4_dominio_rango.md)
:::
