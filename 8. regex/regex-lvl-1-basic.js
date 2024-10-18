// Basic Regex Exercises

// 1. Matching simple patterns
const simpleText = "The cat and the hat";
const catRegex = /cat/;
console.log("Has 'cat':", catRegex.test(simpleText));

// Question: How would you make this regex case-insensitive?
// Possible improvement: Write a function that counts occurrences of a given word in a text.

// 2. Character classes
const mixedText = "The price is $15.99";
const digitRegex = /\d+/g;
console.log("Numbers:", mixedText.match(digitRegex));

// Question: How would you modify this regex to match decimal numbers as well?
// Possible improvement: Create a function that extracts all prices from a given text.

// 3. Anchors
const names = ["John", "Jonathan", "Jon"];
const jonRegex = /^Jon/;
console.log("Names starting with 'Jon':", names.filter(name => jonRegex.test(name)));

// Question: How would you modify this regex to match names ending with 'n'?
// Possible improvement: Write a function that categorizes names based on their starting and ending letters.

// 4. Quantifiers
const htmlTag = "<p>This is a paragraph.</p>";
const tagRegex = /<.+>/;
console.log("HTML tag:", htmlTag.match(tagRegex)[0]);

// Question: What's the difference between greedy and lazy quantifiers?
// Possible improvement: Implement a function that extracts the content between HTML tags.

// 5. Grouping and capturing
const fullName = "John Doe";
const nameRegex = /(\w+)\s(\w+)/;
const [, firstName, lastName] = fullName.match(nameRegex);
console.log("First name:", firstName, "Last name:", lastName);

// Question: How would you modify this regex to handle middle names?
// Possible improvement: Create a function that formats names into "Last, First" order.

// 6. Alternation
const fruits = ["apple", "banana", "cherry", "date"];
const aOrBRegex = /^(a|b)/;
console.log("Fruits starting with 'a' or 'b':", fruits.filter(fruit => aOrBRegex.test(fruit)));

// Question: How would you modify this regex to match fruits ending with 'e' or 'y'?
// Possible improvement: Implement a function that groups fruits by their starting letter.

// 7. Word boundaries
const sentence = "The cat scattered the birds";
const catWordRegex = /\bcat\b/;
console.log("Has 'cat' as a whole word:", catWordRegex.test(sentence));

// Question: Why doesn't this regex match 'cat' in 'scattered'?
// Possible improvement: Write a function that highlights whole words in a text that match a given pattern.

// 8. Escaping special characters
const equation = "2 + 2 = 4";
const plusRegex = /\+/;
console.log("Has plus sign:", plusRegex.test(equation));

// Question: Which characters need to be escaped in regex?
// Possible improvement: Create a function that parses simple mathematical expressions.

// 9. Character ranges
const alphanumeric = "a1B2c3D4e5";
const lowerCaseRegex = /[a-z]/g;
console.log("Lowercase letters:", alphanumeric.match(lowerCaseRegex));

// Question: How would you modify this regex to match uppercase letters instead?
// Possible improvement: Implement a function that categorizes characters in a string as lowercase, uppercase, or digit.

// 10. Negated character classes
const sentence2 = "The quick brown fox jumps over the lazy dog.";
const nonVowelRegex = /[^aeiou]/gi;
console.log("Non-vowel characters:", sentence2.match(nonVowelRegex).join(''));

// Question: How would you use this regex to count the number of consonants in the sentence?
// Possible improvement: Create a function that redacts all vowels in a text.