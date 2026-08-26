function crearQuiz() {
  var form = FormApp.create("S8·C4 Cubos y agrupación — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S8·C4 Cubos y agrupación");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "x³ - 27 = (x - ___)(x² + ___x + 9)",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "x³ + 64 = (x + ___)(x² - ___x + 16)",
      opciones: ["4", "5", "3", "-4"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "8x³ - 125 = (___x - 5)(4x² + ___x + 25)",
      opciones: ["2", "3", "1", "-2"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "L³ - l³ = (L - l)(L² + ___ + l²)",
      opciones: ["Ll", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "x³ - 9 es diferencia de cubos",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (MC)",
      pregunta: "¿Factorización de 2x³+3x²+2x+3?",
      opciones: ["(2x+3)", "2x", "x", "4x"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill agrupación)",
      pregunta: "ax+ay+bx+by = (x+y)(___)",
      opciones: ["a+b", "b+a", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill ingeniería)",
      pregunta: "L=10, l=7 — escribe la respuesta.",
      opciones: ["L³-l³ = ___ cm³\" → 657", "756 → \"³mc ___ = ³l-³L", "universal", "vacío"],
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
