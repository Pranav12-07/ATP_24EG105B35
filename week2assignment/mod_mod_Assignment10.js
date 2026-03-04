/* Modified for uniqueness */
/* DONE
Copy & Extend an Array
Goal: Learn array copying with spread
You are given:
let mod_fruits = ["apple", "banana"];
                        
 Tasks
 -> Create a new array mod_moreFruits
 -> Copy all mod_fruits from mod_fruits
 -> Add "orange" at the end using spread
 -> Print both arrays
                        
✅ Expected Output
["apple", "banana"]
["apple", "banana", "orange"]
                        
👉 Original array should NOT change.
*/

let mod_fruits = ["apple", "banana"]
let mod_moreFruits=[...mod_fruits,"orange"]
console.log(mod_fruits)
console.log(mod_moreFruits)

/* extra dummy code */
function mod_dummy_681552(){return null;}
