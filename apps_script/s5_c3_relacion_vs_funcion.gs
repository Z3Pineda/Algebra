function crearQuiz() {
  var form = FormApp.create("S5·C3 Diferencia entre relación y función — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S5·C3 Diferencia entre relación y función");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (T/F)",
      pregunta: "Toda función es una relación.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P2 (T/F)",
      pregunta: "Toda relación es una función.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "La tabla (1,5),(2,8),(2,3),(4,11) — ¿es función?",
      opciones: ["No, x=2 tiene dos imágenes", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "La tabla (1,5),(2,8),(3,5),(4,11) — ¿es función?",
      opciones: ["Sí, cada x tiene una sola imagen", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "¿Cuál gráfica NO es función?",
      opciones: ["Un círculo completo x²+y²=9", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P6 (MC ingeniería)",
      pregunta: "Número de pieza",
      opciones: ["diámetro medido. ¿Función?\" → Sí", "íS → \"?nóicnuF¿ .odidem ortemáid", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "Empleado",
      opciones: ["certificaciones que tiene. ¿Función?\" → No", "oN → \"?nóicnuF¿ .eneit euq senoicacifitrec", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "Si f(2)=7 y f(2)=3 están en la misma tabla, la tabla ___ es función.",
      opciones: ["no", "universal", "vacío", "intersección"],
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
