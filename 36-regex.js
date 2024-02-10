let str = "one two three";
let fixRegex = /change/; // Change this line
let replaceText = ""; // Change this line
let result = str.replace(fixRegex, replaceText);

console.log(result);

// You should use .replace() to search and replace.
// Waiting:Your regex should change the string one two three to the string three two one
// Waiting:You should not change the last line.
// Waiting:fixRegex should use at least three capture groups.
// Waiting:replaceText should use parenthesized submatch string(s) (i.e. the nth parenthesized submatch string, $n, corresponds to the nth capture group).
