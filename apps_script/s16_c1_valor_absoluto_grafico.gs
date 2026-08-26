function crearQuiz() {
  var form = FormApp.create("S16·C1 Valor absoluto e interpretación gráfica — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S16·C1 Valor absoluto e interpretación gráfica");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "|-7| = ___",
      opciones: ["7", "8", "6", "-7"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "|x| representa:",
      opciones: ["Distancia al cero", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (T/F)",
      pregunta: "|-x| = |x|",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "|3-5| = ___",
      opciones: ["2", "3", "1", "-2"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "Vértice de |x-3|+2:",
      opciones: ["(3, 2)", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P6 (MC)",
      pregunta: "|a+b| ≤ |a|+|b| es:",
      opciones: ["Desigualdad triangular", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "|d-25.5|=0.03 significa:",
      opciones: ["Error absoluto 0.03 mm", "mm 30.0 otulosba rorrE", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (T/F)",
      pregunta: "|x|=-5 tiene solucion real.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
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
