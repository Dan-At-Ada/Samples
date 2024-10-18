const readlineSync = require('readline-sync');

// 1. Creating dictionaries with various data types
const mixedDict = {
  'string': 'Hello',
  'number': 42,
  'boolean': true,
  'array': [1, 2, 3],
  'nestedDict': {'a': 1, 'b': 2}
};

console.log('Mixed dictionary:', mixedDict);

// Question: How would you check the type of a value stored in a dictionary?
// Possible improvement: Implement a function that creates a deep copy of a dictionary with mixed data types.

// 2. Merging dictionaries
const dict1 = {'a': 1, 'b': 2};
const dict2 = {'b': 3, 'c': 4};
const mergedDict = {...dict1, ...dict2};  // Using the spread operator to merge

console.log('Merged dictionary:', mergedDict);

// Question: What happens when there are conflicting keys when merging dictionaries?
// Possible improvement: Create a function that merges multiple dictionaries with a custom conflict resolution strategy.

// 3. Dictionary comprehension (similar to Python)
const numbers = [1, 2, 3, 4, 5];
const squareDict = Object.fromEntries(numbers.map(n => [n, n * n]));  // Creating a dictionary from an array

console.log('Square dictionary:', squareDict);

// Question: How would you create a dictionary comprehension that filters out certain values?
// Possible improvement: Implement a function that creates a dictionary from two arrays (one for keys, one for values).

// 4. Filtering a dictionary
const scores = {'Alice': 95, 'Bob': 75, 'Charlie': 80, 'David': 88};
const highScores = Object.fromEntries(
  Object.entries(scores).filter(([_, score]) => score >= 80)  // Filtering entries based on score
);

console.log('High scores:', highScores);

// Question: How would you filter a dictionary based on its keys instead of its values?
// Possible improvement: Create a function that returns both the filtered dictionary and the removed entries.

// 5. Sorting a dictionary by values
const sortedScores = Object.fromEntries(
  Object.entries(scores).sort((a, b) => b[1] - a[1])  // Sorting entries by score in descending order
);

console.log('Sorted scores:', sortedScores);

// Question: How would you sort a dictionary by keys instead of values?
// Possible improvement: Implement a function that sorts a dictionary by multiple criteria (e.g., first by value, then by key).

// 6. Nested dictionary operations
const nestedDict = {
  'user1': {'name': 'Alice', 'age': 30},
  'user2': {'name': 'Bob', 'age': 25}
};

// Updating a nested value
nestedDict['user1']['age'] = 31;

// Adding a new nested dictionary
nestedDict['user3'] = {'name': 'Charlie', 'age': 35};

console.log('Updated nested dictionary:', nestedDict);

// Question: How would you safely access a deeply nested value without causing an error if a key doesn't exist?
// Possible improvement: Create a function that allows setting or updating deeply nested values using a string path (e.g., "user1.address.city").

// 7. Dictionary-based switch statement
function performOperation(operation, a, b) {
  const operations = {
    'add': (x, y) => x + y,
    'subtract': (x, y) => x - y,
    'multiply': (x, y) => x * y,
    'divide': (x, y) => y !== 0 ? x / y : 'Cannot divide by zero'
  };

  return operation in operations ? operations[operation](a, b) : 'Invalid operation';
}

console.log('5 + 3 =', performOperation('add', 5, 3));
console.log('10 - 4 =', performOperation('subtract', 10, 4));

// Question: How does the performance of this dictionary-based approach compare to a traditional switch statement?
// Possible improvement: Extend the performOperation function to handle more complex operations with variable numbers of arguments.

// 8. Advanced inventory system using dictionaries
class Inventory {
  constructor() {
    this.items = {};
  }

  addItem(name, quantity, price) {
    if (name in this.items) {
      this.items[name]['quantity'] += quantity;
    } else {
      this.items[name] = {'quantity': quantity, 'price': price};
    }
  }

  removeItem(name, quantity) {
    if (name in this.items) {
      if (this.items[name]['quantity'] >= quantity) {
        this.items[name]['quantity'] -= quantity;
        if (this.items[name]['quantity'] === 0) {
          delete this.items[name];
        }
        return true;
      }
    }
    return false;
  }

  getInventoryValue() {
    return Object.values(this.items).reduce((total, item) => total + item['quantity'] * item['price'], 0);
  }

  display() {
    console.log('Current Inventory:');
    for (const [name, item] of Object.entries(this.items)) {
      console.log(`${name}: Quantity: ${item['quantity']}, Price: $${item['price']}, Value: $${item['quantity'] * item['price']}`);
    }
    console.log(`Total Inventory Value: $${this.getInventoryValue()}`);
  }
}

const inventory = new Inventory();

inventory.addItem('apple', 10, 0.5);
inventory.addItem('banana', 5, 0.3);
inventory.addItem('orange', 8, 0.6);

inventory.display();

const itemToRemove = readlineSync.question('Enter an item to remove: ');
const quantityToRemove = parseInt(readlineSync.question('Enter quantity to remove: '));

if (inventory.removeItem(itemToRemove, quantityToRemove)) {
  console.log(`Successfully removed ${quantityToRemove} ${itemToRemove}(s).`);
} else {
  console.log(`Failed to remove ${quantityToRemove} ${itemToRemove}(s). Check if the item exists and if there's enough quantity.`);
}

inventory.display();

// Question: How would you modify the Inventory class to support multiple warehouses?
// Possible improvement: Implement a method to apply a percentage-based discount to all items in the inventory.

// 9. Deep cloning a dictionary
function deepClone(obj) {
  if (obj === null || typeof obj !== 'object') {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepClone);
  }

  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [key, deepClone(value)])
  );
}

const originalDict = {'a': 1, 'b': {'c': 2, 'd': [3, 4]}};
const clonedDict = deepClone(originalDict);
console.log('Original dictionary:', originalDict);
console.log('Cloned dictionary:', clonedDict);

// Question: How would you modify the deepClone function to handle circular references?
// Possible improvement: Create a function that compares two dictionaries and returns the differences between them.