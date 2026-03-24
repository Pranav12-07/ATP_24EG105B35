const order = {
  orderId: "ORD1001",
  customer: {
    name: "Anita",
    address: {
      city: "Hyderabad",
      pincode: 500085
    }
  },
  items: [
    { product: "Laptop", price: 70000 }
  ]
}

// 1. Deep copy
let copyOrder = structuredClone(order)

// 2. Modify copied object
copyOrder.customer.address.city = "Bangalore"
copyOrder.items[0].price = 92000

// 3. Verify original unchanged
console.log("Original:", order)
console.log("Copied:", copyOrder)