// 84 - OOPSince all instances automatically have the properties on the prototype, think of a prototype as a "recipe" for creating objects. Note that the prototype for duck and canary is part of the Bird constructor as Bird.prototype.

// Add a numLegs property to the prototype of Dogjs;
function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 2;
console.log(Dog.prototype.numLegs);
// Only change code above this line
let beagle = new Dog("Snoopy");
