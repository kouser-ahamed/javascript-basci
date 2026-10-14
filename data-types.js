/*
2 types of data types in JavaScript:
1. Primitive data types: These are the most basic data types in JavaScript. They include:
   - Number: Represents numeric values (e.g., 42, 3.14).
   - String: Represents sequences of characters (e.g., "Hello, World!").
   - Boolean: Represents true or false values.
   - Undefined: Represents a variable that has been declared but not assigned a value.
   - Null: Represents the intentional absence of any object value.
   - Symbol: Represents a unique and immutable value, often used as object property keys.
   - BigInt: Represents integers with arbitrary precision.

2. Non-primitive (Reference) data types: These are more complex data types that can hold multiple values and are mutable. They include:
   - Object: A collection of key-value pairs (e.g., { name: "Alice", age: 30 }).
   - Array: An ordered list of values (e.g., [1, 2, 3, 4, 5]).
   - Function: A block of code that can be executed when called (e.g., function greet() { console.log("Hello!"); }).
   - Date: Represents dates and times (e.g., new Date()).
   - RegExp: Represents regular expressions for pattern matching (e.g., /ab+c/).    jjj
*/


// primitives data types


// string

let birthPlace = "Ishwardi";
console.log(birthPlace);
console.log(typeof birthPlace);

// number 

let age = 25;
let height = 5.9; // floating-point number
console.log(age);
console.log(typeof age);
console.log(height);
console.log(typeof height);

// boolean

let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);


// undefined

let myVariable;
console.log(myVariable); // Output: undefined
console.log(typeof myVariable); // Output: undefined


// null

let myNullVariable = null;
console.log(myNullVariable); // Output: null
console.log(typeof myNullVariable); // Output: object (this is a known quirk in JavaScript)