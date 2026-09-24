---
title: "S16·C4 Repaso general del curso"
---

# S16·C4 Repaso general del curso

:::{admonition} 🔧 Diseño integrado de un componente mecánico
:class: ingenieria

Para dimensionar un eje sometido a carga, un ingeniero combina herramientas de **todo el curso**:

1. **Conjuntos** — piezas que cumplen especificación vs. rechazadas
2. **Funciones** — relación carga–deformación $F = kx$
3. **Expresiones** — simplificar $F = k(2x + 3)$
4. **Ecuaciones** — resolver $kx = 500$ para $x$
5. **Valor absoluto** — verificar $|d - 40| \leq 0.05$ mm

El álgebra no es un tema aislado: cada unidad es **herramienta** para la siguiente y para la práctica profesional.
:::

**Pregunta detonadora**

> ¿Qué unidad del curso usarías primero para clasificar piezas aceptables y rechazadas en un lote de producción?

---

## Teoría

### Mapa del curso — 5 unidades

| Unidad | Semanas | Tema central | Herramienta para ingeniería |
|:------:|:-------:|--------------|----------------------------|
| **U1** | S1–S3 | Conjuntos y lógica | Clasificar, contar, razonar con diagramas de Venn |
| **U2** | S4–S5 | Números reales y funciones | Recta numérica, dominio, relaciones carga–deformación |
| **U3** | S6–S10 | Expresiones algebraicas | Simplificar, factorizar, operar fórmulas |
| **U4** | S11–S15 | Ecuaciones | Resolver incógnitas, sistemas, cuadráticas, polinomios |
| **U5** | S16 | Desigualdades y $|x|$ | Tolerancias, bandas de aceptación, control de calidad |

---

### Problema representativo por unidad

#### U1 — Conjuntos y lógica

En un lote de 100 piezas: 60 pasan inspección dimensional (conjunto $A$), 45 pasan acabado superficial (conjunto $B$), 25 pasan ambas.

$$|A \cup B| = |A| + |B| - |A \cap B| = 60 + 45 - 25 = 80$$

**80 piezas** son aceptables en al menos un criterio; **20** fallan ambos.

---

#### U2 — Números reales y funciones

Un resorte cumple $F = 250x$ (N). ¿Es función? Sí: cada $x$ tiene un único $F$.

Dominio físico: $x \geq 0$ (no hay alargamiento negativo en este modelo).

Si $F = 875$ N: $x = \dfrac{875}{250} = 3.5$ m — **ecuación lineal** (U4).

---

#### U3 — Expresiones algebraicas

Simplificar el volumen de dos tramos cilíndricos:

$$V = \pi r^2 h_1 + \pi r^2 h_2 = \pi r^2(h_1 + h_2)$$

Factor común (S8) concentra el cálculo del área $\pi r^2$ una sola vez.

---

#### U4 — Ecuaciones

**Lineal:** $500 + 35n = 2275$ → $n = 51$ piezas (punto de equilibrio).

**Sistema:** $\begin{cases} 2A + B = 50 \\ A + 3B = 45 \end{cases}$ → $A = 21$, $B = 8$.

**Cuadrática:** $x^2 - 5x + 6 = 0$ → $x = 2, 3$.

**Polinomio:** $P(x) = x^3 - 6x^2 + 11x - 6 = (x-1)(x-2)(x-3)$.

---

#### U5 — Valor absoluto y tolerancias

Eje nominal 50 mm, tolerancia $\pm 0.02$ mm:

$$|d - 50| \leq 0.02 \quad \Leftrightarrow \quad 49.98 \leq d \leq 50.02 \text{ mm}$$

Pieza con $d = 50.015$ mm: $|50.015 - 50| = 0.015 \leq 0.02$ ✓ **aceptada**.

---

### Conexiones entre unidades

```{list-table}
:header-rows: 1
:widths: 25 35 40

* - De → A
  - Conexión
  - Ejemplo ingeniería
* - U1 → U4
  - Conjunto solución de ecuación
  - Raíces = piezas que cumplen igualdad
* - U2 → U4
  - Función → ecuación al fijar salida
  - $F=kx$ con $F$ dado → resolver $x$
* - U3 → U4
  - Simplificar antes de resolver
  - Factorizar → producto nulo
* - U4 → U5
  - Ecuación $|x|=k$ vs desigualdad $|x|\leq k$
  - Cotas límite vs banda aceptable
* - U1 → U5
  - Intervalo = conjunto de aceptación
  - $d \in [49.98, 50.02]$
```

---

### Estrategia para el examen final

| Paso | Acción |
|:----:|--------|
| 1 | **Identificar** la unidad: ¿conjuntos, función, expresión, ecuación o $|x|$? |
| 2 | **Simplificar** primero (U3) si la expresión es compleja |
| 3 | **Plantear** ecuación o desigualdad del enunciado |
| 4 | **Resolver** con el método adecuado |
| 5 | **Verificar** y **interpretar** en contexto (unidades, sentido físico) |

```{warning}
En el examen final, los problemas integradores suelen mezclar unidades. No te quedes en un solo método: lee el enunciado completo antes de elegir herramienta.

Errores comunes en repaso:
- Resolver sin verificar (radicales, valor absoluto)
- Olvidar descartar raíces negativas en contextos geométricos
- Confundir $|x| < k$ (intervalo) con $|x| > k$ (unión)
```

:::{admonition} 🔧 Ingeniería — hilo conductor del curso
:class: ingenieria

**Modelar → simplificar → resolver → verificar → interpretar** es el ciclo que repites desde U1 hasta U5. En la carrera de Ingeniería Mecánica Administrativa, este ciclo se amplía con cálculo, estadística y optimización — pero el álgebra de este curso es la base simbólica de todos esos pasos.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_REPASO_GENERAL"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~6 min):**
1. Mapa visual de 5 unidades U1-U5
2. Un problema corto por unidad resuelto
3. Tabla de conexiones animada
4. Ciclo modelar-simplificar-resolver-verificar
5. Ejemplo integrador eje con tolerancia
6. Tips para examen final
```

---

## Visualización interactiva

Explora las cinco unidades del curso y su herramienta principal en ingeniería mecánica.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s16c4-repaso" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    var unidades = [
        { id: 'U1', nombre: 'Conjuntos y Logica', color: '#1d4ed8', ejemplo: 'Venn: |A∪B| = |A|+|B|-|A∩B|', y: function(x){ return 0.5; } },
        { id: 'U2', nombre: 'Numeros y Funciones', color: '#16a34a', ejemplo: 'F = kx (funcion lineal)', y: function(x){ return 0.3*x; } },
        { id: 'U3', nombre: 'Expresiones', color: '#7c3aed', ejemplo: 'πr²(h1+h2) factor comun', y: function(x){ return 0.1*x*x; } },
        { id: 'U4', nombre: 'Ecuaciones', color: '#c2410c', ejemplo: 'kx=500 → x despejada', y: function(x){ return Math.abs(x-2)+1; } },
        { id: 'U5', nombre: 'Desigualdades |x|', color: '#ca8a04', ejemplo: '|d-50|≤0.02 intervalo', y: function(x){ return Math.abs(x-2); } }
    ];

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s16c4-repaso', {
            boundingbox: [-5, 14, 14, -2],
            axis: true, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var activo = 0, dinamicos = [], btns = [];

        function dibujar(i) {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
            activo = i;
            var u = unidades[i];

            btns.forEach(function(b, j) {
                b.setAttribute({ fillColor: j === i ? u.color : '#e5e7eb', strokeColor: j === i ? u.color : '#9ca3af' });
            });

            dinamicos.push(board.create('text', [7, 12.5, u.id + ': ' + u.nombre], {
                fontSize: 15, color: u.color, fontWeight: 'bold', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 11.2, u.ejemplo], {
                fontSize: 12, color: '#374151', anchorX: 'middle'
            }));

            dinamicos.push(board.create('functiongraph', [u.y, -4, 4], {
                strokeColor: u.color, strokeWidth: 2.5
            }));

            dinamicos.push(board.create('text', [7, 2,
                'Unidad ' + (i+1) + ' de 5 — base para la siguiente'], {
                fontSize: 11, color: '#6b7280', anchorX: 'middle', fontStyle: 'italic'
            }));
        }

        unidades.forEach(function(u, i) {
            var btn = board.create('button', [0.5 + i * 2.5, 13.5, u.id], {
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
Cinco botones (U1–U5) muestran nombre, ejemplo de ingeniería y mini-gráfica representativa. El alumno repasa visualmente el arco completo del curso antes del examen final.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfCT1sDG3AuLWrRObsmJsWZc48NRNJm3sAjdghEnapBM0droA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Repaso general del curso
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (10 preguntas, ~12 min):**

U1 (2): |A∪B|=60+45-25=80 piezas aceptables en al menos un criterio, 20 fallan ambos criterios
U2 (2): F=250x es función pues cada x tiene un único F, si F=875N entonces x=3.5m
U3 (2): V=πr²h1+πr²h2=πr²(h1+h2) por factor común, simplificar concentra el cálculo de πr² una vez
U4 (2): 500+35n=2275 da n=51 piezas de equilibrio, x²-5x+6=0 da x=2,3
U5 (2): |d-50|≤0.02 equivale a 49.98≤d≤50.02 mm, d=50.015mm cumple |50.015-50|=0.015≤0.02 aceptada
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 20 80

* - Unidad
  - Lo esencial para el examen
* - U1
  - Conjuntos, Venn, lógica proposicional, conteo
* - U2
  - Números reales, recta, funciones, dominio y rango
* - U3
  - Expresiones, productos notables, factorización, fracciones algebraicas
* - U4
  - Ecuaciones lineales, sistemas, cuadráticas, polinomios
* - U5
  - Valor absoluto, ecuaciones y desigualdades, tolerancias
* - Ciclo
  - Modelar → simplificar → resolver → verificar → interpretar
```

:::{admonition} Siguiente clase
:class: tip
Completaste el repaso de las cinco unidades. En la siguiente clase — la última del curso — entregarás evidencias, resolverás el **ejercicio integrador final** y te prepararás para el examen.

➡️ [Ir a S16·Auto Entrega de evidencias y preparación para examen final](s16_auto_cierre_curso.md)
:::
