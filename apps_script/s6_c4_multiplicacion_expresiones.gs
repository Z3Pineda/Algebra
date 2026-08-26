function crearQuiz() {
  var form = FormApp.create("S6·C4 Multiplicación de expresiones algebraicas — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S6·C4 Multiplicación de expresiones algebraicas");
  form.setDescription("Quiz del curso — 10 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "3x(2x²-5x+4) = ___x³+___x²+___x",
      opciones: ["6", "7", "5", "-6"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "(x+3)(x+5) = x²+___x+___",
      opciones: ["8", "9", "7", "-8"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "(x-4)(x+2) = x²+___x+___",
      opciones: ["-2", "-1", "-3", "2"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "(2x+1)(3x-4) = ___x²+___x+___",
      opciones: ["6", "7", "5", "-6"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "(x+3)² = x²+9",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "x² · x³ = x^___",
      opciones: ["5", "6", "4", "-5"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill)",
      pregunta: "(-3x²)(4x³) = ___x^___",
      opciones: ["-12", "-11", "-13", "12"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "(x+2)(x²-3x+1) = x³+___x²+___x+___",
      opciones: ["-1", "0", "-2", "1"],
      correcta: 0
    },
    {
      categoria: "P9 (MC ingeniería)",
      pregunta: "(a+t)(b+t) con a=100,b=80,t=0.5. Área = ___mm²",
      opciones: ["8090.25", "8091", "8089", "-8090"],
      correcta: 0
    },
    {
      categoria: "P10 (Fill)",
      pregunta: "(2x-3)(2x+3) = 4x²+___",
      opciones: ["-9", "-8", "-10", "9"],
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
