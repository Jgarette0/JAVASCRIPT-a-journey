const Manwhas = [
  {
    title: "existence",
    chapters: 210,
    author: "Jiliang Garette A",
    id: 1,
    genre: ["Time Travel", "Fantasy", "Romance", "Dungeons"],
  },
  {
    title: "Solo Leveling",
    chapters: 161,
    author: "George Park",
    id: 2,
    genre: ["Time Travel", "Fantasy", "Romance", "Reincarnation"],
  },
  {
    title: "Incompetent Prince",
    chapters: 241,
    author: "Park Go",
    id: 3,
    genre: ["Time Travel", "Fantasy", "Regression", "VRRMO"],
  },
  {
    title: "The Barbarians",
    chapters: 13,
    author: "Helm Brunt",
    id: 4,
    genre: ["Time Travel", "Fantasy", "Romance"],
  },
  {
    title: "Venom Dragon",
    chapters: 97,
    author: "Hayeeso",
    id: 5,
    genre: ["Time Travel", "Fantasy", "Romance"],
  },
];
N;

const [object1, object2, object3, object4, object5] = Manwhas;

console.log(object3);

const { title, chapters, genre } = object5;

console.log(title, chapters, genre);

const [selectedGenre] = genre;

const [...otherGenre] = genre;

console.log(selectedGenre);
console.log(otherGenre);
console.log(selectedGenre, ...otherGenre);
console.log(...genre, ...otherGenre);

const inputGenre = ["Horror", "Funny"];

const newGenre = [...inputGenre, ...genre];
newGenre;
//By Updating a data, One simply can just overide them, similar to how css word
const updateChapter = { ...object5, chapters: 99, title: "Venomous Dragon" };
updateChapter;
