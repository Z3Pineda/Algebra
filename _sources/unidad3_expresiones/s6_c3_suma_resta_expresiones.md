---
title: "S6·C3 Suma y resta de expresiones algebraicas"
---

# S6·C3 Suma y resta de expresiones algebraicas

:::{admonition} 🔧 Presupuesto de materiales para dos proyectos
:class: ingenieria

Un departamento de ingeniería tiene dos proyectos activos. El presupuesto de materiales de cada uno se expresó en función de la cantidad de piezas $p$ y horas de maquinado $h$:

- **Proyecto A:** $C_A = 5p + 3h + 200$
- **Proyecto B:** $C_B = 2p + 7h + 350$

El director necesita:
1. El costo total de ambos proyectos → **suma** de expresiones
2. La diferencia de costos (cuánto más cuesta el proyecto que es más caro) → **resta** de expresiones

$$C_A + C_B = 7p + 10h + 550$$
$$C_A - C_B = 3p - 4h - 150$$
:::

---

## Teoría

### Suma de polinomios

Para sumar dos polinomios:
1. Elimina los paréntesis (la suma no cambia signos)
2. Identifica y combina los términos semejantes

**Método horizontal:**

$$(3x^2 + 5x - 2) + (x^2 - 3x + 7)$$
$$= 3x^2 + 5x - 2 + x^2 - 3x + 7$$
$$= (3x^2 + x^2) + (5x - 3x) + (-2 + 7)$$
$$= 4x^2 + 2x + 5$$

**Método vertical (alinear por grado):**

$$\begin{array}{r} 3x^2 + 5x - 2 \\ +\quad x^2 - 3x + 7 \\ \hline 4x^2 + 2x + 5 \end{array}$$

---

### Resta de polinomios

Para restar dos polinomios:
1. Distribuye el signo **negativo** — cambia el signo de **todos** los términos del segundo polinomio
2. Combina los términos semejantes

$$(3x^2 + 5x - 2) - (x^2 - 3x + 7)$$
$$= 3x^2 + 5x - 2 \mathbf{- x^2 + 3x - 7}$$
$$= (3x^2 - x^2) + (5x + 3x) + (-2 - 7)$$
$$= 2x^2 + 8x - 9$$

```{warning}
El error más común en la resta: olvidar cambiar el signo al segundo o tercer término.

$$-(x^2 - 3x + 7) = -x^2 \mathbf{+} 3x \mathbf{-} 7$$

El signo menos afecta a **todos** los términos dentro del paréntesis.
```

:::{admonition} 🔧 Verificación rápida
:class: ingenieria
Para verificar una resta $(A) - (B)$, puedes sustituir un valor específico.

Con $x = 1$:
- $A = 3(1)^2 + 5(1) - 2 = 6$
- $B = 1 - 3 + 7 = 5$
- $A - B = 6 - 5 = 1$

Verifica en el resultado: $2(1)^2 + 8(1) - 9 = 2 + 8 - 9 = 1$ ✅
:::

---

### Suma y resta con más de dos polinomios

$$[(2x^2 - 3x + 1) + (x^2 + 4x)] - (3x^2 - x - 5)$$

**Paso 1:** Resolver el corchete interno

$$= [3x^2 + x + 1] - (3x^2 - x - 5)$$

**Paso 2:** Distribuir el signo negativo del paréntesis externo

$$= 3x^2 + x + 1 - 3x^2 + x + 5$$

**Paso 3:** Combinar semejantes

$$= (3x^2 - 3x^2) + (x + x) + (1 + 5) = 2x + 6$$

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_SUMA_RESTA_EXPR"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Mostrar el problema de costos de los dos proyectos
2. Animar la suma: los paréntesis desaparecen, los términos semejantes se agrupan por color
3. Animar la resta: el signo negativo "entra" al paréntesis y cambia todos los signos — animación clave
4. Contraejemplo del error: -(x²-3x+7) ≠ -x²-3x+7 (error común)
5. Cierre: método de verificación sustituyendo x=1
```

---

## Visualización interactiva

Suma o resta dos polinomios usando los deslizadores para ajustar los coeficientes. Observa cómo cambia el resultado.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s6c3-sumaresta" class="jsxgraph-container" style="height:480px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s6c3-sumaresta', {
            boundingbox: [-1, 12, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        // Coeficientes de A = ax² + bx + c
        var slA2 = board.create('slider', [[1, 11],[4, 11],[-5, 3, 5]], {
            name: 'a', snapWidth: 1, fillColor: '#3b82f6' });
        var slA1 = board.create('slider', [[1, 9.5],[4, 9.5],[-5, 5, 5]], {
            name: 'b', snapWidth: 1, fillColor: '#3b82f6' });
        var slA0 = board.create('slider', [[1, 8],[4, 8],[-10, -2, 10]], {
            name: 'c', snapWidth: 1, fillColor: '#3b82f6' });

        // Coeficientes de B = dx² + ex + f
        var slB2 = board.create('slider', [[7, 11],[10, 11],[-5, 1, 5]], {
            name: 'd', snapWidth: 1, fillColor: '#f97316' });
        var slB1 = board.create('slider', [[7, 9.5],[10, 9.5],[-5, -3, 5]], {
            name: 'e', snapWidth: 1, fillColor: '#f97316' });
        var slB0 = board.create('slider', [[7, 8],[10, 8],[-10, 7, 10]], {
            name: 'f', snapWidth: 1, fillColor: '#f97316' });

        function r(s) { return Math.round(s.Value()); }
        function signo(n, primero) {
            if (primero) return String(n);
            return n >= 0 ? ' + ' + n : ' - ' + Math.abs(n);
        }
        function termino(coef, var_, primero) {
            if (coef === 0) return '';
            var c = primero ? String(coef) : (coef > 0 ? ' + '+coef : ' - '+Math.abs(coef));
            return c + var_;
        }

        function polyStr(a, b, c) {
            var s = '';
            var first = true;
            if (a !== 0) { s += (first?'':' ')+(first?a:(a>0?'+ '+a:'- '+Math.abs(a)))+'x²'; first=false; }
            if (b !== 0) { s += ' '+(b>0?(first?b:'+ '+b):'- '+Math.abs(b))+'x'; first=false; }
            if (c !== 0) { s += ' '+(c>0?(first?c:'+ '+c):'- '+Math.abs(c)); }
            if (s === '') s = '0';
            return s.trim();
        }

        var btnSuma = true;
        var dinamicos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e){} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var a=r(slA2), b=r(slA1), c=r(slA0);
            var d=r(slB2), e=r(slB1), f=r(slB0);

            var strA = polyStr(a,b,c);
            var strB = polyStr(d,e,f);

            var r2, r1, r0;
            if (btnSuma) {
                r2=a+d; r1=b+e; r0=c+f;
            } else {
                r2=a-d; r1=b-e; r0=c-f;
            }
            var strR = polyStr(r2,r1,r0);
            var op = btnSuma ? ' + ' : ' - ';

            // Mostrar
            dinamicos.push(board.create('text', [6, 7, '(' + strA + ')' + op + '(' + strB + ')'], {
                fontSize: 13, color: '#374151', anchorX: 'middle' }));
            dinamicos.push(board.create('text', [6, 5.8, '= ' + strR], {
                fontSize: 15, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' }));

            if (!btnSuma) {
                var strBneg = polyStr(-d,-e,-f);
                dinamicos.push(board.create('text', [6, 4.6,
                    'Distribuye el -: (' + strA + ') + (' + strBneg + ')'], {
                    fontSize: 11, color: '#dc2626', anchorX: 'middle', fontStyle: 'italic' }));
            }

            // Etiquetas A y B
            dinamicos.push(board.create('text', [2.5, 11.8, 'A = ' + strA], {
                fontSize: 12, color: '#3b82f6', fontWeight: 'bold', anchorX: 'middle' }));
            dinamicos.push(board.create('text', [8.5, 11.8, 'B = ' + strB], {
                fontSize: 12, color: '#f97316', fontWeight: 'bold', anchorX: 'middle' }));
        }

        var btnS = board.create('text', [3.5, 3, 'A + B'], {
            fontSize: 13, color: '#16a34a', fontWeight: 'bold', anchorX: 'middle',
            cssStyle: 'cursor:pointer; padding:5px 14px; background:#dcfce7; border-radius:8px;'
        });
        var btnR = board.create('text', [8.5, 3, 'A - B'], {
            fontSize: 13, color: '#dc2626', fontWeight: 'bold', anchorX: 'middle',
            cssStyle: 'cursor:pointer; padding:5px 14px; background:#fee2e2; border-radius:8px;'
        });
        btnS.on('down', function() { btnSuma=true; dibujar(); });
        btnR.on('down', function() { btnSuma=false; dibujar(); });

        board.create('text', [6, 1.5,
            'Ajusta los coeficientes con los deslizadores'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle'
        });

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
6 deslizadores para los coeficientes de dos polinomios cuadráticos A y B. Botones A+B y A-B calculan el resultado. Para la resta, muestra además la distribución del signo negativo — el paso donde más errores ocurren.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSd3uElGMvEAaqgtS8qZks9QgK6B55y0kNnfSr1BwExPkWPSUw/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Suma y resta de expresiones
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (Fill): "(3x²+5x-2)+(x²-3x+7) = ___x²+___x+___" → 4, 2, 5
P2 (Fill): "(3x²+5x-2)-(x²-3x+7) = ___x²+___x+___" → 2, 8, -9
P3 (MC): "Al restar -(2x-5), el resultado es:" → -2x+5
P4 (T/F): "-(3x²-x+4) = -3x²-x+4" → Falso (debe ser -3x²+x-4)
P5 (Fill): "(5a+3b)+(2a-7b) = ___a+___b" → 7, -4
P6 (Fill): "(5a+3b)-(2a-7b) = ___a+___b" → 3, 10
P7 (MC ingeniería): "CA=5p+3h+200, CB=2p+7h+350. CA+CB = ___" → 7p+10h+550
P8 (Fill ingeniería): "CA-CB = ___p+___h+___" → 3, -4, -150
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Operación
  - Procedimiento
* - Suma $(A)+(B)$
  - Eliminar paréntesis → combinar semejantes
* - Resta $(A)-(B)$
  - Cambiar signo de **todos** los términos de $B$ → combinar semejantes
* - Error común
  - $-(ax^2-bx+c) \neq -ax^2-bx+c$ ← incorrecto
* - Correcto
  - $-(ax^2-bx+c) = -ax^2+bx-c$ ← el signo afecta a todos
* - Verificación
  - Sustituir $x=1$ en ambos lados y comparar
```

:::{admonition} Siguiente clase
:class: tip
Ya dominas la suma y resta. En la siguiente clase aprenderás a **multiplicar** expresiones algebraicas — la operación más usada en el álgebra de ingeniería.

➡️ [Ir a S6·C4 Multiplicación de expresiones algebraicas](s6_c4_multiplicacion_expresiones.md)
:::
