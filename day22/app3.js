// app.js

import { Quiz } from "./quiz.js";
import { UI } from "./ui.js";

const quiz = new Quiz();
const ui = new UI();
const nextBtn = document.getElementById("nextBtn");

let timer;
let timeLeft = 10;

async function startQuiz() {
  await quiz.loadQuestions();
  renderQuestion();
}

function renderQuestion() {
  if (quiz.isFinished()) {
    clearInterval(timer);
    ui.showScore(quiz.score, quiz.questions.length);
    nextBtn.disabled = true;
    return;
  }

  ui.renderQuestion(quiz.getCurrentQuestion());
  resetTimer();

  // Event delegation for options
  document.getElementById("options").onclick = e => {
    if (e.target.classList.contains("option")) {
      const selected = e.target.textContent;
      const isCorrect = quiz.checkAnswer(selected);
      e.target.style.background = isCorrect ? "lightgreen" : "salmon";
      // Disable further clicks
      [...document.querySelectorAll(".option")].forEach(btn => (btn.disabled = true));
    }
  };
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 10;
  ui.updateTimer(timeLeft);

  timer = setInterval(() => {
    timeLeft--;
    ui.updateTimer(timeLeft);
    if (timeLeft <= 0) {
      clearInterval(timer);
      quiz.nextQuestion();
      renderQuestion();
    }
  }, 1000);
}

nextBtn.addEventListener("click", () => {
  quiz.nextQuestion();
  renderQuestion();
});

// Start the quiz
startQuiz();
