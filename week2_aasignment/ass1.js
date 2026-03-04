/* DONE
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [26, 29, 33, 37, 41, 30, 44];

Tasks:
    1. filter() temperatures above 36
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 42
    5. findIndex() of temperature 30
*/

const temperatures = [34, 36, 30, 41, 39, 33, 45];

//1.filter() temperatures above 36
let r1 = temperatures.filter((element) => element > 36)
console.log("The temperatures above 36 is: ", r1)

//2.map() to convert all temperatures from Celsius → Fahrenheit
let r2 = temperatures.map((element) => (element * 1.8) + 32)
console.log("After converting into fahrenheit:", r2)

//3. reduce() to calculate average temperature
let r3 = temperatures.reduce((acc, element) => acc + element)
console.log("The average temperature is:", r3 / temperatures.length)

//4.find() first temperature above 42
let r4 = temperatures.find((element) => element > 42)
console.log("The first temperature above 42 is:", r4)

//5.findIndex() of temperature 30
let r5 = temperatures.findIndex((element) => element == 30)
console.log("The index of temperature 30 is:", r5)