// eslint-disable-next-line no-unused-vars
let person = {
  name: 'john',
  age: 33
};

//OOP is more than just creating a datapoint for one person, OOP is about
//combining data and behavior into an object.

/*
Example, a car video games,

Car attributes
  make: BMW
  Fuel level: 50%
  Engine status: turned Off

car functionality/behavior
  start engine
  stop engine
  refuel
  drive


*/

let raceCar = {
  make: 'BMW',
  fuelLevel: 0.5,
  engineOn: false,

  startEngine() {
    this.engineOn = true;
  },

  drive() {
    this.fuelLevel -= 0.1;
  },

  stopEngine() {
    this.engineOn = false;
  },

  refuel(percent) {
    if ((this.fuelLevel + (percent / 100)) <= 1) {
      this.fuelLevel += (percent / 100);
    } else {
      this.fuelLevel = 1;
    }
  }
};

// can use dot notation to call a method inside of the object, example:
raceCar.refuel(30);
console.log(raceCar);
/*
javascript wont stop you from changing the fueLevel property directly insted
of calling the refuel method, thats a limitation of Javascript. the OO style
strongly discourages changing property values directly. instead it encourages
using methods to interface with the object. if we only use the method of refuel
then we will never exceed the number 1, but if we directly access and change
the fuelLevel we may violate the restriction

propper syntax when writing functions in objects is (functionName()) no need
for the : or writing function.

The this keyword

we use the this keyword in case we put the object in a function or change
the variable name. that way if the object was called another thing in a
different function, we would still be able to tell the program that
we are refering to the same object.


*/