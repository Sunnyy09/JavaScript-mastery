function getData(Id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data...", Id);
      resolve("success");
    }, 2000);
  });
}

//let's write more batter way to this code, that's we called actual promise chaining.
getData(1)
  .then((res) => {
    return getData(2);
  })
  .then((res) => {
    return getData(3);
  })
  .then((res) => {
    return getData(4);
  })
  .then((res) => {
    console.log(res);
  });
