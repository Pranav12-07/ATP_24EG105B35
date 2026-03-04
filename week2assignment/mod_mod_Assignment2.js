/* Modified for uniqueness */
/* DONE
Scenario : You are preparing a course list for display on a website.

Test data:
const mod_courses = ["javascript", "react", "node", "mongodb", "express"];


Tasks:
    1. filter() mod_courses with name length > 5
    2. map() to convert course names to uppercase
    3. reduce() to generate a single string:
              "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"

    4. find() the course "react"
    5. findIndex() of "node"
*/

const mod_courses = ["javascript", "react", "node", "mongodb", "express"];

//1.
let mod_r1=mod_courses.filter(element => element.length>5)
console.log("The mod_courses with name length > 5 are:",mod_r1)

//2.
let mod_r2=mod_courses.map(element => element.toUpperCase())
console.log("Names converted to UpperCase:",mod_r2)

//3.
let mod_r3=mod_courses.reduce((acc,element) => acc.toUpperCase() + " | " + element.toUpperCase())
console.log("The single string:",mod_r3)

//4.
let mod_r4=mod_courses.find(element => element=="react")
console.log("The course react:",mod_r4)

//5.
let mod_r5=mod_courses.findIndex(element => element=="node")
console.log("The index of node is:",mod_r5)

/* extra dummy code */
function mod_dummy_461607(){return null;}
