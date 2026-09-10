---
title: "S5·Auto Identificación de funciones, dominio y rango"
---

# S5·Auto Identificación de funciones, dominio y rango

:::{admonition} Esta es tu clase de autogestión
:class: tip

Esta clase consolida los cuatro temas de la Semana 5 — relaciones, funciones, dominio y rango — antes del quiz de la Unidad 2.

**¿Qué hay aquí?**
- Ejercicios de identificación de funciones
- Cálculo de dominio y rango
- Evaluación de funciones
- Problema integrador de ingeniería
- Quiz de cierre de la unidad

**Tiempo estimado: 50 minutos**
:::

---

## Repaso rápido

| Clase | Tema | Lo más importante |
|-------|------|-------------------|
| S5·C1 | Relación | $R \subseteq A \times B$. Dominio, codominio, imagen |
| S5·C2 | Función | Relación con exactamente una imagen por elemento del dominio |
| S5·C3 | Relación vs. función | Prueba de la línea vertical. Dos imágenes = no función |
| S5·C4 | Dominio y rango | Dominio = entradas válidas. Rango = salidas reales |

---

## Parte 1 — ¿Función o no función?

### Ejercicio 1

Indica si cada representación es función. Justifica.

**a)** $R = \{(1,5),\ (2,8),\ (3,5),\ (4,11)\}$

**b)** $R = \{(1,5),\ (2,8),\ (1,3),\ (4,11)\}$

**c)** $R = \{(1,5),\ (2,8),\ (4,11)\}$ con dominio $A = \{1,2,3,4\}$

**d)** La gráfica de $y = x^3 - 2x$

**e)** La gráfica de $x = y^2 + 1$

::::{admonition} Ver solución
:class: dropdown

**a)** ✅ **Sí es función.** Cada $x$ (1,2,3,4) aparece exactamente una vez. El hecho de que $y=5$ aparezca dos veces está permitido.

**b)** ❌ **No es función.** El elemento $x=1$ aparece con $y=5$ y con $y=3$ — dos imágenes distintas.

**c)** ❌ **No es función.** El elemento $x=3$ del dominio no tiene ninguna imagen — falla la condición de existencia.

**d)** ✅ **Sí es función.** $y = x^3 - 2x$ es una curva que pasa la prueba de la línea vertical — cada $x$ tiene exactamente un $y$.

**e)** ❌ **No es función.** $x = y^2 + 1$ implica $y^2 = x-1$, por lo tanto $y = \pm\sqrt{x-1}$ — dos valores de $y$ para cada $x > 1$. Falla la prueba de la línea vertical.
::::

---

## Parte 2 — Dominio de funciones

### Ejercicio 2

Encuentra el dominio natural de cada función.

**a)** $f(x) = 5x - 7$

**b)** $g(x) = \dfrac{x+2}{x-3}$

**c)** $h(x) = \sqrt{2x - 8}$

**d)** $k(x) = \dfrac{\sqrt{x+4}}{x-1}$

**e)** $p(x) = x^2 + 3x - 10$

::::{admonition} Ver solución
:class: dropdown

**a)** Sin restricciones → $\text{Dom}(f) = \mathbb{R}$

**b)** El denominador no puede ser cero: $x - 3 \neq 0 \implies x \neq 3$

$$\text{Dom}(g) = (-\infty, 3) \cup (3, +\infty) = \mathbb{R} - \{3\}$$

**c)** El radicando debe ser $\geq 0$: $2x - 8 \geq 0 \implies x \geq 4$

$$\text{Dom}(h) = [4, +\infty)$$

**d)** Dos restricciones simultáneas:
- Radicando: $x + 4 \geq 0 \implies x \geq -4$
- Denominador: $x - 1 \neq 0 \implies x \neq 1$

$$\text{Dom}(k) = [-4, 1) \cup (1, +\infty)$$

**e)** Polinomio — sin restricciones → $\text{Dom}(p) = \mathbb{R}$
::::

---

## Parte 3 — Evaluación de funciones

### Ejercicio 3

Sea $f(x) = 3x^2 - 2x + 1$. Calcula:

**a)** $f(0)$ **b)** $f(2)$ **c)** $f(-1)$ **d)** $f(a)$ **e)** $f(x+1)$

::::{admonition} Ver solución
:class: dropdown

**a)** $f(0) = 3(0)^2 - 2(0) + 1 = 1$

**b)** $f(2) = 3(4) - 4 + 1 = 12 - 4 + 1 = 9$

**c)** $f(-1) = 3(1) - 2(-1) + 1 = 3 + 2 + 1 = 6$

**d)** $f(a) = 3a^2 - 2a + 1$

**e)** $f(x+1) = 3(x+1)^2 - 2(x+1) + 1$
$= 3(x^2+2x+1) - 2x - 2 + 1$
$= 3x^2 + 6x + 3 - 2x - 2 + 1$
$= 3x^2 + 4x + 2$
::::

---

## Parte 4 — Dominio y rango desde la gráfica

### Ejercicio 4

Describe el dominio y rango de cada función a partir de su descripción:

**a)** Una parábola que abre hacia arriba con vértice en $(2, -3)$

**b)** Una línea recta que pasa por todos los cuadrantes

**c)** Una función definida solo para $x \in [-2, 5]$, con valores entre $-1$ y $8$

**d)** La función $f(x) = \sqrt{9 - x^2}$ (semicírculo superior)

::::{admonition} Ver solución
:class: dropdown

**a)** Parábola $y = a(x-2)^2 - 3$ con $a > 0$:
- Dominio: $\mathbb{R}$ (se extiende horizontalmente sin límite)
- Rango: $[-3, +\infty)$ (el mínimo es $-3$ en el vértice)

**b)** Línea recta:
- Dominio: $\mathbb{R}$
- Rango: $\mathbb{R}$

**c)** Por la descripción directa:
- Dominio: $[-2, 5]$
- Rango: $[-1, 8]$ (o un subconjunto, según la forma exacta)

**d)** $f(x) = \sqrt{9 - x^2}$:
Radicando $\geq 0$: $9 - x^2 \geq 0 \implies x^2 \leq 9 \implies -3 \leq x \leq 3$
- Dominio: $[-3, 3]$
- Rango: $[0, 3]$ (la raíz es $\geq 0$, máximo cuando $x=0$: $\sqrt{9}=3$)
::::

---

## Parte 5 — Problema integrador de ingeniería

### Ejercicio 5

Una válvula de control regula el flujo de aceite en un sistema hidráulico. La apertura de la válvula (en %) determina el caudal (en L/min) según:

$$Q(a) = 0.5a + 10 \quad \text{con } a \in [0, 100]$$

Donde $a$ es el porcentaje de apertura.

**a)** ¿Es $Q$ una función? Justifica.

**b)** Identifica el dominio y codominio en el contexto del problema.

**c)** Calcula $Q(0)$, $Q(50)$ y $Q(100)$.

**d)** ¿Cuál es el rango de $Q$?

**e)** Si el sistema necesita exactamente 45 L/min, ¿qué apertura se requiere?

**f)** ¿Es posible obtener un caudal de 5 L/min con esta válvula? ¿Y de 70 L/min?

::::{admonition} Ver solución
:class: dropdown

**a)** ✅ Sí es función. Para cada apertura $a$ hay exactamente un caudal $Q(a)$ — la fórmula asigna un único valor a cada entrada.

**b)**
- Dominio: $[0, 100]$ — la apertura solo puede ir de 0% (cerrada) a 100% (abierta)
- Codominio: $\mathbb{R}$ (matemáticamente), pero físicamente los caudales son positivos

**c)**
- $Q(0) = 0.5(0) + 10 = 10$ L/min (válvula cerrada, hay caudal mínimo de 10)
- $Q(50) = 0.5(50) + 10 = 35$ L/min
- $Q(100) = 0.5(100) + 10 = 60$ L/min

**d)** Rango: $[Q(0), Q(100)] = [10, 60]$ L/min (función lineal creciente en dominio cerrado)

**e)** $Q(a) = 45 \implies 0.5a + 10 = 45 \implies 0.5a = 35 \implies a = 70\%$

**f)**
- 5 L/min: $5 < 10$ (fuera del rango) → **Imposible** con esta válvula
- 70 L/min: $70 > 60$ (fuera del rango) → **Imposible** — habría que abrir más del 100%
::::

---

## Visualización interactiva — La válvula hidráulica

Mueve el deslizador de apertura y observa el caudal resultante.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s5auto-valvula" class="jsxgraph-container"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s5auto-valvula', {
            boundingbox: [-10, 75, 110, -15],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        // Ejes manuales
        board.create('line', [[0,-10],[0,70]], {
            strokeColor: '#374151', strokeWidth: 1,
            straightFirst: false, straightLast: false });
        board.create('line', [[-5,0],[105,0]], {
            strokeColor: '#374151', strokeWidth: 1,
            straightFirst: false, straightLast: false });

        // Etiquetas de eje
        board.create('text', [50, -8, 'Apertura a (%)'], {
            fontSize: 12, color: '#374151', anchorX: 'middle' });
        board.create('text', [-8, 40, 'Q (L/min)'], {
            fontSize: 12, color: '#374151', anchorX: 'middle' });

        // Marcas eje x
        [0,25,50,75,100].forEach(function(v) {
            board.create('point', [v, 0], {
                size: 2, fixed: true, color: '#374151',
                name: String(v), label: { offset: [0,-12], fontSize: 10 }
            });
        });
        // Marcas eje y
        [10,20,30,40,50,60].forEach(function(v) {
            board.create('point', [0, v], {
                size: 2, fixed: true, color: '#374151',
                name: String(v), label: { offset: [-15,0], fontSize: 10 }
            });
        });

        // Gráfica Q(a) = 0.5a + 10
        board.create('functiongraph', [function(a) { return 0.5*a+10; }, 0, 100], {
            strokeColor: '#3b82f6', strokeWidth: 3 });

        // Zona del rango [10,60]
        board.create('segment', [[0,10],[100,60]], {
            strokeColor: '#dbeafe', strokeWidth: 8 });

        // Deslizador apertura
        var sl = board.create('slider', [[10,-10],[90,-10],[0,50,100]], {
            name: 'a (%)', snapWidth: 1,
            baseline: { strokeColor: '#374151' },
            highline: { strokeColor: '#3b82f6' },
            fillColor: '#3b82f6'
        });

        // Punto en la curva
        var pt = board.create('point',
            [function(){return sl.Value();},
             function(){return 0.5*sl.Value()+10;}], {
            size: 8, color: '#dc2626', fixed: true, name: '', label:{fontSize:0}
        });

        // Líneas de proyección
        board.create('segment', [
            function(){return [sl.Value(), 0];},
            function(){return [sl.Value(), 0.5*sl.Value()+10];}
        ], { strokeColor: '#dc2626', strokeWidth: 1, dash: 2 });

        board.create('segment', [
            function(){return [0, 0.5*sl.Value()+10];},
            function(){return [sl.Value(), 0.5*sl.Value()+10];}
        ], { strokeColor: '#16a34a', strokeWidth: 1, dash: 2 });

        // Textos dinámicos
        board.create('text', [10, 68, function() {
            var a = sl.Value();
            return 'Apertura: ' + a + '%  ->  Q = ' + (0.5*a+10).toFixed(1) + ' L/min';
        }], { fontSize: 13, color: '#1d4ed8', fontWeight: 'bold' });

        board.create('text', [10, 62,
            'Dom: [0, 100]%    Ran: [10, 60] L/min'], {
            fontSize: 11, color: '#374151' });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Gráfica de Q(a)=0.5a+10 en el plano apertura vs. caudal. El deslizador mueve la apertura de 0 a 100%. Las proyecciones roja (vertical) y verde (horizontal) muestran cómo leer el dominio y rango en la gráfica.
```

---

## Quiz de cierre — Unidad 2

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdc8R2NOVoSgrivpisJM5Pv5T14091M3TF-aqPLeFm12nJXiQ/viewform" target="_blank" class="quizizz-btn">
    📝 Quiz final — Unidad 2 completa
  </a>
</div>
```

```{note}
**Para el docente — Quiz Quizizz (15 preguntas, ~20 min):**

Identificar función (3): R={(1,5),(2,8),(3,5),(4,11)} sí es función, R={(1,5),(2,8),(1,3),(4,11)} no es función, x=y²+1 no es función
Dominio (4): Dom(f)=5x-7 es ℝ, Dom(g)=(x+2)/(x-3) es ℝ-{3}, Dom(h)=√(2x-8) es [4,+∞), Dom(k) con raíz y denominador es [-4,1)∪(1,+∞)
Evaluación (3): f(x)=3x²-2x+1, f(0)=1, f(2)=9, f(-1)=6
Dominio y rango gráfico (2): parábola vértice (2,-3) abre arriba tiene rango [-3,+∞), f(x)=√(9-x²) tiene dominio [-3,3]
Problema integrador válvula (3): Q(a)=0.5a+10, Q(0)=10 L/min, Q(50)=35 L/min, Q(100)=60 L/min, rango [10,60]

Puntaje mínimo para avanzar a la Unidad 3: 70%
```

---

## Resumen de la Unidad 2

```{list-table}
:header-rows: 1
:widths: 20 80

* - Semana
  - Lo que debes dominar
* - S4
  - Clasificar números en $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{I}$, $\mathbb{R}$. Valor absoluto. Intervalos. Propiedades de reales. Producto cartesiano.
* - S5
  - Distinguir relación de función. Evaluar funciones. Calcular dominio natural. Identificar rango. Aplicar prueba de la línea vertical.
```

:::{admonition} ¡Unidad 2 completada!
:class: tip

Felicidades — completaste la Unidad 2. Si aprobaste el quiz con al menos 70%, estás listo para continuar.

En la **Unidad 3** aprenderás a **operar con expresiones algebraicas** — la herramienta que permite modelar cualquier situación mecánica con símbolos en lugar de números fijos.

➡️ [Ir a S6·C1 Propiedades de la igualdad](../unidad3_expresiones/s6_c1_propiedades_igualdad.md)
:::
