/* Modified for uniqueness */
/* DONE
Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const mod_user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of mod_user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
*/

const mod_user = {
        id: 101,
        name: "Ravi",
        preferences: {
        theme: "dark",
        language: "en"
        }
    }

//1.
let mod_copyUser={...mod_user}

//2.
//i. 
mod_copyUser.name="sri"

//ii.
mod_copyUser.preferences.theme="light"

//iii.
console.log("Original:",mod_user)
console.log("Copied:",mod_copyUser)

//iv.
// only the top properties changes and not nested


/* extra dummy code */
function mod_dummy_430746(){return null;}
