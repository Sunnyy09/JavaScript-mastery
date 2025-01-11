/*
Benifits :
      1.Shorter syntax
               The arrow fucntion decrease the code size to define the function.
      2. Implecit to return the value of expression from the funcion cotaining only a single sttatement. 
               Developer do not need to use the return keyword 
               Implecit Return means- we don't need to use paranthesis 
               to return something from func.
      3.Use to ease to 
               The function can be easily used as arrow fucntion


Limitations :-
1. No Arguments
2. No prototype property
3. No new keyword 
*/

//Addition
const sum = (x, y) => {
  return x + y;
};
console.log(sum(8, 8));
//OR print the value by this:
const finalValue = sum(5, 20);
// console.log(finalValue);

//Multiplication
const mul = (a, b) => {
  console.log(a * b);
};
// mul(5, 8);

//the more better way to write the arrow functions : NO RETURN Statement or NO PARANTHESES
const multilication = (a, b) => (output = a * b);
console.log(multilication(10, 10));

const printHello = (name) => {
  alert(`Hello, ${name}`);
};
// printHello("Sunny");

const user = {
  name: "John",
  price: 99,

  welcomeMessage: function () {
    console.log(` ${this.name}, Welcome to website`);
    // this => give refernce to current context(value)
    // console.log(this);
  },
};

// user.welcomeMessage();

console.log(this); /* here this refers to empty object when we works in
                      NODE environment. */

const chai = () => {
  let username = "Maxi";
  //   console.log(this.username);
};
chai();

// IIFE in arrow function
(() => {
  console.log(`DB connected!`);
})();
