function translatePigLatin(str) {
  if (str.match(/^[^aeiou]+/) !== null) {
    return str
      .replace(/^[^aeiou]+/, "")
      .concat(str.match(/^[^aeiou]+/))
      .concat("ay");
  } else {
    return str.concat("way");
  }
}
console.log(translatePigLatin("consonant"));
