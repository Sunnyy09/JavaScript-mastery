const parentDom = document.getElementById("parent");

const test = parentDom.getElementsByClassName("test");
// a list of matching elements, *not* the element itself
console.log(test);

// the first element, as we wanted
const target = parentDom.getElementsByClassName("test")[0];
console.log(target);

let MultipleEle = document.getElementsByClassName("test2");
console.log(MultipleEle);

//By TagName
let para = document.getElementsByTagName("p");
console.log(para);
