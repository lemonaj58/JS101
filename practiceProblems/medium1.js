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
  return array.filter(inventory => inventory.id === id);
}
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


function rotateRightmostDigits(number, movedNumber) {
  let stringNumber = number.toString();
  let length = stringNumber.length;
  let firstPart = stringNumber.slice(0, (length - movedNumber));
  let secondPart = stringNumber.slice(length - (movedNumber - 1));
  let lastPart = stringNumber.slice(-movedNumber, (-movedNumber + 1));
  let returnedWord = Number(firstPart + secondPart + lastPart);
  console.log(returnedWord);

}

rotateRightmostDigits(735291, 1);      // 735291
rotateRightmostDigits(735291, 2);      // 735219
rotateRightmostDigits(735291, 3);      // 735912
rotateRightmostDigits(735291, 4);      // 732915
rotateRightmostDigits(735291, 5);      // 752913
rotateRightmostDigits(735291, 6);      // 352917


function maxRotation(number) {
  let stringNumber = number.toString();
  let length = stringNumber.length;
  let startingNumber = stringNumber.slice(1, length) + stringNumber[0];
  let newNumber = '';

  for (let index = 0; index < length; index += 1) {
    newNumber += startingNumber.slice(0, 1);
    startingNumber = startingNumber.slice(2, length) + startingNumber[1];


  }
  return (Number(newNumber));
}

maxRotation(735291);          // 321579
maxRotation(3);               // 3
maxRotation(35);              // 53
maxRotation(105);             // 15 -- the leading zero gets dropped
maxRotation(8703529146);      // 7321609845

//stack machine interpretation

// eslint-disable-next-line max-lines-per-function
function minilang(string) {
  let array = string.split(' ');

  let callbackArray = [];
  let calculation = 0;
  for (let index = 0; index < array.length; index += 1) {
    let word = array[index];

    switch (word) {
      case 'PUSH':
        callbackArray.push(calculation);
        break;
      case 'PRINT':
        console.log(calculation);
        break;
      case 'ADD':
        calculation += callbackArray.pop();
        break;
      case 'SUB':
        calculation -= callbackArray.pop();
        break;
      case 'MULT':
        calculation *= callbackArray.pop();
        break;
      case 'DIV':
        calculation /= callbackArray.pop();
        break;
      case 'POP':
        callbackArray.pop();
        break;
      case 'MOD':
        Math.floor(calculation /= callbackArray.pop());
        break;
    }
  }

}

minilang('PRINT');
// 0

minilang('5 PUSH 3 MULT PRINT');
// 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// 5
// 3
// 8

minilang('5 PUSH POP PRINT');
// 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// 5
// 10
// 4
// 7

minilang('3 PUSH PUSH 7 DIV MULT PRINT');
// 6

minilang('4 PUSH PUSH 7 MOD MULT PRINT');
// 12

minilang('-3 PUSH 5 SUB PRINT');
// 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)
//word to digit
let numbers = {
  one: '1',
  two: '2',
  three: '3',
  four: '4',
  five: '5',
  six: '6',
  seven: '7',
  eight: '8',
  nine: '9',
  zero: '0',
};
function wordToDigit(string) {

  console.log(string.split(' ').map(word => {
    if (Object.keys(numbers).includes(word)) {
      return numbers[word];
    } else {
      return word;
    }
  }).join(' '));
}

wordToDigit('Please call me at five five five one two three four. Thanks.');
// "Please call me at 5 5 5 1 2 3 4. Thanks."

//fibonacci numbers (recursion)

function fibonacci(num) {
  if (num <= 2) {
    return 1;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);

}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));      // 1
console.log(fibonacci(3));      // 2
console.log(fibonacci(4));      // 3
console.log(fibonacci(5));// 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

//fibonacci numbers procedural

function fibonacci2(num) {
  let startingNum = 1;
  let secondNumber = 1;
  let calculation = 0;
  for (let index = 3; index < num; index += 1) {
    calculation = startingNum + secondNumber;
    secondNumber = startingNum;
    startingNum = calculation;

  }
  return startingNum;
}

fibonacci2(20);       // 6765
fibonacci2(50);       // 12586269025
fibonacci2(75);       // 2111485077978050
