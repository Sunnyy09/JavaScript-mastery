let para = document.querySelector("p");
console.log(para.getAttribute("class"));

//para.setAttribute("class", "newClass");

//Solve this problem by using class-list
//to ADD the new class eith old class
para.classList.add("newClass", "paraClass");

//to REMOVE the class from element
para.classList.remove("para");
