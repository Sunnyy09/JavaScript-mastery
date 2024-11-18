const fetchData = async () => {
  let response = await fetch("https://meowfacts.herokuapp.com/");
  let jsonData = await response.json();
  console.log(jsonData);
};
fetchData();

//let done it using the promise chaining.
function fetchDatabyPromise() {
  fetch("https://meowfacts.herokuapp.com/")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
    });
}
