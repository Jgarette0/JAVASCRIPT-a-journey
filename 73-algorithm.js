function frankenSplice(arr1, arr2, n) {
  let array2 = arr2.slice();

  for (let i = 0; i < arr1.length; i++) {
    array2.splice(n, 0, arr1[i]);
    n++;
  }
  return array2;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));
