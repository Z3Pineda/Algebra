---
title: "S13·Auto Práctica de ecuaciones cuadráticas"
---

# S13·Auto Práctica de ecuaciones cuadráticas

:::{admonition} Esta es tu clase de autogestión
:class: tip

Consolida los **métodos de resolución de ecuaciones cuadráticas** de la Semana 13 antes de la fórmula general.

**¿Qué hay aquí?**
- Repaso rápido de S13·C1 a S13·C4
- Misma ecuación resuelta por factorización, forma cuadrada y completando el cuadrado
- Problema integrador de ingeniería
- Visualización JSXGraph comparativa
- Quiz de cierre

**Tiempo estimado: 50 minutos**
:::

---

## Repaso rápido

| Clase | Tema | Lo más importante |
|-------|------|-------------------|
| S13·C1 | Concepto cuadrática | $ax^2+bx+c=0$, $a \neq 0$; completa/incompleta; verificar |
| S13·C2 | Factorización | $AB=0$; igualar a 0; factor común, dif. cuadrados, trinomios |
| S13·C3 | Forma $(x+a)^2=b$ | $x+a=\pm\sqrt{b}$; dos, una o cero soluciones reales |
| S13·C4 | Completar cuadrado | $(b/2)^2$; forma vértice; deriva fórmula general |

---

## Parte 1 — Misma ecuación, tres métodos

### Ejercicio 1

Resuelve $x^2 - 6x + 5 = 0$ por **factorización**, **forma cuadrada** (si aplica directamente) y **completando el cuadrado**.

::::{admonition} Ver solución
:class: dropdown

**Factorización:** $(x-1)(x-5)=0 \Rightarrow x=1$ o $x=5$

**Forma cuadrada:** No está aislada directamente; tras completar: $(x-3)^2=4 \Rightarrow x-3=\pm 2 \Rightarrow x=5$ o $x=1$

**Completando el cuadrado:**
$x^2-6x=-5 \Rightarrow x^2-6x+9=4 \Rightarrow (x-3)^2=4 \Rightarrow x=5$ o $x=1$

**Solución:** $x = 1$, $x = 5$ — idéntica con los tres métodos ✓
::::

---

### Ejercicio 2

Repite con $x^2 - 4x - 12 = 0$.

::::{admonition} Ver solución
:class: dropdown

**Factorización:** $(x-6)(x+2)=0 \Rightarrow x=6$ o $x=-2$

**Completando el cuadrado:**
$x^2-4x=12 \Rightarrow x^2-4x+4=16 \Rightarrow (x-2)^2=16 \Rightarrow x=6$ o $x=-2$

**Solución:** $x = 6$, $x = -2$
::::

---

## Parte 2 — Factorización

### Ejercicio 3

Resuelve por factorización.

**a)** $x^2 + 7x + 12 = 0$

**b)** $3x^2 - 12x = 0$

**c)** $x^2 - 81 = 0$

**d)** $2x^2 + 5x - 3 = 0$

::::{admonition} Ver solución
:class: dropdown

**a)** $(x+3)(x+4)=0 \Rightarrow x=-3$, $x=-4$

**b)** $3x(x-4)=0 \Rightarrow x=0$, $x=4$

**c)** $(x+9)(x-9)=0 \Rightarrow x=\pm 9$

**d)** $(2x-1)(x+3)=0 \Rightarrow x=\dfrac{1}{2}$, $x=-3$
::::

---

## Parte 3 — Forma (x+a)² = b

### Ejercicio 4

Resuelve.

**a)** $(x - 4)^2 = 25$

**b)** $(x + 2)^2 = 0$

**c)** $(x - 1)^2 = -4$

**d)** $x^2 = 64$

::::{admonition} Ver solución
:class: dropdown

**a)** $x-4=\pm 5 \Rightarrow x=9$ o $x=-1$

**b)** $x+2=0 \Rightarrow x=-2$ (única solución)

**c)** Sin solución real ($-4 < 0$)

**d)** $x=\pm 8$
::::

---

## Parte 4 — Completando el cuadrado

### Ejercicio 5

Resuelve completando el cuadrado.

**a)** $x^2 + 8x + 12 = 0$

**b)** $x^2 - 10x + 21 = 0$

**c)** $2x^2 - 4x - 6 = 0$

::::{admonition} Ver solución
:class: dropdown

**a)** $x^2+8x=-12 \Rightarrow (x+4)^2=4 \Rightarrow x=-2$ o $x=-6$

**b)** $x^2-10x=-21 \Rightarrow (x-5)^2=4 \Rightarrow x=7$ o $x=3$

**c)** $x^2-2x-3=0 \Rightarrow (x-1)^2=4 \Rightarrow x=3$ o $x=-1$
::::

---

## Parte 5 — Verificación y contexto

### Ejercicio 6

**a)** Verifica que $x = 3$ y $x = -2$ son soluciones de $x^2 - x - 6 = 0$.

**b)** ¿Cuántas soluciones reales tiene $x^2 + 2x + 5 = 0$? ¿Por qué?

::::{admonition} Ver solución
:class: dropdown

**a)** $(3)^2-(3)-6=0$ ✓ y $(-2)^2-(-2)-6=4+2-6=0$ ✓

**b)** Discriminante: $b^2-4ac=4-20=-16<0$. **Ninguna solución real** — la parábola no corta el eje $x$.
::::

---

## Parte 6 — Problema integrador de ingeniería

### Ejercicio 7

Un proyectil se lanza verticalmente. Su altura (metros) es:

$$h = -5t^2 + 25t + 6$$

**a)** ¿Cuándo está en el suelo ($h = 0$)? Plantea $-5t^2 + 25t + 6 = 0$.

**b)** Resuelve por factorización (saca $-1$ o divide).

**c)** ¿Cuál es la altura máxima y en qué instante ocurre? (completa el cuadrado)

**d)** ¿Tiene sentido físico ambas raíces de $t$?

::::{admonition} Ver solución
:class: dropdown

**a)** $-5t^2+25t+6=0$ o equivalentemente $5t^2-25t-6=0$

**b)** Tanteo o fórmula: $AC=-30$; $6t^2-30t+t-5=6t(t-5)+1(t-5)=(6t+1)(t-5)=0$

$t=-\dfrac{1}{6}$ s o $t=5$ s

**c)** $h=-5(t^2-5t)+6=-5\left(t^2-5t+\dfrac{25}{4}-\dfrac{25}{4}\right)+6=-5\left(t-\dfrac{5}{2}\right)^2+\dfrac{125}{4}+6$

$h=-5\left(t-2.5\right)^2+37.25$. Altura máxima **37.25 m** en $t=2.5$ s.

**d)** $t=-\dfrac{1}{6}$ no tiene sentido (tiempo negativo). Solo $t=5$ s es el aterrizaje (el otro tiempo positivo desde despegue es $t=0$ implícito al factorizar). La raíz negativa se descarta.
::::

---

## Visualización interactiva — Comparación de métodos

Selecciona una ecuación y compara factorización, forma cuadrada y vértice.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s13auto-practica" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    var ecuaciones = [
        {
            eq: 'x² - 6x + 5 = 0',
            fac: '(x-1)(x-5)=0 → x=1, x=5',
            cuad: '(x-3)²=4 → x=5, x=1',
            vert: 'V(3, -4)',
            a: 1, b: -6, c: 5, r1: 1, r2: 5
        },
        {
            eq: 'x² - 4x - 12 = 0',
            fac: '(x-6)(x+2)=0 → x=6, x=-2',
            cuad: '(x-2)²=16 → x=6, x=-2',
            vert: 'V(2, -16)',
            a: 1, b: -4, c: -12, r1: -2, r2: 6
        },
        {
            eq: 'x² - 4 = 0',
            fac: '(x+2)(x-2)=0 → x=±2',
            cuad: 'x²=4 → x=±2',
            vert: 'V(0, -4)',
            a: 1, b: 0, c: -4, r1: -2, r2: 2
        }
    ];

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s13auto-practica', {
            boundingbox: [-8, 10, 12, -12],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var idx = 0, met = 0;
        var metodos = ['Factorizacion', 'Forma cuadrada', 'Vertice'];
        var dinamicos = [], btnEq = [], btnMet = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var e = ecuaciones[idx];
            var texto = met === 0 ? e.fac : (met === 1 ? e.cuad : e.vert);

            btnEq.forEach(function(b, i) {
                b.setAttribute({
                    fillColor: i === idx ? '#1d4ed8' : '#e5e7eb',
                    strokeColor: i === idx ? '#1d4ed8' : '#9ca3af'
                });
            });
            btnMet.forEach(function(b, i) {
                b.setAttribute({
                    fillColor: i === met ? '#7c3aed' : '#e5e7eb',
                    strokeColor: i === met ? '#7c3aed' : '#9ca3af'
                });
            });

            var f = function(x) { return e.a*x*x + e.b*x + e.c; };
            dinamicos.push(board.create('functiongraph', [f, -8, 12], {
                strokeColor: '#1d4ed8', strokeWidth: 2.5
            }));

            dinamicos.push(board.create('point', [e.r1, 0], {
                size: 4, fillColor: '#16a34a', strokeColor: '#16a34a', name: 'x='+e.r1
            }));
            dinamicos.push(board.create('point', [e.r2, 0], {
                size: 4, fillColor: '#16a34a', strokeColor: '#16a34a', name: 'x='+e.r2
            }));

            var h = -e.b / (2 * e.a);
            var k = e.a*h*h + e.b*h + e.c;
            if (met === 2) {
                dinamicos.push(board.create('point', [h, k], {
                    size: 5, fillColor: '#c2410c', strokeColor: '#c2410c',
                    name: 'V', label: { fontSize: 11, offset: [8, 8] }
                }));
            }

            dinamicos.push(board.create('text', [2, 8, e.eq], {
                fontSize: 13, color: '#374151', fontWeight: 'bold'
            }));
            dinamicos.push(board.create('text', [2, 7, metodos[met] + ': ' + texto], {
                fontSize: 11, color: '#7c3aed'
            }));
        }

        ecuaciones.forEach(function(e, i) {
            var btn = board.create('button', [-6 + i * 5, 9.5, 'Eq' + (i+1)], {
                fixed: true, highlight: false, size: 2,
                fillColor: '#e5e7eb', strokeColor: '#9ca3af'
            });
            (function(j) { btn.on('down', function() { idx = j; dibujar(); }); })(i);
            btnEq.push(btn);
        });

        metodos.forEach(function(m, i) {
            var btn = board.create('button', [-6 + i * 4.5, -10.5, m.substring(0, 10)], {
                fixed: true, highlight: false, size: 2,
                fillColor: '#e5e7eb', strokeColor: '#9ca3af'
            });
            (function(j) { btn.on('down', function() { met = j; dibujar(); }); })(i);
            btnMet.push(btn);
        });

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Tres ecuaciones cuadráticas. Botones seleccionan ecuación y método (factorización, forma cuadrada, vértice). Muestra parábola, raíces en verde y vértice en rojo al elegir "Vértice". Refuerza que todos los métodos dan las mismas raíces.
```

---

## Quiz de cierre — Semana 13

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfv2t0nKp-gCGWULekZh5WMWoCcKiyYY4IZ-avOWX5subF8Tg/viewform" target="_blank" class="quizizz-btn">
    📝 Quiz de cierre — Semana 13 (Ecuaciones cuadráticas)
  </a>
</div>
```

```{note}
**Para el docente — Quiz Quizizz (12 preguntas, ~15 min):**

Misma ecuación tres métodos (2): x²-6x+5=0 da x=1,x=5 por factorización forma cuadrada y completar cuadrado; x²-4x-12=0 da x=6,x=-2
Factorización (3): x²+7x+12=0 da x=-3,-4; 3x²-12x=0 da x=0,4; 2x²+5x-3=0 da x=1/2,-3
Forma (x+a)²=b (3): (x-4)²=25 da x=9,-1; (x+2)²=0 da x=-2 única solución; x²=64 da x=±8
Completar cuadrado (2): x²+8x+12=0 da x=-2,-6; x²-10x+21=0 da x=7,3
Comparación de métodos (1): los tres métodos dan la misma solución para x²-6x+5=0
Problema integrador (1): proyectil h=-5t²+25t+6, aterriza en t=5 s, altura máxima 37.25 m en t=2.5 s
```

---

## Resumen de la semana

```{list-table}
:header-rows: 1
:widths: 20 80

* - Clase
  - Lo que debes dominar
* - S13·C1
  - Forma $ax^2+bx+c=0$; coeficientes; completa/incompleta; verificar soluciones.
* - S13·C2
  - Producto nulo; factorizar e igualar cada factor a cero.
* - S13·C3
  - $(x+a)^2=b$; $x+a=\pm\sqrt{b}$; casos $b>0$, $b=0$, $b<0$.
* - S13·C4
  - Completar $(b/2)^2$; forma vértice; derivación de fórmula general.
* - S13·Auto
  - Resolver la misma ecuación por factorización, forma cuadrada y completando.
```

:::{admonition} Siguiente semana
:class: tip
La Semana 13 está completa. La próxima semana aplicarás la **fórmula general** y el **discriminante** para resolver cualquier ecuación cuadrática de forma directa.

➡️ [Ir a S14·C1 Fórmula general](s14_c1_formula_general.md)
:::
