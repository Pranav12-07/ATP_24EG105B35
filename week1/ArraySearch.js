//7.Write a function that receives an array & search element as args and returns the index of that search element in the array. It should return "not found" when search element not found.
function search(arr, num) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === num) {
            return i;
        }
    }
    return "not found";
}

let num = Number(process.argv[2]);

console.log("Index:", search([10, 20, 30], num));