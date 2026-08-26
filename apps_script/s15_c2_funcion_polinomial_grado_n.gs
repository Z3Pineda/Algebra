function crearQuiz() {
  var form = FormApp.create("S15·C2 Función polinomial de grado n — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S15·C2 Función polinomial de grado n");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "2x⁴-3x²+x-5 grado=___",
      opciones: ["4", "5", "3", "-4"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "Coeficiente lider de -x³+2x: — escribe la respuesta.",
      opciones: ["-1", "0", "-2", "1"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "Grado par, a_n>0",
      opciones: ["extremos:\" → +∞ ambos lados", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "Raiz de P(x) es:",
      opciones: ["r tal que P(r)=0", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "Grado n",
      opciones: ["Falso", "Depende del contexto", "Solo en casos especiales", "0"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "Termino independiente de 3x²-5x+7: — escribe la respuesta.",
      opciones: ["7", "8", "6", "-7"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "Curva de calibracion es polinomio porque:",
      opciones: ["Modela relacion no lineal", "laenil on noicaler aledoM", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (MC)",
      pregunta: "P(x)=5 es polinomio grado:",
      opciones: ["0", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
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
