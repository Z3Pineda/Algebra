function crearQuiz() {
  var form = FormApp.create("S16·C4 Repaso general del curso — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S16·C4 Repaso general del curso");
  form.setDescription("Quiz: U1, U2, U3, U4, U5");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "U1",
      pregunta: "¿Cuál es |A∪B|?",
      opciones: ["60+45-25=80 piezas aceptables en al menos un criterio", "oiretirc nu sonem la ne selbatpeca sazeip 08=52-54+06", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "U1",
      pregunta: "20 fallan ambos criterios?",
      opciones: ["criterios", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "U2",
      pregunta: "¿Cuál es F?",
      opciones: ["250x es función pues cada x tiene un único F", "F ocinú nu eneit x adac seup nóicnuf se x052", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "U2",
      pregunta: "¿Cuál es si F?",
      opciones: ["875N entonces x=3.5m", "m5.3=x secnotne N578", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "U3",
      pregunta: "¿Cuál es V?",
      opciones: ["πr²h1+πr²h2=πr²(h1+h2) por factor común", "²rπ=2h²rπ+1h²rπ", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "U3",
      pregunta: "simplificar concentra el cálculo de πr² una vez?",
      opciones: ["vez", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "U4",
      pregunta: "500+35n=2275?",
      opciones: ["n=51 piezas de equilibrio", "oirbiliuqe ed sazeip 15=n", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "U4",
      pregunta: "x²-5x+6=0?",
      opciones: ["x=2", "2=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "U4",
      pregunta: "3?",
      opciones: ["3", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "U5",
      pregunta: "|d-50|≤0.02 equivale a 49.98≤d≤50.02 mm?",
      opciones: ["mm", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "U5",
      pregunta: "¿Cuál es d?",
      opciones: ["50.015mm cumple |50.015-50|=0.015≤0.02 aceptada", "adatpeca 20.0≤510.0=|05-510.05| elpmuc mm510.05", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "U5",
      pregunta: "¿Cuál es |d-50|≤0.02 equivale a 49.98≤d≤50.02 mm, d?",
      opciones: ["50.015mm cumple |50.015-50|=0.015≤0.02 aceptada", "adatpeca 20.0≤510.0=|05-510.05| elpmuc mm510.05", "universal", "vacío"],
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
