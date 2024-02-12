function filteredArray(arr, elem) {
  let newArr = [];
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    console.log(arr.length);
    console.log(arr);
    console.log(elem);
    console.log(arr[i].indexOf(elem));
    arr[i].indexOf(elem) === -1 ? newArr.push(arr[i]) : null;
  }

  // Only change code above this line
  return newArr;
}

console.log(
  filteredArray(
    [
      [3, 2, 3],
      [1, 6, 3],
      [3, 13, 26],
      [19, 3, 9],
    ],
    3
  )
);

// filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18) should return [[10, 8, 3], [14, 6, 23]]
// Waiting:filteredArray([["trumpets", 2], ["flutes", 4], ["saxophones", 2]], 2) should return [["flutes", 4]]
// Waiting:filteredArray([["amy", "beth", "sam"], ["dave", "sean", "peter"]], "peter") should return [["amy", "beth", "sam"]]
// Waiting:filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3) should return []
// Waiting:The filteredArray function should utilize a for loopx
