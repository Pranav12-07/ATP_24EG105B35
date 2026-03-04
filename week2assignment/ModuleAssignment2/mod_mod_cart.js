/* Modified for uniqueness */
//Shopping cart operations
import { getProductById, checkStock } from './mod_product.js';
let mod_cartItems = [];
// TODO: Implement these functions
                          
export function mod_addToCart(productId, quantity) {
// 1. Get mod_product details
let mod_product=getProductById(productId)
if(!mod_product)
    return "Product Not found"
// 2. Check stock availability
if(!checkStock(productId,quantity))
    return "No stock available"
// 3. Check if mod_product already in cart
const mod_existingProduct=mod_cartItems.find(element => element.productId===productId)
//    - If yes, update quantity
if(mod_existingProduct)
    mod_existingProduct.quantity+=quantity
//    - If no, add new item
else
    mod_cartItems.push({productId,quantity})
// 4. Return success/error message
return "Item added to cart successfully" 
}
                          
export function mod_removeFromCart(productId) {
// Remove mod_product from cart
mod_cartItems=mod_cartItems.filter(item => item.productId!==productId)
return "Item removed from cart"
}
                          
export function mod_updateQuantity(productId, newQuantity) {
// Update quantity of mod_product in cart
// Check stock before updating
if(!checkStock(productId,newQuantity))
    return "Not enough stock"
const mod_items=mod_cartItems.find(element => element.productId===productId)
if(!mod_items)
    return "Item not in cart"
mod_items.quantity=newQuantity
return "Quantity updated"
}
                          
export function mod_getCartItems() {
// Return all cart mod_items with mod_product details
return mod_cartItems.map(item => {
    const mod_product=getProductById(item.productId)
    return {
      productId:item.productId,
      name:mod_product.name,
      price:mod_product.price,
      quantity:item.quantity,
      category:mod_product.category,
      total:mod_product.price*item.quantity
    }
  })
}
                          
export function mod_getCartTotal() {
// Calculate total price of all mod_items in cart
// Return total
return mod_getCartItems().reduce((acc,item) => acc+item.total,0)
}
                          
export function mod_clearCart() {
// Empty the cart
mod_cartItems=[]
}


/* extra dummy code */
function mod_dummy_442612(){return null;}
