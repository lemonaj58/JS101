//number 1 cute angles plus frther explanation.
function dms(degree) {
  if (degree > 360) {
    while (degree > 360) {
      degree -= 360;
    }
  } else if (degree < 0) {
    while (degree < 0) {
      degree += 360;
    }
  }

  const DEGREE = '\xB0';
  const MINUTE_PER_DEGREE = 60;
  let degrees = getDegrees(degree);
  let calculateDegree = (degree - degrees).toFixed(5);
  let minute = Math.floor(getMinute(calculateDegree, MINUTE_PER_DEGREE));
  let seconds = Math.floor(getSeconds(calculateDegree, minute));


  return console.log(addPrefixes(degrees, minute, seconds, DEGREE));

}

function addPrefixes(degrees, minute, seconds, DEGREE) {
  if (minute < 10) {
    minute = '0' + minute;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  return (String(degrees) + DEGREE + minute + "'" + seconds + '"');
}

function getSeconds(calculateDegree, minute) {
  return (calculateDegree * 60 * 60) - (minute * 60);
}

function getMinute(calculateDegree, MINUTE_PER_DEGREE) {
  return Math.floor(MINUTE_PER_DEGREE * calculateDegree);
}

function getDegrees(degree) {
  return Math.floor(degree);
}

dms(30);           // 30°00'00"
dms(76.73);        // 76°43'48"
dms(254.6);        // 254°35'59"
dms(93.034773);    // 93°02'05"
dms(0);            // 0°00'00"
dms(360);          // 360°00'00" or 0°00'00"

dms(-1);   // 359°00'00"
dms(400);  // 40°00'00"
dms(-40);  // 320°00'00"
dms(-420); // 300°00'00"

//number 2 combining Arrays

function union(array1, array2) {
  let unionArray = [];
  array1.forEach(element => {
    unionArray.push(element);
  });
  array2.forEach(element => {
    if (unionArray.includes(element) === false) {
      unionArray.push(element);
    }
  });


  return console.log(unionArray);
}


union([1, 3, 5], [3, 6, 9]);    // [1, 3, 5, 6, 9]

//number 3 halvsies

function halvsies(array) {

  let half = Math.ceil(array.length / 2);
  let newArray2 = array.slice(half);
  let newArray = array.slice(0, half);
  return console.log([newArray, newArray2]);
}

halvsies([1, 2, 3, 4]);       // [[1, 2], [3, 4]]
halvsies([1, 5, 2, 4, 3]);    // [[1, 5, 2], [4, 3]]
halvsies([5]);                // [[5], []]
halvsies([]);                 // [[], []]

//number 4 find the duplicate

function findDup(array) {
  let dupArray = [];
  // eslint-disable-next-line consistent-return
  array.forEach(element => {
    if (dupArray.indexOf(element) === -1) {
      dupArray.push(element);
    } else {
      return console.log(element);
    }
  });
}

findDup([1, 5, 3, 1]);                                // 1
findDup([18,  9, 36, 96, 31, 19, 54, 75, 42, 15,
  38, 25, 97, 92, 46, 69, 91, 59, 53, 27,
  14, 61, 90, 81,  8, 63, 95, 99, 30, 65,
  78, 76, 48, 16, 93, 77, 52, 49, 37, 29,
  89, 10, 84,  1, 47, 68, 12, 33, 86, 60,
  41, 44, 83, 35, 94, 73, 98,  3, 64, 82,
  55, 79, 80, 21, 39, 72, 13, 50,  6, 70,
  85, 87, 51, 17, 66, 20, 28, 26,  2, 22,
  40, 23, 71, 62, 73, 32, 43, 24,  4, 56,
  7, 34, 57, 74, 45, 11, 88, 67,  5, 58]);    // 73

// number 5 combine two lists

function interleave(array1, array2) {
  let interleaveArray = [];
  for (let index = 0; index < array1.length; index += 1) {
    interleaveArray.push(array1[index]);
    interleaveArray.push(array2[index]);
  }
  return console.log(interleaveArray);
}

interleave([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

// further exploration forEach

function interleave2(array1, array2) {
  let interleaveArray = [];
  array1.forEach(element => {
    let element2 = array2[array1.indexOf(element)];
    interleaveArray.push(element, element2);
  });


  return console.log(interleaveArray);
}

interleave2([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

//mapping interleave

function interleave3(array1, array2) {
  let interLeaveArray = [];
  array1.map((currentValue, index)  => {
    let currentValue2 = array2[index];
    interLeaveArray.push(currentValue, currentValue2);
    return interLeaveArray;
  });
  return console.log(interLeaveArray);

}

interleave3([1, 2, 3], ['a', 'b', 'c']);    // [1, "a", 2, "b", 3, "c"]

//number 6 multiplicative average

function multiplicativeAverage(array) {
  let total = 1;
  array.forEach(number => {
    total *= number;
    return total;
  });
  return console.log((total / array.length).toFixed(3));
}

multiplicativeAverage([3, 5]);                   // "7.500"
multiplicativeAverage([2, 5, 7, 11, 13, 17]);    // "28361.667"

// usuing reduce

function multiplicativeAverage2(array) {
  let total = 1;
  total = array.reduce((number, total) => (total *= number));
  return console.log((total / array.length).toFixed(3));
}

multiplicativeAverage2([3, 5]);                   // "7.500"
multiplicativeAverage2([2, 5, 7, 11, 13, 17]);    // "28361.667"

//number 7 multiply list

function multiplyList(array1, array2) {
  let multipliedArray = [];

  for (let index = 0; index < array1.length; index += 1) {
    multipliedArray.push(array1[index] * array2[index]);
  }
  return console.log(multipliedArray);
}

multiplyList([3, 5, 7], [9, 10, 11]);    // [27, 50, 77]

//number 8 list of digits

function digitList(number) {
  let stringArray = (String(number).split(''));
  let numberArray = [];
  stringArray.forEach(element => {
    numberArray.push(Number(element));
  });
  return console.log(numberArray);
}

digitList(12345);       // [1, 2, 3, 4, 5]
digitList(7);           // [7]
digitList(375290);      // [3, 7, 5, 2, 9, 0]
digitList(444);         // [4, 4, 4]

//mapping list of digits

function digitList2(number) {

  return console.log((String(number).split('')).map((element) => (Number(element))));

}


digitList2(12345);       // [1, 2, 3, 4, 5]
digitList2(7);           // [7]
digitList2(375290);      // [3, 7, 5, 2, 9, 0]
digitList2(444);         // [4, 4, 4]

//number 9 how many
let vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];


function countOccurences(array) {

  let occurences = {};

  array.forEach(element => {
    if (occurences.hasOwnProperty(element)) {
      occurences.element += 1;
    } else {
      occurences[element] = 1;
    }
  });
  function logOccurrences(occurrences) {
    for (let item in occurrences) {
      console.log(item + ' => ' + String(occurrences[item]));
    }
  }
  logOccurrences(occurences);
}

countOccurences(vehicles);

//number 10 array average

function average(array) {
  return console.log((array.reduce((currentValue, accumulator) =>
    accumulator + currentValue) / array.length).toFixed());
}

average([1, 5, 87, 45, 8, 8]);       // 25
average([9, 47, 23, 95, 16, 52]);    // 40

//number 11 After Midnight

function timeOfDay(number) {

  const HOURS_IN_DAY = 24;
  const MINUTES_IN_HOUR = 60;
  const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;


  let minutes = makeHourAndMinute(
    getMintes(number, MINUTES_IN_DAY, MINUTES_IN_HOUR));
  let hour = makeHourAndMinute(getHours(number, HOURS_IN_DAY, MINUTES_IN_HOUR));
  let time = (hour + ':' + minutes);
  return time;
}

function makeHourAndMinute(hourOrMinutes) {
  hourOrMinutes = String(hourOrMinutes);

  if (hourOrMinutes.length < 2) {
    hourOrMinutes = '0' + String(hourOrMinutes);
  }
  return hourOrMinutes;

}

function getMintes(number, MINUTES_IN_DAY, MINUTES_IN_HOUR) {
  let minutes;
  if (number < 0) {
    minutes = ((number % MINUTES_IN_DAY) + MINUTES_IN_DAY) % MINUTES_IN_HOUR;
  } else {
    minutes = number % MINUTES_IN_HOUR;
  }

  return minutes;
}
function getHours(number, HOURS_IN_DAY, MINUTES_IN_HOUR) {
  let hour = Math.floor(number / MINUTES_IN_HOUR);

  if (hour > HOURS_IN_DAY) {
    while (hour > HOURS_IN_DAY) {
      hour -= HOURS_IN_DAY;
    }
  } else if (hour < 0) {
    while (hour < 0) {
      hour += HOURS_IN_DAY;
    }
  }
  return hour;
}

console.log(timeOfDay(0) === "00:00");
console.log(timeOfDay(-3) === "23:57");
console.log(timeOfDay(35) === "00:35");
console.log(timeOfDay(-1437) === "00:03");
console.log(timeOfDay(3000) === "02:00");
console.log(timeOfDay(800) === "13:20");
console.log(timeOfDay(-4231) === "01:29");

//number 12 after midnight part 2

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const MINUTES_IN_DAY = HOURS_IN_DAY * MINUTES_IN_HOUR;

function afterMidnight(time) {
  let [hours, minutes] = time.split(":").map(num => Number(num));
  return ((hours * MINUTES_IN_HOUR) + minutes) % MINUTES_IN_DAY;
}

function beforeMidnight(time) {
  let deltaMinutes = MINUTES_IN_DAY - afterMidnight(time);
  if (deltaMinutes === MINUTES_IN_DAY) {
    deltaMinutes = 0;
  }
  return deltaMinutes;
}

console.log(afterMidnight("00:00") === 0);
console.log(beforeMidnight("00:00") === 0);
console.log(afterMidnight("12:34") === 754);
console.log(beforeMidnight("12:34") === 686);
console.log(afterMidnight("24:00") === 0);
console.log(beforeMidnight("24:00") === 0);