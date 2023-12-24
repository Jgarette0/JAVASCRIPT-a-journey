// Setup
const myArray = []; //output should be 5 4 3 2 1 0
const myArray2 = [];
// Only change code below this line
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}

//or

let j = 0;
while (j <= 5) {
  myArray2.unshift(j);
  j++;
}

console.log(myArray);
console.log(myArray2);
//deeym unshift
//unshift lets you insert value to array at the front of array, or in the first place of an array
