// Handling Multiple Asynchronous Operations
// You can use await multiple times in an async function. For instance, if you need to make two
//network requests one after another:

async function getData() {
  let user = await fetch("https://jsonplaceholder.typicode.com/users/1");
  let userData = await user.json();

  let post = await fetch(
    `https://jsonplaceholder.typicode.com/posts?userId=${userData.id}`
  );
  let postData = await post.json();

  console.log(userData, postData);
}
getData();

//Note: In this example, the second await does not start until the first one finishes,
//which may cause unnecessary delays if the two operations could be done in parallel.
