/* eslint-disable max-len */
//HARDF BINDING FUNCTIONS WITH CONTEXT

//JS has a third way to specify the context, (call, apply being first two)
//bind method on function objects. bind workds a little differently.

function sumnum(num1) {
  return this.num + num1;
}

let obj = {
  num: 42
};

let sumNum2 = sumnum.bind(obj);
console.log(sumNum2(5));

/*
in this example we dont call the function immediatly as we do when using call and
apply, instead bind returns a new function. the function is PERMENETLY boound to the object
passed as binds first arguement. you can then pass that method around and call it wouthout
worrying about losing its context since it is permenently bound to the provided obj

*/

let object = {
  a: 'hello',
  b: 'world',
  foo: function() {
    return this.a + ' ' + this.b;
  },
};

let bar = object.foo;
console.log(bar()); //undefined undefined

let baz = object.foo.bind(object);
console.log(baz());

// an interesting and important property of permenently bound functions is that you cannot
//change their execution context, even if you use call or apply or call bind a second time

let object2 = {
  a: 'hi',
  b: 'there',
};

console.log(baz.call(object2));

//bind implementations looks something like this

// eslint-disable-next-line no-extend-native
Function.prototype.bind = function (...args) {
  let fn = this;
  let context = args.shift();
  return function () {
    return fn.apply(context, args);
  };
};

/*
binds context is the original function, it returns a new function that calls the original
function with context supplied to bind as its first argument. this code also shows why binding
makes permanent changes -- no matter what you do to the returned func, you cant change the
value of context.

a bind statement does not change the original statement, it just returns a new function.
the function that you use the bind method on does not change the original function

bind still follows the same rule from call and apply, it is still how it is called, not where
or the definition.
*/

let greetings = {
  morning: 'good morning, ',
  afternoon: 'good afternoon, ',
  evening: 'good evening, ',

  greeting: function(name) {
    let currentHour = (new Date()).getHours();

    if (currentHour < 12) {
      console.log(this.morning + name);
    } else if (currentHour < 18) {
      console.log(this.afternoon + name);
    } else {
      console.log(this.evening + name);
    }
  }
};

let spanishWords = {
  morning: 'buenos dias, ',
  afternoon: 'buenas tardes, ',
  evening: 'buena noches, ',
};

let spanishGreeter = greetings.greeting.bind(spanishWords);
spanishGreeter('jose');
spanishGreeter('juan');

/*
some final notes are that bind pernamently bound to the context provided by bind, this
still follows the same rules that apply with call and apply, but bind returns a new
function that uses whatever context you want to use with that function. even if we
use apply and call or even bind a second time it will not work or change the execution
context of bind.
*/
