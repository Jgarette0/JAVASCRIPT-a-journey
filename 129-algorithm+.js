function dropElements(arr, func) {
  let index = arr.findIndex(func);

  if (index === -1) {
    return [];
  } else {
    return arr.slice(index);
  }
}
console.log(
  dropElements([1, 2, 3], function (n) {
    return n < 3;
  })
);
