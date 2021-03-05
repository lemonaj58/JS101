/* eslint-disable no-redeclare */
// number 1

//number 2 combining arrays

function creatNoDupe(noDupeArray, array) {
  array.forEach(value => {
    if (noDupeArray.indexOf(value) === -1) {
      noDupeArray.push(value);
    }
  });
}

function union(array1, array2) {
  let unionArray = [];
  creatNoDupe(unionArray, array1);
  creatNoDupe(unionArray, array2);
  return unionArray;
}

union([1, 3, 5], [3, 6, 9]);

//Number 3 Halvsies


function determineHalf(array) {
  let half;
  if (array.length % 2 === 0) {
    half = (array.length / 2);
    return half;
  } else {
    half = (array.length / 2) + 1;
    return half;
  }
}

function halvsies(array) {
  let doubleArray = [];
  let splitIndex = determineHalf(array);
  doubleArray.push(array.slice(0, splitIndex));
  doubleArray.push(array.slice(splitIndex));
  return doubleArray;
}

/* number 3 re-done easier way.
function halvsies(array) {
  let splitArray = [];
  let half = Math.ceil(array.length / 2);
  let firstHalf = array.slice(0, half);
  let secondHalf = array.slice(half);
  splitArray.push(firstHalf, secondHalf);
  return splitArray;
}
*/
halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

//Number 4 find the duplicate

function findDup(array) {
  let newArray = [];
  array.forEach(value => {
    if (newArray.indexOf(value) === -1) {
      newArray.push(value);
    } else {
      return value;
    }
  });
}

findDup([1, 5, 3, 1]);

//Number 5combine two lists

function interleave(array1, array2) {
  let combinedArray = [];

  for (let index = 0; index < array1.length; index += 1) {
    combinedArray.push(array1[index], array2[index]);
  }

  return combinedArray;
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

//number 5 number 2

function interleave(array1, array2) {
  let combinedArray = [];
  (array1).forEach((num, index) => {
    let value2 = array2[index];
    combinedArray.push(num, value2);
  });

  console.log(combinedArray);
}

//number 6 multiplicative average

function multiplicateiveAverage(array) {
  let product = 1;
  for (let index = 0; index < array.length; index += 1) {
    product *= array[index];
  }

  return (product / array.length).toFixed(3);
}

multiplicateiveAverage([3, 5]);                   // "7.500"
multiplicateiveAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

//number 7 multiply lists

function multiplyList (array1, array2) {
  let products = [];

  (array1).forEach((value1, index) => {
    let value2 = array2[index];
    products.push(value1 * value2);
  });
  console.log(products);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

//number 8 list of digits

function digitList(number) {
  let stringToArray = String(number).split('');
  let numberArray = [];
  stringToArray.forEach(number => {
    numberArray.push(Number(number));
  });
  return numberArray;
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);

//number 8 mapping

function digitList(number) {
  let stringArray = String(number).split('');
  let stringToNumber = stringArray.map(number => Number(number));
  console.log(stringToNumber);
}

//number 9 how many

function countOccurences(array) {
  let vehicleCount = {};

  array.forEach(vehicle => {
    if (vehicleCount.hasOwnProperty(vehicle)) {
      vehicleCount[vehicle] += 1;
    } else {
      vehicleCount[vehicle] = 1;
    }
  });
  function logVehicles(vehicleCount) {
    for (let vehicles in vehicleCount) {
      return (vehicles + ' => ' + String(vehicleCount[vehicles]));
    }
  }
  logVehicles(vehicleCount);
}

let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

countOccurences(vehicles);

//Number 10 Array everage started out with a for each function.

function average (numbers) {
  let addedNumbers = 0;
  numbers.forEach(number => {
    addedNumbers += number;

  });
  return (Math.floor(addedNumbers / numbers.length));
}
//number 10 reduce method
function average (numbers) {
  let reducer = (accumlated, numbers) => accumlated + numbers;
  console.log(Math.floor(numbers.reduce(reducer) / numbers.length));
}


average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

const MINUTES_PER_HOUR = 60;
const HOURS_PER_DAY = 24;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function leadingZero(number) {
  return number < 10 ? `0${number}` : String(number);
}

function formatTime(hours, minutes) {
  return `${leadingZero(hours)}:${leadingZero(minutes)}`;
}

function timeOfDay(deltaMinutes) {
  if (deltaMinutes < 0) {
    deltaMinutes = (deltaMinutes % MINUTES_PER_DAY) + MINUTES_PER_DAY;
  } else {
    deltaMinutes %= MINUTES_PER_DAY;
  }

  let hours = Math.floor(deltaMinutes / MINUTES_PER_HOUR);
  let minutes = deltaMinutes % MINUTES_PER_HOUR;

  return formatTime(hours, minutes);
}

//number 11 
const HOURS_PER_DAY = 24;
const MINUTES_PER_HOUR = 60;
const MINUTES_PER_DAY = HOURS_PER_DAY * MINUTES_PER_HOUR;

function afterMidnight(timeStr) {
  let [hours, minutes] = timeStr.split(":").map(num => Number(num));
  return ((hours * MINUTES_PER_HOUR) + minutes) % MINUTES_PER_DAY;
}

function beforeMidnight(timeStr) {
  let deltaMinutes = MINUTES_PER_DAY - afterMidnight(timeStr);
  if (deltaMinutes === MINUTES_PER_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}
