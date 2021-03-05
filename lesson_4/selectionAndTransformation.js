//selcetionAndTransformation.js
/*
the selection and transormation both use the basics of looping: a loop,
a counter, a way to retrieve the current value, and a way to exit the
loop. keep these four things in mind. also selection and transformation 
require criteria that dermine the results. selection needs criteria to 
determine which element to select, while transformation used criteria
to determine the transformation.
in th ecample below, we want to select all the 1s from an array of numbers.
youll notice that this is just basic for loop

*/
let numbers = [1, 3, 9, 11, 1, 4, 1];
let ones = [];
for (let counter = 0; counter < number.length; counter ++) {
  let currentNum = numbers[counter]

  if (currentNum === 1) {
    ones.push(currentNum);
  }
}

console.log(ones);

/*
the selection of this code, it the if part of the statment, the rest
of this code is your typical iteration of code.

we can apply these same concepts to transformation. let's loop through an 
array of strings, but with one addition we'll append an s to each string 
in array. we'll use a while loop for this ecample.

*/

let fruits = ['apple', 'banana', 'pear'];
let transformedElements = [];
let counter = 0

while (counter < fruits.length) {
  let currentElement = fruits[counter]

  transformedElements.push(currentElement + 's');
  counter +=1;
}

console.log(transformedElements);

/*
since we're applying the transformation to every element in the array,
we dont need an if condition, but entire line is the transformation 
criterion. not thatm in this ecample, we write the transformed values
to a new array and leave the original array unchanged. when performing a 
transformation, it is always important to pay attentnion to whether the
original collection is mutated or if a new colloection in return.

EXTRACTING TO FUNCTIONS

moth of the time, selection or transforming a collection is a specific
action, e.g., select all the odd numbers or turn all elements into strings.
that naturally lends the specific action being extracted into convenince 
functions

example, 
we want to be able to select all of the vowels ina  given string.
we are going to se String.prototype.incluedes method here to help
*/ 
if ('aeiouAEIOU'.includes(currentChar)) {
  selectedChars += currentChar
}

function selectVowels(str) {
  let selctedChars = '';

  for (let counter = 0; counter < str.length; counter += 1)
  let currentChar = str[counter];

  if ('aeiouAEIOU'.includes(currentChar)) {
    selectedChars += currentChar
    }
  

  return selectedChars;
}

let numbersOfVowels = selctVowels('hellow world').length;
console.log(numberOfVowels);

let produce = {
  apple: 'Fruit', 
  carrot: 'Vegetable',
  pear: 'Fruit',
  broccoli: 'Vegetable'
};

selectFruit(produce); // => {apple: 'Fruit', pear: 'Fruit'}

function selectProduce(produce) {
  let selectedFruits = {}
  let counter = 0
  produceKeys = object.keys(produce)

  while (counter < produceKeys.length) {

    let currentKey = produceKeys[counter];
    let currentValue = produceList[currentKey];
    if (prod[counter] === 'friut') {
      pruduce.currenKey = currentValue;

    }
    counter ++
  }
  return produce
}

function doublNumbers(numbers) {
  let coubledNums = [];
  let counter = 0;

  while (counter < numbers.length) {
    let currentNum = numbers[counter];
    coubleNums.push(currentNum * 2);

    counter +=1;
  }

  return doubledNums
}

function doubleNumbers(numbers) {
  let counter = 0
  while(counter < numbers.length) {
    currentNum = numbers[counter];
    numbers[counter] = (currentNum *2)
    counter ++
  }
  return numbers
}

function doubleOddNumbers(numbers) {
  let doubledNums = [];

  for (let counter = 0; counter < numbers.length; counter += 1) {
    let currentNumber = numbers[counter];

    if (currentNumber % 2 === 1) {
      doubledNums.push(currentNumber * 2);
    } else {
      doubledNums.push(currentNumber);
    }
  }

  return doubledNums;
}

let numberArray = [1, 5, 3, 19, 20];

function doubleNums(array) {
  let counter = 0
  let doubleNumbers = []
  let currentNumber = numbers[counter]
  while (counter < array.length) {
    
    if (counter % 2 === 1) {
      doubleNumber.push(currentNumber * 2);
    } else {
      doubleNumbers.push(currentNumber);
    } counter ++
  }
  return doubleNumbers
}
  
  