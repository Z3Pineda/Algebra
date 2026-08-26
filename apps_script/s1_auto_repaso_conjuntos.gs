function crearQuiz() {
  var form = FormApp.create("S1·Auto Repaso de conjuntos — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S1·Auto Repaso de conjuntos");
  form.setDescription("Quiz: Concepto, Representación, Operaciones, PIE ingeniería");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "Concepto",
      pregunta: "¿Cuál es |A|?",
      opciones: ["5 con A=2,4,6,8,10", "2=A noc 5", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Concepto",
      pregunta: "¿Cuál es A'?",
      opciones: ["1,3,5,7,9 con U=1..10", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "Concepto",
      pregunta: "7∉A pero 7∈U?",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "Representación",
      pregunta: "¿Cuál es A∪B?",
      opciones: ["1,2,3,4,5,7,9 con A=1,3,5,7,9 B=1,2,3,4,5", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "Representación",
      pregunta: "¿Cuál es A∩B?",
      opciones: ["1,3,5", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "Operaciones",
      pregunta: "¿Cuál es A-B?",
      opciones: ["7,9", "8", "6", "-7"],
      correcta: 0
    },
    {
      categoria: "Operaciones",
      pregunta: "¿Cuál es B-A?",
      opciones: ["2,4", "3", "1", "-2"],
      correcta: 0
    },
    {
      categoria: "Operaciones",
      pregunta: "¿Cuál es A'?",
      opciones: ["2,4,6,8,10", "3", "1", "-2"],
      correcta: 0
    },
    {
      categoria: "Operaciones",
      pregunta: "¿Cuál es |A∪B|?",
      opciones: ["5+5-3=7", "7=3-5+5", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "PIE ingeniería",
      pregunta: "¿Cuál es |V∪S|?",
      opciones: ["42+35-18=59", "95=81-53+24", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "PIE ingeniería",
      pregunta: "¿Cuál es solo V?",
      opciones: ["42-18=24", "42=81-24", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "PIE ingeniería",
      pregunta: "¿Cuál es sin fallas?",
      opciones: ["100-59=41", "14=95-001", "universal", "vacío"],
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
