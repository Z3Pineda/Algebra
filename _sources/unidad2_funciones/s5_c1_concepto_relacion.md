---
title: "S5·C1 Concepto de relación"
---

# S5·C1 Concepto de relación

:::{admonition} 🔧 La tabla de especificaciones de una planta
:class: ingenieria

En una planta de manufactura existe una tabla que vincula cada máquina con el operador asignado:

| Máquina | Operador |
|---------|----------|
| Torno CNC 01 | García |
| Torno CNC 01 | Martínez |
| Fresadora 02 | López |
| Prensa 03 | García |
| Prensa 03 | Rodríguez |

Observa que:
- Un operador puede estar asignado a **más de una** máquina (García → Torno y Prensa)
- Una máquina puede tener **más de un** operador (Torno → García y Martínez)

Esta correspondencia entre dos conjuntos, sin ninguna restricción, es lo que en matemáticas llamamos una **relación**.
:::

**Pregunta detonadora**

> Si tienes el conjunto de temperaturas medidas en una semana y el conjunto de consumos de energía correspondientes, ¿qué tipo de correspondencia existe entre ellos? ¿Puede haber dos consumos distintos para la misma temperatura?

---

## Teoría

### ¿Qué es una relación?

**Definición simple:**
Una relación es cualquier **correspondencia** entre elementos de dos conjuntos. No importa si un elemento se relaciona con uno, varios o ningún elemento del otro conjunto.

**Definición formal:**
Dados dos conjuntos $A$ y $B$, una relación $R$ de $A$ en $B$ es un **subconjunto** del producto cartesiano $A \times B$:

$$R \subseteq A \times B$$

Si $(a, b) \in R$, se dice que *"$a$ está relacionado con $b$"* y se escribe $a\ R\ b$.

---

### Representaciones de una relación

#### 1. Por extensión (lista de pares)

$$R = \{(1, a),\ (1, b),\ (2, b),\ (3, c)\}$$

#### 2. Por diagrama de flechas (diagrama sagital)

Se dibujan dos óvalos (uno para $A$, otro para $B$) y flechas que van de cada $a$ a su(s) correspondiente(s) $b$.

#### 3. Por tabla

| $A \backslash B$ | $a$ | $b$ | $c$ |
|:---:|:---:|:---:|:---:|
| $1$ | ✅ | ✅ | |
| $2$ | | ✅ | |
| $3$ | | | ✅ |

#### 4. Por gráfica en el plano

Cuando $A \subseteq \mathbb{R}$ y $B \subseteq \mathbb{R}$, los pares $(a, b)$ se grafican como puntos en $\mathbb{R}^2$.

---

### Dominio, codominio e imagen de una relación

| Concepto | Definición | Ejemplo con $R = \{(1,a),(1,b),(2,b),(3,c)\}$ |
|----------|------------|-----------------------------------------------|
| **Dominio** | Conjunto de todos los primeros elementos que aparecen | $\text{Dom}(R) = \{1, 2, 3\}$ |
| **Codominio** | Conjunto $B$ completo (todos los posibles) | $B = \{a, b, c\}$ |
| **Imagen** | Solo los elementos de $B$ que realmente aparecen | $\text{Im}(R) = \{a, b, c\}$ |

```{warning}
La **imagen** es siempre un subconjunto del **codominio**: $\text{Im}(R) \subseteq B$.  
Pueden ser iguales (como en el ejemplo) o la imagen puede ser más pequeña.
```

---

### Tipos de relaciones por su correspondencia

| Tipo | Descripción | Ejemplo |
|------|-------------|---------|
| **Uno a uno** | Cada $a$ va a exactamente un $b$, y cada $b$ viene de exactamente un $a$ | Un empleado — un número de nómina |
| **Uno a muchos** | Un $a$ va a varios $b$ | Un proveedor — varios clientes |
| **Muchos a uno** | Varios $a$ van al mismo $b$ | Varios sensores — una alarma |
| **Muchos a muchos** | Varios $a$ a varios $b$ | Varios operadores — varias máquinas |

:::{admonition} 🔧 Ingeniería
:class: ingenieria
En sistemas de control, la relación entre **señales de entrada** y **señales de salida** determina el tipo de sistema:

- **Uno a uno:** un sensor → un actuador (sistema simple)
- **Uno a muchos:** un controlador → varios actuadores (sistema distribuido)
- **Muchos a uno:** varios sensores → una alarma (sistema de monitoreo)
:::

---

### Relación en $\mathbb{R}$ — La gráfica

Cuando $A = B = \mathbb{R}$, una relación es simplemente un conjunto de puntos en el plano. Cualquier conjunto de puntos es una relación válida.

**Ejemplos:**
- $R_1 = \{(x, y) \mid y = 2x + 1\}$ — una línea recta
- $R_2 = \{(x, y) \mid x^2 + y^2 = 4\}$ — un círculo de radio 2
- $R_3 = \{(x, y) \mid y \geq x\}$ — el semiplano por encima de la recta $y = x$

Todos son relaciones válidas. Lo que las distingue entre sí es si son o no **funciones** — eso lo veremos en la siguiente clase.

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_CONCEPTO_RELACION"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~4 min):**
1. Mostrar la tabla de máquinas y operadores de la planta
2. Convertirla a diagrama de flechas: dos óvalos con flechas
3. Convertirla a lista de pares: {(Torno,García), (Torno,Martínez),...}
4. Mostrar que una relación es un subconjunto del producto cartesiano
5. Graficar la relación {(1,2),(2,3),(3,1)} en el plano
6. Cierre: cualquier conjunto de puntos en el plano es una relación
```

---

## Visualización interactiva

Construye tu propia relación activando pares en el diagrama. Observa el dominio y la imagen.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s5c1-relacion" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s5c1-relacion', {
            boundingbox: [-1, 11, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var setA = ['1','2','3','4'];
        var setB = ['a','b','c','d'];
        // Matriz de relación [i][j] = true/false
        var rel = [
            [true,  true,  false, false],
            [false, true,  false, false],
            [false, false, true,  false],
            [false, false, false, false]
        ];

        var flechas = [];
        var dinamicos = [];

        // Óvalos
        board.create('ellipse',
            [[-0.5, 5], [2.5, 5], [1, 1]], {
            strokeColor: '#1d4ed8', strokeWidth: 2,
            fillColor: '#dbeafe', fillOpacity: 0.3 });
        board.create('ellipse',
            [[9.5, 5], [12.5, 5], [11, 1]], {
            strokeColor: '#c2410c', strokeWidth: 2,
            fillColor: '#ffedd5', fillOpacity: 0.3 });

        board.create('text', [1, 9.5, 'A'], {
            fontSize: 14, color: '#1d4ed8', fontWeight: 'bold', anchorX: 'middle' });
        board.create('text', [11, 9.5, 'B'], {
            fontSize: 14, color: '#c2410c', fontWeight: 'bold', anchorX: 'middle' });

        // Puntos de A
        var ptsA = setA.map(function(e, i) {
            return board.create('point', [1, 7.5 - i*1.5], {
                size: 6, color: '#1d4ed8', fixed: true, name: e,
                label: { offset: [-15, 0], fontSize: 12, color: '#1d4ed8' }
            });
        });

        // Puntos de B
        var ptsB = setB.map(function(e, i) {
            return board.create('point', [11, 7.5 - i*1.5], {
                size: 6, color: '#c2410c', fixed: true, name: e,
                label: { offset: [15, 0], fontSize: 12, color: '#c2410c' }
            });
        });

        function limpiarFlechas() {
            flechas.forEach(function(f) { try { board.removeObject(f); } catch(e){} });
            flechas = [];
            dinamicos.forEach(function(o) { try { board.removeObject(o); } catch(e){} });
            dinamicos = [];
        }

        function dibujar() {
            limpiarFlechas();
            var pares = [];
            var domSet = {};
            var imgSet = {};

            for (var i = 0; i < 4; i++) {
                for (var j = 0; j < 4; j++) {
                    if (rel[i][j]) {
                        var f = board.create('arrow', [ptsA[i], ptsB[j]], {
                            strokeColor: '#7c3aed', strokeWidth: 2
                        });
                        flechas.push(f);
                        pares.push('('+setA[i]+','+setB[j]+')');
                        domSet[setA[i]] = true;
                        imgSet[setB[j]] = true;
                    }
                }
            }

            var dom = Object.keys(domSet).join(', ');
            var img = Object.keys(imgSet).join(', ');

            dinamicos.push(board.create('text', [3.5, -0.5,
                'R = {' + (pares.length ? pares.join(', ') : 'vacio') + '}'], {
                fontSize: 11, color: '#7c3aed', fontWeight: 'bold' }));
            dinamicos.push(board.create('text', [3.5, -1.5,
                'Dom(R) = {' + (dom || 'vacio') + '}'], {
                fontSize: 11, color: '#1d4ed8' }));
            dinamicos.push(board.create('text', [3.5, -2.5,
                'Im(R) = {' + (img || 'vacio') + '}'], {
                fontSize: 11, color: '#c2410c' }));
        }

        // Botones de toggle para cada par
        var yBtn = 10.5;
        setA.forEach(function(a, i) {
            setB.forEach(function(b, j) {
                var btn = board.create('text',
                    [3.5 + j*2.2, yBtn - i*1.1, a+'→'+b], {
                    fontSize: 10, color: rel[i][j] ? '#7c3aed' : '#9ca3af',
                    anchorX: 'middle',
                    cssStyle: 'cursor:pointer; padding:2px 6px; background:#f1f5f9; border-radius:4px;'
                });
                (function(ii, jj, btnRef) {
                    btnRef.on('down', function() {
                        rel[ii][jj] = !rel[ii][jj];
                        btnRef.setAttribute({ color: rel[ii][jj] ? '#7c3aed' : '#9ca3af' });
                        dibujar();
                    });
                })(i, j, btn);
            });
        });

        board.create('text', [6, -3,
            'Clic en los pares para activarlos o desactivarlos'], {
            fontSize: 10, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle' });

        dibujar();
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Botones para activar/desactivar pares (a→b). Las flechas aparecen en el diagrama sagital. El dominio e imagen se actualizan en tiempo real. Permite explorar todos los tipos de correspondencia: uno a uno, uno a muchos, muchos a uno, vacío.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfbpsFvnaTJOwz-LEj25f5AcXy33I5E3xXqrjEs4w1hDBDZhA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Concepto de relación
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (8 preguntas, ~10 min):**

P1 (MC): "Una relación de A en B es un subconjunto de:" → A×B
P2 (Fill): "Sea R={(1,a),(2,b),(2,c)}. Dom(R)={___,___}" → 1, 2
P3 (Fill): "Sea R={(1,a),(2,b),(2,c)}, B={a,b,c,d}. Im(R)={___,___}" → a, b, c (no d)
P4 (T/F): "En una relación, un elemento de A puede relacionarse con varios de B." → Verdadero
P5 (MC): "Im(R) siempre es..." → Subconjunto del codominio
P6 (MC ingeniería): "Varios sensores → una alarma es una correspondencia..." → Muchos a uno
P7 (T/F): "Un círculo en el plano es una relación válida." → Verdadero
P8 (Fill): "Si R⊆A×B y |A|=3, |B|=4, el máximo de pares en R es ___." → 12
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 30 70

* - Concepto
  - Definición
* - Relación $R$
  - Subconjunto de $A \times B$: $R \subseteq A \times B$
* - Par relacionado
  - $(a,b) \in R$ se escribe $a\ R\ b$
* - Dominio
  - Primeros elementos que aparecen en $R$
* - Codominio
  - El conjunto $B$ completo
* - Imagen
  - Segundos elementos que realmente aparecen en $R$
* - Tipos
  - Uno a uno, uno a muchos, muchos a uno, muchos a muchos
```

:::{admonition} Siguiente clase
:class: tip
Ya sabes qué es una relación. En la siguiente clase veremos qué condición especial convierte una relación en **función** — el concepto más importante de toda la unidad.

➡️ [Ir a S5·C2 Concepto de función](s5_c2_concepto_funcion.md)
:::
