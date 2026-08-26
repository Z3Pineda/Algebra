function crearQuiz() {
  var form = FormApp.create("S9·Auto Ejercicios de fracciones algebraicas — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S9·Auto Ejercicios de fracciones algebraicas");
  form.setDescription("Quiz: División de monomios, Polinomio entre monomio, División larga, Simplificar fracciones, Multiplicar/dividir");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "División de monomios",
      pregunta: "¿Cuál es x⁹/x⁴?",
      opciones: ["x⁵", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "División de monomios",
      pregunta: "¿Cuál es x²/x⁷?",
      opciones: ["1/x⁵", "⁵x/1", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Polinomio entre monomio",
      pregunta: "¿Cuál es (10x³-15x²+5x)/5x?",
      opciones: ["2x²-3x+1", "1+x3-²x2", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Polinomio entre monomio",
      pregunta: "¿Cuál es (12a⁴b²-8a³b³+4a²b)/4a²b?",
      opciones: ["3a²b-2ab²+1", "1+²ba2-b²a3", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "División larga",
      pregunta: "(x²+7x+12)/(x+3) cociente x+4 residuo 0?",
      opciones: ["0", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "División larga",
      pregunta: "(x²-5x+6)/(x-2) cociente x-3 residuo 0?",
      opciones: ["0", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "División larga",
      pregunta: "(x³-1)/(x-1) cociente x²+x+1?",
      opciones: ["x²+x+1", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "División larga",
      pregunta: "(x²+7x+12)/(x+3) cociente x+4 residuo 0, (x²-5x+6)/(x-2) cociente x-3 residuo 0, (x³-1)/(x-1) cociente x²+x+1?",
      opciones: ["x²+x+1", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Simplificar fracciones",
      pregunta: "¿Cuál es (x²-16)/(x²-4x)?",
      opciones: ["(x+4)/x", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Simplificar fracciones",
      pregunta: "¿Cuál es (x²+5x+6)/(x²-9)?",
      opciones: ["(x+2)/(x-3)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Simplificar fracciones",
      pregunta: "¿Cuál es (x³-x)/(x²-1)?",
      opciones: ["x", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Simplificar fracciones",
      pregunta: "¿Cuál es (x²-16)/(x²-4x)=(x+4)/x, (x²+5x+6)/(x²-9)=(x+2)/(x-3), (x³-x)/(x²-1)?",
      opciones: ["x", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Multiplicar/dividir",
      pregunta: "¿Cuál es (x²-1)/x × 2x/(x+1)?",
      opciones: ["2(x-1)", "3", "1", "-2"],
      correcta: 0
    },
    {
      categoria: "Multiplicar/dividir",
      pregunta: "¿Cuál es (x²-4)/3x ÷ (x-2)/9?",
      opciones: ["3(x+2)/x", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "Multiplicar/dividir",
      pregunta: "¿Cuál es (x²-1)/x × 2x/(x+1) = 2(x-1), (x²-4)/3x ÷ (x-2)/9?",
      opciones: ["3(x+2)/x", "4", "2", "-3"],
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
