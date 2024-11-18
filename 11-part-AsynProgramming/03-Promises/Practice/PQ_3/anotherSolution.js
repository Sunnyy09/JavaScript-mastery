function fetchProductInfo(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productId) {
        resolve({
          productId: productId,
          name: `Product ${productId}`,
          price: (20 + productId * 10).toFixed(2),
        });
      } else {
        reject("Error in fetchProductInfo: Product ID is required.");
      }
    }, 1000);
  });
}

function fetchProductReviews(productId) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productId) {
        resolve([
          {
            reviewId: 1 + (productId - 1) * 2,
            content: `Review 1 of Product ${productId}`,
          },
          {
            reviewId: 2 + (productId - 1) * 2,
            content: `Review 2 of Product ${productId}`,
          },
        ]);
      } else {
        reject("Error in fetchProductReviews: Product ID is required.");
      }
    }, 2000);
  });
}

Promise.all([fetchProductInfo(1), fetchProductInfo(2), fetchProductInfo(3)])
  .then((products) => {
    console.log("Fetched Product data:", products);

    // Attempt to fetch reviews for each product
    return Promise.all(
      products.map((product) => {
        return fetchProductReviews(product.productId).then((reviews) => ({
          ...product,
          reviews,
        })); // Attach reviews to each product
      })
    );
  })
  .then((productsWithReviews) => {
    console.log("Products with their reviews:", productsWithReviews);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
