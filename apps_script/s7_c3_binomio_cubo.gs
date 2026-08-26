function crearQuiz() {
  var form = FormApp.create("S7·C3 Binomio al cubo — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S7·C3 Binomio al cubo");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "(x+1)³ = x³+___x²+___x+___",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "(x-2)³ = x³-___x²+___x-___",
      opciones: ["6", "7", "5", "-6"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "(2x+3)³. El coeficiente de x² es ___",
      opciones: ["36", "37", "35", "-36"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "Los coeficientes de (a+b)³ son:",
      opciones: ["1, 3, 3, 1", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "(a-b)³ = a³-b³",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "(a-b)³. El signo del 3° término (3ab²) es ___",
      opciones: ["positivo", "ovitisop", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill ingeniería)",
      pregunta: "Lado=50+0.2. Volumen=(50)³+3(50)²(0.2)+3(50)(0.04)+0.008 = ___mm³",
      opciones: ["126506.008", "126507", "126505", "-126506"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "(x+y)³. El 2° término es ___x²y",
      opciones: ["3", "4", "2", "-3"],
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
