// Advanced Function Examples
const readlineSync = require('readline-sync');

// 1. Higher-order function with readline-sync outside
function operateOnNumbers(a, b, operation) {
  return operation(a, b);
}

const num1 = parseFloat(readlineSync.question("Enter the first number: "));
const num2 = parseFloat(readlineSync.question("Enter the second number: "));
const operationChoice = readlineSync.question("Enter 'add' or 'multiply': ");

const result = operateOnNumbers(num1, num2, operationChoice === 'add' 
  ? (x, y) => x + y 
  : (x, y) => x * y
);
console.log("Result:", result);

// Question about the current code: How does this approach of passing functions as arguments increase flexibility?
// Question for improvement: How could you extend this to support more complex mathematical operations?

// 2. Closure with readline-sync inside
function createPasswordChecker() {
    const password = "password123"; // Is it safe to store the password in code? How could you improve this?

    return function(attempt) {
        return password === attempt;
    }; // What does this inner function have access to? How does this return value work? What is the type of this return value?
}

const checkPassword = createPasswordChecker();

// Simulate login attempts
for (let i = 0; i < 3; i++) {
    const attempt = readlineSync.question("Enter the password: ", { hideEchoBack: true });
    if (checkPassword(attempt)) {
        console.log("Access granted!");
        break;
    } else {
        console.log("Access denied. Try again.");
    }
}

// Question about the current code: Why is it beneficial to use a closure for password checking in this scenario?
// Question for improvement: How could you enhance this to include a maximum number of attempts before locking out?

// 3. Function with default parameters and rest operator
function logActivity(user, action, ...details) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${user} ${action}: ${details.join(", ")}`);
}

// 3b. Using the function with readline-sync
const username = readlineSync.question("Enter your username: ");
while (true) {
  const action = readlineSync.question("Enter an action (or 'quit' to exit): ");
  if (action.toLowerCase() === 'quit') break; // Why do we use toLowerCase here? What problem does it solve?
  
  const details = [];
  while (true) {
    const detail = readlineSync.question("Enter a detail (or press Enter to finish): ");
    if (detail === "") break;
    details.push(detail);
  }
  
  logActivity(username, action, ...details);
}

// Question about the current code: How does the rest operator enhance the flexibility of the logActivity function?
// Question for improvement: How could you modify this to categorize activities or filter logs based on criteria?

// 4. Recursive function with readline-sync inside
function explainRecursion() {
  console.log("Recursion is a function calling itself until it reaches a base case.");
  const response = readlineSync.question("Do you understand? (yes/no): ");
  
  if (response.toLowerCase() === 'yes') {
    return "Great! You've grasped recursion.";
  } else {
    console.log("Let's try again.");
    return explainRecursion();
  }
}

console.log(explainRecursion());

// Question about the current code: How does this function demonstrate both recursion and user interaction?
// Question for improvement: How could you add a maximum recursion depth to prevent infinite loops?

// 5. Function composition with user input
const double = x => x * 2;
const square = x => x * x;
const addOne = x => x + 1;

function compose(...fns) {
  return function(x) {
    return fns.reduceRight((acc, fn) => fn(acc), x);
  };
}

function getUserOperation() {
  console.log("Available operations: double, square, addOne");
  return readlineSync.question("Enter an operation (or 'done' to finish): ");
}

function createUserComposition() {
  const operations = [];
  while (true) {
    const op = getUserOperation();
    if (op === 'done') break;
    switch (op) {
      case 'double': operations.push(double); break;
      case 'square': operations.push(square); break;
      case 'addOne': operations.push(addOne); break;
      default: console.log("Invalid operation. Try again.");
    }
  }
  return compose(...operations);
}

const userComposition = createUserComposition();
const inputNumber = parseFloat(readlineSync.question("Enter a number to apply your composition: "));
console.log("Result:", userComposition(inputNumber));

// Question about the current code: How does this example combine function composition with user interaction?
// Question for improvement: How could you allow users to define their own custom operations to include in the composition?