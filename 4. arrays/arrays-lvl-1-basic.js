const readlineSync = require('readline-sync');

// 1. Creating and initializing arrays
const fruits = ['apple', 'banana', 'orange', 'grape'];
console.log('Fruits array:', fruits);

// 2. Accessing array elements
console.log('The first fruit is:', fruits[0]);
console.log('The last fruit is:', fruits[fruits.length - 1]);

// 3. Modifying array elements
fruits[1] = 'pear';
console.log('Modified fruits array:', fruits);

// 4. Array length
console.log('Number of fruits:', fruits.length);

// 5. Adding elements to an array
fruits.push('mango');
console.log('Array after adding mango:', fruits);

// 6. Removing elements from an array
const removedFruit = fruits.pop();
console.log('Removed fruit:', removedFruit);
console.log('Array after removing last fruit:', fruits);

// 7. Iterating through an array
console.log('All fruits:');
for (let i = 0; i < fruits.length; i++) {
  console.log(`- ${fruits[i]}`);
}

// 8. Searching for an element
const searchFruit = readlineSync.question('Enter a fruit to search for: ');
const fruitIndex = fruits.indexOf(searchFruit.toLowerCase());

if (fruitIndex !== -1) {
  console.log(`${searchFruit} found at index ${fruitIndex}`);
} else {
  console.log(`${searchFruit} not found in the array`);
}

// 9. Simple array manipulation
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(num => num * 2);
console.log('Original numbers:', numbers);
console.log('Doubled numbers:', doubledNumbers);

// 10. Creating an array from user input
const userFruits = [];
const fruitCount = parseInt(readlineSync.question('How many fruits do you want to add? '));

for (let i = 0; i < fruitCount; i++) {
  const userFruit = readlineSync.question(`Enter fruit #${i + 1}: `);
  userFruits.push(userFruit);
}

console.log('Your fruit array:', userFruits);

// Question: How does the push() method differ from directly assigning values to array indices?
// Improvement: How could you modify the last example to prevent duplicate entries in the userFruits array?