function quickCheck(arr, elem) {
  // Only change code below this line
  console.log(elem);
  console.log(arr);

  // let check = arr.indexOf(elem);
  // console.log(check);
  return arr.indexOf(elem) === -1 ? false : true;
  // Only change code above this line
}

console.log(quickCheck(["squash", "onions", "shallots"], "mushrooms"));

// The quickCheck function should return a boolean (true or false), not a string ("true" or "false")
// Waiting:quickCheck(["squash", "onions", "shallots"], "mushrooms") should return false
// Waiting:quickCheck(["onions", "squash", "shallots"], "onions") should return true
// Waiting:quickCheck([3, 5, 9, 125, 45, 2], 125) should return true
// Waiting:quickCheck([true, false, false], undefined) should return false
// Waiting:The quickCheck function should utilize the indexOf() method
