// app.js
import { Task, tasks, addTask, deleteTask, filterTasks } from "./task.js";

const form = document.getElementById("taskForm");
const taskList = document.getElementById("taskList");
const filterPriority = document.getElementById("filterPriority");
const applyFilterBtn = document.getElementById("applyFilter");

// Render all tasks
function renderTasks(taskArray) {
  taskList.innerHTML = "";
  taskArray.forEach(task => {
    const taskCard = document.createElement("div");
    taskCard.classList.add("task-card");
    if (task.completed) taskCard.classList.add("completed");
    taskCard.dataset.id = task.id;

    taskCard.innerHTML = `
      <h3>${task.title}</h3>
      <p><strong>Priority:</strong> ${task.priority}</p>
      <p><strong>Due:</strong> ${task.dueDate || "N/A"}</p>
      <div class="task-actions">
        <button class="complete-btn">✅ Complete</button>
        <button class="delete-btn">🗑 Delete</button>
      </div>
    `;

    taskList.appendChild(taskCard);
  });
}

// Handle Add Task
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const title = document.getElementById("title").value.trim();
  const priority = document.getElementById("priority").value;
  const dueDate = document.getElementById("dueDate").value;

  if (!title) return;

  addTask(title, priority, dueDate);
  renderTasks(tasks);
  form.reset();
});

// Event Delegation for Complete/Delete
taskList.addEventListener("click", (e) => {
  const target = e.target;
  const card = target.closest(".task-card");
  const id = Number(card?.dataset.id);

  if (target.classList.contains("complete-btn")) {
    const task = tasks.find(t => t.id === id);
    if (task) task.markComplete();
    renderTasks(tasks);
  }

  if (target.classList.contains("delete-btn")) {
    deleteTask(id);
    renderTasks(tasks);
  }
});

// Apply Filter
applyFilterBtn.addEventListener("click", () => {
  const selectedPriority = filterPriority.value;
  const filtered = filterTasks(selectedPriority);
  renderTasks(filtered);
});

// Initial render (empty)
renderTasks(tasks);
