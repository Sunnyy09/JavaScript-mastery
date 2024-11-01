let divs = document.querySelectorAll("div");

let idx = 1;
for (const div of divs) {
  div.innerText = `new unique value ${idx}`;
  idx++;
}
