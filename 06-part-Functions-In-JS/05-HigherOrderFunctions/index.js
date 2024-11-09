//I want you to write a function that calculates the area and diameter of a circle.
//As a beginner, the first solution that comes to our mind is to write each separate function
//to calculate area or diameter.

// But have you noticed the problem with the above code? Aren't we writing almost the same
//function again and again with slightly different logic? Also, the functions we have written
//aren't reusable, are they?

//So, let's see how we can write the same code using HOFs:
const radius = [1, 2, 3];

//area of circle
const area = function (radius) {
  return Math.PI * radius * radius;
};

//diameter of circle
const diameter = function (radius) {
  return 2 * radius;
};

// a reusable function to calculate area, diameter, etc:
const calculate = function (radius, logic) {
  const output = [];
  for (let i = 0; i < radius.length; i++) {
    output.push(logic(radius[i]));
  }
  return output;
};

console.log(calculate(radius, area));
console.log(calculate(radius, diameter));

//Suppose in the future if we want to write a program to calculate the circumference of the
//circle. We can simply write the logic to calculate the circumference and pass it to the
//calculate() function.

const circumeference = function (radius) {
  return 2 * Math.PI * radius;
};

console.log(calculate(radius, circumeference));
