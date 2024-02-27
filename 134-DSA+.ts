//palindrome checker
function palindrome(str: string) {
  let checkSmthng = str.toLowerCase().replace(/[^a-z0-9]/g, "");

  return checkSmthng === checkSmthng.split("").reverse().join("");
}

console.log(palindrome("wew"));
