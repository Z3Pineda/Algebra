function crearQuiz() {
  var form = FormApp.create("S7·C2 Producto de binomios conjugados — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S7·C2 Producto de binomios conjugados");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "(x+8)(x-8) = x²-___",
      opciones: ["64", "65", "63", "-64"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "(3x+5)(3x-5) = ___x²-___",
      opciones: ["9", "10", "8", "-9"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "(4a+3b)(4a-3b) = ___a²-___b²",
      opciones: ["16", "17", "15", "-16"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "¿Cuántos términos tiene el producto de conjugados?",
      opciones: ["2", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "(x+4)(x-4) = x²-8x-16",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill numérico)",
      pregunta: "97×103 = (100-3)(100+3) = 10000-___ = ___",
      opciones: ["9", "10", "8", "-9"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill ingeniería)",
      pregunta: "(D+t)(D-t) = D²-___",
      opciones: ["t²", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P8 (MC)",
      pregunta: "¿Cuál expresa el área de un anillo con radios R y r?",
      opciones: ["π(R+r)", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
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
