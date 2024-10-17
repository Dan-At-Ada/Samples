// Regex patterns for identifying numbers, letters, punctuation, and differentiating capital and non-capital letters

const sampleText = "Hello, World! 1234";

// Pattern to identify numbers in a series
const numberPattern = /\d+/g;
console.log("Number Pattern:", sampleText.match(numberPattern)); // Output: ['1234']

// Pattern to identify letters in a series
const letterPattern = /[a-zA-Z]+/g;
console.log("Letter Pattern:", sampleText.match(letterPattern)); // Output: ['Hello', 'World']

// Pattern to identify punctuation in a sentence
const punctuationPattern = /[.,\/#!$%\^&\*;:{}=\-_`~()]/g;
console.log("Punctuation Pattern:", sampleText.match(punctuationPattern)); // Output: [',', '!']

// Pattern to differentiate capital letters
const capitalLetterPattern = /[A-Z]/g;
console.log("Capital Letter Pattern:", sampleText.match(capitalLetterPattern)); // Output: ['H', 'W']

// Pattern to differentiate non-capital letters
const nonCapitalLetterPattern = /[a-z]/g;
console.log("Non-Capital Letter Pattern:", sampleText.match(nonCapitalLetterPattern)); // Output: ['e', 'l', 'l', 'o', 'o', 'r', 'l', 'd']

// Pattern to check if each word in a sentence begins with a capital letter
const capitalizedWordPattern = /\b[A-Z][a-z]*\b/g;
const allWords = sampleText.match(/\b\w+\b/g);
const capitalizedWords = sampleText.match(capitalizedWordPattern);

const allWordsCapitalized = allWords.length === capitalizedWords.length;
console.log("All Words Capitalized:", allWordsCapitalized); // Output: false (since "World" is capitalized but "Hello" is not)