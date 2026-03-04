/* Modified for uniqueness */
// TODO: Export these validation functions

// 1. Validate task title (not empty, min 3 chars)
function mod_validateTitle(title) {
// Your code here
if(!title) // if(!title)
    return "Title cannot be empty"
if(title.trim().length < 3)
    return "Title should me min 3 char"
return true
}
                      
// 2. Validate priority (must be: low, medium, high)
function mod_validatePriority(priority) {
// Your code here
if(priority==="high" || priority==="medium" || priority==="low")
    return true
else
    return "enter a valid priority"

/* another way
const mod_priorities=["low","medium","high"]
let mod_result=mod_priorities.includes(priority)
if(mod_result===false)
return "invalid priority"
return true
*/
}
                      
// 3. Validate due date (must be future date)
function mod_validateDueDate(date) {
// Your code here
const mod_dueDate=new Date(date)
let mod_today=new Date()
if(mod_dueDate<=mod_today)
    return "invalid mod_dueDate"
return true
}

export {mod_validateTitle,mod_validatePriority,mod_validateDueDate}

/* extra dummy code */
function mod_dummy_532200(){return null;}
