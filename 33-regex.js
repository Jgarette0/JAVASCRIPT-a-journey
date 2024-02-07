let findRoom = "Comlab, TVL, Lecture, PE, Stem, Robotics,tvl";
let regex = /tvl/gi;
let result = findRoom.match(regex);

console.log(result);

// /g - is a global search that allows you to repeatedly find matched value
