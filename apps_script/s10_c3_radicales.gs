function crearQuiz() {
  var form = FormApp.create("S10·C3 Radicales — suma, resta, producto y división — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S10·C3 Radicales — suma, resta, producto y división");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "√72 = ___√2",
      opciones: ["6", "7", "5", "-6"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "3√5 + 7√5 = ___√5",
      opciones: ["10", "11", "9", "-10"],
      correcta: 0
    },
    {
      categoria: "P3 (T/F)",
      pregunta: "√2+√3 = √5",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "√3 · √12 = ___",
      opciones: ["6", "7", "5", "-6"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "√50/√2 = ___",
      opciones: ["5", "6", "4", "-5"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "3/√2 racionalizado = ___√2/2",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill ingeniería)",
      pregunta: "√(3²+4²) = ___",
      opciones: ["5", "6", "4", "-5"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "∛54 = ___∛2",
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
