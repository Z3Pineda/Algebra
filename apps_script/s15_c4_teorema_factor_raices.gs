function crearQuiz() {
  var form = FormApp.create("S15·C4 Teorema del factor, raíces y teorema fundamental — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S15·C4 Teorema del factor, raíces y teorema fundamental");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (T/F)",
      pregunta: "P(2)=0",
      opciones: ["Falso", "Depende del contexto", "Solo en casos especiales", "0"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "Grado 4",
      opciones: ["max ___ raices reales\" → 4", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "x³-6x²+11x-6 raices: ___, ___, ___",
      opciones: ["1", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "Teorema fundamental:",
      opciones: ["n raices en C contando multiplicidad", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "Raiz doble graficamente:",
      opciones: ["Toca eje x sin cruzar", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "Posibles racionales de 2x²-1: ±___",
      opciones: ["1", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "Raices de polinomio caracteristico:",
      opciones: ["Frecuencias modales", "seladom saicneucerF", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (T/F)",
      pregunta: "x²+1=0 tiene raices reales.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
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
