let waldoIsHiding = "Somewhere Waldo is hiding in this text.";
let waldoRegex = /Waldo/; // Change this line
let result = waldoRegex.test(waldoIsHiding); // it will test if Waldo keyword existed

console.log(result);

let petString = "James has a pet cat.";
let petRegex = /dog | cat/; // this will find if the a certain word exist. like dog or cat
let results = petRegex.test(petString);

console.log(results);
