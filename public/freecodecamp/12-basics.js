function isPalindrome(string) {
  const toLetters = string.replace(/[^A-z0-9]/g, "").toLowerCase();

  const length = toLetters.length;
  for (i = 0; i < length / 2; i++) {
    if (toLetters[i] !== toLetters[length - 1 - i]) {
      return false;
    }
  }
  return true;
}

console.log(isPalindrome("Garette"));
console.log(isPalindrome("ele"));
