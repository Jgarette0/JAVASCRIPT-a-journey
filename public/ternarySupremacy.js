//playing with ternary Operador

const isEmpty = "";
const foo = isEmpty === "" ? "dez nutz is empty" : `this s8 is not empty`;
console.log(foo);

const bob = (bob) => {
  return (bob = "this is bob");
};

const jedi = (wata) => {
  return (wata = "wata wata");
};

const dos = 1 + 1;
const isSakto = dos === 1;

const console = isSakto ? bob() : jedi();
console;

const gurang = (guwang) => "guwang naka";
const baby = (babayPa) => "baby face";
const age = 21;
const consoles = age >= 18 ? gurang() : baby();
consoles;
