function crearQuiz() {
  var form = FormApp.create("S7·Auto Práctica de productos notables — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S7·Auto Práctica de productos notables");
  form.setDescription("Quiz: Cuadrado de binomio, Conjugados, Cubo de binomio, Suma/diferencia de cubos, Problema de ingeniería");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "Cuadrado de binomio",
      pregunta: "¿Cuál es (x+9)²?",
      opciones: ["x²+18x+81", "18+x81+²x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Cuadrado de binomio",
      pregunta: "¿Cuál es (5x-2)²?",
      opciones: ["25x²-20x+4", "4+x02-²x52", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Cuadrado de binomio",
      pregunta: "doble producto de (x+5)² es 10x?",
      opciones: ["10x", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Cuadrado de binomio",
      pregunta: "¿Cuál es (x+9)²=x²+18x+81, (5x-2)²?",
      opciones: ["25x²-20x+4, doble producto de (x+5)² es 10x", "4+x02-²x52", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Conjugados",
      pregunta: "¿Cuál es (3a+4b)(3a-4b)?",
      opciones: ["9a²-16b²", "²b61-²a9", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Conjugados",
      pregunta: "¿Cuál es 103×97=(100+3)(100-3)?",
      opciones: ["9991", "9992", "9990", "-9991"],
      correcta: 0
    },
    {
      categoria: "Conjugados",
      pregunta: "¿Cuál es (3a+4b)(3a-4b)=9a²-16b², 103×97=(100+3)(100-3)?",
      opciones: ["9991", "9992", "9990", "-9991"],
      correcta: 0
    },
    {
      categoria: "Cubo de binomio",
      pregunta: "¿Cuál es (x+2)³?",
      opciones: ["x³+6x²+12x+8", "8+x21+²x6+³x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Cubo de binomio",
      pregunta: "¿Cuál es (2x-1)³?",
      opciones: ["8x³-12x²+6x-1", "1-x6+²x21-³x8", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Cubo de binomio",
      pregunta: "¿Cuál es (x+2)³=x³+6x²+12x+8, (2x-1)³?",
      opciones: ["8x³-12x²+6x-1", "1-x6+²x21-³x8", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Suma/diferencia de cubos",
      pregunta: "¿Cuál es (x+5)(x²-5x+25)?",
      opciones: ["x³+125", "521+³x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Suma/diferencia de cubos",
      pregunta: "¿Cuál es x²-16?",
      opciones: ["(x+4)(x-4) por conjugados", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Suma/diferencia de cubos",
      pregunta: "¿Cuál es 8x³-27?",
      opciones: ["(2x-3)(4x²+6x+9)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Suma/diferencia de cubos",
      pregunta: "¿Cuál es (x+5)(x²-5x+25)=x³+125, x²-16=(x+4)(x-4) por conjugados, 8x³-27?",
      opciones: ["(2x-3)(4x²+6x+9)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Problema de ingeniería",
      pregunta: "¿Cuál es área lámina (L+2t)(W+2t)?",
      opciones: ["LW+2Lt+2Wt+4t²", "²t4+tW2+tL2+WL", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema de ingeniería",
      pregunta: "¿Cuál es área fondo caja simplificada?",
      opciones: ["LW", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Problema de ingeniería",
      pregunta: "¿Cuál es área lámina (L+2t)(W+2t)=LW+2Lt+2Wt+4t², área fondo caja simplificada?",
      opciones: ["LW", "universal", "vacío", "intersección"],
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
