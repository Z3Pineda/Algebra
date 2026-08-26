function crearQuiz() {
  var form = FormApp.create("S12·C2 Sistemas de dos ecuaciones con dos incógnitas — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S12·C2 Sistemas de dos ecuaciones con dos incógnitas");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "Solucion de un sistema 2x2 es:",
      opciones: ["Par (x,y) que satisface ambas ecuaciones", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "Rectas secantes",
      opciones: ["sistema:\" → Compatible determinado", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "Rectas paralelas",
      opciones: ["sistema:\" → Incompatible", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (T/F)",
      pregunta: "x+y=5 y 2x+2y=10 tienen infinitas soluciones.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "y=2x+1 e y=-x+7 — escribe la respuesta.",
      opciones: ["x=___", "___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P6 (MC ingeniería)",
      pregunta: "Dos ecuaciones de equilibrio (Fx, Fy) forman:",
      opciones: ["Sistema 2x2", "2x2 ametsiS", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (T/F)",
      pregunta: "Sistema incompatible tiene al menos una solucion.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P8 (MC)",
      pregunta: "Graficamente, la solucion es:",
      opciones: ["Punto de interseccion", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
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
