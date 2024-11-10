//Math Objects

// console.log(Math.PI);
// console.log(Math.E);

const area = 8.9;

console.log(Math.floor(area));
console.log(Math.round(area));
console.log(Math.ceil(area)); // opposite to the floor
console.log(Math.trunc(area)); // take away the decimal and leave the integer

const random = Math.random();
// console.log(random);
//covert it into function

const randm = (max) => {
  return Math.floor(Math.random() * max);
};
console.log(randm(100));
