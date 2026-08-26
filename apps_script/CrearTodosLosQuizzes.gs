/**
 * Script maestro — Quizzes Álgebra (Jupyter Book)
 *
 * CÓMO USAR
 * 1. Abre https://script.google.com → Proyecto nuevo.
 * 2. Pega TODO este archivo en Code.gs (sustituye el contenido por defecto).
 * 3. Ejecuta crearTodosLosQuizzes() (primera vez: autoriza Forms + Drive + Sheets).
 * 4. Revisa el Registro de ejecución y la hoja de cálculo con los enlaces.
 * 5. Descarga el JSON desde Drive (archivo "algebra_quiz_urls.json") o copia la hoja.
 * 6. En tu PC: py apps_script/apply_form_urls.py _form_urls.json
 *
 * LOTES (si hay timeout ~6 min): crearTodosLosQuizzesLote(0, 20) → luego (20, 20) …
 *
 * Regenerar este archivo tras cambiar .md o .gs individuales:
 *   py apps_script/build_master_script.py
 */

var CONFIG = {
  /** Slugs que NO se crean (ej. ya tienen formulario publicado). Edita aquí en Apps Script si hace falta. */
  SKIP_SLUGS: ["s1_c1_presentacion_diagnostico"],
  /** Índice inicial en QUIZZES (0 = primero). Usar con BATCH_SIZE para lotes. */
  BATCH_START: 0,
  /** Cuántos crear; 0 = todos desde BATCH_START. */
  BATCH_SIZE: 0,
  /** Crear hoja de cálculo con resultados. */
  CREAR_HOJA_RESULTADOS: true,
  NOMBRE_HOJA: "Enlaces Quizzes Álgebra",
  /** Pausa entre formularios (ms) para evitar límites de la API. */
  PAUSA_MS: 200,
  /** Guardar JSON en Drive al terminar. */
  GUARDAR_JSON_EN_DRIVE: true,
  NOMBRE_JSON: "algebra_quiz_urls.json",
};

function poblarFormulario_(form, preguntas) {
  for (var i = 0; i < preguntas.length; i++) {
    var p = preguntas[i];
    var item = form.addMultipleChoiceItem();
    item.setTitle("[" + p.categoria + "] " + p.pregunta);
    item.setRequired(true);
    var choices = [];
    for (var j = 0; j < p.opciones.length; j++) {
      choices.push(item.createChoice(p.opciones[j], j === p.correcta));
    }
    item.setChoices(choices);
    item.setPoints(1);
  }
}

function crearQuizDesdeDef_(def) {
  var form = FormApp.create(def.formTitle);
  form.setIsQuiz(true);
  form.setTitle(def.title);
  form.setDescription(def.description);
  form.setShuffleQuestions(true);
  poblarFormulario_(form, def.preguntas);
  return {
    slug: def.slug,
    titulo: def.title,
    preguntas: def.preguntas.length,
    editUrl: form.getEditUrl(),
    publicUrl: form.getPublishedUrl(),
  };
}

function obtenerDefsFiltrados_() {
  var skip = {};
  for (var s = 0; s < CONFIG.SKIP_SLUGS.length; s++) {
    skip[CONFIG.SKIP_SLUGS[s]] = true;
  }
  var filtrados = [];
  for (var i = 0; i < QUIZZES.length; i++) {
    if (skip[QUIZZES[i].slug]) {
      continue;
    }
    filtrados.push(QUIZZES[i]);
  }
  var start = CONFIG.BATCH_START || 0;
  var size = CONFIG.BATCH_SIZE || 0;
  if (size > 0) {
    return filtrados.slice(start, start + size);
  }
  return filtrados.slice(start);
}

function escribirResultadosEnHoja_(resultados, errores, omitidos) {
  var ss = SpreadsheetApp.create(CONFIG.NOMBRE_HOJA + " " + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm"));
  var sheet = ss.getActiveSheet();
  sheet.setName("Enlaces");
  sheet.appendRow(["slug", "titulo", "preguntas", "editUrl", "publicUrl"]);
  for (var i = 0; i < resultados.length; i++) {
    var r = resultados[i];
    sheet.appendRow([r.slug, r.titulo, r.preguntas, r.editUrl, r.publicUrl]);
  }
  if (errores.length > 0) {
    var errSheet = ss.insertSheet("Errores");
    errSheet.appendRow(["slug", "error"]);
    for (var e = 0; e < errores.length; e++) {
      errSheet.appendRow([errores[e].slug, errores[e].error]);
    }
  }
  if (omitidos.length > 0) {
    var skipSheet = ss.insertSheet("Omitidos");
    skipSheet.appendRow(["slug", "motivo"]);
    for (var o = 0; o < omitidos.length; o++) {
      skipSheet.appendRow([omitidos[o], "SKIP_SLUGS"]);
    }
  }
  Logger.log("📊 Hoja de resultados: " + ss.getUrl());
  return ss.getUrl();
}

function guardarJsonEnDrive_(resultados) {
  var payload = {
    generado: Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd'T'HH:mm:ss"),
    total: resultados.length,
    forms: resultados,
  };
  var json = JSON.stringify(payload, null, 2);
  var file = DriveApp.createFile(CONFIG.NOMBRE_JSON, json, MimeType.PLAIN_TEXT);
  Logger.log("📁 JSON en Drive: " + file.getUrl());
  return file.getUrl();
}

/**
 * Crea todos los quizzes (menos SKIP_SLUGS). Ver CONFIG para lotes.
 * @returns {Object[]} resultados con slug, editUrl, publicUrl
 */
function crearTodosLosQuizzes() {
  return ejecutarCreacionMasiva_();
}

/**
 * Crear un lote concreto. Ejemplo: crearTodosLosQuizzesLote(0, 20) luego (20, 20).
 */
function crearTodosLosQuizzesLote(inicio, cantidad) {
  CONFIG.BATCH_START = inicio;
  CONFIG.BATCH_SIZE = cantidad;
  return ejecutarCreacionMasiva_();
}

function ejecutarCreacionMasiva_() {
  var defs = obtenerDefsFiltrados_();
  var omitidos = CONFIG.SKIP_SLUGS.slice();
  var resultados = [];
  var errores = [];

  Logger.log("▶ Creando " + defs.length + " formularios (omitidos: " + omitidos.length + ")");

  for (var i = 0; i < defs.length; i++) {
    var def = defs[i];
    try {
      var r = crearQuizDesdeDef_(def);
      resultados.push(r);
      Logger.log((i + 1) + "/" + defs.length + " ✅ " + r.slug);
      Logger.log("   Compartir: " + r.publicUrl);
      if (CONFIG.PAUSA_MS > 0) {
        Utilities.sleep(CONFIG.PAUSA_MS);
      }
    } catch (err) {
      errores.push({ slug: def.slug, error: String(err) });
      Logger.log((i + 1) + "/" + defs.length + " ❌ " + def.slug + ": " + err);
    }
  }

  Logger.log("——— RESUMEN ———");
  Logger.log("Creados: " + resultados.length + " | Errores: " + errores.length);

  if (CONFIG.CREAR_HOJA_RESULTADOS && resultados.length > 0) {
    escribirResultadosEnHoja_(resultados, errores, omitidos);
  }
  if (CONFIG.GUARDAR_JSON_EN_DRIVE && resultados.length > 0) {
    guardarJsonEnDrive_(resultados);
  }

  return resultados;
}


var QUIZZES = [
    {
      slug: "s1_auto_repaso_conjuntos",
      formTitle: "S1·Auto Repaso de conjuntos — Quiz",
      title: "S1·Auto Repaso de conjuntos",
      description: "Quiz: Concepto, Representación, Operaciones, PIE ingeniería",
      preguntas: [
      {
        categoria: "Concepto",
        pregunta: "¿Cuál es |A|?",
        opciones: ["5 con A=2,4,6,8,10", "2=A noc 5", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Concepto",
        pregunta: "¿Cuál es A'?",
        opciones: ["1,3,5,7,9 con U=1..10", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "Concepto",
        pregunta: "7∉A pero 7∈U?",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "Representación",
        pregunta: "¿Cuál es A∪B?",
        opciones: ["1,2,3,4,5,7,9 con A=1,3,5,7,9 B=1,2,3,4,5", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "Representación",
        pregunta: "¿Cuál es A∩B?",
        opciones: ["1,3,5", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "Operaciones",
        pregunta: "¿Cuál es A-B?",
        opciones: ["7,9", "8", "6", "-7"],
        correcta: 0
      },
      {
        categoria: "Operaciones",
        pregunta: "¿Cuál es B-A?",
        opciones: ["2,4", "3", "1", "-2"],
        correcta: 0
      },
      {
        categoria: "Operaciones",
        pregunta: "¿Cuál es A'?",
        opciones: ["2,4,6,8,10", "3", "1", "-2"],
        correcta: 0
      },
      {
        categoria: "Operaciones",
        pregunta: "¿Cuál es |A∪B|?",
        opciones: ["5+5-3=7", "7=3-5+5", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "PIE ingeniería",
        pregunta: "¿Cuál es |V∪S|?",
        opciones: ["42+35-18=59", "95=81-53+24", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "PIE ingeniería",
        pregunta: "¿Cuál es solo V?",
        opciones: ["42-18=24", "42=81-24", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "PIE ingeniería",
        pregunta: "¿Cuál es sin fallas?",
        opciones: ["100-59=41", "14=95-001", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s1_c1_presentacion_diagnostico",
      formTitle: "S1·C1 Presentación del curso y diagnóstico de aritmética — Quiz",
      title: "S1·C1 Presentación del curso y diagnóstico de aritmética",
      description: "Quiz: Operaciones con enteros, Fracciones, Potencias y raíces, Orden de operaciones, Proporciones",
      preguntas: [
      {
        categoria: "Operaciones con enteros",
        pregunta: "¿Cuánto es (-4)×(-3)?",
        opciones: ["12", "13", "11", "-12"],
        correcta: 0
      },
      {
        categoria: "Operaciones con enteros",
        pregunta: "¿Cuánto es -8+15?",
        opciones: ["7", "8", "6", "-7"],
        correcta: 0
      },
      {
        categoria: "Operaciones con enteros",
        pregunta: "¿Cuánto es -24/6?",
        opciones: ["-4", "-3", "-5", "4"],
        correcta: 0
      },
      {
        categoria: "Operaciones con enteros",
        pregunta: ", ,?",
        opciones: [",", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Fracciones",
        pregunta: "¿Cuánto es 3/4+1/3?",
        opciones: ["13/12", "13/13", "14/12", "12/12"],
        correcta: 0
      },
      {
        categoria: "Fracciones",
        pregunta: "¿Cuánto es 2/5×5/6?",
        opciones: ["1/3", "1/4", "2/3", "0/3"],
        correcta: 0
      },
      {
        categoria: "Fracciones",
        pregunta: "¿Cuánto es 3/4÷9/8?",
        opciones: ["2/3", "2/4", "3/3", "1/3"],
        correcta: 0
      },
      {
        categoria: "Fracciones",
        pregunta: ", ,?",
        opciones: [",", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Potencias y raíces",
        pregunta: "¿Cuánto es 2^4?",
        opciones: ["16", "17", "15", "-16"],
        correcta: 0
      },
      {
        categoria: "Potencias y raíces",
        pregunta: "¿Cuánto es (-3)^3?",
        opciones: ["-27", "-26", "-28", "27"],
        correcta: 0
      },
      {
        categoria: "Potencias y raíces",
        pregunta: "¿Cuánto es √81?",
        opciones: ["9", "10", "8", "-9"],
        correcta: 0
      },
      {
        categoria: "Potencias y raíces",
        pregunta: ", ,?",
        opciones: [",", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Orden de operaciones",
        pregunta: "¿Cuánto es 3+2×4?",
        opciones: ["11", "12", "10", "-11"],
        correcta: 0
      },
      {
        categoria: "Orden de operaciones",
        pregunta: "¿Cuánto es (3+2)×4?",
        opciones: ["20", "21", "19", "-20"],
        correcta: 0
      },
      {
        categoria: "Orden de operaciones",
        pregunta: "¿Cuánto es 2^3+4÷2?",
        opciones: ["10", "11", "9", "-10"],
        correcta: 0
      },
      {
        categoria: "Orden de operaciones",
        pregunta: ", ,?",
        opciones: [",", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Proporciones",
        pregunta: "60?",
        opciones: ["10 piezas=\\", "\\=sazeip 01", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Proporciones",
        pregunta: "¿Cuál es 15% de 80?",
        opciones: ["12", "13", "11", "-12"],
        correcta: 0
      },
      {
        categoria: "Proporciones",
        pregunta: "4 piezas \\150?",
        opciones: ["\\150", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Proporciones",
        pregunta: "¿Cuál es barra 3m en 4 partes?",
        opciones: ["0.75m", "m57.0", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s1_c2_concepto_conjunto",
      formTitle: "S1·C2 Concepto de conjunto — Quiz",
      title: "S1·C2 Concepto de conjunto",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "¿Cuál agrupación ES un conjunto bien definido?",
        opciones: ["Números mayores que 5", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
        correcta: 0
      },
      {
        categoria: "P2 (T/F)",
        pregunta: "El conjunto vacío ∅ es igual al conjunto 0.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "Sea A = tornillo, engrane, rodamiento. ¿Cuál es |A|?",
        opciones: ["3", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (T/F)",
        pregunta: "Si una pieza reprueba la revisión, entonces pieza ∈ A (piezas aprobadas).",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "El conjunto que contiene todos los objetos del contexto se llama conjunto ___.",
        opciones: ["universal", "lasrevinu", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P6 (MC)",
        pregunta: "¿Cuál es la cardinalidad de ∅?",
        opciones: ["0", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P7 (MC)",
        pregunta: "¿Qué símbolo indica que un elemento NO pertenece a un conjunto?",
        opciones: ["∉", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "Sea U=1,2,3,4,5 y A=2,4. Entonces |A| = ___.",
        opciones: ["2", "3", "1", "-2"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s1_c3_representacion_conjuntos",
      formTitle: "S1·C3 Representación de conjuntos — Quiz",
      title: "S1·C3 Representación de conjuntos",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "¿Cómo se llama la forma de representar listando todos los elementos?",
        opciones: ["Extensión", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "¿Comprensión de 1,3,5,7,9?",
        opciones: ["x ∈ ℕ | x es impar, x < 10", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (T/F)",
        pregunta: "x ∈ ℝ | 24.5 ≤ x ≤ 25.5 se puede representar por extensión.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "El símbolo | en x ∈ U | P(x) se lee como '___'.",
        opciones: ["tales que", "euq selat", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "¿Qué conjunto numérico incluye negativos pero NO decimales?",
        opciones: ["ℤ", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
        correcta: 0
      },
      {
        categoria: "P6 (MC)",
        pregunta: "La forma más adecuada para el conjunto de temperaturas entre 60°C y 90°C es:",
        opciones: ["Comprensión", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
        correcta: 0
      },
      {
        categoria: "P7 (T/F)",
        pregunta: "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "Sea B = x ∈ ℕ | x² = 9. Por extensión, B = ___.",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s1_c4_operaciones_basicas",
      formTitle: "S1·C4 Operaciones básicas con conjuntos — Quiz",
      title: "S1·C4 Operaciones básicas con conjuntos",
      description: "Quiz del curso — 10 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P9 (T/F)",
        pregunta: "A-B=B-A siempre",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P1",
        pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — ¿cuál es el resultado de A∪B?",
        opciones: ["1,2,3,4,5,6,7", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "P2",
        pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — ¿cuál es el resultado de A∩B?",
        opciones: ["3,4,5", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P3",
        pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — ¿cuál es el resultado de A-B?",
        opciones: ["1,2", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "P4",
        pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — ¿cuál es el resultado de B-A?",
        opciones: ["6,7", "7", "5", "-6"],
        correcta: 0
      },
      {
        categoria: "P5",
        pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — ¿cuál es el resultado de A'?",
        opciones: ["6,7,8,9,10", "7", "5", "-6"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — |A∪B|?",
        opciones: ["7", "8", "6", "-7"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill)",
        pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — PIE: 5+5-3?",
        opciones: ["7", "8", "6", "-7"],
        correcta: 0
      },
      {
        categoria: "P8 (ingeniería)",
        pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — 45 vibración + 30 calor - 20 ambas?",
        opciones: ["55", "56", "54", "-55"],
        correcta: 0
      },
      {
        categoria: "P10 (Fill)",
        pregunta: "Si A∩B=∅ los conjuntos son",
        opciones: ["Disjuntos", "sotnujsiD", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s2_auto_ejercicios_logica",
      formTitle: "S2·Auto Ejercicios de lógica — Quiz",
      title: "S2·Auto Ejercicios de lógica",
      description: "Quiz: Proposiciones, Conjunto solución, Tablas de verdad, Implicación y De Morgan",
      preguntas: [
      {
        categoria: "Proposiciones",
        pregunta: "¿Cuál es \"3×4?",
        opciones: ["13\" es proposición F", "F nóicisoporp se \"31", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Proposiciones",
        pregunta: "\"¿Cuántos engranes...?\" no es proposición?",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "Conjunto solución",
        pregunta: "2x-1=7?",
        opciones: ["S=4", "4=S", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Conjunto solución",
        pregunta: "x²-4=0?",
        opciones: ["S=-2", "2-=S", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Conjunto solución",
        pregunta: "x>3∧x<8 con U dado?",
        opciones: ["S=4", "4=S", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Tablas de verdad",
        pregunta: "p?",
        opciones: ["¬q es F cuando p=V y q=V", "V=q y V=p odnauc F se q¬", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Tablas de verdad",
        pregunta: "¿Cuál es ¬p∧q es V solo cuando p?",
        opciones: ["F y q=V", "V=q y F", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Tablas de verdad",
        pregunta: "p∧q es V solo si ambas V?",
        opciones: ["V", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Tablas de verdad",
        pregunta: "¬p∧q es V solo cuando p=F y q=V, p?",
        opciones: ["¬q es F cuando p=V y q=V, p∧q es V solo si ambas V", "V=q y V=p odnauc F se q¬", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Implicación y De Morgan",
        pregunta: "(p∧q)?",
        opciones: ["r es F cuando p∧q=V y r=F", "F=r y V=q∧p odnauc F se r", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Implicación y De Morgan",
        pregunta: "¬(p∧q)≡¬p∨¬q?",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "Implicación y De Morgan",
        pregunta: "¬(v∨s)≡¬v∧¬s?",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "Implicación y De Morgan",
        pregunta: "condición de arranque CNC?",
        opciones: ["CNC", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Implicación y De Morgan",
        pregunta: "¬(p∧q)≡¬p∨¬q, ¬(v∨s)≡¬v∧¬s, (p∧q)?",
        opciones: ["r es F cuando p∧q=V y r=F, condición de arranque CNC", "F=r y V=q∧p odnauc F se r", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s2_c1_proposicion_valor_verdad",
      formTitle: "S2·C1 Proposición y valor de verdad — Quiz",
      title: "S2·C1 Proposición y valor de verdad",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "¿Cuál es una proposición?",
        opciones: ["\"La presión hidráulica es 55 bar\"", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (T/F)",
        pregunta: "'¡Detener la operación!' es una proposición.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "¿Por qué 'temperatura alta' NO es proposición?",
        opciones: ["\"alta\" es ambiguo", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (T/F)",
        pregunta: "Una proposición abierta P(x) tiene valor de verdad fijo.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "Sea P(x): x+3=10. El valor de P(7) es ___.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "Sea P(x): x+3=10. El valor de P(5) es ___.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P7 (MC)",
        pregunta: "Conjunto solución de P(x): x²=16 en ℤ:",
        opciones: ["-4, 4", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
        correcta: 0
      },
      {
        categoria: "P8 (MC ingeniería)",
        pregunta: "Sistema evalúa P(d): 24.5≤d≤25.5. Eje con d=25.6...",
        opciones: ["Se rechaza", "azahcer eS", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s2_c2_conjunto_solucion",
      formTitle: "S2·C2 Conjunto solución de una proposición abierta — Quiz",
      title: "S2·C2 Conjunto solución de una proposición abierta",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "Sea P(x): x-2=5, U=ℤ. El conjunto solución es S=___.",
        opciones: ["7", "8", "6", "-7"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "Sea P(x): x>3, U=1,2,3,4,5. S=___,___.",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P4 (T/F)",
        pregunta: "Si ningún valor de U hace verdadera P(x), entonces S=U.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "Sea P(x): x>2 ∧ x<6, U=ℕ. S=___,___,___.",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P8 (T/F)",
        pregunta: "P(x): x=x siempre es verdadera, por lo tanto S=U.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "Sea P(x): x²=4, U=ℤ. ¿Cuál es S?",
        opciones: ["4", "2", "-2, 2", "-4, 4"],
        correcta: 2
      },
      {
        categoria: "P5 (MC ingeniería)",
        pregunta: "Se evalúa P(d): 24.5≤d≤25.5 para d=24.3, 25.0, 25.7. ¿Cuál es S?",
        opciones: ["24.3, 25.0", "25.0", "24.3, 25.7", "24.3, 25.0, 25.7"],
        correcta: 1
      },
      {
        categoria: "P7 (MC)",
        pregunta: "Sea P(x): x<1 ∨ x>4, U=0,1,2,3,4,5,6. ¿Cuál es S?",
        opciones: ["0,5,6", "1,2,3,4", "0,1,5,6", "2,3"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s2_c3_conjuncion_disyuncion",
      formTitle: "S2·C3 Conjunción y disyunción — Quiz",
      title: "S2·C3 Conjunción y disyunción",
      description: "Quiz del curso — 10 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "Si p=V y q=F, ¿cuál es p∧q?",
        opciones: ["F", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "Si p=F y q=F, ¿cuál es p∨q?",
        opciones: ["F", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "Si p=V y q=F, ¿cuál es p∨q?",
        opciones: ["V", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (T/F)",
        pregunta: "p∧q es V cuando al menos una proposición es V.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "p∨q es F solo cuando ambas proposiciones son F.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (MC ingeniería)",
        pregunta: "La prensa arranca con p∧g. Si p=V y g=F, ¿arranca?",
        opciones: ["No — g=F hace que p∧g=F", "F=g∧p euq ecah F=g — oN", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "La alarma suena con s∨v. Si s=F y v=V, ¿suena?",
        opciones: ["Sí — v=V hace que s∨v=V", "V=v∨s euq ecah V=v — íS", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (MC)",
        pregunta: "¿A qué operación de conjuntos corresponde P(x)∧Q(x)?",
        opciones: ["A∩B", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
        correcta: 0
      },
      {
        categoria: "P9 (MC)",
        pregunta: "¿A qué operación corresponde P(x)∨Q(x)?",
        opciones: ["A∪B", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P10 (Fill)",
        pregunta: "¿Cuánto es \"Sea P(x): x es par, Q(x): x>5, U?",
        opciones: ["1,...,10.", "2", "0", "-1"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s2_c4_implicacion_negacion",
      formTitle: "S2·C4 Implicación y negación — Quiz",
      title: "S2·C4 Implicación y negación",
      description: "Quiz del curso — 11 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "Si p=V, ¿cuál es ¬p?",
        opciones: ["F", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (T/F)",
        pregunta: "¬(¬p) = p",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "¿Cuál es la negación correcta de 'hay presión Y hay flujo'?",
        opciones: ["\"No hay presión O no hay flujo\"", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "Si p=V y q=F, ¿cuál es p",
        opciones: ["q?\" → F", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "Si p=F y q=F, ¿cuál es p",
        opciones: ["q?\" → V", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P6 (T/F)",
        pregunta: "p",
        opciones: ["Falso", "Depende del contexto", "Solo en casos especiales", "0"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "La regla dice: si temperatura alta (p), enfriamiento activa (q). Se observa p=V y q=F. ¿Qué ocurre?",
        opciones: ["Falla del sistema — p→q es F", "F se q→p — ametsis led allaF", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (MC ingeniería)",
        pregunta: "La regla dice: si temperatura alta (p), enfriamiento activa (q). Se observa p=F y q=V. ¿Es falla?",
        opciones: ["No — p→q es V aunque parece raro", "orar ecerap euqnua V se q→p — oN", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P9 (Fill)",
        pregunta: "¬(p — escribe la respuesta.",
        opciones: ["q) ≡ p ∧ ___\" → ¬q", "q¬ → \"___ ∧ p ≡ )q", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P10 (MC)",
        pregunta: "¿Cuál tabla de verdad corresponde a p",
        opciones: ["q?\"", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P10 (MC)",
        pregunta: "¿Cuál tabla de verdad corresponde a p→q?",
        opciones: ["V,V,V,V", "V,F,F,F", "V,F,V,V", "F,V,F,V"],
        correcta: 2
      },
      ],
    },
    {
      slug: "s3_auto_tarea_integradora",
      formTitle: "S3·Auto Tarea integradora — Unidad 1 — Quiz",
      title: "S3·Auto Tarea integradora — Unidad 1",
      description: "Quiz: Operaciones con conjuntos, Proposiciones y lógica, Venn y PIE de 3 conjuntos",
      preguntas: [
      {
        categoria: "Operaciones con conjuntos",
        pregunta: "¿Cuál es A∪B?",
        opciones: ["1,2,3,5,7,8,9 con A=1,3,5,7,9 B=2,3,5,8,9", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "Operaciones con conjuntos",
        pregunta: "¿Cuál es A∩C?",
        opciones: ["3,9", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "Operaciones con conjuntos",
        pregunta: "¿Cuál es B'?",
        opciones: ["1,4,5,6,7,9,10", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "Operaciones con conjuntos",
        pregunta: "¿Cuál es |A∪B|?",
        opciones: ["5+5-3=7", "7=3-5+5", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Operaciones con conjuntos",
        pregunta: "C⊄A porque 6∉A?",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "Proposiciones y lógica",
        pregunta: "p?",
        opciones: ["q es F cuando p=V y q=F", "F=q y V=p odnauc F se q", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Proposiciones y lógica",
        pregunta: "¿Cuál es p∧q?",
        opciones: ["F con p=V q=F", "F=q V=p noc F", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Proposiciones y lógica",
        pregunta: "¿Cuál es ¬p∨q?",
        opciones: ["F con p=V q=F", "F=q V=p noc F", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Proposiciones y lógica",
        pregunta: "¬(p∧q)≡¬p∨¬q?",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "Proposiciones y lógica",
        pregunta: "p∧q corresponde a intersección A∩B?",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "Proposiciones y lógica",
        pregunta: "p∧q=F con p=V q=F, ¬p∨q=F con p=V q=F, p?",
        opciones: ["q es F cuando p=V y q=F, ¬(p∧q)≡¬p∨¬q, p∧q corresponde a intersección A∩B", "F=q y V=p odnauc F se q", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Venn y PIE de 3 conjuntos",
        pregunta: "¿Cuál es |I∪F∪A|?",
        opciones: ["45+30+25-15-12-8+5=70 hablan idioma", "amoidi nalbah 07=5+8-21-51-52+03+54", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Venn y PIE de 3 conjuntos",
        pregunta: "¿Cuál es sin ninguno?",
        opciones: ["80-70=10", "01=07-08", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Venn y PIE de 3 conjuntos",
        pregunta: "¿Cuál es solo I?",
        opciones: ["23", "24", "22", "-23"],
        correcta: 0
      },
      {
        categoria: "Venn y PIE de 3 conjuntos",
        pregunta: "¿Cuál es exactamente dos idiomas?",
        opciones: ["20", "21", "19", "-20"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s3_c1_tipos_conjuntos",
      formTitle: "S3·C1 Tipos de conjuntos — Quiz",
      title: "S3·C1 Tipos de conjuntos",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "¿Cuál es un conjunto infinito?",
        opciones: ["ℕ = 0,1,2,...", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
        correcta: 0
      },
      {
        categoria: "P2 (T/F)",
        pregunta: "0 = ∅",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "¿Son iguales A=1,2,3 y B=3,2,1?",
        opciones: ["Sí, el orden no importa", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "A=1,2,3 y B=a,b,c. ¿Qué relación tienen?",
        opciones: ["Equivalentes", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "Si A⊂B entonces A=B.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "Si |A|=4, entonces |P(A)| = ___.",
        opciones: ["16", "17", "15", "-16"],
        correcta: 0
      },
      {
        categoria: "P7 (MC)",
        pregunta: "¿Cuántos subconjuntos tiene a,b?",
        opciones: ["4", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
        correcta: 0
      },
      {
        categoria: "P8 (MC ingeniería)",
        pregunta: "El conjunto solución de P(x): x²=49 en ℕ es un conjunto...",
        opciones: ["Unitario", "oiratinU", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s3_c2_venn_dos_conjuntos",
      formTitle: "S3·C2 Diagramas de Venn con dos conjuntos — Quiz",
      title: "S3·C2 Diagramas de Venn con dos conjuntos",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "¿Cuántas regiones distintas tiene un Venn de 2 conjuntos? — escribe la respuesta.",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "A∩B = ___,___,___",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "A-B = ___,___",
        opciones: ["1", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "B-A = ___,___",
        opciones: ["6", "7", "5", "-6"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "|A∪B| = ___ + ___ - ___ = ___",
        opciones: ["5", "6", "4", "-5"],
        correcta: 0
      },
      {
        categoria: "P6 (MC)",
        pregunta: "Si A∩B=∅, ¿cómo se ven los círculos?",
        opciones: ["Separados", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P7 (MC)",
        pregunta: "Si A⊆B, ¿cómo se ven?",
        opciones: ["El círculo A está dentro del B", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P8 (MC ingeniería)",
        pregunta: "H y E son los sistemas con fallas. bomba_2 falla en ambos. ¿En qué región del Venn está?",
        opciones: ["H∩E", "E∩H", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s3_c3_venn_tres_conjuntos",
      formTitle: "S3·C3 Diagramas de Venn con tres conjuntos — Quiz",
      title: "S3·C3 Diagramas de Venn con tres conjuntos",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "Un Venn de 3 conjuntos tiene ___ regiones.",
        opciones: ["8", "9", "7", "-8"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "La fórmula de regiones para n conjuntos es ___.",
        opciones: ["2^n", "n^2", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "¿En qué región está un elemento que pertenece a A, B pero no a C?",
        opciones: ["(A∩B)-C", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill — PIE)",
        pregunta: "|A∪B∪C| = |A|+|B|+|C| - |A∩B| - |A∩C| - |B∩C| + ___",
        opciones: ["|A∩B∩C|", "|C∩B∩A|", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill ingeniería)",
        pregunta: "De 50 técnicos: soldadura S=28, maquinado M=22, metrología T=18, S∩M=12, S∩T=8, M∩T=6, S∩M∩T=4. |S∪M∪T| = ___",
        opciones: ["46", "47", "45", "-46"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "Sin ninguna certificación: ___",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P7 (MC)",
        pregunta: "¿Cuál equipo está en H∩E según el diagrama del problema?",
        opciones: ["bomba_2", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P8 (MC)",
        pregunta: "¿Cuántas regiones tiene un Venn de 4 conjuntos?",
        opciones: ["16", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s3_c4_problemas_aplicados",
      formTitle: "S3·C4 Problemas aplicados con conjuntos y lógica — Quiz",
      title: "S3·C4 Problemas aplicados con conjuntos y lógica",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "|S∪C∪M| = ___",
        opciones: ["55", "56", "54", "-55"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "Técnicos sin ninguna certificación: ___",
        opciones: ["5", "6", "4", "-5"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "Solo soldadura (sin C ni M): ___",
        opciones: ["17", "18", "16", "-17"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "Exactamente dos certificaciones: ___",
        opciones: ["16", "17", "15", "-16"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "Centro S∩C∩M: ___",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "¿Cuántas combinaciones abren la válvula con (p∨q)∧r? — escribe la respuesta.",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P7 (MC)",
        pregunta: "Si p=F, q=F, r=V, ¿se abre?",
        opciones: ["No", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "¿Cuántas piezas de las 8 se aprueban con P1∧P2? — escribe la respuesta.",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s4_auto_clasificacion_numeros",
      formTitle: "S4·Auto Clasificación de números y producto cartesiano — Quiz",
      title: "S4·Auto Clasificación de números y producto cartesiano",
      description: "Quiz: Números, Recta numérica, Propiedades, Producto cartesiano",
      preguntas: [
      {
        categoria: "Números",
        pregunta: "¿Cuál es √9?",
        opciones: ["3 es natural y entero", "oretne y larutan se 3", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Números",
        pregunta: "√7 es irracional?",
        opciones: ["irracional", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Números",
        pregunta: "0.142857 periódico es racional?",
        opciones: ["racional", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Recta numérica",
        pregunta: "¿Cuál es |-8|?",
        opciones: ["8", "9", "7", "-8"],
        correcta: 0
      },
      {
        categoria: "Recta numérica",
        pregunta: "¿Cuál es d(-4,7)?",
        opciones: ["11", "12", "10", "-11"],
        correcta: 0
      },
      {
        categoria: "Recta numérica",
        pregunta: "¿Cuál es x?",
        opciones: ["3 pertenece a [3,7) pero x=7 no", "3[ a ecenetrep 3", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Propiedades",
        pregunta: "¿Cuál es 5×(8+12)?",
        opciones: ["5×8+5×12 es distributiva", "avitubirtsid se 21×5+8×5", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Propiedades",
        pregunta: "¿Cuál es (4+a)+6?",
        opciones: ["a+10 usa conmutativa y asociativa", "avitaicosa y avitatumnoc asu 01+a", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Propiedades",
        pregunta: "¿Cuál es 1/5×5×y?",
        opciones: ["y usa inverso multiplicativo", "ovitacilpitlum osrevni asu y", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Producto cartesiano",
        pregunta: "¿Cuál es |A×B|?",
        opciones: ["6 con A=1,2 B=a,b,c", "1=A noc 6", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Producto cartesiano",
        pregunta: "A×B≠B×A aunque misma cardinalidad?",
        opciones: ["cardinalidad", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Producto cartesiano",
        pregunta: "¿Cuál es |D×M×A|?",
        opciones: ["5×3×3=45 referencias de tornillo", "ollinrot ed saicnerefer 54=3×3×5", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s4_c1_numeros_naturales_enteros",
      formTitle: "S4·C1 Números naturales, enteros, racionales, irracionales y reales — Quiz",
      title: "S4·C1 Números naturales, enteros, racionales, irracionales y reales",
      description: "Quiz del curso — 10 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "¿A cuál conjunto pertenece -7 pero NO pertenece 3/4?",
        opciones: ["ℤ", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "¿Cuál de estos es irracional?",
        opciones: ["√7", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (T/F)",
        pregunta: "Todo número natural es también racional.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "0.666... (periódico) es:",
        opciones: ["Racional", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "¿Cuál es la jerarquía correcta?",
        opciones: ["N⊂Z⊂Q⊂R", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "ℚ ∩ ℐ = ___",
        opciones: ["∅", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P7 (MC)",
        pregunta: "π pertenece a:",
        opciones: ["ℝ pero no a ℚ", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P8 (MC ingeniería)",
        pregunta: "La relación de transmisión 3/2 de un engranaje es:",
        opciones: ["Racional", "lanoicaR", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P9 (T/F)",
        pregunta: "√4 = 2 es irracional.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P10 (MC)",
        pregunta: "¿Cuántos conjuntos numéricos contienen al número -5/3?",
        opciones: ["2", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s4_c2_recta_numerica",
      formTitle: "S4·C2 La recta numérica — Quiz",
      title: "S4·C2 La recta numérica",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "¿Cuál es mayor: -2 o -8?",
        opciones: ["-2", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "|-7| = ___",
        opciones: ["7", "8", "6", "-7"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "d(-3, 5) = |5-(-3)| = ___",
        opciones: ["8", "9", "7", "-8"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "¿Qué intervalo incluye ambos extremos?",
        opciones: ["Cerrado [a,b]", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "x=4 pertenece al intervalo (3, 5).",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (T/F)",
        pregunta: "x=3 pertenece al intervalo (3, 5).",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "Tolerancia: d ∈ [24.8, 25.2]. Pieza con d=24.8 mm...",
        opciones: ["Aprobada", "adaborpA", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill ingeniería)",
        pregunta: "Desviación de una pieza: d=25.4, nominal=25.0. |25.4-25.0| = ___ mm",
        opciones: ["0.4", "1", "0", "-1"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s4_c3_propiedades_reales",
      formTitle: "S4·C3 Propiedades de los números reales — Quiz",
      title: "S4·C3 Propiedades de los números reales",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "¿Qué propiedad justifica 3+7 = 7+3?",
        opciones: ["Conmutativa de la suma", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "¿Qué propiedad justifica 2×(3+4) = 2×3 + 2×4?",
        opciones: ["Distributiva", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (T/F)",
        pregunta: "La resta es conmutativa: a-b = b-a",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "El elemento neutro de la multiplicación es ___.",
        opciones: ["1", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "El inverso aditivo de -5 es ___.",
        opciones: ["5", "6", "4", "-5"],
        correcta: 0
      },
      {
        categoria: "P6 (T/F)",
        pregunta: "(8-3)-2 = 8-(3-2)",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill)",
        pregunta: "4 × (10 + 5) = 4×___ + 4×5",
        opciones: ["10", "11", "9", "-10"],
        correcta: 0
      },
      {
        categoria: "P8 (MC ingeniería)",
        pregunta: "Un ingeniero calcula F×(d₁+d₂). Para distribuirlo usa:",
        opciones: ["Propiedad distributiva", "avitubirtsid dadeiporP", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s4_c4_producto_cartesiano",
      formTitle: "S4·C4 Producto cartesiano — Quiz",
      title: "S4·C4 Producto cartesiano",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "A=a,b y B=1,2,3. |A×B| = ___",
        opciones: ["6", "7", "5", "-6"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "¿Cuál es el par correcto del producto cartesiano A=1,2 × B=x,y?",
        opciones: ["(1,x) ✅ (no (x,1))", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (T/F)",
        pregunta: "A×B = B×A siempre.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "A=1,2,3 y B=∅. |A×B| = ___",
        opciones: ["0", "1", "-1", "2"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "¿Qué representa ℝ² = ℝ×ℝ?",
        opciones: ["El plano cartesiano", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill ingeniería)",
        pregunta: "Una planta tiene 4 materiales y 5 tratamientos. ¿Cuántas combinaciones debe evaluar? — escribe la respuesta.",
        opciones: ["20", "21", "19", "-20"],
        correcta: 0
      },
      {
        categoria: "P7 (MC)",
        pregunta: "El punto (3, -2) en el plano cartesiano tiene:",
        opciones: ["x=3 (horizontal), y=-2", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P8 (T/F)",
        pregunta: "Una función f:A",
        opciones: ["Falso", "Depende del contexto", "Solo en casos especiales", "0"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s5_auto_identificacion_funciones",
      formTitle: "S5·Auto Identificación de funciones, dominio y rango — Quiz",
      title: "S5·Auto Identificación de funciones, dominio y rango",
      description: "Quiz: Identificar función, Dominio, Evaluación, Dominio y rango gráfico, Problema integrador válvula",
      preguntas: [
      {
        categoria: "Identificar función",
        pregunta: "¿Cuál es R?",
        opciones: ["(1,5),(2,8),(3,5),(4,11) sí es función", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Identificar función",
        pregunta: "¿Cuál es x?",
        opciones: ["y²+1 no es función", "nóicnuf se on 1+²y", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Dominio",
        pregunta: "¿Cuál es Dom(f)?",
        opciones: ["5x-7 es ℝ", "ℝ se 7-x5", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Dominio",
        pregunta: "¿Cuál es Dom(g)?",
        opciones: ["(x+2)/(x-3) es ℝ-3", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Dominio",
        pregunta: "¿Cuál es Dom(h)?",
        opciones: ["√(2x-8) es [4,+∞)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Dominio",
        pregunta: "Dom(k) con raíz y denominador es [-4,1)∪(1,+∞)?",
        opciones: ["[-4,1)∪(1,+∞)", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Dominio",
        pregunta: "¿Cuál es Dom(f)=5x-7 es ℝ, Dom(g)=(x+2)/(x-3) es ℝ-3, Dom(h)?",
        opciones: ["√(2x-8) es [4,+∞), Dom(k) con raíz y denominador es [-4,1)∪(1,+∞)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Evaluación",
        pregunta: "¿Cuál es f(x)?",
        opciones: ["3x²-2x+1", "1+x2-²x3", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Evaluación",
        pregunta: "¿Cuál es f(0)?",
        opciones: ["1", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "Evaluación",
        pregunta: "¿Cuál es f(2)?",
        opciones: ["9", "10", "8", "-9"],
        correcta: 0
      },
      {
        categoria: "Evaluación",
        pregunta: "¿Cuál es f(-1)?",
        opciones: ["6", "7", "5", "-6"],
        correcta: 0
      },
      {
        categoria: "Evaluación",
        pregunta: "¿Cuál es f(x)=3x²-2x+1, f(0)=1, f(2)=9, f(-1)?",
        opciones: ["6", "7", "5", "-6"],
        correcta: 0
      },
      {
        categoria: "Dominio y rango gráfico",
        pregunta: "parábola vértice (2,-3) abre arriba tiene rango [-3,+∞)?",
        opciones: ["[-3,+∞)", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Dominio y rango gráfico",
        pregunta: "¿Cuál es f(x)?",
        opciones: ["√(9-x²) tiene dominio [-3,3]", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Dominio y rango gráfico",
        pregunta: "¿Cuál es parábola vértice (2,-3) abre arriba tiene rango [-3,+∞), f(x)?",
        opciones: ["√(9-x²) tiene dominio [-3,3]", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Problema integrador válvula",
        pregunta: "¿Cuál es Q(a)?",
        opciones: ["0.5a+10", "01+a5.0", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador válvula",
        pregunta: "¿Cuál es Q(0)?",
        opciones: ["10 L/min", "nim/L 01", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador válvula",
        pregunta: "¿Cuál es Q(50)?",
        opciones: ["35 L/min", "nim/L 53", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador válvula",
        pregunta: "¿Cuál es Q(100)?",
        opciones: ["60 L/min", "nim/L 06", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador válvula",
        pregunta: "rango [10,60]?",
        opciones: ["[10,60]", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Problema integrador válvula",
        pregunta: "¿Cuál es Q(a)=0.5a+10, Q(0)=10 L/min, Q(50)=35 L/min, Q(100)?",
        opciones: ["60 L/min, rango [10,60]", "nim/L 06", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s5_c1_concepto_relacion",
      formTitle: "S5·C1 Concepto de relación — Quiz",
      title: "S5·C1 Concepto de relación",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "Una relación de A en B es un subconjunto de:",
        opciones: ["A×B", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "Sea R=(1,a),(2,b),(2,c). Dom(R)=___,___",
        opciones: ["1", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "Sea R=(1,a),(2,b),(2,c), B=a,b,c,d. Im(R)=___,___",
        opciones: ["a", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P4 (T/F)",
        pregunta: "En una relación, un elemento de A puede relacionarse con varios de B.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "Im(R) siempre es...",
        opciones: ["Subconjunto del codominio", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P6 (MC ingeniería)",
        pregunta: "Varios sensores",
        opciones: ["una alarma es una correspondencia...\" → Muchos a uno", "onu a sohcuM → \"...aicnednopserroc anu se amrala anu", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (T/F)",
        pregunta: "Un círculo en el plano es una relación válida.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "Si R⊆A×B y |A|=3, |B|=4, el máximo de pares en R es ___.",
        opciones: ["12", "13", "11", "-12"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s5_c2_concepto_funcion",
      formTitle: "S5·C2 Concepto de función — Quiz",
      title: "S5·C2 Concepto de función",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "¿Cuál condición debe cumplir una relación para ser función?",
        opciones: ["Cada elemento del dominio tiene exactamente una imagen", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (T/F)",
        pregunta: "Si f(2)=5 y f(7)=5, entonces f NO es función.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P3 (T/F)",
        pregunta: "Si f(3)=4 y f(3)=9, entonces f NO es función.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "Sea f(x)=3x-2. f(4) = ___",
        opciones: ["10", "11", "9", "-10"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "Sea f(x)=x²+1. f(-3) = ___",
        opciones: ["10", "11", "9", "-10"],
        correcta: 0
      },
      {
        categoria: "P6 (MC)",
        pregunta: "¿Cuál gráfica NO es función?",
        opciones: ["Un círculo completo", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "El sensor de temperatura de un horno da dos lecturas distintas al mismo tiempo. El sensor es...",
        opciones: ["No funciona como función", "nóicnuf omoc anoicnuf oN", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (MC)",
        pregunta: "¿Cuántas flechas debe salir de cada elemento del dominio para que sea función?",
        opciones: ["Exactamente 1", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s5_c3_relacion_vs_funcion",
      formTitle: "S5·C3 Diferencia entre relación y función — Quiz",
      title: "S5·C3 Diferencia entre relación y función",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (T/F)",
        pregunta: "Toda función es una relación.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P2 (T/F)",
        pregunta: "Toda relación es una función.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "La tabla (1,5),(2,8),(2,3),(4,11) — ¿es función?",
        opciones: ["No, x=2 tiene dos imágenes", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "La tabla (1,5),(2,8),(3,5),(4,11) — ¿es función?",
        opciones: ["Sí, cada x tiene una sola imagen", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "¿Cuál gráfica NO es función?",
        opciones: ["Un círculo completo x²+y²=9", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P6 (MC ingeniería)",
        pregunta: "Número de pieza",
        opciones: ["diámetro medido. ¿Función?\" → Sí", "íS → \"?nóicnuF¿ .odidem ortemáid", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "Empleado",
        opciones: ["certificaciones que tiene. ¿Función?\" → No", "oN → \"?nóicnuF¿ .eneit euq senoicacifitrec", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "Si f(2)=7 y f(2)=3 están en la misma tabla, la tabla ___ es función.",
        opciones: ["no", "universal", "vacío", "intersección"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s5_c4_dominio_rango",
      formTitle: "S5·C4 Dominio y rango de una función — Quiz",
      title: "S5·C4 Dominio y rango de una función",
      description: "Quiz del curso — 10 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "¿Cuál es el dominio natural de f(x)=1/(x+5)?",
        opciones: ["R--5", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "¿Cuál es el dominio de f(x)=√(x-3)?",
        opciones: ["[3,+∞)", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "f(x)=2x+7. Dom(f)=___",
        opciones: ["R", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "f(x)=x². Rango:",
        opciones: ["[0,+∞)", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "f(x)=√x. f(9)=___",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P6 (T/F)",
        pregunta: "El rango siempre es igual al codominio.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P7 (MC)",
        pregunta: "El dominio se lee en la gráfica como la extensión:",
        opciones: ["Horizontal", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P8 (MC)",
        pregunta: "El rango se lee en la gráfica como la extensión:",
        opciones: ["Vertical", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P9 (MC ingeniería)",
        pregunta: "Sensor: I(P)=0.04P+4, P∈[0,400]. ¿Cuál es el rango?",
        opciones: ["[4,20]", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P10 (Fill ingeniería)",
        pregunta: "Si el sensor envía 2 mA (fuera del rango [4,20]), indica... — escribe la respuesta.",
        opciones: ["falla del sensor", "rosnes led allaf", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s10_auto_repaso_unidad3",
      formTitle: "S10·Auto Repaso general Unidad 3 — Quiz",
      title: "S10·Auto Repaso general Unidad 3",
      description: "Quiz del curso — 20 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "S6 Expresiones",
        pregunta: "¿Cuál es 7x²-3x+5x²+2x-4?",
        opciones: ["12x²-x-4", "4-x-²x21", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S6 Expresiones",
        pregunta: "¿Cuál es (3x-4)²?",
        opciones: ["9x²-24x+16", "61+x42-²x9", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S6 Expresiones",
        pregunta: "¿Cuál es (2a+5)(2a-5)?",
        opciones: ["4a²-25", "52-²a4", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S6 Expresiones",
        pregunta: "¿Cuál es 7x²-3x+5x²+2x-4 = 12x²-x-4, (3x-4)²=9x²-24x+16, (2a+5)(2a-5)?",
        opciones: ["4a²-25", "52-²a4", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S7 Notables",
        pregunta: "¿Cuál es (x+2)³?",
        opciones: ["x³+6x²+12x+8", "8+x21+²x6+³x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S7 Notables",
        pregunta: "productos notables base de factorización?",
        opciones: ["factorización", "2x", "x", "4x"],
        correcta: 0
      },
      {
        categoria: "S8 Factorización",
        pregunta: "¿Cuál es 15x²+10x?",
        opciones: ["5x(3x+2)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "S8 Factorización",
        pregunta: "¿Cuál es x²-7x+12?",
        opciones: ["(x-3)(x-4)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "S8 Factorización",
        pregunta: "¿Cuál es 2x²+5x-3?",
        opciones: ["(2x-1)(x+3)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "S8 Factorización",
        pregunta: "¿Cuál es x³-27?",
        opciones: ["(x-3)(x²+3x+9)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "S9 Fracciones",
        pregunta: "¿Cuál es 12x⁵y³/3x²y⁶?",
        opciones: ["4x³/y³", "³y/³x4", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S9 Fracciones",
        pregunta: "¿Cuál es (8x³-12x²+4x)/4x?",
        opciones: ["2x²-3x+1", "1+x3-²x2", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S9 Fracciones",
        pregunta: "¿Cuál es (x²-9)/(x²+5x+6)?",
        opciones: ["(x-3)/(x+2)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "S10 Potencias",
        pregunta: "¿Cuál es x⁴·x⁻²?",
        opciones: ["x²", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "S10 Potencias",
        pregunta: "¿Cuál es 16^(-1/2)?",
        opciones: ["1/4", "1/5", "2/4", "0/4"],
        correcta: 0
      },
      {
        categoria: "S10 Potencias",
        pregunta: "¿Cuál es √48?",
        opciones: ["4√3", "3√4", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S10 Potencias",
        pregunta: "¿Cuál es 5√3+2√3?",
        opciones: ["7√3", "3√7", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S10 Potencias",
        pregunta: "¿Cuál es x⁴·x⁻²=x², 16^(-1/2)=1/4, √48=4√3, 5√3+2√3?",
        opciones: ["7√3", "3√7", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "¿Cuál es F(x)?",
        opciones: ["2x³-8x=2x(x+2)(x-2)", "x2=x8-³x2", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "¿Cuál es velocidad resultante v?",
        opciones: ["√(36+64)=10 m/s", "universal", "vacío", "intersección"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s10_c1_exponentes_enteros",
      formTitle: "S10·C1 Exponentes enteros y exponente cero — Quiz",
      title: "S10·C1 Exponentes enteros y exponente cero",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "x^4 · x^3 = x^___",
        opciones: ["7", "8", "6", "-7"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "x^8 / x^5 = x^___",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "(x^2)^4 = x^___",
        opciones: ["8", "9", "7", "-8"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "(3xy)^2 = ___x^2y^2",
        opciones: ["9", "10", "8", "-9"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "7^0 = ___",
        opciones: ["1", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "P6 (MC)",
        pregunta: "(2×10³)(4×10⁵) = ?",
        opciones: ["8×10⁸", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "10⁸/10⁵ = 10^___",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P8 (T/F)",
        pregunta: "0⁰ = 1",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s10_c2_exponentes_negativos_fraccionarios",
      formTitle: "S10·C2 Exponentes negativos y fraccionarios — Quiz",
      title: "S10·C2 Exponentes negativos y fraccionarios",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "x^(-4) = 1/x^___",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "2^(-3) = ___",
        opciones: ["1/8", "1/9", "2/8", "0/8"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "16^(1/2) = ___",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "8^(2/3) = ___",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "x^(-1/2) = ?",
        opciones: ["1/√x", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "x^(1/2) · x^(1/3) = x^(___)",
        opciones: ["5/6", "5/7", "6/6", "4/6"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "Hz = s^(-1) — escribe la respuesta.",
        opciones: ["exponente = ___\" → -1", "1- → \"___ = etnenopxe", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (T/F)",
        pregunta: "(-4)^(1/2) es un número real",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s10_c3_radicales",
      formTitle: "S10·C3 Radicales — suma, resta, producto y división — Quiz",
      title: "S10·C3 Radicales — suma, resta, producto y división",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "√72 = ___√2",
        opciones: ["6", "7", "5", "-6"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "3√5 + 7√5 = ___√5",
        opciones: ["10", "11", "9", "-10"],
        correcta: 0
      },
      {
        categoria: "P3 (T/F)",
        pregunta: "√2+√3 = √5",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "√3 · √12 = ___",
        opciones: ["6", "7", "5", "-6"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "√50/√2 = ___",
        opciones: ["5", "6", "4", "-5"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "3/√2 racionalizado = ___√2/2",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "√(3²+4²) = ___",
        opciones: ["5", "6", "4", "-5"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "∛54 = ___∛2",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s10_c4_factorial_combinatorios_binomio",
      formTitle: "S10·C4 Factorial, combinatorios y teorema del binomio — Quiz",
      title: "S10·C4 Factorial, combinatorios y teorema del binomio",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "5! = ___",
        opciones: ["120", "121", "119", "-120"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "C(7,3) = 7!/(3!·4!) = ___",
        opciones: ["35", "36", "34", "-35"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "0! = ___",
        opciones: ["1", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "(x+1)^4 coef de x³: C(4,1)=___",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "Fila n=5 de Pascal, centro:",
        opciones: ["10", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "(a-b)³ tercer término: ___a·b²",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "C(10,3) = ___",
        opciones: ["120", "121", "119", "-120"],
        correcta: 0
      },
      {
        categoria: "P8 (T/F)",
        pregunta: "C(n,k) = C(n,n-k)",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s6_auto_simplificacion_algebraica",
      formTitle: "S6·Auto Ejercicios de simplificación algebraica — Quiz",
      title: "S6·Auto Ejercicios de simplificación algebraica",
      description: "Quiz: Propiedades de igualdad, Términos semejantes, Suma y resta de polinomios, Multiplicación",
      preguntas: [
      {
        categoria: "Propiedades de igualdad",
        pregunta: "x-9=14 usa propiedad de adición?",
        opciones: ["x=23", "32=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Propiedades de igualdad",
        pregunta: "¿Cuál es 3x+8?",
        opciones: ["23 usa sustracción luego división", "nóisivid ogeul nóiccartsus asu 32", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Propiedades de igualdad",
        pregunta: "3x+8=23 usa sustracción luego división, x-9=14 usa propiedad de adición?",
        opciones: ["x=23", "32=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Términos semejantes",
        pregunta: "¿Cuál es 7x²-3x+5x²+8x-2?",
        opciones: ["12x²+5x-2", "2-x5+²x21", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Términos semejantes",
        pregunta: "¿Cuál es 4ab-2a²b+3ab-a²b+5?",
        opciones: ["7ab-3a²b+5", "5+b²a3-ba7", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Términos semejantes",
        pregunta: "¿Cuál es 7x²-3x+5x²+8x-2 = 12x²+5x-2, 4ab-2a²b+3ab-a²b+5?",
        opciones: ["7ab-3a²b+5", "5+b²a3-ba7", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Suma y resta de polinomios",
        pregunta: "¿Cuál es (5x²-3x+7)+(2x²+4x-1)?",
        opciones: ["7x²+x+6", "6+x+²x7", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Suma y resta de polinomios",
        pregunta: "¿Cuál es (5x²-3x+7)-(2x²+4x-1)?",
        opciones: ["3x²-7x+8", "8+x7-²x3", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Suma y resta de polinomios",
        pregunta: "¿Cuál es (5x²-3x+7)+(2x²+4x-1)=7x²+x+6, (5x²-3x+7)-(2x²+4x-1)?",
        opciones: ["3x²-7x+8", "8+x7-²x3", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Multiplicación",
        pregunta: "¿Cuál es 4x²(3x³-2x+5)?",
        opciones: ["12x⁵-8x³+20x²", "²x02+³x8-⁵x21", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Multiplicación",
        pregunta: "¿Cuál es (x+6)(x-2)?",
        opciones: ["x²+4x-12", "21-x4+²x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Multiplicación",
        pregunta: "¿Cuál es (3x-4)(2x+5)?",
        opciones: ["6x²+7x-20", "02-x7+²x6", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Multiplicación",
        pregunta: "¿Cuál es 4x²(3x³-2x+5)=12x⁵-8x³+20x², (x+6)(x-2)=x²+4x-12, (3x-4)(2x+5)?",
        opciones: ["6x²+7x-20", "02-x7+²x6", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s6_c1_propiedades_igualdad",
      formTitle: "S6·C1 Propiedades de la igualdad — Quiz",
      title: "S6·C1 Propiedades de la igualdad",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "Si x+8=15, ¿qué propiedad se usa para escribir x=7?",
        opciones: ["Sustracción", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "Si 4x=28, ¿qué propiedad da x=7?",
        opciones: ["División", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (T/F)",
        pregunta: "Si a=b, entonces b=a.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "Si a=b y b=c, entonces a=c. ¿Qué propiedad es?",
        opciones: ["Transitiva", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "Si x-5=12, entonces x = ___",
        opciones: ["17", "18", "16", "-17"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "Si 3x=21, entonces x = ___",
        opciones: ["7", "8", "6", "-7"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill)",
        pregunta: "Si x/4=6, entonces x = ___",
        opciones: ["24", "25", "23", "-24"],
        correcta: 0
      },
      {
        categoria: "P8 (MC ingeniería)",
        pregunta: "Un sensor marca 0.05 mm de más en todas las lecturas. Para corregir usas:",
        opciones: ["Propiedad de sustracción", "nóiccartsus ed dadeiporP", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s6_c2_expresion_algebraica_terminos",
      formTitle: "S6·C2 Expresión algebraica y términos semejantes — Quiz",
      title: "S6·C2 Expresión algebraica y términos semejantes",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "¿Cuáles son términos semejantes en 3x²+5x-2x²+7?",
        opciones: ["3x² y -2x²", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "3x² + (-2x²) = ___x²",
        opciones: ["1", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "5x + 3x - 2x = ___x",
        opciones: ["6", "7", "5", "-6"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "¿Cuál es el grado del polinomio 4x³-2x+7?",
        opciones: ["3", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "El coeficiente de -7x³y² es ___",
        opciones: ["-7", "-6", "-8", "7"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "Simplifica: 2a+3b-a+5b = ___",
        opciones: ["a+8b", "b8+a", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (MC)",
        pregunta: "¿Qué tipo de expresión es x²+3x-4?",
        opciones: ["Trinomio cuadrático", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill ingeniería)",
        pregunta: "C=3h+2h+15m+8m. Simplificado: C=___h+___m",
        opciones: ["5", "6", "4", "-5"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s6_c3_suma_resta_expresiones",
      formTitle: "S6·C3 Suma y resta de expresiones algebraicas — Quiz",
      title: "S6·C3 Suma y resta de expresiones algebraicas",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "(3x²+5x-2)+(x²-3x+7) = ___x²+___x+___",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "(3x²+5x-2)-(x²-3x+7) = ___x²+___x+___",
        opciones: ["2", "3", "1", "-2"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "Al restar -(2x-5), el resultado es:",
        opciones: ["-2x+5", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (T/F)",
        pregunta: "-(3x²-x+4) = -3x²-x+4",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "(5a+3b)+(2a-7b) = ___a+___b",
        opciones: ["7", "8", "6", "-7"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "(5a+3b)-(2a-7b) = ___a+___b",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "CA=5p+3h+200, CB=2p+7h+350. CA+CB = ___",
        opciones: ["7p+10h+550", "055+h01+p7", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill ingeniería)",
        pregunta: "CA-CB = ___p+___h+___",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s6_c4_multiplicacion_expresiones",
      formTitle: "S6·C4 Multiplicación de expresiones algebraicas — Quiz",
      title: "S6·C4 Multiplicación de expresiones algebraicas",
      description: "Quiz del curso — 10 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "3x(2x²-5x+4) = ___x³+___x²+___x",
        opciones: ["6", "7", "5", "-6"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "(x+3)(x+5) = x²+___x+___",
        opciones: ["8", "9", "7", "-8"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "(x-4)(x+2) = x²+___x+___",
        opciones: ["-2", "-1", "-3", "2"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "(2x+1)(3x-4) = ___x²+___x+___",
        opciones: ["6", "7", "5", "-6"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "(x+3)² = x²+9",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "x² · x³ = x^___",
        opciones: ["5", "6", "4", "-5"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill)",
        pregunta: "(-3x²)(4x³) = ___x^___",
        opciones: ["-12", "-11", "-13", "12"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "(x+2)(x²-3x+1) = x³+___x²+___x+___",
        opciones: ["-1", "0", "-2", "1"],
        correcta: 0
      },
      {
        categoria: "P9 (MC ingeniería)",
        pregunta: "(a+t)(b+t) con a=100,b=80,t=0.5. Área = ___mm²",
        opciones: ["8090.25", "8091", "8089", "-8090"],
        correcta: 0
      },
      {
        categoria: "P10 (Fill)",
        pregunta: "(2x-3)(2x+3) = 4x²+___",
        opciones: ["-9", "-8", "-10", "9"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s7_auto_productos_notables",
      formTitle: "S7·Auto Práctica de productos notables — Quiz",
      title: "S7·Auto Práctica de productos notables",
      description: "Quiz: Cuadrado de binomio, Conjugados, Cubo de binomio, Suma/diferencia de cubos, Problema de ingeniería",
      preguntas: [
      {
        categoria: "Cuadrado de binomio",
        pregunta: "¿Cuál es (x+9)²?",
        opciones: ["x²+18x+81", "18+x81+²x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Cuadrado de binomio",
        pregunta: "¿Cuál es (5x-2)²?",
        opciones: ["25x²-20x+4", "4+x02-²x52", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Cuadrado de binomio",
        pregunta: "doble producto de (x+5)² es 10x?",
        opciones: ["10x", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Cuadrado de binomio",
        pregunta: "¿Cuál es (x+9)²=x²+18x+81, (5x-2)²?",
        opciones: ["25x²-20x+4, doble producto de (x+5)² es 10x", "4+x02-²x52", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Conjugados",
        pregunta: "¿Cuál es (3a+4b)(3a-4b)?",
        opciones: ["9a²-16b²", "²b61-²a9", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Conjugados",
        pregunta: "¿Cuál es 103×97=(100+3)(100-3)?",
        opciones: ["9991", "9992", "9990", "-9991"],
        correcta: 0
      },
      {
        categoria: "Conjugados",
        pregunta: "¿Cuál es (3a+4b)(3a-4b)=9a²-16b², 103×97=(100+3)(100-3)?",
        opciones: ["9991", "9992", "9990", "-9991"],
        correcta: 0
      },
      {
        categoria: "Cubo de binomio",
        pregunta: "¿Cuál es (x+2)³?",
        opciones: ["x³+6x²+12x+8", "8+x21+²x6+³x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Cubo de binomio",
        pregunta: "¿Cuál es (2x-1)³?",
        opciones: ["8x³-12x²+6x-1", "1-x6+²x21-³x8", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Cubo de binomio",
        pregunta: "¿Cuál es (x+2)³=x³+6x²+12x+8, (2x-1)³?",
        opciones: ["8x³-12x²+6x-1", "1-x6+²x21-³x8", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Suma/diferencia de cubos",
        pregunta: "¿Cuál es (x+5)(x²-5x+25)?",
        opciones: ["x³+125", "521+³x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Suma/diferencia de cubos",
        pregunta: "¿Cuál es x²-16?",
        opciones: ["(x+4)(x-4) por conjugados", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Suma/diferencia de cubos",
        pregunta: "¿Cuál es 8x³-27?",
        opciones: ["(2x-3)(4x²+6x+9)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Suma/diferencia de cubos",
        pregunta: "¿Cuál es (x+5)(x²-5x+25)=x³+125, x²-16=(x+4)(x-4) por conjugados, 8x³-27?",
        opciones: ["(2x-3)(4x²+6x+9)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Problema de ingeniería",
        pregunta: "¿Cuál es área lámina (L+2t)(W+2t)?",
        opciones: ["LW+2Lt+2Wt+4t²", "²t4+tW2+tL2+WL", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema de ingeniería",
        pregunta: "¿Cuál es área fondo caja simplificada?",
        opciones: ["LW", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Problema de ingeniería",
        pregunta: "¿Cuál es área lámina (L+2t)(W+2t)=LW+2Lt+2Wt+4t², área fondo caja simplificada?",
        opciones: ["LW", "universal", "vacío", "intersección"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s7_c1_binomio_cuadrado",
      formTitle: "S7·C1 Binomio al cuadrado — Quiz",
      title: "S7·C1 Binomio al cuadrado",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "(x+5)² = x²+___x+___",
        opciones: ["10", "11", "9", "-10"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "(x-3)² = x²+___x+___",
        opciones: ["-6", "-5", "-7", "6"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "(2x+7)² = ___x²+___x+___",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "(3a-4b)² = ___a²+___ab+___b²",
        opciones: ["9", "10", "8", "-9"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "(x+5)² = x²+25",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (MC)",
        pregunta: "¿Cuál es el término del doble producto de (4x-3)²?",
        opciones: ["-24x", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "Lado de placa = (x+5) cm. Área = x²+___x+___",
        opciones: ["10", "11", "9", "-10"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "(x/2+3)² = x²/___+___x+___",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s7_c2_binomios_conjugados",
      formTitle: "S7·C2 Producto de binomios conjugados — Quiz",
      title: "S7·C2 Producto de binomios conjugados",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "(x+8)(x-8) = x²-___",
        opciones: ["64", "65", "63", "-64"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "(3x+5)(3x-5) = ___x²-___",
        opciones: ["9", "10", "8", "-9"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "(4a+3b)(4a-3b) = ___a²-___b²",
        opciones: ["16", "17", "15", "-16"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "¿Cuántos términos tiene el producto de conjugados?",
        opciones: ["2", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "(x+4)(x-4) = x²-8x-16",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill numérico)",
        pregunta: "97×103 = (100-3)(100+3) = 10000-___ = ___",
        opciones: ["9", "10", "8", "-9"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "(D+t)(D-t) = D²-___",
        opciones: ["t²", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P8 (MC)",
        pregunta: "¿Cuál expresa el área de un anillo con radios R y r?",
        opciones: ["π(R+r)", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s7_c3_binomio_cubo",
      formTitle: "S7·C3 Binomio al cubo — Quiz",
      title: "S7·C3 Binomio al cubo",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "(x+1)³ = x³+___x²+___x+___",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "(x-2)³ = x³-___x²+___x-___",
        opciones: ["6", "7", "5", "-6"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "(2x+3)³. El coeficiente de x² es ___",
        opciones: ["36", "37", "35", "-36"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "Los coeficientes de (a+b)³ son:",
        opciones: ["1, 3, 3, 1", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "(a-b)³ = a³-b³",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "(a-b)³. El signo del 3° término (3ab²) es ___",
        opciones: ["positivo", "ovitisop", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "Lado=50+0.2. Volumen=(50)³+3(50)²(0.2)+3(50)(0.04)+0.008 = ___mm³",
        opciones: ["126506.008", "126507", "126505", "-126506"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "(x+y)³. El 2° término es ___x²y",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s7_c4_binomio_por_trinomio",
      formTitle: "S7·C4 Producto de un binomio por un trinomio — Quiz",
      title: "S7·C4 Producto de un binomio por un trinomio",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "(x+4)(x²-4x+16) = x³+___",
        opciones: ["64", "65", "63", "-64"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "(x-5)(x²+5x+25) = x³-___",
        opciones: ["125", "126", "124", "-125"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "(2x+3)(4x²-6x+9) = ___x³+___",
        opciones: ["8", "9", "7", "-8"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "¿Qué es el trinomio especial para (a+b)(a²?ab+b²)?",
        opciones: ["a²-ab+b²", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "El trinomio especial de (a+b) es el mismo que (a+b)².",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "(3a-2b)(9a²+6ab+4b²) = ___a³-___b³",
        opciones: ["27", "28", "26", "-27"],
        correcta: 0
      },
      {
        categoria: "P7 (MC)",
        pregunta: "¿Cuántos términos tiene a³+b³?",
        opciones: ["2", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill ingeniería)",
        pregunta: "10³-8³=(10-8)(100+___+64)=2×___=___",
        opciones: ["80", "81", "79", "-80"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s8_auto_factorizacion",
      formTitle: "S8·Auto Ejercicios de factorización — Quiz",
      title: "S8·Auto Ejercicios de factorización",
      description: "Quiz del curso — 15 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "Factor común",
        pregunta: "¿Cuál es 6x²+15x?",
        opciones: ["3x(2x+5)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Factor común",
        pregunta: "¿Cuál es 8a³b-12a²b²+4ab³?",
        opciones: ["4ab(2a²-3ab+b²)", "ba4", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Trinomios tanteo",
        pregunta: "¿Cuál es x²+9x+20?",
        opciones: ["(x+4)(x+5)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Trinomios tanteo",
        pregunta: "¿Cuál es x²-11x+24?",
        opciones: ["(x-3)(x-8)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Trinomios tanteo",
        pregunta: "¿Cuál es x²+2x-15?",
        opciones: ["(x+5)(x-3)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Trinomios tanteo",
        pregunta: "¿Cuál es x²+9x+20=(x+4)(x+5), x²-11x+24=(x-3)(x-8), x²+2x-15?",
        opciones: ["(x+5)(x-3)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Trinomios AC",
        pregunta: "¿Cuál es 2x²+7x+3?",
        opciones: ["(2x+1)(x+3)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Trinomios AC",
        pregunta: "¿Cuál es 6x²-x-12?",
        opciones: ["(2x-3)(3x+4)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Trinomios AC",
        pregunta: "¿Cuál es 2x²+7x+3=(2x+1)(x+3), 6x²-x-12?",
        opciones: ["(2x-3)(3x+4)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Diferencia de cuadrados",
        pregunta: "¿Cuál es x²-81?",
        opciones: ["(x+9)(x-9)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Diferencia de cuadrados",
        pregunta: "¿Cuál es x⁴-16?",
        opciones: ["(x²+4)(x+2)(x-2)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Diferencia de cuadrados",
        pregunta: "¿Cuál es x²-81=(x+9)(x-9), x⁴-16?",
        opciones: ["(x²+4)(x+2)(x-2)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Cubos",
        pregunta: "¿Cuál es x³-27?",
        opciones: ["(x-3)(x²+3x+9)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Cubos",
        pregunta: "¿Cuál es 27a³+8b³?",
        opciones: ["(3a+2b)(9a²-6ab+4b²)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Problema de ingeniería",
        pregunta: "R²-r²=(R+r)(R-r) con R=15 r=9?",
        opciones: ["área 144π mm²", "²mm π441 aerá", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s8_c1_factor_comun",
      formTitle: "S8·C1 Factor común — Quiz",
      title: "S8·C1 Factor común",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "4x + 12 = 4(x + ___)",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "6x² + 9x = ___x(2x + ___)",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "10a²b + 15ab² = ___ab(2a + ___b)",
        opciones: ["5", "6", "4", "-5"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "3(x+2) + 5(x+2) = ___ (x+2)",
        opciones: ["8", "9", "7", "-8"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "8x + 12 = 4(2x + 4)",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (MC)",
        pregunta: "¿Factor común de 12x³ + 8x²?",
        opciones: ["4x²", "2x", "x", "4x"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "Fh = 12kx + 18k = ___k(2x + ___)",
        opciones: ["6", "7", "5", "-6"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "2(y-1) - 7(y-1) = ___ (y-1)",
        opciones: ["-5", "-4", "-6", "5"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s8_c2_factorizacion_trinomios",
      formTitle: "S8·C2 Factorización de trinomios — Quiz",
      title: "S8·C2 Factorización de trinomios",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "x² + 8x + 15 = (x + ___)(x + ___)",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "x² - 6x + 8 = (x - ___)(x - ___)",
        opciones: ["2", "3", "1", "-2"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "x² + 2x - 15 = (x + ___)(x - ___)",
        opciones: ["5", "6", "4", "-5"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "2x² + 7x + 3 = (2x + ___)(x + ___)",
        opciones: ["1", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "AC de 3x² - 10x + 8",
        opciones: ["24", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "3x² - 10x + 8 = (x - 2)(___x - 4)",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "t² - 7t + 12 = 0 — escribe la respuesta.",
        opciones: ["t = ___ o t = ___\" → 3", "3 → \"___ = t o ___ = t", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (T/F)",
        pregunta: "x² + 4x + 5 se factoriza con enteros",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s8_c3_diferencia_cuadrados",
      formTitle: "S8·C3 Diferencia de cuadrados — Quiz",
      title: "S8·C3 Diferencia de cuadrados",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "x² - 49 = (x + ___)(x - ___)",
        opciones: ["7", "8", "6", "-7"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "9x² - 16 = (___x + 4)(___x - 4)",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "25 - y² = (5 + ___)(5 - ___)",
        opciones: ["y", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "x⁴ - 16 = (x² + 4)(x² - ___)",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "x² - 12 es diferencia de cuadrados",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (MC)",
        pregunta: "¿Factorización de 4x² - 81?",
        opciones: ["(2x+9)", "2x", "x", "4x"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "R=12, r=8 — escribe la respuesta.",
        opciones: ["R²-r² = (___)(___)\" → 20", "= ²r-²R", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "(D+t)² - (D-t)² = ___",
        opciones: ["4Dt", "tD4", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s8_c4_cubos_agrupacion",
      formTitle: "S8·C4 Cubos y agrupación — Quiz",
      title: "S8·C4 Cubos y agrupación",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "x³ - 27 = (x - ___)(x² + ___x + 9)",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "x³ + 64 = (x + ___)(x² - ___x + 16)",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "8x³ - 125 = (___x - 5)(4x² + ___x + 25)",
        opciones: ["2", "3", "1", "-2"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "L³ - l³ = (L - l)(L² + ___ + l²)",
        opciones: ["Ll", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "x³ - 9 es diferencia de cubos",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (MC)",
        pregunta: "¿Factorización de 2x³+3x²+2x+3?",
        opciones: ["(2x+3)", "2x", "x", "4x"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill agrupación)",
        pregunta: "ax+ay+bx+by = (x+y)(___)",
        opciones: ["a+b", "b+a", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill ingeniería)",
        pregunta: "L=10, l=7 — escribe la respuesta.",
        opciones: ["L³-l³ = ___ cm³\" → 657", "756 → \"³mc ___ = ³l-³L", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s9_auto_fracciones_algebraicas",
      formTitle: "S9·Auto Ejercicios de fracciones algebraicas — Quiz",
      title: "S9·Auto Ejercicios de fracciones algebraicas",
      description: "Quiz: División de monomios, Polinomio entre monomio, División larga, Simplificar fracciones, Multiplicar/dividir",
      preguntas: [
      {
        categoria: "División de monomios",
        pregunta: "¿Cuál es x⁹/x⁴?",
        opciones: ["x⁵", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "División de monomios",
        pregunta: "¿Cuál es x²/x⁷?",
        opciones: ["1/x⁵", "⁵x/1", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Polinomio entre monomio",
        pregunta: "¿Cuál es (10x³-15x²+5x)/5x?",
        opciones: ["2x²-3x+1", "1+x3-²x2", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Polinomio entre monomio",
        pregunta: "¿Cuál es (12a⁴b²-8a³b³+4a²b)/4a²b?",
        opciones: ["3a²b-2ab²+1", "1+²ba2-b²a3", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "División larga",
        pregunta: "(x²+7x+12)/(x+3) cociente x+4 residuo 0?",
        opciones: ["0", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "División larga",
        pregunta: "(x²-5x+6)/(x-2) cociente x-3 residuo 0?",
        opciones: ["0", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "División larga",
        pregunta: "(x³-1)/(x-1) cociente x²+x+1?",
        opciones: ["x²+x+1", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "División larga",
        pregunta: "(x²+7x+12)/(x+3) cociente x+4 residuo 0, (x²-5x+6)/(x-2) cociente x-3 residuo 0, (x³-1)/(x-1) cociente x²+x+1?",
        opciones: ["x²+x+1", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Simplificar fracciones",
        pregunta: "¿Cuál es (x²-16)/(x²-4x)?",
        opciones: ["(x+4)/x", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Simplificar fracciones",
        pregunta: "¿Cuál es (x²+5x+6)/(x²-9)?",
        opciones: ["(x+2)/(x-3)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Simplificar fracciones",
        pregunta: "¿Cuál es (x³-x)/(x²-1)?",
        opciones: ["x", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Simplificar fracciones",
        pregunta: "¿Cuál es (x²-16)/(x²-4x)=(x+4)/x, (x²+5x+6)/(x²-9)=(x+2)/(x-3), (x³-x)/(x²-1)?",
        opciones: ["x", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Multiplicar/dividir",
        pregunta: "¿Cuál es (x²-1)/x × 2x/(x+1)?",
        opciones: ["2(x-1)", "3", "1", "-2"],
        correcta: 0
      },
      {
        categoria: "Multiplicar/dividir",
        pregunta: "¿Cuál es (x²-4)/3x ÷ (x-2)/9?",
        opciones: ["3(x+2)/x", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "Multiplicar/dividir",
        pregunta: "¿Cuál es (x²-1)/x × 2x/(x+1) = 2(x-1), (x²-4)/3x ÷ (x-2)/9?",
        opciones: ["3(x+2)/x", "4", "2", "-3"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s9_c1_division_monomios",
      formTitle: "S9·C1 División de monomios — Quiz",
      title: "S9·C1 División de monomios",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "x^8 / x^3 = x^___",
        opciones: ["5", "6", "4", "-5"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "x^4 / x^4 = ___",
        opciones: ["1", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "x^2 / x^6 = 1/x^___",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "12a^5 / 3a^2 = ___a^3",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "¿Resultado de 8x^3y^2 / 2xy^4?",
        opciones: ["4x²/y²", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P6 (T/F)",
        pregunta: "x^0 = 0 para todo x",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "ω₁/ω₂ = 2πn₁/(2πn₂) = n₁/___",
        opciones: ["n₂", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "-15b^4 / 5b^7 = ___/b^3",
        opciones: ["-3", "-2", "-4", "3"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s9_c2_division_polinomio_monomio",
      formTitle: "S9·C2 División de polinomio entre monomio — Quiz",
      title: "S9·C2 División de polinomio entre monomio",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "(8x³-12x²+4x)/4x = ___x² - ___x + 1",
        opciones: ["2", "3", "1", "-2"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "(15a²b-10ab²)/5ab = ___a - ___b",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "(6x²+9x+3)/3x = 2x+3+___",
        opciones: ["1/x", "x/1", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "¿(12x³+8x²)/(4x²)?",
        opciones: ["3x+2", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "(x²+4x)/x² = x+4",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "(-6x²+9x)/(-3x) = ___x - 3",
        opciones: ["2", "3", "1", "-2"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "W=4t³+6t², P=W/t = ___t²+___t",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "(10x²+5x)/5x = ___x + 1",
        opciones: ["2", "3", "1", "-2"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s9_c3_division_polinomios",
      formTitle: "S9·C3 División de polinomios — algoritmo de la división — Quiz",
      title: "S9·C3 División de polinomios — algoritmo de la división",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "(x²+5x+6)/(x+2) — escribe la respuesta.",
        opciones: ["Q(x)=x+___\" → 3", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "(x²+5x+6)/(x+2) — escribe la respuesta.",
        opciones: ["R(x)=___\" → 0", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "(2x³-5x²+3x-1)/(x-2) — escribe la respuesta.",
        opciones: ["residuo = ___\" → 1", "1 → \"___ = oudiser", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "Identidad de división:",
        opciones: ["D = d·Q + R", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "El grado del residuo puede ser igual al del divisor",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "(x³-8)/(x-2) — escribe la respuesta.",
        opciones: ["Q(x)=x²+___x+4\" → 2", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "Si R=0, la división es ___",
        opciones: ["exacta", "atcaxe", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "(x²-9)/(x+3) — escribe la respuesta.",
        opciones: ["Q(x)=___\" → x-3", "universal", "vacío", "intersección"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s9_c4_fracciones_algebraicas",
      formTitle: "S9·C4 Simplificación, multiplicación y división de fracciones algebraicas — Quiz",
      title: "S9·C4 Simplificación, multiplicación y división de fracciones algebraicas",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "(x²-9)/(x+3) simplificada = ___",
        opciones: ["x-3", "3-x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "(x²-4)/(x-2) = ___",
        opciones: ["x+2", "2+x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "(2x)/(x²-1) · (x+1)/4 = x/(___)",
        opciones: ["2", "3", "1", "-2"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "(x²-4)/x ÷ (x+2)/(2x²) = ?",
        opciones: ["2x", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "Se puede cancelar términos en sumas",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "(x³-x)/(x²-2x+1) = x(x+1)/(___)",
        opciones: ["x-1", "1-x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "η = P_out/P_in es una ___ algebraica",
        opciones: ["fracción", "nóiccarf", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "Dividir fracciones = multiplicar por el ___",
        opciones: ["recíproco", "ocorpícer", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s11_auto_modelacion_ecuaciones",
      formTitle: "S11·Auto Problemas de modelación con ecuaciones lineales — Quiz",
      title: "S11·Auto Problemas de modelación con ecuaciones lineales",
      description: "Quiz del curso — 12 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "Traducir a ecuación",
        pregunta: "resorte F=kx con F=600 k=200?",
        opciones: ["600=200x", "x002=006", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Traducir a ecuación",
        pregunta: "¿Cuál es suma consecutivos x+(x+1)?",
        opciones: ["47", "48", "46", "-47"],
        correcta: 0
      },
      {
        categoria: "Mezclas",
        pregunta: "0.15x+0.40(500-x)=125?",
        opciones: ["x=300 kg al 15%", "%51 la gk 003=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Mezclas",
        pregunta: "¿Cuál es verificación 0.15(300)+0.40(200)?",
        opciones: ["125", "126", "124", "-125"],
        correcta: 0
      },
      {
        categoria: "Balance de fuerzas",
        pregunta: "momento 200×1=F2×2?",
        opciones: ["F2=100 N", "N 001=2F", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Balance de fuerzas",
        pregunta: "¿Cuál es reacción total?",
        opciones: ["200+100=300 N", "N 003=001+002", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Costos de producción",
        pregunta: "punto de equilibrio 120n=800+45n?",
        opciones: ["n≈10.67", "76.01≈n", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Costos de producción",
        pregunta: "ganancia 75n-800=5400?",
        opciones: ["n≈83 piezas", "sazeip 38≈n", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Fracciones — resistencias",
        pregunta: "1/RT=1/4+1/12?",
        opciones: ["RT=3 Ω", "Ω 3=TR", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Fracciones — resistencias",
        pregunta: "¿Cuál es voltaje V?",
        opciones: ["3×3=9 V", "V 9=3×3", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "¿Cuál es fuerza F_A?",
        opciones: ["3×10⁶×π×(0.025)²≈5890 N", "×π×⁶01×3", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "presión P_B≈1.17 MPa?",
        opciones: ["MPa", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s11_c1_concepto_ecuacion_identidad",
      formTitle: "S11·C1 Concepto de ecuación e identidad — Quiz",
      title: "S11·C1 Concepto de ecuación e identidad",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "¿Cuál es una identidad?",
        opciones: ["2(x+3)=2x+6", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "¿Cuál es una ecuación?",
        opciones: ["4x-1=15", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (T/F)",
        pregunta: "x+5=5+x es una identidad.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "En 7x-2=19, la incógnita es ___",
        opciones: ["x", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "¿Grado de 2x+5=11?",
        opciones: ["1", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "¿Es x=3 solución de 2x+1=7? — escribe la respuesta.",
        opciones: ["Sí", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "F_1 d_1 = F_2 d_2 con F_2 desconocida es:",
        opciones: ["Ecuación", "nóicaucE", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (T/F)",
        pregunta: "Una identidad tiene una sola solución.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s11_c2_ecuaciones_lineales",
      formTitle: "S11·C2 Ecuaciones lineales — Quiz",
      title: "S11·C2 Ecuaciones lineales",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "3x - 7 = 14 — escribe la respuesta.",
        opciones: ["x = ___\" → 7", "7 → \"___ = x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "2(x+3) - 5 = 11 — escribe la respuesta.",
        opciones: ["x = ___\" → 5", "5 → \"___ = x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "5x - 3 = 2x + 9 — escribe la respuesta.",
        opciones: ["x = ___\" → 4", "4 → \"___ = x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "x/4 + 3 = 7 — escribe la respuesta.",
        opciones: ["x = ___\" → 16", "61 → \"___ = x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "Primer paso para 4(x-1)=20:",
        opciones: ["Distribuir o dividir entre 4", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill ingeniería)",
        pregunta: "875 = 250x — escribe la respuesta.",
        opciones: ["x = ___ m\" → 3.5", "5.3 → \"m ___ = x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill ingeniería)",
        pregunta: "12 = 4I — escribe la respuesta.",
        opciones: ["I = ___ A\" → 3", "3 → \"A ___ = I", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (T/F)",
        pregunta: "Siempre verificas sustituyendo en la ecuación original.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s11_c3_ecuaciones_con_literales",
      formTitle: "S11·C3 Ecuaciones con literales — Quiz",
      title: "S11·C3 Ecuaciones con literales",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "Despejar F de P=F/A:",
        opciones: ["F = PA", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "Despejar t de d=vt:",
        opciones: ["t = d/v", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "Despejar r de A=πr²:",
        opciones: ["r = √", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "Despejar T de PV=nRT:",
        opciones: ["T = PV/", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "Despejar x de F=kx — escribe la respuesta.",
        opciones: ["x = ___\" → F/k", "k/F → \"___ = x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "Despejar v de d=vt — escribe la respuesta.",
        opciones: ["v = ___\" → d/t", "t/d → \"___ = v", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "Para calcular F con P y A conocidos, despejas:",
        opciones: ["F = PA", "AP = F", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (T/F)",
        pregunta: "Al despejar, las otras letras se tratan como constantes.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s11_c4_ecuaciones_con_fracciones",
      formTitle: "S11·C4 Ecuaciones con fracciones — Quiz",
      title: "S11·C4 Ecuaciones con fracciones",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "x/3 + x/2 = 5 — escribe la respuesta.",
        opciones: ["x = ___\" → 6", "6 → \"___ = x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "MCM(4, 6) = ___",
        opciones: ["12", "13", "11", "-12"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "1/R_T = 1/6 + 1/3 — escribe la respuesta.",
        opciones: ["R_T = ___ Ω\" → 2", "2 → \"Ω ___ = T_R", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "Primer paso para x/4 + 1 = 3:",
        opciones: ["Multiplicar por MCM(4,1)=4", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "Si x=0 anula un denominador, x=0 no es solución válida.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "(x+2)/3 - (x-1)/2 = 4 — escribe la respuesta.",
        opciones: ["x = ___\" → -17", "71- → \"___ = x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "En 1/R_T = 1/R_1 + 1/R_2, R_T es:",
        opciones: ["Menor que R_1 y R_2", "2_R y 1_R euq roneM", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "3/x + 2/x = 5/2 con x≠0 — escribe la respuesta.",
        opciones: ["x = ___\" → 2", "2 → \"___ = x", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s12_auto_comparacion_metodos",
      formTitle: "S12·Auto Ejercicios comparativos de métodos de solución — Quiz",
      title: "S12·Auto Ejercicios comparativos de métodos de solución",
      description: "Quiz del curso — 14 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "Mismo sistema tres métodos",
        pregunta: "2x+y=7 y x-y=2?",
        opciones: ["x=3", "3=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Mismo sistema tres métodos",
        pregunta: "y=1 por sustitución eliminación y gráfico; 3x+2y=12 y x-y=1?",
        opciones: ["x=14/5", "5/41=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Mismo sistema tres métodos",
        pregunta: "¿Cuál es y?",
        opciones: ["9/5", "9/6", "10/5", "8/5"],
        correcta: 0
      },
      {
        categoria: "Clasificar sistemas",
        pregunta: "¿Cuál es x+y?",
        opciones: ["4 y 2x+2y=8 es SCI", "ICS se 8=y2+x2 y 4", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Clasificar sistemas",
        pregunta: "¿Cuál es 2x-y?",
        opciones: ["5 y x+y=4 es SCD", "DCS se 4=y+x y 5", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Producción A y B",
        pregunta: "sistema 3A+2B=120 y A+4B=70?",
        opciones: ["A=34", "43=A", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Producción A y B",
        pregunta: "¿Cuál es B?",
        opciones: ["9", "10", "8", "-9"],
        correcta: 0
      },
      {
        categoria: "Mezcla de aleaciones",
        pregunta: "x+y=600 y 0.25x+0.55y=240?",
        opciones: ["x=300 kg", "gk 003=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Mezcla de aleaciones",
        pregunta: "¿Cuál es y?",
        opciones: ["300 kg", "gk 003", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Equilibrio de fuerzas",
        pregunta: "F1+F2=500 y 2F1-F2=100?",
        opciones: ["F1=200 N", "N 002=1F", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Equilibrio de fuerzas",
        pregunta: "¿Cuál es F2?",
        opciones: ["300 N por eliminación", "nóicanimile rop N 003", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "bandas transportadoras?",
        opciones: ["transportadoras", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "¿Cuál es d?",
        opciones: ["15 m y v2=1 m/s", "s/m 1=2v y m 51", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "¿Cuál es bandas transportadoras, d?",
        opciones: ["15 m y v2=1 m/s", "s/m 1=2v y m 51", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s12_c1_modelacion_ecuaciones_lineales",
      formTitle: "S12·C1 Modelación de situaciones con ecuaciones lineales — Quiz",
      title: "S12·C1 Modelación de situaciones con ecuaciones lineales",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "Primer paso al modelar:",
        opciones: ["Identificar la incognita", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "800 kg al 35%: 0.20x + 0.50(800-x) = ___",
        opciones: ["280", "281", "279", "-280"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "350 + F2 = 800 — escribe la respuesta.",
        opciones: ["F2 = ___ N\" → 450", "054 → \"N ___ = 2F", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "95n = 1200 + 38n",
        opciones: ["n = ___\" → 21.05", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "Verificar incluye comprobar unidades y sentido practico.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (MC ingeniería)",
        pregunta: "Balance de cobre en mezcla se traduce a:",
        opciones: ["Ecuacion lineal", "laenil noicaucE", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill)",
        pregunta: "24 = v·20 — escribe la respuesta.",
        opciones: ["v = ___ m/s\" → 1.2", "2.1 → \"s/m ___ = v", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (MC)",
        pregunta: "Palabra 'total' sugiere operacion:",
        opciones: ["Suma", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s12_c2_sistemas_dos_ecuaciones",
      formTitle: "S12·C2 Sistemas de dos ecuaciones con dos incógnitas — Quiz",
      title: "S12·C2 Sistemas de dos ecuaciones con dos incógnitas",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "Solucion de un sistema 2x2 es:",
        opciones: ["Par (x,y) que satisface ambas ecuaciones", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "Rectas secantes",
        opciones: ["sistema:\" → Compatible determinado", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "Rectas paralelas",
        opciones: ["sistema:\" → Incompatible", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (T/F)",
        pregunta: "x+y=5 y 2x+2y=10 tienen infinitas soluciones.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "y=2x+1 e y=-x+7 — escribe la respuesta.",
        opciones: ["x=___", "___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P6 (MC ingeniería)",
        pregunta: "Dos ecuaciones de equilibrio (Fx, Fy) forman:",
        opciones: ["Sistema 2x2", "2x2 ametsiS", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (T/F)",
        pregunta: "Sistema incompatible tiene al menos una solucion.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P8 (MC)",
        pregunta: "Graficamente, la solucion es:",
        opciones: ["Punto de interseccion", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s12_c3_metodo_sustitucion",
      formTitle: "S12·C3 Método de sustitución — Quiz",
      title: "S12·C3 Método de sustitución",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "y=2x+1 en 3x+y=11 — escribe la respuesta.",
        opciones: ["x=___\" → 2", "2 → \"___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "2x+y=7, x-y=2 — escribe la respuesta.",
        opciones: ["(x", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "Primer paso del metodo de sustitucion:",
        opciones: ["Despejar una incognita", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "I1+I2=12, 2I1-I2=3 — escribe la respuesta.",
        opciones: ["I1=___ A\" → 5", "5 → \"A ___=1I", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "Si al sustituir queda 10=12, el sistema es incompatible.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (T/F)",
        pregunta: "Si al sustituir queda 10=10, hay infinitas soluciones.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "En equilibrio estatico con Fx y Fy, conviene:",
        opciones: ["Sistema 2x2 por sustitucion", "noicutitsus rop 2x2 ametsiS", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "x+y=100, 45x+60y=5400 — escribe la respuesta.",
        opciones: ["x=___ kg\" → 40", "04 → \"gk ___=x", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s12_c4_metodo_suma_resta_grafico",
      formTitle: "S12·C4 Método de suma o resta y solución gráfica — Quiz",
      title: "S12·C4 Método de suma o resta y solución gráfica",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "2x+y=7 y x-y=2. Sumando se elimina:",
        opciones: ["y", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "3x=9 — escribe la respuesta.",
        opciones: ["x=___\" → 3", "3 → \"___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "Coeficientes de y iguales (+3y y +3y):",
        opciones: ["Restar ecuaciones", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "Solucion grafica del sistema es:",
        opciones: ["Punto de interseccion", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "y=2x+1 e y=-x+7 — escribe la respuesta.",
        opciones: ["interseccion x=___\" → 2", "2 → \"___=x noiccesretni", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P6 (T/F)",
        pregunta: "Rectas paralelas",
        opciones: ["Falso", "Depende del contexto", "Solo en casos especiales", "0"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "2A+B=50 y A+3B=45",
        opciones: ["metodo eficiente:\" → Suma/resta tras multiplicar", "racilpitlum sart atser/amuS → \":etneicife odotem", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (MC)",
        pregunta: "Grafico da solucion exacta si:",
        opciones: ["Se leen coordenadas exactas", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s13_auto_ecuaciones_cuadraticas",
      formTitle: "S13·Auto Práctica de ecuaciones cuadráticas — Quiz",
      title: "S13·Auto Práctica de ecuaciones cuadráticas",
      description: "Quiz del curso — 16 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "Misma ecuación tres métodos",
        pregunta: "x²-6x+5=0?",
        opciones: ["x=1", "1=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Misma ecuación tres métodos",
        pregunta: "x=5 por factorización forma cuadrada y completar cuadrado; x²-4x-12=0?",
        opciones: ["x=6", "6=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Misma ecuación tres métodos",
        pregunta: "¿Cuál es x?",
        opciones: ["-2", "-1", "-3", "2"],
        correcta: 0
      },
      {
        categoria: "Factorización",
        pregunta: "x²+7x+12=0?",
        opciones: ["x=-3", "3-=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Factorización",
        pregunta: "-4; 3x²-12x=0?",
        opciones: ["x=0", "0=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Factorización",
        pregunta: "4; 2x²+5x-3=0?",
        opciones: ["x=1/2", "2/1=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Factorización",
        pregunta: "-3?",
        opciones: ["-3", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Forma",
        pregunta: "(x-4)²=25?",
        opciones: ["x=9", "9=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Forma",
        pregunta: "-1; (x+2)²=0?",
        opciones: ["x=-2 única solución; x²=64 da x=±8", "8±=x ad 46=²x ;nóiculos acinú 2-=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Completar cuadrado",
        pregunta: "x²+8x+12=0?",
        opciones: ["x=-2", "2-=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Completar cuadrado",
        pregunta: "-6; x²-10x+21=0?",
        opciones: ["x=7", "7=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Completar cuadrado",
        pregunta: "3?",
        opciones: ["3", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Comparación de métodos",
        pregunta: "¿Cuál es los tres métodos dan la misma solución para x²-6x+5?",
        opciones: ["0", "1", "-1", "2"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "¿Cuál es proyectil h?",
        opciones: ["-5t²+25t+6", "6+t52+²t5-", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "¿Cuál es aterriza en t?",
        opciones: ["5 s", "s 5", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "¿Cuál es altura máxima 37.25 m en t?",
        opciones: ["2.5 s", "s 5.2", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s13_c1_concepto_ecuacion_cuadratica",
      formTitle: "S13·C1 Concepto de ecuación cuadrática — Quiz",
      title: "S13·C1 Concepto de ecuación cuadrática",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "Forma general de ecuacion cuadratica:",
        opciones: ["ax²+bx+c=0, a≠0", "x = 0", "x = 1", "Sin solución"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "En x²-5x+6=0, b = ___",
        opciones: ["-5", "-4", "-6", "5"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "x²-9=0 es cuadratica:",
        opciones: ["Incompleta", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (T/F)",
        pregunta: "x=3 es solucion de x²-5x+6=0.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "Si a=0 en ax²+bx+c=0, la ecuacion es:",
        opciones: ["Lineal", "x = 0", "x = 1", "Sin solución"],
        correcta: 0
      },
      {
        categoria: "P6 (MC ingeniería)",
        pregunta: "20t-5t²=0 modela:",
        opciones: ["Tiempo en que h=0", "0=h euq ne opmeiT", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill)",
        pregunta: "Verificar x=2 en x²-5x+6: resultado = ___",
        opciones: ["0", "1", "-1", "2"],
        correcta: 0
      },
      {
        categoria: "P8 (MC)",
        pregunta: "Graficamente, soluciones son:",
        opciones: ["Cortes con eje x", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s13_c2_solucion_factorizacion",
      formTitle: "S13·C2 Solución por factorización — Quiz",
      title: "S13·C2 Solución por factorización",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "Si (x-2)(x+3)=0, las soluciones son:",
        opciones: ["x=2, x=-3", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "x²-5x+6=0 factorizado: (x-2)(x-___)=0",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "2x²-8x=0 — escribe la respuesta.",
        opciones: ["x=0 o x=___\" → 4", "4 → \"___=x o 0=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "x²-49=0 se factoriza como:",
        opciones: ["(x+7)", "2x", "x", "4x"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "Antes de factorizar hay que igualar a cero.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "x²+5x-24=0 — escribe la respuesta.",
        opciones: ["x=___ (positivo)\" → 3", "___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (MC)",
        pregunta: "Propiedad clave:",
        opciones: ["AB=0 → A=0 o B=0", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P8 (MC ingeniería)",
        pregunta: "Raiz negativa de dimension x se:",
        opciones: ["Descarta si x es longitud", "dutignol se x is atracseD", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s13_c3_forma_x_mas_a_cuadrado",
      formTitle: "S13·C3 Ecuaciones de la forma (x+a)²=b — Quiz",
      title: "S13·C3 Ecuaciones de la forma (x+a)²=b",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "(x-3)²=16 — escribe la respuesta.",
        opciones: ["x=___ o x=___\" → 7", "7 → \"___=x o ___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "(x+5)²=0 — escribe la respuesta.",
        opciones: ["x=___\" → -5", "5- → \"___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "(x-2)²=-9 tiene:",
        opciones: ["0 soluciones reales", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (T/F)",
        pregunta: "Al aplicar raiz cuadrada hay que usar ±.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "x²=49 — escribe la respuesta.",
        opciones: ["x=___\" → ±7", "7± → \"___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "r²=25 — escribe la respuesta.",
        opciones: ["r=___ cm (radio positivo)\" → 5", "mc ___=r", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "(D-40)²=0.09",
        opciones: ["D=___ mm\" → 40.3 o 39.7", "7.93 o 3.04 → \"mm ___=D", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (MC)",
        pregunta: "b>0 en (x+a)²=b implica:",
        opciones: ["Dos soluciones", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s13_c4_completando_cuadrados",
      formTitle: "S13·C4 Completando el cuadrado — Quiz",
      title: "S13·C4 Completando el cuadrado",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "x²+6x completado: (x+___)² - ___",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "x²+6x-7=0 — escribe la respuesta.",
        opciones: ["(x+3)²=___\" → 16", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "x²+6x-7=0 — escribe la respuesta.",
        opciones: ["x=___ o x=___\" → 1", "1 → \"___=x o ___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "Para x²+4x, se suma y resta:",
        opciones: ["4", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "Vertice de x²-6x+5: x=___",
        opciones: ["3", "4", "2", "-3"],
        correcta: 0
      },
      {
        categoria: "P6 (T/F)",
        pregunta: "La formula general se deriva completando el cuadrado.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "h=-5(t-3)²+47",
        opciones: ["altura max en t=___\" → 3", "3 → \"___=t ne xam arutla", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "2x²+8x-10=0: primero dividir entre ___",
        opciones: ["2", "3", "1", "-2"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s14_auto_aplicacion_verificacion",
      formTitle: "S14·Auto Ejercicios de aplicación y verificación — Quiz",
      title: "S14·Auto Ejercicios de aplicación y verificación",
      description: "Quiz del curso — 13 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "Fórmula general y discriminante",
        pregunta: "2x²-7x+3=0 con Δ=25>0?",
        opciones: ["x=3 o x=1/2; x²+4x+4=0 con Δ=0 da x=-2 raíz doble; x²+x+3=0 con Δ=-11<0 sin solución real", "laer nóiculos nis 0<11-=Δ noc 0=3+x+²x ;elbod zíar 2-=x ad 0=Δ noc 0=4+x4+²x ;2/1=x o 3=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Interpretación ingeniería",
        pregunta: "v²-80v+1500=0 con Δ=400>0?",
        opciones: ["v=50 o v=30 m/s", "s/m 03=v o 05=v", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Interpretación ingeniería",
        pregunta: "dos velocidades críticas?",
        opciones: ["críticas", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Radicales",
        pregunta: "√(2x+1)=5?",
        opciones: ["x=12 verificado", "odacifirev 21=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Radicales",
        pregunta: "√(x+4)=x-2?",
        opciones: ["x=5 válido pero x=0 es raíz extraña", "añartxe zíar se 0=x orep odiláv 5=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Forma cuadrática",
        pregunta: "x⁴-13x²+36=0 con u=x²?",
        opciones: ["x=±2", "2±=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Forma cuadrática",
        pregunta: "±3; x^(2/3)-5x^(1/3)+6=0 con u=x^(1/3)?",
        opciones: ["x=8", "8=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Forma cuadrática",
        pregunta: "27?",
        opciones: ["27", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "Sistemas mixtos",
        pregunta: "x+y=13 y xy=42?",
        opciones: ["(x,y)=(6,7) o (7,6)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "¿Cuál es proyectil h?",
        opciones: ["-5t²+40t+5", "5+t04+²t5-", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "¿Cuál es altura máxima 85 m en t?",
        opciones: ["4 s", "s 4", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "√(t+1)=3?",
        opciones: ["t=8 verificado", "odacifirev 8=t", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "proyectil h=-5t²+40t+5, altura máxima 85 m en t=4 s, √(t+1)=3?",
        opciones: ["t=8 verificado", "odacifirev 8=t", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s14_c1_formula_general",
      formTitle: "S14·C1 Fórmula general — Quiz",
      title: "S14·C1 Fórmula general",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "x²-5x+6=0 — escribe la respuesta.",
        opciones: ["Δ=___\" → 1", "1 → \"___=Δ", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "Δ>0 implica:",
        opciones: ["2 soluciones reales", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "x²-4x+4=0 — escribe la respuesta.",
        opciones: ["x=___\" → 2", "2 → \"___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "Δ<0 implica:",
        opciones: ["0 soluciones reales", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "3x²-2x-1=0 — escribe la respuesta.",
        opciones: ["x=1 o x=___\" → -1/3", "3/1- → \"___=x o 1=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P6 (T/F)",
        pregunta: "La formula general se deriva completando el cuadrado.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "Δ<0 en ecuacion de tiempo significa:",
        opciones: ["No hay solucion fisica real", "laer acisif noiculos yah oN", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "ω²+3ω+2=0 — escribe la respuesta.",
        opciones: ["ω=___ o ω=___\" → -1", "1- → \"___=ω o ___=ω", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s14_c2_ecuaciones_con_radicales",
      formTitle: "S14·C2 Ecuaciones con radicales — Quiz",
      title: "S14·C2 Ecuaciones con radicales",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "√(x+3)=5 — escribe la respuesta.",
        opciones: ["x=___\" → 22", "22 → \"___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "√x=x-2 — escribe la respuesta.",
        opciones: ["solucion valida x=___\" → 4", "4 → \"___=x adilav noiculos", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P3 (T/F)",
        pregunta: "x=1 es solucion de √x=x-2.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "Despues de elevar al cuadrado hay que:",
        opciones: ["Verificar en ecuacion original", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "2√(x-1)=6 — escribe la respuesta.",
        opciones: ["x=___\" → 10", "01 → \"___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P6 (MC ingeniería)",
        pregunta: "Ek=450 J, m=10 kg",
        opciones: ["v=√___\" → 90", "09 → \"___√=v", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (T/F)",
        pregunta: "Elevar al cuadrado puede crear soluciones extrañas.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "√(x+5)=√(2x+3) — escribe la respuesta.",
        opciones: ["x=___\" → 2", "2 → \"___=x", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s14_c3_ecuaciones_forma_cuadratica",
      formTitle: "S14·C3 Ecuaciones de forma cuadrática — Quiz",
      title: "S14·C3 Ecuaciones de forma cuadrática",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "x⁴-5x²+4=0 sustitucion:",
        opciones: ["u=x²", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "u²-5u+4=0 — escribe la respuesta.",
        opciones: ["u=___ o u=___\" → 1", "1 → \"___=u o ___=u", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "x⁴-5x²+4=0 — escribe la respuesta.",
        opciones: ["x=___ (todas)\" → ±1", "___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "x^(2/3)-3x^(1/3)+2=0",
        opciones: ["u=___\" → x^", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "u=1,2 — escribe la respuesta.",
        opciones: ["x=___\" → 1", "1 → \"___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P6 (T/F)",
        pregunta: "u=-3 con u=x² no da x real.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "ω⁴-5ω²+4=0 modela:",
        opciones: ["Frecuencias de vibracion", "noicarbiv ed saicneucerF", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "(x+1)²-5(x+1)+6=0 — escribe la respuesta.",
        opciones: ["x=___ o x=___\" → 1", "1 → \"___=x o ___=x", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s14_c4_sistemas_lineal_cuadratica",
      formTitle: "S14·C4 Sistemas con una ecuación lineal y una cuadrática — Quiz",
      title: "S14·C4 Sistemas con una ecuación lineal y una cuadrática",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "y=x+1, y=x²-2x+3 — escribe la respuesta.",
        opciones: ["(x", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "Metodo principal:",
        opciones: ["Sustitucion desde ecuacion lineal", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "x+y=100, xy=2400 — escribe la respuesta.",
        opciones: ["x=___ o x=___\" → 40", "04 → \"___=x o ___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "Recta tangente a parabola",
        opciones: ["___ soluciones\" → 1", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "Puede haber 0 soluciones reales.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (MC)",
        pregunta: "Graficamente:",
        opciones: ["Interseccion recta y parabola", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "x+y=capacidad, xy=k modela:",
        opciones: ["Punto de operacion", "noicarepo ed otnuP", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "y=x, y=x²+1 — escribe la respuesta.",
        opciones: ["Δ=___\" → -3", "3- → \"___=Δ", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s15_auto_repaso_unidad4",
      formTitle: "S15·Auto Repaso general Unidad 4 — Quiz",
      title: "S15·Auto Repaso general Unidad 4",
      description: "Quiz del curso — 14 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "S11 lineales",
        pregunta: "(2x-1)/3+(x+2)/2=4?",
        opciones: ["x=20/7", "7/02=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S11 lineales",
        pregunta: "despejar T de PV=nRT?",
        opciones: ["T=PV/(nR)", "/VP=T", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S12 sistemas",
        pregunta: "3x+2y=16 y x-y=2?",
        opciones: ["x=4", "4=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S12 sistemas",
        pregunta: "¿Cuál es y?",
        opciones: ["2 por sustitución y eliminación", "nóicanimile y nóicutitsus rop 2", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S13-S14 cuadráticas",
        pregunta: "x²-3x-10=0?",
        opciones: ["x=5", "5=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S13-S14 cuadráticas",
        pregunta: "-2 por factorización y fórmula general?",
        opciones: ["general", "2x", "x", "4x"],
        correcta: 0
      },
      {
        categoria: "S13-S14 cuadráticas",
        pregunta: "√(x+5)=x-1?",
        opciones: ["x=4 válido (x=-1 se descarta)", "odiláv 4=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S14-S15 sistemas mixtos",
        pregunta: "y=x²-1 y y=2x+3?",
        opciones: ["x=1±√5", "5√±1=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S14-S15 sistemas mixtos",
        pregunta: "x⁴-8x²+15=0 con u=x²?",
        opciones: ["x=±√3", "3√±=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "S14-S15 sistemas mixtos",
        pregunta: "±√5?",
        opciones: ["±√5", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "S15 polinomios",
        pregunta: "P(2) por Ruffini para P(x)=x³-4x²+5?",
        opciones: ["P(2)=-3", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "S15 polinomios",
        pregunta: "¿Cuál es factorizar x³-4x²+x+6?",
        opciones: ["(x-3)(x-2)(x+1)", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "¿Cuál es caja sin tapa V?",
        opciones: ["4x³-100x²+400x-1056", "6501-x004+²x001-³x4", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "Problema integrador",
        pregunta: "¿Cuál es x?",
        opciones: ["4 cm es raíz válida con V=1056 cm³", "³mc 6501=V noc adiláv zíar se mc 4", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s15_c1_sistemas_cuadraticos",
      formTitle: "S15·C1 Sistemas de ecuaciones cuadráticas — Quiz",
      title: "S15·C1 Sistemas de ecuaciones cuadráticas",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "x²+y²=25, x+y=7 — escribe la respuesta.",
        opciones: ["(3", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "Metodo principal:",
        opciones: ["Sustitucion", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "y=x², y=2x+3 — escribe la respuesta.",
        opciones: ["x=___ o x=___\" → -1", "1- → \"___=x o ___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "Dos parabolas pueden intersectarse en max:",
        opciones: ["4 puntos", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "Grafico muestra intersecciones de curvas.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "y=x²-2, y=-x²+4 — escribe la respuesta.",
        opciones: ["x=±___\" → √3", "3√ → \"___±=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "Igualar h1=h2 busca:",
        opciones: ["Instante de misma altura", "arutla amsim ed etnatsnI", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (MC)",
        pregunta: "0 intersecciones significa:",
        opciones: ["Sistema sin solucion real", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s15_c2_funcion_polinomial_grado_n",
      formTitle: "S15·C2 Función polinomial de grado n — Quiz",
      title: "S15·C2 Función polinomial de grado n",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "2x⁴-3x²+x-5 grado=___",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "Coeficiente lider de -x³+2x: — escribe la respuesta.",
        opciones: ["-1", "0", "-2", "1"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "Grado par, a_n>0",
        opciones: ["extremos:\" → +∞ ambos lados", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "Raiz de P(x) es:",
        opciones: ["r tal que P(r)=0", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "Grado n",
        opciones: ["Falso", "Depende del contexto", "Solo en casos especiales", "0"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "Termino independiente de 3x²-5x+7: — escribe la respuesta.",
        opciones: ["7", "8", "6", "-7"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "Curva de calibracion es polinomio porque:",
        opciones: ["Modela relacion no lineal", "laenil on noicaler aledoM", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (MC)",
        pregunta: "P(x)=5 es polinomio grado:",
        opciones: ["0", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s15_c3_division_sintetica_residuo",
      formTitle: "S15·C3 División sintética y teorema del residuo — Quiz",
      title: "S15·C3 División sintética y teorema del residuo",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (MC)",
        pregunta: "Teorema del residuo: P(a) es el ___",
        opciones: ["Residuo al dividir entre", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "2x³-5x²+x+10, (x-3): residuo=___",
        opciones: ["8", "9", "7", "-8"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "x³-6x²+11x-6, (x-2): residuo=___",
        opciones: ["0", "1", "-1", "2"],
        correcta: 0
      },
      {
        categoria: "P4 (T/F)",
        pregunta: "Residuo 0",
        opciones: ["Falso", "Depende del contexto", "Solo en casos especiales", "0"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "Dividir entre (x+3), usar a=___",
        opciones: ["-3", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "x³-2x+4, P(2)=___",
        opciones: ["8", "9", "7", "-8"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "Ruffini sirve para:",
        opciones: ["Evaluar P en puntos de operacion", "noicarepo ed sotnup ne P raulavE", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (T/F)",
        pregunta: "Sintetica funciona con divisor x²+1.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s15_c4_teorema_factor_raices",
      formTitle: "S15·C4 Teorema del factor, raíces y teorema fundamental — Quiz",
      title: "S15·C4 Teorema del factor, raíces y teorema fundamental",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (T/F)",
        pregunta: "P(2)=0",
        opciones: ["Falso", "Depende del contexto", "Solo en casos especiales", "0"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "Grado 4",
        opciones: ["max ___ raices reales\" → 4", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "x³-6x²+11x-6 raices: ___, ___, ___",
        opciones: ["1", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "Teorema fundamental:",
        opciones: ["n raices en C contando multiplicidad", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "Raiz doble graficamente:",
        opciones: ["Toca eje x sin cruzar", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P6 (Fill)",
        pregunta: "Posibles racionales de 2x²-1: ±___",
        opciones: ["1", "2", "0", "-1"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "Raices de polinomio caracteristico:",
        opciones: ["Frecuencias modales", "seladom saicneucerF", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (T/F)",
        pregunta: "x²+1=0 tiene raices reales.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s16_auto_cierre_curso",
      formTitle: "S16·Auto Entrega de evidencias y preparación para examen final — Quiz",
      title: "S16·Auto Entrega de evidencias y preparación para examen final",
      description: "Quiz: U1 Conjuntos, U2 Funciones, U3 Expresiones, U4 Ecuaciones, U5 Valor absoluto",
      preguntas: [
      {
        categoria: "U1 Conjuntos",
        pregunta: "¿Cuál es |A|?",
        opciones: ["5 con A=ejes en tolerancia", "aicnarelot ne seje=A noc 5", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "U1 Conjuntos",
        pregunta: "¿Cuál es |B|?",
        opciones: ["4", "5", "3", "-4"],
        correcta: 0
      },
      {
        categoria: "U1 Conjuntos",
        pregunta: "¿Cuál es |A∩B|?",
        opciones: ["2", "3", "1", "-2"],
        correcta: 0
      },
      {
        categoria: "U1 Conjuntos",
        pregunta: "¿Cuál es |A∪B|?",
        opciones: ["7 (lote completo)", "8", "6", "-7"],
        correcta: 0
      },
      {
        categoria: "U2 Funciones",
        pregunta: "¿Cuál es F(d)?",
        opciones: ["k(d0-d) es función de d en el dominio físico del eje", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "U3 Expresiones",
        pregunta: "¿Cuál es V?",
        opciones: ["π(d/2)²L simplificado a V=50πd² mm³ con L=200mm", "universal", "vacío", "intersección"],
        correcta: 0
      },
      {
        categoria: "U4 Ecuaciones",
        pregunta: "|d0-d|=Fmax/k=0.004m=4mm?",
        opciones: ["d=46mm o d=54mm (modelo de contracción por carga)", "mm45=d o mm64=d", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "U5 Valor absoluto",
        pregunta: "intervalo de aceptación |d-50|≤0.04 equivale a [49.96, 50.04] mm; clasificación 50.05 y 50.06 rechazados por exceder el límite superior?",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s16_c1_valor_absoluto_grafico",
      formTitle: "S16·C1 Valor absoluto e interpretación gráfica — Quiz",
      title: "S16·C1 Valor absoluto e interpretación gráfica",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "|-7| = ___",
        opciones: ["7", "8", "6", "-7"],
        correcta: 0
      },
      {
        categoria: "P2 (MC)",
        pregunta: "|x| representa:",
        opciones: ["Distancia al cero", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P3 (T/F)",
        pregunta: "|-x| = |x|",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P4 (Fill)",
        pregunta: "|3-5| = ___",
        opciones: ["2", "3", "1", "-2"],
        correcta: 0
      },
      {
        categoria: "P5 (MC)",
        pregunta: "Vértice de |x-3|+2:",
        opciones: ["(3, 2)", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P6 (MC)",
        pregunta: "|a+b| ≤ |a|+|b| es:",
        opciones: ["Desigualdad triangular", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P7 (MC ingeniería)",
        pregunta: "|d-25.5|=0.03 significa:",
        opciones: ["Error absoluto 0.03 mm", "mm 30.0 otulosba rorrE", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (T/F)",
        pregunta: "|x|=-5 tiene solucion real.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s16_c2_ecuaciones_valor_absoluto",
      formTitle: "S16·C2 Ecuaciones con valor absoluto — Quiz",
      title: "S16·C2 Ecuaciones con valor absoluto",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "|x-3|=7 — escribe la respuesta.",
        opciones: ["x=___ o x=___\" → 10", "01 → \"___=x o ___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "|2x+1|=9 — escribe la respuesta.",
        opciones: ["x=___ o x=___\" → 4", "4 → \"___=x o ___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P3 (MC)",
        pregunta: "|x+2|=-3 tiene:",
        opciones: ["0 soluciones", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "|x-5|=0",
        opciones: ["x=___\" → 5", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (Fill)",
        pregunta: "|d-50|=0.02 — escribe la respuesta.",
        opciones: ["d=___ o d=___\" → 50.02", "20.05 → \"___=d o ___=d", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P6 (T/F)",
        pregunta: "|f(x)|=k con k<0: sin solucion.",
        opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P7 (Fill)",
        pregunta: "|x-1|=|2x+4| — escribe la respuesta.",
        opciones: ["x=___ o x=___\" → -5", "5- → \"___=x o ___=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P8 (MC ingeniería)",
        pregunta: "Resolver |L-L0|=δ da:",
        opciones: ["Cotas limite", "etimil satoC", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s16_c3_desigualdades_valor_absoluto",
      formTitle: "S16·C3 Desigualdades con valor absoluto — Quiz",
      title: "S16·C3 Desigualdades con valor absoluto",
      description: "Quiz del curso — 8 preguntas de opción múltiple.",
      preguntas: [
      {
        categoria: "P1 (Fill)",
        pregunta: "|x-3|<5 — escribe la respuesta.",
        opciones: ["intervalo:\" →", "→ \":olavretni", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P2 (Fill)",
        pregunta: "|x-3|>5 — escribe la respuesta.",
        opciones: ["x<___ o x>___\" → -2", "2- → \"___>x o ___<x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P3 (Fill)",
        pregunta: "|L-100|≤0.5 — escribe la respuesta.",
        opciones: ["L en [___", "___[ ne L", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P4 (MC)",
        pregunta: "|f(x)|<k equivale a:",
        opciones: ["-k < f(x) < k", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P5 (T/F)",
        pregunta: "|x-a|>r tiene un solo intervalo.",
        opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
        correcta: 0
      },
      {
        categoria: "P6 (MC ingeniería)",
        pregunta: "|d-40|≤0.08",
        opciones: ["d max:\" → 40.08", "80.04 → \":xam d", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "P7 (MC)",
        pregunta: "|d-d0|≤t modela:",
        opciones: ["Tolerancia simetrica", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "P8 (Fill)",
        pregunta: "|d-40|≤0.08 — escribe la respuesta.",
        opciones: ["d min=___\" → 39.92", "29.93 → \"___=nim d", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
    {
      slug: "s16_c4_repaso_general",
      formTitle: "S16·C4 Repaso general del curso — Quiz",
      title: "S16·C4 Repaso general del curso",
      description: "Quiz: U1, U2, U3, U4, U5",
      preguntas: [
      {
        categoria: "U1",
        pregunta: "¿Cuál es |A∪B|?",
        opciones: ["60+45-25=80 piezas aceptables en al menos un criterio", "oiretirc nu sonem la ne selbatpeca sazeip 08=52-54+06", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "U1",
        pregunta: "20 fallan ambos criterios?",
        opciones: ["criterios", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "U2",
        pregunta: "¿Cuál es F?",
        opciones: ["250x es función pues cada x tiene un único F", "F ocinú nu eneit x adac seup nóicnuf se x052", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "U2",
        pregunta: "¿Cuál es si F?",
        opciones: ["875N entonces x=3.5m", "m5.3=x secnotne N578", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "U3",
        pregunta: "¿Cuál es V?",
        opciones: ["πr²h1+πr²h2=πr²(h1+h2) por factor común", "²rπ=2h²rπ+1h²rπ", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "U3",
        pregunta: "simplificar concentra el cálculo de πr² una vez?",
        opciones: ["vez", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "U4",
        pregunta: "500+35n=2275?",
        opciones: ["n=51 piezas de equilibrio", "oirbiliuqe ed sazeip 15=n", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "U4",
        pregunta: "x²-5x+6=0?",
        opciones: ["x=2", "2=x", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "U4",
        pregunta: "3?",
        opciones: ["3", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "U5",
        pregunta: "|d-50|≤0.02 equivale a 49.98≤d≤50.02 mm?",
        opciones: ["mm", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
        correcta: 0
      },
      {
        categoria: "U5",
        pregunta: "¿Cuál es d?",
        opciones: ["50.015mm cumple |50.015-50|=0.015≤0.02 aceptada", "adatpeca 20.0≤510.0=|05-510.05| elpmuc mm510.05", "universal", "vacío"],
        correcta: 0
      },
      {
        categoria: "U5",
        pregunta: "¿Cuál es |d-50|≤0.02 equivale a 49.98≤d≤50.02 mm, d?",
        opciones: ["50.015mm cumple |50.015-50|=0.015≤0.02 aceptada", "adatpeca 20.0≤510.0=|05-510.05| elpmuc mm510.05", "universal", "vacío"],
        correcta: 0
      },
      ],
    },
];
