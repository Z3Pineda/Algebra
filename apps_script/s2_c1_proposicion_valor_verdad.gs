function crearQuiz() {
  var form = FormApp.create("S2·C1 Proposición y valor de verdad — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S2·C1 Proposición y valor de verdad");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "¿Cuál es una proposición?",
      opciones: ["\"La presión hidráulica es 55 bar\"", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (T/F)",
      pregunta: "'¡Detener la operación!' es una proposición.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "¿Por qué 'temperatura alta' NO es proposición?",
      opciones: ["\"alta\" es ambiguo", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (T/F)",
      pregunta: "Una proposición abierta P(x) tiene valor de verdad fijo.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "Sea P(x): x+3=10. El valor de P(7) es ___.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "Sea P(x): x+3=10. El valor de P(5) es ___.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P7 (MC)",
      pregunta: "Conjunto solución de P(x): x²=16 en ℤ:",
      opciones: ["-4, 4", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
      correcta: 0
    },
    {
      categoria: "P8 (MC ingeniería)",
      pregunta: "Sistema evalúa P(d): 24.5≤d≤25.5. Eje con d=25.6...",
      opciones: ["Se rechaza", "azahcer eS", "universal", "vacío"],
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
