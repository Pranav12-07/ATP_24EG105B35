/* DONE
Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------
*/

const order = {
  orderId: "ORD2005",
  customer: {
    name: "Rahul",
    address: {
      city: "Mumbai",
      pincode: 400001
    }
  },
  items: [
    { product: "Smartphone", price: 25000 }
  ]
};

// 1️⃣ Create deep copy
let copyOrder = structuredClone(order);


// 2️⃣ Modify copied object

// i. Change city
copyOrder.customer.address.city = "Chennai";

// ii. Change item price
copyOrder.items[0].price = 30000;


// iii. Log both objects
console.log("Original:", order);
console.log("Copied:", copyOrder);