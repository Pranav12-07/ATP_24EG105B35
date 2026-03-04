/* Modified for uniqueness */
/* DONE
You are building a shopping mod_cart summary for an e-commerce website.

Test Data : 
const mod_cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total mod_cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
*/

const mod_cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//1.
let mod_r1=mod_cart.filter(element => element.inStock==true)
console.log("In stock products:",mod_r1)

//2.
let mod_r2=mod_cart.map(element => ({
    name: element.name,
    totalPrice: element.price * element.quantity
}))

console.log(mod_r2)

//3.
let mod_r3=mod_cart.reduce((acc,element) => acc+element.price*element.quantity,0)
console.log("The grand total of mod_cart is:",mod_r3)

//4.
let mod_r4=mod_cart.find((element) => element.name=="Mouse")
console.log("The details of mouse are:",mod_r4)

//5.
let mod_r5=mod_cart.findIndex((element) => element.name=="Keyboard")
console.log("The position of Keyboard is:",mod_r5)

/* extra dummy code */
function mod_dummy_213221(){return null;}
