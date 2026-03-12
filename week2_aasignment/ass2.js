/* DONE
Scenario : You are preparing a programming language list for display on a website.
*/

const languages = ["python", "java", "typescript", "go", "rust"];

// 1️ filter() languages with name length > 4
let r1 = languages.filter(element => element.length > 4);
console.log("1. Languages with name length > 4:", r1);


// 2️map() to convert language names to uppercase
let r2 = languages.map(element => element.toUpperCase());
console.log("2. Names converted to UpperCase:", r2);

// 3️ reduce() to generate a single string:
let r3 = languages.reduce(
  (acc, element) => acc + " | " + element.toUpperCase(),
  languages[0].toUpperCase()
);
console.log("3. The single string:", r3);

// 4️ find() the language "java"
let r4 = languages.find(element => element === "java");
console.log("4. The language java:", r4);

// 5️ findIndex() of "go"
let r5 = languages.findIndex(element => element === "go");
console.log("5. The index of go is:", r5);