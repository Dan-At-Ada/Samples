// Expert Function Examples
const readlineSync = require('readline-sync');

// 1. Currying
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    } else {
      return function(...args2) {
        return curried.apply(this, args.concat(args2));
      }
    }
  };
}

function add(a, b, c) {
  return a + b + c;
}

var curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // Output: 6
console.log(curriedAdd(1, 2)(3)); // Output: 6
console.log(curriedAdd(1, 2, 3)); // Output: 6

// 1b. Currying with readline-sync
const num1 = parseFloat(readlineSync.question("Enter the first number: "));
const num2 = parseFloat(readlineSync.question("Enter the second number: "));
const num3 = parseFloat(readlineSync.question("Enter the third number: "));

console.log("Curried function results:");
console.log(curriedAdd(num1)(num2)(num3));
console.log(curriedAdd(num1, num2)(num3));
console.log(curriedAdd(num1, num2, num3));

// Question about the current code: How does currying enhance the flexibility of function calls?
// Question for improvement: How could you create a generic curry function that works with any number of arguments?

// 2. Memoization
function memoize(fn) {
  var cache = {};
  return function(...args) {
    var key = JSON.stringify(args);
    if (key in cache) {
      console.log("Fetching from cache");
      return cache[key];
    } else {
      console.log("Calculating result");
      var result = fn.apply(this, args);
      cache[key] = result;
      return result;
    }
  }
}

function expensiveOperation(n) {
  console.log("Performing expensive operation");
  return n * 2;
}

var memoizedExpensiveOperation = memoize(expensiveOperation);

console.log(memoizedExpensiveOperation(5)); // Output: Calculating result \n 10
console.log(memoizedExpensiveOperation(5)); // Output: Fetching from cache \n 10

// 2b. Memoization with readline-sync
while (true) {
  const input = readlineSync.question("Enter a number for the memoized function (or 'q' to quit): ");
  if (input.toLowerCase() === 'q') break;
  console.log(memoizedExpensiveOperation(parseFloat(input)));
}

// Question about the current code: How does memoization improve the performance of repeated function calls?
// Question for improvement: How could you modify the memoize function to limit the size of the cache?

// 3. Partial application
function partial(fn, ...args) {
  return function(...moreArgs) {
    return fn.apply(this, args.concat(moreArgs));
  }
}

function divide(a, b) {
  return a / b;
}

var divideBy2 = partial(divide, 2);
console.log(divideBy2(10)); // Output: 0.2

// 3b. Partial application with readline-sync
const divisor = parseFloat(readlineSync.question("Enter a divisor for partial application: "));
const divideByUser = partial(divide, divisor);

const dividend = parseFloat(readlineSync.question("Enter a number to divide: "));
console.log(`${dividend} divided by ${divisor} is: ${divideByUser(dividend)}`);

// Question about the current code: How does partial application differ from currying?
// Question for improvement: How could you implement a right partial application function?

// 4. Function composition with reduce
const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const pipe = (...fns) => x => fns.reduce((y, f) => f(y), x);

const double = x => x * 2;
const square = x => x * x;
const addOne = x => x + 1;

const composedFunc = compose(addOne, square, double);
const pipedFunc = pipe(double, square, addOne);

console.log(composedFunc(3)); // Output: 37
console.log(pipedFunc(3));    // Output: 37

// 4b. Function composition with readline-sync
const userInput = parseFloat(readlineSync.question("Enter a number for composed and piped functions: "));
console.log("Composed function result:", composedFunc(userInput));
console.log("Piped function result:", pipedFunc(userInput));

// Question about the current code: What is the difference between compose and pipe in terms of the order of operations?
// Question for improvement: How could you modify these functions to handle asynchronous operations?

// 5. Lazy evaluation with generators
function* lazyRange(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

const iterator = lazyRange(1, 5);
console.log(iterator.next().value); // Output: 1
console.log(iterator.next().value); // Output: 2

// 5b. Lazy evaluation with readline-sync
const rangeStart = parseInt(readlineSync.question("Enter the start of the range: "));
const rangeEnd = parseInt(readlineSync.question("Enter the end of the range: "));

const userRange = lazyRange(rangeStart, rangeEnd);
let userChoice;
do {
  userChoice = readlineSync.question("Press Enter to get the next value or 'q' to quit: ");
  if (userChoice.toLowerCase() !== 'q') {
    const next = userRange.next();
    if (next.done) {
      console.log("Range is exhausted.");
      break;
    }
    console.log("Next value:", next.value);
  }
} while (userChoice.toLowerCase() !== 'q');

// Question about the current code: How does lazy evaluation with generators differ from eager evaluation?
// Question for improvement: How could you create a lazy map function that works with this generator?