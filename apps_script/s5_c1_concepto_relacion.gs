function crearQuiz() {
  var form = FormApp.create("S5·C1 Concepto de relación — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S5·C1 Concepto de relación");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "Una relación de A en B es un subconjunto de:",
      opciones: ["A×B", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
      correcta: 0
    },
    {
      categoria: "P2 (Fill)",
      pregunta: "Sea R=(1,a),(2,b),(2,c). Dom(R)=___,___",
      opciones: ["1", "2", "0", "-1"],
      correcta: 0
    },
    {
      categoria: "P3 (Fill)",
      pregunta: "Sea R=(1,a),(2,b),(2,c), B=a,b,c,d. Im(R)=___,___",
      opciones: ["a", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P4 (T/F)",
      pregunta: "En una relación, un elemento de A puede relacionarse con varios de B.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P5 (MC)",
      pregunta: "Im(R) siempre es...",
      opciones: ["Subconjunto del codominio", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P6 (MC ingeniería)",
      pregunta: "Varios sensores",
      opciones: ["una alarma es una correspondencia...\" → Muchos a uno", "onu a sohcuM → \"...aicnednopserroc anu se amrala anu", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "P7 (T/F)",
      pregunta: "Un círculo en el plano es una relación válida.",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "Si R⊆A×B y |A|=3, |B|=4, el máximo de pares en R es ___.",
      opciones: ["12", "13", "11", "-12"],
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
