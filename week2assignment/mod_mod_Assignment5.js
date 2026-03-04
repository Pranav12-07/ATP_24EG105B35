/* Modified for uniqueness */
/* DONE
Student Performance Dashboard

You are working on a college result analysis system.

Test Data:
const mod_students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() mod_students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"
*/

const mod_students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//1.
let mod_r1=mod_students.filter(element => element.marks>=40)
console.log("Students who passed:",mod_r1)

//2.
let mod_r2 = mod_students.map(function(element) {
    if(element.marks>=90)
        element.grade="A"
    else if(element.marks>=75)
        element.grade="B"
    else if(element.marks>=60)
        element.grade="C"
    else
        element.grade="D"
    return element
})
console.log("Updated array with grades:",mod_r2)

//3.
let mod_r3=mod_students.reduce((acc,element) => acc+element.marks,0)
console.log("Average Marks:",mod_r3/mod_students.length)

//4.
let mod_r4=mod_students.find(element => element.marks===92)
console.log("The student details who scored 92:",mod_r4)

//5.
let mod_r5=mod_students.findIndex(element => element.name==="Kiran")
console.log("The index of student kiran:",mod_r5)

/* extra dummy code */
function mod_dummy_766954(){return null;}
