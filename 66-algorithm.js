function findLongestWordLength(str) {
  let word = str.split(" ");
  let displays = 0;

  for (let i = 0; i < word.length; i++) {
    if (word[i].length > displays) {
      displays = word[i].length;
    }
  }
  return displays;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
//commit
