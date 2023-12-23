const num = Math.random();

const sum = Math.floor(num * 10);
const all = sum;

console.log(all);
console.log(sum);
console.log(num);

function deym(myMin, myMax) {
  const boom = Math.floor(Math.random() * (myMin - myMax + 1)) + myMin;
  return boom;
}

console.log(deym(4, 6));
