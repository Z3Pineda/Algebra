function crearQuiz() {
  var form = FormApp.create("S16·C3 Desigualdades con valor absoluto — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S16·C3 Desigualdades con valor absoluto");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "|x-3|<5 — escribe la respuesta.",
      opciones: ["intervalo:\" →", "→ \":olavretni", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "|x-3|>5 — escribe la respuesta.",
      opciones: ["x<___ o x>___\" → -2", "2- → \"___>x o ___<x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "|L-100|≤0.5 — escribe la respuesta.",
      opciones: ["L en [___", "___[ ne L", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "|f(x)|<k equivale a:",
      opciones: ["-k < f(x) < k", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "|x-a|>r tiene un solo intervalo.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (MC ingeniería)",
      pregunta: "|d-40|≤0.08",
      opciones: ["d max:\" → 40.08", "80.04 → \":xam d", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (MC)",
      pregunta: "|d-d0|≤t modela:",
      opciones: ["Tolerancia simetrica", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "|d-40|≤0.08 — escribe la respuesta.",
      opciones: ["d min=___\" → 39.92", "29.93 → \"___=nim d", "universal", "vacío"],
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
