//function createPet(animal, name) {
//  return {
//    animal,
//    name,
//    sleep() {
//      console.log('I am sleeping');
//    },
//    wake() {
//      console.log('I am awake');
//    }
//  }
//};
//
//
//let pudding = createPet("Cat", "Pudding");
//console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
//pudding.sleep(); // I am sleeping
//pudding.wake();  // I am awake
//
//let neptune = createPet("Fish", "Neptune");
//console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
//neptune.sleep(); // I am sleeping
//neptune.wake();  // I am awake
const PetPrototype = {
    init(animal, name) {
    this.animal = animal;
    this.name = name;
    return this;
  },

  sleep: function() {
    console.log('I am sleeping');
  },
  wake: function() {
    console.log('I am awake');
  },

}

let pudding = Object.create(PetPrototype).init("Cat", "Pudding");
console.log(`I am a ${pudding.animal}. My name is ${pudding.name}.`);
pudding.sleep(); // I am sleeping
pudding.wake();  // I am awake

let neptune = Object.create(PetPrototype).init("Fish", "Neptune");
console.log(`I am a ${neptune.animal}. My name is ${neptune.name}.`);
neptune.sleep(); // I am sleeping
neptune.wake();  // I am awake

//Consider the objects created by the programs in problems 1 and 2. How do objects for the same animal differ from each other?
/*
they are different from eachother because the factory function creates the functions for all the occurences.
whereas doing the prototype has it stored in the same place, the prototype.
*/