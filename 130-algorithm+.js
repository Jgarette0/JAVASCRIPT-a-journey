function steamrollArray(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? steamrollArray(item) : item);
  }, []);
}

console.log(steamrollArray([1, [2], [3, [[4]]]]));
