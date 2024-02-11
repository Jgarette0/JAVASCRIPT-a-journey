function copyMachine(arr, num) {
  let newArr = [];
  while (num >= 1) {
    // Only change code below this line
    newArr = [...arr];
    newArr.push();
    // Only change code above this line
    num--;
  }
  return newArr;
}

console.log(copyMachine(["jilian", "garette", "abangan"], 2));

//expected output
// ["jilian", "garette", "abangan"],["jilian", "garette", "abangan"]

// copyMachine([true, false, true], 2) should return [[true, false, true], [true, false, true]]
// Waiting:copyMachine([1, 2, 3], 5) should return [[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3]]
// Waiting:copyMachine([true, true, null], 1) should return [[true, true, null]]
// Waiting:copyMachine(["it works"], 3) should return [["it works"], ["it works"], ["it works"]]
// Waiting:The copyMachine function should utilize the spread operator with array arr
