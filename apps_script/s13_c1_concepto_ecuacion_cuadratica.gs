function crearQuiz() {
  var form = FormApp.create("S13·C1 Concepto de ecuación cuadrática — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S13·C1 Concepto de ecuación cuadrática");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "Forma general de ecuacion cuadratica:",
      opciones: ["ax²+bx+c=0, a≠0", "x = 0", "x = 1", "Sin solución"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "En x²-5x+6=0, b = ___",
      opciones: ["-5", "-4", "-6", "5"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "x²-9=0 es cuadratica:",
      opciones: ["Incompleta", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (T/F)",
      pregunta: "x=3 es solucion de x²-5x+6=0.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "Si a=0 en ax²+bx+c=0, la ecuacion es:",
      opciones: ["Lineal", "x = 0", "x = 1", "Sin solución"],
      correcta: 0
    },
    {
      categoria: "P6 (MC ingeniería)",
      pregunta: "20t-5t²=0 modela:",
      opciones: ["Tiempo en que h=0", "0=h euq ne opmeiT", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill)",
      pregunta: "Verificar x=2 en x²-5x+6: resultado = ___",
      opciones: ["0", "1", "-1", "2"],
      correcta: 0
    },
    {
      categoria: "P8 (MC)",
      pregunta: "Graficamente, soluciones son:",
      opciones: ["Cortes con eje x", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
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
