const cats = ["Pete", "Biggles", "Jasmine"];

let myFavouriteCats = "My favourite cats are ";

// for (const cat of cats) {
//   myFavouriteCats += `${cat},`;
// }

// console.log(myFavouriteCats);

function toUpper(string) {
  return string.toUpperCase();
}

const finalOutput = cats.map(toUpper);

console.log(finalOutput);

//We'd prefer it to handle the last cat differently, like this:
//My cats are called Pete, Biggles, and Jasmine.

for (let i = 0; i < cats.length; i++) {
  if (i === cats.length - 1) {
    myFavouriteCats += `and ${cats[i]}.`;
  } else {
    myFavouriteCats += `${cats[i]},`;
  }
}

console.log(myFavouriteCats);
