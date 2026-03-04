/* DONE
Scenario : You are analyzing daily temperatures recorded by a weather app.

Test data:
const temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() temperatures above 35
    2. map() to convert all temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/

const temperatures = [32, 35, 28, 40, 38, 30, 42];

//1.
let r1=temperatures.filter((element) => element>35)
console.log("The temperatures abobe 35 is: ",r1)

//2.
let r2=temperatures.map((element) => (element*1.8)+32)
console.log("After converting into fahrenheit:",r2)

//3.
let r3=temperatures.reduce((acc,element) => acc+element)
console.log("The average temperature is:",r3/temperatures.length)

//4.
let r4=temperatures.find((element) => element>40)
console.log("The first temperature above 40 is:",r4)

//5.
let r5=temperatures.findIndex((element) => element==28)
console.log("The index of temperature 28 is:",r5)
