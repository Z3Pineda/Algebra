---
title: "S12·C1 Modelación de situaciones con ecuaciones lineales"
---

# S12·C1 Modelación de situaciones con ecuaciones lineales

:::{admonition} 🔧 Mezcla de aleaciones en una fundición
:class: ingenieria

Una planta de fundición debe obtener 800 kg de una aleación al 35% de cobre. Disponen de un lingote al 20% y otro al 50%. El supervisor pregunta: ¿cuántos kilogramos de cada lingote se deben fundir?

Si $x$ representa los kg del lingote al 20%, la ecuación de balance de cobre es:

$$0.20x + 0.50(800 - x) = 0.35 \cdot 800$$

Modelar un problema de ingeniería significa **traducir el lenguaje cotidiano a una ecuación lineal**, resolverla y **verificar que la respuesta tenga sentido** en el contexto físico o económico.
:::

**Pregunta detonadora**

> Una viga soporta 500 N en total: una carga fija de 200 N y una carga desconocida $F$. ¿Cómo escribirías la ecuación? ¿Qué representa la solución?

---

## Teoría

### ¿Qué es modelar con ecuaciones?

**Modelar** es representar una situación real mediante una ecuación matemática. El objetivo no es solo despejar $x$, sino **interpretar** qué significa la solución en el problema original.

**Los cuatro pasos:**

| Paso | Acción | Pregunta guía |
|:----:|--------|---------------|
| 1 | **Identificar** la incógnita | ¿Qué cantidad desconozco? ¿Con qué letra la represento? |
| 2 | **Plantear** la ecuación | ¿Qué relación matemática conecta los datos? |
| 3 | **Resolver** la ecuación | Aplicar propiedades de la igualdad (S11·C2) |
| 4 | **Verificar** en el contexto | ¿La respuesta es positiva? ¿Tiene unidades coherentes? ¿Responde la pregunta? |

---

### Paso 1 — Identificar la incógnita

Asigna una letra a la magnitud que buscas y **define sus unidades**:

- $x$ = kilogramos de aleación al 20%
- $t$ = horas de operación de la máquina
- $F$ = fuerza desconocida en newtons
- $v$ = velocidad del transportador en m/s

```{warning}
Errores frecuentes al definir la incógnita:

- No indicar unidades → la respuesta pierde sentido físico
- Definir $x$ como "la cantidad de cobre" cuando en realidad es "kg de lingote al 20%"
- Usar la misma letra para dos magnitudes distintas
```

---

### Paso 2 — Escribir la ecuación

**Palabras clave que indican operaciones:**

| Enunciado | Operación | Ejemplo |
|-----------|-----------|---------|
| "total", "suma", "juntos" | $+$ | $x + (800 - x) = 800$ |
| "diferencia", "sobra", "restante" | $-$ | $500 - x$ |
| "el doble de", "por cada" | $\times$ | $2x$, $45n$ |
| "porcentaje de", "concentración" | $\times$ decimal | $0.35 \cdot 800$ |
| "es igual a", "equilibra", "alcanza" | $=$ | balance, punto de equilibrio |

---

### Ejemplo 1 — Balance de fuerzas en una viga

Una viga horizontal soporta dos cargas verticales: $F_1 = 350$ N a la izquierda y $F_2$ desconocida a la derecha. El apoyo central debe equilibrar la suma:

$$F_1 + F_2 = 800 \text{ N}$$

$$350 + F_2 = 800 \quad \Rightarrow \quad F_2 = 450 \text{ N}$$

**Verificación:** $350 + 450 = 800$ N ✓. La fuerza es positiva y razonable.

---

### Ejemplo 2 — Mezcla de aleaciones

800 kg al 35% de cobre usando lingotes al 20% ($x$ kg) y al 50% ($(800-x)$ kg):

$$0.20x + 0.50(800 - x) = 0.35 \cdot 800$$

$$0.20x + 400 - 0.50x = 280$$
$$-0.30x = -120$$
$$x = 400 \text{ kg}$$

Se usan **400 kg al 20%** y **400 kg al 50%**.

**Verificación:** $0.20(400) + 0.50(400) = 80 + 200 = 280 = 0.35(800)$ ✓

---

### Ejemplo 3 — Costos de producción por lote

El costo de un lote de $n$ piezas es $C = 1200 + 38n$ pesos. El ingreso es $I = 95n$ pesos. ¿Cuántas piezas para el punto de equilibrio?

$$95n = 1200 + 38n$$
$$57n = 1200 \quad \Rightarrow \quad n = 21.05$$

Se necesitan **22 piezas** (la 22.ª es la primera donde el ingreso supera el costo fijo).

---

### Ejemplo 4 — Velocidades en bandas transportadoras

La banda A avanza a $v_A = 0.8$ m/s. La banda B (misma dirección) avanza a $v_B$ m/s. Un paquete en A tarda 30 s en recorrer 24 m. Un paquete en B recorre la misma distancia en 20 s:

$$24 = 0.8 \cdot 30 \quad \checkmark \qquad 24 = v_B \cdot 20 \quad \Rightarrow \quad v_B = 1.2 \text{ m/s}$$

Si ambas bandas mueven el mismo paquete en serie, el tiempo total es:

$$t_{total} = \frac{24}{0.8} + \frac{24}{1.2} = 30 + 20 = 50 \text{ s}$$

---

### Verificación en el contexto

Después de resolver, responde:

1. ¿La incógnita tiene **valor positivo** (si representa masa, tiempo, fuerza)?
2. ¿Las **unidades** son correctas?
3. ¿La respuesta responde **exactamente** lo que preguntó el enunciado?
4. ¿Tiene **sentido práctico**? (¿5000 kg de un lingote cuando solo hay 800 kg disponibles?)

:::{admonition} 🔧 Ingeniería — bandas transportadoras en línea de ensamble
:class: ingenieria

Dos bandas conectadas transportan piezas. La banda 1 (lenta) opera a $v_1 = 0.5$ m/s durante $t_1$ segundos; la banda 2 (rápida) opera a $v_2 = 1.2$ m/s durante $t_2$ segundos. Ambas recorren la misma distancia $d = 6$ m:

$$0.5 \cdot t_1 = 6 \quad \Rightarrow \quad t_1 = 12 \text{ s}$$
$$1.2 \cdot t_2 = 6 \quad \Rightarrow \quad t_2 = 5 \text{ s}$$

El tiempo total de traslado es $12 + 5 = 17$ s. Modelar permite optimizar la secuencia de la línea de producción.
:::

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_MODELACION_LINEALES"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Mostrar los 4 pasos: identificar → plantear → resolver → verificar
2. Problema de mezcla: 800 kg al 35% con lingotes al 20% y 50%
3. Balance de fuerzas en viga: F1 + F2 = 800 N
4. Punto de equilibrio de costos: 95n = 1200 + 38n
5. Bandas transportadoras: d = vt en cada tramo
6. Cierre: verificar que la respuesta tenga sentido en contexto
```

---

## Visualización interactiva

Selecciona un tipo de problema, define la incógnita y observa cómo se construye la ecuación paso a paso.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s12c1-modelacion" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    var casos = [
        {
            nombre: 'Mezcla',
            color: '#1d4ed8',
            incognita: 'x = kg aleacion al 20%',
            ecuacion: '0.20x + 0.50(800-x) = 280',
            pasos: ['Balance de cobre', '0.20x + 400 - 0.50x = 280', '-0.30x = -120', 'x = 400 kg'],
            verif: '400 kg al 20% + 400 kg al 50% = 800 kg al 35%'
        },
        {
            nombre: 'Fuerzas',
            color: '#16a34a',
            incognita: 'F2 = fuerza desconocida (N)',
            ecuacion: '350 + F2 = 800',
            pasos: ['Equilibrio vertical', 'F1 + F2 = reaccion total', '350 + F2 = 800', 'F2 = 450 N'],
            verif: '350 + 450 = 800 N ✓'
        },
        {
            nombre: 'Costos',
            color: '#7c3aed',
            incognita: 'n = numero de piezas',
            ecuacion: '95n = 1200 + 38n',
            pasos: ['Ingreso = Costo', '95n = 1200 + 38n', '57n = 1200', 'n = 21.05 → 22 piezas'],
            verif: 'En n=22: I=2090, C=2036 → primera ganancia'
        },
        {
            nombre: 'Bandas',
            color: '#c2410c',
            incognita: 'vB = velocidad banda B (m/s)',
            ecuacion: '24 = vB · 20',
            pasos: ['d = vt', 'Distancia igual en ambas bandas', '24 = vB · 20', 'vB = 1.2 m/s'],
            verif: '24/1.2 = 20 s ✓ (misma distancia, menor tiempo)'
        }
    ];

    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s12c1-modelacion', {
            boundingbox: [-1, 13, 14, -1],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var activo = 0, paso = 0;
        var dinamicos = [], btnCasos = [];

        function limpiar() {
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e) {} });
            dinamicos = [];
        }

        function dibujar() {
            limpiar();
            var c = casos[activo];

            btnCasos.forEach(function(b, i) {
                b.setAttribute({
                    fillColor: i === activo ? c.color : '#e5e7eb',
                    strokeColor: i === activo ? c.color : '#9ca3af'
                });
            });

            dinamicos.push(board.create('text', [7, 12, c.nombre + ': Modelacion'], {
                fontSize: 15, color: c.color, fontWeight: 'bold', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 10.8, '1. Incognita: ' + c.incognita], {
                fontSize: 11, color: '#374151', anchorX: 'middle'
            }));
            dinamicos.push(board.create('text', [7, 9.8, '2. Ecuacion: ' + c.ecuacion], {
                fontSize: 12, color: c.color, fontWeight: 'bold', anchorX: 'middle'
            }));

            for (var i = 0; i <= paso && i < c.pasos.length; i++) {
                dinamicos.push(board.create('text', [1.5, 8.5 - i * 1.2,
                    (i + 1) + '. ' + c.pasos[i]], {
                    fontSize: 12, color: i === paso ? c.color : '#4b5563',
                    fontWeight: i === paso ? 'bold' : 'normal'
                }));
            }

            if (paso >= c.pasos.length - 1) {
                dinamicos.push(board.create('text', [7, 2.8, '4. Verificacion: ' + c.verif], {
                    fontSize: 11, color: '#16a34a', anchorX: 'middle', fontStyle: 'italic'
                }));
            }

            if (paso > 0) {
                var bp = board.create('text', [4, 1, '< Anterior'], {
                    fontSize: 12, color: '#374151', fontWeight: 'bold', anchorX: 'middle',
                    cssStyle: 'cursor:pointer; padding:5px 12px; background:#f1f5f9; border-radius:6px;'
                });
                bp.on('down', function() { paso--; dibujar(); });
                dinamicos.push(bp);
            }
            if (paso < c.pasos.length - 1) {
                var bn = board.create('text', [10, 1, 'Siguiente >'], {
                    fontSize: 12, color: c.color, fontWeight: 'bold', anchorX: 'middle',
                    cssStyle: 'cursor:pointer; padding:5px 12px; background:#dbeafe; border-radius:6px;'
                });
                bn.on('down', function() { paso++; dibujar(); });
                dinamicos.push(bn);
            }
        }

        casos.forEach(function(c, i) {
            var btn = board.create('button', [0.5 + i * 3.2, 12.8, c.nombre], {
                fixed: true, highlight: false, size: 2,
                fillColor: '#e5e7eb', strokeColor: '#9ca3af'
            });
            (function(idx) {
                btn.on('down', function() { activo = idx; paso = 0; dibujar(); });
            })(i);
            btnCasos.push(btn);
        });

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Cuatro tipos de modelación (mezcla, fuerzas, costos, bandas). Botones cambian el caso; Anterior/Siguiente recorre los pasos identificar → plantear → resolver → verificar. Refuerza que modelar es un proceso estructurado, no solo despejar.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSee92-s_Qh_qXuLOTpZwD8pT1XrtIj7MG9ylZMRoLgqh_XtyA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Modelación con ecuaciones lineales
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "Primer paso al modelar:" → Identificar la incognita
P2 (Fill): "800 kg al 35%: 0.20x + 0.50(800-x) = ___" → 280
P3 (Fill): "350 + F2 = 800 → F2 = ___ N" → 450
P4 (MC): "95n = 1200 + 38n → n = ___" → 21.05
P5 (T/F): "Verificar incluye comprobar unidades y sentido practico." → Verdadero
P6 (MC ingeniería): "Balance de cobre en mezcla se traduce a:" → Ecuacion lineal
P7 (Fill): "24 = v·20 → v = ___ m/s" → 1.2
P8 (MC): "Palabra 'total' sugiere operacion:" → Suma
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 25 75

* - Paso
  - Descripción
* - 1. Identificar
  - Definir incógnita con letra y unidades
* - 2. Plantear
  - Traducir enunciado a ecuación lineal ($+$, $-$, $=$, porcentajes)
* - 3. Resolver
  - Aplicar propiedades de la igualdad (S11·C2)
* - 4. Verificar
  - Sustituir, comprobar unidades, sentido práctico
* - Contextos
  - Mezclas, fuerzas, costos, bandas transportadoras
* - Error común
  - Resolver sin definir bien qué representa $x$
```

:::{admonition} Siguiente clase
:class: tip
Ya modelas problemas con una incógnita. En la siguiente clase verás qué ocurre cuando hay **dos incógnitas** y necesitas **dos ecuaciones** — los sistemas $2 \times 2$.

➡️ [Ir a S12·C2 Sistemas de dos ecuaciones con dos incógnitas](s12_c2_sistemas_dos_ecuaciones.md)
:::
