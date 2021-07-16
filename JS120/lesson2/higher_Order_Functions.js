/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable max-len */
/*
a higher order function is a function that has at least one of the following
it takes a function as an arguement, or it returns a function.

functions that accept functions as arguements

forEach, map, filter, reduce are all higher order functions that take functions as arguements
*/
function mapNumsToSquares(num) {
  let squaredArray = [];

  for (let index = 0; index < num.length; index += 1) {
    squaredArray.push(num[index] * num[index]);
  }

  return squaredArray;
}

//this approach is valid and we will see this type of code in languages that
//dont have first-class functions or lambdas. but squaring numbers is more than likely
//not what we need to be mapping

function uppercaseString(strings) {
  let capString = [];

  for (let index = 0; index < strings.length; index += 1) {
    let current = strings[index];
    capString.push(current.toUpperCase());
  }
  return capString;
}

/*
these two functions have the same basic concept. have a new array, iterate through
the array, while proforming some type of transormation on the iteration of array
and push to the new array. then return the result.
instead of having to do that all the time map does it for us automatically, to just
make it so we decide what we are doing to the iterations of it. this makes it much more
powerful and versatile.
*/

arrayOfNums.map(num => num * num);
arrayOfStrings(string => string.toUpperCase());

//FUNCTIONS THAT RETURN A FUNCTION

/*
we can thing of a function that returns another function as a function factory: it creats and
returns a new function typically the fnction factory uses the arguments you pass to it to
determine the specific job performed by the function it returns.
*/

function greet(lang) {
  switch (lang) {
    case 'en':
      console.log('hello!');
      break;
    case 'es':
      console.log('hola');
      break;
    case 'fr':
      console.log('bonjour!');
  }
}
//this implementation workds, but if we're using a particaular lang over and over, we need to
//lang string every time, it would be usefull if we only had to provide the lan once
//instead of a greet function lets implement greeter factory

// eslint-disable-next-line consistent-return
function createGreeter(lang) {
  switch (lang) {
    case 'en':
      return () => console.log('Hello!');
    case 'es':
      return () => console.log('hola!');
    case 'fr':
      return () => console.log('bonjour');
  }
}
let greeterEs = createGreeter('es');
greeterEs();

let greeterEn = createGreeter('en');
greeterEn();

//higher order functions let programmers use powerful and flecible abstractions.