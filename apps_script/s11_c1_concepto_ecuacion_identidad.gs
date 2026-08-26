function crearQuiz() {
  var form = FormApp.create("S11·C1 Concepto de ecuación e identidad — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S11·C1 Concepto de ecuación e identidad");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "¿Cuál es una identidad?",
      opciones: ["2(x+3)=2x+6", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "¿Cuál es una ecuación?",
      opciones: ["4x-1=15", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (T/F)",
      pregunta: "x+5=5+x es una identidad.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "En 7x-2=19, la incógnita es ___",
      opciones: ["x", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "¿Grado de 2x+5=11?",
      opciones: ["1", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "¿Es x=3 solución de 2x+1=7? — escribe la respuesta.",
      opciones: ["Sí", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "F_1 d_1 = F_2 d_2 con F_2 desconocida es:",
      opciones: ["Ecuación", "nóicaucE", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (T/F)",
      pregunta: "Una identidad tiene una sola solución.",
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
