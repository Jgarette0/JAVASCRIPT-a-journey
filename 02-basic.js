// the lexical scopinng

// global variable
let hello = "damnn";

function helloThere() {
  // local variable
  const hello = "deym";
  return hello;
}

console.log(helloThere());

// passing an argument inside a function

function greet(arg) {
  return arg;
}

console.log(greet("hello"));

//passing 2 arg, ? callback?

function salutation(salutate) {
  return salutate; //salutation('hello') output:
}

function name(salutate, yourName) {
  return salutate + " " + yourName;
}

function hello(yourName) {
  return name("hello", yourName);
}

console.log(hello("jilian"));
