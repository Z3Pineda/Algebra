function crearQuiz() {
  var form = FormApp.create("S13·C4 Completando el cuadrado — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S13·C4 Completando el cuadrado");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "x²+6x completado: (x+___)² - ___",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "x²+6x-7=0 — escribe la respuesta.",
      opciones: ["(x+3)²=___\" → 16", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "x²+6x-7=0 — escribe la respuesta.",
      opciones: ["x=___ o x=___\" → 1", "1 → \"___=x o ___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "Para x²+4x, se suma y resta:",
      opciones: ["4", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "Vertice de x²-6x+5: x=___",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P6 (T/F)",
      pregunta: "La formula general se deriva completando el cuadrado.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "h=-5(t-3)²+47",
      opciones: ["altura max en t=___\" → 3", "3 → \"___=t ne xam arutla", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "2x²+8x-10=0: primero dividir entre ___",
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
