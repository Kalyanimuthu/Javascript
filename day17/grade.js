console.log("===== Project 1: Student Grade Management System =====\n");

// --------------------
// Global Scope
// --------------------
var studentList = []; // global student list (var to demonstrate hoisting)

// --------------------
// Hoisting Example
// --------------------
addStudent(101, "Kalyani", [85, 90, 78]); // function called before declaration

// var hoisting example
console.log("Value of totalStudents before assignment:", totalStudents); // undefined
var totalStudents = 0;

// --------------------
// Function Declarations / Expressions / Arrow Functions
// --------------------

// Function Declaration: add a student
function addStudent(roll, name, marks) {
  studentList.push({ roll, name, marks });
}

// Function Expression: calculate average marks
const calculateAverage = function (marks) {
  let sum = marks.reduce((acc, curr) => acc + curr, 0); // local scope
  return marks.length > 0 ? sum / marks.length : 0;
};

// Arrow Function: convert numeric marks to grades
const marksToGrades = (marks) => {
  return marks.map((mark) => {
    if (mark >= 90) return "A+";
    else if (mark >= 80) return "A";
    else if (mark >= 70) return "B";
    else if (mark >= 60) return "C";
    else return "F";
  });
};

// --------------------
// Adding Students
// --------------------
addStudent(102, "Raji", [55, 60, 58]);
addStudent(103, "Viji", [75, 80, 70]);
addStudent(104, "Varshini", [95, 92, 88]);

// --------------------
// Using Array Methods
// --------------------

// 1) map() → convert marks to grade letters
console.log("\nGrades for each student:");
studentList.forEach((student) => {
  let grades = marksToGrades(student.marks);
  console.log(`${student.name} (${student.roll}): ${grades.join(", ")}`);
});

// 2) filter() → get students who passed (average >= 60)
let passedStudents = studentList.filter(
  (student) => calculateAverage(student.marks) >= 60
);
console.log("\nStudents who passed:");
passedStudents.forEach((s) => console.log(`${s.name} (${s.roll})`));

// 3) reduce() → class average
let classAverage = studentList
  .map((s) => calculateAverage(s.marks))
  .reduce((acc, avg) => acc + avg, 0) / studentList.length;
console.log(`\nClass Average: ${classAverage.toFixed(2)}`);

// 4) find() → search for student by roll number
let searchRoll = 103;
let foundStudent = studentList.find((s) => s.roll === searchRoll);
console.log(
  `\nSearch for Roll No ${searchRoll}: ${
    foundStudent ? foundStudent.name : "Not Found"
  }`
);

// 5) forEach() → print student details
console.log("\nAll Student Details:");
studentList.forEach((student) => {
  console.log(
    `Roll: ${student.roll} | Name: ${student.name} | Marks: ${student.marks.join(
      ", "
    )}`
  );
});
