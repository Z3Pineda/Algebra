function crearQuiz() {
  var form = FormApp.create("S3·Auto Tarea integradora — Unidad 1 — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S3·Auto Tarea integradora — Unidad 1");
  form.setDescription("Quiz: Operaciones con conjuntos, Proposiciones y lógica, Venn y PIE de 3 conjuntos");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "Operaciones con conjuntos",
      pregunta: "¿Cuál es A∪B?",
      opciones: ["1,2,3,5,7,8,9 con A=1,3,5,7,9 B=2,3,5,8,9", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "Operaciones con conjuntos",
      pregunta: "¿Cuál es A∩C?",
      opciones: ["3,9", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "Operaciones con conjuntos",
      pregunta: "¿Cuál es B'?",
      opciones: ["1,4,5,6,7,9,10", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "Operaciones con conjuntos",
      pregunta: "¿Cuál es |A∪B|?",
      opciones: ["5+5-3=7", "7=3-5+5", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Operaciones con conjuntos",
      pregunta: "C⊄A porque 6∉A?",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "Proposiciones y lógica",
      pregunta: "p?",
      opciones: ["q es F cuando p=V y q=F", "F=q y V=p odnauc F se q", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Proposiciones y lógica",
      pregunta: "¿Cuál es p∧q?",
      opciones: ["F con p=V q=F", "F=q V=p noc F", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Proposiciones y lógica",
      pregunta: "¿Cuál es ¬p∨q?",
      opciones: ["F con p=V q=F", "F=q V=p noc F", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Proposiciones y lógica",
      pregunta: "¬(p∧q)≡¬p∨¬q?",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "Proposiciones y lógica",
      pregunta: "p∧q corresponde a intersección A∩B?",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "Proposiciones y lógica",
      pregunta: "p∧q=F con p=V q=F, ¬p∨q=F con p=V q=F, p?",
      opciones: ["q es F cuando p=V y q=F, ¬(p∧q)≡¬p∨¬q, p∧q corresponde a intersección A∩B", "F=q y V=p odnauc F se q", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Venn y PIE de 3 conjuntos",
      pregunta: "¿Cuál es |I∪F∪A|?",
      opciones: ["45+30+25-15-12-8+5=70 hablan idioma", "amoidi nalbah 07=5+8-21-51-52+03+54", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Venn y PIE de 3 conjuntos",
      pregunta: "¿Cuál es sin ninguno?",
      opciones: ["80-70=10", "01=07-08", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Venn y PIE de 3 conjuntos",
      pregunta: "¿Cuál es solo I?",
      opciones: ["23", "24", "22", "-23"],
      correcta: 0
    },
    {
      categoria: "Venn y PIE de 3 conjuntos",
      pregunta: "¿Cuál es exactamente dos idiomas?",
      opciones: ["20", "21", "19", "-20"],
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
