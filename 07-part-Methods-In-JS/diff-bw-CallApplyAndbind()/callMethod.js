let emp1 = {
  firstName: "John",
  lastName: "Rodson",
};

let emp2 = {
  firstName: "Max",
  lastName: "Baily",
};

function invite(greet1, greet2) {
  console.log(
    greet1 + " " + this.firstName + " " + this.lastName + " , " + greet2
  );
}

invite.call(emp1, "Hello", "How are you ?");
invite.call(emp2, "Hello", "How are you ?");
