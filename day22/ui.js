// ui.js

export class UI {
  constructor() {
    this.container = document.getElementById("quiz-container");
    this.timerElement = document.getElementById("time");
  }

  renderQuestion(question) {
    if (!question) return;

    const optionsHTML = question.options
      .map(opt => `<button class="option">${opt}</button>`)
      .join("");

    this.container.innerHTML = `
      <h2>${question.id}. ${question.question}</h2>
      <div id="options">${optionsHTML}</div>
    `;
  }

  showScore(score, total) {
    this.container.innerHTML = `
      <h2>Quiz Completed 🎉</h2>
      <p>Your Score: ${score} / ${total}</p>
    `;
  }

  updateTimer(timeLeft) {
    this.timerElement.textContent = timeLeft;
  }
}
