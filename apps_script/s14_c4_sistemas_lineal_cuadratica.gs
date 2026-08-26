function crearQuiz() {
  var form = FormApp.create("S14·C4 Sistemas con una ecuación lineal y una cuadrática — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S14·C4 Sistemas con una ecuación lineal y una cuadrática");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "y=x+1, y=x²-2x+3 — escribe la respuesta.",
      opciones: ["(x", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "Metodo principal:",
      opciones: ["Sustitucion desde ecuacion lineal", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "x+y=100, xy=2400 — escribe la respuesta.",
      opciones: ["x=___ o x=___\" → 40", "04 → \"___=x o ___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "Recta tangente a parabola",
      opciones: ["___ soluciones\" → 1", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "Puede haber 0 soluciones reales.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (MC)",
      pregunta: "Graficamente:",
      opciones: ["Interseccion recta y parabola", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "x+y=capacidad, xy=k modela:",
      opciones: ["Punto de operacion", "noicarepo ed otnuP", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "y=x, y=x²+1 — escribe la respuesta.",
      opciones: ["Δ=___\" → -3", "3- → \"___=Δ", "universal", "vacío"],
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
