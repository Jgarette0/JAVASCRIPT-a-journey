//Conver Number into Roman Numerals

const convertToRoman = (num: number) => {
  const romanNum: { [key: number]: string } = {
    1: "I",
    4: "IV",
    5: "V",
    9: "IX",
    10: "X",
    40: "XL",
    50: "L",
    90: "XC",
    100: "C",
    400: "CD",
    500: "D",
    900: "CM",
    1000: "M",
  };

  let result = "";

  const keys = Object.keys(romanNum)
    .map(Number)
    .sort((a, b) => b - a);

  for (const key of keys) {
    while (num >= key) {
      result += romanNum[key];
      num -= key;
    }
  }

  return result;
};

console.log(convertToRoman(2002));
