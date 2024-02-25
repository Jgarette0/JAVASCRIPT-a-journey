function destroyer(arr) {
  const valsToRemove = Array.from(arguments).slice(1);
  console.log(valsToRemove);
  return arr.filter((e) => {
    return !valsToRemove.includes(e);
  });
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3));
