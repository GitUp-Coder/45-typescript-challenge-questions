/*Question no 24 : More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
• Tests for equality and inequality with strings

• Tests using the lower case function

• Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

• Tests using "and" and "or" operators

• Test whether an item is in a array

• Test whether an item is not in a array*/


// Tests for equality and inequality with strings
console.log("Test 11: Is 'apple' equal to 'orange'? I predict False.");
console.log('"apple === orange"');  // False

console.log("Test 12: Is 'cat' not equal to 'dog'? I predict True.");
console.log('"cat" !== "dog"');  // True

// Tests using the lower case function
console.log("Test 13: Is 'HELLO' in lowercase equal to 'hello'? I predict True.");
console.log('HELLO'.toLowerCase() === 'hello');  // True

console.log("Test 14: Is 'WORLD' in lowercase not equal to 'world'? I predict False.");
console.log('WORLD'.toLowerCase() !== 'world');  // False

// Numerical tests
let number1: number = 15;
let number2: number = 20;

console.log("Test 15: Is 15 equal to 20? I predict False.");
console.log(number1 === number2);  // False

console.log("Test 16: Is 15 less than 20? I predict True.");
console.log(number1 < number2);  // True

console.log("Test 17: Is 15 greater than or equal to 20? I predict False.");
console.log(number1 >= number2);  // False

// Tests using "and" and "or" operators
let sunny: boolean = true;
let warm: boolean = false;

console.log("Test 18: Is it sunny and warm? I predict False.");
console.log(sunny && warm);  // False

console.log("Test 19: Is it sunny or warm? I predict True.");
console.log(sunny || warm);  // True

// Test whether an item is in an array
let fruitsArray: string[] = ['apple', 'banana', 'orange'];

console.log("Test 20: Is 'banana' in the fruits array? I predict True.");
console.log(fruitsArray.includes('banana'));  // True

// Test whether an item is not in an array
console.log("Test 21: Is 'grape' not in the fruits array? I predict True.");
console.log(!fruitsArray.includes('grape'));  // True
