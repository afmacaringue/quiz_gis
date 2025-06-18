const quizData = [
  {
    question: "1. O que significa SIG (GIS)?",
    answers: {
      a: "Sistema de Integração Geográfica",
      b: "Sistema de Informação Geográfica",
      c: "Serviço Integrado de Geolocalização"
    },
    correct: "b"
  },
  {
    question: "2. Qual dos seguintes é um exemplo de dado vetorial?",
    answers: {
      a: "Imagem de satélite",
      b: "Arquivo raster",
      c: "Shapefile de ruas"
    },
    correct: "c"
  },
  {
    question: "3. O que é um 'buffer' no contexto de GIS?",
    answers: {
      a: "Zona ao redor de uma feição",
      b: "Filtro para corrigir erros",
      c: "Ferramenta para medir a altitude"
    },
    correct: "a"
  }
];

function buildQuiz() {
  const quizContainer = document.getElementById("quiz");
  const output = [];

  quizData.forEach((q, index) => {
    const answers = [];
    for (let letter in q.answers) {
      answers.push(
        `<label>
          <input type="radio" name="question${index}" value="${letter}">
          ${letter.toUpperCase()}: ${q.answers[letter]}
        </label><br>`
      );
    }

    output.push(
      `<div class="question">
        <p>${q.question}</p>
        <div class="answers">${answers.join("")}</div>
      </div>`
    );
  });

  quizContainer.innerHTML = output.join("");
}

function showResults() {
  let score = 0;
  quizData.forEach((q, index) => {
    const selected = document.querySelector(
      `input[name=question${index}]:checked`
    );
    if (selected && selected.value === q.correct) {
      score++;
    }
  });

  const resultsContainer = document.getElementById("results");
  resultsContainer.innerHTML = `Você acertou ${score} de ${quizData.length} perguntas! 🎯`;
}

document.getElementById("submit").addEventListener("click", showResults);

buildQuiz();