console.log("===== Project 3: Student Report Card Generator =====\n");

const student = {
  id: 1,
  name: "Raji",
  marks: { math: 85, english: 90 }
};

// Destructure marks
const { math, english } = student.marks;
console.log(`Math: ${math}, English: ${english}`);

// Spread → Add new subject
const updatedStudent = {
  ...student,
  marks: { ...student.marks, computer: 95 }
};

// Rest → Average
function calculateAverage(...marks) {
  return (marks.reduce((a, b) => a + b, 0) / marks.length).toFixed(2);
}

// Template Literals → Report Card
console.log(`
Report Card for ${updatedStudent.name}
Math: ${updatedStudent.marks.math}
English: ${updatedStudent.marks.english}
Computer: ${updatedStudent.marks.computer}
Science: ${updatedStudent.marks?.science ?? "N/A"}
Average: ${calculateAverage(...Object.values(updatedStudent.marks))}
`);
