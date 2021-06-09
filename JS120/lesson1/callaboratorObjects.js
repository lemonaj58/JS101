// we can do something like this and this workds
/*
adding the cat, as an object, we can now access the information by doing
pete.pet, since the pet is the cat object. we can use it also
as pete.pet.makeNoise().

collaborator objects play an important rold in object oriented design;
they represent the connections between the different classes in
your program.

using collaborators i need to make sure that the collaborator makes
sense and from a technical standpoint. in terms of modeling the problems
my program aims to solve.

one last thing is collaborators in the context of custom objects like pet,
but collaborators dont have to be custom objects. they can be
built-in-objects, like arrays and data as well.

collaborator objects let you chop up and modularize the problem
domain into cohesive pieces. they play an important role
in modeling complicated problem domains in OO programming.
*/
let cat = {
  name: 'fluffy',

  makeNoise() {
    console.log('Meow! Meow!');
  }
};

let dog = {
  name: 'Maxi',

  makeNoise() {
    console.log('woof! woof!');
  },
  eat() {

  }
};

let pete = {
  name: 'Pete',
  pets: []
};

pete.pets.push(cat);
pete.pets.push(dog);

console.log(pete.pets);

/*let pete = {
  name: 'pete',
  pet: cat,

  printName() {
    console.log(`My name is ${this.name}`);
    console.log(`My pet's name is ${this.pet.name}`);
    //this will then print the name 'pete' if we do pete.printNname()
  }
};

pete.printName();

let pete2 = {
  heroes: ['superman', 'spiderman', 'batman'],
  cash: {ones: 12, fives: 2, tens: 0, twenties: 2, hundreds: 0},

  cashOnHand() {

  },

  allHeroes() {
    console.log(this.heroes.join(', '));
    return this.heroes.join(', ');

  }

};

pete2.allHeroes();
*/