function crearQuiz() {
  var form = FormApp.create("S1·C2 Concepto de conjunto — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S1·C2 Concepto de conjunto");
  form.setDescription("Quiz del curso — 8 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "P1 (MC)",
      pregunta: "¿Cuál agrupación ES un conjunto bien definido?",
      opciones: ["Números mayores que 5", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
      correcta: 0
    },
    {
      categoria: "P2 (T/F)",
      pregunta: "El conjunto vacío ∅ es igual al conjunto 0.",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P3 (MC)",
      pregunta: "Sea A = tornillo, engrane, rodamiento. ¿Cuál es |A|?",
      opciones: ["3", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P4 (T/F)",
      pregunta: "Si una pieza reprueba la revisión, entonces pieza ∈ A (piezas aprobadas).",
      opciones: ["Falso", "Verdadero", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "P5 (Fill)",
      pregunta: "El conjunto que contiene todos los objetos del contexto se llama conjunto ___.",
      opciones: ["universal", "lasrevinu", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "P6 (MC)",
      pregunta: "¿Cuál es la cardinalidad de ∅?",
      opciones: ["0", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "P7 (MC)",
      pregunta: "¿Qué símbolo indica que un elemento NO pertenece a un conjunto?",
      opciones: ["∉", "Los mejores tornillos", "Piezas defectuosas", "Conjunto vacío {}"],
      correcta: 0
    },
    {
      categoria: "P8 (Fill)",
      pregunta: "Sea U=1,2,3,4,5 y A=2,4. Entonces |A| = ___.",
      opciones: ["2", "3", "1", "-2"],
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
