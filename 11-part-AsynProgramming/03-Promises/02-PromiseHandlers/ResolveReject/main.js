//before using the handler

function getData1(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      //console.log("data: ", dataId);
      if (getNextData) {
        getNextData();
      }
    }, 5000);
    //Promise returned
    //Promise {<pending>}[[Prototype]]:
    //Promise[[PromiseState]]: "pending"
    //[[PromiseResult]]: undefined
  });
}
let result1 = getData1(123);

//After using the handler
function getData2(dataId, getNextData) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("data: ", dataId);
      resolve("success");
      if (getNextData) {
        getNextData();
      }
    }, 5000);
  });
}
let result2 = getData2(123);
//Promise {<fulfilled>: 'success'}
//[[Prototype]]: Promise
//[[PromiseState]]: "fulfilled"
//[[PromiseResult]]: "success"
