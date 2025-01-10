// let score = 33;

// console.log(typeof score);
// console.log(typeof (score));

// let score = "33";
// let valueInNumber = Number(score);
// console.log(typeof valueInNumber);

let score = "33ab";
let valueInNumber = Number(score);
console.log(typeof valueInNumber); //type is number
console.log(valueInNumber); // but value is "NaN"

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0

let isLoggedIn = 1;
let boolIsLoggedIn = Boolean(isLoggedIn);
console.log(boolIsLoggedIn); //true

// 1 => true; 0 => false
// "" = false; "abc" => true

let num = 33;
let isString = String(num);
console.log(typeof isString);
// console.log(isString);

// *************** Operations *****************

let value = 3;
let negValue = -value;
// console.log("Negative Value: ", negValue);

let str1 = "Hello";
let str2 = " John Doe";
let str3 = str1 + str2;
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
console.log("1" + 2 + 2); // this treats rest of all no. as string
console.log(2 + 2 + "1"); // after evaluation the string add to output
// ToPrimitive(input, [,prefferedType])

// *** not preferable code ***
// console.log(+true);
// console.log(+"");

let gameCounter = 100;
// gameCounter++;
++gameCounter;
console.log(gameCounter);

// prefix and postfix
// let x = 3;
// let y = x++;
// console.log(`x:${x}, y:${y}`);

// let x = 3;
// let y = ++x;
// console.log(`x:${x}, y:${y}`);
