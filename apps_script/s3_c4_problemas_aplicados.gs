function crearQuiz() {
  var form = FormApp.create("S3·C4 Problemas aplicados con conjuntos y lógica — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S3·C4 Problemas aplicados con conjuntos y lógica");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "|S∪C∪M| = ___",
      opciones: ["55", "56", "54", "-55"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "Técnicos sin ninguna certificación: ___",
      opciones: ["5", "6", "4", "-5"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "Solo soldadura (sin C ni M): ___",
      opciones: ["17", "18", "16", "-17"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "Exactamente dos certificaciones: ___",
      opciones: ["16", "17", "15", "-16"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "Centro S∩C∩M: ___",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "¿Cuántas combinaciones abren la válvula con (p∨q)∧r? — escribe la respuesta.",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P7 (MC)",
      pregunta: "Si p=F, q=F, r=V, ¿se abre?",
      opciones: ["No", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "¿Cuántas piezas de las 8 se aprueban con P1∧P2? — escribe la respuesta.",
      opciones: ["4", "5", "3", "-4"],
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
