let qux = {foo: 1};
let baz = Object.create(qux);
console.log(baz.foo + qux.foo);
//will log 2, because foo of qux = 1 and foo in baz
//will point to the prototype qux which will be 1 as well.

let abc = {foo: 1};
let cba = Object.create(abc);
cba.foo = 2;

console.log(abc.foo + baz.foo);
//this will log 3, because foo in abc is 1, and we change the value
//of cba's foo value to 2. in the objects, created with prototypes, when
//changing the value of the prototype, key, it will not change the prototype
//value.

let stu = {foo: 1};
let tuv = Object.create(qux);
stu.foo = 2;

console.log(stu.foo + tuv.foo);

//this will log 4, because we change the value in the prototype it will
//also change in the object that takes uses the prototype.

function assignProperty(obj, property, value) {
  while (obj !== null) {
    if (obj.hasOwnProperty(property)) {
      obj[property] = value;
      break;
    }
    obj = Object.getPrototypeOf(obj);
  }
}
let fooA = {bar: 1};
let fooB = Object.create(fooA);
let fooC = Object.create(fooB);
assignProperty(fooC, 'bar', 1);

//to create an object without a prototype, you can creat a variable = to null.
//you then do Object.creat() with the variable. this will make it so that it
//does not have a prototype. also for this you can do Object.getPrototypeOf();
//in a if else statment.

