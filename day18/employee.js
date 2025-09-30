console.log("===== Project 1: Employee Management System =====\n");

// Employees stored in objects
const employees = [
  { id: 1, name: "Kalyani", department: "HR", salary: 45000, address: { city: "Chennai" } },
  { id: 2, name: "Raji", department: "IT", salary: 60000 },
  { id: 3, name: "Varshini", department: "Finance", salary: 50000, address: { city: "Coimbatore" } }
];

// Object Destructuring → Display employee cards
employees.forEach(emp => {
  const { name, department } = emp;
  console.log(`Employee Card → ${name} (${department})`);
});

// Spread Operator → Add new employee
const newEmployee = { id: 4, name: "Viji", department: "Admin", salary: 40000 };
const updatedEmployees = [...employees, newEmployee];

// Rest Parameter → Calculate total salaries
function calculateTotalSalary(...salaries) {
  return salaries.reduce((sum, s) => sum + s, 0);
}
console.log("\nTotal Salary:", calculateTotalSalary(...updatedEmployees.map(e => e.salary)));

// Template Literals + Optional Chaining
updatedEmployees.forEach(emp => {
  console.log(`
Employee Info:
Name: ${emp.name}
Department: ${emp.department}
Salary: ₹${emp.salary}
City: ${emp.address?.city ?? "N/A"}
  `);
});
