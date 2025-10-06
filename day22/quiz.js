// quiz.js

export class Quiz {
  constructor() {
    this.questions = [];
    this.currentIndex = 0;
    this.score = 0;
  }

  // Fetch questions from API with fallback
  async loadQuestions() {
    try {
      const res = await fetch("https://opentdb.com/api.php?amount=5&type=multiple");
      if (!res.ok) throw new Error("Network response failed");

      const data = await res.json();
      if (!data.results || data.results.length === 0) throw new Error("Empty data");

      this.questions = data.results.map((q, index) => ({
        id: index + 1,
        question: q.question,
        correct: q.correct_answer,
        options: [...q.incorrect_answers, q.correct_answer].sort(() => Math.random() - 0.5)
      }));
    } catch (err) {
      console.warn("⚠️ API failed, loading fallback questions.", err);
      this.loadFallbackQuestions();
    }
  }

  loadFallbackQuestions() {
    this.questions = [
      {
        id: 1,
        question: "Which language runs in a web browser?",
        options: ["Java", "C", "Python", "JavaScript"],
        correct: "JavaScript"
      },
      {
        id: 2,
        question: "What does CSS stand for?",
        options: [
          "Central Style Sheets",
          "Cascading Style Sheets",
          "Computer Style Sheets",
          "Creative Style Sheets"
        ],
        correct: "Cascading Style Sheets"
      },
      {
        id: 3,
        question: "What does HTML stand for?",
        options: [
          "HyperText Markup Language",
          "Hyper Trainer Marking Language",
          "Hyper Text Marketing Language",
          "Hyper Transfer Machine Language"
        ],
        correct: "HyperText Markup Language"
      }
    ];
  }

  getCurrentQuestion() {
    return this.questions[this.currentIndex];
  }

  checkAnswer(answer) {
    const question = this.getCurrentQuestion();
    if (answer === question.correct) {
      this.score++;
      return true;
    }
    return false;
  }

  nextQuestion() {
    this.currentIndex++;
  }

  isFinished() {
    return this.currentIndex >= this.questions.length;
  }
}
