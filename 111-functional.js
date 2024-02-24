function alphabeticalOrder(arr) {
  return arr.sort(function (a, b) {
    //   if (a < b) {
    //     return -1;
    //   } else if (a > b) {
    //     return 1;
    //   } else {
    //     return 0;
    //   }
    // });

    //or
    return a < b ? -1 : a > b ? 1 : 0;
  });
}
console.log(alphabeticalOrder(["l", "h", "z", "b", "s"]));
