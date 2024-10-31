//First-Child
let div = document.getElementById("main");
console.log(div.firstChild.nodeName);

const p01 = document.getElementById("para-01");
console.log(p01.firstChild.nodeName);
//Any whitespace will create a #text node, from a single space to multiple spaces, returns,
//tabs, and so on.

const para = document.getElementById("para");
console.log(para.firstChild.nodeName);
//There is no white space after element.
//Now the console will show 'SPAN'.

//To avoid the issue with node.firstChild returning #text or #comment nodes, Element.
//firstElementChild can be used to return only the first element node.
console.log(p01.firstElementChild);

//last-Child
let innerDiv = document.getElementById("inner");
console.log(innerDiv.lastChild.nodeName);

console.log(innerDiv.lastElementChild); //Now the console will show 'ELEMENT'.

//let's print all the childern of an element
console.log(div.children);
console.log(innerDiv.children);
