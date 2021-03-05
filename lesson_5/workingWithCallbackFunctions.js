/*working with callback functions

we have looked at a veriety of funamental concepts related to working with collections,
such as iterating, selecting, transforming, sorting, or using callbacks. 

this assignment will help with understanding these processes work fully. this goal of this
excersize is to fully understand the proccesses

functions as first-class value and higher order functions!

the term first class vale is used to describe values that can be passed to
funtion as arguements or returned by those functions. in javascript you can pass values
of a function around we'll do this first example witha for loop. */

let numbers = [1, 2, 3, 4, 5];
let transormedNumbers = [];

for (let index = 0; index < numbers.length; index += 1) {
  let currentNum = numbers[index];
  let squaredNum = currentNum * currentNum;

  transormedNumbers.push(squaredNum);

}

console.log(transormedNumbers);  // => [ 1, 4, 9, 16, 25 ]

// same transformation with map.

let transformed = number.map(currentNum => currentNum * currentNum)

console.log(transformed) // => [1, 4, 9, 16, 25]

/* doing a for loop, is a imperitive loop because you tell it what to do for each
iteration on the process, we tell what the number is for the index, then tell it to multiply
with eachother for squared.

the declaritive style of programming is possible only because we can treat functions as
values. the map method takes a fnction as an argument and call it for each elemtent
to cal map. higher order functions are functions that return other functions. in javascript
these are called callback functions or just callbacks. */

[[1, 2], [3, 4]].forEach(arr => console.log(arr[0]));
// 1
// 3
// => undefined

/* wer are using forEach for a console.log function. this means it is a higher order function.
we can pass another function to the callback.

each callback forEach is ultimetly undefind. so that is what we get when we get a returned
value. */

[[1, 2], [3, 4]].map(arr => console.log(arr[0]));
// 1
// 3
// => [undefined, undefined]

/* this example is simalar to the last one but with map. it returns 2 undefined in an 
aaray together, not just undefined. 
*/

[[1, 2], [3, 4]].map(arr => {
  console.log(arr[0]);
  return arr[0];
});

// 1
// 3
//[1, 3]

/*   ACTION      PERFORMED     SIDE EFECTS       RETURNED VALUES    VALUED USED?

methoed call      the outerArray  none            [1, 3] new array    no


callback ex       each subArray     none          1, 3                yes by map


element access    each subArray     none          each element at 0     yes by console.log

method call       element at index 0  represents int    undefined       no


//18
//7
//12
//[undefined, undefined, undefined]

ACTION      PERFORMED             SIDE EFECTS           RETURNED VALUES       VALUED USED

methodCalled  the outerArray      none                  undefined               yes for map

methodCalled    the array         none                   none                   yes, 

callback ex     the numbers in array  non               every num < 5           yes for console.log

if method

console.log       numbers that fit if method    none      undefined             no
*/

[{ a: 'ant', b: 'elephant' }, { c: 'cat', d: 'dog' }].filter(object => {
  return Object.keys(object).every(key => object[key][0] === key);
});

// => [ { c: 'cat', d: 'dog' } ]
/* 
ACTION      PERFORMED             SIDE EFECTS           RETURNED VALUES       VALUED USED
declaring   the whole object      none                  none                   the object keys
object

methodCalled  
filter

method  every key in obj      none                      every key and value
every                                                   that has same value at 0    value used for return

function

return    the values found in function    non           [ { c: 'cat', d: 'dog' } ]  no


if we worked with some. it would return all the values, instead of the values that we
wanted. it would then turn every value into truthy
*/

[[8, 13, 27], ['apple', 'banana', 'cantaloupe']].map(arr => {
  return arr.filter(item => {
    if (typeof item === 'number') {    // if it's a number
      return item > 13;
    } else {
      return item.length < 6;
    }
  });
});
// => [ [ 27 ], [ 'apple' ] ]

/* we want to go for the map, to return a valued array, since forEach returns undefined
we wouldnt have any useful return value since forEach always returns undefined. */

[[[1], [2], [3], [4]], [['a'], ['b'], ['c']]].map(element1 => {
  return element1.forEach(element2 => {
    return element2.filter(element3 => {
      return element3.length > 0;
    });
  });
});

// => [ undefined, undefined ]

/* we can almost ignore all the other callbacks after forEach because the callBack of
forEach is always undefined. it doesnt matter that all 6 of the iterations pass through
the map function, and the filter method. forEach will wlays return undefined for its value.
*/

[[[1, 2], [3, 4]], [5, 6]].map(arr => {
  return arr.map(elem => {
    if (typeof elem === 'number') { // it's a number
      return elem + 1;
    } else {                  // it's an array
      return elem.map(number => number + 1);
    }
  });
});

/*

map the array.
return elements of the array
if the 'elem' is a number, return that element + 1
if the element is not a number, so an array
map the subArray
each number + 1


DO NOT MUTATE THE ARRAY YOU ARE ITERATING THROUGH.
this includes selection and tranformation as well as any other iterative method.

example on what not to do
*/ 
let arr = [1, 2];

arr.map(subArr => arr.pop()); // => [ 2, <1 empty item> ]

/*
Map is supposed to return as many elements as the array it was called upon. this example
you get an array with one element.  */

let arr = [[[1], [2], [3], [4]], [['a'], ['b'], ['c']]];

arr.map(subArr => subArr.pop()); // [ [ 4 ], [ 'c' ] ]

arr; // [ [ [ 1 ], [ 2 ], [ 3 ] ], [ [ 'a' ], [ 'b' ] ] ]

/*
this is a distructive action and mutates each subArr. therefor changing th contents of arr
we have mutated the original array in the middle of process which is potentially confusing
as the reader is very likely to miss the sideEfect caused. there is always a more clearer
way of achieving desired results without having to resort to mutating collection while
iterating though it at the same time.

mutations during iteration will get confusing, even if its subArrays. aviod using them
while uding iteration functions. dont make life more dificult by making this an example
because we already saw that sometimes, without mutating the function, made it hard
to make out what was happening to the function. 

If, at first, the code appears opaque or complex, take the time to break it down step by step.
If necessary, use a systematic approach, such as the tabular method outlined in this assignment.
Figure out what is happening at each step, paying particular attention to:
The return value
Side effects
Pay attention to the return values of all statements in your code, especially where implicit return values are used.
Make sure you have a clear understanding of the underlying concepts such as data structures, loops, iterative methods, and the callback functions passed to them.
Be clear about the implementation of the iterative method(s) being used, particularly:
What values are passed to the callback?
What does the method do with the return value of the callback?
If you're unclear about how a method works, a good first step is to refer to the MDN Docs.


