function crearQuiz() {
  var form = FormApp.create("S8·C3 Diferencia de cuadrados — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S8·C3 Diferencia de cuadrados");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "x² - 49 = (x + ___)(x - ___)",
      opciones: ["7", "8", "6", "-7"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "9x² - 16 = (___x + 4)(___x - 4)",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "25 - y² = (5 + ___)(5 - ___)",
      opciones: ["y", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "x⁴ - 16 = (x² + 4)(x² - ___)",
      opciones: ["4", "5", "3", "-4"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "x² - 12 es diferencia de cuadrados",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (MC)",
      pregunta: "¿Factorización de 4x² - 81?",
      opciones: ["(2x+9)", "2x", "x", "4x"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill ingeniería)",
      pregunta: "R=12, r=8 — escribe la respuesta.",
      opciones: ["R²-r² = (___)(___)\" → 20", "= ²r-²R", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "(D+t)² - (D-t)² = ___",
      opciones: ["4Dt", "tD4", "universal", "vacío"],
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
