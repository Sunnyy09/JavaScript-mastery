const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

// fetchPromise.then((response) => {
//   const jsonPromise = response.json();
//   jsonPromise.then((data) => {
//     console.log(data[0].name);
//     jsonPromise.then((data) => {
//       console.log(data[1].name);
//       jsonPromise.then((data) => {
//         console.log(data[2].name);
//       });
//     });
//   });
// });

//better way to handle this.

// fetchPromise
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data[0].name);
//   });

// fetchPromise
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data[1].name);
//   });

//Catching errors
fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[5].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
