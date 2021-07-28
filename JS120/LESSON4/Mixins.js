/* eslint-disable max-len */
/*
code reuse with mixins
one problem with inheritance in javapscript is that objects can inherit from only one object
and classes can extend to only one other class, ultimetely those two statements mean the
same thing, an object can have only one prototype object. we'll call this single inheritance

this restriction can be limiting sometimes making modeling some problems domains challenging
for instance suppose we have Pet class from which several other specific classes inherit
the inheritance relationship might look like.

JavaScript does not support multiple inheritance. so a class can only inherit from one class

mixIns

enter javascript mix ins, a pattern that adds methods and properties from one object to another
its not delegation with prototypes. the mix in pattern merely copies the properties of one
object to another with Object.assign, or something similar to the technique. we've already
seen a mix in at work with our first OO implementation of RPS with createPlayer, createHuman
and createComputer.
for no we are concerned with objects that can in principle belong to multiple and distince
types for instance, in the bird world there are many bitds that can swim and fly but also
some that cant do one or the other

bird, swim, fly
stork, no, yes
parrot, no, yes
penguin, yes, no
ostrich, yes, no
duck, yes, yes
goose, yes, yes
*/

const Swimmable = {
  swim() {}
};

const Flyable = {
  fly() {}
};

class Stork {}
Object.assign(Stork.prototype, Flyable);

class Parrot {}
Object.assign(Parrot.prototype, Flyable);

class Penguin {}
Object.assign(Penguin.prototype, Swimmable);

class Ostrich {}
Object.assign(Ostrich.prototype, Swimmable);

class Duck {}
Object.assign(Duck.prototype, Swimmable, Flyable);

class Goose {}
Object.assign(Goose.prototype, Swimmable, Flyable);

/*
with this code, it is easier to make seperate classes like this, since we cannot extend class
from a bird, then we need to make two constants and add the constants with each instance,
this will in the end save the program from recreating the same function, and save memory
when running programs.
*/