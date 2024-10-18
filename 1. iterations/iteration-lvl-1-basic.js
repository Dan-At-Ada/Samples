// Basic Iteration Examples

// 1. For Loop - Array manipulation
console.log("1. Basic For Loop - Array manipulation:");
const fruits = ["apple", "banana", "orange", "grape", "mango"];
for (let i = 0; i < fruits.length; i++) {
  console.log(`Fruit at index ${i}: ${fruits[i]}`);
}

// Question about the current code: What would happen if we changed the condition to `i <= fruits.length`? Why?
// Question for improvement: How would you modify this loop to print only every other fruit?

// 2. While Loop - Number guessing game
console.log("\n2. Basic While Loop - Number guessing game:");
const targetNumber = Math.floor(Math.random() * 10) + 1; // Random number between 1-10
let guess = 0;
let attempts = 0;
while (guess !== targetNumber) {
  guess = Math.floor(Math.random() * 10) + 1; // Simulate a guess
  attempts++;
}
console.log(`The number ${targetNumber} was guessed in ${attempts} attempts.`);

// Question about the current code: Why do we initialize 'guess' to 0 before the while loop? What would happen if we didn't?
// Question for improvement: How could you modify this game to limit the number of attempts to 5?

// 3. Do-While Loop - Input validation simulation
console.log("\n3. Basic Do-While Loop - Input validation simulation:");
let validInput = false;
let input;
do {
  input = Math.floor(Math.random() * 20) - 10; // Random number between -10 and 9
  console.log(`Generated input: ${input}`);
  if (input > 0) {
    validInput = true;
  }
} while (!validInput);
console.log(`Valid positive input received: ${input}`);

// Question about the current code: Why is a do-while loop more suitable here than a regular while loop?
// Question for improvement: How would you change this loop to accept only even positive numbers?

// 4. For...of Loop - String character iteration
console.log("\n4. Basic For...of Loop - String character iteration:");
const message = "Hello, World!";
for (const char of message) {
  console.log(char);
}

// Question about the current code: How would this loop behave differently if we used a for...in loop instead of for...of?
// Question for improvement: How could you modify this loop to count the number of vowels in the string?

// 5. For...in Loop - Object property iteration
console.log("\n5. Basic For...in Loop - Object property iteration:");
const person = {
  name: "John Doe",
  age: 30,
  job: "developer",
  city: "New York"
};
for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}

// Question about the current code: What would happen if we added a method to the person object? Would it be iterated over?
// Question for improvement: How would you modify this loop to only print properties with string values?

// Examples using readline-sync
const readlineSync = require('readline-sync');

console.log("\nExamples using readline-sync:");

// Interactive For Loop
console.log("\nInteractive For Loop - Creating a shopping list:");
const shoppingList = [];
const itemCount = parseInt(readlineSync.question("How many items do you want to add to your shopping list? "));
for (let i = 0; i < itemCount; i++) {
  const item = readlineSync.question(`Enter item ${i + 1}: `);
  shoppingList.push(item);
}
console.log("Your shopping list:", shoppingList);

// Question about the current code: What would happen if the user enters a non-numeric value for itemCount? How could we handle this?
// Question for improvement: How could you add a feature to remove items from the shopping list?

// Interactive While Loop
console.log("\nInteractive While Loop - Temperature converter:");
while (true) {
  const celsius = parseFloat(readlineSync.question("Enter temperature in Celsius (or 'q' to quit): ")); // Is q the only way to quit?
  if (isNaN(celsius)) break; // What is the purpose of this line?
  const fahrenheit = (celsius * 9/5) + 32;
  console.log(`${celsius}°C is equal to ${fahrenheit.toFixed(2)}°F`);
}

// Question about the current code: Why do we use parseFloat() instead of parseInt() for the temperature input?
// Question for improvement: How could you add error handling to ensure valid numeric input?