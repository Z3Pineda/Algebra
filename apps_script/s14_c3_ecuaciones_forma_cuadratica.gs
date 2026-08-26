function crearQuiz() {
  var form = FormApp.create("S14·C3 Ecuaciones de forma cuadrática — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S14·C3 Ecuaciones de forma cuadrática");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "x⁴-5x²+4=0 sustitucion:",
      opciones: ["u=x²", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "u²-5u+4=0 — escribe la respuesta.",
      opciones: ["u=___ o u=___\" → 1", "1 → \"___=u o ___=u", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "x⁴-5x²+4=0 — escribe la respuesta.",
      opciones: ["x=___ (todas)\" → ±1", "___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "x^(2/3)-3x^(1/3)+2=0",
      opciones: ["u=___\" → x^", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "u=1,2 — escribe la respuesta.",
      opciones: ["x=___\" → 1", "1 → \"___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P6 (T/F)",
      pregunta: "u=-3 con u=x² no da x real.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "ω⁴-5ω²+4=0 modela:",
      opciones: ["Frecuencias de vibracion", "noicarbiv ed saicneucerF", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "(x+1)²-5(x+1)+6=0 — escribe la respuesta.",
      opciones: ["x=___ o x=___\" → 1", "1 → \"___=x o ___=x", "universal", "vacío"],
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
