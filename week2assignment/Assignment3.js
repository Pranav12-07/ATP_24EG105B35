/* DONE
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

//1.
let r1=marks.filter(element => element>=40)
console.log("The passed marks are:",r1)

//2.
let r2=marks.map(element => element+5)
console.log("After adding grace marks:",r2)

//3.
let r3=marks.reduce((acc,element) => acc>element?acc:element) //condition?if true this:else this
console.log("The highest marks:",r3)

//4.
let r4=marks.find(element => element<40)
console.log("The first mark below 40 is:",r4)

//5.
let r5=marks.findIndex(element => element==92)
console.log("The index of mark 92 is:",r5)