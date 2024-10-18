const readlineSync = require('readline-sync');

// 1. Nested if...else statements (without function)
const temp = parseFloat(readlineSync.question("Enter the temperature in Celsius: "));

if (temp < 0) {
  if (temp < -20) {
    console.log("Extremely cold");
  } else {
    console.log("Freezing");
  }
} else if (temp >= 0 && temp < 20) {
  if (temp < 10) {
    console.log("Cold");
  } else {
    console.log("Cool");
  }
} else {
  if (temp >= 30) {
    console.log("Hot");
  } else {
    console.log("Warm");
  }
}

// Question: How does nesting if...else statements allow for more complex decision-making?
// Improvement: How could you refactor this to reduce nesting and improve readability?

// 2. Switch statement with fall-through (with function)
function getSeasonMonths() {
  const season = readlineSync.question("Enter a season (spring/summer/fall/winter): ").toLowerCase();
  let months;

  switch (season) {
    case 'winter':
      months = "December, January, February";
      break;
    case 'spring':
      months = "March, April, May";
      break;
    case 'summer':
      months = "June, July, August";
      break;
    case 'fall':
    case 'autumn':
      months = "September, October, November";
      break;
    default:
      months = "Invalid season";
  }

  console.log(`${season.charAt(0).toUpperCase() + season.slice(1)} months: ${months}`);
}

getSeasonMonths();

// Question: How does the fall-through in the 'fall' case work, and when might this be useful?
// Improvement: How could you modify this to handle input in different languages?

// 3. Ternary operator chain (without function)
const weight = parseFloat(readlineSync.question("Enter your weight in kg: "));
const height = parseFloat(readlineSync.question("Enter your height in meters: "));

const bmi = weight / (height * height);
const category = bmi < 18.5 ? "Underweight" :
                 bmi < 25 ? "Normal weight" :
                 bmi < 30 ? "Overweight" : "Obese";

console.log(`Your BMI is ${bmi.toFixed(1)} which is classified as: ${category}`);

// Question: How does this ternary chain compare to an if...else if chain in terms of readability?
// Improvement: How could you add more specific categories (e.g., "Severely underweight" or "Extremely obese")?

// 4. Short-circuit evaluation (with function)
function getUserSettings() {
  const defaultTheme = "light";
  const defaultFontSize = 16;
  
  const userTheme = readlineSync.question("Enter your preferred theme (or press Enter for default): ");
  const userFontSize = readlineSync.question("Enter your preferred font size (or press Enter for default): ");
  
  const theme = userTheme || defaultTheme;
  const fontSize = parseInt(userFontSize) || defaultFontSize;
  
  console.log(`User settings: Theme - ${theme}, Font Size - ${fontSize}px`);
}

getUserSettings();

// Question: How does short-circuit evaluation simplify the code in this function?
// Improvement: How could you validate that the user input for font size is within an acceptable range?

// 5. Combining techniques (without function)
const orderTotal = parseFloat(readlineSync.question("Enter the order total: $"));
const distance = parseInt(readlineSync.question("Enter the shipping distance (km): "));
const isPriority = readlineSync.question("Is this a priority shipment? (yes/no): ").toLowerCase() === 'yes';

let shippingCost;

if (orderTotal >= 100) {
  shippingCost = 0;  // Free shipping for orders $100 or more
} else {
  const baseCost = distance <= 50 ? 5 : distance <= 100 ? 10 : 15;
  const priorityFee = isPriority ? 20 : 0;
  shippingCost = baseCost + priorityFee;
}

console.log(`Shipping cost: $${shippingCost.toFixed(2)}`);
console.log(`Total cost: $${(orderTotal + shippingCost).toFixed(2)}`);

// Question: How do the different selection techniques work together in this example?
// Improvement: How could you add a discount for repeat customers to this calculation?