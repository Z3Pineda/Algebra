function crearQuiz() {
  var form = FormApp.create("S3·C1 Tipos de conjuntos — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S3·C1 Tipos de conjuntos");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "¿Cuál es un conjunto infinito?",
      opciones: ["ℕ = 0,1,2,...", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
      correcta: 0
    },
    {
      categoria: "P2 (T/F)",
      pregunta: "0 = ∅",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "¿Son iguales A=1,2,3 y B=3,2,1?",
      opciones: ["Sí, el orden no importa", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "A=1,2,3 y B=a,b,c. ¿Qué relación tienen?",
      opciones: ["Equivalentes", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "Si A⊂B entonces A=B.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "Si |A|=4, entonces |P(A)| = ___.",
      opciones: ["16", "17", "15", "-16"],
      correcta: 0
    },
    {
      categoria: "P7 (MC)",
      pregunta: "¿Cuántos subconjuntos tiene a,b?",
      opciones: ["4", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
      correcta: 0
    },
    {
      categoria: "P8 (MC ingeniería)",
      pregunta: "El conjunto solución de P(x): x²=49 en ℕ es un conjunto...",
      opciones: ["Unitario", "oiratinU", "universal", "vacío"],
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
