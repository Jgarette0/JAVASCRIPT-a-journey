// //nesting for loops
// const arr = [
//   [3, 4],
//   [4, 5],
//   [6, 2],
//   [7, 3],
// ];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     console.log(arr[i][j]);
//   }
// }

// console.log(arr);

function multiplyAll(arr) {
  let product = 1;
  // Only change code below this line
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
      product *= arr[i][j];
    }
  }
  // Only change code above this line
  return product;
}

multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
console.log(
  multiplyAll([
    [1, 2],
    [3, 4],
    [5, 6, 7],
  ])
);
