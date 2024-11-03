let btn = document.querySelector("button");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

//addEventListeners()
btn.addEventListener("click", () => {
  const color = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = color;
});

//The ways to apply the event handlers:-
//Event Handler Properties
// btn.onclick = () => {
//   const color = `rgb(${random(255)} ${random(255)} ${random(255)})`;
//   document.body.style.backgroundColor = color;
// };

//other way to create event handler property
// function bgColor() {
//   const color = `rgb(${random(255)} ${random(255)}, ${random(255)})`;
//   document.body.style.backgroundColor = color;
// }

// btn.onclick = bgColor;
