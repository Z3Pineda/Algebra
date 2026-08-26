function crearQuiz() {
  var form = FormApp.create("S11·C2 Ecuaciones lineales — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S11·C2 Ecuaciones lineales");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "3x - 7 = 14 — escribe la respuesta.",
      opciones: ["x = ___\" → 7", "7 → \"___ = x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "2(x+3) - 5 = 11 — escribe la respuesta.",
      opciones: ["x = ___\" → 5", "5 → \"___ = x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "5x - 3 = 2x + 9 — escribe la respuesta.",
      opciones: ["x = ___\" → 4", "4 → \"___ = x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "x/4 + 3 = 7 — escribe la respuesta.",
      opciones: ["x = ___\" → 16", "61 → \"___ = x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "Primer paso para 4(x-1)=20:",
      opciones: ["Distribuir o dividir entre 4", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill ingeniería)",
      pregunta: "875 = 250x — escribe la respuesta.",
      opciones: ["x = ___ m\" → 3.5", "5.3 → \"m ___ = x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill ingeniería)",
      pregunta: "12 = 4I — escribe la respuesta.",
      opciones: ["I = ___ A\" → 3", "3 → \"A ___ = I", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (T/F)",
      pregunta: "Siempre verificas sustituyendo en la ecuación original.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
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
