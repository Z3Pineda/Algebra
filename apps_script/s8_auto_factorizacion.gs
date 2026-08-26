function crearQuiz() {
  var form = FormApp.create("S8·Auto Ejercicios de factorización — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S8·Auto Ejercicios de factorización");
  form.setDescription("Quiz del curso — 15 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "Factor común",
      pregunta: "¿Cuál es 6x²+15x?",
      opciones: ["3x(2x+5)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Factor común",
      pregunta: "¿Cuál es 8a³b-12a²b²+4ab³?",
      opciones: ["4ab(2a²-3ab+b²)", "ba4", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Trinomios tanteo",
      pregunta: "¿Cuál es x²+9x+20?",
      opciones: ["(x+4)(x+5)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Trinomios tanteo",
      pregunta: "¿Cuál es x²-11x+24?",
      opciones: ["(x-3)(x-8)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Trinomios tanteo",
      pregunta: "¿Cuál es x²+2x-15?",
      opciones: ["(x+5)(x-3)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Trinomios tanteo",
      pregunta: "¿Cuál es x²+9x+20=(x+4)(x+5), x²-11x+24=(x-3)(x-8), x²+2x-15?",
      opciones: ["(x+5)(x-3)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Trinomios AC",
      pregunta: "¿Cuál es 2x²+7x+3?",
      opciones: ["(2x+1)(x+3)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Trinomios AC",
      pregunta: "¿Cuál es 6x²-x-12?",
      opciones: ["(2x-3)(3x+4)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Trinomios AC",
      pregunta: "¿Cuál es 2x²+7x+3=(2x+1)(x+3), 6x²-x-12?",
      opciones: ["(2x-3)(3x+4)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Diferencia de cuadrados",
      pregunta: "¿Cuál es x²-81?",
      opciones: ["(x+9)(x-9)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Diferencia de cuadrados",
      pregunta: "¿Cuál es x⁴-16?",
      opciones: ["(x²+4)(x+2)(x-2)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Diferencia de cuadrados",
      pregunta: "¿Cuál es x²-81=(x+9)(x-9), x⁴-16?",
      opciones: ["(x²+4)(x+2)(x-2)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Cubos",
      pregunta: "¿Cuál es x³-27?",
      opciones: ["(x-3)(x²+3x+9)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Cubos",
      pregunta: "¿Cuál es 27a³+8b³?",
      opciones: ["(3a+2b)(9a²-6ab+4b²)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Problema de ingeniería",
      pregunta: "R²-r²=(R+r)(R-r) con R=15 r=9?",
      opciones: ["área 144π mm²", "²mm π441 aerá", "universal", "vacío"],
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
