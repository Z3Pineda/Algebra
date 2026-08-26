function crearQuiz() {
  var form = FormApp.create("S6·C2 Expresión algebraica y términos semejantes — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S6·C2 Expresión algebraica y términos semejantes");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "¿Cuáles son términos semejantes en 3x²+5x-2x²+7?",
      opciones: ["3x² y -2x²", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "3x² + (-2x²) = ___x²",
      opciones: ["1", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "5x + 3x - 2x = ___x",
      opciones: ["6", "7", "5", "-6"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "¿Cuál es el grado del polinomio 4x³-2x+7?",
      opciones: ["3", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "El coeficiente de -7x³y² es ___",
      opciones: ["-7", "-6", "-8", "7"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "Simplifica: 2a+3b-a+5b = ___",
      opciones: ["a+8b", "b8+a", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (MC)",
      pregunta: "¿Qué tipo de expresión es x²+3x-4?",
      opciones: ["Trinomio cuadrático", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill ingeniería)",
      pregunta: "C=3h+2h+15m+8m. Simplificado: C=___h+___m",
      opciones: ["5", "6", "4", "-5"],
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
