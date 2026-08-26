---
title: "S8·Auto Ejercicios de factorización"
---

# S8·Auto Ejercicios de factorización

:::{admonition} Esta es tu clase de autogestión
:class: tip

Consolida los **cuatro métodos de factorización** de la Semana 8 antes de pasar a división de polinomios.

**¿Qué hay aquí?**
- Repaso rápido de S8·C1 a S8·C4
- Ejercicios con solución colapsable
- Problema integrador de ingeniería
- Visualización JSXGraph de repaso
- Quiz de cierre

**Tiempo estimado: 50 minutos**
:::

---

## Repaso rápido

| Clase | Método | Lo más importante |
|-------|--------|-------------------|
| S8·C1 | Factor común | MCD de coeficientes + menor exponente. $af+bf=f(a+b)$ |
| S8·C2 | Trinomios | Tanteo si $a=1$: $m+n=b$, $mn=c$. AC si $a\neq1$: producto $a\cdot c$ |
| S8·C3 | Diferencia de cuadrados | $a^2-b^2=(a+b)(a-b)$ — conjugados al revés |
| S8·C4 | Cubos y agrupación | SOP: $(a\pm b)(a^2\mp ab+b^2)$. Agrupar → factor común por par |

---

## Parte 1 — Factor común

### Ejercicio 1

Factoriza completamente.

**a)** $6x^2 + 15x$

**b)** $8a^3b - 12a^2b^2 + 4ab^3$

**c)** $3(x + 4) - 5(x + 4)$

**d)** $2x(y - 1) + 7(y - 1)$

::::{admonition} Ver solución
:class: dropdown

**a)** MCD$(6,15)=3$, variable común $x$: $6x^2+15x = 3x(2x+5)$

**b)** MCD$(8,12,4)=4$, parte literal $ab$: $8a^3b-12a^2b^2+4ab^3 = 4ab(2a^2-3ab+b^2)$

**c)** Factor común polinomio $(x+4)$: $3(x+4)-5(x+4) = (x+4)(3-5) = -2(x+4)$

**d)** $2x(y-1)+7(y-1) = (y-1)(2x+7)$
::::

---

## Parte 2 — Trinomios cuadráticos

### Ejercicio 2

Factoriza usando tanteo ($a=1$).

**a)** $x^2 + 9x + 20$

**b)** $x^2 - 11x + 24$

**c)** $x^2 + 2x - 15$

**d)** $x^2 - 5x - 14$

::::{admonition} Ver solución
:class: dropdown

**a)** $4+5=9$, $4\cdot5=20$: $x^2+9x+20 = (x+4)(x+5)$

**b)** $(-3)+(-8)=-11$, $(-3)(-8)=24$: $x^2-11x+24 = (x-3)(x-8)$

**c)** $5+(-3)=2$, $5\cdot(-3)=-15$: $x^2+2x-15 = (x+5)(x-3)$

**d)** $2+(-7)=-5$, $2\cdot(-7)=-14$: $x^2-5x-14 = (x+2)(x-7)$
::::

---

### Ejercicio 3

Factoriza usando el método AC.

**a)** $2x^2 + 7x + 3$

**b)** $3x^2 - 10x + 8$

**c)** $6x^2 - x - 12$

**d)** $4x^2 + 4x - 3$

::::{admonition} Ver solución
:class: dropdown

**a)** $AC=6$, $1+6=7$: $2x^2+6x+x+3 = 2x(x+3)+1(x+3) = (2x+1)(x+3)$

**b)** $AC=24$, $(-4)+(-6)=-10$: $3x^2-4x-6x+8 = x(3x-4)-2(3x-4) = (x-2)(3x-4)$

**c)** $AC=-72$, $8+(-9)=-1$: $6x^2+8x-9x-12 = 2x(3x+4)-3(3x+4) = (2x-3)(3x+4)$

**d)** $AC=-12$, $6+(-2)=4$: $4x^2+6x-2x-3 = 2x(2x+3)-1(2x+3) = (2x-1)(2x+3)$
::::

---

## Parte 3 — Diferencia de cuadrados

### Ejercicio 4

Factoriza.

**a)** $x^2 - 81$

**b)** $16x^2 - 49$

**c)** $100 - 9y^2$

**d)** $x^4 - 16$

::::{admonition} Ver solución
:class: dropdown

**a)** $x^2-81 = (x+9)(x-9)$

**b)** $16x^2-49 = (4x+7)(4x-7)$

**c)** $100-9y^2 = (10+3y)(10-3y)$

**d)** $x^4-16 = (x^2+4)(x^2-4) = (x^2+4)(x+2)(x-2)$
::::

---

## Parte 4 — Suma y diferencia de cubos

### Ejercicio 5

Factoriza.

**a)** $x^3 - 27$

**b)** $x^3 + 64$

**c)** $8x^3 - 125$

**d)** $27a^3 + 8b^3$

::::{admonition} Ver solución
:class: dropdown

**a)** $x^3-27 = (x-3)(x^2+3x+9)$

**b)** $x^3+64 = (x+4)(x^2-4x+16)$

**c)** $8x^3-125 = (2x-5)(4x^2+10x+25)$

**d)** $27a^3+8b^3 = (3a+2b)(9a^2-6ab+4b^2)$
::::

---

## Parte 5 — Agrupación

### Ejercicio 6

Factoriza por agrupación.

**a)** $ax + ay + bx + by$

**b)** $2x^3 + 3x^2 + 2x + 3$

**c)** $x^3 + 2x^2 - 9x - 18$

**d)** $6xy - 4x + 15y - 10$

::::{admonition} Ver solución
:class: dropdown

**a)** $a(x+y)+b(x+y) = (x+y)(a+b)$

**b)** $x^2(2x+3)+1(2x+3) = (2x+3)(x^2+1)$

**c)** $x^2(x+2)-9(x+2) = (x+2)(x^2-9) = (x+2)(x+3)(x-3)$

**d)** $2x(3y-2)+5(3y-2) = (3y-2)(2x+5)$
::::

---

## Parte 6 — Identificar el método

### Ejercicio 7

Indica qué método usarías primero y factoriza.

**a)** $12x^2 - 27$

**b)** $x^2 + 6x + 9$

**c)** $5x^3 - 5x$

**d)** $2x^2 + 5x - 3$

::::{admonition} Ver solución
:class: dropdown

**a)** Factor común, luego diferencia de cuadrados: $12x^2-27 = 3(4x^2-9) = 3(2x+3)(2x-3)$

**b)** Es un cuadrado perfecto $(x+3)^2$ — no es ejercicio típico de S8, pero reconocible. Factorización: $(x+3)^2$

**c)** Factor común $5x$, luego diferencia de cuadrados: $5x^3-5x = 5x(x^2-1) = 5x(x+1)(x-1)$

**d)** Trinomio con $a\neq1$ → AC: $AC=-6$, $6+(-1)=5$: $2x^2+6x-x-3 = 2x(x+3)-1(x+3) = (2x-1)(x+3)$
::::

---

## Parte 7 — Problema integrador de ingeniería

### Ejercicio 8

Un contenedor cúbico hueco tiene lado exterior $L$ y lado interior $l$. El volumen de acero es $V = L^3 - l^3$.

**a)** Factoriza $L^3 - l^3$.

**b)** Si $L = D + t$ y $l = D - t$ (tolerancia simétrica), simplifica $L^3 - l^3$ en función de $D$ y $t$.

**c)** La fuerza neta sobre el contenedor es $F = 2x^2 - 9x - 5$ (kN). Factoriza $F$ y halla los valores de $x$ donde $F = 0$.

**d)** El área de un anillo circular es $A = \pi(R^2 - r^2)$ con $R = 15$ mm y $r = 9$ mm. Factoriza $R^2 - r^2$ y calcula $A$.

::::{admonition} Ver solución
:class: dropdown

**a)** $L^3-l^3 = (L-l)(L^2+Ll+l^2)$

**b)** $(D+t)^3-(D-t)^3$. Usando diferencia de cubos con $a=D+t$, $b=D-t$:

$= [(D+t)-(D-t)][(D+t)^2+(D+t)(D-t)+(D-t)^2]$

$= (2t)[D^2+2Dt+t^2+D^2-t^2+D^2-2Dt+t^2] = (2t)(3D^2+t^2) = 6tD^2 + 2t^3$

**c)** $AC=-10$, $2x^2-10x+x-5$: $2x(x-5)+1(x-5) = (2x+1)(x-5)$

$F=0 \Rightarrow x = -0.5$ kN o $x = 5$ kN

**d)** $R^2-r^2 = (R+r)(R-r) = (15+9)(15-9) = (24)(6) = 144$ mm²

$A = 144\pi \approx 452.4$ mm²
::::

---

## Visualización interactiva — Árbol de factorización

Selecciona un método y observa un ejemplo factorizado paso a paso.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s8auto-repaso" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    var metodos = [
        {
            id: 0, nombre: 'Factor común', color: '#3b82f6',
            entrada: '6x² + 9x',
            pasos: ['MCD(6,9)=3, variable x', '6x²+9x = 3x(2x+3)'],
            resultado: '3x(2x + 3)'
        },
        {
            id: 1, nombre: 'Tanteo', color: '#16a34a',
            entrada: 'x² + 7x + 12',
            pasos: ['m+n=7, m·n=12 → m=3, n=4', 'x²+7x+12 = (x+3)(x+4)'],
            resultado: '(x + 3)(x + 4)'
        },
        {
            id: 2, nombre: 'AC', color: '#7c3aed',
            entrada: '2x² + 7x + 3',
            pasos: ['AC = 2·3 = 6, suma 7: 1 y 6', '2x²+6x+x+3 = 2x(x+3)+1(x+3)', '(2x+1)(x+3)'],
            resultado: '(2x + 1)(x + 3)'
        },
        {
            id: 3, nombre: 'Dif. cuadrados', color: '#ca8a04',
            entrada: 'x² - 49',
            pasos: ['a=x, b=7', 'x²-49 = (x+7)(x-7)'],
            resultado: '(x + 7)(x - 7)'
        },
        {
            id: 4, nombre: 'Dif. cubos', color: '#c2410c',
            entrada: 'x³ - 27',
            pasos: ['a=x, b=3 — regla SOP', 'x³-27 = (x-3)(x²+3x+9)'],
            resultado: '(x - 3)(x² + 3x + 9)'
        },
        {
            id: 5, nombre: 'Agrupación', color: '#db2777',
            entrada: '2x³ + 3x² + 2x + 3',
            pasos: ['Agrupar: (2x³+3x²)+(2x+3)', 'x²(2x+3)+1(2x+3)', '(2x+3)(x²+1)'],
            resultado: '(2x + 3)(x² + 1)'
        }
    ];

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s8auto-repaso', {
            boundingbox: [-1, 14, 14, -1],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var activo = 0;
        var dinamicos = [];
        var botones = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar(idx) {
            limpiar();
            activo = idx;
            var m = metodos[idx];

            botones.forEach(function(b, i) {
                b.setAttribute({
                    fillColor: i === idx ? m.color : '#e5e7eb',
                    strokeColor: i === idx ? m.color : '#9ca3af',
                    fontSize: i === idx ? 11 : 10
                });
            });

            dinamicos.push(board.create('text', [7, 12.5,
                'Método: ' + m.nombre], {
                fontSize: 16, color: m.color, fontWeight: 'bold', anchorX: 'middle'
            }));

            dinamicos.push(board.create('text', [7, 11,
                'Expresión: ' + m.entrada], {
                fontSize: 14, color: '#374151', anchorX: 'middle'
            }));

            for (var i = 0; i < m.pasos.length; i++) {
                dinamicos.push(board.create('text', [1.5, 9 - i * 1.3,
                    (i + 1) + '. ' + m.pasos[i]], {
                    fontSize: 12, color: '#4b5563'
                }));
            }

            dinamicos.push(board.create('text', [7, 3.5,
                'Resultado: ' + m.resultado], {
                fontSize: 15, color: m.color, fontWeight: 'bold', anchorX: 'middle'
            }));

            // Flecha visual
            dinamicos.push(board.create('segment', [[4, 5.5], [10, 5.5]], {
                strokeColor: m.color, strokeWidth: 2,
                lastArrow: { type: 2, size: 8 }
            }));
            dinamicos.push(board.create('text', [7, 6.2, 'factorizar'], {
                fontSize: 10, color: m.color, anchorX: 'middle'
            }));
        }

        var bx = 0.5, by = 13.2, bw = 2.1, bh = 0.7, gap = 0.15;
        metodos.forEach(function(m, i) {
            var col = i % 3, fila = Math.floor(i / 3);
            var x0 = bx + col * (bw + gap);
            var y0 = by - fila * (bh + gap);
            var btn = board.create('button', [x0, y0, m.nombre], {
                fixed: true, highlight: false, size: 3,
                fillColor: '#e5e7eb', strokeColor: '#9ca3af'
            });
            (function(idx) {
                btn.on('down', function() { dibujar(idx); });
            })(i);
            botones.push(btn);
        });

        dibujar(0);
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Seis botones (factor común, tanteo, AC, diferencia de cuadrados, diferencia de cubos, agrupación). Al seleccionar uno, muestra la expresión de ejemplo, los pasos del método y el resultado factorizado. Sirve como árbol de decisión de repaso antes del quiz de cierre.
```

---

## Quiz de cierre — Semana 8

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfPliAXhO3kqCPLWd3HGzT5uQX9TdyggEkFNi0mJaiucqWD-A/viewform" target="_blank" class="quizizz-btn">
    📝 Quiz de cierre — Semana 8 (Factorización)
  </a>
</div>
```

```{note}
**Para el docente — Quiz Quizizz (12 preguntas, ~15 min):**

Factor común (2): 6x²+15x=3x(2x+5), 8a³b-12a²b²+4ab³=4ab(2a²-3ab+b²)
Trinomios tanteo (3): x²+9x+20=(x+4)(x+5), x²-11x+24=(x-3)(x-8), x²+2x-15=(x+5)(x-3)
Trinomios AC (2): 2x²+7x+3=(2x+1)(x+3), 6x²-x-12=(2x-3)(3x+4)
Diferencia de cuadrados (2): x²-81=(x+9)(x-9), x⁴-16=(x²+4)(x+2)(x-2)
Cubos (2): x³-27=(x-3)(x²+3x+9), 27a³+8b³=(3a+2b)(9a²-6ab+4b²)
Problema de ingeniería (1): R²-r²=(R+r)(R-r) con R=15 r=9 da área 144π mm²
```

---

## Resumen de la semana

```{list-table}
:header-rows: 1
:widths: 20 80

* - Clase
  - Lo que debes dominar
* - S8·C1
  - Sacar factor común monomio (MCD + variables) y polinomio (grupo repetido).
* - S8·C2
  - Tanteo para $x^2+bx+c$. AC para $ax^2+bx+c$: producto $a\cdot c$, agrupar.
* - S8·C3
  - $a^2-b^2=(a+b)(a-b)$. Verificar que ambos términos son cuadrados perfectos.
* - S8·C4
  - SOP para cubos. Agrupación: mismo binomio en ambos grupos tras sacar factor común.
```

:::{admonition} Siguiente semana
:class: tip
La Semana 8 está completa. La próxima semana trabajarás **división de polinomios** — el complemento natural de la factorización para simplificar fracciones algebraicas.

➡️ [Ir a S9·C1 División de monomios](s9_c1_division_monomios.md)
:::
