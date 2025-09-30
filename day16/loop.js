// ===== Project 1: Student Marks Report Generator =====
console.log("\n===== Project 1: Student Marks Report Generator =====\n");

let students = [
  { name: "Alice", age: 15, marks: [85, 90, 78], absent: false },
  { name: "Bob", age: 16, marks: [0, 0, 0], absent: false },
  { name: "Charlie", age: 15, marks: [72, 68, 80], absent: false },
  { name: "Diana", age: 16, marks: [], absent: true }
];

const subjects = ["Maths", "Science", "English"];

// ---- Requirement 1: for loop over students ----
for (let studentIndex = 0; studentIndex < students.length; studentIndex++) {
  let student = students[studentIndex];

  console.log("\n--- Student Report ---");

  // ---- Requirement 4: for...in loop over properties ----
  for (let key in student) {
    if (key !== "marks") {
      console.log(key + ":", student[key]);
    }
  }

  // ---- Requirement 6: skip absent students ----
  if (student.absent) {
    console.log("Status: Absent (skipping report)");
    continue;
  }

  // ---- Requirement 5: for...of loop over subjects ----
  for (let [index, subject] of subjects.entries()) {
    console.log(subject + ":", student.marks[index]);
  }

  // ---- Requirement 2: while loop to calculate total & average ----
  let total = 0;
  let i = 0;
  while (i < student.marks.length) {
    total += student.marks[i];
    i++;
  }
  let average = student.marks.length > 0 ? total / student.marks.length : 0;

  // ---- Requirement 7: break if failed all subjects ----
  let failedAll = student.marks.length > 0 && student.marks.every(mark => mark === 0);
  if (failedAll) {
    console.log("Result: Failed all subjects ❌. Stopping further processing.");
    break; // stops the whole report
  }

  // ---- Requirement 3: do...while ensures summary prints at least once ----
  let summaryPrinted = false;
  do {
    console.log("Summary -> Average Marks:", average.toFixed(2));
    summaryPrinted = true;
  } while (!summaryPrinted);
}
