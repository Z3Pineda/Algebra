---
title: "S10·C4 Factorial, combinatorios y teorema del binomio"
---

# S10·C4 Factorial, combinatorios y teorema del binomio

:::{admonition} 🔧 Combinaciones de materiales y probabilidad de fallas
:class: ingenieria

En control de calidad, un lote tiene 10 piezas y se inspeccionan 3 al azar. El número de **combinaciones** posibles es:

$$C(10,3) = \binom{10}{3} = \frac{10!}{3!(10-3)!} = \frac{10 \cdot 9 \cdot 8}{3 \cdot 2 \cdot 1} = 120$$

Si cada combinación representa un escenario de prueba de materiales, el ingeniero necesita contar sin repetir configuraciones. El **teorema del binomio** conecta estos conteos con la expansión de $(a+b)^n$ — los coeficientes del triángulo de Pascal cuentan cuántas veces aparece cada término. En análisis de probabilidad de fallas, $\binom{n}{k} p^k (1-p)^{n-k}$ modela exactamente $k$ defectos en $n$ piezas.
:::

**Pregunta detonadora**

> ¿Cuántos términos tiene $(a+b)^4$ al expandirlo? ¿Puedes predecir los coeficientes 1, 4, 6, 4, 1?

---

## Teoría

### Factorial

El **factorial** de un entero no negativo $n$ es el producto de todos los enteros desde 1 hasta $n$:

$$n! = n \cdot (n-1) \cdot (n-2) \cdots 2 \cdot 1$$

**Convenciones:**

$$0! = 1, \qquad 1! = 1$$

**Ejemplos:**

$$5! = 5 \cdot 4 \cdot 3 \cdot 2 \cdot 1 = 120$$

$$7! = 5040$$

$$\frac{8!}{6!} = \frac{8 \cdot 7 \cdot 6!}{6!} = 8 \cdot 7 = 56$$

---

### Número combinatorio (coeficiente binomial)

$$\binom{n}{k} = \frac{n!}{k!(n-k)!} \qquad (0 \leq k \leq n)$$

Se lee "$n$ sobre $k$" y cuenta las **combinaciones** de $n$ elementos tomados de $k$ en $k$ (sin importar el orden).

**Ejemplos:**

$$\binom{5}{2} = \frac{5!}{2! \cdot 3!} = \frac{120}{2 \cdot 6} = 10$$

$$\binom{7}{0} = 1, \qquad \binom{7}{7} = 1$$

$$\binom{n}{1} = n, \qquad \binom{n}{n-1} = n$$

**Propiedades:**

$$\binom{n}{k} = \binom{n}{n-k}$$

$$\binom{n}{0} + \binom{n}{1} + \cdots + \binom{n}{n} = 2^n$$

---

### Triángulo de Pascal

Cada número es la suma de los dos que están encima:

```
n=0:        1
n=1:       1  1
n=2:      1  2  1
n=3:     1  3  3  1
n=4:    1  4  6  4  1
n=5:   1  5  10 10  5  1
```

La fila $n$ contiene $\binom{n}{0}, \binom{n}{1}, \ldots, \binom{n}{n}$.

Estos coeficientes son los mismos que en $(a+b)^n$ — ya los viste en S7·C3 con la fila 1, 3, 3, 1 para $n=3$.

---

### Teorema del binomio

Para cualquier entero $n \geq 0$:

$$(a + b)^n = \sum_{k=0}^{n} \binom{n}{k} a^{n-k} b^k$$

**Expansión explícita:**

$$(a+b)^n = \binom{n}{0}a^n + \binom{n}{1}a^{n-1}b + \binom{n}{2}a^{n-2}b^2 + \cdots + \binom{n}{n}b^n$$

**Término general** (término $k+1$, contando desde $k=0$):

$$T_{k+1} = \binom{n}{k} a^{n-k} b^k$$

---

### Ejemplos

**Ejemplo 1 — $(x + 2)^4$:**

| $k$ | $\binom{4}{k}$ | Término |
|:---:|:-------------:|---------|
| 0 | 1 | $x^4$ |
| 1 | 4 | $4x^3(2) = 8x^3$ |
| 2 | 6 | $6x^2(4) = 24x^2$ |
| 3 | 4 | $4x(8) = 32x$ |
| 4 | 1 | $16$ |

$$(x+2)^4 = x^4 + 8x^3 + 24x^2 + 32x + 16$$

**Ejemplo 2 — término específico:**

¿Cuál es el término que contiene $x^3$ en $(x + 3)^5$?

$k = 2$: $T_3 = \binom{5}{2} x^{3} \cdot 3^2 = 10 \cdot x^3 \cdot 9 = 90x^3$

**Ejemplo 3 — $(a - b)^n$:**

$$(a - b)^4 = a^4 - 4a^3b + 6a^2b^2 - 4ab^3 + b^4$$

Los signos alternan: $+,-,+,-,+$

```{warning}
No confundas:

- $n!$ es factorial: $5! = 120$
- $(-b)^k$: si $k$ es impar el término es negativo en $(a-b)^n$
- $\binom{n}{k}$ solo está definido para $0 \leq k \leq n$
```

---

### Conexión con ingeniería

:::{admonition} 🔧 Manufactura y probabilidad de fallas
:class: ingenieria

| Problema | Modelo combinatorio |
|----------|---------------------|
| Elegir 3 materiales de 8 disponibles | $\binom{8}{3} = 56$ combinaciones |
| 2 defectos en 10 piezas (probabilidad $p$) | $\binom{10}{2} p^2 (1-p)^8$ |
| Configuraciones de ensamble | Coeficientes de $(a+b)^n$ |

El teorema del binomio generaliza los productos notables de S7: $(a+b)^2$, $(a+b)^3$ son casos particulares con $n=2$ y $n=3$.
:::

**Ejemplo 4 — inspección de calidad:**

De 12 piezas, se seleccionan 4 para prueba destructiva:

$$\binom{12}{4} = \frac{12 \cdot 11 \cdot 10 \cdot 9}{4 \cdot 3 \cdot 2 \cdot 1} = 495 \text{ combinaciones}$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_BINOMIO_COMBINATORIOS"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Definir $5! = 120$ con producto animado
2. Calcular $\binom{5}{2} = 10$ con barras de cancelación
3. Construir triángulo de Pascal hasta $n=5$
4. Expandir $(a+b)^4$ con coeficientes 1,4,6,4,1
5. Término general: $\binom{n}{k}a^{n-k}b^k$
6. Cierre: $\binom{10}{3}=120$ combinaciones de inspección
```

---

## Visualización interactiva

Explora el triángulo de Pascal y la expansión de $(a+b)^n$.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s10c4-binomio" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function comb(n, k) {
        if (k < 0 || k > n) return 0;
        if (k === 0 || k === n) return 1;
        var r = 1;
        for (var i = 0; i < k; i++) r = r * (n - i) / (i + 1);
        return Math.round(r);
    }

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s10c4-binomio', {
            boundingbox: [-1, 13, 14, -2],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slN = board.create('slider', [[8, 11], [13, 11], [0, 4, 6]], {
            name: 'n', snapWidth: 1, fillColor: '#3b82f6' });

        var dinamicos = [];
        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var n = slN.Value();
            var cx = 4, cy = 10;

            for (var row = 0; row <= n; row++) {
                var offset = (n - row) * 0.6;
                for (var k = 0; k <= row; k++) {
                    var c = comb(row, k);
                    dinamicos.push(board.create('text',
                        [cx - row * 0.3 + k * 0.6, cy - row * 0.9, '' + c], {
                        fontSize: row === n ? 12 : 10,
                        color: row === n ? '#1d4ed8' : '#6b7280',
                        fontWeight: row === n ? 'bold' : 'normal',
                        anchorX: 'middle'
                    }));
                }
            }

            var terms = [];
            for (var j = 0; j <= n; j++) {
                var coef = comb(n, j);
                var part = coef + '·a^' + (n - j) + '·b^' + j;
                terms.push(part);
            }
            dinamicos.push(board.create('text', [8, 3,
                '(a+b)^' + n + ' → coef: ' + terms.join(', ')], {
                fontSize: 11, color: '#1d4ed8', fontWeight: 'bold'
            }));
            dinamicos.push(board.create('text', [8, 1.5,
                'C(' + n + ',k) = n!/(k!(n-k)!)'], {
                fontSize: 11, color: '#374151'
            }));
            dinamicos.push(board.create('text', [4, 11.5,
                'Triángulo de Pascal'], {
                fontSize: 12, color: '#6b7280', anchorX: 'middle'
            }));
        }

        slN.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Deslizador $n$ construye el triángulo de Pascal hasta la fila $n$ (resaltada en azul). Muestra los coeficientes $\binom{n}{k}$ y la forma del término general. Conecta conteo combinatorio con expansión binomial.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdOxgj3nJpkGHwbMvsbrLSCm4pCgTGE_r9iHWejJgVoY7ljhw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Factorial y binomio
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~12 min):**

P1 (Fill): "5! = ___" → 120
P2 (Fill): "C(7,3) = 7!/(3!·4!) = ___" → 35
P3 (Fill): "0! = ___" → 1
P4 (Fill): "(x+1)^4 coef de x³: C(4,1)=___" → 4
P5 (MC): "Fila n=5 de Pascal, centro:" → 10
P6 (Fill): "(a-b)³ tercer término: ___a·b²" → 3 (con signo -)
P7 (Fill ingeniería): "C(10,3) = ___" → 120
P8 (T/F): "C(n,k) = C(n,n-k)" → Verdadero
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Concepto
  - Fórmula
* - Factorial
  - $n! = n \cdot (n-1) \cdots 1$, con $0! = 1$
* - Combinatorio
  - $\binom{n}{k} = \frac{n!}{k!(n-k)!}$
* - Pascal
  - Fila $n$: coeficientes de $(a+b)^n$
* - Teorema del binomio
  - $(a+b)^n = \sum_{k=0}^{n}\binom{n}{k}a^{n-k}b^k$
* - Término general
  - $T_{k+1} = \binom{n}{k}a^{n-k}b^k$
```

:::{admonition} Siguiente clase
:class: tip
Completaste la Semana 10 y con ella la **Unidad 3**. La siguiente sesión es de **autogestión**: repaso integrador de las cinco semanas (S6–S10) antes de pasar a ecuaciones.

➡️ [Ir a S10·Auto Repaso general Unidad 3](s10_auto_repaso_unidad3.md)
:::
