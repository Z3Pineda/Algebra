function crearQuiz() {
  var form = FormApp.create("S12·C3 Método de sustitución — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S12·C3 Método de sustitución");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "y=2x+1 en 3x+y=11 — escribe la respuesta.",
      opciones: ["x=___\" → 2", "2 → \"___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "2x+y=7, x-y=2 — escribe la respuesta.",
      opciones: ["(x", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "Primer paso del metodo de sustitucion:",
      opciones: ["Despejar una incognita", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "I1+I2=12, 2I1-I2=3 — escribe la respuesta.",
      opciones: ["I1=___ A\" → 5", "5 → \"A ___=1I", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "Si al sustituir queda 10=12, el sistema es incompatible.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (T/F)",
      pregunta: "Si al sustituir queda 10=10, hay infinitas soluciones.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "En equilibrio estatico con Fx y Fy, conviene:",
      opciones: ["Sistema 2x2 por sustitucion", "noicutitsus rop 2x2 ametsiS", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "x+y=100, 45x+60y=5400 — escribe la respuesta.",
      opciones: ["x=___ kg\" → 40", "04 → \"gk ___=x", "universal", "vacío"],
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
