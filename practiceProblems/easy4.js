//number 1 how old is Teddy?

function teddyAge() {
  let min = 20;
  let max = 120;
  let age = (Math.floor(Math.random() * (max - min)) + min);

  return console.log(`Teddy is ${age} years old!`);
}

teddyAge();

// number 2 searching 101

function searching() {
  let rsync = require('readline-sync');

  let firstNumber = Number(rsync.question('Enter the first number: '));
  let secondNumber = Number(rsync.question('Enter the second number: '));
  let thirdNumber = Number(rsync.question('Enter the third number: '));
  let fourthNumber = Number(rsync.question('Enter the fourth number: '));
  let fifthNumber = Number(rsync.question('Enter the fifth number: '));
  let lastNumber = Number(rsync.question('Enter the last number: '));
  let numbers = (`${firstNumber},${secondNumber},${thirdNumber},${fourthNumber},${fifthNumber}`);

  if (lastNumber === firstNumber || lastNumber === secondNumber ||
      lastNumber === thirdNumber || lastNumber === fourthNumber ||
      lastNumber === fifthNumber) {
    return console.log(`The number ${lastNumber} appears in ${numbers}`);
  } else {
    return console.log(`The number ${lastNumber} does not appears in ${numbers}`);
  }
}

searching();

//my solution would work instead of the === expression, i could use the >
//expression so i would see if the number was above or not above.

//using some with different function

let readlineSync = require("readline-sync");

let numbers = [];

console.log("Enter the 1st number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 2nd number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 3rd number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 4th number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the 5th number:");
numbers.push(Number(readlineSync.prompt()));
console.log("Enter the last number:");
const val = Number(readlineSync.prompt());


function isIncluded(arr, val) {
  const biggerThan = (element) => element > val;
  console.log(arr.some(biggerThan));
}
isIncluded(numbers, val);


//number 3 when will i retire?

function retirment() {
  let rsync2 = require('readline-sync');

  let age = rsync2.question('What is your age? ');
  let retireAge = rsync2.question('At what age would you like to retire? ');
  let differenceInAge = retireAge - age;
  let today = new Date();
  let currentYear = today.getFullYear();

  return console.log(`It's ${currentYear}, you will retire in ${currentYear + differenceInAge}.
                      only ${differenceInAge} to go!`);

}
retirment();

// further exploration, the date aspect would give an error in the code.

//number 4

function isPalindrome(string) {
  let reversedString = string.split('').reverse().join('');

  return console.log(reversedString === string);
}

isPalindrome('madam');               // true
isPalindrome('Madam');               // false (case matters)
isPalindrome("madam i'm adam");      // false (all characters matter)
isPalindrome('356653');              // true

//number 5 palindromic Strings
function isPalindrome2(string) {
  let reversedString = string.split('').reverse().join('');

  return console.log(reversedString === string);
}

function isRealPalindrome(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome2(string);
}

function removeNonLetterNumbers(string) {
  let result = '';

  for (let idx = 0; idx < string.length; idx += 1) {
    if (isLetter(string[idx]) || isNumber(string[idx])) {
      result += string[idx];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
  return char >= '0' && char <= '9';
}

isRealPalindrome('madam');               // true
isRealPalindrome('Madam');               // true (case does not matter)
isRealPalindrome("Madam, I'm Adam");     // true (only alphanumerics matter)
isRealPalindrome('356653');              // true
isRealPalindrome('356a653');             // true
isRealPalindrome('123ab321');            // false

//number 6 palindromic Numbers

function isPalindromicNumber(number) {
  let stringNumber = Number(number.toString().split('').reverse().join(''));

  return console.log(stringNumber === number);
}


isPalindromicNumber(34543);        // true
isPalindromicNumber(123210);       // false
isPalindromicNumber(22);           // true
isPalindromicNumber(5);            // true

// it still works with multiple 0's in the front of the number, therefore
// you dont have to do anything to the number.

//number 7 running totals

function runningTotal(array) {
  let accumulator = 0;
  let newArray = [];
  array.forEach(element => {
    accumulator += element;
    newArray.push(accumulator);
  });
  return console.log(newArray);
}

runningTotal([2, 5, 13]);             // [2, 7, 20]
runningTotal([14, 11, 7, 15, 20]);    // [14, 25, 32, 47, 67]
runningTotal([3]);                    // [3]
runningTotal([]);                     // []

//no i couldnt get map to work for me on this problem. mapping is more better
//when you are trying to multiply or do the same thing to the function and
//not add the last value.

//number 8 letter counter part1

function wordSizes(string) {
  let wordArray = string.split(' ');
  let countingObject = {};


  wordArray.forEach(word => {
    let wordLength = word.length;
    // eslint-disable-next-line no-empty
    if (wordLength === 0) {

    } else if (countingObject.hasOwnProperty(wordLength)) {
      countingObject[wordLength] += 1;
    } else {
      countingObject[wordLength] = 1;
    }
  });
  console.log(countingObject);
}

wordSizes('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes('');                                            // {}


//number 9 letter counter part 2

function wordSizes2(string) {
  string = wordOnlyLetter(string);
  let wordArray = string.split(' ');
  let countingObject = {};

  wordArray.forEach(word => {

    let wordLength = word.length;
    // eslint-disable-next-line no-empty
    if (wordLength === 0) {

    } else if (countingObject.hasOwnProperty(wordLength)) {
      countingObject[wordLength] += 1;
    } else {
      countingObject[wordLength] = 1;
    }
  });
  console.log(countingObject);
}
function wordOnlyLetter(string) {
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    if (isLetter2(string[index]) || string[index] === (' ')) {
      result += string[index];
    }
  }

  return result;
}

function isLetter2(char) {
  return char >= 'a' && char <= 'z';
}

wordSizes2('Four score and seven.');                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
wordSizes2('Hey diddle diddle, the cat and the fiddle!');  // { "3": 5, "6": 1, "7": 2 }
wordSizes2("What's up doc?");                              // { "2": 1, "4": 1, "6": 1 }
wordSizes2('');                                            // {}

//number 10 letter swap

function swap(string) {
  let stringArray = string.split(' ');
  let newStringArray = [];
  stringArray.forEach(word => {
    newStringArray.push(swapFirstAndLastLetter(word));
    return newStringArray.join(' ');

  });
  return console.log(newStringArray.join(' '));

  function swapFirstAndLastLetter(word) {
    if (word.length === 1) {
      return word;
    } else {
      return word.slice(-1) + word.slice(1, -1) + word.slice(0, 1);
    }
  }
}

swap('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap('Abcde');                          // "ebcdA"
swap('a');                              // "a"

//number 10 further exploration

function swap2(string) {
  let stringArray = string.split(' ');
  console.log(stringArray.map(currentValue =>
    currentValue.slice(-1) + currentValue.slice(1, -1) +
     currentValue.slice(0, 1)));

}

swap2('Oh what a wonderful day it is');  // "hO thaw a londerfuw yad ti si"
swap2('Abcde');                          // "ebcdA"
swap2('a');