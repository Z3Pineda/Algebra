function crearQuiz() {
  var form = FormApp.create("S4·C3 Propiedades de los números reales — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S4·C3 Propiedades de los números reales");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "¿Qué propiedad justifica 3+7 = 7+3?",
      opciones: ["Conmutativa de la suma", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "¿Qué propiedad justifica 2×(3+4) = 2×3 + 2×4?",
      opciones: ["Distributiva", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (T/F)",
      pregunta: "La resta es conmutativa: a-b = b-a",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "El elemento neutro de la multiplicación es ___.",
      opciones: ["1", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "El inverso aditivo de -5 es ___.",
      opciones: ["5", "6", "4", "-5"],
      correcta: 0
    },
    {
      categoria: "P6 (T/F)",
      pregunta: "(8-3)-2 = 8-(3-2)",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill)",
      pregunta: "4 × (10 + 5) = 4×___ + 4×5",
      opciones: ["10", "11", "9", "-10"],
      correcta: 0
    },
    {
      categoria: "P8 (MC ingeniería)",
      pregunta: "Un ingeniero calcula F×(d₁+d₂). Para distribuirlo usa:",
      opciones: ["Propiedad distributiva", "avitubirtsid dadeiporP", "universal", "vacío"],
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
