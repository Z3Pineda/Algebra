---
title: "S15·Auto Repaso general Unidad 4"
---

# S15·Auto Repaso general Unidad 4

:::{admonition} Esta es tu clase de autogestión — cierre de la Unidad 4
:class: tip

Consolida **ecuaciones e inecuaciones lineales, sistemas, cuadráticas y polinomios** (Semanas 11–15) antes de la Unidad 5.

**¿Qué hay aquí?**
- Tabla de repaso S11–S15
- Ejercicios integradores
- Soluciones colapsables
- Quiz final de la Unidad 4

**Tiempo estimado: 60 minutos**
:::

---

## Tabla de repaso — Semanas 11 a 15

| Semana | Temas centrales | Herramientas clave |
|:------:|-----------------|-------------------|
| **S11** | Ecuación, identidad; lineales; literales; fracciones | Propiedades de igualdad; MCM; despeje |
| **S12** | Modelación; sistemas $2\times2$; sustitución; eliminación | SCD/SCI/SI; intersección de rectas |
| **S13** | Cuadrática; factorización; $(x+a)^2=b$; completar cuadrado | Producto nulo; forma vértice |
| **S14** | Fórmula general; radicales; forma cuadrática; lineal+cuadrática | $\Delta$; verificación; $u=f(x)$ |
| **S15** | Sistemas cuadráticos; polinomios; Ruffini; teorema del factor | Raíces; $P(a)=0$; grado $n$ |

---

## Parte 1 — Ecuaciones lineales (S11)

### Ejercicio 1

**a)** Resuelve $\dfrac{2x-1}{3} + \dfrac{x+2}{2} = 4$

**b)** Despeja $T$ de $PV = nRT$

::::{admonition} Ver solución
:class: dropdown

**a)** MCM$(3,2)=6$: $2(2x-1)+3(x+2)=24$ → $7x+4=24$ → $x=\dfrac{20}{7}$

**b)** $T = \dfrac{PV}{nR}$
::::

---

## Parte 2 — Sistemas 2×2 (S12)

### Ejercicio 2

$$\begin{cases} 3x + 2y = 16 \\ x - y = 2 \end{cases}$$

Resuelve por sustitución y por eliminación.

::::{admonition} Ver solución
:class: dropdown

**Sustitución:** $x=y+2$ → $3(y+2)+2y=16$ → $y=2$, $x=4$

**Eliminación:** sumar ecuaciones ajustadas → mismo resultado $(4, 2)$
::::

---

## Parte 3 — Ecuaciones cuadráticas (S13–S14)

### Ejercicio 3

Resuelve $x^2 - 3x - 10 = 0$ por factorización y por fórmula general.

::::{admonition} Ver solución
:class: dropdown

**Factorización:** $(x-5)(x+2)=0$ → $x=5$, $x=-2$

**Fórmula:** $\Delta=9+40=49$, $x=\dfrac{3\pm 7}{2}$ → $x=5$, $x=-2$ ✓
::::

---

### Ejercicio 4

**a)** $\sqrt{x + 5} = x - 1$ (verificar)

**b)** $x^4 - 8x^2 + 15 = 0$

::::{admonition} Ver solución
:class: dropdown

**a)** $x+5=(x-1)^2$ → $x^2-3x-4=0$ → $x=4$ o $x=-1$. Solo $x=4$: $\sqrt{9}=3$, $4-1=3$ ✓

**b)** $u=x^2$: $u^2-8u+15=0$ → $(u-3)(u-5)=0$ → $x=\pm\sqrt{3}$, $x=\pm\sqrt{5}$
::::

---

## Parte 4 — Sistemas mixtos y cuadráticos (S14–S15)

### Ejercicio 5

$$\begin{cases} y = x^2 - 1 \\ y = 2x + 3 \end{cases}$$

::::{admonition} Ver solución
:class: dropdown

$x^2-1=2x+3$ → $x^2-2x-4=0$ → $x=\dfrac{2\pm\sqrt{20}}{2}=1\pm\sqrt{5}$

$y=2(1+\sqrt{5})+3=5+2\sqrt{5}$ e $y=5-2\sqrt{5}$
::::

---

## Parte 5 — Polinomios (S15)

### Ejercicio 6

**a)** Evalúa $P(2)$ para $P(x) = x^3 - 4x^2 + 5$ con Ruffini.

**b)** Factoriza $x^3 - 4x^2 + x + 6$

::::{admonition} Ver solución
:class: dropdown

**a)** Ruffini $a=2$: residuo $8-16+5=-3$. $P(2)=-3$

**b)** $P(3)=0$ → $(x-3)$ factor. Cociente $x^2-x-2=(x-2)(x+1)$

$P(x)=(x-3)(x-2)(x+1)$ — raíces $-1, 2, 3$
::::

---

## Parte 6 — Problema integrador

### Ejercicio 7

Una caja sin tapa se construye cortando cuadrados de lado $x$ cm de las esquinas de una lámina de $20 \times 30$ cm. El volumen es:

$$V = x(20-2x)(30-2x) = 400x - 100x^2 + 4x^3$$

Si $V = 1056$ cm³:

**a)** Plantea $4x^3 - 100x^2 + 400x - 1056 = 0$

**b)** Verifica que $x = 4$ es raíz (sustituye en el polinomio o en $V$).

**c)** ¿Tiene sentido $x = 4$ cm?

::::{admonition} Ver solución
:class: dropdown

**a)** $4x^3 - 100x^2 + 400x - 1056 = 0$ (dividir entre 4: $x^3 - 25x^2 + 100x - 264 = 0$)

**b)** Verifica que $x = 4$ es raíz: $P(4)=64-400+400-1056=0$ ✓ (con $P(x)=4x^3-100x^2+400x-1056$)

**c)** $x=4$ cm: base $12\times 22$ cm, $V=4(12)(22)=1056$ cm³. Válido ($0<x<10$).
::::

---

## Visualización interactiva — Repaso Unidad 4

Selecciona un tema de la unidad y revisa la herramienta principal.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s15auto-repaso" class="jsxgraph-container" style="height:480px"></div>

<script>
(function() {
    var temas = [
        { nombre: 'S11 Lineales', tip: 'Propiedades de igualdad', color: '#1d4ed8' },
        { nombre: 'S12 Sistemas', tip: 'Interseccion de rectas', color: '#16a34a' },
        { nombre: 'S13 Cuadraticas', tip: 'Factorizar / completar', color: '#7c3aed' },
        { nombre: 'S14 Formula Δ', tip: 'Discriminante b²-4ac', color: '#c2410c' },
        { nombre: 'S15 Polinomios', tip: 'Ruffini / teorema factor', color: '#ca8a04' }
    ];

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s15auto-repaso', {
            boundingbox: [-1, 12, 14, -1],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var activo = 0, dinamicos = [], btns = [];

        function dibujar(i) {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
            activo = i;
            var t = temas[i];
            btns.forEach(function(b, j) {
                b.setAttribute({ fillColor: j === i ? t.color : '#e5e7eb', strokeColor: j === i ? t.color : '#9ca3af' });
            });
            dinamicos.push(board.create('text', [7, 10, t.nombre], { fontSize: 16, color: t.color, fontWeight: 'bold', anchorX: 'middle' }));
            dinamicos.push(board.create('text', [7, 8.5, 'Herramienta: ' + t.tip], { fontSize: 13, color: '#374151', anchorX: 'middle' }));
            dinamicos.push(board.create('text', [7, 6, 'Unidad 4 — Ecuaciones (S11 a S15)'], { fontSize: 12, color: '#6b7280', anchorX: 'middle' }));
        }

        temas.forEach(function(t, i) {
            var btn = board.create('button', [0.5 + i * 2.5, 11.5, 'S' + (11+i)], {
                fixed: true, highlight: false, size: 2, fillColor: '#e5e7eb', strokeColor: '#9ca3af'
            });
            (function(j) { btn.on('down', function() { dibujar(j); }); })(i);
            btns.push(btn);
        });
        dibujar(0);
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Cinco botones (S11–S15) muestran el tema y herramienta principal de cada semana. Repaso visual antes del quiz final de unidad.
```

---

## Quiz final — Unidad 4

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScGBHOCSBCmBaQ8Ob1SeC3YgsBhVmWQ3fC_yLqXb_QIRUZt3A/viewform" target="_blank" class="quizizz-btn">
    📝 Quiz final — Unidad 4 (Ecuaciones)
  </a>
</div>
```

```{note}
**Para el docente — Quiz Quizizz (20 preguntas, ~25 min):**

S11 lineales (2): (2x-1)/3+(x+2)/2=4 da x=20/7, despejar T de PV=nRT da T=PV/(nR)
S12 sistemas (2): 3x+2y=16 y x-y=2 da x=4,y=2 por sustitución y eliminación
S13-S14 cuadráticas (4): x²-3x-10=0 da x=5,-2 por factorización y fórmula general, √(x+5)=x-1 da x=4 válido (x=-1 se descarta)
S14-S15 sistemas mixtos (2): y=x²-1 y y=2x+3 da x=1±√5, x⁴-8x²+15=0 con u=x² da x=±√3,±√5
S15 polinomios (2): P(2) por Ruffini para P(x)=x³-4x²+5 da P(2)=-3, factorizar x³-4x²+x+6=(x-3)(x-2)(x+1)
Problema integrador (1): caja sin tapa V=4x³-100x²+400x-1056, x=4 cm es raíz válida con V=1056 cm³
```

---

## Resumen de la Unidad 4

```{list-table}
:header-rows: 1
:widths: 15 85

* - Semana
  - Lo esencial
* - S11
  - Ecuaciones lineales: resolver, despejar literales, fracciones, modelar.
* - S12
  - Sistemas $2\times2$: modelación, sustitución, eliminación, gráfico.
* - S13
  - Cuadráticas: concepto, factorización, $(x+a)^2=b$, completar cuadrado.
* - S14
  - Fórmula general y $\Delta$; radicales; forma cuadrática; sistemas mixtos.
* - S15
  - Sistemas cuadráticos; polinomios grado $n$; Ruffini; teorema del factor.
```

:::{admonition} ¡Unidad 4 completada!
:class: tip

Has cerrado la **Unidad 4 — Ecuaciones**. En la **Unidad 5 — Desigualdades** comenzarás con el valor absoluto y su representación gráfica.

➡️ [Ir a U5·S16·C1 Valor absoluto y gráfico](../unidad5_desigualdades/s16_c1_valor_absoluto_grafico.md)
:::
