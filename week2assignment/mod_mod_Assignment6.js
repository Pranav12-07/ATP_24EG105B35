/* Modified for uniqueness */
/* DONE
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"
*/

const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//1.
let r1=employees.filter(element => element.department==="IT")
console.log("Employees of IT department are:",r1)

//2.
let r2=employees.map(element => {
    element.netSalary=element.salary+element.salary*0.10
    return element
})
console.log("Employees with net salary:",r2)

//3.
let r3=employees.reduce((acc,element) => acc+element.salary,0)
console.log("Total salary payout:",r3)

//4.
let r4=employees.find(element => element.salary==30000)
console.log("Employee details with salary 30000:",r4)

//5.
let r5=employees.findIndex(element => element.name==="Neha")
console.log("Index of Neha:",r5)
