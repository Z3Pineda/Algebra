function crearQuiz() {
  var form = FormApp.create("S13·Auto Práctica de ecuaciones cuadráticas — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S13·Auto Práctica de ecuaciones cuadráticas");
  form.setDescription("Quiz del curso — 16 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "Misma ecuación tres métodos",
      pregunta: "x²-6x+5=0?",
      opciones: ["x=1", "1=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Misma ecuación tres métodos",
      pregunta: "x=5 por factorización forma cuadrada y completar cuadrado; x²-4x-12=0?",
      opciones: ["x=6", "6=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Misma ecuación tres métodos",
      pregunta: "¿Cuál es x?",
      opciones: ["-2", "-1", "-3", "2"],
      correcta: 0
    },
    {
      categoria: "Factorización",
      pregunta: "x²+7x+12=0?",
      opciones: ["x=-3", "3-=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Factorización",
      pregunta: "-4; 3x²-12x=0?",
      opciones: ["x=0", "0=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Factorización",
      pregunta: "4; 2x²+5x-3=0?",
      opciones: ["x=1/2", "2/1=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Factorización",
      pregunta: "-3?",
      opciones: ["-3", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Forma",
      pregunta: "(x-4)²=25?",
      opciones: ["x=9", "9=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Forma",
      pregunta: "-1; (x+2)²=0?",
      opciones: ["x=-2 única solución; x²=64 da x=±8", "8±=x ad 46=²x ;nóiculos acinú 2-=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Completar cuadrado",
      pregunta: "x²+8x+12=0?",
      opciones: ["x=-2", "2-=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Completar cuadrado",
      pregunta: "-6; x²-10x+21=0?",
      opciones: ["x=7", "7=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Completar cuadrado",
      pregunta: "3?",
      opciones: ["3", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Comparación de métodos",
      pregunta: "¿Cuál es los tres métodos dan la misma solución para x²-6x+5?",
      opciones: ["0", "1", "-1", "2"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "¿Cuál es proyectil h?",
      opciones: ["-5t²+25t+6", "6+t52+²t5-", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "¿Cuál es aterriza en t?",
      opciones: ["5 s", "s 5", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "¿Cuál es altura máxima 37.25 m en t?",
      opciones: ["2.5 s", "s 5.2", "universal", "vacío"],
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
