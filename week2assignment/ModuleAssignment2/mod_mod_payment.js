/* Modified for uniqueness */
//Payment processing
import { reduceStock } from './product.js';
import { getCartItems, getCartTotal, clearCart } from './cart.js';
import { applyDiscount } from './mod_discount.js';
                          
// TODO: Implement these functions
                          
export function mod_processPayment(paymentMethod, couponCode = null) {
// 1. Get cart mod_items and total
const mod_items=getCartItems()
const mod_subtotal=getCartTotal()
let mod_finalAmount=mod_subtotal
let mod_discount=0
// 2. Apply mod_discount if coupon provided
if(couponCode){
    const mod_result=applyDiscount(mod_subtotal,couponCode,mod_items)
    mod_discount=mod_result.mod_discount
    mod_finalAmount=mod_result.finalTotal
  }
// 3. Validate payment method (card/upi/cod)
if(!mod_validatePaymentMethod(paymentMethod))
    return {status: "failed",message: "Invalid payment method"}
// 4. Process payment (simulate)

// 5. Reduce stock for all mod_items
mod_items.forEach(item => {
    reduceStock(item.productId,item.quantity)
});
// 6. Clear cart
clearCart()
// 7. Generate order summary
return {
    orderId:mod_generateOrderId(),
    mod_items:mod_items,
    mod_subtotal:mod_subtotal,
    mod_discount:mod_discount,
    total:mod_finalAmount,
    paymentMethod:paymentMethod,
    status:"success",
    message:"Order placed successfully"
}
}
                          
export function mod_validatePaymentMethod(method) {
// Check if method is valid (card/upi/cod)
if(method==="card"||method==="upi"||method==="cod")
    return true
else
    return false
}
                          
function mod_generateOrderId() {
// Generate random order ID
return 'ORD' + Date.now();
}

/* extra dummy code */
function mod_dummy_915982(){return null;}
