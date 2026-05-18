/* 
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

//1. Courses with length > 5
let longCourses=courses.filter(course => course.length>5);
console.log("Courses with name length > 5:",longCourses);

//2. Convert to uppercase
let upperCaseCourses=courses.map(course => course.toUpperCase());
console.log("Names converted to uppercase:",upperCaseCourses);

//3. Create single string
let courseString=upperCaseCourses.reduce((acc,course) => acc + " | " + course);
console.log("The single string:", courseString);

//4. Find "react"
let foundReact=courses.find(course => course==="react");
console.log("The course react:",foundReact);

//5. Find index of "node"
let nodeIndex=courses.findIndex(course => course==="node");
console.log("The index of node is:",nodeIndex);