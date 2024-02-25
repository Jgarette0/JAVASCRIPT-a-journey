function sumAll(arr) {
  let max = Math.max(arr[1], arr[0]);
  let min = Math.min(arr[1], arr[0]);
  let result = 0;

  for (let i = min; i <= max; i++) {
    result += i;
  }
  return result;
}
console.log(sumAll([1, 4]));
