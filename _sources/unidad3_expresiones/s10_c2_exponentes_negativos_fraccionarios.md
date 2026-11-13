---
title: "S10·C2 Exponentes negativos y fraccionarios"
---

# S10·C2 Exponentes negativos y fraccionarios

:::{admonition} 🔧 Módulo de elasticidad y frecuencia natural de vibración
:class: ingenieria

El módulo de elasticidad $E$ y la densidad $\rho$ de un material determinan la **frecuencia natural** de vibración de una viga:

$$f_n = \frac{\lambda^2}{2\pi L^2}\sqrt{\frac{E}{\rho}}$$

Si $E = 2 \times 10^{11}$ Pa y $\rho = 7850$ kg/m³, al simplificar:

$$\sqrt{\frac{E}{\rho}} = \sqrt{\frac{2 \times 10^{11}}{7850}} = \sqrt{2.55 \times 10^7}$$

Escribir $10^7 = 10^{14/2}$ permite usar exponentes fraccionarios:

$$10^{7} = 10^{7/1} = (10^{1/2})^{14} \quad \text{o bien} \quad \sqrt{10^7} = 10^{7/2}$$

Los exponentes **negativos** aparecen al invertir unidades: $\text{s}^{-1}$ (Hertz), $\text{m}^{-1}$, $\text{Pa}^{-1}$ (compliance). Dominar $x^{-n}$ y $x^{m/n}$ es esencial en resistencia de materiales y análisis vibratorio.
:::

**Pregunta detonadora**

> ¿Cómo escribirías $\frac{1}{x^3}$ usando un exponente negativo? ¿Y $\sqrt{x}$ como potencia de $x$?

---

## Teoría

### Exponente negativo

Para cualquier base no nula y exponente entero positivo $n$:

$$x^{-n} = \frac{1}{x^n} \qquad (x \neq 0)$$

**Inversamente:**

$$\frac{1}{x^n} = x^{-n}$$

**Ejemplos:**

$$2^{-3} = \frac{1}{2^3} = \frac{1}{8}$$

$$x^{-1} = \frac{1}{x}$$

$$10^{-4} = \frac{1}{10^4} = 0.0001$$

---

### Leyes con exponentes negativos

Las leyes de S10·C1 siguen siendo válidas:

$$x^3 \cdot x^{-5} = x^{3+(-5)} = x^{-2} = \frac{1}{x^2}$$

$$\frac{x^{-2}}{x^{-4}} = x^{-2-(-4)} = x^{2}$$

$$(x^{-3})^2 = x^{-6} = \frac{1}{x^6}$$

**Ejemplo:**

$$\frac{3^{-2} \cdot 3^5}{3^{-1}} = \frac{3^{3}}{3^{-1}} = 3^{3-(-1)} = 3^4 = 81$$

---

### Exponente fraccionario

El exponente fraccionario conecta potencias con **raíces**:

$$x^{1/n} = \sqrt[n]{x}$$

$$x^{m/n} = \sqrt[n]{x^m} = \left(\sqrt[n]{x}\right)^m$$

| Notación exponencial | Notación radical |
|---------------------|------------------|
| $x^{1/2}$ | $\sqrt{x}$ |
| $x^{1/3}$ | $\sqrt[3]{x}$ |
| $x^{2/3}$ | $\sqrt[3]{x^2}$ |
| $x^{3/2}$ | $\sqrt{x^3}$ |

**Ejemplos:**

$$16^{1/2} = \sqrt{16} = 4$$

$$8^{1/3} = \sqrt[3]{8} = 2$$

$$27^{2/3} = (\sqrt[3]{27})^2 = 3^2 = 9$$

```{warning}
Para exponentes fraccionarios con base negativa:

- $(-4)^{1/2}$ **no es real** (raíz par de número negativo)
- $(-8)^{1/3} = -2$ **sí es real** (raíz impar)
- En ingeniería, las magnitudes físicas suelen ser positivas — las raíces pares se aplican a cantidades no negativas.
```

---

### Conversión radical ↔ exponencial

**De radical a exponencial:**

$$\sqrt[5]{x^3} = x^{3/5}$$

$$\frac{1}{\sqrt{x}} = x^{-1/2}$$

**De exponencial a radical:**

$$x^{-2/3} = \frac{1}{x^{2/3}} = \frac{1}{\sqrt[3]{x^2}}$$

---

### Propiedades combinadas

$$\sqrt{x} \cdot \sqrt{x} = x^{1/2} \cdot x^{1/2} = x^{1/2 + 1/2} = x^1 = x$$

$$\frac{x^{1/2}}{x^{1/3}} = x^{1/2 - 1/3} = x^{3/6 - 2/6} = x^{1/6} = \sqrt[6]{x}$$

**Ejemplo completo:**

$$\frac{(2x^2)^{-1} \cdot x^{1/2}}{x^{-3}} = \frac{2^{-1}x^{-2} \cdot x^{1/2}}{x^{-3}} = \frac{1}{2} \cdot x^{-2+1/2-(-3)} = \frac{x^{3/2}}{2}$$

---

### Conexión con ingeniería

:::{admonition} 🔧 Resistencia de materiales y vibraciones
:class: ingenieria

| Concepto | Expresión | Exponente |
|----------|-----------|-----------|
| Esfuerzo $\sigma = F/A$ | $\text{N/m}^2 = \text{N} \cdot \text{m}^{-2}$ | $-2$ |
| Frecuencia $f$ | $\text{Hz} = \text{s}^{-1}$ | $-1$ |
| Compliance $1/E$ | $\text{Pa}^{-1}$ | $-1$ |
| Velocidad de onda $\sqrt{E/\rho}$ | $\sqrt{\text{Pa}/(\text{kg/m}^3)}$ | $1/2$ |

La raíz cuadrada en $\sqrt{E/\rho}$ es un exponente $1/2$ — convertir entre notaciones evita errores al manipular fórmulas de vibración y fatiga.
:::

**Ejemplo — notación científica con exponente negativo:**

$$0.00045 = 4.5 \times 10^{-4}$$

$$\frac{1}{4.5 \times 10^{-4}} = \frac{1}{4.5} \times 10^{4} \approx 0.222 \times 10^4 = 2.22 \times 10^3$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_EXPONENTES_NEG_FRAC"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Exponente negativo: $x^{-3} = 1/x^3$ con flecha de inversión
2. Aplicar leyes: $x^2 \cdot x^{-5} = x^{-3}$
3. Exponente fraccionario: $x^{1/2} = \sqrt{x}$ visualmente
4. Tabla de equivalencias: $x^{1/3}$, $x^{2/3}$, $x^{3/2}$
5. Conversión: $\sqrt[4]{x^3} = x^{3/4}$
6. Cierre: $f_n \propto \sqrt{E/\rho}$ y unidades $\text{s}^{-1}$
```

---

## Visualización interactiva

Explora la equivalencia entre $x^{-n}$, $x^{1/n}$ y notación radical.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s10c2-exp-neg-frac" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s10c2-exp-neg-frac', {
            boundingbox: [-1, 13, 14, -2],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var slN = board.create('slider', [[8, 10], [13, 10], [1, 3, 6]], {
            name: 'n', snapWidth: 1, fillColor: '#3b82f6' });
        var slM = board.create('slider', [[8, 8.5], [13, 8.5], [1, 2, 5]], {
            name: 'm', snapWidth: 1, fillColor: '#f97316' });

        var dinamicos = [];
        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var n = slN.Value(), m = slM.Value();
            var val = Math.round(Math.pow(8, m / n) * 100) / 100;

            dinamicos.push(board.create('text', [7, 11.5,
                'Exponente negativo: x^(-' + n + ') = 1/x^' + n], {
                fontSize: 13, color: '#3b82f6', fontWeight: 'bold', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 10,
                'Exponente fraccionario: x^(' + m + '/' + n + ') = raíz ' + n + ' de x^' + m], {
                fontSize: 13, color: '#f97316', fontWeight: 'bold', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 8.5,
                'Ejemplo con x=8: 8^(' + m + '/' + n + ') = ' + val], {
                fontSize: 14, color: '#16a34a', fontWeight: 'bold', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 7,
                '8^(-' + n + ') = 1/8^' + n + ' = 1/' + Math.pow(8, n)], {
                fontSize: 12, color: '#374151', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 5.5,
                '1/√x = x^(-1/2)  |  √x = x^(1/2)'], {
                fontSize: 12, color: '#6b7280', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 4,
                'f [Hz] = s^(-1)  —  exponente negativo en unidades'], {
                fontSize: 11, color: '#1d4ed8', anchorX: 'middle'
            }));
        }

        slN.on('drag', dibujar);
        slM.on('drag', dibujar);
        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Deslizadores $m$ y $n$ controlan el exponente fraccionario $x^{m/n}$ con ejemplo numérico en base 8. Muestra en paralelo el exponente negativo $x^{-n}$ y las equivalencias $x^{1/2}$, $x^{-1/2}$. Conecta con unidades de frecuencia $\text{s}^{-1}$.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSftZrqWw7WAT6lBPKDexNVoMjlepMzjk5rd5ANSnyiXMomq1A/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Exponentes negativos y fraccionarios
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "x^(-4) = 1/x^___" → 4
P2 (Fill): "2^(-3) = ___" → 1/8
P3 (Fill): "16^(1/2) = ___" → 4
P4 (Fill): "8^(2/3) = ___" → 4
P5 (MC): "x^(-1/2) = ?" → 1/√x
P6 (Fill): "x^(1/2) · x^(1/3) = x^(___)" → 5/6
P7 (Fill ingeniería): "Hz = s^(-1) → exponente = ___" → -1
P8 (T/F): "(-4)^(1/2) es un número real" → Falso
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 35 65

* - Concepto
  - Fórmula
* - Exponente negativo
  - $x^{-n} = \frac{1}{x^n}$ con $x \neq 0$
* - Raíz como potencia
  - $x^{1/n} = \sqrt[n]{x}$
* - Exponente fraccionario
  - $x^{m/n} = \sqrt[n]{x^m}$
* - Recíproco radical
  - $\frac{1}{\sqrt{x}} = x^{-1/2}$
* - Ingeniería
  - Unidades $\text{s}^{-1}$, $\text{m}^{-2}$; $\sqrt{E/\rho}$ en vibraciones
```

:::{admonition} Siguiente clase
:class: tip
Ya conectas exponentes fraccionarios con radicales. En la siguiente clase trabajarás **operaciones con radicales**: simplificar, sumar, multiplicar, dividir y racionalizar denominadores.

➡️ [Ir a S10·C3 Radicales](s10_c3_radicales.md)
:::
