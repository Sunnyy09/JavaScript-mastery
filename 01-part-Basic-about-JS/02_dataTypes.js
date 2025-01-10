"use strict"; //treat all JS code as newer version

// alert(3 + 3); we are using nodejs, not browser

// primitive data types
// number => range: 2 to power 53
// bigint => for more big number, ex: stockmarket
// string => "assembly of characters"
// boolean => true | false
// null => a standalone value and data type in JS (type = object)
// undefined => value not assigned to variable
// symbol => find uniqueness (specially used in React to identify unique components)

// Object

console.log("Data type is", typeof "john");

console.log(typeof undefined); // undefined
console.log(typeof null); // type of null is object

const id = Symbol(1234);
const anotherId = Symbol(1234);

console.log(id === anotherId); //values are same but returned values are different

// ******** Interview based code ********

// diff b/w primitive and non-primitive datatypes
// the diff based on how the data stored in memory or how we access the data

// # Primitive
// 7 Types: number, string, boolean, bigInt, null, undefined, symbol

// Reference type(non-primitive)
// Arrays, Objects, Functions

// JS is dynamically typed language
// Number score = 200
// let score = 100 // this makes JS dynamically typed language
