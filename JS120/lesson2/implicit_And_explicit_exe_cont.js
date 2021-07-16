/* eslint-disable no-undef */

/* eslint-disable max-len */
//IMPLICIT And EXPLICIT EXECUTION CONTEXT
/*
execution context

earlier we met the keyword this. when talking about object methods, at this time we said this
refers to the object that contains the method. that's true but there's a bit more nuance
to how JS determines the value of this. in this assignment we'll discuss this and how JS
determines the value in a function or method call.

execution contect(context) is a concept that refers to the environment in which a function
executes in javascript. it most commonly refers to the current value of this keyword. when
we talk about execution contect of a function or method call, we're talking about the value
of this when that code executes. the contect depends on how the function or method
was invoked, not on where the function was defined.

how you invoke a function or method determines its execution for that invocation. it does not
matter how you define anything or where and when you call it. the only factor that
affects context is how you call the function or method. two different invocations of the
same function or method could have different context depending on how we make the calls.

two bascic ways to set the context when calling function or method:
explicit: the execution context that you set explicitly.
implicit: the execution context that javascript sets implicitly when your code doesnt
provide an explicit context.

setting the execution context is also called binding this, or setting the bind. a binding is
something that ties two things together. in this case it refers to the fact that call
binds this to a specific object when the function or method is called

*/

//function execution context (implicit)
//every javascript function call has an execution context. in other words the this keyword is
//avalaible to every function in the js program. every time you call the function js binds
//some object to this.

function foo() {
  console.log('this refers to: ' + this);
}
foo(); //refers to [object global]

//within a reg function call, JS sets the binding for this to global object. if you use this
//inside the function, it refers to the global object. if you use this to access or modify
//properties, you will access or modify properties on the global object

//function bar() {
//  this.foo = 'foo';
//}
//bar();
//console.log(global.foo);
/*
this makes sense since all function calls have an execution context, and since reg function
call does not provide an explicit context, JS supplies an implicit context: the global obj
we say that this execution contect is implicit since the function invocation doesnt supply
an alternative
*/

/*
strict mode and implicit context
when strict mode is enabled the implicit this is assigned to undefined instead of global obj
*/

function food() {
  console.log("this refers to: " + this);
}

food();

//JS classes and in coderpad environment uses strict environment

/*
method execution context (implicit)

We learned earlier that when you call a method that belongs to an object,
the execution context inside that method call is the object used to call the method
we call that method execution context. this is an implicit or explicit execution context
however at first glance it is easy to look at that calling object as explicitly providing
the context. method execution syntax is usally said to provide an implicit context; we're
using an explicit object to call the method. but javascript is interpreting that object
as implicit context. for this reason we usually say that methods calls provide implicit
execution context
*/

let boo = {
  far: function () {
    console.log(this);
  }
};

boo.far(); // [far: function: far]};

/*
its easy to see that the execution context inside a method call is the object used to call
the method.
be careful however the first class nature of javascript function has ramifications for
the execution context. remember that the context is derermined soley by how you call the
funtion or method. here foo.bar() is considered a method call since we call it as a method.
we use method call syntax object.method(). since javascript functions are first class
objects, bar can be called in other ways that change the context
*/

let baz = boo.far;
baz(); // object [global] {...}
/*
in this code we assign the boo.far method to the baz variable. the foo.bar property and the
baz variable now refer to the same function object. what should baz() log then? since baz
references a method of foo object we thing it should reference far. but no that is wrong
it is wrong, the execution context is determined entirely by how a function or method
is called. since we are calling baz as a standalone function its execution context is the
global object, not the foo object. making it implicit.
*/

/*
EXPLICIT FUNCTION AND METHOD EXECUTION CONTEXT

useing parenthesis after a function or method name is not the only way to invoke it. as
we have seen, when you invoke a function with parentheses JS uses global object as the
implicit context; when you invoke a method it uses the object that you used to call the
method as the implicit context.

there are however several ways to subvert this behavior. you can provide an explicit context
to any function or method, and it doesnt have to be the global object or the object that
contains the method. instead you can use any object or even null as the execution context.
for any function or method there are two main ways to do that is JS "call" and "apply"

EXPLICIT EXE CONT WITH CALL

in previous assignment we said javascript functions are object, they have properties and
methods just like any other object. one method that al javascript functions have is
the "call" method. the call method calls a function with an explicit execution contect
*/

function logNum() {
  console.log(this.num);
}

let obj = {
  num: 42
};
logNum.call(obj);

/*
we can call the logNum function and tell it to use obj as its execution context. when we use
call, in this manner, this refers to the obj object inside the logNum function. the first arg
to call provides the explicit context for the function invocation.

again we see that a functions definition has no beating on its execution context. the context
doesnt get determined until we invoke the function. in this case we're using call to invoke it
and set the context.


*/

let object = {num: 42};
object.logNum = logNum;
object.logNum(); // also 42

//these two examples are almost identical, but with call we dont have to mutate the object.
//you can also use call to explicitly set execution context on methods not just functions

let obj1 = {
  logNum() {
    console.log(this.num);
  }
};

let obj2 = {
  num : 42
};

obj1.logNum.call(obj2); // logs 42

let obj3 = {
  logNum() {
    console.log(this.num);
  }
};

let obj4 = {
  num: 42
};

obj4.logNum = obj3.logNum;
obj4.logNum(); // logs 42

//again without the call we give the object a property it didnt have before.

function sumNum(num1) {
  return this.num + num1;
}

let obj5 = {
  num: 42
};
//we want to call sumNum in such a way that it updates obj.num, fortunately the call method
//lets us pass arguments as a comma seperated list to our function

obj.num = sumNum.call(obj5, 5);
console.log(obj.num); // 47

// you can add as many arguements to the call method as function needs

let iPad = {
  name: 'ipad',
  price: 40000
};

let kindle = {
  name: 'kindle',
  price: 30000
};

function printLine(lineNumber, punctuation) {
  console.log(`${lineNumber}: ${this.name}, ${this.price / 100} dollars${punctuation}`);
}

printLine.call(iPad, 1, ';');
printLine.call(kindle, 2, '.');

// syntax for call is (someObject.someMethod.call(context, arg, arg2, arg3, ...))

//explicit execution context with apply
//the apply method works in much the same way as call the only diff is that apply uses an array
//to pass any arguemnts to function

//(someObject.someMethod.apply(context, [arg1, arg2, arg3...]));
/*
apply is handy when you have the list of arguements in an array with modern javascript (ES6
  or higher)apply isnt needed since you can use call in conjunction with spread operator
  to accomplish the same thing
*/

let args = [arg1, arg2, arg3];
someObject.someMethod.call(context, ...args);

/*
all javascript functions and methods execute within an execution context, somethims called
its this binding, how this gets cound depends entirely on how the function is invoke, you
cant tell a functions execution context by merely looking at how and where it is defined you
must examine the invocation itself.

reg functions calls use the global object as their execution context, while method calls use
the calling object as their context. you can override this behavior by setting the execution
cont explicitly with either call or apply.
the mechanics of context binding is an essential but difficult concept. most difficulties
arise from forgetting that javascript does not use lexical scoping rules to determine the
binding. if you use this inside a method of obj. you expect that this refers to obj. however,
thats not always the case. it is important to remember that the rules for this are entirely
different from variable scope, while a cariables scope is determined where you write the code
this depends on how you invoke it.
*/
