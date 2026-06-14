/* 
Student Performance Dashboard
*/

const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//1. Students who passed
let passedStudents = students.filter(student => student.marks >= 40);
console.log("Students who passed:", passedStudents);

//2. Add grade field
let studentsWithGrades = students.map(student => {
  let grade;

  if (student.marks >= 90) grade = "A";
  else if (student.marks >= 75) grade = "B";
  else if (student.marks >= 60) grade = "C";
  else grade = "D";

  return { ...student, grade }; // create new object
});

console.log("Updated array with grades:", studentsWithGrades);

//3. Average marks
let totalMarks = students.reduce((sum, student) => sum + student.marks, 0);
let averageMarks = totalMarks / students.length;
console.log("Average Marks:", averageMarks);

//4. Student who scored 92
let student92 = students.find(student => student.marks === 92);
console.log("Student who scored 92:", student92);

//5. Index of "Kiran"
let kiranIndex = students.findIndex(student => student.name === "Kiran");
console.log("Index of Kiran:", kiranIndex);