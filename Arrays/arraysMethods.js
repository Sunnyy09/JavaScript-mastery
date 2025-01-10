let num = [1, 2, 3, 4, 5, 6];
// console.log(num);

// Another way to declare the array
let myArray = new Array("it's", "my", "new", "array");
// console.log(myArray);

// Arrays Methods

//to add an item into array
num.push(7);
num.push(8);

// to remove an item from the last in array
num.pop();
// console.log(num);

/*
to add one or more elements to the beginning of an array.
It modifies the original array and returns the new length of the array
*/
num.unshift(0);
// console.log(num);

// to remove the first element from an array
// If the array is empty, it returns undefined
num.shift();
// console.log(num);

// The includes() method in JavaScript is used to determine whether an
// array or a string contains a specific value.
console.log(num.includes(2));

// For Arrays: array.includes(valueToFind, fromIndex)
// For Strings: string.includes(searchString, position)

// The join() method in JavaScript is used to combine all the elements
// of an array into a single string.
const newArr = num.join();
console.log(newArr);
console.log(typeof newArr);
console.log(num);

// ************* slice, splice ***************

const myNA = num.slice(1, 4);
console.log(myNA);
console.log(num);

// The splice() method in JavaScript is used to add, remove, or replace
// elements in an array
// const myNA2 = num.splice(1, 4);
// console.log(myNA2);
// console.log(num);

// console.log(num.at(2));

// console.log(num.concat("add 8"));
// concat is also used to copy as another copy methods

/*
The copyWithin() method in JavaScript is used to shallow copy a part of 
an array to another location within the same array, overwriting its 
existing elements. It does not change the length of the array but modifies
the array in place.
*/
// Syntax: array.copyWithin(target, start, end) target: index where paste items

// console.log(num.copyWithin(0, 4));

const anotherArray = [1, 2, 3, [4, 5], 6, [, 7, 8, [9, 10]]];
// to change this 2d or 3d array into one array or put these array
// items into only one array
const flatArray = anotherArray.flat(Infinity); // Infinity - how much depth
// console.log(flatArray);

console.log(Array.isArray("khdub"));
// To converted into an array
console.log(Array.from("ksnds"));
// from(): Creates an array from an iterable object.
console.log(Array.from({ name: "John Doe" })); // this is not converted into an array

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3));
