function crearQuiz() {
  var form = FormApp.create("S2·C2 Conjunto solución de una proposición abierta — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S2·C2 Conjunto solución de una proposición abierta");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (Fill)",
      pregunta: "Sea P(x): x-2=5, U=ℤ. El conjunto solución es S=___.",
      opciones: ["7", "8", "6", "-7"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "Sea P(x): x>3, U=1,2,3,4,5. S=___,___.",
      opciones: ["4", "5", "3", "-4"],
      correcta: 0
    },
    {
      categoria: "P4 (T/F)",
      pregunta: "Si ningún valor de U hace verdadera P(x), entonces S=U.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P6 (Fill)",
      pregunta: "Sea P(x): x>2 ∧ x<6, U=ℕ. S=___,___,___.",
      opciones: ["3", "4", "2", "-3"],
      correcta: 0
    },
    {
      categoria: "P8 (T/F)",
      pregunta: "P(x): x=x siempre es verdadera, por lo tanto S=U.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P2 (MC)",
      pregunta: "Sea P(x): x²=4, U=ℤ. ¿Cuál es S?",
      opciones: ["4", "2", "-2, 2", "-4, 4"],
      correcta: 2
    },
    {
      categoria: "P5 (MC ingeniería)",
      pregunta: "Se evalúa P(d): 24.5≤d≤25.5 para d=24.3, 25.0, 25.7. ¿Cuál es S?",
      opciones: ["24.3, 25.0", "25.0", "24.3, 25.7", "24.3, 25.0, 25.7"],
      correcta: 1
    },
    {
      categoria: "P7 (MC)",
      pregunta: "Sea P(x): x<1 ∨ x>4, U=0,1,2,3,4,5,6. ¿Cuál es S?",
      opciones: ["0,5,6", "1,2,3,4", "0,1,5,6", "2,3"],
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
