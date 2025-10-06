// task.js

// OOP: Task Class
export class Task {
  constructor(id, title, priority = "Medium", dueDate = null) {
    this.id = id;
    this.title = title;
    this.priority = priority;
    this.dueDate = dueDate;
    this.completed = false;
  }

  markComplete() {
    this.completed = true;
  }
}

// Task Array (Database simulation)
export const tasks = [];

// Add Task Function
export const addTask = (title, priority = "Medium", dueDate = null) => {
  const id = Date.now(); // unique ID
  const newTask = new Task(id, title, priority, dueDate);
  tasks.push(newTask);
  return newTask;
};

// Delete Task Function
export const deleteTask = (id) => {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) tasks.splice(index, 1);
};

// Filter Tasks by Priority
export const filterTasks = (priority = "All") => {
  if (priority === "All") return tasks;
  return tasks.filter(task => task.priority === priority);
};
