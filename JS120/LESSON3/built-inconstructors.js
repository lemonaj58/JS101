/*
javascript comes with a variety of built in constructors and prototypes that let you instantiate
useful objects. these constructors work like constructors for other objects. theyre used with
the new keyword to create objects. in this assignment we will discuss some of javascripts built
in constructors, their prototypes and how we extend them

THE ARRAY CONSTRRUCTOR
simples way to creat an array is brackets
let numbers = [1, 2, 3, 4];
we usually create arrays like this but we can also use
let emptyArray = new Array();

let numbers = new Array(1, 2, 3, 4);
numbers // [1, 2, 3, 4];

when Arrayis given one single arguement of a number, then the result is different. 
newArray(3) // [<3 empty items>];

you think of [<3 empty items>] as an array that has three empty slots. in effect its an
empty array that happens to contain spaces for three items. alternatively its a non
empty array that contains no values, since number for of constructor does not take
negative or non integers as arguements.

the single-number constructor together with Array.prototype.fill lets us create arrays with
a value that is repeated in every element

new Array(3).fill('*'); // ['*', '*', '*']

the fill method takes any value as an arguements and replaces all elements of the array
with that value. note that the parentheses around new array(3) arent strictly necessary;
however you should use them for clarity they show your intent to run fill on the new array.

you may recall that the new keyword provides some useful behavior when creating new objects.
in many cases, omitting the keyword can lead to unexpected and errors but Array lets
yo omit the keyword

some of the other Javascript constructors exhibit this behavior. in fact the
ECMAScript specification document requires it in specific cases however that doesnt
mean that you should omit new routinely in your code. you might be using a constructor that
doesnt implement this behavior which can sometimes lead to different behavior when you omit
new.


Array.prototype
let numbers = [1, 2, 3]
Object.getPrototypeOf(numbers) === Array.prototype
true

this relationship implies that every array can use the methods defined in array.prototype in
particular that means that all arrays can use methods like forEach map includes as well
as all the other methods defined on array.prototype


*/