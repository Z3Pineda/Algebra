---
title: "S11·Auto Problemas de modelación con ecuaciones lineales"
---

# S11·Auto Problemas de modelación con ecuaciones lineales

:::{admonition} Esta es tu clase de autogestión
:class: tip

Consolida la **modelación con ecuaciones lineales** de la Semana 11 antes de pasar a ecuaciones cuadráticas.

**¿Qué hay aquí?**
- Repaso rápido de S11·C1 a S11·C4
- Problemas de ingeniería con solución colapsable
- Visualización JSXGraph de repaso
- Quiz de cierre

**Tiempo estimado: 50 minutos**
:::

---

## Repaso rápido

| Clase | Tema | Lo más importante |
|-------|------|-------------------|
| S11·C1 | Ecuación e identidad | Ecuación: verdadera para ciertos valores. Identidad: para todos. Partes: MI, MD, incógnita |
| S11·C2 | Ecuaciones lineales | Simplificar → agrupar $x$ → despejar. Verificar en ecuación original |
| S11·C3 | Ecuaciones con literales | Despejar variable de fórmulas: $F=PA$, $t=d/v$, $T=PV/(nR)$ |
| S11·C4 | Ecuaciones con fracciones | Multiplicar por MCM. Restricción: denominadores $\neq 0$ |

---

## Parte 1 — Traducir a ecuación

### Ejercicio 1

Traduce cada enunciado a una ecuación lineal (no resuelvas aún).

**a)** Un resorte con $k = 200$ N/m se alarga $x$ metros bajo una fuerza de 600 N.

**b)** La suma de dos números consecutivos es 47.

**c)** Un tanque contiene $x$ litros de aceite al 40% y $(300 - x)$ litros al 70%. La mezcla final es 55%.

**d)** Un motor entrega potencia $P = 12$ kW a velocidad $v = 30$ m/s. Hallar la fuerza $F$ con $P = Fv$.

::::{admonition} Ver solución
:class: dropdown

**a)** $600 = 200x$ (ley de Hooke)

**b)** $x + (x + 1) = 47$

**c)** $\dfrac{0.40x + 0.70(300 - x)}{300} = 0.55$

**d)** $12000 = F \cdot 30$ (convertir kW a W)
::::

---

## Parte 2 — Mezclas de materiales

### Ejercicio 2

Un ingeniero debe preparar 500 kg de una aleación al 25% de níquel mezclando un lingote al 15% con otro al 40%.

**a)** Plantea la ecuación con $x$ = kg del lingote al 15%.

**b)** Resuelve y verifica.

**c)** ¿Cuántos kg de cada tipo se usan?

::::{admonition} Ver solución
:class: dropdown

**a)** $x + (500 - x) = 500$ (cantidad total). Balance de níquel:

$$0.15x + 0.40(500 - x) = 0.25 \cdot 500$$

**b)** $0.15x + 200 - 0.40x = 125$

$-0.25x = -75 \Rightarrow x = 300$

Verificación: $0.15(300) + 0.40(200) = 45 + 80 = 125 = 0.25(500)$ ✓

**c)** 300 kg al 15% y 200 kg al 40%
::::

---

## Parte 3 — Balance de fuerzas

### Ejercicio 3

Una viga horizontal de 6 m apoya dos cargas: $F_1 = 200$ N a 2 m del extremo izquierdo y $F_2$ desconocida a 5 m del mismo extremo. El apoyo central (en $x = 3$ m) debe soportar todo el peso en equilibrio.

**a)** Escribe la ecuación de momentos respecto al apoyo central: $F_1 \cdot d_1 = F_2 \cdot d_2$.

**b)** Halla $F_2$.

**c)** ¿Cuál es la reacción total en el apoyo?

::::{admonition} Ver solución
:class: dropdown

**a)** Distancia de $F_1$ al apoyo: $|3 - 2| = 1$ m. Distancia de $F_2$ al apoyo: $|5 - 3| = 2$ m.

$$200 \cdot 1 = F_2 \cdot 2$$

**b)** $F_2 = \dfrac{200}{2} = 100$ N

**c)** Reacción = $F_1 + F_2 = 200 + 100 = 300$ N (equilibrio vertical)
::::

---

## Parte 4 — Cinemática

### Ejercicio 4

Un vehículo parte del reposo con aceleración constante $a = 2$ m/s². La ecuación de posición es $d = \dfrac{1}{2}at^2$.

**a)** ¿Cuánto tiempo tarda en recorrer $d = 100$ m?

**b)** Un segundo vehículo sale 5 s después a velocidad constante $v = 20$ m/s. ¿Cuándo lo alcanza? Plantea: $\dfrac{1}{2}(2)t^2 = 20(t - 5)$.

**c)** Resuelve la ecuación de la parte (b).

::::{admonition} Ver solución
:class: dropdown

**a)** $100 = \dfrac{1}{2}(2)t^2 = t^2 \Rightarrow t = 10$ s

**b)** El primero recorre $d = t^2$ (con $a = 2$). El segundo: $d = 20(t - 5)$. Igualar:

$$t^2 = 20(t - 5)$$

**c)** $t^2 = 20t - 100 \Rightarrow t^2 - 20t + 100 = 0$

Esta es cuadrática (S12). Por ahora, verifica $t = 10$: $100 = 20(5) = 100$ ✓. Se alcanzan a los **10 s** (5 s después de que sale el segundo).
::::

---

## Parte 5 — Costos de producción

### Ejercicio 5

El costo de fabricar $n$ piezas es $C(n) = 800 + 45n$ pesos. El ingreso por venta es $I(n) = 120n$ pesos.

**a)** ¿Para cuántas piezas el ingreso iguala al costo (punto de equilibrio)?

**b)** ¿Cuántas piezas se necesitan para ganar $5400$ pesos?

::::{admonition} Ver solución
:class: dropdown

**a)** $120n = 800 + 45n$

$75n = 800 \Rightarrow n = \dfrac{800}{75} = 10.\overline{6}$

Se necesitan al menos **11 piezas** para no perder (equilibrio en $n = 10.\overline{6}$).

**b)** Ganancia = Ingreso − Costo = $120n - (800 + 45n) = 75n - 800$

$75n - 800 = 5400 \Rightarrow 75n = 6200 \Rightarrow n = 82.\overline{6}$

Se necesitan **83 piezas** para ganar $5400$ pesos.
::::

---

## Parte 6 — Ecuaciones con fracciones (ingeniería)

### Ejercicio 6

Dos resistencias $R_1 = 4$ Ω y $R_2 = 12$ Ω están en paralelo.

**a)** Plantea $\dfrac{1}{R_T} = \dfrac{1}{R_1} + \dfrac{1}{R_2}$ y halla $R_T$.

**b)** Si la corriente total es $I = 3$ A, ¿cuál es el voltaje $V = I \cdot R_T$?

**c)** ¿Qué fracción de la corriente pasa por $R_1$?

::::{admonition} Ver solución
:class: dropdown

**a)** $\dfrac{1}{R_T} = \dfrac{1}{4} + \dfrac{1}{12} = \dfrac{3}{12} + \dfrac{1}{12} = \dfrac{4}{12} = \dfrac{1}{3}$

$R_T = 3$ Ω

**b)** $V = 3 \cdot 3 = 9$ V

**c)** $I_1 = \dfrac{V}{R_1} = \dfrac{9}{4} = 2.25$ A. Fracción: $\dfrac{2.25}{3} = 0.75 = 75\%$
::::

---

## Parte 7 — Problema integrador

### Ejercicio 7

Un sistema hidráulico tiene dos cilindros. El cilindro A (diámetro $D_A = 50$ mm) recibe presión $P = 3$ MPa. El cilindro B (diámetro $D_B = 80$ mm) debe generar una fuerza igual.

**a)** Fuerza en A: $F_A = P \cdot \pi (D_A/2)^2$. Calcula $F_A$.

**b)** Despeja $P_B$ de $F_B = P_B \cdot \pi (D_B/2)^2$ e iguala $F_A = F_B$ para hallar $P_B$.

**c)** Si el caudal total es $Q = 12$ L/min y se divide proporcionalmente al área, ¿qué caudal recibe cada cilindro?

::::{admonition} Ver solución
:class: dropdown

**a)** $r_A = 25$ mm = 0.025 m. $F_A = 3 \times 10^6 \times \pi \times (0.025)^2 = 3 \times 10^6 \times \pi \times 0.000625 \approx 5890$ N

**b)** $F_B = F_A \Rightarrow P_B \cdot \pi (0.04)^2 = 5890$

$P_B = \dfrac{5890}{\pi \times 0.0016} \approx \dfrac{5890}{0.00503} \approx 1.17$ MPa

**c)** Área A: $\pi (0.025)^2 \approx 0.00196$ m². Área B: $\pi (0.04)^2 \approx 0.00503$ m². Total $\approx 0.007$ m².

Caudal A: $12 \times \dfrac{0.00196}{0.007} \approx 3.36$ L/min. Caudal B: $12 - 3.36 \approx 8.64$ L/min
::::

---

## Visualización interactiva — Modelación paso a paso

Selecciona un tipo de problema y observa cómo se traduce de enunciado a ecuación y solución.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s11auto-modelacion" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    var problemas = [
        {
            tipo: 'Hooke',
            color: '#1d4ed8',
            enunciado: 'Resorte: F = kx. F=600 N, k=200 N/m. Hallar x.',
            ecuacion: '600 = 200x',
            pasos: ['600 = 200x', 'x = 600/200 = 3 m'],
            respuesta: 'x = 3 m'
        },
        {
            tipo: 'Mezcla',
            color: '#16a34a',
            enunciado: '500 kg al 25%: x kg al 15% + (500-x) al 40%.',
            ecuacion: '0.15x + 0.40(500-x) = 125',
            pasos: ['0.15x + 200 - 0.40x = 125', '-0.25x = -75', 'x = 300 kg'],
            respuesta: '300 kg al 15%, 200 kg al 40%'
        },
        {
            tipo: 'Equilibrio',
            color: '#7c3aed',
            enunciado: 'Viga: F1=200 N a 1 m del apoyo, F2 a 2 m. Momentos iguales.',
            ecuacion: '200 · 1 = F2 · 2',
            pasos: ['200 = 2·F2', 'F2 = 100 N'],
            respuesta: 'F2 = 100 N'
        },
        {
            tipo: 'Costos',
            color: '#c2410c',
            enunciado: 'C = 800 + 45n, I = 120n. Punto de equilibrio.',
            ecuacion: '120n = 800 + 45n',
            pasos: ['75n = 800', 'n = 10.67 piezas'],
            respuesta: 'n ≈ 11 piezas (equilibrio)'
        },
        {
            tipo: 'Paralelo',
            color: '#ca8a04',
            enunciado: 'R1=4 Ω, R2=12 Ω en paralelo. Hallar RT.',
            ecuacion: '1/RT = 1/4 + 1/12',
            pasos: ['1/RT = 3/12 + 1/12 = 4/12', 'RT = 3 Ω'],
            respuesta: 'RT = 3 Ω'
        }
    ];

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s11auto-modelacion', {
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
            var p = problemas[idx];

            botones.forEach(function(b, i) {
                b.setAttribute({
                    fillColor: i === idx ? p.color : '#e5e7eb',
                    strokeColor: i === idx ? p.color : '#9ca3af'
                });
            });

            dinamicos.push(board.create('text', [7, 12.5, p.tipo + ': Modelacion'], {
                fontSize: 16, color: p.color, fontWeight: 'bold', anchorX: 'middle'
            }));

            dinamicos.push(board.create('text', [7, 11.2, p.enunciado], {
                fontSize: 11, color: '#374151', anchorX: 'middle'
            }));

            dinamicos.push(board.create('text', [7, 9.5, 'Ecuacion: ' + p.ecuacion], {
                fontSize: 13, color: p.color, fontWeight: 'bold', anchorX: 'middle'
            }));

            for (var i = 0; i < p.pasos.length; i++) {
                dinamicos.push(board.create('text', [1.5, 8 - i * 1.2,
                    (i + 1) + '. ' + p.pasos[i]], {
                    fontSize: 12, color: '#4b5563'
                }));
            }

            dinamicos.push(board.create('text', [7, 3.5, 'Respuesta: ' + p.respuesta], {
                fontSize: 14, color: p.color, fontWeight: 'bold', anchorX: 'middle'
            }));

            dinamicos.push(board.create('segment', [[3, 5.5], [11, 5.5]], {
                strokeColor: p.color, strokeWidth: 2, lastArrow: { type: 2, size: 8 }
            }));
            dinamicos.push(board.create('text', [7, 6.2, 'enunciado → ecuacion → solucion'], {
                fontSize: 10, color: p.color, anchorX: 'middle'
            }));
        }

        var labels = ['Hooke', 'Mezcla', 'Equilibrio', 'Costos', 'Paralelo'];
        labels.forEach(function(lbl, i) {
            var col = i % 3, fila = Math.floor(i / 3);
            var btn = board.create('button', [0.5 + col * 4.3, 13.5 - fila * 0.7, lbl], {
                fixed: true, highlight: false, size: 2,
                fillColor: '#e5e7eb', strokeColor: '#9ca3af'
            });
            (function(idx) { btn.on('down', function() { dibujar(idx); }); })(i);
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
Cinco tipos de problemas de modelación (Hooke, mezcla, equilibrio, costos, resistencias en paralelo). Cada botón muestra enunciado → ecuación → pasos → respuesta. Sirve como repaso integrador antes del quiz de cierre.
```

---

## Quiz de cierre — Semana 11

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfqe5sLxjz1hlsqNmRi85kwaegfzrJSYfH4x5K5w50azFVuAg/viewform" target="_blank" class="quizizz-btn">
    📝 Quiz de cierre — Semana 11 (Ecuaciones lineales)
  </a>
</div>
```

```{note}
**Para el docente — Quiz Quizizz (12 preguntas, ~15 min):**

Traducir a ecuación (2): resorte F=kx con F=600 k=200 da 600=200x, suma consecutivos x+(x+1)=47
Mezclas (2): 0.15x+0.40(500-x)=125 da x=300 kg al 15%, verificación 0.15(300)+0.40(200)=125
Balance de fuerzas (2): momento 200×1=F2×2 da F2=100 N, reacción total=200+100=300 N
Costos de producción (2): punto de equilibrio 120n=800+45n da n≈10.67, ganancia 75n-800=5400 da n≈83 piezas
Fracciones — resistencias (2): 1/RT=1/4+1/12 da RT=3 Ω, voltaje V=3×3=9 V
Problema integrador (2): fuerza F_A=3×10⁶×π×(0.025)²≈5890 N, presión P_B≈1.17 MPa
```

---

## Resumen de la semana

```{list-table}
:header-rows: 1
:widths: 20 80

* - Clase
  - Lo que debes dominar
* - S11·C1
  - Diferenciar ecuación e identidad. Partes: MI, MD, incógnita. Clasificar por grado.
* - S11·C2
  - Resolver ecuaciones lineales paso a paso. Verificar sustituyendo en la original.
* - S11·C3
  - Despejar variables de fórmulas: $F=PA$, $t=d/v$, $r=\sqrt{A/\pi}$, $T=PV/(nR)$.
* - S11·C4
  - Eliminar denominadores con MCM. Restricciones de dominio. Resistencias en paralelo.
* - S11·Auto
  - Traducir problemas de ingeniería a ecuaciones y resolver: mezclas, fuerzas, cinemática, costos.
```

:::{admonition} Siguiente semana
:class: tip
La Semana 11 está completa. La próxima semana trabajarás **modelación con ecuaciones lineales** en contextos más complejos y ecuaciones cuadráticas.

➡️ [Ir a S12·C1 Modelación con ecuaciones lineales](s12_c1_modelacion_ecuaciones_lineales.md)
:::
