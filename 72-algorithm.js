function booWho(bool) {
  return typeof bool == "boolean";
}

console.log(booWho(null));

// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

// booWho(true) should return true.
// Passed:booWho(false) should return true.
// Failed:booWho([1, 2, 3]) should return false.
// Failed:booWho([].slice) should return false.
// Failed:booWho({ "a": 1 }) should return false.
// Failed:booWho(1) should return false.
// Failed:booWho(NaN) should return false.
// Failed:booWho("a") should return false.
// Failed:booWho("true") should return false.
// Failed:booWho("false") should return false.
