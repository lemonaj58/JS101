class vehicle {
  constructor(year) {
    this.year = year;
  }
}

class Truck extends vehicle {}

class Car extends vehicle {}

let truck = new Truck(2003);
console.log(truck.year);
let car = new Car(2003);
console.log(car.year);

//start engine part 1