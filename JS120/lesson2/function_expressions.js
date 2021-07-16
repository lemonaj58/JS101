/* eslint-disable no-unused-vars */
/* eslint-disable max-len */
//Function declarations vs function expressions
//function delcaration
prompt('how are you today');
function prompt(message) {
  console.log(`=> ${message}`);
}
/*
this is function declaration, with this we can initiate the function
before it is declared because JS does two passes through the code. a
preporation stage and a running stage. the first pass it does something
called hoisting. Js moves all the function to the top of the program or
the top of the function in order, so this first code snippet, we are
moveing the function above prompt essentially. hoisting does not just
happen to function declarations

*/
//function expression
let greetings = function() {
  console.log('hi');
};
greetings();
//the difference between the two snippets is that
//we cannot call greetings before it gets initialized. it will
//give a throw error.

//function expression to a variable or OBJ property, pass to another function
// or return it to a calling function

//ex
//let prompt = function() { //assign to a variable

//};

[1, 2, 3].forEach(function(elem) { //pass to another function
  console.log(elem);
});

function makeIncrementer(increment) {
  return function(value) { //return to called
    return value + increment;
  };
}

/*
we can define a function expression without giving them a name, you
may argue that prompt is the name of the function we defined on line 1,
but thats not the case, instead we've assined a unnamed function to the
prompt variable. such unnamed functions are called anonymous functions
map and for each are usually anonymous functions
*/
let squaredNums = [1, 2, 3].map(function(num) {
  return num * num;
});

//function expressions do not have to be anonymous we can name if we choose.

let squardNum = [1, 2, 3].map(function square(num) {
  return num * num;
});

/*
the main advantage of naming a function expression occurs when the function
throws an error. if the function has a name, the stack trace uses that name to
help determine where the error occured. without the name JS just reports anon
the function names given to a function expression is not visible in the scopre that
inclueds the function expression.

ARROW FUNCTIONS
theres no declaration syntax for arrow functions. arrow functions ALWAYS are expressions
we often pass them around or asign them to variables or properties. also arrow functions
are always ANON. there is no way to defined them. arow functions are either
immediately invoked, assigned to variables, or properties, or passed as arguments and
return values

FIRST CLASS FUNCTIONS
this refers to the fact that functions is JS are values that we can assign to
variables and properties, and pass them to other functions or return them from another.
*/

function say(words) {
  console.log(words);
}
let speak = say;
speak('Howdy!');
//this we assign the variable speak after declaring the function say, now we use
//speak as the handle. but we can still use say because they refer to the same function

function logNum(num) {
  console.log('number: ' + num);
}

[1, 2, 3].forEach(logNum);
//this we use logNum as an arguemnt in the forEach method, which will be called on 3 times.
//we do not need the parenthese because it expects a function as an arguement.

[1, 2, 3].forEach(function lognum(num) {
  console.log('number: ' + num);
});
//this code is identical to the last code snippet the only difference is we
//are using function expression instead of a variable.

//which brings us to an arrow function
[1, 2, 3].forEach(num => {
  console.log('number: ' + num);
});

//the only difference with the arrow function is that it is anonymous

//TYPE OF FUNCTION VALUE
/*
since functions are first-class values in JS and all value in js have a type. functions
must also have a type. typeof will return functions. and remember functions are objects

*/