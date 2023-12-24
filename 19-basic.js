// Setup
const contacts = [
  {
    firstName: "Akira",
    lastName: "Laine",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Brownie Points"],
  },
  {
    firstName: "Harry",
    lastName: "Potter",
    number: "0994372684",
    likes: ["Hogwarts", "Magic", "Hagrid"],
  },
  {
    firstName: "Sherlock",
    lastName: "Holmes",
    number: "0487345643",
    likes: ["Intriguing Cases", "Violin"],
  },
  {
    firstName: "Jilian",
    lastName: "Vos",
    number: "09661808543",
    likes: ["JavaScript", "Gaming", "Foxes"],
  },
];

const contactNum = (name, props) => {
  for (let i = 0; i < contacts.length; i++) {
    if (contacts[i].firstName === name) {
      if (contacts[i].hasOwnProperty(props)) {
        return contacts[i][props];
      } else {
        return "No such Property existed";
      }
    }
  }
  return "No Contact existed";
};

console.log(contactNum("Jilian", "number"));
