let input = document.getElementById("input");
let para = document.getElementById("para");

const keyEvent = (e) => {
  para.innerText = `You pressed ${e.key}`;
};

input.addEventListener("keydown", keyEvent);

//Remove the event listener
input.removeEventListener("keydown", keyEvent);
