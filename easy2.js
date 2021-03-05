//Easy 2

//number 1. Welcome stranger
let job = {"title": '' ,
           "occupation": '' };
let name = ['', '']

function logInformation(job, name) {
    job[occupation] = readline.sync.question('What is your occupation?');
    job.title = readline.question('Whats the title you have there?');
    let names = readline.question('What is your name?');
    name = names.split(' ');
    console.log(`hello, ${name}! Nice to have a ${job.title} ${job.occuption} around. `)
}
logInformation()

//numver 2. Greeting user

let readline = require('readline-sync')
let name2 = readline.question('What is your name?');


  if (name[name.length - 1] === '!' ) {
      name = name.slice(0, -1);
      console.log(`HELLO ${name.toUpperCase()}. WHAY ARE WE SCREAMING?`)

  } else {
      console.log(`hello ${name}`)
    }

//number 3. multiplying two numbers

function multiply(number1, number2) {
    return number1 * number2;
  }
  console.log(multiply(3, 5) === 15)

  //number 4. square

  function square(num) {
      return numb * num;
  }

  // number 5. arithmetic integer

  let rsynce = require('readline-sync');

  let number1 = Number(rsynce.question('Enter the first number'));
  let number2 = Number(rsynce.question('Enter second number'));
  console.log(`${number1} + ${number2} = ${(number1 + number2)}`)
  console.log(`${number1} - ${number2} = ${(number1 - number2)}`)
  console.log(`${number1} * ${number2} = ${(number1 * number2)}`)
  console.log(`${number1} / ${number2} = ${(number1 / number2)}`)
  console.log(`${number1} % ${number2} = ${(number1 % number2)}`)
  console.log(`${number1} ** ${number2} = ${(number1 ** number2)}`)
  
  //number 6 the ned is near but not here

  function penultimate(string) {
      let stringArray = string.split(' ');
      return stringArray[(stringArray.length - 2)];
  }

//number 7. exclusive or

function xor(value1, value2){
    if ((value1 && value2) || (value2 && value1)) {
      return true;
    } else {
      return false;
    }
  }
  
  //number 8. Odd list


  function oddities(array) {
    let array2 = []
    for(index = 0; index < array.length; index += 2) { 
            array2.push(array[index])
        } return array2 
  }

  // number 9. convert a string to a Number!

  function stringToInteger(string) {
    const DIGITS = {
      0: 0,
      1: 1,
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9
    };
    let arrayOfDigits = string.split("").map(char => DIGITS[char]);
    let value = 0;
    arrayOfDigits.forEach(digit => (value = (10 * value) + digit));
    return value;
  }

  // number 10 convert a string to a signed number

  function stringToSignedInteger(string) {
    switch (string[0]) {
      case "-":
        return -stringToInteger(string.slice(1, string.length));
      case "+":
        return stringToInteger(string.slice(1, string.length));
      default:
        return stringToInteger(string);
    }
  }

// number 11 /12 convert nmber to a string

const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function integerToString(number) {
  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case -1:
      return `-${integerToString(-number)}`;
    case +1:
      return `+${integerToString(number)}`;
    default:
      return integerToString(number);
  }
}

