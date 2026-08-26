function crearQuiz() {
  var form = FormApp.create("S11·C4 Ecuaciones con fracciones — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S11·C4 Ecuaciones con fracciones");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "x/3 + x/2 = 5 — escribe la respuesta.",
      opciones: ["x = ___\" → 6", "6 → \"___ = x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "MCM(4, 6) = ___",
      opciones: ["12", "13", "11", "-12"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "1/R_T = 1/6 + 1/3 — escribe la respuesta.",
      opciones: ["R_T = ___ Ω\" → 2", "2 → \"Ω ___ = T_R", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "Primer paso para x/4 + 1 = 3:",
      opciones: ["Multiplicar por MCM(4,1)=4", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "Si x=0 anula un denominador, x=0 no es solución válida.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "(x+2)/3 - (x-1)/2 = 4 — escribe la respuesta.",
      opciones: ["x = ___\" → -17", "71- → \"___ = x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "En 1/R_T = 1/R_1 + 1/R_2, R_T es:",
      opciones: ["Menor que R_1 y R_2", "2_R y 1_R euq roneM", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "3/x + 2/x = 5/2 con x≠0 — escribe la respuesta.",
      opciones: ["x = ___\" → 2", "2 → \"___ = x", "universal", "vacío"],
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
