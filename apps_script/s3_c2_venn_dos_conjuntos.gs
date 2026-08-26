function crearQuiz() {
  var form = FormApp.create("S3·C2 Diagramas de Venn con dos conjuntos — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S3·C2 Diagramas de Venn con dos conjuntos");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "¿Cuántas regiones distintas tiene un Venn de 2 conjuntos? — escribe la respuesta.",
      opciones: ["4", "5", "3", "-4"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "A∩B = ___,___,___",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "A-B = ___,___",
      opciones: ["1", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "B-A = ___,___",
      opciones: ["6", "7", "5", "-6"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "|A∪B| = ___ + ___ - ___ = ___",
      opciones: ["5", "6", "4", "-5"],
      correcta: 0
    },
    {
      categoria: "P6 (MC)",
      pregunta: "Si A∩B=∅, ¿cómo se ven los círculos?",
      opciones: ["Separados", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P7 (MC)",
      pregunta: "Si A⊆B, ¿cómo se ven?",
      opciones: ["El círculo A está dentro del B", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P8 (MC ingeniería)",
      pregunta: "H y E son los sistemas con fallas. bomba_2 falla en ambos. ¿En qué región del Venn está?",
      opciones: ["H∩E", "E∩H", "universal", "vacío"],
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
