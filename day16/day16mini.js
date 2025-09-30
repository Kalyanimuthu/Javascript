const currency = "₹";
const categories = ["Food", "Salary"];

let balance = 0;
var legacyNote = "Legacy Note";

let t1 = { id: 1, amount: 5000, type: "income", category: "Salary", date: "2025-09-23" };
let t2 = { id: 2, amount: 1500, type: "expense", category: "Food", date: "2025-09-23" };

balance = balance + t1.amount;
balance = balance - t2.amount;

let totalIncome = t1.amount;
let totalExpenses = t2.amount;

console.log("--- Budget Tracker ---");
console.log("Income:", currency + totalIncome);
console.log("Expenses:", currency + totalExpenses);
console.log("Net Balance:", currency + balance);

let selectedTransaction = null;
let pendingTransaction;
console.log("Selected:", selectedTransaction, "\nPending:", pendingTransaction);


// ===== Online Quiz App =====

const q1 = { id: 1, question: "JS runs in?", options: ["Python","C","JavaScript"], correctAnswer: "JavaScript" };
const q2 = { id: 2, question: "Keyword for block-scope var?", options: ["var","let"], correctAnswer: "let" };

let userAnswer1 = "JavaScript";
let userAnswer2 = "var";
var legacyScoreNote = "score calc with var";

let score = 0;

score = score + (userAnswer1 === q1.correctAnswer ? 1 : 0);
score = score + (userAnswer2 === q2.correctAnswer ? 1 : 0);

console.log("\n--- Quiz App ---");
console.log("Q1:", q1.question, "Answer:", userAnswer1);
console.log("Q2:", q2.question, "Answer:", userAnswer2);
console.log("Final Score:", score, "/", 2);

let noAnswer = null;
let missingOption;
console.log("No Answer:", noAnswer, "\nMissing:", missingOption);


// ===== Task Management System =====

const defaultStatuses = ["Pending", "Completed"];

let task1 = { id: 1, name: "Build Budget Tracker", description: "Console app project", priority: 2, status: "Completed" };
let task2 = { id: 2, name: "Prepare Quiz App", description: "Add 2 questions", priority: 1, status: "Pending" };

let tasks = [task1, task2];

let totalTasks = tasks.length;
let completedTasks = (task1.status === "Completed" ? 1 : 0) + (task2.status === "Completed" ? 1 : 0);
let progress = (completedTasks / totalTasks) * 100;

console.log("\n--- Task Manager ---");
console.log("Total:", totalTasks);
console.log("Completed:", completedTasks);
console.log("Progress:", progress + "%");

let selectedTask = null;
let missingField;
console.log("Selected Task:", selectedTask, "\nMissing Field:", missingField);
