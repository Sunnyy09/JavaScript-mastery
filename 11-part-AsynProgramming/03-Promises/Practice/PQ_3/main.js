const fetchProductInfo = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productId) {
        resolve({
          productId: productId,
          name: `Product ${productId}`,
          price: (20 + productId * 10).toFixed(2),
        });
      } else {
        reject("Product Id is required.");
      }
    }, 2000);
  });
};

const fetchProductReviews = (productId) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (productId) {
        resolve([
          {
            reviewer: "Jane Doe",
            rating: 5,
            content: "Amazing quality, highly recommend!",
            date: "2023-11-01",
          },
          {
            reviewer: "John Smith",
            rating: 3,
            content: "Works okay, but build quality could improve.",
            date: "2023-10-30",
          },
        ]);
      } else {
        reject("Product Id is required");
      }
    }, 3000);
  });
};

//Fetch product information for multiple products and their reviews
Promise.all(
  [1, 2].map((productId) => {
    return fetchProductInfo(productId).then((productInfo) => {
      // Fetch reviews for this specific product
      return fetchProductReviews(productInfo.productId).then(
        (productReviews) => {
          // Combine product info and reviews into a single object
          return {
            ...productInfo,
            reviews: productReviews,
          };
        }
      );
    });
  })
)
  .then((productsWithReviews) => {
    console.log("Products with their reviews:", productsWithReviews);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//using async/await
const fetchProductsWithReviews = async () => {
  try {
    const products = await Promise.all([
      fetchProductInfo(1),
      fetchProductInfo(2),
    ]);
    //console.log([products]);

    const productReviews = await Promise.all(
      products.map(async (product) => {
        const reviews = await fetchProductReviews(product.productId);
        return { ...product, reviews };
      })
    );
    console.log("Products with Reviews:", productReviews);
  } catch (error) {
    console.error("Error: ", error);
  }
};
fetchProductsWithReviews();
