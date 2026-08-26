function crearQuiz() {
  var form = FormApp.create("S4·C4 Producto cartesiano — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S4·C4 Producto cartesiano");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "A=a,b y B=1,2,3. |A×B| = ___",
      opciones: ["6", "7", "5", "-6"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "¿Cuál es el par correcto del producto cartesiano A=1,2 × B=x,y?",
      opciones: ["(1,x) ✅ (no (x,1))", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (T/F)",
      pregunta: "A×B = B×A siempre.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "A=1,2,3 y B=∅. |A×B| = ___",
      opciones: ["0", "1", "-1", "2"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "¿Qué representa ℝ² = ℝ×ℝ?",
      opciones: ["El plano cartesiano", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill ingeniería)",
      pregunta: "Una planta tiene 4 materiales y 5 tratamientos. ¿Cuántas combinaciones debe evaluar? — escribe la respuesta.",
      opciones: ["20", "21", "19", "-20"],
      correcta: 0
    },
    {
      categoria: "P7 (MC)",
      pregunta: "El punto (3, -2) en el plano cartesiano tiene:",
      opciones: ["x=3 (horizontal), y=-2", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P8 (T/F)",
      pregunta: "Una función f:A",
      opciones: ["Falso", "Depende del contexto", "Solo en casos especiales", "0"],
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
