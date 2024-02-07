let extractStr = "Extract the word 'coding' from this string.";
let codingRegex = /coding/; // Change this line
let result = extractStr.match(codingRegex); // Change this line

console.log(result);

// match() method is used to search for a specified pattern within a string and returns an array of all matches found. This method is commonly used with regular expressions to perform pattern matching operations.
