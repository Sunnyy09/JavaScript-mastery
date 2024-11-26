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

let inviteEmp1 = invite.bind(emp1);
let inviteEmp2 = invite.bind(emp2);

inviteEmp1("Hello", "How are you?");
inviteEmp2("Hello", "How are you?");

//Whereas Bind creates a new function that will have "this" set to the first
//parameter passed to bind().
