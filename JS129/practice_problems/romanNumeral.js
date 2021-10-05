const values = {
  M: 1000,
  D: 500,
  C: 100,
  L: 50,
  X: 10,
  V: 5,
  I: 1,
};

function romanNumerals(string) {
  let numberValues = giveValues(string.split(''));
  console.log(numberValues);
  let counter = 0;
  let otherCounter = 0;
  let maxIndex = numberValues.length - 1;
  numberValues.forEach((number, index) => {
    console.log()
    if (index === 0) counter += number;
    if (number > numberValues[index - 1]) {
      counter = number - otherCounter;
      otherCounter = 0;
    } else if (index === maxIndex) {
      counter += otherCounter + number;
    } else {
      counter += number;
      otherCounter += number;
    }

  });

  return counter;
}

function giveValues(array) {
  return array.map(number => values[number]);
}

console.log(romanNumerals('MD'));
console.log(romanNumerals('MDC'));
console.log(romanNumerals('MDCL'));

