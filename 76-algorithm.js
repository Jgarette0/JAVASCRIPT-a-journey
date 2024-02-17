function mutation(arr) {
  const test = arr[1].toLowerCase();
  const target = arr[0].toLowerCase();
  for (let i = 0; i < test.length; i++) {
    if (target.indexOf(test[i]) < 0) {
      return false;
    }
  }
  return true;
}

console.log(mutation(["hello", "hey"]));

// Write a function that splits an array (first argument) into groups the length of size (second argument) and returns them as a two-dimensional array.

// Waiting:chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) should return [[0, 1], [2, 3], [4, 5]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6], 3) should return [[0, 1, 2], [3, 4, 5], [6]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 4) should return [[0, 1, 2, 3], [4, 5, 6, 7], [8]].
// Waiting:chunkArrayInGroups([0, 1, 2, 3, 4, 5, 6, 7, 8], 2) should return [[0, 1], [2, 3], [4, 5], [6, 7], [8]].

// Code Explanation
// Firstly, we create two empty arrays called temp and result, which we will eventually return.
// Our for loop loops until a is equal to or more than the length of the array in our test.
// Inside our loop, we push to temp using temp.push(arr[a]); if the remainder of a / size is not equal to size - 1.
// Otherwise, we push to temp, push temp to the result variable and reset temp to an empty array.
// Next, if temp isn’t an empty array, we push it to result.
// Finally, we return the value of result.
// Relevant Links
// Array.push()
// For Loops
