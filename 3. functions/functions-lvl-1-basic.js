// Basic Function Examples
const readlineSync = require('readline-sync');

// 1. Simple function declaration (non-readline)
function greet(name) {
  return "Hello, " + name + "!";
}

console.log(greet("Alice")); // Output: Hello, Alice!

// 1b. Simple function with readline-sync inside the function
function greetUser() {
  const name = readlineSync.question("Enter your name: ");
  return "Hello, " + name + "!";
}

console.log(greetUser());

// Question about the current code: In what situations might it be preferable to have readline-sync inside the function, as in greetUser()?
// Question for improvement: How could you modify greetUser to allow for different types of greetings?

// 2. Function with multiple parameters (non-readline)
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // Output: 8

// 2b. Function with multiple parameters using readline-sync outside the function
const num1 = parseFloat(readlineSync.question("Enter the first number: "));
const num2 = parseFloat(readlineSync.question("Enter the second number: "));
console.log("The sum is: " + add(num1, num2));

// Question about the current code: What are the advantages of keeping the add function separate from the input gathering?
// Question for improvement: How could you create a more versatile math function that allows the user to choose the operation?

// 3. Function with conditional logic and readline-sync inside
function guessNumber() {
  const secretNumber = Math.floor(Math.random() * 10) + 1;
  let attempts = 0;
  
  while (true) {
    attempts++;
    const guess = parseInt(readlineSync.question("Guess a number between 1 and 10: "));
    
    if (guess === secretNumber) {
      return `Congratulations! You guessed the number in ${attempts} attempts.`;
    } else if (guess < secretNumber) {
      console.log("Too low. Try again.");
    } else {
      console.log("Too high. Try again.");
    }
  }
}

console.log(guessNumber());

// Question about the current code: Why might it be beneficial to have the readline-sync inside this function?
// Question for improvement: How could you modify this function to allow for a customizable range of numbers?

// 4. Function that uses another function with readline-sync outside
function calculateArea(radius) {
  return Math.PI * radius * radius;
}

function calculateCircumference(radius) {
  return 2 * Math.PI * radius;
}

function describeCircle(radius) {
  const area = calculateArea(radius);
  const circumference = calculateCircumference(radius);
  return `A circle with radius ${radius} has an area of ${area.toFixed(2)} and a circumference of ${circumference.toFixed(2)}.`;
}

const circleRadius = parseFloat(readlineSync.question("Enter the radius of the circle: "));
console.log(describeCircle(circleRadius));

// Question about the current code: How does separating the input gathering from the calculation functions improve code organization?
// Question for improvement: How could you modify these functions to handle different units of measurement?

// 5. Function with default parameters and readline-sync inside
function createShoppingList(maxItems = 5) {
  const shoppingList = [];
  
  console.log(`You can add up to ${maxItems} items to your shopping list.`);
  
  while (shoppingList.length < maxItems) {
    const item = readlineSync.question(`Enter item ${shoppingList.length + 1} (or press Enter to finish): `);
    if (item === "") break;
    shoppingList.push(item);
  }
  
  return `Your shopping list: ${shoppingList.join(", ")}`;
}

console.log(createShoppingList());

// Question about the current code: How does including readline-sync inside this function affect its reusability?
// Question for improvement: How could you modify this function to allow for removing or editing items in the list?