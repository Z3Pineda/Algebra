function crearQuiz() {
  var form = FormApp.create("S8·C2 Factorización de trinomios — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S8·C2 Factorización de trinomios");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
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
