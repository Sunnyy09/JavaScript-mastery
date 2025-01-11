// there are two ways to declare objects - literal, constructor

// singleton: it means when we made object from constructor, then signleton
// object made.

// Constructor method: singleton alse made here
// Object.create();

// Object literals
const user = {
  name: "John",
  "full Name": "John Doe",
  age: 16,
  location: "US",
  email: "john@google.com",
  isLoggedIn: false,
};

// console.log(user.email);

// better way to access the objects
// console.log(user["email"]);

// we can't access "full Name" by dot operator
// console.log(user.full Name);
console.log(user["full Name"]);

// to declare symbol in object
const mySymbol = Symbol("abc");

// Interview based question
const symbolObj = {
  [mySymbol]: "symbolVal",
};
// console.log(symbolObj[mySymbol]);

// to not modify the values in Objects, we used freeze()
// Object.freeze(user);
user.age = 20;
// console.log(user.age); // nothing changes in value

user.greeting = function () {
  console.log(`Hello user, ${this.name}`);
};
// console.log(user.greeting());

// *********** using singleton ***************
const facebookUser = new Object();

facebookUser.id = "01abcd";
facebookUser.name = "John Doe";
facebookUser.isLogged = false;

// console.log(facebookUser);

const instaUser = {
  email: "john@insta.com",
  fullname: {
    userfullName: {
      firstname: "John",
      lastname: "Doe",
    },
  },
};
// console.log(instaUser.fullname.userfullName);

// Optional Chaining
console.log(instaUser?.fullname?.userfullName?.firstname);

const obj1 = {
  1: "a",
  2: "b",
};
const obj2 = {
  3: "c",
  4: "d",
};

// const mergeObj = Object.assign({}, obj1, obj2);

// const mergeObj = { ...obj1, ...obj2 };
// console.log(mergeObj);

// when values comes from database
const users = [
  { id: 1, email: "a@google,com" },
  { id: 2, email: "b@google.com" },
];

// for access all the keys in object, datatypes: ARRAY 'IMPORTANT'
// console.log(Object.keys(facebookUser));
// console.log(Object.values(facebookUser));

console.log(Object.entries(facebookUser)); // provide key:value in the ARRAY

// To access the one value through looping on array
console.log(facebookUser.hasOwnProperty("isLoggedIn"));

// Object de-structure and JSON API
const course = {
  coursename: "JS",
  price: "$999",
  courseInstructor: "youtuber",
};

// course.courseInstruuctor
// const { courseInstructor } = course;
// **************** or ****************
const { courseInstructor: instructor } = course;
console.log(`Course Instructor: ${instructor}`);
