function crearQuiz() {
  var form = FormApp.create("S15·C3 División sintética y teorema del residuo — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S15·C3 División sintética y teorema del residuo");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "Teorema del residuo: P(a) es el ___",
      opciones: ["Residuo al dividir entre", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "2x³-5x²+x+10, (x-3): residuo=___",
      opciones: ["8", "9", "7", "-8"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "x³-6x²+11x-6, (x-2): residuo=___",
      opciones: ["0", "1", "-1", "2"],
      correcta: 0
    },
    {
      categoria: "P4 (T/F)",
      pregunta: "Residuo 0",
      opciones: ["Falso", "Depende del contexto", "Solo en casos especiales", "0"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "Dividir entre (x+3), usar a=___",
      opciones: ["-3", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "x³-2x+4, P(2)=___",
      opciones: ["8", "9", "7", "-8"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "Ruffini sirve para:",
      opciones: ["Evaluar P en puntos de operacion", "noicarepo ed sotnup ne P raulavE", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (T/F)",
      pregunta: "Sintetica funciona con divisor x²+1.",
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
