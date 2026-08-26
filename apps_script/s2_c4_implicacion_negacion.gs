function crearQuiz() {
  var form = FormApp.create("S2·C4 Implicación y negación — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S2·C4 Implicación y negación");
  form.setDescription("Quiz del curso — 11 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "Si p=V, ¿cuál es ¬p?",
      opciones: ["F", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (T/F)",
      pregunta: "¬(¬p) = p",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "¿Cuál es la negación correcta de 'hay presión Y hay flujo'?",
      opciones: ["\"No hay presión O no hay flujo\"", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "Si p=V y q=F, ¿cuál es p",
      opciones: ["q?\" → F", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "Si p=F y q=F, ¿cuál es p",
      opciones: ["q?\" → V", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P6 (T/F)",
      pregunta: "p",
      opciones: ["Falso", "Depende del contexto", "Solo en casos especiales", "0"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "La regla dice: si temperatura alta (p), enfriamiento activa (q). Se observa p=V y q=F. ¿Qué ocurre?",
      opciones: ["Falla del sistema — p→q es F", "F se q→p — ametsis led allaF", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (MC ingeniería)",
      pregunta: "La regla dice: si temperatura alta (p), enfriamiento activa (q). Se observa p=F y q=V. ¿Es falla?",
      opciones: ["No — p→q es V aunque parece raro", "orar ecerap euqnua V se q→p — oN", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P9 (Fill)",
      pregunta: "¬(p — escribe la respuesta.",
      opciones: ["q) ≡ p ∧ ___\" → ¬q", "q¬ → \"___ ∧ p ≡ )q", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P10 (MC)",
      pregunta: "¿Cuál tabla de verdad corresponde a p",
      opciones: ["q?\"", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P10 (MC)",
      pregunta: "¿Cuál tabla de verdad corresponde a p→q?",
      opciones: ["V,V,V,V", "V,F,F,F", "V,F,V,V", "F,V,F,V"],
      correcta: 2
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
