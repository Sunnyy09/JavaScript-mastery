const sumVal1 = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(value + 5);
      resolve("success");
    }, 3000);
  });
};
const sumVal2 = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(value + 10);
      resolve("success");
    }, 3000);
  });
};
const sumVal3 = (value) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(value + 10);
      resolve("success");
    }, 3000);
  });
};

// console.log("fetching result1...");
// let result1 = sumVal1(5);
// result1.then((res) => {
//   console.log("fetching result2...");
//   let result2 = sumVal2(10);
//   result2.then((res) => {
//     console.log("fetching result3...");
//     let result3 = sumVal3(20);
//     result3.then((res) => {});
//   });
// });
//This is called the promises chaining.

//let make more readable this code.
console.log("fetching result1...");
sumVal1(5).then((res) => {
  console.log("fetching result2...");
  sumVal2(10).then((res) => {
    console.log("fetching result3...");
    sumVal3(20);
  });
});
