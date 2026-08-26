function crearQuiz() {
  var form = FormApp.create("S11·C3 Ecuaciones con literales — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S11·C3 Ecuaciones con literales");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "Despejar F de P=F/A:",
      opciones: ["F = PA", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "Despejar t de d=vt:",
      opciones: ["t = d/v", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "Despejar r de A=πr²:",
      opciones: ["r = √", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "Despejar T de PV=nRT:",
      opciones: ["T = PV/", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "Despejar x de F=kx — escribe la respuesta.",
      opciones: ["x = ___\" → F/k", "k/F → \"___ = x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "Despejar v de d=vt — escribe la respuesta.",
      opciones: ["v = ___\" → d/t", "t/d → \"___ = v", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "Para calcular F con P y A conocidos, despejas:",
      opciones: ["F = PA", "AP = F", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (T/F)",
      pregunta: "Al despejar, las otras letras se tratan como constantes.",
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
