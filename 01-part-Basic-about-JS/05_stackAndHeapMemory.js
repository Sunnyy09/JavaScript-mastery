// Stack is used where we have primitive data types
// Heap is used (Non-primitive)

// Stack memory gives the copy of any variable
// Heap memory gives the reference of original variable

// let's look at the example
let youtubeName = "myChannel";
let anotherName = youtubeName; // it gives the copy of original variable

anotherName = "youtubeChannel";

console.log(youtubeName);
console.log(anotherName);

let userOne = {
  email: "john@google.com",
  id: 1246,
};

let userTwo = userOne; // it gives the reference of orignal variable

userTwo.email = "john@example.com";

console.log(userOne.email); // now also change the value of original one
console.log(userTwo.email);
