/*Question no 23 : Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.*/

let car: string = 'subaru';
let age: number = 25;
let isRaining: boolean = true;
let fruits: string[] = ['apple', 'banana', 'orange'];
let color: string = 'red';

console.log("Test 1: Is car equal to 'subaru'? I predict True.");
console.log(car === 'subaru');  // True

console.log("Test 2: Is age greater than or equal to 21? I predict True.");
console.log(age >= 21);  // True

console.log("Test 3: Is it raining? I predict True.");
console.log(isRaining);  // True

console.log("Test 4: Is 'banana' in the fruits array? I predict True.");
console.log(fruits.includes('banana'));  // True

console.log("Test 5: Is color not equal to 'blue'? I predict True.");
console.log(color !== 'blue');  // True

console.log("Test 6: Is car not equal to 'honda'? I predict False.");
console.log(car !== 'honda');  // False

console.log("Test 7: Is age less than 18? I predict False.");
console.log(age < 18);  // False

console.log("Test 8: Is it not raining? I predict False.");
console.log(!isRaining);  // False

console.log("Test 9: Is 'grape' in the fruits array? I predict False.");
console.log(fruits.includes('grape'));  // False

console.log("Test 10: Is color equal to 'green'? I predict False.");
console.log(color === 'green');  // False
