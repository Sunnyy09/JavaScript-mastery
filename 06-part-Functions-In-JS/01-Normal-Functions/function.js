function addTwo() {
  return 2 + 2;
}
console.log(addTwo());

// With parameters
function greet(name) {
  return `Hello ${name}`;
}
console.log(greet("John"));

// IIFE:- Immediately Invoked function Expression
(function chai() {
  console.log(`Chai is ready!`);
})();
// function chai() is named `IIFE`
// function() is unnamed `IIFE`

// ()() -> first definition, second execution call
/* 
Sometime there is problem duw to global scope pollution, To avoid that
global scope pollution means any variable or any decalaration in global 
scope, we used the `IIFE`.
*/
