---
title: "S1·C1 Presentación del curso y diagnóstico de aritmética"
---

# S1·C1 Presentación del curso y diagnóstico de aritmética

:::{admonition} 🔧 ¿Para qué sirve el álgebra en ingeniería mecánica?
:class: ingenieria

Imagina que eres técnico en una planta automotriz y necesitas calcular cuántas piezas caben en un contenedor, cuánto material se desperdicia al cortar una barra de acero, o cuál es la velocidad exacta de un engranaje.

Todas esas preguntas tienen algo en común: no se pueden responder con un número fijo. Cambian según las condiciones. El álgebra es el lenguaje que te permite resolver problemas **en general**, no solo caso por caso.

En este curso aprenderás ese lenguaje desde cero — conectando cada concepto con situaciones reales de tu carrera.
:::

**Pregunta detonadora**

> Si una barra de acero mide $L$ metros y de ella se cortan 3 piezas iguales de $x$ metros cada una, ¿cuánto material sobra?  
> ¿Puedes escribir eso sin saber cuánto mide la barra?

---

## El curso de un vistazo

El curso tiene **5 unidades** y **80 clases** distribuidas en 17 semanas:

| Unidad | Tema | Semanas |
|--------|------|:-------:|
| 1 | Conjuntos y Lógica | 1–3 |
| 2 | Números Reales y Funciones | 4–5 |
| 3 | Expresiones Algebraicas | 6–10 |
| 4 | Ecuaciones | 11–15 |
| 5 | Valor Absoluto y Cierre | 16–17 |

Cada semana tiene **4 clases contigo** y **1 clase de autogestión** — actividades que haces por tu cuenta para reforzar lo aprendido.

---

## Diagnóstico de aritmética

Antes de arrancar con álgebra, necesitamos saber con qué herramientas cuentas. Los siguientes temas son la base que usaremos todo el semestre.

### Operaciones con números enteros

**Suma y resta:**

$$5 + (-3) = 2 \qquad -7 + 4 = -3 \qquad -2 - (-5) = 3$$

**Regla de los signos en multiplicación y división:**

| Operación | Resultado |
|-----------|:---------:|
| $(+) \times (+)$ | $+$ |
| $(-) \times (-)$ | $+$ |
| $(+) \times (-)$ | $-$ |
| $(-) \times (+)$ | $-$ |

**Ejemplos:**
$$(-3) \times (-4) = 12 \qquad (-6) \times 2 = -12 \qquad \frac{-15}{-3} = 5$$

---

### Fracciones

**Suma de fracciones** — se necesita denominador común:

$$\frac{1}{4} + \frac{2}{3} = \frac{3}{12} + \frac{8}{12} = \frac{11}{12}$$

**Multiplicación** — numerador por numerador, denominador por denominador:

$$\frac{2}{5} \times \frac{3}{4} = \frac{6}{20} = \frac{3}{10}$$

**División** — se multiplica por el recíproco:

$$\frac{2}{3} \div \frac{4}{5} = \frac{2}{3} \times \frac{5}{4} = \frac{10}{12} = \frac{5}{6}$$

:::{admonition} 🔧 Fracciones en ingeniería
:class: ingenieria
Las fracciones aparecen constantemente en ingeniería: relaciones de transmisión de engranajes ($3/2$), tolerancias dimensionales ($\pm 0.5$ mm), eficiencia de motores ($\eta = 0.85$). Dominar fracciones es dominar el lenguaje de las especificaciones técnicas.
:::

---

### Potencias y raíces

**Potencias:**

$$2^3 = 8 \qquad 3^2 = 9 \qquad (-2)^4 = 16 \qquad (-2)^3 = -8$$

```{warning}
$(-2)^2 = 4$ porque el exponente es **par** → resultado positivo.  
$(-2)^3 = -8$ porque el exponente es **impar** → resultado negativo.
```

**Raíces cuadradas:**

$$\sqrt{25} = 5 \qquad \sqrt{144} = 12 \qquad \sqrt{2} \approx 1.414$$

**Orden de operaciones (PEMDAS):**

$$2 + 3 \times 4^2 = 2 + 3 \times 16 = 2 + 48 = 50$$

El orden es: **P**aréntesis → **E**xponentes → **M**ultiplicación/**D**ivisión → **A**dición/**S**ustracción.

---

### Porcentajes y proporciones

$$\text{20\% de 150} = \frac{20}{100} \times 150 = 30$$

**Regla de tres directa:**

> Si 5 kg de acero cuestan \$200, ¿cuánto cuestan 8 kg?

$$\frac{5}{200} = \frac{8}{x} \implies x = \frac{8 \times 200}{5} = 320$$

---

## Video de introducción al curso

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_INTRO_CURSO"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — guion Manim (~3 min)**

Script listo: `manim/algebra_curso_trailer.py` → escena `AlgebraCursoTrailer`

Renderizar: `manim -pql algebra_curso_trailer.py AlgebraCursoTrailer` (480p) o `-pqh` (1080p).

**Paleta:** azul `#1d4ed8`, naranja `#f97316`, fondo `#0f172a`. Sin imágenes externas — solo formas Manim.

| Sección | ~s | Contenido |
|---------|:--:|-----------|
| 1 | 40 | Título del curso. Engranaje naranja girando + contenedor azul. Texto: *«¿Cuántas piezas caben en el contenedor?»*. Seis piezas entran en rejilla. |
| 2 | 45 | Subtítulo: *«Al cambiar los datos, cambia la respuesta»*. Panel con Largo / Ancho / Pieza Ø (`DecimalNumber`) y respuesta (`Integer`). Cinco escenarios animados; contenedor y piezas se transforman. |
| 3 | 75 | Puente: *«Para resolverlo necesitas herramientas de todo el curso…»*. Cinco tarjetas (ícono geométrico + subtítulo ingeniería): **Conjuntos** (Venn), **Números Reales** (recta), **Expresiones** ($x^2+3x$), **Ecuaciones** (balanza $2x=10$), **Valor Absoluto** (gráfica V). |
| 4 | 25 | Cierre: *«Esto es lo que podrás hacer al final del semestre»* + *Modelar · calcular · verificar · decidir* + fila de mini-íconos. |

Sube el MP4 a YouTube y reemplaza `REEMPLAZA_ID_YOUTUBE_INTRO_CURSO` arriba.
```

---

## Visualización interactiva — La recta numérica

Mueve el punto sobre la recta y observa cómo los números enteros, negativos y fracciones tienen una posición exacta. Esto es la base para todo lo que viene.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s1c1-recta" class="jsxgraph-container"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') {
            setTimeout(init, 200);
            return;
        }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s1c1-recta', {
            boundingbox: [-6, 2, 6, -2],
            axis: false,
            showCopyright: false,
            showNavigation: false,
            pan: { enabled: false },
            zoom: { enabled: false }
        });
        var recta = board.create('line', [[-6,0],[6,0]], {
            strokeColor: '#374151', strokeWidth: 2,
            straightFirst: false, straightLast: false
        });
        for (var i = -5; i <= 5; i++) {
            board.create('point', [i, 0], {
                size: 3, fixed: true, color: '#374151',
                name: String(i),
                label: { offset: [0, -20], fontSize: 13, color: '#374151' }
            });
        }
        var p = board.create('glider', [0, 0, recta], {
            size: 7, color: '#3b82f6', name: '', label: { fontSize: 0 }
        });
        board.create('text', [-0.3, 0.8, function() {
            return 'x = ' + p.X().toFixed(2);
        }], {
            fontSize: 14, color: '#1d4ed8', fontWeight: 'bold'
        });
        board.create('segment', [
            function() { return [p.X(), 0]; },
            function() { return [p.X(), 0.5]; }
        ], { strokeColor: '#3b82f6', strokeWidth: 1.5, dash: 2 });
        board.create('text', [-5.5, 1.4, function() {
            var x = p.X();
            if (Math.abs(x) < 0.05) return 'El numero es cero';
            if (x > 0) return 'Numero positivo';
            return 'Numero negativo';
        }], { fontSize: 13, color: '#374151' });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
El punto azul se puede arrastrar a lo largo de la recta numérica. La etiqueta muestra el valor exacto con dos decimales. El texto inferior indica si el número es positivo, negativo o cero.
```

---

## Actividad — Diagnóstico de aritmética

Responde el diagnóstico de aritmética. No afecta tu calificación — es solo para que tú y el docente sepan en qué punto arrancas.

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLScD6JJIJCxNbo-lGINYK64AZ9ym8AT8S3KE2Kcy_EVMDyUj9g/viewform" target="_blank" class="quizizz-btn">
    📝 Abrir diagnóstico de aritmética
  </a>
</div>
```

```{note}
**Para el docente — Google Forms (15 preguntas, ~15 min):**
Enlace: https://docs.google.com/forms/d/e/1FAIpQLScD6JJIJCxNbo-lGINYK64AZ9ym8AT8S3KE2Kcy_EVMDyUj9g/viewform

Operaciones con enteros (3): $(-4)\times(-3)=12$, $-8+15=7$, $\frac{-24}{6}=-4$

Fracciones (3): $\frac{3}{4}+\frac{1}{3}=\frac{13}{12}$, $\frac{2}{5}\times\frac{5}{6}=\frac{1}{3}$, $\frac{3}{4}\div\frac{9}{8}=\frac{2}{3}$

Potencias y raíces (3): $2^4=16$, $(-3)^3=-27$, $\sqrt{81}=9$

Orden de operaciones (3): $3+2\times4=11$, $(3+2)\times4=20$, $2^3+4\div2=10$

Proporciones (3): 15% de 80=12, 4 piezas \$60 → 10 piezas=\$150, barra 3m en 4 partes=0.75m
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 40 60

* - Tema
  - Puntos clave
* - Regla de los signos
  - Igual × igual = positivo. Diferente × diferente = negativo.
* - Fracciones
  - Suma: denominador común. Multiplicación: directo. División: por el recíproco.
* - Potencias
  - Exponente par con base negativa → positivo. Exponente impar → negativo.
* - Orden de operaciones
  - Paréntesis → Exponentes → × ÷ → + −
* - Proporciones
  - Regla de tres: producto cruzado.
```

:::{admonition} Siguiente clase
:class: tip
En la próxima clase entraremos de lleno al primer tema del curso: qué es un conjunto y cómo se usa para organizar información en ingeniería.

➡️ [Ir a S1·C2 Concepto de conjunto](s1_c2_concepto_conjunto.md)
:::