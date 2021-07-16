/*
constructors and prototypes let us mimic classes in Javascript until recently
the language had nothing that you could reasonably call a class, that made it hard for devs familiar with class-based
langueages to switch to javaScript. one can even argue that constructors and prototypes are part of the language soley to make
it easier for devs to switch to javascript.
an essential part of the OO paradigm is the concept of inheritance. in most OOP languages inheritance means something a bit different from
the way we use it in conjunction with JavaScript. that can make Javascript inheritance confusing if youve seen inheritance in 
other languages. 
*/

//function Rectangle(length, width) {
//  this.length = length;
//  this.width = width;
//}
//
//Rectangle.prototype.getArea = function() {
//  return this.length * this.width;
//};
//
//Rectangle.prototype.toString = function() {
//  return `[Rectangle ${this.length} x ${this.width}]`
//}
//
//let rect = new Rectangle(10, 5);
//console.log(rect.getArea());
//console.log(rect.toString());
//
//function Square(size) {
//  this.length = size;
//  this.width = size;
//}
//Square.prototype = Object.create(Rectangle.prototype);
//Square.prototype.constructor = Square;
//Square.prototype.getArea = function() {
//  return this.length * width;
//};
//
//Square.prototype.ToString = function() {
//  return `[Square ${this.length} x ${this.width}]`;
//};

//let sqr = new Square(5);
//sqr.getArea();
//sqr.toString();
//console.log(sqr.constructor === Rectangle);

// The reason we reassign the constructor property is that there are some situations where the value of the constructor property
//is very important so for help of our future selves we change the value to square, instead of leaving it at Rectangle.

function Rectangle(length, width) {
  this.length = length;
  this.width = width;
}

Rectangle.prototype.getArea = function() {
  return this.length * this.width;
};

Rectangle.prototype.toString = function() {
  return `[Rectangle ${this.length} x ${this.width}]`
};

function Square(size) {
  Rectangle.call(this, size, size);
}

Square.prototype = Object.create(rectangle.prototype);
square.const
//Square.prototype.constructor = Square;

Square.prototype.toString = function() {
  return `[Square ${this.length} x ${this.width}]`
};

/*
Prototypal Inheritance vs psuedo-clasical inheritance

as used in JS the term inheritance is an overloaded word. it describes two related but distinct
forms of inheritance. prototypal and pseudo-classical

the simpler form of inheritance is prototypal inheritance or prototypal delegation we
sometime this form of inheritance is called OBJECT INHERITANCE' an objects internal 
[[prototype]] property points to another object and the object can delegate methods
calls to that other object. we've seen plenty of examples of prototypal inheritance in 
earlier assignments
*/

let humanPrototype = {
  myName() {return this.name},
  myAge() {return this.age},
};

let personPrototype = Object.create(hyumanPrototype);
personPrototype.toString = function() {
  return `My name is ${this.myName()} and I'm ${this.myAge()} years old.`;
};

let will = Object.create(personPrototype);
will.name = 'William';
will.age = 28;
will.toString();

/*
here the will object inherits from the person
*/