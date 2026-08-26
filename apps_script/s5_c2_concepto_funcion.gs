function crearQuiz() {
  var form = FormApp.create("S5·C2 Concepto de función — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S5·C2 Concepto de función");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "¿Cuál condición debe cumplir una relación para ser función?",
      opciones: ["Cada elemento del dominio tiene exactamente una imagen", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (T/F)",
      pregunta: "Si f(2)=5 y f(7)=5, entonces f NO es función.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P3 (T/F)",
      pregunta: "Si f(3)=4 y f(3)=9, entonces f NO es función.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P4 (Fill)",
      pregunta: "Sea f(x)=3x-2. f(4) = ___",
      opciones: ["10", "11", "9", "-10"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "Sea f(x)=x²+1. f(-3) = ___",
      opciones: ["10", "11", "9", "-10"],
      correcta: 0
    },
    {
      categoria: "P6 (MC)",
      pregunta: "¿Cuál gráfica NO es función?",
      opciones: ["Un círculo completo", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "El sensor de temperatura de un horno da dos lecturas distintas al mismo tiempo. El sensor es...",
      opciones: ["No funciona como función", "nóicnuf omoc anoicnuf oN", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (MC)",
      pregunta: "¿Cuántas flechas debe salir de cada elemento del dominio para que sea función?",
      opciones: ["Exactamente 1", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
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
