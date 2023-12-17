const fullName = (firstName, lastName) => {
  return `Hello there ${firstName}, ${lastName}`;
};
const lastName = (lastName) => {
  return fullName("Jilian Garette", lastName);
};
console.log(lastName("Abangan"));
//wow
