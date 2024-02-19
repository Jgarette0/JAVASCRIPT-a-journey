function Animal() {}

Animal.prototype = {
  constructor: Animal,
  eat: function () {
    console.log("nom nom nom");
  },
};

function Dog() {}

// Only change code below this line

const animal = new Animal();
Dog.prototype = Object.create(Animal.prototype);

let beagle = new Dog();
console.log(beagle.eat());
let gold = new Dog();
