/* DONE
Scenario : You receive marks from an exam system.
*/

const marks = [78, 92, 35, 88, 40, 67];


// 1️ filter() marks ≥ 40 (pass marks)
let r1 = marks.filter(element => element >= 40);
console.log("1. The passed marks are:", r1);


// 2️ map() to add 5 grace marks to each student
let r2 = marks.map(element => element + 5);
console.log("2. After adding grace marks:", r2);


// 3️ reduce() to find highest mark
// condition ? if true : else
let r3 = marks.reduce((acc, element) => 
  acc > element ? acc : element
);
console.log("3. The highest mark is:", r3);


// 4️ find() first mark below 40
let r4 = marks.find(element => element < 40);
console.log("4. The first mark below 40 is:", r4);


// 5️ findIndex() of mark 92
let r5 = marks.findIndex(element => element === 92);
console.log("5. The index of mark 92 is:", r5);