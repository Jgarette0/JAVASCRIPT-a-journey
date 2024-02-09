// Usernames are used everywhere on the internet. They are what give users a unique identity on their favorite sites.
// You need to check all the usernames in a database. Here are some simple rules that users have to follow when creating their username.
// Usernames can only use alphanumeric characters.
// The only numbers in the username have to be at the end. There can be zero or more of them at the end. Username cannot start with the number.
// Username letters can be lowercase and uppercase.
// Usernames have to be at least two characters long. A two-character username can only use alphabet letters as characters.

let username = "Jiliangarette0";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/i; // Change this line
let result = userCheck.test(username);

console.log(result);

// Waiting:Your regex should match the string JACK
// Waiting:Your regex should not match the string J
// Waiting:Your regex should match the string Jo
// Waiting:Your regex should match the string Oceans11
// Waiting:Your regex should match the string RegexGuru
// Waiting:Your regex should not match the string 007
// Waiting:Your regex should not match the string 9
// Waiting:Your regex should not match the string A1
// Waiting:Your regex should not match the string BadUs3rnam3
// Waiting:Your regex should match the string Z97
// Waiting:Your regex should not match the string c57bT3
// Waiting:Your regex should match the string AB1
// Waiting:Your regex should not match the string J%4
