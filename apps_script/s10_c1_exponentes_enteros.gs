function crearQuiz() {
  var form = FormApp.create("S10·C1 Exponentes enteros y exponente cero — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S10·C1 Exponentes enteros y exponente cero");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "x^4 · x^3 = x^___",
      opciones: ["7", "8", "6", "-7"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "x^8 / x^5 = x^___",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "(x^2)^4 = x^___",
      opciones: ["8", "9", "7", "-8"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "(3xy)^2 = ___x^2y^2",
      opciones: ["9", "10", "8", "-9"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "7^0 = ___",
      opciones: ["1", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "P6 (MC)",
      pregunta: "(2×10³)(4×10⁵) = ?",
      opciones: ["8×10⁸", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill ingeniería)",
      pregunta: "10⁸/10⁵ = 10^___",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P8 (T/F)",
      pregunta: "0⁰ = 1",
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
