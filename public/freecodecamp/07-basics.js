function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    case "d":
      answer = "stuff";
      break;
    case 4:
      answer = "stuff";
      break;
    default:
      answer = "default";
  }
  // Only change code above this line
  return answer;
}

console.log(switchOfStuff("d"));
// switchOfStuff("a") should return the string apple
// Waiting:switchOfStuff("b") should return the string bird
// Waiting:switchOfStuff("c") should return the string cat
// Waiting:switchOfStuff("d") should return the string stuff
// Waiting:switchOfStuff(4) should return the string stuff
// Waiting:You should not use any if or else statements
// Waiting:You should use a default statement
// Waiting:You should have at least 3 break statements
