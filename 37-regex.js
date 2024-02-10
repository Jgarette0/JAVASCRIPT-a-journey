let hello = "   Hello, World!  ";
let wsRegex = /\s(\w+)(\W*)\s(\w+\W)\s/gi; // Change this line
let result = hello.match(wsRegex); // Change this line

console.log(result);

// result should be equal to the string Hello, World!
// Passed:Your solution should not use the String.prototype.trim() method.
// Passed:The result variable should not directly be set to a string
// Passed:The value of the hello variable should not be changed.
