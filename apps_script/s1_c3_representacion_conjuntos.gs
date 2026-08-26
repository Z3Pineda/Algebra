function crearQuiz() {
  var form = FormApp.create("S1·C3 Representación de conjuntos — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S1·C3 Representación de conjuntos");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "¿Cómo se llama la forma de representar listando todos los elementos?",
      opciones: ["Extensión", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "¿Comprensión de 1,3,5,7,9?",
      opciones: ["x ∈ ℕ | x es impar, x < 10", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (T/F)",
      pregunta: "x ∈ ℝ | 24.5 ≤ x ≤ 25.5 se puede representar por extensión.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "El símbolo | en x ∈ U | P(x) se lee como '___'.",
      opciones: ["tales que", "euq selat", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "¿Qué conjunto numérico incluye negativos pero NO decimales?",
      opciones: ["ℤ", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
      correcta: 0
    },
    {
      categoria: "P6 (MC)",
      pregunta: "La forma más adecuada para el conjunto de temperaturas entre 60°C y 90°C es:",
      opciones: ["Comprensión", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
      correcta: 0
    },
    {
      categoria: "P7 (T/F)",
      pregunta: "ℕ ⊂ ℤ ⊂ ℚ ⊂ ℝ",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "Sea B = x ∈ ℕ | x² = 9. Por extensión, B = ___.",
      opciones: ["3", "4", "2", "-3"],
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
