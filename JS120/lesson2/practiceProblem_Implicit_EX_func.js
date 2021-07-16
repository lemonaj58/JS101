function func() {
  return this;
}

let context = func();

console.log(context);

//this will log [object global] this is because this in func, since it
//does not have explicit(it has implicit) contexts it will point to
// the global object.

//what will the following output

let obj = {
  func: function() {
    return this;
  }
};

let context2 = obj.func();

console.log(context2);

//this will return the object obj, since this is refering to the object it
//is currently in. this is because it gets a implicit context that
//refers to the object used to invoke it.

//what will the following code output?

// eslint-disable-next-line no-undef
message = 'hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();

let foo = {
  message: 'hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();

//the result will be first, hellow from the global scope, and the second
//will be hello from the function scope!; this is because the first one adds a
//message to the global object, and the second one has a implicit context to the
//object foo, and it selects to value from message. which is explicitly given.

//what built-in-methods have we learned about that we can use to specify
// a functions
//exxecution explicitly
deliverMessage.call(foo);
deliverMessage.apply(foo);

let food = {
  a: 1,
  b:2,
};

let bar = {
  a: 'abc',
  b: 'def',
  add: function () {
    return this.a + this.b;
  },

};

let added = bar.add.call(food);
console.log(added);