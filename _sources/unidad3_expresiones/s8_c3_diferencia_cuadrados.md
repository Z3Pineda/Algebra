---
title: "S8·C3 Diferencia de cuadrados"
---

# S8·C3 Diferencia de cuadrados

:::{admonition} 🔧 Área de un anillo metálico
:class: ingenieria

Una arandela tiene radio exterior $R = 12$ mm y radio interior $r = 8$ mm. El área del metal es:

$$A = \pi R^2 - \pi r^2 = \pi(R^2 - r^2)$$

Calcular $R^2 - r^2$ directamente: $144 - 64 = 80$. Pero en diseño mecánico conviene **factorizar**:

$$R^2 - r^2 = (R + r)(R - r) = (12 + 8)(12 - 8) = (20)(4) = 80 \text{ mm}^2$$

Entonces $A = 80\pi \approx 251.3$ mm².

La factorización $(R+r)(R-r)$ es especialmente útil cuando $R$ y $r$ están definidos con **tolerancias simétricas** respecto a un radio nominal $D$:

$$R = D + t, \qquad r = D - t \quad \Rightarrow \quad R^2 - r^2 = (D+t)^2 - (D-t)^2 = 4Dt$$

Un solo cálculo con $D$ y $t$ reemplaza elevar al cuadrado dos radios distintos.
:::

**Pregunta detonadora**

> Ya sabes que $(a+b)(a-b) = a^2 - b^2$. Si tienes $x^2 - 49$, ¿puedes "leer la fórmula al revés" y escribirla como producto de dos binomios?

---

## Teoría

### La fórmula al revés

En S7·C2 aprendiste el **producto de binomios conjugados**:

$$(a + b)(a - b) = a^2 - b^2$$

La **factorización por diferencia de cuadrados** es esa misma identidad leída en sentido inverso:

$$a^2 - b^2 = (a + b)(a - b)$$

| Dirección | Operación | Fórmula |
|-----------|-----------|---------|
| Expandir (S7·C2) | Multiplicar conjugados | $(a+b)(a-b) \to a^2 - b^2$ |
| Factorizar (S8·C3) | Descomponer diferencia | $a^2 - b^2 \to (a+b)(a-b)$ |

**Regla mnemotécnica:** *"Cuadrado menos cuadrado = suma por diferencia"*

---

### ¿Cómo reconocer una diferencia de cuadrados?

Una expresión es factorizable por diferencia de cuadrados cuando cumple **las tres condiciones**:

1. Son **exactamente dos términos** (un binomio).
2. Los términos se **restan** (signo $-$ entre ellos).
3. **Ambos son cuadrados perfectos** (número, variable o expresión elevada a potencia par).

$$a^2 - b^2 \qquad \leftarrow \text{primer término cuadrado, segundo término cuadrado}$$

**Ejemplos que SÍ son diferencia de cuadrados:**

| Expresión | $a$ | $b$ | Factorización |
|-----------|:---:|:---:|---------------|
| $x^2 - 9$ | $x$ | $3$ | $(x+3)(x-3)$ |
| $4x^2 - 25$ | $2x$ | $5$ | $(2x+5)(2x-5)$ |
| $49 - y^2$ | $7$ | $y$ | $(7+y)(7-y)$ |
| $x^4 - 16$ | $x^2$ | $4$ | $(x^2+4)(x^2-4)$ |
| $(3a)^2 - (2b)^2$ | $3a$ | $2b$ | $(3a+2b)(3a-2b)$ |

---

### Procedimiento paso a paso

| Paso | Acción |
|------|--------|
| 1 | Verificar que hay dos términos con signo $-$ |
| 2 | Identificar $a$ = raíz cuadrada del primer término |
| 3 | Identificar $b$ = raíz cuadrada del segundo término |
| 4 | Escribir $(a + b)(a - b)$ |
| 5 | Verificar expandiendo |

**Ejemplo 1:**

$$x^2 - 49 = (x)^2 - (7)^2 = (x + 7)(x - 7)$$

**Ejemplo 2 — coeficientes:**

$$9x^2 - 16 = (3x)^2 - (4)^2 = (3x + 4)(3x - 4)$$

**Ejemplo 3 — orden invertido:**

$$25 - 4y^2 = (5)^2 - (2y)^2 = (5 + 2y)(5 - 2y)$$

**Ejemplo 4 — factorización repetida:**

$$x^4 - 16 = (x^2)^2 - (4)^2 = (x^2 + 4)(x^2 - 4)$$

El segundo factor sigue siendo diferencia de cuadrados:

$$x^2 - 4 = (x + 2)(x - 2)$$

Factorización completa:

$$x^4 - 16 = (x^2 + 4)(x + 2)(x - 2)$$

```{warning}
No toda resta de términos es diferencia de cuadrados.

- $x^2 - 9$ ✓ — ambos son cuadrados perfectos
- $x^2 - 6$ ✗ — $6$ no es cuadrado perfecto
- $x^2 + 9$ ✗ — es una **suma**, no una diferencia
- $x^3 - 8$ ✗ — potencias impares → diferencia de **cubos** (lo verás en la siguiente clase)
```

---

### Conexión con binomios conjugados

La factorización y el producto notable son la **misma identidad** en dos direcciones:

$$\underbrace{(a+b)(a-b)}_{\text{multiplicar conjugados}} = a^2 - b^2 = \underbrace{(a+b)(a-b)}_{\text{factorizar diferencia}}$$

**Demostración inversa (de derecha a izquierda):**

$$a^2 - b^2 = a^2 - ab + ab - b^2 = a(a - b) + b(a - b) = (a + b)(a - b)$$

Los términos $-ab$ y $+ab$ se insertan a propósito para poder agrupar — es el mismo truco del método AC, pero aquí siempre funciona porque la estructura es perfecta.

---

### Tolerancias simétricas en ingeniería

:::{admonition} 🔧 Tolerancias simétricas en dimensiones
:class: ingenieria

Un eje tiene diámetro nominal $D = 50$ mm con tolerancia $\pm 0.1$ mm:

$$D_{max} = D + t = 50.1 \text{ mm}, \qquad D_{min} = D - t = 49.9 \text{ mm}$$

Si necesitas calcular la diferencia de áreas de secciones circulares:

$$A_{max} - A_{min} = \frac{\pi}{4}\left[(D+t)^2 - (D-t)^2\right] = \frac{\pi}{4}(4Dt) = \pi D t$$

Con $D = 50$ y $t = 0.1$: $\pi D t = 50\pi(0.1) = 5\pi \approx 15.71$ mm².

La factorización $(D+t)(D-t) = D^2 - t^2$ evita elevar al cuadrado números con decimales y reduce errores de redondeo en cálculos de taller.
:::

**Ejemplo 5 — anillo con tolerancia:**

Radio exterior $R = D + t$, radio interior $r = D - t$:

$$R^2 - r^2 = (D+t)^2 - (D-t)^2 = (D+t+D-t)(D+t-(D-t)) = (2D)(2t) = 4Dt$$

Para $D = 25$ mm, $t = 0.5$ mm: $R^2 - r^2 = 4(25)(0.5) = 50$ mm².

---

### Factor común antes de factorizar

A veces hay un factor numérico o literal que se saca primero:

$$18x^2 - 50 = 2(9x^2 - 25) = 2(3x + 5)(3x - 5)$$

$$\pi R^2 - \pi r^2 = \pi(R^2 - r^2) = \pi(R + r)(R - r)$$

Siempre busca factor común **antes** de aplicar diferencia de cuadrados.

---

### Tabla de referencia

| Expresión | $a$ | $b$ | Resultado |
|-----------|:---:|:---:|-----------|
| $x^2 - 1$ | $x$ | $1$ | $(x+1)(x-1)$ |
| $x^2 - 64$ | $x$ | $8$ | $(x+8)(x-8)$ |
| $16x^2 - 9$ | $4x$ | $3$ | $(4x+3)(4x-3)$ |
| $100 - x^2$ | $10$ | $x$ | $(10+x)(10-x)$ |
| $x^4 - 1$ | $x^2$ | $1$ | $(x^2+1)(x+1)(x-1)$ |

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_DIFERENCIA_CUADRADOS"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Recordar S7·C2: $(a+b)(a-b) = a^2 - b^2$ — los términos medios se cancelan
2. Invertir la flecha: dado $x^2 - 49$, identificar $a=x$, $b=7$ → $(x+7)(x-7)$
3. Caso con coeficientes: $9x^2 - 16 = (3x+4)(3x-4)$
4. Visual geométrico: cuadrado $a \times a$ menos cuadrado $b \times b$ = rectángulo $(a+b)(a-b)$
5. Anillo: $\pi R^2 - \pi r^2 = \pi(R+r)(R-r)$
6. Tolerancias: $(D+t)^2 - (D-t)^2 = 4Dt$ — cálculo directo sin decimales
```

---

## Visualización interactiva

Ajusta los radios exterior e interior y observa cómo $R^2 - r^2 = (R+r)(R-r)$ representa el área de un anillo.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s8c3-dif-cuadrados" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s8c3-dif-cuadrados', {
            boundingbox: [-14, 14, 14, -12],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slR = board.create('slider', [[-12, 12], [-4, 12], [6, 10, 12]], {
            name: 'R', snapWidth: 0.5, fillColor: '#3b82f6' });
        var slr = board.create('slider', [[-12, 10], [-4, 10], [2, 5, 8]], {
            name: 'r', snapWidth: 0.5, fillColor: '#f97316' });

        var dinamicos = [];
        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var R = slR.Value(), r = slr.Value();
            if (r >= R) r = R - 0.5;

            // Círculo exterior
            dinamicos.push(board.create('circle', [[0, 0], R], {
                fillColor: '#dbeafe', fillOpacity: 0.5,
                strokeColor: '#1d4ed8', strokeWidth: 2
            }));
            // Círculo interior (hueco)
            dinamicos.push(board.create('circle', [[0, 0], r], {
                fillColor: '#ffffff', fillOpacity: 1,
                strokeColor: '#c2410c', strokeWidth: 2
            }));

            var R2 = Math.round(R * R * 100) / 100;
            var r2 = Math.round(r * r * 100) / 100;
            var diff = Math.round((R2 - r2) * 100) / 100;
            var suma = Math.round((R + r) * 100) / 100;
            var resta = Math.round((R - r) * 100) / 100;
            var prod = Math.round(suma * resta * 100) / 100;

            dinamicos.push(board.create('text', [4, 11,
                'R² - r² = ' + R2 + ' - ' + r2 + ' = ' + diff], {
                fontSize: 13, color: '#1d4ed8', fontWeight: 'bold'
            }));
            dinamicos.push(board.create('text', [4, 9.5,
                '(R+r)(R-r) = (' + suma + ')(' + resta + ') = ' + prod], {
                fontSize: 13, color: '#c2410c', fontWeight: 'bold'
            }));
            dinamicos.push(board.create('text', [4, 8,
                'Área anillo = π · ' + diff + ' ≈ ' + Math.round(Math.PI * diff * 10) / 10], {
                fontSize: 12, color: '#374151'
            }));
            dinamicos.push(board.create('text', [4, 6.5,
                'a² - b² = (a+b)(a-b)  ←  conjugados al revés'], {
                fontSize: 11, color: '#6b7280'
            }));

            // Rectángulo equivalente (a+b)(a-b) esquemático
            var ox = -12, oy = -10, esc = 0.35;
            var w = suma * esc, h = resta * esc;
            dinamicos.push(board.create('polygon', [
                [ox, oy], [ox + w, oy], [ox + w, oy + h], [ox, oy + h]
            ], {
                fillColor: '#fef9c3', fillOpacity: 0.7,
                strokeColor: '#ca8a04', strokeWidth: 1.5,
                vertices: { visible: false }
            }));
            dinamicos.push(board.create('text', [ox + w / 2, oy - 0.8,
                'R+r = ' + suma], { fontSize: 10, anchorX: 'middle', color: '#ca8a04' }));
            dinamicos.push(board.create('text', [ox - 1.2, oy + h / 2,
                'R-r = ' + resta], { fontSize: 10, color: '#ca8a04' }));
            dinamicos.push(board.create('text', [ox + w / 2, oy + h / 2,
                'área = ' + prod], {
                fontSize: 10, anchorX: 'middle', color: '#92400e', fontWeight: 'bold'
            }));
        }

        slR.on('drag', dibujar);
        slr.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Anillo con radios $R$ (azul) y $r$ (naranja) controlados por deslizadores. Muestra en paralelo $R^2 - r^2$ y su forma factorizada $(R+r)(R-r)$, verificando que ambas dan el mismo valor. Incluye un rectángulo equivalente de lados $(R+r)$ y $(R-r)$ para conectar la diferencia de cuadrados con el área geométrica. Refuerza el vínculo con binomios conjugados de S7·C2.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScVyXjuUlz5_CtPcvyGYg--qOEXXbjiGhRMMiFq9e3jdFBEwg/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Diferencia de cuadrados
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "x² - 49 = (x + ___)(x - ___)" → 7, 7
P2 (Fill): "9x² - 16 = (___x + 4)(___x - 4)" → 3, 3
P3 (Fill): "25 - y² = (5 + ___)(5 - ___)" → y, y
P4 (Fill): "x⁴ - 16 = (x² + 4)(x² - ___)" → 4
P5 (T/F): "x² - 12 es diferencia de cuadrados" → Falso (12 no es cuadrado perfecto)
P6 (MC): "¿Factorización de 4x² - 81?" → (2x+9)(2x-9)
P7 (Fill ingeniería): "R=12, r=8 → R²-r² = (___)(___)" → 20, 4
P8 (Fill): "(D+t)² - (D-t)² = ___" → 4Dt
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Concepto
  - Descripción
* - Fórmula
  - $a^2 - b^2 = (a + b)(a - b)$
* - Relación con S7·C2
  - Producto de conjugados leído al revés
* - Condiciones
  - Dos términos, signo $-$, ambos cuadrados perfectos
* - Paso previo
  - Sacar factor común si todos los términos lo comparten
* - Ingeniería
  - Área de anillos $\pi(R^2-r^2)$ y tolerancias $(D+t)^2-(D-t)^2 = 4Dt$
```

:::{admonition} Siguiente clase
:class: tip
Ya dominas la diferencia de cuadrados. En la siguiente clase ampliarás el repertorio con la **diferencia y suma de cubos**, además del método de **agrupación** para polinomios con cuatro o más términos.

➡️ [Ir a S8·C4 Cubos y agrupación](s8_c4_cubos_agrupacion.md)
:::
