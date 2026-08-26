function crearQuiz() {
  var form = FormApp.create("S5·Auto Identificación de funciones, dominio y rango — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S5·Auto Identificación de funciones, dominio y rango");
  form.setDescription("Quiz: Identificar función, Dominio, Evaluación, Dominio y rango gráfico, Problema integrador válvula");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "Identificar función",
      pregunta: "¿Cuál es R?",
      opciones: ["(1,5),(2,8),(3,5),(4,11) sí es función", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Identificar función",
      pregunta: "¿Cuál es x?",
      opciones: ["y²+1 no es función", "nóicnuf se on 1+²y", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Dominio",
      pregunta: "¿Cuál es Dom(f)?",
      opciones: ["5x-7 es ℝ", "ℝ se 7-x5", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Dominio",
      pregunta: "¿Cuál es Dom(g)?",
      opciones: ["(x+2)/(x-3) es ℝ-3", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Dominio",
      pregunta: "¿Cuál es Dom(h)?",
      opciones: ["√(2x-8) es [4,+∞)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Dominio",
      pregunta: "Dom(k) con raíz y denominador es [-4,1)∪(1,+∞)?",
      opciones: ["[-4,1)∪(1,+∞)", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Dominio",
      pregunta: "¿Cuál es Dom(f)=5x-7 es ℝ, Dom(g)=(x+2)/(x-3) es ℝ-3, Dom(h)?",
      opciones: ["√(2x-8) es [4,+∞), Dom(k) con raíz y denominador es [-4,1)∪(1,+∞)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Evaluación",
      pregunta: "¿Cuál es f(x)?",
      opciones: ["3x²-2x+1", "1+x2-²x3", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Evaluación",
      pregunta: "¿Cuál es f(0)?",
      opciones: ["1", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "Evaluación",
      pregunta: "¿Cuál es f(2)?",
      opciones: ["9", "10", "8", "-9"],
      correcta: 0
    },
    {
      categoria: "Evaluación",
      pregunta: "¿Cuál es f(-1)?",
      opciones: ["6", "7", "5", "-6"],
      correcta: 0
    },
    {
      categoria: "Evaluación",
      pregunta: "¿Cuál es f(x)=3x²-2x+1, f(0)=1, f(2)=9, f(-1)?",
      opciones: ["6", "7", "5", "-6"],
      correcta: 0
    },
    {
      categoria: "Dominio y rango gráfico",
      pregunta: "parábola vértice (2,-3) abre arriba tiene rango [-3,+∞)?",
      opciones: ["[-3,+∞)", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Dominio y rango gráfico",
      pregunta: "¿Cuál es f(x)?",
      opciones: ["√(9-x²) tiene dominio [-3,3]", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Dominio y rango gráfico",
      pregunta: "¿Cuál es parábola vértice (2,-3) abre arriba tiene rango [-3,+∞), f(x)?",
      opciones: ["√(9-x²) tiene dominio [-3,3]", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Problema integrador válvula",
      pregunta: "¿Cuál es Q(a)?",
      opciones: ["0.5a+10", "01+a5.0", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador válvula",
      pregunta: "¿Cuál es Q(0)?",
      opciones: ["10 L/min", "nim/L 01", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador válvula",
      pregunta: "¿Cuál es Q(50)?",
      opciones: ["35 L/min", "nim/L 53", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador válvula",
      pregunta: "¿Cuál es Q(100)?",
      opciones: ["60 L/min", "nim/L 06", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador válvula",
      pregunta: "rango [10,60]?",
      opciones: ["[10,60]", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Problema integrador válvula",
      pregunta: "¿Cuál es Q(a)=0.5a+10, Q(0)=10 L/min, Q(50)=35 L/min, Q(100)?",
      opciones: ["60 L/min, rango [10,60]", "nim/L 06", "universal", "vacío"],
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
