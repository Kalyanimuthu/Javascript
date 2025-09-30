console.log("===== Project 4: Employee Attendance & Payroll System =====\n");

// Employee data
const employees = [
  { name: "Alice", id: 101, salaryPerDay: 1000, attendanceDays: 5, onLeave: false },
  { name: "Bob", id: 102, salaryPerDay: 1200, attendanceDays: 0, onLeave: true },
  { name: "Charlie", id: 103, salaryPerDay: 900, attendanceDays: 7, onLeave: false },
  { name: "Diana", id: 104, salaryPerDay: 1100, attendanceDays: 4, onLeave: false }
];

// Bonus list
const bonuses = [100, 200, 50, 150];

// Payroll budget limit
const payrollLimit = 15000;
let totalPayroll = 0;

// 1. for loop to process attendance for each employee daily
console.log("Processing Attendance:");
for (let i = 0; i < employees.length; i++) {
  const emp = employees[i];
  if (emp.onLeave) {
    console.log(`${emp.name} is on leave today. Skipping attendance.`);
    continue; // 6. skip employees on leave
  }

  console.log(`${emp.name} attended ${emp.attendanceDays} day(s).`);

  // 2. while loop to count working hours until employee logs out
  let workedHours = 0;
  let hoursToWork = emp.attendanceDays * 8; // assuming 8 hours/day
  while (workedHours < hoursToWork) {
    workedHours++;
  }
  console.log(`${emp.name} worked ${workedHours} hours total.`);
}

// 3. do...while loop to calculate salary at least once
console.log("\nSalary Calculation:");
for (let emp of employees) {
  let salary = 0;
  do {
    if (emp.onLeave) {
      salary = 0;
    } else {
      salary = emp.salaryPerDay * emp.attendanceDays;
    }
    console.log(`Salary for ${emp.name}: ₹${salary}`);
  } while (false);

  // Apply bonuses later
  totalPayroll += salary;

  // 7. break if total payroll exceeds budget
  if (totalPayroll > payrollLimit) {
    console.log("Payroll budget exceeded! Stopping further salary calculations.");
    break;
  }
}

// 4. for...in loop to print details of each employee
console.log("\nEmployee Details (for...in):");
for (let emp of employees) {
  for (let key in emp) {
    console.log(`${key}: ${emp[key]}`);
  }
  console.log("---------------------------");
}

// 5. for...of loop to iterate over bonuses
console.log("\nApplying Bonuses:");
for (let bonus of bonuses) {
  console.log(`Bonus applied: ₹${bonus}`);
}
