const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve({ userId: userId, name: `User ${userId}` });
      } else {
        reject("User Id is required");
      }
    }, 2000);
  });
};

const fetchUserPosts = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve([
          { id: 1, title: "Post 1", name: `User ${userId}` },
          { id: 2, title: "Post 2", name: `User ${userId}` },
        ]);
      } else {
        reject("User Id is required");
      }
    }, 3000);
  });
};

// fetchUserData(1)
//   .then((userData) => {
//     console.log("User data: ", userData);
//     return fetchUserPosts(userData.userId);
//   })
//   .then((userPosts) => {
//     console.log("User Posts: ", userPosts);
//   })
//   .catch((error) => {
//     console.log("Error: ", error);
//   });

//Fetch data for both userId 1 and userId 2 in parallel
Promise.all([fetchUserData(1), fetchUserData(2), fetchUserData(3)])
  .then((users) => {
    console.log("User data of Users: ", users);
    return Promise.all(users.map((user) => fetchUserPosts(user.userId)));
  })
  .then((posts) => {
    console.log("User posts of users: ", posts);
  })
  .catch((error) => {
    console.log("Error: ", error);
  });

// Fetch data and posts for each user individually
Promise.all(
  [1, 2].map((userId) => {
    return fetchUserData(userId).then((userData) => {
      // Fetch posts for this specific user
      return fetchUserPosts(userData.userId).then((userPosts) => {
        // Combine user data and their posts into a single object
        return { ...userData, posts: userPosts };
      });
    });
  })
)
  .then((usersWithPosts) => {
    console.log("Users with their posts:", usersWithPosts);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
