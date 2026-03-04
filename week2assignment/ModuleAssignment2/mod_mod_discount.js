/* Modified for uniqueness */
//Coupon and mod_discount logic
// Available mod_coupons
const mod_coupons = {
        'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
        'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
        'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
    };
                          
// TODO: Implement these functions
                          
export function mod_validateCoupon(couponCode, cartTotal, cartItems) {
// 1. Check if mod_coupon exists
const mod_coupon=mod_coupons[couponCode]
if(!mod_coupon)
    return {valid:false,message:"Invalid mod_coupon"}
// 2. Check minimum amount requirement
if(cartTotal<mod_coupon.minAmount)
    return {valid:false,message:"Minimum amount not reached"}
// 3. Check category requirement (if any)
if (mod_coupon.category) {
    let mod_hasCategory=false
    for(let mod_item of cartItems){
      if(mod_item.category===mod_coupon.category){
        mod_hasCategory=true
        break
      }
    }
    if(!mod_hasCategory)
      return {valid:false,message:"Coupon not applicable for cart items"}
  }
  // Return { valid: true/false, message: '...' }
  return {valid:true,message:"Coupon applied successfully"}
}
                          
export function mod_calculateDiscount(couponCode, cartTotal) {
// Calculate mod_discount amount based on mod_coupon type
const mod_coupon=mod_coupons[couponCode]
// Return mod_discount amount
// If mod_coupon type is percentage
if(mod_coupon.type==="percentage")
    return cartTotal*mod_coupon.value/100
// If mod_coupon type is flat
if(mod_coupon.type==="flat")
    return mod_coupon.value
}
                          
export function mod_applyDiscount(cartTotal, couponCode, cartItems) {
// 1.Validate mod_coupon
const mod_validation = mod_validateCoupon(couponCode, cartTotal, cartItems)
// If mod_coupon is not valid
if(!mod_validation.valid) {
    return { 
      originalTotal:cartTotal,
      mod_discount:0,
      finalTotal:cartTotal,
      message:mod_validation.message
    }
  }
// 2. If valid, calculate mod_discount
const mod_discount=mod_calculateDiscount(couponCode,cartTotal)
// 3. Return final amount and mod_discount details
return { 
  originalTotal:cartTotal, 
  mod_discount:mod_discount, 
  finalTotal:cartTotal-mod_discount,
  message:"Discount applied successfully"
}
}

/* extra dummy code */
function mod_dummy_768333(){return null;}
