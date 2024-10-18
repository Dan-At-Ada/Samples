// Advanced Iteration Examples

// 1. For Loop with multiple variables - Population growth simulation
console.log("1. Advanced For Loop - Population growth simulation:");
let population = 1000;
const growthRate = 0.05; // 5% annual growth
const years = 10;
for (let year = 1, totalGrowth = 0; year <= years; year++) {
  const yearlyGrowth = population * growthRate;
  population += yearlyGrowth;
  totalGrowth += yearlyGrowth;
  console.log(`Year ${year}: Population = ${population.toFixed(0)}, Growth = ${yearlyGrowth.toFixed(0)}`);
}
console.log(`Total growth over ${years} years: ${totalGrowth.toFixed(0)}`);

// Question about the current code: Why do we use toFixed(0) when logging the population and growth? What would happen if we removed it?
// Question for improvement: How would you modify this simulation to account for a declining growth rate?

// 2. While Loop with break and continue - Prime number finder
console.log("\n2. Advanced While Loop - Prime number finder:");
const findPrimes = (limit) => {
  const primes = [];
  let num = 2;
  while (primes.length < limit) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break; // Exit the loop early if not prime
      }
    }
    if (isPrime) {
      primes.push(num);
    }
    num++;
  }
  return primes;
};
console.log("First 10 prime numbers:", findPrimes(10));

// Question about the current code: Why do we only check divisibility up to the square root of the number? How does this affect the efficiency of the algorithm?
// Question for improvement: How could you optimize this function to find prime numbers more efficiently?

// 3. Do-While Loop with complex condition - Dice game simulation
console.log("\n3. Advanced Do-While Loop - Dice game simulation:");
let playerScore = 0;
let computerScore = 0;
do {
  const playerRoll = Math.floor(Math.random() * 6) + 1; // Random number between 1-6
  const computerRoll = Math.floor(Math.random() * 6) + 1; // Random number between 1-6
  console.log(`Player rolled: ${playerRoll}, Computer rolled: ${computerRoll}`);
  if (playerRoll > computerRoll) {
    playerScore++;
  } else if (computerRoll > playerRoll) {
    computerScore++;
  }
} while (playerScore < 3 && computerScore < 3);
console.log(`Final score - Player: ${playerScore}, Computer: ${computerScore}`);

// Question about the current code: What happens in the case of a tie (when playerRoll equals computerRoll)? Is this intentional?
// Question for improvement: How would you modify this game to include a "double or nothing" feature?

// 4. For...of Loop with destructuring - Processing CSV data
console.log("\n4. Advanced For...of Loop - Processing CSV data:");
const csvData = [
  "John,Doe,30,New York",
  "Jane,Smith,25,Los Angeles",
  "Bob,Johnson,35,Chicago"
];
for (const row of csvData) {
  const [firstName, lastName, age, city] = row.split(',');
  console.log(`${firstName} ${lastName} is ${age} years old and lives in ${city}.`);
}

// Question about the current code: What would happen if one of the CSV rows had fewer than 4 fields? How would the destructuring behave?
// Question for improvement: How could you modify this loop to handle missing data in some fields?

// 5. For...in Loop with hasOwnProperty check - Config parser
console.log("\n5. Advanced For...in Loop - Config parser:");
const defaultConfig = {
  theme: "light",
  fontSize: 14,
  showNotifications: true
};
const userConfig = {
  theme: "dark",
  fontSize: 16
};
const mergedConfig = { ...defaultConfig };
for (const key in userConfig) {
  if (userConfig.hasOwnProperty(key) && defaultConfig.hasOwnProperty(key)) {
    mergedConfig[key] = userConfig[key];
  }
}
console.log("Merged configuration:", mergedConfig);

// Question about the current code: Why do we use the hasOwnProperty check in this loop? What problem does it solve?
// Question for improvement: How would you extend this to handle nested configuration objects?

// Examples using readline-sync
const readlineSync = require('readline-sync');

console.log("\nExamples using readline-sync:");

// Interactive inventory management system
console.log("\nInteractive inventory management system:");
const inventory = [];
while (true) {
  console.log("\n1. Add item\n2. Remove item\n3. View inventory\n4. Exit");
  const choice = readlineSync.question("Enter your choice: ");
  
  switch (choice) {
    case '1':
      const itemName = readlineSync.question("Enter item name: ");
      const quantity = parseInt(readlineSync.question("Enter quantity: "));
      inventory.push({ name: itemName, quantity });
      break;
    case '2':
      const removeIndex = parseInt(readlineSync.question("Enter index of item to remove: "));
      if (removeIndex >= 0 && removeIndex < inventory.length) {
        inventory.splice(removeIndex, 1);
        console.log("Item removed.");
      } else {
        console.log("Invalid index.");
      }
      break;
    case '3':
      console.log("Current inventory:");
      for (const [index, item] of inventory.entries()) {
        console.log(`${index}: ${item.name} - Quantity: ${item.quantity}`);
      }
      break;
    case '4':
      console.log("Exiting...");
      process.exit(0);
    default:
      console.log("Invalid choice. Please try again.");
  }
}

// Question about the current code: Why do we use a while(true) loop here? What are the advantages and potential risks of this approach?
// Question for improvement: How could you add a feature to update the quantity of existing items?