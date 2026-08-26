function crearQuiz() {
  var form = FormApp.create("S6·Auto Ejercicios de simplificación algebraica — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S6·Auto Ejercicios de simplificación algebraica");
  form.setDescription("Quiz: Propiedades de igualdad, Términos semejantes, Suma y resta de polinomios, Multiplicación");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "Propiedades de igualdad",
      pregunta: "x-9=14 usa propiedad de adición?",
      opciones: ["x=23", "32=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Propiedades de igualdad",
      pregunta: "¿Cuál es 3x+8?",
      opciones: ["23 usa sustracción luego división", "nóisivid ogeul nóiccartsus asu 32", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Propiedades de igualdad",
      pregunta: "3x+8=23 usa sustracción luego división, x-9=14 usa propiedad de adición?",
      opciones: ["x=23", "32=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Términos semejantes",
      pregunta: "¿Cuál es 7x²-3x+5x²+8x-2?",
      opciones: ["12x²+5x-2", "2-x5+²x21", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Términos semejantes",
      pregunta: "¿Cuál es 4ab-2a²b+3ab-a²b+5?",
      opciones: ["7ab-3a²b+5", "5+b²a3-ba7", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Términos semejantes",
      pregunta: "¿Cuál es 7x²-3x+5x²+8x-2 = 12x²+5x-2, 4ab-2a²b+3ab-a²b+5?",
      opciones: ["7ab-3a²b+5", "5+b²a3-ba7", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Suma y resta de polinomios",
      pregunta: "¿Cuál es (5x²-3x+7)+(2x²+4x-1)?",
      opciones: ["7x²+x+6", "6+x+²x7", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Suma y resta de polinomios",
      pregunta: "¿Cuál es (5x²-3x+7)-(2x²+4x-1)?",
      opciones: ["3x²-7x+8", "8+x7-²x3", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Suma y resta de polinomios",
      pregunta: "¿Cuál es (5x²-3x+7)+(2x²+4x-1)=7x²+x+6, (5x²-3x+7)-(2x²+4x-1)?",
      opciones: ["3x²-7x+8", "8+x7-²x3", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Multiplicación",
      pregunta: "¿Cuál es 4x²(3x³-2x+5)?",
      opciones: ["12x⁵-8x³+20x²", "²x02+³x8-⁵x21", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Multiplicación",
      pregunta: "¿Cuál es (x+6)(x-2)?",
      opciones: ["x²+4x-12", "21-x4+²x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Multiplicación",
      pregunta: "¿Cuál es (3x-4)(2x+5)?",
      opciones: ["6x²+7x-20", "02-x7+²x6", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Multiplicación",
      pregunta: "¿Cuál es 4x²(3x³-2x+5)=12x⁵-8x³+20x², (x+6)(x-2)=x²+4x-12, (3x-4)(2x+5)?",
      opciones: ["6x²+7x-20", "02-x7+²x6", "universal", "vacío"],
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
