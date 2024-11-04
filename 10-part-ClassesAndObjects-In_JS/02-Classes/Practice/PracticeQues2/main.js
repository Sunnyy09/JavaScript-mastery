class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("this allows user to view the website data");
  }
}

class Admin extends User {
  constructor(name, email, Id) {
    super(name, email);
    this.Id = Id;
  }

  editData() {
    console.log("Edit Website Data");
  }
}

let adminObj = new Admin("admin", "admine@xample.com", 1100);
let newUser = new User("abc", "abc@example.com");
