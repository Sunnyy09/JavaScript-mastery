const btn = document.querySelector("button");

const theme = localStorage.getItem("theme");
if (theme === "dark") {
  document.body.classList.add("dark-theme");
}

function changeTheme() {
  const mode = document.body.classList.contains("dark-theme")
    ? "dark"
    : "light";

  if (mode === "dark") {
    // Switch to light theme
    document.body.classList.remove("dark-theme");
    localStorage.setItem("theme", "light");
  } else {
    // Switch to dark theme
    document.body.classList.add("dark-theme");
    localStorage.setItem("theme", "dark");
  }
}
btn.addEventListener("click", changeTheme);
