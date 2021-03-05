//UpperCase check

function isUppercase(string) {
  return (string === string.toUpperCase());
}

isUppercase('t');               // false
isUppercase('T');               // true
isUppercase('Four Score');      // false
isUppercase('FOUR SCORE');      // true
isUppercase('4SCORE!');         // true
isUppercase('');                // true

//delete Vowels
function removeVowels(array) {
  const VOWELS = ['a', 'e', 'i', 'o', 'u'];
  array = array.map(string => {
    return (string.split('').filter(letter => VOWELS.includes(letter.toLowerCase()) === false).join(''));

  });
  console.log(array);
}

removeVowels(['abcdefghijklmnopqrstuvwxyz']);         // ["bcdfghjklmnpqrstvwxyz"]
removeVowels(['green', 'YELLOW', 'black', 'white']);  // ["grn", "YLLW", "blck", "wht"]
removeVowels(['ABC', 'AEIOU', 'XYZ']);                // ["BC", "", "XYZ"]

function letterCaseCount(string) {
  let lowercaseChars = string.match(/[a-z]/g) || [];
  let uppercaseChars = string.match(/[A-Z]/g) || [];
  let neitherChars = string.match(/[^a-z]/gi) || [];

  return {
    lowercase: lowercaseChars.length,
    uppercase: uppercaseChars.length,
    neither: neitherChars.length
  };
}


letterCaseCount('abCdef 123');  // { lowercase: 5, uppercase: 1, neither: 4 }
letterCaseCount('AbCd +Ef');    // { lowercase: 3, uppercase: 3, neither: 2 }
letterCaseCount('123');         // { lowercase: 0, uppercase: 0, neither: 3 }
letterCaseCount('');


function wordCap(string) {
  return string
    .split(' ')
    .map(word => (word[0].toUpperCase() + word.slice(1).toLowerCase()))
    .join(' ');
}

wordCap('four score and seven');       // "Four Score And Seven"
wordCap('the javaScript language');    // "The Javascript Language"
wordCap('this is a "quoted" word');    // 'This Is A "quoted" Word'

//swapCase

function swapCase(string) {
  let newString = '';
  string.split('').forEach(letter => {
    if (letter === letter.toUpperCase()) {
      newString += letter.toLowerCase();
    } else if (letter === letter.toLowerCase()) {
      newString += letter.toUpperCase();
    } else {
      newString += letter;
    }
  });
  return newString;
}


swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"

//staggered ca[s (part 1)
const NUMBERS = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];

function staggeredCase(string) {
  let counter = 1;
  return string.split('').map(letter => {
    if (NUMBERS.includes(letter)) {
      return letter;
    } else {
      counter += 1;
      if (counter % 2 === 0) {
        return letter.toUpperCase();
      } else {
        return letter.toLowerCase();
      }
    }
  }).join('');
}

staggeredCase('I Love Launch School!');        // "I LoVe lAuNcH ScHoOl!"
staggeredCase('ALL_CAPS');                     // "AlL_CaPs"
staggeredCase('ignore 77 the 4444 numbers');   // "IgNoRe 77 ThE 4444 nUmBeRs"

//staggered ca[s (part 2)

function staggeredCase2(string) {
  let counter = 1;
  return string.split('').map(letter => {
    if (isLetter(letter) === true) {
      counter += 1;
      if (counter % 2 === 0) {
        return letter.toUpperCase();
      } else {
        return letter.toLowerCase();
      }
    } else {
      return letter;
    }
  }).join('');
}

function isLetter(letter) {
  if (letter >= 'a' && letter <= 'z') {
    return true;
  } else if (letter >= 'A' && letter <= 'Z') {
    return true;
  } else {
    return false;
  }
}

console.log(staggeredCase2("I Love Launch School!") === "I lOvE lAuNcH sChOoL!");
console.log(staggeredCase2("ALL CAPS") === "AlL cApS");
console.log(
  staggeredCase2("ignore 77 the 444 numbers") === "IgNoRe 77 ThE 444 nUmBeRs");

//how long are you

function wordLengths(string) {
  if (string === '') {
    return [];
  } else if (string === undefined) {
    return [];
  } else {
    return (string.split(' ').map(word => word + ` ${word.length}`));
  }
}

wordLengths('cow sheep chicken');
// ["cow 3", "sheep 5", "chicken 7"]

wordLengths('baseball hot dogs and apple pie');
// ["baseball 8", "hot 3", "dogs 4", "and 3", "apple 5", "pie 3"]

wordLengths("It ain't easy, is it?");
// ["It 2", "ain't 5", "easy, 5", "is 2", "it? 3"]

wordLengths('Supercalifragilisticexpialidocious');
// ["Supercalifragilisticexpialidocious 34"]

wordLengths('');      // []
wordLengths();        // []