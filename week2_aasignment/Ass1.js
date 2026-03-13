/* 
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

//1. Temperatures above 35
let tempsAbove35 = temperatures.filter((temp) => temp > 35);
console.log("The temperatures above 35 are:", tempsAbove35);

//2. Convert Celsius → Fahrenheit
let tempsInFahrenheit = temperatures.map((temp) => (temp * 1.8) + 32);
console.log("After converting into Fahrenheit:", tempsInFahrenheit);

//3. Average temperature
let totalTemperature = temperatures.reduce((sum, temp) => sum + temp);
let averageTemperature = totalTemperature / temperatures.length;
console.log("The average temperature is:", averageTemperature);

//4. First temperature above 40
let firstAbove40 = temperatures.find((temp) => temp > 40);
console.log("The first temperature above 40 is:", firstAbove40);

//5. Index of temperature 28
let indexOf28 = temperatures.findIndex((temp) => temp === 28);
console.log("The index of temperature 28 is:", indexOf28);