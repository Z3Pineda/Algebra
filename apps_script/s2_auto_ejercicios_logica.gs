function crearQuiz() {
  var form = FormApp.create("S2·Auto Ejercicios de lógica — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S2·Auto Ejercicios de lógica");
  form.setDescription("Quiz: Proposiciones, Conjunto solución, Tablas de verdad, Implicación y De Morgan");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "Proposiciones",
      pregunta: "¿Cuál es \"3×4?",
      opciones: ["13\" es proposición F", "F nóicisoporp se \"31", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Proposiciones",
      pregunta: "\"¿Cuántos engranes...?\" no es proposición?",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "Conjunto solución",
      pregunta: "2x-1=7?",
      opciones: ["S=4", "4=S", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Conjunto solución",
      pregunta: "x²-4=0?",
      opciones: ["S=-2", "2-=S", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Conjunto solución",
      pregunta: "x>3∧x<8 con U dado?",
      opciones: ["S=4", "4=S", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Tablas de verdad",
      pregunta: "p?",
      opciones: ["¬q es F cuando p=V y q=V", "V=q y V=p odnauc F se q¬", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Tablas de verdad",
      pregunta: "¿Cuál es ¬p∧q es V solo cuando p?",
      opciones: ["F y q=V", "V=q y F", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Tablas de verdad",
      pregunta: "p∧q es V solo si ambas V?",
      opciones: ["V", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Tablas de verdad",
      pregunta: "¬p∧q es V solo cuando p=F y q=V, p?",
      opciones: ["¬q es F cuando p=V y q=V, p∧q es V solo si ambas V", "V=q y V=p odnauc F se q¬", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Implicación y De Morgan",
      pregunta: "(p∧q)?",
      opciones: ["r es F cuando p∧q=V y r=F", "F=r y V=q∧p odnauc F se r", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Implicación y De Morgan",
      pregunta: "¬(p∧q)≡¬p∨¬q?",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "Implicación y De Morgan",
      pregunta: "¬(v∨s)≡¬v∧¬s?",
      opciones: ["Verdadero", "Falso", "Depende del contexto", "Solo en casos especiales"],
      correcta: 0
    },
    {
      categoria: "Implicación y De Morgan",
      pregunta: "condición de arranque CNC?",
      opciones: ["CNC", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Implicación y De Morgan",
      pregunta: "¬(p∧q)≡¬p∨¬q, ¬(v∨s)≡¬v∧¬s, (p∧q)?",
      opciones: ["r es F cuando p∧q=V y r=F, condición de arranque CNC", "F=r y V=q∧p odnauc F se r", "universal", "vacío"],
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
