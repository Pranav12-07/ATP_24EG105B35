/* 
You are building a shopping cart summary for an e-commerce website.
*/

const cart = [
  { id: 101, name: "Laptop", price: 60000, quantity: 1, inStock: true },
  { id: 102, name: "Mouse", price: 800, quantity: 2, inStock: true },
  { id: 103, name: "Keyboard", price: 1500, quantity: 1, inStock: false },
  { id: 104, name: "Monitor", price: 12000, quantity: 1, inStock: true }
];

// 1. Get products that are in stock
let inStockProducts = cart.filter(item => item.inStock);
console.log("In stock products:", inStockProducts);

// 2. Create array with { name, totalPrice }
let productTotals = cart.map(item => ({
  name: item.name,
  totalPrice: item.price * item.quantity
}));
console.log("Product totals:", productTotals);

// 3. Calculate grand total
let grandTotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
console.log("Grand total of cart:", grandTotal);

// 4. Find details of "Mouse"
let mouseDetails = cart.find(item => item.name === "Mouse");
console.log("Mouse details:", mouseDetails);

// 5. Find index of "Keyboard"
let keyboardIndex = cart.findIndex(item => item.name === "Keyboard");
console.log("Position of Keyboard:", keyboardIndex);