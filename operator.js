/**
 * Arithmetic Operators: +, -, *, /, %, ++, --
 * Comparison Operators: ==, ===, !=, !==, >, <, >=, <=
 * Logical Operators: &&, ||, !
 * 
 */

// Arithmetic Operators

let bangla = 85;
let english = 90;
let math = 95;

let totalMarks = bangla + english + math; // addition
console.log("Total Marks: " + totalMarks);


let averageMarks = totalMarks / 3; // division
console.log("Average Marks: " + averageMarks);

let remainder = totalMarks % 3; // modulus
console.log("Remainder: " + remainder);

let incrementedMarks = ++totalMarks; // increment
console.log("Incremented Total Marks: " + incrementedMarks);

let decrementedMarks = --totalMarks; // decrement
console.log("Decremented Total Marks: " + decrementedMarks);    





// comparison Operators

let a = 10;
let b = "10";

console.log(a == b); // true (loose equality)
console.log(a === b); // false (strict equality)
console.log(a != b); // false (loose inequality)
console.log(a !== b); // true (strict inequality)
console.log(a > 5); // true
console.log(a < 20); // true
console.log(a >= 10); // true
console.log(a <= 10); // true  


// logical Operators


let isStudent = true;
let isGraduated = false;

console.log(isStudent && isGraduated); // false (AND)
console.log(isStudent || isGraduated); // true (OR)
console.log(!isStudent); // false (NOT)     



