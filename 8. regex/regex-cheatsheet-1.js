// Regex Cheatsheet

// Character classes
// . - Any character except newline
// \w - Word character (a-z, A-Z, 0-9, _)
// \d - Digit (0-9)
// \s - Whitespace (space, tab, newline)
// \W - Not a word character
// \D - Not a digit
// \S - Not whitespace

// Anchors
// ^ - Start of string or line
// $ - End of string or line
// \b - Word boundary

// Quantifiers
// * - 0 or more
// + - 1 or more
// ? - 0 or 1
// {n} - Exactly n times
// {n,} - n or more times
// {n,m} - Between n and m times

// Groups and alternation
// (...) - Capturing group
// (?:...) - Non-capturing group
// | - Alternation (or)

// Sample usage
const text = "The quick brown fox jumps over the lazy dog.";

// Match all words
const wordRegex = /\b\w+\b/g;
console.log("Words:", text.match(wordRegex));

// Match words starting with 'q'
const qWordRegex = /\bq\w+/i;
console.log("Q word:", text.match(qWordRegex));

// Match 3-letter words
const threeLetterRegex = /\b\w{3}\b/g;
console.log("3-letter words:", text.match(threeLetterRegex));

// Match words ending with 'x'
const xEndRegex = /\w+x\b/;
console.log("Word ending with 'x':", text.match(xEndRegex));

// Question: How would you modify the last regex to match words ending with 'x' or 'y'?
// Possible improvement: Create a function that counts the occurrences of each word length in the text.