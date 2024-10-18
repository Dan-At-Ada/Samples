const readlineSync = require('readline-sync');

// 1. Creating and initializing a dictionary
const person = {
  name: 'John Doe',
  age: 30,
  city: 'New York'
};

console.log('Person dictionary:', person);

// Question: How would you add a new key-value pair to the person dictionary for their occupation?
// Possible improvement: Implement a function that creates a person dictionary from user input.

// 2. Accessing dictionary values
console.log('Name:', person['name']);  // Using bracket notation
console.log('Age:', person.age);  // Using dot notation

// Question: What's the difference between using bracket notation and dot notation to access dictionary values?
// Possible improvement: Create a function that safely accesses nested dictionary values without causing errors for missing keys.

// 3. Adding new key-value pairs
person['job'] = 'Developer';  // Adding a new key-value pair
person.salary = 75000;  // Adding using dot notation

console.log('Updated person dictionary:', person);

// Question: Can you add a key to a dictionary that contains spaces or special characters? If so, how?
// Possible improvement: Implement a function that adds multiple key-value pairs to a dictionary at once.

// 4. Modifying values
person['age'] = 31;  // Updating an existing value
person.city = 'San Francisco';

console.log('Modified person dictionary:', person);

// Question: What happens if you try to modify a key that doesn't exist in the dictionary?
// Possible improvement: Create a function that updates a value only if the key already exists in the dictionary.

// 5. Deleting key-value pairs
delete person['salary'];  // Removing a key-value pair

console.log('Person dictionary after deletion:', person);

// Question: What does the delete operator return? How can you check if a deletion was successful?
// Possible improvement: Implement a function that safely deletes a key from a dictionary and returns the deleted value.

// 6. Checking if a key exists
console.log('Does person have a job?', 'job' in person);  // Using the 'in' operator
console.log('Does person have a salary?', 'salary' in person);

// Question: Is there a difference between using the 'in' operator and checking if a dictionary value is undefined?
// Possible improvement: Create a function that checks for the existence of multiple keys in a dictionary.

// 7. Iterating through dictionary keys and values
console.log('Person details:');
for (let key in person) {
  console.log(`${key}: ${person[key]}`);  // Accessing values using bracket notation in a loop
}

// Question: How would you iterate through only the values of a dictionary?
// Possible improvement: Implement a function that filters a dictionary based on a condition (e.g., only string values).

// 8. Getting all keys and values
const keys = Object.keys(person);  // Getting all keys as an array
const values = Object.values(person);  // Getting all values as an array

console.log('Keys:', keys);
console.log('Values:', values);

// Question: How would you get an array of key-value pairs from a dictionary?
// Possible improvement: Create a function that sorts a dictionary by its values.

// 9. Nested dictionaries
const company = {
  'name': 'Tech Corp',
  'departments': {
    'engineering': { 'employees': 50, 'manager': 'Alice' },
    'marketing': { 'employees': 30, 'manager': 'Bob' }
  }
};

console.log('Engineering manager:', company['departments']['engineering']['manager']);  // Accessing nested values

// Question: How would you add a new department to the company dictionary?
// Possible improvement: Implement a function that flattens a nested dictionary into a single-level dictionary.

// 10. Dictionary with user input
const userCar = {};
userCar['make'] = readlineSync.question('Enter car make: ');
userCar['model'] = readlineSync.question('Enter car model: ');
userCar['year'] = parseInt(readlineSync.question('Enter car year: '));

console.log('Your car:', userCar);

// Question: How would you validate that the user has entered a valid number for the car year?
// Possible improvement: Create a function that prompts the user for input to create a dictionary with error handling.

// 11. Simple dictionary-based inventory system
const inventory = {};

function addItem(name, quantity) {
  if (name in inventory) {
    inventory[name] += quantity;  // Increase quantity if item exists
  } else {
    inventory[name] = quantity;  // Add new item if it doesn't exist
  }
}

function removeItem(name, quantity) {
  if (name in inventory) {
    inventory[name] -= quantity;
    if (inventory[name] <= 0) {
      delete inventory[name];  // Remove item if quantity becomes zero or negative
    }
  }
}

addItem('apple', 5);
addItem('banana', 3);
addItem('apple', 2);
removeItem('banana', 2);

console.log('Current inventory:', inventory);

// Question: How would you modify the removeItem function to prevent the quantity from becoming negative?
// Possible improvement: Implement a function to update the price of an item in the inventory and calculate the total value.