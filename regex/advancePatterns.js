// Email Regex
const testEmailCorrect = "example@example.com";
const testEmailIncorrect = "example@.com";

// Regex pattern for email
const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// / ^ [a-zA-Z0-9._%+-]+ @ [a-zA-Z0-9.-]+ \. [a-zA-Z]{2,}$/

console.log("Email Pattern:");
console.log(`Testing "${testEmailCorrect}": ${emailPattern.test(testEmailCorrect)}`); // true
console.log(`Testing "${testEmailIncorrect}": ${emailPattern.test(testEmailIncorrect)}`); // false

// Phone Number Regex
const testPhoneNumberCorrect = "+447911123456";
const testPhoneNumberIncorrect = "07911123456";

// Regex pattern for phone number (UK format)
const phoneNumberPattern = /^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$/;

console.log("Phone Number Pattern:");
console.log(`Testing "${testPhoneNumberCorrect}": ${phoneNumberPattern.test(testPhoneNumberCorrect)}`); // true
console.log(`Testing "${testPhoneNumberIncorrect}": ${phoneNumberPattern.test(testPhoneNumberIncorrect)}`); // false

// Postcode Regex
const testPostcodeCorrect = "SW1A 1AA";
const testPostcodeIncorrect = "12345";

// Regex pattern for UK postcode
const postcodePattern = /^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i;

console.log("Postcode Pattern:");
console.log(`Testing "${testPostcodeCorrect}": ${postcodePattern.test(testPostcodeCorrect)}`); // true
console.log(`Testing "${testPostcodeIncorrect}": ${postcodePattern.test(testPostcodeIncorrect)}`); // false

// Serial Number Regex
const testSerialNumberCorrect = "ABCD-1234-EFGH-5678";
const testSerialNumberIncorrect = "ABCD-1234-EFGH-567";

// Regex pattern for serial number (example: ABCD-1234-EFGH-5678)
const serialNumberPattern = /^[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/;

console.log("Serial Number Pattern:");
console.log(`Testing "${testSerialNumberCorrect}": ${serialNumberPattern.test(testSerialNumberCorrect)}`); // true
console.log(`Testing "${testSerialNumberIncorrect}": ${serialNumberPattern.test(testSerialNumberIncorrect)}`); // false