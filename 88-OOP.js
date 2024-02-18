function Bird(name) {
  this.name = name;
  this.color = "green";
}

console.log(typeof Bird.prototype);

// Because a prototype is an object, a prototype can have its own prototype! In this case, the prototype of Bird.prototype is Object.prototype:

console.log(Object.prototype.isPrototypeOf(Bird.prototype));
let maya = new Bird("birdy");
console.log(maya);

console.log(maya.hasOwnProperty("color"));
