function crearQuiz() {
  var form = FormApp.create("S12·C4 Método de suma o resta y solución gráfica — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S12·C4 Método de suma o resta y solución gráfica");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "2x+y=7 y x-y=2. Sumando se elimina:",
      opciones: ["y", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "3x=9 — escribe la respuesta.",
      opciones: ["x=___\" → 3", "3 → \"___=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "Coeficientes de y iguales (+3y y +3y):",
      opciones: ["Restar ecuaciones", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (MC)",
      pregunta: "Solucion grafica del sistema es:",
      opciones: ["Punto de interseccion", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "y=2x+1 e y=-x+7 — escribe la respuesta.",
      opciones: ["interseccion x=___\" → 2", "2 → \"___=x noiccesretni", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P6 (T/F)",
      pregunta: "Rectas paralelas",
      opciones: ["Falso", "Depende del contexto", "Solo en casos especiales", "0"],
      correcta: 0
    },
    {
      categoria: "P7 (MC ingeniería)",
      pregunta: "2A+B=50 y A+3B=45",
      opciones: ["metodo eficiente:\" → Suma/resta tras multiplicar", "racilpitlum sart atser/amuS → \":etneicife odotem", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P8 (MC)",
      pregunta: "Grafico da solucion exacta si:",
      opciones: ["Se leen coordenadas exactas", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
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
