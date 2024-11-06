// After getting the promisem, how promise will be used, that thing is more important
// this is done by then and catch
const getPromise = () => {
  return new Promise((resolve, reject) => {
    let success = true;
    if (success) {
      resolve("Operation succeeded");
    } else {
      reject("Operation failed");
    }
  });
};

//now let's handling the promise with then and catch.
let promise = getPromise();
promise.then((res) => {
  console.log("Promise fulfilled", res);
});

promise.catch((err) => {
  console.log("promise rejected", err);
});
