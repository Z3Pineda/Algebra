---
title: "S2·C4 Implicación y negación"
---

# S2·C4 Implicación y negación

:::{admonition} 🔧 El sistema de control de un horno industrial
:class: ingenieria

Un horno industrial tiene dos reglas de control escritas en el manual:

**Regla 1 — Implicación:**
> *"Si la temperatura supera 800°C, entonces el sistema de enfriamiento se activa."*

Esta regla dice: cuando ocurre $p$, debe ocurrir $q$. Si $p$ ocurre pero $q$ no, hay una **falla**.

**Regla 2 — Negación:**
> *"El horno NO está en temperatura de operación."*

Esta regla invierte el estado: si estaba bien, ahora está mal. Si estaba mal, ahora está bien.

Estas dos ideas — la implicación y la negación — son los últimos conectivos lógicos que necesitas para describir cualquier condición en un sistema de control.
:::

**Pregunta detonadora**

> Si la regla dice *"si llueve, el piso se moja"* y el piso **no** está mojado, ¿puedes concluir que no llovió? ¿Por qué?

---

## Teoría

### Negación $\neg p$ — el "NO" lógico

**Definición:**
La negación de una proposición invierte su valor de verdad. Si $p$ es V, $\neg p$ es F, y viceversa.

**Tabla de verdad:**

| $p$ | $\neg p$ |
|:---:|:--------:|
| V | F |
| F | V |

**Doble negación:**
$$\neg(\neg p) \equiv p$$

Negar dos veces regresa al enunciado original.

:::{admonition} 🔧 Ingeniería — negación
:class: ingenieria
| Proposición $p$ | Negación $\neg p$ |
|---|---|
| "La presión está en rango" (V) | "La presión **no** está en rango" (F) |
| "El sensor detectó falla" (F) | "El sensor **no** detectó falla" (V) |
| "La temperatura supera 800°C" (V) | "La temperatura **no** supera 800°C" (F) |

En sistemas de control, la negación se usa para activar alarmas o estados de emergencia cuando la condición normal falla.
:::

---

### Cómo negar correctamente expresiones compuestas

Al negar una conjunción o disyunción **no** basta agregar "no" al principio. Se aplican las **Leyes de De Morgan**:

$$\neg(p \wedge q) \equiv \neg p \vee \neg q$$
$$\neg(p \vee q) \equiv \neg p \wedge \neg q$$ 

**Regla práctica:**
1. Niega cada proposición por separado
2. Cambia el conector: $\wedge \to \vee$ o $\vee \to \wedge$

| Enunciado original | Negación incorrecta ❌ | Negación correcta ✅ |
|--------------------|-----------------------|----------------------|
| "Hay presión **y** hay flujo" | "No hay presión **y** no hay flujo" | "No hay presión **o** no hay flujo" |
| "Hay vibración **o** calor" | "No hay vibración **o** no hay calor" | "No hay vibración **y** no hay calor" |

---

### Implicación $p \rightarrow q$ — el "Si... entonces"

**Definición:**
La implicación "$p$ implica $q$" es verdadera en todos los casos, **excepto** cuando $p$ es verdadera y $q$ es falsa.

$$p \rightarrow q$$

Se lee: *"Si $p$, entonces $q$"* o *"$p$ implica $q$"*

**Tabla de verdad:**

| $p$ | $q$ | $p \rightarrow q$ |
|:---:|:---:|:-----------------:|
| V | V | V |
| V | F | **F** |
| F | V | V |
| F | F | V |

```{warning}
La implicación es **F** únicamente cuando la hipótesis ($p$) es V y la conclusión ($q$) es F.  
Las otras tres filas son V — incluyendo los casos donde $p$ es F.

Esto parece extraño al principio. Piénsalo así: *"si llueve, el piso se moja"* — si no llueve, la regla no dice nada sobre el piso. No la viola.
```

:::{admonition} 🔧 Ingeniería — implicación
:class: ingenieria
Regla: *"Si la temperatura supera 800°C ($p$), el enfriamiento se activa ($q$)"*

| $p$ (temp > 800°C) | $q$ (enfriamiento) | $p \rightarrow q$ | Diagnóstico |
|:---:|:---:|:---:|---|
| V | V | V | ✅ Sistema funciona correctamente |
| V | F | **F** | ❌ **FALLA**: temperatura alta, enfriamiento no activó |
| F | V | V | ⚠️ Enfriamiento activo sin necesidad (gasto extra) |
| F | F | V | ✅ Temperatura normal, enfriamiento en reposo |

Solo el segundo caso representa una falla real del sistema. La implicación es el conectivo que modela las **especificaciones de comportamiento** en ingeniería.
:::

---

### Negación de la implicación

$$\neg(p \rightarrow q) \equiv p \wedge \neg q$$

La única forma de que *"si $p$ entonces $q$"* sea **falso** es que $p$ ocurra **y** $q$ no ocurra.

En ingeniería: la negación de una especificación de control es exactamente la **condición de falla**.

---

### Tabla completa de los cuatro conectivos

| $p$ | $q$ | $\neg p$ | $p \wedge q$ | $p \vee q$ | $p \rightarrow q$ |
|:---:|:---:|:--------:|:------------:|:----------:|:-----------------:|
| V | V | F | V | V | V |
| V | F | F | F | V | **F** |
| F | V | V | F | V | V |
| F | F | V | F | F | V |

---

### Resumen de la semana — los cuatro conectivos

| Conectivo | Símbolo | Es F cuando | Ingeniería |
|-----------|:-------:|-------------|------------|
| Negación | $\neg p$ | $p$ es V | Estado de falla o alarma |
| Conjunción | $p \wedge q$ | Alguna es F | Condición de arranque seguro |
| Disyunción | $p \vee q$ | Ambas son F | Activación de alarma |
| Implicación | $p \rightarrow q$ | $p$=V y $q$=F | Especificación de comportamiento |

---

## Video

```{raw} html
<div class="video-container">
  <iframe
    src="https://www.youtube.com/embed/REEMPLAZA_ID_YOUTUBE_IMPLICACION_NEGACION"
    allowfullscreen>
  </iframe>
</div>
```

```{note}
**Para el docente — video Manim sugerido (~5 min):**
1. Mostrar un interruptor con LED: p=V → LED verde. Aplicar ¬: LED cambia a rojo. Aplicar ¬ de nuevo: regresa a verde (doble negación)
2. Mostrar De Morgan: ¬(p∧q) → animación cambiando ∧ a ∨ y negando cada parte
3. Mostrar la implicación con el horno: termómetro sube (p=V), ventilador no arranca (q=F) → FALLA
4. Construir la tabla de verdad de p→q fila por fila con interpretación del horno
5. Cierre: tabla resumen de los 4 conectivos lado a lado
```

---

## Visualización interactiva

Activa o desactiva los sensores y observa los cuatro conectivos evaluados simultáneamente.

```{raw} html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraph.min.css">
<script src="https://cdnjs.cloudflare.com/ajax/libs/jsxgraph/1.9.2/jsxgraphcore.js"></script>

<div id="jxg-s2c4-implicacion" class="jsxgraph-container" style="height:500px"></div>

<script>
(function() {
    function init() {
        if (typeof JXG === 'undefined') { setTimeout(init, 200); return; }
        JXG.Options.text.useMathJax = false;
        var board = JXG.JSXGraph.initBoard('jxg-s2c4-implicacion', {
            boundingbox: [-1, 11, 13, -3],
            axis: false, showCopyright: false, showNavigation: false,
            pan: { enabled: false }, zoom: { enabled: false }
        });

        var valP = true;
        var valQ = true;

        // LEDs
        var ledP = board.create('circle', [[2, 9], 0.5], {
            fillColor: '#16a34a', fillOpacity: 1, strokeColor: '#374151', strokeWidth: 1 });
        var ledQ = board.create('circle', [[6, 9], 0.5], {
            fillColor: '#16a34a', fillOpacity: 1, strokeColor: '#374151', strokeWidth: 1 });

        var txtValP = board.create('text', [2, 7.8, 'p = V'], {
            fontSize: 14, color: '#16a34a', fontWeight: 'bold', anchorX: 'middle' });
        var txtValQ = board.create('text', [6, 7.8, 'q = V'], {
            fontSize: 14, color: '#16a34a', fontWeight: 'bold', anchorX: 'middle' });

        // Resultados de los 4 conectivos
        var txtNegP = board.create('text', [2, 6.5, 'NOT p = F'], {
            fontSize: 13, color: '#dc2626', anchorX: 'middle' });
        var txtConj = board.create('text', [2, 5.5, 'p AND q = V'], {
            fontSize: 13, color: '#16a34a', anchorX: 'middle' });
        var txtDisy = board.create('text', [6, 6.5, 'p OR q = V'], {
            fontSize: 13, color: '#16a34a', anchorX: 'middle' });
        var txtImpl = board.create('text', [6, 5.5, 'p -> q = V'], {
            fontSize: 13, color: '#16a34a', anchorX: 'middle' });

        // Diagnóstico de ingeniería
        var diagImpl = board.create('text', [6, 4.2,
            'Horno: sistema OK'], {
            fontSize: 12, color: '#16a34a', anchorX: 'middle', fontStyle: 'italic' });

        // Separador
        board.create('segment', [[4.5, 4],[4.5, 10]], {
            strokeColor: '#e2e8f0', strokeWidth: 1, dash: 2 });

        // Etiquetas
        board.create('text', [2, 10.5, 'Negacion y Conjuncion'], {
            fontSize: 11, color: '#6b7280', anchorX: 'middle' });
        board.create('text', [6, 10.5, 'Disyuncion e Implicacion'], {
            fontSize: 11, color: '#6b7280', anchorX: 'middle' });

        // Botones
        var btnP = board.create('text', [2, 2.8, 'CLIC: cambiar p'], {
            fontSize: 12, color: '#1d4ed8', anchorX: 'middle', fontWeight: 'bold',
            cssStyle: 'cursor:pointer; padding:6px 14px; background:#dbeafe; border-radius:8px;'
        });
        var btnQ = board.create('text', [6, 2.8, 'CLIC: cambiar q'], {
            fontSize: 12, color: '#7c3aed', anchorX: 'middle', fontWeight: 'bold',
            cssStyle: 'cursor:pointer; padding:6px 14px; background:#ede9fe; border-radius:8px;'
        });

        function vf(b) { return b ? 'V' : 'F'; }
        function color(b) { return b ? '#16a34a' : '#dc2626'; }

        function actualizar() {
            var negP = !valP;
            var conj = valP && valQ;
            var disy = valP || valQ;
            var impl = !valP || valQ;

            ledP.setAttribute({ fillColor: valP ? '#16a34a' : '#9ca3af' });
            ledQ.setAttribute({ fillColor: valQ ? '#16a34a' : '#9ca3af' });

            txtValP.setText('p = ' + vf(valP));
            txtValP.setAttribute({ color: color(valP) });
            txtValQ.setText('q = ' + vf(valQ));
            txtValQ.setAttribute({ color: color(valQ) });

            txtNegP.setText('NOT p = ' + vf(negP));
            txtNegP.setAttribute({ color: color(negP) });
            txtConj.setText('p AND q = ' + vf(conj));
            txtConj.setAttribute({ color: color(conj) });
            txtDisy.setText('p OR q = ' + vf(disy));
            txtDisy.setAttribute({ color: color(disy) });
            txtImpl.setText('p -> q = ' + vf(impl));
            txtImpl.setAttribute({ color: color(impl) });

            // Diagnóstico implicación
            if (valP && !valQ) {
                diagImpl.setText('Horno: FALLA - temp alta, enfriamiento inactivo');
                diagImpl.setAttribute({ color: '#dc2626' });
            } else if (!valP && valQ) {
                diagImpl.setText('Horno: enfriamiento activo sin necesidad');
                diagImpl.setAttribute({ color: '#f59e0b' });
            } else if (valP && valQ) {
                diagImpl.setText('Horno: sistema OK');
                diagImpl.setAttribute({ color: '#16a34a' });
            } else {
                diagImpl.setText('Horno: temperatura normal, en reposo');
                diagImpl.setAttribute({ color: '#16a34a' });
            }

            board.update();
        }

        btnP.on('down', function() { valP = !valP; actualizar(); });
        btnQ.on('down', function() { valQ = !valQ; actualizar(); });

        board.create('text', [5, -1.5,
            'Haz clic en los botones para cambiar p y q'], {
            fontSize: 11, color: '#6b7280', fontStyle: 'italic', anchorX: 'middle'
        });
    }
    init();
})();
</script>
```

```{note}
**Para el docente — visualización:**
Dos botones cambian p y q. Se muestran simultáneamente los cuatro conectivos (¬p, p∧q, p∨q, p→q) con sus valores V/F en color verde/rojo. El diagnóstico de ingeniería debajo de p→q cambia según el caso: FALLA solo cuando p=V y q=F.
```

---

## Actividad — Quizizz

```{raw} html
<div class="quizizz-link">
  <a href="https://docs.google.com/forms/d/e/1FAIpQLSfDKngwapLiAWMwSIRnVzsQUUo4esrm8KN6nzc2yDM0zWrQmA/viewform" target="_blank" class="quizizz-btn">
    📝 Practicar: Implicación y negación
  </a>
</div>
```

```{note}
**Para el docente — actividad Quizizz (10 preguntas, ~12 min):**

P1 (MC): "Si p=V, ¿cuál es ¬p?" → F
P2 (T/F): "¬(¬p) = p" → Verdadero (doble negación)
P3 (MC): "¿Cuál es la negación correcta de 'hay presión Y hay flujo'?"
→ "No hay presión O no hay flujo" (De Morgan)

P4 (MC): "Si p=V y q=F, ¿cuál es p→q?" → F
P5 (MC): "Si p=F y q=F, ¿cuál es p→q?" → V
P6 (T/F): "p→q es F cuando p=F y q=V." → Falso

P7 (MC ingeniería): "La regla dice: si temperatura alta (p), enfriamiento activa (q). Se observa p=V y q=F. ¿Qué ocurre?"
→ Falla del sistema — p→q es F

P8 (MC ingeniería): "La regla dice: si temperatura alta (p), enfriamiento activa (q). Se observa p=F y q=V. ¿Es falla?"
→ No — p→q es V aunque parece raro

P9 (Fill): "¬(p→q) ≡ p ∧ ___" → ¬q

P10 (MC): "¿Cuál tabla de verdad corresponde a p→q?"
- a) V,V,V,V  b) V,F,F,F  c) V,F,V,V ✅  d) F,V,F,V
```

---

## Resumen

```{list-table}
:header-rows: 1
:widths: 25 20 30 25

* - Conectivo
  - Símbolo
  - Es F cuando
  - Clave para recordarlo
* - Negación
  - $\neg p$
  - $p$ es V
  - Invierte el valor
* - De Morgan 1
  - $\neg(p \wedge q)$
  - —
  - $\equiv \neg p \vee \neg q$
* - De Morgan 2
  - $\neg(p \vee q)$
  - —
  - $\equiv \neg p \wedge \neg q$
* - Implicación
  - $p \rightarrow q$
  - $p$=V y $q$=F
  - "La promesa se incumplió"
* - Neg. implicación
  - $\neg(p \rightarrow q)$
  - —
  - $\equiv p \wedge \neg q$
```

:::{admonition} Siguiente clase
:class: tip
Has completado los cuatro conectivos lógicos. En la clase de autogestión reforzarás proposiciones y conectivos con ejercicios guiados antes de pasar a los diagramas de Venn la próxima semana.

➡️ [Ir a S2·Auto Ejercicios de lógica](s2_auto_ejercicios_logica.md)
:::
