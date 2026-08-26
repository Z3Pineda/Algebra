function crearQuiz() {
  var form = FormApp.create("S10·Auto Repaso general Unidad 3 — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S10·Auto Repaso general Unidad 3");
  form.setDescription("Quiz del curso — 20 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "S6 Expresiones",
      pregunta: "¿Cuál es 7x²-3x+5x²+2x-4?",
      opciones: ["12x²-x-4", "4-x-²x21", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S6 Expresiones",
      pregunta: "¿Cuál es (3x-4)²?",
      opciones: ["9x²-24x+16", "61+x42-²x9", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S6 Expresiones",
      pregunta: "¿Cuál es (2a+5)(2a-5)?",
      opciones: ["4a²-25", "52-²a4", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S6 Expresiones",
      pregunta: "¿Cuál es 7x²-3x+5x²+2x-4 = 12x²-x-4, (3x-4)²=9x²-24x+16, (2a+5)(2a-5)?",
      opciones: ["4a²-25", "52-²a4", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S7 Notables",
      pregunta: "¿Cuál es (x+2)³?",
      opciones: ["x³+6x²+12x+8", "8+x21+²x6+³x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S7 Notables",
      pregunta: "productos notables base de factorización?",
      opciones: ["factorización", "2x", "x", "4x"],
      correcta: 0
    },
    {
      categoria: "S8 Factorización",
      pregunta: "¿Cuál es 15x²+10x?",
      opciones: ["5x(3x+2)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "S8 Factorización",
      pregunta: "¿Cuál es x²-7x+12?",
      opciones: ["(x-3)(x-4)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "S8 Factorización",
      pregunta: "¿Cuál es 2x²+5x-3?",
      opciones: ["(2x-1)(x+3)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "S8 Factorización",
      pregunta: "¿Cuál es x³-27?",
      opciones: ["(x-3)(x²+3x+9)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "S9 Fracciones",
      pregunta: "¿Cuál es 12x⁵y³/3x²y⁶?",
      opciones: ["4x³/y³", "³y/³x4", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S9 Fracciones",
      pregunta: "¿Cuál es (8x³-12x²+4x)/4x?",
      opciones: ["2x²-3x+1", "1+x3-²x2", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S9 Fracciones",
      pregunta: "¿Cuál es (x²-9)/(x²+5x+6)?",
      opciones: ["(x-3)/(x+2)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "S10 Potencias",
      pregunta: "¿Cuál es x⁴·x⁻²?",
      opciones: ["x²", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "S10 Potencias",
      pregunta: "¿Cuál es 16^(-1/2)?",
      opciones: ["1/4", "1/5", "2/4", "0/4"],
      correcta: 0
    },
    {
      categoria: "S10 Potencias",
      pregunta: "¿Cuál es √48?",
      opciones: ["4√3", "3√4", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S10 Potencias",
      pregunta: "¿Cuál es 5√3+2√3?",
      opciones: ["7√3", "3√7", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S10 Potencias",
      pregunta: "¿Cuál es x⁴·x⁻²=x², 16^(-1/2)=1/4, √48=4√3, 5√3+2√3?",
      opciones: ["7√3", "3√7", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "¿Cuál es F(x)?",
      opciones: ["2x³-8x=2x(x+2)(x-2)", "x2=x8-³x2", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "¿Cuál es velocidad resultante v?",
      opciones: ["√(36+64)=10 m/s", "universal", "vacío", "intersección"],
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
