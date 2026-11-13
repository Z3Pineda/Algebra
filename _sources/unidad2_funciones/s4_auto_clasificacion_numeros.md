---
title: "S4·Auto Clasificación de números y producto cartesiano"
---

# S4·Auto Clasificación de números y producto cartesiano

:::{admonition} Esta es tu clase de autogestión
:class: tip

Esta clase refuerza los cuatro temas de la Semana 4 antes de arrancar con funciones.

**¿Qué hay aquí?**
- Repaso de los conjuntos numéricos
- Ejercicios de recta numérica, valor absoluto e intervalos
- Ejercicios de propiedades de los reales
- Ejercicios de producto cartesiano
- Quiz de cierre

**Tiempo estimado: 50 minutos**
:::

---

## Repaso rápido

| Clase | Tema | Lo más importante |
|-------|------|-------------------|
| S4·C1 | Conjuntos numéricos | $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}$. Los irracionales son los que no pueden ser fracción |
| S4·C2 | Recta numérica | $|x|$ = distancia al cero. Intervalos: $[a,b]$ cerrado, $(a,b)$ abierto |
| S4·C3 | Propiedades | Conmutativa, asociativa, distributiva. Resta y división NO son conmutativas |
| S4·C4 | Producto cartesiano | $A \times B = \{(a,b)\}$. $|A \times B| = |A| \times |B|$. Base del plano cartesiano |

---

## Parte 1 — Clasificación de números

### Ejercicio 1

Clasifica cada número en todos los conjuntos a los que pertenece ($\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{R}$, $\mathbb{I}$):

| Número | $\mathbb{N}$ | $\mathbb{Z}$ | $\mathbb{Q}$ | $\mathbb{I}$ | $\mathbb{R}$ |
|--------|:---:|:---:|:---:|:---:|:---:|
| $0$ | | | | | |
| $-4$ | | | | | |
| $\frac{5}{3}$ | | | | | |
| $\sqrt{9}$ | | | | | |
| $\sqrt{7}$ | | | | | |
| $3.14$ | | | | | |
| $\pi$ | | | | | |
| $0.\overline{142857}$ | | | | | |

::::{admonition} Ver solución
:class: dropdown

| Número | $\mathbb{N}$ | $\mathbb{Z}$ | $\mathbb{Q}$ | $\mathbb{I}$ | $\mathbb{R}$ |
|--------|:---:|:---:|:---:|:---:|:---:|
| $0$ | ✅ | ✅ | ✅ | ❌ | ✅ |
| $-4$ | ❌ | ✅ | ✅ | ❌ | ✅ |
| $\frac{5}{3}$ | ❌ | ❌ | ✅ | ❌ | ✅ |
| $\sqrt{9} = 3$ | ✅ | ✅ | ✅ | ❌ | ✅ |
| $\sqrt{7}$ | ❌ | ❌ | ❌ | ✅ | ✅ |
| $3.14$ | ❌ | ❌ | ✅ | ❌ | ✅ |
| $\pi$ | ❌ | ❌ | ❌ | ✅ | ✅ |
| $0.\overline{142857}$ | ❌ | ❌ | ✅ | ❌ | ✅ |

Nota: $\sqrt{9} = 3$ es natural — no confundir con $\sqrt{7}$ que sí es irracional.  
$3.14$ es racional (termina). $\pi = 3.14159...$ es irracional (no termina, no se repite).  
$0.\overline{142857}$ es periódico → racional ($= 1/7$).
::::

---

## Parte 2 — Recta numérica y valor absoluto

### Ejercicio 2

**a)** Ordena de menor a mayor: $-5,\ 0,\ 3,\ -1,\ \frac{1}{2},\ -\frac{7}{2},\ \sqrt{3}$

**b)** Calcula: $|-8|$, $|3.5|$, $|-\pi|$, $|0|$

**c)** Calcula la distancia: $d(-4, 7)$, $d(0, -5)$, $d(-3, -8)$

**d)** ¿Pertenece $x = 3$ al intervalo $[3, 7)$? ¿Y $x = 7$?

::::{admonition} Ver solución
:class: dropdown

**a)** $-5 < -\frac{7}{2} < -1 < 0 < \frac{1}{2} < \sqrt{3} < 3$

($-\frac{7}{2} = -3.5$, $\sqrt{3} \approx 1.73$)

**b)**
- $|-8| = 8$
- $|3.5| = 3.5$
- $|-\pi| = \pi \approx 3.14159$
- $|0| = 0$

**c)**
- $d(-4, 7) = |7-(-4)| = |11| = 11$
- $d(0, -5) = |-5-0| = 5$
- $d(-3, -8) = |-8-(-3)| = |-5| = 5$

**d)**
- $x=3$ en $[3,7)$: ✅ Sí — el corchete cuadrado indica que el 3 está incluido
- $x=7$ en $[3,7)$: ❌ No — el paréntesis indica que el 7 está excluido
::::

---

## Parte 3 — Propiedades de los reales

### Ejercicio 3

Identifica qué propiedad se usa en cada paso:

$$5 \times (8 + 12) = 5 \times 8 + 5 \times 12 \quad \text{(a)}$$
$$= 40 + 60 \quad \text{(b)}$$
$$= 60 + 40 \quad \text{(c)}$$
$$= 100$$

::::{admonition} Ver solución
:class: dropdown

**(a)** Propiedad **distributiva** de la multiplicación sobre la suma

**(b)** Operación aritmética directa (no es una propiedad en sí)

**(c)** Propiedad **conmutativa** de la suma ($40 + 60 = 60 + 40$)
::::

---

### Ejercicio 4

Simplifica usando propiedades. Indica cuál usas en cada paso.

**a)** $7 \times (x + 3)$

**b)** $(4 + a) + 6$

**c)** $\frac{1}{5} \times 5 \times y$

::::{admonition} Ver solución
:class: dropdown

**a)** $7 \times (x + 3) = 7x + 7 \times 3 = 7x + 21$
(distributiva)

**b)** $(4 + a) + 6 = a + (4 + 6) = a + 10$
(conmutativa + asociativa)

**c)** $\frac{1}{5} \times 5 \times y = \left(\frac{1}{5} \times 5\right) \times y = 1 \times y = y$
(asociativa + inverso multiplicativo + neutro multiplicativo)
::::

---

## Parte 4 — Producto cartesiano

### Ejercicio 5

Sean $A = \{1, 2\}$, $B = \{a, b, c\}$.

**a)** Lista todos los elementos de $A \times B$

**b)** Lista todos los elementos de $B \times A$

**c)** ¿Es $A \times B = B \times A$?

**d)** ¿Cuántos elementos tiene $A \times B \times A$?

::::{admonition} Ver solución
:class: dropdown

**a)** $A \times B = \{(1,a),\ (1,b),\ (1,c),\ (2,a),\ (2,b),\ (2,c)\}$ — 6 pares

**b)** $B \times A = \{(a,1),\ (a,2),\ (b,1),\ (b,2),\ (c,1),\ (c,2)\}$ — 6 pares

**c)** No son iguales aunque tienen la misma cardinalidad — los pares son distintos: $(1,a) \neq (a,1)$

**d)** $|A \times B \times A| = |A| \times |B| \times |A| = 2 \times 3 \times 2 = 12$
::::

---

### Ejercicio 6 — Ingeniería

Una empresa de manufactura fabrica tornillos con:
- **Diámetros ($D$):** `{M4, M6, M8, M10, M12}` (5 medidas)
- **Materiales ($M$):** `{acero inoxidable, acero al carbono, titanio}` (3 materiales)
- **Acabados ($A$):** `{brillante, negro, galvanizado}` (3 acabados)

**a)** ¿Cuántas referencias distintas de tornillo puede fabricar?

**b)** El tornillo (M8, acero inoxidable, negro) pertenece a $D \times M \times A$. ¿Verdadero o falso?

**c)** ¿Cuántas referencias tienen diámetro M6?

::::{admonition} Ver solución
:class: dropdown

**a)** $|D \times M \times A| = 5 \times 3 \times 3 = 45$ referencias distintas

**b)** Verdadero — (M8, acero inoxidable, negro) es una terna ordenada del producto cartesiano

**c)** Fijando el primer elemento en M6: quedan $3 \times 3 = 9$ referencias con diámetro M6
::::

---

## Visualización interactiva — Plano cartesiano

Explora los puntos del plano $\mathbb{R}^2$. Mueve el punto y observa sus coordenadas.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s4auto-plano" class="jsxgraph-container"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s4auto-plano', {
            boundingbox: [-6, 6, 6, -6],
            axis: true, showCopyright: false, showNavigation: true,
            pan: { enabled: false }, zoom: { enabled: false },
            defaultAxes: {
                x: { name: 'x', withLabel: true, label: { position: 'rt', offset: [10, 0] } },
                y: { name: 'y', withLabel: true, label: { position: 'rt', offset: [0, 10] } }
            }
        });

        // Punto arrastrable
        var p = board.create('point', [2, 3], {
            size: 8, color: '#3b82f6', name: '',
            label: { fontSize: 0 }
        });

        // Proyecciones sobre los ejes
        var px = board.create('point', [function() { return p.X(); }, 0], {
            size: 4, color: '#dc2626', fixed: true, name: '',
            label: { fontSize: 0 }
        });
        var py = board.create('point', [0, function() { return p.Y(); }], {
            size: 4, color: '#16a34a', fixed: true, name: '',
            label: { fontSize: 0 }
        });

        // Líneas de proyección
        board.create('segment', [p, px], {
            strokeColor: '#dc2626', strokeWidth: 1, dash: 2 });
        board.create('segment', [p, py], {
            strokeColor: '#16a34a', strokeWidth: 1, dash: 2 });

        // Coordenadas dinámicas
        board.create('text', [-5.5, 5.3, function() {
            return 'Punto: (' + p.X().toFixed(2) + ', ' + p.Y().toFixed(2) + ')';
        }], { fontSize: 14, color: '#1d4ed8', fontWeight: 'bold' });

        board.create('text', [-5.5, 4.5, function() {
            return 'x = ' + p.X().toFixed(2) + '  (abscisa)';
        }], { fontSize: 12, color: '#dc2626' });

        board.create('text', [-5.5, 3.8, function() {
            return 'y = ' + p.Y().toFixed(2) + '  (ordenada)';
        }], { fontSize: 12, color: '#16a34a' });

        // Cuadrante
        board.create('text', [-5.5, 3.0, function() {
            var x = p.X(), y = p.Y();
            if (x > 0 && y > 0) return 'Cuadrante I (+,+)';
            if (x < 0 && y > 0) return 'Cuadrante II (-,+)';
            if (x < 0 && y < 0) return 'Cuadrante III (-,-)';
            if (x > 0 && y < 0) return 'Cuadrante IV (+,-)';
            return 'Sobre un eje';
        }], { fontSize: 12, color: '#7c3aed' });

        board.create('text', [-5.5, -5.3,
            'Arrastra el punto azul por el plano'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic'
        });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Punto arrastrable en el plano cartesiano. Muestra coordenadas, proyecciones sobre los ejes (líneas de puntos roja y verde) y el cuadrante actual. Ideal para introducir el concepto de par ordenado como posición en el plano.
```

---

## Quiz de cierre — Semana 4

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScgfEcBi6kKQlBoef8vrDlzqe_H1RVzZ5a9RNgtuXAPafTh9w/viewform" target="_blank" class="quizizz-btn">
    📝 Quiz de cierre — Semana 4
  </a>
</div>
```

```{note}
**Para el docente — Quiz Quizizz (12 preguntas, ~15 min):**

Números (3): √9=3 es natural y entero, √7 es irracional, 0.142857 periódico es racional
Recta numérica (3): |-8|=8, d(-4,7)=11, x=3 pertenece a [3,7) pero x=7 no
Propiedades (3): 5×(8+12)=5×8+5×12 es distributiva, (4+a)+6=a+10 usa conmutativa y asociativa, 1/5×5×y=y usa inverso multiplicativo
Producto cartesiano (3): |A×B|=6 con A={1,2} B={a,b,c}, A×B≠B×A aunque misma cardinalidad, |D×M×A|=5×3×3=45 referencias de tornillo

Configuración: tiempo 20 min, mostrar respuesta correcta al terminar.
```

---

## Resumen de la semana

```{list-table}
:header-rows: 1
:widths: 20 80

* - Clase
  - Lo que debes dominar
* - S4·C1
  - Clasificar cualquier número en $\mathbb{N}$, $\mathbb{Z}$, $\mathbb{Q}$, $\mathbb{I}$, $\mathbb{R}$
* - S4·C2
  - Calcular valor absoluto y distancia. Identificar si un número pertenece a un intervalo.
* - S4·C3
  - Aplicar las propiedades (conmutativa, asociativa, distributiva). Saber cuáles NO aplican a resta y división.
* - S4·C4
  - Construir $A \times B$. Calcular $|A \times B|$. Identificar puntos del plano como pares ordenados.
```

:::{admonition} Siguiente semana
:class: tip
La Semana 4 está completa. La próxima semana trabajaremos con **relaciones y funciones** — el concepto que conecta todo lo aprendido y es la base del cálculo y la ingeniería.

➡️ [Ir a S5·C1 Concepto de relación](s5_c1_concepto_relacion.md)
:::
