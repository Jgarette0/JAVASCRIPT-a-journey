//create a constructor which take an 2 argument

function Person(skinColor, age) {
  this.skinColor = skinColor;
  this.age = age;
  this.address = "Pilipins";
}

const jilian = new Person("nigero", 21);
console.log(jilian.skinColor);
console.log(jilian.age);
console.log(jilian.address);
