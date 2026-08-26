function crearQuiz() {
  var form = FormApp.create("S15·C1 Sistemas de ecuaciones cuadráticas — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S15·C1 Sistemas de ecuaciones cuadráticas");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "x²+y²=25, x+y=7 — escribe la respuesta.",
      opciones: ["(3", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "Metodo principal:",
      opciones: ["Sustitucion", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "y=x², y=2x+3 — escribe la respuesta.",
      opciones: ["x=___ o x=___\" → -1", "1- → \"___=x o ___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "Dos parabolas pueden intersectarse en max:",
      opciones: ["4 puntos", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "Grafico muestra intersecciones de curvas.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "y=x²-2, y=-x²+4 — escribe la respuesta.",
      opciones: ["x=±___\" → √3", "3√ → \"___±=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "Igualar h1=h2 busca:",
      opciones: ["Instante de misma altura", "arutla amsim ed etnatsnI", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (MC)",
      pregunta: "0 intersecciones significa:",
      opciones: ["Sistema sin solucion real", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
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
