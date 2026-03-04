/* Modified for uniqueness */
// TODO: Import task functions
// import { ... } from './task.js';
// Test your module system
// 1. Add some tasks
// 2. Display all tasks
// 3. Complete a task
// 4. Display all tasks again

import { addTask,getAllTasks,completeTask } from './task.js'

//add task
addTask("eating","high","2026-02-01")
addTask("dancing","low","2026-04-01")
console.log(getAllTasks())

completeTask(1)
console.log(getAllTasks())
