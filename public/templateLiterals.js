//I already familliar with it
//but i'll relearn it anyway

// Basically template literals
// is an output messege contains
// variables inside a String.
// Not exactly using single qoute
// or double qoutation but a bactic
// like this = (``)

const something = "hello";

console.log(`${something} there!`);

const arr = [
  {
    name: "Jilian",
    age: "21",
    gender: "male",
  },
  {
    name: "brykenez",
    age: 20,
    gender: "female",
  },
];

const [arrayOne, arrayTwo] = arr;

const { name, age, gender } = arrayOne;
name;
age;
gender;

const selectAll = arr.forEach((props, index) => {
  const { name, age, gender } = props;

  console.log(`I am ${name}, ${gender} ${age} years of age`);
  console.log(`this is the names: ${name}`);
});
