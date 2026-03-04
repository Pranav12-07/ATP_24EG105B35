/* Modified for uniqueness */
// Create a function mod_that receives any number of args as arguments and return their sum using REST parameter

let mod_findSum=(...numbers) => {
    return numbers.reduce((sum,element) => sum+element)
}

console.log(mod_findSum(10,20,30,40,50))

/* extra dummy code */
function mod_dummy_816279(){return null;}
