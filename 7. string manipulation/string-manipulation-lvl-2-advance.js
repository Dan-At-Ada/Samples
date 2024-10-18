// Advanced String Manipulation

// 1. Custom string iteration
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  }
  
  console.log("Reversed string:", reverseString("Hello, World!"));
  
  // Question: How would you modify this function to handle Unicode characters correctly?
  // Possible improvement: Implement a function that reverses words in a sentence while maintaining their order.
  
  // 2. Advanced string comparison
  function isAnagram(str1, str2) {
    const normalize = (str) => str.toLowerCase().split('').sort().join('');
    return normalize(str1) === normalize(str2);
  }
  
  console.log("Is anagram:", isAnagram("listen", "silent"));
  
  // Question: How would you modify this function to ignore spaces and punctuation?
  // Possible improvement: Create a function that groups anagrams from an array of words.
  
  // 3. String padding
  function padNumber(num, width) {
    return num.toString().padStart(width, '0');
  }
  
  console.log("Padded number:", padNumber(42, 5));
  
  // Question: How would you implement this function without using padStart()?
  // Possible improvement: Create a function that formats a date string with padded month and day.
  
  // 4. Advanced substring extraction
  function extractBetween(str, start, end) {
    const startIndex = str.indexOf(start) + start.length;
    const endIndex = str.indexOf(end, startIndex);
    return str.substring(startIndex, endIndex);
  }
  
  const htmlTag = "<div>Hello, World!</div>";
  console.log("Extracted content:", extractBetween(htmlTag, "<div>", "</div>"));
  
  // Question: How would you handle cases where the start or end string is not found?
  // Possible improvement: Extend this function to extract all occurrences between start and end strings.
  
  // 5. Custom string splitting
  function splitByMultipleDelimiters(str, delimiters) {
    let result = [str];
    for (const delimiter of delimiters) {
      result = result.flatMap(s => s.split(delimiter));
    }
    return result.filter(s => s !== '');
  }
  
  const text = "apple,banana;cherry:date";
  console.log("Split result:", splitByMultipleDelimiters(text, [',', ';', ':']));
  
  // Question: How does this approach differ from using a string of delimiters with split()?
  // Possible improvement: Implement a function that tokenizes a string based on word boundaries and punctuation.
  
  // 6. Advanced case manipulation
  function toTitleCase(str) {
    return str.split(' ')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(' ');
  }
  
  console.log("Title case:", toTitleCase("thE quIck bRoWn fOx"));
  
  // Question: How would you modify this function to handle hyphenated words?
  // Possible improvement: Create a function that converts camelCase or snake_case to Title Case.
  
  // 7. String compression
  function compressString(str) {
    let compressed = '';
    let count = 1;
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[i + 1]) {
        count++;
      } else {
        compressed += str[i] + (count > 1 ? count : '');
        count = 1;
      }
    }
    return compressed.length < str.length ? compressed : str;
  }
  
  console.log("Compressed string:", compressString("aabcccccaaa"));
  
  // Question: How would you modify this function to make it case-insensitive?
  // Possible improvement: Implement a decompression function that reverses the compression process.
  
  // 8. Advanced string searching
  function findAllOccurrences(str, substr) {
    const occurrences = [];
    let index = str.indexOf(substr);
    while (index !== -1) {
      occurrences.push(index);
      index = str.indexOf(substr, index + 1);
    }
    return occurrences;
  }
  
  const sentence = "The quick brown fox jumps over the lazy dog. The dog is very lazy.";
  console.log("Occurrences of 'the':", findAllOccurrences(sentence.toLowerCase(), "the"));
  
  // Question: How would you modify this function to perform a case-insensitive search?
  // Possible improvement: Create a function that finds the most frequent word in a given text.
  
  // 9. Custom string formatting
  function formatNumber(num) {
    const parts = num.toString().split('.');
    let integerPart = parts[0];
    let formattedInteger = '';
    
    for (let i = integerPart.length - 1, count = 0; i >= 0; i--, count++) {
      if (count > 0 && count % 3 === 0) {
        formattedInteger = ',' + formattedInteger;
      }
      formattedInteger = integerPart[i] + formattedInteger;
    }
    
    return parts.length > 1 ? formattedInteger + '.' + parts[1] : formattedInteger;
  }
  
  console.log("Formatted number:", formatNumber(1234567.89));
  
  // Question: How would you modify this function to support different separators (e.g., European format)?
  // Possible improvement: Implement a function that formats a number as currency with a specified locale.
  
  // 10. Advanced string parsing
  function parseQueryString(url) {
    const queryString = url.split('?')[1];
    if (!queryString) return {};
  
    return queryString.split('&').reduce((params, param) => {
      const [key, value] = param.split('=');
      params[decodeURIComponent(key)] = decodeURIComponent(value);
      return params;
    }, {});
  }
  
  const url = "https://example.com/search?q=javascript&category=programming&sort=relevance";
  console.log("Parsed query string:", parseQueryString(url));
  
  // Question: How would you handle cases where a parameter appears multiple times in the query string?
  // Possible improvement: Create a function that builds a query string from an object of parameters.
  
  // 11. String diffing
  function simpleDiff(str1, str2) {
    const words1 = str1.split(' ');
    const words2 = str2.split(' ');
    const diff = [];
  
    for (let i = 0; i < Math.max(words1.length, words2.length); i++) {
      if (words1[i] !== words2[i]) {
        if (words1[i]) diff.push(`- ${words1[i]}`);
        if (words2[i]) diff.push(`+ ${words2[i]}`);
      } else {
        diff.push(`  ${words1[i]}`);
      }
    }
  
    return diff.join('\n');
  }
  
  const oldText = "The quick brown fox jumps over the lazy dog";
  const newText = "The quick brown cat jumps over the lazy dog";
  console.log("Diff result:\n", simpleDiff(oldText, newText));
  
  // Question: What are the limitations of this simple diff algorithm?
  // Possible improvement: Implement a more sophisticated diff algorithm that can handle word reordering.
  
  // 12. Advanced string interpolation
  function interpolate(template, context) {
    let result = template;
    for (const key in context) {
      const placeholder = '{' + key + '}';
      while (result.includes(placeholder)) {
        result = result.replace(placeholder, context[key]);
      }
    }
    return result;
  }
  
  const template = "Hello, {name}! You have {count} new messages.";
  const context = { name: "Alice", count: 5 };
  console.log("Interpolated string:", interpolate(template, context));
  
  // Question: How would you extend this function to support nested object properties in the context?
  // Possible improvement: Implement a more advanced templating system with conditional statements and loops.