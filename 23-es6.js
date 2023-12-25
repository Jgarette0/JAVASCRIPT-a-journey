const sum = (...args) => {
  let total = 0;
  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }
  return total;
};
console.log(sum(1, 2, 3));

// The result of sum(0,1,2) should be 3
// Waiting:The result of sum(1,2,3,4) should be 10
// Waiting:The result of sum(5) should be 5
// Waiting:The result of sum() should be 0
// Waiting:sum should be an arrow function which uses the rest parameter syntax (...) on the args parameter.
