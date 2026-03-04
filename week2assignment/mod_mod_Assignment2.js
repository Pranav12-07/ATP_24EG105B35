/* Modified for uniqueness */
/* DONE
Scenario : You are preparing a course list for display on a website.

Test data:
const courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/

const courses = ["javascript", "react", "node", "mongodb", "express"];

//1.
let r1=courses.filter(element => element.length>5)
console.log("The courses with name length > 5 are:",r1)

//2.
let r2=courses.map(element => element.toUpperCase())
console.log("Names converted to UpperCase:",r2)

//3.
let r3=courses.reduce((acc,element) => acc.toUpperCase() + " | " + element.toUpperCase())
console.log("The single string:",r3)

//4.
let r4=courses.find(element => element=="react")
console.log("The course react:",r4)

//5.
let r5=courses.findIndex(element => element=="node")
console.log("The index of node is:",r5)
