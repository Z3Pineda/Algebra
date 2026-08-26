function crearQuiz() {
  var form = FormApp.create("S9·C2 División de polinomio entre monomio — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S9·C2 División de polinomio entre monomio");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
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
