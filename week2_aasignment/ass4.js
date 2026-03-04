/* DONE
You are building a shopping cart summary for an e-commerce website.

Test Data : 
const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

Tasks:
    1. Use filter() to get only inStock products
    2. Use map() to create a new array with:  { name, totalPrice }
    3. Use reduce() to calculate grand total cart value
    4. Use find() to get details of "Mouse"
    5. Use findIndex() to find the position of "Keyboard"
*/

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

//1.
let r1=cart.filter(element => element.inStock==true)
console.log("In stock products:",r1)

//2.
let r2=cart.map(element => ({
    name: element.name,
    totalPrice: element.price * element.quantity
}))

console.log(r2)

//3.
let r3=cart.reduce((acc,element) => acc+element.price*element.quantity,0)
console.log("The grand total of cart is:",r3)

//4.
let r4=cart.find((element) => element.name=="Mouse")
console.log("The details of mouse are:",r4)

//5.
let r5=cart.findIndex((element) => element.name=="Keyboard")
console.log("The position of Keyboard is:",r5)