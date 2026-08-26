function crearQuiz() {
  var form = FormApp.create("S7·C4 Producto de un binomio por un trinomio — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S7·C4 Producto de un binomio por un trinomio");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "(x+4)(x²-4x+16) = x³+___",
      opciones: ["64", "65", "63", "-64"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "(x-5)(x²+5x+25) = x³-___",
      opciones: ["125", "126", "124", "-125"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "(2x+3)(4x²-6x+9) = ___x³+___",
      opciones: ["8", "9", "7", "-8"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "¿Qué es el trinomio especial para (a+b)(a²?ab+b²)?",
      opciones: ["a²-ab+b²", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "El trinomio especial de (a+b) es el mismo que (a+b)².",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "(3a-2b)(9a²+6ab+4b²) = ___a³-___b³",
      opciones: ["27", "28", "26", "-27"],
      correcta: 0
    },
    {
      categoria: "P7 (MC)",
      pregunta: "¿Cuántos términos tiene a³+b³?",
      opciones: ["2", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill ingeniería)",
      pregunta: "10³-8³=(10-8)(100+___+64)=2×___=___",
      opciones: ["80", "81", "79", "-80"],
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
