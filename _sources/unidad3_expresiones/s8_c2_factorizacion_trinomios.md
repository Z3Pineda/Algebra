---
title: "S8·C2 Factorización de trinomios"
---

# S8·C2 Factorización de trinomios

:::{admonition} 🔧 Ecuación de movimiento de un pistón
:class: ingenieria

La posición vertical de un pistón (en cm) se modela con:

$$s(t) = t^2 - 7t + 12$$

El ingeniero necesita saber **en qué instantes** el pistón pasa por la posición de referencia $s = 0$:

$$t^2 - 7t + 12 = 0$$

En lugar de usar la fórmula general, puede **factorizar** el trinomio. Busca dos números que sumen $-7$ y multipliquen $12$:

$$(-3) + (-4) = -7, \qquad (-3)(-4) = 12$$

Entonces:

$$t^2 - 7t + 12 = (t - 3)(t - 4) = 0$$

El pistón está en $s = 0$ cuando $t = 3$ s o $t = 4$ s. La factorización convierte una ecuación cuadrática en **dos ecuaciones lineales** mucho más sencillas — una herramienta esencial en análisis de fuerzas y movimiento.
:::

**Pregunta detonadora**

> En $x^2 + 5x + 6$, ¿qué dos números suman $5$ y multiplican $6$? ¿Cómo escribirías el trinomio como producto de dos binomios?

---

## Teoría

### ¿Qué es un trinomio cuadrático?

Un **trinomio cuadrático** es una expresión de tres términos donde el mayor exponente es $2$:

$$ax^2 + bx + c \qquad (a \neq 0)$$

**Factorizar** un trinomio significa escribirlo como **producto de dos binomios**:

$$ax^2 + bx + c = (\_x + \_)(\_x + \_)$$

Si el trinomio proviene de multiplicar dos binomios, al factorizar "deshacemos" esa multiplicación — el proceso inverso del producto de binomios que viste en la semana 7.

---

### Caso 1: $x^2 + bx + c$ (coeficiente principal $a = 1$)

Cuando el coeficiente de $x^2$ es $1$, buscamos dos números $m$ y $n$ tales que:

$$\begin{cases} m + n = b \\ m \cdot n = c \end{cases}$$

Si los encontramos:

$$x^2 + bx + c = (x + m)(x + n)$$

**¿Por qué funciona?** Al expandir $(x+m)(x+n) = x^2 + (m+n)x + mn$, el término central es la **suma** y el término constante es el **producto**.

---

### Método de tanteo ($x^2 + bx + c$)

| Paso | Acción |
|------|--------|
| 1 | Listar los pares de factores de $c$ |
| 2 | Buscar el par cuya **suma** sea $b$ |
| 3 | Escribir $(x + m)(x + n)$ |
| 4 | Verificar multiplicando |

**Ejemplo 1:**

$$x^2 + 7x + 12$$

Factores de $12$: $(1,12)$, $(2,6)$, $(3,4)$. El par que suma $7$ es $(3, 4)$:

$$x^2 + 7x + 12 = (x + 3)(x + 4)$$

**Ejemplo 2 — signos distintos:**

$$x^2 - 5x + 6$$

Necesitamos suma $-5$ y producto $+6$. Como el producto es positivo, ambos números tienen el **mismo signo**. Como la suma es negativa, ambos son negativos: $(-2)(-3) = 6$ y $(-2)+(-3) = -5$:

$$x^2 - 5x + 6 = (x - 2)(x - 3)$$

**Ejemplo 3 — término constante negativo:**

$$x^2 + x - 6$$

Producto $-6$ (signos opuestos). Suma $+1$: los números son $+3$ y $-2$:

$$x^2 + x - 6 = (x + 3)(x - 2)$$

**Regla de signos para el tanteo:**

| Signo de $c$ | Signo de $b$ | Signos de $m$ y $n$ |
|:------------:|:------------:|---------------------|
| $+$ | $+$ | Ambos positivos |
| $+$ | $-$ | Ambos negativos |
| $-$ | $+$ | El mayor en valor absoluto es positivo |
| $-$ | $-$ | El mayor en valor absoluto es negativo |

```{warning}
El método de tanteo solo funciona directamente cuando $a = 1$. Si el coeficiente de $x^2$ es distinto de $1$, usa primero factor común (si existe) o el **método AC**.
```

---

### Caso 2: $ax^2 + bx + c$ con $a \neq 1$

Cuando el coeficiente principal no es $1$, el tanteo directo sobre $c$ ya no basta. Se usa el **método AC** (también llamado *splitting the middle term* o *agrupación*):

$$\text{Producto } AC = a \cdot c$$

**Procedimiento AC:**

| Paso | Acción |
|------|--------|
| 1 | Calcular $AC = a \cdot c$ |
| 2 | Encontrar dos números $m$, $n$ tales que $m + n = b$ y $m \cdot n = AC$ |
| 3 | Reescribir el término $bx$ como $mx + nx$ |
| 4 | Agrupar por pares y sacar factor común en cada grupo |
| 5 | Sacar el binomio común del segundo paso |

**Ejemplo 4:**

$$2x^2 + 7x + 3$$

$AC = 2 \cdot 3 = 6$. Buscar suma $7$, producto $6$: los números son $1$ y $6$.

$$2x^2 + 7x + 3 = 2x^2 + 6x + x + 3$$

Agrupar:

$$= 2x(x + 3) + 1(x + 3) = (2x + 1)(x + 3)$$

**Ejemplo 5:**

$$3x^2 - 10x + 8$$

$AC = 3 \cdot 8 = 24$. Suma $-10$, producto $24$: $(-4)(-6) = 24$, $(-4)+(-6) = -10$.

$$3x^2 - 10x + 8 = 3x^2 - 4x - 6x + 8 = x(3x - 4) - 2(3x - 4) = (x - 2)(3x - 4)$$

**Ejemplo 6 — con factor común previo:**

$$4x^2 + 12x + 8 = 4(x^2 + 3x + 2) = 4(x + 1)(x + 2)$$

Siempre verifica si hay **factor común monomio** antes de aplicar AC — simplifica el trabajo.

---

### Verificación

Multiplica los binomios resultantes. Debes recuperar el trinomio original:

$$(x + 3)(x + 4) = x^2 + 4x + 3x + 12 = x^2 + 7x + 12 \checkmark$$

$$(2x + 1)(x + 3) = 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3 \checkmark$$

---

### Conexión con ingeniería

:::{admonition} 🔧 Análisis de fuerzas en equilibrio
:class: ingenieria

La fuerza neta sobre un componente se modela como:

$$F(x) = x^2 - x - 6 \quad \text{(N)}$$

Para hallar los puntos de **equilibrio** ($F = 0$), factoriza:

$$x^2 - x - 6 = (x - 3)(x + 2) = 0$$

$$x = 3 \quad \text{o} \quad x = -2$$

La factorización revela directamente las posiciones donde la fuerza neta es cero — sin necesidad de la fórmula cuadrática. En cinemática ocurre lo mismo: factorizar $s(t) = 0$ da los instantes en que el cuerpo cruza una posición de referencia.
:::

**Ejemplo 7 — movimiento:**

Velocidad de una pieza móvil: $v(t) = 2t^2 - 9t + 4$. ¿Cuándo $v = 0$?

$AC = 2 \cdot 4 = 8$. Suma $-9$, producto $8$: $-1$ y $-8$.

$$2t^2 - 9t + 4 = 2t^2 - t - 8t + 4 = t(2t - 1) - 4(2t - 1) = (t - 4)(2t - 1)$$

$$v = 0 \Rightarrow t = 4 \text{ s} \quad \text{o} \quad t = 0.5 \text{ s}$$

---

### Cuándo usar cada método

```{list-table}
:header-rows: 1
:widths: 40 60

* - Situación
  - Método recomendado
* - $x^2 + bx + c$
  - **Tanteo:** buscar $m+n=b$, $mn=c$
* - $ax^2 + bx + c$, $a \neq 1$
  - **AC:** producto $a \cdot c$, luego agrupación
* - Todos los términos con factor común
  - Sacar factor común **primero**, luego tanteo o AC
* - Verificación
  - Expandir el producto de binomios
```

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_FACTORIZACION_TRINOMIOS"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Recordar que $(x+m)(x+n) = x^2 + (m+n)x + mn$ — la suma y el producto
2. Ejemplo tanteo: $x^2 + 7x + 12$ — listar factores de 12, elegir 3 y 4
3. Caso con signos: $x^2 - 5x + 6$ — ambos negativos
4. Caso $x^2 + x - 6$ — signos opuestos, producto negativo
5. Transición a $2x^2 + 7x + 3$: calcular $AC = 6$, dividir $7x$ en $6x + x$
6. Agrupar y sacar $(x+3)$ — aparece $(2x+1)(x+3)$
7. Cierre ingeniería: $t^2 - 7t + 12 = 0$ → tiempos $t = 3$ y $t = 4$ s
```

---

## Visualización interactiva

Ajusta $b$ y $c$ en $x^2 + bx + c$ y observa la parábola junto con su factorización (cuando las raíces son enteras).

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s8c2-trinomios" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function factorPairs(c) {
        var pairs = [], abs = Math.abs(c);
        for (var i = 1; i <= abs; i++) {
            if (abs % i === 0) {
                var j = abs / i;
                if (c > 0) {
                    pairs.push([i, j], [-i, -j]);
                } else {
                    pairs.push([i, -j], [-i, j]);
                }
            }
        }
        return pairs;
    }

    function findMN(b, c) {
        var pairs = factorPairs(c);
        for (var k = 0; k < pairs.length; k++) {
            if (pairs[k][0] + pairs[k][1] === b) return pairs[k];
        }
        return null;
    }

    function fmtRoot(r) {
        return r >= 0 ? '(x + ' + r + ')' : '(x - ' + (-r) + ')';
    }

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s8c2-trinomios', {
            boundingbox: [-8, 20, 8, -10],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slB = board.create('slider', [[-7, 18], [3, 18], [-8, -5, 8]], {
            name: 'b', snapWidth: 1, fillColor: '#3b82f6' });
        var slC = board.create('slider', [[-7, 16], [3, 16], [-6, 12, 18]], {
            name: 'c', snapWidth: 1, fillColor: '#f97316' });

        var dinamicos = [];
        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var b = slB.Value(), c = slC.Value();
            var mn = findMN(b, c);
            var disc = b * b - 4 * c;

            dinamicos.push(board.create('functiongraph',
                function(x) { return x * x + b * x + c; },
                { strokeColor: '#1d4ed8', strokeWidth: 2.5 }
            ));

            if (mn) {
                var m = mn[0], n = mn[1];
                var r1 = -m, r2 = -n;
                dinamicos.push(board.create('point', [r1, 0], {
                    name: 'x=' + r1, size: 4, fillColor: '#dc2626', strokeColor: '#dc2626',
                    fixed: true, label: { offset: [0, 12], fontSize: 11 }
                }));
                dinamicos.push(board.create('point', [r2, 0], {
                    name: 'x=' + r2, size: 4, fillColor: '#dc2626', strokeColor: '#dc2626',
                    fixed: true, label: { offset: [0, 12], fontSize: 11 }
                }));
                var signM = m >= 0 ? '+' + m : '' + m;
                var signN = n >= 0 ? '+' + n : '' + n;
                dinamicos.push(board.create('text', [-7.5, 12,
                    'x² ' + (b >= 0 ? '+' : '') + b + 'x ' + (c >= 0 ? '+' : '') + c +
                    ' = ' + fmtRoot(m) + fmtRoot(n)], {
                    fontSize: 13, color: '#1d4ed8', fontWeight: 'bold'
                }));
                dinamicos.push(board.create('text', [-7.5, 10.5,
                    'Tanteo: m=' + m + ', n=' + n + '  →  m+n=' + b + ',  m·n=' + (m*n)], {
                    fontSize: 11, color: '#374151'
                }));
            } else {
                dinamicos.push(board.create('text', [-7.5, 12,
                    'x² ' + (b >= 0 ? '+' : '') + b + 'x ' + (c >= 0 ? '+' : '') + c +
                    ' — no factorizable con enteros'], {
                    fontSize: 12, color: '#9a3412', fontWeight: 'bold'
                }));
                dinamicos.push(board.create('text', [-7.5, 10.5,
                    'Δ = b² - 4c = ' + disc + (disc < 0 ? ' (sin raíces reales)' : ''), {
                    fontSize: 11, color: '#6b7280'
                }));
            }
        }

        slB.on('drag', dibujar);
        slC.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Parábola de $y = x^2 + bx + c$ con deslizadores para $b$ y $c$. Cuando el trinomio es factorizable con enteros, marca las raíces en rojo y muestra la descomposición $(x+m)(x+n)$ junto con el par $m$, $n$ del tanteo. Si no hay factorización entera, indica que no es factorizable con enteros y muestra el discriminante. Conecta la factorización con los ceros de la función — clave para ecuaciones de movimiento y fuerzas.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdbCga5BHcS-ZO9vsmevThUnVu1EQz4foMvYrY4LczHi_gDfQ/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Factorización de trinomios
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~12 min):**

P1 (Fill): "x² + 8x + 15 = (x + ___)(x + ___)" → 3, 5 (o 5, 3)
P2 (Fill): "x² - 6x + 8 = (x - ___)(x - ___)" → 2, 4
P3 (Fill): "x² + 2x - 15 = (x + ___)(x - ___)" → 5, 3
P4 (Fill): "2x² + 7x + 3 = (2x + ___)(x + ___)" → 1, 3
P5 (MC): "AC de 3x² - 10x + 8" → 24
P6 (Fill): "3x² - 10x + 8 = (x - 2)(___x - 4)" → 3
P7 (Fill ingeniería): "t² - 7t + 12 = 0 → t = ___ o t = ___" → 3, 4
P8 (T/F): "x² + 4x + 5 se factoriza con enteros" → Falso (Δ = -4)
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Tipo
  - Método y condición
* - $x^2 + bx + c$
  - **Tanteo:** buscar $m$, $n$ con $m+n=b$ y $m \cdot n = c$
* - $ax^2 + bx + c$
  - **AC:** calcular $a \cdot c$, dividir $bx$, agrupar y factorizar
* - Paso previo
  - Sacar factor común monomio si todos los términos lo comparten
* - Verificación
  - Expandir $(\_)(\_)$ debe dar el trinomio original
* - Ingeniería
  - Factorizar $= 0$ da las soluciones de ecuaciones de movimiento y fuerzas
```

:::{admonition} Siguiente clase
:class: tip
Ya dominas la factorización de trinomios cuadráticos. En la siguiente clase verás un patrón especial que aparece constantemente en ingeniería: la **diferencia de cuadrados** — cuando dos términos son cuadrados perfectos con signos opuestos.

➡️ [Ir a S8·C3 Diferencia de cuadrados](s8_c3_diferencia_cuadrados.md)
:::
