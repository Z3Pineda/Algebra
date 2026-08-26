function crearQuiz() {
  var form = FormApp.create("S13·C2 Solución por factorización — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S13·C2 Solución por factorización");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "Si (x-2)(x+3)=0, las soluciones son:",
      opciones: ["x=2, x=-3", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "x²-5x+6=0 factorizado: (x-2)(x-___)=0",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "2x²-8x=0 — escribe la respuesta.",
      opciones: ["x=0 o x=___\" → 4", "4 → \"___=x o 0=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "x²-49=0 se factoriza como:",
      opciones: ["(x+7)", "2x", "x", "4x"],
      correcta: 0
    },
    {
      categoria: "P5 (T/F)",
      pregunta: "Antes de factorizar hay que igualar a cero.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "x²+5x-24=0 — escribe la respuesta.",
      opciones: ["x=___ (positivo)\" → 3", "___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (MC)",
      pregunta: "Propiedad clave:",
      opciones: ["AB=0 → A=0 o B=0", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P8 (MC ingeniería)",
      pregunta: "Raiz negativa de dimension x se:",
      opciones: ["Descarta si x es longitud", "dutignol se x is atracseD", "universal", "vacío"],
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
