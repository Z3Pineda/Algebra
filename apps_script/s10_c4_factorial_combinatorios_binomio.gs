function crearQuiz() {
  var form = FormApp.create("S10·C4 Factorial, combinatorios y teorema del binomio — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S10·C4 Factorial, combinatorios y teorema del binomio");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "5! = ___",
      opciones: ["120", "121", "119", "-120"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "C(7,3) = 7!/(3!·4!) = ___",
      opciones: ["35", "36", "34", "-35"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "0! = ___",
      opciones: ["1", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "(x+1)^4 coef de x³: C(4,1)=___",
      opciones: ["4", "5", "3", "-4"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "Fila n=5 de Pascal, centro:",
      opciones: ["10", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "(a-b)³ tercer término: ___a·b²",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P7 (Fill ingeniería)",
      pregunta: "C(10,3) = ___",
      opciones: ["120", "121", "119", "-120"],
      correcta: 0
    },
    {
      categoria: "P8 (T/F)",
      pregunta: "C(n,k) = C(n,n-k)",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
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
