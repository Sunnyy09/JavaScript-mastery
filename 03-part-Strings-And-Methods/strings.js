const str = "Welcome to the world of JavaScript";

// charAt():- Returns the character at a specified index in a string.
// Does not support negative indexing. Providing a negative index will
// return an empty string.
console.log(str.charAt(5));

// at():- Returns the character at a specified index, supporting negative indexing
// (introduced in ES2022).
console.log(str.at(1));
console.log(str.at(-1));

// console.log(str.endsWith("Script"));

console.log(str.includes("to"));
console.log(str.includes("Welcome"));
console.log(str.indexOf("world"));

/*
The match() and matchAll() methods in JavaScript are used to search strings
for matches to a specified pattern, often a regular expression. While they
have some similarities, they serve slightly different purposes. 
*/

// The match() method searches a string for matches and returns the results
// as an array or null if no match is found.
// return: Array (or null)
console.log(str.match(/o/));
// console.log(str.match(/o/g));

// The matchAll() method returns an iterator of all results matching a pattern,
// including capturing groups.
// return: Iterator (requires for...of or spread syntax)
const iterator = str.matchAll(/o/g);
for (const match of iterator) {
  //   console.log(match);
}

//The substr() method extracts a substring based on a start index and a length.
console.log(str.substr(2, 4));

//The substring() method extracts a substring based on two indices (start and end).
console.log(str.substring(2, 4));

//If startIndex is greater than endIndex, the values are swapped automatically.
console.log(str.substring(8, 4));

/*
The toLocaleString() method in JavaScript is used to convert numbers,
dates, or objects into locale-sensitive strings.
number.toLocaleString([locales], [options]);
locales (optional): A string or array of BCP 47 language tags (e.g., "en-US", "fr-FR").
options (optional): An object specifying the formatting options
(e.g., style, currency, minimumFractionDigits).
*/

const num = 1234567.89;
// console.log(num.toLocaleString());

// Specific locale
console.log(num.toLocaleString("de-DE")); //(German formatting)

// Currency formatting
console.log(
  num.toLocaleString("en-US", { style: "currency", currency: "USD" })
);

const date = new Date();
console.log(date.toLocaleString());
console.log(
  date.toLocaleString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })
);

// console.log(date.toDateString()); //Alternative way to convert date to string
