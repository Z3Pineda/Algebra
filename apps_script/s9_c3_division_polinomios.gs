function crearQuiz() {
  var form = FormApp.create("S9·C3 División de polinomios — algoritmo de la división — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S9·C3 División de polinomios — algoritmo de la división");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "(x²+5x+6)/(x+2) — escribe la respuesta.",
      opciones: ["Q(x)=x+___\" → 3", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "(x²+5x+6)/(x+2) — escribe la respuesta.",
      opciones: ["R(x)=___\" → 0", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "(2x³-5x²+3x-1)/(x-2) — escribe la respuesta.",
      opciones: ["residuo = ___\" → 1", "1 → \"___ = oudiser", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "Identidad de división:",
      opciones: ["D = d·Q + R", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "El grado del residuo puede ser igual al del divisor",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "(x³-8)/(x-2) — escribe la respuesta.",
      opciones: ["Q(x)=x²+___x+4\" → 2", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill ingeniería)",
      pregunta: "Si R=0, la división es ___",
      opciones: ["exacta", "atcaxe", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "(x²-9)/(x+3) — escribe la respuesta.",
      opciones: ["Q(x)=___\" → x-3", "universal", "vacío", "intersección"],
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
