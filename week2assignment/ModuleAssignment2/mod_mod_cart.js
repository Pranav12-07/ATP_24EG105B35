/* Modified for uniqueness */
//Shopping cart operations
import { getProductById, checkStock } from './product.js';
let cartItems = [];
// TODO: Implement these functions
                          
export function addToCart(productId, quantity) {
// 1. Get product details
let product=getProductById(productId)
if(!product)
    return "Product Not found"
// 2. Check stock availability
if(!checkStock(productId,quantity))
    return "No stock available"
// 3. Check if product already in cart
const existingProduct=cartItems.find(element => element.productId===productId)
//    - If yes, update quantity
if(existingProduct)
    existingProduct.quantity+=quantity
//    - If no, add new item
else
    cartItems.push({productId,quantity})
// 4. Return success/error message
return "Item added to cart successfully" 
}
                          
export function removeFromCart(productId) {
// Remove product from cart
cartItems=cartItems.filter(item => item.productId!==productId)
return "Item removed from cart"
}
                          
export function updateQuantity(productId, newQuantity) {
// Update quantity of product in cart
// Check stock before updating
if(!checkStock(productId,newQuantity))
    return "Not enough stock"
const items=cartItems.find(element => element.productId===productId)
if(!items)
    return "Item not in cart"
items.quantity=newQuantity
return "Quantity updated"
}
                          
export function getCartItems() {
// Return all cart items with product details
return cartItems.map(item => {
    const product=getProductById(item.productId)
    return {
      productId:item.productId,
      name:product.name,
      price:product.price,
      quantity:item.quantity,
      category:product.category,
      total:product.price*item.quantity
    }
  })
}
                          
export function getCartTotal() {
// Calculate total price of all items in cart
// Return total
return getCartItems().reduce((acc,item) => acc+item.total,0)
}
                          
export function clearCart() {
// Empty the cart
cartItems=[]
}

