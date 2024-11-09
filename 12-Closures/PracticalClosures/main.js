function makeSize(size) {
  return function () {
    document.body.style.fontSize = `${size}px`;
  };
}
const size20 = makeSize(20);
const size40 = makeSize(40);
const size100 = makeSize(100);

document.getElementById("size-12").onclick = size20;
document.getElementById("size-14").onclick = size40;
document.getElementById("size-16").onclick = size100;
