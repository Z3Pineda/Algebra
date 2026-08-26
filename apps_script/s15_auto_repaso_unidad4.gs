function crearQuiz() {
  var form = FormApp.create("S15·Auto Repaso general Unidad 4 — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S15·Auto Repaso general Unidad 4");
  form.setDescription("Quiz del curso — 14 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "S11 lineales",
      pregunta: "(2x-1)/3+(x+2)/2=4?",
      opciones: ["x=20/7", "7/02=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S11 lineales",
      pregunta: "despejar T de PV=nRT?",
      opciones: ["T=PV/(nR)", "/VP=T", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S12 sistemas",
      pregunta: "3x+2y=16 y x-y=2?",
      opciones: ["x=4", "4=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S12 sistemas",
      pregunta: "¿Cuál es y?",
      opciones: ["2 por sustitución y eliminación", "nóicanimile y nóicutitsus rop 2", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S13-S14 cuadráticas",
      pregunta: "x²-3x-10=0?",
      opciones: ["x=5", "5=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S13-S14 cuadráticas",
      pregunta: "-2 por factorización y fórmula general?",
      opciones: ["general", "2x", "x", "4x"],
      correcta: 0
    },
    {
      categoria: "S13-S14 cuadráticas",
      pregunta: "√(x+5)=x-1?",
      opciones: ["x=4 válido (x=-1 se descarta)", "odiláv 4=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S14-S15 sistemas mixtos",
      pregunta: "y=x²-1 y y=2x+3?",
      opciones: ["x=1±√5", "5√±1=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S14-S15 sistemas mixtos",
      pregunta: "x⁴-8x²+15=0 con u=x²?",
      opciones: ["x=±√3", "3√±=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "S14-S15 sistemas mixtos",
      pregunta: "±√5?",
      opciones: ["±√5", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "S15 polinomios",
      pregunta: "P(2) por Ruffini para P(x)=x³-4x²+5?",
      opciones: ["P(2)=-3", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "S15 polinomios",
      pregunta: "¿Cuál es factorizar x³-4x²+x+6?",
      opciones: ["(x-3)(x-2)(x+1)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "¿Cuál es caja sin tapa V?",
      opciones: ["4x³-100x²+400x-1056", "6501-x004+²x001-³x4", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "¿Cuál es x?",
      opciones: ["4 cm es raíz válida con V=1056 cm³", "³mc 6501=V noc adiláv zíar se mc 4", "universal", "vacío"],
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
