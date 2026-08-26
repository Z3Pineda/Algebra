function crearQuiz() {
  var form = FormApp.create("S1·C4 Operaciones básicas con conjuntos — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S1·C4 Operaciones básicas con conjuntos");
  form.setDescription("Quiz del curso — 10 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P9 (T/F)",
      pregunta: "A-B=B-A siempre",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P1",
      pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — ¿cuál es el resultado de A∪B?",
      opciones: ["1,2,3,4,5,6,7", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "P2",
      pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — ¿cuál es el resultado de A∩B?",
      opciones: ["3,4,5", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P3",
      pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — ¿cuál es el resultado de A-B?",
      opciones: ["1,2", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "P4",
      pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — ¿cuál es el resultado de B-A?",
      opciones: ["6,7", "7", "5", "-6"],
      correcta: 0
    },
    {
      categoria: "P5",
      pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — ¿cuál es el resultado de A'?",
      opciones: ["6,7,8,9,10", "7", "5", "-6"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — |A∪B|?",
      opciones: ["7", "8", "6", "-7"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill)",
      pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — PIE: 5+5-3?",
      opciones: ["7", "8", "6", "-7"],
      correcta: 0
    },
    {
      categoria: "P8 (ingeniería)",
      pregunta: "Sean A=1,2,3,4,5, B=3,4,5,6,7, U=1,...,10 — 45 vibración + 30 calor - 20 ambas?",
      opciones: ["55", "56", "54", "-55"],
      correcta: 0
    },
    {
      categoria: "P10 (Fill)",
      pregunta: "Si A∩B=∅ los conjuntos son",
      opciones: ["Disjuntos", "sotnujsiD", "universal", "vacío"],
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
