// Number 1. is odd

function isOdd(number) {
    if (Number(number) % 2 === 1) {
      console.log(true);
  
    }else {
      console.log(false);
    }
  }
  
  isOdd(1);
  isOdd(2);

  // Numver 2. Odd Numbers

  for (index = 1; index < 100; index += 2) {
    console.log(index);
  }

  
  // Number 3. even Numbers
  for (let index = 1; index < 100; index +=1) {
      if (index % 2 === 1){
      continue;
      }
      console.log(index);
  }

  //Number 4. How big is the room
  const rsync = require('readline-sync');
  function prompt(message){
      console.log(`-- ${message}`);
  }
  
  function calculateAreaMeters(length, width){
    let area = Number(length) * Number(width);
    return area;
  }
  
  function calculateAreaFeet(length, width){
    let areaFeet = Number(width * 10.7636) * Number(length * 10.7639);
    Math.round(areaFeet);
    return areaFeet
  }
  
  prompt('What is the length of your room in meters?');
  let length = rsync.question();
  
  prompt('What is the width of your room in meters?');
  let width = rsync.question();
  
  let area = calculateAreaMeters(length, width);
  let areaFeet = calculateAreaFeet(length,width);
  
  prompt(`The area of the room is ${area.toFixed(2)} squar meters (${areaFeet.toFixed(2)} square feet).`);

  //Number 5. Tip Calculator

  const rsync = require('readline-sync');

  function prompt(message) {
      console.log(`==> ${message}`);
  }

  prompt('What is the bill amount');
  
  let bill = rsync.question();
  parseInt(bill, 1);
  
  prompt('What is the tip percentage?');
  let tipPercentage = rsync.question();
  parseInt(tipPercentage, 1)
  
  tipAmount = (bill * (tipPercentage /100));

  let total = ((Number(bill)) + Number(tipAmount));

  prompt(`The tip is $${tipAmount.toFixed(2)}`);
  prompt(`The total is $${total.toFixed(2)}`);

  //Number 6. Sum or product of consecutive integers

  const rsync = require('readline-sync');
  let total = 0
  let integer = parseInt(rsync.question('please eneter an integer greater that 0:'))
  
  let productOrSum = rsync.question('Enter "S" to computer the sum, or "P" to computer the product').toUpperCase()
  
  if (productOrSum === 'S'){
      for (index = 1; index <= interger; index += 1){
      total += index;
      return total;
      }
      console.log(`The sum of the integers between 1 and ${integer} is ${total}`)
      
  }
  if(productOrSum === 'P'){
      for (index = 1; index <= integer; index += 1){
          total *= index;
          return total;
      }
      console.log(`the product of the integers between 1 and ${integer} is ${total}`)
  }

// Number 7. short long short

function shortLongShort(string1, string2) {
    if (string1.length > string2.length) {
        console.log(string2 + string1 + string2);
    } else {
        console.log(string1 + string2 + string1)
    }
  }
  

  // Number 8 leap years (part 1)

  function isLeapYear(year) {
    parseInt(year);
    if (year % 4 === 0 && year % 200 === 0) {
      console.log(true);
    } else if (year % 4 === 0 && year % 100 !== 0) {
    console.log(true)
    } else {
      console.log(false);
    }
  }

// Number 9 Leap Years (part 2)

function isLeapYear(year) {
  parseInt(year);
  if (year % 4 === 0 && year % 200 === 0) {
    console.log(true);
  } else if (year % 4 === 0 && year % 100 !== 0) {
  console.log(true)
  } else if (year <= 1752 && year % 4 === 0) {
    console.log(true)
  } else {
    console.log(false);
  }
}

// Number 10. multiples of 3 and 5

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}

//ascii_String_Value.js

//Number 11
function asciiValue(string) {
  let total = 0
  for (index = 0; index < string.length; index =+ 1){
    string.charCodeAt(index) + total;

  } console.log(total) 
}

