const score = 100;
console.log(score);
/*
by declaring a var like this new keyword then it gives the 100% grnty
that this variable is going to be a specific variable type: string, number
To check it, please log the value */
const balance = new Number(200);
console.log(balance);

console.log(balance.toString());
// console.log(balance);

console.log(balance.toFixed(2));

// The toPrecision() method in JavaScript is used to format a number to a
// specified precision (total number of significant digits). It returns
// the result as a string.
const num = 23.865;
console.log(num.toPrecision(2));
console.log(num.toPrecision(3));
console.log(num.toPrecision(5));

const price = 100000;
console.log(price.toLocaleString("en-IN"));

// ******************** Math ************************
console.log(Math); // type - Object

console.log(Math.abs(-4)); // abs change the -ve value to +ve value
console.log(Math.round(22.6));
console.log(Math.ceil(4.2)); // if 4. smthng, then it always going to 5
console.log(Math.floor(4.9)); // opposite to the ceil
console.log(Math.min(5, 6, 7, 1, 8));
console.log(Math.max(5, 6, 7, 1, 8));

console.log(Math.random()); // it always gives the value b/w 0 and 1.
console.log(Math.random() * 10); // it give the value b/w 0 and 10
// to avoid the case of having a 0 in output we write method as
console.log(Math.random() * 10 + 1);
// to avoid the decimal in output
console.log(Math.floor(Math.random() * 10) + 1);

const min = 10;
const max = 20;

// *****************************************************
console.log(Math.floor(Math.random() * (max - min + 1)) + min);
