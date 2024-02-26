function sumFibs(num) {
  let prev = 0;
  let curr = 1;
  let sum = 0;

  for (let i = 0; curr <= num; i++) {
    if (curr % 2 !== 0) {
      sum += curr;
    }

    curr += prev;
    prev = curr - prev;
  }

  return sum;
}

console.log(sumFibs(1000)); // Output: 1785

//not my code
//i dont understand the fibonacci and its formula
//1