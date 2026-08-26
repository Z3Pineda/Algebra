function crearQuiz() {
  var form = FormApp.create("S8·C1 Factor común — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S8·C1 Factor común");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
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
