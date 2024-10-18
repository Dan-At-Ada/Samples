// Advanced Regex Exercises

// 1. Lookaheads and lookbehinds
const passwords = ["abc123", "password", "12345", "secret!"];
const strongPasswordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/;
console.log("Strong passwords:", passwords.filter(pwd => strongPasswordRegex.test(pwd)));

// Question: What's the difference between positive and negative lookaheads?
// Possible improvement: Implement a password strength checker that provides specific feedback.

// 2. Backreferences
const repeatWords = "The the quick brown fox fox jumps over the lazy dog dog.";
const duplicateWordRegex = /\b(\w+)\s+\1\b/g;
console.log("Duplicate words:", repeatWords.match(duplicateWordRegex));

// Question: How would you modify this regex to be case-insensitive?
// Possible improvement: Create a function that highlights repeated words in a text.

// 3. Named capture groups
const dateString = "2023-05-15";
const namedDateRegex = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/;
const { groups: { year, month, day } } = dateString.match(namedDateRegex);
console.log("Date parts:", { year, month, day });

// Question: How do named capture groups differ from numbered capture groups?
// Possible improvement: Implement a function that converts between different date formats using regex.

// 4. Non-capturing groups
const phoneNumbers = ["(123) 456-7890", "987-654-3210", "456.789.0123"];
const phoneRegex = /(?:\d{3}[-.)]\s?)\d{3}[-.]?\d{4}/;
console.log("Valid phone numbers:", phoneNumbers.filter(num => phoneRegex.test(num)));

// Question: When would you use a non-capturing group instead of a capturing group?
// Possible improvement: Create a function that standardizes phone number formats in a text.

// 5. Greedy vs. lazy quantifiers
const htmlText = "<p>First paragraph</p><p>Second paragraph</p>";
const greedyRegex = /<p>.*<\/p>/;
const lazyRegex = /<p>.*?<\/p>/g;
console.log("Greedy match:", htmlText.match(greedyRegex)[0]);
console.log("Lazy matches:", htmlText.match(lazyRegex));

// Question: Why does the greedy regex match the entire string?
// Possible improvement: Implement a function that extracts all paragraphs from an HTML string.

// 6. Regex for URL parsing
const url = "https://www.example.com:8080/path/to/page?name=John&age=30#section";
const urlRegex = /^(https?:\/\/)?([\w.-]+)(:(\d+))?(\/[^?#]*)?(\?[^#]*)?(#.*)?$/;
const [, protocol, domain, , port, path, query, hash] = url.match(urlRegex);
console.log("URL parts:", { protocol, domain, port, path, query, hash });

// Question: How would you modify this regex to support IPv4 addresses as domains?
// Possible improvement: Create a function that builds a URL object from a string using regex.

// 7. Balancing groups (simulated in JavaScript)
function findNestedParentheses(str) {
  const stack = [];
  const result = [];
  let start = -1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
      if (start === -1) start = i;
    } else if (str[i] === ')') {
      if (stack.length === 1) {
        result.push(str.substring(start, i + 1));
        start = -1;
      }
      stack.pop();
    }
  }

  return result;
}

const nestedParens = "((a+b)*(c+d)) + ((e+f)*(g+h))";
console.log("Nested parentheses:", findNestedParentheses(nestedParens));

// Question: Why can't this be done with a single regex in JavaScript?
// Possible improvement: Extend this function to handle different types of brackets.

// 8. Unicode property escapes
const mixedScriptText = "Hello, こんにちは, 你好";
const japaneseRegex = /\p{Script=Hiragana}|\p{Script=Katakana}|\p{Script=Han}/gu;
console.log("Japanese characters:", mixedScriptText.match(japaneseRegex));

// Question: What other Unicode properties can be used in regex?
// Possible improvement: Create a function that categorizes text by script.

// 9. Regex for email validation
const emails = ["user@example.com", "invalid.email@", "another@user.co.uk"];
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
console.log("Valid emails:", emails.filter(email => emailRegex.test(email)));

// Question: What are the limitations of using regex for email validation?
// Possible improvement: Implement a function that provides specific feedback on why an email is invalid.

// 10. Using regex with replace function
const template = "Hello, {name}! Your order #{orderId} has been shipped to {address}.";
const data = { name: "John", orderId: "12345", address: "123 Main St" };

const interpolatedString = template.replace(/\{(\w+)\}/g, (match, key) => data[key] || match);
console.log("Interpolated string:", interpolatedString);

// Question: How would you modify this to handle nested object properties?
// Possible improvement: Create a template engine that supports conditionals and loops using regex.