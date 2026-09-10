---
title: "S12·C2 Sistemas de dos ecuaciones con dos incógnitas"
---

# S12·C2 Sistemas de dos ecuaciones con dos incógnitas

:::{admonition} 🔧 Equilibrio de dos fuerzas en un soporte
:class: ingenieria

Un soporte recibe dos fuerzas desconocidas $F_x$ (horizontal) y $F_y$ (vertical). Las condiciones de equilibrio estático exigen:

$$\sum F_x = 0: \quad F_x - 120 = 0$$
$$\sum F_y = 0: \quad F_y + 80 - 200 = 0$$

Dos ecuaciones, dos incógnitas. La solución $(F_x, F_y) = (120, 120)$ N es el único par que satisface **ambas** condiciones simultáneamente. En ingeniería, casi nunca basta una sola ecuación cuando hay dos magnitudes desconocidas.
:::

**Pregunta detonadora**

> Las rectas $y = 2x + 1$ e $y = -x + 7$ se cortan en un punto. ¿Qué significa ese punto como solución del sistema formado por ambas ecuaciones?

---

## Teoría

### ¿Qué es un sistema de ecuaciones?

Un **sistema de ecuaciones lineales** es un conjunto de dos o más ecuaciones que deben cumplirse **al mismo tiempo**, con las mismas incógnitas.

**Sistema $2 \times 2$** (dos ecuaciones, dos incógnitas):

$$\begin{cases} a_1 x + b_1 y = c_1 \\ a_2 x + b_2 y = c_2 \end{cases}$$

La **solución** es el par ordenado $(x, y)$ que satisface **ambas** ecuaciones.

---

### Interpretación gráfica

Cada ecuación lineal con dos incógnitas representa una **recta** en el plano cartesiano.

| Concepto | Significado gráfico |
|----------|---------------------|
| Solución del sistema | **Punto de intersección** de las dos rectas |
| Una solución | Las rectas se cortan en un solo punto |
| Infinitas soluciones | Las rectas son la misma (coincidentes) |
| Sin solución | Las rectas son paralelas (nunca se cortan) |

**Ejemplo:**

$$\begin{cases} y = 2x + 1 \\ y = -x + 7 \end{cases}$$

En el punto de intersección ambas expresiones de $y$ son iguales:

$$2x + 1 = -x + 7 \quad \Rightarrow \quad 3x = 6 \quad \Rightarrow \quad x = 2, \quad y = 5$$

El punto $(2, 5)$ pertenece a **ambas** rectas.

---

### Tipos de sistemas

| Tipo | Rectas | Soluciones | Nombre |
|------|--------|:----------:|--------|
| **Compatible determinado** | Secantes (se cortan) | **Una** | SCD |
| **Compatible indeterminado** | Coincidentes | **Infinitas** | SCI |
| **Incompatible** | Paralelas | **Ninguna** | SI |

**Criterio algebraico:** compara las razones de los coeficientes:

$$\frac{a_1}{a_2} = \frac{b_1}{b_2} \neq \frac{c_1}{c_2} \quad \Rightarrow \quad \text{incompatible (paralelas)}$$

$$\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2} \quad \Rightarrow \quad \text{indeterminado (coincidentes)}$$

---

### Ejemplo 1 — Compatible determinado (SCD)

$$\begin{cases} 2x + y = 7 \\ x - y = 2 \end{cases}$$

Sumando ambas ecuaciones: $3x = 9 \Rightarrow x = 3$. Sustituyendo: $y = 7 - 2(3) = 1$.

**Solución:** $(3, 1)$ — única.

**Verificación:** $2(3)+1=7$ ✓ y $3-1=2$ ✓

---

### Ejemplo 2 — Compatible indeterminado (SCI)

$$\begin{cases} x + y = 5 \\ 2x + 2y = 10 \end{cases}$$

La segunda ecuación es el doble de la primera → **misma recta**.

Infinitas soluciones: $(0,5), (1,4), (2,3), (3,2), \ldots$

Forma general: $y = 5 - x$.

---

### Ejemplo 3 — Incompatible (SI)

$$\begin{cases} x + y = 5 \\ x + y = 8 \end{cases}$$

Rectas paralelas (misma pendiente, distinto intercepto). **No hay solución.**

En ingeniería, un sistema incompatible indica **condiciones contradictorias** — por ejemplo, dos sensores que reportan valores incompatibles para la misma variable.

```{warning}
Un sistema incompatible no significa "error de cálculo" — significa que el problema **no tiene solución** bajo las condiciones dadas. Revisa los datos o las hipótesis del modelo.
```

---

### Balance de materiales en dos procesos

En una planta, el proceso A consume $2x + y$ kg de materia prima y el proceso B consume $x + 3y$ kg. Si hay 20 kg disponibles para A y 25 kg para B:

$$\begin{cases} 2x + y = 20 \\ x + 3y = 25 \end{cases}$$

donde $x$ e $y$ representan los kg asignados a cada insumo. La solución indica la distribución óptima.

:::{admonition} 🔧 Ingeniería — dos condiciones de operación
:class: ingenieria

Un motor debe cumplir simultáneamente:
- Potencia mínima: $P = Fv \geq 6000$ W → simplificado como $3F + 2v = 6000$
- Consumo máximo de combustible: $2F + v = 3500$

$$\begin{cases} 3F + 2v = 6000 \\ 2F + v = 3500 \end{cases}$$

La solución $(F, v)$ es el **único** par que cumple ambas restricciones. Los sistemas $2 \times 2$ modelan la intersección de condiciones de diseño.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_SISTEMAS_2X2"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Dos rectas que se cortan → una solución (SCD)
2. Rectas paralelas → sin solución (SI)
3. Rectas coincidentes → infinitas soluciones (SCI)
4. Sistema 2x+y=7, x-y=2 → punto (3,1)
5. Balance de fuerzas: sum Fx=0 y sum Fy=0
6. Criterio de razones a1/a2, b1/b2, c1/c2
```

---

## Visualización interactiva

Selecciona el tipo de sistema y observa la relación entre las dos rectas y su solución.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s12c2-sistemas" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    var sistemas = [
        {
            nombre: 'SCD',
            tipo: 'Compatible determinado',
            eq1: { m: 2, b: 1, color: '#1d4ed8' },
            eq2: { m: -1, b: 7, color: '#c2410c' },
            sol: { x: 2, y: 5 },
            desc: 'Una solucion: (2, 5)'
        },
        {
            nombre: 'SCI',
            tipo: 'Compatible indeterminado',
            eq1: { m: -1, b: 5, color: '#1d4ed8' },
            eq2: { m: -1, b: 5, color: '#c2410c' },
            sol: null,
            desc: 'Infinitas soluciones (rectas coincidentes)'
        },
        {
            nombre: 'SI',
            tipo: 'Incompatible',
            eq1: { m: -1, b: 5, color: '#1d4ed8' },
            eq2: { m: -1, b: 8, color: '#c2410c' },
            sol: null,
            desc: 'Sin solucion (rectas paralelas)'
        }
    ];

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s12c2-sistemas', {
            boundingbox: [-2, 10, 10, -2],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var activo = 0;
        var dinamicos = [], btnTipos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar(idx) {
            limpiar();
            activo = idx;
            var s = sistemas[idx];

            btnTipos.forEach(function(b, i) {
                b.setAttribute({
                    fillColor: i === idx ? '#7c3aed' : '#e5e7eb',
                    strokeColor: i === idx ? '#7c3aed' : '#9ca3af'
                });
            });

            var f1 = function(x) { return s.eq1.m * x + s.eq1.b; };
            var f2 = function(x) { return s.eq2.m * x + s.eq2.b; };

            dinamicos.push(board.create('functiongraph', [f1, -2, 10], {
                strokeColor: s.eq1.color, strokeWidth: 2
            }));
            dinamicos.push(board.create('functiongraph', [f2, -2, 10], {
                strokeColor: s.eq2.color, strokeWidth: 2
            }));

            dinamicos.push(board.create('text', [6, 9, s.tipo], {
                fontSize: 13, color: '#7c3aed', fontWeight: 'bold'
            }));
            dinamicos.push(board.create('text', [6, 8.2, s.desc], {
                fontSize: 11, color: '#374151'
            }));

            if (s.sol) {
                dinamicos.push(board.create('point', [s.sol.x, s.sol.y], {
                    name: '(' + s.sol.x + ', ' + s.sol.y + ')',
                    size: 4, fillColor: '#16a34a', strokeColor: '#16a34a',
                    label: { fontSize: 12, color: '#16a34a', offset: [10, 10] }
                }));
            }
        }

        sistemas.forEach(function(s, i) {
            var btn = board.create('button', [6 + i * 2.5, -1.5, s.nombre], {
                fixed: true, highlight: false, size: 2,
                fillColor: '#e5e7eb', strokeColor: '#9ca3af'
            });
            (function(idx) { btn.on('down', function() { dibujar(idx); }); })(i);
            btnTipos.push(btn);
        });

        dibujar(0);
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Tres botones (SCD, SCI, SI) muestran pares de rectas con distinta relación geométrica. En SCD se marca el punto de intersección. Refuerza la conexión entre solución algebraica y cruce gráfico.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSdAp7aQzv7Bpa9WwP4l0l6bv9cNKTXHEgXRA8AmsKNuOq3YSg/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Sistemas 2×2
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "Solucion de un sistema 2x2 es:" → Par (x,y) que satisface ambas ecuaciones
P2 (MC): "Rectas secantes → sistema:" → Compatible determinado
P3 (MC): "Rectas paralelas → sistema:" → Incompatible
P4 (T/F): "x+y=5 y 2x+2y=10 tienen infinitas soluciones." → Verdadero
P5 (Fill): "y=2x+1 e y=-x+7 → x=___, y=___" → 2, 5
P6 (MC ingeniería): "Dos ecuaciones de equilibrio (Fx, Fy) forman:" → Sistema 2x2
P7 (T/F): "Sistema incompatible tiene al menos una solucion." → Falso
P8 (MC): "Graficamente, la solucion es:" → Punto de interseccion
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Sistema $2 \times 2$
  - Dos ecuaciones lineales con dos incógnitas; solución simultánea
* - SCD
  - Rectas secantes → **una** solución
* - SCI
  - Rectas coincidentes → **infinitas** soluciones
* - SI
  - Rectas paralelas → **ninguna** solución
* - Interpretación gráfica
  - Solución = punto de intersección de las rectas
* - Ingeniería
  - Equilibrio de fuerzas, balance de materiales en dos procesos
```

:::{admonition} Siguiente clase
:class: tip
Ya conoces qué es un sistema y sus tipos. En la siguiente clase aprenderás el **método de sustitución** para resolver sistemas $2 \times 2$ algebraicamente.

➡️ [Ir a S12·C3 Método de sustitución](s12_c3_metodo_sustitucion.md)
:::
