/*
Bank Transaction Analyzer
Bank Statement Summary
*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];


// 1️⃣ filter() all credit transactions
let r1 = transactions.filter(txn => txn.type === "credit");
console.log("1. Credit Transactions:", r1);


// 2️⃣ map() to extract only transaction amounts
let r2 = transactions.map(txn => txn.amount);
console.log("2. Transaction amounts:", r2);


// 3️⃣ reduce() to calculate final account balance
let finalBalance = transactions.reduce((balance, txn) => {
  return txn.type === "credit"
    ? balance + txn.amount
    : balance - txn.amount;
}, 0);

console.log("3. Final Account Balance:", finalBalance);


// 4️⃣ find() the first debit transaction
let r4 = transactions.find(txn => txn.type === "debit");
console.log("4. First debit transaction:", r4);


// 5️⃣ findIndex() of transaction with amount 10000
let r5 = transactions.findIndex(txn => txn.amount === 10000);
console.log("5. Index of transaction with amount 10000:", r5);