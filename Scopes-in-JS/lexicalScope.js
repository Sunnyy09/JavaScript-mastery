function outerFunction() {
  let outerVar = `I'm the var from outer function`;

  function innerFunction() {
    console.log(outerVar);
  }
  innerFunction();
}
outerFunction();
