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

  return console.log(array.sort(wordSort));
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
    for (let index2 = 0; index2 < string.length; index2 += 1) {
      if (substringArray[index] === substringArray[index2]) {
        newStringArray.push(substringArray[index]);
      }
      newStringArray.push(substringArray[index] + substringArray[index2]);

    }
  }
  return console.log(newStringArray);
}

substrings('abcde');

// returns
/*[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ] */
