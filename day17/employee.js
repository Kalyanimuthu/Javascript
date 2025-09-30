console.log("===== Project 3: Employee Task Tracker =====\n");

// --------------------
// Global Scope
// --------------------
var tasks = []; // global array to store all tasks
var totalTasks;  // demonstrate var hoisting

console.log("Total tasks before assignment:", totalTasks); // undefined

// --------------------
// Hoisting Example
// --------------------
logTasks(); // function declaration called before definition

// --------------------
// Functions
// --------------------
function logTasks() {
    console.log("\n--- Logging all tasks ---");
    if (tasks.length === 0) {
        console.log("No tasks assigned yet.");
        return;
    }
    tasks.forEach((t) => {
        console.log(`ID: ${t.id} | Employee: ${t.employee} | Task: ${t.taskName} | Status: ${t.status} | Priority: ${t.priority}`);
    });
}

const assignTask = function (id, employee, taskName, priority) {
    function createTask() { // nested function demonstrates scope
        return { id, employee, taskName, status: "pending", priority };
    }
    const newTask = createTask();
    tasks.push(newTask);
};

const completeTask = (id) => {
    let index = tasks.findIndex((t) => t.id === id);
    if (index !== -1) {
        tasks[index].status = "completed";
        console.log(`Task ID ${id} marked as completed.`);
    }
};

const getPendingTasks = function (employee) {
    return tasks.filter((t) => t.employee === employee && t.status === "pending");
};

// --------------------
// Assigning Tasks
// --------------------
assignTask(1, "Kalyani", "Prepare Report", 2);
assignTask(2, "Raji", "Client Meeting", 1);
assignTask(3, "Viji", "Code Review", 3);
assignTask(4, "Varshini", "Design Mockup", 2);
assignTask(5, "Kalyani", "Update Dashboard", 1);

// --------------------
// Display All Tasks
// --------------------
console.log("\nAll Tasks:");
logTasks();

// --------------------
// Print tasks with forEach
// --------------------
console.log("\nPrinting tasks with forEach:");
tasks.forEach((t) => console.log(`${t.employee} - ${t.taskName} [${t.status}]`));

// --------------------
// Pending tasks for Kalyani
// --------------------
console.log("\nPending tasks for Kalyani:");
getPendingTasks("Kalyani").forEach((t) => console.log(`${t.taskName} [${t.status}]`));

// --------------------
// Find task by ID
// --------------------
let taskFound = tasks.find((t) => t.id === 3);
if (taskFound) {
    console.log("\nTask found with ID 3:");
    console.log(`Employee: ${taskFound.employee}, Task: ${taskFound.taskName}, Status: ${taskFound.status}, Priority: ${taskFound.priority}`);
}

// --------------------
// Update a task’s status
// --------------------
let idx = tasks.findIndex((t) => t.id === 4);
if (idx !== -1) {
    tasks[idx].status = "completed";
    console.log(`\nTask ID 4 updated to completed: ${tasks[idx].employee} - ${tasks[idx].taskName} [${tasks[idx].status}]`);
}

// --------------------
// Merge tasks of two employees
// --------------------
console.log("\nMerged Tasks for Kalyani & Varshini:");
tasks
    .filter(t => t.employee === "Kalyani" || t.employee === "Varshini")
    .forEach(t => console.log(`${t.employee} - ${t.taskName} [${t.status}]`));

// --------------------
// Sort tasks by priority
// --------------------
console.log("\nTasks sorted by priority:");
[...tasks]
    .sort((a, b) => a.priority - b.priority)
    .forEach(t => console.log(`${t.employee} - ${t.taskName} [Priority: ${t.priority}]`));
