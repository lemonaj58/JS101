/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
class Car {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.started = false;
    this.start = function () {
      this.stated = true;
    };

    this.stop = function () {
      this.stated = false;
    };

  }
}

/*
defububg a constructor is nearly identical to defining a ordinary function, but there are differences for starters notice that
we gave the constructor a name that begins with a capital letter Car. capitalizing the name isnt a language req but it is covention employed by most JS
developers.

the function parameters in general match the properties associated with each 'Car' object. in this case, we supply parameters for all of the properties
except started, which receives an initial value instead. the initial value for such properties can come from anywhere.
for instance we can computer the value from other properties or retrieve value from a database.

CALLING A CONSTRUCTOR FUNCTION
the most striking features that distinguish constructors from ordinary functions are that:
we call it with new keyword
we use this to set the objects properties and methods,
we dont supply an explicit return value (we can but usually dont)

by now we know this always always refers to an object, which object does it refer to in this function,


*/

let corolla = new Car('toyota', 'Corolla', 2016);
console.log(corolla.make);
console.log(corolla.model);
console.log(corolla.year);
console.log(corolla.started);

/*
the difference between when you invoke a function with new:

it creates an entirely new object
it sets the prototype of the new object to the object that is referenced by the contructors prototype property
it sets the value of this for use inside the function to the point to the new object
it invokes the function since this refers to the new object. we use it within the function to set the objects properties and methods
finally once the function finishes running, new retrns the new object even though we dont explicitly return anything
we can now use the new object in any manner appropriate for car object.

javascript wont complain about missing new keyword

if we dont use the new keyword the constructor function wont work as intended instead it acts like an ordinary function
in particular no new objects are created so this wont point to a new object.
furthermore since functions that dont return an explicit value return undefined, calling a constructor without new also returns undefined
when you use new however the function doesnt have to return anything explicitly it returns newly created obj

we can use new on almost any JS function exept arrow functions since they use this as context surrounding this.


*/

//can also do this

let foo = {
  Car: function(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
};

let car1 = new foo.Car('Toyota', 'Camry', 2019);
console.log(car1.make);

/*
construcors that explicitly tries to return an object returns the object returned instead of a new object of the desired
type. in all other situations it returns newly created object. constructors ignore primitive return values
*/

//constructos more than likely will add up to more arguements to the constructor. for instance our car

class Car1 {
  constructor(make, model, year, color, passengers, convertible, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = false;

    this.drive = function () {
      this.started = true;
    };

    // rest of the methods
  }
}

/*
when we have this many arguements, then this looks messy and is prone to mistakes and can cause bugs that can be nasty
to diagnose. this also makes it harder to read code in the long run. one way we can go about this is manage our parameters
with passing them to our constructor with an object argmuents
*/

let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
};

let civic = new Car1(civicArgs);
//we then need to change our args in car1 (for this example to change them to car2);

class Car2 {
  constructor(args) {
    this.make = args.make;
    this.model = args.model;
    this.year = args.year;
    this.color = args.color;
    this.passengers = args.passengers;
    this.convertible = args.convertible;
    this.mileage = args.mileage;
    this.started = false;

    this.drive = function () {
      this.started = true;
    };
  }
}

class car3 {
  constructor(args) {
    Object.assign(this, args);

    this.drive = function () {
      this.started = true;
    };

  }
}

/*
one drawback  of the Object.assign approach is that the args object may contain properties that the car object doesnt need
those additional properties will nevertheless get added to the car object. those properties may jsut be excess baggages for
the object to carry around, but they also may cause trouble depending on what youre doing

DETERMINING AN OBJECTS TYPE

many OO languages like java or C++ have strong notion of object types, in most such languages it is easy to determine the objects type
such as car, or cat, JS however treats objects and their types in a looser more dynamic way
you cant determine the specific type of arbitrary JS object. they are dynamic structures with a type of object

no matter what properties and methods they have. however we can get some useful information about an object if we know which constructore created it

we can use instanceof
*/

if (civic instanceof Car) {
  console.log("IT's a car!");
} else {
  console.log("IT's not a car.");
}

/*
one effect that we didnt mention when talking about the new operator is that the object it returns contains
some info that ties it back to the constructor that created the object. the instance of operator used that information
to determine what constructor created the object.

NEW AND IMPLLICIT EX CONTEXT

we can add a constructor call with new as a third way to provide an implicit execution context.
*/

//PRACTICE PROBLEMS

//what naming convection seperates constructor function from other functions?

//ANSWER: the capitalization in front of the nna,e ex. Car instead of car.

//what happens if you run the following code and why

class Lizard {
  constructor() {
    this.scamper = function () {
      console.log("I'm scampering!");
    };
  }
}

let lizzy = Lizard();
//lizzy.scamper(); //undefined because we dont use the new operator, and the Lizard function returns undefined since their inst an explicit return value

let lizzy1 = new Lizard();
console.log(lizzy1.scamper);


