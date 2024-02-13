function factorialize(num) {
  let result = 1;
  for (let i = 2; i <= num; i++) {
    result *= i;
  }
  return result;
}

factorialize(6);
console.log(factorialize(5));
