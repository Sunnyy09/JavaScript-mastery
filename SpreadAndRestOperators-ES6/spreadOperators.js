//Array Copying
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Copy of arr1
console.log(arr2);

// Combining Arrays
const arrr1 = [1, 2, 3];
const arrr2 = [4, 5, 6];
const combined = [...arrr1, ...arrr2];
console.log(combined);

//Passing Elements as Arguments:
const numbers = [1, 2, 3];
const add = (a, b, c) => a + b + c;
console.log(add(...numbers));

//Spreading in Objects (ES2018+):
const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3, d: 4 };
console.log(obj2);
