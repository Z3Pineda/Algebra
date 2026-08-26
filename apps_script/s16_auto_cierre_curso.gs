function crearQuiz() {
  var form = FormApp.create("S16·Auto Entrega de evidencias y preparación para examen final — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S16·Auto Entrega de evidencias y preparación para examen final");
  form.setDescription("Quiz: U1 Conjuntos, U2 Funciones, U3 Expresiones, U4 Ecuaciones, U5 Valor absoluto");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "U1 Conjuntos",
      pregunta: "¿Cuál es |A|?",
      opciones: ["5 con A=ejes en tolerancia", "aicnarelot ne seje=A noc 5", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "U1 Conjuntos",
      pregunta: "¿Cuál es |B|?",
      opciones: ["4", "5", "3", "-4"],
      correcta: 0
    },
    {
      categoria: "U1 Conjuntos",
      pregunta: "¿Cuál es |A∩B|?",
      opciones: ["2", "3", "1", "-2"],
      correcta: 0
    },
    {
      categoria: "U1 Conjuntos",
      pregunta: "¿Cuál es |A∪B|?",
      opciones: ["7 (lote completo)", "8", "6", "-7"],
      correcta: 0
    },
    {
      categoria: "U2 Funciones",
      pregunta: "¿Cuál es F(d)?",
      opciones: ["k(d0-d) es función de d en el dominio físico del eje", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "U3 Expresiones",
      pregunta: "¿Cuál es V?",
      opciones: ["π(d/2)²L simplificado a V=50πd² mm³ con L=200mm", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "U4 Ecuaciones",
      pregunta: "|d0-d|=Fmax/k=0.004m=4mm?",
      opciones: ["d=46mm o d=54mm (modelo de contracción por carga)", "mm45=d o mm64=d", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "U5 Valor absoluto",
      pregunta: "intervalo de aceptación |d-50|≤0.04 equivale a [49.96, 50.04] mm; clasificación 50.05 y 50.06 rechazados por exceder el límite superior?",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
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
