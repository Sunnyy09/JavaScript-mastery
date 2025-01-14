let studentMarks = [85, 90, 78, 92, 88, 76, 95, 89, 83, 91];

console.log(studentMarks);
console.log(studentMarks.length);

let marvelHeroes = [
  "Iron Man",
  "Spider-Man",
  "Captain America",
  "Thor",
  "Hulk",
  "Black Widow",
  "Doctor Strange",
  "Black Panther",
  "Scarlet Witch",
  "Ant-Man",
];

console.log(marvelHeroes[0]);

//To update the value in the Array
marvelHeroes[3] = "xyz";
// console.log(marvelHeroes[3]);

// ************ for-of loop *************
// for (const heroes of marvelHeroes) {
//   console.log(heroes);
// }

// ************** for loop ***************
// for (let i = 0; i <= marvelHeroes.length; i++) {
//   console.log(marvelHeroes[i]);
// }

// ****************** while-loop *****************
// let i = 0;
// while (i < marvelHeroes.length) {
//   console.log(marvelHeroes[i]);
//   i++;
// }

//do-while loop
let i = 0;
do {
  console.log(marvelHeroes[i]);
  i++;
} while (i < marvelHeroes.length);
{
}

let cities = [
  "New York",
  "Tokyo",
  "London",
  "Paris",
  "Sydney",
  "Dubai",
  "Berlin",
  "Toronto",
  "Mumbai",
  "Cape Town",
];

//method for apply on single item
// console.log(cities[0].toUpperCase());

// //method to apply on all items
// for (const city of cities) {
//   console.log(city.toUpperCase());
// }

// by using the function
function upperCase(array) {
  return array.toUpperCase();
}

// to apply the function on single item
//let output = upperCase(cities[5]);

// to apply the function on all the items or ON ARRAY
let output = cities.map(upperCase);
// console.log(output);
