---
title: "S12·Auto Ejercicios comparativos de métodos de solución"
---

# S12·Auto Ejercicios comparativos de métodos de solución

:::{admonition} Esta es tu clase de autogestión
:class: tip

Consolida los **métodos de resolución de sistemas $2 \times 2$** de la Semana 12 antes de pasar a ecuaciones cuadráticas.

**¿Qué hay aquí?**
- Repaso rápido de S12·C1 a S12·C4
- Mismo sistema resuelto por sustitución, eliminación y gráfico
- Problemas de modelación con sistemas
- Visualización JSXGraph comparativa
- Quiz de cierre

**Tiempo estimado: 50 minutos**
:::

---

## Repaso rápido

| Clase | Tema | Lo más importante |
|-------|------|-------------------|
| S12·C1 | Modelación lineal | 4 pasos: identificar → plantear → resolver → verificar |
| S12·C2 | Sistemas $2 \times 2$ | SCD (una sol.), SCI (infinitas), SI (ninguna). Solución = intersección |
| S12·C3 | Sustitución | Despejar → sustituir → resolver → verificar |
| S12·C4 | Suma/resta y gráfico | Eliminar incógnita sumando/restando; intersección de rectas |

---

## Parte 1 — Mismo sistema, tres métodos

### Ejercicio 1

Resuelve el sistema por **sustitución**, **suma/resta** y **gráfico** (estima la intersección):

$$\begin{cases} 2x + y = 7 \\ x - y = 2 \end{cases}$$

::::{admonition} Ver solución
:class: dropdown

**Sustitución:** $y = 7 - 2x$. Sustituir: $x - (7-2x) = 2 \Rightarrow 3x = 9 \Rightarrow x = 3$, $y = 1$.

**Suma/resta:** Sumar ecuaciones: $3x = 9 \Rightarrow x = 3$, $y = 1$.

**Gráfico:** $y = 7-2x$ e $y = x-2$. Intersección en $(3, 1)$.

**Solución:** $(3, 1)$ — idéntica con los tres métodos ✓
::::

---

### Ejercicio 2

Repite con:

$$\begin{cases} 3x + 2y = 12 \\ x - y = 1 \end{cases}$$

::::{admonition} Ver solución
:class: dropdown

**Sustitución:** $x = y + 1$. Sustituir: $3(y+1) + 2y = 12 \Rightarrow 5y = 9 \Rightarrow y = \dfrac{9}{5}$, $x = \dfrac{14}{5}$.

**Suma/resta:** Multiplicar ec. 2 por 2: $2x - 2y = 2$. Sumar con ec. 1: $5x = 14 \Rightarrow x = \dfrac{14}{5}$, $y = \dfrac{9}{5}$.

**Gráfico:** $y = \dfrac{12-3x}{2}$ e $y = x - 1$. Intersección en $\left(\dfrac{14}{5}, \dfrac{9}{5}\right) = (2.8, 1.8)$.

**Solución:** $\left(\dfrac{14}{5}, \dfrac{9}{5}\right)$
::::

---

## Parte 2 — Clasificar sistemas

### Ejercicio 3

Clasifica cada sistema (SCD, SCI o SI) sin resolver completamente.

**a)** $\begin{cases} x + y = 4 \\ 2x + 2y = 8 \end{cases}$

**b)** $\begin{cases} x + y = 4 \\ x + y = 7 \end{cases}$

**c)** $\begin{cases} 2x - y = 5 \\ x + y = 4 \end{cases}$

::::{admonition} Ver solución
:class: dropdown

**a)** SCI — la segunda ecuación es el doble de la primera (rectas coincidentes).

**b)** SI — mismas pendientes, distintos interceptos (paralelas).

**c)** SCD — pendientes distintas; se cortan en un punto.
::::

---

## Parte 3 — Producción de dos piezas

### Ejercicio 4

Una fábrica produce piezas **A** y **B**. Restricciones diarias:

- Máquina: $3A + 2B = 120$ (horas)
- Material: $A + 4B = 70$ (kg)

**a)** Plantea el sistema.

**b)** Resuelve por el método que prefieras.

**c)** ¿Cuántas piezas A y B se producen?

::::{admonition} Ver solución
:class: dropdown

**a)** $\begin{cases} 3A + 2B = 120 \\ A + 4B = 70 \end{cases}$

**b)** Sustitución: $A = 70 - 4B$. Sustituir: $3(70-4B) + 2B = 120$

$210 - 12B + 2B = 120 \Rightarrow -10B = -90 \Rightarrow B = 9$

$A = 70 - 4(9) = 34$

**c)** **34 piezas A** y **9 piezas B**

Verificación: $3(34)+2(9)=102+18=120$ ✓ y $34+4(9)=70$ ✓
::::

---

## Parte 4 — Mezcla de dos aleaciones

### Ejercicio 5

Se necesitan 600 kg de aleación al 40% de zinc. Disponibles: aleación X al 25% e aleación Y al 55%.

**a)** Plantea el sistema con $x$ = kg de X e $y$ = kg de Y.

**b)** Resuelve por suma/resta.

**c)** Verifica la concentración final.

::::{admonition} Ver solución
:class: dropdown

**a)** $\begin{cases} x + y = 600 \quad \text{(masa total)} \\ 0.25x + 0.55y = 0.40 \cdot 600 = 240 \quad \text{(zinc)} \end{cases}$

**b)** De ec. 1: $y = 600 - x$. Sustituir en ec. 2:

$0.25x + 0.55(600-x) = 240$

$0.25x + 330 - 0.55x = 240 \Rightarrow -0.30x = -90 \Rightarrow x = 300$

$y = 300$ kg

**c)** $0.25(300) + 0.55(300) = 75 + 165 = 240 = 0.40(600)$ ✓ — 40% de zinc.
::::

---

## Parte 5 — Equilibrio de fuerzas

### Ejercicio 6

Un nodo estático tiene dos fuerzas desconocidas $F_1$ y $F_2$ (N):

$$\begin{cases} F_1 + F_2 = 500 \\ 2F_1 - F_2 = 100 \end{cases}$$

**a)** Resuelve por eliminación (suma).

**b)** Interpreta el resultado en contexto de equilibrio.

::::{admonition} Ver solución
:class: dropdown

**a)** Sumar ecuaciones: $3F_1 = 600 \Rightarrow F_1 = 200$ N. Entonces $F_2 = 500 - 200 = 300$ N.

**b)** Las fuerzas $200$ N y $300$ N suman $500$ N (equilibrio vertical) y cumplen $2(200) - 300 = 100$ N (segunda condición del nodo). Ambas restricciones se satisfacen simultáneamente.
::::

---

## Parte 6 — Problema integrador

### Ejercicio 7

Dos bandas transportadoras mueven paquetes. Banda 1: velocidad $v_1 = 0.6$ m/s. Banda 2: velocidad $v_2$ desconocida. Un paquete tarda 25 s en Banda 1 y 15 s en Banda 2 para la **misma distancia** $d$.

Además, el tiempo total de ciclo (ida + vuelta en ambas bandas) es 80 s:

$$25 + 15 + t_2 + t_1 = 80 \quad \text{(simplificado: } d/0.6 + d/v_2 = 40 \text{)}$$

**a)** Escribe $d = 0.6 \times 25$ y plantea $d = v_2 \times 15$.

**b)** Halla $v_2$ y $d$.

**c)** ¿Qué método usaste y por qué?

::::{admonition} Ver solución
:class: dropdown

**a)** $d = 0.6 \times 25 = 15$ m. Ecuación: $15 = v_2 \times 15 \Rightarrow v_2 = 1$ m/s.

**b)** $d = 15$ m, $v_2 = 1$ m/s.

**c)** Una sola incógnita ($v_2$) — ecuación lineal simple, no sistema. Si además se pide tiempo total con dos incógnitas, sería sistema $2 \times 2$.

Verificación: $15/0.6 = 25$ s ✓ y $15/1 = 15$ s ✓
::::

---

## Visualización interactiva — Comparación de métodos

Selecciona un sistema y observa la solución por sustitución, eliminación e intersección gráfica.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s12auto-comparacion" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    var sistemas = [
        {
            nombre: '2x+y=7, x-y=2',
            sol: { x: 3, y: 1 },
            m1: -2, b1: 7,
            m2: 1, b2: -2,
            sust: 'y=7-2x → x-(7-2x)=2 → x=3, y=1',
            elim: 'Sumar: 3x=9 → x=3, y=1',
            graf: 'Interseccion en (3, 1)'
        },
        {
            nombre: 'x+y=5, 2x-y=4',
            sol: { x: 3, y: 2 },
            m1: -1, b1: 5,
            m2: 2, b2: 4,
            sust: 'y=5-x → 2x-(5-x)=4 → x=3, y=2',
            elim: 'Sumar: 3x=9 → x=3, y=2',
            graf: 'Interseccion en (3, 2)'
        }
    ];

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s12auto-comparacion', {
            boundingbox: [-1, 14, 14, -2],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var sysIdx = 0, metodo = 0;
        var metodos = ['Sustitucion', 'Eliminacion', 'Grafico'];
        var dinamicos = [], btnSys = [], btnMet = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var s = sistemas[sysIdx];

            btnSys.forEach(function(b, i) {
                b.setAttribute({
                    fillColor: i === sysIdx ? '#1d4ed8' : '#e5e7eb',
                    strokeColor: i === sysIdx ? '#1d4ed8' : '#9ca3af'
                });
            });
            btnMet.forEach(function(b, i) {
                b.setAttribute({
                    fillColor: i === metodo ? '#7c3aed' : '#e5e7eb',
                    strokeColor: i === metodo ? '#7c3aed' : '#9ca3af'
                });
            });

            dinamicos.push(board.create('text', [7, 13, 'Sistema: ' + s.nombre], {
                fontSize: 13, color: '#374151', fontWeight: 'bold', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 12, 'Metodo: ' + metodos[metodo]], {
                fontSize: 14, color: '#7c3aed', fontWeight: 'bold', anchorX: 'middle'
            }));

            var texto = metodo === 0 ? s.sust : (metodo === 1 ? s.elim : s.graf);
            dinamicos.push(board.create('text', [7, 10.5, texto], {
                fontSize: 12, color: '#374151', anchorX: 'middle'
            }));

            dinamicos.push(board.create('text', [7, 9,
                'Solucion: (' + s.sol.x + ', ' + s.sol.y + ')'], {
                fontSize: 14, color: '#16a34a', fontWeight: 'bold', anchorX: 'middle'
            }));

            if (metodo === 2) {
                var f1 = function(x) { return s.m1 * x + s.b1; };
                var f2 = function(x) { return s.m2 * x + s.b2; };
                dinamicos.push(board.create('functiongraph', [f1, -1, 8], {
                    strokeColor: '#1d4ed8', strokeWidth: 2
                }));
                dinamicos.push(board.create('functiongraph', [f2, -1, 8], {
                    strokeColor: '#c2410c', strokeWidth: 2
                }));
                dinamicos.push(board.create('point', [s.sol.x, s.sol.y], {
                    name: '(' + s.sol.x + ',' + s.sol.y + ')',
                    size: 4, fillColor: '#16a34a', strokeColor: '#16a34a',
                    label: { fontSize: 11, offset: [5, 5] }
                }));
            } else {
                dinamicos.push(board.create('text', [7, 7.5,
                    'Selecciona "Grafico" para ver las rectas'], {
                    fontSize: 11, color: '#6b7280', anchorX: 'middle', fontStyle: 'italic'
                }));
            }

            dinamicos.push(board.create('text', [7, 1.5,
                'Los tres metodos dan la misma solucion'], {
                fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle'
            }));
        }

        sistemas.forEach(function(s, i) {
            var btn = board.create('button', [0.5 + i * 6, 13.8, 'Sys ' + (i+1)], {
                fixed: true, highlight: false, size: 2,
                fillColor: '#e5e7eb', strokeColor: '#9ca3af'
            });
            (function(idx) { btn.on('down', function() { sysIdx = idx; dibujar(); }); })(i);
            btnSys.push(btn);
        });

        metodos.forEach(function(m, i) {
            var btn = board.create('button', [0.5 + i * 4, -1, m], {
                fixed: true, highlight: false, size: 2,
                fillColor: '#e5e7eb', strokeColor: '#9ca3af'
            });
            (function(idx) { btn.on('down', function() { metodo = idx; dibujar(); }); })(i);
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
Dos sistemas de ejemplo. Botones seleccionan sistema y método (sustitución, eliminación, gráfico). Muestra el procedimiento resumido y las rectas con punto de intersección. Refuerza que los tres métodos son equivalentes para sistemas SCD.
```

---

## Quiz de cierre — Semana 12

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfMIIsIyvNq8Zh5J8zC3rphTxuobECTbXqB_Xyua9UJXEExcA/viewform" target="_blank" class="quizizz-btn">
    📝 Quiz de cierre — Semana 12 (Sistemas 2×2)
  </a>
</div>
```

```{note}
**Para el docente — Quiz Quizizz (12 preguntas, ~15 min):**

Mismo sistema tres métodos (2): 2x+y=7 y x-y=2 da x=3,y=1 por sustitución eliminación y gráfico; 3x+2y=12 y x-y=1 da x=14/5,y=9/5
Clasificar sistemas (3): x+y=4 y 2x+2y=8 es SCI, x+y=4 y x+y=7 es SI, 2x-y=5 y x+y=4 es SCD
Producción A y B (2): sistema 3A+2B=120 y A+4B=70 da A=34, B=9
Mezcla de aleaciones (2): x+y=600 y 0.25x+0.55y=240 da x=300 kg, y=300 kg
Equilibrio de fuerzas (2): F1+F2=500 y 2F1-F2=100 da F1=200 N, F2=300 N por eliminación
Problema integrador (1): bandas transportadoras, d=15 m y v2=1 m/s
```

---

## Resumen de la semana

```{list-table}
:header-rows: 1
:widths: 20 80

* - Clase
  - Lo que debes dominar
* - S12·C1
  - Modelar: identificar incógnita → plantear → resolver → verificar en contexto.
* - S12·C2
  - Sistemas $2 \times 2$: SCD, SCI, SI. Solución = intersección de rectas.
* - S12·C3
  - Sustitución: despejar, sustituir, resolver. Casos incompatible e indeterminado.
* - S12·C4
  - Suma/resta para eliminar incógnita. Solución gráfica con intersección.
* - S12·Auto
  - Comparar sustitución, eliminación y gráfico en el mismo sistema.
```

:::{admonition} Siguiente semana
:class: tip
La Semana 12 está completa. La próxima semana trabajarás **ecuaciones cuadráticas** — un nuevo tipo de ecuación con hasta dos soluciones.

➡️ [Ir a S13·C1 Concepto de ecuación cuadrática](s13_c1_concepto_ecuacion_cuadratica.md)
:::
