function crearQuiz() {
  var form = FormApp.create("S13·C3 Ecuaciones de la forma (x+a)²=b — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S13·C3 Ecuaciones de la forma (x+a)²=b");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "(x-3)²=16 — escribe la respuesta.",
      opciones: ["x=___ o x=___\" → 7", "7 → \"___=x o ___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "(x+5)²=0 — escribe la respuesta.",
      opciones: ["x=___\" → -5", "5- → \"___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "(x-2)²=-9 tiene:",
      opciones: ["0 soluciones reales", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (T/F)",
      pregunta: "Al aplicar raiz cuadrada hay que usar ±.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "x²=49 — escribe la respuesta.",
      opciones: ["x=___\" → ±7", "7± → \"___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "r²=25 — escribe la respuesta.",
      opciones: ["r=___ cm (radio positivo)\" → 5", "mc ___=r", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "(D-40)²=0.09",
      opciones: ["D=___ mm\" → 40.3 o 39.7", "7.93 o 3.04 → \"mm ___=D", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (MC)",
      pregunta: "b>0 en (x+a)²=b implica:",
      opciones: ["Dos soluciones", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
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
