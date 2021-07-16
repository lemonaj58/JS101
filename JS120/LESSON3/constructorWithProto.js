function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;

  this.bark = function() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  };
}

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

console.log(maxi.bark()); // 'Woof!'

/*
each of these dog objects when created reveive the name, breed and weigth properties as well as the bark
method. the properties have values that differ between objects, but the bark method remains the same in all.
however every time we create a new dog object, we must create a new bark method. se we can add it to the objects
we can verify that each object has it own bark method with hasOwnProperty
*/

maxi.hasOwnProperty('bark');
dexter.hasOwnProperty('bark');
biggie.hasOwnProperty('bark');

maxi.bark === dexter.bark; //false
maxi.bark === biggie.bark // false
dexter.bark === biggie.bark //false

/*
this makes us make a new copy of the method every time we creat an object. for small programs
with few objects like this one it may not be a problem. however
when you start getting into hundreds or thousands or even millions of objects. the multiple function objects can be
hard on resources especially on devices with little memory.

METHOS DELEGATION TO PROTOTYPES

prototypes are especially useful for sharing methods as all objects of pericular type share the same prototype object. furthermore delegation
means that we can share methods by putting them in a prototype object. 
*/



function Dog1(name, breed, weight) {
  Object.setPrototypeOf(this, Dog1.myPrototype);
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}
Dog1.myPrototype = {
  bark() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  }
}


let maxi1 = new Dog1('Maxi', 'German Shepherd', 32);
let dexter1 = new Dog1('Dexter', 'Rottweiler', 50);
let biggie1 = new Dog1('Biggie', 'Whippet', 9);

maxi.bark();

console.log(maxi1.hasOwnProperty('bark')); //false
console.log(dexter1.hasOwnProperty('bark')); //calse
console.log(biggie1.hasOwnProperty('bark')); //false

console.log(Object.getPrototypeOf(maxi1).bark === Dog1.myPrototype.bark);// true
console.log(Object.getPrototypeOf(dexter1).bark === Dog1.myPrototype.bark); // true
console.log(Object.getPrototypeOf(biggie1).bark === Dog1.myPrototype.bark); // true

//the constructor prototype property

/*
with this prototype method, we dont waste memory with multiple copies of methods. 
the constructors special is a characteristic of all function objects in javascript. they have a prototype property
that we call the function prototype to stringuish them from prototypes used when creating ordinary object
the code we showed in the pervious section emulates something that javascript bundles with contructors. 
*/

console.log(Dog1.prototype);

/*
when we call a function foo with the new keywordss JS sets the new objects prototype to the currenct value
of foo's prototype property. that is the constructor creats an object that inherits from the constructor functions
prototype. (foo.prototype). since inheritance in javascript uses prototype we can also say that the constructor
fcreats an object whose prototype references foo.prototype.

if bar is an object, then the object which bar inherits is the object prototype. by default constructor functions
set the prototype for the objects they create to the constructors prototype object

the constructors prototype object also called the function prototype is an object that the constructor uses the object
prototype for the objects it creats. in other words each object in its prototype property; that is if the constructors name is foo,
then foo.prototype references the constructors prototype object.

*/

//instead  of above we can do this

function Dog3(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog3.prototype.bark = function() {
  console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
};


let wiggles = new Dog3('Wiggles', 'golden retriever', 55);
wiggles.bark();
let max = new Dog3('max', 'jack russel', 9);
max.bark();

wiggles.bark = function() {
  console.log('WOOF!');
}
wiggles.bark()

console.log(Dog3.prototype.constructor);