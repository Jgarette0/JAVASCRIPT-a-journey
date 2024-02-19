function Animal() {}

Animal.prototype.numLegs = function (animal) {
  return `The ${animal} has four legs.`;
};

function Mammals() {}

Mammals.prototype = Object.create(Animal.prototype);
Mammals.prototype.constructor = Mammals;

let tiger = new Mammals();

console.log(tiger.numLegs("tiger"));
