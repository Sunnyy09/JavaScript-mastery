class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
  viewData() {
    console.log("this allows user to view the website data");
  }
}

let student1 = new User("Sunny", "sunny@example.com");
let student2 = new User("John", "John@example.com");
