/* eslint-disable space-before-blocks */
//Number 1 How old is Teddy?

function randomNumber(max, min) {
  return (Math.floor(Math.random() * (max - min + 1)) + min);
}

let age = randomNumber(120, 20);
console.log(`Teddy is ${age} years old!`);

//Number 2 Searching 101

let rsync = require('readline-sync');
let numbers = [
  rsync.question('Enter the first number: '),
  rsync.question('Enter the second number: '),
  rsync.question('Enter the third number: '),
  rsync.question('Enter the fourth number: '),
  rsync.question('Enter the fifth number: ')];

let lastNumber = rsync.question('Enter the last number: ');

if (numbers.includes(lastNumber)) {
  console.log(`the number ${lastNumber} appers in ${numbers}`);
} else {
  console.log(`the number ${lastNumber} does not appers in ${numbers}`);
}

//number 3 When will i retire?

const YEAR = 2020;
let rlsync = require('readline-sync');

let ages = Number(rlsync.question('What is your age? '));
let retiringAge = Number(rlsync.question('At What age would you like to retire? '));
function retireWhen(ages, retiringAge) {
  console.log(`it's ${YEAR}, you will retire in ${YEAR + (retiringAge - ages)}
  You have only ${retiringAge - ages} years to go!`);
}

retireWhen(age, retiringAge);

//number 4

function isPalindrom(string) {
  return string === string.split('').reverse().join('');
}

//number 5
function isPalindrom(string) {
  return string === string.split('').reverse().join('');
  function isRealPalindrome(string) {
    string = string.toLowerCase().replace(/[^a-z0-9]/g, "");
    return isPalindrome(string);
  }

}
// Number 6

function isPalindromicNumber(number) {
  return isPalindrome(String(number));
}

isPalindromicNumber(34543);

// Number 7

function runningTotal(array) {
  let addedArray = [];
  let sum = 0;

  for (let idx = 0; idx < array.length; idx += 1) {
    addedArray.push((sum += array[idx]));
  }

  return addedArray;
};

//Number 8 letter counter pt1

function wordSizes(string){
  let array = string.split(' ');
  let wordSizesLog = {};

  for (index = 0; index < array.length; index += 1){
    let length = array[index].length;

    if (wordSizesLog.hasOwnProperty(length)) {
      wordSizesLog[length] += 1;

    } else if (length !== 0) wordSizesLog[length] = 1;

  } console.log(wordSizesLog);
}

//number 9 letter counter pt2

function wordSizes(string){
  newString = string.toLowerCase().replace(/[^a-z0-9" "]/g, "");

  let array = newString.split(' ');

  console.log(newString);
  let wordSizesLog = {}

  for (index = 0; index < array.length; index += 1){
    let length = array[index].length

    if (wordSizesLog.hasOwnProperty(length)) {
      wordSizesLog[length] += 1;

    } else if (length !== 0) wordSizesLog[length] = 1;

  } console.log(wordSizesLog);
}

// number 10 Letter swap

function swap (string) {
  let wordArray = string.split(' ');
  for (index = 0; index < wordArray.length; index += 1) {
    wordArray[index] = swapFirstLetterWordsChar(wordArray[index]);
  }
  return wordArray.join(' ');
  function swapFirstLetterWordsChar(word) {
    if (word.length === 1) {
      return word;
    }
    return word[word.length - 1] + word.slice(1, -1) + word[0];
  }
}