/* eslint-disable max-len */
//DEALING WITH CONTEXT LOSS

/*
we will discuss how functions and methods can "lose context". functions dont lose their context
execution context in reality they always have one, but it may not be the context that we expect. if you understand
how execution context is determined we shouldnt be surprised by the value of this in any given scenario. that said
how a specific context is arrived at isn't always intuitive. even when you understand the rules. the context
for any given invocation may be surprising.
*/

//METHOD COPIED FROM OBJECT

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings() {
    console.log('hello, ' + this.firstName + ' ' + this.lastName);
  },
};

john.greetings(); // context is john
//let foo = john.greetings; //strips context
//foo (); //context is now the global object.
//we could use foo.call(john) to restore the original context but supposed we we dont execute the function
//right away. or we need to pass it to another function for execution? by the time foo gets called john
//may be out of scope.

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

function foo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };

  repeatThreeTimes(john.greetings);
}
foo();


//one way to solve this problem is to change repeatThreeTimes to accept the context object as a second parameter
//then pass the context to repeatThree times when calling

function reapeatThreeTimess(func, context) {
  func.call(context);
  func.call(context);
  func.call(context);
}

function fooo() {
  let john = {
    firstName: 'John',
    lastName: 'Doe',
    greetings() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    }
  };
  reapeatThreeTimess(john.greetings, john);
}

fooo();
/*
some of javascprips built in methods such as array abstraction methods like forEach, map, and filter use this technique
such methods take a callback function as an argument and an optional thisArg context object that gets used
as the callbacks execution context.

however, it's not always possible to pass a context arguement to a function or method; you may not even be able to change the
if say, it belongs to a third-party library. besides it's generally not a good idea to pass a lot of arguments to your
functions; the more arguments a function can accept the harder the function is to use.

another approach we can use it to hard bind the methods context using bind
*/

function repThreeTimes(func) {
  func();
  func();
  func();
}
function boo() {
  let john = {
    firstName: 'john',
    lastName: 'Doe',
    greetings: function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    },
  };
  repThreeTimes(john.greetings.bind(john));

}

boo();

/*
bind has one significant advantage: once you bind a context to a functions that binding is permanent and does not need to be
repeated, if it gets called more than once. the disadvantage of bind is that it is no longer possible to determine the context
by looking at the invocation of the final function.

tiin the next part we will study how functions can lose their surrounding context loss of surrounding context is a common issue
when dealing with functions nested within object methods.
*/
console.log('part 2');
//PART 2

//in this part we will see how nested functions suffer from context loss.

let newObj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }

    bar();
  },
};

newObj.foo(); //undefined undefined

/*
we've said repeatedly a function or a methods execution context depends soley on how we invoke it, not one how
and where it's defined. here bar is invoked as a standalone function on line 9 this, its execution context is the global
object, not newObj.
*/

//Solution 1: preserve context with a variable in outerScope

/*
one common way to preserve the context in this scenario is to use something loike let self = this or let that = this
in the outer function. if you define the self or that variable these names are idiomatic and not a required name.
in the outerscope you can use that variable and whatever value it contains inside your nested inner functions.
*/

let newObject = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;
    function bar() {
      console.log(self.a + ' ' + self.b);
    }

    bar();
  }
};
newObject.foo();

//in this exe. line 5 assigns this to the local variable self. since javascript uses lexical scoping rules for variables
// bar can access self within its body; that lets us use it instead of this, to access the correct context object.

//solution 2 call function with explicit context

let objectNew = {
  a: 'hello',
  b: 'world',
  foo: function () {
    function bar() {
      console.log(this.a + ' ' + this.b);
    }
    bar.call(this);
  },
};

objectNew.foo();

//solution 3 use bind

let objNew = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = function() {
      console.log(this.a + ' ' + this.b);
    }.bind(this);
    bar();
    bar();
  }
};

objNew.foo();

//we are calling bind on the function expression here, then assigning the returned function to the bar
//variable, we can also use a function declaration instead, but we will need a extra variable
//doing let qux = bar.bind(this);

//solution 4 using arrow function

/*
arrow functions have a property that comes in very handy when dealing with context loss, they inherit
their execution context from the surrounding scope. that means that an arrow function defined inside
another function always has the same context as the outer function:
*/

let otherObj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let bar = () => {
      console.log(this.a + ' ' + this.b);
    };
    bar();
    bar();
  }
};

otherObj.foo();

/*
using arrow functions like this is similar to using bind in that you dont have to worry about
arrow functions losing their surrounding context. an arrow function, once created always has the
same context as the function that surrounded it when it was created. of all the techniques we saw
in this assignment using arrow function is the most common these days.
*/

//despite how useful arrow functions are, avoid using them as methods on an object. they dont work as expected

let ojb = {
  a: 5,

  foo: () => {
    console.log(this.a);
  },
};

ojb.foo(); // => undefined

/*
the reason that this code doesnt work is that arrow functions always get the value of this from surrounding context
in the code shown about, it cerainly looks like the surrounding cont, is obj so shouldnt this refer to obj?
despite what our logic tells us that isnt the case, it refers to the global object. the reason for this is simple
the let statement in this example is in the programs top level code. so its context is the global object
that means that this inside the object literal is also the global object so this on line 5 refers to the global object

do not use arrow functions as methods. they are not suited as such so we should not get into habit to do so.
they do not follow rules.
*/