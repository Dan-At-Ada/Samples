const readlineSync = require('readline-sync');

// 1. Simple if statement (without function)
const age = parseInt(readlineSync.question("Enter your age: "));
if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// Question: When might a simple if statement without an else be useful?
// Improvement: How could you modify this to provide more specific feedback for different age ranges?

// 2. if...else statement (without function)
const password = readlineSync.question("Enter the password: ", { hideEchoBack: true });
if (password === "secret123") {
  console.log("Access granted!");
} else {
  console.log("Access denied.");
}

// Question: How does this if...else structure improve user feedback compared to a single if statement?
// Improvement: How could you enhance security by limiting the number of attempts?

// 3. if...else if...else statement (with function)
function gradeScore() {
  const score = parseInt(readlineSync.question("Enter your test score (0-100): "));
  if (score >= 90) {
    console.log("Grade: A");
  } else if (score >= 80) {
    console.log("Grade: B");
  } else if (score >= 70) {
    console.log("Grade: C");
  } else if (score >= 60) {
    console.log("Grade: D");
  } else {
    console.log("Grade: F");
  }
}

gradeScore();

// Question: Why is the order of conditions important in this if...else if chain?
// Improvement: How could you handle invalid inputs (e.g., scores below 0 or above 100)?

// 4. Multiple independent if statements (without function)
const userAge = parseInt(readlineSync.question("Enter your age: "));
const hasLicense = readlineSync.question("Do you have a driver's license? (yes/no): ").toLowerCase() === 'yes';
const hasInsurance = readlineSync.question("Do you have car insurance? (yes/no): ").toLowerCase() === 'yes';

if (userAge < 16) {
  console.log("You're too young to drive.");
}
if (!hasLicense) {
  console.log("You need a driver's license to drive.");
}
if (!hasInsurance) {
  console.log("You need car insurance to drive.");
}
if (userAge >= 16 && hasLicense && hasInsurance) {
  console.log("You're eligible to drive.");
}

// Question: How does using multiple if statements differ from using else if in this scenario?
// Improvement: How could you refactor this to use a single if statement with a compound condition?

// 5. Simple switch statement (with function)
function getDayName() {
  const dayNumber = parseInt(readlineSync.question("Enter a day number (1-7): "));
  let dayName;

  switch (dayNumber) {
    case 1:
      dayName = "Sunday";
      break;
    case 2:
      dayName = "Monday";
      break;
    case 3:
      dayName = "Tuesday";
      break;
    case 4:
      dayName = "Wednesday";
      break;
    case 5:
      dayName = "Thursday";
      break;
    case 6:
      dayName = "Friday";
      break;
    case 7:
      dayName = "Saturday";
      break;
    default:
      dayName = "Invalid day number";
  }

  console.log(`Day ${dayNumber} is ${dayName}.`);
}

getDayName();

// Question: In what situations might a switch statement be preferable to an if...else if chain?
// Improvement: How could you group weekdays and weekend days in this switch statement?