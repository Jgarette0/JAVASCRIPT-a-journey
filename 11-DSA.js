// Your function should return a value for count and the text (Bet or Hold) with one space character between them.
// Passed:Cards Sequence 2, 3, 4, 5, 6 should return the string 5 Bet
// Passed:Cards Sequence 7, 8, 9 should return the string 0 Hold
// Passed:Cards Sequence 10, J, Q, K, A should return the string -5 Hold
// Failed:Cards Sequence 3, 7, Q, 8, A should return the string -1 Hold
// Failed:Cards Sequence 2, J, 9, 2, 7 should return the string 1 Bet
// Failed:Cards Sequence 2, 2, 10 should return the string 1 Bet
// Failed:Cards Sequence 3, 2, A, 10, K should return the string -1 Hold

let count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 7:
    case 8:
    case 9:
      count--;
      break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
      count--;
      break;
    case 3:
    case 7:
    case "Q":
    case "8":
    case "A":
      count--;
      break;
    case 2:
    case "J":
    case 9:
    case 2:
    case 7:
      count++;
      break;
      if (count <= 0) {
        return count + " Hold";
      } else {
        return count + "Bet";
      }
  }

  // Only change code above this line
  return count;
}
console.log(cc(2));
console.log(cc(3));
console.log(cc(7));
console.log(cc("K"));
console.log(cc("A"));
