/* eslint-disable no-unused-vars */
// name the constructor

console.log("Hello");
console.log([1, 2, 3]);
console.log({name: 'srdjan'});

console.log("Hello".constructor.name);
console.log([1, 2, 3].constructor.name);
console.log({name: 'sdjan'}.constructor.name);

//create the class
class cat {
}

//creat an instance


let kitty1 = new cat();


//What are you?

class cat2 {
  constructor (name) {
    this.name = name;
    console.log("I'm a cat");
  }
}

let kitty2 = new cat2();

//hello sophie part1

class cat3 {
  constructor(name) {
    this.name = name;
    console.log(`Hello! My name is ${this.name}`);
  }
}

let kitty3 = new cat3('Sophie');

//hello sophie part 2

class cat4 {
  constructor(name) {
    this.name = name;
  }
  greet () {
    console.log(`Hello! My name is ${this.name}`);
  }
}

let kitty4 = new cat4('Sophie');
kitty4.greet();

//default person

class person {
  constructor(name = 'John Doe') {
    this.name = name;
  }
}

let person1 = new person();
let person2 = new person('Pepe');

console.log(person1.name);
console.log(person2.name);

//hello chloe

class cat5 {
  constructor(name) {
    this.name = name;
  }
  rename(newName) {
    this.name = newName;
  }
}

let kitty5 = new cat5('Sophie');

console.log(kitty5.name);
kitty5.rename('Chloe');
console.log(kitty5.name);

//generic greeting part 1

class cat6 {
  constructor(name) {
    this.name = name;
  }
  static genericGreeting() {
    console.log(`Hello! I'm a cat`);
  }
}

cat6.genericGreeting();

class cat7 {
  constructor(name) {
    this.name = name;
  }
  static genericGreeting() {
    console.log('Hello! i am a cat!');
  }
  personalGreeting() {
    console.log(`Hello! My name is ${this.name}`);
  }
}
cat7.genericGreeting();
let kitty7 = new cat7('Sophie');
kitty7.personalGreeting();