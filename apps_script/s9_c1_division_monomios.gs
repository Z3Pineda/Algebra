function crearQuiz() {
  var form = FormApp.create("S9·C1 División de monomios — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S9·C1 División de monomios");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "x^8 / x^3 = x^___",
      opciones: ["5", "6", "4", "-5"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "x^4 / x^4 = ___",
      opciones: ["1", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "x^2 / x^6 = 1/x^___",
      opciones: ["4", "5", "3", "-4"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "12a^5 / 3a^2 = ___a^3",
      opciones: ["4", "5", "3", "-4"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "¿Resultado de 8x^3y^2 / 2xy^4?",
      opciones: ["4x²/y²", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P6 (T/F)",
      pregunta: "x^0 = 0 para todo x",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill ingeniería)",
      pregunta: "ω₁/ω₂ = 2πn₁/(2πn₂) = n₁/___",
      opciones: ["n₂", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "-15b^4 / 5b^7 = ___/b^3",
      opciones: ["-3", "-2", "-4", "3"],
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
