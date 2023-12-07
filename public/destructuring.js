const Manwhas = [
  {
    title: "existence",
    chapters: 210,
    author: "Jiliang Garette A",
    id: 1,
    genre: "reincarnation",
  },
  {
    title: "Solo Leveling",
    chapters: 161,
    author: "George Park",
    id: 2,
    genre: "Dungeons",
  },
  {
    title: "Incompetent Prince",
    chapters: 241,
    author: "Park Go",
    id: 3,
    genre: "Time Travel",
  },
  {
    title: "The Barbarians",
    chapters: 13,
    author: "Helm Brunt",
    id: 4,
    genre: "Meideval",
  },
  {
    title: "Venom Dragon",
    chapters: 97,
    author: "Hayeeso",
    id: 5,
    genre: ["Time Travel", "Fantasy", "Romance"],
  },
];

const [array1, array2, array3, array4, array5] = Manwhas;

console.log(array1);
console.log(array2);
console.log(array3);
console.log(array4);
console.log(array5);

const { title, genre } = array5;
console.log(title, genre);

const [primaryGenre, secondaryGenre] = genre;

console.log(primaryGenre, secondaryGenre);
// const primaryGenre = genre[0];
// const secondaryGenre = genre[1];

// console.log(primaryGenre, secondaryGenre);

// console.log(one);
// console.log(two);
// console.log(three);
// console.log(four);
// console.log(five);

// function displayDetailsById(id) {
//   const manwha = Manwhas.find((item) => item.id === id);

//   if (manwha) {
//     // If the object with the given id is found
//     console.log("Title:", manwha.title);
//     console.log("Chapters:", manwha.chapters);
//     console.log("Author:", manwha.author);
//     console.log("Genre:", manwha.genre);
//     // Display other details as needed
//   } else {
//     console.log("Manwha with ID", id, "not found.");
//   }
// }

// // Usage:
// const idToFind = 3; // Change this to the desired ID you want to display details for
// displayDetailsById(5);
