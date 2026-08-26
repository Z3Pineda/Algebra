function crearQuiz() {
  var form = FormApp.create("S10·C2 Exponentes negativos y fraccionarios — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S10·C2 Exponentes negativos y fraccionarios");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "x^(-4) = 1/x^___",
      opciones: ["4", "5", "3", "-4"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "2^(-3) = ___",
      opciones: ["1/8", "1/9", "2/8", "0/8"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "16^(1/2) = ___",
      opciones: ["4", "5", "3", "-4"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "8^(2/3) = ___",
      opciones: ["4", "5", "3", "-4"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "x^(-1/2) = ?",
      opciones: ["1/√x", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "x^(1/2) · x^(1/3) = x^(___)",
      opciones: ["5/6", "5/7", "6/6", "4/6"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill ingeniería)",
      pregunta: "Hz = s^(-1) — escribe la respuesta.",
      opciones: ["exponente = ___\" → -1", "1- → \"___ = etnenopxe", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (T/F)",
      pregunta: "(-4)^(1/2) es un número real",
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
