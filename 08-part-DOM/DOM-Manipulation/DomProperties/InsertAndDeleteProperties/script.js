//Let's first Create the new element
let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>It's the way to create the new Element</i>";
console.log(newHeading);

let newBtn = document.createElement("button");
newBtn.innerText = "Click Me!";
newBtn.style.width = "10vw";
newBtn.style.height = "5vh";
newBtn.style.fontSize = "15px";
newBtn.style.fontWeight = "bold";
newBtn.style.border = "2px solid blue";
newBtn.style.borderRadius = "5px";

let btn2 = document.createElement("button");
btn2.innerText = "Placed before the element!";
btn2.style.height = "10vh";
btn2.style.fontSize = "15px";
btn2.style.fontWeight = "bold";
btn2.style.border = "2px solid blue";
btn2.style.borderRadius = "5px";

let btn3 = document.createElement("button");
btn3.innerText = "Placed after the element!";
btn3.style.height = "10vh";
btn3.style.fontSize = "15px";
btn3.style.fontWeight = "bold";
btn3.style.border = "2px solid blue";
btn3.style.borderRadius = "5px";

let div = document.querySelector("div");
div.append(newBtn);
div.prepend(newHeading);
div.before(btn2);
div.after(btn3);

let h2 = document.createElement("h2");
h2.innerHTML = "<i>Hello to all!</i>";
document.querySelector("body").prepend(h2);

//Delete Elements
h2.remove();
btn3.remove();
