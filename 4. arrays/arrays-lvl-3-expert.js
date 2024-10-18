const readlineSync = require('readline-sync');

// 1. Implementing an efficient array rotation
function rotateArray(arr, k) {
  k = k % arr.length; // Normalize k to be within array length
  reverse(arr, 0, arr.length - 1);
  reverse(arr, 0, k - 1);
  reverse(arr, k, arr.length - 1);
  return arr;
}

function reverse(arr, start, end) {
  while (start < end) {
    // Swap elements using destructuring assignment
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
}

let arr = [1, 2, 3, 4, 5];
const k = parseInt(readlineSync.question('Enter the number of positions to rotate the array: '));
console.log('Array after rotation:', rotateArray(arr, k));

// 2. Implementing Kadane's algorithm for maximum subarray sum
function maxSubarraySum(arr) {
  let maxSoFar = arr[0];
  let maxEndingHere = arr[0];

  for (let i = 1; i < arr.length; i++) {
    // The maximum sum at the current position is either the current element
    // or the sum of the current element and the maximum sum ending at the previous position
    maxEndingHere = Math.max(arr[i], maxEndingHere + arr[i]);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }

  return maxSoFar;
}

const numbers = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log('Maximum subarray sum:', maxSubarraySum(numbers));

// 3. Implementing Fisher-Yates shuffle algorithm
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    // Generate a random index from 0 to i
    const j = Math.floor(Math.random() * (i + 1));
    // Swap elements at i and j
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const originalArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log('Original array:', originalArray);
console.log('Shuffled array:', shuffleArray([...originalArray]));

// 4. Implementing a sliding window algorithm
function maxSumSubarray(arr, k) {
  if (k > arr.length) return null;

  let maxSum = 0;
  let windowSum = 0;

  // Calculate sum of first window
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }
  maxSum = windowSum;

  // Slide the window and update max sum
  for (let i = k; i < arr.length; i++) {
    windowSum = windowSum - arr[i - k] + arr[i];
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

const windowSize = parseInt(readlineSync.question('Enter the size of the sliding window: '));
console.log('Maximum sum subarray of size', windowSize, ':', maxSumSubarray(numbers, windowSize));

// 5. Implementing a custom sorting algorithm (Merge Sort)
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const mid = Math.floor(arr.length / 2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  // Concatenate any remaining elements
  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log('Unsorted array:', unsortedArray);
console.log('Sorted array:', mergeSort(unsortedArray));

// 6. Implementing a binary search on a sorted array
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }

  return -1; // Target not found
}

const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17];
const searchTarget = parseInt(readlineSync.question('Enter a number to search for in the sorted array: '));
const searchResult = binarySearch(sortedArray, searchTarget);
console.log(searchResult !== -1 ? `Found ${searchTarget} at index ${searchResult}` : `${searchTarget} not found in the array`);

// 7. Matrix operations
function createMatrix(rows, cols) {
  return Array.from({ length: rows }, () => Array(cols).fill(0));
}

function multiplyMatrices(a, b) {
  if (a[0].length !== b.length) {
    throw new Error("Cannot multiply these matrices");
  }

  const result = createMatrix(a.length, b[0].length);
  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b[0].length; j++) {
      for (let k = 0; k < a[0].length; k++) {
        result[i][j] += a[i][k] * b[k][j];
      }
    }
  }
  return result;
}

function transposeMatrix(matrix) {
  // Use map to create a new matrix with rows and columns swapped
  return matrix[0].map((_, colIndex) => matrix.map(row => row[colIndex]));
}

const matrixA = [
  [1, 2],
  [3, 4]
];

const matrixB = [
  [5, 6],
  [7, 8]
];

console.log('Matrix A:');
matrixA.forEach(row => console.log(row));

console.log('Matrix B:');
matrixB.forEach(row => console.log(row));

console.log('Matrix A * B:');
const multipliedMatrix = multiplyMatrices(matrixA, matrixB);
multipliedMatrix.forEach(row => console.log(row));

console.log('Transposed Matrix A:');
const transposedMatrixA = transposeMatrix(matrixA);
transposedMatrixA.forEach(row => console.log(row));

// 8. Implementing a memoized fibonacci function using an array
function memoizedFibonacci() {
  const memo = [0, 1];
  
  return function fib(n) {
    if (n < 0) return NaN;
    if (memo[n] !== undefined) return memo[n];
    
    // Calculate and memoize the Fibonacci number
    memo[n] = fib(n - 1) + fib(n - 2);
    return memo[n];
  }
}

const fibonacci = memoizedFibonacci();
console.log('Fibonacci sequence (first 10 numbers):');
for (let i = 0; i < 10; i++) {
  console.log(`fib(${i}) = ${fibonacci(i)}`);
}

// 9. Advanced string manipulation with arrays
console.log('\nAdvanced string manipulation with arrays:');

// Implement a basic string compression algorithm
function compressString(str) {
  const chars = str.split('');
  let compressed = [];
  let count = 1;

  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === chars[i + 1]) {
      count++;
    } else {
      compressed.push(chars[i]);
      if (count > 1) {
        compressed.push(count.toString());
      }
      count = 1;
    }
  }

  return compressed.length < chars.length ? compressed.join('') : str;
}

const uncompressedString = "aabcccccaaa";
console.log('Original string:', uncompressedString);

console.log('Compressed string:', compressString(uncompressedString));

// Implement a function to check if two strings are anagrams
function areAnagrams(str1, str2) {
  const sortedStr1 = str1.toLowerCase().split('').sort().join('');
  const sortedStr2 = str2.toLowerCase().split('').sort().join('');
  return sortedStr1 === sortedStr2;
}

const string1 = "listen";
const string2 = "silent";
console.log(`Are "${string1}" and "${string2}" anagrams?`, areAnagrams(string1, string2));

// Question: How does the time complexity of matrix multiplication compare to matrix transposition?
// Improvement: How could you optimize the matrix multiplication algorithm for sparse matrices?