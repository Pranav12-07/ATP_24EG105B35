/* 
Employee Payroll Processor
*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//1. Employees from IT department
let itEmployees = employees.filter(emp => emp.department === "IT");
console.log("Employees of IT department:", itEmployees);

//2. Add netSalary with 10% bonus
let employeesWithBonus = employees.map(emp => ({
  ...emp,
  netSalary: emp.salary + emp.salary * 0.10
}));
console.log("Employees with net salary:", employeesWithBonus);

//3. Total salary payout
let totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);
console.log("Total salary payout:", totalSalary);

//4. Employee with salary 30000
let employee30000 = employees.find(emp => emp.salary === 30000);
console.log("Employee with salary 30000:", employee30000);

//5. Index of employee "Neha"
let nehaIndex = employees.findIndex(emp => emp.name === "Neha");
console.log("Index of Neha:", nehaIndex);