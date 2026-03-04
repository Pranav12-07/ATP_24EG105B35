// TODO: Export these validation functions

// 1. Validate task title (not empty, min 3 chars)
function validateTitle(title) {
// Your code here
if(!title) // if(!title)
    return "Title cannot be empty"
if(title.trim().length < 3)
    return "Title should me min 3 char"
return true
}
                      
// 2. Validate priority (must be: low, medium, high)
function validatePriority(priority) {
// Your code here
if(priority==="high" || priority==="medium" || priority==="low")
    return true
else
    return "enter a valid priority"

/* another way
const priorities=["low","medium","high"]
let result=priorities.includes(priority)
if(result===false)
return "invalid priority"
return true
*/
}
                      
// 3. Validate due date (must be future date)
function validateDueDate(date) {
// Your code here
const dueDate=new Date(date)
let today=new Date()
if(dueDate<=today)
    return "invalid dueDate"
return true
}

export {validateTitle,validatePriority,validateDueDate}