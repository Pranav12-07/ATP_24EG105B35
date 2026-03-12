/*
Bank Transaction Analyzer
*/

const transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

// 1. Filter credit transactions
let creditTransactions = transactions.filter(txn => txn.type === "credit");
console.log("Credit Transactions:", creditTransactions);

// 2. Extract transaction amounts
let transactionAmounts = transactions.map(txn => txn.amount);
console.log("Transaction amounts:", transactionAmounts);

// 3. Calculate final account balance
let finalBalance = transactions.reduce((balance, txn) => {
  return txn.type === "credit"
    ? balance + txn.amount
    : balance - txn.amount;
}, 0);

console.log("Final Account Balance:", finalBalance);

// 4. First debit transaction
let firstDebit = transactions.find(txn => txn.type === "debit");
console.log("First debit transaction:", firstDebit);

// 5. Index of transaction with amount 10000
let indexOf10000 = transactions.findIndex(txn => txn.amount === 10000);
console.log("Index of transaction with amount 10000:", indexOf10000);