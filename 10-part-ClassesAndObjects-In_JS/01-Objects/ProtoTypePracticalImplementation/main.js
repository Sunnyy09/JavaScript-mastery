let array = ["apple", "mango", "banana"];

//In JavaScript Array is not numbers,strings but also an internally an Object.
console.log(typeof array);

array.push("litchi");
// array.pop();
// array.forEach();
// array.length;
//We don't define this push function then it comes exaclty from like there is another
//functions and methods inside an array object that is become by Default,these are
//basically comes from this prototype object.

const employee = {
  calcTax() {
    console.log("tax rate is 10%.");
  },
  calcTax2: function () {
    console.log("tax rate is 20%");
  },
  //Both are the right ways for declare the function
};

//let's new employee's coming in the company
const karanArjun = {
  salary: 50000,
};

karanArjun.__proto__ = employee;
console.log(karanArjun);
console.log(karanArjun.calcTax());

//let's assume we have more employee's coming in the company, then for these employee's
//we don't need to create the calcTx Function, we inherit it from the emloyee Object

const ramSam = {
  salary: 80000,
};
const joyRoy = {
  salary: 40000,
};
const chinkiMinki = {
  salary: 60000,
};

ramSam.__proto__ = employee;
joyRoy.__proto__ = employee;
chinkiMinki.__proto__ = employee;

console.log(ramSam);
