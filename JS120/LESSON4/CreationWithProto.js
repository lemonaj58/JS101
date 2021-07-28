/* eslint-disable max-len */
//OLOO PATTERN

/*
as discussed factory functions arent the only way to creat objects in bult.
another pattern that we can use is OLOO patter, (Objects linking to other objects) it uses prototypes
and involves extracting properties common to all objects of the same type eg car obj
to a prototype object. all objects of the same type inherit type then inherit that from prototype


*/

let carPrototype = {
  start: function() {
    this.started = true;
  },
  stop: function() {
    this.started = false;
  }
};

let car1 = Object.create(carPrototype);
car1.make = 'toyota';
car1.model = 2016;

car1.start();

/*
calling start and stop on the car1 object changes the state of car1 even though those methods
dont belong to car1. that shouldnt come as surprise since we're using car1 as the execution
context for the calls. when we call these methods this is set to car1 so the methods change
the started property in car1

one way we can automate the make model year properties are the init method
*/

let carPrototype1 = {
  start: function() {
    this.started = true;
  },
  stop: function() {
    this.started = false;
  },

  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    return this;
  }
};

let car2 = Object.create(carPrototype1).init('toyota', 'corolla', 2016);
console.log(car2);

/*
you can use both factory functions and the OLOO pattern to bulk creat objects of the same
type, though the result is an object creation mechanism in both cases. the OLOO pattern has
one significant advantage over factory functions and that is memory effiency. since all
objects created with OLOO pattern inherit methods from a single prototype object
the object that inherit from that prototype object share the same methods. factory functions
on the other hand create copies of all the methods for each new object. that can have a
significant performance impact especially on smaller devices with limited memory
*/

