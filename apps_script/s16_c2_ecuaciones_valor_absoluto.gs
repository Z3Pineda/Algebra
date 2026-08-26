function crearQuiz() {
  var form = FormApp.create("S16·C2 Ecuaciones con valor absoluto — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S16·C2 Ecuaciones con valor absoluto");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "|x-3|=7 — escribe la respuesta.",
      opciones: ["x=___ o x=___\" → 10", "01 → \"___=x o ___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "|2x+1|=9 — escribe la respuesta.",
      opciones: ["x=___ o x=___\" → 4", "4 → \"___=x o ___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "|x+2|=-3 tiene:",
      opciones: ["0 soluciones", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "|x-5|=0",
      opciones: ["x=___\" → 5", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "|d-50|=0.02 — escribe la respuesta.",
      opciones: ["d=___ o d=___\" → 50.02", "20.05 → \"___=d o ___=d", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P6 (T/F)",
      pregunta: "|f(x)|=k con k<0: sin solucion.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill)",
      pregunta: "|x-1|=|2x+4| — escribe la respuesta.",
      opciones: ["x=___ o x=___\" → -5", "5- → \"___=x o ___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (MC ingeniería)",
      pregunta: "Resolver |L-L0|=δ da:",
      opciones: ["Cotas limite", "etimil satoC", "universal", "vacío"],
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
