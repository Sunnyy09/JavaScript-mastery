//Running Asynchronous Code in Parallel
//To run multiple asynchronous tasks in parallel, use Promise.all():

async function fetchMultipleData() {
  const [userResponse, postsResponse] = await Promise.all([
    fetch("https://jsonplaceholder.typicode.com/users/1"),
    fetch("https://jsonplaceholder.typicode.com/posts?userId=1"),
  ]);

  const user = await userResponse.json();
  const posts = await postsResponse.json();

  console.log(user, posts);
}

fetchMultipleData();
