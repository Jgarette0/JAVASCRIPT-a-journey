function Bird() {
  let weight = 15;

  this.getWeight = function () {
    return weight;
  };
}

let langgam = new Bird();

console.log(langgam.getWeight());
