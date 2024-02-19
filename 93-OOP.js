function Car() {}

Car.prototype.sound = function () {
  console.log(`Tutu tutu tututu tututututu`);
};

function Supra() {}

Supra.prototype = Object.create(Car.prototype);
Supra.prototype.constructor = Supra;

Supra.prototype.scream = function () {
  console.log("titiw titiw tttttttttttiikkkkkkkkkkkk");
};

let MK4 = new Supra();

MK4.sound();
MK4.scream();
