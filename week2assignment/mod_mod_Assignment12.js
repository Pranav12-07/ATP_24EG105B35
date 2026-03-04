/* Modified for uniqueness */
// Create a function that receives any number of args as arguments and return their sum using REST parameter

let findSum=(...numbers) => {
    return numbers.reduce((sum,element) => sum+element)
}

console.log(findSum(10,20,30,40,50))
