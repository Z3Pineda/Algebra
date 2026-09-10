/**
 * ACTIVAR IDENTIFICACIÓN — Quizzes Álgebra (Google Forms)
 *
 * Los quizzes creados sin nombre/correo aparecen como "Anónimo" en el informe.
 * Este script actualiza los formularios EXISTENTES para que pidan:
 *   1. Nombre completo
 *   2. Matrícula / No. de control
 *   3. Correo (recopilado automáticamente si el alumno inicia sesión)
 *
 * CÓMO USAR
 * 1. Abre https://script.google.com (mismo proyecto del informe o uno nuevo).
 * 2. Pega este archivo en Code.gs.
 * 3. Ejecuta activarIdentificacionTodosLosQuizzes()
 *    (autoriza Forms + Drive).
 * 4. Vuelve a ejecutar informeRespuestasQuizzes() para regenerar el informe.
 *
 * IMPORTANTE
 * - Las respuestas ANTERIORES seguirán anónimas (no se puede recuperar el nombre).
 * - Solo las respuestas NUEVAS tendrán identificación.
 *
 * Si hay timeout (~6 min):
 *   activarIdentificacionQuizzesLote(0, 25) → luego (25, 25) …
 */

var CONFIG_ID = {
  FILTRO_NOMBRE: "Quiz",
  BATCH_START: 0,
  BATCH_SIZE: 0,
  PAUSA_MS: 150,
};

function activarIdentificacionTodosLosQuizzes() {
  CONFIG_ID.BATCH_START = 0;
  CONFIG_ID.BATCH_SIZE = 0;
  return ejecutarActivacionIdentificacion_();
}

function activarIdentificacionQuizzesLote(inicio, cantidad) {
  CONFIG_ID.BATCH_START = inicio;
  CONFIG_ID.BATCH_SIZE = cantidad;
  return ejecutarActivacionIdentificacion_();
}

function activarIdentificacionUnQuiz(formId) {
  var form = FormApp.openById(formId);
  var cambios = configurarIdentificacionForm_(form);
  Logger.log("✅ " + form.getTitle() + " — cambios: " + JSON.stringify(cambios));
  return cambios;
}

function ejecutarActivacionIdentificacion_() {
  var lista = listarFormulariosQuiz_();
  var start = CONFIG_ID.BATCH_START || 0;
  var size = CONFIG_ID.BATCH_SIZE || 0;
  var lote = size > 0 ? lista.slice(start, start + size) : lista.slice(start);

  Logger.log("▶ Actualizando identificación en " + lote.length + " formularios");

  var ok = 0;
  var sinCambios = 0;
  var errores = [];

  for (var i = 0; i < lote.length; i++) {
    var meta = lote[i];
    try {
      var form = FormApp.openById(meta.fileId);
      var cambios = configurarIdentificacionForm_(form);
      if (cambios.preguntasAgregadas || cambios.correoActivado || cambios.limiteUnaRespuesta) {
        ok++;
        Logger.log((i + 1) + "/" + lote.length + " ✅ " + meta.formTitle + " — " + resumirCambios_(cambios));
      } else {
        sinCambios++;
        Logger.log((i + 1) + "/" + lote.length + " ⏭ " + meta.formTitle + " — ya configurado");
      }
      if (CONFIG_ID.PAUSA_MS > 0) {
        Utilities.sleep(CONFIG_ID.PAUSA_MS);
      }
    } catch (err) {
      errores.push({ titulo: meta.formTitle, error: String(err) });
      Logger.log((i + 1) + "/" + lote.length + " ❌ " + meta.formTitle + ": " + err);
    }
  }

  Logger.log("——— RESUMEN ———");
  Logger.log("Actualizados: " + ok + " | Sin cambios: " + sinCambios + " | Errores: " + errores.length);
  if (errores.length) {
    Logger.log("Errores: " + JSON.stringify(errores));
  }
  return { actualizados: ok, sinCambios: sinCambios, errores: errores };
}

/**
 * Activa correo + preguntas de identificación al crear o actualizar un formulario.
 * @param {GoogleAppsScript.Forms.Form} form
 * @returns {{preguntasAgregadas: boolean, correoActivado: boolean, limiteUnaRespuesta: boolean}}
 */
function configurarIdentificacionForm_(form) {
  var cambios = {
    preguntasAgregadas: false,
    correoActivado: false,
    limiteUnaRespuesta: false,
  };

  if (!form.collectsEmail()) {
    form.setCollectEmail(true);
    cambios.correoActivado = true;
  }

  if (!form.hasLimitOneResponsePerUser()) {
    form.setLimitOneResponsePerUser(true);
    cambios.limiteUnaRespuesta = true;
  }

  if (!formTienePreguntaIdentificacion_(form, "nombre")) {
    var nom = form.addTextItem();
    nom.setTitle("Nombre completo");
    nom.setHelpText("Escribe tu nombre como aparece en la lista de clase.");
    nom.setRequired(true);
    form.moveItem(form.getItems().length - 1, 0);
    cambios.preguntasAgregadas = true;
  }

  if (!formTienePreguntaIdentificacion_(form, "matricula")) {
    var mat = form.addTextItem();
    mat.setTitle("Matrícula / No. de control");
    mat.setHelpText("Tu número de matrícula o control escolar.");
    mat.setRequired(true);
    var idxMat = formTienePreguntaIdentificacion_(form, "nombre") ? 1 : 0;
    form.moveItem(form.getItems().length - 1, idxMat);
    cambios.preguntasAgregadas = true;
  }

  return cambios;
}

function formTienePreguntaIdentificacion_(form, tipo) {
  var items = form.getItems();
  for (var i = 0; i < items.length; i++) {
    if (items[i].getType() !== FormApp.ItemType.TEXT) {
      continue;
    }
    var t = items[i].getTitle().toLowerCase();
    if (tipo === "nombre" && (t === "nombre completo" || t === "nombre")) {
      return true;
    }
    if (
      tipo === "matricula" &&
      (t.indexOf("matrícula") !== -1 ||
        t.indexOf("matricula") !== -1 ||
        t.indexOf("no. de control") !== -1 ||
        t.indexOf("número de control") !== -1 ||
        t.indexOf("numero de control") !== -1)
    ) {
      return true;
    }
  }
  return false;
}

function listarFormulariosQuiz_() {
  var porTitulo = {};
  var iter = DriveApp.getFilesByType(MimeType.GOOGLE_FORMS);
  var filtro = CONFIG_ID.FILTRO_NOMBRE;

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

function resumirCambios_(cambios) {
  var partes = [];
  if (cambios.preguntasAgregadas) {
    partes.push("preguntas agregadas");
  }
  if (cambios.correoActivado) {
    partes.push("correo ON");
  }
  if (cambios.limiteUnaRespuesta) {
    partes.push("1 respuesta/usuario");
  }
  return partes.join(", ") || "ok";
}
