// Regex Cheatsheet: Capture Groups

// Basic syntax: (...)
// Capture groups are defined by parentheses and allow you to extract specific parts of a match

// 1. Single Capture Group
const singleGroupRegex = /Hello, (world)!/;
const singleGroupText = "Hello, world!";
const singleGroupMatch = singleGroupText.match(singleGroupRegex);

console.log("Full match:", singleGroupMatch[0]);
console.log("Captured group:", singleGroupMatch[1]);

// Example: Extracting a name
const nameRegex = /My name is (\w+)/;
const nameText = "My name is Alice";
const nameMatch = nameText.match(nameRegex);

console.log("Full match:", nameMatch[0]);
console.log("Extracted name:", nameMatch[1]);

// Question: How would you modify the nameRegex to capture both first and last names?
// Possible improvement: Create a function that extracts and returns just the name from a sentence.

// 2. Two Capture Groups
const twoGroupRegex = /(\d+)-(\d+)/;
const twoGroupText = "Page 123-456";
const twoGroupMatch = twoGroupText.match(twoGroupRegex);

console.log("Full match:", twoGroupMatch[0]);
console.log("First group:", twoGroupMatch[1]);
console.log("Second group:", twoGroupMatch[2]);

// Example: Parsing a date
const dateRegex = /(\d{2})\/(\d{2})\/(\d{4})/;
const dateText = "Date: 05/20/2023";
const dateMatch = dateText.match(dateRegex);

console.log("Full match:", dateMatch[0]);
console.log("Month:", dateMatch[1]);
console.log("Day:", dateMatch[2]);
console.log("Year:", dateMatch[3]);

// Question: How would you modify the dateRegex to support dates with single-digit months and days?
// Possible improvement: Write a function that converts dates between different formats using capture groups.

// 3. Three Capture Groups
const threeGroupRegex = /(\w+):(\d+):(\w+)/;
const threeGroupText = "Error:404:Not Found";
const threeGroupMatch = threeGroupText.match(threeGroupRegex);

console.log("Full match:", threeGroupMatch[0]);
console.log("Type:", threeGroupMatch[1]);
console.log("Code:", threeGroupMatch[2]);
console.log("Message:", threeGroupMatch[3]);

// Example: Parsing a simple log entry
const logRegex = /(\d{2}:\d{2}:\d{2}) (\w+): (.+)/;
const logText = "14:35:22 INFO: User logged in successfully";
const logMatch = logText.match(logRegex);

console.log("Full match:", logMatch[0]);
console.log("Timestamp:", logMatch[1]);
console.log("Log level:", logMatch[2]);
console.log("Message:", logMatch[3]);

// Question: How would you modify the logRegex to also capture the date?
// Possible improvement: Create a function that parses log entries and returns them as structured objects.

// Using capture groups with replace
const replaceRegex = /(\w+), (\w+)/;
const replaceText = "Doe, John";
const replaced = replaceText.replace(replaceRegex, "$2 $1");

console.log("Original:", replaceText);
console.log("Replaced:", replaced);

// Question: How would you use capture groups to swap the first and last words in a sentence?
// Possible improvement: Implement a function that uses capture groups to reformat various types of data.