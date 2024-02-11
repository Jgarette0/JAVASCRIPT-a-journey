// pop allows me to extract end item in the array while the shift extracts beginning item in array

function popShift(arr) {
  let popped = arr.pop(); // Change this line
  let shifted = arr.shift(); // Change this line
  return [shifted, popped];
}

console.log(popShift(["challenge", "is", "not", "complete"]));

// popShift(["challenge", "is", "not", "complete"]) should return ["challenge", "complete"]
// Waiting:The popShift function should utilize the pop() method
// Waiting:The popShift function should utilize the shift() method
