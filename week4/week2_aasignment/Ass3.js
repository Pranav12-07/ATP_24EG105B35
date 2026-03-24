/* 
Scenario : You receive marks from an exam system.

Test data:
const marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() marks ≥ 40 (pass marks)
    2. map() to add 5 grace marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
*/

const marks = [78, 92, 35, 88, 40, 67];

//1. Students who passed
let passedMarks = marks.filter(mark => mark >= 40);
console.log("The passed marks are:", passedMarks);

//2. Add grace marks
let marksWithGrace = marks.map(mark => mark + 5);
console.log("After adding grace marks:", marksWithGrace);

//3. Highest mark
let highestMark = marks.reduce((max, mark) => max > mark ? max : mark);
console.log("The highest marks:", highestMark);

//4. First failing mark
let firstFailMark = marks.find(mark => mark < 40);
console.log("The first mark below 40 is:", firstFailMark);

//5. Index of mark 92
let indexOf92 = marks.findIndex(mark => mark === 92);
console.log("The index of mark 92 is:", indexOf92);