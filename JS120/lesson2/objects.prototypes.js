/* eslint-disable id-length */
//OBJECT PROTOTYPES
/*
for creating objects we have automation, which last time
we used factorty functions.
an object facroty serves two porpuses,
1. it returns objects that represent data of a specific type.
2. it reuses code
*/

function createCar(make, model, year) {
  return {
    make,
    model,
    year,
    started: false,

    start() {
      this.started = true;
    },

    stop() {
      this.started = false;
    }

  };

}

let car1 = createCar('toyota', 'Corolla', 2016);
let car2 = createCar('Honda', 'Civic',2017);
console.log(car1);
console.log(car2);

/*
factory functions give us the ability to create objects of the same type by
merely calling a function. entities that are common to multiple objects such as
start and stop methods, get declared in one place. on the other hand
arguements are passed to the factory function to distinguish one object from the
otherlike make model year.
as useful as factory functions are there are other way to extract code into one
so that multiple objects can use it. in javascript we rely heavily on
prototypes to accomplish this.

PROTOTYPES

in javascript, objects can inherit-properties and behavior from other objects
if another object for instance has a language property and a speck behavior,
a new obbject can access and use language and speak without
explicityly defining them in the new object.

more specifically, javascript objectsuse something called protorypal inheritance
 the object that you inherit properties and methods from is called prototype
the function object.create creats a new object that inherits properties from
 an existing object.it takes an object that is called the prototype
 object as an arguement and returns a new object that inheritsproperties
fromthe prototypeobject, thenewly created objecthas access to all the properties
 and methods that the prototype object provides
*/

let a = {
  foo: 1,
  bar:2,
};

let b = Object.create(a);
console.log(b.foo);
console.log(b);
//an unusual aspect of this relationship is that the inheriting object (b)
//doesnt receive any properties or methods of its own. instead it delegates
//property and method access to its prototype

/*
if we did console.log(b.hasOwnProperty('foo')); we would get false.
javascript objects use an internal [[prototype]] property to keep track of their
prototype. when you create an object with Object.create, the new objects
 [[prototype]] property gets assigned to the prototype object

 note that [[prototype]] is an internal property: you cannot access it directly
 in your code, however you can access and replace its value with object
 functions, for instance object.getPrototypeOf takes an object as an arguement
 and returns its prototype object:
*/
console.log(Object.getPrototypeOf(b));

//we cant also do this
let c = {
  foo: 1,
  bar: 2,
};

let d = {};
Object.setPrototypeOf(d, c);
console.log(d.foo);
console.log(d);
console.log(Object.getPrototypeOf(d));
// if we change the prototype in any way, then the objects
//prototype are observable in the inheriting object as well.

a.foo = 42;
console.log(b.foo);

a.baz = 12;
console.log(b.baz);

//the default prototype
/*
as mentioned above all JS objects have access to the hasOwnProperty method.
where does javascript get that method?
when we create a new object, we dont have to add our own hasOwnProperty method
instead, javascript obtains this method from the objects prototype. all JS
objects inherit from a prototype for instace
let a = {};
Object.getPrototypeOf(a);
//{}

passing an empty object to Object.getPrototypeOf returns a default prototype
object. that object is the prototype for all objects.
created by using the object literal syntax (e.g {a:2}). the default prototype is
the prototype of the object constructor Object.prototype.
 Object.prototype provides the default prototype.

 iterationg over objects with prototypes

 now is an exellent time to revisit the iteration section from objects
 chapter of our introduction to programming with js book

 for/in and objext.keys deal with enumerable properties which is
 merelt a way of talkingabout properties you can iterate over,
 not all properties are enumerable. in particular most properties and method
 of built in types are not. usually any properties or method you
 define on an object are enumerable, you can check with
 Object.prototype.propertyIsEnumerable method.
*/

let arr = [1, 2, 3];

console.log(arr.propertyIsEnumerable('length')); //false
console.log(arr.propertyIsEnumerable('2')); //true
console.log(arr.propertyIsEnumerable('forEach')); //false
console.log(Array.prototype.propertyIsEnumerable('forEach')); //false

function Foo() {
  this.bar = 'qux';
}

Foo.prototype.baz = function() {};
let foo = new Foo();
console.log(foo.propertyIsEnumerable('bar')); //true
console.log(Object.getPrototypeOf(foo).propertyIsEnumerable('baz')); //true

//earlier we waid that all javascript objects could inherit from another object
//using the prototype model, since the prototype of an object is itself an
//object, the prototype can also have a prototype from which it inherits

//ex.
let alpha = {
  foo: 1
};

let beta = {
  bar: 2
};

let ceta = {
  baz: 3
};

Object.setPrototypeOf(ceta, beta);
Object.setPrototypeOf(beta, alpha);

console.log(c.bar); // => 2
console.log(c.foo); // => 1

//prototypechain looks like =>
//c --> b--> a --> Object.prototype --> null

/*
THE __PROTO__ PREOPERTY

many older javascript programs use a property name __proto__ which
is pronounced dunder proto, insted of object.setPrototypeOf and
Object.getPrototypeOf. "dunder" is shortend version of double underscore
which alludes to the double underscored at the begining and end of name.
the __proto__ property is deprecated, non-hidden version of the
[[prototype]] property. as a rule, you should only se __proto__ if you need
to suppoert very old browsers or old versions of node, or as a convenient
shortcut with temp code or debugging operations. you may run into
code that uses it so we need to be aware of it.

PROPERTY LOOK UP IN PROTOTYPE CHAIN

when you access a property on an object, javascript first looks for an "own"
property with that name on the object.
if the object does not define the specified property Javascript looks for it
in the object prototype if not found, it looks in the prototype prototype. this
process coninues until it finds the property or reaches OBJECT.prototype but
if it also doesnt define the property it will return undefined

the implication here is when two object in the same prototype chain have a
property with the same name the object closer to calling take presedence
*/

let ab = {
  foo: 1
};

let ba = {
  foo: 2,
};
let da = {};
Object.setPrototypeOf(ba, ab);
console.log(ab.foo);
console.log(ba.foo);
console.log(da.foo);

let ca = Object.create(ba);
console.log(ca.foo);
console.log(ca);
ca.foo = 42;
console.log(ca.foo);
console.log(b.foo);
console.log(ca.hasOwnProperty('foo'));
console.log(ca);
/*
this discussion of inheriting properties from other object applies to
methods as well. methods in javascript are merely properties that refer
to functions, thus when we talk aboout object properties, we also mean methods.

methods on object prototype

the Object.prototype object is at the tope of all javascript prototype chains
thus its methods are avaliable from any javascript object, provided you dont
ecplicitly use null as the prototype. 3 usefull methods are
object.prototype.toString(); returns a string representation of the object
object.prototype.isPrototypeOf.obj which determines where the object is part
of another object prototype chain
Object.prototype.hasOwenProperty(prop) determines whether the object contains
the property

OBJECT WITHOUT PROTOTYPES
several times we've said that javascript objects all have prototype object
and that prototype chain ends with object.prototype. in reality there is a way
to create objects that dont have a prototype, hence do not have a prototype
chain. that ends with object.prototype. however as you;re well aware javascript
has surprises

it turns out that you can creat an object that doesnt have prototype by setting
the prototype to null. this technique is a bit unusualt and not seen very
ofter. however it lets you create a clean, or bare object for use as
general key.value datastructure. the bare object doesnt carry around a bunch
of excess baggage in the form of unneded properties and prototypes.

*/

let z = Object.create(null);
console.log(Object.getPrototypeOf(z));
z[a] = 1;
let x = {
  z: 1
};
console.log(Object(x).hasOwnProperty('z'));
console.log(Object(z).hasOwnProperty('a')); //does not work

/*
you cannot use Object methods like Object.prototype.hasOwnProperty also
the prototype chain ends with null, not Object.prototype.

for the most part we can assume JS object have Object.prototype at the top
of their inheritance chain. you can also assume that all object can use the
usual selection of Object properties
however be wary of situations where bare abjects may be in use, if you have one
i must remember that usal object properties and methods dont exist and we see
code like this
*/

//if (Object.getPrototypeOf(abj) && Object.isPrototypeOf(car)){
//obj has a non-null prototype AND
//obj is in the prototype chain of car
//};

/*
if you dont first check whether obj has a non null prototype, this code will
raise an exeption if obj has a null prototype.
library developers ofter write code to check for bare object edge cases
since their code will see many different environments, they need
to be ready for such unusual objects.

by default object literals inherit from object.prototype.
when you access a property on an object javascript looks for the property first
in object, then its prototype chain. all the way up to Object.prototype.
*/