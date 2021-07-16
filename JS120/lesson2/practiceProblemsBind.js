/* eslint-disable max-len */
//what method can we use to bind a function permanently to a particular execution cont?

//bind method is how we do this to a function.

//what will the following code log to the console?

let obj = {
  message: 'Javascript',
};

function foo() {
  console.log(this.message);
}

foo.bind(obj);
//nothing because we do not call the function. bind does not invoke when called.

//what will the folowing code output

let object = {
  a: 2,
  b: 3,
};

function food() {
  return this.a + this.b;
}

let bar = food.bind(object);

console.log(food()); // NaN
console.log(bar()); // 5

/*
this is because that food function points to the global object and
the glabal object[a] comes back undefined, with the same with b.
therefore returning NaN

bar points to the object object, there for it is 2, and 3, for a and b
*/

let positivity = {
  message: 'javascript makes sense!',
};

let negativity = {
  message: 'javascript makes no sense!',
};

function fo() {
  console.log(this.message);
}

let bars = fo.bind(positivity);

negativity.logMessage = bars;
negativity.logMessage();  //JavaScript makes sense!

//bars is always going to do javascript makes snese because bars is bound to positivities return value

let object2 = {
  a: 'amazebulous!',
};
let otherObj = {
  a: "that's not a real word!",
};

function poo() {
  console.log(this.a);
}

let rab = poo.bind(object2);

rab.call(otherObj); // amazebulous, you cannot call a different object when it is already binded
