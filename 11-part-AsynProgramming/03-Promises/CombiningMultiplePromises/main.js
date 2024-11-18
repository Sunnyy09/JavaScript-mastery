function getData1(Id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", Id);
      resolve("success");
    }, 2000);
  });
}

function getData2(Id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", Id);
      resolve("success");
    }, 2000);
  });
}

function getData3(Id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data", Id);
      resolve("success");
    }, 2000);
  });
}

Promise.all([getData1(1), getData2(2), getData3(3)]).then((responses) => {
  for (const response of responses) {
    //   console.log(`Operation Result: ${response}`);
  }
});
