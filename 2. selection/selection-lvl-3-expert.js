const readlineSync = require('readline-sync');

// 1. Object literal as a switch alternative (without function)
const day = parseInt(readlineSync.question("Enter your birth day (1-31): "));
const month = parseInt(readlineSync.question("Enter your birth month (1-12): "));

const zodiacSigns = {
  'aries': (month === 3 && day >= 21) || (month === 4 && day <= 19),
  'taurus': (month === 4 && day >= 20) || (month === 5 && day <= 20),
  'gemini': (month === 5 && day >= 21) || (month === 6 && day <= 20),
  'cancer': (month === 6 && day >= 21) || (month === 7 && day <= 22),
  'leo': (month === 7 && day >= 23) || (month === 8 && day <= 22),
  'virgo': (month === 8 && day >= 23) || (month === 9 && day <= 22),
  'libra': (month === 9 && day >= 23) || (month === 10 && day <= 22),
  'scorpio': (month === 10 && day >= 23) || (month === 11 && day <= 21),
  'sagittarius': (month === 11 && day >= 22) || (month === 12 && day <= 21),
  'capricorn': (month === 12 && day >= 22) || (month === 1 && day <= 19),
  'aquarius': (month === 1 && day >= 20) || (month === 2 && day <= 18),
  'pisces': (month === 2 && day >= 19) || (month === 3 && day <= 20)
};

const sign = Object.keys(zodiacSigns).find(sign => zodiacSigns[sign]) || "Invalid date";
console.log(`Your zodiac sign is: ${sign.charAt(0).toUpperCase() + sign.slice(1)}`);

// Question: How does this object-based approach compare to a large if...else if chain or switch statement?
// Improvement: How could you optimize this further, perhaps by organizing the data differently?

// 2. Function object for dynamic dispatch (with function)
function createCalculator() {
  const operations = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    multiply: (a, b) => a * b,
    divide: (a, b) => b !== 0 ? a / b : "Error: Division by zero"
  };

  return function(operation, a, b) {
    if (operation in operations) {
      return operations[operation](a, b);
    }
    return "Invalid operation";
  };
}

const calculate = createCalculator();

const a = parseFloat(readlineSync.question("Enter the first number: "));
const b = parseFloat(readlineSync.question("Enter the second number: "));
const operation = readlineSync.question("Enter the operation (add/subtract/multiply/divide): ");

console.log(`Result: ${calculate(operation, a, b)}`);

// Question: How does this approach allow for easy extension of the calculator's functionality?
// Improvement: How could you add error handling for invalid number inputs?

// 3. Combining short-circuit evaluation and ternary operators (without function)
const username = readlineSync.question("Enter a username (3-15 characters): ");
const email = readlineSync.question("Enter an email address: ");
const userAge = readlineSync.question("Enter your age: ");

const isValidUsername = username.length >= 3 && username.length <= 15;
const isValidEmail = email.includes('@') && email.includes('.');
const isValidAge = !isNaN(userAge) && userAge >= 18 && userAge <= 120;

const errors = [];
!isValidUsername && errors.push("Invalid username");
!isValidEmail && errors.push("Invalid email");
!isValidAge && errors.push("Invalid age");

console.log(errors.length === 0
  ? "All inputs are valid!"
  : `Validation failed. Errors: ${errors.join(", ")}`);

// Question: How do short-circuit evaluation and ternary operators make this validation more concise?
// Improvement: How could you add more specific validation rules, such as checking for special characters in the username?

// 4. State machine using an object literal (with function)
function createTrafficLight() {
  const states = {
    green: { next: 'yellow', duration: 30000 },
    yellow: { next: 'red', duration: 5000 },
    red: { next: 'green', duration: 20000 }
  };

  let currentState = 'green';
  let timer = null;

  function changeState() {
    currentState = states[currentState].next;
    console.log(`Traffic light changed to ${currentState}`);
    scheduleNextChange();
  }

  function scheduleNextChange() {
    clearTimeout(timer);
    timer = setTimeout(changeState, states[currentState].duration);
  }

  return {
    start: scheduleNextChange,
    stop: () => clearTimeout(timer),
    currentState: () => currentState
  };
}

const trafficLight = createTrafficLight();
trafficLight.start();

console.log("Traffic light simulation started. Press Ctrl+C to exit.");

// This simulation will run until the program is terminated
// In a real application, you might use a different mechanism to control the duration

// Question: How does this state machine approach simplify the management of the traffic light's states?
// Improvement: How could you modify this to handle pedestrian crossing signals?

// 5. Advanced error handling with custom error types (without function)
class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}

const password = readlineSync.question("Enter a new password: ", { hideEchoBack: true });

try {
  if (password.length < 8) {
    throw new ValidationError("Password must be at least 8 characters long");
  }
  if (!/[A-Z]/.test(password)) {
    throw new ValidationError("Password must contain at least one uppercase letter");
  }
  if (!/[a-z]/.test(password)) {
    throw new ValidationError("Password must contain at least one lowercase letter");
  }
  if (!/[0-9]/.test(password)) {
    throw new ValidationError("Password must contain at least one number");
  }
  console.log("Password is valid and has been set successfully.");
} catch (error) {
  if (error instanceof ValidationError) {
    console.log("Password validation failed:", error.message);
  } else {
    console.log("An unexpected error occurred:", error.message);
  }
}

// Question: How does using a custom error type improve error handling in this password validation scenario?
// Improvement: How could you extend this to  include password strength ratings?