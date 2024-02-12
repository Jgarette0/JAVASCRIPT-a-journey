let foods = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27,
};

function checkInventory(scannedItem) {
  // Only change code below this line
  return foods[scannedItem];
  // Only change code above this line
}

console.log(checkInventory("apples"));

// Waiting:checkInventory("apples") should return 25.
// Waiting:checkInventory("bananas") should return 13.
// Waiting:checkInventory("strawberries") should return 27.
