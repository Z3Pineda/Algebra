function crearQuiz() {
  var form = FormApp.create("S12·C1 Modelación de situaciones con ecuaciones lineales — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S12·C1 Modelación de situaciones con ecuaciones lineales");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
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
  ];

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

  Logger.log("✅ Formulario creado: " + form.getTitle());
  Logger.log("🔗 Editar: " + form.getEditUrl());
  Logger.log("🔗 Compartir: " + form.getPublishedUrl());
}
