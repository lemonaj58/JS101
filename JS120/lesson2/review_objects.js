/*
objects are one of the 8 types in javascript

they are a collection of properties, which has a key and value
while values can be any of the JS types
properties keys are always strings!!!, if I make a key
not a string, it will be converted into a string.

PROPERTY ACCESS

when dealing with objects we are either doing one of two things
setting a property or accessing a property. we do both of these
operations through the property key by using bracket notation or dot notation

myObject['foo'] = 'bar';
myObject.foo        // 'bar'
myObject['foo']     //'bar'

dot notation is also called MEMBER ACCESS NOTATION, and computed member access
notation is for bracket notations.
the main difference between the two is that bracket notation can take the
UTF-8 compatible string as key, while member access notation requires
valid variable names. The most important thing here is member access notation
can be computed on the fly, any expressiong between the brackets gets
evaluated as a string and used to reference the property

myObject["a-key"] = "four"

myObject.a-key              // SyntaxError (a-key is not a valid variable name)
myObject["a-key"]           // "four"
myObject["a" + "-" + "key"] // "four"


PROPERTY EXISTENCE

we get undefined if we try to acess a not existed. this is the same, if we set
a property to the value of undefined

Object.keys(myObject)
myObject[undefinedKey] = undefined;

myObject.undefinedKey       //undefined
myObject.missingKey         //undefined

the way we can distinguish one from the other is the in operator
or the hasOwnProperty method

both methods check if a property exists in an object, if it does, true
is returned, and if doesnt, false is returned

"false" in myObject         //true
"true" in myObject          //false

myObject.hasOwnProperty('7'); //true

myObject.hasOwnProperty("8")  //false


if they both do the same thing, why the need for duplication?

the answer to this is because they are not exactly identical, there
is a difference. we have to remember, that we can check if it has a
property that is undefined with Object.proptotype.hasOwnProperty().

for getting arrays of the keys in the object, we can also use Object.keys
or we can get getOwnPropertyNames which also pick enumerables
*/