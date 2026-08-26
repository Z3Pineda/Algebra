function crearQuiz() {
  var form = FormApp.create("S2·C3 Conjunción y disyunción — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S2·C3 Conjunción y disyunción");
  form.setDescription("Quiz del curso — 10 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "Si p=V y q=F, ¿cuál es p∧q?",
      opciones: ["F", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "Si p=F y q=F, ¿cuál es p∨q?",
      opciones: ["F", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "Si p=V y q=F, ¿cuál es p∨q?",
      opciones: ["V", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (T/F)",
      pregunta: "p∧q es V cuando al menos una proposición es V.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "p∨q es F solo cuando ambas proposiciones son F.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (MC ingeniería)",
      pregunta: "La prensa arranca con p∧g. Si p=V y g=F, ¿arranca?",
      opciones: ["No — g=F hace que p∧g=F", "F=g∧p euq ecah F=g — oN", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "La alarma suena con s∨v. Si s=F y v=V, ¿suena?",
      opciones: ["Sí — v=V hace que s∨v=V", "V=v∨s euq ecah V=v — íS", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (MC)",
      pregunta: "¿A qué operación de conjuntos corresponde P(x)∧Q(x)?",
      opciones: ["A∩B", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
      correcta: 0
    },
    {
      categoria: "P9 (MC)",
      pregunta: "¿A qué operación corresponde P(x)∨Q(x)?",
      opciones: ["A∪B", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P10 (Fill)",
      pregunta: "¿Cuánto es \"Sea P(x): x es par, Q(x): x>5, U?",
      opciones: ["1,...,10.", "2", "0", "-1"],
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
