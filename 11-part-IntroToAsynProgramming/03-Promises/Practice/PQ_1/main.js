const fetchUserData = (userId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userId) {
        resolve({ userId: userId, name: "John" });
      } else {
        reject("User Id is required.");
      }
    }, 3000);
  });
};

fetchUserData(1)
  .then((data) => {
    console.log("User data: ", data);
  })
  .catch((error) => {
    console.error("Error: ", error);
  });
