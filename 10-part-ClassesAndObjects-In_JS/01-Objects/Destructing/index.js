let myObj = {
  favoriteNumber: 12,
  isDeveloper: true,
  firstName: "Sunny",
};
const favoriteNumber =
  myObj.favoriteNumber !== undefined ? myObj.favoriteNumber : 42;

const isDev = myObj.isDeveloper;
const firstName = myObj.firstName;
const lastName =
  myObj.lastName !== undefined ? myObj.lastName : "define last name.";

//Those accesses of the property values, and assignments to other identifiers,
//is generally called "manual destructuring". To use the declarative object
//destructuring syntax, it might look like this:

let myObj2 = {
  favoriteNumber: 12,
  isDeveloper: true,
  frstName: "joy",
};

const { fvrteNumber = 42 } = myObj2;
const {
  isDeveloper: isDevp,
  frstName = frstName,
  lstName: lName = "missing",
} = myObj2;

favoriteNumber; // 42
isDev; // true
firstName; // "Kyle"
lname; // "--missing--"
