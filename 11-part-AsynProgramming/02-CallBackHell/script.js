function doStep1(input) {
  return input + 1;
}

function doStep2(input) {
  return input + 2;
}

function doStep3(input) {
  return input + 3;
}

function doOperation() {
  let val = 0;
  val = doStep1(val);
  val = doStep2(val);
  val = doStep3(val);
  console.log(`Result: ${val}`);
}
doOperation();

//Here we have a single operation that's split into three steps, where each step depends on the
//last step. In our example, the first step adds 1 to the input, the second adds 2, and the
//third adds 3. Starting with an input of 0, the end result is 6 (0 + 1 + 2 + 3).
//As a synchronous program, this is very straightforward. But what if we implemented the steps using callbacks?

function doStep1(input, callback) {
  const result = input + 1;
  callback(result);
}

function doStep2(input, callback) {
  const result = input + 2;
  callback(result);
}

function doStep3(input, callback) {
  const result = input + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}
doOperation();

//Because we have to call callbacks inside callbacks, we get a deeply nested doOperation()
//function, which is much harder to read and debug. This is sometimes called "callback hell" or
//the "pyramid of doom" (because the indentation looks like a pyramid on its side).
