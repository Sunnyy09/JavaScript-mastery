let div = document.querySelector("div");
//console.log(div);

let val = div.getAttribute("id");
console.log(val);

let para = document.querySelector("p");
console.log(para.getAttribute("class"));
let paraValue = para.getAttribute("name");
console.log(paraValue);

let h2 = document.querySelector("h2");
let setValue = h2.setAttribute("class", "heading3");
console.log(setValue);
