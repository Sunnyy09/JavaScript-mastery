function blockScopeExample() {
  if (true) {
    let blockVar = "I'm a block Variable.";
    console.log(blockVar);
  }
  //   console.log(blockVar); //Output: Error
}
blockScopeExample();
// console.log(blockVar); // Output: Error
