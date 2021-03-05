// number 1 welcome stranger

function greetings(name, status) {
  return `Hello, ${name.join(" ")}! Nice to have a ${status["title"]} ${
    status["occupation"]
  } around.`;
}

console.log(
  greetings(["John", "Q", "Doe"], { title: "Master", occupation: "Plumber" })
);
// logs Hello, John Q Doe! Nice to have a Master Plumber around.


//number 2 greet
function greet() {
  const rsync = require('readline-sync');
  let name = rsync.question('What is your name?\n');

  if (name.endsWith('!')) {
    name = name.slice(0, -1);
    console.log(`HELLO ${name.toUpperCase()}. WHY ARE WE SCREAMING?` );
  } else {
    console.log(`Hello ${name}`);
  }
}

greet();

// number 3 multiplying two Numbers

function multiply(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

console.log(multiply(5, 3) === 15); // logs true

// number 4 squaring an arguemnt
function square(number) {
  return multiply(number, number);
}


console.log(square(5) === 25); // logs true
console.log(square(-8) === 64); // logs true

//more exploration
function power(number, power) {

  let squaredNumber = number;
  for (let index = 1; index < power; index += 1) {

    squaredNumber =  (squaredNumber / number) * multiply(number, number);
  }
  return squaredNumber;
}


console.log(power(5, 5));
console.log(power(-8, 5));

//number 5 arithmetic integars

function arithmeticInteger() {
  const rsync = require('readline-sync');

  function prompt(message) {
    console.log(`==> ${message}`);
  }

  let firstNumber = rsync.question(prompt('Enter the first number:'));
  let secondNumber = rsync.question(prompt('Enter the second number:'));

  console.log(`${firstNumber} + ${secondNumber} = ${firstNumber + secondNumber}`);
  console.log(`${firstNumber} - ${secondNumber} = ${firstNumber - secondNumber}`);
  console.log(`${firstNumber} * ${secondNumber} = ${firstNumber * secondNumber}`);
  console.log(`${firstNumber} / ${secondNumber} = ${Math.floor(firstNumber / secondNumber)}`);
  console.log(`${firstNumber} % ${secondNumber} = ${firstNumber % secondNumber}`);
  console.log(`${firstNumber} ** ${secondNumber} = ${Math.pow(firstNumber, secondNumber)}`);
}

arithmeticInteger();

//number 6 the end is near but not here

function penultimate(string) {
  let stringArray = string.split(' ');
  return stringArray[stringArray.length - 2];
}

console.log(penultimate("last word") === "last"); // logs true
console.log(penultimate("Launch School is great!") === "is"); // logs true

//further exploration
function penultimate2(string) {
  let stringArray = string.split(' ');

  if (stringArray.length < 2 && stringArray.length > 0) {
    return stringArray[0];
  } else if ((string === ' ') || (string === " ")) {
    return ("' '");
  } else {
    return stringArray[stringArray.length - 2];
  }
}

console.log(penultimate2(" "));
console.log(penultimate2("first"));
console.log(penultimate2('this is launch school at its finest'));

// number 7 exclusive or
function xor(object1, object2) {
  let trueOrFalse = (object1 === object2);

  if (trueOrFalse === 'true') {

    return false;
  } else {
    return true;
  }
}


console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

/* i did this solution a different way than what was written in the answer
but in other words, wince my way has a solution, you do not need a short circut
solution because you have just determine if the objects, or numbers, or input,
that you use equal eachother. but in your example it makes sense, because if
both are false, it will return true, but if one is true, it will never get
to the second statement.
*/

//number 8 odd lists

function oddities(array) {
  let oddArray = [];
  for (let counter = 0; counter < array.length; counter += 2) {
    oddArray.push(array[counter]);
  }
  return oddArray;
}


console.log(oddities([2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(oddities([1, 2, 3, 4, 5, 6])); // logs [1, 3, 5]
console.log(oddities(["abc", "def"])); // logs ['abc']
console.log(oddities([123])); // logs [123]
console.log(oddities([])); // logs []

// further exploration
function evenities(array) {
  let evenArray = [];

  array.forEach(element => {
    let number = array.indexOf(element);

    if (Number(number) % 2 !== 0) {
      evenArray.push(element);
    }
  });
  return evenArray;
}

console.log(evenities([2, 3, 4, 5, 6])); // logs [3, 5]
console.log(evenities([1, 2, 3, 4, 5, 6])); // logs [2, 4, 6]
console.log(evenities(["abc", "def"])); // logs ['def']
console.log(evenities([123])); // logs []
console.log(evenities([])); // logs []

//number 9 convert a string to a number

function stringToInteger(string) {
  const DIGITS = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9
  };
  let arrayOfDigits = string.split("").map(char => DIGITS[char]);
  let value = 0;
  arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
  return value;
}

console.log(stringToInteger("4321") === 4321); // logs true
console.log(stringToInteger("570") === 570); // logs true

//number 10 convert a string to a signed number

function stringToSignedInteger(string) {
  switch (string[0]) {
    case "-":
      return -stringToInteger(string.slice(1, string.length));
    case "+":
      return stringToInteger(string.slice(1, string.length));
    default:
      return stringToInteger(string);
  }
}

console.log(stringToSignedInteger("4321") === 4321); // logs true
console.log(stringToSignedInteger("-570") === -570); // logs true
console.log(stringToSignedInteger("+100") === 100); // logs true

//number 11 convert string to a number

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

integerToString(4321);      // "4321"
integerToString(0);         // "0"
integerToString(5000);      // "5000"
integerToString(1234567890);      // "1234567890"

//number 12 signed interger to a string

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === "+4321");
console.log(signedIntegerToString(-123) === "-123");
console.log(signedIntegerToString(0) === "0");

