function greet(name, callback) {
  const msg = `Hello ${name}`;
  callback(msg);
}
greet("John", console.log);

function greet2(name, callback) {
  const msg = `Hi ${name}, How are you?`;
  callback(msg);
}

function displayGreet(msg) {
  console.log(msg);
}
greet2("John", displayGreet);

function greet3(name, callback) {
  const msg = `Good day ${name}`;
  callback(msg);
}
greet3("Maxi", (msg) => console.log(msg));

function obj(callback) {
  const data = { name: "John", age: 25 };
  callback(data);
}
obj((data) => console.log(data));
