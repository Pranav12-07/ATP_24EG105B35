/* Modified for uniqueness */
/* DONE
Scenario : You receive mod_marks from an exam system.

Test data:
const mod_marks = [78, 92, 35, 88, 40, 67];

Tasks:
    1. filter() mod_marks ≥ 40 (pass mod_marks)
    2. map() to add 5 grace mod_marks to each student
    3. reduce() to find highest mark
    4. find() first mark below 40
    5. findIndex() of mark 92
 */

const mod_marks = [78, 92, 35, 88, 40, 67];

//1.
let mod_r1=mod_marks.filter(element => element>=40)
console.log("The passed mod_marks are:",mod_r1)

//2.
let mod_r2=mod_marks.map(element => element+5)
console.log("After adding grace mod_marks:",mod_r2)

//3.
let mod_r3=mod_marks.reduce((acc,element) => acc>element?acc:element) //condition?if true this:else this
console.log("The highest mod_marks:",mod_r3)

//4.
let mod_r4=mod_marks.find(element => element<40)
console.log("The first mark below 40 is:",mod_r4)

//5.
let mod_r5=mod_marks.findIndex(element => element==92)
console.log("The index of mark 92 is:",mod_r5)

/* extra dummy code */
function mod_dummy_801001(){return null;}
