function Animal(name) {
  this.name = name;
}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

// Only change code below this line
const animal = new Animal("dogo");
let duck = Object.create(Animal.prototype); // Change this line
let beagle = Object.create(Animal.prototype); // Change this line
console.log(animal);
console.log(duck);
console.log(beagle);

//check if the property exist in constructor Animal

let dsplyHere = [];
for (let property in animal) {
  if (animal.hasOwnProperty(property)) {
    dsplyHere.push(property);
  }
}
console.log(dsplyHere);

//check if animal is instance of Animal then returrn the propery value if it is
console.log(animal instanceof Animal ? animal.name : `Do't have a property`);

// let animal = new Animal();
// console.log(animal instanceof Animal);
