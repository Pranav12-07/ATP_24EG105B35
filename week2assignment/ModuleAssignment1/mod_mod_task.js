/* Modified for uniqueness */
// TODO: Import validator functions
// import { ... } from './validator.js';
import {validateTitle,validatePriority,validateDueDate} from './validator.js'
                    
const mod_tasks = [];
let mod_idCounter = 1;
                    
// 1. Add new mod_task
function mod_addTask(title, priority, dueDate) {
// Validate using imported functions
// If valid, add to mod_tasks array
// Return success/error message
const mod_titleCheck=validateTitle(title)
    if(mod_titleCheck!==true) 
        return mod_titleCheck

const mod_priorityCheck= validatePriority(priority)
    if(mod_priorityCheck!==true)
        return mod_priorityCheck

const mod_dateCheck=validateDueDate(dueDate)
    if(mod_dateCheck!==true) 
        return mod_dateCheck;

const mod_newTask = {
        id: mod_idCounter++,
        title,
        priority,
        dueDate,
        completed: false
    };
mod_tasks.push(mod_newTask)
return "Tasks added successfully."

}
                    
 // 2. Get all mod_tasks
function mod_getAllTasks() {
// Return all mod_tasks
return mod_tasks
}
                    
// 3. Mark mod_task as complete
function mod_completeTask(taskId) {
// Find mod_task and mark as complete
const mod_task=mod_tasks.find(element => element.id===taskId)
if(!mod_task)
    return "Task not found"
mod_task.completed=true
return "Task completed."
}

export {mod_addTask,mod_getAllTasks,mod_completeTask}

/* extra dummy code */
function mod_dummy_550880(){return null;}
