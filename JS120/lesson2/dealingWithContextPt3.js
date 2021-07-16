/* eslint-disable max-len */
//DEALING WITH CONTEXT LOSS PART 3

//in this addignment we'll see how passing functions as arguments can strip them of their intended
//context object, and see what we can do to deal with that loss.

//FUNCTION AS ARGUMENT LOSING SURROUNDING CONTEXT

function repeatThreeTimes(func) {
  func();
  func();
  func();
}

let john = {
  firstName: 'John',
  lastName: 'Doe',
  greetings: function() {
    repeatThreeTimes(function() {
      console.log('hello, ' + this.firstName + ' ' + this.lastName);
    });
  },
};

john.greetings();

let obj = {
  a: 'hello',
  b: 'world',
  foo: function() {
    let self = this;
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + self.a + ' ' + self.b);
    });
  }
};

obj.foo();

let obj2 = {
  a: 'hello',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }.bind(this));
  },
};

obj2.foo();

let obj3 = {
  a: 'hello',
  b: 'world',
  foo: function () {
    [1, 2, 3].forEach(number => {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    });
  },
};

obj3.foo();

//some methods that take function args allow an optional arg that specifies the context to use when invokeing the
//function. Array.prototype.forEach, for instance has an optional thisArg arguement for the context.
//this argument makes it easy to work around this context loss problem

let obj4 = {
  a: 'heelo',
  b: 'world',
  foo: function() {
    [1, 2, 3].forEach(function(number) {
      console.log(String(number) + ' ' + this.a + ' ' + this.b);
    }, this);
  },
};

obj4.foo();

/*
passing a function as an argument to another function strips it of its execution context which means
the function argument gets invoked with the context set to the global object. this problem
is identical to the problem with copying a method from an object and using it
as a bare function for instance the following two code snipets do the same thing
*/

Array.forEach(obj.logData);
let logData = obj.logData;
Array.forEach(logData);

//in both snippets the obj.logData method gets invoked by for each which in turned makes the context
//the global object not obj.