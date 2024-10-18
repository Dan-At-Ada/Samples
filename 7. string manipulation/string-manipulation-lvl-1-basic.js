// Basic String Manipulation

// 1. String concatenation
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log("Full name:", fullName);

// Question: How would you concatenate strings using template literals?
// Possible improvement: Create a function that concatenates an arbitrary number of string arguments.

// 2. String length
const message = "Hello, World!";
console.log("Message length:", message.length);

// Question: How would you count the number of characters in a string, excluding spaces?
// Possible improvement: Write a function that returns the length of the longest word in a sentence.

// 3. Accessing characters
const str = "JavaScript";
console.log("First character:", str[0]);
console.log("Last character:", str[str.length - 1]);

// Question: What's the difference between using bracket notation and the charAt() method to access characters?
// Possible improvement: Create a function that returns the nth character from the end of a string.

// 4. Changing case
const mixedCase = "ThIs Is A mIxEd CaSe StRiNg";
console.log("Lowercase:", mixedCase.toLowerCase());
console.log("Uppercase:", mixedCase.toUpperCase());

// Question: How would you capitalize only the first letter of a string?
// Possible improvement: Write a function that alternates the case of each character in a string.

// 5. Trimming whitespace
const paddedString = "   Trim me!   ";
console.log("Trimmed:", paddedString.trim());

// Question: What's the difference between trim(), trimStart(), and trimEnd()?
// Possible improvement: Create a function that removes all whitespace from a string, including spaces between words.

// 6. Substring extraction
const sentence = "The quick brown fox jumps over the lazy dog";
console.log("Substring:", sentence.substring(4, 9));
console.log("Slice:", sentence.slice(4, 9));

// Question: What's the difference between substring() and slice()?
// Possible improvement: Write a function that extracts all words of a certain length from a sentence.

// 7. String searching
const paragraph = "The cat in the hat sat on the mat";
console.log("Index of 'cat':", paragraph.indexOf("cat"));
console.log("Last index of 'the':", paragraph.lastIndexOf("the"));

// Question: What does indexOf() return if the substring is not found?
// Possible improvement: Create a function that counts the occurrences of a word in a paragraph.

// 8. String replacement
const originalText = "The dog chased the cat";
const newText = originalText.replace("cat", "mouse");
console.log("Replaced text:", newText);

// Question: How would you replace all occurrences of a word in a string?
// Possible improvement: Write a function that censors specified words in a text by replacing them with asterisks.

// 9. Splitting strings
const csvData = "John,Doe,30,New York";
const dataArray = csvData.split(",");
console.log("Split data:", dataArray);

// Question: How would you split a string by multiple delimiters?
// Possible improvement: Create a function that splits a sentence into an array of words, ignoring punctuation.

// 10. Joining arrays into strings
const words = ["Hello", "world", "how", "are", "you"];
const joinedString = words.join(" ");
console.log("Joined string:", joinedString);

// Question: What's the default separator used by join() if no argument is provided?
// Possible improvement: Write a function that joins an array of words into a grammatically correct sentence.

// 11. Checking string content
const email = "user@example.com";
console.log("Includes '@':", email.includes("@"));
console.log("Starts with 'user':", email.startsWith("user"));
console.log("Ends with '.com':", email.endsWith(".com"));

// Question: How are these methods different from using indexOf()?
// Possible improvement: Create a function that validates an email address without using regex.

// 12. Repeating strings
const star = "*";
console.log("Star line:", star.repeat(10));

// Question: What happens if you pass a negative number to repeat()?
// Possible improvement: Write a function that creates a pyramid pattern of stars.