/**
 * RECUPERAR ENLACES — sin crear formularios nuevos
 *
 * Usa ESTE archivo en un proyecto Apps Script aparte (pequeño, rápido de pegar)
 * O pega estas funciones al FINAL de tu Code.gs grande (después de var QUIZZES).
 *
 * 1. Ejecuta recuperarEnlacesDesdeDrive()
 * 2. Descarga algebra_quiz_urls_recuperado.json de Drive
 * 3. En tu PC: py apps_script/apply_form_urls.py --match-title algebra_quiz_urls_recuperado.json
 */

function recuperarEnlacesDesdeDrive() {
  var porTitulo = {};
  var iter = DriveApp.getFilesByType(MimeType.GOOGLE_FORMS);
  var total = 0;

  while (iter.hasNext()) {
    var file = iter.next();
    var name = file.getName();
    // Solo formularios del curso (creados por FormApp.create("… — Quiz"))
    if (name.indexOf("Quiz") === -1) {
      continue;
    }
    total++;
    try {
      var form = FormApp.openById(file.getId());
      var entry = {
        formTitle: name,
        titulo: form.getTitle(),
        editUrl: form.getEditUrl(),
        publicUrl: form.getPublishedUrl(),
        modified: file.getLastUpdated().toISOString(),
        fileId: file.getId(),
      };
      // Si hay duplicados (reintentos tras timeout), quedarse con el más reciente
      if (!porTitulo[name] || file.getLastUpdated() > new Date(porTitulo[name].modified)) {
        porTitulo[name] = entry;
      }
    } catch (err) {
      Logger.log("⚠ No se pudo abrir: " + name + " — " + err);
    }
  }

  var forms = [];
  for (var key in porTitulo) {
    forms.push(porTitulo[key]);
  }
  forms.sort(function (a, b) {
    return a.formTitle.localeCompare(b.formTitle);
  });

  var payload = {
    generado: Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd'T'HH:mm:ss"),
    origen: "recuperarEnlacesDesdeDrive",
    escaneados: total,
    unicos: forms.length,
    forms: forms,
  };

  var json = JSON.stringify(payload, null, 2);
  var outFile = DriveApp.createFile("algebra_quiz_urls_recuperado.json", json, MimeType.PLAIN_TEXT);
  Logger.log("📁 Formularios únicos: " + forms.length + " (escaneados: " + total + ")");
  Logger.log("📁 JSON: " + outFile.getUrl());

  if (forms.length > 0) {
    var ss = SpreadsheetApp.create("Enlaces recuperados Álgebra " + Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd HH:mm"));
    var sh = ss.getActiveSheet();
    sh.appendRow(["formTitle", "titulo", "editUrl", "publicUrl", "modified"]);
    for (var i = 0; i < forms.length; i++) {
      var f = forms[i];
      sh.appendRow([f.formTitle, f.titulo, f.editUrl, f.publicUrl, f.modified]);
    }
    Logger.log("📊 Hoja: " + ss.getUrl());
  }

  return payload;
}

/**
 * Si tienes el script grande con var QUIZZES = [...], usa esta versión:
 * empareja por título exacto y reporta faltantes/duplicados.
 */
function recuperarEnlacesDesdeQuizzes() {
  if (typeof QUIZZES === "undefined") {
    throw new Error("QUIZZES no existe. Usa recuperarEnlacesDesdeDrive() o pega el script maestro.");
  }

  var resultados = [];
  var noEncontrados = [];
  var conDuplicados = [];

  for (var i = 0; i < QUIZZES.length; i++) {
    var def = QUIZZES[i];
    var iter = DriveApp.getFilesByName(def.formTitle);
    var count = 0;
    var best = null;
    var bestDate = null;

    while (iter.hasNext()) {
      count++;
      var file = iter.next();
      var d = file.getLastUpdated();
      if (!best || d > bestDate) {
        best = file;
        bestDate = d;
      }
    }

    if (!best) {
      noEncontrados.push(def.slug);
      continue;
    }
    if (count > 1) {
      conDuplicados.push(def.slug + " (" + count + " copias, usando la más reciente)");
    }

    var form = FormApp.openById(best.getId());
    resultados.push({
      slug: def.slug,
      titulo: def.title,
      formTitle: def.formTitle,
      editUrl: form.getEditUrl(),
      publicUrl: form.getPublishedUrl(),
      modified: bestDate.toISOString(),
      copiasEnDrive: count,
    });
  }

  var payload = {
    generado: Utilities.formatDate(new Date(), Session.getScriptTimeZone(), "yyyy-MM-dd'T'HH:mm:ss"),
    origen: "recuperarEnlacesDesdeQuizzes",
    total: resultados.length,
    faltantes: noEncontrados,
    duplicados: conDuplicados,
    forms: resultados,
  };

  var json = JSON.stringify(payload, null, 2);
  var outFile = DriveApp.createFile("algebra_quiz_urls_recuperado.json", json, MimeType.PLAIN_TEXT);
  Logger.log("✅ Encontrados: " + resultados.length + " / " + QUIZZES.length);
  Logger.log("📁 JSON: " + outFile.getUrl());
  if (noEncontrados.length) {
    Logger.log("❌ Faltantes (" + noEncontrados.length + "): " + noEncontrados.join(", "));
  }
  if (conDuplicados.length) {
    Logger.log("⚠ Duplicados: " + conDuplicados.join("; "));
  }

  return payload;
}
