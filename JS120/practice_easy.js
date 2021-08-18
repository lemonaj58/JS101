/* eslint-disable no-unused-vars */
//1, and 2

class Rectangle {
  constructor(width, length) {
    this.width = width;
    this.length = length;
  }

  getWidth() {
    return this.width;
  }

  getLength() {
    return this.length;
  }

  getArea() {
    return this.width * this.length;
  }
}

class Square extends Rectangle {
  constructor(length) {
    super(length, length);
  }
}
let square = new Square(5);
console.log(`area of square = ${square.getArea()}`);
let rect = new Rectangle(4, 5);
console.log(rect.getWidth());
console.log(rect.getLength());
console.log(rect.getArea());

class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = Object.create(Cat.prototype);
console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.name);           // logs undefined
console.log(fakeCat.speaks());

//4
class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

class Cat2 extends Pet {
  constructor(name, age, color) {
    super(name, age);
    this.color = color;
  }
  info() {
    return `My cat ${this.name} is ${this.age} years old and has ${this.color} fur`;
  }
}

let pudding = new Cat2('Pudding', 7, 'black and white');
let butterscotch = new Cat2('Butterscotch', 10, 'tan and white');

console.log(pudding.info());
console.log(butterscotch.info());

//5

class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and i am ${this.age} years old and ${this.status}.`;
  }
}

class Cat3 extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, 'cat', status);
  }

  introduce() {
    return `Hello, my name is ${this.name} and i am ${this.age} years old and ${this.status}. meow, meow!`;
  }
}
class Dog2 extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, 'dog', status);
    this.master = master;

  }
  greetMaster() {
    return `Hello ${this.master}! woof, woof!`;
  }
}
let doggy = new Dog2('adam', 2, 'happy', 'me');
let kitty = new Cat3('pepe', 2, 'happy');
console.log(kitty.introduce());
console.log(doggy.greetMaster());

//5
class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  getWheels() {
    return this.wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }
}

class Truck extends Vehicle {
  constructor(make, model, wheels, payload) {
    super(make, model, wheels);
    this.payload = payload;
  }
}

//6

class Person {
  greeting(text) {
    console.log(text);
  }
}

class Shouter extends Person {
  greeting(text) {
    console.log(text.toUpperCase());
  }
}
let person = new Person();
let shouter = new Shouter();

person.greeting("Hello. It's very nice to mee you.");
shouter.greeting('Hello my friend');

const walkMixin = {
  walk() {
    return `${this.name} ${this.gait()} forward`;
  }
};

class Person3 {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "strolls";
  }
}
Object.assign(Person3.prototype, walkMixin);
class Cat4 {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "saunters";
  }
}
Object.assign(Cat4.prototype, walkMixin);
class Cheetah {
  constructor(name) {
    this.name = name;
  }

  gait() {
    return "runs";
  }
}
Object.assign(Cheetah.prototype, walkMixin);


class Pet4 {
  constructor(animal, name) {
    this.animal = animal;
    this.name = name;
  }
  info() {
    return `a ${this.animal} named ${this.name}`;
  }
}
let pet = new Pet();


class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }

  addPet(pet) {
    this.pets.push(pet);
  }

  numberOfPets() {
    return this.pets.length;
  }

  printPets() {
    this.pets.forEach(pet => console.log(pet.info()));
  }
}

class Shelter {
  constructor() {
    this.owners = {};
  }

  adopt(owner, pet) {
    owner.addPet(pet);
    if (!this.owners[owner.name]) {
      this.owners[owner.name] = owner;
    }
  }

  printAdoptions() {
    for (let name in this.owners) {
      console.log(`${name} has adopted the following pets:`);
      this.owners[name].printPets();
      console.log("");
    }
  }
}


class Banner {
  constructor(message) {
    this.message = message;
  }

  displayBanner() {
    console.log([this.horizontalRule(), this.emptyLine(), this.messageLine(), this.emptyLine(), this.horizontalRule()].join("\n"));
  }

  horizontalRule() {
    return `+-${'-'.repeat(this.message.length)}-+`;
  }

  emptyLine() {
    return `| ${' '.repeat(this.message.length)} |`;
  }

  messageLine() {
    return `| ${this.message} |`;
  }
}
let banner1 = new Banner('to boldly go where no one has gone before.');
let banner2 = new Banner('');
banner1.displayBanner();
banner2.displayBanner();

