const readlineSync = require('readline-sync');

// 1. Array destructuring
const colors = ['red', 'green', 'blue', 'yellow', 'purple'];
const [firstColor, secondColor, ...restColors] = colors;

console.log('First color:', firstColor);
console.log('Second color:', secondColor);
console.log('Rest of the colors:', restColors);

// 2. Spread operator with arrays
const moreFruits = ['kiwi', 'pineapple'];
const combinedFruitsColors = [...colors, ...moreFruits]; // What does the spread operator do in this context? How does it work? What is the syntax used here?
console.log('Combined fruits and colors:', combinedFruitsColors);

// 3. Array methods: map, filter, reduce (with functions)
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map: transforms each element of the array to another array
const squaredNumbers = numbers.map(function(num) {
    return num ** 2;
});
console.log('Squared numbers:', squaredNumbers);
// What does the map function do in this context? How does it work?
// How is it used to transform the original array of numbers into an array of squared numbers?

// filter: creates a new array with elements that pass the test
const oddNumbers = numbers.filter(function(num) {
    return num % 2 !== 0;
});
console.log('Odd numbers:', oddNumbers);

const evenNumbers = numbers.filter(num => num % 2 === 0);
console.log('Even numbers:', evenNumbers);
// What is the difference between these two filter functions?
// Why is the first filter function more verbose than the second one? Does it have any advantages? Do they both work the same way?
// Can you rewrite the first filter function using the arrow function syntax? Could you do the same for the squaredNumbers map function?

// reduce: reduces the array to a single value
const sum = numbers.reduce((acc, num) => acc + num, 0); // What does reduce do in this context? How does it work?
console.log('Sum of all numbers:', sum);


// 4. Sorting arrays
const unsortedNames = ['Charlie', 'Alice', 'David', 'Bob'];
console.log('Unsorted names:', unsortedNames);

// sort: sorts the array in place
unsortedNames.sort();
console.log('Sorted names:', unsortedNames);

const unsortedNumbers = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5];
console.log('Unsorted numbers:', unsortedNumbers);

// sort with compare function for numbers
unsortedNumbers.sort((a, b) => a - b);
console.log('Sorted numbers:', unsortedNumbers);

// 5. Finding elements in an array
const students = [
  { name: 'Alice', grade: 88 },
  { name: 'Bob', grade: 75 },
  { name: 'Charlie', grade: 92 },
  { name: 'David', grade: 85 }
];

// find: returns the first element that satisfies the condition
const highScorer = students.find(student => student.grade > 90);
console.log('Student with grade above 90:', highScorer);

// 6. Array concatenation and slicing
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9];

// concat: merges two or more arrays
const combinedArray = arr1.concat(arr2, arr3);
console.log('Combined array:', combinedArray);

// slice: returns a shallow copy of a portion of an array
const slicedArray = combinedArray.slice(2, 7);
console.log('Sliced array (index 2 to 6):', slicedArray);

// 7. Array.from() and Array.of()
// Array.from: creates a new array from an array-like or iterable object
const arrayFromString = Array.from('Hello');
console.log('Array from string:', arrayFromString);

// Array.of: creates a new array with a variable number of arguments
const arrayOfNumbers = Array.of(1, 2, 3, 4, 5);
console.log('Array of numbers:', arrayOfNumbers);

// 8. Flattening nested arrays
const nestedArray = [1, [2, 3], [4, [5, 6]]];
// flat: creates a new array with all sub-array elements concatenated recursively
const flattenedArray = nestedArray.flat(2);
console.log('Flattened array:', flattenedArray);

// 9. 2D Arrays (without complex matrix operations)
function create2DArray(rows, cols) {
  // Creates a 2D array using Array.from
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}

function print2DArray(arr) {
  arr.forEach(row => console.log(row.join('\t')));
}

// Create a 2D array
const grid = create2DArray(3, 4);
console.log('Empty 2D array:');
print2DArray(grid);

// Fill the 2D array with some values
for (let i = 0; i < grid.length; i++) {
  for (let j = 0; j < grid[i].length; j++) {
    grid[i][j] = i * grid[i].length + j + 1;
  }
}

console.log('Filled 2D array:');
print2DArray(grid);

// Accessing and modifying elements in a 2D array
const rows = parseInt(readlineSync.question('Enter the row index to modify (0-2): '));
const cols = parseInt(readlineSync.question('Enter the column index to modify (0-3): '));
const newValue = parseInt(readlineSync.question('Enter the new value: '));

if (rows >= 0 && rows < grid.length && cols >= 0 && cols < grid[0].length) {
  grid[rows][cols] = newValue;
  console.log('Updated 2D array:');
  print2DArray(grid);
} else {
  console.log('Invalid row or column index.');
}

// 10. String manipulation with arrays
console.log('\nString manipulation with arrays:');

// Split a string into an array
const sentence = "The quick brown fox jumps over the lazy dog";
const words = sentence.split(' ');
console.log('Words in the sentence:', words);

// Join an array into a string
const reversedSentence = words.reverse().join(' ');
console.log('Reversed sentence:', reversedSentence);

// Convert string to array and back
const name = "John Doe";
const nameArray = Array.from(name);
console.log('Name as array:', nameArray);
const nameString = nameArray.join('');
console.log('Array back to string:', nameString);

// Question: How does creating and manipulating 2D arrays differ from 1D arrays?
// Improvement: How could you implement a function to rotate a 2D array by 90 degrees clockwise?