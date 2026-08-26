function crearQuiz() {
  var form = FormApp.create("S14·C2 Ecuaciones con radicales — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S14·C2 Ecuaciones con radicales");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "√(x+3)=5 — escribe la respuesta.",
      opciones: ["x=___\" → 22", "22 → \"___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "√x=x-2 — escribe la respuesta.",
      opciones: ["solucion valida x=___\" → 4", "4 → \"___=x adilav noiculos", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P3 (T/F)",
      pregunta: "x=1 es solucion de √x=x-2.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "Despues de elevar al cuadrado hay que:",
      opciones: ["Verificar en ecuacion original", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "2√(x-1)=6 — escribe la respuesta.",
      opciones: ["x=___\" → 10", "01 → \"___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P6 (MC ingeniería)",
      pregunta: "Ek=450 J, m=10 kg",
      opciones: ["v=√___\" → 90", "09 → \"___√=v", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (T/F)",
      pregunta: "Elevar al cuadrado puede crear soluciones extrañas.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "√(x+5)=√(2x+3) — escribe la respuesta.",
      opciones: ["x=___\" → 2", "2 → \"___=x", "universal", "vacío"],
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
