const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Only change code below this line

  return [].concat(arr).sort((a, b) => a - b);
  //under the hood
  //[].concat(arr) = mix the empty array with 'arr' array
  //which means it creates a new array not doesnt mutate when sorted

  // Only change code above this line
}

console.log(nonMutatingSort(globalArray));
