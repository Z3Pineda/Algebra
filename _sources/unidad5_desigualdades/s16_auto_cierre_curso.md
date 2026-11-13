---
title: "S16·Auto Entrega de evidencias y preparación para examen final"
---

# S16·Auto Entrega de evidencias y preparación para examen final

:::{admonition} Esta es tu última clase del curso
:class: tip

Has completado **Álgebra para Ingeniería Mecánica Administrativa** — cinco unidades, dieciséis semanas.

**¿Qué hay aquí?**
- Checklist de competencias (U1–U5)
- Ejercicio integrador final de ingeniería mecánica
- Autoevaluación
- Quiz final del curso

**Tiempo estimado: 60 minutos**
:::

---

## Checklist de competencias del curso

Marca cada ítem al repasar. Si alguno queda en duda, regresa a la semana indicada.

```{list-table}
:header-rows: 1
:widths: 15 55 30

* - Unidad
  - Competencia
  - Semana de repaso
* - U1
  - Operar con conjuntos, diagramas de Venn y lógica proposicional
  - S1–S3
* - U1
  - Traducir enunciados a notación de conjuntos y contar elementos
  - S3
* - U2
  - Clasificar números y representarlos en la recta numérica
  - S4
* - U2
  - Identificar funciones, dominio y rango
  - S5
* - U3
  - Simplificar expresiones algebraicas y operar polinomios
  - S6–S7
* - U3
  - Factorizar y operar con fracciones algebraicas y exponentes
  - S8–S10
* - U4
  - Resolver ecuaciones lineales, con literales y con fracciones
  - S11
* - U4
  - Modelar problemas y resolver sistemas $2 \times 2$
  - S12
* - U4
  - Resolver ecuaciones cuadráticas por varios métodos
  - S13–S14
* - U4
  - Trabajar con polinomios: Ruffini, teorema del factor
  - S15
* - U5
  - Interpretar y graficar valor absoluto
  - S16·C1
* - U5
  - Resolver ecuaciones y desigualdades con $|x|$; tolerancias
  - S16·C2–C3
```

---

## Ejercicio integrador final — Ingeniería mecánica

### Enunciado

Una planta produce ejes cilíndricos con diámetro **nominal** $d_0 = 50.00$ mm y tolerancia $|d - d_0| \leq 0.04$ mm.

**Datos del lote (mm):** $\{49.97,\ 50.02,\ 50.05,\ 49.96,\ 50.01,\ 49.99,\ 50.06\}$

**a)** (U1) Define $A = \{$ ejes dentro de tolerancia $\}$ y $B = \{$ ejes con diámetro $\geq 50.00$ mm $\}$. Halla $|A|$, $|B|$, $|A \cap B|$ y $|A \cup B|$.

**b)** (U5) Escribe el intervalo de aceptación para $d$.

**c)** (U5) Clasifica cada medición del lote como aceptada o rechazada.

**d)** (U3) El volumen de un eje de longitud $L = 200$ mm es $V = \pi r^2 L$ con $r = d/2$. Simplifica $V$ en términos de $d$.

**e)** (U4) Si la carga axial máxima permitida es $F_{max} = 8000$ N y la relación es $F = k(d_0 - d)$ con $k = 2 \times 10^6$ N/m (modelo simplificado de ajuste), ¿qué diámetro mínimo $d$ soporta la carga? Plantea y resuelve $|d_0 - d| = \dfrac{F_{max}}{k}$ (en metros, convertir mm).

**f)** (U2) ¿Es $F(d) = k(d_0 - d)$ una función de $d$ en el dominio físico del eje?

::::{admonition} Ver solución
:class: dropdown

**b)** $|d - 50| \leq 0.04$ ↔ $[49.96, 50.04]$ mm

**c)** Clasificación:
- 49.97 ✓ (en banda)
- 50.02 ✓
- 50.05 ✗ ($> 50.04$)
- 49.96 ✓ (límite inferior)
- 50.01 ✓
- 49.99 ✓
- 50.06 ✗

**a)** $A = \{49.97, 50.02, 49.96, 50.01, 49.99\}$ → $|A| = 5$

$B = \{50.02, 50.05, 50.01, 50.06\}$ → $|B| = 4$ (incluye rechazados sobre nominal)

$A \cap B = \{50.02, 50.01\}$ → $|A \cap B| = 2$

$A \cup B = \{49.97, 50.02, 50.05, 49.96, 50.01, 49.99, 50.06\}$ → $|A \cup B| = 7$ (todo el lote)

**d)** $V = \pi (d/2)^2 L = \dfrac{\pi d^2 L}{4} = \dfrac{\pi \cdot 200}{4} d^2 = 50\pi\, d^2$ mm³

**e)** $|50 - d| = \dfrac{8000}{2 \times 10^6} = 0.004$ m $= 4$ mm

$50 - d = 4$ → $d = 46$ mm o $50 - d = -4$ → $d = 54$ mm

En contexto de reducción de diámetro por carga: $d = 46$ mm (contracción de 4 mm)

**f)** Sí, cada $d$ produce un único $F$ — es función en el dominio considerado.
::::

---

## Autoevaluación

Responde honestamente (1 = necesito repasar, 5 = domino):

| Tema | 1 | 2 | 3 | 4 | 5 |
|------|:-:|:-:|:-:|:-:|:-:|
| Conjuntos y Venn | | | | | |
| Funciones y dominio | | | | | |
| Factorización | | | | | |
| Ecuaciones lineales y sistemas | | | | | |
| Ecuaciones cuadráticas | | | | | |
| Valor absoluto y tolerancias | | | | | |

Si tienes varios **1 o 2**, repasa la unidad correspondiente antes del examen final.

---

## Visualización — Tu recorrido en el curso

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s16auto-cierre" class="jsxgraph-container" style="height:400px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s16auto-cierre', {
            boundingbox: [-1, 8, 16, 0],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var etapas = ['U1\nConjuntos', 'U2\nFunciones', 'U3\nExpresiones', 'U4\nEcuaciones', 'U5\n|x|'];
        var colores = ['#1d4ed8', '#16a34a', '#7c3aed', '#c2410c', '#ca8a04'];

        for (var i = 0; i < 5; i++) {
            var x = 1.5 + i * 3;
            board.create('circle', [[x, 4], [x+0.8, 4]], {
                fillColor: colores[i], fillOpacity: 0.3, strokeColor: colores[i], strokeWidth: 2
            });
            board.create('text', [x, 4, etapas[i]], {
                fontSize: 10, color: colores[i], fontWeight: 'bold', anchorX: 'middle'
            });
            if (i < 4) {
                board.create('segment', [[x+0.9, 4], [x+2.1, 4]], {
                    strokeColor: '#9ca3af', strokeWidth: 2, lastArrow: { type: 2, size: 6 }
                });
            }
        }

        board.create('text', [7.5, 6.5, 'Algebra → herramienta para Ingenieria Mecanica Administrativa'], {
            fontSize: 12, color: '#374151', fontWeight: 'bold', anchorX: 'middle'
        });
        board.create('text', [7.5, 1.5, 'Curso completado — Examen final'], {
            fontSize: 11, color: '#16a34a', anchorX: 'middle'
        });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Diagrama de flujo U1→U2→U3→U4→U5. Cierre visual del arco del curso antes del quiz final.
```

---

## Quiz final del curso

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScpEsHjUgqqi7CVjFQcpWZsrrJ-79kgR75GywV1T2hzoyX5pQ/viewform" target="_blank" class="quizizz-btn">
    📝 Quiz final — Álgebra para Ingeniería Mecánica Administrativa
  </a>
</div>
```

```{note}
**Para el docente — Quiz Quizizz (25 preguntas, ~30 min):**

U1 Conjuntos (5): |A|=5 con A={ejes en tolerancia}, |B|=4, |A∩B|=2, |A∪B|=7 (lote completo)
U2 Funciones (5): F(d)=k(d0-d) es función de d en el dominio físico del eje
U3 Expresiones (5): V=π(d/2)²L simplificado a V=50πd² mm³ con L=200mm
U4 Ecuaciones (5): |d0-d|=Fmax/k=0.004m=4mm da d=46mm o d=54mm (modelo de contracción por carga)
U5 Valor absoluto (5): intervalo de aceptación |d-50|≤0.04 equivale a [49.96, 50.04] mm; clasificación 50.05 y 50.06 rechazados por exceder el límite superior
```

---

## Resumen del curso completo

```{list-table}
:header-rows: 1
:widths: 15 85

* - Unidad
  - Logro central
* - U1
  - Razonar con conjuntos y lógica; contar y clasificar con Venn.
* - U2
  - Dominar números reales y el concepto de función.
* - U3
  - Manipular expresiones algebraicas con fluidez.
* - U4
  - Modelar y resolver ecuaciones y sistemas en contexto de ingeniería.
* - U5
  - Aplicar valor absoluto a tolerancias y control de calidad.
```

:::{admonition} ¡Felicitaciones — curso completado!
:class: tip

Completaste **Álgebra para Ingeniería Mecánica Administrativa**. El lenguaje simbólico que dominas aquí — conjuntos, funciones, ecuaciones, desigualdades — es la base del cálculo, la estadística, la investigación de operaciones y la economía de la producción que encontrarás más adelante en tu carrera.

**Modelar, simplificar, resolver, verificar e interpretar** no es solo un método de examen: es la forma sistemática en que la ingeniería traduce problemas reales en decisiones numéricas.

Mucho éxito en tu **examen final** y en el resto de tu formación como ingeniero mecánico administrativo.
:::
