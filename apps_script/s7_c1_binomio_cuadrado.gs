function crearQuiz() {
  var form = FormApp.create("S7·C1 Binomio al cuadrado — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S7·C1 Binomio al cuadrado");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "(x+5)² = x²+___x+___",
      opciones: ["10", "11", "9", "-10"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "(x-3)² = x²+___x+___",
      opciones: ["-6", "-5", "-7", "6"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "(2x+7)² = ___x²+___x+___",
      opciones: ["4", "5", "3", "-4"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "(3a-4b)² = ___a²+___ab+___b²",
      opciones: ["9", "10", "8", "-9"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "(x+5)² = x²+25",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (MC)",
      pregunta: "¿Cuál es el término del doble producto de (4x-3)²?",
      opciones: ["-24x", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill ingeniería)",
      pregunta: "Lado de placa = (x+5) cm. Área = x²+___x+___",
      opciones: ["10", "11", "9", "-10"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "(x/2+3)² = x²/___+___x+___",
      opciones: ["4", "5", "3", "-4"],
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
