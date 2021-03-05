//arrayMethods.js

/* using loops like while and for to iterate over a collection is 
repetitive. javascript provides an easier way to work with arrays through
the use of built-in methods. in this assignment we'll look specifically
at the forEachm filter, and map methods.

unfortunately, other collections and collection-like types like obj and
strings dont have these methods. with objects, however we can use the 
object.keys, object.values, and object.entries function to convert the
object to an array and then take advantage of the built-in array methods

Array.prototype.forEach

so far we've learned that the most effecting option for iterating over
a collection is to use a loop like this

*/

let numbers = [1, 2, 3];
let counter = 0;

while (counter < numbers.length) {
  console.log(numbers[counter]);
  counter ++;
}

/*
iterating over an array is such a common task that javascript provides 
a method to do just that. the Array.prototype.forEach method is 
functionally equivalent to a for or a while loop and represents a simpler 
way to accomplish the same task
*/

[1, 2, 3].forEach(number => {
  console.log(number);
});

number => {
  console.log(number)
};

[1, 2, 3].forEach((number, idx) => {
  console.log(`${idx}: ${number}`);
});

/*
forEach with strings

javascript donesnt have a forEach method. however, we can leverage the
string.prototype.split method to process every character ina  string with
forEach
*/

'abcd'.split('').forEach(char => {
  console.log(char);
});

/* objects in javascript dont have the forEach method as well but they
do have object.keys, Object.values, and Object.entries functions
to convert objects into arrays for us easily, then as well with string
we can use the for each functions to iterate over them.
*/

let produce = {
  apple: 'fruit',
  carrot: 'vegetable',
  pear: 'fruit',
  broccoli: 'vegetable'
}
let produceValues = Object.values(produce);

produce.forEach(value => {
  console.log(value);
});

let produceKeyValues = Object.defineProperties(produce);

produceKeyValues.forEach(keyValue => {
  let [key, value] = keyValue;

  console.log(`${key} is a ${value}`)
})

/* Object.entries return all they key-value pairs of an object.
on line 9 (,et [key, value] = keyValue)
this is called array destructuring assignment. in which we can assign
elements of the array to multiple variables by wrapping the variable
names in brackets. the first element gets assigned toe the first
variable, the second element gets assigned to the second variable, 
this can work with arrays with more than just 2 different elements
through the value.

the sole purpose for a forEach function is just the iteration, not
what the return value is


Array.prototype.filter

in arrays we usually want to select or filter certain elements from an
array so they we can work on them separately from the other elements.
doing so helps reduce code complexity, which in turn makes code easier to 
write and redces the likelihood of bugs
*/

let numbers = [1, 2, 3];
let oddNumbers = []

for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] % 2 === 1) {
    oddNumbers.push(numbers[index]);
  }
}

//instead of writing all of that we can substitute this with...

let oddnumbers = [1, 2, 3].filter(num => {
  return num % 2 === 1;
});

// this returns the same thing as the example above but a lot simpler
//and a lot less of builerplate code.

/* the filter function examines the return value of the callback on each
iteration. it determines the truthiness of the return value. the one
things that filter cares about converning the callbacks return value
is whether it is truthy or falsy, note it is NOT TRUE AND FALSE

remember Javascript treats these six values falsy: undefined, null NAN
0, '', and false.

all other values are truthy values. 
*/

//PREFERED METHOD FOR ONE LINE CRITERION
[1, 2, 3].filter(num => num % 2 === 1);


let produce = {
  apple: 'fruit',
  carrot: 'vegetable',
  pear: 'fruit',
  broccoli: 'vegetable'
}

let produceKeyValues = Object.defineProperties(produce)
let onlyVegtablesArr = produceKeyValues.filter(keyvalues => {
  let [key, values] = keyValues;
  return value === 'vegetable'
})//onlyVegetables; // => [ [ 'carrot', 'Vegetable' ], [ 'broccoli', 'Vegetable' ] ]

let onlyVegetables = {}
onlyVegetablesArr.forEach(keyValues => {
  let [key, value] = keyValue;
    onlyVegetables[key] = value;
});
//onlyVegetables; // => {carrot: 'Vegetable', broccoli: 'Vegetable'}


// we can simplify that expresstion like so, without using filter at all
let produce = {
  apple: 'Fruit',
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

let produceKeyValues = Object.entries(produce);
let onlyVegetables = {};

produceKeyValues.forEach(keyValue => {
  let [key, value] = keyValue;
  if (value === 'Vegetable') {
    onlyVegetables[key] = value;
  }
});

// we can also filter with map the main difference between the other two
//is map uses return value of the callback to perform transformation 
//instead of selection

[1, 2, 3].map(num => num *2);

//in this example the callback is the function product of num and 2
[1, 2, 3].map(num => num % 2 === 1); //[ true, false, true ]

let str = "Whats's up, Doc?";
str.split('')
  .filter(char => 'aeiou'.includes(char.toLowerCase()))
  .join('')
  // => 'auo'
  // we can do this funtion with map as well

  let str = "What's up, Doc";
  str.split('')
    .map(char => char + Char)
    .join('');

/*
Method	Action	Considers the return value of the callback?	Returns a new array from the method?	Length of the returned array
forEach	Iteration	No	No, it returns undefined	N/A
filter	Selection/Filtering	Yes, its truthiness	Yes	Length of original or less
map	Transformation	Yes	Yes	Length of original
*/

/*
Array.prototype.some
[1, 2, 3].some(num => num > 2)
true

> [1, 2, 3].some(num => num > 3)
false
If the callback function returns a truthy value for any element in the 
collection, then the some method will return true
*/
let animals = { a: 'ant', b: 'bear', c: 'cat' };
Object.values(animals).some(animalName => animalName.length > 4);
// => false

Object.values(animals).some(animalName => animalName.length > 3);
// => true

/*
Array.prototype.every

this method works similary to some, but it checks all the values in
the array instead of just one of the value

> [1, 2, 3].every(num => num > 2)
false

> [3, 4, 5].every(num => num > 2)
true

let animals = { a: 'ant', b: 'bear', c: 'cat' };
Object.values(animals).every(animalName => animalName.length > 2);
//  => true
*/

/*
Array.prototype.find

find method also takes a callback function as an arguement and returns the
first element for which the callback funtion returns a truthy value:
> [2, 1, 4, 3, 5].find(num => num > 2)
4

in this example we are looking for the first number that is greater than two,
this value is 4 and then it returns it, since it is the first number in 
sequence it returns 4 even though that 3, and 5 also fit in the criteria
*/

/*
Array.prototype.finIndex
findIndex is similar to find but it returns the index of the number
of the index that you find the criteria in
> [2, 1, 4, 3, 5].findIndex(num => num > 2)
2
since the number 4 satisfies the condition, 4 is at index 2 which is returned
the difference between find and findIndex is that if nothing returns 
truthy it returns a value of -1
*/

/* 
Array.prototype.revers

the name of reverse method is self-explanatory: it reverses the elements of array
it is called on
> [1, 2, 5, 7, 3].reverse()
[ 3, 7, 5, 2, 1 ]
the main thing to consider when yo use the reverse function
is that it mutates the original function when you se it.

let nums = [1, 2, 3];
let reversedNums = nums.slice().reverse();

reversedNums; // => [3, 2, 1]
nums;         // => [1, 2, 3]
*/

/*
Array.prototype.includes

unlike the methods we've described so far includes doesnt take a
callback arguement. it just takes an argument that it looks for

> [2, 1, 3].includes(1)
true

> [2, 1, 3].includes(5)
false

in an array of it has an object inside of it, it will not check the 
existance in it. it will return false

let obj = {c: 'foo'};
let arr = ['a', 'b', obj];

arr.includes(obj); // => true
this is a way to get around the incldes and an object inside an array
this way that it is the same object and so it includes that object

let obj = {a: 'apple', b: 'banana', c: 'custard'};
Object.keys(obj).includes('c'); // => true
Object.keys(obj).includes('f'); // => false

another way you can do this is hadOwnProperty()
this is the same as includes in an array
*/
