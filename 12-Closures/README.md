
## Closure
A closure is a function that retains access to its outer scope, even when the function is executed outside that scope. Closures are created whenever a function is defined inside another function.

Key Characteristics of Closures:

1. They allow functions to have "private" variables.
2. They enable partial application of functions and currying.


Partial application and currying are functional programming techniques that allow you to break down functions into smaller, reusable functions with pre-filled arguments. These techniques are useful for writing more flexible and reusable code.

Let's dive into each concept with explanations and examples.


## 1. Partial Application
Partial application is a technique where you take a function with multiple parameters and "pre-fill" some of its arguments to create a new function with fewer parameters. This new function "remembers" the pre-filled arguments and requires only the remaining arguments to complete its operation.

Example of Partial Application:

Suppose we have a function that adds three numbers:

function addThreeNumbers(a, b, c) {
    return a + b + c;
}

With partial application, we can create a new function that pre-fills some of the arguments:

function partiallyApplyAdd(x) {
    return function(y, z) {
        return addThreeNumbers(x, y, z);
    };
}

const addFive = partiallyApplyAdd(5); 
// `x` is pre-filled with 5
console.log(addFive(3, 2)); 
// Outputs: 10, because 5 + 3 + 2 = 10

Here, addFive is a partially applied version of addThreeNumbers with the first argument (a) set to 5. Now, addFive only requires two more arguments (b and c) to complete the addition.

## Practical Use Case for Partial Application
Partial application can be useful when you have a function that needs to repeatedly use the same value for some of its arguments:

function applyDiscount(discount, price) {
    return price - price * discount;
}

const applyTenPercentDiscount = applyDiscount.bind(null, 0.1);
console.log(applyTenPercentDiscount(200)); // Outputs: 180 (10% discount on 200)
console.log(applyTenPercentDiscount(300)); // Outputs: 270 (10% discount on 300)


## 2. Currying
Currying is a technique where a function with multiple arguments is transformed into a series of nested functions, each taking a single argument. This series of functions can be invoked one by one, each returning another function, until all arguments are provided, and the final result is computed.

Example of Currying:

Using the same addThreeNumbers function:

function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(curriedAdd(1)(2)(3)); // Outputs: 6


In this example:

- curriedAdd(1) returns a function that takes b as its argument.
- curriedAdd(1)(2) returns a function that takes c as its argument.
- curriedAdd(1)(2)(3) calculates the sum, producing 6.

Each function in the chain "remembers" the argument it was provided, allowing you to pass arguments one at a time until the original function can compute the result.

## Practical Use Case for Currying
Currying can make functions more reusable in complex codebases, especially when working with functions that need some arguments to be partially filled:

function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const double = multiply(2);
const triple = multiply(3);

console.log(double(5)); 
// Outputs: 10, because 2 * 5 = 10
console.log(triple(5)); 
// Outputs: 15, because 3 * 5 = 15

In this example, multiply(2) returns a function that doubles a given number, while multiply(3) returns a function that triples it. Currying lets us create new functions by partially applying one argument at a time.

## Differences Between Partial Application and Currying
- Partial Application: Allows you to pre-fill some arguments of a function at once, creating a function that takes fewer arguments.
- Currying: Transforms a function so it takes one argument at a time, returning a new function with each argument until all arguments are provided.


## Summary

Both techniques enable flexible function reuse:

- Partial application is useful when you want to fix some arguments in advance.
- Currying breaks down a function into a series of unary (single-argument) functions, making it easy to pass arguments one by one, which can be particularly helpful in functional programming contexts.

These techniques are powerful in JavaScript, especially in conjunction with functional libraries or when working with higher-order functions.