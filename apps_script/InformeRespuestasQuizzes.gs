/**
 * INFORME DE RESPUESTAS — Quizzes Álgebra (Google Forms)
 *
 * CÓMO USAR
 * 1. Abre https://script.google.com → Proyecto nuevo (o añade al final de tu Code.gs).
 * 2. Pega TODO este archivo.
 * 3. Ejecuta informeRespuestasQuizzes() (autoriza Forms + Drive + Sheets).
 * 4. Revisa el Registro de ejecución: ahí aparece la URL de la hoja de cálculo.
 *
 * HOJAS GENERADAS
 * - Resumen: cada quiz con # respuestas, promedio y enlace.
 * - Detalle: todas las respuestas (fecha, correo, calificación, quiz).
 * - Por alumno: matriz alumno × quiz (requiere correo o pregunta de identificación).
 * - Una pestaña por quiz CON respuestas (nombre, fecha, calificación).
 *
 * Si hay timeout (~6 min), el progreso YA quedó guardado en la hoja.
 * Copia el ID del log y continúa, por ejemplo desde el 47:
 *   informeRespuestasQuizzesContinuar(47, "ID_DE_LA_HOJA")
 * Al terminar todos los formularios se genera solo "Por alumno".
 * Hojas por quiz (lento): finalizarInformeQuizzes("ID", true)
 *
 * Para un solo formulario (prueba rápida):
 *   informeRespuestasUnQuiz("ID_DEL_FORMULARIO")
 *
 * Si todos aparecen como "Anónimo", primero ejecuta ActivarIdentificacionQuizzes.gs:
 *   activarIdentificacionTodosLosQuizzes()
 * (Las respuestas anteriores a ese cambio seguirán sin nombre.)
 */

var CONFIG_INFORME = {
  /** Solo formularios cuyo nombre en Drive contenga esta cadena. */
  FILTRO_NOMBRE: "Quiz",
  /** Crear pestaña por quiz durante el barrido (lento; mejor usar finalizarInformeQuizzes). */
  HOJA_POR_QUIZ: false,
  /** Crear hoja matriz Por alumno. */
  HOJA_POR_ALUMNO: true,
  /** Máximo de pestañas por quiz (evita hojas vacías). 0 = sin límite. */
  MAX_HOJAS_QUIZ: 0,
  /** Índice inicial al procesar en lote. */
  BATCH_START: 0,
  /** Cuántos forms procesar; 0 = todos desde BATCH_START. */
  BATCH_SIZE: 0,
  /** Prefijo del archivo de salida en Drive. */
  NOMBRE_INFORME: "Informe Quizzes Álgebra",
};

/**
 * Genera el informe completo de todos los quizzes del curso.
 * @returns {string} URL de la hoja de cálculo creada.
 */
function informeRespuestasQuizzes() {
  return ejecutarInforme_(null, 0, 0);
}

/**
 * Procesa un lote de formularios.
 * @param {number} inicio Índice 0-based en la lista filtrada.
 * @param {number} cantidad Cuántos procesar; 0 = resto.
 */
function informeRespuestasQuizzesLote(inicio, cantidad) {
  return ejecutarInforme_(null, inicio, cantidad);
}

/**
 * Continúa un informe interrumpido por timeout.
 * @param {number} inicio Índice donde se quedó (ej. 47 si falló en 47/81).
 * @param {string} spreadsheetId ID de la hoja del intento anterior (de la URL o del log).
 */
function informeRespuestasQuizzesContinuar(inicio, spreadsheetId) {
  return ejecutarInforme_(spreadsheetId, inicio, 0);
}

/**
 * Continúa procesando N formularios más en la misma hoja.
 */
function informeRespuestasQuizzesContinuarLote(inicio, cantidad, spreadsheetId) {
  return ejecutarInforme_(spreadsheetId, inicio, cantidad);
}

/**
 * Genera "Por alumno" y, opcionalmente, pestañas por quiz (lento).
 * @param {string} spreadsheetId ID de la hoja del informe.
 * @param {boolean} conHojasQuiz Si true, crea una pestaña por quiz con respuestas.
 */
function finalizarInformeQuizzes(spreadsheetId, conHojasQuiz) {
  var ss = SpreadsheetApp.openById(spreadsheetId);
  if (CONFIG_INFORME.HOJA_POR_ALUMNO) {
    reconstruirPorAlumnoDesdeDetalle_(ss);
  }
  if (conHojasQuiz) {
    crearHojasQuizDesdeResumen_(ss);
  }
  Logger.log("✅ Informe finalizado: " + ss.getUrl());
  return ss.getUrl();
}

/**
 * Informe de un solo formulario (para pruebas).
 * @param {string} formId ID del Google Form (de la URL de edición).
 */
function informeRespuestasUnQuiz(formId) {
  var form = FormApp.openById(formId);
  var file = DriveApp.getFileById(formId);
  var ss = SpreadsheetApp.create(
    CONFIG_INFORME.NOMBRE_INFORME + " — " + acortarTexto_(form.getTitle(), 40) + " " + fechaAhora_()
  );
  var datos = procesarFormulario_(form, file.getName(), formId);
  escribirResumen_(ss, [datos]);
  escribirDetalle_(ss, [datos]);
  if (CONFIG_INFORME.HOJA_POR_ALUMNO) {
    escribirPorAlumno_(ss, [datos]);
  }
  if (CONFIG_INFORME.HOJA_POR_QUIZ && datos.respuestas.length > 0) {
    escribirHojaQuiz_(ss, datos);
  }
  Logger.log("📊 Informe (1 quiz): " + ss.getUrl());
  return ss.getUrl();
}

// ——— Núcleo ———

function ejecutarInforme_(spreadsheetId, inicio, cantidad) {
  var formsData = listarFormulariosCurso_();
  var start = inicio || 0;
  var size = cantidad || 0;
  var lote = size > 0 ? formsData.slice(start, start + size) : formsData.slice(start);
  var total = formsData.length;

  Logger.log("▶ Procesando índices " + start + "–" + (start + lote.length - 1) + " de " + (total - 1) + " (" + lote.length + " forms)");

  var ss = asegurarInforme_(spreadsheetId);
  var hojaResumen = ss.getSheetByName("Resumen");
  var hojaDetalle = ss.getSheetByName("Detalle");
  var errores = [];
  var procesados = 0;

  for (var i = 0; i < lote.length; i++) {
    var meta = lote[i];
    var globalIdx = start + i + 1;
    try {
      var form = FormApp.openById(meta.fileId);
      var datos = procesarFormulario_(form, meta.formTitle, meta.fileId);
      appendResumenFila_(hojaResumen, datos);
      appendDetalleFilas_(hojaDetalle, datos);
      if (CONFIG_INFORME.HOJA_POR_QUIZ && datos.respuestas.length > 0) {
        escribirHojaQuiz_(ss, datos);
      }
      procesados++;
      Logger.log(globalIdx + "/" + total + " ✅ " + datos.titulo + " — " + datos.respuestas.length + " respuesta(s)");
    } catch (err) {
      errores.push({ titulo: meta.formTitle, error: String(err) });
      Logger.log(globalIdx + "/" + total + " ❌ " + meta.formTitle + ": " + err);
    }
  }

  registrarErroresInforme_(ss, errores);

  var siguiente = start + lote.length;
  var completo = siguiente >= total;

  Logger.log("——— RESUMEN ———");
  Logger.log("Procesados en este lote: " + procesados + " | Errores: " + errores.length);
  Logger.log("📊 Informe: " + ss.getUrl());
  Logger.log("🆔 ID hoja: " + ss.getId());
  PropertiesService.getScriptProperties().setProperty("ULTIMO_INFORME_ID", ss.getId());

  if (completo) {
    Logger.log("✅ Todos los formularios procesados. Generando Por alumno…");
    finalizarInformeQuizzes(ss.getId(), false);
  } else {
    Logger.log("⏸ Timeout probable si aún faltan forms. Continúa con:");
    Logger.log('informeRespuestasQuizzesContinuar(' + siguiente + ', "' + ss.getId() + '")');
  }

  return ss.getUrl();
}

function asegurarInforme_(spreadsheetId) {
  if (spreadsheetId) {
    return SpreadsheetApp.openById(spreadsheetId);
  }

  var ss = SpreadsheetApp.create(CONFIG_INFORME.NOMBRE_INFORME + " " + fechaAhora_());
  var resumen = ss.getActiveSheet();
  resumen.setName("Resumen");
  resumen.appendRow(["slug", "titulo", "respuestas", "promedio %", "preguntas", "editUrl", "responsesUrl", "fileId"]);
  resumen.setFrozenRows(1);

  var detalle = ss.insertSheet("Detalle");
  detalle.appendRow([
    "quiz", "slug", "#", "fecha", "nombre", "matricula", "correo",
    "identificador", "fuente_id", "puntos", "max", "porcentaje", "respuestas",
  ]);
  detalle.setFrozenRows(1);

  Logger.log("📊 Informe nuevo: " + ss.getUrl());
  return ss;
}

function appendResumenFila_(sh, d) {
  sh.appendRow([
    d.slug,
    d.titulo,
    d.numRespuestas,
    d.promedio !== null ? d.promedio + "%" : "—",
    d.totalPreguntas,
    d.editUrl,
    d.responsesUrl,
    d.fileId,
  ]);
}

function appendDetalleFilas_(sh, d) {
  for (var j = 0; j < d.respuestas.length; j++) {
    var r = d.respuestas[j];
    sh.appendRow([
      d.titulo,
      d.slug,
      r.numero,
      r.timestamp,
      r.nombre,
      r.matricula,
      r.correo,
      r.identificador,
      r.identificadorFuente,
      r.puntos,
      r.maxPuntos,
      r.porcentaje !== null ? r.porcentaje + "%" : "",
      r.respuestasTexto,
    ]);
  }
}

function registrarErroresInforme_(ss, errores) {
  if (errores.length === 0) {
    return;
  }
  var errSh = ss.getSheetByName("Errores");
  if (!errSh) {
    errSh = ss.insertSheet("Errores");
    errSh.appendRow(["formulario", "error"]);
  }
  for (var e = 0; e < errores.length; e++) {
    errSh.appendRow([errores[e].titulo, errores[e].error]);
  }
}

function reconstruirPorAlumnoDesdeDetalle_(ss) {
  var detalle = ss.getSheetByName("Detalle");
  if (!detalle || detalle.getLastRow() < 2) {
    Logger.log("⚠ Detalle vacío; no se generó Por alumno.");
    return;
  }

  var existente = ss.getSheetByName("Por alumno");
  if (existente) {
    ss.deleteSheet(existente);
  }

  var rows = detalle.getDataRange().getValues();
  var procesadosMap = {};
  var porAlumno = {};

  for (var i = 1; i < rows.length; i++) {
    var row = rows[i];
    var tituloQuiz = row[0];
    var nombre = row[4];
    var matricula = row[5];
    var correo = row[6];
    var identificador = row[7];
    var fuente = row[8];
    var pctStr = String(row[11] || "").replace("%", "");
    var pct = pctStr !== "" ? parseFloat(pctStr) : null;

    procesadosMap[tituloQuiz] = true;

    var key = (matricula || correo || nombre || identificador || "anon-" + i).toLowerCase();
    if (!porAlumno[key]) {
      porAlumno[key] = {
        identificador: identificador,
        nombre: nombre,
        matricula: matricula,
        correo: correo,
        fuente: fuente,
        scores: {},
        porcentajes: [],
      };
    }
    porAlumno[key].scores[tituloQuiz] = pct !== null && !isNaN(pct) ? pct + "%" : "—";
    if (pct !== null && !isNaN(pct)) {
      porAlumno[key].porcentajes.push(pct);
    }
  }

  var quizzes = Object.keys(procesadosMap).sort();
  var sh = ss.insertSheet("Por alumno");
  var header = ["identificador", "nombre", "matricula", "correo", "fuente_id", "quizzes_contestados", "promedio_general %"];
  for (var q = 0; q < quizzes.length; q++) {
    header.push(acortarTexto_(quizzes[q], 28));
  }
  sh.appendRow(header);

  var keys = Object.keys(porAlumno).sort();
  for (var k = 0; k < keys.length; k++) {
    var alumno = porAlumno[keys[k]];
    var prom =
      alumno.porcentajes.length
        ? Math.round(
            (alumno.porcentajes.reduce(function (a, b) {
              return a + b;
            }, 0) /
              alumno.porcentajes.length) *
              10
          ) / 10
        : "";
    var fila = [
      alumno.identificador,
      alumno.nombre,
      alumno.matricula,
      alumno.correo,
      alumno.fuente,
      alumno.porcentajes.length,
      prom !== "" ? prom + "%" : "",
    ];
    for (var q2 = 0; q2 < quizzes.length; q2++) {
      fila.push(alumno.scores[quizzes[q2]] || "");
    }
    sh.appendRow(fila);
  }

  sh.setFrozenRows(1);
  sh.setFrozenColumns(1);
  Logger.log("📋 Hoja Por alumno generada (" + keys.length + " personas).");
}

function crearHojasQuizDesdeResumen_(ss) {
  var resumen = ss.getSheetByName("Resumen");
  if (!resumen || resumen.getLastRow() < 2) {
    return;
  }
  var rows = resumen.getDataRange().getValues();
  var creadas = 0;

  for (var i = 1; i < rows.length; i++) {
    var numResp = rows[i][2];
    var fileId = rows[i][7];
    if (!fileId || numResp === 0 || numResp === "0") {
      continue;
    }
    if (CONFIG_INFORME.MAX_HOJAS_QUIZ > 0 && creadas >= CONFIG_INFORME.MAX_HOJAS_QUIZ) {
      break;
    }
    var nombreHoja = nombreHojaValido_(rows[i][0] || rows[i][1]);
    if (ss.getSheetByName(nombreHoja)) {
      continue;
    }
    try {
      var form = FormApp.openById(fileId);
      var datos = procesarFormulario_(form, rows[i][1], fileId);
      if (datos.respuestas.length > 0) {
        escribirHojaQuiz_(ss, datos);
        creadas++;
      }
    } catch (err) {
      Logger.log("⚠ No se pudo crear hoja para " + rows[i][1] + ": " + err);
    }
  }
  Logger.log("📋 Pestañas por quiz creadas: " + creadas);
}

function listarFormulariosCurso_() {
  var porTitulo = {};
  var iter = DriveApp.getFilesByType(MimeType.GOOGLE_FORMS);
  var filtro = CONFIG_INFORME.FILTRO_NOMBRE;

  while (iter.hasNext()) {
    var file = iter.next();
    var name = file.getName();
    if (filtro && name.indexOf(filtro) === -1) {
      continue;
    }
    var entry = {
      formTitle: name,
      fileId: file.getId(),
      modified: file.getLastUpdated(),
    };
    if (!porTitulo[name] || file.getLastUpdated() > porTitulo[name].modified) {
      porTitulo[name] = entry;
    }
  }

  var lista = [];
  for (var key in porTitulo) {
    lista.push(porTitulo[key]);
  }
  lista.sort(function (a, b) {
    return a.formTitle.localeCompare(b.formTitle);
  });
  return lista;
}

function procesarFormulario_(form, formTitle, fileId) {
  var responses = form.getResponses();
  var filas = [];

  for (var i = 0; i < responses.length; i++) {
    filas.push(extraerFilaRespuesta_(form, responses[i], i + 1));
  }

  var scores = filas.map(function (f) {
    return f.porcentaje;
  }).filter(function (s) {
    return s !== null && s !== "";
  });

  var promedio = scores.length
    ? scores.reduce(function (a, b) {
        return a + b;
      }, 0) / scores.length
    : null;

  return {
    slug: extraerSlug_(formTitle),
    titulo: form.getTitle(),
    formTitle: formTitle,
    fileId: fileId,
    editUrl: form.getEditUrl(),
    responsesUrl: form.getEditUrl() + "#responses",
    totalPreguntas: contarPreguntasCalificables_(form),
    numRespuestas: filas.length,
    promedio: promedio,
    respuestas: filas,
  };
}

function extraerFilaRespuesta_(form, response, numero) {
  var calificacion = calcularCalificacion_(response);
  var identidad = obtenerIdentidad_(response);

  return {
    numero: numero,
    timestamp: response.getTimestamp(),
    correo: identidad.correo || response.getRespondentEmail() || "",
    nombre: identidad.nombre || "",
    matricula: identidad.matricula || "",
    identificador: identidad.id,
    identificadorFuente: identidad.fuente,
    puntos: calificacion.puntos,
    maxPuntos: calificacion.maxPuntos,
    porcentaje: calificacion.porcentaje,
    respuestasTexto: resumirRespuestas_(response),
  };
}

function calcularCalificacion_(response) {
  var gradable = response.getGradableItemResponses();
  var puntos = 0;
  var maxPuntos = 0;

  for (var i = 0; i < gradable.length; i++) {
    var itemResponse = gradable[i];
    puntos += itemResponse.getScore() || 0;
    maxPuntos += obtenerPuntosItem_(itemResponse.getItem());
  }

  var porcentaje = maxPuntos > 0 ? Math.round((puntos / maxPuntos) * 1000) / 10 : null;

  return { puntos: puntos, maxPuntos: maxPuntos, porcentaje: porcentaje };
}

/** Puntos máximos de un ítem calificable (API Forms: no existe getGradableFormItem). */
function obtenerPuntosItem_(item) {
  var type = item.getType();
  try {
    if (type === FormApp.ItemType.MULTIPLE_CHOICE) {
      return item.asMultipleChoiceItem().getPoints() || 0;
    }
    if (type === FormApp.ItemType.CHECKBOX) {
      return item.asCheckboxItem().getPoints() || 0;
    }
    if (type === FormApp.ItemType.TEXT) {
      return item.asTextItem().getPoints() || 0;
    }
    if (type === FormApp.ItemType.LIST) {
      return item.asListItem().getPoints() || 0;
    }
  } catch (err) {
    Logger.log("⚠ Puntos no leídos en ítem '" + item.getTitle() + "': " + err);
  }
  return 0;
}

function normalizarTituloPregunta_(titulo) {
  return String(titulo)
    .replace(/^\[[^\]]+\]\s*/, "")
    .trim()
    .toLowerCase();
}

function obtenerIdentidad_(response) {
  var email = response.getRespondentEmail() || "";
  var nombre = "";
  var matricula = "";
  var itemResponses = response.getItemResponses();

  for (var i = 0; i < itemResponses.length; i++) {
    var ir = itemResponses[i];
    var titulo = normalizarTituloPregunta_(ir.getItem().getTitle());
    var val = String(ir.getResponse()).trim();
    if (!val) {
      continue;
    }
    if (/^nombre(\s+completo)?$/.test(titulo) || titulo === "alumno" || titulo === "estudiante") {
      nombre = val;
    } else if (
      /matr[ií]cula/.test(titulo) ||
      /no\.?\s*de\s*control/.test(titulo) ||
      /n[uú]mero\s*de\s*control/.test(titulo)
    ) {
      matricula = val;
    }
  }

  if (nombre && matricula) {
    return {
      id: nombre + " (" + matricula + ")",
      fuente: "nombre + matrícula",
      nombre: nombre,
      matricula: matricula,
      correo: email,
    };
  }
  if (nombre) {
    return { id: nombre, fuente: "nombre", nombre: nombre, matricula: "", correo: email };
  }
  if (matricula) {
    return { id: matricula, fuente: "matrícula", nombre: "", matricula: matricula, correo: email };
  }
  if (email) {
    return { id: email, fuente: "correo", nombre: "", matricula: "", correo: email };
  }

  return {
    id: "Anónimo " + response.getId().slice(0, 8),
    fuente: "sin identificar (formulario sin preguntas de identificación)",
    nombre: "",
    matricula: "",
    correo: "",
  };
}

function resumirRespuestas_(response) {
  var partes = [];
  var items = response.getItemResponses();
  for (var i = 0; i < items.length; i++) {
    var titulo = items[i].getItem().getTitle().replace(/^\[[^\]]+\]\s*/, "");
    partes.push(titulo + ": " + items[i].getResponse());
  }
  return partes.join(" | ");
}

function contarPreguntasCalificables_(form) {
  var items = form.getItems();
  var n = 0;
  for (var i = 0; i < items.length; i++) {
    if (obtenerPuntosItem_(items[i]) > 0) {
      n++;
    }
  }
  return n;
}

function extraerSlug_(formTitle) {
  var m = formTitle.match(/^(S\d+[·.]?C\d+|S\d+\s+Auto[^—]*)/i);
  if (m) {
    return m[1].replace(/\s+/g, "_").toLowerCase();
  }
  return formTitle.replace(/\s*—\s*Quiz\s*$/i, "").trim();
}

// ——— Escritura en Sheets ———

function escribirResumen_(ss, procesados) {
  var sh = ss.getActiveSheet();
  sh.setName("Resumen");
  sh.appendRow([
    "slug",
    "titulo",
    "respuestas",
    "promedio %",
    "preguntas",
    "editUrl",
    "responsesUrl",
  ]);

  for (var i = 0; i < procesados.length; i++) {
    var d = procesados[i];
    sh.appendRow([
      d.slug,
      d.titulo,
      d.numRespuestas,
      d.promedio !== null ? d.promedio + "%" : "—",
      d.totalPreguntas,
      d.editUrl,
      d.responsesUrl,
    ]);
  }

  sh.setFrozenRows(1);
  sh.autoResizeColumns(1, 7);
}

function escribirDetalle_(ss, procesados) {
  var sh = ss.insertSheet("Detalle");
  sh.appendRow([
    "quiz",
    "slug",
    "#",
    "fecha",
    "nombre",
    "matricula",
    "correo",
    "identificador",
    "fuente_id",
    "puntos",
    "max",
    "porcentaje",
    "respuestas",
  ]);

  for (var i = 0; i < procesados.length; i++) {
    var d = procesados[i];
    for (var j = 0; j < d.respuestas.length; j++) {
      var r = d.respuestas[j];
      sh.appendRow([
        d.titulo,
        d.slug,
        r.numero,
        r.timestamp,
        r.nombre,
        r.matricula,
        r.correo,
        r.identificador,
        r.identificadorFuente,
        r.puntos,
        r.maxPuntos,
        r.porcentaje !== null ? r.porcentaje + "%" : "",
        r.respuestasTexto,
      ]);
    }
  }

  sh.setFrozenRows(1);
  sh.autoResizeColumns(1, 13);
}

function escribirPorAlumno_(ss, procesados) {
  var sh = ss.insertSheet("Por alumno");

  var quizzesConRespuestas = procesados.filter(function (d) {
    return d.respuestas.length > 0;
  });
  quizzesConRespuestas.sort(function (a, b) {
    return a.titulo.localeCompare(b.titulo);
  });

  var header = ["identificador", "nombre", "matricula", "correo", "fuente_id", "quizzes_contestados", "promedio_general %"];
  for (var q = 0; q < quizzesConRespuestas.length; q++) {
    header.push(acortarTexto_(quizzesConRespuestas[q].slug || quizzesConRespuestas[q].titulo, 28));
  }
  sh.appendRow(header);

  var porAlumno = {};

  for (var i = 0; i < procesados.length; i++) {
    var d = procesados[i];
    for (var j = 0; j < d.respuestas.length; j++) {
      var r = d.respuestas[j];
      var key = (r.matricula || r.correo || r.nombre || r.identificador).toLowerCase();
      if (!porAlumno[key]) {
        porAlumno[key] = {
          identificador: r.identificador,
          nombre: r.nombre,
          matricula: r.matricula,
          correo: r.correo,
          fuente: r.identificadorFuente,
          scores: {},
          porcentajes: [],
        };
      }
      porAlumno[key].scores[d.titulo] = r.porcentaje !== null ? r.porcentaje + "%" : "—";
      if (r.porcentaje !== null) {
        porAlumno[key].porcentajes.push(r.porcentaje);
      }
    }
  }

  var keys = Object.keys(porAlumno).sort();
  for (var k = 0; k < keys.length; k++) {
    var alumno = porAlumno[keys[k]];
    var prom =
      alumno.porcentajes.length
        ? Math.round(
            (alumno.porcentajes.reduce(function (a, b) {
              return a + b;
            }, 0) /
              alumno.porcentajes.length) *
              10
          ) / 10
        : "";

    var row = [
      alumno.identificador,
      alumno.nombre,
      alumno.matricula,
      alumno.correo,
      alumno.fuente,
      alumno.porcentajes.length,
      prom !== "" ? prom + "%" : "",
    ];

    for (var q2 = 0; q2 < quizzesConRespuestas.length; q2++) {
      var titulo = quizzesConRespuestas[q2].titulo;
      row.push(alumno.scores[titulo] || "");
    }
    sh.appendRow(row);
  }

  sh.setFrozenRows(1);
  sh.setFrozenColumns(1);
}

function escribirHojaQuiz_(ss, datos) {
  var nombreHoja = nombreHojaValido_(datos.slug || datos.titulo);
  var sh = ss.insertSheet(nombreHoja);
  sh.appendRow(["#", "fecha", "nombre", "matricula", "correo", "identificador", "puntos", "max", "porcentaje", "fuente_id"]);

  for (var i = 0; i < datos.respuestas.length; i++) {
    var r = datos.respuestas[i];
    sh.appendRow([
      r.numero,
      r.timestamp,
      r.nombre,
      r.matricula,
      r.correo,
      r.identificador,
      r.puntos,
      r.maxPuntos,
      r.porcentaje !== null ? r.porcentaje + "%" : "",
      r.identificadorFuente,
    ]);
  }

  sh.setFrozenRows(1);
  sh.autoResizeColumns(1, 10);
}

// ——— Utilidades ———

function fechaAhora_() {
  return Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm");
}

function acortarTexto_(texto, max) {
  if (!texto) {
    return "";
  }
  if (texto.length <= max) {
    return texto;
  }
  return texto.substring(0, max - 1) + "…";
}

function nombreHojaValido_(nombre) {
  var limpio = String(nombre)
    .replace(/[\[\]\*\/\\\?\:]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  if (limpio.length > 90) {
    limpio = limpio.substring(0, 90);
  }
  return limpio || "Quiz";
}
