class Car {
  start() {
    console.log("Start");
  }
  stop() {
    console.log("Stop");
  }
  setBrand(brand) {
    this.brandName = brand;
  }
  setBrandLocation(location) {
    this.LocationName = location;
  }
}

let fortuner = new Car();
fortuner.setBrand("Fortuner");
fortuner.setBrandLocation("India");

let lexus = new Car();
lexus.setBrand("Toyota"); //Now, print Lexus
