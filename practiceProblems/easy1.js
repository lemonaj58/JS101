// number 1 isnt it odd?

function isOdd(number) {
  return Math.abs(number) % 2 === 1;
}

console.log(isOdd(2)); // => false
console.log(isOdd(5)); // => true
console.log(isOdd(-17)); // => true
console.log(isOdd(-8)); // => false
console.log(isOdd(0)); // => false
console.log(isOdd(7)); // => true

//number 2 Odd Numbers

function oddNumbers() {
  for (let index = 1; index < 100; index += 2) {
    console.log(index);
  }
}

oddNumbers();
//part 2 a different way
function oddNumbers2(oddNumber) {
  let start = [1];
  let counter = 1;

  do  {
    start.push(Number(start[counter - 1]) + 2);
    counter += 1;
  }

  while (counter < oddNumber);

  start.forEach(element => {
    console.log(element);
  });


}

oddNumbers2(18);

//number 3 even numbers

function evenNumbers() {
  for (let index = 1; index < 100; index += 1) {
    if (index % 2 === 0) {
      console.log(index);
    } else {
      continue;
    }
  }
}

evenNumbers();

// number 4 how big is the room?

function roomSizeCalc() {
  const rsync = require('readline-sync');

  let length = Number(rsync.question('enter the length of the room in meters: '));
  let width = Number(rsync.question('enter the width of the room in meters: '));
  let feetOrMeters = rsync.question('Do you want the area in feet, or meters? ').toLowerCase();
  let areaInMeters = (length * width);
  let areaInFeet = ((length * width) * 10.7639);

  while (feetOrMeters !== 'feet' && feetOrMeters !== 'meters') {
    feetOrMeters = rsync.question('please enter feet or meters ').toLowerCase();
  }
  if (feetOrMeters === 'feet') {
    console.log(`The area of the room is ${areaInFeet.toFixed(2)} feet.`);
  } else {
    console.log(`The area of the room is ${areaInMeters.toFixed(2)} meters.`);

  }

}

roomSizeCalc();

//number 5 tip calculator

function tipCalc() {
  const rsync = require('readline-sync');

  let bill = Number(rsync.question('What is the bill amount? '));
  let tipPercent = Number(rsync.question('What is the tip percentage? please eneter 15% as 15. '));

  let tipAmount = (bill * (tipPercent / 100));
  let totalBill = bill + tipAmount;

  console.log(`Your tip amount is $${tipAmount}`);
  console.log(`Your total bill is $${totalBill}`);
}

tipCalc();


//number 6 Sum or product of a consecutive integers
function sumOrProduct() {
  const rsync = require('readline-sync');

  let number = Number(rsync.question('please enter a number greater than 0: '));

  let pickProductOrSum = rsync.question('Enter "s" if you want the sum, or "p" if you want the product ').toLowerCase();
  while (pickProductOrSum !== 'p' && pickProductOrSum !== 's') {
    pickProductOrSum = rsync.question('please pick "p" or "s"');
  }

  calculate(pickProductOrSum, number);
}
function calculate(pickProductOrSum, number) {
  let calculation = 0;
  let index = 1;
  if (pickProductOrSum === 's') {

    while (index <= number) {
      calculation += index;
      index += 1;
    }
    console.log(`The sum of the integers between 1 and ${number} is ${calculation}.`);

  } else {
    calculation = 1;
    while (index <= number) {
      calculation *= index;
      index += 1;
    }

    console.log(`The prodct of the integers between 1 and ${number} is ${calculation}.`);

  }
}


sumOrProduct();

//part 2
function sumOrProduct2() {
  const rsync = require('readline-sync');

  let array = (rsync.question('please enter a number greater than 0: ')).split(', ');

  let pickProductOrSum = rsync.question('Enter "s" if you want the sum, or "p" if you want the product ').toLowerCase();
  while (pickProductOrSum !== 'p' && pickProductOrSum !== 's') {
    pickProductOrSum = rsync.question('please pick "p" or "s"');
  }

  calculate2(pickProductOrSum, array);
}
function calculate2(pickProductOrSum, array) {
  if (pickProductOrSum === 's') {

    let calculation = array.reduce((total, amount) =>
      Number(total) + Number(amount));
    console.log(`The sum of the integers between 1 and ${array} is ${calculation}.`);

  } else {

    let calculation = array.reduce((total, amount) =>
      Number(total) * Number(amount));

    console.log(`The sum of the integers between 1 and ${array} is ${calculation}.`);
  }
}


sumOrProduct2();

// number 7

function shortLongShort(string1, string2) {
  if (string1.length < string2.length) {
    console.log(string2 + string1 + string2);
  } else {
    console.log(string1 + string2 + string1);
  }
}

shortLongShort('abc', 'defgh');    // "abcdefghabc"
shortLongShort('abcde', 'fgh');    // "fghabcdefgh"
shortLongShort('', 'xyz');         // "xyz"

//number 8 is leap year

function isLeapYear(year) {
  if (year % 4 === 0 && year % 100 !== 0 ) {
    console.log(true);
  } else if (year % 400 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}


isLeapYear(2016);      // true
isLeapYear(2015);      // false
isLeapYear(2100);      // false
isLeapYear(2400);      // true
isLeapYear(240000);    // true
isLeapYear(240001);    // false
isLeapYear(2000);      // true
isLeapYear(1900);      // false
isLeapYear(1752);      // true
isLeapYear(1700);      // false
isLeapYear(1);         // false
isLeapYear(100);       // false
isLeapYear(400);       // true


//number 9 leap years (part 2)

function isLeapYear2(year) {

  if (year < 1752) {
    julianCalendar(year);
  } else if (year % 4 === 0 && year % 100 !== 0 ) {
    console.log(true);
  } else if (year % 400 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}

function julianCalendar(year) {
  if (year % 4 === 0) {
    console.log(true);
  } else {
    console.log(false);
  }
}


isLeapYear2(2016);      // true
isLeapYear2(2015);      // false
isLeapYear2(2100);      // false
isLeapYear2(2400);      // true
isLeapYear2(240000);    // true
isLeapYear2(240001);    // false
isLeapYear2(2000);      // true
isLeapYear2(1900);      // false
isLeapYear2(1752);      // true
isLeapYear2(1700);      // true
isLeapYear2(1);         // false
isLeapYear2(100);       // true
isLeapYear2(400);       // true2

// number 10 multiple of 3 and 5

function multisum(number) {
  let calculate = 0;

  for (let counter = 1; counter <= number; counter += 1) {
    if (counter % 3 === 0) {
      calculate += counter;
    } else if ( counter % 5 === 0) {
      calculate += counter;
    } else {
      continue;
    }
  }
  console.log(calculate);
}

multisum(3);       // 3
multisum(5);       // 8
multisum(10);      // 33
multisum(1000);    // 234168

//number 12 ascii string value

function asciiValue(string) {
  let stringArray = string.split('');
  let asciiTotal = 0;

  stringArray.forEach(value => {
    asciiTotal += value.charCodeAt();

  });
  console.log(asciiTotal);
}

asciiValue('Four score');         // 984
asciiValue('Launch School');      // 1251
asciiValue('a');                  // 97
asciiValue('');                   // 0