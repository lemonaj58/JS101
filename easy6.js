//number 1 double char

function repeater(string) {
  let stringArray = string.split('');
  let doubleArray = [];

  stringArray.forEach(value => {
    let doubleLetter = value.repeat(2);
    doubleArray.push(doubleLetter);
  });
  console.log(doubleArray.join(''));
}

// number 1 mapping

function repeaters(string) {
  return string.split("").map(char => char + char).join("");
}


repeaters('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

//number 2
const VALID_CHOICES = ['b', 'c', 'd', 'f', 'g', 'h',
  'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z'];

function doubleConsonants(string) {
  let stringToArray = string.split('');
  let doubleArrays = [];

  stringToArray.forEach(value => {
    let values = value.toLowerCase();

    if (VALID_CHOICES.includes(values) === false) {
      doubleArrays.push(value);

    } else {
      doubleArrays.push(value.repeat(2));

    }
  });

  console.log(doubleArrays.join(''));
}


doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

//number 3 reverse Number

function reverseNumber(number) {
  let numberArray = number.toString().split('');
  let returnedArray = numberArray.reverse().join('');
  console.log(Number(returnedArray));
}
reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);

//number 4 Get the middle character

function centerOf(string) {
  let array = string.split('');
  if (string.length % 2 !== 0) {
    let center = Number(Math.floor(string.length / 2));
    let centerLetter = array[center];
    console.log(`${centerLetter}`);
  } else {
    let center1 = Number(string.length / 2);
    let center2 = Number((string.length / 2) - 1);
    console.log(`${array[center2]}${array[center1]}`);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

// number 5 Always negative number

function negative(number) {
  console.log(Math.abs(number) * -1);

}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

// number 6 counting up

function sequence(number) {
  let countingArray = [];
  for (let index = 1; index <= number; index += 1) {
    countingArray.push(index);
  }
  console.log(countingArray);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

//number 7 name swapping

function swapName(string) {
  let nameArray = string.split(' ');
  let reversedName = nameArray.reverse();
  console.log(reversedName.join(', '));
}


swapName('Joe Roberts');    // "Roberts, Joe"

//number 8 sequence count

function sequences(count, multiple) {
  let sequenceArray = [];
  for (let index = 0; index < count; index += 1) {
    sequenceArray.push(multiple * (index + 1));
  }
  console.log(sequenceArray);
}


sequences(5, 1);          // [1, 2, 3, 4, 5]
sequences(4, -7);         // [-7, -14, -21, -28]
sequences(3, 0);          // [0, 0, 0]
sequences(0, 1000000);    // []

//number 9 reverse it part1

function reverseSentence(string) {
  let reversedString = string.split(' ').reverse().join(' ');
  console.log(reversedString);
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

//number 10 reverse it part 2

function reverseWords(string) {
  let stringArray = string.split(' ');
  for (let index = 0; index < stringArray.length; index += 1) {
    if (stringArray[index].length >= 5) {
      stringArray[index] = stringArray[index].split('').reverse().join('');

    } else {
      continue;
    }
  }
  console.log(stringArray.join(' '));
}


reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"SSS

//number 11
// eslint-disable-next-line no-unused-vars
let list = [1, 2, 3, 4];
// eslint-disable-next-line no-redeclare
function reverseNumber(list) {
  let leftIndex = 0;
  let rightIndex = list.length - 1;

  while (leftIndex < list.length / 2) {
    [list[leftIndex], list[rightIndex]] =
      [list[rightIndex], list[leftIndex]];

    leftIndex += 1;
    rightIndex -= 1;
  }
}

//number 12 matching parentheses

function isBalanced(string) {
  let stringArray = string.split('');
  let leftSideParentheses = [];
  let rightSideParentheses = [];

  stringArray.forEach(letter => {
    if (letter === '(') {
      rightSideParentheses.push(letter);
    } else if (letter === ')') {
      leftSideParentheses.push(letter);
    }
  });
  for (let index = stringArray.length - 1; index >= 0; index -= 1) {
    if (stringArray[index] === '(') {
      return false;
    } else if (stringArray[index] === ')') {
      return leftSideParentheses.length === rightSideParentheses.length;
    }
  }

  return leftSideParentheses.length === rightSideParentheses.length;
}


console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
