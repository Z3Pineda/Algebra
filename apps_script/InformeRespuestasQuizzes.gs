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
 * Si hay timeout (~6 min) con muchos formularios:
 *   informeRespuestasQuizzesLote(0, 25) → luego (25, 25) …
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
  /** Crear pestaña individual por quiz (solo si tiene ≥1 respuesta). */
  HOJA_POR_QUIZ: true,
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
  CONFIG_INFORME.BATCH_START = 0;
  CONFIG_INFORME.BATCH_SIZE = 0;
  return ejecutarInforme_();
}

/**
 * Procesa un lote de formularios (útil si hay timeout).
 * @param {number} inicio Índice 0-based en la lista filtrada.
 * @param {number} cantidad Cuántos procesar; 0 = resto.
 */
function informeRespuestasQuizzesLote(inicio, cantidad) {
  CONFIG_INFORME.BATCH_START = inicio;
  CONFIG_INFORME.BATCH_SIZE = cantidad;
  return ejecutarInforme_();
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

function ejecutarInforme_() {
  var formsData = listarFormulariosCurso_();
  var start = CONFIG_INFORME.BATCH_START || 0;
  var size = CONFIG_INFORME.BATCH_SIZE || 0;
  var lote = size > 0 ? formsData.slice(start, start + size) : formsData.slice(start);

  Logger.log("▶ Procesando " + lote.length + " formularios (total encontrados: " + formsData.length + ")");

  var procesados = [];
  var errores = [];

  for (var i = 0; i < lote.length; i++) {
    var meta = lote[i];
    try {
      var form = FormApp.openById(meta.fileId);
      var datos = procesarFormulario_(form, meta.formTitle, meta.fileId);
      procesados.push(datos);
      Logger.log((i + 1) + "/" + lote.length + " ✅ " + datos.titulo + " — " + datos.respuestas.length + " respuesta(s)");
    } catch (err) {
      errores.push({ titulo: meta.formTitle, error: String(err) });
      Logger.log((i + 1) + "/" + lote.length + " ❌ " + meta.formTitle + ": " + err);
    }
  }

  var ss = SpreadsheetApp.create(CONFIG_INFORME.NOMBRE_INFORME + " " + fechaAhora_());
  escribirResumen_(ss, procesados);
  escribirDetalle_(ss, procesados);

  if (CONFIG_INFORME.HOJA_POR_ALUMNO) {
    escribirPorAlumno_(ss, procesados);
  }

  if (CONFIG_INFORME.HOJA_POR_QUIZ) {
    var hojasCreadas = 0;
    for (var q = 0; q < procesados.length; q++) {
      if (procesados[q].respuestas.length === 0) {
        continue;
      }
      if (CONFIG_INFORME.MAX_HOJAS_QUIZ > 0 && hojasCreadas >= CONFIG_INFORME.MAX_HOJAS_QUIZ) {
        break;
      }
      escribirHojaQuiz_(ss, procesados[q]);
      hojasCreadas++;
    }
    Logger.log("📋 Pestañas por quiz creadas: " + hojasCreadas);
  }

  if (errores.length > 0) {
    var errSh = ss.insertSheet("Errores");
    errSh.appendRow(["formulario", "error"]);
    for (var e = 0; e < errores.length; e++) {
      errSh.appendRow([errores[e].titulo, errores[e].error]);
    }
  }

  Logger.log("——— RESUMEN ———");
  Logger.log("Quizzes procesados: " + procesados.length + " | Errores: " + errores.length);
  Logger.log("📊 Informe: " + ss.getUrl());
  return ss.getUrl();
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
