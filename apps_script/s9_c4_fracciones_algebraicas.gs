function crearQuiz() {
  var form = FormApp.create("S9·C4 Simplificación, multiplicación y división de fracciones algebraicas — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S9·C4 Simplificación, multiplicación y división de fracciones algebraicas");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "(x²-9)/(x+3) simplificada = ___",
      opciones: ["x-3", "3-x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "(x²-4)/(x-2) = ___",
      opciones: ["x+2", "2+x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "(2x)/(x²-1) · (x+1)/4 = x/(___)",
      opciones: ["2", "3", "1", "-2"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "(x²-4)/x ÷ (x+2)/(2x²) = ?",
      opciones: ["2x", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "Se puede cancelar términos en sumas",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "(x³-x)/(x²-2x+1) = x(x+1)/(___)",
      opciones: ["x-1", "1-x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill ingeniería)",
      pregunta: "η = P_out/P_in es una ___ algebraica",
      opciones: ["fracción", "nóiccarf", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "Dividir fracciones = multiplicar por el ___",
      opciones: ["recíproco", "ocorpícer", "universal", "vacío"],
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
