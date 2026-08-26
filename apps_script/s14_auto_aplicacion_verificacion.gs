function crearQuiz() {
  var form = FormApp.create("S14·Auto Ejercicios de aplicación y verificación — Quiz");
  form.setIsQuiz(true);
  form.setTitle("S14·Auto Ejercicios de aplicación y verificación");
  form.setDescription("Quiz del curso — 13 preguntas de opción múltiple.");
  form.setShuffleQuestions(true);

  var preguntas = [
    {
      categoria: "Fórmula general y discriminante",
      pregunta: "2x²-7x+3=0 con Δ=25>0?",
      opciones: ["x=3 o x=1/2; x²+4x+4=0 con Δ=0 da x=-2 raíz doble; x²+x+3=0 con Δ=-11<0 sin solución real", "laer nóiculos nis 0<11-=Δ noc 0=3+x+²x ;elbod zíar 2-=x ad 0=Δ noc 0=4+x4+²x ;2/1=x o 3=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Interpretación ingeniería",
      pregunta: "v²-80v+1500=0 con Δ=400>0?",
      opciones: ["v=50 o v=30 m/s", "s/m 03=v o 05=v", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Interpretación ingeniería",
      pregunta: "dos velocidades críticas?",
      opciones: ["críticas", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Radicales",
      pregunta: "√(2x+1)=5?",
      opciones: ["x=12 verificado", "odacifirev 21=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Radicales",
      pregunta: "√(x+4)=x-2?",
      opciones: ["x=5 válido pero x=0 es raíz extraña", "añartxe zíar se 0=x orep odiláv 5=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Forma cuadrática",
      pregunta: "x⁴-13x²+36=0 con u=x²?",
      opciones: ["x=±2", "2±=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Forma cuadrática",
      pregunta: "±3; x^(2/3)-5x^(1/3)+6=0 con u=x^(1/3)?",
      opciones: ["x=8", "8=x", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Forma cuadrática",
      pregunta: "27?",
      opciones: ["27", "Opción A incorrecta", "Opción B incorrecta", "Ninguna de las anteriores"],
      correcta: 0
    },
    {
      categoria: "Sistemas mixtos",
      pregunta: "x+y=13 y xy=42?",
      opciones: ["(x,y)=(6,7) o (7,6)", "universal", "vacío", "intersección"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "¿Cuál es proyectil h?",
      opciones: ["-5t²+40t+5", "5+t04+²t5-", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "¿Cuál es altura máxima 85 m en t?",
      opciones: ["4 s", "s 4", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "√(t+1)=3?",
      opciones: ["t=8 verificado", "odacifirev 8=t", "universal", "vacío"],
      correcta: 0
    },
    {
      categoria: "Problema integrador",
      pregunta: "proyectil h=-5t²+40t+5, altura máxima 85 m en t=4 s, √(t+1)=3?",
      opciones: ["t=8 verificado", "odacifirev 8=t", "universal", "vacío"],
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
