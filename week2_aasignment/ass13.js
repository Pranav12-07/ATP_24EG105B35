/* DONE
Shallow Copy (Controlled Mutation Use Case)
-------------------------------------------------------
🧪 Given Data:
              const user = {
                id: 101,
                name: "Ravi",
                preferences: {
                  theme: "dark",
                  language: "en"
                }
              };

🎯 Task
    1. Create a shallow copy of user
    2. Change:
          i. name in the copied object
          ii. preferences.theme in the copied object
          iii .Log both original and copied objects
          iv. Observe what changes and what doesn’t
*/

const user = {
        id: 101,
        name: "Ravi",
        preferences: {
        theme: "dark",
        language: "en"
        }
    }

//1.
let copyUser={...user}

//2.
//i. 
copyUser.name="sri"

//ii.
copyUser.preferences.theme="light"

//iii.
console.log("Original:",user)
console.log("Copied:",copyUser)

//iv.
// only the top properties changes and not nested
