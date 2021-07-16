/* eslint-disable max-len */
let RECTANGLE = {
  area : function() {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
};

function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.perimeter = RECTANGLE.perimeter();

}

let rect1 = new Rectangle(2, 3);

console.log(rect1.area); // NaN
console.log(rect1.perimeter); // NaN

//the context is set to rectangle, not the object. so this will creat NaN because
// the RECTANGLE object does not have a width and height defined.

let RECTANGLE2 = {
  area : function() {
    return this.width * this.height;
  },
  perimeter: function () {
    return 2 * (this.width + this.height);
  },
};

function Rectangle2(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE2.area.call(this);
  this.perimeter = RECTANGLE2.perimeter.call(this);

}

let rect2 = new Rectangle2(2, 3);

console.log(rect2.area); // NaN
console.log(rect2.perimeter); // NaN

function Circle(radius) {
  this.radius = radius;
}




Circle.prototype.area = function () {
  return Math.pow(this.radius, 2) * Math.PI;
};

let a = new Circle(3);
let b = new Circle(4);

console.log(a.area().toFixed(2));
console.log(b.area().toFixed(2));
a.hasOwnProperty('area');




function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingsword = function() {
  return this.swung;
};

console.log(ninja.swingsword()); // true



//function Ninja2() {
//  this.swung = true;
//}
//
//let ninja2 = new Ninja2();
//
//Ninja2.prototype = {
//  swingSword2: function() {
//    return this.swung;
//  },
//};

//console.log(ninja2.swingsword2());
//undefined


function Ninjas() {
  this.swung = false;
}

Ninjas.prototype.swing = function() {
  this.swung = true;
  return this;
}

let ninjaA = new Ninjas();
let ninjaB = new Ninjas();

console.log(ninjaA.swing().swung);
console.log(ninjaB.swing().swung);



let ninjaC;

{
  const Ninja1 = function() {
    this.swung = false;
  };

  ninjaC = new Ninja1();
}

let ninjaD = new ninjaC.constructor();

console.log(ninjaC.constructor === ninjaD.constructor);



function User(first, last){
  if (!(this instanceof User)) {
    return new User(first, last);
  }

  this.name = first + ' ' + last;
}

let name = 'Jane Doe';
let user1 = new User('John', 'Doe');
let user2 = User('John', 'Doe');

console.log(name);         // => Jane Doe
console.log(user1.name);   // => John Doe
console.log(user2.name);   // => John Doe