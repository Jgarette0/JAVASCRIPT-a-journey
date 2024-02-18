function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// Only change code below this line
const animal = new Animal();
let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line

console.log(duck);
console.log(beagle);
// let animal = new Animal();
// console.log(animal instanceof Animal);
