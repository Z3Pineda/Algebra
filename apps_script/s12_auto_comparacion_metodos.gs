function crearQuiz() {
  var form = FormApp.create("S12·Auto Ejercicios comparativos de métodos de solución — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S12·Auto Ejercicios comparativos de métodos de solución");
  form.setDescription("Quiz del curso — 14 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "Mismo sistema tres métodos",
      pregunta: "2x+y=7 y x-y=2?",
      opciones: ["x=3", "3=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Mismo sistema tres métodos",
      pregunta: "y=1 por sustitución eliminación y gráfico; 3x+2y=12 y x-y=1?",
      opciones: ["x=14/5", "5/41=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Mismo sistema tres métodos",
      pregunta: "¿Cuál es y?",
      opciones: ["9/5", "9/6", "10/5", "8/5"],
      correcta: 0
    },
    {
      categoria: "Clasificar sistemas",
      pregunta: "¿Cuál es x+y?",
      opciones: ["4 y 2x+2y=8 es SCI", "ICS se 8=y2+x2 y 4", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Clasificar sistemas",
      pregunta: "¿Cuál es 2x-y?",
      opciones: ["5 y x+y=4 es SCD", "DCS se 4=y+x y 5", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Producción A y B",
      pregunta: "sistema 3A+2B=120 y A+4B=70?",
      opciones: ["A=34", "43=A", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Producción A y B",
      pregunta: "¿Cuál es B?",
      opciones: ["9", "10", "8", "-9"],
      correcta: 0
    },
    {
      categoria: "Mezcla de aleaciones",
      pregunta: "x+y=600 y 0.25x+0.55y=240?",
      opciones: ["x=300 kg", "gk 003=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Mezcla de aleaciones",
      pregunta: "¿Cuál es y?",
      opciones: ["300 kg", "gk 003", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Equilibrio de fuerzas",
      pregunta: "F1+F2=500 y 2F1-F2=100?",
      opciones: ["F1=200 N", "N 002=1F", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Equilibrio de fuerzas",
      pregunta: "¿Cuál es F2?",
      opciones: ["300 N por eliminación", "nóicanimile rop N 003", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "bandas transportadoras?",
      opciones: ["transportadoras", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "¿Cuál es d?",
      opciones: ["15 m y v2=1 m/s", "s/m 1=2v y m 51", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "¿Cuál es bandas transportadoras, d?",
      opciones: ["15 m y v2=1 m/s", "s/m 1=2v y m 51", "universal", "vacío"],
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
