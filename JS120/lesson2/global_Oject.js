/* eslint-disable max-len */
//THE GLOBAL OBJECT

/*
Javascript creates a global object when it starts running. it serves as the implicit
exxecution context for function invocations.

in node.js the global object named global; in the browser it's window object. you can investigate
this in node repl or browsers console.
the global object is avaliable everywhere in your program and houses important global
properties. in the previous course, we talked about global values such as infinity and nan
and global functions such as isNaN and parseInt. all these entities are properties of the
global object! in your console you can look at the global object to examine the properties
in coding we are going to use Number.isNaN

*/

Number.isNaN('i am not a number'); //false - this is a correct value
isNaN('i am not a number'); //true -string gets coerced to nan

// you can add properties to global object at anytime.

/*
global.foo = 1;
golabal.foo // 1

//in browser
window.foo = 1;
window.foo;

foo = 'bar';
foo;
this is a way to add a variable to the global object as a property
whenever we try to access a variable for which there are not local or glabal variables
with the variables name, javascript looks at the global object and looks for a property
with that name. in this example since there are not local or global variable names
with foo js looks in the global object and finds the foo property. as a result line 2
is identicle to global.foo; it returns the value of the property foo from global obj

*/