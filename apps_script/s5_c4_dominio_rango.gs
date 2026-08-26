function crearQuiz() {
  var form = FormApp.create("S5·C4 Dominio y rango de una función — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S5·C4 Dominio y rango de una función");
  form.setDescription("Quiz del curso — 10 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "¿Cuál es el dominio natural de f(x)=1/(x+5)?",
      opciones: ["R--5", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "¿Cuál es el dominio de f(x)=√(x-3)?",
      opciones: ["[3,+∞)", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "f(x)=2x+7. Dom(f)=___",
      opciones: ["R", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "f(x)=x². Rango:",
      opciones: ["[0,+∞)", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "f(x)=√x. f(9)=___",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P6 (T/F)",
      pregunta: "El rango siempre es igual al codominio.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P7 (MC)",
      pregunta: "El dominio se lee en la gráfica como la extensión:",
      opciones: ["Horizontal", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P8 (MC)",
      pregunta: "El rango se lee en la gráfica como la extensión:",
      opciones: ["Vertical", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P9 (MC ingeniería)",
      pregunta: "Sensor: I(P)=0.04P+4, P∈[0,400]. ¿Cuál es el rango?",
      opciones: ["[4,20]", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P10 (Fill ingeniería)",
      pregunta: "Si el sensor envía 2 mA (fuera del rango [4,20]), indica... — escribe la respuesta.",
      opciones: ["falla del sensor", "rosnes led allaf", "universal", "vacío"],
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
