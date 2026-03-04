/* Modified for uniqueness */
/* DONE
Scenario : You are analyzing daily mod_temperatures recorded by a weather app.

Test data:
const mod_temperatures = [32, 35, 28, 40, 38, 30, 42];

Tasks:
    1. filter() mod_temperatures above 35
    2. map() to convert all mod_temperatures from Celsius → Fahrenheit
    3. reduce() to calculate average temperature
    4. find() first temperature above 40
    5. findIndex() of temperature 28
*/

const mod_temperatures = [32, 35, 28, 40, 38, 30, 42];

//1.
let mod_r1=mod_temperatures.filter((element) => element>35)
console.log("The mod_temperatures abobe 35 is: ",mod_r1)

//2.
let mod_r2=mod_temperatures.map((element) => (element*1.8)+32)
console.log("After converting into fahrenheit:",mod_r2)

//3.
let mod_r3=mod_temperatures.reduce((acc,element) => acc+element)
console.log("The average temperature is:",mod_r3/mod_temperatures.length)

//4.
let mod_r4=mod_temperatures.find((element) => element>40)
console.log("The first temperature above 40 is:",mod_r4)

//5.
let mod_r5=mod_temperatures.findIndex((element) => element==28)
console.log("The index of temperature 28 is:",mod_r5)


/* extra dummy code */
function mod_dummy_333992(){return null;}
