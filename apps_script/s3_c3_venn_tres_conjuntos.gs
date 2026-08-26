function crearQuiz() {
  var form = FormApp.create("S3·C3 Diagramas de Venn con tres conjuntos — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S3·C3 Diagramas de Venn con tres conjuntos");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "Un Venn de 3 conjuntos tiene ___ regiones.",
      opciones: ["8", "9", "7", "-8"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "La fórmula de regiones para n conjuntos es ___.",
      opciones: ["2^n", "n^2", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "¿En qué región está un elemento que pertenece a A, B pero no a C?",
      opciones: ["(A∩B)-C", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill — PIE)",
      pregunta: "|A∪B∪C| = |A|+|B|+|C| - |A∩B| - |A∩C| - |B∩C| + ___",
      opciones: ["|A∩B∩C|", "|C∩B∩A|", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill ingeniería)",
      pregunta: "De 50 técnicos: soldadura S=28, maquinado M=22, metrología T=18, S∩M=12, S∩T=8, M∩T=6, S∩M∩T=4. |S∪M∪T| = ___",
      opciones: ["46", "47", "45", "-46"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "Sin ninguna certificación: ___",
      opciones: ["4", "5", "3", "-4"],
      correcta: 0
    },
    {
      categoria: "P7 (MC)",
      pregunta: "¿Cuál equipo está en H∩E según el diagrama del problema?",
      opciones: ["bomba_2", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P8 (MC)",
      pregunta: "¿Cuántas regiones tiene un Venn de 4 conjuntos?",
      opciones: ["16", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
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
