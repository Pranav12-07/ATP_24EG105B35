/* DONE
Student Performance Dashboard
College Result Analysis System
*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];


// 1️ filter() students who passed (marks ≥ 40)
let r1 = students.filter(student => student.marks >= 40);
console.log("1. Students who passed:", r1);


// 2️ map() to add a grade field (without modifying original array)
let r2 = students.map(student => {
  let grade;

  if (student.marks >= 90) grade = "A";
  else if (student.marks >= 75) grade = "B";
  else if (student.marks >= 60) grade = "C";
  else grade = "D";

  return {
    ...student,   // spread operator (copies original data)
    grade: grade
  };
});

console.log("2. Updated array with grades:", r2);


// 3️ reduce() to calculate average marks
let totalMarks = students.reduce(
  (acc, student) => acc + student.marks,
  0
);

let average = totalMarks / students.length;
console.log("3. Average Marks:", average);


// 4️ find() the student who scored 92
let r4 = students.find(student => student.marks === 92);
console.log("4. Student who scored 92:", r4);


// 5️ findIndex() of student "Kiran"
let r5 = students.findIndex(student => student.name === "Kiran");
console.log("5. Index of student Kiran:", r5);