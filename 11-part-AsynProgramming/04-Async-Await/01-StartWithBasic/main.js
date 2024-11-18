async function example() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Data fetched!"), 2000);
  });

  let result = await promise; // waits until the promise resolves
  console.log(result);
}

example();

//let's do it with our pervious getData example.
function getData(dataId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data: ", dataId);
      resolve("success");
    }, 2000);
  });
}

async function getAllData() {
  console.log("getting data1...");
  await getData(1);
  console.log("getting data2...");
  await getData(2);
  console.log("getting data3...");
  await getData(3);
  console.log("getting data4...");
  await getData(4);
}
getAllData();
