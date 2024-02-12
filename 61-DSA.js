// for...in Statement
// const names = {
//   1: "jilian",
//   2: {
//     name: "abangan",
//   },
// };

// for (const person in names) {
//   console.log(person, names[person]);
// }
// iterate the variable person in names.
//it take two parameter

const users = {
  Alan: {
    online: false,
  },
  Jeff: {
    online: true,
  },
  Sarah: {
    online: false,
  },
};

function countOnline(allUsers) {
  // Only change code below this line
  let result = 0;
  for (const user in allUsers) {
    if (allUsers[user].online === true) {
      result++;
    }
  }
  return result;
  // Only change code above this line
}

console.log(countOnline(users));

// The function countOnline should use a for in statement to iterate through the object keys of the object passed to it.
// Waiting:The function countOnline should return 1 when the object { Alan: { online: false }, Jeff: { online: true }, Sarah: { online: false } } is passed to it
// Waiting:The function countOnline should return 2 when the object { Alan: { online: true }, Jeff: { online: false }, Sarah: { online: true } } is passed to it
// Waiting:The function countOnline should return 0 when the object { Alan: { online: false }, Jeff: { online: false }, Sarah: { online: false } } is passed to it
