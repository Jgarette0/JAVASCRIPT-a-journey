function chainToSwitch(val) {
  let answer = "";
  // Only change code below this line

  switch (val) {
    case "bob":
      answer = "Marley";
      break;
    case 42:
      answer = "The Answer";
      break;
    case 1:
      answer = "There is no #1";
      break;
    case 99:
      answer = "Missed me by this much!";
      break;
    case 7:
      answer = "Ate Nine";
      break;
  }
  // Only change code above this line
  return answer;
}

chainToSwitch(7);

// You should not use any else statements anywhere in the editor
// Waiting:You should not use any if statements anywhere in the editor
// Waiting:You should have at least four break statements
// Waiting:chainToSwitch("bob") should return the string Marley
// Waiting:chainToSwitch(42) should return the string The Answer
// Waiting:chainToSwitch(1) should return the string There is no #1
// Waiting:chainToSwitch(99) should return the string Missed me by this much!
// Waiting:chainToSwitch(7) should return the string Ate Nine
// Waiting:chainToSwitch("John") should return "" (empty string)
// Waiting:chainToSwitch(156) should return "" (empty string)
