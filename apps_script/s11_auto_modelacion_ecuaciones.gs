function crearQuiz() {
  var form = FormApp.create("S11·Auto Problemas de modelación con ecuaciones lineales — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S11·Auto Problemas de modelación con ecuaciones lineales");
  form.setDescription("Quiz del curso — 12 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "Traducir a ecuación",
      pregunta: "resorte F=kx con F=600 k=200?",
      opciones: ["600=200x", "x002=006", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Traducir a ecuación",
      pregunta: "¿Cuál es suma consecutivos x+(x+1)?",
      opciones: ["47", "48", "46", "-47"],
      correcta: 0
    },
    {
      categoria: "Mezclas",
      pregunta: "0.15x+0.40(500-x)=125?",
      opciones: ["x=300 kg al 15%", "%51 la gk 003=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Mezclas",
      pregunta: "¿Cuál es verificación 0.15(300)+0.40(200)?",
      opciones: ["125", "126", "124", "-125"],
      correcta: 0
    },
    {
      categoria: "Balance de fuerzas",
      pregunta: "momento 200×1=F2×2?",
      opciones: ["F2=100 N", "N 001=2F", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Balance de fuerzas",
      pregunta: "¿Cuál es reacción total?",
      opciones: ["200+100=300 N", "N 003=001+002", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Costos de producción",
      pregunta: "punto de equilibrio 120n=800+45n?",
      opciones: ["n≈10.67", "76.01≈n", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Costos de producción",
      pregunta: "ganancia 75n-800=5400?",
      opciones: ["n≈83 piezas", "sazeip 38≈n", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Fracciones — resistencias",
      pregunta: "1/RT=1/4+1/12?",
      opciones: ["RT=3 Ω", "Ω 3=TR", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Fracciones — resistencias",
      pregunta: "¿Cuál es voltaje V?",
      opciones: ["3×3=9 V", "V 9=3×3", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "¿Cuál es fuerza F_A?",
      opciones: ["3×10⁶×π×(0.025)²≈5890 N", "×π×⁶01×3", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "presión P_B≈1.17 MPa?",
      opciones: ["MPa", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
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
