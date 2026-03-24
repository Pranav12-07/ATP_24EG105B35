//6.Write a function that receives an array as arg and return their sum
function arg(arr) {
    let sum = 0;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    return sum;
}

console.log(arg([10, 20, 30, 40]));