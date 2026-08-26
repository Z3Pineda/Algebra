function crearQuiz() {
  var form = FormApp.create("S1·C1 Presentación del curso y diagnóstico de aritmética — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S1·C1 Presentación del curso y diagnóstico de aritmética");
  form.setDescription("Quiz: Operaciones con enteros, Fracciones, Potencias y raíces, Orden de operaciones, Proporciones");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "Operaciones con enteros",
      pregunta: "¿Cuánto es (-4)×(-3)?",
      opciones: ["12", "13", "11", "-12"],
      correcta: 0
    },
    {
      categoria: "Operaciones con enteros",
      pregunta: "¿Cuánto es -8+15?",
      opciones: ["7", "8", "6", "-7"],
      correcta: 0
    },
    {
      categoria: "Operaciones con enteros",
      pregunta: "¿Cuánto es -24/6?",
      opciones: ["-4", "-3", "-5", "4"],
      correcta: 0
    },
    {
      categoria: "Operaciones con enteros",
      pregunta: ", ,?",
      opciones: [",", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Fracciones",
      pregunta: "¿Cuánto es 3/4+1/3?",
      opciones: ["13/12", "13/13", "14/12", "12/12"],
      correcta: 0
    },
    {
      categoria: "Fracciones",
      pregunta: "¿Cuánto es 2/5×5/6?",
      opciones: ["1/3", "1/4", "2/3", "0/3"],
      correcta: 0
    },
    {
      categoria: "Fracciones",
      pregunta: "¿Cuánto es 3/4÷9/8?",
      opciones: ["2/3", "2/4", "3/3", "1/3"],
      correcta: 0
    },
    {
      categoria: "Fracciones",
      pregunta: ", ,?",
      opciones: [",", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Potencias y raíces",
      pregunta: "¿Cuánto es 2^4?",
      opciones: ["16", "17", "15", "-16"],
      correcta: 0
    },
    {
      categoria: "Potencias y raíces",
      pregunta: "¿Cuánto es (-3)^3?",
      opciones: ["-27", "-26", "-28", "27"],
      correcta: 0
    },
    {
      categoria: "Potencias y raíces",
      pregunta: "¿Cuánto es √81?",
      opciones: ["9", "10", "8", "-9"],
      correcta: 0
    },
    {
      categoria: "Potencias y raíces",
      pregunta: ", ,?",
      opciones: [",", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Orden de operaciones",
      pregunta: "¿Cuánto es 3+2×4?",
      opciones: ["11", "12", "10", "-11"],
      correcta: 0
    },
    {
      categoria: "Orden de operaciones",
      pregunta: "¿Cuánto es (3+2)×4?",
      opciones: ["20", "21", "19", "-20"],
      correcta: 0
    },
    {
      categoria: "Orden de operaciones",
      pregunta: "¿Cuánto es 2^3+4÷2?",
      opciones: ["10", "11", "9", "-10"],
      correcta: 0
    },
    {
      categoria: "Orden de operaciones",
      pregunta: ", ,?",
      opciones: [",", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Proporciones",
      pregunta: "60?",
      opciones: ["10 piezas=\\", "\\=sazeip 01", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Proporciones",
      pregunta: "¿Cuál es 15% de 80?",
      opciones: ["12", "13", "11", "-12"],
      correcta: 0
    },
    {
      categoria: "Proporciones",
      pregunta: "4 piezas \\150?",
      opciones: ["\\150", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Proporciones",
      pregunta: "¿Cuál es barra 3m en 4 partes?",
      opciones: ["0.75m", "m57.0", "universal", "vacío"],
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
