//creation of promise
let promise1 = new Promise((resolve, reject) => {
  console.log("I'm a promise");
  resolve("success"); //resolved
});
console.log(typeof promise1);

let promise2 = new Promise((resolve, reject) => {
  reject("some error"); //rejected
});

let promise = new Promise((resolve, reject) => {
  let success = true;
  if (success) {
    resolve("Operation succeeded!");
  } else {
    reject("Operation failed!");
  }
});
