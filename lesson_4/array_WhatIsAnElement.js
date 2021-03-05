//Array_WhatIsAnElement.js

/*
arrays are objects, thus all of the indexes of an array are properties
of the object. after translation to a string value.
this fact has surprising consequences: some, but not all properties 
are elements of the array. that leads to ambiguities such as
"what do we mean by an empty array?"

*/

//ARRAY KEYS

let arr = []
console.log(arr); // []
console.log(arr.length); // 0
console.log(object.keys(arr)) // []

/* it is easy to see that arr should be trated as an empty array
the array has 0 elements
*/ 
let arr2 = [2 ,4, 6];
console.log(arr) // [2, 4, 6]
console.log(arr.length); // 3
console.log(Object.keys(arr)) // ['0', '1', '2']
/*\line 2 and 3 display the values you likely expect but line 4
the keys are 0, 1, 2, but these string cales corresponds to the 
inedexes of the array.
the array indexes are numbered 0, 1, 2, but they are inturpretted in
strings
*/
let arr = [2, 4, 6]
arr[-3] = 5;
arr['foo'] = 'a';
console.log(arr);              // [ 2, 4, 6, '-3': 5, foo: 'a' ]
console.log(arr.length);       // 3
console.log(Object.keys(arr))  // [ '0', '1', '2', '-3', 'foo' ]
arr.map(x => x + 1);           // [ 3, 5, 7 ]
/*
when we log arr it shows the length is only 3, the count doesn't include
the new elements, since neither key is an unsigned integer.
if we use object.keys we would see all 5 property keys, both the real 
element indexes plus the two non-element keys.

let arr = [];
arr[-3] = 5;
arr['foo'] = 'a';

// Is arr empty?
console.log(arr.length);       // 0                Yes
console.log(Object.keys(arr))  // [ '-3', 'foo' ]  No

to determine if the array is empty we need to define what we mean
by an empty array. if we are only interested in elements then we can se
length but if we want to include non-elements then we need to use
object.keys to see if the array is empty.
there is never just one right answer here. that is a decision 
that i need to make during coding my own code.
*/


/*
SPARSE ARRAYS
another consideration with arrays is that they are "spars" the number
of elements in an array isnt necessarily the same as its length:
there can be gaps in the array. one way to creat those gaps is by
increasing the size of the length property without adding
any values to the array: 
let arr = [2, 4, 6];
arr.length = 5;
console.log(arr);              // [2, 4, 6, <2 empty items> ]
console.log(arr.length);       // 5
console.log(Object.keys(arr))  // ['0', '1', '2']

notice that the array now constains 5 elements, as shown on line 3 & 4
two elements are shown as empty items. the eompty items arr[3] and arr[4]
those elements actually do no exist. which we prove that with 
console.log(Object.keys(arr));
also if you try to access those values, they return undefined.
however that doesnt mean their value is actually undefined, the value
is not set at all.
let arr = [2, 4, 6];
arr.length = 5;
arr[4] = undefined
console.log(arr);              // [2, 4, 6, <1 empty item>, undefined ]
console.log(arr.length);       // 5
console.log(Object.keys(arr))  // ['0', '1', '2', '4']
therefore if we set the array element to undefined, it now has 
a key to it and that it is there. just because javascript tells us
it is undefined doesnt mean it is completely true.

to determine whether arr is empty on lines 5 and 6 we again need to
determine what we mean by an empty array. if we want to include the gapes,
then we can use length to determine whether the array is empty.
however if we need to ignore the gapes, then we must look at the object
keys to learn whether the array is empty, keeping in mind that some
of the object keys may not be unisigned intergers. AGAIN THERE IS NO 
RIGHT ANSWERS. I HAVE TO CONSIDER WHAT AMPTY MEANS
*/


