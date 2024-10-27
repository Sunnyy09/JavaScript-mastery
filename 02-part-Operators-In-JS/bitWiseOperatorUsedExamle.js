// Cryptography and Hashing
// Bitwise operations play a role in various cryptographic algorithms and hash functions, where manipulating bits is fundamental to the process.

// Example: Simple Hash Function Using Bitwise XOR

function simpleHash(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0; // Convert to 32-bit integer
  }
  return hash;
}

console.log(simpleHash("Hello")); // Example output: 69609650
