/*
in OOP we often refer to individual objects of a specific data type as instances of that type
for example in the dog example maxi and dexter are instances of the dog type. an instance
is just another term for the objects created using any means of defining multiple objects of
the same kind. the term object is more general while instance is more specific.

even factory functions even though we cannot tell where they came from in the program
when running code, have instances because they are created by the factory functions.


INSTANCE PROPERTIES

its convenient to describe the properties of an instance as instance properties. these properties
belong to a specific instance of some type this in our dog example, we say the name breed 
and weight properties are all instance properties of various instances of the dog type. if
we want to access the weight for maxi we must call maxi as "maxi.weight" if we try
to use the constructor then it will fail.

INSTANCE METHODS
since methods are also properties on an object we refer to methods stored directly in an object
as instance properties too. more commonly we call them instance methods just to distinguish
them from ordinary data properties

however methods usually arent stored directly in instances. instead they are usually defined
in the objects prototype object. while methods defined in the prototype object arent stored in
the instance object they still operate on individual instances. therefore we usually refer to
them as instance methods. in our dog example bark is an instance method since its defined
on dog.prototype object
"maxi.bark" // woof

any method defined in any prototype in the prototype chain of an object is considered to be
an instance method of the object.

STATIC PROPERTIES

static properties are defined and accessed directly on the constructor, not on an instance
or prototype. typically static properties belong to the type rather than to the individual
instance or prototype object

for instance dogs belong to the species "canis lupus" that property of dogs doesnt have anything
to do with individual dogs, its info that is pertinent about all dogs, therefore it makes sense
to add this property directly to the dog constructor as static property

Dog.species = "Canis Lupus";

now when our applications needs to know the species we can access it from the constructor dir
console.log(`Dogs belong to the species ${Dog.species}`)

our common use of static properties is to keep track of al of the objects created by a
constructor 
*/

function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
  dog.allDogs.push(this);
}

Dog.allDogs = [];

