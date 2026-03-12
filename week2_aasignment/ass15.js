/* DONE
Online Payment Processing Simulator
------------------------------------
When a user makes a payment:
- Immediately show: "Payment initiated"
- After 3 seconds → show: "Processing transaction..."
- After 6 seconds → show: "Payment Successful"
*/

// Immediate message
console.log("Payment initiated");

// After 3 seconds
setTimeout(() => {
  console.log("Processing transaction...");
}, 3000);

// After 6 seconds
setTimeout(() => {
  console.log("Payment Successful");
}, 6000);