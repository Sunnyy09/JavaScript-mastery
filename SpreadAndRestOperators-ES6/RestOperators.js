// Function Parameters:
function sum(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
console.log(sum(1, 2, 3, 4, 5));

//Array Destructuring:
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log(first);
console.log(second);
console.log(rest);

//Object Destructuring:
const { a, ...others } = { a: 1, b: 2, c: 3 };
console.log(a);
console.log(others);

//Key Differences
// 1.Spread expands elements into individual items.
// 2.Rest collects elements into an array or object, depending on the context.
