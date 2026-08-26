function crearQuiz() {
  var form = FormApp.create("S4·C2 La recta numérica — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S4·C2 La recta numérica");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "¿Cuál es mayor: -2 o -8?",
      opciones: ["-2", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "|-7| = ___",
      opciones: ["7", "8", "6", "-7"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "d(-3, 5) = |5-(-3)| = ___",
      opciones: ["8", "9", "7", "-8"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "¿Qué intervalo incluye ambos extremos?",
      opciones: ["Cerrado [a,b]", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "x=4 pertenece al intervalo (3, 5).",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (T/F)",
      pregunta: "x=3 pertenece al intervalo (3, 5).",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "Tolerancia: d ∈ [24.8, 25.2]. Pieza con d=24.8 mm...",
      opciones: ["Aprobada", "adaborpA", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill ingeniería)",
      pregunta: "Desviación de una pieza: d=25.4, nominal=25.0. |25.4-25.0| = ___ mm",
      opciones: ["0.4", "1", "0", "-1"],
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
