async function fetchData() {
  //How await Works Internally
  //When you use await, it pauses the execution of the async function until the promise resolves:
  //   1.If the promise resolves, the result is returned.
  //   2.If the promise is rejected, an exception is thrown, which you can catch with try...catch.

  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let jsonData = await data.json();
    console.log(jsonData);
  } catch (error) {
    console.error("Error fetching data: ", error);
  }
}
fetchData();
