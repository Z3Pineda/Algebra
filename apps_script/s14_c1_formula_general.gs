function crearQuiz() {
  var form = FormApp.create("S14·C1 Fórmula general — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S14·C1 Fórmula general");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "x²-5x+6=0 — escribe la respuesta.",
      opciones: ["Δ=___\" → 1", "1 → \"___=Δ", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "Δ>0 implica:",
      opciones: ["2 soluciones reales", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "x²-4x+4=0 — escribe la respuesta.",
      opciones: ["x=___\" → 2", "2 → \"___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "Δ<0 implica:",
      opciones: ["0 soluciones reales", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "3x²-2x-1=0 — escribe la respuesta.",
      opciones: ["x=1 o x=___\" → -1/3", "3/1- → \"___=x o 1=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P6 (T/F)",
      pregunta: "La formula general se deriva completando el cuadrado.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "Δ<0 en ecuacion de tiempo significa:",
      opciones: ["No hay solucion fisica real", "laer acisif noiculos yah oN", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "ω²+3ω+2=0 — escribe la respuesta.",
      opciones: ["ω=___ o ω=___\" → -1", "1- → \"___=ω o ___=ω", "universal", "vacío"],
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
