function crearQuiz() {
  var form = FormApp.create("S4·Auto Clasificación de números y producto cartesiano — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S4·Auto Clasificación de números y producto cartesiano");
  form.setDescription("Quiz: Números, Recta numérica, Propiedades, Producto cartesiano");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "Números",
      pregunta: "¿Cuál es √9?",
      opciones: ["3 es natural y entero", "oretne y larutan se 3", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Números",
      pregunta: "√7 es irracional?",
      opciones: ["irracional", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Números",
      pregunta: "0.142857 periódico es racional?",
      opciones: ["racional", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Recta numérica",
      pregunta: "¿Cuál es |-8|?",
      opciones: ["8", "9", "7", "-8"],
      correcta: 0
    },
    {
      categoria: "Recta numérica",
      pregunta: "¿Cuál es d(-4,7)?",
      opciones: ["11", "12", "10", "-11"],
      correcta: 0
    },
    {
      categoria: "Recta numérica",
      pregunta: "¿Cuál es x?",
      opciones: ["3 pertenece a [3,7) pero x=7 no", "3[ a ecenetrep 3", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Propiedades",
      pregunta: "¿Cuál es 5×(8+12)?",
      opciones: ["5×8+5×12 es distributiva", "avitubirtsid se 21×5+8×5", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Propiedades",
      pregunta: "¿Cuál es (4+a)+6?",
      opciones: ["a+10 usa conmutativa y asociativa", "avitaicosa y avitatumnoc asu 01+a", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Propiedades",
      pregunta: "¿Cuál es 1/5×5×y?",
      opciones: ["y usa inverso multiplicativo", "ovitacilpitlum osrevni asu y", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Producto cartesiano",
      pregunta: "¿Cuál es |A×B|?",
      opciones: ["6 con A=1,2 B=a,b,c", "1=A noc 6", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Producto cartesiano",
      pregunta: "A×B≠B×A aunque misma cardinalidad?",
      opciones: ["cardinalidad", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Producto cartesiano",
      pregunta: "¿Cuál es |D×M×A|?",
      opciones: ["5×3×3=45 referencias de tornillo", "ollinrot ed saicnerefer 54=3×3×5", "universal", "vacío"],
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
