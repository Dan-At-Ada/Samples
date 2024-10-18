// Arrow Functions in JavaScript

/*
Arrow functions, introduced in ES6, provide a concise syntax for writing function expressions. 
They offer a shorter way to write functions.

Key features of arrow functions:
1. Shorter syntax compared to traditional function expressions at the cost of some flexibility
2. Implicit return for single-expression functions

Syntax breakdown:

1. Basic syntax:
   (parameters) => { statements }

2. Single parameter (parentheses optional):
   parameter => { statements }

3. No parameters:
   () => { statements }

4. Single expression (implicit return):
   (parameters) => expression

5. Returning an object literal:
   (parameters) => ({ key: value })

Examples of these syntax variations are demonstrated below.
*/

// 1. Basic syntax
const greet = (name) => {
  return `Hello, ${name}!`;
};

console.log(greet('Alice'));

// Shorthand for single expression
const square = x => x * x;

console.log(square(5));

// Question: When would you choose to use the shorthand syntax over the block syntax?
// Possible improvement: Create a higher-order function that takes an arrow function as an argument.

// 2. Arrow functions with no parameters
const sayHello = () => {
  console.log('Hello, world!');
};

sayHello();

// 3. Implicit return
const isEven = num => num % 2 === 0;

console.log(isEven(4));
console.log(isEven(7));

// Question: How does implicit return affect readability in more complex functions?
// Possible improvement: Write a function that uses implicit return to filter an array.

// 4. Arrow functions and 'this'
const counter = {
  count: 0,
  increment: function() {
    setInterval(() => {
      this.count++;
      console.log(this.count);
    }, 1000);
  }
};

// counter.increment();  // Uncomment to run

// Question: How does 'this' behave differently in arrow functions compared to regular functions?
// Possible improvement: Implement a debounce function using arrow functions.

// 5. Arrow functions in array methods
const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log('Doubled:', doubled);

const sum = numbers.reduce((acc, num) => acc + num, 0);
console.log('Sum:', sum);

// Question: How do arrow functions simplify the use of array methods?
// Possible improvement: Implement a custom array method that uses an arrow function as a callback.

// 6. Returning object literals
const createPerson = (name, age) => ({ name, age });

console.log(createPerson('Bob', 30));

// Question: Why do we need parentheses when returning an object literal?
// Possible improvement: Create a factory function using arrow syntax that generates more complex objects.

// 7. Arrow functions in promise chains
const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Data fetched'), 1000);
  });
};

fetchData()
  .then(data => data.toUpperCase())
  .then(uppercased => console.log(uppercased))
  .catch(error => console.error(error));

// Question: How do arrow functions improve the readability of promise chains?
// Possible improvement: Implement a series of transformations using arrow functions and promises.

// 8. Immediately Invoked Function Expressions (IIFE) with arrow functions
const result = ((x, y) => {
  const sum = x + y;
  return sum * sum;
})(3, 4);

console.log('IIFE result:', result);

// Question: How does this IIFE syntax differ from traditional function IIFE syntax?
// Possible improvement: Create a module pattern using an arrow function IIFE.

// 9. Arrow functions and default parameters
const greetWithDefault = (name = 'Guest') => `Welcome, ${name}!`;

console.log(greetWithDefault());
console.log(greetWithDefault('Charlie'));

// Question: How do default parameters work with the shorthand arrow function syntax?
// Possible improvement: Create a function with multiple default parameters and destructuring.

// 10. Arrow functions and rest parameters
const sum2 = (...numbers) => numbers.reduce((acc, num) => acc + num, 0);

console.log(sum2(1, 2, 3, 4, 5));

// Question: How do rest parameters enhance the flexibility of arrow functions?
// Possible improvement: Implement a function that uses both rest parameters and default parameters.

// 11. Currying with arrow functions
const multiply = x => y => x * y;

const double = multiply(2);
console.log(double(5));

const triple = multiply(3);
console.log(triple(5));

// Question: How does currying with arrow functions differ from traditional function currying?
// Possible improvement: Implement a more complex curried function using arrow syntax.

// 12. Arrow functions in method properties (ES2015+)
const mathOperations = {
  numbers: [1, 2, 3, 4, 5],
  sum: function() {
    return this.numbers.reduce((acc, num) => acc + num, 0);
  },
  average: function() {
    return this.sum() / this.numbers.length;
  }
};

console.log('Sum:', mathOperations.sum());
console.log('Average:', mathOperations.average());

// Question: Why can't we use arrow functions for the 'sum' and 'average' methods in this object?
// Possible improvement: Refactor this object to use a class with arrow functions where appropriate.