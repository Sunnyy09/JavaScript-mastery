function localScopeExample() {
  let localVar = "I'm a local Variable.";
  console.log(localVar);
}
localScopeExample();
console.log(localVar); //Uncaught ReferenceError: localVar is not defined
