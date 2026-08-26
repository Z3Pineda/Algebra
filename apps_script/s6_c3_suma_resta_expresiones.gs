function crearQuiz() {
  var form = FormApp.create("S6·C3 Suma y resta de expresiones algebraicas — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S6·C3 Suma y resta de expresiones algebraicas");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
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
