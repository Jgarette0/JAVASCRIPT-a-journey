//null-coalescing
//optional-chaining

let x = 5;
let y;

const console = () => {
  return x + (y?.valueOf ?? 0);
};

console.log(console());
