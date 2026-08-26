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
 * LÍMITE ~6 min: si ves "Exceeded maximum execution time", NO vuelvas a ejecutar
 * crearTodosLosQuizzes() desde cero (duplicaría formularios). Continúa así:
 *   continuarDesdeUltimoCompletado(39)   ← número del último ✅ en el log
 * O por lotes fijos: crearTodosLosQuizzesLote(0, 25) → lote(25, 25) → lote(50, 25)
 *
 * Regenerar este archivo tras cambiar .md o .gs individuales:
 *   py apps_script/build_master_script.py
 */

var CONFIG = {
  /** Slugs que NO se crean (ej. ya tienen formulario publicado). Edita aquí en Apps Script si hace falta. */
  SKIP_SLUGS: [__SKIP_SLUGS__],
  /** Índice inicial en QUIZZES (0 = primero). Usar con BATCH_SIZE para lotes. */
  BATCH_START: 0,
  /** Cuántos crear; 0 = todos desde BATCH_START. */
  BATCH_SIZE: 0,
  /** Crear hoja de cálculo con resultados. */
  CREAR_HOJA_RESULTADOS: true,
  NOMBRE_HOJA: "Enlaces Quizzes Álgebra",
  /** Pausa entre formularios (ms). 0 = más rápido; sube a 100–200 si hay errores de cuota. */
  PAUSA_MS: 0,
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
 * Crear un lote concreto. Ejemplo: crearTodosLosQuizzesLote(0, 25) luego (25, 25).
 * @param {number} inicio Índice 0-based en la lista filtrada (sin SKIP_SLUGS).
 * @param {number} cantidad Cuántos crear; 0 = todos desde inicio hasta el final.
 */
function crearTodosLosQuizzesLote(inicio, cantidad) {
  CONFIG.BATCH_START = inicio;
  CONFIG.BATCH_SIZE = cantidad;
  return ejecutarCreacionMasiva_();
}

/**
 * Continuar tras un timeout. Usa el número del último ✅ del log.
 * Ejemplo: si el log terminó en "39/79 ✅ …", ejecuta continuarDesdeUltimoCompletado(39).
 * Eso crea desde el formulario 40 en adelante (no duplica los 39 anteriores).
 */
function continuarDesdeUltimoCompletado(ultimoCompletadoEnLog) {
  CONFIG.BATCH_START = ultimoCompletadoEnLog;
  CONFIG.BATCH_SIZE = 0;
  Logger.log("▶ Continuando desde el índice " + CONFIG.BATCH_START + " (formulario " + (CONFIG.BATCH_START + 1) + " en adelante)");
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
