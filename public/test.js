const people = [
  {
    name: "Alice",
    age: 25,
    role: "Engineer",
  },
  {
    name: "Bob",
    age: 30,
    role: "Designer",
  },
  {
    name: "Charlie",
    age: 28,
    role: "Writer",
  },
  {
    name: "Diana",
    age: 35,
    role: "Manager",
  },
];

const [person1, person2, person3, person4] = people;
console.log(person1);

// this is rest operator
const { name, ...other } = person3;

console.log(other);
console.log({ name });
const pangalan = name;
const edad = other.age;
const trabajo = other.role;

console.log(pangalan, edad, trabajo);

//this is spread operator
const { role, ...rest } = person4;

const combine = {
  ...rest,
  role,
};
console.log(combine);
const update = { ...rest, role: "Software Engineer" };
console.log(update);
console.log(update.role);
