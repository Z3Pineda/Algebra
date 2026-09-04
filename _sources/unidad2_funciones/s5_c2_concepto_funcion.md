---
title: "S5·C2 Concepto de función"
---

# S5·C2 Concepto de función

:::{admonition} 🔧 El velocímetro de un automóvil
:class: ingenieria

El velocímetro de un automóvil muestra la velocidad en cada instante de tiempo. Para cualquier momento $t$ que elijas, el velocímetro da **exactamente un valor** de velocidad — nunca dos velocidades al mismo tiempo.

Esta es la diferencia clave entre una relación cualquiera y una **función**: para cada entrada, hay **exactamente una salida**.

Si el velocímetro pudiera mostrar dos velocidades distintas al mismo tiempo (por ejemplo, 60 km/h y 80 km/h simultáneamente), sería inútil como instrumento de medición. La utilidad del velocímetro depende de que sea una función.
:::

**Pregunta detonadora**

> Una máquina CNC tiene un sensor de temperatura. En un momento dado, el sensor puede dar ¿uno o varios valores de temperatura? ¿Qué pasaría si diera dos valores distintos al mismo tiempo?

---

## Teoría

### ¿Qué es una función?

**Definición simple:**
Una función es una relación donde cada elemento del dominio tiene **exactamente un** elemento en el codominio. No más, no menos.

**Definición formal:**
Una función $f$ de $A$ en $B$ es una relación $f \subseteq A \times B$ tal que para todo $a \in A$ existe **exactamente un** $b \in B$ con $(a, b) \in f$.

Se escribe:
$$f: A \to B$$
$$f(a) = b$$

Se lee: *"$f$ de $a$ es igual a $b$"* o *"la imagen de $a$ bajo $f$ es $b$"*

---

### La condición de función — dos requisitos

Para que una relación sea función deben cumplirse **simultáneamente**:

| Requisito | Descripción | Falla cuando |
|-----------|-------------|--------------|
| **Existencia** | Todo elemento de $A$ tiene al menos una imagen | Algún $a \in A$ no tiene flecha |
| **Unicidad** | Todo elemento de $A$ tiene a lo sumo una imagen | Algún $a \in A$ tiene dos o más flechas |

```{warning}
Una función puede tener dos elementos del dominio con la **misma imagen** — eso está permitido.  
Lo que **no** está permitido es que un elemento del dominio tenga **dos imágenes distintas**.

Ejemplo permitido: $f(2) = 5$ y $f(7) = 5$ ✅ (dos entradas, misma salida)  
Ejemplo prohibido: $f(3) = 4$ y $f(3) = 9$ ❌ (misma entrada, dos salidas)
```

---

### Notación funcional

$$f: A \to B \qquad f(x) = \text{expresión en } x$$

**Ejemplos:**

$$f: \mathbb{R} \to \mathbb{R} \qquad f(x) = 2x + 3$$

Para evaluar una función, se sustituye $x$ por el valor:

$$f(4) = 2(4) + 3 = 11$$
$$f(-1) = 2(-1) + 3 = 1$$
$$f(0) = 2(0) + 3 = 3$$

:::{admonition} 🔧 Función en ingeniería
:class: ingenieria
La ley de Hooke para un resorte:

$$F(x) = k \cdot x$$

Donde $x$ es la elongación y $k$ es la constante del resorte. Para cada elongación $x$ hay **exactamente una** fuerza $F$ — es una función.

Si $k = 200$ N/m y $x = 0.05$ m:
$$F(0.05) = 200 \times 0.05 = 10 \text{ N}$$
:::

---

### Prueba de la línea vertical

Para saber si una gráfica en el plano representa una función:

> **Si cualquier línea vertical toca la gráfica en más de un punto, no es función.**

| Gráfica | ¿Función? | Razón |
|---------|:---------:|-------|
| Línea recta $y = 2x+1$ | ✅ | Cada vertical toca exactamente un punto |
| Parábola $y = x^2$ | ✅ | Cada vertical toca exactamente un punto |
| Círculo $x^2+y^2=4$ | ❌ | Las verticales entre $-2$ y $2$ tocan dos puntos |
| Semicírculo superior | ✅ | Cada vertical toca exactamente un punto |

:::{admonition} 🔧 Prueba de la línea vertical en ingeniería
:class: ingenieria
La gráfica de presión vs. tiempo de un compresor debe pasar la prueba de la línea vertical — en cada instante de tiempo la presión tiene un valor único. Si la gráfica "se dobla hacia atrás", indicaría que en ese instante hay dos presiones distintas, lo cual es físicamente imposible.
:::

---

### Funciones definidas por partes

Una función puede tener diferentes reglas para diferentes partes del dominio:

$$f(x) = \begin{cases} x^2 & \text{si } x < 0 \\ 2x + 1 & \text{si } x \geq 0 \end{cases}$$

$$f(-3) = (-3)^2 = 9 \qquad f(0) = 2(0)+1 = 1 \qquad f(4) = 2(4)+1 = 9$$

:::{admonition} 🔧 Función por partes en ingeniería
:class: ingenieria
El costo de energía eléctrica en muchas tarifas industriales:

$$C(kWh) = \begin{cases} 1.20\ \$/kWh & \text{si } kWh \leq 1000 \\ 0.95\ \$/kWh & \text{si } kWh > 1000 \end{cases}$$

Un consumo de 800 kWh cuesta $1.20 \times 800 = \$960$.  
Un consumo de 1500 kWh cuesta $0.95 \times 1500 = \$1425$.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_CONCEPTO_FUNCION"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Mostrar el velocímetro: cada instante t → exactamente una velocidad v
2. Diagrama sagital: mostrar una relación que SÍ es función (una flecha por elemento de A)
3. Diagrama sagital: mostrar una relación que NO es función (dos flechas desde un elemento)
4. Mostrar f(x)=2x+3 evaluada en x=1,2,3 — la "máquina" que transforma entradas en salidas
5. Prueba de la línea vertical: línea recta ✅, círculo ❌ con animación
6. Cierre: función = relación con unicidad garantizada
```

---

## Visualización interactiva

Construye una relación con el diagrama de flechas. El sistema detecta si es función o no.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s5c2-funcion" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s5c2-funcion', {
            boundingbox: [-1, 11, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var setA = ['1','2','3'];
        var setB = ['a','b','c','d'];
        var rel = [
            [true,  false, false, false],
            [false, true,  false, false],
            [false, false, true,  false]
        ];

        var flechas = [];
        var dinamicos = [];

        board.create('ellipse', [[-0.2, 5.5], [2.8, 5.5], [1.3, 5.5]], {
            strokeColor: '#1d4ed8', strokeWidth: 2,
            fillColor: '#dbeafe', fillOpacity: 0.3 });
        board.create('ellipse', [[9.2, 5.5], [12.2, 5.5], [10.7, 5.5]], {
            strokeColor: '#c2410c', strokeWidth: 2,
            fillColor: '#ffedd5', fillOpacity: 0.3 });

        board.create('text', [1.3, 9.8, 'A (dominio)'], {
            fontSize: 12, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' });
        board.create('text', [10.7, 9.8, 'B (codominio)'], {
            fontSize: 12, color: '#c2410c', fontWeight: 'bold', anchorX: 'middle' });

        var ptsA = setA.map(function(e, i) {
            return board.create('point', [1.3, 7.8 - i*1.8], {
                size: 7, color: '#1d4ed8', fixed: true, name: e,
                label: { offset: [-15, 0], fontSize: 13, color: '#1d4ed8' }
            });
        });

        var ptsB = setB.map(function(e, i) {
            return board.create('point', [10.7, 8.2 - i*1.5], {
                size: 7, color: '#c2410c', fixed: true, name: e,
                label: { offset: [15, 0], fontSize: 13, color: '#c2410c' }
            });
        });

        function esFuncion() {
            for (var i = 0; i < 3; i++) {
                var count = 0;
                for (var j = 0; j < 4; j++) {
                    if (rel[i][j]) count++;
                }
                if (count !== 1) return false;
            }
            return true;
        }

        function razonNoEsFuncion() {
            var sinFlecha = [];
            var dosFlecha = [];
            for (var i = 0; i < 3; i++) {
                var count = 0;
                for (var j = 0; j < 4; j++) {
                    if (rel[i][j]) count++;
                }
                if (count === 0) sinFlecha.push(setA[i]);
                if (count > 1) dosFlecha.push(setA[i]);
            }
            if (sinFlecha.length > 0) return 'El elemento ' + sinFlecha.join(',') + ' no tiene imagen';
            if (dosFlecha.length > 0) return 'El elemento ' + dosFlecha.join(',') + ' tiene mas de una imagen';
            return '';
        }

        function limpiar() {
            flechas.forEach(function(f) { try { board.removeObject(f); } catch(e){} });
            flechas = [];
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e){} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 4; j++) {
                    if (rel[i][j]) {
                        var f = board.create('arrow', [ptsA[i], ptsB[j]], {
                            strokeColor: '#7c3aed', strokeWidth: 2.5
                        });
                        flechas.push(f);
                    }
                }
            }

            var esFun = esFuncion();
            var color = esFun ? '#16a34a' : '#dc2626';
            var msg = esFun ? 'ES FUNCION ✓' : 'NO ES FUNCION ✗';
            var razon = esFun ? 'Cada elemento de A tiene exactamente una imagen' : razonNoEsFuncion();

            dinamicos.push(board.create('text', [6, -0.5, msg], {
                fontSize: 16, color: color, fontWeight: 'bold', anchorX: 'middle' }));
            dinamicos.push(board.create('text', [6, -1.5, razon], {
                fontSize: 11, color: color, anchorX: 'middle', fontStyle: 'italic' }));
        }

        // Botones
        var yBtn = 10.8;
        setA.forEach(function(a, i) {
            setB.forEach(function(b, j) {
                var btn = board.create('text',
                    [3.5 + j*2.2, yBtn - i*1.0, a+'→'+b], {
                    fontSize: 10,
                    color: rel[i][j] ? '#7c3aed' : '#9ca3af',
                    anchorX: 'middle',
                    cssStyle: 'cursor:pointer; padding:2px 5px; background:#f1f5f9; border-radius:4px;'
                });
                (function(ii, jj, btnRef) {
                    btnRef.on('down', function() {
                        rel[ii][jj] = !rel[ii][jj];
                        btnRef.setAttribute({ color: rel[ii][jj] ? '#7c3aed' : '#9ca3af' });
                        dibujar();
                    });
                })(i, j, btn);
            });
        });

        board.create('text', [6, -2.5,
            'Clic en los pares para activarlos — el sistema detecta si es funcion'], {
            fontSize: 10, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle' });

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
El alumno activa/desactiva pares con botones. El sistema evalúa si la relación es función y muestra el diagnóstico en verde o rojo con la razón exacta (sin imagen, o con más de una imagen). Ideal para explorar los dos casos de falla.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSeV_XeQZf7r-5NqLetgV9B_T4kqoBUfwSVnsk98pok2VGhrgw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Concepto de función
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "¿Cuál condición debe cumplir una relación para ser función?"
→ Cada elemento del dominio tiene exactamente una imagen

P2 (T/F): "Si f(2)=5 y f(7)=5, entonces f NO es función." → Falso (dos entradas pueden tener la misma salida)

P3 (T/F): "Si f(3)=4 y f(3)=9, entonces f NO es función." → Verdadero (una entrada con dos salidas)

P4 (Fill): "Sea f(x)=3x-2. f(4) = ___" → 10

P5 (Fill): "Sea f(x)=x²+1. f(-3) = ___" → 10

P6 (MC): "¿Cuál gráfica NO es función?" → Un círculo completo

P7 (MC ingeniería): "El sensor de temperatura de un horno da dos lecturas distintas al mismo tiempo. El sensor es..." → No funciona como función

P8 (MC): "¿Cuántas flechas debe salir de cada elemento del dominio para que sea función?" → Exactamente 1
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Definición
* - Función $f: A \to B$
  - Relación donde cada $a \in A$ tiene **exactamente una** imagen en $B$
* - Notación
  - $f(a) = b$ — la imagen de $a$ es $b$
* - Condición 1
  - **Existencia:** todo elemento del dominio tiene imagen
* - Condición 2
  - **Unicidad:** ningún elemento del dominio tiene dos imágenes
* - Prueba línea vertical
  - Si una vertical toca más de un punto → no es función
* - Permitido
  - Dos elementos del dominio con la **misma** imagen
```

:::{admonition} Siguiente clase
:class: tip
Ya sabes qué es una función. En la siguiente clase compararemos directamente relación vs. función con ejemplos concretos de ingeniería para tener el concepto completamente claro.

➡️ [Ir a S5·C3 Diferencia entre relación y función](s5_c3_relacion_vs_funcion.md)
:::
