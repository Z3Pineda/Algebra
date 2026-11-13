---
title: "S12·C4 Método de suma o resta y solución gráfica"
---

# S12·C4 Método de suma o resta y solución gráfica

:::{admonition} 🔧 Dos condiciones de operación simultáneas
:class: ingenieria

Un compresor debe cumplir dos restricciones al mismo tiempo:

$$\begin{cases} 3P + 2Q = 480 \quad \text{(potencia térmica, kW)} \\ P + Q = 200 \quad \text{(caudal total, L/min)} \end{cases}$$

donde $P$ y $Q$ son los caudales de dos etapas. Restando la segunda ecuación de la primera (coeficientes de $Q$ opuestos tras multiplicar):

$$2P + Q = 280 \quad \text{(resta ajustada)}$$

El **método de suma o resta** elimina una incógnita combinando ecuaciones — alternativa eficiente cuando los coeficientes están alineados.
:::

**Pregunta detonadora**

> En el sistema $\begin{cases} 2x + y = 7 \\ x - y = 2 \end{cases}$, ¿qué pasa si **sumas** ambas ecuaciones término a término? ¿Qué incógnita desaparece?

---

## Teoría

### Método de suma o resta (eliminación)

**Idea:** combinar las dos ecuaciones (sumando o restando) para **eliminar** una incógnita.

| Paso | Acción |
|:----:|--------|
| 1 | Igualar coeficientes de una incógnita (multiplicar si hace falta) |
| 2 | Sumar o restar las ecuaciones para eliminar esa incógnita |
| 3 | Resolver la ecuación resultante |
| 4 | Sustituir para hallar la otra incógnita y verificar |

---

### Ejemplo 1 — Sumar directamente

$$\begin{cases} 2x + y = 7 \\ x - y = 2 \end{cases}$$

Los coeficientes de $y$ son $+1$ y $-1$ → **sumar** elimina $y$:

$$\begin{array}{rcl} 2x + y & = & 7 \\ x - y & = & 2 \\ \hline 3x & = & 9 \end{array}$$

$$x = 3 \quad \Rightarrow \quad y = 7 - 2(3) = 1$$

**Solución:** $(3, 1)$

---

### Ejemplo 2 — Multiplicar antes de sumar

$$\begin{cases} 3x + 2y = 12 \\ 2x - y = 3 \end{cases}$$

Multiplicar la ecuación 2 por 2: $4x - 2y = 6$. Sumar con la ecuación 1:

$$7x = 18 \quad \Rightarrow \quad x = \frac{18}{7}, \quad y = 3 - 2 \cdot \frac{18}{7} = -\frac{15}{7}$$

---

### Ejemplo 3 — Restar ecuaciones

$$\begin{cases} 5x + 3y = 22 \\ 2x + 3y = 13 \end{cases}$$

Los coeficientes de $y$ son iguales → **restar** ecuación 2 de ecuación 1:

$$3x = 9 \quad \Rightarrow \quad x = 3, \quad y = \frac{22 - 15}{3} = \frac{7}{3}$$

---

### ¿Sumar o restar?

| Situación | Operación |
|-----------|-----------|
| Coeficientes opuestos ($+y$ y $-y$) | **Sumar** |
| Coeficientes iguales ($+3y$ y $+3y$) | **Restar** |
| Coeficientes distintos | Multiplicar una ecuación para igualarlos |

---

### Solución gráfica

Cada ecuación $ax + by = c$ representa una **recta**. La solución del sistema es el **punto de intersección**.

**Pasos gráficos:**

1. Despejar $y$ en cada ecuación: forma $y = mx + b$
2. Graficar ambas rectas
3. Leer las coordenadas del punto de cruce

**Ejemplo:** $\begin{cases} y = 2x + 1 \\ y = -x + 7 \end{cases}$

Las rectas se cortan en $(2, 5)$ — misma solución que por sustitución o eliminación.

```{warning}
La solución gráfica es **aproximada** si lees del dibujo. Para valores exactos, usa métodos algebraicos y verifica graficando.

Si las rectas son paralelas → sistema incompatible (sin intersección).
Si son coincidentes → infinitas soluciones (toda la recta).
```

---

### Comparación de métodos

| Método | Ventaja | Cuándo usarlo |
|--------|---------|---------------|
| Sustitución | Directo si una variable ya está despejada | $y = 2x + 1$ en otra ecuación |
| Suma/resta | Elimina una variable sin fracciones | Coeficientes iguales u opuestos |
| Gráfico | Visualiza tipos de sistema | Interpretar SCD, SCI, SI |

:::{admonition} 🔧 Ingeniería — restricciones de producción
:class: ingenieria

Una fábrica produce piezas tipo A y tipo B. Restricciones diarias:

$$\begin{cases} 2A + B = 50 \quad \text{(horas de máquina)} \\ A + 3B = 45 \quad \text{(kg de material)} \end{cases}$$

Multiplicar ecuación 1 por $-3$ y sumar con ecuación 2:

$$-6A - 3B + A + 3B = -150 + 45 \quad \Rightarrow \quad -5A = -105 \quad \Rightarrow \quad A = 21, \quad B = 8$$

Producir **21 piezas A** y **8 piezas B** agota ambos recursos simultáneamente.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_SUMA_RESTA_GRAFICO"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Sumar 2x+y=7 y x-y=2 → 3x=9 (elimina y)
2. Multiplicar antes de sumar: 3x+2y=12 y 2x-y=3
3. Graficar y=2x+1 e y=-x+7 → interseccion (2,5)
4. Rectas paralelas → sin solucion
5. Comparar sustitucion, eliminacion y grafico
6. Problema compresor: 3P+2Q=480, P+Q=200
```

---

## Visualización interactiva

Ajusta las pendientes e interceptos de dos rectas y observa cómo cambia el punto de intersección — la solución del sistema.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s12c4-interseccion" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s12c4-interseccion', {
            boundingbox: [-4, 12, 12, -4],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slM1 = board.create('slider', [[-3, 11], [2, 11], [-3, 2, 3]], {
            name: 'm1', snapWidth: 0.5, fillColor: '#1d4ed8' });
        var slB1 = board.create('slider', [[-3, 10], [2, 10], [-2, 1, 6]], {
            name: 'b1', snapWidth: 0.5, fillColor: '#1d4ed8' });
        var slM2 = board.create('slider', [[6, 11], [11, 11], [-3, -1, 3]], {
            name: 'm2', snapWidth: 0.5, fillColor: '#c2410c' });
        var slB2 = board.create('slider', [[6, 10], [11, 10], [-2, 7, 6]], {
            name: 'b2', snapWidth: 0.5, fillColor: '#c2410c' });

        var line1, line2, punto, txtSol, txtTipo;
        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var m1 = slM1.Value(), b1 = slB1.Value();
            var m2 = slM2.Value(), b2 = slB2.Value();

            var f1 = function(x) { return m1 * x + b1; };
            var f2 = function(x) { return m2 * x + b2; };

            dinamicos.push(board.create('functiongraph', [f1, -4, 12], {
                strokeColor: '#1d4ed8', strokeWidth: 2.5
            }));
            dinamicos.push(board.create('functiongraph', [f2, -4, 12], {
                strokeColor: '#c2410c', strokeWidth: 2.5
            }));

            dinamicos.push(board.create('text', [-3.5, 8.5,
                'Recta 1: y = ' + m1 + 'x + ' + b1], {
                fontSize: 11, color: '#1d4ed8'
            }));
            dinamicos.push(board.create('text', [-3.5, 7.8,
                'Recta 2: y = ' + m2 + 'x + ' + b2], {
                fontSize: 11, color: '#c2410c'
            }));

            var tipo, solTexto, colorSol;

            if (Math.abs(m1 - m2) < 0.01) {
                if (Math.abs(b1 - b2) < 0.01) {
                    tipo = 'SCI — Infinitas soluciones (coincidentes)';
                    colorSol = '#ca8a04';
                    solTexto = 'Toda la recta';
                } else {
                    tipo = 'SI — Sin solucion (paralelas)';
                    colorSol = '#dc2626';
                    solTexto = 'No hay interseccion';
                }
            } else {
                var xSol = (b2 - b1) / (m1 - m2);
                var ySol = m1 * xSol + b1;
                tipo = 'SCD — Una solucion';
                colorSol = '#16a34a';
                solTexto = '(' + xSol.toFixed(2) + ', ' + ySol.toFixed(2) + ')';

                dinamicos.push(board.create('point', [xSol, ySol], {
                    name: '', size: 5, fillColor: '#16a34a', strokeColor: '#16a34a'
                }));
                dinamicos.push(board.create('text', [xSol + 0.5, ySol + 0.8, solTexto], {
                    fontSize: 12, color: '#16a34a', fontWeight: 'bold'
                }));
            }

            dinamicos.push(board.create('text', [4, -2.5, tipo], {
                fontSize: 12, color: colorSol, fontWeight: 'bold', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [4, -3.3, 'Solucion: ' + solTexto], {
                fontSize: 11, color: colorSol, anchorX: 'middle'
            }));
        }

        slM1.on('drag', dibujar);
        slB1.on('drag', dibujar);
        slM2.on('drag', dibujar);
        slB2.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Cuatro deslizadores controlan $m_1$, $b_1$, $m_2$, $b_2$ de las rectas $y = m_1 x + b_1$ e $y = m_2 x + b_2$. El punto de intersección se actualiza dinámicamente. Si las pendientes coinciden, detecta SCI o SI automáticamente. Es la visualización central de la solución gráfica.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSf93rDwtbqL8kQ-V0ExhlDqQkrb1fCjpbZp5boZ6YPxf4PKRQ/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Suma/resta y solución gráfica
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "2x+y=7 y x-y=2. Sumando se elimina:" → y
P2 (Fill): "3x=9 → x=___" → 3
P3 (MC): "Coeficientes de y iguales (+3y y +3y):" → Restar ecuaciones
P4 (MC): "Solucion grafica del sistema es:" → Punto de interseccion
P5 (Fill): "y=2x+1 e y=-x+7 → interseccion x=___" → 2
P6 (T/F): "Rectas paralelas → sistema incompatible." → Verdadero
P7 (MC ingeniería): "2A+B=50 y A+3B=45 → metodo eficiente:" → Suma/resta tras multiplicar
P8 (MC): "Grafico da solucion exacta si:" → Se leen coordenadas exactas (algebra confirma)
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Suma/resta
  - Combinar ecuaciones para eliminar una incógnita
* - Multiplicar antes
  - Igualar coeficientes cuando no son iguales ni opuestos
* - Solución gráfica
  - Intersección de dos rectas en el plano
* - SCD
  - Pendientes distintas → un punto de cruce
* - SCI / SI
  - Pendientes iguales → coincidentes o paralelas
* - Ingeniería
  - Dos restricciones simultáneas (potencia, caudal, material, tiempo)
```

:::{admonition} Siguiente clase
:class: tip
Dominas sustitución, eliminación y solución gráfica. En la siguiente clase **compararás los tres métodos** resolviendo los mismos sistemas en autogestión.

➡️ [Ir a S12·Auto Ejercicios comparativos de métodos de solución](s12_auto_comparacion_metodos.md)
:::
