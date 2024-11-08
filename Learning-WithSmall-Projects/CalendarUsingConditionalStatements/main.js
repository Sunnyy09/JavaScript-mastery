const select = document.querySelector("select");
const list = document.querySelector("ul");
const h2 = document.querySelector("h2");

select.addEventListener("change", () => {
  const choice = select.value;
  createCalendar(choice);
});

function createCalendar(month) {
  let days = 31;

  // ADD CONDITIONAL HERE
  if (month === "february") {
    days = 28;
  } else if (
    month === "april" ||
    month === "june" ||
    month === "september" ||
    month === "november"
  ) {
    days = 30;
  } else {
    days = 31;
  }

  list.textContent = "";
  h2.textContent = month;
  for (let i = 1; i <= days; i++) {
    const listItem = document.createElement("li");
    listItem.textContent = i;
    list.appendChild(listItem);
  }
}

//select.value = "January";
createCalendar("January");
