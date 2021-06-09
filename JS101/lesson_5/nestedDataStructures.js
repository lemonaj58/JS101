//nestedDataStructures.js

/*
its not uncommon for collections to contain other collections. 
let's explore a few examples which illustrate how to work with nested
data structure

REFERENCING COLLECTION ELEMENTS

let arr = [[1, 3], [2]];
each array has there own index, even though they are inside their
own array

to get the information of the whole array, you can access that
by doing it just like any other array EXE. arr[0]; // [1, 3]

to access just a certain elements inside the certain array,
you have to acces which array you want inside your arr variable
and they you call the element by the index number 

EXE arr[0][1]; // [3]

UPDATING COLLECTION ELEMENTS

javascript gives us a very convenient way to update array elements

exeample,
let arr = [[1, 3], [2,]];
arr[1] = 'hi there';
arr; // = [[1, 3], 'hi there']

this is a distructive action and permanently changed the second element

likewise we can also modify a value in a nested array
arr[0][1] = 5

which will change the 3 into a 5

adding an additional element is similar to the examples, instead we

let arr = [[1], [2]];

arr[0].push(3);

arr; // = [[1, 3], [2]]


we can also do thisto add another array instead of just pushing a 
number you can do

arr[0].push([3]);
arr; // = [[1, [3]], [2]]


OTHER NESTED STRUCTURES
arrays are not the only data structures that can be nested, you
can also have an object nested inside an array

exe.
[{a: 'ant}, {b: 'bear'}]

to add a key/value pair to the first innber object it is simalr 
to an array, you have to add the key first in while referencing 
the first element, then add the value.

let arr = [{a: 'ant}, {b: 'bear'}]

arr[0]['c'] 'cat';
arr[0].d = 'dog'
arr; // [{ a: 'ant', c: 'cat', d: 'dog' }, { b: 'bear' }]

as we know arrays can contain any javascript value, regardless of type
arrays can hold multiple different object at a time and also nested
data structures.
example

let arr = [['a', ['b']], { b: 'bear', c: 'cat'}, 'cab']
arr[0];       // => [ 'a', [ 'b' ] ]
arr[0][1][0]; // => 'b'
arr[1];       // => { b: 'bear', c: 'cat' }
arr[1]['b'];  // => 'bear'
arr[1].b[1];  // => 'e'
arr[2][1];    // => 'a'

VARIABLE REFERENCE FOR NESTED COLLECTIONS
a common confusing aspect when working with nested collections 
occurs when variables reference inner collections directly

let a = [1, 3];
let b = [2];
let arr = [a, b];
arr // = [[1, 3], [2]];

if we affect the a variable doing
a[1] = 5;
then the array will be 
arr// = [[1, 5], [2]];

also the same thing as doing what we did in the above example, 
we can modify the array arr to make a change as well example.

arr[0][1] = 8
arr; // = [[1, 8,], [2]]
a; // = [1, 8]

SHALLOW COPY

sometimes, you may find that you need to sopy an
entire collection. or saving it before performing modifications
to it. there are different ways to do this, and this section we 
will discuss about how to shallow copy object and arrays

CHALLOW COPY ARRAYS

one way to copy an array is to use slice method without arguements
let arr = ['a', 'b', 'c'];
let copyOfArr = arr.slice();
copyOfArr = ['a', 'b', 'c']

a more modern way is to use the ES6 spread syntax which uses ...

exe.
let arr = 'a', 'b', 'c'];
let copyOfArr = [...arr];
copyOfArr; // = ['a', 'b', 'c']

this creats a shallow copy of an array, only the top level of the 
array is copied. but when the arrays contain objects, those
objects are shared not copied. this has major ramifcation for 
nested collections;

let arr = [['a'], ['b'], ['c']];
let copyOfArr = arr.slice();

copyOfArr[1].push('d');

arr;       // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]
copyOfArr; // => [ [ 'a' ], [ 'b', 'd' ], [ 'c' ] ]

when there is an object inside an array, you are now sharing that
array, rather than the two being seperate. you are affecting the
object, not the collection.

the critical thing to be wary of is what level you are working
at with the array. whether it is the outer array or the objext, or 
at the level of an object within that??

SHALLOW COPYING OBJECTS
let obj1 = { a: 'foo' };
let obj2 = { b: 'bar' };

object.assign(obj1, obj2);
obj1; // = {a: 'foo', b: 'bar'}
as we can see Object.assign copies over the properties from obj2
into obj1 and returns obj1. we can creat a copy of an object by
leaving the first arguement empty.

EXE.
let obj = {a: 'foo', b: 'bar'};
let copyOfObj = Object.assign({}, obj);

copyOfObj; // = {a: 'foo', b: 'bar' }

note that Object.assign only creats a shallow copy of the object
that is, changes to nested objects within the copy will reflect
in the original just like an array. so this is essantially
the same as using slice, or ES6 notation on an array

DEEP COPY
Javascript doesnt have an explicit method or function for deep 
copying objects, but there is an indirect way to do it. however
it only works with nested arrays and plain objects. OBJECTS that
have methods and complex objects like dates or custom objects 
cannot be deep-cloned with this technique. most use cases of deep
copying objects involve only plain objects and arrays 
so this technique is useful to learn

let arr = [{ b: 'foo' }, ['bar']]
let serialized Arr = JSON.stringify(arr);
let deepCopiedArr = JSON.parse(serializedArr);

the serializedArr serializes any objects including arrays, which
have primitiv
*/