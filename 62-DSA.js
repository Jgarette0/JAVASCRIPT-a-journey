let user = {
  name: "Kenneth",
  age: 28,
  data: {
    username: "kennethCodesAllDay",
    joinDate: "March 26, 2016",
    organization: "freeCodeCamp",
    friends: ["Sam", "Kira", "Tomo"],
    location: {
      city: "San Francisco",
      state: "CA",
      country: "USA",
    },
  },
};

function addFriend(userObj, friend) {
  // Only change code below this line
  if (friend !== "") {
    userObj.data.friends.push(friend);
  }

  return userObj.data.friends;
  // Only change code above this line
}

console.log(addFriend(user, "jacob"));

// The user object should have name, age, and data keys.
// Waiting:The addFriend function should accept a user object and a friend string as arguments and add the friend to the array of friends in the user object.
// Waiting:addFriend(user, "Pete") should return ["Sam", "Kira", "Tomo", "Pete"].
