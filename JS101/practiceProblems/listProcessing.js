//number 1 sum of digits

function sum(number) {

  return console.log(String(number).split('')
    .reduce((accum, digit) => accum + Number(digit), 0));
}


sum(23);           // 5
sum(496);          // 19
sum(123456789);    // 45

//number 2 alphabetical Numbers

function alphabeticNumberSort(array) {
  let NUMBER_WORDS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven',
    'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',
    'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

  function wordSort(num1, num2) {
    if (NUMBER_WORDS[num1] > NUMBER_WORDS[num2]) {
      return 1;
    } else if (NUMBER_WORDS[num1] < NUMBER_WORDS[num2]) {
      return -1;
    } else {
      return 0;
    }
  }

  return array.sort(wordSort);
}

alphabeticNumberSort(
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]);
// [8, 18, 11, 15, 5, 4, 14, 9, 19, 1, 7, 17, 6, 16, 10, 13, 3, 12, 2, 0]

// number 3 multiply all pairs

function multiplyAllPairs(array1, array2) {
  let multipliedArray = [];
  array1.forEach(number => {
    array2.forEach(number2 => {
      multipliedArray.push(number * number2);
    });
  });
  return console.log(multipliedArray.sort((item1, item2) => item1 - item2));
}

multiplyAllPairs([2, 4], [4, 3, 1, 2]);    // [2, 4, 4, 6, 8, 8, 12, 16]

//number 4 leading substring

function leadingSubstrings(string) {
  let substringArray = [];
  let lastchar = '';
  string.split('').forEach(letter => {

    substringArray.push(lastchar + letter);
    lastchar += letter;

  });
  return console.log(substringArray);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]


// mapping number 4

function leadingSubstrings2(string) {
  let stringArray = string.split('');
  let lastIndex = [];
  let newArray = stringArray.map((element) => {
    lastIndex.push(element);
    return lastIndex.join('');
  });

  console.log(newArray);
}

leadingSubstrings2('abc');      // ["a", "ab", "abc"]
leadingSubstrings2('a');        // ["a"]
leadingSubstrings2('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

//number 5 All substrings

function substrings(string) {
  let substringArray = string.split('');
  let newStringArray = [];
  for ( let index = 0; index < string.length; index += 1) {
    console.log(substringArray[index]);
    for (let index2 = 0; index2 < string.length; index2 += 1) {
      if (index2 < index) {
        continue;
      } else if (substringArray[index] === substringArray[index2]) {
        newStringArray.push(substringArray[index]);
      } else {
        newStringArray.push(newStringArray[newStringArray.length - 1] +
          substringArray[index2]);
      }
    }
  }
  return console.log(newStringArray);
}

substrings('abcde');

//ALL SUBSTRINGS USING MAP

function substrings2(string) {
  let counter = 1;
  let stringArray = string.split('');
  return stringArray.map(letter => {
    let slicedArray = stringArray.slice(counter);
    let substringArray = [];
    let index = slicedArray.length - 1;
    substringArray.push(letter);
    while (index >= 0) {
      let newLetter = substringArray[substringArray.length - 1] +
       slicedArray[substringArray.length - 1];
      substringArray.push(newLetter);
      slicedArray.slice(1);
      index -= 1;
    }
    counter += 1;
    return substringArray.join(' ');
  }).join(' ').split(' ');
}

substrings2('abcde');

// returns
/*[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ] */

//palindromes

function isPalindrome(word) {
  return word.length > 1 && word === word.split("").reverse().join("");
}
function palindromes(string) {
  return substrings2(string).filter(isPalindrome);
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]

//sum of sums

//sum of sums

function sumOfSums(array) {
  let length = array.length - 1;
  let counter = 0;
  let array1 = [];
  for (let index = length; index >= 0; index -= 1) {
    counter += array.reduce((number, accumulator) => number + accumulator);
    array1.push(`(${array.join(' + ')})`);

    array.pop();
  }

  return array1.reverse().join(' + ') + ` --> ${counter}`;
}

sumOfSums([3, 5, 2]);        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
sumOfSums([1, 5, 7, 3]);     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
sumOfSums([4]);              // 4
sumOfSums([1, 2, 3, 4, 5]);  // 35

//grocery list

function buyFruit(array) {
  let newArray = [];
  array.forEach(array1 => {
    for (let index = 0; index < array1[1]; index += 1) {
      newArray.push(array1[0]);
    }
  });
  return newArray;
}

buyFruit([['apple', 3], ['orange', 1], ['banana', 2]]);
// returns ["apple", "apple", "apple", "orange", "banana", "banana"]

let transactions = [ { id: 101, movement: 'in',  quantity:  5 },
  { id: 105, movement: 'in',  quantity: 10 },
  { id: 102, movement: 'out', quantity: 17 },
  { id: 101, movement: 'in',  quantity: 12 },
  { id: 103, movement: 'out', quantity: 20 },
  { id: 102, movement: 'out', quantity: 15 },
  { id: 105, movement: 'in',  quantity: 25 },
  { id: 101, movement: 'out', quantity: 18 },
  { id: 102, movement: 'in',  quantity: 22 },
  { id: 103, movement: 'out', quantity: 15 }, ];

function transactionsFor(id, array) {
  array.filter(inventory => inventory.id === id);
}

transactionsFor(101, transactions);

function isItemAvailable(id, array) {
  let itemTransaction = transactionsFor(id, array);
  let total = itemTransaction.reduce((counter, transaction) => {
    if (transaction.movement === "in") {
      return counter + transaction.quantity;
    } else {
      return counter - transaction.quantity;
    }
  },
  0
  );

  return total > 0;
}


isItemAvailable(101, transactions);     // false
isItemAvailable(103, transactions);     // false
isItemAvailable(105, transactions);     // true
