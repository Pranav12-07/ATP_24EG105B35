/* Modified for uniqueness */
/* DONE
Update User Object
                        
Goal: Learn object cloning & adding new property
                        
You are given:
   let mod_user = {
            name: "Ravi",
            city: "Hyderabad"
        };
                        
Tasks
-> Create a new object mod_updatedUser
-> Copy all properties from mod_user
-> Add a new property age: 25
-> Print both objects
                        
✅ Expected Output
{ name: "Ravi", city: "Hyderabad" }
{ name: "Ravi", city: "Hyderabad", age: 25 }
                        
👉 Original object should remain unchanged.
*/

let mod_user = {
            name: "Ravi",
            city: "Hyderabad"
        }
let mod_updatedUser={...mod_user,age:25}
console.log(mod_user)
console.log(mod_updatedUser)

/* extra dummy code */
function mod_dummy_301157(){return null;}
