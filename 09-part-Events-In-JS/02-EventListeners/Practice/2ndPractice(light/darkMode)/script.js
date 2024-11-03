let btn = document.querySelector("button");
let body = document.querySelector("body");

let mode = "light";

btn.addEventListener("click", () => {
  if (mode === "light") {
    mode = "black";
    body.style.backgroundColor = "black";
    body.style.color = "white";
  } else {
    mode = "light";
    body.style.backgroundColor = "white";
    body.style.color = "black";
  }
});
