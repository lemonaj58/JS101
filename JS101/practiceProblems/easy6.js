//number 1

function repeater(string) {

  return console.log(string.split("").map((letter) => letter + letter).join(""));
}

repeater('Hello');        // "HHeelllloo"
repeater('Good job!');    // "GGoooodd  jjoobb!!"
repeater('');             // ""

//number 2

function doubleConsonants(string) {
  const VALID_LETTERS = ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K',
    'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z'];

  let stringArray = string.split("");
  let doubleArray = [];

  stringArray.forEach(letter => {
    if (VALID_LETTERS.includes(letter.toUpperCase())) {
      doubleArray.push(letter + letter);
    } else {
      doubleArray.push(letter);

    }
  });
  return console.log(doubleArray.join(""));
}

doubleConsonants('String');          // "SSttrrinngg"
doubleConsonants('Hello-World!');    // "HHellllo-WWorrlldd!"
doubleConsonants('July 4th');        // "JJullyy 4tthh"
doubleConsonants('');                // ""

//number 3 reverse number

function reverseNumber(number) {
  return console.log(Number(number.toString().split('').reverse().join('')));
}

reverseNumber(12345);    // 54321
reverseNumber(12213);    // 31221
reverseNumber(456);      // 654
reverseNumber(12000);    // 21 -- Note that leading zeros in the result get dropped!
reverseNumber(1);        // 1

//number 4 get the middle character

function centerOf(string) {
  let half = Math.floor(string.length / 2);

  if (half === string.length / 2) {
    console.log(string[half - 1] + string[half]);
  } else {
    console.log(string[half]);
  }
}

centerOf('I Love JavaScript'); // "a"
centerOf('Launch School');     // " "
centerOf('Launch');            // "un"
centerOf('Launchschool');      // "hs"
centerOf('x');                 // "x"

//number 5 always return negative

function negative(number) {
  do {
    number *= -1;
  } while (number > 0);
  return console.log(number);
}

negative(5);     // -5
negative(-3);    // -3
negative(0);     // -0

//number 6 counting up

function sequence(number) {
  let count = 1;
  let sequenceArray = [];

  do {
    sequenceArray.push(count);
    count += 1;
  } while (count <= number);
  return console.log(sequenceArray);
}

sequence(5);    // [1, 2, 3, 4, 5]
sequence(3);    // [1, 2, 3]
sequence(1);    // [1]

// you cant do either or, because you dont have an array to do the function
//map or forEach on. when you do the adding the sequenceArray, you start with
//no value or one value, which the function only asses the starting length of
//sequence array but not what is being added to it at the current time.

//number 7 name swapping

function swapName(name) {
  return console.log(name.split(' ').reverse().join(', '));
}

swapName('Joe Roberts');    // "Roberts, Joe"

// refactoring

function swapName2(name) {
  let length = name.split(' ').length;
  return console.log(name.split(' ').slice(-1) + ', ' +
   name.split(' ').slice(0, length - 1).join(' '));
}

swapName2('Karl Oskar Henriksson Ragvals');

//number 8 sequence count

function sequence2(count, startingNumber) {
  let countingArray = [];

  for (let counter = 1; counter <= count; counter += 1) {
    countingArray.push(counter * startingNumber);
  }
  return console.log(countingArray);
}


sequence2(5, 1);          // [1, 2, 3, 4, 5]
sequence2(4, -7);         // [-7, -14, -21, -28]
sequence2(3, 0);          // [0, 0, 0]
sequence2(0, 1000000);    // []

//number 9 reverse it (part1)

function reverseSentence(string) {
  return console.log(string.split(' ').reverse().join(''));
}

reverseSentence('');                       // ""
reverseSentence('Hello World');            // "World Hello"
reverseSentence('Reverse these words');    // "words these Reverse"

//number 10 reverse it (part2)

function reverseWords(string) {
  let stringArray = string.split(' ');
  let reversedArray = [];

  stringArray.forEach(word => {
    if (word.length >= 5) {
      reversedArray.push(word.split('').reverse().join(''));
    } else {
      reversedArray.push(word);
    }
  });
  return console.log(reversedArray.join(' '));
}

reverseWords('Professional');             // "lanoisseforP"
reverseWords('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords('Launch School');            // "hcnuaL loohcS"
//mapping reverse it part2
function reverseWords2(string) {
  let stringArray = string.split(' ');

  stringArray = stringArray.map((function length(currentValue) {
    if (currentValue.length >= 5) {
      return currentValue.split('').reverse().join('');
    } else {
      return currentValue;
    }
  }));
  return console.log(stringArray.join(' '));
}


reverseWords2('Professional');             // "lanoisseforP"
reverseWords2('Walk around the block');    // "Walk dnuora the kcolb"
reverseWords2('Launch School');            // "hcnuaL loohcS"

//number 11 reversed arrays

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result); // logs [4,3,2,1]
console.log(list === result); // logs true

let list1 = ["a", "b", "c", "d", "e"];
let result1 = reverse(list1);
console.log(result1); // logs  ["e", "d", "c", "b", "a"]
console.log(list1 === result1); // logs true

let list2 = ["abc"];
let result2 = reverse(list2);
console.log(result2); // logs  ["abc"]
console.log(list2 === result2); // logs true

let list3 = [];
let result3 = reverse(list3);
console.log(result3); // logs []
console.log(list3 === result3); // logs true

function reverse(array) {
  let listCopy = array.join('');
  let listCopy2 = listCopy.split('');
  if (array.length <= 1) {
    return array;
  } else {
    for (let index = 0; index < array.length; index += 1) {
      if (array[index] !== String(array[index])) {
        array[index] = Number(listCopy2[array.length - index - 1]);
      } else {
        array[index] = listCopy2[array.length - index - 1];
      }
    }
  }
  return array;
}

//number 12 matching parentheses?

function isBalanced(string) {
  let perentheses = 0;

  for (let index = 0; index < string.length; index += 1) {

    if (string[index] === '(') {
      perentheses += 1;
    } else if (string[index] === ')') {
      perentheses -= 1;
    }
    if (perentheses < 0) return false;

  }

  return perentheses === 0;
}

console.log(isBalanced("What (is) this?") === true);
console.log(isBalanced("What is) this?") === false);
console.log(isBalanced("What (is this?") === false);
console.log(isBalanced("((What) (is this))?") === true);
console.log(isBalanced("((What)) (is this))?") === false);
console.log(isBalanced("Hey!") === true);
console.log(isBalanced(")Hey!(") === false);
console.log(isBalanced("What ((is))) up(") === false);
