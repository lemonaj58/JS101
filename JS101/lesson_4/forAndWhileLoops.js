let numbers = [1, 2, 3, 4];
let idx = 0

while (idx < numbers.length) {
  numbers[idx] += 1;
  idx += 1;
}
console.log(numbers);

while (true) {
  console.log('hello world!');
  break;
}
while (true) {
  let number = Math.floor(10 * Math.random());
  console.log(number);
  if (number === 5) {
    console.log('exiting...');
    break;
  }
}

// this last code, will choose a number betweeon 0 and 9, but if
//the number equals to 5 it will display Exiting... and therfore, breaks the loop
//otherwise the loop repeats itself.

let alphabet = 'abcdefghijklmnopqrstuvwxyz'
let counter = 0

while (counter < alphabet.length) {
  console.log(alphabet[counter]);
  counter =+ 1;
}

for (let counter = 0; counter < alphabet.length; counter =+ 1) {
  console.log(alphabet[counter]);
}

//the for loop is prefered way to do iterating, it shows the counter,
// and where the counter stops all on the same line, so when you
//are itterating through something, try to use the for loop.

let colors = ['green', 'blue', 'yellow'];

for (let counter = 0; counter < colors.length; counter =+ 1) {
  console.log(colors[counter])
}

let numberOfPets = {
  dogs: 2,
  cats: 4,
  fish: 1
};

let pets = object.keys(numberOfPets)
let counter = 0

while (counter < pets.length) {
  let currentPet = pets.counter;
  let currentPetNumber = numberOfPets[currentPet];
  console.log(`I have ${currentPetNumber} ${cuttentPet}!`);
  counter =+ 1;
}

let number;
do {
  number = Math.floor(10* Math.random());
  console.log(number);
} while (number !== 5);

console.log('exiting...');

let str = '';

while (true) {
  if (str.length >= 10) {
    break;
  }

  str += '*';
  console.log(str);
}

while (str.length < 10) {
  str += '*';
  console.log(str);
}

let names = ['Pete', 'Naveed', 'Chris', 'Elizabeth', 'Wendy', 'Kim'];
let index = 0;

while (index < names.length) {
  if (names[index][0] === 'E') {
    break;
  }

  console.log(names[index]);
  index += 1;
}

let array