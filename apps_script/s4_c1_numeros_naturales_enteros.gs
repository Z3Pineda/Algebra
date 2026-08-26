function crearQuiz() {
  var form = FormApp.create("S4·C1 Números naturales, enteros, racionales, irracionales y reales — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S4·C1 Números naturales, enteros, racionales, irracionales y reales");
  form.setDescription("Quiz del curso — 10 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "¿A cuál conjunto pertenece -7 pero NO pertenece 3/4?",
      opciones: ["ℤ", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "¿Cuál de estos es irracional?",
      opciones: ["√7", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (T/F)",
      pregunta: "Todo número natural es también racional.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "0.666... (periódico) es:",
      opciones: ["Racional", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "¿Cuál es la jerarquía correcta?",
      opciones: ["N⊂Z⊂Q⊂R", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "ℚ ∩ ℐ = ___",
      opciones: ["∅", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P7 (MC)",
      pregunta: "π pertenece a:",
      opciones: ["ℝ pero no a ℚ", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P8 (MC ingeniería)",
      pregunta: "La relación de transmisión 3/2 de un engranaje es:",
      opciones: ["Racional", "lanoicaR", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P9 (T/F)",
      pregunta: "√4 = 2 es irracional.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P10 (MC)",
      pregunta: "¿Cuántos conjuntos numéricos contienen al número -5/3?",
      opciones: ["2", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
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
