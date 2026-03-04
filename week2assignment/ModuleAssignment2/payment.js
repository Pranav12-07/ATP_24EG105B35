//Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './discount.js';
                          
// TODO: Implement these functions
                          
export function processPayment(paymentMethod, couponCode = null) {
// 1. Get cart items and total
const items=getCartItems()
const subtotal=getCartTotal()
let finalAmount=subtotal
let discount=0
// 2. Apply discount if coupon provided
if(couponCode){
    const result=applyDiscount(subtotal,couponCode,items)
    discount=result.discount
    finalAmount=result.finalTotal
  }
// 3. Validate payment method (card/upi/cod)
if(!validatePaymentMethod(paymentMethod))
    return {status: "failed",message: "Invalid payment method"}
// 4. Process payment (simulate)

// 5. Reduce stock for all items
items.forEach(item => {
    reduceStock(item.productId,item.quantity)
});
// 6. Clear cart
clearCart()
// 7. Generate order summary
return {
    orderId:generateOrderId(),
    items:items,
    subtotal:subtotal,
    discount:discount,
    total:finalAmount,
    paymentMethod:paymentMethod,
    status:"success",
    message:"Order placed successfully"
}
}
                          
export function validatePaymentMethod(method) {
// Check if method is valid (card/upi/cod)
if(method==="card"||method==="upi"||method==="cod")
    return true
else
    return false
}
                          
function generateOrderId() {
// Generate random order ID
return 'ORD' + Date.now();
}