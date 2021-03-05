// number 1 ddaaiillyy ddoouubbllee
function crunch(string) {
  let letterArray = string.split('');
  let reducedArray = [];

  letterArray.forEach(element => {
    let lastElement = reducedArray[reducedArray.length - 1];

    if (element !== lastElement) {
      reducedArray.push(element);

    }
  });
  console.log(reducedArray.join(''));
}

crunch('ddaaiillyy ddoouubbllee');    // "daily double"
crunch('4444abcabccba');              // "4abcabcba"
crunch('ggggggggggggggg');            // "g"
crunch('a');                          // "a"
crunch('');                           // ""

/* i couldnt quiet figure out regular expressions, i couldnt find the right
command and couldnt really get the right output that i wanted/needed.
somthing that i will revisit and test with.

*/

//number 2

function logInBox(string) {
  let topAndBottomLine = (`+--${'-'.repeat(string.length)}+`);
  let middleLines = (`| ${' '.repeat(string.length)} |`);
  let stringLine = (`| ${string} |`);

  console.log(topAndBottomLine);
  console.log(middleLines);
  console.log(stringLine);
  console.log(middleLines);
  console.log(topAndBottomLine);

}

logInBox('To boldly go where no one has gone before.');
logInBox('');

//number 3 stringy strings

function stringy(number) {
  let stringArray = [];

  for (let index = 1; index <= number; index += 1) {
    if (index % 2 !== 0) {
      stringArray.push(1);

    } else {
      stringArray.push(0);

    }
  }

  console.log(stringArray.join(''));
}


stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"

//number 4 Fibonacci Number Location By Length

function findFibonacciIndexByLength(number) {
  let maxSafeNumber = Number.MAX_SAFE_INTEGER;
  let index = 2;
  let fibonacciArray = [1, 1];

  do {

    fibonacciArray.push(fibonacciArray[fibonacciArray.length - 1]
     + fibonacciArray[fibonacciArray.length - 2]);
    index += 1;
    if (fibonacciArray[fibonacciArray.length - 1] >= maxSafeNumber) {
      return console.log('number too high to computer');
    }
  } while (String(fibonacciArray[fibonacciArray.length - 1]).length < number);


  return console.log(index);
}


findFibonacciIndexByLength(2);       // 7
findFibonacciIndexByLength(10);      // 45
findFibonacciIndexByLength(16);      // 74
findFibonacciIndexByLength(17);      // 74

//number 5 right triangle

function triangle(number) {
  // eslint-disable-next-line no-sequences
  for (let index = (number - 1); index < number, index >= 0; index -= 1) {
    console.log(`${' '.repeat(index)}${'*'.repeat(number - index)}`);
  }
}

triangle(5);

triangle(9);

//number 6 madlibs

function madlibs() {
  let rsync = require('readline-sync');

  let noun = rsync.question('enter a noun: ');
  let verb = rsync.question('enter a verb; ');
  let adjective = rsync.question('enter an adjective: ');
  let adverb = rsync.question('enter an adverb: ');

  console.log(`Do you have fun going to the park with your ${noun}? that is cool!`);
  console.log(`does your ${noun} ${adverb} ${verb}?`);
  console.log(`is your ${noun} ${adjective}? that is so cool. i havn't seen that ever!`);
}

madlibs();

//number 7 double doubles

function twice(number) {
  if (isDouble(number) === true) {
    return console.log(number);
  } else {
    return console.log(number * 2);
  }
}

function isDouble(number) {
  let numberArray = number.toString().split('');
  let length = number.toString().length;
  let halfIndex = ((length / 2));
  let trueOrFalse;

  for (let index = 0; index < halfIndex; index += 1) {
    let number1 = numberArray[index];
    let number2 = numberArray[(length - halfIndex) + index];

    if (number1 === number2) {
      trueOrFalse = true;

    } else {
      trueOrFalse = false;
    }

  }
  return trueOrFalse;
}


twice(37);          // 74
twice(44);          // 44
twice(334433);      // 668866
twice(444);         // 888
twice(107);         // 214
twice(103103);      // 103103
twice(3333);        // 3333
twice(7676);        // 7676

//number 8 grade book

function getGrade(grade1, grade2, grade3) {

  let score = (grade1 + grade2 + grade3) / 3;
  console.log(score);

  if (90 <= score && score <= 100) {
    return console.log("'A'");

  }  else if (80 <= score && score < 90) {
    return console.log("'B'");

  } else if (70 <= score && score < 80) {
    return console.log("'C'");

  } else if (60 <= score && score < 70) {
    return console.log("'D'");

  } else {
    return console.log("'F'");
  }

}

getGrade(95, 90, 93);    // "A"
getGrade(50, 50, 95);    // "D"

//number 9 clean up the words

function cleanUp(string) {
  let cleanText = '';

  for (let index = 0; index < string.length; index += 1) {
    if (isLowerCaseLetter(string[index]) || isUpperCaseLetter(string[index])) {
      cleanText += string[index];
    } else if (cleanText[cleanText.length - 1] !== ' ') {
      cleanText += ' ';
    }
  }

  return console.log(cleanText);
}

function isLowerCaseLetter(letter) {
  return letter >= 'a' && letter <= 'z';
}

function isUpperCaseLetter(letter) {
  return letter >= 'A' && letter <= 'Z';
}


cleanUp("---what's my +*& line?");    // " what s my line "

//number 10 what century is that?

function century(year) {
  let century = Math.floor((year - 1) / 100) + 1;
  let centuryArray = (century.toString().split(''));
  let lastDigit = Number(centuryArray[centuryArray.length - 1]);
  let lastTwoDigits = (centuryArray[centuryArray.length - 2]) +
                      (centuryArray[centuryArray.length - 1]);

  if (Number(lastTwoDigits) >= 10 && Number(lastTwoDigits) <= 19) {
    return console.log(century + 'th');
  } else if (lastDigit === 1) {
    return console.log(century + 'st');
  } else if (lastDigit === 2) {
    return console.log(century + 'nd');
  } else if (lastDigit === 3) {
    return console.log(century + 'rd');
  } else {
    return console.log(century + 'th');
  }
}

century(2000);        // "20th"
century(2001);        // "21st"
century(1965);        // "20th"
century(256);         // "3rd"
century(5);           // "1st"
century(10103);       // "102nd"
century(1052);        // "11th"
century(1127);        // "12th"
century(11201);       // "113th"