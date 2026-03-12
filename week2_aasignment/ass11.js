/* DONE
Update User Object
Goal: Learn object cloning & adding new property
*/

let user = {
  name: "Anjali",
  city: "Mumbai"
};

// Create new object and add age
let updatedUser = { ...user, age: 30 };

// Print both objects
console.log(user);         
// { name: "Anjali", city: "Mumbai" }

console.log(updatedUser);  
// { name: "Anjali", city: "Mumbai", age: 30 }