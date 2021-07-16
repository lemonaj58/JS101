//ESC introduced a new class keyword to javascript. 
/*
in effect classes act like syntatic sugar -- syntax designed to be easier to read/use that
makes it easier for programmers to migrate to javascript from other OOP languages. in essence
they provide a little more than a more natural and possibly familiar way to creat constructors
and prototypes

the syntax for defining classes is similar to that of defining functions. in particular both
functions and classes have two significant definition styles: declarations and exp/
*/

class Rectangle {
  constructor(length, width) {
    this.length]= length;
    this.width = width;
  }
  getArea() {
    return this.length * this.width
  }
}

let rec = new Rectangle(10, 5);
console.log(typeOf Rectangle);
console.log(rec instanceof Rectangle);
console.log(rec.constructor);
console.log(rec.getArea());

/*
class declarations begin with the class keyword folowed by the name of the class. the rest of
the syntax looks similar to the simplified (concies) method definition that you can use in
object literals. however there are no commas between the properties of the class

one significant difference is that the constructor is now a method named constructor inside our
class instead of being a standalone function. other methods have no special meaning: you can
define as many as you need. in this case we define getArea and it gets placed in rectangle.prototype

in most situations instantiating a new object
*/

/*
es6 classes provide a cleaner more compact alternative to construcots and prototypes
as with functions, they are first class citizens and come in form of declarations and expressions
functionally classes behave almost identically to constructors and prototypes they aim to
replace. classes allow for static methods by using the static modifier
*/