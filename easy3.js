//number 1 ddaaiillyy ddoouubbllee

function crunch(string) {
  let stringArray = string.split('');
  let newString = '';
  let newArray = [];
  let letter;
  for (let index = 0; index < stringArray.length; index += 1) {
    if (letter === stringArray[index]) {
      continue;
    } else
          newArray.push(stringArray[index]);
          letter = stringArray[index]
    }
    newString = newArray.join('');
    console.log(newString);
}
//number 2 logInBox
function logInBox(string) {
  let horizonBox = `+${"-".repeat(string.length + 2)}+`;
  let middleBox = `|${' '.repeat(string.length+ 2)}|`;
  let stringBox = `| ${string} |`;

  console.log(horizonBox);
  console.log(middleBox);
  console.log(stringBox);
  console.log(middleBox);
  console.log(horizonBox);
}

//Number 3 Stringy strings

function stringy(number) {
  let stringyArray = []
  for (index =0; index < number; index += 1 ){
    if (index % 2 === NaN || index % 2 === 1){
      stringyArray.push('1');
      } else {
        stringyArray.push('0')
    }
  } console.log(stringyArray.join(''))
}

// number 4 Fibonacci Number Location By Length
function findFibonacciIndexByLength(length) {
  let first = 1;
  let second = 1;
  let index = 2;
  let fibonacci;

  do {
    fibonacci = first + second;
    index += 1;
    first = second;
    second = fibonacci;
  } while (String(fibonacci).length < length);

  return index;
}

// number 5 right triangles

function triangles(number) {
  Number(number)
  console.log(' ')
  for(let index = number; number >= 0; index -= 1) {
    if ((index - 1) < 0) {
    console.log(' ')
    return;
  }
    let newNumber = number + 1;
    console.log(`${(' ').repeat(index - 1)} ${'*'.repeat(newNumber - index)}`)

  }
  console.log(' ')
}


//number 6 madlibs

const rsync = require('readline-sync')

let noun;
let verb;
let adjective;
let adverb;

function askWords() {
  let noun = rsync.question('Please enter a noun: ');
  let verb = rsync.question('Please enter a verb: ');
  let adjective = rsync.question('Please enter a adjective: ');
  let adverb = rsync.question('Please enter a adverb: ');

  console.log(`does your ${noun} like to ride a ${adjective} bike? That would be an amazing sight to see.
              does your ${noun} also ${verb} while it rides it bike? does ${noun} do that while moving ${adverb}?
              that is perfect!`)
              

}

askWords();

//Number 7 Double Doubles

function twice(number) {
  if (isDoubleNumber(number)) {
    return number;
  } else {
    return number * 2;
  }
}

function isDoubleNumber(number) {
  let stringNumber = String(number);
  let center = Math.floor(stringNumber.length / 2);
  let leftNumber = stringNumber.substring(0, center);
  let rightNumber = stringNumber.substring(center);

  return leftNumber === rightNumber;
}

// Number 8 grade

function getGrades(number1, number2, number3) {
  let totalGrade = number1 + number2 + number3;
  let percentage = totalGrade / 3;
  if (percentage >= 90 && percentage <= 100) {
    return 'A';
  } else if (percentage >= 80 && percentage < 90) {
    return 'B';
  } else if (percentage >= 70 && percentage < 80) {
    return 'C';
  } else if (percentage >= 60 && percentage < 70) {
    return 'D';
  } else {
    return 'F';
  }
}

getGrades(1, 2, 3);

// Number 9 clean up text 

// Number 9 Clean up the words
function cleanUp(text) {
  let cleanText = '';

  for (let idx = 0; idx < text.length; idx += 1) {
    if (isLowerCaseLetter(text[idx]) || isUpperCaseLetter(text[idx])) {
      cleanText += text[idx];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return cleanText;
}

function isLowerCaseLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isUpperCaseLetter(char) {
  return char >= 'A' && char <= 'Z';
}

// number 10 What century is that?
function endingsuffix(number) {
  function catchWithTH(number) {
    
  }
  numberString = number.toString();
  array = numberString.split('')
  length = array.length
  
  if (catchWithTh(number) === true) {
    return (number + 'th')
  } else {
      if (array[(length - 1)] === '1') {
        console.log(number + 'st');
  }   else if (array[(length - 1)] === '2') {
        console.log(number + 'nd');
  }   else if (array[(length - 1 === '3')]) {
        console.log(number + 'rd');
  }   else {
        console.log(number + 'th');
  }
}
}
function century(number) {
  centuryNumber = number -1
  abreviationCentury = Math.floor(centuryNumber / 100) + {
  return endingsuffix(abreviationCentury);
}
}