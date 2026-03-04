/* Modified for uniqueness */
// TODO: Import validator functions
// import { ... } from './validator.js';
import {validateTitle,validatePriority,validateDueDate} from './validator.js'
                    
const tasks = [];
let idCounter = 1;
                    
// 1. Add new task
function addTask(title, priority, dueDate) {
// Validate using imported functions
// If valid, add to tasks array
// Return success/error message
const titleCheck=validateTitle(title)
    if(titleCheck!==true) 
        return titleCheck

const priorityCheck= validatePriority(priority)
    if(priorityCheck!==true)
        return priorityCheck

const dateCheck=validateDueDate(dueDate)
    if(dateCheck!==true) 
        return dateCheck;

const newTask = {
        id: idCounter++,
        title,
        priority,
        dueDate,
        completed: false
    };
tasks.push(newTask)
return "Tasks added successfully."

}
                    
 // 2. Get all tasks
function getAllTasks() {
// Return all tasks
return tasks
}
                    
// 3. Mark task as complete
function completeTask(taskId) {
// Find task and mark as complete
const task=tasks.find(element => element.id===taskId)
if(!task)
    return "Task not found"
task.completed=true
return "Task completed."
}

export {addTask,getAllTasks,completeTask}
