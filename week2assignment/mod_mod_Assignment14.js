/* Modified for uniqueness */
/* DONE
Deep Copy (Isolation & Safety Use Case)
---------------------------------------------------

🧪 Given Data:
                const mod_order = {
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
                };

🎯 Task:
      1. Create a deep copy of mod_order
      2. Modify in copied object:
            i. customer.address.city
            ii. items[0].price
            iii. Verify original object remains unchanged
*/

const mod_order = {
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

//1.
let mod_copyOrder=structuredClone(mod_order)

//2.
//i.
mod_copyOrder.customer.address.city="Banglore"

//ii.
mod_copyOrder.items[0].price=92000

//iii.
console.log("Original:",mod_order)
console.log("Copied:",mod_copyOrder)



/* extra dummy code */
function mod_dummy_267252(){return null;}
