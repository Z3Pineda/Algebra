function crearQuiz() {
  var form = FormApp.create("S6·C1 Propiedades de la igualdad — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S6·C1 Propiedades de la igualdad");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "Si x+8=15, ¿qué propiedad se usa para escribir x=7?",
      opciones: ["Sustracción", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "Si 4x=28, ¿qué propiedad da x=7?",
      opciones: ["División", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (T/F)",
      pregunta: "Si a=b, entonces b=a.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "Si a=b y b=c, entonces a=c. ¿Qué propiedad es?",
      opciones: ["Transitiva", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "Si x-5=12, entonces x = ___",
      opciones: ["17", "18", "16", "-17"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "Si 3x=21, entonces x = ___",
      opciones: ["7", "8", "6", "-7"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill)",
      pregunta: "Si x/4=6, entonces x = ___",
      opciones: ["24", "25", "23", "-24"],
      correcta: 0
    },
    {
      categoria: "P8 (MC ingeniería)",
      pregunta: "Un sensor marca 0.05 mm de más en todas las lecturas. Para corregir usas:",
      opciones: ["Propiedad de sustracción", "nóiccartsus ed dadeiporP", "universal", "vacío"],
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
