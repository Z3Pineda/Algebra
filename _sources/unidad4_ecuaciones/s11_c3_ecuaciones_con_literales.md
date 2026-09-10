---
title: "S11·C3 Ecuaciones con literales"
---

# S11·C3 Ecuaciones con literales

:::{admonition} 🔧 Presión en un cilindro hidráulico
:class: ingenieria

La presión en un fluido se relaciona con la fuerza y el área:

$$P = \frac{F}{A}$$

Un ingeniero conoce la presión de operación $P = 2.5$ MPa y el diámetro del pistón $d = 80$ mm, pero necesita calcular la **fuerza** $F$ que el fluido ejerce.

Primero despeja $F$ de la fórmula:

$$F = P \cdot A = P \cdot \pi r^2$$

Despejar variables de fórmulas con literales es una habilidad diaria en diseño mecánico: convierte una relación general en una herramienta de cálculo directo.
:::

**Pregunta detonadora**

> En la fórmula $d = vt$, ¿cómo despejarías $t$ si conoces $d$ y $v$? ¿Qué propiedad de la igualdad usarías?

---

## Teoría

### ¿Qué es una ecuación con literales?

Una **ecuación con literales** (o fórmula) contiene **varias letras** que representan magnitudes distintas. **Despejar** una variable significa escribirla sola en un miembro, en términos de las demás.

$$d = vt \quad \Rightarrow \quad t = \frac{d}{v}$$

El procedimiento es idéntico al de las ecuaciones lineales numéricas: aplicar las propiedades de la igualdad, pero tratando las otras letras como si fueran números conocidos.

---

### Estrategia general

| Paso | Acción |
|:----:|--------|
| 1 | Identificar en qué miembro está la variable a despejar |
| 2 | Usar adición/sustracción para mover términos que **no** contienen la variable |
| 3 | Usar multiplicación/división para aislar la variable |
| 4 | Verificar sustituyendo valores numéricos |

**Regla:** la variable que despejas es la "incógnita"; las demás letras se comportan como constantes.

---

### Ejemplo 1 — Despejar $F$ de $P = \dfrac{F}{A}$

Queremos $F$ sola. El denominador es $A$, así que multiplicamos ambos lados por $A$:

$$P \cdot A = \frac{F}{A} \cdot A$$
$$PA = F$$

**Resultado:** $F = PA$

**Verificación numérica:** $P = 10$, $A = 5$ → $F = 50$. Original: $\dfrac{50}{5} = 10$ ✓

---

### Ejemplo 2 — Despejar $t$ de $d = vt$

La variable $t$ está multiplicada por $v$. Dividimos ambos lados entre $v$ ($v \neq 0$):

$$\frac{d}{v} = \frac{vt}{v}$$
$$t = \frac{d}{v}$$

**Aplicación cinemática:** un móvil recorre $d = 240$ km a $v = 80$ km/h:

$$t = \frac{240}{80} = 3 \text{ h}$$

---

### Ejemplo 3 — Despejar $r$ de $A = \pi r^2$

| Paso | Operación | Resultado |
|:----:|-----------|-----------|
| 1 | Dividir entre $\pi$ | $\dfrac{A}{\pi} = r^2$ |
| 2 | Raíz cuadrada en ambos lados | $r = \sqrt{\dfrac{A}{\pi}}$ |

```{warning}
Al despejar $r$ de $A = \pi r^2$, la raíz cuadrada tiene **dos** soluciones: $r = \sqrt{A/\pi}$ y $r = -\sqrt{A/\pi}$. En contextos geométricos (radio, distancia), solo se toma el valor **positivo**.
```

**Aplicación:** área $A = 78.5$ cm² → $r = \sqrt{78.5/\pi} = \sqrt{25} = 5$ cm.

---

### Ejemplo 4 — Despejar $T$ de $PV = nRT$

Esta es la **ley de los gases ideales**, fundamental en termodinámica:

| Paso | Operación | Resultado |
|:----:|-----------|-----------|
| 1 | Dividir entre $nR$ | $\dfrac{PV}{nR} = T$ |

**Resultado:** $T = \dfrac{PV}{nR}$

Si $P = 101325$ Pa, $V = 0.0224$ m³, $n = 1$ mol, $R = 8.314$ J/(mol·K):

$$T = \frac{101325 \times 0.0224}{1 \times 8.314} \approx 273 \text{ K}$$

---

### Ejemplo 5 — Despejar $k$ de $F = kx$ (Hooke)

$$F = kx \quad \Rightarrow \quad k = \frac{F}{x}$$

Si $F = 500$ N y $x = 0.02$ m: $k = \dfrac{500}{0.02} = 25000$ N/m.

---

### Ejemplo 6 — Despejar $V$ de $V = IR$ (Ohm)

$$V = IR \quad \Rightarrow \quad I = \frac{V}{R} \quad \text{y} \quad R = \frac{V}{I}$$

Tres despejes de la misma fórmula — el ingeniero elige según qué magnitud necesite calcular.

---

### Tabla de fórmulas de ingeniería

| Fórmula | Despejar | Resultado |
|---------|----------|-----------|
| $P = F/A$ | $F$ | $F = PA$ |
| $P = F/A$ | $A$ | $A = F/P$ |
| $d = vt$ | $t$ | $t = d/v$ |
| $d = vt$ | $v$ | $v = d/t$ |
| $A = \pi r^2$ | $r$ | $r = \sqrt{A/\pi}$ |
| $F = kx$ | $x$ | $x = F/k$ |
| $F = kx$ | $k$ | $k = F/x$ |
| $V = IR$ | $I$ | $I = V/R$ |
| $PV = nRT$ | $T$ | $T = PV/(nR)$ |

:::{admonition} 🔧 Ingeniería — flujo y potencia
:class: ingenieria

La potencia mecánica es $P_m = Fv$ (fuerza por velocidad). Despejar la fuerza:

$$F = \frac{P_m}{v}$$

Si un motor entrega $P_m = 15$ kW a $v = 25$ m/s:

$$F = \frac{15000}{25} = 600 \text{ N}$$

Despejar formulas permite reutilizar una misma relación física en distintos escenarios de diseño.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_ECUACIONES_LITERALES"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Despejar $F$ de $P=F/A$: multiplicar por $A$ en ambos lados
2. Despejar $t$ de $d=vt$: dividir entre $v$
3. Despejar $r$ de $A=\pi r^2$: dividir entre $\pi$, luego raíz cuadrada
4. Despejar $T$ de $PV=nRT$: dividir entre $nR$
5. Mostrar que las otras letras se tratan como constantes durante el despeje
6. Verificación numérica con valores de ingeniería
```

---

## Visualización interactiva

Selecciona una fórmula de ingeniería y observa el despeje paso a paso de la variable indicada.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s11c3-literales" class="jsxgraph-container" style="height:520px"></div>

<script>
(function() {
    var formulas = [
        {
            nombre: 'P = F/A',
            despejar: 'F',
            pasos: [
                'Formula: P = F/A',
                'Multiplicar ambos lados por A',
                'P · A = F',
                'Resultado: F = PA'
            ],
            color: '#1d4ed8'
        },
        {
            nombre: 'd = vt',
            despejar: 't',
            pasos: [
                'Formula: d = vt',
                'Dividir ambos lados entre v',
                'd/v = t',
                'Resultado: t = d/v'
            ],
            color: '#16a34a'
        },
        {
            nombre: 'A = πr²',
            despejar: 'r',
            pasos: [
                'Formula: A = πr²',
                'Dividir ambos lados entre π',
                'A/π = r²',
                'Raiz cuadrada: r = √(A/π)'
            ],
            color: '#7c3aed'
        },
        {
            nombre: 'PV = nRT',
            despejar: 'T',
            pasos: [
                'Formula: PV = nRT',
                'Dividir ambos lados entre nR',
                'PV/(nR) = T',
                'Resultado: T = PV/(nR)'
            ],
            color: '#c2410c'
        },
        {
            nombre: 'F = kx',
            despejar: 'x',
            pasos: [
                'Formula: F = kx (Hooke)',
                'Dividir ambos lados entre k',
                'F/k = x',
                'Resultado: x = F/k'
            ],
            color: '#ca8a04'
        }
    ];

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s11c3-literales', {
            boundingbox: [-1, 14, 14, -1],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var activo = 0, paso = 0;
        var dinamicos = [], btnForm = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var f = formulas[activo];

            btnForm.forEach(function(b, i) {
                b.setAttribute({
                    fillColor: i === activo ? f.color : '#e5e7eb',
                    strokeColor: i === activo ? f.color : '#9ca3af'
                });
            });

            dinamicos.push(board.create('text', [7, 12.5,
                'Despejar ' + f.despejar + ' de ' + f.nombre], {
                fontSize: 15, color: f.color, fontWeight: 'bold', anchorX: 'middle'
            }));

            for (var i = 0; i <= paso && i < f.pasos.length; i++) {
                var esUltimo = i === f.pasos.length - 1;
                dinamicos.push(board.create('text', [1.5, 10.5 - i * 1.4,
                    (i + 1) + '. ' + f.pasos[i]], {
                    fontSize: esUltimo && i === paso ? 14 : 12,
                    color: esUltimo && i === paso ? f.color : '#374151',
                    fontWeight: esUltimo && i === paso ? 'bold' : 'normal'
                }));
            }

            dinamicos.push(board.create('text', [7, 2.5,
                'Paso ' + (paso + 1) + ' de ' + f.pasos.length], {
                fontSize: 11, color: '#6b7280', anchorX: 'middle'
            }));

            if (paso > 0) {
                var bp = board.create('text', [4, 1, '< Anterior'], {
                    fontSize: 12, color: '#374151', fontWeight: 'bold', anchorX: 'middle',
                    cssStyle: 'cursor:pointer; padding:5px 12px; background:#f1f5f9; border-radius:6px;'
                });
                bp.on('down', function() { paso--; dibujar(); });
                dinamicos.push(bp);
            }
            if (paso < f.pasos.length - 1) {
                var bn = board.create('text', [10, 1, 'Siguiente >'], {
                    fontSize: 12, color: f.color, fontWeight: 'bold', anchorX: 'middle',
                    cssStyle: 'cursor:pointer; padding:5px 12px; background:#dbeafe; border-radius:6px;'
                });
                bn.on('down', function() { paso++; dibujar(); });
                dinamicos.push(bn);
            }
        }

        formulas.forEach(function(f, i) {
            var col = i % 3, fila = Math.floor(i / 3);
            var btn = board.create('button', [0.5 + col * 4.3, 13.5 - fila * 0.7,
                f.despejar + ' de ' + f.nombre.split('=')[0].trim()], {
                fixed: true, highlight: false, size: 2,
                fillColor: '#e5e7eb', strokeColor: '#9ca3af'
            });
            (function(idx) {
                btn.on('down', function() { activo = idx; paso = 0; dibujar(); });
            })(i);
            btnForm.push(btn);
        });

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Cinco fórmulas de ingeniería con botones para seleccionar cuál despejar. Los botones Anterior/Siguiente muestran el despeje paso a paso. Refuerza que el procedimiento es el mismo que para ecuaciones numéricas, tratando las demás letras como constantes.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScPuMtMrizUw-jck8eDE3CmIDUcI8__K1K0DVbAIwCYD-LOwA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Ecuaciones con literales
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "Despejar F de P=F/A:" → F = PA
P2 (MC): "Despejar t de d=vt:" → t = d/v
P3 (MC): "Despejar r de A=πr²:" → r = √(A/π)
P4 (MC): "Despejar T de PV=nRT:" → T = PV/(nR)
P5 (Fill): "Despejar x de F=kx → x = ___" → F/k
P6 (Fill): "Despejar v de d=vt → v = ___" → d/t
P7 (MC ingeniería): "Para calcular F con P y A conocidos, despejas:" → F = PA
P8 (T/F): "Al despejar, las otras letras se tratan como constantes." → Verdadero
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Descripción
* - Ecuación con literales
  - Fórmula con varias letras; despejar = aislar una variable
* - Estrategia
  - Mismas propiedades de igualdad; otras letras = constantes
* - Multiplicar / dividir
  - Elimina denominadores o coeficientes de la variable
* - Raíz cuadrada
  - Necesaria al despejar de ecuaciones cuadráticas ($r$ de $A=\pi r^2$)
* - Fórmulas clave
  - $F=PA$, $t=d/v$, $r=\sqrt{A/\pi}$, $T=PV/(nR)$, $x=F/k$
* - Verificación
  - Sustituir valores numéricos en la fórmula original
```

:::{admonition} Siguiente clase
:class: tip
Ya despejas variables de fórmulas de ingeniería. En la siguiente clase resolverás **ecuaciones con fracciones**, eliminando denominadores con el mínimo común múltiplo.

➡️ [Ir a S11·C4 Ecuaciones con fracciones](s11_c4_ecuaciones_con_fracciones.md)
:::
