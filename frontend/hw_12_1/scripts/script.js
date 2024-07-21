const movies = [
  { title: "Inception", year: 2010 },
  { title: "The Dark Knight", year: 2008 },
  { title: "Interstellar", year: 2014 },
  { title: "The Matrix", year: 1999 },
];

movies.sort((elem1, elem2) => {
  return elem1.year - elem2.year;
});
console.log(movies);
// _______________________________;

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
  { name: "Charlie", age: 22 },
];

const sumThithElements = people.reduce((accum, elem, index, arr) => {
  return accum + elem.name + ",";
});
console.log(sumThithElements);
