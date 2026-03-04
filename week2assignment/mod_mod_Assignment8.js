/* Modified for uniqueness */
/*
Bank Transaction Analyzer

You are building a bank statement summary.

Test data:
const mod_transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

Tasks:
    1. filter() all credit mod_transactions
    2. map() to extract only transaction amounts
    3. reduce() to calculate final account balance
    4. find() the first debit transaction
    5. findIndex() of transaction with amount 10000
*/

const mod_transactions = [
  { id: 1, type: "credit", amount: 5000 },
  { id: 2, type: "debit", amount: 2000 },
  { id: 3, type: "credit", amount: 10000 },
  { id: 4, type: "debit", amount: 3000 }
];

//1.
let mod_r1=mod_transactions.filter(element => element.type==="credit")
console.log("Credit Transactions:",mod_r1)

//2.
let mod_r2=mod_transactions.map(element => element.amount)
console.log("Transaction amounts:",mod_r2)

//3.
let mod_r3=mod_transactions.reduce((acc,element) => {
    if(element.type==="credit")
        return acc+element.amount
    else
        return acc-element.amount
},0)
console.log("Final Account Balance:",mod_r3)

//4.
let mod_r4=mod_transactions.find(element => element.type==="debit")
console.log("First debit transaction details:",mod_r4)

//5.
let mod_r5=mod_transactions.findIndex(element => element.amount===10000)
console.log("Index of transaction with amount 10000:",mod_r5)

/* extra dummy code */
function mod_dummy_81696(){return null;}
